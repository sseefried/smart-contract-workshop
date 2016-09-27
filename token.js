var password_hashes = {
  'alice':   "0399e502ff355767c35b2782df8049290791cfffc646b61e137526718b68cb22",
  'bob':     "1aba063fede50d807e92c4490914e4238af7af4f8923ad2090e014f07c7020a0",
  'charlie': "04ed7b7defc2d736f5c1a816ab8cd4afb486745abd7526c4cb48d0187133817b",
  'dazza':   "c15592e2c40543c7aa02e2f9570e667eb62fb2c19a569ed96cf9e0847d2c1f21"
};

var balances = {
  'alice':   1000,
  'bob':     500,
  'charlie': 0,
  'dazza':   0
};

/* You don't need to understand this function */
var initialise = function() {
  activateTransferButton();
  listBalances();
}

/* You don't need to understand this function */
var activateTransferButton = function() {
  $('#transfer-btn').click(function(e) {
    e.preventDefault();
    var from = getTextBoxValue("from");
    var to   = getTextBoxValue("to");
    var amount = getTextBoxValue("amount");
    var password = getTextBoxValue("password");
    transfer(from,to,amount,password);
  });
};

/*
 * This function creates a table in HTML listing all the users balances.
 */
var listBalances = function() {
  var table = "<table>\n" +
              "<tr><th>User</th><th>Balance</th></tr>\n";
  Object.keys(balances).forEach(function(user) {
    table += `<tr><td>${user}</td><td>${balances[user]}</td></tr>\n`;
  })
  table += "</table>";
  replaceElement("balances", table);
}

/*
 * THIS IS THE FUNCTION YOU WILL BE IMPLEMENTING
 */
var transfer = function(from, to, amount, password) {
  var amount = +amount; // convert string to number

  // Code to check from user exists

  if ( balances[from] == undefined ) {
    replaceElement("error", `From user '${from}' does not exist`);
    return; // this causes function to stop right here and exit
  }

  // Exercise 1. Code to check to user exists and show error if not.


  // Exercise 2. Code to check that from user has enough funds to transfer
  // and show error if not

  // Exercise 3. Code to check that password is correct
  // and show error if not

  // Exercise 4. Increment the 'to' user's balance and decrement the 'from'
  // user's account by 'amount'

  // Exercise 5. Even if you complete 1 - 4 this contract can be HACKED!
  // Ask me to show you and we'll work out a way to prevent it!

  // This code just lists the new balances and clears any errors
  listBalances();
  replaceElement("error", ""); // clear the error
}