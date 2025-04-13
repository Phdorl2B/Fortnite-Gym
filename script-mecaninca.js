
 function verificar(){
    var nivel = document.getElementsByName(`radsex`)
    var bronzes = document.getElementById(`iniciante`)
    var dima = document.getElementById(`medio`)
    if(nivel[0].checked){
      bronzes.style.display = (`block`)
      dima.style.display = (`none`)
    }
   else if(nivel[1].checked){
      dima.style.display = (`block`)
      bronzes.style.display = (`none`)
   }

   }
    
 


//  criar uma section com tudo para iniciantes e deixar display none, e depois aki no js eu pego e deixo ele display block