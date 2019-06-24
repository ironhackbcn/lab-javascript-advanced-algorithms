window.addEventListener("load", Init);

function Init() {
  let sectionContainer = document.getElementsByClassName("container")[0];
  let divContentsStack = document.createElement("div");
  divContentsStack.setAttribute("class", "contents-stack");
  sectionContainer.appendChild(divContentsStack);

  divContentsStack = document.getElementsByClassName("contents-stack")[0];
  let h2Stack = document.createElement("h2");
  h2Stack.innerHTML = "Stack";
  divContentsStack.appendChild(h2Stack);
  let inputStack = document.createElement("input");
  inputStack.setAttribute("class", "black");
  inputStack.setAttribute("type", "text");
  inputStack.setAttribute("placeholder", "Add element to the Stack...");
  inputStack.id = "stack";
  divContentsStack.appendChild(inputStack);
  let buttonSAdd = document.createElement("button");
  let buttonSTake = document.createElement("button");
  buttonSAdd.setAttribute("class", "blue");
  buttonSTake.setAttribute("class", "red");
  buttonSAdd.innerHTML = "ADD";
  buttonSTake.innerHTML = "TAKE";
  divContentsStack.appendChild(buttonSAdd);
  divContentsStack.appendChild(buttonSTake);
  let divContentsStackHead = document.createElement("div");
  divContentsStackHead.id = "stackhead";
  divContentsStackHead.setAttribute("class", "head");
  divContentsStack.appendChild(divContentsStackHead);
  for (let i = 0; i < 10; i++) {
    let divStack = document.createElement("div");
    divStack.setAttribute("class", `stack s${i + 1}`);
    divContentsStack.appendChild(divStack);
  }
  let divContentsStackTail = document.createElement("div");
  divContentsStackTail.setAttribute("class", "tail");
  divContentsStackTail.id = "stacktail";
  divContentsStack.appendChild(divContentsStackTail);

  //Queue
  let divContentsQueue = document.createElement("div");
  divContentsQueue.setAttribute("class", "contents-queue");
  sectionContainer.appendChild(divContentsQueue);
  divContentsQueue = document.getElementsByClassName("contents-queue")[0];

  let h2Queue = document.createElement("h2");
  h2Queue.innerHTML = "Queue";
  divContentsQueue.appendChild(h2Queue);

  let inputQueue = document.createElement("input");
  inputQueue.setAttribute("class", "black");
  inputQueue.setAttribute("type", "text");
  inputQueue.setAttribute("placeholder", "Add element to the Queue...");
  inputQueue.id = "queue";
  divContentsQueue.appendChild(inputQueue);
  let buttonQAdd = document.createElement("button");
  let buttonQTake = document.createElement("button");
  buttonQAdd.setAttribute("class", "blue");
  buttonQTake.setAttribute("class", "red");
  buttonQAdd.innerHTML = "ADD";
  buttonQTake.innerHTML = "TAKE";
  divContentsQueue.appendChild(buttonQAdd);
  divContentsQueue.appendChild(buttonQTake);
  let divContentsQueueHead = document.createElement("div");
  divContentsQueueHead.id = "queuehead";
  divContentsQueueHead.setAttribute("class", "head");
  divContentsQueue.appendChild(divContentsQueueHead);

  for (let i = 0; i < 10; i++) {
    let divQueue = document.createElement("div");
    divQueue.setAttribute("class", `queue q${i + 1}`);
    divContentsQueue.appendChild(divQueue);
  }
  let divContentsQueueTail = document.createElement("div");
  divContentsQueueTail.id = "queuetail";
  divContentsQueueTail.setAttribute("class", "tail");
  divContentsQueue.appendChild(divContentsQueueTail);

  //Programming Buttons
  buttonSAdd.addEventListener("click", addingToStack);
  buttonSTake.addEventListener("click", takingToStack);
  buttonQAdd.addEventListener("click", addingToQueue);
  buttonQTake.addEventListener("click", takingToQueue);
}

function addingToStack() {
  let input = document.getElementById("stack");
  let divStack;
  let counterPositionStack = 0;
  if (input.value != "") {
    if (stack.push(input.value) === "Stack Overflow") {
      document.getElementById("stackhead").innerHTML = "STACK OVERFLOW!!!";
      document.getElementById("stackhead").style.visibility = "visible";
    } else {
      cleaningStackScreen();
      showingContentsStack();
    }
  }
  document.getElementById("stacktail").style.visibility = "hidden";
  input.value = "";
  input.focus();
}

function takingToStack() {
  let stackTail;
  let lostInformation;
  let counterPosition = 10;
  if ((lostInformation = stack.pop() === "Stack Underflow")) {
    stackTail = document.getElementById("stacktail");
    stackTail.innerHTML = "STACK UNDERFLOW!!!";
    stackTail.style.visibility = "visible";
  } else {
    console.log(lostInformation);
    cleaningStackScreen();
    showingContentsStack();
  }
  document.getElementById("stackhead").style.visibility = "hidden";
}

function addingToQueue() {
  {
    let input = document.getElementById("queue");
    console.log(input);
    let queueTail;
    let queueHead;
    let divQueue;
    if (input.value != "") {
      if (queue.enqueue(input.value) === "Queue Overflow") {
        queueHead = document.getElementById("queuehead");
        queueHead.innerHTML = "QUEUE OVERFLOW!!!";
        queueHead.style.visibility = "visible";
      } else {
        divQueue = document.getElementsByClassName(
          `q${queue.queueControl.length}`
        )[0];
        divQueue.innerHTML = input.value;
        queueTail = document.getElementById("queuetail");
        queueTail.style.visibility = "hidden";
      }
    }
  }
}
function takingToQueue() {
  let queueHead;
  let queueTail;
  let divQueue;

  if (queue.dequeue() === "Queue Underflow") {
    queueTail = document.getElementById("queuetail");
    queueTail.innerHTML = "QUEUE UNDERFLOW!!!";
    queueTail.style.visibility = "visible";
  } else {
    divQueue = document.getElementsByClassName(
      `q${queue.queueControl.length + 1}`
    )[0];
    divQueue.innerHTML = "";
    divQueue.style.backgroundColor = "#ebebeb";
    queueHead = document.getElementById("queuehead");
    queueHead.style.visibility = "hidden";
  }
}

function cleaningStackScreen() {
  for (let i = 0; i < stack.MAX_SIZE; i++) {
    document.getElementsByClassName(`s${i + 1}`)[0].innerHTML = "";
    document.getElementsByClassName(`s${i + 1}`)[0].style.background =
      "#ebebeb";
    document.getElementsByClassName(`s${i + 1}`)[0].style.color = "#ebebeb";
  }
}

function showingContentsStack() {
  let counterPosition = stack.MAX_SIZE;
  stack.stackControl.forEach(function(positionStack) {
    document.getElementsByClassName(
      `s${counterPosition}`
    )[0].innerHTML = positionStack;
    document.getElementsByClassName(`s${counterPosition}`)[0].style.color =
      "#ffffff";
    document.getElementsByClassName(
      `s${counterPosition}`
    )[0].style.backgroundColor = "#3378b5";
    counterPosition--;
  });
}
