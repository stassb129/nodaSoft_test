import {User} from "../types/type";

const URL = "https://jsonplaceholder.typicode.com/users";

export async function receiveRandomUser(): Promise<User> {
    try {
        const id = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`${URL}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        return (await response.json()) as User;
    } catch (error) {
        throw new Error("Error fetching user: " + error);
    }
}