(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f=document.querySelectorAll(".js-mob-menu-btn"),i=document.querySelector(".js-header-mob-menu"),m=document.querySelectorAll(".js-nav-link"),r=document.querySelector(".js-header"),l=document.querySelector(".js-cookies"),d=l.querySelectorAll(".js-cookie-btn"),p=()=>{i.classList.toggle("is-open"),i.classList.contains("is-open")?r.style.position="static":r.style.position="sticky"},g=t=>{t.preventDefault();const s=document.querySelector(t.currentTarget.getAttribute("href"));if(i.classList.remove("is-open"),r.style.position="sticky",!s)return;const n=s.getBoundingClientRect().top+window.scrollY-r.offsetHeight;window.scrollTo({top:n,behavior:"smooth"})},u=()=>{l.classList.remove("is-show"),localStorage.setItem("firstLoad","fasle"),d.forEach(t=>t.removeEventListener("click",u))};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("firstLoad")??setTimeout(()=>{l.classList.add("is-show")},700)});f.forEach(t=>t.addEventListener("click",p));m.forEach(t=>t.addEventListener("click",g));d.forEach(t=>t.addEventListener("click",u));
//# sourceMappingURL=commonHelpers2.js.map
