import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, BookOpen, AlertCircle, Clock } from "lucide-react"

export default function CertificationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Certification Webmaster</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Obtenez une certification professionnelle reconnue qui valide vos compétences en création et gestion de sites
          web. Notre certification est un atout précieux pour votre CV et votre carrière.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Processus de certification</CardTitle>
            <CardDescription>Comment obtenir votre certification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">Suivre les cours requis</h3>
                <p className="text-slate-600 text-sm">
                  Complétez tous les modules de formation nécessaires pour acquérir les compétences requises.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">Réussir les quiz</h3>
                <p className="text-slate-600 text-sm">
                  Obtenez un score minimum de 80% à tous les quiz associés aux modules de formation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Passer l'examen final</h3>
                <p className="text-slate-600 text-sm">
                  Réussissez l'examen de certification qui couvre l'ensemble des compétences webmaster.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Recevoir votre certificat</h3>
                <p className="text-slate-600 text-sm">
                  Téléchargez votre certificat numérique et partagez-le sur votre CV et vos profils professionnels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avantages de la certification</CardTitle>
            <CardDescription>Pourquoi obtenir notre certification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-4 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Reconnaissance professionnelle</h3>
                <p className="text-slate-600 text-sm">
                  Notre certification est reconnue par les employeurs et valorise votre CV.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-4 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Validation des compétences</h3>
                <p className="text-slate-600 text-sm">
                  Prouvez que vous maîtrisez les compétences essentielles du métier de webmaster.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-4 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Opportunités professionnelles</h3>
                <p className="text-slate-600 text-sm">Accédez à de meilleures opportunités d'emploi et de freelance.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-4 shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Mise à jour des connaissances</h3>
                <p className="text-slate-600 text-sm">
                  Assurez-vous que vos compétences sont à jour avec les dernières technologies web.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-50 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à obtenir votre certification?</h2>
            <p className="text-slate-600 mb-6">
              Commencez dès maintenant votre parcours vers la certification webmaster professionnelle. Inscrivez-vous,
              suivez les cours et passez l'examen final pour valider vos compétences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register">S'inscrire maintenant</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/courses">Voir les cours requis</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Award className="h-24 w-24 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cours requis</CardTitle>
            <BookOpen className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6 cours</div>
            <p className="text-xs text-slate-500">HTML, CSS, JavaScript, SEO, Responsive, WordPress</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/courses">Voir les cours</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Durée de validité</CardTitle>
            <Clock className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 ans</div>
            <p className="text-xs text-slate-500">Renouvelable avec un examen de mise à jour</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/faq">En savoir plus</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de réussite</CardTitle>
            <AlertCircle className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-slate-500">Des étudiants obtiennent leur certification</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/testimonials">Témoignages</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
