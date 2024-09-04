import { readContacts } from '../utils/index.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts);
};

getAllContacts();
