let contacts = [];

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isPhoneValid(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isAlphabetic(value) {
    const alphabeticRegex = /^[A-Za-z\s]+$/;
    return alphabeticRegex.test(value.trim());
}

// function pu
function showError(element, message) {
    let errorElement = element.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.marginTop = '5px'; 
        element.parentNode.insertBefore(errorElement, element.nextSibling);
    }
    errorElement.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function(errorElement) {
        errorElement.remove();
    });
}

function addContact(event) {
  event.preventDefault(); 

  clearErrors();
  
  const nom = document.getElementById('inputNom').value.trim();
  const prenom = document.getElementById('inputPrenom').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const telephone = document.getElementById('inputPhone').value.trim();
  const ville = document.getElementById('inputState').value;
  const genre = document.querySelector('input[name="flexRadioDefault"]:checked').nextElementSibling.textContent.trim();

  let isValid = true;

  // validation
  if (!isAlphabetic(nom)) {
      showError(document.getElementById('inputNom'), 'Nom should contain only alphabetic characters');
      isValid = false;
  }

  if (!isAlphabetic(prenom)) {
      showError(document.getElementById('inputPrenom'), 'Prenom should contain only alphabetic characters');
      isValid = false;
  }

  if (!isEmailValid(email)) {
      showError(document.getElementById('inputEmail'), 'Enter a valid email address');
      isValid = false;
  }

  if (!isPhoneValid(telephone)) {
      showError(document.getElementById('inputPhone'), 'Enter a valid 10-digit phone number');
      isValid = false;
  }
  if (ville === 'Ville') {
        showError(document.getElementById('inputState'), 'Please select a valid city.');
         isValid = false;
         }

  if (!isValid) return;

  // new contaact
  const newContact = { nom, prenom, email, telephone, genre, ville };

  // add contact to arraylist
  contacts.push(newContact);

  // cleaar form
  document.querySelector('form').reset();

  alert('Contact added successfully!');

  // save contacts in localstorage
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

document.querySelector('form').addEventListener('submit', addContact);

// loaad contacts from localstorage
window.onload = function () {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (savedContacts) {
    contacts = savedContacts;
  }
};
