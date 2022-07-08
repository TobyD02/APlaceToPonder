const crypto = require('crypto')

export class User {

    username: string
    password: string
    
    constructor(u: string, p: string) {
        let valid = this.checkValues(u, p)
        if (valid) {
            this.username = u
            this.password = p
        } else throw "Invalid username or password"
    }

    checkValues(username: string, password: string) {
        // let u_reg = new RegExp('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
        let u_reg = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let pass_reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/


        if (!u_reg.test(username)) {
            console.log('username not valid: ' + username)
            return false
        }
        if (!pass_reg.test(password)) {
            console.log('password not valid: ' + password)
            return false
        }

        this.username = username
        this.password = this.hashPass(password)

        return true
    }

    toFirestore() {

        return {
            password: this.password,
            username: this.username,
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