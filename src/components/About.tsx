import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Rocket, Users } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep learning, neural networks, and intelligent system design"
    },
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description: "End-to-end development from concept to production deployment"
    },
    {
      icon: Rocket,
      title: "Product Innovation",
      description: "Turning complex technical challenges into elegant user experiences"
    },
    {
      icon: Users,
      title: "Collaborative Leader",
      description: "Cross-functional team leadership and agile development practices"
    }
  ]

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">About Me</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building the <span className="gradient-text">Future</span> of Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recent Computer Science graduate with a passion for artificial intelligence and 
            full-stack development. I combine technical depth with product thinking to create 
            solutions that matter.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-neural group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed About */}
        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout my academic journey and hands-on projects, I've developed expertise in 
                  machine learning algorithms, deep neural networks, and modern web technologies. 
                  My approach combines rigorous technical execution with user-centered design thinking.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm particularly passionate about applying AI/ML to solve real-world problems, 
                  whether that's building recommendation systems, developing computer vision applications, 
                  or creating intelligent automation solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                
                <div>
                  <h4 className="font-semibold mb-3">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Startups", "Open Source", "Hiking", "Photography"].map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About