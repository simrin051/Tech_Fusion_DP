class Solution {
    /** Video - https://www.youtube.com/watch?v=N5wnc5Svut0 */
	
    public int[] recoverArray(int[] nums) {
     List<Integer> doubleDiff = new ArrayList<>();
        Arrays.sort(nums); // To set nums[0] to be the least
		//Collecting Double Difference values
		for(int i=0;i<nums.length;i++) {
            
            int doublek=nums[i]-nums[0];
            // doublek is 0 if i==0 && doublek is 2k hence 2k is always even
            if(doublek>0 && doublek%2==0) {
			doubleDiff.add(doublek);
            }
		}
		
		for(int diff: doubleDiff) {
			List<Integer> ans=checkDiff(diff,nums);
			if(ans.size()==nums.length/2) {
              int[]  arr=ans.stream().mapToInt(Integer::intValue).toArray();

				return arr;
			}
		}
return new int[0];
    }
    
    public static List<Integer> checkDiff(int doubleDiff,int[] nums) {
		  Map<Integer, Integer> freq = new HashMap<>();
		for(int i=0;i<nums.length;i++) {
			freq.put(nums[i],freq.getOrDefault(nums[i],0)+1);
		}
		List<Integer> ans=new ArrayList<Integer>();
		for(int i=0;i<nums.length;i++) {
            // nums[i]= A-k                     nums[i]+doubleDiff=A-k+2k= A+k
			if(freq.get(nums[i])> 0 && (freq.getOrDefault(nums[i]+doubleDiff,0))>0) {
				freq.put(nums[i], freq.get(nums[i])-1); //reduce the  count to know that it is already used
				freq.put(nums[i]+doubleDiff, freq.get(nums[i]+doubleDiff)-1);
				ans.add(nums[i]+doubleDiff/2);
                        // ( A-k +(2k/2))=A    
			}
		}
		
		return ans;
	}

}