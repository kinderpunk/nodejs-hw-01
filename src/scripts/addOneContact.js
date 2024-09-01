const createFakeContact = require('../utils/createFakeContact');
const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

async function addOneContact() {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);
}

addOneContact();
