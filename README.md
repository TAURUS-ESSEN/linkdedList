# Linked List in JavaScript

This is a basic implementation of a **singly linked list** in JavaScript as part of the [Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) curriculum.

The project is divided into two modules:
- `linkedList.js`: contains the `Node` and `LinkedList` classes.
- `main.js`: imports and tests the linked list functionality.

## Features

The `LinkedList` class includes the following methods:

### Core methods
- `append(value)` – Adds a new node with the given value to the end of the list.
- `prepend(value)` – Adds a new node to the start of the list.
- `size()` – Returns the number of nodes in the list.
- `head` – Returns the first node.
- `tail` – Returns the last node.
- `at(index)` – Returns the node at the given index.
- `pop()` – Removes the last node from the list.

### Search methods
- `contains(value)` – Returns `true` if the value exists in the list.
- `find(value)` – Returns the index of the node with the given value or `null`.

### Utility
- `toString()` – Returns a string representation of the list in the format:  
  `( value ) -> ( value ) -> null`

### Extra credit (implemented)
- `insertAt(value, index)` – Inserts a new node at the given index.
- `removeAt(index)` – Removes the node at the given index.

### Example Output
( tiger ) -> ( lion ) -> ( dog ) -> ( cat ) -> ( Dinosaur ) -> ( hamster ) -> null
