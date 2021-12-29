var arrStr="";
function getSubArrays(arr: number[]): number {
 
    var sum=0,small=0,large=0;
    for (var i = 0; i < arr.length; i++) {
        small=arr[i],large=arr[i];
        for (var j = i; j < arr.length; j++) {
            small=Math.min(small,arr[j]);
            large=Math.max(large,arr[j]);
            sum=sum+(large-small);
        }
    }
return sum;
}

console.log(getSubArrays([1,2,3]));