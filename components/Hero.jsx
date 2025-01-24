import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { RiArrowDownSLine } from "react-icons/ri"
import Social from "./Social"

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[84vh] bg-hero bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24">
        <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 lg:gap-12 overflow-hidden">
          {/* Left Content */}
          <div className="flex flex-col justify-center w-full lg:w-[50%] xl:w-[55%] max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">
            {/* Category text */}
            <div className="text-[10px] sm:text-[11px] md:text-[12px] uppercase font-semibold mb-4 text-primary tracking-[4px] transition-all duration-300">
              Web Development | Analytics | Go-To-Market
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-300">
              Passion driven
              <span className="text-primary"> excellence.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-[590px] mx-auto lg:mx-0 transition-all duration-300">
              Our expertise spans diverse industries, integrating modern tech skills with deep business insights to
              redefine the future of your business. <br className="hidden sm:block" />
              <span className="text-primary font-bold">vabank.dev</span> is not another software development company. We
              are your true digital partner maximizing your value.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Link href="/contact">
                <Button className="w-full sm:w-auto transition-all duration-300">
                  Contact us <Send size={18} className="ml-3" />
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="transition-all duration-300">
              <Social
                containerStyles="flex gap-x-6 justify-center lg:justify-start"
                iconsStyles="text-foreground text-[22px] hover:text-primary/80 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Content - Code Display */}
          <div className="hidden lg:flex lg:flex-col relative lg:w-[45%] xl:w-[40%] min-h-[600px]">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] aspect-square bg-contain bg-no-repeat absolute top-1/2 -translate-y-1/2 right-0 lg:-right-8 xl:-right-8">
              <div className="absolute top-1/2 -translate-y-1/2 right-[20%] lg:right-[25%] xl:right-[30%] mockup-code bg-black/80 transition-all duration-300">
                <pre data-prefix="$">
                  <code>Hi there</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>Let's get in touch</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>and redefine your</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code className="text-red-500">Business</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>Now!</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Bounce Arrow */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 transition-all duration-300">
          <RiArrowDownSLine className="text-3xl text-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
export default Hero

