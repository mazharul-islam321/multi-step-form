
var firstName = document.getElementById("firstNameIn").value;
var lastName = document.getElementById("lastNameIn").value;
var email = document.getElementById("emailIn").value;
var phoneNumber = document.getElementById("phoneNumberIn").value;
var day = document.getElementById("dayIn").value;
var month = document.getElementById("monthIn").value;
var year = document.getElementById("yearIn").value;
var userName = document.getElementById("userNameIn").value;
var password = document.getElementById("passwordIn").value;

var prevBtnno = document.getElementById("prevBtnIno");
var nextBtnno = document.getElementById("nextBtnIno");

var prevBtnnt = document.getElementById("prevBtnInt");
var nextBtnnt = document.getElementById("nextBtnInt");

var prevBtnnth = document.getElementById("prevBtnInth");
var nextBtnnth = document.getElementById("nextBtnInth");

var prevBtnnf = document.getElementById("prevBtnInf");
var nextBtnnf = document.getElementById("nextBtnInf");

// var x = document.getElementsByClassName("tab");



var currentTab = 0; 
showTab(currentTab);

function showTab(n){  
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

     if( n == 0 ){
        console.log("aaa",n);
        x[0].style.display = "block";
        x[1].style.display = "none";
        x[2].style.display = "none";
        x[3].style.display = "none";
        prevBtnno.style.display = "none";
     }
            
          
        else if(n == 1){
            console.log("nnn",n);
            x[0].style.display = "none";
            x[1].style.display = "block";
            x[2].style.display = "none";
            x[3].style.display = "none";
        }
    
        else if(n == 2){
            console.log("mmm",n);
            x[0].style.display = "none";
            x[1].style.display = "none";
            x[2].style.display = "block";
            x[3].style.display = "none";
        }
    
        if(n == 3){
            console.log("yyy",n);
            x[0].style.display = "none";
            x[1].style.display = "none";
            x[2].style.display = "none";
            x[3].style.display = "block";
            nextBtnnf.style.display = "none";
        }
     
    
    
     
}



function nextBtno(m){

    let firstName = document.getElementById("firstNameIn").value;
    let lastName = document.getElementById("lastNameIn").value;  
    
        
    if(firstName == "" || lastName == ""){
        if(firstName == "" ){
            firstNameIn.style.background = "#ffdddd";
            firstNameIn.focus();
        }
        if(lastName == "" ){
            lastNameIn.style.background = "#ffdddd";
        }
        return false;
    }
    else if(firstName !== "" || lastName !== ""){
        if(firstName !== "" ){
            firstNameIn.style.background = "";
            firstNameIn.focus();
        }
        console.log("firstName :",firstName);

        if(lastName !== "" ){
            lastNameIn.style.background = "";
        }
        console.log("lastName :",lastName);
        currentTab += m;
        console.log("currentTab :",currentTab);
        showTab(currentTab);
        
    }

}
        
function nextBtnt(n){

    let email = document.getElementById("emailIn").value;
    let phoneNumber = document.getElementById("phoneNumberIn").value;

    if(email == "" || phoneNumber == ""){
        if(email == "" ){
            emailIn.style.background = "#ffdddd";
            emailIn.focus();
        }
        if(phoneNumber == "" ){
            phoneNumberIn.style.background = "#ffdddd";
        }
        return false;
    }
    else if(email !== "" || phoneNumber !== ""){
        if(email !== "" ){
            emailIn.style.background = "";
            emailIn.focus();
        }
        console.log("email :",email);

        if(phoneNumber !== "" ){
            phoneNumberIn.style.background = "";
        }
        console.log("phoneNumber :",phoneNumber);
        a=n+1;
        console.log("a :",a);
        showTab(a);
       
        
    }
    
}   
    

function nextBtnth(o){

    let day = document.getElementById("dayIn").value;
    let month = document.getElementById("monthIn").value;
    let year = document.getElementById("yearIn").value;

    if(day == "" || month == "" || year == ""){
        if(day == "" ){
            dayIn.style.background = "#ffdddd";
            dayIn.focus();
        }
        if(month == "" ){
            monthIn.style.background = "#ffdddd";
        }
        if(year == "" ){
            yearIn.style.background = "#ffdddd";
        }
        return false;
    }
    else if(day !== "" || month !== "" || year !== ""){
        if(day !== "" ){
            dayIn.style.background = "";
            dayIn.focus();
        }
        console.log("day :",day);

        if(month !== "" ){
            monthIn.style.background = "";
        }
        console.log("month :",month);

        if(year !== "" ){
            yearIn.style.background = "";
        }
        console.log("year :",year);

        y = o+2;
        console.log("y :",y);
        showTab(y);
        
    }
}


function nextBtnf(p){
    let userName = document.getElementById("userNameIn").value;
    let password = document.getElementById("passwordIn").value; 

    if(userName == "" || password == ""){
        if(userName == "" ){
            userNameIn.style.background = "#ffdddd";
            userNameIn.focus();
        }

        if(password == "" ){
            passwordIn.style.background = "#ffdddd";
        }
        return false;
    }
    else if(userName !== "" || password !== ""){
        if(userName !== "" ){
            userNameIn.style.background = "";
            userNameIn.focus();
        }
        console.log("userName :",userName);

        if(password !== "" ){
            passwordIn.style.background = "";
        }
        console.log("password :",password);
        z=p+3;
        console.log("z :",z);
        showTab(z);
        
    }
}


