
/**
 * Explaination : 
 * https://leetcode.com/problems/reach-a-number/discuss/112968/Short-JAVA-Solution-with-Explanation
 * @author user
 *
 */
public class ReachANumber {
	 public int reachNumber(int target) {
         target = Math.abs(target); // converting to positive number //ex -42 to 42
       int step = 0;
       int sum = 0;
       while (sum < target) {
           step++;
           sum += step;
       }
       while ((sum - target) % 2 != 0) {
           step++;
           sum += step;
       }
       return step;
   }
}
