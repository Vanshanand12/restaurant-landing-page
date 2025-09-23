// Smooth scroll active link
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    alert("Please fill in all required fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
