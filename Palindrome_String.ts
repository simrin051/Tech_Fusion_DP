
class Palindrome_String
{
listPalindromeStrings: string[][]=[];
palindromeStrings: string[]=[];
str: string='';
ans: number=1;
partition(s: string):  string[][] {

    this.findSubstrings(0,s); 
   // return this.ans;
   console.log(this.palindromeStrings);
   return this.listPalindromeStrings;
};


findSubstrings(ptr: number, s: string)
{
    this.ans=2;
    if(ptr==s.length && this.palindromeStrings.length>0)
    {
        
        this.listPalindromeStrings.push(this.palindromeStrings);
        console.log("List Palindrome Strings "+this.listPalindromeStrings);
        return;
    }
    
    for(var i=ptr;i<s.length;i++)
    {
        var  str = s.substring(ptr, i + 1);
        if(this.checkForPalindrome(str))
            {
                this.palindromeStrings.push(str);
                this.findSubstrings(i+1,s);
                 this.palindromeStrings.pop();
                console.log("Before poppig "+ this.palindromeStrings);
            }
    }
    
    
}


checkForPalindrome(s: string) : boolean
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
}

var obj= new Palindrome_String;
console.log("****************  "+obj.partition("abb"));

/**
 * Java Solution 
    List<String> temp = new ArrayList<>();
    List<List<String>> ans = new ArrayList<List<String>>();
    public List<List<String>> partition(String s) {
        find(s, 0);
        return ans;
    }
    
    public void find(String s, int ptr){
    	if(ptr == s.length() && temp.size() > 0){
    		ans.add(new ArrayList<String>(temp));
            return;
        }
        
        for(int i = ptr; i < s.length(); i++){
            String str = s.substring(ptr, i + 1);
            if(isPalindrome(str)){
                temp.add(str);
                find(s, i + 1);
                temp.remove(temp.size() - 1);
            }
        }
    }
    
    public boolean isPalindrome(String str) {
    	int i = 0;
    	int j = str.length() - 1;
    	while(i < j) {
    		if(str.charAt(i++) != str.charAt(j--))
    			return false;
    	}
    	return true;
    }

**/