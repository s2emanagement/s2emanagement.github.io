import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "keen-slider/keen-slider.min.css"

const portfolioItems = [
  {
    title: "Regional Awareness Campaign – Healthy Beverage",
    image: "/images/campaign1.jpg"
    description: `Drove regional engagement for a healthy coconut water brand through a Ramadan Bukber activation campaign.

• Industry: Beverage (Coconut Water)
• KOLs: 38 Nano Influencers (Lifestyle, Health & F&B niche)
• Campaign Type: Event-based (Ramadan Bukber)
• Audience: Young Millennials
• Avg Reach per KOL: ~5K
• Total Estimated Reach: 195K+
• Avg Engagement Rate: ~2%

Visual assets are intentionally blurred for confidentiality.
Full case study available upon request.`,
  },
  {
    title: "Family-Centric Campaign – Children’s Nutrition",
    image: "/images/campaign2.jpg"
    description: `Promoted limited-time discount for a children’s milk drink through relatable mom-focused content.

• Industry: Children’s FMCG
• KOLs: 1 Micro & 7 Mid-Tier Creators (Mom & Kids niche)
• Campaign Type: Promo Awareness (Discount Activation)
• Audience: Millennial Parents
• Avg Reach per KOL: ~101K
• Total Estimated Reach: 711K+
• Avg Engagement Rate: ~2%

Visual assets are intentionally blurred for confidentiality.
Full case study available upon request.`,
  },
  {
    title: "Niche Health Awareness – Functional Milk Drink",
    image: "/images/campaign3.jpg"
    description: `Boosted awareness of a cholesterol-lowering drink via niche creator storytelling and personal testimonials.

• Industry: Health & Wellness (Functional Beverage)
• KOLs: 3 Micro Influencers (F&B niche)
• Campaign Type: Product Awareness (Health Benefit Focused)
• Audience: Gen Z & Young Millennials
• Avg Reach per KOL: ~1K
• Total Estimated Reach: 4K+
• Avg Engagement Rate: ~2%

Visual assets are intentionally blurred for confidentiality.
Full case study available upon request.`,
  },
]

const Portfolio = () => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.3,
      spacing: 15,
      origin: "center",
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      startAutoPlay(slider)
    },
  })

  const startAutoPlay = (slider: any) => {
    clearTimeout(timer.current!)
    timer.current = setTimeout(() => {
      slider.next()
    }, 3500)
  }

  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return

    const interval = setInterval(() => {
      slider.next()
    }, 3500)

    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section
      id="portfolio"
      className="py-20 bg-brand text-[#333] px-4 md:px-10 relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-secondary">
        Our Portfolio
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`keen-slider__slide transition-transform duration-500 ease-in-out transform scale-95 hover:scale-100 ${
                index === currentSlide ? "opacity-100" : "opacity-60"
              }`}
            >
              <div className="rounded-xl overflow-hidden shadow-lg border border-secondary bg-white w-[90%] mx-auto">
                <img
                  src={item.image}
                  alt={`Campaign ${index + 1}`}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-6 text-left whitespace-pre-line text-sm leading-relaxed">
                  <h3 className="text-lg font-semibold mb-2 text-secondary">
                    {item.title}
                  </h3>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-secondary transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-secondary transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  )
}

export default Portfolio;