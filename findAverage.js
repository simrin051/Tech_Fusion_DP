function getAverages(nums, k) {
    var n = k + k + 1;
    var t = k;
    var avg = new Array(nums.length);
    while (t < 3) {
        avg[t] = -1;
        t--;
    }
    for (var i = 3; i < nums.length; i++) {
        if ((nums.length - i) > k) {
            avg[i] = findPreviousElement(i, i - k - 1, i + k, nums,avg) / n;
            console.log(avg[i]);
            i = i + k;
        }
        else {
            avg[i] = -1;
        }
    }
    return avg;
}
;
function findPreviousElement(index, prevIndex, endIndex, nums,avg) {
    var sum = 0;
    for (var i = prevIndex; i <= endIndex; i++) {
        sum = sum + nums[i];
        console.log("Sum "+sum);
    }
    console.log("Sum "+sum);
    avg[index] = sum;
    return avg[index];
}
var nums = [7, 4, 3, 9, 1, 8, 5, 2, 6], k = 3;
var result = getAverages(nums, k);
console.log("Result " + result);
