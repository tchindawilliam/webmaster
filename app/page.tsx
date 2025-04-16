import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, CheckCircle, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Formation Webmaster Professionnelle</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Développez vos compétences en création et gestion de sites web et obtenez une certification reconnue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/courses">
                Commencer la formation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Notre programme de formation</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cours complets</h3>
              <p className="text-slate-600">
                Accédez à des cours détaillés couvrant HTML, CSS, JavaScript, SEO, et plus encore.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quiz interactifs</h3>
              <p className="text-slate-600">
                Testez vos connaissances avec des quiz après chaque module pour renforcer votre apprentissage.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <p className="text-slate-600">
                Obtenez un certificat après avoir réussi l'évaluation finale pour valoriser vos compétences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Nos modules de formation</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HTML & CSS Fondamentaux",
                description: "Apprenez à structurer et styliser vos pages web",
                lessons: 12,
                level: "Débutant",
              },
              {
                title: "JavaScript pour Webmasters",
                description: "Ajoutez de l'interactivité à vos sites web",
                lessons: 10,
                level: "Intermédiaire",
              },
              {
                title: "Référencement SEO",
                description: "Optimisez votre site pour les moteurs de recherche",
                lessons: 8,
                level: "Tous niveaux",
              },
              {
                title: "Responsive Web Design",
                description: "Créez des sites adaptés à tous les appareils",
                lessons: 6,
                level: "Intermédiaire",
              },
              {
                title: "WordPress Avancé",
                description: "Maîtrisez le CMS le plus populaire au monde",
                lessons: 14,
                level: "Intermédiaire",
              },
              {
                title: "Sécurité Web",
                description: "Protégez votre site contre les menaces",
                lessons: 7,
                level: "Avancé",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white px-4 text-center">{course.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-slate-500 mb-6">
                    <span>{course.lessons} leçons</span>
                    <span>Niveau: {course.level}</span>
                  </div>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/courses/${index + 1}`}>Voir le cours</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">Voir tous les cours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Témoignages d'étudiants</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                role: "Freelance Web Designer",
                quote:
                  "Cette formation m'a permis de me lancer en tant que freelance. Le contenu est complet et les quiz m'ont aidée à bien assimiler les concepts.",
              },
              {
                name: "Thomas Dubois",
                role: "Entrepreneur",
                quote:
                  "J'ai pu créer et gérer moi-même le site de ma startup grâce à cette formation. Je recommande particulièrement les modules sur le SEO.",
              },
              {
                name: "Léa Bernard",
                role: "Responsable Marketing",
                quote:
                  "Formation idéale pour les professionnels du marketing qui veulent comprendre les aspects techniques du web. La certification est un vrai plus sur mon CV.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à devenir un webmaster certifié?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant et commencez votre parcours vers la certification
          </p>
          <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
            <Link href="/register">S'inscrire maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
