import{a as m,b as h,T as w,i as l,j as p,k as g,c as r,l as u,W as L,d as b,O as P,C as x}from"./main.86866a7f.js";import{c as y,a as E}from"./ambient_light.5ccaa9fa.js";import{c as C}from"./sphere.89e94267.js";const M=()=>{const e=new m(16777215,.7),t=new h(e,1);return e.position.set(1,2,3),{pointLight:e,pointLightHelper:t}},S=e=>{const t="https://raw.githubusercontent.com/Liyuu8/threejs-vite-project/main/src/",o=`images/textures/${e}.jpg`,d=new w().load(t+o);return new l({roughness:.34,metalness:.64,side:p,map:d})},W=e=>{const t=new g(.5),o=new r(t,e);return o.position.x=1.5,o},j=e=>{const t=new u(1,1);return new r(t,e)},n=new L({alpha:!0}),s=S("brick"),H=C(s),f=j(s),k=W(s),a=[H,f,k],v=y(.7),{pointLight:z}=M(),O=b(...a,v,z),i=E(1,1,2),R=new x,c=()=>{const e=R.getElapsedTime();a.forEach(t=>[t.rotation.x,t.rotation.y]=[e,e]),requestAnimationFrame(c),n.render(O,i)},T=()=>{n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(n.domElement),new P(i,n.domElement),c()},G=()=>{n.setSize(window.innerWidth,window.innerHeight),i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix()};window.addEventListener("load",T);window.addEventListener("resize",G);
