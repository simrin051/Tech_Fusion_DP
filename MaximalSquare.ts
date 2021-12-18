function maximalSquare(arr: string[][]): number {

    var m=arr.length, n=arr[0].length,ans=0;
    const dp: number[][] = new Array(m)
                                   .fill(0)
                                   .map(() => new Array(n)
                                   .fill(0));

 var ans=0;

  for(var i=arr.length-1;i>=0;i--)    {
		for(var j=arr[0].length-1;j>=0;j--) {
			if(i==arr.length-1 && j==arr[0].length-1) {
				dp[i][j]=Number(arr[i][j]);
			} else if ( i==dp.length-1 ) {
				dp[i][j]= Number(arr[i][j]);
			} else if (j== dp[0].length-1) {
				dp[i][j]= Number(arr[i][j]);
			}
			else
			{
				if(Number(arr[i][j])==0) {
					dp[i][j]=0;
				} else {
					var min=Math.min(dp[i][j+1],dp[i+1][j]);
					min=Math.min(min,dp[i+1][j+1]);
					dp[i][j]=min+1;
					
				}
			
			
			}
            
            if(dp[i][j]> ans){
						ans=dp[i][j];
					}
		
		}

	}
    
    return ans*ans;
};