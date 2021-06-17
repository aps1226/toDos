import { Bson, Router, helpers } from "../deps.ts";
import { client } from "./DBConnection.ts";

interface toDos {
  id: number;
  task: string;
}

const db = await client.database("PhlappjackDB");

const toDos = await db.collection<toDos>("toDos")

export { toDos };