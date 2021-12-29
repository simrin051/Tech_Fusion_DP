import java.util.HashMap;
import java.util.Map;

public class WordPattern {
public static void main(String[] args) {
Map<String,String> map=new HashMap<String,String>();
String pattern = "abba", s = "dog dog dog dog";

String[] patterns=pattern.split("");
String[] sParts=s.split(" ");
boolean res=true;
for(int i=0;i<patterns.length;i++) {
	if(map.get(patterns[i])==null)
	{
		System.out.println("inside map.get == null pattern "+i+" "+patterns[i]);
		if(!map.containsValue(sParts[i])) {
		map.put(patterns[i],sParts[i]);
		}
		else
		{
			res= false;
		}
	}
	else
	{

		{
			if(map.get(patterns[i]).equals(sParts[i])) {
				map.put(patterns[i],sParts[i]);
			}
			else
			{
				res=false;
				break;
			}
		}
		
	}
}

System.out.println("Result "+res);

}
}