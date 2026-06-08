export default function Logo({ className, size = 32 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2"  y="2"  width="12" height="12" rx="3" fill="#0b3954" />
      <rect x="18" y="2"  width="12" height="12" rx="3" fill="#114a6e" />
      <rect x="2"  y="18" width="12" height="12" rx="3" fill="#114a6e" />
      <rect x="18" y="18" width="12" height="12" rx="3" fill="#00a8e8" />
      <circle cx="16" cy="16" r="3.4" fill="#ffffff" />
      <circle cx="16" cy="16" r="1.7" fill="#0b3954" />
    </svg>
  );
}
