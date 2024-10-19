import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    const contactParse = contacts ? JSON.parse(contacts) : [];
    contactParse.push(createFakeContact());
    fs.writeFile(PATH_DB, JSON.stringify(contactParse, null, 2), "utf-8");
 };

addOneContact();
