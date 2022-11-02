/*Início - Muda a data da do "id="span""" dentro do "id="direitos-reservados"" que está dentro do "Footer" */
const mudaData = document.querySelector('#span')
const data = new Date()
const puxaData = data.getFullYear()
//mudaData.innerHTML = puxaData
/*/*Fim - Muda a data da do "id="span""" dentro do "id="direitos-reservados"" que está dentro do "Footer" */

/*Início Menu Responsivo*/
const btnMobile = document.getElementById('btn-mobile')
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


// lamp Animation




function acende() {

    if (window.innerWidth <= 1400){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-251px) translateX(-28px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(224px) translateX(28px)";
        document.getElementById('cir').style.boxShadow = "0 0 50px rgb(45, 178, 197)";
    }
    if (window.innerWidth <= 535){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-204px) translateX(-28px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(173px) translateX(28px)";
    }
    if (window.innerWidth <= 509){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-202px) translateX(-28px)";
    }
    if (window.innerWidth <= 485){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-200px) translateX(-28px)";
    }
    if (window.innerWidth <= 447){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(171px) translateX(28px)";
    }
    if (window.innerWidth <= 439){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-151px) translateX(-20px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(123px) translateX(23px)";
    }
    if (window.innerWidth <= 425){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-150px) translateX(-20px)";
    }
    if (window.innerWidth <= 405){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-174px) translateX(-18px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(154px) translateX(18px)";
    }
    if (window.innerWidth <= 402){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-172px) translateX(-18px)";
    }
    if (window.innerWidth <= 400){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(152px) translateX(18px)";
    }
    if (window.innerWidth <= 397){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-171px) translateX(-18px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(151px) translateX(18px)";
    }
    if (window.innerWidth <= 395){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-169px) translateX(-18px)";
    }
    if (window.innerWidth <= 392){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-167px) translateX(-17px)";
    }
    if (window.innerWidth <= 389){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(148px) translateX(18px)";
    }
    if (window.innerWidth <= 386){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-166px) translateX(-17px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(147px) translateX(18px)";
    }
    if (window.innerWidth <= 383){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-164px) translateX(-17px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(146px) translateX(17px)";
    }
    if (window.innerWidth <= 379){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(144px) translateX(17px)";
    }
    if (window.innerWidth <= 377){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-163px) translateX(-17px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(143px) translateX(17px)";
    }
    if (window.innerWidth <= 373){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-159px) translateX(-17px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(144px) translateX(17px)";
    }
    if (window.innerWidth <= 372){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-160px) translateX(-17px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(142px) translateX(17px)";
    }
    if (window.innerWidth <= 370){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-160px) translateX(-17px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(140px) translateX(17px)";
    }
    if (window.innerWidth <= 375){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-162px) translateX(-17px)";
    }
    if (window.innerWidth <= 368){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-158px) translateX(-16px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(141px) translateX(16px)";
    }
    if (window.innerWidth <= 367){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-158px) translateX(-16px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(140px) translateX(16px)";
    }
    if (window.innerWidth <= 364){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-158px) translateX(-16px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(141px) translateX(16px)";
    }
    if (window.innerWidth <= 362){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(137px) translateX(16px)";
    }
    if (window.innerWidth <= 360){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(137px) translateX(16px)";
    }
    if (window.innerWidth <= 356){
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(138px) translateX(16px)";
    }
    
        






  
    
    if (window.innerWidth <= 364){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-157px) translateX(-16px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(139px) translateX(17px)";
    }





    if (window.innerWidth <= 200){
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-86px) translateX(-9px)";
        document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(77px) translateX(8px)";
    }




    
    


    else {
        console.log("nada")
    }
   
}

function apaga() {
    document.getElementById('ladoesquerdo').style.transform = "rotate(0) translateY(0) translateX(0)";
    document.getElementById('ladodireito').style.transform = "rotate(0) translateY(0) translateX(0)";
    document.getElementById('cir').style.boxShadow = "none";
}

onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 0.1 || document.documentElement.scrollTop > 0.1) {
        acende()
    } else {
        apaga()
    }
}

//Donos animation
var teste = document.getElementById("acompanha");
var teste2 = document.getElementById("acompanha2");
var teste3 = document.getElementById("acompanha3");

