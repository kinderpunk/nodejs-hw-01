import { writeContacts } from '../utils/index.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('All contacts have been removed.');
};

removeAllContacts();
