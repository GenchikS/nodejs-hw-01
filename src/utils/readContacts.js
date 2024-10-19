import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    // const contactsParse = JSON.parse(contacts); 
    // return contactsParse;  //  повернути можна через змінну або відразу
    return JSON.parse(contacts);
};

// console.log(await readContacts());