function mostPoints(questions: number[][]): number {
        var n = questions.length;
        var dp: number[]=new Array(n+1);
        dp.fill(0, 0, dp.length);
        for (var i = n - 1; i >= 0; --i) {
            var point = questions[i][0], brain = questions[i][1];
            dp[i] = point;
           
            if (i < n - brain) {
              dp[i] += dp[i + brain + 1];
              
            }
            dp[i] = Math.max(dp[i + 1], dp[i]);
            
        }
        return dp[0];        
};
