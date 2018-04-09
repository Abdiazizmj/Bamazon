var mysql = require("mysql");
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var connection = mysql.createConnection({
    host:"localhost",
    port:8889,
    user: "root",
    password:"root",
    database:"bamazon_db",
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected");
});

function displayAll() {
    //Display all products in the store
    connection.query('SELECT * FROM bamazon_db.products', function (error, results, fields) {
    if (error) throw error;
    console.log('view all products below!');
    console.log(results);
  });
};

function getProductId(check, dbCheck) {
    rl.setPrompt('Enter product ID ');
    rl.prompt();
    rl.on('line', function(line) {
        console.log('youve enterned: ', line)
        return check(line, dbCheck);
        // process.exit(0);
    })
};

function checkUnits(input, dbFunction) {
    var units;
    var productId = input;
    rl.setPrompt('How many units?');
    rl.prompt();
    rl.on('line', function(line) {
        units = line;
        // console.log('product ID: ' + productId, 'number of units: ' + units);
        dbFunction(productId, units);
        // process.exit(0);
    })
}

//query the db to see if product is available
function checkStock(product, units) {
    // console.log('number of units: ' + units, "product ID: " + product);
    connection.query('SELECT * FROM bamazon_db.products where item_id=' + product, function (error, results, fields) {
        if (error) throw error;
        console.log('view all products below!');
        console.log(results);



        // connection.query('SELECT * FROM bamazon_db.products where stock_quantity=' + units, function (error, results, fields) {
        //     if (error) throw error;
        //     console.log('view all products below!');
        //     if(results < '[]'){
        //         console.log('product is not available!')
        //     }
        //     console.log(results);
        //   });
      });
}

// function that loads pruducts from database and then console logs results to terminal

// displayAll();

// functon that prompts customer for product ID

getProductId(checkUnits, checkStock);

// functon that prompts customer for how many units

// 