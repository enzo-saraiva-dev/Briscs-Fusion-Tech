var menu1 = document.getElementById('bar1')
var menu2 = document.getElementById('bar2')
var menu3 = document.getElementById('bar3')
var opene = document.getElementById('opened')
var x = document.getElementById('x')
menu1.addEventListener('click', b1)
menu2.addEventListener('click', b2)
menu3.addEventListener('click', b3)
x.addEventListener('click', x1)
function b1(){
    menu1.style.height = '40px'
    menu1.style.width = '10px'
    menu1.style.transitionDuration = '1s'
    menu1.style.transitionTimingFunction = 'ease-out'
    menu3.style.height = '40px'
    menu3.style.width = '10px'
    menu3.style.transitionDuration = '1s'
    menu3.style.transitionTimingFunction = 'ease-out'
    menu2.style.height = '40px'
    menu2.style.width = '10px'
    menu2.style.transitionDuration = '1s'
    menu2.style.transitionTimingFunction = 'ease-out'
    opene.style.left = '0px'
    opene.style.transitionDuration = '1s'
    opene.style.transitionTimingFunction = 'ease-in-outx'
    menu1.style.top = '0px'
    menu2.style.top = '-40px'
    menu3.style.top = '-80px'
    opene.style.top = '-50px'
    menu2.style.left = '15px'
    menu3.style.left = '30px'
    x.style.visibility = 'visible'
}
function b2(){
    menu2.style.height = '40px'
    menu2.style.width = '10px'
    menu2.style.transitionDuration = '1s'
    menu2.style.transitionTimingFunction = 'ease-out'
    menu3.style.height = '40px'
    menu3.style.width = '10px'
    menu3.style.transitionDuration = '1s'
    menu3.style.transitionTimingFunction = 'ease-out'
    menu1.style.height = '40px'
    menu1.style.width = '10px'
    menu1.style.transitionDuration = '1s'
    menu1.style.transitionTimingFunction = 'ease-out'
    opene.style.left = '0px'
    menu1.style.top = '0px'
    menu2.style.top = '-40px'
    menu3.style.top = '-80px'
    opene.style.top = '-50px'
    menu2.style.left = '15px'
    menu3.style.left = '30px'
    opene.style.transitionDuration = '1s'
    x.style.visibility = 'visible'
    opene.style.transitionTimingFunction = 'ease-in-outx'
}
function b3(){
    menu3.style.height = '40px'
    menu3.style.width = '10px'
    menu3.style.transitionDuration = '1s'
    menu3.style.transitionTimingFunction = 'ease-out'
    menu2.style.height = '40px'
    menu2.style.width = '10px'
    menu2.style.transitionDuration = '1s'
    menu2.style.transitionTimingFunction = 'ease-out'
    menu1.style.height = '40px'
    menu1.style.width = '10px'
    menu1.style.transitionDuration = '1s'
    menu1.style.transitionTimingFunction = 'ease-out'
    opene.style.left = '0px'
    menu1.style.top = '0px'
    menu2.style.top = '-40px'
    menu3.style.top = '-80px'
    opene.style.top = '-50px'
    menu2.style.left = '15px'
    menu3.style.left = '30px'
    opene.style.transitionDuration = '1s'
    opene.style.transitionTimingFunction = 'ease-in-outx'
    x.style.visibility = 'visible'
}
function x1(){
    opene.style.left = '-1000px'
    menu1.style.height = '10px'
    menu1.style.width = '50px'
    menu1.style.top = '0px'
    menu2.style.left = '0px'
    menu3.style.left = '0px'
    menu2.style.top = '5px'
    menu3.style.top = '10px'
    menu2.style.height = '10px'
    menu2.style.width = '50px'
    menu3.style.height = '10px'
    menu3.style.width = '50px'
    x.style.visibility = 'hidden'
    opene.style.transitionTimingFunction = 'ease'
    opene.style.transitionDuration = '1s'   
}
var esquerda = document.getElementById('setaesquerda')
var direita = document.getElementById('setadireita')
var s24 = document.getElementById('s24ultra')
var text24 = document.getElementById('text24')
var iphone15 = document.getElementById('iphone15')
var text15 = document.getElementById('text15')
direita.addEventListener('click', dir)
esquerda.addEventListener('click', esq)
function dir(){
    s24.style.left = '2000px'
    s24.style.transitionDuration = '1s'
    s24.style.transitionTimingFunction = 'ease'
    text24.style.left = '2000px'
    text24.style.transitionTimingFunction = 'ease'
    text24.style.transitionDuration = '1s'
    esquerda.style.visibility = 'visible'
    esquerda.style.transitionDuration = '1s'
    esquerda.style.transitionTimingFunction = 'ease'
    iphone15.style.left = '700px'
    iphone15.style.visibility = 'visible'
    iphone15.style.transitionDuration = '1s'
    iphone15.style.transitionTimingFunction = 'ease'
    text15.style.left = '800px'
    text15.style.transitionDuration = '1s'
    text15.style.transitionTimingFunction = 'ease'
}
function esq(){
    iphone15.style.left = '-1000px'
    s24.style.left = '300px'
    text24.style.left = '800px'
    esquerda.style.visibility = 'hidden'
    esquerda.style.transitionDuration = '1s'
    esquerda.style.transitionTimingFunction = 'ease'
    text15.style.left = '-800px'
}
var asus7 = document.getElementById('asus7')
asus7.addEventListener('mouseenter', asus)
asus7.addEventListener('mouseout', a7)
function asus(){
    asus7.style.width = '350px'
    asus7.style.transitionDuration = '1s'
    asus7.style.transitionTimingFunction = 'ease'
}
function a7(){
    asus7.style.width = '300px'
}
var zfold = document.getElementById('zfold')
zfold.addEventListener('mouseenter', z)
zfold.addEventListener('mouseout', fold)
function z(){
    zfold.style.width = '350px'
    zfold.style.transitionDuration = '1s'
    zfold.style.transitionTimingFunction = 'ease'
}
function fold(){
    zfold.style.width = '300px'
}
var xiaomi14 = document.getElementById('xiaomi14')
xiaomi14.addEventListener('mouseenter', xia)
xiaomi14.addEventListener('mouseout', omi)
function xia(){
    xiaomi14.style.width = '320px'
    xiaomi14.style.transitionTimingFunction = 'ease'
    xiaomi14.style.transitionDuration = '1s'
}
function omi(){
    xiaomi14.style.width = '290px'
}
var oneplus11 = document.getElementById('oneplus11')
oneplus11.addEventListener('mouseenter', one)
oneplus11.addEventListener('mouseout', plus11)
function one(){
    oneplus11.style.width = '300px'
    oneplus11.style.transitionDuration = '1s'
    oneplus11.style.transitionTimingFunction = 'ease'
}
function plus11(){
    oneplus11.style.width = '250px'
}
var google8 = document.getElementById('google8')
google8.addEventListener('mouseenter', goo)
google8.addEventListener('mouseout', gle8)
function goo(){
    google8.style.width = '450px'
    google8.style.transitionDuration = '1s'
    google8.style.transitionTimingFunction = 'ease'
}
function gle8(){
    google8.style.width = '400px'
}
var edge50 = document.getElementById('edge50')
edge50.addEventListener('mouseenter', edg)
edge50.addEventListener('mouseout',e50)
function edg(){
    edge50.style.width = '270px'
    edge50.style.transitionDuration = '1s'
    edge50.style.transitionTimingFunction = 'ease'
}
function e50(){
    edge50.style.width = '230px'
}
var gt3 = document.getElementById('gt3')
gt3.addEventListener('mouseenter',g)
gt3.addEventListener('mouseout',t3)
function g(){
    gt3.style.width = '300px'
    gt3.style.transitionTimingFunction = 'ease'
    gt3.style.transitionDuration = '1s'
}
function t3(){
    gt3.style.width = '270px'
}
var xperia = document.getElementById('xperia')
xperia.addEventListener('mouseenter', xpe)
xperia.addEventListener('mouseout', ria)
function xpe(){
    xperia.style.width = '240px'
    xperia.style.transitionDuration = '1s'
    xperia.style.transitionTimingFunction = 'ease'
}
function ria(){
    xperia.style.width = '210px '
}
document.addEventListener("DOMContentLoaded", function() {
    // Tempo em milissegundos antes de esconder a tela de abertura (3000ms = 3 segundos)
    setTimeout(function() {
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        // Espera a transição de opacidade antes de esconder completamente
        setTimeout(function() {
            splashScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); // Tempo de espera deve coincidir com a duração da transição CSS
    }, 700); // Tempo de exibição da tela de abertura
});