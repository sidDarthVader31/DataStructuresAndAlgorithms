/*
 * implementation of an array in javascript
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  /**
   * deletes the element at given index
   * @param {int} index :
   */
  delete(index) {
    const item = this.data[index];
    this._shiftItems(index);
  }
  _shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('marcelo');
newArray.push(`ramos`);
newArray.push(`vander vart`);
newArray.push(`varane`);
newArray.push(`carvajal`);
newArray.push('chicarito');
newArray.pop()
newArray.delete(2);
console.log(newArray);