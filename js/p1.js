(()=>{var e={53:()=>{!function(){const e=document.createElement("div");e.insertAdjacentHTML("afterbegin",'\n            <div class="wrapper">\n                <h1 class="game-title">Gem Puzzle<span class="speaker"></span></h1>\n                <div class="buttons-init">\n                    <button type="button" class="btn" id="btn-start">Start</button>\n                    <button type="button" class="btn" id="btn-save">Save</button>\n                    <button type="button" class="btn" id="btn-result">Results</button>\n                    <button type="button" class="btn" id="btn-demo">Demo</button>\n                </div>\n                <div class="timer">\n                    <div class="moves">Moves:</div>\n                    <div class="timer__number" id="moves">0</div>\n                    <div class="time">Time:</div>\n                    <div class="timer__number" id="timer">\n                        <span class="minutes">00</span>:<span class="seconds">00</span>\n                    </div>\n                </div>\n                <div class="game-field" id="game-field"></div>\n                    <div class="game-size">Frame size:\n                    <input class="range-input" type="radio" id="3x3" name="range" value="3"/>\n                    <label class="range-label" for="3x3" data-debt-size="3x3"></label>\n                    <input class="range-input" type="radio" id="4x4" name="range" value="4" checked/>\n                    <label class="range-label" for="4x4" data-debt-size="4x4"></label>\n                    <input class="range-input" type="radio" id="5x5" name="range" value="5"/>\n                    <label class="range-label" for="5x5" data-debt-size="5x5"></label>\n                    <input class="range-input" type="radio" id="6x6" name="range" value="6"/>\n                    <label class="range-label" for="6x6" data-debt-size="6x6"></label>\n                    <input class="range-input" type="radio" id="7x7" name="range" value="7"/>\n                    <label class="range-label" for="7x7" data-debt-size="7x7"></label>\n                    <input class="range-input" type="radio" id="8x8" name="range" value="8"/>\n                    <label class="range-label" for="8x8" data-debt-size="8x8"></label>\n                </div>\n                <a href="https://goo.su/XtbUHwt" class="task-link">Codejam 2022Q3</a>\n            </div>\n        '),document.body.append(e)}()}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var s=n[a]={exports:{}};return e[a](s,s.exports,t),s.exports}(()=>{"use strict";t(53);const e=document.querySelector("#timer"),n=e.querySelector(".minutes"),a=e.querySelector(".seconds");let r,s=0,l=!1;function i(){!1===l&&(r=setInterval(d,1e3),l=!0)}function o(){!0===l&&(clearInterval(r),l=!1)}function c(){o(),s=0,n.innerText="00",a.innerText="00"}function d(){s++;const e=Math.floor(s/60),t=Math.floor(s%60);n.innerText=u(e),a.innerText=u(t)}function u(e){return e<10?"0"+e:e}const m=new Audio("assets/click.mp3"),p=new Audio("assets/sort.mp3"),f=new Audio("assets/finish.mp3"),b=document.querySelector(".speaker"),v=document.querySelector("#game-field"),y=document.querySelector("#moves"),x=document.querySelector("#btn-start");let g=4,h=16,k=25,T=0,S=document.querySelectorAll(".range-input");function q(){new Array(h).fill(0).map(((e,n)=>n+1)).forEach(((e,n)=>{(e=document.createElement("div")).id=`${n+1}`,e.className="card",e.innerHTML=n+1,e.style.width=`${k}%`,v.append(e)}))}function M(){return Array.from(document.querySelectorAll(".card"))}q();let z=M();z[h-1].style.display="none";let L=E(z.map((e=>+e.id)));function E(e){const n=[];for(let e=0;e<g;e++)n.push([]);let t=0,a=0;for(let r=0;r<e.length;r++)a>=g&&(t++,a=0),n[t][a]=e[r],a++;return n}function w(e){for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++){const a=e[n][t];A(z[a-1],t,n)}}function A(e,n,t){e.style.transform=`translate(${100*n}%, ${100*t}%)`}w(L);let $=H(L);function H(e){return e.flat().sort((()=>Math.random()-.5))}function _(){L=E($),w(L),x.addEventListener("click",(()=>{T=0,y.innerText=T,$=H(L),L=E($),w(L),c(),i(),document.querySelector(".speaker_off")||p.play()})),z.forEach((e=>{e.addEventListener("click",(()=>{const t=+e.id,r=Number(z[h-1].id),s=C(t,L),l=C(r,L);Math.abs(l.x-s.x)+Math.abs(l.y-s.y)>1||(function(e,n,t){const a=t[e.y][e.x];t[e.y][e.x]=t[n.y][n.x],t[n.y][n.x]=a}(s,l,L),w(L),function(e){const n=new Array(h).fill(0).map(((e,n)=>n+1));for(let e=0;e<n.length;e++)if(L.flat()[e]!==n[e])return!1;return!0}()&&setTimeout((()=>{!function(){const e=document.createElement("div");v.innerHTML="",e.className="win",e.innerHTML=`«Hooray! You solved the puzzle in ${n.innerText}:${a.innerText} \n        and ${T} moves!»`,v.append(e),o()}(),document.querySelector(".speaker_off")||f.play()}),300),T++,y.innerText=T,i(),document.querySelector(".speaker_off")||m.play())}))}))}function C(e,n){for(let t=0;t<n.length;t++)for(let a=0;a<n[t].length;a++)if(n[t][a]===e)return{x:a,y:t}}_(),S.forEach((e=>{e.addEventListener("click",(()=>{!0===e.checked&&(g=+e.value,h=Math.pow(g,2),k=100/g,v.innerHTML="",T=0,y.textContent=`${T}`,q(),z=M(),z[h-1].style.display="none",L=E(z.map((e=>+e.id))),w(L),$=H(L),_(),c(),i())}))})),document.querySelector("#btn-demo").addEventListener("click",(()=>{g=4,h=16,k=25,v.innerHTML="",T=0,y.textContent=`${T}`,q(),z=M(),z[h-1].style.display="none",L=E(z.map((e=>+e.id))),w(L),$=L.flat(),_(),c(),i()})),b.addEventListener("click",(()=>{b.classList.toggle("speaker_off")}))})()})();