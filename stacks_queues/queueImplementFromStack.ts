class MyQueue {
  backIndex: number;
  frontIndex: number;
  arr: any;
  constructor() {
    this.backIndex = 0;
    this.frontIndex = 0;
    this.arr = {};
  }

  push(x: number): void {
    this.arr[this.backIndex] = x;
    this.backIndex++;
  }

  pop(): number {
    const item = this.arr[this.frontIndex];
    delete this.arr[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  peek(): number {
    return this.arr[this.frontIndex];
  }

  empty(): boolean {
    return Object.keys(this.arr).length == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
