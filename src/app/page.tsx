import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Cloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    frontend: ["JavaScript", "TypeScript", "React.js", "Next.js"],
    backend: ["Express.js", "Nest.js", "Django", "Node.js"],
    devops: ["Docker", "Kubernetes", "Microservices", "CI/CD"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  }

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable e-commerce platform built with microservices architecture using Docker and Kubernetes",
      tech: ["Next.js", "Nest.js", "PostgreSQL", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging and user authentication",
      tech: ["React.js", "Express.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management Dashboard",
      description: "Project management tool with team collaboration features and analytics",
      tech: ["Next.js", "Django", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of microservices architecture, improved system performance by 40%",
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built scalable web applications using React, Node.js, and containerized with Docker",
    },
    {
      title: "Backend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed RESTful APIs and implemented database optimization strategies",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">MUBIN</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/profile.png"
              alt="Profile"
              width={150}
              height={170}
              className="rounded-full mx-auto mb-8 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Full Stack Developer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building scalable web applications with modern technologies and microservices architecture
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link href="https://www.github.com/mubinkg/" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/mubin-ice-ru/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies and cloud infrastructure.
              I specialize in building scalable applications using microservices architecture, containerization with
              Docker, and orchestration with Kubernetes. My experience spans across frontend frameworks like React and
              Next.js, backend technologies including Node.js, Nest.js, and Django, ensuring robust and efficient
              solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">React, Next.js, TypeScript</p>
              </div>
              <div className="text-center">
                <Server className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-muted-foreground">Node.js, Nest.js, Django</p>
              </div>
              <div className="text-center">
                <Cloud className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
                <p className="text-muted-foreground">Docker, Kubernetes, Microservices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="mr-2 h-5 w-5" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cloud className="mr-2 h-5 w-5" />
                    DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link href="mailto:john@example.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://linkedin.com/in/johndeveloper">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} John Developer. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
