function jump(nums: number[]): number {
    var maxMove=0,endIndex=0,count=0;
    
     for(var i=0;i<nums.length-1;i++)
      {
          maxMove=Math.max(maxMove,i+nums[i]);
          
          if(i==endIndex)
              {
                  endIndex=maxMove;    
                  ++count;
              }
      }
      
      return count;
      
  };

var noOfJumps= jump([2,3,1,1,4]);
console.log("Number of jumps "+noOfJumps);