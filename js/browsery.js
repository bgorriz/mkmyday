$(document).ready(function() {

    var front = document.getElementById('navbar')
    , back_content = "<h2>Hi!</h2><p>This is make my day. A project made to learn a bit about javascript and web design. See you!</p><button id='closeCard'>&laquo; Back</button>"
    , back
    document.getElementById("flipCard").addEventListener('click',function(e){
        e.preventDefault();
        back = flippant.flip(front, back_content)
         document.getElementById("closeCard").addEventListener('click',function(e){
          e.preventDefault();
            back = back.close();
        });        
    });
                       
    });