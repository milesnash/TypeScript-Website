(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[739],{9386:function(e,t,n){"use strict";n.r(t);var o=n(2784),r=n.n(o),i=n(7480),c=n(876),l=n(3326),a=n(7054),s=n(286),u=n(2332),d=function(e){var t=(0,l.D)((0,c.Z)()),n=e.data.markdownRemark;return n?((0,o.useEffect)((function(){var e=document.querySelectorAll(".tsconfig nav li a");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(e.target.hash).scrollIntoView({behavior:"smooth",block:"start"})}))}));var t=function(){var t,n=window.scrollY;e.forEach((function(e){var o=document.querySelector(e.hash);o&&(o.offsetTop-100<=n&&(t=e))})),e.forEach((function(e){e===t?e.classList.add("current"):e.classList.remove("current")}))};return window.addEventListener("scroll",t,{passive:!0,capture:!0}),t(),(0,s.i)(),function(){window.removeEventListener("scroll",t)}}),[]),r().createElement(i.A,{title:t("tsconfig_title"),description:t("tsconfig_description"),lang:e.pageContext.locale},r().createElement("div",{className:"tsconfig raised main-content-block markdown"},r().createElement("div",{dangerouslySetInnerHTML:{__html:n.html}})))):(u.log("Could not render:",JSON.stringify(e)),r().createElement("div",null))};t.default=function(e){return r().createElement(a.R,{locale:e.pageContext.locale},r().createElement(d,e))}},286:function(e,t){"use strict";t.i=void 0;var n=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},o=function e(t){return"pre"===t.nodeName.toLowerCase()?t.getBoundingClientRect():e(t.parentElement)},r=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return n();var r,i,c,l,a=t.getAttribute("lsp"),s=(r=t,i=document.body.getBoundingClientRect(),{top:(c=r.getBoundingClientRect()).top-i.top,left:c.left-i.left}),u=((l=document.getElementById("twoslash-mouse-hover-info"))||((l=document.createElement("div")).style.position="absolute",l.id="twoslash-mouse-hover-info",document.body.appendChild(l)),l),d=document.createElement("textarea");d.innerHTML=a,u.textContent=d.value;u.style.display="block",u.style.top=s.top+20+"px",u.style.left=s.left+"px";var f=o(t),m=s.left-f.x;u.style.maxWidth=f.width-m+"px"};t.i=function(){var e=document.querySelectorAll(".shiki.lsp .code-container code");return e.forEach((function(e){e.addEventListener("mouseover",r),e.addEventListener("mouseout",n)})),function(){e.forEach((function(e){e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",n)}))}}}}]);
//# sourceMappingURL=component---src-templates-tsconfig-reference-tsx-7a1251a9bc303b30e868.js.map