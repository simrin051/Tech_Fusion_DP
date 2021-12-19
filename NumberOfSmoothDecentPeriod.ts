function NumberOfSmoothDecentPeriod(prices: number[])
{
    var result=0,end=0,count=0,start=0;
    for(var end=1;end<prices.length;end++)
    {
        if(prices[end]==prices[end-1]-1)
        {
            count=count+(end-start+1);
        }
        else
        {
            start=end;
            ++count;
        }
    }
    return count;
}

console.log(NumberOfSmoothDecentPeriod([3,2,1,4]));

/**
 * Output
 * Input: prices = [3,2,1,4]
Output: 7
Explanation: There are 7 smooth descent periods:
[3], [2], [1], [4], [3,2], [2,1], and [3,2,1]

Trick of this problem:

 * [3,2] will have ( 3 and 2 elements hence no need to calculate for single set)
   [2,1] will have ( 2 and 1 elements hence no need to calculate for single set)
 */