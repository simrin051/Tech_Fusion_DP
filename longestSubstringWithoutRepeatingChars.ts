function longestSubString(arr: string[],n: number)
{
    var maxLength=0;
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i;j<n;j++)
        {
            if(arrUnique(arr,i,j))
            {
                console.log(" Slice "+arr.slice(i,j));
                maxLength=Math.max(maxLength,j-i+1);
            }
        }
    }
    console.log("Max Length "+maxLength);
}

function arrUnique(arr: any[],i: number,j: number): boolean
{
    let visited: boolean[] = new Array(256);
    visited.fill(false,0,visited.length);
    
    for(var k=i;k<=j;k++)
    {
        if(visited[arr[k].charCodeAt(0) - "a".charCodeAt(0)]==false)
        {
            console.log("set as true");
            visited[arr[k].charCodeAt(0)-"a".charCodeAt(0)]=true;
        }
        else
        {
            return false;
        }
    }
    return true;
}

console.log(longestSubString("geeksforgeeks".split(""),"geeksforgeeks".split("").length));