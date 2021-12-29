function PalindromePartition(s: string):string[][]
{
    var listPalindromeStrings: string[][]=[];
    var palindromeStrings: string[]=[];
    var str: string='';
  return  findSubstrings(0,s,listPalindromeStrings,palindromeStrings,str);
}
function findSubstrings(ptr: number, s: string,listPalindromeStrings: string[][],palindromeStrings :string[],str :string): string[][]
{
    for(var i=0;i<s.length;i++) {
        for(var j=i+1;j<s.length;j++) {
            str=s.substring(i,j);
           
            if(palindromeString(str)) {
                palindromeStrings.push(str);
            }
        }
        if(j==str.length) {
            listPalindromeStrings.push(palindromeStrings);
            palindromeStrings=[];
        }
    }

return listPalindromeStrings;
}

function palindromeString(str: string) {
    var temp=str;
    var reverseStr=temp.split("").reverse().join("");
    if(reverseStr==str)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(PalindromePartition("aab"));