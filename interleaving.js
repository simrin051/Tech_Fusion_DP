function isInterleave(s1, s2, s3) {
    console.log("inside interlev");
    var len1 = s1.length, len2 = s2.length, len3 = s3.length;
    //check for length
    if (len3 != (len1 + len2)) {
        
        console.log("returned false len3 != (len1 + len2)");
        return false;
    }
    else {
        //check for concat
        var concatString = s1.concat(s2);
        if (concatString == (s3)) {
            
            console.log("returned false concatString == (s3)");
            return false;
        }
        //check whether same chars are used
        s1 = s1.split("").sort().join("");
        s2 = s2.split("").sort().join("");
        s3 = s3.split("").sort().join("");
        console.log(s1+" "+s2+" "+s3);
        if (s3 == (s1.concat(s2))) {
            return true;
        }
        
    }
    return false;
}
;
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
