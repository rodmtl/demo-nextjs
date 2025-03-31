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
          <Link href="/fr" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="font-bold">Rodrigo Riveros-Vanegas</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/fr#about" className="text-sm font-medium hover:text-primary">
              À propos
            </Link>
            <Link href="/fr#expertise" className="text-sm font-medium hover:text-primary">
              Expertise
            </Link>
            <Link href="/fr#experience" className="text-sm font-medium hover:text-primary">
              Expérience
            </Link>
            <Link href="/fr#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>FR</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/" className="flex w-full pl-6">
                    English
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Français</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="/fr#contact">Me Contacter</Link>
            </Button>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Terminal className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Architecte DevOps & Logiciel
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Informaticien colombien avec plus de 12 ans d'expérience dans les technologies Microsoft .NET, les systèmes BPM et les plateformes e-commerce.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/fr#experience">
                    Voir l'Expérience <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/fr#contact">Me Contacter</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-square overflow-hidden rounded-full border-8 border-muted lg:order-last">
              <Image
                src="/images/profile.jpg"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">À Propos de Moi</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg">
                  Je suis un Informaticien colombien avec plus de 12 ans d'expérience dans les technologies Microsoft .NET, les systèmes BPM et les plateformes e-commerce. Ma passion pour l'informatique et les logiciels a commencé tôt, et récemment je me suis spécialisé dans le développement d'applications web basées sur le cloud Azure et l'implémentation de méthodologies agiles.
                </p>
                <p className="text-lg">
                  Dans mon dernier rôle d'Architecte DevOps, j'ai été responsable de l'optimisation de l'infrastructure et des processus de déploiement. Je possède également de solides compétences en développement de bases de données, notamment une expertise en MSSQL et Oracle. Je suis un professionnel autonome axé sur la livraison de solutions logicielles performantes et conviviales.
                </p>
                <p className="text-lg">
                  Récemment, je me suis associé à mes voisins pour lancer <Link href="https://marketing.express/" target="_blank" className="text-primary hover:underline">marketing.express</Link>, un outil de marketing pour les entreprises locales qui fonctionne en mode automatique. Père et mari fier, j'ai déménagé à Montréal en 2014.
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
              Domaines d'Expertise
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Stack Azure</CardTitle>
                  <CardDescription>
                    Services cloud et infrastructure sur Azure
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
                    Pratiques modernes de développement et d'opérations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>.NET Conteneurisé</Badge>
                    <Badge>Agile</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Développement .NET</CardTitle>
                  <CardDescription>Expertise en développement .NET full-stack</CardDescription>
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
                  <CardTitle>Base de Données</CardTitle>
                  <CardDescription>Développement et gestion de bases de données</CardDescription>
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
                  <CardTitle>Développement Web</CardTitle>
                  <CardDescription>Technologies frontend et web</CardDescription>
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
              Expérience Professionnelle
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle><Link href="https://marketing.express/" target="_blank" className="text-primary hover:underline">Marketing Express</Link></CardTitle>
                  <CardDescription>Montréal, Canada</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Direction technique et développement d'un outil de marketing pour les entreprises locales fonctionnant en mode automatique.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">DSI & Co-fondateur</Badge>
                    <Badge variant="outline">2024-Présent</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Fujitsu Consulting Canada</CardTitle>
                  <CardDescription>Montréal, Canada</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Direction des initiatives DevOps et architecture logicielle pour les clients d'entreprise, optimisation de l'infrastructure et des processus de déploiement.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Architecte DevOps & Logiciel</Badge>
                    <Badge variant="outline">2022-Présent</Badge>
                    <Badge variant="outline">Consultant .NET Senior</Badge>
                    <Badge variant="outline">2016-2022</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Prometour Educational Tours</CardTitle>
                  <CardDescription>Montréal, Canada</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Développement et maintenance d'applications web et de systèmes pour la gestion de voyages éducatifs.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Développeur Web</Badge>
                    <Badge variant="outline">Analyste Système</Badge>
                    <Badge variant="outline">2014-2016</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Banco de Bogota</CardTitle>
                  <CardDescription>Bogota, Colombie</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Développement et implémentation de solutions BPM pour les opérations bancaires et les processus de service client.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Développeur BPM</Badge>
                    <Badge variant="outline">2008-2013</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Almacenes Corona</CardTitle>
                  <CardDescription>Bogota, Colombie</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Développement de solutions logicielles pour les opérations de vente au détail et la gestion des stocks.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Développeur Logiciel</Badge>
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
              Me Contacter
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
                Envoyez-moi un email si vous souhaitez une copie de mon CV à jour en français ou en anglais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Créé par Rodrigo Riveros-Vanegas. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

