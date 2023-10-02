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
