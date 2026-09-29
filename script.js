const $=s=>document.querySelector(s);
$('#mb').onclick=()=>$('#nav').classList.toggle('open');
const S=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},G=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();const t=$('#ci').value.trim();if(!t)return;
const c=$('#chat');c.insertAdjacentHTML('beforeend',`<p class="me"></p><p class="bot">That sounds tough. Would you like to talk about it or just take a quick check-in?</p>`);
c.querySelectorAll('.me')[c.querySelectorAll('.me').length-1].textContent=t;$('#ci').value=''};
if($('#js'))$('#js').onclick=()=>{const t=$('#jt').value.trim();if(!t)return;
const a=JSON.parse(G('entries')||'[]');a.push({t,d:new Date().toISOString()});S('entries',JSON.stringify(a));$('#jt').value='';$('#jc').textContent='Entry saved.'};
document.querySelectorAll('.quest').forEach(q=>q.onclick=()=>q.classList.toggle('done'));
if($('#pf')){const p=JSON.parse(G('prefs')||'null');
$('#pf').onsubmit=e=>{e.preventDefault();const f=new FormData($('#pf'));
if(!f.getAll('focus').length){$('#pm').textContent='Please choose at least one focus area.';return}
S('prefs',JSON.stringify({style:f.get('style'),comfort:f.get('comfort'),focus:f.getAll('focus')}));$('#pm').textContent='Preferences saved.'};
$('#del').onclick=e=>{e.preventDefault();try{localStorage.clear()}catch(x){}$('#pf').reset();$('#pm').textContent='Your data has been deleted.'}}
