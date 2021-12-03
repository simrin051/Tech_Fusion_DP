function minimumTotal(triangle: number[][]): number {

    var dp:number[] = new Array(triangle.length);
    dp[0]=triangle[0][0];

    if(triangle.length==1)
    {
        return dp[0];
    }

    for(var i=0;i<=triangle.length-2;i++)
        {
               for(var j=0;j<triangle[0].length;j++)
               {
                  
                    if(i==0)
                    {
                        triangle[i][j]=triangle[0][0]+Math.min(triangle[i+1][j],triangle[i+1][j+1]);
                    }
                    else
                    {
                      
                        triangle[i][j]=triangle[i][j]+Math.min(triangle[i+1][j],triangle[i+1][j+1]);
                    } 
                
                }
           
        }
    
    return (triangle[triangle.length][triangle[0].length]);
};

console.log(minimumTotal([[-10]]));