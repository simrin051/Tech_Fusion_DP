
    const myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
     ]);
     
     myMap.set(1, 3);
     
     var name="Simrin";
     myMap.set(name, name);
     
     console.log(myMap.has("key1"))
     console.log(myMap.has("key3"))
