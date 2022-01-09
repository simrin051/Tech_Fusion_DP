function checkValid(matrix: number[][]): boolean {
  let set = new Set();
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[0].length; j++) {
        if (set.has('row' + i + 'ele' + matrix[i][j])
           || (set.has('col' + j + 'ele' + matrix[i][j]))
           
           ) {
          return false;
        } else {
             if (!set.has('row' + i + 'ele' + matrix[i][j])) {
          set.add('row' + i + 'ele' + matrix[i][j]);
        }
            if (!set.has('col' + j + 'ele' + matrix[i][j])) {
          set.add('col' + j + 'ele' + matrix[i][j]);
        } 
        }
      }
    }
    return true;
  
};
