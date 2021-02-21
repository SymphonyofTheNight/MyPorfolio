$(document).ready(function(){

    gsap.registerPlugin(ScrollTrigger);

    const lowDev = window.matchMedia('(max-width: 420px)');
    const mediumDevlow = window.matchMedia('(min-width: 768px)');
    const mediumDev = window.matchMedia('(min-width: 1024px)'); 
    const mydevice = window.matchMedia('(min-width: 1366px)');
    const highDev = window.matchMedia('(max-width: 1920px)');

//    if(lowDev.matches){
//         gsap.to('.me',{
//             scrollTrigger: {
//                 trigger: '.me',
//                 scrub: true,
//                 start: "top 50%",
//             },
//             y: '100%',
//             opacity: 1,
//         })

//     }

//    if(mediumDevlow.matches){
//         gsap.to('.me',{
//             scrollTrigger: {
//                 trigger: '.me',
//                 scrub: true,
//                 start: "top 50%",
//             },
//             y: '100%',
//             opacity: 1,
//         })

//     }

//    if(mediumDev.matches){
//         gsap.to('.me',{
//             scrollTrigger: {
//                 trigger: '.me',
//                 scrub: true,
//                 start: "top 50%",
//             },
//             y: '100%',
//             opacity: 1,
//         })
//     }

//    if(mydevice.matches){
//         gsap.to('.me',{
//             scrollTrigger: {
//                 trigger: '.me',
//                 scrub: true,
//                 start: "top 50%",
//             },
//             y: '100%',
//             opacity: 1,
//         })
//     }

//     if(highDev.matches){
//         gsap.to('.me',{
//             scrollTrigger: {
//                 trigger: '.me',
//                 scrub: true,
//                 start: "top 50%",
//             },
//             y: '100%',
//             opacity: 1,
//         })
//     }
   

})