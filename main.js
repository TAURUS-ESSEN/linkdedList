'use strict';
class Node {
    constructor (name) {
        this.name = name;
        this.next = null;
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
        if (this.head === '') {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node
    }

    size() {
        if (this.head !== '') {
            if (this.head.next === null) {
                return '1 Node'
            }

            let current = this.head;
            console.log('current = ', current)
            let counter = 0;
            do {
                counter++;
                current = current.next;
                console.log('next = ', current)
            }
                while (current !== null)
            return counter + ' nodes'
        }
        else {
            return "list ist empty"
        }
    }

    listHead() {
        return `head.name: ${this.head.name}`
    }

    listTail() {
        return `tail.name: ${this.tail.name}`
    }


    pop() {
        
    }
}

const list = new LinkedList("animals");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log("HEAD.NAME:", list.head.name, "HEAD.NEXT:", list.head.next)
console.log("TAIl:", list.tail.name, list.tail.next)
console.log("-------------------------")

list.prepend("lion");
list.prepend("TIGER");
console.log("HEAD.NAME:", list.head.name, "HEAD.NEXT:", list.head.next)
console.log("TAIl:", list.tail.name, list.tail.next)
 console.log(list);
 console.log(list.listHead())
 console.log(list.listTail())
 console.log("-------------------------")
 console.log(list.size())