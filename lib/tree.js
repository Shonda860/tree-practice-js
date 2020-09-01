class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  add(key, value) {
    const node = new TreeNode(key, value);
    let current = this.root;

    if (this.root === null) {
      this.root = node;
      return;
    }
    while (current) {
      if (node.key > current.key) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      }
    }
  }

  // Time Complexity: O (log n)
  // Space Complexity: O (1)
  find(key) {
    let current = this.root;

    while (current) {
      if (current.key === key) {
        return current.value;
      } else if (current.key > key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // Time Complexity: ?
  // Space Complexity: ?
  inorder() {
    let array = [];
    if (!this.root) {
      return array;
    }
    const visit = (node) => {
      if (node.left) visit(node.left);
      array.push({ key: node.key, value: node.value });
      if (node.right) visit(node.right);
    };
    visit(this.root);
    return array;
  }

  // Time Complexity: ?
  // Space Complexity: ?
  preorder() {
    let array = [];
    if (!this.root) {
      return array;
    }
    const visit = (node) => {
      array.push({ key: node.key, value: node.value });
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    };
    visit(this.root);
    return array;
  }

  // Time Complexity: ?
  // Space Complexity: ?
  postorder() {
    let array = [];
    if (!this.root) {
      return array;
    }
    const visit = (node) => {
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      array.push({ key: node.key, value: node.value });
    };
    visit(this.root);
    return array;
  }

  // Time Complexity: O(n)
  // Space Complexity:
  height() {
    const getMaxHeight = (node) => {
      if (!node) {
        return 0;
      }
      const left = getMaxHeight(node.left);
      const right = getMaxHeight(node.right);
      return Math.max(left, right) + 1;
    };
    return getMaxHeight(this.root);
  }

  // Time Complexity: ?
  // Space Complexity: ?
  bfs() {
    let queue = [];
    const results = [];
    queue.push(this.root);
    if (this.root) {
      while (queue.length !== 0) {
        let current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        results.push({ key: current.key, value: current.value });
      }
    }
    return results;
  }

  // Time Complexity: ?
  // Space Complexity: ?
  toString() {
    return `${this.inorder()}`;
  }
}

module.exports = Tree;
