import java.util.Arrays;
class Solution {
    public boolean asteroidsDestroyed(int mass, int[] asteroids) {
       int count=0;
        Arrays.sort(asteroids);
        for(int i=0;i<asteroids.length;i++) {
        
          if(mass>= asteroids[asteroids.length-1]) // This is because when sorted the highest element comes at the end. 
          {
              return true;
          }
           if(mass >=asteroids[i]) {
               mass=mass+asteroids[i];
               ++count;
              
           }
            else
            {
                return false;
            }
       }
        
        if(count==asteroids.length)
        {
            System.out.println("All the asteriods destroyed");
            return true;
        }
        else
        {
            return false;
        }
    }
}