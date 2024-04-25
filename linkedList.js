class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //1
  append(value) {
    let node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }

    this.size++;
  }

  //2
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  //3
  listSize() {
    return this.size;
  }
  //4
  listHead() {
    return this.head.value;
  }
  //5
  tail() {
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  //6
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.nextNode;
    }
  }

  //7
  pop() {
    let current = this.head;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.size--;
  }
  //8
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }
    return false;
  }

  //9
  find(value) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      if (current.value === value) {
        return count;
      } else {
        current = current.nextNode;
      }
    }
    return false;
  }

  //10
  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  }

  //+1
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.nextNode;
    }

    node.nextNode = current;
    previous.nextNode = node;

    this.size++;
  }

  //+2
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = current.nextNode;
    }

    this.size--;
  }

  //LOG OUT LIST
  printListvalue() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}

const list = new LinkedList();

list.prepend("one");
list.append("two");
list.append("three");
list.append("fur");
list.insertAt("three and half", 3);
//list.pop();

// list.printListvalue();
console.log(list.toString());
// console.log(list.listSize());
// console.log(list.contains("fur"));
// console.log(list.find("one"));
// console.log(list.listHead());
// console.log(list.tail());
// console.log(list.at(2));
