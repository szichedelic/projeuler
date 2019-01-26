
function euler011() {
    var grid = readFile('./array.txt').split(",");

    for (var i = 0; i <= 19; i++) {
        grid[i] = grid[i].split(" ");
    }
    
    var numColumns = grid[0].length;
    var numRows = grid.length;
    var rightProd, bottomProd, rightDiagProd, leftDiagProd;
    var maxProd = 0;

    for (var i = 0; i <= numRows - 1; i++) {
        for (var j = 0; j <= numColumns - 1; j++) {
            if (j <= numColumns - 4) {
                rightProd = grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
            } else {
                rightProd = 0;
            }

            if (i <= numRows - 4) {
                bottomProd = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
            } else {
                bottomProd = 0;
            }

            if (i <= numRows - 4 && j <= numColumns - 4) {
                rightDiagProd = grid[i][j] * grid[i + 1][j + 1] * grid[i + 2][j + 2] * grid[i + 3][j + 3];
            } else {
                rightDiagProd = 0;
            }

            if (i <= numRows - 4 && j >= 3) {
                leftDiagProd = grid[i][j] * grid[i + 1][j - 1] * grid[i + 2][j - 2] * grid[i + 3][j - 3];
            } else {
                leftDiagProd = 0;
            }

            maxProd = Math.max(rightProd,bottomProd,rightDiagProd,leftDiagProd,maxProd);
        }
    }

    print(maxProd)
}

euler011()