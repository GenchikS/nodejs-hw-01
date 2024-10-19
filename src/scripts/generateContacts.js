import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    const contacts = await fs.readFile(PATH_DB, "utf-8");
    const contactData = contacts ? JSON.parse(contacts) : [];
    const newContact = Array(number).fill(0).map(createFakeContact);
    const resultData = [...contactData, ...newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(resultData, null, 2), "utf-8");
};

// console.log(await generateContacts(5));
generateContacts(5);
