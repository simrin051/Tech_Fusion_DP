function findLonely(nums: number[]): number[] {
   let map =new Map<number,number>();
    var lonelyList=[];
for(var i=0;i<nums.length;i++) {
    
    if(map.has(nums[i])) {
    map.set(nums[i],map.get(nums[i])+1);
    }
    else {
    map.set(nums[i],1);    
    }
}
    
    for(var i=0;i<nums.length;i++) {
        if(map.get(nums[i])==1 && map.has(nums[i]-1)==false && map.has(nums[i]+1)== false) {
            lonelyList.push(nums[i]);
        }
    }
    
    
    return lonelyList;
};
