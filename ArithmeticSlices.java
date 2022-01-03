import java.util.stream.Stream;

public class ArithmeticSlices {
	
	/**
	 * Optimized approach
	 * class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
    
        int result=0,r=0;
        for(int l=0;l<nums.length-2;l++) {
            r=l+2;
            while(r<nums.length && nums[l+1]-nums[l]==nums[r]-nums[r-1])        {
                ++r;
            }
            result += Math.max(0, r-l-2);  ----r-l-2 is because of the relation r=l+2
        }
        return result;
    }	
}
	 * 
	 * @param args
	 */

	public static void main(String[] args) {
		int[] nums = {1,2,3,8,9,10};
		int diff=0,commonDiff=Math.abs(nums[0]-nums[1]),startPos=0,length=0,count=0;
		
		for(int i=0;i<nums.length-1;i++) {
			for(int j=i+1;j<nums.length;j++) {
				if(i==j)
					continue;
				
				if(checkIfDiff(i,j,nums))
				{
					++count;
				}
				
			}	
		}
		
		System.out.println("Count "+count);
	}
	
	public static boolean checkIfDiff(int i, int j,int[] nums) {
		int diff=0,commonDiff=0,k=0;
		if(j-i+1==3)
		{
			System.out.println(i+" , "+j);
			commonDiff=Math.abs(nums[i+1]-nums[i]);
			if(commonDiff==(Math.abs(nums[i+2]-nums[i+1])))
			{
			return true;
			}
		}
		else if((j-i+1)>3)
		{	commonDiff=Math.abs(nums[k]-nums[k+1]);
			for(k=i;k<j;k++)
			{
				diff=Math.abs(nums[k]-nums[k+1]);
				if(diff!=commonDiff) {
					return false;
				}
			}
			return true;
		}
		return false;
	}
}
