import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeLastContact = async () => { 
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    const contactsParse = JSON.parse(contacts);
    if (contactsParse.length === 0) {
        return;
    }
    const contactLast = contactsParse.slice(0, contactsParse.length - 1);
    fs.writeFile(PATH_DB, JSON.stringify(contactLast, null, 2), "utf-8");
};

removeLastContact();
