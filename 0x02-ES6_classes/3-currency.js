export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter methods
  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  // Method to display full currency
  displayFullCurrency() {
    console.log(`${this._name} (${this._code})`);
  }
}

// Example usage:
const currency = new Currency('USD', 'US Dollar');

console.log(currency.code); // 'USD'
console.log(currency.name); // 'US Dollar'

currency.name = 'Euro'; // Setter for name
console.log(currency.name); // 'Euro'

currency.displayFullCurrency(); // Output: 'Euro (USD)'

