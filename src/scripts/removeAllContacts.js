import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeAllContacts = async () => {
    fs.writeFile(PATH_DB, JSON.stringify([], null, 2), "utf-8");
};

removeAllContacts();
