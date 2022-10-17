const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.newRoot = null;
  }

  root() {
    return this.newRoot;
  }

  add(data) {
    this.newRoot = addWithin(this.newRoot, data);

    function addWithin(node, data) {
      if (node === null) {
        return new Node(data);
      } else if (data > node.data) {
        node.right = addWithin(node.right, data);
      } else if (data < node.data) {
        node.left = addWithin(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.newRoot, data);
    function searchWithin(node, data) {
      if (node === null) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data > node.data) {
        return searchWithin(node.right, data);
      } else {
        return searchWithin(node.left, data);
      }
    }
  }

  find(data) {
    return searchWithin(this.newRoot, data);
    function searchWithin(node, data) {
      if (node === null) {
        return null;
      } else if (data > node.data) {
        return searchWithin(node.right, data);
      } else if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.newRoot = removeNode(this.newRoot, data);
    function removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.left === null) {
        return (node = node.right);
      } else if (node.right === null) {
        return (node = node.left);
      } else {
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if (this.newRoot === null) {
      return null;
    }
    let nodeMin = this.newRoot;
    while (nodeMin.left) {
      nodeMin = nodeMin.left;
    }
    return nodeMin.data;
  }

  max() {
    if (this.newRoot === null) {
      return null;
    }
    let nodeMax = this.newRoot;
    while (nodeMax.right) {
      nodeMax = nodeMax.right;
    }
    return nodeMax.data;
  }
}

module.exports = {
  BinarySearchTree,
};
