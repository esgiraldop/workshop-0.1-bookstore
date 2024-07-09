// const idGen = require("uuid")
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

class Utilities{
    static genId(){
        let id = 0
        return function(){
            id++
            console.log("id: ", id)
            return id
        }
    }
}

const newId = Utilities.genId()



class Person{
    constructor(name, email, password, role){
        this.id = newId()
        this.name = name
        this.email = email
        this.password = password
        this.role = role

        // Person.users.push(this)
    }

    createUser(){
        console.log(`You created a user with ${this.id}`)
    }
}

class AdminUser extends Person{
    static keyAdmin = 123456
    constructor(name, email, password, role){
        super(id, name, email, password, role)
        this.keyAdmin = keyAdmin
    }

    static createUser
}

const user = new Person("erick", "asdasd", "adsfasdasd", "asdfasdasd")
user.createUser()
const user2 = new Person("erick", "asdasd", "adsfasdasd", "asdfasdasd")
user2.createUser()
// class RegularUser
// alert(uuidv4())