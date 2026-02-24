"use client";

import * as React from "react";
import { Folder, FileText, Settings, Layout, type LucideIcon } from "lucide-react";

const HIGH_SCORE_KEY = "herogame_highscore";

const COLS = 8;
const ROWS = 4;
const ENEMY_ICONS: LucideIcon[] = [Folder, FileText, Settings, Layout];
const ENEMY_COLORS = [
  "text-blue-500",
  "text-emerald-500",
  "text-violet-500",
  "text-amber-500",
];
const ENEMY_BG = [
  "bg-blue-50",
  "bg-emerald-50",
  "bg-violet-50",
  "bg-amber-50",
];

const BOARD_W = 280;
const BOARD_H = 320;
const CELL_W = 28;
const CELL_H = 28;
const PLAYER_W = 36;
const PLAYER_H = 24;
const BULLET_W = 4;
const BULLET_H = 10;
const PLAYER_Y = BOARD_H - PLAYER_H - 12;
const PLAYER_SPEED = 5;
const BULLET_SPEED = 7;
const ENEMY_DX = 2;
const ENEMY_DY = 14;
const BASE_FRAMES_PER_STEP = 28;
const MIN_FRAMES_PER_STEP = 8;
const POINTS_PER_KILL = 10;
const BONUS_PER_LEVEL = 50;

function getFramesPerStep(level: number) {
  return Math.max(MIN_FRAMES_PER_STEP, BASE_FRAMES_PER_STEP - level * 2);
}

type Enemy = { x: number; y: number; iconIndex: number; alive: boolean };
type Bullet = { x: number; y: number };

function useGameLoop(callback: () => void, running: boolean) {
  const ref = React.useRef<number | null>(null);
  const cb = React.useRef(callback);
  cb.current = callback;
  React.useEffect(() => {
    if (!running) return;
    const loop = () => {
      cb.current();
      ref.current = requestAnimationFrame(loop);
    };
    ref.current = requestAnimationFrame(loop);
    return () => ref.current != null && cancelAnimationFrame(ref.current);
  }, [running]);
}

function getHighScore(): number {
  if (typeof window === "undefined") return 0;
  try {
    const v = localStorage.getItem(HIGH_SCORE_KEY);
    return v ? Math.max(0, parseInt(v, 10)) : 0;
  } catch {
    return 0;
  }
}

function saveHighScore(score: number) {
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(score));
  } catch {}
}

