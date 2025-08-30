import { Button } from "@/components/ui/enhanced-button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 bg-gradient-card">
      <div className="container px-4 mx-auto py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Akash Paluvai</h3>
            <p className="text-muted-foreground text-sm">
              AI Engineer building the future of technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:scale-110" asChild>
              <a href="https://github.com/Akash-paluvai" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110" asChild>
              <a href="https://linkedin.com/in/akash-paluvai-25994a28a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110" asChild>
              <a href="mailto:2023too20227@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Built with <Heart className="h-4 w-4 text-red-500" /> by Akash Paluvai
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer