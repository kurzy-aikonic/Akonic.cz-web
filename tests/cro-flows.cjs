const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const { JSDOM } = require("jsdom");
const { buildSync } = require("esbuild");
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "aikonic-cro-"));
for (const name of [
  "Contact",
  "cro/LeadLink",
  "cro/SubsidyCTA",
  "SavingsCalculator",
]) {
  buildSync({
    entryPoints: [`components/${name}.tsx`],
    bundle: true,
    platform: "node",
    format: "cjs",
    jsx: "automatic",
    packages: "external",
    outfile: path.join(temp, name.replaceAll("/", "-") + ".cjs"),
  });
}
const dom = new JSDOM('<div id="root"></div>', { url: "https://aikonic.cz/" });
Object.assign(global, {
  window: dom.window,
  document: dom.window.document,
  CustomEvent: dom.window.CustomEvent,
  FormData: dom.window.FormData,
  HTMLElement: dom.window.HTMLElement,
  IS_REACT_ACT_ENVIRONMENT: true,
});
window.matchMedia = () => ({ matches: true });
window.HTMLElement.prototype.scrollIntoView = function () {};
global.requestAnimationFrame = (fn) => {
  fn();
  return 1;
};
const React = require("react");
const { act } = React;
const { createRoot } = require("react-dom/client");
const Module = require("node:module");
const load = (name) => {
  const file = path.join(temp, name + ".cjs");
  const m = new Module(file, module);
  m.filename = file;
  m.paths = module.paths;
  m._compile(fs.readFileSync(file, "utf8"), file);
  return m.exports;
};
const { Contact } = load("Contact");
const { LeadLink } = load("cro-LeadLink");
const { SubsidyCTA } = load("cro-SubsidyCTA");
const { SavingsCalculator } = load("SavingsCalculator");
const root = createRoot(document.getElementById("root"));
const click = async (el) => {
  assert.ok(el);
  await act(async () => el.click());
};
const button = (text) =>
  [...document.querySelectorAll("button")].find(
    (el) => el.textContent === text,
  );
const values = {
  company: "TEST Company",
  name: "Test User",
  email: "test@example.invalid",
};
const fill = () => {
  for (const [name, value] of Object.entries(values))
    document.querySelector(`[name="${name}"]`).value = value;
};
(async () => {
  await act(async () =>
    root.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          LeadLink,
          { interest: "AI audit", section: "test" },
          "Audit CTA",
        ),
        React.createElement(SubsidyCTA),
        React.createElement(SavingsCalculator),
        React.createElement(Contact),
      ),
    ),
  );
  await click(
    [...document.querySelectorAll("a")].find((a) =>
      a.textContent.includes("Audit CTA"),
    ),
  );
  assert.equal(
    document.querySelector('input[name="interest-choice"]:checked').value,
    "AI audit",
  );
  assert.equal(window.dataLayer, undefined, "no tracking without consent");
  window.localStorage.setItem(
    "aikonic-cookie-preferences",
    JSON.stringify({
      v: 1,
      necessary: true,
      analytics: true,
      updatedAt: new Date().toISOString(),
    }),
  );
  await click(
    [...document.querySelectorAll("button")].find(
      (b) => b.textContent === "Pokračovat →" && b.closest("form"),
    ),
  );
  assert.ok(
    document.querySelector("form").checkValidity() === false,
    "required fields enforced",
  );
  fill();
  assert.ok(document.querySelector("form").checkValidity());
  let attempts = 0;
  let payload;
  global.fetch = async (url, options) => {
    attempts++;
    payload = options.body;
    assert.ok(url.startsWith("https://formspree.io/f/"));
    return { ok: false };
  };
  await act(async () =>
    document
      .querySelector("form")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
  assert.ok(document.querySelector('[role="alert"]'));
  assert.equal(document.querySelector('[name="email"]').value, values.email);
  global.fetch = async (url, options) => {
    attempts++;
    payload = options.body;
    return { ok: true };
  };
  await act(async () =>
    document
      .querySelector("form")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
  assert.ok(
    document.querySelector('[role="status"]').textContent.includes("Díky."),
  );
  assert.equal(payload.get("interest"), "AI audit");
  assert.equal(attempts, 2);
  await click(button("Prověřit možnosti pro naši firmu"));
  await click(button("Pokračovat →"));
  await click(button("Kam vám můžeme poslat návrh?"));
  assert.ok(
    document.querySelector("form").textContent.includes("1–15 lidí · Nevíme"),
  );
  fill();
  await act(async () =>
    document
      .querySelector("form")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
  assert.equal(payload.get("participants"), "1–15");
  assert.equal(payload.get("interest"), "Dotované vzdělávání");
  assert.ok(window.dataLayer.some((e) => e.event === "lead_form_submitted"));
  assert.ok(
    !JSON.stringify(window.dataLayer).includes(values.email),
    "no PII in events",
  );
  assert.ok(
    document.getElementById("kalkulacka").textContent.includes("960 h"),
  );
  await act(async () => root.unmount());
  console.log(
    "PASS: preselection, consent, required fields, Formspree payload, error retention, success state, subsidy handoff, no PII, calculator defaults. Network mocked; no lead sent.",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
