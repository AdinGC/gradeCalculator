
var currentGrade=0;
function calculateCurrentGrade(){
   // passes an averaging fucntion the result of a array function of an input
    var testsAvg= averageArray(convertString(document.getElementById("tests").value));
    var quizzesAvg= convertString(document.getElementById("quizzes").value);
    var homeworkAvg= convertString(document.getElementById("homework").value);
    var midtermAvg= convertString(document.getElementById("midterm").value);

    var testsValue=parseInt(document.getElementById("testsValue").value);
    var quizzesValue=parseInt(document.getElementById("quizzesValue").value);
    var homeworkValue=parseInt(document.getElementById("homeworkValue").value);
    var midtermValue=parseInt(document.getElementById("midtermValue").value);



     currentGrade =(testsAvg*(testsValue/100))+(quizzesAvg*(quizzesValue/100))+(homeworkAvg*(homeworkValue/100))+(midtermAvg*(midtermValue/100));
    document.getElementById("currentGrade").innerHTML=currentGrade;
    return currentGrade;
}

function convertString(input){
    var newArray=input.split(",");
    var finalArray=[];
    for (var i=0; i<newArray.length; i++){
       finalArray[i] = parseInt(newArray[i]);
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
    var gradeWanted= parseInt(document.getElementById("gradeWanted").value);
    var finalValue=parseInt(document.getElementById("finalValue").value);

    var finalGradeNeeded= ((gradeWanted/100)-((currentGrade*(1-(finalValue/100)))))/(finalValue);
    document.getElementById("finalGradeNeeded").innerHTML=finalGradeNeeded;

}