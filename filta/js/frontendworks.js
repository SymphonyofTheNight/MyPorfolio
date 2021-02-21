$(document).ready(()=>{

     window.addEventListener('unload', ()=>{
          window.scrollTo(0, 0);
      })

    const nameBtnHome = document.querySelector('.name-text');

    nameBtnHome.addEventListener('click', home);
    
    function home(){
        
       gsap.to('.container-1',{

        opacity: 0, duration: 2, filter: 'blur(10px)', 

       })
        
       setTimeout(()=>{

            window.location = 'loading_to_home.html';

       }, 2000);
       
    }

    const switcher = document.querySelector('.switcher');

    let btnSwitch = false;

    switcher.addEventListener('click', changeBg);
     
     function changeBg(){

          if(!btnSwitch){

              const blackBg = document.querySelector('.switch-black');
              blackBg.classList.remove('switch-black');
              blackBg.classList.add('switch-white');
               btnSwitch = true;
               return;

          }else{

               const whiteBg = document.querySelector('.switch-white');
               whiteBg.classList.remove('switch-white');
               whiteBg.classList.add('switch-black');
               btnSwitch = false;
               return;

          }
     }


    const cover = document.querySelector('.front-cover');
    const titlecontainer = document.querySelector('.title-container');
    const name = document.querySelector('.name');
    const changeColor = document.querySelector('.change-color');
    const meter = document.querySelector('.meter');
    const links = document.querySelector('.links');
    const line = document.querySelector('.label-containter');
    const line2 = document.querySelector('.title-spacing');

    let triggerWindow = 350;
    let triggerObjects = 250;
    let linetrigger = 50;

    window.addEventListener('scroll', hide);

    function hide(){

        if(window.scrollY<=linetrigger){
            line.style.transform = 'translateX(0px)';
            line.style.opacity = '1';
            line2.style.transform = 'translateX(0px)';
            line2.style.opacity = '1';
        }else{
            line.style.transform = 'translateX(-50px)';
            line.style.opacity = '0';
            line2.style.transform = 'translateX(50px)';
            line2.style.opacity = '0';
        }

        if(window.scrollY<=triggerObjects){
            cover.style.opacity = '1';
            cover.style.transition = '.5s ease-in-out';
        }else{
            cover.style.opacity = '0';
        }

        if(window.scrollY<=triggerObjects){
            titlecontainer.style.opacity= '0.8';
            titlecontainer.style.transform = 'translateX(0px)';
            cover.style.transition = '1s ease-in-out';
        }else{
            titlecontainer.style.opacity= '0';
            titlecontainer.style.transform = 'translateX(-100px)';
        }

        if(window.scrollY<=triggerObjects){
            name.style.opacity = '0.8';
            name.style.transform = 'translateY(0px)';
            name.style.transition = '1s ease-in-out';
        }else{
            name.style.opacity = '0';
            name.style.transform = 'translateY(-100px)';
        }

        if(window.scrollY<=triggerObjects){
           changeColor.style.opacity = '0.8';
           changeColor.style.transform = 'translateY(0px)';
           changeColor.style.transition = '1s ease-in-out';
        }else{
            changeColor.style.opacity = '0';
            changeColor.style.transform = 'translateY(-100px)';
        }

        if(window.scrollY<=triggerObjects){
            meter.style.opacity = '0.8';
            meter.style.transform = 'translateY(0px)';
            meter.style.transition = '1s ease-in-out';
        }else{
            meter.style.opacity = '0';
            meter.style.transform = 'translateY(100px)';
        }

        if(window.scrollY<=triggerObjects){
            links.style.opacity = '0.8';
            links.style.transform = 'translateY(0px)';
            links.style.transition = '1s ease-in-out';
        }else{
            links.style.opacity = '0';
            links.style.transform = 'translateY(100px)';
        }

        if(window.scrollY<=triggerWindow){
            cover.style.display = 'block';
        }else{
            cover.style.display = 'none';
        }

    }

    hide();



    //////////////////////////////////////////
    //
    //
    //             SCROLL MOMENTUM
    //
    //
    //////////////////////////////////////////


    class Scrooth {
     constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
       this.element = element;
       this.distance = strength;
       this.acceleration = acceleration;
       this.deceleration = deceleration;
       this.running = false;
       
       this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
       this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
       this.scroll = this.scroll.bind(this);
     }

     scrollHandler(e) {
       e.preventDefault();

       if (!this.running){
         this.top = this.element.pageYOffset || this.element.scrollTop || 0;
         this.running = true;
         this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
         this.isDistanceAsc = true;
         this.scroll();
       } else {
         this.isDistanceAsc = false;
         this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
       }
     }
   
     scroll() {
       if (this.running) {
         this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
         Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
         Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
   
         this.top += this.currentDistance;
         this.element.scrollTo(0, this.top);
         
         requestAnimationFrame(this.scroll);
       }
     }
   }
   
   const body = new Scrooth({
     element: window,
     strength: 14,
     acceleration: 1.2,
     deceleration: 0.975,
     });
   body;


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












