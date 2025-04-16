"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Inscription</CardTitle>
            <CardDescription>Créez votre compte pour accéder à la formation webmaster</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label>Niveau en développement web</Label>
                  <RadioGroup defaultValue="beginner">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Débutant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermédiaire</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">Avancé</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Objectifs de formation</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="career" />
                      <Label htmlFor="career">Reconversion professionnelle</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="skills" />
                      <Label htmlFor="skills">Amélioration des compétences</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="freelance" />
                      <Label htmlFor="freelance">Devenir freelance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="personal" />
                      <Label htmlFor="personal">Projet personnel</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Comment avez-vous connu notre formation?</Label>
                  <RadioGroup defaultValue="search">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="search" id="search" />
                      <Label htmlFor="search">Moteur de recherche</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="social" id="social" />
                      <Label htmlFor="social">Réseaux sociaux</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="friend" id="friend" />
                      <Label htmlFor="friend">Recommandation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Autre</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <Link href="/terms" className="text-emerald-600 hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="/privacy" className="text-emerald-600 hover:underline">
                      politique de confidentialité
                    </Link>
                  </Label>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                Précédent
              </Button>
            ) : (
              <Link href="/">
                <Button variant="outline">Annuler</Button>
              </Link>
            )}

            {step < 3 ? (
              <Button onClick={nextStep} className="bg-emerald-600 hover:bg-emerald-700">
                Suivant
              </Button>
            ) : (
              <Button className="bg-emerald-600 hover:bg-emerald-700">S'inscrire</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
