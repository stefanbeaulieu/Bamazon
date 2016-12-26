/**
 * Created by stefanbeaulieu on 12/24/16.
 */
'use strict';

var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '9W9d(6XxXtAz9&m4KpGw3823',
    database: 'bamazon_db'
});

connection.connect(function (err) {
    if (err) throw err;
    display();
});

var display = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log(res);
        inquirer.prompt({
            name: "choice",
            type: "list",
            choices: function (value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].item_id.toString());
                }
                return choiceArray;
            },
            message: 'Please select the item ID that you would you like to purchase?'
        }).then(function (answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id.toString() === answer.choice) {
                    var chosenItem = res[i];
                    inquirer.prompt({
                        name: "purchase",
                        type: "input",
                        message: "How many would you like to purchase?",
                        validate: function (value) {
                            if (chosenItem.stock_quantity < parseInt(value)) {
                                console.log('\nNot enough in stock. There are only ' + chosenItem.stock_quantity + ' in stock.');
                                return false;
                            }
                            return isNaN(value) === false;
                        }
                    });
                }
            }
        });
    });
};