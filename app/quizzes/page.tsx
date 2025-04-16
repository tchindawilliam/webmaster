import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, HelpCircle, CheckCircle } from "lucide-react"

export default function QuizzesPage() {
  const quizzes = [
    {
      id: 1,
      title: "HTML Fondamentaux",
      description: "Testez vos connaissances sur les bases du HTML, les balises et la structure des documents.",
      questions: 15,
      time: 20,
      difficulty: "Débutant",
      course: "HTML & CSS Fondamentaux",
    },
    {
      id: 2,
      title: "CSS Fondamentaux",
      description: "Évaluez votre maîtrise des sélecteurs CSS, des propriétés et du modèle de boîte.",
      questions: 15,
      time: 20,
      difficulty: "Débutant",
      course: "HTML & CSS Fondamentaux",
    },
    {
      id: 3,
      title: "JavaScript Bases",
      description:
        "Vérifiez vos connaissances sur les variables, les fonctions et les structures de contrôle en JavaScript.",
      questions: 20,
      time: 25,
      difficulty: "Intermédiaire",
      course: "JavaScript pour Webmasters",
    },
    {
      id: 4,
      title: "DOM Manipulation",
      description: "Testez votre compréhension de la manipulation du DOM avec JavaScript.",
      questions: 15,
      time: 20,
      difficulty: "Intermédiaire",
      course: "JavaScript pour Webmasters",
    },
    {
      id: 5,
      title: "SEO On-Page",
      description: "Évaluez vos connaissances sur les techniques de référencement on-page.",
      questions: 15,
      time: 20,
      difficulty: "Tous niveaux",
      course: "Référencement SEO",
    },
    {
      id: 6,
      title: "Responsive Design",
      description: "Testez votre compréhension des media queries et des techniques de design responsive.",
      questions: 15,
      time: 20,
      difficulty: "Intermédiaire",
      course: "Responsive Web Design",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Quiz d'évaluation</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Testez vos connaissances avec nos quiz interactifs. Chaque quiz est conçu pour évaluer votre compréhension des
          concepts clés abordés dans nos cours de formation webmaster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz) => (
          <Card key={quiz.id}>
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">{quiz.description}</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-slate-500 mb-4">
                <div className="flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span>{quiz.questions} questions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{quiz.time} min</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>{quiz.difficulty}</span>
                </div>
              </div>
              <div className="text-sm text-slate-500">
                <span className="font-medium">Cours associé:</span> {quiz.course}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href={`/quizzes/${quiz.id}`}>Commencer le quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
