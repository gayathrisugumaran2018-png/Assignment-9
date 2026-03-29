 let contacts = [];

    function addContact() {
      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();

      if (name === "" || phone === "") {
        alert("Please enter both name and phone number.");
        return;
      }

      const contact = { name, phone };
      contacts.push(contact);

      nameInput.value = "";
      phoneInput.value = "";

      displayContacts(contacts);
    }

    function displayContacts(contactArray) {
      const contactList = document.getElementById("contactList");
      const emptyMessage = document.getElementById("emptyMessage");

      contactList.innerHTML = "";

      if (contactArray.length === 0) {
        emptyMessage.style.display = "block";
      } else {
        emptyMessage.style.display = "none";
      }

      contactArray.forEach((contact, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <div class="contact-info">
            <strong>${contact.name}</strong><br>
            📞 ${contact.phone}
          </div>
          <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
        `;

        contactList.appendChild(li);
      });
    }

    function deleteContact(index) {
      contacts.splice(index, 1);
      displayContacts(contacts);
    }

    function searchContact() {
      const searchValue = document.getElementById("search").value.toLowerCase();

      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue) ||
        contact.phone.includes(searchValue)
      );

      displayContacts(filteredContacts);
    }