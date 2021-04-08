import Users from '../controllers/user';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Node Express PosgresSQL and Sequelize tutorial !',
  }));

  app.post('/api/users/signup', Users.signUp); // API route for user to signup
  
  app.get('/api/users', Users.getUsers); // API route to get all users in the database

};