function dono1(){

    if ( window.innerWidth <= 1400  ) {
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";
        teste.classList.add("teste")

        teste.style.width = "500px";
        teste.style.height = "500px";
        teste.style.margin = "20%";
        teste.style.marginLeft = "20%";
        document.getElementById('arthur').style.width = "490px";
        document.getElementById('arthur').style.height = "490px";

        var bye = document.querySelector('#txtfinal');
        bye.remove();


        const para = document.createElement("p");
        para.id = 'arthurDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('arthurDes');
        const text = ". Arthur { g Desenvolvedor Front End ; g Gosta de Lutar ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)
    }
    if ( window.innerWidth <= 1000  ) {
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";
        teste.classList.add("teste")

        teste.style.width = "500px";
        teste.style.height = "500px";
        teste.style.margin = "20%";
        teste.style.marginLeft = "20%";
        document.getElementById('arthur').style.width = "490px";
        document.getElementById('arthur').style.height = "490px";

        /*var bye = document.querySelector('#txtfinal');
        bye.remove();


        const para = document.createElement("p");
        para.id = 'arthurDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('arthurDes');
        const text = ". Arthur { g Desenvolvedor Front End ; g Gosta de Lutar ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)*/

    }
    if ( window.innerWidth <= 971  ) {
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";
    

        teste.style.width = "408px";
        teste.style.height = "408px";
        teste.style.margin = "10%" ;
        teste.style.marginTop = "20%" ;
        document.getElementById('arthur').style.width = "400px";
        document.getElementById('arthur').style.height = "400px";


        /*var bye = document.querySelector('#txtfinal');
        bye.remove();


        const para = document.createElement("p");
        para.id = 'arthurDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('arthurDes');
        const text = ". Arthur { g Desenvolvedor Front End ; g Gosta de Lutar ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)*/
      
    }
    if ( window.innerWidth <= 935  ) {
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";
        teste.classList.add("teste")

        teste.style.width = "402px";
        teste.style.height = "402px";
        teste.style.margin = "10%";
        teste.style.margintop = "20%";
        document.getElementById('arthur').style.width = "390px";
        document.getElementById('arthur').style.height = "390px";

        //document.querySelector('.final').style.height = "68rem";

        /*var bye = document.querySelector('#txtfinal');
        bye.remove();


        const para = document.createElement("p");
        para.id = 'arthurDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('arthurDes');
        const text = ". Arthur { g Desenvolvedor Front End ; g Gosta de Lutar ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)*/
        
    }
    if ( window.innerWidth <= 835  ) {
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";
        teste.classList.add("teste")

        teste.style.width = "402px";
        teste.style.height = "402px";
        teste.style.margin = "10%";
        teste.style.marginTop = "20%";
        document.getElementById('arthur').style.width = "390px";
        document.getElementById('arthur').style.height = "390px";

        /*var bye = document.querySelector('#txtfinal');
        bye.remove();


        const para = document.createElement("p");
        para.id = 'arthurDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('arthurDes');
        const text = ". Arthur { g Desenvolvedor Front End ; g Gosta de Lutar ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)*/
       
    }
    if ( window.innerWidth <= 817  ) {
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste.style.width = "367px";
        teste.style.height = "345px";
        teste.style.margin = "10%";
        teste.style.marginTop = "20%";
        document.getElementById('arthur').style.width = "357px";
        document.getElementById('arthur').style.height = "334px";

        /*var bye = document.querySelector('#txtfinal');
        bye.remove();


        const para = document.createElement("p");
        para.id = 'arthurDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('arthurDes');
        const text = ". Arthur { g Desenvolvedor Front End ; g Gosta de Lutar ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)*/
      
    }
    if ( window.innerWidth <= 703  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste.style.width = "326px";
        teste.style.height = "304px";
        teste.style.margin = "10%";
        teste.style.marginTop = "20%";
        document.getElementById('arthur').style.width = "316px";
        document.getElementById('arthur').style.height = "292px";

       
    }
    if ( window.innerWidth <= 650  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste.style.width = "266px";
        teste.style.height = "260px";
        teste.style.margin = "10%";
        teste.style.marginTop = "20%";
        document.getElementById('arthur').style.width = "255px";
        document.getElementById('arthur').style.height = "250px";

       
    }
    if ( window.innerWidth <= 509  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste.style.width = "223px";
        teste.style.height = "217px";
        teste.style.margin = "10%";
        teste.style.marginTop = "20%";
        document.getElementById('arthur').style.width = "213px";
        document.getElementById('arthur').style.height = "209px";

    
    }
    if ( window.innerWidth <= 378  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste.style.width = "171px";
        teste.style.height = "192px";
        teste.style.marginLeft = "-10%";
        teste.style.marginTop = "20%";
        document.getElementById('arthur').style.width = "162px";
        document.getElementById('arthur').style.height = "181px";

      
    }
    
    


    else {
        alert("nada")
    }

    

    teste.alt = altText;
    teste2.alt = altText;
    test3.alt = altText;

    return teste;

    
}

function LoopText(el, text, interval) {
    el.style.color = "white";
    el.style.opacity = "1";

    var cont = 0;
    const typer = setInterval(() => {
        if (cont >= text.length) {
            return clearInterval(typer);
        } else {
            if (text[cont] == "g")
                el.innerHTML += "<br>"
            else {
                el.innerHTML += text[cont];

            }
            cont++
        }
    }, interval);

}
  


