const Node = require('./Node')

class Tree {
  constructor(data) {
    this.root = this.buildTree([...new Set(data.sort((a, b) => a - b))])
  }

  buildTree(data) {
    if (!data.length) {
      return null
    }
    const mid = Math.floor(data.length / 2)
    const root = new Node(data[mid])
    root.left = this.buildTree(data.slice(0, mid))
    root.right = this.buildTree(data.slice(mid + 1))
    return root
  }

  insert(value) {
    this.root = this._insert(this.root, value)
  }

  _insert(node, value) {
    if (!node) {
      return new Node(value)
    }
    if (value < node.data) {
      node.left = this._insert(node.left, value)
    } else if (value > node.data) {
      node.right = this._insert(node.right, value)
    }
    return node
  }

  delete(value) {
    this.root = this._delete(this.root, value)
  }

  _delete(node, value) {
    if (!node) {
      return node
    }
    if (value < node.data) {
      node.left = this._delete(node.left, value)
    } else if (value > node.data) {
      node.right = this._delete(node.right, value)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      }
      const temp = this.findMin(node.right)
      node.data = temp.data
      node.right = this._delete(node.right, temp.data)
    }
    return node
  }

  find(value) {
    return this._find(this.root, value)
  }

  _find(node, value) {
    if (!node) {
      return null
    }
    if (value === node.data) {
      return node
    } else if (value < node.data) {
      return this._find(node.left, value)
    } else {
      return this._find(node.right, value)
    }
  }

  findMin(node) {
    while (node.left) {
      node = node.left
    }
    return node
  }

  levelOrder(func) {
    if (!this.root) {
      return []
    }
    const result = []
    const queue = [this.root]
    while (queue.length) {
      const node = queue.shift()
      result.push(node.data)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      if (func) {
        func(node)
      }
    }
    return result
  }

  inorder(func, node) {
    if (!node) {
      node = this.root
    }
    if (node) {
      this.inorder(func, node.left)
      if (func) {
        func(node)
      }
      this.inorder(func, node.right)
    }
  }

  preorder(func, node) {
    if (!node) {
      node = this.root
    }
    if (node) {
      if (func) {
        func(node)
      }
      this.preorder(func, node.left)
      this.preorder(func, node.right)
    }
  }

  postorder(func, node) {
    if (!node) {
      node = this.root
    }
    if (node) {
      this.postorder(func, node.left)
      this.postorder(func, node.right)
      if (func) {
        func(node)
      }
    }
  }

  height(node) {
    if (!node) {
      return -1
    }
    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)
    return Math.max(leftHeight, rightHeight) + 1
  }

  depth(node) {
    if (!node) {
      return -1
    }
    return this.depth(node.parent) + 1
  }

  isBalanced() {
    return this._isBalanced(this.root)
  }

  _isBalanced(node) {
    if (!node) {
      return true
    }
    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false
    }
    return this._isBalanced(node.left) && this._isBalanced(node.right)
  }

  rebalance() {
    const nodes = this.levelOrder()
    this.root = this.buildTree(nodes)
  }
}


module.exports = Tree