const Users = require('./Tables/users');
const knex = require('./utility/database');


    
    async function Insert(fn,ln,e,p) {
        // insert a user
        const user = await Users.query().insert({
            firstname: fn,
            lastname: ln,
            email: e,
            password: p,
        });
    
       return "User Added";
    }
    
    async function Delete(id) {
        // insert a user
        const user = await Users.query().deleteById(id);
    
        return `User having ${user} id Deleted`;
    };

    


module.exports = {
    Insert,
    Delete,
};







// module.exports = func






