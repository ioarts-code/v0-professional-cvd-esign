interface SkillsGridProps {
  skills: {
    technical: string[]
    cms: string[]
    tools: string[]
    hosting: string[]
    languages: string[]
  }
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{"Webbutveckling Grund"}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill, idx) => (
            <span key={idx} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded text-white font-black bg-slate-500">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">CMS</h3>
        <div className="flex flex-wrap gap-2">
          {skills.cms.map((skill, idx) => (
            <span key={idx} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded text-white font-black bg-slate-400">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{"Verktyg"}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.tools.map((skill, idx) => (
            <span key={idx} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded text-white font-black bg-gray-500">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Hosting</h3>
        <div className="flex flex-wrap gap-2">
          {skills.hosting.map((skill, idx) => (
            <span key={idx} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded text-white font-black bg-slate-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Språk</h3>
        <div className="flex flex-wrap gap-2">
          {skills.languages.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded text-white font-black bg-neutral-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
