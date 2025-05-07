'use strict';
class Node {
    constructor (name) {
        this.name = name;
        this.next = '';
    }
}

class LinkedList {
    constructor (name) {
        this.name = name;
        this.head = '';
        this.tail = '';
    }
    append (value) {
        let node = new Node(value);
        console.log(node);
        if (this.head === '') {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

const list = new LinkedList("animals");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list)
console.log(list.head)
console.log(list.head.next.name)
console.log(list.tail)
// console.log(list.toString());

 console.log(list)

 const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const keys = Object.toString(person);
  console.log(person)