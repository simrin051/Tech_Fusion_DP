function maxProfit(prices: number[]): number {
    var CP=Number.MAX_VALUE,SP=Number.MIN_VALUE,maxProfit=0, cpIndex=0;
    for(var i=0;i<prices.length;i++) {
        if(prices[i] < CP){
            CP=prices[i];
            cpIndex=i;
        }
        if((prices[i]-CP > maxProfit) && i>cpIndex){
            SP=prices[i];
            
            //update maxProfit
            if((SP-CP) > maxProfit) {
            maxProfit=SP-CP;
            }   
        }
        
       }
    
    return maxProfit;
};