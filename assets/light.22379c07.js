import{i as d,l as m,c as s,m as w,W as h,d as l,O as p,C as u}from"./main.bcbc906b.js";import{c as g,a as x}from"./ambient_light.efc30487.js";import{c as y}from"./box.5d22bf9d.js";import{c as M}from"./sphere.e3d73e32.js";const b=()=>new d({roughness:.3}),E=e=>{const t=new m(5,5),n=new s(t,e);return n.rotation.x=-Math.PI*.5,n.position.y=-.65,n},L=e=>{const t=new w(.5,.2,15,100,Math.PI*2),n=new s(t,e);return n.position.x=1.5,n},o=new h({alpha:!0}),i=b(),P=M(i),W=y(i),f=L(i),C=E(i),a=[P,W,f],S=g(.5),z=l(...a,C,S),r=x(-2,1,4),G=new u,c=()=>{const e=G.getElapsedTime();a.forEach(t=>[t.rotation.x,t.rotation.y]=[e*.15,e*.1]),requestAnimationFrame(c),o.render(z,r)},R=()=>{o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(o.domElement),new p(r,o.domElement),c()},T=()=>{o.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()};window.addEventListener("load",R);window.addEventListener("resize",T);