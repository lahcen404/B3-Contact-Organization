// Placeholder data
const contacts = [
    { nom: "Durand", prenom: "Jean", email: "jean.durand@gmail.com", telephone: "0678901234", genre: "Homme", ville: "Paris" },
    { nom: "Martin", prenom: "Marie", email: "marie.martin@gmail.com", telephone: "0654321987", genre: "Femme", ville: "Lyon" },
    { nom: "Doe", prenom: "John", email: "john.doe@hotmail.com", telephone: "0623456789", genre: "Homme", ville: "Marseille" }
  ];
  
  // Function to display contacts
  function displayContacts() {
    const tableBody = document.getElementById('contact-table-body');
    tableBody.innerHTML = '';
  
    contacts.forEach(contact => {
      const row = `
        <tr>
          <td>${contact.nom}</td>
          <td>${contact.prenom}</td>
          <td>${contact.email}</td>
          <td>${contact.telephone}</td>
          <td>${contact.genre}</td>
          <td>${contact.ville}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }
  
  // Run displayContacts on load
  window.onload = displayContacts;
  