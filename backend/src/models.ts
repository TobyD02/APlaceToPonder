export class User {

    username: string
    password: string
    
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    toFirestore() {
        return {
            username: this.username,
            password: this.password,
        }
    }

    checkExists(user: {username: string, password: string}) {
        if (user.username == this.username) return true
        return false
    }
}