import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Award } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "TechVision AI",
      location: "San Francisco, CA",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      achievements: [
        "Developed computer vision models achieving 92% accuracy for medical image analysis",
        "Optimized ML pipeline reducing inference time by 40% using TensorRT",
        "Collaborated with cross-functional team of 8 engineers on production deployment"
      ],
      technologies: ["Python", "PyTorch", "CUDA", "Docker", "AWS"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "Jan 2023 - May 2023",
      type: "Contract",
      achievements: [
        "Built end-to-end web application serving 10K+ daily active users",
        "Implemented real-time features using WebSocket connections and Redis",
        "Led frontend architecture decisions and mentored junior developers"
      ],
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis"]
    },
    {
      title: "Research Assistant",
      company: "Stanford AI Lab",
      location: "Stanford, CA",
      period: "Sep 2022 - Dec 2023",
      type: "Research",
      achievements: [
        "Published research on neural architecture search with 50+ citations",
        "Developed novel optimization algorithms improving training efficiency by 25%",
        "Presented findings at top-tier conferences including NeurIPS"
      ],
      technologies: ["Python", "JAX", "Weights & Biases", "Jupyter", "LaTeX"]
    }
  ]

  const education = {
    degree: "Bachelor of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2020 - 2024",
    gpa: "3.8/4.0",
    highlights: [
      "Concentration in Artificial Intelligence",
      "Dean's List for 6 consecutive quarters",
      "President of AI/ML Student Society (2023-2024)"
    ],
    relevantCourses: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision", 
      "Natural Language Processing",
      "Database Systems",
      "Software Engineering"
    ]
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Experience & Education</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience, cutting-edge research, and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">{education.degree}</CardTitle>
                <p className="text-primary font-semibold">{education.school}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {education.period}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="font-semibold">GPA: {education.gpa}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Highlights</h4>
                  <ul className="space-y-1">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-1">
                    {education.relevantCourses.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience