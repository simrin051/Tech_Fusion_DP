package com.main.dp;

import java.util.HashMap;
import java.util.Map;

/***
 * 
 * @author user
 *Formula -  (currentIndex*count)-sum	
 https://www.youtube.com/watch?v=x7YgyUoelOs
 *
 */
public class IntervalBetweenIdenticalElements {

	public static void main(String[] args)
	{
		int[] arr= {2,1,3,1,2,3,3};
		int len=arr.length;
		int[] output=new int[arr.length];
		Map<Integer, Integer> countMap = new HashMap<>();
		Map<Integer, Integer> sumMap = new HashMap<>();
		
		//For left
		for(int i=0;i<arr.length;i++) {
			if(!sumMap.containsKey(arr[i])) {
				sumMap.put(arr[i],0);
				countMap.put(arr[i],0);
			}
			
			output[i]+=(i*countMap.get(arr[i]))-sumMap.get(arr[i]);
			countMap.put(arr[i],countMap.get(arr[i])+1);
			sumMap.put(arr[i],sumMap.get(arr[i])+i);
		}
		 
		
		//For right
		countMap = new HashMap<>();
		sumMap = new HashMap<>();
		for(int i=len-1;i>=0;i--) {
			if(!sumMap.containsKey(arr[i])) {
				sumMap.put(arr[i],0);
				countMap.put(arr[i],0);
			}
			output[i]+=((len-i-1)*countMap.get(arr[i]))-sumMap.get(arr[i]);
			countMap.put(arr[i],countMap.get(arr[i])+1);
			sumMap.put(arr[i],sumMap.get(arr[i])+(len-i-1));
		}
		 
		
		for(int i=0;i<output.length;i++) {
			System.out.print(output[i]+" ");
		}
	}
}
