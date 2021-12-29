let set = new Set<number>();
function findTheResult()
{
  var result=findEvenNumbers([2,1,3,0]);   
  console.log("Result "+result);
}

function findEvenNumbers(digits: number[]): number[] {
    var sortedDigits = digits.sort();
    let isUsed: Array<boolean> = new Array(sortedDigits.length);
    backtrack(digits, 0,"", isUsed);
    return [...set];
};

function backtrack(digits: Array<number>,  idx: number, curr: string,  isUsed: Array<boolean>) {
    console.log("Curr "+curr);
    if (idx == 3) {
        var val = Number(curr);
        if (val % 2 == 0) set.add(val);
        return;
    } 
    for (var i = 0; i < digits.length; i++) {
        if (isUsed[i] || (idx == 0 && digits[i] == 0 ) || ( idx == 2 && digits[i] % 2 != 0)) continue;
        isUsed[i] = true;
        backtrack(digits, idx + 1, curr + digits[i], isUsed);
        isUsed[i] = false;
    }
}

findTheResult();