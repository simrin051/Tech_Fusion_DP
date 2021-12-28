
var dimensions:number[][];
var counts: number[]=[];
function executeInstructions(n: number, startPos: number[], s: string ): void {

    dimensions=[];
    var x=startPos[0], y=startPos[1];
    for(var i=0;i<s.length;i++) {
        x=startPos[0],y=startPos[1];
        traverse(i,x,y);
    }

    function traverse(pos: number,x: number,y:number) {
        

        var count=0;
        
        for(var i=pos;i<s.length;i++) {
            let c=s.charAt(i);
            
            switch(c) {
                    
                case 'L': y=y-1;
                          break;
                case 'U': x=x-1;
                          break;
                case 'R': y=y+1;
                          break;
                case 'D': x=x+1;
                          break;
                    
            }
            
            if(x <0 || y< 0) {
                break;
            }
            else if(x<n && y<n) {
                console.log(x+" , "+y);
                ++count;
            }
            else {
                break;
            }
        }
      
        console.log(" Count "+count);
        counts.push(count);
        
    }
  console.log(counts);  
};

executeInstructions(3,[0,1],"RRDDLU");
