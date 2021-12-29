function isInterleave(s1: string, s2: string, s3: string): boolean {
        for(var i=0;i<s3.length;i++)
        {
            if(s1.includes(s3[i]) || s2.includes(s3[i]) )
            {
                if(s1.includes(s3[i]))
                {
                   s1 =s1.replace(s3[i], ''); 
                }
                else if(s2.includes(s3[i]))
                {
                    s2=s2.replace(s3[i], '');
                }
            }
        }   

        console.log(s1+","+s2);
        if(s1==="" || s2==="")
        {
               return true; 
        }
        else
        {
            return false;
        }
};


console.log(isInterleave("aabcc","dbbca","aadbbbaccc"));

