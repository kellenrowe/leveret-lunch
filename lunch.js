/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 */

function lunchCount(garden) {
    // create count for carrots
    let totalCarrots = 0;
    // determine where the middle/start point is (other function)
    let start=findCenter(garden);
    // add cemter to total 
    totalCarrots+=garden[start[0][0]][start[0][1]];
    // compare surroundings 

    // change eaten patch to 0
    while (start[1]!==0){
        start=findNextStep(garden, start, totalCarrots);
        totalCarrots+=start[1];
    }
    // return count for carrots
    return totalCarrots;
}

function findNextStep(garden, start){
    let max=0; 
    let maxIndex;
    let row=start[0][0];
    let col= start[0][1];
    console.log(row,col);
    //west
    if (row>=0 && garden[row][col-1]>max){
        max= garden[row][col-1];
        maxIndex=[row,col-1];
    }

    //north
    if (row-1>=0 &&garden[row-1][col]>max){
        max= garden[row-1][col];
        maxIndex=[row-1,col];
    }
    //east
    if ( row>=0 && garden[row][col+1]>max){
        max= garden[row][col+1];
        maxIndex=[row,col+1];
    }
    //south 
    if ( row+1<garden.length && garden[row+1][col]>max){
        max= garden[row+1][col];
        maxIndex=[row+1,col];
    }
    console.log('max', max)
    // if max is zero, return 0;
    if (max===0){ return [0,0]};
    garden[row][col]=0;
    return [maxIndex,max]; 
}

function findCenter(garden) {
    let max=0;
    let maxIndex;
    // odd rows
    let rowStart;
    let rowEnd;
    let colStart, colEnd;
    if (garden.length % 2 === 1) {
        // find middle row
         rowStart = Math.floor(garden.length / 2);
         rowEnd= rowStart;
    } 
    // even rows
    if (garden.length % 2 === 0) {
         rowStart =(garden.length / 2)-1;
         rowEnd= rowStart+1;
    }
    // determine colum indexes
    if (garden[0].length % 2 === 1){
         colStart = Math.floor(garden[0].length / 2);
         colEnd= colStart;
    }
    if (garden[0].length % 2 === 0){
         colStart =(garden[0].length / 2)-1;
         colEnd= colStart+1;
    }
    maxIndex= [rowStart, colStart ];
    for (let i=rowStart; i<rowEnd+1; i++){
        console.log('i',i)
        for (let j=colStart; j<colEnd+1; j++){
            console.log('j',j)
            if (garden[i][j]>max){
                max= garden[i][j];
                maxIndex=[i,j];
            }
        }
    }
    return [maxIndex,max];
}

// if garden.length % 2 == 1 => math.floor to determine row
// if garden[i].length % 2 == "" ""
// if garden is even 