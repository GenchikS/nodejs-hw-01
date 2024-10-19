import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const countContacts = async () => { 
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    const contactsParse = JSON.parse(contacts);
    return contactsParse.length;    
};

console.log(await countContacts());
