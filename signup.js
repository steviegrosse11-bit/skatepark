document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  alert(`Thanks ${name}! You're now part of the crew.`);
  window.location.href = "dashboard.html";
});
