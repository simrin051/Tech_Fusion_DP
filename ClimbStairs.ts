function climbStairs(n: number): number {
 var steps=new Array(n+1);
 steps[0]=1;
 steps[1]=2;
    
    for(var i=2;i<n;i++)
        {
            steps[i]=steps[i-1]+steps[i-2];
        }
    return steps[n-1];
};
