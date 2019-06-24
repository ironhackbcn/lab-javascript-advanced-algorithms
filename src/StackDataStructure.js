class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE =10;
  }
  isEmpty() {
    if (this.stackControl.length === 0) {return true;}
    else return false;
  }
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) return true;
    else return false;
  }
  push(elementToAdd) {
    if (this.canPush()) {
      this.stackControl.push(elementToAdd);
      return this.stackControl;
    }else {
        return 'Stack Overflow';
    }
      
  }
  pop() {
      if (this.isEmpty()) {return 'Stack Underflow';}
     else return this.stackControl.pop();
  }
}
