# Introduction to programming and smart contracts for beginners

## Sean Seefried
---

# Preliminaries

- Go to site `http://seanseefried.com/law-prog/`
- Download *Sublime Text*. (Just Google it).



---
# Why programming?

## Mathematics provides a framework for dealing precisely with notions of "what is." Computation provides a framework for dealing precisely with notions of "how to."

### -- Structure and Interpretion of Computer Programs (SICP)

---

# Why programming?

- It’s fun and rewarding
- Lots of opportunity
- Make things with virtually no resources<sup>*</sup>
- Solve problems
- Automate repetitive tasks
- Potential to scale
- Culture of knowledge generosity
- Fame and fortune awaits

---

# A word on smart contracts


- will not replace lawyers

- will just allow them to automate boring tasks

- short of developing AI, for complex moral judgements computers will probably never be used

- original definition by Nick Szabo meant a contract that was *self-enforcing*.

- We're not going to write a _real_ smart contract today

- just going to do it in JavaScript

- however, the *logic* of the smart contract will be similar

---

# Why not Ethereum today?

- too much set up for a short workshop
- logic of our smart contract will be similar
- our smart contract will be written in JavaScript and will represent
  transfers in a new cryptocurrency

---

# About JavaScript

- Made in 11 days by Brendan Eich
- Not the best language, but the most ubiquitous. It's in every browser.
- Many languages compile (translate) to JavaScript - CoffeeScript, TypeScript, PureScript -- try to ‘fix’ some of the defects.

---

# Variables

- Variables hold *values*.

```JavaScript
var my_name = "Sean";
var my_age = 38; // yes really!
```

- Variables must be *declared* and they can be *assigned*.

```JavaScript
var my_name; // declare
my_name = "Sean"; // assignment
```

or

```JavaScript
var my_name = "Sean"; // declare and assign together;
my_name = "Shane"; // change assignment of the my_name variable
```

---
# Basic data types

- *string*. Represents sequence of characters e.g. `"hello"`
- *number*. Represents numeric values e.g. `100` or `1.23`
- *boolean*. Represents either `true` or `false`.
- *undefined*. All values start out undefined.

---
# More complicated data types

- *objects*. These map *keys* to *values*. e.g. `{ "alice": 27, "bob": 33 }`
- *arrays*. These are just lists of values. e.g. `[ 10, 20, 30 ]`
- Objects and arrays can themselves contains objects and arrays!

```JavaScript
{ "ages": { "alice": 27, "bob": 33},
  "bank_balances": { "alice": 1000, "bob": 500}
}
```

---

# Accessing values in objects

- Use the *subscript* notation

```JavaScript
var ages = { "alice": 27, "bob": 33};
var x;

x = ages["alice"];
// x now has value 27 in it


```

---

# Functions

- Functions are just ways of reusing code
- They take *parameters* or *arguments*

```JavaScript
var addAge = function(ages, name, age) {
  ages[name] = age;
};

// example
addAge(ages, "charlie", 15);

// ages now has value { "alice": 27, "bob": 33, "charlie": 15 }

```

---

# Arithmetic

- can add/subtract from variables

```JavaScript
var x = 10;
var y = 20;

x -= 5; // x now is 5
y += 2; // y now is 22
x = y + 10; // x is now 32


```

---

# Hashes (SHA256)

- a *hash* in a one-way function. It's very easy to go one way, practically
  impossible to go the other way. (Would take longer than age of universe to brute force)

- `sha256("sean") == "318baf8234a494bd34941d0a82a31294875db364fedbfa5d51f01125799c59f2"`
- `sha256("seen") == "47a8dea66db04a6f2a18b6e27ef53a56f2122c0733e67f3908f1485fe1d4547f"`
- `sha256("seam") == "645ee926b3bf648ca6ebe16fa2c65501268c9e42d2d8770f450d5bf6fc778212"`

- hashes are great for storing passwords without knowing what the user's password is!

---
# Today's exercise

- we're going to finish writing a simple *smart contract* that allows users
  to transfer a cryptocurrency between themselves

- I'll show you the HTML and then we'll fill in the missing parts of some code

