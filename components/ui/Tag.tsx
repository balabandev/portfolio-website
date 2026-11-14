import clsx from "clsx";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-sm border border-line bg-surface px-2 py-1 font-mono text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}