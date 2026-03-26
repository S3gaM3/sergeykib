export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "var(--page-background)",
      }}
    >
      <div
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          border: "2px solid var(--neutral-alpha-medium)",
          borderTopColor: "var(--brand-on-background-strong)",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
