var grade = 0;
function check(){
    grade = 0;
    var q1 = document.test.question1.value;
    var q2 = document.test.question2.value;
    var q3 = document.test.question3.value;
    var q4 = document.test.question4.value;

    if(q1 == "2.528 * 10^26"){
        grade++
    }

    if(q2 == "1.594 * 10^-22"){
        grade++
    }

    if(q3 == "9.957 * 10^3"){
        grade++
    }

    if(q4 == "0.8385"){
        grade++
    }

    if(grade == 4){
        window.location.href = "4OnTest.html";
    }

    else if(grade >= 2 && grade <= 3){
        alert("you got " + grade + " questions right! (press ok to continue)");
        window.location.href = "2or3OnTest.html";
    }

    else{
        window.location.href = "0or1OnTest.html";
        if (grade == 1){
            alert("you got " + grade + " question right! (press ok to continue)");
        }
        else{
            alert("you got " + grade + " questions right! (press ok to continue)");
        }
    }
}

