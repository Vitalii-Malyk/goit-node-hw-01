// contacts.js

const { error } = require("node:console");
const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.basename("./db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath);
  console.log(data);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const data = await fs.readFile(contactsPath);
  data.filter((contact) => {
    if (contact.id === idContact) {
      return contact;
    } else {
      return null;
    }
  });
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const data = await fs.writeFile(contactsPath);
  data.filter((contact) => {
    if (contact.id === idContact) {
      //  тут условия удаления
    } else {
      return null;
    }
  });
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
