const { Model } = require('objection');
const Knex = require('knex');

const config = require('config')

const Client = config.get('Client')
const Connection = config.get('Connection')

// Initialize knex object
try{
    var knexObj = Knex({
        client: Client,
        connection : Connection,
    });
    console.log('Connected to the MySQL server.');
}
catch(err){
    console.error('error: ' + err.message);
}


// Giving knexObj object to Objection Class "Model"
Model.knex(knexObj);

module.exports = knexObj;