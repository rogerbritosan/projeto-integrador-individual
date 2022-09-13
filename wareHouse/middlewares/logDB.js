const fs = require('fs');

function logDB(req, res, next){
    fs.appendFileSync('logDB.txt', 'Registro criado pela URL : ' + req.url + '\n');
    next();
}

module.exports = logDB;