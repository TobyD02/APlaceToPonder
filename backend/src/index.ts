/*
    TODO:
        - Add regex validation to user creation (need to install regex module)
        - Create post request for account creation and implement input validation
        on front end based onbackend response
*/


const path = require('path')
const express = require('express')
const app = express()
const { User } = require('./models.ts')

const admin = require('firebase-admin')
const serviceAccount = require('../aplacetoponder-a47b5-firebase-adminsdk-tngml-e8e1ee7849.json')
const  { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://aplacetoponder-a47b5-default-rtdb.europe-west1.firebasedatabase.app"
})

const db = getFirestore()

async function addUser(user: typeof User) {
    let user_docs = await db.collection('users').get()

    let valid = () => {

        let valid = true

        user_docs.forEach((doc: any) => {
            console.log(doc.data(), user.toFirestore(), user.checkExists(doc.data()))
            if (user.checkExists(doc.data())) valid = false
        })

        return valid
    }

    if (valid()) {
        db.collection('users').doc(`${user_docs.length}`).set(user.toFirestore())
        return true
    } else return false
}

// async function getAllUsers() {
//     db.collection('users').get()
//         .then(data => {

//         })
// }


function test_for_login_validation() {
    let u;
    let i = 0
    
    let possibles = [{username: 't123', password: 'password'},
        {username: 'tobyd@gmail.com', password: 'ThisisaPassword!'},
        {username: 'tobyd123@gmail.com', password: "TobyDixon123!!"}]
    
    while (u == undefined) {
        try {
            u = new User(possibles[i].username, possibles[i].password)
        } catch (e: unknown) {
            console.log('invalid')
            i++
        }
    
        if (i > 5) break;
    }
    
    console.log('valid')
}

// addUser(user).then(d => console.log(d))



// app.use(express.static(path.join(__dirname, '../frontend/build')))

// app.get('/', (req, res) => {
//     res.status(200).send("Hello World!")
// })


// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })
