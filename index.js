const contacts = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const delContact = await contacts.removeContact(id);
      return console.log(delContact);

    //     default:
    //       console.warn("\x1B[31m Unknown action type!");
    //   }
  }
};
invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
// # Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
// node index.js --action="list"

// # Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
// node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

// # Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
// node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

// # Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
// node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
