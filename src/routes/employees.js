
const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');




// GET all Employees
router.get('/', (req, res) => {
  var sql_qry="select * from activity_ticket as att left join activity as act on att.activityId = act.id WHERE att.paymentMethod <> 'free' limit 40";
  mysqlConnection.query(sql_qry, (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
