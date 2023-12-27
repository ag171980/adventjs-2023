function transformTree (tree) {
  const response = {
    value: tree[0],
    left: null,
    right: null
  }
  const modelObject = {
    value: 0,
    left: null,
    right: null
  }
  for (let i = 1; i < tree.length; i++) {
    let copyObject = { ...modelObject }
    copyObject.value = tree[i]

    if (response.left === null) {
      response.left = copyObject
    } else {
      response.right = copyObject
    }
  }
  console.log(response)
  return tree
}

transformTree([3, 1, 0, 8, 12])

//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1

// {
//     value: 3,
//     left: {
//       value: 1,
//       left: {
//         value: 8,
//         left: null,
//         right: null
//       },
//       right: {
//         value: 12,
//         left: null,
//         right: null
//       }
//     },
//     right: {
//       value: 0,
//       left: null,
//       right: {
//         value: 1,
//         left: null,
//         right: null
//       }
//     }
//   }
