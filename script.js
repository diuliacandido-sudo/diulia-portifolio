var projetos=[
{n:"petcare_aipsii",u:"https://github.com/diuliacandido-sudo/petcare_aipsii",c:"Cuidados com pets",d:"Projeto de cuidados com pets.",t:["Público","Atualizado em 17 ago"],g:"#7c3aed,#f472b6"},
{n:"barbearia_diu",u:"https://github.com/diuliacandido-sudo/barbearia_diu",c:"Site para negócio",d:"Projeto de site para barbearia.",t:["Público","Atualizado em 19 ago"],g:"#4f46e5,#a855f7"},
{n:"LOGICA-RAFAEL",u:"https://github.com/diuliacandido-sudo/LOGICA-RAFAEL",c:"Lógica de programação",d:"Exercícios de lógica de programação.",t:["JavaScript","Atualizado em 18 jun"],g:"#9333ea,#ec4899"},
{n:"atividade_Keliven",u:"https://github.com/diuliacandido-sudo/atividade_Keliven",c:"Estilização de páginas",d:"Atividade de estilização de páginas.",t:["CSS","Atualizado há 3 semanas"],g:"#6d28d9,#c084fc"}
];
var l=document.getElementById("lista");
projetos.forEach(function(p){
var a=document.createElement("a");a.className="card";a.href=p.u;a.target="_blank";a.rel="noopener";
a.innerHTML='<div class="cv" style="--g:linear-gradient(135deg,'+p.g+')"><span>'+p.n+'</span></div><div class="bd"><span class="kick">'+p.c+'</span><h3>'+p.n+'</h3><p>'+p.d+'</p><div class="chips">'+p.t.map(function(x){return "<span>"+x+"</span>"}).join("")+'</div><p style="margin:16px 0 0;color:var(--p2);font-weight:800">Abrir no GitHub</p></div>';
l.appendChild(a);
});
var r=document.documentElement,fs=16;
function set(v){fs=Math.max(13,Math.min(24,v));r.style.setProperty("--fs",fs+"px")}
document.getElementById("menos").onclick=function(){set(fs-2)};
document.getElementById("mais").onclick=function(){set(fs+2)};
document.getElementById("normal").onclick=function(){set(16)};
var b=document.getElementById("ct");
b.onclick=function(){var on=r.classList.toggle("hc");b.setAttribute("aria-pressed",on)};
