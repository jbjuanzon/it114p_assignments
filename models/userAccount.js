const accounts = [];

module.exports = class Account {
    constructor(u,p) {
        this.username = u;
        this.password = p;
    }

    save() {
        accounts.push(this);
    }

    static fetchAll() {
        return accounts;
    }
}