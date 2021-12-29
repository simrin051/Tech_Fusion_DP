function IntervalBetweenIdenticalElements(arr: number[]) {
    var curr=0;
    var dp=new Array(arr.length);
    for(var i=0;i<arr.length;i++) {
        curr=0;
        for(var j=0;j<arr.length;j++) {
            if(i==j) continue;
            else if(arr[i]==arr[j]) {
                curr=curr+Math.abs(i-j);
            }
        }
        dp[i]=curr;
    }
    return dp;
}

console.log(IntervalBetweenIdenticalElements([2,1,3,1,2,3,3]));