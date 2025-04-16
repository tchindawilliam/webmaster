// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Change icon based on menu state
      const icon = menuToggle.querySelector("i")
      if (mobileMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Tab functionality for course page
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach((b) => b.classList.remove("active"))
        tabContents.forEach((c) => c.classList.remove("active"))

        // Add active class to clicked button and corresponding content
        btn.classList.add("active")
        const tabId = btn.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#currentYear")
  if (currentYearElements.length > 0) {
    const currentYear = new Date().getFullYear()
    currentYearElements.forEach((el) => {
      el.textContent = currentYear
    })
  }
})
