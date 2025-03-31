import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Server,
  GitBranch,
  Database,
  Cloud,
  Terminal,
  Globe,
  Check,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-[#EBF2FA] backdrop-blur supports-[backdrop-filter]:bg-[#EBF2FA]/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="font-bold">Rodrigo Riveros-Vanegas</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#expertise" className="text-sm font-medium hover:text-primary">
              Expertise
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>EN</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/fr" className="flex w-full pl-6">
                    Français
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Terminal className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                CTO - DevOps & Software Architect
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Colombian Systems Engineer with over 12 years of experience in Microsoft .NET technologies, BPM systems, and e-commerce platforms.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#experience">
                    View Experience <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-square overflow-hidden rounded-full border-8 border-muted lg:order-last">
              <Image
                src="/profile.jpg"
                alt="Rodrigo Riveros-Vanegas"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a Colombian Systems Engineer with over 12 years of experience in Microsoft .NET technologies, BPM systems, and e-commerce platforms. My passion for computers and software began early, and recently I have specialized in developing cloud-based web applications on Azure and implementing agile methodologies.
                </p>
                <p className="text-lg">
                  In my latest role as a DevOps Architect, I've been responsible for optimizing infrastructure and deployment processes. I also have strong database development skills, including expertise in MSSQL and Oracle. I'm a self-driven professional focused on delivering high-performance, user-friendly software solutions.
                </p>
                <p className="text-lg">
                  Recently, I teamed up with my neighbors to launch marketing.express, a local business marketing tool that operates on autopilot. A proud father and husband, I relocated to Montreal in 2014.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>SAFe® 6 DevOps Practitioner - Scaled Agile Inc (2024)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Azure Developer Associate - Microsoft (2020)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Azure Fundamentals - Microsoft (2020)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Professional Scrum Master - Scrum.org (2020)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Areas of Expertise
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Azure Stack</CardTitle>
                  <CardDescription>
                    Cloud services and infrastructure on Azure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Functions</Badge>
                    <Badge>Web Apps</Badge>
                    <Badge>Storage</Badge>
                    <Badge>Service Bus</Badge>
                    <Badge>Azure SQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <GitBranch className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>DevOps</CardTitle>
                  <CardDescription>
                    Modern development and operations practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Containerized .NET</Badge>
                    <Badge>Agile</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>.NET Development</CardTitle>
                  <CardDescription>Full-stack .NET development expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C#</Badge>
                    <Badge>.NET Core</Badge>
                    <Badge>MVC</Badge>
                    <Badge>WebAPI</Badge>
                    <Badge>Web Forms</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Database</CardTitle>
                  <CardDescription>Database development and management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MSSQL</Badge>
                    <Badge>Oracle</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>Transact SQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Server className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>Frontend and web technologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>jQuery</Badge>
                    <Badge>Bootstrap</Badge>
                    <Badge>CSS</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Employment History
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Marketing Express</CardTitle>
                  <CardDescription>Montreal, Canada</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Leading the technical direction and development of a local business marketing tool that operates on autopilot.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">CTO & Co-founder</Badge>
                    <Badge variant="outline">2024-Present</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Fujitsu Consulting Canada</CardTitle>
                  <CardDescription>Montreal, Canada</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Leading DevOps initiatives and software architecture for enterprise clients, optimizing infrastructure and deployment processes.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">DevOps & Software Architect</Badge>
                    <Badge variant="outline">2022-Present</Badge>
                    <Badge variant="outline">Senior .NET Consultant</Badge>
                    <Badge variant="outline">2016-2022</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Prometour Educational Tours</CardTitle>
                  <CardDescription>Montreal, Canada</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Developed and maintained web applications and systems for educational tour management.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Web Developer</Badge>
                    <Badge variant="outline">Systems Analyst</Badge>
                    <Badge variant="outline">2014-2016</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Banco de Bogota</CardTitle>
                  <CardDescription>Bogota, Colombia</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Developed and implemented BPM solutions for banking operations and customer service processes.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">BPM Developer</Badge>
                    <Badge variant="outline">2008-2013</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Almacenes Corona</CardTitle>
                  <CardDescription>Bogota, Colombia</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Developed software solutions for retail operations and inventory management.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Software Developer</Badge>
                    <Badge variant="outline">2007-2008</Badge>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Get in Touch
            </h2>
            <div className="mx-auto max-w-[600px] space-y-8">
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="https://ca.linkedin.com/in/RodMTL" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="mailto:rodrigoriveros99@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
              </div>
              <p className="text-center text-muted-foreground">
                Send me an email if you'd like a copy of my up-to-date CV in French or English.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by Rodrigo Riveros-Vanegas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

