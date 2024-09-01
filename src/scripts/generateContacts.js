const createFakeContact = require('../utils/createFakeContact');
const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

async function generateContacts(count) {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
}

generateContacts(5);  // Тут можна змінити кількість контактів, що генеруються
