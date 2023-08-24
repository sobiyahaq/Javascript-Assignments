const students = [
        {
        name: "Mithun",
        marks: 95,
        },
        {
        name: "Prabir",
        marks: 75,
        },
        {
        name: "Alka",
        marks: 92,
        },
        {
        name: "Shivam",
        marks: 70,
        },
        {
        name: "Farman",
        marks: 99,
        },
    ];
    function checkResult(name){
        var found = false;
        students.forEach(element => {
            if(element.name == name)
            {
                found = true;
                if(element.marks >90){
                    console.log("Congratulations",element.name,"! You have cleared the exam,");
                    return;
                }
                console.log("Sorry",element.name,"! You have not cleared the exam,");
            }
        });
        if(!found)
        {
            console.log("Invalid User !!!");
        }
    }
    checkResult("Mithun")
    checkResult("Prabir")
    checkResult("Mithun S")