import { siteConfig } from "@/lib/siteConfig";

export default function MapEmbed({ height = 380 }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery
  )}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-3xl border border-line" style={{ height }}>
      <iframe
        title={`Map to ${siteConfig.clinicName}`}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
