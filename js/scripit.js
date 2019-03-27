

document.getElementById('btn').addEventListener("click",function(){

    var valor1 = document.getElementById('peso').value;
    var valor2 = document.getElementById('altura').value;



    var total = valor1 / (Math.pow(valor2,2));

    document.getElementById("resultado").value=Math.round(total);

    if(total <= 18){

        document.getElementById('textResul').innerHTML="<h1>Magro</h1><br>";
    }if (total > 18){
        document.getElementById('textResul').innerHTML="Normal";
    }if(total > 26){
        document.getElementById('textResul').innerHTML="Sobrepeso";
    }
    if(total >30){
        document.getElementById('textResul').innerHTML="Obesidade";

    }

    //Outro laço para valor 0
  
   });
  





