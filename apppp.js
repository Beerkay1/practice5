class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.addStringButton.addEventListener('click', () => {
        const newString = this.model.addString();
        this.view.displayStrings(this.model.getAllStrings());
      });
  
      this.view.bindEvents(() => {
        const index = this.view.getSelectedStringIndex();
        this.model.deleteString(index);
        this.view.displayStrings(this.model.getAllStrings());
      });
    }
  }
  
  const app = new Controller(new Model(), new View());
  