export function HeroGame() {
  const [phase, setPhase] = React.useState<"start" | "playing" | "won" | "over">("start");
  const [tick, setTick] = React.useState(0);
  const [level, setLevel] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScoreState] = React.useState(0);

  React.useEffect(() => {
    setHighScoreState(getHighScore());
  }, []);

  const playerX = React.useRef(BOARD_W / 2 - PLAYER_W / 2);
  const bullets = React.useRef<Bullet[]>([]);
  const enemies = React.useRef<Enemy[]>([]);
  const enemyDir = React.useRef(1);
  const enemyStep = React.useRef(0);
  const keys = React.useRef<Record<string, boolean>>({});
  const levelRef = React.useRef(1);

  const initEnemies = React.useCallback(() => {
    const list: Enemy[] = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        list.push({
          x: col * (CELL_W + 4) + 10,
          y: row * (CELL_H + 4) + 10,
          iconIndex: row % ENEMY_ICONS.length,
          alive: true,
        });
      }
    }
    enemies.current = list;
  }, []);

  const startGame = React.useCallback(() => {
    playerX.current = BOARD_W / 2 - PLAYER_W / 2;
    bullets.current = [];
    enemyDir.current = 1;
    enemyStep.current = 0;
    setLevel(1);
    setScore(0);
    levelRef.current = 1;
    initEnemies();
    setPhase("playing");
  }, [initEnemies]);

  const goNextLevel = React.useCallback(() => {
    const newLevel = levelRef.current + 1;
    levelRef.current = newLevel;
    setLevel(newLevel);
    setScore((s) => s + BONUS_PER_LEVEL * newLevel);
    playerX.current = BOARD_W / 2 - PLAYER_W / 2;
    bullets.current = [];
    enemyDir.current = 1;
    enemyStep.current = 0;
    initEnemies();
    setPhase("playing");
  }, [initEnemies]);

  useGameLoop(
    React.useCallback(() => {
      if (phase !== "playing") return;

      const framesPerStep = getFramesPerStep(levelRef.current);
      const px = playerX.current;
      if (keys.current["ArrowLeft"])
        playerX.current = Math.max(0, px - PLAYER_SPEED);
      if (keys.current["ArrowRight"])
        playerX.current = Math.min(BOARD_W - PLAYER_W, px + PLAYER_SPEED);

      bullets.current = bullets.current
        .map((b) => ({ ...b, y: b.y - BULLET_SPEED }))
        .filter((b) => b.y > -BULLET_H);

      const list = enemies.current;
      let anyAlive = false;
      let hitEdge = false;
      for (const e of list) {
        if (!e.alive) continue;
        anyAlive = true;
        if (e.y + CELL_H > PLAYER_Y - 8) setPhase("over");
        if (enemyDir.current === 1 && e.x + CELL_W >= BOARD_W - 10) hitEdge = true;
        if (enemyDir.current === -1 && e.x <= 10) hitEdge = true;
      }
      if (!anyAlive) {
        setPhase("won");
        return;
      }

      enemyStep.current += 1;
      if (enemyStep.current >= framesPerStep) {
        enemyStep.current = 0;
        if (hitEdge) {
          enemyDir.current *= -1;
          list.forEach((e) => {
            if (e.alive) e.y += ENEMY_DY;
          });
        } else {
          list.forEach((e) => {
            if (e.alive) e.x += ENEMY_DX * enemyDir.current;
          });
        }
      }

      for (const b of bullets.current) {
        for (const e of list) {
          if (!e.alive) continue;
          if (
            b.x + BULLET_W > e.x &&
            b.x < e.x + CELL_W &&
            b.y < e.y + CELL_H &&
            b.y + BULLET_H > e.y
          ) {
            e.alive = false;
            b.y = -999;
            setScore((s) => {
              const next = s + POINTS_PER_KILL * levelRef.current;
              if (next > getHighScore()) {
                saveHighScore(next);
                setHighScoreState(next);
              }
              return next;
            });
            break;
          }
        }
      }
      bullets.current = bullets.current.filter((b) => b.y > -100);

      setTick((t) => t + 1);
    }, [phase]),
    phase === "playing"
  );

  const shoot = React.useCallback(() => {
    if (phase !== "playing") return;
    const px = playerX.current;
    bullets.current.push({
      x: px + PLAYER_W / 2 - BULLET_W / 2,
      y: PLAYER_Y - BULLET_H,
    });
  }, [phase]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") e.preventDefault();
      keys.current[e.key] = true;
      if (e.key === " " && phase === "playing") {
        e.preventDefault();
        shoot();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [phase, shoot]);

  React.useEffect(() => {
    if ((phase === "over" || phase === "won") && score > getHighScore()) {
      saveHighScore(score);
      setHighScoreState(score);
    } else if (phase === "over" || phase === "won") {
      setHighScoreState(getHighScore());
    }
  }, [phase, score]);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg shadow-slate-200/50 backdrop-blur-sm md:p-5">
      {/* Score & level – minimal, bez názvu hry */}
      <div className="mb-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-500">
        <span>Level {level}</span>
        <span>Skóre: {score}</span>
        <span className="text-primary">Rekord: {highScore}</span>
      </div>

      <div
        className="relative mx-auto overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/90 shadow-inner"
        style={{ width: BOARD_W, height: BOARD_H }}
      >
        {phase === "start" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 rounded-2xl bg-white/90 backdrop-blur-sm">
            <p className="text-center text-sm text-slate-600">
              Šipky = pohyb, mezerník = střelba
            </p>
            <button
              type="button"
              onClick={startGame}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary/90 active:scale-[0.98]"
            >
              Spustit hru
            </button>
          </div>
        )}
        {(phase === "won" || phase === "over") && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 rounded-2xl bg-white/95 backdrop-blur-sm">
            <p className="text-lg font-semibold text-slate-800">
              {phase === "won" ? "Level dokončen!" : "Konec hry"}
            </p>
            <p className="text-sm text-slate-600">
              {phase === "won"
                ? `Skóre: ${score} · Rekord: ${Math.max(score, highScore)}`
                : `Skóre: ${score}`}
            </p>
            <div className="flex gap-3">
              {phase === "won" ? (
                <button
                  type="button"
                  onClick={goNextLevel}
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary/90"
                >
                  Další level
                </button>
              ) : null}
              <button
                type="button"
                onClick={startGame}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                {phase === "won" ? "Začít znovu" : "Hrát znovu"}
              </button>
            </div>
          </div>
        )}
        {phase === "playing" && (
          <>
            {enemies.current.map((e, i) => {
              if (!e.alive) return null;
              const Icon = ENEMY_ICONS[e.iconIndex];
              const color = ENEMY_COLORS[e.iconIndex];
              const bg = ENEMY_BG[e.iconIndex];
              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center rounded-lg border border-slate-200/60 shadow-sm"
                  style={{
                    left: e.x,
                    top: e.y,
                    width: CELL_W,
                    height: CELL_H,
                  }}
                >
                  <span className={`rounded-md ${bg} p-0.5`}>
                    <Icon className={`h-4 w-4 ${color}`} strokeWidth={2} />
                  </span>
                </div>
              );
            })}
            {bullets.current.map((b, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary shadow-sm"
                style={{
                  left: b.x,
                  top: b.y,
                  width: BULLET_W,
                  height: BULLET_H,
                }}
              />
            ))}
            <div
              className="absolute flex items-center justify-center rounded-t-xl bg-primary shadow-md shadow-primary/30"
              style={{
                left: playerX.current,
                top: PLAYER_Y,
                width: PLAYER_W,
                height: PLAYER_H,
              }}
            >
              <span className="text-xs font-bold text-white">▲</span>
            </div>
          </>
        )}
      </div>

      {phase === "playing" && (
        <>
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Vlevo"
              onPointerDown={() => (keys.current["ArrowLeft"] = true)}
              onPointerUp={() => (keys.current["ArrowLeft"] = false)}
              onPointerLeave={() => (keys.current["ArrowLeft"] = false)}
              className="touch-manipulation rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-600 shadow-sm transition active:bg-slate-50"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Střelba"
              onPointerDown={() => shoot()}
              className="touch-manipulation rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 font-medium text-primary shadow-sm transition active:bg-primary/20"
            >
              Střelba
            </button>
            <button
              type="button"
              aria-label="Vpravo"
              onPointerDown={() => (keys.current["ArrowRight"] = true)}
              onPointerUp={() => (keys.current["ArrowRight"] = false)}
              onPointerLeave={() => (keys.current["ArrowRight"] = false)}
              className="touch-manipulation rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-600 shadow-sm transition active:bg-slate-50"
            >
              →
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-400">
            Šipky + mezerník · nebo tlačítka
          </p>
        </>
      )}
    </div>
  );
}
