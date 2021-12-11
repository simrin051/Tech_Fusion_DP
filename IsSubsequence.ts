function isSubsequence(s: string, t: string): boolean {
    var s=s.split('').sort().join('');
    var tArr=t.split('').sort();
    var count=0,pos=0,i=0;

    tArr.forEach(elem=>{
        if(s.indexOf(elem)!=-1 && i>pos)
        {
                pos=i;
               ++count; 
        }
        ++i;
    })

    if(count==s.length)
    {
        return true;
    }
    return false;
};

console.log(isSubsequence("acb","ahbgdc"));

