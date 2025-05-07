'use strict';
class Node {
    constructor (name) {
        this.name = name;
        this.next = null;
    }
}

export class LinkedList {
    constructor (name) {
        this.name = name;
        this.head = '';
        this.tail = '';
    }
    
    append (value) {
        let node = new Node(value);
        if (this.head === '') {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size() {
        if (this.head !== '') {
            if (this.head.next === null) {
                return 'List size is 1 node'
            }
            let current = this.head;
            let counter = 0;
            do {
                counter++;
                current = current.next;
            }
                while (current !== null)
            return 'List size is ' + counter + ' nodes'
        }
        else {
            return "list is empty"
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
            if ((this.head.next === null) || (index === 0)) {
                return this.head
            }

            let current = this.head;
            let counter = 0;
            do {    
                counter++;
                if (current.next === null) {
                    return 'Index out of range'
                }
                current = current.next;
            }
                while (counter !== index)
            return current
        }
        else {
            return "list is empty"
        }
    }
    pop() {
        if (this.head === '' ) {
            return "list is empty"
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
            current = current.next;
        }
        while (current.next !==null );
        previous.next = null;
        this.tail = previous
        return console.log(`Tail node was successfully deleted`);
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
                return `Index of ${value} is ${index}`
            }
            index++;
            current = current.next;
        } while (current !== null);
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
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let newNode = new Node (value);
        let current = this.head;
        let previous = '';
        let oldindex = 0;
        do {
            oldindex++
            previous = current;
            current = current.next;
        if (oldindex === index ) {
            previous.next = newNode;
            newNode.next = current
            return console.log("New node was successfully inserted")
        }
        } while (current !== null)
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return console.log(`Now head is ${this.head.name}`)
        }

        let current = this.head;
        let previous = '';
        let oldindex = 0;
        do {
            oldindex++ 
            previous = current;
            current = current.next;                
            if (oldindex === index) {
                if (current === this.tail) {
                    previous.next = null
                    return console.log(`The final node ${current.name} was removed `)
                }
                previous.next = current.next;
                current.next = null;
                return console.log(`Node ${current.name} was successfully deleted`)
            }
        }
            while (current.next !== null);
                return console.log('Index is out of range')
        }
    }
