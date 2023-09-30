# Linked List Implementation in JavaScript

This is a simple implementation of a singly linked list in JavaScript, A linked list is a data structure that consists of a sequence of elements where each element points to the next one in the sequence, forming a chain-like structure. This implementation provides basic operations for manipulating the linked list.

### LinkedList Class

The `LinkedList` class represents the linked list and includes the following methods:

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the passed-in `value` is in the list, otherwise `false`.
- `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
- `insertAt(value, index)`: Inserts a new node with the provided `value` at the given index.
- `removeAt(index)`: Removes the node at the given index.
- `toString()`: Represents the LinkedList object as a string, e.g., `( value ) -> ( value ) -> ( value ) -> null`.

## Usage

```javascript
// Create a new linked list
const linkedList = new LinkedList();

// Perform operations on the linked list
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList.toString()); // (0) -> (1) -> (2) -> null

// See more usage examples in main.js
