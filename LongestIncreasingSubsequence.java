function lengthOfLIS(arr: number[]): number {

    var cache = new Array(arr.length);
	var len=0;
	cache[0]=1;
	for(var i=1;i<arr.length;i++)
	{
		len=1;
		for(var j=0;j<i;j++)
		{
			if(arr[i]>arr[j])
			{
				len=Math.max(len, cache[j]+1);
			}
			cache[i]=len;
		}
	}
	
	for(var i=0;i<cache.length;i++)
	{
		len=Math.max(len, cache[i]);
	}
    
    return len;
};
