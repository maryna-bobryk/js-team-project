import{S as c,A as i}from"./assets/vendor-CujUn2eg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".skills-arrow-next"),d=new c(".swiperr",{speed:900,loop:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});a.addEventListener("click",r=>{console.log("Клік по срілці"),d.slideNext()});const u={openOnInit:[0],closeOthers:!0,duration:300,toggle:"click",easing:"ease-in-out",scrollTo:!0,scrollOffset:20};new i(".content-container",u);document.addEventListener("DOMContentLoaded",function(){if(typeof i!="function"){console.error("Accordion library is not loaded.");return}new i(".faq-list",{duration:400,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".faq-question").forEach(r=>{r.addEventListener("click",function(){const s=this.closest(".faq-item");s.classList.toggle("open");const o=s.querySelector(".faq-answer");s.classList.contains("open")?o.style.display="block":o.style.display="none"})})});
//# sourceMappingURL=index.js.map
