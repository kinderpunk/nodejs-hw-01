const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function readContacts() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error);
        return [];
    }
}

module.exports = readContacts;
