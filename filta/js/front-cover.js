$(document).ready(function(){
    
    const cover = document.querySelector('.front-cover');
    const titlecontainer = document.querySelector('.title-container');
    const name = document.querySelector('.name');
    const changeColor = document.querySelector('.change-color');
    const meter = document.querySelector('.meter');
    const links = document.querySelector('.links');
    const line = document.querySelector('.label-containter');
    const line2 = document.querySelector('.title-spacing');

    let triggerWindow = 650;
    let triggerObjects = 350;
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

})
    