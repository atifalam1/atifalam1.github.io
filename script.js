(function(){
var r=document.documentElement;
try{var t=localStorage.getItem('theme');if(t)r.dataset.theme=t;else if(matchMedia('(prefers-color-scheme: dark)').matches)r.dataset.theme='dark'}catch(e){}
document.addEventListener('DOMContentLoaded',function(){
var tb=document.getElementById('theme');
function sync(){tb.textContent=r.dataset.theme==='dark'?'☀':'☾'}
sync();
tb.onclick=function(){r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',r.dataset.theme)}catch(e){}sync()};
var bg=document.getElementById('burger'),ln=document.getElementById('links');
bg.onclick=function(){ln.classList.toggle('open')};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.thumb,.gallery img').forEach(function(i){i.onclick=function(){li.src=i.src;li.alt=i.alt;lb.classList.add('on')}});
lb.onclick=function(){lb.classList.remove('on')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
});
})();
