import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import aiMlProject from "@/assets/project-ai-ml.jpg"
import fullstackProject from "@/assets/project-fullstack.jpg"
import mobileProject from "@/assets/project-mobile.jpg"

const Projects = () => {
  const projects = [
    {
      title: "EduTech: Domain-Specific GPT",
      description: "Built a lightweight domain-specific GPT model trained on NCERT Biology textbooks to provide subject-wise explanations, summaries, and quizzes. Implemented retrieval-augmented generation (RAG) using FAISS for semantic search, Hugging Face Transformers for fine-tuning, and integrated with Ollama + LangChain for efficient local deployment. Designed the pipeline to run entirely on free and open-source tools.",
      image: aiMlProject,
      tags: ["Ollama", "LangChain", "FAISS", "Transformers", "PyTorch"],
      metrics: ["RAG Pipeline", "Local Deployment", "Open Source"],
      category: "AI/ML",
      github: "https://github.com/Akash-paluvai/EduTec.git",
      demo: "#"
    },
    {
      title: "Motion Metrics App",
      description: "Developed a cross-platform mobile application for real-time device monitoring and health data management using Flutter with Clean Architecture (Domain–Data–Presentation layers). The app integrates secure authentication, live device status tracking, and visualization of critical machine/health metrics.",
      image: fullstackProject,
      tags: ["Dart", "MySQL", "InfluxDB", "REST API", "JWT Authentication"],
      metrics: ["Clean Architecture", "Real-time Monitoring", "Cross-platform"],
      category: "Mobile",
      github: "https://github.com/Akash-paluvai/vibration_monitoring_app.git",
      demo: "#"
    },
    {
      title: "Solace Tracker",
      description: "Designed and implemented a J.A.R.V.I.S-inspired Coming Soon Page as part of my futuristic mental health companion app.",
      image: mobileProject,
      tags: ["React (Vite + TypeScript)", "React Router", "TailwindCSS", "Framer Motion", "Sentiment Analysis", "MongoDB", "Mediapipe"],
      metrics: ["J.A.R.V.I.S UI", "Mental Health", "Coming Soon"],
      category: "Web App",
      github: "https://github.com/Akash-paluvai/solace-streak-tracker.git",
      demo: "https://solace-streak-tracker.vercel.app"
    }
  ]

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Featured Projects</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building <span className="gradient-text">Intelligent</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate technical depth, product thinking, and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-neural group overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0 space-y-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-muted/50 rounded-lg p-2">
                      <p className="text-xs font-medium text-primary">{metric}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" ? (
                    <Button variant="neural" size="sm" className="flex-1 group/btn" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="neural" size="sm" className="flex-1 group/btn" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects