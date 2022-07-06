const crypto = require('crypto')

export class User {

    username: string
    password: string
    
    constructor(username: string, password: string) {
        this.username = username


        this.password = this.hashPass(password)
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

    hashPass(pass: string) {
        let salt = crypto.randomBytes(16).toString('hex')
        return crypto.pbkdf2Sync(pass, salt, 1000, 64, `sha512`).toString(`hex`)
    }
}