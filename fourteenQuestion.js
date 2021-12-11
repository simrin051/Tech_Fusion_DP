var person1={
    name:"Ram", age:"2500", power:"Treta"
};

var person2={
    name:"Krishna", age:"2325", power:"Dwapar"
}

var price=35;

calculate(person1,person2);
function calculate(person1,person2)
{
    var person1Name=person1.name;
    var priceForPerson1=calculatePrice(person1Name);
    var person2Name=person2.name;   
    var priceForPerson2=calculatePrice(person2Name);
    console.log("priceForPerson1 "+priceForPerson1+" priceForPerson2 "+priceForPerson2);
}

function calculatePrice(name)
{
    var arr=name.split("");
    var sum=0;
    const sum1=arr.map(x => sum=sum+35);
    console.log("Sum "+sum1);
    return (sum1[sum1.length-1]);
}