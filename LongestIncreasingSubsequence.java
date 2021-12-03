package com.main.dp.repeat;

import java.util.Scanner;
public class LongestIncreasingSubsequence {
public static void main(String[] args)
{
	int[] arr= {0,1,0,3,2,3};
	int[] cache=new int[arr.length];
	int len=0;
	cache[0]=1;
	for(int i=1;i<arr.length;i++)
	{
		len=1;
		for(int j=0;j<i;j++)
		{
			if(arr[i]>arr[j])
			{
				len=Math.max(len, cache[j]+1);
			}
			cache[i]=len;
		}
	}
	
	for(int i=0;i<cache.length;i++)
	{
		len=Math.max(len, cache[i]);
	}
	
	System.out.println("Length "+len);
}
}
