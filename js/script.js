$(document).ready(function(){
  
     $("a").click(function(){
          var gato=this.hash
         
          $("html").animate(
               {scrollTop: $(gato).offset().top - 2
               },
               800,
               )
     })
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})