function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

// if no tree, return 0; the tree has no values
// otherwise, recursively ??