function saidad1() {

    if ( window.innerWidth <= 1400){
        teste2.style.opacity = "1";
        teste2.style.margin = "30px"
        teste2.style.width = "273px";
        teste2.style.height = "299px";
        document.getElementById('felipe').style.width = "254px";
        document.getElementById('felipe').style.height = "277px";

        teste3.style.opacity = "1";
        teste3.style.width = "273px";
        teste3.style.height = "299px";
        document.getElementById('paulo').style.width = "254px";
        document.getElementById('paulo').style.height = "277px";

        teste.style.width = "273px";
        teste.style.height = "299px";
        teste.style.margin = "20px";
        teste.style.marginBottom = "0"
        teste.style.margin = "30px";
        document.getElementById('arthur').style.width = "254px";
        document.getElementById('arthur').style.height = "277px";


        var tchau = document.getElementById('arthurDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);
    }
    if ( window.innerWidth <= 1000){
        teste2.style.opacity = "1";
        teste2.style.margin = "30px"
        teste2.style.width = "273px";
        teste2.style.height = "299px";
        document.getElementById('felipe').style.width = "254px";
        document.getElementById('felipe').style.height = "277px";

        teste3.style.opacity = "1";
        teste3.style.width = "273px";
        teste3.style.height = "299px";
        document.getElementById('paulo').style.width = "254px";
        document.getElementById('paulo').style.height = "277px";

        teste.style.width = "273px";
        teste.style.height = "299px";
        teste.style.margin = "20px";
        teste.style.marginBottom = "0"
        teste.style.margin = "30px";
        document.getElementById('arthur').style.width = "254px";
        document.getElementById('arthur').style.height = "277px";


        /*var tchau = document.getElementById('arthurDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);*/
    }
    if ( window.innerWidth <= 971){
        teste2.style.opacity = "1";
        teste2.style.margin = "20px"
        teste2.style.width = "250px";
        teste2.style.height = "263px";
        document.getElementById('felipe').style.width = "229px";
        document.getElementById('felipe').style.height = "244px";

        teste3.style.opacity = "1";
        teste3.style.width = "247px";
        teste3.style.height = "288px";
        document.getElementById('paulo').style.width = "226px";
        document.getElementById('paulo').style.height = "268px";

        teste.style.width = "251px";
        teste.style.height = "265px";
        teste.style.margin = "20px";
        teste.style.marginBottom = "0"
        teste.style.margin = "20px";
        document.getElementById('arthur').style.width = "229px";
        document.getElementById('arthur').style.height = "244px";


        /*var tchau = document.getElementById('arthurDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);*/
    }
    if ( window.innerWidth <= 871){
        teste2.style.opacity = "1";
        teste2.style.margin = "20px"
        teste2.style.width = "229px";
        teste2.style.height = "230px";
        document.getElementById('felipe').style.width = "207px";
        document.getElementById('felipe').style.height = "210px";

        teste3.style.opacity = "1";
        teste3.style.width = "229px";
        teste3.style.height = "230px";
        document.getElementById('paulo').style.width = "207px";
        document.getElementById('paulo').style.height = "210px";

        teste.style.width = "229px";
        teste.style.height = "230px";
        teste.style.margin = "20px";
        teste.style.marginBottom = "0"
        teste.style.margin = "20px";
        document.getElementById('arthur').style.width = "207px";
        document.getElementById('arthur').style.height = "210px";
    }
    if ( window.innerWidth <= 817){
        teste2.style.opacity = "1";
        teste2.style.margin = "20px"
        teste2.style.width = "211px";
        teste2.style.height = "204px";
        document.getElementById('felipe').style.width = "189px";
        document.getElementById('felipe').style.height = "182px";

        teste3.style.opacity = "1";
        teste3.style.width = "211px";
        teste3.style.height = "204px";
        document.getElementById('paulo').style.width = "189px";
        document.getElementById('paulo').style.height = "182px";

        teste.style.width = "211px";
        teste.style.height = "204px";
        teste.style.margin = "20px";
        teste.style.marginBottom = "0"
        teste.style.margin = "20px";
        document.getElementById('arthur').style.width = "189px";
        document.getElementById('arthur').style.height = "182px";
    }
    if ( window.innerWidth <= 703){
        teste2.style.opacity = "1";
        teste2.style.margin = "20px"
        teste2.style.width = "176px";
        teste2.style.height = "174px";
        document.getElementById('felipe').style.width = "155px";
        document.getElementById('felipe').style.height = "155px";

        teste3.style.opacity = "1";
        teste3.style.width = "176px";
        teste3.style.height = "174px";
        document.getElementById('paulo').style.width = "155px";
        document.getElementById('paulo').style.height = "155px";

        teste.style.width = "176px";
        teste.style.height = "174px";
        teste.style.margin = "20px";
        teste.style.marginBottom = "0"
        teste.style.margin = "20px";
        document.getElementById('arthur').style.width = "155px";
        document.getElementById('arthur').style.height = "155px";
    }
    if ( window.innerWidth <= 535){
        teste2.style.opacity = "1";
        teste2.style.margin = "10px"
        teste2.style.width = "176px";
        teste2.style.height = "174px";
        document.getElementById('felipe').style.width = "155px";
        document.getElementById('felipe').style.height = "155px";

        teste3.style.opacity = "1";
        teste3.style.width = "176px";
        teste3.style.height = "174px";
        document.getElementById('paulo').style.width = "155px";
        document.getElementById('paulo').style.height = "155px";

        teste.style.width = "176px";
        teste.style.height = "174px";
        teste.style.margin = "10px";
        teste.style.marginBottom = "0"
        teste.style.margin = "10px";
        document.getElementById('arthur').style.width = "155px";
        document.getElementById('arthur').style.height = "155px";
    }
    if ( window.innerWidth <= 509){
        teste2.style.opacity = "1";
        teste2.style.margin = "10px"
        teste2.style.width = "142px";
        teste2.style.height = "142px";
        document.getElementById('felipe').style.width = "122px";
        document.getElementById('felipe').style.height = "122px";

        teste3.style.opacity = "1";
        teste3.style.width = "142px";
        teste3.style.height = "142px";
        document.getElementById('paulo').style.width = "122px";
        document.getElementById('paulo').style.height = "122px";

        teste.style.width = "142px";
        teste.style.height = "142px";
        teste.style.margin = "10px";
        teste.style.marginBottom = "0"
        teste.style.margin = "10px";
        document.getElementById('arthur').style.width = "122px";
        document.getElementById('arthur').style.height = "122px";
    }
    if ( window.innerWidth <= 435){
        teste2.style.opacity = "1";
        teste2.style.margin = "10px"
        teste2.style.width = "120px";
        teste2.style.height = "120px";
        document.getElementById('felipe').style.width = "100px";
        document.getElementById('felipe').style.height = "100px";

        teste3.style.opacity = "1";
        teste3.style.width = "120px";
        teste3.style.height = "120px";
        document.getElementById('paulo').style.width = "100px";
        document.getElementById('paulo').style.height = "100px";

        teste.style.width = "120px";
        teste.style.height = "120px";
        teste.style.margin = "10px";
        teste.style.marginBottom = "0"
        teste.style.margin = "10px";
        document.getElementById('arthur').style.width = "100px";
        document.getElementById('arthur').style.height = "100px";
    }

    

    else {
        alert("nada sai")
    }

    teste.alt = altText;
    teste2.alt = altText;
    test3.alt = altText;

    return teste;
    
}

function dono2() {

    if ( window.innerWidth <= 1400  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";

        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "500px";
        teste2.style.height = "500px";
        teste2.style.margin = "20%";
        teste2.style.marginLeft = "20%";
        document.getElementById('felipe').style.width = "490px";
        document.getElementById('felipe').style.height = "490px";


        var bye = document.querySelector('#txtfinal');
        bye.remove();
    
    
        const para = document.createElement("p");
        para.id = 'felipeDes';
        document.getElementById('text').appendChild(para);
    
        const el = document.getElementById('felipeDes');
        const text = ". Felipe { g Desenvolvedor Front End ; g Gosta do time Corinthians ; g  }";
    
        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)
      
    }
    if ( window.innerWidth <= 1000  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "500px";
        teste2.style.height = "500px";
        teste2.style.margin = "20%";
        teste2.style.marginLeft = "20%";
        document.getElementById('felipe').style.width = "490px";
        document.getElementById('felipe').style.height = "490px";

       
    }
    if ( window.innerWidth <= 971  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";
    

        teste2.style.width = "408px";
        teste2.style.height = "408px";
        teste2.style.margin = "10%" ;
        teste2.style.marginTop = "20%" ;
        document.getElementById('felipe').style.width = "400px";
        document.getElementById('felipe').style.height = "400px";

       
    }
    if ( window.innerWidth <= 935  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "402px";
        teste2.style.height = "402px";
        teste2.style.margin = "10%";
        teste2.style.margintop = "20%";
        document.getElementById('arthur').style.width = "390px";
        document.getElementById('arthur').style.height = "390px";

    }
    if ( window.innerWidth <= 835  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "402px";
        teste2.style.height = "402px";
        teste2.style.margin = "10%";
        teste2.style.marginTop = "20%";
        document.getElementById('felipe').style.width = "390px";
        document.getElementById('felipe').style.height = "390px";

        
    }
    if ( window.innerWidth <= 817  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "367px";
        teste2.style.height = "345px";
        teste2.style.margin = "10%";
        teste2.style.marginTop = "20%";
        document.getElementById('felipe').style.width = "357px";
        document.getElementById('felipe').style.height = "334px";

    }
    if ( window.innerWidth <= 703  ){
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "326px";
        teste2.style.height = "304px";
        teste2.style.margin = "10%";
        teste2.style.marginTop = "20%";
        document.getElementById('felipe').style.width = "316px";
        document.getElementById('felipe').style.height = "292px";

    }
    if ( window.innerWidth <= 650  ){
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        document.getElementById('arthur').style.width = "0";
        document.getElementById('arthur').style.height = "0";

        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "266px";
        teste2.style.height = "260px";
        teste2.style.margin = "10%";
        teste2.style.marginTop = "10%";
        teste2.style.marginBottom = "20%";
        document.getElementById('felipe').style.width = "255px";
        document.getElementById('felipe').style.height = "250px";

    }
    if ( window.innerWidth <= 509 ){
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        document.getElementById('arthur').style.width = "0";
        document.getElementById('arthur').style.height = "0";

        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "223px";
        teste2.style.height = "217px";
        teste2.style.margin = "10%";
        teste2.style.marginTop = "10%";
        teste2.style.marginBottom = "20%";
        document.getElementById('felipe').style.width = "213px";
        document.getElementById('felipe').style.height = "209px";

       
    }
    if ( window.innerWidth <= 378 ){
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        document.getElementById('arthur').style.width = "0";
        document.getElementById('arthur').style.height = "0";

        teste3.style.opacity = "0";
        teste3.style.width = "0";
        teste3.style.height = "0";

        teste2.style.width = "171px";
        teste2.style.height = "192px";
        teste2.style.margin = "10%";
        teste2.style.marginTop = "10%";
        teste2.style.marginBottom = "20%";
        teste2.style.marginLeft = "-10%";
        document.getElementById('felipe').style.width = "162px";
        document.getElementById('felipe').style.height = "181px";

        
    }


    else {
        alert("nada")
    }

    

    teste.alt = altText;
    teste2.alt = altText;
    test3.alt = altText;

    return teste;




    /*teste.style.opacity = "0";
    teste.style.width = "0";
    teste.style.height = "0";
    teste.classList.add("resposivo")
    teste3.style.opacity = "0";
    teste3.style.width = "0";
    teste3.style.height = "0";

    teste2.style.width = "500px";
    teste2.style.height = "500px";
    teste2.style.margin = "20%";
    teste2.style.marginLeft = "20%";
    document.getElementById('felipe').style.width = "490px";
    document.getElementById('felipe').style.height = "490px";

    var bye = document.querySelector('#txtfinal');
    bye.remove();


    const para = document.createElement("p");
    para.id = 'felipeDes';
    document.getElementById('text').appendChild(para);

    const el = document.getElementById('felipeDes');
    const text = ". Felipe { g Desenvolvedor Front End ; g Gosta do time Corinthians ; g  }";

    const interval = 200;
    const char = text.split("g");
    LoopText(el, text, 100)*/

}

