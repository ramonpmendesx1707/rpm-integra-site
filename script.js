document.documentElement.classList.add('js');
const defaultMessage='Olá, Ramon! Conheci a RPM Integra e gostaria de conversar sobre melhorias na minha empresa.';
function wa(message){return 'https://wa.me/5541999751171?text='+encodeURIComponent(message);}
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(defaultMessage);a.target='_blank';a.rel='noopener noreferrer';});
const pains=[
['A informação precisa circular, sem depender de copiar e colar.','Mapeamos onde o trabalho se repete, organizamos o fluxo e avaliamos integrações e automações para reduzir tarefas manuais.','retrabalho e excesso de planilhas'],
['A melhor escolha começa pelo que sua empresa precisa.','Levantamos requisitos, comparamos alternativas e apoiamos a implantação para aproximar o sistema da realidade da operação.','escolha e implantação de sistemas'],
['Comece por um problema concreto. Não pela ferramenta.','Identificamos tarefas em que a IA pode ajudar, avaliamos a qualidade das informações e desenhamos uma primeira aplicação para validar com a equipe.','aplicações de inteligência artificial'],
['Crescer também exige organizar a informação e a rotina.','Estruturamos responsabilidades, controles e indicadores para você acompanhar a operação e decidir com mais clareza.','controles e organização da operação']
];
document.querySelectorAll('[data-pain]').forEach(button=>button.addEventListener('click',()=>{
 const item=pains[Number(button.dataset.pain)];
 document.querySelectorAll('[data-pain]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.getElementById('pain-title').textContent=item[0];document.getElementById('pain-body').textContent=item[1];
 document.getElementById('pain-cta').href=wa('Olá, Ramon! Conheci a RPM Integra e quero conversar sobre '+item[2]+'.');
}));
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const motion=document.getElementById('motion');
if(reduced.matches){document.documentElement.classList.add('paused');motion.textContent='Movimento reduzido';motion.disabled=true;motion.setAttribute('aria-pressed','true');}
motion.addEventListener('click',()=>{const paused=document.documentElement.classList.toggle('paused');motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Retomar animações ▷':'Pausar animações Ⅱ';});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(items=>{items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');observer.unobserve(item.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
let ticking=false;function progress(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading').style.transform='scaleX('+(max>0?scrollY/max:0)+')';ticking=false;}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(progress);ticking=true;}},{passive:true});progress();
const journeyButtons=[...document.querySelectorAll('[data-journey]')];
const journeyDeliveries=['Diagnóstico e oportunidades.','Plano de ação e escopo acordados.','Solução pronta para validar.','Entrega validada e equipe orientada.','Próximos passos com base na prática.'];
const journeyPhases=['Depois de entender','Depois de planejar','Depois de implementar','Depois de entregar','Para continuar evoluindo'];
let journeyCurrent=0,journeyLast=Date.now();
function selectJourney(index){
 journeyCurrent=index;
 journeyButtons.forEach((button,i)=>{button.classList.toggle('active',i===index);button.setAttribute('aria-pressed',String(i===index));});
 document.getElementById('journey-phase').textContent=journeyPhases[index];
 document.getElementById('journey-output').textContent=journeyDeliveries[index];
 document.querySelector('.journey-progress i').style.width=((index+1)*20)+'%';
 journeyLast=Date.now();
}
journeyButtons.forEach((button,index)=>button.addEventListener('click',()=>selectJourney(index)));
setInterval(()=>{
 if(document.hidden||reduced.matches||document.documentElement.classList.contains('paused')){journeyLast=Date.now();return;}
 if(Date.now()-journeyLast>=5000)selectJourney((journeyCurrent+1)%journeyButtons.length);
},500);
