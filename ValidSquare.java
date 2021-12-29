import java.util.Arrays;

public class ValidSquare {

	public static void main(String[] args) {
		int[] p1 = {0,0}, p2 = {1,1}, p3 = {1,0}, p4 = {0,1};	
		int[][] p= {p1,p2,p3,p4};
		// If x coordinate is same then sort using y coordinate
		Arrays.sort(p,(l1,l2)->(l1[0]==l2[0])?(l1[1]-l2[1]):(l1[0]-l2[0]));
        
		/**   After sorting the below matrix view 
		 *    p2   p3    
		 *    ******
		 *    *    *
		 *    *    *
		 *    ******
		 *    p0   p1
		 */
		
		System.out.println("After sorting");
		for(int i=0;i<p.length;i++) {
			for(int j=0;j<p[0].length;j++) {
				System.out.print(p[i][j]);
			}
			System.out.println();
		}
		
		if(check(p)) {
			System.out.println(" Valid Square ");
		}
		else
		{
			System.out.println(" Invalid square ");
		}
	}
	
	public static double dist(int[] p1,int[] p2) {
		return ((p2[1]-p1[1])*(p2[1]-p1[1]))+(p2[0]-p1[0])*(p2[0]-p1[0]);
	}
	
	public static boolean check(int[][] p) {
		/**
		 * (dist(p[0],p[3])==dist(p[1],p[2]) // For diagonals
		 */
		if((dist(p[0],p[1])==dist(p[2],p[3]))  && (dist(p[3],p[1])) == dist(p[1],p[0]) && (dist(p[0],p[2])) == dist(p[3],p[1]) && (dist(p[0],p[3])) == dist(p[1],p[2]))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