* Go to [`http://seanseefried.com/law-prog/token.html`](http://seanseefried.com/law-prog/token.html). Then *right-click*
  and "view page source". Then *copy-and-paste* the text into your text editor
  and save the file as `token.html` (perhaps on Desktop).

* Go to [`http://seanseefried.com/law-prog/token.js`](http://seanseefried.com/law-prog/token.js). This will display as plain
  text so no need to right-click. Just *copy-and-paste* the tet into a a new
  text editor window as save file as `token.js` (perhaps on Desktop).

* Make sure the file names are _exactly_ as written above (they are case-
  sensitive) and in the same directory/folder on your machine.

* Now open `token.html` file in your browser (I suggest Chrome or Firefox).
  If everything has worked it should look just like
  `http://seanseefried.com/law-prog/token.html`

---

# Oh dear it can be hacked!

* So, even if you complete exercises 1 through 4 there is still a vulnerability
  to this contract

* Can you work out what it is?

* Hint: try transfering a negative amount of money

* How would you fix this?

---

# Solution

You can find a solution at [http://seanseefried.com/law-prog/solutions/token.js](http://seanseefried.com/law-prog/solutions/token.js)

Try to do it yourself first though!

---

# Notes on the DAO hack

Here is the metaphor I heard for DAO hack that I really like.
Imagine that every time you go to the bank this is the procedure.

1. You ask to withdraw some money

2. The teller goes to the bank's ledger and checks you have enough money.

3. They fetch the money and hand it to you.

4. You say "thank you"

5. The teller goes back to the bank's ledger and updates the balance to
   reflect your withdrawal.

Let's say that the teller is a real stickler for politeness and will wait until
you say "thank you".

You could hack this process. **See next slide!**

---

# Notes on the DAO hack

You "hack" the bank by following this set of instructions:

1. You go to the first teller and ask for $500. They check the balance, see
   you have enough and fetch the $500 but you decide not to say "thank you".

2. You move to another teller in the bank and ask for $500, while the first
   teller is still waiting to hear "thank you". The second teller checks the
   ledger which still hasn't been updated, and fetches $500 and hands it to you.

3. Repeat process for all tellers in the bank.

4. As a bonus bit of fun, as you walk out of the bank with your stacks of cash
   you yell "thank you!" back at them. All the tellers rush to ledger and
   discover that they have been duped!
---

# Want to see a _real_ Ethereum contract?

* On the following slides you can peruse code for a _real_ Ethereum
  contract. A little more complicated than the JavaScript but not by much!

* In particular check out the `transfer` function. Really not that different!

```JavaScript
contract MyToken {
    /* Public variables of the token */
    string public standard = 'Token 0.1';
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);
```

---

```JavaScript
    /* Initializes contract with initial supply tokens
       to the creator of the contract */
    function MyToken(
        uint256 initialSupply,
        string tokenName,
        uint8 decimalUnits,
        string tokenSymbol
        ) {
        // Give the creator all initial tokens
        balanceOf[msg.sender] = initialSupply;
        // Update total supply
        totalSupply = initialSupply;
        // Set the name for display purposes
        name = tokenName;
        // Set the symbol for display purposes
        symbol = tokenSymbol;
        // Amount of decimals for display purposes
        decimals = decimalUnits;
        // Send back any ether sent accidentally
        msg.sender.send(msg.value);
    }
```

---

```JavaScript
    /* Send coins */
    function transfer(address _to, uint256 _value) {
        // Check if the sender has enough
        if (balanceOf[msg.sender] < _value) throw;
        // Check for overflows
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;
        // Subtract from the sender
        balanceOf[msg.sender] -= _value;
        // Add the same to the recipient
        balanceOf[_to] += _value;
        // Notify anyone listening that this transfer took place
        Transfer(msg.sender, _to, _value);
    }
```

---

```JavaScript
    /* Allow another contract to spend some tokens in your behalf */
    function approve(address _spender, uint256 _value)
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }
```

---

```JavaScript
    /* Approve and then comunicate the approved contract in a single tx */
    function approveAndCall(address _spender, uint256 _value, bytes _extraData)
        returns (bool success) {
        tokenRecipient spender = tokenRecipient(_spender);
        if (approve(_spender, _value)) {
            spender.receiveApproval(msg.sender, _value, this, _extraData);
            return true;
        }
    }
```

---

```JavaScript
    /* A contract attempts to get the coins */
    function transferFrom(address _from, address _to,
                          uint256 _value) returns (bool success) {
        // Check if the sender has enough
        if (balanceOf[_from] < _value) throw;
        // Check for overflows
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;
        // Check allowance
        if (_value > allowance[_from][msg.sender]) throw;
        // Subtract from the sender
        balanceOf[_from] -= _value;
        // Add the same to the recipient
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        Transfer(_from, _to, _value);
        return true;
    }
```

---

```JavaScript
    /* This unnamed function is called whenever someone tries
       to send ether to it */
    function () {
        throw;     // Prevents accidental sending of ether
    }
}
```




---
# Contact details

## Sean Seefried <sean.seefried@gmail.com>

---
