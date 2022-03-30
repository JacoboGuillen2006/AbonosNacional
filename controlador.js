let boton=document.getElementById ("boton") 
    boton.addEventListener ("click",function(event){

        alert("hiciste click")


        let selector=document.getElementById("selector").value
        alert("ustred eligio el"+selector)
        switch(selector){
            case "1":
                alert("elgiste la sur-norte")
                break 
            case "2":
                alert("elgiste la oriental")
                break 
            case "3":
                 alert("elgiste la occidental")
                 break   
        }  
        
        
    } )