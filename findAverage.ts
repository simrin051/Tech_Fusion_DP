function getAverages(nums: number[], k: number): number[] {

    var n=k+k+1;
    
    var t=k;
    
    let avg = new Array<number>(nums.length);
    
    while(t<3)
    {
           avg[t]=-1;
           t--;
    }
    
    for(var i=3;i<nums.length;i++)
        {
            if((nums.length-i)>k)
                {
                    avg[i]=findPreviousElement(i,i-k-1,i+k,avg)/n;
                    console.log(avg[i]);
                    i=i+k;
                }
            else
                {
                    avg[i]=-1;
                }
                
        }
    
    
    return avg;
    
    
};



function findPreviousElement(index, prevIndex,endIndex,avg)
{
  
    var sum=0;
    for(var i=prevIndex;i<endIndex;i++)
        {
          sum=sum+avg[i];  
        }
    avg[index]=sum;
    return avg[index];
}



var nums = [7,4,3,9,1,8,5,2,6], k = 3;
var result=getAverages(nums,k);
console.log("Result "+result);