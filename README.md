# Tree Traversal

## Problem 1

Implement a function in JavaScript or TypeScript that takes an array as input with format: [id, leftChild, rightChild], and parse this array into a binary tree data structure, with the tree node interface as follows and return parsed data as JSON.

```javascript
interfaceBinTreeNode { id: string | number, left: BinTreeNode, right: BinTreeNode  } 
```

### Comments
I decide to use a simple function instead of a class, for me is more simple to implement is this way as I believe there is more familiarity with the syntax making it a little more simple to reed and understand 

I notice that the `sampleTree1` doesn't have null branch's and the `sampleTreeArray2` does have the nulls, in the sample 1 the nulls are part of the binary tree but for sample 2 is different, when something like this happen in the day to day I will look for clarity of the bushiness rules and try to no assume how it has to function