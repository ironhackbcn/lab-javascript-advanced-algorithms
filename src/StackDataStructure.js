class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    return this.stackControl.length === 0;
  }

  canPush() {
    if (this.stackControl.length == this.MAX_SIZE) {
      return false
    }
    return true
  }

  push(element) {
    if (this.canPush() == false) {
      return "Stack Overflow";
    }
    this.stackControl.push(element);
    console.log(this.stackControl)
    return this.stackControl;

  }

  pop() {
    if (this.stackControl.length === 0) {
      return "Stack Underflow"
    }
    return this.stackControl[this.stackControl.length - 1]
  }
}

class QueueDataStructure {

  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    return this.queueControl.length === 0;
  }

  canEnqueue() {
    if (this.queueControl.length == this.MAX_SIZE) {
      return false
    }
    return true
  }

  enqueue(element) {
    if (this.canEnqueue() == false) {
      return "Queue Overflow";
    }
    this.queueControl.unshift(element);
    return this.queueControl;
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return "Queue Underflow"
    }
    return this.queueControl[this.queueControl.length - 1]

  }
}