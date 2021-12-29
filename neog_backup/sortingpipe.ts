
import { of } from 'rxjs/operators';
export class sortingpipe {
    
   sortPipe()
    {
    var direction="asc";
    let testObvs$ = of ([3, 5, 2, 1, 4]);
    testObvs$
   .pipe(
      map(results => {
         return results.sort((a, b) => (direction === "asc" ? a - b : b - a));
      })
   )
   .subscribe(res => console.log(res));
    }

}