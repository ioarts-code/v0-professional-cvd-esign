interface ExperienceItemProps {
  title: string
  period: string
  company: string
  responsibilities: string[]
}

export function ExperienceItem({ title, period, company, responsibilities }: ExperienceItemProps) {
  return (
    <div className="border-l-4 border-black py-3 hover:bg-gray-50 transition-colors duration-200 border-none pl-0.5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl text-black mb-1 tracking-tight font-bold">{title}</h3>
          <p className="text-xs sm:text-sm font-medium text-black">{company}</p>
        </div>
        <span className="text-xs sm:text-sm whitespace-nowrap sm:ml-4 text-black font-sans">{period}</span>
      </div>
      <ul className="space-y-1.5 mt-3">
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="text-xs sm:text-sm flex items-start gap-2 text-black">
            <span className="text-black font-bold shrink-0">-</span>
            <span className="leading-relaxed">{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
