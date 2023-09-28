import Elysia from "elysia";
import { login } from "./login";
import { newUser } from "./new-user";

export const authGroup = new Elysia().use(login).use(newUser);
