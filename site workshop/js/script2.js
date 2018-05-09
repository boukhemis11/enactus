
function display1()
{
    var a = document.getElementsByClassName("rel1");
    
    for(var i = 0, length = a.length; i < length; i++)
    {
        a[i].style.display="none";
    } 
    var b = document.getElementsByClassName("rel2");
    for(var i = 0, length = b.length; i < length; i++)
    {
        b[i].style.display="unset"; 
    }
}



function display2()
{
    var a = document.getElementsByClassName("rel1");
    
    for(var i = 0, length = a.length; i < length; i++)
    {
        a[i].style.display="unset";
    } 
    var b = document.getElementsByClassName("rel2");
    for(var i = 0, length = b.length; i < length; i++)
    {
        b[i].style.display="none"; 
    }
}

function displayAll(){

    var a = document.getElementsByClassName("rel1");
    
    for(var i = 0, length = a.length; i < length; i++)
    {
        a[i].style.display="unset";
    } 
    var b = document.getElementsByClassName("rel2");
    for(var i = 0, length = b.length; i < length; i++)
    {
        b[i].style.display="unset"; 
    }

}

