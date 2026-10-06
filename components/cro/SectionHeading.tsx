export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="cro-eyebrow">{eyebrow}</p>
      <h2 className="cro-heading">{title}</h2>
      {children && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}