function LoopText(el, text, interval) {
    el.style.color = "white";
    el.style.opacity = "1";

    var cont = 0;
    const typer = setInterval(() => {
        if (cont >= text.length) {
            return clearInterval(typer);
        } else {
            if (text[cont] == "g")
                el.innerHTML += "<br>"
            else {
                el.innerHTML += text[cont];

            }
            cont++
        }
    }, interval);

}


function saidad2() {

    if ( window.innerWidth <= 1400){
        teste.style.opacity = "1";
        teste.style.margin = "30px"
        teste.style.width = "273px";
        teste.style.height = "299px";
        document.getElementById('arthur').style.width = "254px";
        document.getElementById('arthur').style.height = "277px";

        teste3.style.opacity = "1";
        teste3.style.width = "273px";
        teste3.style.height = "299px";
        document.getElementById('paulo').style.width = "254px";
        document.getElementById('paulo').style.height = "277px";

        teste2.style.width = "273px";
        teste2.style.height = "299px";
        teste2.style.margin = "20px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "30px";
        document.getElementById('felipe').style.width = "254px";
        document.getElementById('felipe').style.height = "277px";


        var tchau = document.getElementById('felipeDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);
    }
    if ( window.innerWidth <= 1000){
        teste.style.opacity = "1";
        teste.style.margin = "30px"
        teste.style.width = "273px";
        teste.style.height = "299px";
        document.getElementById('arthur').style.width = "254px";
        document.getElementById('arthur').style.height = "277px";

        teste3.style.opacity = "1";
        teste3.style.width = "273px";
        teste3.style.height = "299px";
        document.getElementById('paulo').style.width = "254px";
        document.getElementById('paulo').style.height = "277px";

        teste2.style.width = "273px";
        teste2.style.height = "299px";
        teste2.style.margin = "20px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "30px";
        document.getElementById('felipe').style.width = "254px";
        document.getElementById('felipe').style.height = "277px";


        /*var tchau = document.getElementById('arthurDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);*/
    }
    if ( window.innerWidth <= 971){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "250px";
        teste.style.height = "263px";
        document.getElementById('arthur').style.width = "229px";
        document.getElementById('arthur').style.height = "244px";

        teste3.style.opacity = "1";
        teste3.style.width = "247px";
        teste3.style.height = "288px";
        document.getElementById('paulo').style.width = "226px";
        document.getElementById('paulo').style.height = "268px";

        teste2.style.width = "251px";
        teste2.style.height = "265px";
        teste2.style.margin = "20px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "20px";
        document.getElementById('felipe').style.width = "229px";
        document.getElementById('felipe').style.height = "244px";


        /*var tchau = document.getElementById('arthurDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);*/
    }
    if ( window.innerWidth <= 871){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "229px";
        teste.style.height = "230px";
        document.getElementById('arthur').style.width = "207px";
        document.getElementById('arthur').style.height = "210px";

        teste3.style.opacity = "1";
        teste3.style.width = "229px";
        teste3.style.height = "230px";
        document.getElementById('paulo').style.width = "207px";
        document.getElementById('paulo').style.height = "210px";

        teste2.style.width = "229px";
        teste2.style.height = "230px";
        teste2.style.margin = "20px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "20px";
        document.getElementById('felipe').style.width = "207px";
        document.getElementById('felipe').style.height = "210px";
    }
    if ( window.innerWidth <= 817){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "211px";
        teste.style.height = "204px";
        document.getElementById('arthur').style.width = "189px";
        document.getElementById('arthur').style.height = "182px";

        teste3.style.opacity = "1";
        teste3.style.width = "211px";
        teste3.style.height = "204px";
        document.getElementById('paulo').style.width = "189px";
        document.getElementById('paulo').style.height = "182px";

        teste2.style.width = "211px";
        teste2.style.height = "204px";
        teste2.style.margin = "20px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "20px";
        document.getElementById('felipe').style.width = "189px";
        document.getElementById('felipe').style.height = "182px";
    }
    if ( window.innerWidth <= 703){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "176px";
        teste.style.height = "174px";
        document.getElementById('arthur').style.width = "155px";
        document.getElementById('arthur').style.height = "155px";

        teste3.style.opacity = "1";
        teste3.style.width = "176px";
        teste3.style.height = "174px";
        document.getElementById('paulo').style.width = "155px";
        document.getElementById('paulo').style.height = "155px";

        teste2.style.width = "176px";
        teste2.style.height = "174px";
        teste2.style.margin = "20px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "20px";
        document.getElementById('felipe').style.width = "155px";
        document.getElementById('felipe').style.height = "155px";
    }
    if ( window.innerWidth <= 535){
        teste.style.opacity = "1";
        teste.style.margin = "10px"
        teste.style.width = "176px";
        teste.style.height = "174px";
        document.getElementById('arthur').style.width = "155px";
        document.getElementById('arthur').style.height = "155px";

        teste3.style.opacity = "1";
        teste3.style.width = "176px";
        teste3.style.height = "174px";
        document.getElementById('paulo').style.width = "155px";
        document.getElementById('paulo').style.height = "155px";

        teste2.style.width = "176px";
        teste2.style.height = "174px";
        teste2.style.margin = "10px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "10px";
        document.getElementById('felipe').style.width = "155px";
        document.getElementById('felipe').style.height = "155px";
    }
    if ( window.innerWidth <= 509){
        teste.style.opacity = "1";
        teste.style.margin = "10px"
        teste.style.width = "142px";
        teste.style.height = "142px";
        document.getElementById('arthur').style.width = "122px";
        document.getElementById('arthur').style.height = "122px";

        teste3.style.opacity = "1";
        teste3.style.width = "142px";
        teste3.style.height = "142px";
        document.getElementById('paulo').style.width = "122px";
        document.getElementById('paulo').style.height = "122px";

        teste2.style.width = "142px";
        teste2.style.height = "142px";
        teste2.style.margin = "10px";
        teste2.style.marginBottom = "0"
        teste2.style.margin = "10px";
        document.getElementById('felipe').style.width = "122px";
        document.getElementById('felipe').style.height = "122px";
    }
    if ( window.innerWidth <= 435){
        teste.style.opacity = "1";
        teste.style.margin = "10px"
        teste.style.width = "120px";
        teste.style.height = "120px";
        document.getElementById('arthur').style.width = "100px";
        document.getElementById('arthur').style.height = "100px";

        teste3.style.opacity = "1";
        teste3.style.width = "120px";
        teste3.style.height = "120px";
        document.getElementById('paulo').style.width = "100px";
        document.getElementById('paulo').style.height = "100px";

        teste2.style.width = "120px";
        teste2.style.height = "120px";
        teste2.style.margin = "10px";
        teste2.style.marginBottom = "0"
        document.getElementById('felipe').style.width = "100px";
        document.getElementById('felipe').style.height = "100px";
    }


    else {
        alert("nada sai")
    }

    teste.alt = altText;
    teste2.alt = altText;
    test3.alt = altText;

    return teste;


    
    /*teste.style.opacity = "1";
    teste.style.margin = "40px"
    teste.style.width = "300px";
    teste.style.height = "350px";
    teste3.style.opacity = "1";
    teste3.style.width = "300px";
    teste3.style.height = "350px";

    teste2.style.width = "300px";
    teste2.style.height = "350px";
    teste2.style.margin = "20px";
    teste2.style.marginBottom = "0"
    teste2.style.margin = "40px";
    document.getElementById('felipe').style.width = "280px";
    document.getElementById('felipe').style.height = "330px";

    var tchau = document.getElementById('felipeDes');
    tchau.remove();

    const para = document.createElement("h1");
    para.innerText = "Os Donos das Ideias";
    para.id = 'txtfinal';
    document.getElementById('text').appendChild(para);*/
}

function dono3() {

    if ( window.innerWidth <= 1400  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";


        teste3.style.width = "500px";
        teste3.style.height = "500px";
        teste3.style.margin = "20%";
        teste3.style.marginLeft = "20%";
        document.getElementById('paulo').style.width = "490px";
        document.getElementById('paulo').style.height = "490px";


        var bye = document.querySelector('#txtfinal');
        bye.remove();
    
    
        const para = document.createElement("p");
        para.id = 'pauloDes';
        document.getElementById('text').appendChild(para);

        const el = document.getElementById('pauloDes');
        const text = ". Paulo { g Desenvolvedor Front End ; g Gosta de tocar Piano ; g  }";

        const interval = 200;
        const char = text.split("g");
        LoopText(el, text, 100)
    }
    if ( window.innerWidth <= 1000  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";

        teste3.style.width = "500px";
        teste3.style.height = "500px";
        teste3.style.margin = "20%";
        teste3.style.marginLeft = "20%";
        document.getElementById('paulo').style.width = "490px";
        document.getElementById('paulo').style.height = "490px";

    }
    if ( window.innerWidth <= 971  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste2.style.opacity = "0";
        teste3.style.width = "0";
        teste2.style.height = "0";
    

        teste3.style.width = "408px";
        teste3.style.height = "408px";
        teste3.style.margin = "10%" ;
        teste2.style.marginTop = "20%" ;
        document.getElementById('paulo').style.width = "400px";
        document.getElementById('paulo').style.height = "400px";

    }
    if ( window.innerWidth <= 935  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";

        teste3.style.width = "402px";
        teste3.style.height = "402px";
        teste3.style.margin = "10%";
        teste3.style.margintop = "20%";
        document.getElementById('paulo').style.width = "390px";
        document.getElementById('paulo').style.height = "390px";

    }
    if ( window.innerWidth <= 835  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";

        teste3.style.width = "402px";
        teste3.style.height = "402px";
        teste3.style.margin = "10%";
        teste3.style.marginTop = "20%";
        document.getElementById('paulo').style.width = "390px";
        document.getElementById('paulo').style.height = "390px";

    }
    if ( window.innerWidth <= 817  ) {
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";

        teste3.style.width = "367px";
        teste3.style.height = "345px";
        teste3.style.margin = "10%";
        teste3.style.marginTop = "20%";
        document.getElementById('paulo').style.width = "357px";
        document.getElementById('paulo').style.height = "334px";

    }
    if ( window.innerWidth <= 703  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";

        teste3.style.width = "326px";
        teste3.style.height = "304px";
        teste3.style.margin = "1%";
        teste3.style.marginBottom = "10%";
        teste3.style.marginTop = "20%";
        document.getElementById('paulo').style.width = "316px";
        document.getElementById('paulo').style.height = "292px";

    }
    if ( window.innerWidth <= 650  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";

        teste3.style.width = "266px";
        teste3.style.height = "260px";
        teste3.style.margin = "1%";
        teste3.style.marginBottom = "10%";
        teste3.style.marginTop = "20%";
        document.getElementById('paulo').style.width = "255px";
        document.getElementById('paulo').style.height = "250px";

    }
    if ( window.innerWidth <= 509  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";

        teste3.style.width = "223px";
        teste3.style.height = "217px";
        teste3.style.margin = "1%";
        teste3.style.marginBottom = "10%";
        teste3.style.marginTop = "20%";
        document.getElementById('paulo').style.width = "213px";
        document.getElementById('paulo').style.height = "209px";

    }
    if ( window.innerWidth <= 378  ){
        teste2.style.opacity = "0";
        teste2.style.width = "0";
        teste2.style.height = "0";
        teste.style.opacity = "0";
        teste.style.width = "0";
        teste.style.height = "0";

        teste3.style.width = "171px";
        teste3.style.height = "192px";
        teste3.style.marginBottom = "10%";
        teste3.style.marginLeft = "-10%";
        teste3.style.marginTop = "-20%";
        document.getElementById('paulo').style.width = "162px";
        document.getElementById('paulo').style.height = "181px";

    }


    else {
        alert("nada")
    }

    

    teste.alt = altText;
    teste2.alt = altText;
    test3.alt = altText;

    return teste;
    
    /*teste2.style.opacity = "0";
    teste2.style.width = "0";
    teste2.style.height = "0";
    teste.style.opacity = "0";
    teste.style.width = "0";
    teste.style.height = "0";

    teste3.style.width = "500px";
    teste3.style.height = "500px";
    teste3.style.margin = "20%";
    teste3.style.marginLeft = "20%";
    document.getElementById('paulo').style.width = "490px";
    document.getElementById('paulo').style.height = "490px";

    var bye = document.querySelector('#txtfinal');
    bye.remove();


    const para = document.createElement("p");
    para.id = 'pauloDes';
    document.getElementById('text').appendChild(para);

    const el = document.getElementById('pauloDes');
    const text = ". Paulo { g Desenvolvedor Front End ; g Gosta de tocar Piano ; g  }";

    const interval = 200;
    const char = text.split("g");
    LoopText(el, text, 100)*/
}

function LoopText(el, text, interval) {
    el.style.color = "white";
    el.style.opacity = "1";

    var cont = 0;
    const typer = setInterval(() => {
        if (cont >= text.length) {
            return clearInterval(typer);
        } else {
            if (text[cont] == "g")
                el.innerHTML += "<br>"
            else {
                el.innerHTML += text[cont];

            }
            cont++
        }
    }, interval);

}

function saidad3() {

    if ( window.innerWidth <= 1400){
        teste.style.opacity = "1";
        teste.style.margin = "30px"
        teste.style.width = "273px";
        teste.style.height = "299px";
        document.getElementById('arthur').style.width = "254px";
        document.getElementById('arthur').style.height = "277px";

        teste2.style.opacity = "1";
        teste2.style.width = "273px";
        teste2.style.height = "299px";
        document.getElementById('felipe').style.width = "254px";
        document.getElementById('felipe').style.height = "277px";

        teste3.style.width = "273px";
        teste3.style.height = "299px";
        teste3.style.margin = "20px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "30px";
        document.getElementById('paulo').style.width = "254px";
        document.getElementById('paulo').style.height = "277px";


        var tchau = document.getElementById('pauloDes');
        tchau.remove();

        const para = document.createElement("h1");
        para.innerText = "Os Donos das Ideias";
        para.id = 'txtfinal';
        document.getElementById('text').appendChild(para);
    }
    if ( window.innerWidth <= 1000){
        teste.style.opacity = "1";
        teste.style.margin = "30px"
        teste.style.width = "273px";
        teste.style.height = "299px";
        document.getElementById('arthur').style.width = "254px";
        document.getElementById('arthur').style.height = "277px";

        teste2.style.opacity = "1";
        teste2.style.width = "273px";
        teste2.style.height = "299px";
        document.getElementById('felipe').style.width = "254px";
        document.getElementById('felipe').style.height = "277px";

        teste3.style.width = "273px";
        teste3.style.height = "299px";
        teste3.style.margin = "20px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "30px";
        document.getElementById('paulo').style.width = "254px";
        document.getElementById('paulo').style.height = "277px";

    }
    if ( window.innerWidth <= 971){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "250px";
        teste.style.height = "263px";
        document.getElementById('arthur').style.width = "229px";
        document.getElementById('arthur').style.height = "244px";

        teste2.style.opacity = "1";
        teste3.style.margin = "20px";
        teste2.style.width = "247px";
        teste2.style.height = "288px";
        document.getElementById('felipe').style.width = "226px";
        document.getElementById('felipe').style.height = "268px";

        teste3.style.width = "251px";
        teste3.style.height = "265px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "30px";
        document.getElementById('paulo').style.width = "229px";
        document.getElementById('paulo').style.height = "244px";

    }
    if ( window.innerWidth <= 871){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "229px";
        teste.style.height = "230px";
        document.getElementById('arthur').style.width = "207px";
        document.getElementById('arthur').style.height = "210px";

        teste2.style.opacity = "1";
        teste2.style.width = "229px";
        teste2.style.height = "230px";
        document.getElementById('felipe').style.width = "207px";
        document.getElementById('felipe').style.height = "210px";

        teste3.style.width = "229px";
        teste3.style.height = "230px";
        teste3.style.margin = "20px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "20px";
        document.getElementById('paulo').style.width = "207px";
        document.getElementById('paulo').style.height = "210px";
    }
    if ( window.innerWidth <= 817){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "211px";
        teste.style.height = "204px";
        document.getElementById('arthur').style.width = "189px";
        document.getElementById('arthur').style.height = "182px";

        teste2.style.opacity = "1";
        teste2.style.width = "211px";
        teste2.style.height = "204px";
        document.getElementById('felipe').style.width = "189px";
        document.getElementById('felipe').style.height = "182px";

        teste3.style.width = "211px";
        teste3.style.height = "204px";
        teste3.style.margin = "20px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "20px";
        document.getElementById('paulo').style.width = "189px";
        document.getElementById('paulo').style.height = "182px";
    }
    if ( window.innerWidth <= 703){
        teste.style.opacity = "1";
        teste.style.margin = "20px"
        teste.style.width = "176px";
        teste.style.height = "174px";
        document.getElementById('arthur').style.width = "155px";
        document.getElementById('arthur').style.height = "155px";

        teste2.style.opacity = "1";
        teste2.style.width = "176px";
        teste2.style.height = "174px";
        document.getElementById('felipe').style.width = "155px";
        document.getElementById('felipe').style.height = "155px";

        teste3.style.width = "176px";
        teste3.style.height = "174px";
        teste3.style.margin = "20px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "20px";
        document.getElementById('paulo').style.width = "155px";
        document.getElementById('paulo').style.height = "155px";
    }
    if ( window.innerWidth <= 535){
        teste.style.opacity = "1";
        teste.style.margin = "10px"
        teste.style.width = "176px";
        teste.style.height = "174px";
        document.getElementById('arthur').style.width = "155px";
        document.getElementById('arthur').style.height = "155px";

        teste2.style.opacity = "1";
        teste2.style.width = "176px";
        teste2.style.height = "174px";
        document.getElementById('felipe').style.width = "155px";
        document.getElementById('felipe').style.height = "155px";

        teste3.style.width = "176px";
        teste3.style.height = "174px";
        teste3.style.margin = "10px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "10px";
        document.getElementById('paulo').style.width = "155px";
        document.getElementById('paulo').style.height = "155px";
    }
    if ( window.innerWidth <= 509){
        teste.style.opacity = "1";
        teste.style.margin = "10px"
        teste.style.width = "142px";
        teste.style.height = "142px";
        document.getElementById('arthur').style.width = "122px";
        document.getElementById('arthur').style.height = "122px";

        teste2.style.opacity = "1";
        teste2.style.width = "142px";
        teste2.style.height = "142px";
        document.getElementById('felipe').style.width = "122px";
        document.getElementById('felipe').style.height = "122px";

        teste3.style.width = "142px";
        teste3.style.height = "142px";
        teste3.style.margin = "10px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "10px";
        document.getElementById('paulo').style.width = "122px";
        document.getElementById('paulo').style.height = "122px";
    }
    if ( window.innerWidth <= 435){
        teste.style.opacity = "1";
        teste.style.margin = "10px"
        teste.style.width = "120px";
        teste.style.height = "120px";
        document.getElementById('arthur').style.width = "100px";
        document.getElementById('arthur').style.height = "100px";

        teste2.style.opacity = "1";
        teste2.style.width = "120px";
        teste2.style.height = "120px";
        document.getElementById('felipe').style.width = "100px";
        document.getElementById('felipe').style.height = "100px";

        teste3.style.width = "120px";
        teste3.style.height = "120px";
        teste3.style.margin = "10px";
        teste3.style.marginBottom = "0"
        teste3.style.margin = "10px";
        document.getElementById('paulo').style.width = "100px";
        document.getElementById('paulo').style.height = "100px";
    }
    if ( window.innerWidth <= 378){
        teste3.style.marginTop = "20%";
    }



    else {
        alert("nada sai")
    }

    teste.alt = altText;
    teste2.alt = altText;
    test3.alt = altText;

    return teste;

    /*teste2.style.opacity = "1";
    teste2.style.margin = "40px"
    teste2.style.width = "300px";
    teste2.style.height = "350px";
    teste.style.opacity = "1";
    teste.style.width = "300px";
    teste.style.height = "350px";
    teste.style.margin = "40px"

    teste3.style.width = "300px";
    teste3.style.height = "350px";
    teste3.style.margin = "20px";
    teste3.style.marginBottom = "0"
    teste3.style.margin = "0px";
    document.getElementById('paulo').style.width = "280px";
    document.getElementById('paulo').style.height = "330px";

    var tchau = document.getElementById('pauloDes');
    tchau.remove();

    const para = document.createElement("h1");
    para.innerText = "Os Donos das Ideias";
    para.id = 'txtfinal';
    document.getElementById('text').appendChild(para);*/
}


////////////////////////////////       Resposive








/*function myFunction(x) {
        if (x.matches) { // If media query matches
            document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-179px) translateX(-16px)";
            document.getElementById('ladodireito').style.transform = "rotate(90deg) translateY(159px) translateX(23px)";
        } else {
            document.getElementById('ladoesquerdo').style.transform = "rotate(0) translateY(0) translateX(0)";
            document.getElementById('ladodireito').style.transform = "rotate(0) translateY(0) translateX(0)";
        }
      }
      
      var x = window.matchMedia("(max-width: 1000px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes*/


/*
function Res1320() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        document.getElementById('ladoesquerdo').style.transform = "rotate(90deg) translateY(-286px) translateX(-28px)";
    } else {
        document.getElementById('ladoesquerdo').style.transform = "rotate(0) translateY(0) translateX(0)";
    }
}*/
