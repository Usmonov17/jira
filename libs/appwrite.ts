import { Client, Account, ID } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f138f500074db42d20");

export const ACCOUNT = new Account(client);
export const userID = ID.unique();
