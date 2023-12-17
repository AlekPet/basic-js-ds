const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.nodesLen = 0;
  }

  getUnderlyingList() {
    if (this.nodesLen === 0) return;
    return this.head;
  }

  enqueue(value) {
    if (this.nodesLen === 0) {
      this.head = new ListNode(value);
    } else {
      let currNode = this.head; // get head node

      // Find last node, if !next, stop loop
      while (currNode.next) currNode = currNode.next;

      // Find last not with next == null, add new node
      currNode.next = new ListNode(value);
    }
    this.nodesLen += 1;
  }

  dequeue() {
    if (this.nodesLen === 0) return;
    let prevHead = this.head.value;
    this.head = this.head.next;
    this.nodesLen -= 1;
    return prevHead;
  }
}

module.exports = {
  Queue,
};
