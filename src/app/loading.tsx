export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--tk-paper)]">
      <div
        className="size-8 animate-spin rounded-full border-2 border-[var(--tk-border)] border-t-[var(--tk-accent)] motion-reduce:animate-none"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
