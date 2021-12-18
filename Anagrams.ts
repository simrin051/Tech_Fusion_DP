function isAnagram(s: string, t: string): boolean {
  var str1 = t
      .split('')
      .sort()
      .join('');
    var str2 = s
      .split('')
      .sort()
      .join('');
    

    if (str1 == str2) {
      return true;
    }
    else
    {
      return false;
    }
    
};
