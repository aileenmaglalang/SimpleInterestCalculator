function checkPrincipal()
{
    var principal= parseFloat(document.getElementById("principal").value);
    var moreThanZero = principal > 0;
    if (!moreThanZero)
    {
        alert("Enter a positive number")
        principal.focus()
        return false

    }

    else if (principal == " ")
    {
        alert("Enter a positive number")
        principal.focus()
        return false

    }

    
    
}





function compute()
{
    var principal= parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = (principal * rate * years) / 100;

    var year = new Date().getFullYear()+ years;

    document.getElementById("result").innerHTML=
    "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+ 
    rate+"%</mark>,\<br\>You will receive an amount of <mark>"+ interest + 
    "</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"
  
}

function updateRate()

{
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText=rateval + "%";

}
    

