
//  light-mode
function toLightMode(){
    document.getElementById('dark-mode').style.display='block';
    document.getElementById('light-mode').style.display='none';
    let body= document.getElementById('body');
    body.style.backgroundColor='white';


    document.getElementById('hamburger').style.color='black';

    document.getElementById('navbar').style.boxShadow=box='0 1px 7px rgba(0, 0, 0, 0.379)'; 

    document.getElementsByTagName('header')[0].classList.add('header-background-light');
    document.getElementsByTagName('header')[0].classList.remove('header-background-dark');
    let letsTalkBtn= document.getElementsByClassName('lets-talk-btn')[0];
    letsTalkBtn.style.backgroundColor='var(--purple)';
    letsTalkBtn.style.color="white";
    letsTalkBtn.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.2511)';


    
    let h1Tags=document.getElementsByTagName('h1')
    //loops starts from 1 because I don't want the first heading i.e.my name to change the color 
    for(let i=1;i<h1Tags.length;i++){
    h1Tags[i].style.color='black';
    h1Tags[i].style.borderColor='black'}

    document.getElementsByTagName('h1')[0].style.color='black'; 



    document.querySelector('.code-icon').style.color='black';

    if(window.innerWidth <= 635){
        document.querySelector('.Resume-button').style.color='black';
    }

    let pTags=document.getElementsByTagName('p')
    for(let i=0;i<pTags.length;i++){
        pTags[i].style.color='black';
    }
    
    document.getElementsByClassName('education')[0].style.backgroundColor='#f9fbfe';

    
    document.getElementById('MCA').style.backgroundColor='white';
    document.getElementById('CS-Hons').style.backgroundColor='white';
    document.getElementById('MCA').style.color='black';
    document.getElementById('CS-Hons').style.color='black';

    let subNameTags=document.getElementsByClassName('subname');
    for(let i=0;i<subNameTags.length;i++){
        subNameTags[i].style.color='rgb(58, 54, 54)' ;
    }
    
    let subSubNameTags=document.getElementsByClassName('sub-subname');
    for(let i=0;i<subSubNameTags.length;i++){
        subSubNameTags[i].style.color='rgb(58, 54, 54)';
    }


    let aboutMe = document.querySelector('.about-me');
    aboutMe.style.border='2px solid black';
    aboutMe.style.boxShadow=' 7px 7px 2px black';
    aboutMe.style.backgroundColor='#ffa27b;';


    document.querySelector('body').style.color='black';

    document.querySelector('.skills h1').style.color='white';
    document.querySelector('.skills h1').style.borderBottom='5px solid white';

    document.querySelector('.projects').style.backgroundColor="white";
    document.querySelector('#project-1').innerHTML="<img src=\"images/Project-1.png\">";
    document.querySelector('#project-2').innerHTML="<img src=\"images/Project-2.png\">";
    document.querySelector('#project-3').innerHTML="<img src=\"images/Project-3.png\">";

    document.querySelector('#wave-2').innerHTML="<img src=\"images/background-curve-2.png\">"
    document.querySelector('#wave-3').innerHTML="<img src=\"images/background-curve-3.png\">"

    document.querySelector('.').innerHTML="<img src=\"images/background-curve-3.png\">"



    }

   
 // dark-mode
 function toDarkMode(){
    document.getElementById('light-mode').style.display='block';
    document.getElementById('dark-mode').style.display='none';
    let body= document.getElementById('body');
    body.style.backgroundColor='var(--offblack)';
    body.style.color='white';
    
    document.getElementById('hamburger').style.color='white';

    document.getElementById('navbar').style.boxShadow=' 0 1px 7px rgba(255, 255, 255, 0.379)'; 

    document.querySelector('.Resume-button').style.color='white';
    
    document.querySelector('.code-icon').style.color='white';

    document.getElementsByTagName('header')[0].classList.add('header-background-dark');
    document.getElementsByTagName('header')[0].classList.remove('header-background-light');


    let letsTalkBtn= document.getElementsByClassName('lets-talk-btn')[0];
    letsTalkBtn.style.backgroundColor='var(--purple)';
    letsTalkBtn.style.color="white";
    letsTalkBtn.style.boxShadow='0 2px 4px rgba(255, 255, 255, 0.251)';
    

   let h1Tags=document.getElementsByTagName('h1')
   for(let i=1;i<h1Tags.length;i++){
    h1Tags[i].style.color='white';
    h1Tags[i].style.borderColor='white';
   }

   document.getElementsByTagName('h1')[0].style.color='white';

   let pTags=document.getElementsByTagName('p')
    for(let i=0;i<pTags.length;i++){
        pTags[i].style.color='white';
    }
   
    document.getElementsByClassName('education')[0].style.backgroundColor='black';
    document.getElementById('CS-Hons').style.backgroundColor='var(--grey)';
    document.getElementById('MCA').style.backgroundColor='var(--grey)';
    document.getElementById('CS-Hons').style.color='white';
    document.getElementById('MCA').style.color='white';

    let subNameTags=document.getElementsByClassName('subname');
    for(let i=0;i<subNameTags.length;i++){
        subNameTags[i].style.color='white';
    }
    
    let subSubNameTags=document.getElementsByClassName('sub-subname');
    for(let i=0;i<subSubNameTags.length;i++){
        subSubNameTags[i].style.color='white';
    }

    
    let aboutMe = document.querySelector('.about-me');
    aboutMe.style.border='2px solid white';   
    aboutMe.style.boxShadow=' 7px 7px 2px white';
    aboutMe.style.backgroundColor='#FF7F4A';
    aboutMe.style.color='black';

    document.querySelector('body').style.color='white';

    document.querySelector('.projects').style.backgroundColor="black";
    document.querySelector('#project-1').innerHTML="<img src=\"images/Project-1-dark.png\">";
    document.querySelector('#project-2').innerHTML="<img src=\"images/Project-2-dark.png\">";
    document.querySelector('#project-3').innerHTML="<img src=\"images/Project-3-dark.png\">";

    document.querySelector('#wave-2').innerHTML="<img src=\"images/background-curve-2-dark.png\">";
    document.querySelector('#wave-3').innerHTML="<img src=\"images/background-curve-3-dark.png\">";
 }

 
 
