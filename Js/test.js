function check(){
    var grade = 0;
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
    
    document.write(grade);
}