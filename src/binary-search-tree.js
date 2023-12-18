const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data);

    function addNode(node, data) {
      // Node not existts, create Node
      if (!node) return new Node(data);

      // Node data equal input data, return this Node
      if (node.data === data) return node;

      // if input data > Node.data, add to the right tree, current node
      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        // else < add to the left three, current node
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return findNodeData(this.base, data);

    function findNodeData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (data > node.data) {
        node = findNodeData(node.right, data);
      } else {
        node = findNodeData(node.left, data);
      }
      return node;
    }
  }

  remove(data) {
    if (!this.has(data)) return null;

    let removeOk = "Remove -> ";
    this.base = removeNode(this.base, data);
    return removeOk;
    /*
                    4
                   / \
                  2   5
                 / \
                1   3
                
       Data remove: 3
       1. 3 > 4 - no
       2. 3 < 4 - yes
       3. 4.left = 2[1,3],
       4. 3 > 2 - yes
       5. 2.right = [3]
       6. 3 > 3 - no
       7. 3 < 3 - no
       8. 3 == 3 - yes
       9. !3.left && !3.right - yes -> remove Node

       Data remove: 2
       1. 2 > 4 - no
       2. 2 < 4 - yes
       3. 4.left = 2[1,3],
       4. 2 > 2 - no
       5. 2 < 2 - no
       6. 2 == 2 - yes
       7. !2.left && !2.right - no
       8. 2.left == true - yes
       9. 2.left = [1]
    */

    function removeNode(node, data) {
      if (!node) return null; //

      // if data > node.data, find right
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        // if data < node.data, find left
        node.left = removeNode(node.left, data);
        return node;
      } else {
        // if node data == node.data
        if (!node.left && !node.right) {
          removeOk = removeOk + node.data;
          return null;
        } // remove this node

        if (!node.right) {
          removeOk = removeOk + node.data;
          node = node.left;
          return node;
        }

        if (!node.left) {
          removeOk = removeOk + node.data;
          node = node.right;
          return node;
        }

        //left and right exists, find max to the left
        let maxToleft = node.left;
        while (maxToleft.right) {
          maxToleft = maxToleft.right;
        }

        node.data = maxToleft.data;
        node.left = removeNode(node.left, maxToleft.data);

        return node;
      }
    }
  }

  min() {
    let current = this.base;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.base;

    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
