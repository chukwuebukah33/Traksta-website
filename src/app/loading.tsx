export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#080E1A]">
      <div
        className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
