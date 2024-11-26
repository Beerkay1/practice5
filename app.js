class Model {
    constructor() {
      this.strings = [];
    }
  
    generateRandomString() {
      const length = Math.floor(Math.random() * 10) + 5; // 5-15 karakter arası
      let result = '';
      for (let i = 0; i < length; i++) {
        const charCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97; // a-z ASCII
        result += String.fromCharCode(charCode);
      }
      return result;
    }
  
    addString() {
      const newString = this.generateRandomString();
      this.strings.push(newString);
      return newString;
    }
  
    deleteString(index) {
      if (index >= 0 && index < this.strings.length) {
        this.strings.splice(index, 1);
      }
    }
  
    getAllStrings() {
      return this.strings;
    }
  }
  