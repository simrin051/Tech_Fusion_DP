function wordBreak(s: string, wordDict: string[]): boolean{

    var str="";
    var pos:number[]=new Array(s.length+1);; 
    console.log(pos.fill(-1, 0, pos.length));

    pos.forEach(num=>{console.log(num);});

    pos[0]=0;
    for(var i=0;i<s.length;i++)
    {
        if(pos[i]!=-1)
        {
        for(var j=i+1;j<=s.length;j++)
        {
            str=s.substring(i,j);
            console.log("Str "+str);
            if(wordDict.includes(str))
            {
                pos[j]=i;
            }
        }
    }
    }

    return (pos[s.length]!=-1);
}

var s : string= "leetcode";
var wordDict = ["leet","code"];

var result=wordBreak(s , wordDict);
if(result==true)
{
    console.log("is a substring");
}
else
{
    console.log("is not a substring");
}