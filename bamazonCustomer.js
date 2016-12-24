/**
 * Created by stefanbeaulieu on 12/24/16.
 */
'use strict';

var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'9W9d(6XxXtAz9&m4KpGw3823',
    database:'bamazon_db'
});

connection.connect(function (err) {
    if (err) throw err;
    display();
});

var display = function () {
    connection.query('SELECT * FROM products', function (err, res) {
        console.log(res);
        start();
    });
};

var start = function () {
    inquirer.prompt([{
        name:'id',
        type:'input',
        message:'What is the ID of the product you would like to buy?',
        validate: function(value) {
            return isNaN(value) === false;
        }
    }, {
        name:'quantity',
        type:'input',
        message:'How many would you like to buy?',
        validate: function(value) {
            return isNaN(value) === false;
        }
    }]);
};