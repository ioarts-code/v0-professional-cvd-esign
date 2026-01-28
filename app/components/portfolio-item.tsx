import { ExternalLink } from "lucide-react"

interface PortfolioItemProps {
  title: string
  description: string
  tech: "hygraph" | "sanity" | "contentful" | "wordpress" | "webflow"
  url: string
}

export function PortfolioItem({ title, description, tech, url }: PortfolioItemProps) {
  const content = (
    <div className="group relative bg-black border border-gray-700 rounded-lg p-4 sm:p-6 hover:shadow-xl hover:border-rose-300 hover:bg-rose-300 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>

      <div className="pr-8 sm:pr-6">
        <h3 className="text-white group-hover:text-black transition-colors font-black text-3xl sm:text-4xl lg:text-6xl mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 group-hover:text-black mt-1 leading-relaxed transition-colors">
          {description}
        </p>
      </div>
    </div>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}
