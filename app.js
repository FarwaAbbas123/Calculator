function getNumber(num){
var result = document.getElementById("result");

result.value += num;
}

function clearresult(){
    var result = document.getElementById("result");
    result.value = " "; 
}


function getresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function back() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1);
   
    //delete last letter function.
}

function sign() {
    var result = document.getElementById("result");
    var n=result.value; 
   n = n * -1;
   result.value = n;
   
    
}
