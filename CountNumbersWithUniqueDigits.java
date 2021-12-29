import java.util.Scanner;

public class CountNumbersWithUniqueDigits {
public static void main(String[] args) {
	// Formula dp[i]=dp[i-1]*(10-i+1)
	
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the value of n");
	int n=sc.nextInt();
	int[] dp=new int[n+1];
	dp[0]=1;
	dp[1]=9;
	int res=10; //when n=1
	for(int i=2;i<=n;i++) {
		
			dp[i]=dp[i-1]*(10-i+1);
			res=res+dp[i];
		
	}
	System.out.print(res);
}
}
