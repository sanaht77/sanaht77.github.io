export default function ArrowIcon({ direction = "diagonal" }) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
