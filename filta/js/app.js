$(document).ready(function(){
    
    window.addEventListener('unload', ()=>{
        window.scrollTo(0, 0);
    })

    //////////////////////////////////////////
    //
    //
    //              SWITCHER
    //
    //
    //////////////////////////////////////////

    const switcher = document.querySelector('.switcher');
    const changetheme = document.querySelector('.switch-black');

    switcher.addEventListener('click', changeTheme);

    var change = false;

    function changeTheme(){
 
        if(!change){

            changetheme.classList.remove('.switch-black'); 
            changetheme.classList.add('switch-white');

            change = true;
            return;

        }else{

            const changetheme_2 = document.querySelector('.switch-white');
            changetheme_2.classList.remove('switch-white');
            changetheme_2.classList.add('switch-black');

            change = false;
            return;

        }

    }  

    ////////////////////////////////////////////
    //
    //
    //               LOADING
    //
    //
    ////////////////////////////////////////////

    const nxtpage = document.querySelector('.works-text');

    nxtpage.addEventListener('click', nxtPage);

    function nxtPage(){
        
        // var blur = document.querySelector('.container-1');

        // blur.style.filter = "blur(2px)";

        gsap.to('.container-1',{

            opacity: "0", duration: 2, filter: 'blur(10px)',

        })

        setInterval(() => {
            
            window.location = 'loading_to_works.html';

        }, 2000);

    }


    const csstips = document.querySelector('.css-text');

    csstips.addEventListener('click', nxtpage2);

    function nxtpage2(){

        gsap.to('.container-1',{

            opacity: "0", duration: 2, filter: 'blur(10px)',

        })

        setInterval(() => {
            
            window.location = 'loading_to_tips.html';

        }, 2000);


    }


    //////////////////////////////////////////
    //
    //
    //             CHANGE COLOR
    //
    //
    ///////////////////////////////////////////


    const ColorChanger = document.querySelector('.switcher');

    ColorChanger.addEventListener('click', BlackAndWhite);

    let color = false;


    function BlackAndWhite(){

        if(!color){

            const theme1 = document.querySelector('.container-main');
            theme1.classList.remove('container-main');
            theme1.classList.add('container-main-white');
            color = true;
            return;

        }else{

            const theme2 = document.querySelector('.container-main-white');
            theme2.classList.remove('container-main-white');
            theme2.classList.add('container-main');
            color = false;
            return;

        }


    }















})

   





