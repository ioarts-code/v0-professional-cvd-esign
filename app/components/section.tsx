import type React from "react"
interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-6 sm:mb-8 last:mb-0">
      <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 pb-2 border-b-2 border-black uppercase tracking-wide font-black">
        {title}
      </h2>
      {children}
    </section>
  )
}
