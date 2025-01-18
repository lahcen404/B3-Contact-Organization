// Placeholder data
const contacts = [];
  
  // Function to display contacts
  function displayContacts() {
    const list=JSON.parse(localStorage.getItem("contacts"));

    const tableBody = document.getElementById('contact-table-body');
    tableBody.innerHTML = '';
  
    list.forEach(contact => {
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
  