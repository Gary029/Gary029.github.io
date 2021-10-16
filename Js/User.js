function validate(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var male = document.getElementById("regis_male").checked
    var female = document.getElementById("regis_female").checked
    var address = document.getElementById("address").value
    var city = document.getElementById("city").value
    var agreement = document.getElementById("agreement").checked



    if(username == ''){
        alert("Username must be filled")
    }
    else if(!validateAlpha(username)){
        alert("Username cannot contain numbers") 
    }
    else if(email==''){
        alert("Email must be filled")
    }
    else if(!email.endsWith(".com")){
        alert("Invalid Email") 
    }
    else if(email.indexOf("@")==-1){
        alert("Email must contain") 
    }
    else if(email.split("@").length>2){
        alert("Invalid Email") 
    }
    else if(!male && !female){
        alert("Gender must be choosed")
    }
    else if(city==""){
        alert("Ciy must be choosed")
    }
    else if(address==""){
        alert("Address must be filled")
    }
    else if(address.length < 6){
        alert("Input full address")
    }
    else if(!agreement){
        alert("Agreement box must be checked")
    }
    else{
        alert("Register Sucessful")
    }

    function validateAlpha(username){
        var flagAlpha = 0;
    
        for(var i=0;i<username.length;i++){
            if((username.charCodeAt(i)>=65 && username.charCodeAt(i)<=90)||(username.charCodeAt(i)>=97 && username.charCodeAt(i)<=122)){
                flagAlpha=1;
            }
            else{
                flagAlpha =0;
                break;
            }
        }
    
        if(flagAlpha==1){
            return true
        }
        else{
            return false
        }
    }
}