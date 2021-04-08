import model from '../models';
import  { success, created, serverError } from '../Response/index'


const { User } = model;

class Users {
    static async signUp(req, res) {
        const { name, username, email, password } = req.body
            
        try {
            const user= await User.create({
                        name,
                        username,
                        email,
                        password
                    });

            return created(res, `User successfully created`, user)

        } catch (error) {

            return serverError(res, 'Server Error', error.message)
        }
    }


    static async getUsers(req, res) {
        try {
            
        let users= await User.findAll();

          return success(res, `users Retrived successfully`, users)

        } catch (error) {

            return serverError(res, 'Server Error', {})
        }

      }
}

export default Users;