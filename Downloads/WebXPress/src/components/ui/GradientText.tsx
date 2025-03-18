export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#3739a8] to-[#5171f3] text-transparent bg-clip-text">
      {children}
    </span>
  )
}