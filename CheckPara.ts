import { Stack } from "stack-typescript";

function isValid(s: string): boolean {
    
    let stack: Stack<string> = []
    
       
        
             Array.from(s).forEach(function (element){
            
                if(element=='(' || element=='[' || element=='{'  )
                {
                    stack.push(element);
                }
                else
                {
                     var c=stack.peek();
                    
                    if(c=='[' && element==']')
                    {
                        stack.pop();
                    }
                    else if(c=='{' && element=='}')
                    {
                        stack.pop();
                    }
                    else if(c=='(' && element==')')
                    {
                        stack.pop();
                    }
                }
            }
            
            
            if(stack.size()==0)
            {
                return true;
            }
            else
            {
                return false;
            }
        
    
    };