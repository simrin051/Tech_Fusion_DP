function BestTimeToBuyAndSellStockWithCoolDown(prices: number[]): number{
	
	var buy=-3000,nextBuy=0,rest=0,nextRest=0,sell=0,nextSell=0;

	for(var i=0;i<prices.length;i++)
	{
		nextBuy=Math.max(buy,rest-prices[i]);
		nextSell=Math.max(buy+prices[i],sell);
		nextRest=Math.max(sell,rest);
		buy=nextBuy;
		rest=nextRest;
		sell=nextSell;
	}
	return sell;
}

/**
 * 3 states
 * https://www.youtube.com/watch?v=GY0O57llkKQ
 * nextBuy - The first mandatory state is rest-prices[i] hence buy is set to -3000
 * nextSell - Has to compare the last sell and if bought condition
 * nextRest - Has only 2 conditions either remain in last cooling period or be in sell state ( buy + prices[i])
 */ 


console.log(BestTimeToBuyAndSellStockWithCoolDown([1,2,4]));