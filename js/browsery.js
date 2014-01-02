window.onload = function () {

    var front = document.getElementById('navbar')
    , back_content = "<h2>Hi!</h2><p>This is make my day</p><button id='closeCard'>&laquo; Back</button>"
    , back
    document.getElementById("flipCard").addEventListener('click',function(e){
        e.preventDefault();
        back = flippant.flip(front, back_content)
         document.getElementById("closeCard").addEventListener('click',function(e){
          e.preventDefault();
            back = back.close();
        });        
    });
                       
    };