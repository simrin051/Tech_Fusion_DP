function CoinChange(m: number,n: number,arr: number[]): number {
    
    var table: number[]=new Array(n+1);
    table.fill(0, 0, table.length);
    table[0]=1;
    for(var i=0;i<m;i++)
    {
        for(var j=arr[i];j<=n;j++)
        {
            table[j]=table[j]+table[j-arr[i]];
        }
    }
    return table[n];
}

var arr: number[]=[1,2,3];
console.log(CoinChange(arr.length,4,arr));
