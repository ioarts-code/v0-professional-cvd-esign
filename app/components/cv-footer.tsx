import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react"

interface CVFooterProps {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  website: string
}

export function CVFooter({ name, title, email, phone, location, linkedin, github, website }: CVFooterProps) {
  return (
    <div className="text-white px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-8 bg-white border-t-2 border-gray-200">
      <div className="flex-1 w-full">
        

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative border-black pt-2.5 pb-2.5 rounded-lg mt-3 sm:mt-2 px-3 sm:px-5 border-2 sm:justify-around border-none">
          <a href={`mailto:${email}`} className="transition-colors group relative" aria-label="E-post">
            <Mail className="w-5 h-5 hover:text-rose-300 transition-colors duration-300 text-black" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              E-post
            </span>
          </a>
          <a href={`tel:${phone}`} className="transition-colors group relative" aria-label="Tele">
            <Phone className="w-5 h-5 hover:text-rose-300 transition-colors duration-300 text-black" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Tele
            </span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors group relative"
            aria-label="Adress"
          >
            <MapPin className="w-5 h-5 hover:text-rose-300 transition-colors duration-300 text-black" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Adress
            </span>
          </a>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors group relative"
              aria-label="Linken"
            >
              <Linkedin className="w-5 h-5 hover:text-rose-300 transition-colors duration-300 text-black" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Linken
              </span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors group relative"
              aria-label="Github"
            >
              <Github className="w-5 h-5 hover:text-rose-300 transition-colors duration-300 text-black" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Github
              </span>
            </a>
          )}
          {website && (
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors group relative"
              aria-label="Hemsida"
            >
              <Globe className="w-5 h-5 hover:text-rose-300 transition-colors duration-300 text-black" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Hemsida
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
