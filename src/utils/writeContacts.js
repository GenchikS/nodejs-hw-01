import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {
    const update = await fs.readFile(PATH_DB, "utf-8");
    // const updateData = update ? JSON.parse(update) : [];
    fs.writeFile(PATH_DB, JSON.stringify(update, null, 2), "utf-8");
};

// console.log(await writeContacts());
