function prettyPrint(node, prefix = "", isLeft = true) {
  if (!node) {
      return;
  }
  if (node.right) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

module.exports = prettyPrint