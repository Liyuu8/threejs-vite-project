import{P as c,D as h,a as d,b as w,S as m,T as p,M as g,c as l,W as L,d as u,O as M}from"./main.3a414f1c.js";const P=()=>{const e=new c(50,window.innerWidth/window.innerHeight,.1,2e3);return e.position.set(0,0,500),e},H=()=>{const e=new h(16777215,2);return e.position.set(1,1,1),e},W=()=>{const e=new d(16777215,1),i=new w(e,30);return{pointLight:e,pointLightHelper:i,pointLightAnimate:()=>e.position.set(200*Math.sin(Date.now()/500),200*Math.sin(Date.now()/1e3),200*Math.cos(Date.now()/1e3))}},b=()=>{const e=new m(100,64,32),i="https://raw.githubusercontent.com/Liyuu8/threejs-vite-project/main/src/",o="images/textures/earth.jpg",r=new p().load(i+o),s=new g({map:r});return new l(e,s)},t=new L({alpha:!0}),x=b(),y=H(),{pointLight:D,pointLightHelper:E,pointLightAnimate:v}=W(),A=u(x,y,D,E),n=P(),a=()=>{v(),requestAnimationFrame(a),t.render(A,n)},C=()=>{t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(t.domElement),new M(n,t.domElement),a()},S=()=>{t.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()};window.addEventListener("load",C);window.addEventListener("resize",S);
