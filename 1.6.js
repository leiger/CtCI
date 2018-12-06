let transformImage1 = (mat, n) => {
    let newArray = [];
    for(let i = 0; i < n; i++) {
        newArray.push([]);
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            newArray[j][n-1-i] = mat[i][j];
        }
    }
    return newArray;
};

console.log(transformImage1([[1,2,3],[4,5,6],[7,8,9]],3));

let transformImage2 = (mat,n) => {
    let temp = 0;
    for(let i=0; i<n/2; i++) {
        for(let j=i; j<n-1-i; j++) {
            temp = mat[i][j];
            mat[i][j] = mat[n-1-j][i];
            mat[n-1-j][i] = mat[n-1-i][n-1-j];
            mat[n-1-i][n-1-j] = mat[j][n-1-i];
            mat[j][n-i-1] = temp;
        }
    }

    return mat;
};

console.log(transformImage2([[1,2,3],[4,5,6],[7,8,9]],3));
