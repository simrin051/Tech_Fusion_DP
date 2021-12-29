
function maxRotateFunction(arr: number[]): number {
  //  F(i) = F(i-1) + sum(nums) - (n*(nums[n-i]))
    
    var F0=0,sum=0,Fi=0,pre=0,ans=0;

    for(var i=0;i<arr.length;i++)
    {
        F0=F0+(arr[i]*i);
        sum=sum+arr[i];
    }
    
    //setting initial value
    pre=F0;
    ans=F0;
    for(var i=1;i<arr.length;i++)
    {
        Fi=pre+sum-(arr.length*(arr[arr.length-i]));
        ans=Math.max(Fi,ans);
        pre=Fi;
    }
    return ans;
}



console.log(maxRotateFunction([4,3,2,6]));