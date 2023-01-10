let thanos = document.getElementById('thanos');
thanos.style.top = - 1 + '%';
        
function dropall(){
    let par = document.getElementById('w'); 
    let body = document.querySelectorAll('*');
    let confeti = document.getElementById('confetti-wrapper');
    const confet = document.querySelectorAll('.cw');
    par.style.position = 'absolute';

    console.log(confet);
    for (const box of confet) {
      box.classList.add('confetti');
    }

    confeti.style.top = - 10 + '%';

    for(let i=0; i < body.length; i++){
        let j = 10;                
        function myLoop() {                
            body[i].style.left = j + 'px';
            thanos.style.left = - 69 + '%';        
            confeti.style.left =  - 150 + '%';
            setTimeout(function() {   
                j++;                    
                if (j < 1950) {          
                    myLoop();             
                }                       
            }, .1)
        }
        myLoop();         
        }
}