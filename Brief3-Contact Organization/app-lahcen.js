
let contacts = [];


function addContact(event) {
  event.preventDefault(); 

  
  const nom = document.getElementById('inputNom').value.trim();
  const prenom = document.getElementById('inputPrenom').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const telephone = document.getElementById('inputPhone').value.trim();
  const ville = document.getElementById('inputState').value;
  const genre = document.querySelector('input[name="flexRadioDefault"]:checked').nextElementSibling.textContent.trim();

  // validation
  if (!nom || !prenom || !email || !telephone || ville === 'Ville') {
    alert('Please fill in all fields.');
    return;
  }

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
