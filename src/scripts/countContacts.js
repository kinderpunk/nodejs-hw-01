import { readContacts } from '../utils/index.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Total contacts: ${contacts.length}`);
};

countContacts();
