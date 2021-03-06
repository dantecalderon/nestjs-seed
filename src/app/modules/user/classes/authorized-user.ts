import { StoredUser } from './stored-user';
import { SeedUser } from '../interfaces/seed-user.interface';

export class AuthorizedUser implements SeedUser {
    identity: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(user = {} as StoredUser) {
        this.identity = user.identity;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
    }
}
