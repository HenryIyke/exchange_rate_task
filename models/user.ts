export interface User {
    email: string;
    password: string;
    currencies: string[];
}

export const users: User[] = [];