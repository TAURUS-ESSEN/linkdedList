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
            // console.log('current = ', current)
            let counter = 0;
            do {
                counter++;
                current = current.next;
                // console.log('next = ', current)
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

    at(index) {
        if (this.head !== '') {
            if ((this.head.next === null) || (index===0)) {
                return this.head
            }

            let current = this.head;
            let counter = 0;
            do {    counter++;
                 if (current.next === null) {
                    return 'слишком большой индекс'
                }
                current = current.next;
            }
                while (counter !== index)
            return current
        }
        else {
            return "list ist empty"
        }
    }
    pop() {
            if (this.head === '' ) {
                return "list ist empty"
            }
            if (this.head === this.tail ) {
                this.head = '';
                this.tail = '';
                return "now list is empty"
            }
            let current = this.head;
            let previous = '';
            do {
                previous = current; 
                console.log("previos =", previous)
                current = current.next;
            }
            while (current.next !==null );
                console.log("ПРЕДПОСЛЕДНИЙ", previous);
                previous.next = null;
                this.tail = previous
        }

        contains(value) {
            if (this.head === '') {
                return false
            }
            let current = this.head;
            do {
                if (current.name === value) {
                    return true
                }
                current = current.next;
            } while (current !== null);
            return false
        }

        find(value) {
            if (this.head === '') {
                return null
            }
            let current = this.head;
            let index = 0; 
            do {
                if (current.name === value) {
                    return index
                }
                index++;
                current = current.next;
                
            }
            while (current !== null);
            return null
        }

        toString() {
            if (this.head === '') {
                return `( empty )`
            }
            let current = this.head;
            let str = '';
            do {
                str += `( ${current.name} ) -> `
                current = current.next;
            } while (current !== null);
            return str+'null';
        }

        insertAt(value, index) {
            list.append(value);
            let current = this.head;
            let previos = '';
            let next = '';
            let oldindex = 0;
            do {
                oldindex++
                previos = current;
                current = current.next;
                next = current.next;
              if (oldindex === index ) {
                    console.log('index ', index)
                    console.log("предыдущий", previos)
                    console.log("current", current)
                    console.log("next", next)
                    // previos.next = 
                    return console.log("OBA NA", oldindex)
                }
            } while (current !== null)


        }

    }

const list = new LinkedList("animals");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("lion");
list.prepend("TIGER");
console.log("HEAD.NAME:", list.head.name, "HEAD.NEXT:", list.head.next)
console.log("TAIl:", list.tail.name, list.tail.next)
 console.log(list);
 console.log(list.listHead())
 console.log(list.listTail())
 console.log(list.size());

console.log(list.at(2)); 
console.log("-------------------------")

list.pop()
console.log("TAIl:", list.tail.name, list.tail.next)

console.log("-------------------------")

console.log(list.contains('parrot'));
console.log("-------------------------")
console.log(list.find('cat'))
console.log("-------------------------")
console.log(list.toString());
console.log("-------------------------")
list.insertAt("Dinosaur", 3);
console.log(list.at(3))
console.log("TAIl:", list.tail.name, list.tail.next)