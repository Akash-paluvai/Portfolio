import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import heroPortrait from "@/assets/hero-portrait.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-bg pointer-events-none" />
      
      {/* Content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Akash Paluvai</span>
                <br />
                <span className="text-foreground">AI Engineer</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transforming ideas into intelligent solutions through cutting-edge AI/ML, 
                full-stack development, and innovative product engineering.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <Button variant="ghost" size="icon" className="hover:scale-110" asChild>
                  <a href="https://linkedin.com/in/akash-paluvai-25994a28a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:scale-110" asChild>
                  <a href="https://github.com/Akash-paluvai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:scale-110" asChild>
                  <a href="mailto:2023too20227@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl" asChild>
                <a href="https://drive.google.com/file/d/1PfmR_EPY0DFgU-kHtT9MqDSNYyMvx7S2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View My Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero