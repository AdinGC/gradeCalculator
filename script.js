var aavalidate=0;

function calculateCurrentGrade(){
   // passes an averaging function the result of a array function of an input
    aavalidate=0;

    var testsAvg= averageArray(convertString(document.getElementById("tests").value));
    var quizzesAvg= averageArray(convertString(document.getElementById("quizzes").value));
    var homeworkAvg= averageArray(convertString(document.getElementById("homework").value));
    var midtermAvg= averageArray(convertString(document.getElementById("midterm").value));




    tableColor(document.getElementById("homeworkRow"),homeworkAvg);
    tableColor(document.getElementById("quizzRow"),quizzesAvg);
    tableColor(document.getElementById("testRow"),testsAvg);
    tableColor(document.getElementById("midtermRow"),midtermAvg);





    var testsValue=parseInt(document.getElementById("testsValue").value);
    var quizzesValue=parseInt(document.getElementById("quizzesValue").value);
    var homeworkValue=parseInt(document.getElementById("homeworkValue").value);
    var midtermValue=parseInt(document.getElementById("midtermValue").value);



    if(aavalidate==0) {
        currentGrade = (testsAvg * (testsValue / 100)) + (quizzesAvg * (quizzesValue / 100)) + (homeworkAvg * (homeworkValue / 100)) + (midtermAvg * (midtermValue / 100));
        document.getElementById("currentGrade").innerHTML = currentGrade;
        return currentGrade;
    }else{
        document.getElementById("currentGrade").innerHTML = "A grade you entered is over the maximum (120%)";
    }



    return currentGrade;

}

function tableColor(element,grade){
    if (grade>=90){
        element.style.background = "green";

    }
    if (grade>=80 && grade<90){
        element.style.background = "yellow";

    }
    if (grade<80 && grade>=70){
        element.style.background = "orange";
    }
    if (grade<70 ){
        element.style.background = "red";
    }


}
function convertString(input){
    var newArray=input.split(",");
    var finalArray=[];
    for (var i=0; i<newArray.length; i++){
       finalArray[i] = parseInt(newArray[i]);
       if(parseInt(newArray[i])>150){
           aavalidate+=1

       }
    }
   console.log(finalArray);
    return finalArray;

}

function averageArray(array){
    var sum=0;
    for (var i=0; i<array.length; i++){
        sum += array[i]

    }
    console.log(sum);
    return (sum/array.length);

}

function calculateGradeNeeded(){
    var currentGrade=calculateCurrentGrade();
    var gradeWanted= parseInt(document.getElementById("gradeWanted").value);
    var finalValue=(parseInt(document.getElementById("finalValue").value))/100;

    var finalGradeNeeded= ((gradeWanted)-(((currentGrade)*(1-(finalValue)))))/(finalValue);
    document.getElementById("finalGradeNeeded").innerHTML=finalGradeNeeded;

}
