document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  const form = document.getElementById("registerForm")
  const step1 = document.getElementById("step1")
  const step2 = document.getElementById("step2")
  const step3 = document.getElementById("step3")

  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")
  const submitBtn = document.getElementById("submitBtn")
  const cancelBtn = document.getElementById("cancelBtn")

  let currentStep = 1

  // Function to update form display based on current step
  function updateFormDisplay() {
    // Hide all steps
    step1.classList.add("hidden")
    step2.classList.add("hidden")
    step3.classList.add("hidden")

    // Show current step
    if (currentStep === 1) {
      step1.classList.remove("hidden")
      prevBtn.style.display = "none"
      nextBtn.style.display = "block"
      submitBtn.style.display = "none"
      cancelBtn.style.display = "block"
    } else if (currentStep === 2) {
      step2.classList.remove("hidden")
      prevBtn.style.display = "block"
      nextBtn.style.display = "block"
      submitBtn.style.display = "none"
      cancelBtn.style.display = "none"
    } else if (currentStep === 3) {
      step3.classList.remove("hidden")
      prevBtn.style.display = "block"
      nextBtn.style.display = "none"
      submitBtn.style.display = "block"
      cancelBtn.style.display = "none"
    }
  }

  // Next button click handler
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      // Simple validation for step 1
      if (currentStep === 1) {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirm-password").value

        if (!email || !password || !confirmPassword) {
          alert("Veuillez remplir tous les champs obligatoires.")
          return
        }

        if (password !== confirmPassword) {
          alert("Les mots de passe ne correspondent pas.")
          return
        }
      }

      // Simple validation for step 2
      if (currentStep === 2) {
        const name = document.getElementById("name").value

        if (!name) {
          alert("Veuillez entrer votre nom complet.")
          return
        }
      }

      currentStep++
      updateFormDisplay()
    })
  }

  // Previous button click handler
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentStep--
      updateFormDisplay()
    })
  }

  // Submit button click handler
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault()

      // Check if terms are accepted
      const termsAccepted = document.getElementById("terms").checked

      if (!termsAccepted) {
        alert("Vous devez accepter les conditions d'utilisation pour vous inscrire.")
        return
      }

      // Here you would normally submit the form to a server
      alert("Inscription réussie ! Vous allez être redirigé vers la page d'accueil.")

      // Redirect to home page after successful registration
      setTimeout(() => {
        window.location.href = "index.html"
      }, 1500)
    })
  }

  // Initialize form display
  updateFormDisplay()
})
