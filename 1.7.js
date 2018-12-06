const clearZero = (mat, n) => {
    let zeroIndex = [];
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            if(mat[i][j] === 0) {
                zeroIndex.push([i, j]);
            }
        }
    }

    for(let index of zeroIndex) {
        for(let i = 0; i<n; i++) {
            mat[index[0]][i] = 0;
            mat[i][index[1]] = 0
        }

    }
    return mat;
};

console.log(clearZero([[1,2,3],[0,1,2],[0,0,1]], 3));