import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, CheckCircle, Clock, Play } from "lucide-react"

export default function CoursePage({ params }: { params: { id: string } }) {
  const courseId = Number.parseInt(params.id)

  // Exemple de données pour un cours
  const course = {
    id: courseId,
    title: "HTML & CSS Fondamentaux",
    description:
      "Apprenez à structurer et styliser vos pages web avec HTML5 et CSS3. Ce cours couvre les bases essentielles pour créer des sites web modernes et attrayants.",
    lessons: [
      {
        id: 1,
        title: "Introduction au HTML",
        duration: "45 min",
        completed: true,
      },
      {
        id: 2,
        title: "Structure d'une page web",
        duration: "30 min",
        completed: true,
      },
      {
        id: 3,
        title: "Les balises sémantiques",
        duration: "60 min",
        completed: false,
      },
      {
        id: 4,
        title: "Introduction au CSS",
        duration: "45 min",
        completed: false,
      },
      {
        id: 5,
        title: "Sélecteurs CSS",
        duration: "60 min",
        completed: false,
      },
      {
        id: 6,
        title: "Modèle de boîte",
        duration: "45 min",
        completed: false,
      },
    ],
    quizzes: [
      {
        id: 1,
        title: "Quiz HTML de base",
        questions: 10,
        duration: "15 min",
      },
      {
        id: 2,
        title: "Quiz CSS de base",
        questions: 10,
        duration: "15 min",
      },
    ],
    resources: [
      {
        id: 1,
        title: "Cheat Sheet HTML5",
        type: "PDF",
      },
      {
        id: 2,
        title: "Cheat Sheet CSS3",
        type: "PDF",
      },
      {
        id: 3,
        title: "Exemples de code",
        type: "ZIP",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/courses" className="flex items-center text-slate-600 hover:text-emerald-600 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux cours
      </Link>

      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-slate-300 mb-6">{course.description}</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>{course.lessons.length} leçons</span>
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <Clock className="h-4 w-4 mr-2" />
            <span>8 heures</span>
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Niveau débutant</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Tabs defaultValue="lessons">
            <TabsList className="mb-6">
              <TabsTrigger value="lessons">Leçons</TabsTrigger>
              <TabsTrigger value="quizzes">Quiz</TabsTrigger>
              <TabsTrigger value="resources">Ressources</TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Contenu du cours</h2>

              {course.lessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className={`p-4 flex items-center ${lesson.completed ? "border-emerald-200 bg-emerald-50" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${lesson.completed ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"}`}
                  >
                    {lesson.completed ? <CheckCircle className="h-5 w-5" /> : lesson.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{lesson.title}</h3>
                    <p className="text-sm text-slate-500">{lesson.duration}</p>
                  </div>
                  <Button
                    variant={lesson.completed ? "outline" : "default"}
                    size="sm"
                    className={lesson.completed ? "" : "bg-emerald-600 hover:bg-emerald-700"}
                  >
                    {lesson.completed ? "Revoir" : "Commencer"}
                    {!lesson.completed && <Play className="h-4 w-4 ml-2" />}
                  </Button>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="quizzes" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Quiz d'évaluation</h2>

              {course.quizzes.map((quiz) => (
                <Card key={quiz.id} className="p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mr-4">
                    {quiz.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{quiz.title}</h3>
                    <p className="text-sm text-slate-500">
                      {quiz.questions} questions · {quiz.duration}
                    </p>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    Commencer
                  </Button>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Ressources complémentaires</h2>

              {course.resources.map((resource) => (
                <Card key={resource.id} className="p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mr-4">
                    {resource.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{resource.title}</h3>
                    <p className="text-sm text-slate-500">Format: {resource.type}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Télécharger
                  </Button>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:w-1/3">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Progression du cours</h2>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progression</span>
                <span>33%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "33%" }}></div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Leçons complétées</span>
                <span className="font-medium">2/6</span>
              </div>
              <div className="flex justify-between">
                <span>Quiz complétés</span>
                <span className="font-medium">0/2</span>
              </div>
              <div className="flex justify-between">
                <span>Temps total</span>
                <span className="font-medium">8 heures</span>
              </div>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-4">Continuer le cours</Button>

            <Button variant="outline" className="w-full">
              Télécharger le certificat
              <span className="text-xs ml-2 bg-slate-100 px-2 py-0.5 rounded">Non disponible</span>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
