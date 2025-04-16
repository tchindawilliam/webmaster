import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WebMaster Pro</h3>
            <p className="text-slate-300">Formation complète pour devenir un webmaster professionnel certifié.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Formation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Tous les cours
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="text-slate-300 hover:text-white transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <Link href="/certification" className="text-slate-300 hover:text-white transition-colors">
                  Certification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-300 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} WebMaster Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
