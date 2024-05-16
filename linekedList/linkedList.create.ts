/*

  JS Likned List like this, If you want to store 10, 20, 30, 40, 50 for Linked List here is the sample Object

  {
    head: {
      value: 10,
      next: {
        value: 20,
        next: {
          value: 30,
          next: {
            value: 40,
            next: {
              value: 50,
              next: null
            }
          }
        }
      }
    }
  }

  Head keep the first node of the linked list, and each node has a value and a reference to the next node.

*/

class NodeC {
  value: number;
  next: null |  null | {
    value: number;
    next: null | object;
  };
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: {
    value: number;
    next: null | {
      value: number;
      next: null | object;
    };
  };
  tail: {
    value: number;
    next: null | {
      value: number;
      next: null | object;
    };
  };
  length: number;
  
  constructor(value: number) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number) {
    const newNode = new NodeC(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: number) {
    const newNode = new NodeC(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array: number [] = []
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next as {
        value: number;
        next: null | {
          value: number;
          next: null | object;
        };
      };
    }
    return array;
  }

  insert(index: number, value: number) {
    let startIndex = 0;
    let currentNode = this.head;
    while (startIndex <= index) {
      currentNode = currentNode.next as {
        value: number;
        next: null | {
          value: number;
          next: null | object;
        };
      };
      if(startIndex === index) {

      }
      startIndex++;
    }
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.prepend(4);
myLinkedList.insert(2, 45);
// console.log(myLinkedList.printList())

console.log(myLinkedList);