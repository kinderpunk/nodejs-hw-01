const readContacts = require('../utils/readContacts');

async function countContacts() {
    const contacts = await readContacts();
    console.log(`Total contacts: ${contacts.length}`);
    return contacts.length;
}

countContacts();
