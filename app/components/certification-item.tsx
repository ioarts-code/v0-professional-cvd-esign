interface CertificationItemProps {
  title: string
  issuer: string
  year?: string
}

export function CertificationItem({ title, issuer, year }: CertificationItemProps) {
  return (
    <div className="flex items-start gap-2 sm:gap-3 py-2">
      <div className="w-2 h-2 bg-black rounded-full mt-2 shrink-0"></div>
      <div className="flex-1">
        <h4 className="text-sm sm:text-base text-black">{title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs sm:text-sm text-gray-600">{issuer}</p>
          {year && (
            <>
              <span className="text-gray-400">•</span>
              <p className="text-xs sm:text-sm text-gray-600">{year}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
