var password_hashes = {
  'alice':   "0399e502ff355767c35b2782df8049290791cfffc646b61e137526718b68cb22",
  'bob':     "1aba063fede50d807e92c4490914e4238af7af4f8923ad2090e014f07c7020a0",
  'charlie': "04ed7b7defc2d736f5c1a816ab8cd4afb486745abd7526c4cb48d0187133817b",
  'dazza':   "c15592e2c40543c7aa02e2f9570e667eb62fb2c19a569ed96cf9e0847d2c1f21"
};

var balances = {
  'alice':   100,
  'bob':     50,
  'charlie': 0,
  'dazza':   0
};

var initialise = function() {
  activateTransferButton();
  listBalances();
}

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

var listBalances = function() {
  var table = "<table>\n" +
              "<tr><th>User</th><th>Balance</th></tr>\n";
  Object.keys(balances).forEach(function(user) {
    table += `<tr><td>${user}</td><td>${balances[user]}</td></tr>\n`;
  })
  table += "</table>";
  replaceElement("balances", table);
}

var transfer = function(from, to, amount, password) {
  var amount = +amount; // convert string to number

  if (balances[from] == undefined) {
    replaceElement("error", `From user '${from}' does not exist`);
    return;
  }

  if (balances[to] == undefined) {
    replaceElement("error", `To user '${to}' does not exist`);
    return;
  }

  if ( amount > balances[from] ) {
    replaceElement("error", `'${from}' doesn't have that much to transfer`);
    return;
  }

  if ( password_hashes[from] != sha256(password) ) {
    replaceElement("error", `Incorrect password for ${from}`);
    return;
  }

  if ( amount < 0 ) {
    replaceElement("error", `Can't transfer a negative amount!`);
    return;
  }


  balances[to]   += amount;
  balances[from] -= amount;

  listBalances();
  replaceElement("error", ""); // clear the error
}