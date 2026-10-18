export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-line bg-surface-2">
      <div className="container-page py-16 md:py-20">
        {eyebrow && (
          <p className="text-sm font-medium text-brand">{eyebrow}</p>
        )}
        <h1 className="font-display mt-3 text-4xl md:text-5xl font-semibold text-ink max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[17px] leading-7 text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
