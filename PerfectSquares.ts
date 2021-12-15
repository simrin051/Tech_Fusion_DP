
//https://www.youtube.com/watch?v=aZuQXkO0-XA
function perfectsquares(n: number)
{
    var rem=0,min=0;
    var dp=new Array(n+1);
    dp[0]=0;
    dp[1]=1;

    for(var i=2;i<=n;i++)
    {
        min=Number.MAX_VALUE;
        for(var j=1;j*j<=i;j++)
        {
            rem=i-(j*j);
            if(dp[rem]<min)
            {
                min=dp[rem];
            }
        }
        dp[i]=min+1;
    }
    console.log(dp[n]);
}

perfectsquares(4);