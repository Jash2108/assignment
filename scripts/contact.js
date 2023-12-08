/********* create variables *********/
const contactPage = document.getElementById('contact-page');
const form = document.querySelector('.contact form');

/********* submit form *********/
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Replace the contents of the contact-page with a thank you message
  contactPage.innerHTML = '<center><p style="font-size: 24px;">Thank you for your message</p></center>';
});
