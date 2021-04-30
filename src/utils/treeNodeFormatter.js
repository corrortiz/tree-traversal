function treeNodeFormatter(initialArray) {
  function createBranch(branchData, direction, tree) {
    if (branchData) {
      if (branchData.length > 1) {
        tree[direction] = createBinaryTree(branchData);
      } else {
        tree[direction] = { id: branchData[0] };
      }
    }

    if (branchData === null) {
      tree[direction] = null;
    }
  }

  function createBinaryTree(treeData) {
    const binaryTree = { id: treeData[0] };

    createBranch(treeData[1], 'left', binaryTree);
    createBranch(treeData[2], 'right', binaryTree);

    return binaryTree;
  }

  return createBinaryTree(initialArray);
}

console.log(
  JSON.stringify(
    treeNodeFormatter([
      'a',
      ['b', ['b1'], ['b2', ['b21'], ['b22']]],
      [
        'c',
        ['c1', ['c11', ['c111']], ['c12', null, ['c121']]],
        ['c2', null, ['c21']],
      ],
    ]),
  ),
);
