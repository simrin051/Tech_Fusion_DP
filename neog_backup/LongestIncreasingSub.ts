function lengthOfLIS(nums: number[]): number {
    var dp:number[] = new Array(nums.length);  
    var len=0;
    for(var i=0;i<dp.length;i++)
    {
        dp[i]=1;
        for(var j=0;j<i;j++)
        {
            if(nums[i] < nums[j])
            {
                len=Math.max(len,dp[i]+1);
            }
        }
        
    }
return len;

};


console.log(lengthOfLIS([0,1,0,3,2,3]));