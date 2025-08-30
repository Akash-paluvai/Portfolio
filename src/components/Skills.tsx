import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Database, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML & Data Science",
      skills: [
        { name: "Python" },
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "Scikit-learn" },
        { name: "Computer Vision" },
        { name: "NLP" },
        { name: "CNNs" },
        { name: "Transformers" },
        { name: "LLMs" },
        { name: "RAG" },
        { name: "Agentic AI" }
      ]
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      skills: [
        { name: "TypeScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Next.js" },
        { name: "Express" },
        { name: "GraphQL" },
        { name: "MongoDB" },
        { name: "SQL" }
      ]
    },
    {
      icon: Database,
      title: "Data & Infrastructure",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "AWS" },
        { name: "Docker" },
        { name: "Kubernetes" }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        { name: "Git" },
        { name: "Linux" },
        { name: "Jupyter" },
        { name: "Figma" },
        { name: "Postman" },
        { name: "VS Code" }
      ]
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Technical Skills</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical</span> Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and modern DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills