  function imgSlider(anything) {
        document.querySelector('.pepsi').src = anything;
    }
    

    function changeBgcolor(color){
        const sec = document.querySelector('.sec');
        sec.style.background = color;
    }


    function titulo(titulos){

        const titulo =  document.querySelector('.titulo');
        titulo.style.color = titulos;
        
    }


    function time(times){
    
        const time = document.querySelector('.titulo');
        time.textContent = times;
    }


    function subtitulo(sub){
        const subtitulo = document.querySelector('.subtitulo');
        subtitulo.style.color = sub;
    }

    function subtituloText(text){
        const subtituloText = document.querySelector('.subtitulo');
        subtituloText.textContent = text;
    }


    function saiba(saibaMais){
        const fundo = document.querySelector('.saibaMais');
        fundo.style.background = saibaMais;
    }