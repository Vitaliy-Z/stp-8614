(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const f=document.querySelectorAll(".js-mob-menu-btn"),i=document.querySelector(".js-header-mob-menu"),p=document.querySelectorAll(".js-mob-nav-link"),l=document.querySelector(".js-header"),n=document.querySelector(".js-cookies"),d=n.querySelectorAll(".cookie-btn"),u=()=>{i.classList.toggle("is-open"),i.classList.contains("is-open")?l.style.position="static":l.style.position="sticky"},a=()=>{n.classList.remove("is-show"),d.forEach(o=>o.removeEventListener("click",a))};document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>n.classList.add("is-show"),700)});f.forEach(o=>o.addEventListener("click",u));p.forEach(o=>o.addEventListener("click",u));d.forEach(o=>o.addEventListener("click",a));
//# sourceMappingURL=commonHelpers2.js.map
