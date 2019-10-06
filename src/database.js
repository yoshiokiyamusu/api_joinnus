//mydb = dbConnect(MySQL(), user='joinnus_web_dev', password='MHcj25ZGHBgE258eaJJD', dbname='joinnus_database_development', host='jnus-cluster-development.cluster-cpf6h8jowlmg.us-west-2.rds.amazonaws.com');

const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'jnus-cluster-development.cluster-cpf6h8jowlmg.us-west-2.rds.amazonaws.com',
  user: 'joinnus_web_dev',
  password: 'MHcj25ZGHBgE258eaJJD',
  database: 'joinnus_database_development',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
