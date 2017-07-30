export class User {
    firstname: string;
    lastname: string;
    email: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
