"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { CVHeader } from "./components/cv-header"
import { CVFooter } from "./components/cv-footer"
import { Section } from "./components/section"
import { ExperienceItem } from "./components/experience-item"
import { SkillsGrid } from "./components/skills-grid"
import { PortfolioItem } from "./components/portfolio-item"
import { CertificationItem } from "./components/certification-item"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experiences = [
    {
      title: "Aktivitet Kaggeholm",
      period: "12/2023 - 06/2025",
      company: "Kaggeholms slott Ekerö",
      responsibilities: ["Städning", "Röjning", "Lövblås", "Reparationer"],
    },
    {
      title: "IT Support Specialist",
      period: "2019 - 09/2020",
      company: "Hybrida-IT Kungens Kurva",
      responsibilities: ["Support via telefon", "Support hos kund", "Övervakning drift"],
    },
    {
      title: "Lagerspecialist",
      period: "09/2016 - 02/2019",
      company: "Liontech",
      responsibilities: ["Lager och plock", "Logistikhantering", "Administrativt arbete", "Elektronikservice"],
    },
    {
      title: "IT Support Specialist",
      period: "2009 - 2012",
      company: "IT-Hantverkarna Kungens Kurva",
      responsibilities: ["Support via telefon", "Support hos kund", "Övervakning drift", "Elektronikservice"],
    },
  ]

  const portfolio = [
    {
      title: "Wordpress",
      description: "Woocommerce, Elementor. Från scratch med endast gratis-plugins",
      tech: "wordpress" as const,
      url: "https://ioarts.se",
    },
    {
      title: "Next.js Sanity",
      description: "Gjord med V0. Har hämtat designen från ovan med Figma",
      tech: "sanity" as const,
      url: "https://v0-mittsanity2.vercel.app",
    },
    {
      title: "Sanity Dashboard",
      description: "Till min Sanity, gjord i V0. Read only",
      tech: "sanity" as const,
      url: "https://v0-sanity-dashboard.vercel.app",
    },
    {
      title: "Next.js Contentful",
      description: "Gjord med V0 från scratch med Contentful som CMS",
      tech: "contentful" as const,
      url: "https://v0-mittcontentful.vercel.app",
    },
    {
      title: "Next.js Hygraph",
      description: "Moddat tema för Shopify i V0. Hygraph som CMS",
      tech: "hygraph" as const,
      url: "https://v0-hygraphioarts2v0.vercel.app",
    },
    {
      title: "Webflow",
      description: "Webflow: En showcase för mina motiv",
      tech: "webflow" as const,
      url: "https://ioartseu.webflow.io",
    },
    {
      title: "Tilde",
      description: "Tilde: En Youtube-playlist app med sparfunktion",
      tech: "webflow" as const,
      url: "https://v0-v0-tilde-youappmain.vercel.app",
    },
  ]

  const skills = {
    technical: ["JavaScript", "React", "Next.js", "Node.js", "TypeScript", "HTML/CSS", "Astro"],
    cms: ["Hygraph", "Sanity", "Contentful", "WordPress", "RestApi", "GROQ", "GraphQL"],
    tools: ["Github", "VS Code", "Figma", "Webflow", "V0", "Wordpress", "Copilot", "Bolt.new"],
    hosting: ["WP-Engine", "Godaddy", "Namecheap", "Hostinger", "Simply", "Vercel", "Netlify"],
    languages: ["Svenska", "Engelska"],
  }

  const certifications = [
    {
      title: "Mimo Web Development",
      issuer: "Mimo",
      year: "2022",
    },
    {
      title: "MS-900 365 Fundamentals",
      issuer: "Lexicon IT-Utbildning",
      year: "2021",
    },
    {
      title: "ITIL - Bästa praxis för IT-tjänstehantering",
      issuer: "Lexicon IT-Utbildning",
      year: "2021",
    },
    {
      title: "Utbildningsbevis Truck A2A3A4B1B2B3",
      issuer: "BT Svenska AB",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="max-w-full sm:max-w-[90%] lg:max-w-[21cm] mx-auto bg-white shadow-2xl">
        <CVHeader
          name="Anders Altmann"
          title="IT Support Specialist & Web Developer"
          email="brevduva999@proton.me"
          phone="0702312173"
          location="Loviselundsvägen 27, 16559 Hässelby, Sweden"
          linkedin="https://www.linkedin.com/in/anders-altmann-6071781a0/"
          github="https://github.com/ioarts-code"
          website="ioarts.ink"
        />

        <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8 bg-white">
          <Section title="Min Historik">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Personligt</h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Hej. Jag heter Anders och trivs med att hjälpa folk och tycker om att lösa problem. Tycker det är självklart viktigt att alltid göra sitt bästa och att komma i tid. Jag kan jobba självständigt men även i grupp och är alltid villig att lära mig nyare och bättre sätt att lösa uppgiften på. Har inga fysiska förhinder. Är på fritiden intresserad av motivlackering-spel/film/musik samt åka på hundträning/tävling med min särbo/sambo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Senaste aktivitet</h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Har gjort en hel del på Kaggeholm som ligger ute på Ekerö. Exempel på detta är att göra rent
                  padelbanor med lövblås, plockat sopor och tömma papperskorgar. Det har även varit en del byte av
                  utrustning som byte av lampor och liknande. Vi har även krattat gångar och tagit bort ogräs samt
                  bistått vid röjning av grenar från nedsågade träd. Jag trivdes väldigt bra. Känner inga krämpor i rygg
                  eller andra delar som kan försvåra fysikt arbete.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Webbutveckling</h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Har intresse för Webbutveckling sedan ca 10 år tillbaka. Har ganska mycket erfarenhet av Wordpress med
                  Elementor, Woocommerce. Gjorde en sida åt Content Talarbyrån för 8 år sedan då jag jobbade med just
                  Wordpress. Idag alternerar jag mellan verktygen
                  Webflow-Wordpress-Next.js-Astro-Figma-Locofy-V0-Bolt.new-Copilot och som CMS har jag använt Hygraph,
                  Contentful, Sanity och Wordpress RestAPI. Sidorna i min portfolio är gjorda i dessa verktyg och med
                  mitt hobby-project Ioarts som exempel. Jag har sett att Umbraco verkar vara vanligt. Har kikat lite på
                  det och kan tänka mig att lära mig det vid en eventuell praktik. Är bekant med flertalet
                  hostinglösningar som Vercel, Netlify, Godaddy, Wp-Engine, Simply, Hostinger och jag använder Github
                  samt VScode såklart även om det blir mest V0 nu.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Grafisk Design</h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Som ni ser på mina motiv från hemsidan har jag även ett visst intresse för grafisk design. Kan inte
                  avgöra om det finns möjlighet att arbeta med sådant men jag nämner det här ändå. Har skapat olika
                  motiv med relativt enkla medel och alla motiv är tolkningar från spel mestadels.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">IT-Support</h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Har jobbat som tekniker på Generic (On site) IT-hantverkarna, IBM (Support) Dessutom har jag en
                  utbildning genom Lexicon som heter Microsoft 365 samt ITIL certifiering. Jag kan jobba självständigt
                  men även i grupp. Har jobbat med telefonsupport och hanterat kunder på ABB tidigare så jag vet hur man
                  pratar med folk och kan hantera kunder under en nivå av stress.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Lagerarbete</h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Har även jobbat på lager i Eskilstuna (Stiga) och i Spånga som ni ser i mitt CV. Har Truckkort. (Se
                  Intyg) Jag kan jobba självständigt men även i grupp.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Erfarenhet">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  title={exp.title}
                  period={exp.period}
                  company={exp.company}
                  responsibilities={exp.responsibilities}
                />
              ))}
            </div>
          </Section>

          <Section title="Portfolio">
            <div className="space-y-3">
              {portfolio.map((project, index) => (
                <PortfolioItem
                  key={index}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  url={project.url}
                />
              ))}
            </div>
          </Section>

          <Section title="Kunskaper">
            <SkillsGrid skills={skills} />
          </Section>

          <Section title="Intyg">
            <div className="space-y-1">
              {certifications.map((cert, index) => (
                <CertificationItem key={index} title={cert.title} issuer={cert.issuer} year={cert.year} />
              ))}
            </div>
          </Section>

          <Section title="Anställningsstöd">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Här kan du läsa vad som gäller för Anställningsstöd/Lönebidrag/Lönestöd
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-rose-300 hover:text-black transition-colors duration-300 w-full sm:w-auto"
              >
                Klicka för info
              </button>
            </div>
          </Section>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white rounded-lg max-w-full sm:max-w-2xl lg:max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-black">Anställningsstöd Information</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-rose-300 transition-colors"
                  aria-label="Stäng"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Om ni tvekar att anställa så finns en möjlighet för er att välja rekryteringsmetod efter erat behov
                  tidsmässigt och ekonomiskt. Ni kan såklart välja en heltid/deltidsanställning enligt det vanliga
                  sättet om ni vill. Ni har även en möjlighet att prova med en praktik på tex 50% efter det behov ni
                  har. Vi kan sedan diskutera om ni tycker det har fungerat bra för alla parter och justera. Ni kommer
                  att ha möjlighet till stöd enligt dom reglerna som gäller. Jag är godkänd för
                  Anställningsstöd/Lönebidrag/Lönestöd vilket namn det blir på aktiviteten är senare mer en formalitet
                  men ni måste då ändå uppfylla vissa krav.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Då jag varit borta från arbetsmarknaden en tid så kommer jag givetvis att behöva komma in i arbetet på
                  ett realistiskt sätt. Heltid är målsättningen här, så beroende på vem du är som läser detta så kanske
                  du som exempel redan valt deltid som utgångspunkt och en provanställning. Då behöver vi inte tänka på
                  praktik eller liknande utan ni gör bara det ni brukar göra. Samma sak gäller såklart vid heltid och
                  provanställning om ni vill det.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Om ni undrar vad detta erbjudande innebär kan ni få mer information från min jobbcoach på IPS
                  (Individanpassat stöd till arbete) som kommer att sköta kontakten med er.
                </p>

                <div className="bg-gray-100 rounded-lg p-3 sm:p-4 space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Kontaktinformation:</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Jobbcoach:</strong> Per Axelsson
                    <br />
                    <strong>E-post:</strong> per.axelsson@stockholm.se
                    <br />
                    <strong>Telefon:</strong> 0761249093
                  </p>
                  <p className="text-gray-700 mt-3 text-sm sm:text-base">
                    <strong>Anders Altmann:</strong>
                    <br />
                    <strong>E-post:</strong> brevduva999@proton.me
                    <br />
                    <strong>Telefon:</strong> 0702312173
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-black text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-rose-300 hover:text-black transition-colors duration-300 w-full text-sm sm:text-base"
                  >
                    Stäng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <CVFooter
          name="Anders Altmann"
          title="IT Support Specialist & Web Developer"
          email="brevduva999@proton.me"
          phone="0702312173"
          location="Loviselundsvägen 27, 16559 Hässelby, Sweden"
          linkedin="https://www.linkedin.com/in/anders-altmann-6071781a0/"
          github="https://github.com/ioarts-code"
          website="ioarts.ink"
        />
      </div>
    </div>
  )
}
