import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, BarChart } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "HTML & CSS Fondamentaux",
      description:
        "Apprenez à structurer et styliser vos pages web avec HTML5 et CSS3. Ce cours couvre les bases essentielles pour créer des sites web modernes et attrayants.",
      lessons: 12,
      hours: 8,
      level: "Débutant",
      image: "html-css",
    },
    {
      id: 2,
      title: "JavaScript pour Webmasters",
      description:
        "Maîtrisez JavaScript pour ajouter de l'interactivité à vos sites web. Vous apprendrez à manipuler le DOM, gérer les événements et créer des animations.",
      lessons: 10,
      hours: 7,
      level: "Intermédiaire",
      image: "javascript",
    },
    {
      id: 3,
      title: "Référencement SEO",
      description:
        "Optimisez votre site pour les moteurs de recherche. Découvrez les techniques de référencement on-page et off-page pour améliorer votre visibilité.",
      lessons: 8,
      hours: 5,
      level: "Tous niveaux",
      image: "seo",
    },
    {
      id: 4,
      title: "Responsive Web Design",
      description:
        "Créez des sites adaptés à tous les appareils. Apprenez à utiliser les media queries, les grilles flexibles et les images responsives.",
      lessons: 6,
      hours: 4,
      level: "Intermédiaire",
      image: "responsive",
    },
    {
      id: 5,
      title: "WordPress Avancé",
      description:
        "Maîtrisez le CMS le plus populaire au monde. Apprenez à créer des thèmes personnalisés, des plugins et à optimiser les performances.",
      lessons: 14,
      hours: 10,
      level: "Intermédiaire",
      image: "wordpress",
    },
    {
      id: 6,
      title: "Sécurité Web",
      description:
        "Protégez votre site contre les menaces. Découvrez les vulnérabilités courantes et les meilleures pratiques pour sécuriser votre site web.",
      lessons: 7,
      hours: 5,
      level: "Avancé",
      image: "security",
    },
    {
      id: 7,
      title: "PHP & MySQL",
      description:
        "Développez des applications web dynamiques avec PHP et MySQL. Apprenez à créer des formulaires, gérer des bases de données et plus encore.",
      lessons: 15,
      hours: 12,
      level: "Intermédiaire",
      image: "php-mysql",
    },
    {
      id: 8,
      title: "UI/UX Design pour le Web",
      description:
        "Créez des interfaces utilisateur attrayantes et intuitives. Apprenez les principes de conception, la psychologie des couleurs et les tests utilisateurs.",
      lessons: 9,
      hours: 6,
      level: "Tous niveaux",
      image: "ui-ux",
    },
    {
      id: 9,
      title: "E-commerce et Monétisation",
      description:
        "Apprenez à créer et gérer une boutique en ligne. Découvrez les stratégies de monétisation et les meilleures pratiques pour l'e-commerce.",
      lessons: 11,
      hours: 8,
      level: "Intermédiaire",
      image: "ecommerce",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Nos Cours de Formation Webmaster</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Explorez notre catalogue complet de cours pour développer vos compétences en création et gestion de sites web.
          Chaque cours comprend des leçons théoriques, des exercices pratiques et des quiz pour tester vos
          connaissances.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden flex flex-col">
            <div className="h-48 bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white px-4 text-center">{course.title}</h3>
            </div>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-slate-600 mb-6">{course.description}</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-slate-500">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{course.lessons} leçons</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.hours}h</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-4 w-4 mr-1" />
                  <span>{course.level}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href={`/courses/${course.id}`}>Voir le cours</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
