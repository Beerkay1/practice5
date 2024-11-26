class View {
    constructor() {
      this.app = document.getElementById('app');
      this.stringList = document.getElementById('stringList');
      this.addStringButton = document.getElementById('addString');
      this.deleteStringButton = document.getElementById('deleteString');
    }
  
    displayStrings(strings) {
      this.stringList.innerHTML = '';
      strings.forEach((string, index) => {
        const li = document.createElement('li');
        li.textContent = string;
        li.dataset.index = index;
        this.stringList.appendChild(li);
      });
    }
  
    getSelectedStringIndex() {
      const selected = document.querySelector('li.selected');
      return selected ? parseInt(selected.dataset.index, 10) : -1;
    }
  
    bindEvents(deleteCallback) {
      this.stringList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
          this.stringList.querySelectorAll('li').forEach((li) => li.classList.remove('selected'));
          event.target.classList.add('selected');
        }
      });
  
      this.deleteStringButton.addEventListener('click', deleteCallback);
    }
  }
  