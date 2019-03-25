

document.getElementById('btn').addEventListener("click",function(){

    var valor1 = document.getElementById('peso').value;
    var valor2 = document.getElementById('altura').value;



    var total = valor1 / (Math.pow(valor2,2));

    document.getElementById("resultado").value=Math.round(total);

})



