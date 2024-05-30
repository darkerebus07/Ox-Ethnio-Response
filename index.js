const scriptURL = 'https://script.google.com/macros/s/AKfycbx4HMwbsb0jQlrwnIBZuvw3C9m8QiViL_7XzkNyceAn3jWEfUA-7rEe4jfHY_YZx3Me-Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})