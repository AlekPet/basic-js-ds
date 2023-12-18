const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  class LinkList {
    constructor() {
      this.head = l;
    }

    outputHead() {
      return this.head;
    }

    remove(value) {
      if (!this.head) return;

      let currNode = this.head,
        prevNode = null;

      while (currNode) {
        if (currNode.value === value) {
          if (this.head === currNode) {
            this.head = currNode.next;
          } else {
            prevNode.next = currNode.next;
            if (currNode.next && currNode.next.value === value)
              currNode = prevNode;
          }
        }
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }
  const listLinks = new LinkList(l);
  listLinks.remove(k);
  return listLinks.outputHead();
}

module.exports = {
  removeKFromList,
};
