function HouseRobber(nums: number[]): number
{
    var dp=new Array(nums.length);

    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);

    for(var i=2;i<nums.length;i++)
    {
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
    return dp[nums.length-1];
}

var result=HouseRobber([1,2,3,1]);
console.log(result);