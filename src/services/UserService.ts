export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ) {
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (email: string): boolean => {
        const users = this.getAllUsers();
        let userIndex = users.findIndex(dbUser => dbUser.email === email);

        console.log(userIndex);

        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            console.log('Usuário deletado', this.db);

            return true;
            
        } else {
            console.log('Index do User não encontrado');
            return false;
        }
    }

}

