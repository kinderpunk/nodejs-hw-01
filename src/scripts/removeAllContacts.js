const writeContacts = require('../utils/writeContacts');

async function removeAllContacts() {
    await writeContacts([]);
    console.log('All contacts removed.');
}

removeAllContacts();
