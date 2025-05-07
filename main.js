'use strict';
import { LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log("head.name:", list.head.name, "head.next:", list.head.next)
console.log("tail.name:", list.tail.name, "tail.next:", list.tail.next)
console.log("-------------------------")
list.prepend("lion");
list.prepend("tiger");
console.log("head.name:", list.head.name, "head.next:", list.head.next)
console.log("tail.name:", list.tail.name, "tail.next:", list.tail.next)
console.log("-------------------------")
console.log(list.listHead())
console.log("-------------------------")
console.log(list.listTail())
console.log("-------------------------")
console.log(list.size());
console.log("-------------------------")
console.log(list.at(2)); 
console.log("-------------------------")
list.pop()
console.log("tail.name:", list.tail.name, "tail.next:", list.tail.next)
console.log("-------------------------")
console.log(list.contains('parrot'));
console.log("-------------------------")
console.log(list.find('cat'))
console.log("-------------------------")
console.log(list.toString());
console.log("-------------------------")
console.log("before :", list.toString());
list.insertAt("Dinosaur", 3);
console.log("after :", list.toString());
console.log(list.at(3))
console.log("-------------------------")
console.log("before :", list.toString());
list.removeAt(5);
console.log("after :", list.toString());