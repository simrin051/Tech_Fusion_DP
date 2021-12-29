const reader = require("readline-sync");
let name = reader.question(" Enter the name");
let unitTestMarks=0,preFinalMarks=0,finalMarks=0,studentName="";
var students=new Map([]);
for(var i=0;i<3;i++)
{
studentName=reader.question(" Enter the student name");
unitTestMarks=reader.question(" Enter the unit test marks");
preFinalMarks=reader.question(" Enter the pre final marks");
finalMarks=reader.question(" Enter the final marks");
students.set(studentName,eval(parseInt(unitTestMarks)+parseInt(preFinalMarks)+parseInt(finalMarks)));
}


var sum=0,avg=0;


// sort by value
const marks = new Map([...students.entries()].sort((a, b) => a[1] - b[1]));
var sizeOfMarksMap=marks.size;
console.log("Size of Maks Map "+sizeOfMarksMap);

// find highest mark
var i=0,highestMark=0;
marks.forEach((mark)=>{
    if(i==2){
    highestMark=(mark);
    }
    i++;
})

// find the students name with highest score
 i = 0;
for(var [key,value] of students) {
  if(value==highestMark)
  {
      console.log("Student's name "+key);
  }
  ++i;
}


//find the sum
students.forEach((num)=>{
sum=sum+num;
});
console.log("Sum "+sum);

//find the average
avg=sum/marks.size;
console.log("Avg "+avg);