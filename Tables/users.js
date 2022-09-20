const {Model}  = require('objection');
// const Order = require('')

class Users extends Model {
    static get tableName() {
        return 'users';
    };

};


module.exports = Users;



 