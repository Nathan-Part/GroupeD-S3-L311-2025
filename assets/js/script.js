window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = true;

    // Formatage du timer (exemple, '9:7' devient '09:07')
    function adjustTimer(timer){
        return (timer < 10 ? '0'+timer : timer);
    }

    function randomHexColor(x, y, z){
        return "rgb(" 
            + Math.floor(x/100 * 256) + "," 
            + Math.floor(y/100 * 256) + ","
            + Math.floor(z/100 * 256) + 
        ")";
    }

    function init(){
        // Cliquer sur le bouton change son etat (de 'play' a 'pause' et vice-versa)
        document.querySelector('.button').addEventListener('click', (event) => {
           is_run = !is_run;
           ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) ?
               document.querySelector('.button')
               .setAttribute(
                   'class',
                   document.querySelector('.button').getAttribute('class').replace(' pause', '')
               )
               :
               document.querySelector('.button')
               .setAttribute(
                   'class',
                   document.querySelector('.button').getAttribute('class')+' pause'
               );
       })

        // Si le chrono est en marche, mise a jour de l'affichage 
        // et changement de la couleur de fond chaque seconde 
        setInterval(function(){
            if(is_run){
                let oDate = new Date();
                document.querySelector('#hours').innerHTML   =  adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML =  adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML =  adjustTimer( oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML,
                    document.querySelector('#minutes').innerHTML,
                    document.querySelector('#seconds').innerHTML
                );
            }
        }, 1000)
    }

    init();
});
