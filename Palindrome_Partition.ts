var listPalindromeStrings: string[][]=[];
var palindromeStrings: string[]=[];
var str: string='';

function partition(s: string): string[][] {

    listPalindromeStrings=[];
     palindromeStrings=[];
    
    
    function findSubstrings(ptr: number,palindromeStrings :string[])
    {

    if(ptr==s.length)
    {
    
        listPalindromeStrings.push(palindromeStrings);
        console.log("inside ptr "+(ptr)+" s.length  "+(s.length));
      //  return; 
    }
    
    console.log("ptr "+ptr);
    for(var i=ptr;i<s.length;i++)
    {
         str = s.substring(ptr, i + 1);
        if(checkForPalindrome(str))
            {
         findSubstrings(i+1,[...palindromeStrings,str]);
            }
    }
    
}
    findSubstrings(0,[]);
    return  listPalindromeStrings;
};




function checkForPalindrome(s: string) : boolean
{
    let charArray: string[] =s.split('');
    let reverseArray: string[] = charArray.reverse();
    let reversedStr: string = reverseArray.join('');
    if(s===reversedStr)
        {
            return true;
        }
    else
        {
            return false;
        }
}
