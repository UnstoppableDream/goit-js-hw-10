import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as b,i as D}from"./assets/vendor-77e16229.js";const e=document.querySelector(".start-btn"),l=document.querySelector("#datetime-picker"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");function v(t){const r=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),C=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:n,minutes:c,seconds:C}}let s,a;e.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,dateFormat:"Y-m-d H:i",onClose(t){s=t[0],console.log({userSelectedDate:s}),s<=new Date?(D.error({message:"Please choose a date in the future",backgroundColor:"#ef4040",messageColor:"white",position:"topRight",timeout:5e3}),e.disabled=!0,e.classList.remove("btn-active"),p()):(e.disabled=!1,e.classList.add("btn-active"))}};b(l,S);function p(){m.textContent="00",f.textContent="00",h.textContent="00",y.textContent="00"}function x(){a&&clearInterval(a),a=setInterval(()=>{const o=s-new Date;if(o<=0){clearInterval(a),p();return}const{days:i,hours:u,minutes:d,seconds:r}=v(o),n=c=>String(c).padStart(2,"0");m.textContent=n(i),f.textContent=n(u),h.textContent=n(d),y.textContent=n(r)},1e3)}e.addEventListener("click",()=>{x(),e.disabled=!0,l.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map
