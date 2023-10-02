const Tree = require('./Tree.js')
const prettyPrint = require('./utils.js')

function main() {
  const randomNumbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  )
  console.log('Random Numbers:', randomNumbers)
  // Create a binary search tree from an array of random numbers < 100
  const bst = new Tree(randomNumbers)
  // Confirm that the tree is balanced by calling isBalanced
  console.log('\nTree is Balanced:', bst.isBalanced())
  //Print out all elements in level, pre, post, and in order.
  // Level Order of Initial Tree
  console.log('\nLevel Order of Initial Tree:', bst.levelOrder());
  // Pre Order of Initial Tree
  console.log('\nPre Order of Initial Tree:', bst.preorder())
  // Post Order of Initial Tree
  console.log('\nPost Order of Initial Tree:', bst.postorder())
  // In Order of Initial Tree
  console.log('\nIn Order of Initial Tree:', bst.inorder())

  

  //////////
  console.log('\nHeight of Initial Tree:', bst.height())
  console.log('\nLevel Order of Initial Tree:')
  prettyPrint(bst.root)

  // Test insert and check if 44 is in the three
  console.log('\nInsert number 44 in the tree with the insert method: ')
  bst.insert(44)
  prettyPrint(bst.root)

  //Test find:
  console.log('\nFind 44 using the find method:', bst.find(44))
  //Test delete:
  bst.delete(44)
  console.log('\nDelete number 44 from the tree using the delete method:')
  prettyPrint(bst.root)

  // Unbalance the tree by adding several numbers > 100.
  const randomNumbersUnbalanced = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 100) + 101
  ) // Ensure numbers > 100
  console.log('\nRandom Numbers Unbalanced:', randomNumbersUnbalanced)
  randomNumbersUnbalanced.forEach((num) => {
    bst.insert(num)
  })
  // Confirm that the tree is unbalanced by calling isBalanced.
  console.log('\nTree is Balanced:', bst.isBalanced())

  // Balance the tree by calling rebalance.
  bst.rebalance()
  // Confirm that the tree is balanced by calling isBalanced.
  console.log('\nTree is Balanced after Rebalance:', bst.isBalanced())

  console.log('\nLevel Order after Rebalance:')
  prettyPrint(bst.root)
  
}

main()
