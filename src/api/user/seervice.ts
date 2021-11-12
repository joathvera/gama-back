import { User } from "./model";

async function getUser(userId: string | null) {
    try {
        let user: User = {
            name: "sergio",
            age: 25,
            userId: "123456789"
        }

        if (userId != "123456789") {
            throw {
                code: 404,
                message: "user not found"
            }
        }

        return user;

    } catch (error) {
        console.log(error);
        throw error;
    }

}


export { getUser }