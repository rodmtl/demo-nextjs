import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
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
            <span className="font-bold">DevOpsArchitect</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/fr#about" className="text-sm font-medium hover:text-primary">
              À propos
            </Link>
            <Link href="/fr#expertise" className="text-sm font-medium hover:text-primary">
              Expertise
            </Link>
            <Link href="/fr#projects" className="text-sm font-medium hover:text-primary">
              Projets
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
                Architecte Logiciel & Spécialiste DevOps
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Construction d'infrastructures évolutives et résilientes et rationalisation des flux de travail de
                développement pour les applications modernes.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/fr#projects">
                    Voir Mes Travaux <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/fr#contact">Me Contacter</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/cv-fr.pdf" download>
                    Télécharger CV <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-square overflow-hidden rounded-full border-8 border-muted lg:order-last">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profil"
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
                  Je suis un Architecte Logiciel avec plus de 10 ans d'expérience spécialisé dans l'implémentation
                  DevOps et l'infrastructure cloud. J'aide les organisations à construire des pipelines CI/CD robustes,
                  à implémenter l'infrastructure en tant que code et à optimiser leurs flux de travail de développement.
                </p>
                <p className="text-lg">
                  Mon approche combine expertise technique et compréhension approfondie des besoins métier, garantissant
                  que les solutions que je conçois fonctionnent parfaitement tout en s'alignant sur les objectifs
                  organisationnels et en améliorant la productivité de l'équipe.
                </p>
                <p className="text-lg">
                  Quand je n'architecte pas des systèmes, vous pouvez me trouver en train de contribuer à des projets
                  open-source, de parler lors de conférences technologiques ou de mentorer la prochaine génération
                  d'ingénieurs DevOps.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Parcours Professionnel</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Architecte DevOps Principal chez Enterprise Solutions Inc. (2020-Présent)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Ingénieur Cloud Senior chez Tech Innovations Ltd. (2017-2020)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Consultant DevOps chez Global Systems (2014-2017)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-[#679436] shrink-0 mt-0.5" />
                    <span>Développeur Logiciel chez StartUp Ventures (2011-2014)</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mt-6">Formation</h3>
                <p>Master en Informatique, Université Tech (2011)</p>
                <p>Licence en Génie Logiciel, École d'Ingénierie (2009)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Mon Expertise
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Infrastructure Cloud</CardTitle>
                  <CardDescription>
                    Conception et implémentation de solutions cloud évolutives sur AWS, Azure et GCP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Azure</Badge>
                    <Badge>GCP</Badge>
                    <Badge>Terraform</Badge>
                    <Badge>CloudFormation</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <GitBranch className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Pipelines CI/CD</CardTitle>
                  <CardDescription>
                    Construction de flux de travail automatisés pour l'intégration et le déploiement continus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Jenkins</Badge>
                    <Badge>GitHub Actions</Badge>
                    <Badge>GitLab CI</Badge>
                    <Badge>CircleCI</Badge>
                    <Badge>ArgoCD</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Server className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Orchestration de Conteneurs</CardTitle>
                  <CardDescription>
                    Gestion d'applications conteneurisées à grande échelle avec Kubernetes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Kubernetes</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Helm</Badge>
                    <Badge>Istio</Badge>
                    <Badge>Prometheus</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Infrastructure as Code</CardTitle>
                  <CardDescription>Automatisation du provisionnement d'infrastructure avec du code</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Terraform</Badge>
                    <Badge>Ansible</Badge>
                    <Badge>Pulumi</Badge>
                    <Badge>CloudFormation</Badge>
                    <Badge>ARM Templates</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Gestion de Bases de Données</CardTitle>
                  <CardDescription>Conception et optimisation d'architectures de bases de données</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>DynamoDB</Badge>
                    <Badge>Redis</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Terminal className="h-10 w-10 text-[#679436] mb-2" />
                  <CardTitle>Scripting & Automatisation</CardTitle>
                  <CardDescription>
                    Création de scripts et d'outils pour automatiser les tâches répétitives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>Bash</Badge>
                    <Badge>PowerShell</Badge>
                    <Badge>Go</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projets Phares
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Pipeline CI/CD d'Entreprise</CardTitle>
                  <CardDescription>
                    Conception et implémentation d'un pipeline CI/CD complet pour une entreprise du Fortune 500
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Réduction du temps de déploiement de 80% et élimination des erreurs manuelles en automatisant
                    l'ensemble du processus de livraison logicielle, du commit de code au déploiement en production.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Jenkins</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">Terraform</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Stratégie de Migration Cloud</CardTitle>
                  <CardDescription>
                    Direction de la migration de systèmes legacy vers une architecture cloud-native
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Architecture et exécution d'un plan de migration par phases qui a déplacé plus de 200 applications
                    vers AWS, entraînant une réduction des coûts de 40% et une amélioration de la fiabilité du système.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Microservices</Badge>
                    <Badge variant="outline">Docker</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Implémentation DevSecOps</CardTitle>
                  <CardDescription>
                    Intégration de la sécurité dans le pipeline DevOps pour une institution financière
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Implémentation de scans de sécurité automatisés et de vérifications de conformité tout au long du
                    cycle de développement, réduisant les vulnérabilités de sécurité de 75%.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SonarQube</Badge>
                    <Badge variant="outline">OWASP</Badge>
                    <Badge variant="outline">Vault</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Plateforme Kubernetes</CardTitle>
                  <CardDescription>
                    Construction d'une plateforme Kubernetes en libre-service pour les équipes de développement
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Création d'une plateforme personnalisée permettant aux développeurs de déployer des applications sur
                    Kubernetes sans connaissance approfondie de l'infrastructure, augmentant la fréquence de déploiement
                    de 300%.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">Helm</Badge>
                    <Badge variant="outline">ArgoCD</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Monitoring & Observabilité</CardTitle>
                  <CardDescription>
                    Implémentation d'un monitoring complet pour une plateforme e-commerce mondiale
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Conception et déploiement d'une solution de monitoring fournissant des insights en temps réel sur
                    les performances du système, réduisant le MTTR de 60% et améliorant l'expérience client.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Prometheus</Badge>
                    <Badge variant="outline">Grafana</Badge>
                    <Badge variant="outline">ELK Stack</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Automatisation d'Infrastructure</CardTitle>
                  <CardDescription>
                    Automatisation du provisionnement d'infrastructure pour un fournisseur SaaS
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Implémentation de pratiques d'infrastructure as code qui ont permis à l'entreprise de provisionner
                    des environnements complets en minutes au lieu de semaines, accélérant la mise sur le marché.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Terraform</Badge>
                    <Badge variant="outline">Ansible</Badge>
                    <Badge variant="outline">Python</Badge>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Me Contacter</h2>
              <p className="text-muted-foreground mb-8">
                Intéressé par une collaboration? Je suis toujours ouvert à discuter de nouveaux projets, opportunités ou
                partenariats.
              </p>
              <Card className="p-6">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex justify-center gap-6">
                    <Button size="lg" variant="outline" asChild>
                      <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="mailto:contact@example.com" className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <span>Email</span>
                      </Link>
                    </Button>
                  </div>
                  <Button size="lg" className="mt-4" asChild>
                    <Link href="/cv-fr.pdf" download className="flex items-center gap-2">
                      Télécharger CV <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-[#EBF2FA]">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DevOpsArchitect. Tous droits réservés.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Politique de Confidentialité
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

