import java.lang.Math;
class Solution {
    public int maxSubArray(int[] arr) {
        int maxSum=Integer.MIN_VALUE,currSum=0;
		
		
			for(int j=0;j<arr.length;j++)
			{
				currSum=currSum+arr[j];
				if(currSum > maxSum)
				{
					maxSum=currSum;
					
				}
				if(currSum < 0)
				{
					currSum=0;
				}
			}
		return maxSum;
    }
}