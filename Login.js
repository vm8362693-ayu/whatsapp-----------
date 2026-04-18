console.log("hello world")
function toggleMenu() {
  let menu = document.getElementById("dropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "in",       // Default country India
    separateDialCode: true,     // +91 अलग से दिखेगा
    preferredCountries: ["in", "us", "gb"]
  });