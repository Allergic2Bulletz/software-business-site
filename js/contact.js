// Swaps the contact form for a thank-you note once it has been submitted.
// The form itself posts to Google Forms through a hidden iframe (see contact.html).
const form = document.getElementById("contact-form");
const thanks = document.getElementById("contact-thanks");

form.addEventListener("submit", () => {
  // Let the browser send the form first, then show the note.
  setTimeout(() => {
    form.hidden = true;
    thanks.hidden = false;
    form.reset();
  }, 300);
});
