function base(props) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

export function ToothIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c-2.2 0-3.5 1.3-4.8 1.3C5.6 4.3 4 5.8 4 8.4c0 2.1.9 3.1 1.2 5.6.3 2.4.8 6 2.3 6 1.3 0 1.2-3.4 2-5.1.4-.9.9-1.3 1.5-1.3s1.1.4 1.5 1.3c.8 1.7.7 5.1 2 5.1 1.5 0 2-3.6 2.3-6C17.1 11.5 18 10.5 18 8.4c0-2.6-1.6-4.1-3.2-4.1C13.5 4.3 12.2 3 12 3z" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function SparkleIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
    </svg>
  );
}

export function AlignIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16M8 12h12M4 18h16" />
    </svg>
  );
}

export function ImplantIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v6M9 5h6M12 9c-2 0-3.5 1.6-3.5 3.5V19a1.5 1.5 0 003 0v-4h1v4a1.5 1.5 0 003 0v-6.5C15.5 10.6 14 9 12 9z" />
    </svg>
  );
}

export function KidIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  );
}

export function ToolIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-2.1 2.1-2-2 2.1-2.1z" />
    </svg>
  );
}

export function BridgeIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 17V9l4-3 5 3 5-3 4 3v8" />
      <path d="M3 17h18M7 17v-4M12 17V9M17 17v-4" />
    </svg>
  );
}

export const ICONS = {
  tooth: ToothIcon,
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  align: AlignIcon,
  implant: ImplantIcon,
  kid: KidIcon,
  tool: ToolIcon,
  bridge: BridgeIcon,
};

export function PhoneIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h3l1.5 4.5L7.5 10a12 12 0 006.5 6.5l1.5-2 4.5 1.5V19a2 2 0 01-2 2C11 21 3 13 3 6a2 2 0 012-2z" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 10-14 0C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.3.62 4.5 1.8 6.44L4 29l7.72-1.75a12.9 12.9 0 004.3.74h.01C22.63 28 28 22.6 28 15.98 28 9.36 22.63 3 16.02 3zm7.1 18.06c-.3.86-1.7 1.63-2.34 1.72-.6.09-1.35.13-2.18-.14-.5-.16-1.14-.37-1.97-.72-3.47-1.5-5.73-5-5.9-5.24-.17-.24-1.4-1.87-1.4-3.56 0-1.7.88-2.53 1.2-2.87.31-.34.68-.43.9-.43.23 0 .46 0 .66.01.21.01.5-.08.78.6.3.7.99 2.4 1.08 2.58.09.17.15.37.03.6-.12.24-.18.38-.36.58-.18.2-.38.45-.54.6-.18.17-.37.36-.16.7.21.35.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.9 1.8.35.18.55.15.76-.09.21-.24.9-1.05 1.14-1.4.24-.36.47-.3.79-.18.32.12 2.02.95 2.37 1.13.35.17.58.26.66.4.09.16.09.86-.2 1.7z" />
    </svg>
  );
}
