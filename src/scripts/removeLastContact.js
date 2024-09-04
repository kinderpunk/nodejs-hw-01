import { readContacts, writeContacts } from '../utils/index.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();
  await writeContacts(contacts);
  console.log('Last contact has been removed.');
};

removeLastContact();
