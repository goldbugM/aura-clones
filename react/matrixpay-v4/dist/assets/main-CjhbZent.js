const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./stage-BxXqe_Qj.js","./index-DS-nQFYV.js","./index-CIP7k_oM.css","./cardglow-DJOmBcUg.js"])))=>i.map(i=>d[i]);
import{_ as Qr}from"./index-DS-nQFYV.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="170",bu=0,Ll=1,Eu=2,yh=1,Tu=2,Jn=3,Si=0,un=1,ei=2,yi=0,cs=1,ri=2,Dl=3,Il=4,wu=5,Fi=100,Au=101,Cu=102,Ru=103,Pu=104,Lu=200,Du=201,Iu=202,Uu=203,lo=204,co=205,Fu=206,Nu=207,Ou=208,Bu=209,zu=210,ku=211,Vu=212,Hu=213,Gu=214,ho=0,uo=1,fo=2,gs=3,po=4,mo=5,go=6,vo=7,Mh=0,Wu=1,Xu=2,Mi=0,$u=1,qu=2,Yu=3,Zu=4,ju=5,Ku=6,Ju=7,Ul="attached",Qu="detached",Sh=300,vs=301,_s=302,_o=303,xo=304,ha=306,yo=1e3,Rn=1001,Mo=1002,xn=1003,td=1004,ur=1005,mn=1006,ya=1007,On=1008,oi=1009,bh=1010,Eh=1011,Ks=1012,ol=1013,zi=1014,Pn=1015,bi=1016,ll=1017,cl=1018,xs=1020,Th=35902,wh=1021,Ah=1022,gn=1023,Ch=1024,Rh=1025,hs=1026,ys=1027,hl=1028,ul=1029,Ph=1030,dl=1031,fl=1033,qr=33776,Yr=33777,Zr=33778,jr=33779,So=35840,bo=35841,Eo=35842,To=35843,wo=36196,Ao=37492,Co=37496,Ro=37808,Po=37809,Lo=37810,Do=37811,Io=37812,Uo=37813,Fo=37814,No=37815,Oo=37816,Bo=37817,zo=37818,ko=37819,Vo=37820,Ho=37821,Kr=36492,Go=36494,Wo=36495,Lh=36283,Xo=36284,$o=36285,qo=36286,ta=2300,Yo=2301,Ma=2302,Fl=2400,Nl=2401,Ol=2402,ed=2500,z_=0,k_=1,V_=2,nd=3200,id=3201,Dh=0,sd=1,Nn="",ln="srgb",Es="srgb-linear",ua="linear",Ce="srgb",Wi=7680,Bl=519,rd=512,ad=513,od=514,Ih=515,ld=516,cd=517,hd=518,ud=519,Zo=35044,zl="300 es",ii=2e3,ea=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const us=Math.PI/180,Ms=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function pl(i,t){return(i%t+t)%t}function dd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fd(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function pd(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function md(i,t=1){return t-Math.abs(pl(i,t*2)-t)}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _d(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xd(i,t){return i+Math.random()*(t-i)}function yd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(kl=i);let t=kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sd(i){return i*us}function bd(i){return i*Ms}function Ed(i){return(i&i-1)===0&&i!==0}function Td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),h=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const H_={DEG2RAD:us,RAD2DEG:Ms,generateUUID:Sn,clamp:He,euclideanModulo:pl,mapLinear:dd,inverseLerp:fd,lerp:qs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:vd,randInt:_d,randFloat:xd,randFloatSpread:yd,seededRandom:Md,degToRad:Sd,radToDeg:bd,isPowerOfTwo:Ed,ceilPowerOfTwo:Td,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Ad,normalize:Te,denormalize:Cn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],_=s[4],x=s[7],U=s[2],A=s[5],L=s[8];return r[0]=a*v+o*M+l*U,r[3]=a*m+o*_+l*A,r[6]=a*p+o*x+l*L,r[1]=c*v+u*M+f*U,r[4]=c*m+u*_+f*A,r[7]=c*p+u*x+f*L,r[2]=d*v+h*M+g*U,r[5]=d*m+h*_+g*A,r[8]=d*p+h*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,g=e*f+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=h*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Jt;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cd(){const i=Js("canvas");return i.style.display="block",i}const Vl={};function Xs(i){i in Vl||(Vl[i]=!0,console.warn(i))}function Rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ld(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pe={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ce&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ce&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Hl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Wl=[.3127,.329],Xl=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[Es]:{primaries:Hl,whitePoint:Wl,transfer:ua,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:Hl,whitePoint:Wl,transfer:Ce,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});let Xi;class Dd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Js("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Id=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ba(s[a].image)):r.push(ba(s[a]))}else r=ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class en extends Ts{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Rn,s=Rn,r=mn,a=On,o=gn,l=oi,c=en.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Sn(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Sh;en.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,s=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(h+1)/2,U=(p+1)/2,A=(u+d)/4,L=(f+v)/4,P=(g+m)/4;return _>x&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=L/n):x>U?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends Ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Fd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nh extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nd extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=h,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-o;const p=l*d+c*h+u*g+f*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const U=Math.sqrt(_),A=Math.atan2(U,p*M);m=Math.sin(m*A)/U,o=Math.sin(o*A)/U}const x=o*M;if(l=l*m+d*x,c=c*m+h*x,u=u*m+g*x,f=f*m+v*x,m===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*h-c*d,t[e+1]=l*g+u*d+c*f-o*h,t[e+2]=c*g+u*h+o*d-l*f,t[e+3]=u*g-o*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-e;return this._w=h*a+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new I,ql=new ws;class Ei{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),fr.subVectors(this.max,Fs),$i.subVectors(t.a,Fs),qi.subVectors(t.b,Fs),Yi.subVectors(t.c,Fs),hi.subVectors(qi,$i),ui.subVectors(Yi,qi),Ci.subVectors($i,Yi);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!Ta(e,$i,qi,Yi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,$i,qi,Yi,fr))?!1:(pr.crossVectors(hi,ui),e=[pr.x,pr.y,pr.z],Ta(e,$i,qi,Yi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,dr=new Ei,$i=new I,qi=new I,Yi=new I,hi=new I,ui=new I,Ci=new I,Fs=new I,fr=new I,pr=new I,Ri=new I;function Ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Od=new Ei,Ns=new I,wa=new I;class kn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(wa)),this.expandByPoint(Ns.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new I,Aa=new I,mr=new I,di=new I,Ca=new I,gr=new I,Ra=new I;class sr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Aa.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Aa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=di.dot(this.direction),l=-di.dot(mr),c=di.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Aa).addScaledVector(mr,d),h}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){Ca.subVectors(e,t),gr.subVectors(n,t),Ra.crossVectors(Ca,gr);let a=this.direction.dot(Ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(gr.crossVectors(di,gr));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(di));if(c<0||l+c>a)return null;const u=-o*di.dot(Ra);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,s,r,a,o,l,c,u,f,d,h,g,v,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,d,h,g,v,m)}set(t,e,n,s,r,a,o,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,h=a*f,g=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+h*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;e[0]=d+v*o,e[4]=g*o-h,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=h*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+h*o,e[1]=h+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,h=a*f,g=o*u,v=o*f;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=h*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,h=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-d*f,e[8]=g*f+h,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=h*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*l,h=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+v,e[5]=a*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=o*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,zd)}lookAt(t,e,n){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),fi.crossVectors(n,vn),fi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),fi.crossVectors(n,vn)),fi.normalize(),vr.crossVectors(vn,fi),s[0]=fi.x,s[4]=vr.x,s[8]=vn.x,s[1]=fi.y,s[5]=vr.y,s[9]=vn.y,s[2]=fi.z,s[6]=vr.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],_=n[7],x=n[11],U=n[15],A=s[0],L=s[4],P=s[8],E=s[12],y=s[1],w=s[5],R=s[9],D=s[13],N=s[2],G=s[6],W=s[10],nt=s[14],q=s[3],ft=s[7],tt=s[11],yt=s[15];return r[0]=a*A+o*y+l*N+c*q,r[4]=a*L+o*w+l*G+c*ft,r[8]=a*P+o*R+l*W+c*tt,r[12]=a*E+o*D+l*nt+c*yt,r[1]=u*A+f*y+d*N+h*q,r[5]=u*L+f*w+d*G+h*ft,r[9]=u*P+f*R+d*W+h*tt,r[13]=u*E+f*D+d*nt+h*yt,r[2]=g*A+v*y+m*N+p*q,r[6]=g*L+v*w+m*G+p*ft,r[10]=g*P+v*R+m*W+p*tt,r[14]=g*E+v*D+m*nt+p*yt,r[3]=M*A+_*y+x*N+U*q,r[7]=M*L+_*w+x*G+U*ft,r[11]=M*P+_*R+x*W+U*tt,r[15]=M*E+_*D+x*nt+U*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*h-n*l*h)+v*(+e*l*h-e*c*d+r*a*d-s*a*h+s*c*u-r*l*u)+m*(+e*c*f-e*o*h-r*a*f+n*a*h+r*o*u-n*c*u)+p*(-s*o*u-e*l*f+e*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=f*m*c-v*d*c+v*l*h-o*m*h-f*l*p+o*d*p,_=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,x=u*v*c-g*f*c+g*o*h-a*v*h-u*o*p+a*f*p,U=g*f*l-u*v*l-g*o*d+a*v*d+u*o*m-a*f*m,A=e*M+n*_+s*x+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=M*L,t[1]=(v*d*r-f*m*r-v*s*h+n*m*h+f*s*p-n*d*p)*L,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*L,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*h-n*l*h)*L,t[4]=_*L,t[5]=(u*m*r-g*d*r+g*s*h-e*m*h-u*s*p+e*d*p)*L,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*L,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*h+e*l*h)*L,t[8]=x*L,t[9]=(g*f*r-u*v*r-g*n*h+e*v*h+u*n*p-e*f*p)*L,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*L,t[11]=(u*o*r-a*f*r-u*n*c+e*f*c+a*n*h-e*o*h)*L,t[12]=U*L,t[13]=(u*v*s-g*f*s+g*n*d-e*v*d-u*n*m+e*f*m)*L,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*L,t[15]=(a*f*s-u*o*s+u*n*l-e*f*l-a*n*d+e*o*d)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,g=r*f,v=a*u,m=a*f,p=o*f,M=l*c,_=l*u,x=l*f,U=n.x,A=n.y,L=n.z;return s[0]=(1-(v+p))*U,s[1]=(h+x)*U,s[2]=(g-_)*U,s[3]=0,s[4]=(h-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+_)*L,s[9]=(m-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const c=1/r,u=1/a,f=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ii){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let h,g;if(o===ii)h=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ea)h=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ii){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(a-r),d=(e+t)*c,h=(n+s)*u;let g,v;if(o===ii)g=(a+r)*f,v=-2*f;else if(o===ea)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new I,wn=new Zt,Bd=new I(0,0,0),zd=new I(1,1,1),fi=new I,vr=new I,vn=new I,Yl=new Zt,Zl=new ws;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kd=0;const jl=new I,ji=new ws,qn=new Zt,_r=new I,Os=new I,Vd=new I,Hd=new ws,Kl=new I(1,0,0),Jl=new I(0,1,0),Ql=new I(0,0,1),tc={type:"added"},Gd={type:"removed"},Ki={type:"childadded",child:null},Pa={type:"childremoved",child:null};class ke extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new I,e=new zn,n=new ws,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Jt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Os,_r,this.up):qn.lookAt(_r,Os,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(qn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),h=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new I(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new I,Yn=new I,La=new I,Zn=new I,Ji=new I,Qi=new I,ec=new I,Da=new I,Ia=new I,Ua=new I,Fa=new Qt,Na=new Qt,Oa=new Qt;class Mn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Yn.subVectors(n,e),La.subVectors(t,e);const a=An.dot(An),o=An.dot(Yn),l=An.dot(La),c=Yn.dot(Yn),u=Yn.dot(La),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fa.setScalar(0),Na.setScalar(0),Oa.setScalar(0),Fa.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(Na,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Yn.subVectors(t,e),An.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ji.subVectors(s,n),Qi.subVectors(r,n),Da.subVectors(t,n);const l=Ji.dot(Da),c=Qi.dot(Da);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,s);const u=Ji.dot(Ia),f=Qi.dot(Ia);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ji,a);Ua.subVectors(t,r);const h=Ji.dot(Ua),g=Qi.dot(Ua);if(g>=0&&h<=g)return e.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Qi,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return ec.subVectors(r,s),o=(f-u)/(f-u+(h-g)),e.copy(s).addScaledVector(ec,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=pl(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ba(a,r,t+1/3),this.g=Ba(a,r,t),this.b=Ba(a,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return pe.fromWorkingColorSpace(rn.copy(this),t),Math.round(He(rn.r*255,0,255))*65536+Math.round(He(rn.g*255,0,255))*256+Math.round(He(rn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=ln){pe.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,s=rn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(xr);const n=qs(pi.h,xr.h,e),s=qs(pi.s,xr.s,e),r=qs(pi.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new kt;kt.NAMES=Oh;let Wd=0;class Vi extends Ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Sn(),this.name="",this.blending=cs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gl extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ni=Xd();function Xd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function $d(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=He(i,-65504,65504),ni.floatView[0]=i;const t=ni.uint32View[0],e=t>>23&511;return ni.baseTable[e]+((t&8388607)>>ni.shiftTable[e])}function qd(i){const t=i>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(i&1023)]+ni.exponentTable[t],ni.floatView[0]}const G_={toHalfFloat:$d,fromHalfFloat:qd},Ve=new I,yr=new it;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zo&&(t.usage=this.usage),t}}class Bh extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yd=0;const yn=new Zt,za=new ke,ts=new I,_n=new Ei,Bs=new Ei,je=new I;class Fe extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?zh:Bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(_n.min,Bs.min),_n.expandByPoint(je),je.addVectors(_n.max,Bs.max),_n.expandByPoint(je)):(_n.expandByPoint(Bs.min),_n.expandByPoint(Bs.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(t,c),je.add(ts)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,u=new I,f=new I,d=new it,h=new it,g=new it,v=new I,m=new I;function p(P,E,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(w),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),o[P].add(v),o[E].add(v),o[y].add(v),l[P].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,E=M.length;P<E;++P){const y=M[P],w=y.start,R=y.count;for(let D=w,N=w+R;D<N;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new I,x=new I,U=new I,A=new I;function L(P){U.fromBufferAttribute(s,P),A.copy(U);const E=o[P];_.copy(E),_.sub(U.multiplyScalar(U.dot(E))).normalize(),x.crossVectors(A,E);const w=x.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,w)}for(let P=0,E=M.length;P<E;++P){const y=M[P],w=y.start,R=y.count;for(let D=w,N=w+R;D<N;D+=3)L(t.getX(D+0)),L(t.getX(D+1)),L(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Ge(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new Zt,Pi=new sr,Mr=new kn,ic=new I,Sr=new I,br=new I,Er=new I,ka=new I,Tr=new I,sc=new I,wr=new I;class Oe extends ke{constructor(t=new Fe,e=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ka.fromBufferAttribute(f,t),a?Tr.addScaledVector(ka,u):Tr.addScaledVector(ka.sub(e),u))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Mr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Mr,ic)===null||Pi.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=M,U=_;x<U;x+=3){const A=o.getX(x),L=o.getX(x+1),P=o.getX(x+2);s=Ar(this,p,t,n,c,u,f,A,L,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=Ar(this,a,t,n,c,u,f,M,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=M,U=_;x<U;x+=3){const A=x,L=x+1,P=x+2;s=Ar(this,p,t,n,c,u,f,A,L,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=m,_=m+1,x=m+2;s=Ar(this,a,t,n,c,u,f,M,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zd(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,br),i.getVertexPosition(c,Er);const u=Zd(i,t,e,n,Sr,br,Er,sc);if(u){const f=new I;Mn.getBarycoord(sc,Sr,br,Er,f),s&&(u.uv=Mn.getInterpolatedAttribute(s,o,l,c,f,new it)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,o,l,c,f,new it)),a&&(u.normal=Mn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Mn.getNormal(Sr,br,Er,d.normal),u.face=d,u.barycoord=f}return u}class rr extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function g(v,m,p,M,_,x,U,A,L,P,E){const y=x/L,w=U/P,R=x/2,D=U/2,N=A/2,G=L+1,W=P+1;let nt=0,q=0;const ft=new I;for(let tt=0;tt<W;tt++){const yt=tt*w-D;for(let $t=0;$t<G;$t++){const de=$t*y-R;ft[v]=de*M,ft[m]=yt*_,ft[p]=N,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[p]=A>0?1:-1,u.push(ft.x,ft.y,ft.z),f.push($t/L),f.push(1-tt/P),nt+=1}}for(let tt=0;tt<P;tt++)for(let yt=0;yt<L;yt++){const $t=d+yt+G*tt,de=d+yt+G*(tt+1),J=d+(yt+1)+G*(tt+1),lt=d+(yt+1)+G*tt;l.push($t,de,lt),l.push(de,J,lt),q+=6}o.addGroup(h,q,E),h+=q,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function jd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Vh={clone:Ss,merge:on};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Je extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hh extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new I,rc=new it,ac=new it;class pn extends Hh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,rc,ac),e.subVectors(ac,rc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class Qd extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(es,ns,t,e);s.layers=this.layers,this.add(s);const r=new pn(es,ns,t,e);r.layers=this.layers,this.add(r);const a=new pn(es,ns,t,e);a.layers=this.layers,this.add(a);const o=new pn(es,ns,t,e);o.layers=this.layers,this.add(o);const l=new pn(es,ns,t,e);l.layers=this.layers,this.add(l);const c=new pn(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gh extends en{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rr(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:yi});r.uniforms.tEquirect.value=e;const a=new Oe(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=mn),new Qd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Va=new I,ef=new I,nf=new Jt;class _i{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Va.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new kn,Cr=new I;class vl{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],h=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-h,x-p).normalize(),n[1].setComponents(l+r,d+c,m+h,x+p).normalize(),n[2].setComponents(l+a,d+u,m+g,x+M).normalize(),n[3].setComponents(l-a,d-u,m-g,x-M).normalize(),n[4].setComponents(l-o,d-f,m-v,x-_).normalize(),e===ii)n[5].setComponents(l+o,d+f,m+v,x+_).normalize();else if(e===ea)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class bs extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let _=0;_<c;_++){const x=_*f-r;g.push(x,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const _=M+c*p,x=M+c*(p+1),U=M+1+c*(p+1),A=M+1+c*p;h.push(_,x,A),h.push(x,U,A)}this.setIndex(h),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.widthSegments,t.heightSegments)}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:vf,iridescence_fragment:_f,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:bf,color_fragment:Ef,color_pars_fragment:Tf,color_pars_vertex:wf,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:If,emissivemap_pars_fragment:Uf,colorspace_fragment:Ff,colorspace_pars_fragment:Nf,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:Vf,fog_vertex:Hf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:Zf,lights_pars_begin:jf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:vp,morphcolor_vertex:_p,morphnormal_vertex:xp,morphtarget_pars_vertex:yp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:bp,normal_pars_fragment:Ep,normal_pars_vertex:Tp,normal_vertex:wp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Ip,premultiplied_alpha_fragment:Up,project_vertex:Fp,dithering_fragment:Np,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:$p,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:Zp,tonemapping_fragment:jp,tonemapping_pars_fragment:Kp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:vm,meshbasic_vert:_m,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:bm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:wm,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Im,shadow_vert:Um,shadow_frag:Fm,sprite_vert:Nm,sprite_frag:Om},gt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Fn={basic:{uniforms:on([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:on([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:on([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:on([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:on([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:on([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:on([gt.points,gt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:on([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:on([gt.common,gt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:on([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:on([gt.sprite,gt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:on([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:on([gt.lights,gt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Fn.physical={uniforms:on([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Rr={r:0,b:0,g:0},Di=new zn,Bm=new Zt;function zm(i,t,e,n,s,r,a){const o=new kt(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1;const x=g(M);x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===ha)?(u===void 0&&(u=new Oe(new rr(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Ss(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(_.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Di)),u.material.toneMapped=pe.getTransfer(x.colorSpace)!==Ce,(f!==x||d!==x.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,h=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Oe(new bs(2,2),new Je({name:"BackgroundMaterial",uniforms:Ss(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=pe.getTransfer(x.colorSpace)!==Ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Rr,kh(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:m}}function km(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,w,R,D,N){let G=!1;const W=f(D,R,w);r!==W&&(r=W,c(r.object)),G=h(y,D,R,N),G&&g(y,D,R,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(y,w,R,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,w,R){const D=R.wireframe===!0;let N=n[y.id];N===void 0&&(N={},n[y.id]=N);let G=N[w.id];G===void 0&&(G={},N[w.id]=G);let W=G[D];return W===void 0&&(W=d(l()),G[D]=W),W}function d(y){const w=[],R=[],D=[];for(let N=0;N<e;N++)w[N]=0,R[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:R,attributeDivisors:D,object:y,attributes:{},index:null}}function h(y,w,R,D){const N=r.attributes,G=w.attributes;let W=0;const nt=R.getAttributes();for(const q in nt)if(nt[q].location>=0){const tt=N[q];let yt=G[q];if(yt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(y,w,R,D){const N={},G=w.attributes;let W=0;const nt=R.getAttributes();for(const q in nt)if(nt[q].location>=0){let tt=G[q];tt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor));const yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),N[q]=yt,W++}r.attributes=N,r.attributesNum=W,r.index=D}function v(){const y=r.newAttributes;for(let w=0,R=y.length;w<R;w++)y[w]=0}function m(y){p(y,0)}function p(y,w){const R=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;R[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),N[y]!==w&&(i.vertexAttribDivisor(y,w),N[y]=w)}function M(){const y=r.newAttributes,w=r.enabledAttributes;for(let R=0,D=w.length;R<D;R++)w[R]!==y[R]&&(i.disableVertexAttribArray(R),w[R]=0)}function _(y,w,R,D,N,G,W){W===!0?i.vertexAttribIPointer(y,w,R,N,G):i.vertexAttribPointer(y,w,R,D,N,G)}function x(y,w,R,D){v();const N=D.attributes,G=R.getAttributes(),W=w.defaultAttributeValues;for(const nt in G){const q=G[nt];if(q.location>=0){let ft=N[nt];if(ft===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){const tt=ft.normalized,yt=ft.itemSize,$t=t.get(ft);if($t===void 0)continue;const de=$t.buffer,J=$t.type,lt=$t.bytesPerElement,Rt=J===i.INT||J===i.UNSIGNED_INT||ft.gpuType===ol;if(ft.isInterleavedBufferAttribute){const ut=ft.data,Ft=ut.stride,Gt=ft.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<q.locationSize;Bt++)p(q.location+Bt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)m(q.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Bt=0;Bt<q.locationSize;Bt++)_(q.location+Bt,yt/q.locationSize,J,tt,Ft*lt,(Gt+yt/q.locationSize*Bt)*lt,Rt)}else{if(ft.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)p(q.location+ut,ft.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ut=0;ut<q.locationSize;ut++)m(q.location+ut);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ut=0;ut<q.locationSize;ut++)_(q.location+ut,yt/q.locationSize,J,tt,yt*lt,yt/q.locationSize*ut*lt,Rt)}}else if(W!==void 0){const tt=W[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(q.location,tt);break;case 3:i.vertexAttrib3fv(q.location,tt);break;case 4:i.vertexAttrib4fv(q.location,tt);break;default:i.vertexAttrib1fv(q.location,tt)}}}}M()}function U(){P();for(const y in n){const w=n[y];for(const R in w){const D=w[R];for(const N in D)u(D[N].object),delete D[N];delete w[R]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const R in w){const D=w[R];for(const N in D)u(D[N].object),delete D[N];delete w[R]}delete n[y.id]}function L(y){for(const w in n){const R=n[w];if(R[y.id]===void 0)continue;const D=R[y.id];for(const N in D)u(D[N].object),delete D[N];delete R[y.id]}}function P(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Vm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==gn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const P=L===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==oi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Pn&&!P)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:U,maxSamples:A}}function Gm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _i,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,_=M*4;let x=p.clippingState||null;l.value=x,x=u(g,d,_,h);for(let U=0;U!==_;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=h;_!==v;++_,x+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Wm(i){let t=new WeakMap;function e(a,o){return o===_o?a.mapping=vs:o===xo&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===xo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class da extends Hh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,oc=[.125,.215,.35,.446,.526,.582],Ni=20,Ha=new da,lc=new kt;let Ga=null,Wa=0,Xa=0,$a=!1;const Ui=(1+Math.sqrt(5))/2,is=1/Ui,cc=[new I(-Ui,is,0),new I(Ui,is,0),new I(-is,0,Ui),new I(is,0,Ui),new I(0,Ui,-is),new I(0,Ui,is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=$a,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:bi,format:gn,colorSpace:Es,depthBuffer:!1},s=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=$m(r,t,e)}return s}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,s){const o=new pn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(lc),u.toneMapping=Mi,u.autoClear=!1;const h=new gl({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Oe(new rr,h);let v=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,v=!0):(h.color.copy(lc),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Pr(s,M*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cc[(s-r-1)%cc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Oe(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ni-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let M=0;for(let L=0;L<Ni;++L){const P=L/v,E=Math.exp(-P*P/2);p.push(E),L===0?M+=E:L<m&&(M+=2*E)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[s],U=3*x*(s>_-os?s-_+os:0),A=4*(this._cubeSize-x);Pr(e,U,A,3*x,2*x),l.setRenderTarget(e),l.render(f,Ha)}}function Xm(i){const t=[],e=[],n=[];let s=i;const r=i-os+1+oc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-os?l=oc[a-i+os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*h),_=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let A=0;A<h;A++){const L=A%3*2/3-1,P=A>2?0:-1,E=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];M.set(E,v*g*A),_.set(d,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const U=new Fe;U.setAttribute("position",new Ge(M,v)),U.setAttribute("uv",new Ge(_,m)),U.setAttribute("faceIndex",new Ge(x,p)),t.push(U),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $m(i,t,e){const n=new Float32Array(Ni),s=new I(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function dc(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fc(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===xo,u=l===vs||l===_s;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new hc(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new hc(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ym(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(t.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const M=h.array;v=h.version;for(let _=0,x=M.length;_<x;_+=3){const U=M[_+0],A=M[_+1],L=M[_+2];d.push(U,A,A,L,L,U)}}else if(g!==void 0){const M=g.array;v=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){const U=_+0,A=_+1,L=_+2;d.push(U,A,A,L,L,U)}}else return;const m=new(Uh(d)?zh:Bh)(d,1);m.version=v;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function jm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,d*a,g),e.update(h,n,g))}function u(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function f(d,h,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Km(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t,e){const n=new WeakMap,s=new Qt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;h===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*U*4*f),L=new Nh(A,x,U,f);L.type=Pn,L.needsUpdate=!0;const P=_*4;for(let y=0;y<f;y++){const w=m[y],R=p[y],D=M[y],N=x*U*4*y;for(let G=0;G<w.count;G++){const W=G*P;h===!0&&(s.fromBufferAttribute(w,G),A[N+W+0]=s.x,A[N+W+1]=s.y,A[N+W+2]=s.z,A[N+W+3]=0),g===!0&&(s.fromBufferAttribute(R,G),A[N+W+4]=s.x,A[N+W+5]=s.y,A[N+W+6]=s.z,A[N+W+7]=0),v===!0&&(s.fromBufferAttribute(D,G),A[N+W+8]=s.x,A[N+W+9]=s.y,A[N+W+10]=s.z,A[N+W+11]=D.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new it(x,U)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Xh extends en{constructor(t,e,n,s,r,a,o,l,c,u=hs){if(u!==hs&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hs&&(n=zi),n===void 0&&u===ys&&(n=xs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $h=new en,pc=new Xh(1,1),qh=new Nh,Yh=new Nd,Zh=new Gh,mc=[],gc=[],vc=new Float32Array(16),_c=new Float32Array(9),xc=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if($e(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),qe(e,n)}}function rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if($e(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),qe(e,n)}}function ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if($e(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),qe(e,n)}}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=Ih,r=pc):r=$h,e.setTexture2D(t||r,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yh,s)}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zh,s)}function _g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qh,s)}function xg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return _g}}function yg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function bg(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Dg(i,t){i.uniform2uiv(this.addr,t)}function Ig(i,t){i.uniform3uiv(this.addr,t)}function Ug(i,t){i.uniform4uiv(this.addr,t)}function Fg(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$h,r[a])}function Ng(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yh,r[a])}function Og(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zh,r[a])}function Bg(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qh,r[a])}function zg(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return Tg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class Vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function yc(i,t){i.seq.push(t),i.map[t.id]=t}function Gg(i,t,e){const n=i.name,s=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),a=qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yc(e,c===void 0?new kg(o,i,t):new Vg(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Hg(o),yc(e,f)),e=f}}}class Jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Gg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wg=37297;let Xg=0;function $g(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Sc=new Jt;function qg(i){pe._getMatrix(Sc,pe.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case ua:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$g(i.getShaderSource(t),a)}else return s}function Yg(i,t){const e=qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zg(i,t){let e;switch(t){case $u:e="Linear";break;case qu:e="Reinhard";break;case Yu:e="Cineon";break;case Zu:e="ACESFilmic";break;case Ku:e="AgX";break;case Ju:e="Neutral";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new I;function jg(){pe.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Jg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $s(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(t0,n0)}const e0=new Map;function n0(i,t){let e=ee[t];if(e===void 0){const n=e0.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jo(e)}const i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(i0,s0)}function s0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ac(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function a0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case _s:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function l0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Xu:t="ENVMAP_BLENDING_ADD";break}return t}function c0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function h0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=r0(e),c=a0(e),u=o0(e),f=l0(e),d=c0(e),h=Kg(e),g=Jg(r),v=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=jo(a),a=Ec(a,e),a=Tc(a,e),o=jo(o),o=Ec(o,e),o=Tc(o,e),a=wc(a),o=wc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+a,x=M+p+o,U=Mc(s,s.VERTEX_SHADER,_),A=Mc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,U),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(w){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(U).trim(),N=s.getShaderInfoLog(A).trim();let G=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,A);else{const nt=bc(s,U,"vertex"),q=bc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+nt+`
`+q)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(D===""||N==="")&&(W=!1);W&&(w.diagnostics={runnable:G,programLog:R,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(U),s.deleteShader(A),P=new Jr(s,v),E=Qg(s,v)}let P;this.getUniforms=function(){return P===void 0&&L(this),P};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Wg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}let u0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function p0(i,t,e,n,s,r,a){const o=new ml,l=new d0,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,w,R,D){const N=R.fog,G=D.geometry,W=E.isMeshStandardMaterial?R.environment:null,nt=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),q=nt&&nt.mapping===ha?nt.image.height:null,ft=g[E.type];E.precision!==null&&(h=s.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=tt!==void 0?tt.length:0;let $t=0;G.morphAttributes.position!==void 0&&($t=1),G.morphAttributes.normal!==void 0&&($t=2),G.morphAttributes.color!==void 0&&($t=3);let de,J,lt,Rt;if(ft){const _e=Fn[ft];de=_e.vertexShader,J=_e.fragmentShader}else de=E.vertexShader,J=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),Rt=l.getFragmentShaderID(E);const ut=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Gt=D.isInstancedMesh===!0,Bt=D.isBatchedMesh===!0,oe=!!E.map,Z=!!E.matcap,at=!!nt,F=!!E.aoMap,Ct=!!E.lightMap,st=!!E.bumpMap,Et=!!E.normalMap,dt=!!E.displacementMap,zt=!!E.emissiveMap,Tt=!!E.metalnessMap,C=!!E.roughnessMap,b=E.anisotropy>0,V=E.clearcoat>0,j=E.dispersion>0,et=E.iridescence>0,K=E.sheen>0,Pt=E.transmission>0,mt=b&&!!E.anisotropyMap,Mt=V&&!!E.clearcoatMap,ie=V&&!!E.clearcoatNormalMap,rt=V&&!!E.clearcoatRoughnessMap,wt=et&&!!E.iridescenceMap,Nt=et&&!!E.iridescenceThicknessMap,Vt=K&&!!E.sheenColorMap,At=K&&!!E.sheenRoughnessMap,re=!!E.specularMap,jt=!!E.specularColorMap,we=!!E.specularIntensityMap,B=Pt&&!!E.transmissionMap,pt=Pt&&!!E.thicknessMap,Y=!!E.gradientMap,Q=!!E.alphaMap,xt=E.alphaTest>0,vt=!!E.alphaHash,qt=!!E.extensions;let Ee=Mi;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Ye={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:de,fragmentShader:J,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:Rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Bt,batchingColor:Bt&&D._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&D.instanceColor!==null,instancingMorph:Gt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Es,alphaToCoverage:!!E.alphaToCoverage,map:oe,matcap:Z,envMap:at,envMapMode:at&&nt.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Ct,bumpMap:st,normalMap:Et,displacementMap:d&&dt,emissiveMap:zt,normalMapObjectSpace:Et&&E.normalMapType===sd,normalMapTangentSpace:Et&&E.normalMapType===Dh,metalnessMap:Tt,roughnessMap:C,anisotropy:b,anisotropyMap:mt,clearcoat:V,clearcoatMap:Mt,clearcoatNormalMap:ie,clearcoatRoughnessMap:rt,dispersion:j,iridescence:et,iridescenceMap:wt,iridescenceThicknessMap:Nt,sheen:K,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:re,specularColorMap:jt,specularIntensityMap:we,transmission:Pt,transmissionMap:B,thicknessMap:pt,gradientMap:Y,opaque:E.transparent===!1&&E.blending===cs&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:vt,combine:E.combine,mapUv:oe&&v(E.map.channel),aoMapUv:F&&v(E.aoMap.channel),lightMapUv:Ct&&v(E.lightMap.channel),bumpMapUv:st&&v(E.bumpMap.channel),normalMapUv:Et&&v(E.normalMap.channel),displacementMapUv:dt&&v(E.displacementMap.channel),emissiveMapUv:zt&&v(E.emissiveMap.channel),metalnessMapUv:Tt&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:mt&&v(E.anisotropyMap.channel),clearcoatMapUv:Mt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(E.sheenRoughnessMap.channel),specularMapUv:re&&v(E.specularMap.channel),specularColorMapUv:jt&&v(E.specularColorMap.channel),specularIntensityMapUv:we&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:pt&&v(E.thicknessMap.channel),alphaMapUv:Q&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Et||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(oe||Q),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ft,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:$t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:oe&&E.map.isVideoTexture===!0&&pe.getTransfer(E.map.colorSpace)===Ce,decodeVideoTextureEmissive:zt&&E.emissiveMap.isVideoTexture===!0&&pe.getTransfer(E.emissiveMap.colorSpace)===Ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ei,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)y.push(w),y.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(M(y,E),_(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const y=g[E.type];let w;if(y){const R=Fn[y];w=Vh.clone(R.uniforms)}else w=E.uniforms;return w}function U(E,y){let w;for(let R=0,D=u.length;R<D;R++){const N=u[R];if(N.cacheKey===y){w=N,++w.usedTimes;break}}return w===void 0&&(w=new h0(i,y,E,r),u.push(w)),w}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function L(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:P}}function m0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function g0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,h,g,v,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function o(f,d,h,g,v,m){const p=a(f,d,h,g,v,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function l(f,d,h,g,v,m){const p=a(f,d,h,g,v,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||g0),n.length>1&&n.sort(d||Cc),s.length>1&&s.sort(d||Cc)}function u(){for(let f=t,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function v0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rc,i.set(n,[a])):s>=r.length?(a=new Rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function x0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let y0=0;function M0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S0(i){const t=new _0,e=x0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Zt,a=new Zt;function o(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,M=0,_=0,x=0,U=0,A=0,L=0;c.sort(M0);for(let E=0,y=c.length;E<y;E++){const w=c[E],R=w.color,D=w.intensity,N=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=R.r*D,f+=R.g*D,d+=R.b*D;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],D);L++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const nt=w.shadow,q=e.get(w);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.directionalShadow[h]=q,n.directionalShadowMap[h]=G,n.directionalShadowMatrix[h]=w.shadow.matrix,M++}n.directional[h]=W,h++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(R).multiplyScalar(D),W.distance=N,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[v]=W;const nt=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,nt.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[v]=nt.matrix,w.castShadow){const q=e.get(w);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=G,x++}v++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(R).multiplyScalar(D),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=W,m++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const nt=w.shadow,q=e.get(w);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=W,g++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(D),W.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==U||P.numLightProbes!==L)&&(n.directional.length=h,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,P.directionalLength=h,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=U,P.numLightProbes=L,n.version=y0++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=n.spot[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Pc(i){const t=new S0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function b0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pc(i),t.set(s,[o])):r>=a.length?(o=new Pc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class E0 extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T0 extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C0(i,t,e){let n=new vl;const s=new it,r=new it,a=new Qt,o=new E0({depthPacking:id}),l=new T0,c={},u=e.maxTextureSize,f={[Si]:un,[un]:Si,[ei]:ei},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:w0,fragmentShader:A0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(A,L,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),R=i.state;R.setBlending(yi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=p!==Jn&&this.type===Jn,N=p===Jn&&this.type!==Jn;for(let G=0,W=A.length;G<W;G++){const nt=A[G],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ft=q.getFrameExtents();if(s.multiply(ft),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,q.mapSize.y=r.y)),q.map===null||D===!0||N===!0){const yt=this.type!==Jn?{minFilter:xn,magFilter:xn}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(s.x,s.y,yt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const tt=q.getViewportCount();for(let yt=0;yt<tt;yt++){const $t=q.getViewport(yt);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),R.viewport(a),q.updateMatrices(nt,yt),n=q.getFrustum(),x(L,P,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===Jn&&M(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,w)};function M(A,L){const P=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(L,null,P,d,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(L,null,P,h,v,null)}function _(A,L,P,E){let y=null;const w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const R=y.uuid,D=L.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let G=N[D];G===void 0&&(G=y.clone(),N[D]=G,L.addEventListener("dispose",U)),y=G}if(y.visible=L.visible,y.wireframe=L.wireframe,E===Jn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=i.properties.get(y);R.light=P}return y}function x(A,L,P,E,y){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=t.update(A),N=A.material;if(Array.isArray(N)){const G=D.groups;for(let W=0,nt=G.length;W<nt;W++){const q=G[W],ft=N[q.materialIndex];if(ft&&ft.visible){const tt=_(A,ft,E,y);A.onBeforeShadow(i,A,L,P,D,tt,q),i.renderBufferDirect(P,null,D,tt,A,q),A.onAfterShadow(i,A,L,P,D,tt,q)}}}else if(N.visible){const G=_(A,N,E,y);A.onBeforeShadow(i,A,L,P,D,G,null),i.renderBufferDirect(P,null,D,G,A,null),A.onAfterShadow(i,A,L,P,D,G,null)}}const R=A.children;for(let D=0,N=R.length;D<N;D++)x(R[D],L,P,E,y)}function U(A){A.target.removeEventListener("dispose",U);for(const P in c){const E=c[P],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const R0={[ho]:uo,[fo]:go,[po]:vo,[gs]:mo,[uo]:ho,[go]:fo,[vo]:po,[mo]:gs};function P0(i,t){function e(){let B=!1;const pt=new Qt;let Y=null;const Q=new Qt(0,0,0,0);return{setMask:function(xt){Y!==xt&&!B&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){B=xt},setClear:function(xt,vt,qt,Ee,Ye){Ye===!0&&(xt*=Ee,vt*=Ee,qt*=Ee),pt.set(xt,vt,qt,Ee),Q.equals(pt)===!1&&(i.clearColor(xt,vt,qt,Ee),Q.copy(pt))},reset:function(){B=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let B=!1,pt=!1,Y=null,Q=null,xt=null;return{setReversed:function(vt){if(pt!==vt){const qt=t.get("EXT_clip_control");pt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=xt;xt=null,this.setClear(Ee)}pt=vt},getReversed:function(){return pt},setTest:function(vt){vt?ut(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!B&&(i.depthMask(vt),Y=vt)},setFunc:function(vt){if(pt&&(vt=R0[vt]),Q!==vt){switch(vt){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=vt}},setLocked:function(vt){B=vt},setClear:function(vt){xt!==vt&&(pt&&(vt=1-vt),i.clearDepth(vt),xt=vt)},reset:function(){B=!1,Y=null,Q=null,xt=null,pt=!1}}}function s(){let B=!1,pt=null,Y=null,Q=null,xt=null,vt=null,qt=null,Ee=null,Ye=null;return{setTest:function(_e){B||(_e?ut(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(_e){pt!==_e&&!B&&(i.stencilMask(_e),pt=_e)},setFunc:function(_e,dn,En){(Y!==_e||Q!==dn||xt!==En)&&(i.stencilFunc(_e,dn,En),Y=_e,Q=dn,xt=En)},setOp:function(_e,dn,En){(vt!==_e||qt!==dn||Ee!==En)&&(i.stencilOp(_e,dn,En),vt=_e,qt=dn,Ee=En)},setLocked:function(_e){B=_e},setClear:function(_e){Ye!==_e&&(i.clearStencil(_e),Ye=_e)},reset:function(){B=!1,pt=null,Y=null,Q=null,xt=null,vt=null,qt=null,Ee=null,Ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,M=null,_=null,x=null,U=null,A=null,L=new kt(0,0,0),P=0,E=!1,y=null,w=null,R=null,D=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=nt>=2);let ft=null,tt={};const yt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),de=new Qt().fromArray(yt),J=new Qt().fromArray($t);function lt(B,pt,Y,Q){const xt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(B,vt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<Y;qt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return vt}const Rt={};Rt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(gs),st(!1),Et(Ll),ut(i.CULL_FACE),F(yi);function ut(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Ft(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Gt(B,pt){return f[B]!==pt?(i.bindFramebuffer(B,pt),f[B]=pt,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pt),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Bt(B,pt){let Y=h,Q=!1;if(B){Y=d.get(pt),Y===void 0&&(Y=[],d.set(pt,Y));const xt=B.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,qt=xt.length;vt<qt;vt++)Y[vt]=i.COLOR_ATTACHMENT0+vt;Y.length=xt.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function oe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Z={[Fi]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};Z[Ru]=i.MIN,Z[Pu]=i.MAX;const at={[Lu]:i.ZERO,[Du]:i.ONE,[Iu]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,pt,Y,Q,xt,vt,qt,Ee,Ye,_e){if(B===yi){v===!0&&(Ft(i.BLEND),v=!1);return}if(v===!1&&(ut(i.BLEND),v=!0),B!==wu){if(B!==m||_e!==E){if((p!==Fi||x!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,x=Fi),_e)switch(B){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,_=null,U=null,A=null,L.set(0,0,0),P=0,m=B,E=_e}return}xt=xt||pt,vt=vt||Y,qt=qt||Q,(pt!==p||xt!==x)&&(i.blendEquationSeparate(Z[pt],Z[xt]),p=pt,x=xt),(Y!==M||Q!==_||vt!==U||qt!==A)&&(i.blendFuncSeparate(at[Y],at[Q],at[vt],at[qt]),M=Y,_=Q,U=vt,A=qt),(Ee.equals(L)===!1||Ye!==P)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Ye),L.copy(Ee),P=Ye),m=B,E=!1}function Ct(B,pt){B.side===ei?Ft(i.CULL_FACE):ut(i.CULL_FACE);let Y=B.side===un;pt&&(Y=!Y),st(Y),B.blending===cs&&B.transparent===!1?F(yi):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Q=B.stencilWrite;o.setTest(Q),Q&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function Et(B){B!==bu?(ut(i.CULL_FACE),B!==w&&(B===Ll?i.cullFace(i.BACK):B===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),w=B}function dt(B){B!==R&&(W&&i.lineWidth(B),R=B)}function zt(B,pt,Y){B?(ut(i.POLYGON_OFFSET_FILL),(D!==pt||N!==Y)&&(i.polygonOffset(pt,Y),D=pt,N=Y)):Ft(i.POLYGON_OFFSET_FILL)}function Tt(B){B?ut(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+G-1),ft!==B&&(i.activeTexture(B),ft=B)}function b(B,pt,Y){Y===void 0&&(ft===null?Y=i.TEXTURE0+G-1:Y=ft);let Q=tt[Y];Q===void 0&&(Q={type:void 0,texture:void 0},tt[Y]=Q),(Q.type!==B||Q.texture!==pt)&&(ft!==Y&&(i.activeTexture(Y),ft=Y),i.bindTexture(B,pt||Rt[B]),Q.type=B,Q.texture=pt)}function V(){const B=tt[ft];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(B){de.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function At(B){J.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function re(B,pt){let Y=c.get(pt);Y===void 0&&(Y=new WeakMap,c.set(pt,Y));let Q=Y.get(B);Q===void 0&&(Q=i.getUniformBlockIndex(pt,B.name),Y.set(B,Q))}function jt(B,pt){const Q=c.get(pt).get(B);l.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,B.__bindingPointIndex),l.set(pt,Q))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ft=null,tt={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,M=null,_=null,x=null,U=null,A=null,L=new kt(0,0,0),P=0,E=!1,y=null,w=null,R=null,D=null,N=null,de.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Ft,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:oe,setBlending:F,setMaterial:Ct,setFlipSided:st,setCullFace:Et,setLineWidth:dt,setPolygonOffset:zt,setScissorTest:Tt,activeTexture:C,bindTexture:b,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:wt,texImage3D:Nt,updateUBOMapping:re,uniformBlockBinding:jt,texStorage2D:ie,texStorage3D:rt,texSubImage2D:K,texSubImage3D:Pt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Vt,viewport:At,reset:we}}function Lc(i,t,e,n){const s=L0(n);switch(e){case wh:return i*t;case Ch:return i*t;case Rh:return i*t*2;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case Ah:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:case To:return Math.max(i,16)*Math.max(t,8)/4;case So:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kr:case Go:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lh:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L0(i){switch(i){case oi:case bh:return{byteLength:1,components:1};case Ks:case Eh:case bi:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case zi:case ol:case Pn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return h?new OffscreenCanvas(C,b):Js("canvas")}function v(C,b,V){let j=1;const et=Tt(C);if((et.width>V||et.height>V)&&(j=V/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(j*et.width),Pt=Math.floor(j*et.height);f===void 0&&(f=g(K,Pt));const mt=b?g(K,Pt):f;return mt.width=K,mt.height=Pt,mt.getContext("2d").drawImage(C,0,0,K,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Pt+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,b,V,j,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=b;if(b===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),b===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){const Pt=et?ua:pe.getTransfer(j);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Pt===Ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(C,b){let V;return C?b===null||b===zi||b===xs?V=i.DEPTH24_STENCIL8:b===Pn?V=i.DEPTH32F_STENCIL8:b===Ks&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zi||b===xs?V=i.DEPTH_COMPONENT24:b===Pn?V=i.DEPTH_COMPONENT32F:b===Ks&&(V=i.DEPTH_COMPONENT16),V}function U(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==xn&&C.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){const b=C.target;b.removeEventListener("dispose",A),P(b),b.isVideoTexture&&u.delete(b)}function L(C){const b=C.target;b.removeEventListener("dispose",L),y(b)}function P(C){const b=n.get(C);if(b.__webglInit===void 0)return;const V=C.source,j=d.get(V);if(j){const et=j[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(C),Object.keys(j).length===0&&d.delete(V)}n.remove(C)}function E(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const V=C.source,j=d.get(V);delete j[b.__cacheKey],a.memory.textures--}function y(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let et=0;et<b.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[j][et]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=C.textures;for(let j=0,et=V.length;j<et;j++){const K=n.get(V[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(C)}let w=0;function R(){w=0}function D(){const C=w;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),w+=1,C}function N(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function G(C,b){const V=n.get(C);if(C.isVideoTexture&&dt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,C,b);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function W(C,b){const V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function nt(C,b){const V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function q(C,b){const V=n.get(C);if(C.version>0&&V.__version!==C.version){lt(V,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const ft={[yo]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},tt={[xn]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},yt={[rd]:i.NEVER,[ud]:i.ALWAYS,[ad]:i.LESS,[Ih]:i.LEQUAL,[od]:i.EQUAL,[hd]:i.GEQUAL,[ld]:i.GREATER,[cd]:i.NOTEQUAL};function $t(C,b){if(b.type===Pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===ya||b.magFilter===ur||b.magFilter===On||b.minFilter===mn||b.minFilter===ya||b.minFilter===ur||b.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ft[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ft[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ft[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,tt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==ur&&b.minFilter!==On||b.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function de(C,b){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));const j=b.source;let et=d.get(j);et===void 0&&(et={},d.set(j,et));const K=N(b);if(K!==C.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[K].usedTimes++;const Pt=et[C.__cacheKey];Pt!==void 0&&(et[C.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(b)),C.__cacheKey=K,C.__webglTexture=et[K].texture}return V}function J(C,b,V){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const et=de(C,b),K=b.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+V);const Pt=n.get(K);if(K.version!==Pt.__version||et===!0){e.activeTexture(i.TEXTURE0+V);const mt=pe.getPrimaries(pe.workingColorSpace),Mt=b.colorSpace===Nn?null:pe.getPrimaries(b.colorSpace),ie=b.colorSpace===Nn||mt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let rt=v(b.image,!1,s.maxTextureSize);rt=zt(b,rt);const wt=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type);let Vt=_(b.internalFormat,wt,Nt,b.colorSpace,b.isVideoTexture);$t(j,b);let At;const re=b.mipmaps,jt=b.isVideoTexture!==!0,we=Pt.__version===void 0||et===!0,B=K.dataReady,pt=U(b,rt);if(b.isDepthTexture)Vt=x(b.format===ys,b.type),we&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Vt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,rt.width,rt.height,0,wt,Nt,null));else if(b.isDataTexture)if(re.length>0){jt&&we&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,re[0].width,re[0].height);for(let Y=0,Q=re.length;Y<Q;Y++)At=re[Y],jt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,At.width,At.height,wt,Nt,At.data):e.texImage2D(i.TEXTURE_2D,Y,Vt,At.width,At.height,0,wt,Nt,At.data);b.generateMipmaps=!1}else jt?(we&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,rt.width,rt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,wt,Nt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,rt.width,rt.height,0,wt,Nt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Vt,re[0].width,re[0].height,rt.depth);for(let Y=0,Q=re.length;Y<Q;Y++)if(At=re[Y],b.format!==gn)if(wt!==null)if(jt){if(B)if(b.layerUpdates.size>0){const xt=Lc(At.width,At.height,b.format,b.type);for(const vt of b.layerUpdates){const qt=At.data.subarray(vt*xt/At.data.BYTES_PER_ELEMENT,(vt+1)*xt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,vt,At.width,At.height,1,wt,qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,At.width,At.height,rt.depth,wt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Vt,At.width,At.height,rt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,At.width,At.height,rt.depth,wt,Nt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Vt,At.width,At.height,rt.depth,0,wt,Nt,At.data)}else{jt&&we&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,re[0].width,re[0].height);for(let Y=0,Q=re.length;Y<Q;Y++)At=re[Y],b.format!==gn?wt!==null?jt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,At.width,At.height,wt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Vt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,At.width,At.height,wt,Nt,At.data):e.texImage2D(i.TEXTURE_2D,Y,Vt,At.width,At.height,0,wt,Nt,At.data)}else if(b.isDataArrayTexture)if(jt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Vt,rt.width,rt.height,rt.depth),B)if(b.layerUpdates.size>0){const Y=Lc(rt.width,rt.height,b.format,b.type);for(const Q of b.layerUpdates){const xt=rt.data.subarray(Q*Y/rt.data.BYTES_PER_ELEMENT,(Q+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,wt,Nt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,wt,Nt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,rt.width,rt.height,rt.depth,0,wt,Nt,rt.data);else if(b.isData3DTexture)jt?(we&&e.texStorage3D(i.TEXTURE_3D,pt,Vt,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,wt,Nt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,rt.width,rt.height,rt.depth,0,wt,Nt,rt.data);else if(b.isFramebufferTexture){if(we)if(jt)e.texStorage2D(i.TEXTURE_2D,pt,Vt,rt.width,rt.height);else{let Y=rt.width,Q=rt.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Vt,Y,Q,0,wt,Nt,null),Y>>=1,Q>>=1}}else if(re.length>0){if(jt&&we){const Y=Tt(re[0]);e.texStorage2D(i.TEXTURE_2D,pt,Vt,Y.width,Y.height)}for(let Y=0,Q=re.length;Y<Q;Y++)At=re[Y],jt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,wt,Nt,At):e.texImage2D(i.TEXTURE_2D,Y,Vt,wt,Nt,At);b.generateMipmaps=!1}else if(jt){if(we){const Y=Tt(rt);e.texStorage2D(i.TEXTURE_2D,pt,Vt,Y.width,Y.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Nt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,wt,Nt,rt);m(b)&&p(j),Pt.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function lt(C,b,V){if(b.image.length!==6)return;const j=de(C,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);const K=n.get(et);if(et.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+V);const Pt=pe.getPrimaries(pe.workingColorSpace),mt=b.colorSpace===Nn?null:pe.getPrimaries(b.colorSpace),Mt=b.colorSpace===Nn||Pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const ie=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!ie&&!rt?wt[Q]=v(b.image[Q],!0,s.maxCubemapSize):wt[Q]=rt?b.image[Q].image:b.image[Q],wt[Q]=zt(b,wt[Q]);const Nt=wt[0],Vt=r.convert(b.format,b.colorSpace),At=r.convert(b.type),re=_(b.internalFormat,Vt,At,b.colorSpace),jt=b.isVideoTexture!==!0,we=K.__version===void 0||j===!0,B=et.dataReady;let pt=U(b,Nt);$t(i.TEXTURE_CUBE_MAP,b);let Y;if(ie){jt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,re,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){Y=wt[Q].mipmaps;for(let xt=0;xt<Y.length;xt++){const vt=Y[xt];b.format!==gn?Vt!==null?jt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,re,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,vt.width,vt.height,Vt,At,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,re,vt.width,vt.height,0,Vt,At,vt.data)}}}else{if(Y=b.mipmaps,jt&&we){Y.length>0&&pt++;const Q=Tt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,re,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Vt,At,wt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,re,wt[Q].width,wt[Q].height,0,Vt,At,wt[Q].data);for(let xt=0;xt<Y.length;xt++){const qt=Y[xt].image[Q].image;jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,qt.width,qt.height,Vt,At,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,re,qt.width,qt.height,0,Vt,At,qt.data)}}else{jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Vt,At,wt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,re,Vt,At,wt[Q]);for(let xt=0;xt<Y.length;xt++){const vt=Y[xt];jt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Vt,At,vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,re,Vt,At,vt.image[Q])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Rt(C,b,V,j,et,K){const Pt=r.convert(V.format,V.colorSpace),mt=r.convert(V.type),Mt=_(V.internalFormat,Pt,mt,V.colorSpace),ie=n.get(b),rt=n.get(V);if(rt.__renderTarget=b,!ie.__hasExternalTextures){const wt=Math.max(1,b.width>>K),Nt=Math.max(1,b.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,Mt,wt,Nt,b.depth,0,Pt,mt,null):e.texImage2D(et,K,Mt,wt,Nt,0,Pt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Et(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,rt.__webglTexture,0,st(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,et=j&&j.isDepthTexture?j.type:null,K=x(b.stencilBuffer,et),Pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=st(b);Et(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,K,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,C)}else{const j=b.textures;for(let et=0;et<j.length;et++){const K=j[et],Pt=r.convert(K.format,K.colorSpace),mt=r.convert(K.type),Mt=_(K.internalFormat,Pt,mt,K.colorSpace),ie=st(b);V&&Et(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Mt,b.width,b.height):Et(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const et=j.__webglTexture,K=st(b);if(b.depthTexture.format===hs)Et(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===ys)Et(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Gt(C){const b=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,C)}else if(V){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),ut(b.__webglDepthbuffer[j],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ut(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,b,V){const j=n.get(C);b!==void 0&&Rt(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Gt(C)}function oe(C){const b=C.texture,V=n.get(C),j=n.get(b);C.addEventListener("dispose",L);const et=C.textures,K=C.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)V.__webglFramebuffer[mt][Mt]=i.createFramebuffer()}else V.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)V.__webglFramebuffer[mt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let mt=0,Mt=et.length;mt<Mt;mt++){const ie=n.get(et[mt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Et(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const Mt=et[mt];V.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);const ie=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),wt=_(Mt.internalFormat,ie,rt,Mt.colorSpace,C.isXRRenderTarget===!0),Nt=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$t(i.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)Rt(V.__webglFramebuffer[mt][Mt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else Rt(V.__webglFramebuffer[mt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let mt=0,Mt=et.length;mt<Mt;mt++){const ie=et[mt],rt=n.get(ie);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),$t(i.TEXTURE_2D,ie),Rt(V.__webglFramebuffer,C,ie,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(ie)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),$t(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)Rt(V.__webglFramebuffer[Mt],C,b,i.COLOR_ATTACHMENT0,mt,Mt);else Rt(V.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,mt,0);m(b)&&p(mt),e.unbindTexture()}C.depthBuffer&&Gt(C)}function Z(C){const b=C.textures;for(let V=0,j=b.length;V<j;V++){const et=b[V];if(m(et)){const K=M(C),Pt=n.get(et).__webglTexture;e.bindTexture(K,Pt),p(K),e.unbindTexture()}}}const at=[],F=[];function Ct(C){if(C.samples>0){if(Et(C)===!1){const b=C.textures,V=C.width,j=C.height;let et=i.COLOR_BUFFER_BIT;const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(C),mt=b.length>1;if(mt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Mt]);const ie=n.get(b[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,et,i.NEAREST),l===!0&&(at.length=0,F.length=0,at.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(K),F.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Mt]);const ie=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function Et(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(C){const b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function zt(C,b){const V=C.colorSpace,j=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Es&&V!==Nn&&(pe.getTransfer(V)===Ce?(j!==gn||et!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Et}function I0(i,t){function e(n,s=Nn){let r;const a=pe.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Ah)return i.RGB;if(n===gn)return i.RGBA;if(n===Ch)return i.LUMINANCE;if(n===Rh)return i.LUMINANCE_ALPHA;if(n===hs)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===jr)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===bo||n===Eo||n===To)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ao||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ao)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===Fo||n===No||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Go||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kr)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===Xo||n===$o||n===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class U0 extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class si extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Je({vertexShader:N0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z0 extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=new B0,m=e.getContextAttributes();let p=null,M=null;const _=[],x=[],U=new it;let A=null;const L=new pn;L.viewport=new Qt;const P=new pn;P.viewport=new Qt;const E=[L,P],y=new U0;let w=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=_[J];return lt===void 0&&(lt=new Ya,_[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=_[J];return lt===void 0&&(lt=new Ya,_[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=_[J];return lt===void 0&&(lt=new Ya,_[J]=lt),lt.getHandSpace()};function D(J){const lt=x.indexOf(J.inputSource);if(lt===-1)return;const Rt=_[lt];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,c||a),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let J=0;J<_.length;J++){const lt=x[J];lt!==null&&(x[J]=null,_[J].disconnect(lt))}w=null,R=null,v.reset(),t.setRenderTarget(p),h=null,d=null,f=null,s=null,M=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Bn(h.framebufferWidth,h.framebufferHeight,{format:gn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Rt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?ys:hs,Rt=m.stencil?xs:zi);const Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Bn(d.textureWidth,d.textureHeight,{format:gn,type:oi,depthTexture:new Xh(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(J){for(let lt=0;lt<J.removed.length;lt++){const Rt=J.removed[lt],ut=x.indexOf(Rt);ut>=0&&(x[ut]=null,_[ut].disconnect(Rt))}for(let lt=0;lt<J.added.length;lt++){const Rt=J.added[lt];let ut=x.indexOf(Rt);if(ut===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=x.length){x.push(Rt),ut=Gt;break}else if(x[Gt]===null){x[Gt]=Rt,ut=Gt;break}if(ut===-1)break}const Ft=_[ut];Ft&&Ft.connect(Rt)}}const W=new I,nt=new I;function q(J,lt,Rt){W.setFromMatrixPosition(lt.matrixWorld),nt.setFromMatrixPosition(Rt.matrixWorld);const ut=W.distanceTo(nt),Ft=lt.projectionMatrix.elements,Gt=Rt.projectionMatrix.elements,Bt=Ft[14]/(Ft[10]-1),oe=Ft[14]/(Ft[10]+1),Z=(Ft[9]+1)/Ft[5],at=(Ft[9]-1)/Ft[5],F=(Ft[8]-1)/Ft[0],Ct=(Gt[8]+1)/Gt[0],st=Bt*F,Et=Bt*Ct,dt=ut/(-F+Ct),zt=dt*-F;if(lt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ft[10]===-1)J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Tt=Bt+dt,C=oe+dt,b=st-zt,V=Et+(ut-zt),j=Z*oe/C*Tt,et=at*oe/C*Tt;J.projectionMatrix.makePerspective(b,V,j,et,Tt,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let lt=J.near,Rt=J.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(Rt=v.depthFar)),y.near=P.near=L.near=lt,y.far=P.far=L.far=Rt,(w!==y.near||R!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,R=y.far),L.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,y.layers.mask=L.layers.mask|P.layers.mask;const ut=J.parent,Ft=y.cameras;ft(y,ut);for(let Gt=0;Gt<Ft.length;Gt++)ft(Ft[Gt],ut);Ft.length===2?q(y,L,P):y.projectionMatrix.copy(L.projectionMatrix),tt(J,y,ut)};function tt(J,lt,Rt){Rt===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let yt=null;function $t(J,lt){if(u=lt.getViewerPose(c||a),g=lt,u!==null){const Rt=u.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let ut=!1;Rt.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let Gt=0;Gt<Rt.length;Gt++){const Bt=Rt[Gt];let oe=null;if(h!==null)oe=h.getViewport(Bt);else{const at=f.getViewSubImage(d,Bt);oe=at.viewport,Gt===0&&(t.setRenderTargetTextures(M,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(M))}let Z=E[Gt];Z===void 0&&(Z=new pn,Z.layers.enable(Gt),Z.viewport=new Qt,E[Gt]=Z),Z.matrix.fromArray(Bt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Bt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(oe.x,oe.y,oe.width,oe.height),Gt===0&&(y.matrix.copy(Z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Z)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Gt=f.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let Rt=0;Rt<_.length;Rt++){const ut=x[Rt],Ft=_[Rt];ut!==null&&Ft!==void 0&&Ft.update(ut,lt,c||a)}yt&&yt(J,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const de=new Wh;de.setAnimationLoop($t),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const Ii=new zn,k0=new Zt;function V0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,x=M.envMapRotation;_&&(m.envMap.value=_,Ii.copy(x),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Ii)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const x=_.program;n.uniformBlockBinding(M,x)}function c(M,_){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const U=_.program;n.updateUBOMapping(M,U);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function u(M){const _=f();M.__bindingPointIndex=_;const x=i.createBuffer(),U=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=s[M.id],x=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,L=x.length;A<L;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,y=P.length;E<y;E++){const w=P[E];if(h(w,A,E,U)===!0){const R=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let G=0;G<D.length;G++){const W=D[G],nt=v(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,R+N,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,N),N+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,x,U){const A=M.value,L=_+"_"+x;if(U[L]===void 0)return typeof A=="number"||typeof A=="boolean"?U[L]=A:U[L]=A.clone(),!0;{const P=U[L];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return U[L]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(M){const _=M.uniforms;let x=0;const U=16;for(let L=0,P=_.length;L<P;L++){const E=Array.isArray(_[L])?_[L]:[_[L]];for(let y=0,w=E.length;y<w;y++){const R=E[y],D=Array.isArray(R.value)?R.value:[R.value];for(let N=0,G=D.length;N<G;N++){const W=D[N],nt=v(W),q=x%U,ft=q%nt.boundary,tt=q+ft;x+=ft,tt!==0&&U-tt<nt.storage&&(x+=U-tt),R.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=nt.storage}}}const A=x%U;return A>0&&(x+=U-A),M.__size=x,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class W_{constructor(t={}){const{canvas:e=Cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let U=!1,A=0,L=0,P=null,E=-1,y=null;const w=new Qt,R=new Qt;let D=null;const N=new kt(0);let G=0,W=e.width,nt=e.height,q=1,ft=null,tt=null;const yt=new Qt(0,0,W,nt),$t=new Qt(0,0,W,nt);let de=!1;const J=new vl;let lt=!1,Rt=!1;const ut=new Zt,Ft=new Zt,Gt=new I,Bt=new Qt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function at(){return P===null?q:1}let F=n;function Ct(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),F===null){const z="webgl2";if(F=Ct(z,T),F===null)throw Ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,Et,dt,zt,Tt,C,b,V,j,et,K,Pt,mt,Mt,ie,rt,wt,Nt,Vt,At,re,jt,we,B;function pt(){st=new Ym(F),st.init(),jt=new I0(F,st),Et=new Hm(F,st,t,jt),dt=new P0(F,st),Et.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),zt=new Km(F),Tt=new m0,C=new D0(F,st,dt,Tt,Et,jt,zt),b=new Wm(x),V=new qm(x),j=new sf(F),we=new km(F,j),et=new Zm(F,j,zt,we),K=new Qm(F,et,j,zt),Vt=new Jm(F,Et,C),rt=new Gm(Tt),Pt=new p0(x,b,V,st,Et,we,rt),mt=new V0(x,Tt),Mt=new v0,ie=new b0(st),Nt=new zm(x,b,V,dt,K,h,l),wt=new C0(x,K,Et),B=new H0(F,zt,Et,dt),At=new Vm(F,st,zt),re=new jm(F,st,zt),zt.programs=Pt.programs,x.capabilities=Et,x.extensions=st,x.properties=Tt,x.renderLists=Mt,x.shadowMap=wt,x.state=dt,x.info=zt}pt();const Y=new z0(x,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(W,nt,!1))},this.getSize=function(T){return T.set(W,nt)},this.setSize=function(T,z,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,nt=z,e.width=Math.floor(T*q),e.height=Math.floor(z*q),X===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(W*q,nt*q).floor()},this.setDrawingBufferSize=function(T,z,X){W=T,nt=z,q=X,e.width=Math.floor(T*X),e.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,z,X,$){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,z,X,$),dt.viewport(w.copy(yt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy($t)},this.setScissor=function(T,z,X,$){T.isVector4?$t.set(T.x,T.y,T.z,T.w):$t.set(T,z,X,$),dt.scissor(R.copy($t).multiplyScalar(q).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){dt.setScissorTest(de=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,z=!0,X=!0){let $=0;if(T){let k=!1;if(P!==null){const ot=P.texture.format;k=ot===fl||ot===dl||ot===ul}if(k){const ot=P.texture.type,_t=ot===oi||ot===zi||ot===Ks||ot===xs||ot===ll||ot===cl,Ut=Nt.getClearColor(),It=Nt.getClearAlpha(),Wt=Ut.r,Yt=Ut.g,Lt=Ut.b;_t?(g[0]=Wt,g[1]=Yt,g[2]=Lt,g[3]=It,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Wt,v[1]=Yt,v[2]=Lt,v[3]=It,F.clearBufferiv(F.COLOR,0,v))}else $|=F.COLOR_BUFFER_BIT}z&&($|=F.DEPTH_BUFFER_BIT),X&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),ie.dispose(),Tt.dispose(),b.dispose(),V.dispose(),K.dispose(),we.dispose(),B.dispose(),Pt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",or),Y.removeEventListener("sessionend",Hi),Gn.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=zt.autoReset,z=wt.enabled,X=wt.autoUpdate,$=wt.needsUpdate,k=wt.type;pt(),zt.autoReset=T,wt.enabled=z,wt.autoUpdate=X,wt.needsUpdate=$,wt.type=k}function vt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){const z=T.target;z.removeEventListener("dispose",qt),Ee(z)}function Ee(T){Ye(T),Tt.remove(T)}function Ye(T){const z=Tt.get(T).programs;z!==void 0&&(z.forEach(function(X){Pt.releaseProgram(X)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,$,k,ot){z===null&&(z=oe);const _t=k.isMesh&&k.matrixWorld.determinant()<0,Ut=Ds(T,z,X,$,k);dt.setMaterial($,_t);let It=X.index,Wt=1;if($.wireframe===!0){if(It=et.getWireframeAttribute(X),It===void 0)return;Wt=2}const Yt=X.drawRange,Lt=X.attributes.position;let le=Yt.start*Wt,me=(Yt.start+Yt.count)*Wt;ot!==null&&(le=Math.max(le,ot.start*Wt),me=Math.min(me,(ot.start+ot.count)*Wt)),It!==null?(le=Math.max(le,0),me=Math.min(me,It.count)):Lt!=null&&(le=Math.max(le,0),me=Math.min(me,Lt.count));const ce=me-le;if(ce<0||ce===1/0)return;we.setup(k,$,Ut,X,It);let Qe,Kt=At;if(It!==null&&(Qe=j.get(It),Kt=re,Kt.setIndex(Qe)),k.isMesh)$.wireframe===!0?(dt.setLineWidth($.wireframeLinewidth*at()),Kt.setMode(F.LINES)):Kt.setMode(F.TRIANGLES);else if(k.isLine){let S=$.linewidth;S===void 0&&(S=1),dt.setLineWidth(S*at()),k.isLineSegments?Kt.setMode(F.LINES):k.isLineLoop?Kt.setMode(F.LINE_LOOP):Kt.setMode(F.LINE_STRIP)}else k.isPoints?Kt.setMode(F.POINTS):k.isSprite&&Kt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Kt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Kt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const S=k._multiDrawStarts,O=k._multiDrawCounts,H=k._multiDrawCount,ht=It?j.get(It).bytesPerElement:1,St=Tt.get($).currentProgram.getUniforms();for(let Xt=0;Xt<H;Xt++)St.setValue(F,"_gl_DrawID",Xt),Kt.render(S[Xt]/ht,O[Xt])}else if(k.isInstancedMesh)Kt.renderInstances(le,ce,k.count);else if(X.isInstancedBufferGeometry){const S=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,O=Math.min(X.instanceCount,S);Kt.renderInstances(le,ce,O)}else Kt.render(le,ce)};function _e(T,z,X){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,ci(T,z,X),T.side=Si,T.needsUpdate=!0,ci(T,z,X),T.side=ei):ci(T,z,X)}this.compile=function(T,z,X=null){X===null&&(X=T),p=ie.get(X),p.init(z),_.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==X&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const Ut=ot[_t];_e(Ut,X,k),$.add(Ut)}else _e(ot,X,k),$.add(ot)}),_.pop(),p=null,$},this.compileAsync=function(T,z,X=null){const $=this.compile(T,z,X);return new Promise(k=>{function ot(){if($.forEach(function(_t){Tt.get(_t).currentProgram.isReady()&&$.delete(_t)}),$.size===0){k(T);return}setTimeout(ot,10)}st.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let dn=null;function En(T){dn&&dn(T)}function or(){Gn.stop()}function Hi(){Gn.start()}const Gn=new Wh;Gn.setAnimationLoop(En),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(T){dn=T,Y.setAnimationLoop(T),T===null?Gn.stop():Gn.start()},Y.addEventListener("sessionstart",or),Y.addEventListener("sessionend",Hi),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,P),p=ie.get(T,_.length),p.init(z),_.push(p),Ft.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(Ft),Rt=this.localClippingEnabled,lt=rt.init(this.clippingPlanes,Rt),m=Mt.get(T,M.length),m.init(),M.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&li(ot,z,-1/0,x.sortObjects)}li(T,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ft,tt),Z=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Z&&Nt.addToRenderList(m,T),this.info.render.frame++,lt===!0&&rt.beginShadows();const X=p.state.shadowsArray;wt.render(X,T,z),lt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ot=z.cameras;if(k.length>0)for(let _t=0,Ut=ot.length;_t<Ut;_t++){const It=ot[_t];lr($,k,T,It)}Z&&Nt.render(T);for(let _t=0,Ut=ot.length;_t<Ut;_t++){const It=ot[_t];Ps(m,T,It,It.viewport)}}else k.length>0&&lr($,k,T,z),Z&&Nt.render(T),Ps(m,T,z);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,z),we.resetDefaultState(),E=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],lt===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function li(T,z,X,$){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){$&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ft);const _t=K.update(T),Ut=T.material;Ut.visible&&m.push(T,_t,Ut,X,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const _t=K.update(T),Ut=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Bt.copy(_t.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ut)){const It=_t.groups;for(let Wt=0,Yt=It.length;Wt<Yt;Wt++){const Lt=It[Wt],le=Ut[Lt.materialIndex];le&&le.visible&&m.push(T,_t,le,X,Bt.z,Lt)}}else Ut.visible&&m.push(T,_t,Ut,X,Bt.z,null)}}const ot=T.children;for(let _t=0,Ut=ot.length;_t<Ut;_t++)li(ot[_t],z,X,$)}function Ps(T,z,X,$){const k=T.opaque,ot=T.transmissive,_t=T.transparent;p.setupLightsView(X),lt===!0&&rt.setGlobalState(x.clippingPlanes,X),$&&dt.viewport(w.copy($)),k.length>0&&Ti(k,z,X),ot.length>0&&Ti(ot,z,X),_t.length>0&&Ti(_t,z,X),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function lr(T,z,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Bn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?bi:oi,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ot=p.state.transmissionRenderTarget[$.id],_t=$.viewport||w;ot.setSize(_t.z,_t.w);const Ut=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(N),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Nt.render(X);const It=x.toneMapping;x.toneMapping=Mi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),lt===!0&&rt.setGlobalState(x.clippingPlanes,$),Ti(T,X,$),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),st.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Lt=0,le=z.length;Lt<le;Lt++){const me=z[Lt],ce=me.object,Qe=me.geometry,Kt=me.material,S=me.group;if(Kt.side===ei&&ce.layers.test($.layers)){const O=Kt.side;Kt.side=un,Kt.needsUpdate=!0,Gi(ce,X,$,Qe,Kt,S),Kt.side=O,Kt.needsUpdate=!0,Yt=!0}}Yt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}x.setRenderTarget(Ut),x.setClearColor(N,G),Wt!==void 0&&($.viewport=Wt),x.toneMapping=It}function Ti(T,z,X){const $=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ot=T.length;k<ot;k++){const _t=T[k],Ut=_t.object,It=_t.geometry,Wt=$===null?_t.material:$,Yt=_t.group;Ut.layers.test(X.layers)&&Gi(Ut,z,X,It,Wt,Yt)}}function Gi(T,z,X,$,k,ot){T.onBeforeRender(x,z,X,$,k,ot),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,z,X,$,T,ot),k.transparent===!0&&k.side===ei&&k.forceSinglePass===!1?(k.side=un,k.needsUpdate=!0,x.renderBufferDirect(X,z,$,k,T,ot),k.side=Si,k.needsUpdate=!0,x.renderBufferDirect(X,z,$,k,T,ot),k.side=ei):x.renderBufferDirect(X,z,$,k,T,ot),T.onAfterRender(x,z,X,$,k,ot)}function ci(T,z,X){z.isScene!==!0&&(z=oe);const $=Tt.get(T),k=p.state.lights,ot=p.state.shadowsArray,_t=k.state.version,Ut=Pt.getParameters(T,k.state,ot,z,X),It=Pt.getProgramCacheKey(Ut);let Wt=$.programs;$.environment=T.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(T.isMeshStandardMaterial?V:b).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",qt),Wt=new Map,$.programs=Wt);let Yt=Wt.get(It);if(Yt!==void 0){if($.currentProgram===Yt&&$.lightsStateVersion===_t)return Ls(T,Ut),Yt}else Ut.uniforms=Pt.getUniforms(T),T.onBeforeCompile(Ut,x),Yt=Pt.acquireProgram(Ut,It),Wt.set(It,Yt),$.uniforms=Ut.uniforms;const Lt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),Ls(T,Ut),$.needsLights=cr(T),$.lightsStateVersion=_t,$.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Yt,$.uniformsList=null,Yt}function Wn(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Ls(T,z){const X=Tt.get(T);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Ds(T,z,X,$,k){z.isScene!==!0&&(z=oe),C.resetTextureUnits();const ot=z.fog,_t=$.isMeshStandardMaterial?z.environment:null,Ut=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Es,It=($.isMeshStandardMaterial?V:b).get($.envMap||_t),Wt=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Yt=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,me=!!X.morphAttributes.color;let ce=Mi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=x.toneMapping);const Qe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Kt=Qe!==void 0?Qe.length:0,S=Tt.get($),O=p.state.lights;if(lt===!0&&(Rt===!0||T!==y)){const ge=T===y&&$.id===E;rt.setState($,T,ge)}let H=!1;$.version===S.__version?(S.needsLights&&S.lightsStateVersion!==O.state.version||S.outputColorSpace!==Ut||k.isBatchedMesh&&S.batching===!1||!k.isBatchedMesh&&S.batching===!0||k.isBatchedMesh&&S.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&S.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&S.instancing===!1||!k.isInstancedMesh&&S.instancing===!0||k.isSkinnedMesh&&S.skinning===!1||!k.isSkinnedMesh&&S.skinning===!0||k.isInstancedMesh&&S.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&S.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&S.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&S.instancingMorph===!1&&k.morphTexture!==null||S.envMap!==It||$.fog===!0&&S.fog!==ot||S.numClippingPlanes!==void 0&&(S.numClippingPlanes!==rt.numPlanes||S.numIntersection!==rt.numIntersection)||S.vertexAlphas!==Wt||S.vertexTangents!==Yt||S.morphTargets!==Lt||S.morphNormals!==le||S.morphColors!==me||S.toneMapping!==ce||S.morphTargetsCount!==Kt)&&(H=!0):(H=!0,S.__version=$.version);let ht=S.currentProgram;H===!0&&(ht=ci($,z,k));let St=!1,Xt=!1,Ot=!1;const Ht=ht.getUniforms(),xe=S.uniforms;if(dt.useProgram(ht.program)&&(St=!0,Xt=!0,Ot=!0),$.id!==E&&(E=$.id,Xt=!0),St||y!==T){dt.buffers.depth.getReversed()?(ut.copy(T.projectionMatrix),Pd(ut),Ld(ut),Ht.setValue(F,"projectionMatrix",ut)):Ht.setValue(F,"projectionMatrix",T.projectionMatrix),Ht.setValue(F,"viewMatrix",T.matrixWorldInverse);const We=Ht.map.cameraPosition;We!==void 0&&We.setValue(F,Gt.setFromMatrixPosition(T.matrixWorld)),Et.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Xt=!0,Ot=!0)}if(k.isSkinnedMesh){Ht.setOptional(F,k,"bindMatrix"),Ht.setOptional(F,k,"bindMatrixInverse");const ge=k.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),Ht.setValue(F,"boneTexture",ge.boneTexture,C))}k.isBatchedMesh&&(Ht.setOptional(F,k,"batchingTexture"),Ht.setValue(F,"batchingTexture",k._matricesTexture,C),Ht.setOptional(F,k,"batchingIdTexture"),Ht.setValue(F,"batchingIdTexture",k._indirectTexture,C),Ht.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Ht.setValue(F,"batchingColorTexture",k._colorsTexture,C));const nn=X.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Vt.update(k,X,ht),(Xt||S.receiveShadow!==k.receiveShadow)&&(S.receiveShadow=k.receiveShadow,Ht.setValue(F,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(xe.envMap.value=It,xe.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(xe.envMapIntensity.value=z.environmentIntensity),Xt&&(Ht.setValue(F,"toneMappingExposure",x.toneMappingExposure),S.needsLights&&Dn(xe,Ot),ot&&$.fog===!0&&mt.refreshFogUniforms(xe,ot),mt.refreshMaterialUniforms(xe,$,q,nt,p.state.transmissionRenderTarget[T.id]),Jr.upload(F,Wn(S),xe,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Jr.upload(F,Wn(S),xe,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(F,"center",k.center),Ht.setValue(F,"modelViewMatrix",k.modelViewMatrix),Ht.setValue(F,"normalMatrix",k.normalMatrix),Ht.setValue(F,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ge=$.uniformsGroups;for(let We=0,ae=ge.length;We<ae;We++){const De=ge[We];B.update(De,ht),B.bind(De,ht)}}return ht}function Dn(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function cr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,z,X){Tt.get(T.texture).__webglTexture=z,Tt.get(T.depthTexture).__webglTexture=X;const $=Tt.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const X=Tt.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){P=T,A=z,L=X;let $=!0,k=null,ot=!1,_t=!1;if(T){const It=Tt.get(T);if(It.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(It.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(It.__hasExternalTextures)C.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(It.__boundDepthTexture!==Lt){if(Lt!==null&&Tt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Wt=T.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(_t=!0);const Yt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?k=Yt[z][X]:k=Yt[z],ot=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?k=Tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?k=Yt[X]:k=Yt,w.copy(T.viewport),R.copy(T.scissor),D=T.scissorTest}else w.copy(yt).multiplyScalar(q).floor(),R.copy($t).multiplyScalar(q).floor(),D=de;if(dt.bindFramebuffer(F.FRAMEBUFFER,k)&&$&&dt.drawBuffers(T,k),dt.viewport(w),dt.scissor(R),dt.setScissorTest(D),ot){const It=Tt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,X)}else if(_t){const It=Tt.get(T.texture),Wt=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,X||0,Wt)}E=-1},this.readRenderTargetPixels=function(T,z,X,$,k,ot,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Ut=Ut[_t]),Ut){dt.bindFramebuffer(F.FRAMEBUFFER,Ut);try{const It=T.texture,Wt=It.format,Yt=It.type;if(!Et.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-$&&X>=0&&X<=T.height-k&&F.readPixels(z,X,$,k,jt.convert(Wt),jt.convert(Yt),ot)}finally{const It=P!==null?Tt.get(P).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,z,X,$,k,ot,_t){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Ut=Ut[_t]),Ut){const It=T.texture,Wt=It.format,Yt=It.type;if(!Et.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-$&&X>=0&&X<=T.height-k){dt.bindFramebuffer(F.FRAMEBUFFER,Ut);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(z,X,$,k,jt.convert(Wt),jt.convert(Yt),0);const le=P!==null?Tt.get(P).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,le);const me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Rd(F,me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Lt),F.deleteSync(me),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,X=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-X),k=Math.floor(T.image.width*$),ot=Math.floor(T.image.height*$),_t=z!==null?z.x:0,Ut=z!==null?z.y:0;C.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,_t,Ut,k,ot),dt.unbindTexture()},this.copyTextureToTexture=function(T,z,X=null,$=null,k=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],z=arguments[2],k=arguments[3]||0,X=null);let ot,_t,Ut,It,Wt,Yt,Lt,le,me;const ce=T.isCompressedTexture?T.mipmaps[k]:T.image;X!==null?(ot=X.max.x-X.min.x,_t=X.max.y-X.min.y,Ut=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Wt=X.min.y,Yt=X.isBox3?X.min.z:0):(ot=ce.width,_t=ce.height,Ut=ce.depth||1,It=0,Wt=0,Yt=0),$!==null?(Lt=$.x,le=$.y,me=$.z):(Lt=0,le=0,me=0);const Qe=jt.convert(z.format),Kt=jt.convert(z.type);let S;z.isData3DTexture?(C.setTexture3D(z,0),S=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),S=F.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),S=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const O=F.getParameter(F.UNPACK_ROW_LENGTH),H=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ht=F.getParameter(F.UNPACK_SKIP_PIXELS),St=F.getParameter(F.UNPACK_SKIP_ROWS),Xt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ce.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ce.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,It),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const Ot=T.isDataArrayTexture||T.isData3DTexture,Ht=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const xe=Tt.get(T),nn=Tt.get(z),ge=Tt.get(xe.__renderTarget),We=Tt.get(nn.__renderTarget);dt.bindFramebuffer(F.READ_FRAMEBUFFER,ge.__webglFramebuffer),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ae=0;ae<Ut;ae++)Ot&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(T).__webglTexture,k,Yt+ae),T.isDepthTexture?(Ht&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(z).__webglTexture,k,me+ae),F.blitFramebuffer(It,Wt,ot,_t,Lt,le,ot,_t,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ht?F.copyTexSubImage3D(S,k,Lt,le,me+ae,It,Wt,ot,_t):F.copyTexSubImage2D(S,k,Lt,le,me+ae,It,Wt,ot,_t);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ht?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(S,k,Lt,le,me,ot,_t,Ut,Qe,Kt,ce.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(S,k,Lt,le,me,ot,_t,Ut,Qe,ce.data):F.texSubImage3D(S,k,Lt,le,me,ot,_t,Ut,Qe,Kt,ce):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,Lt,le,ot,_t,Qe,Kt,ce.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,Lt,le,ce.width,ce.height,Qe,ce.data):F.texSubImage2D(F.TEXTURE_2D,k,Lt,le,ot,_t,Qe,Kt,ce);F.pixelStorei(F.UNPACK_ROW_LENGTH,O),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,H),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,St),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt),k===0&&z.generateMipmaps&&F.generateMipmap(S),dt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X=null,$=null,k=0){return T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,T=arguments[2],z=arguments[3],k=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,X,$,k)},this.initRenderTarget=function(T){Tt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){A=0,L=0,P=null,dt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class jh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new jh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kh extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class X_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new I;class Jh{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dc=new I,Ic=new Qt,Uc=new Qt,G0=new I,Fc=new Zt,Dr=new I,Za=new kn,Nc=new Zt,ja=new sr;class $_ extends Oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ul,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(s),t.ray.intersectsSphere(Za)!==!1&&(Nc.copy(s).invert(),ja.copy(t.ray).applyMatrix4(Nc),!(this.boundingBox!==null&&ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ja)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Qt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ic.fromBufferAttribute(s.attributes.skinIndex,t),Uc.fromBufferAttribute(s.attributes.skinWeight,t),Dc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Uc.getComponent(r);if(a!==0){const o=Ic.getComponent(r);Fc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(G0.copy(Dc).applyMatrix4(Fc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class W0 extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qh extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=xn,u=xn,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new Zt,X0=new Zt;class tu{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:X0;Oc.multiplyMatrices(o,e[r]),Oc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new tu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Qh(e,t,t,gn,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new W0),this.bones.push(a),this.boneInverses.push(new Zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Bc extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new Zt,zc=new Zt,Ir=[],kc=new Ei,$0=new Zt,zs=new Oe,ks=new kn;class q_ extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),kc.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),ks.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),zc.multiplyMatrices(n,ss),zs.matrixWorld=zc,zs.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qh(new Float32Array(s*this.count),s,this.count,hl,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class q0 extends Vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new I,ia=new I,Vc=new Zt,Vs=new sr,Ur=new kn,Ka=new I,Hc=new I;class eu extends ke{constructor(t=new Fe,e=new q0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)na.fromBufferAttribute(e,s-1),ia.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Vc.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(Vc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),M=u.getX(v+1),_=Fr(this,t,Vs,l,p,M);_&&e.push(_)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=Fr(this,t,Vs,l,v,m);p&&e.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=h,m=g-1;v<m;v+=c){const p=Fr(this,t,Vs,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Fr(this,t,Vs,l,g-1,h);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(na.fromBufferAttribute(a,s),ia.fromBufferAttribute(a,r),e.distanceSqToSegment(na,ia,Ka,Hc)>n)return;Ka.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ka);if(!(l<t.near||l>t.far))return{distance:l,point:Hc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Gc=new I,Wc=new I;class nu extends eu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Gc.fromBufferAttribute(e,s),Wc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gc.distanceTo(Wc);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y_ extends eu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Y0 extends Vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xc=new Zt,Ko=new sr,Nr=new kn,Or=new I;class iu extends ke{constructor(t=new Fe,e=new Y0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Xc.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(Xc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=d,v=h;g<v;g++){const m=c.getX(g);Or.fromBufferAttribute(f,m),$c(Or,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,v=h;g<v;g++)Or.fromBufferAttribute(f,g),$c(Or,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $c(i,t,e,n,s,r,a){const o=Ko.distanceSqToPoint(i);if(o<e){const l=new I;Ko.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sa extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,l=new Zt;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(He(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(He(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xl extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Z0 extends xl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Br=new I,Ja=new yl,Qa=new yl,to=new yl;class Jo extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ja.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),Qa.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),to.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Qa.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),to.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(Ja.calc(l),Qa.calc(l),to.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function j0(i,t){const e=1-i;return e*e*t}function K0(i,t){return 2*(1-i)*i*t}function J0(i,t){return i*i*t}function Ys(i,t,e,n){return j0(i,t)+K0(i,e)+J0(i,n)}function Q0(i,t){const e=1-i;return e*e*e*t}function tv(i,t){const e=1-i;return 3*e*e*i*t}function ev(i,t){return 3*(1-i)*i*i*t}function nv(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return Q0(i,t)+tv(i,e)+ev(i,n)+nv(i,s)}class su extends Vn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(t,s.x,r.x,a.x,o.x),Zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iv extends Vn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(t,s.x,r.x,a.x,o.x),Zs(t,s.y,r.y,a.y,o.y),Zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends Vn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sv extends Vn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends Vn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Vn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y),Ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(qc(o,l.x,c.x,u.x,f.x),qc(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var ra=Object.freeze({__proto__:null,ArcCurve:Z0,CatmullRomCurve3:Jo,CubicBezierCurve:su,CubicBezierCurve3:iv,EllipseCurve:xl,LineCurve:ru,LineCurve3:sv,QuadraticBezierCurve:au,QuadraticBezierCurve3:ou,SplineCurve:lu});class rv extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ra[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ra[s.type]().fromJSON(s))}return this}}class Qo extends rv{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new au(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new su(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new xl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cu extends Fe{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,f=new I,d=new it,h=new I,g=new I,v=new I;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,h.x=p*1,h.y=-m,h.z=p*0,v.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),l.push(h.x,h.y,h.z),v.copy(g)}for(let M=0;M<=e;M++){const _=n+M*u*s,x=Math.sin(_),U=Math.cos(_);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*x,f.y=t[A].y,f.z=t[A].x*U,a.push(f.x,f.y,f.z),d.x=M/e,d.y=A/(t.length-1),o.push(d.x,d.y);const L=l[3*A+0]*x,P=l[3*A+1],E=l[3*A+0]*U;c.push(L,P,E)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){const x=_+M*t.length,U=x,A=x+t.length,L=x+t.length+1,P=x+1;r.push(U,A,P),r.push(L,P,A)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.points,t.segments,t.phiStart,t.phiLength)}}class hu extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(h,2));function M(){const x=new I,U=new I;let A=0;const L=(e-t)/n;for(let P=0;P<=r;P++){const E=[],y=P/r,w=y*(e-t)+t;for(let R=0;R<=s;R++){const D=R/s,N=D*l+o,G=Math.sin(N),W=Math.cos(N);U.x=w*G,U.y=-y*n+m,U.z=w*W,f.push(U.x,U.y,U.z),x.set(G,L,W).normalize(),d.push(x.x,x.y,x.z),h.push(D,1-y),E.push(g++)}v.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const y=v[E][P],w=v[E+1][P],R=v[E+1][P+1],D=v[E][P+1];(t>0||E!==0)&&(u.push(y,w,D),A+=3),(e>0||E!==r-1)&&(u.push(w,R,D),A+=3)}c.addGroup(p,A,0),p+=A}function _(x){const U=g,A=new it,L=new I;let P=0;const E=x===!0?t:e,y=x===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*y,0),d.push(0,y,0),h.push(.5,.5),g++;const w=g;for(let R=0;R<=s;R++){const N=R/s*l+o,G=Math.cos(N),W=Math.sin(N);L.x=E*W,L.y=m*y,L.z=E*G,f.push(L.x,L.y,L.z),d.push(0,y,0),A.x=G*.5+.5,A.y=W*.5*y+.5,h.push(A.x,A.y),g++}for(let R=0;R<s;R++){const D=U+R,N=w+R;x===!0?u.push(N,N+1,D):u.push(N+1,N,D),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ml extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const _=new I,x=new I,U=new I;for(let A=0;A<e.length;A+=3)h(e[A+0],_),h(e[A+1],x),h(e[A+2],U),l(_,x,U,M)}function l(M,_,x,U){const A=U+1,L=[];for(let P=0;P<=A;P++){L[P]=[];const E=M.clone().lerp(x,P/A),y=_.clone().lerp(x,P/A),w=A-P;for(let R=0;R<=w;R++)R===0&&P===A?L[P][R]=E:L[P][R]=E.clone().lerp(y,R/w)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const y=Math.floor(E/2);E%2===0?(d(L[P][y+1]),d(L[P+1][y]),d(L[P][y])):(d(L[P][y+1]),d(L[P+1][y+1]),d(L[P+1][y]))}}function c(M){const _=new I;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(M),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function u(){const M=new I;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const x=m(M)/2/Math.PI+.5,U=p(M)/Math.PI+.5;a.push(x,1-U)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){const _=a[M+0],x=a[M+2],U=a[M+4],A=Math.max(_,x,U),L=Math.min(_,x,U);A>.9&&L<.1&&(_<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function h(M,_){const x=M*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const M=new I,_=new I,x=new I,U=new I,A=new it,L=new it,P=new it;for(let E=0,y=0;E<r.length;E+=9,y+=6){M.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(a[y+0],a[y+1]),L.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),U.copy(M).add(_).add(x).divideScalar(3);const w=m(U);v(A,y+0,M,w),v(L,y+2,_,w),v(P,y+4,x,w)}}function v(M,_,x,U){U<0&&M.x===1&&(a[_]=M.x-1),x.x===0&&x.z===0&&(a[_]=U/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.vertices,t.indices,t.radius,t.details)}}const zr=new I,kr=new I,eo=new I,Vr=new Mn;class Z_ extends Fe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(us*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},h=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=Vr;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Vr.getNormal(eo),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let M=0;M<3;M++){const _=(M+1)%3,x=f[M],U=f[_],A=Vr[u[M]],L=Vr[u[_]],P=`${x}_${U}`,E=`${U}_${x}`;E in d&&d[E]?(eo.dot(d[E].normal)<=r&&(h.push(A.x,A.y,A.z),h.push(L.x,L.y,L.z)),d[E]=null):P in d||(d[P]={index0:c[M],index1:c[_],normal:eo.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];zr.fromBufferAttribute(o,v),kr.fromBufferAttribute(o,m),h.push(zr.x,zr.y,zr.z),h.push(kr.x,kr.y,kr.z)}this.setAttribute("position",new he(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class fs extends Qo{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qo().fromJSON(s))}return this}}const av={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,f,d,h;if(n&&(r=uv(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)f=i[g],d=i[g+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return Qs(r,a,e,o,l,h,0),a}};function uu(i,t,e,n,s){let r,a;if(s===Sv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Yc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Yc(r,i[r],i[r+1],a);return a&&pa(a,a.next)&&(er(a),a=a.next),a}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||Ne(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&gv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?lv(i,n,s,r):ov(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=cv(ki(i),t,e),Qs(i,t,e,n,s,r,2)):a===2&&hv(i,t,e,n,s,r):Qs(ki(i),t,e,n,s,r,1);break}}}function ov(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,h=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&ls(s,o,r,l,a,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lv(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ne(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,h=o<l?o<c?o:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,p=tl(h,g,t,e,n),M=tl(v,m,t,e,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=M;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ls(o,u,l,f,c,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=h&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ls(o,u,l,f,c,d,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ls(o,u,l,f,c,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=M;){if(x.x>=h&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ls(o,u,l,f,c,d,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!pa(s,r)&&du(s,n,n.next,r)&&tr(s,r)&&tr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),er(n),er(n.next),n=i=r),n=n.next}while(n!==i);return ki(n)}function hv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xv(a,o)){let l=fu(a,o);a=ki(a,a.next),l=ki(l,l.next),Qs(a,t,e,n,s,r,0),Qs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function uv(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=uu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_v(c));for(s.sort(dv),r=0;r<s.length;r++)e=fv(s[r],e);return e}function dv(i,t){return i.x-t.x}function fv(i,t){const e=pv(i,t);if(!e)return t;const n=fu(e,i);return ki(n,n.next),ki(e,e.next)}function pv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ls(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),tr(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&mv(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function mv(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function gv(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vv(s)}function vv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _v(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ls(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function xv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yv(i,t)&&(tr(i,t)&&tr(t,i)&&Mv(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||pa(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pa(i,t){return i.x===t.x&&i.y===t.y}function du(i,t,e,n){const s=Gr(Ne(i,t,e)),r=Gr(Ne(i,t,n)),a=Gr(Ne(e,n,i)),o=Gr(Ne(e,n,t));return!!(s!==r&&a!==o||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||a===0&&Hr(e,i,n)||o===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Gr(i){return i>0?1:i<0?-1:0}function yv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function Mv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fu(i,t){const e=new el(i.i,i.x,i.y),n=new el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yc(i,t,e,n){const s=new el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ps{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ps.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Zc(t),jc(n,t);let a=t.length;e.forEach(Zc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,jc(n,e[l]);const o=av.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Zc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ma extends Fe{constructor(t=new fs([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:h-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:bv;let _,x=!1,U,A,L,P;p&&(_=p.getSpacedPoints(u),x=!0,d=!1,U=p.computeFrenetFrames(u,!1),A=new I,L=new I,P=new I),d||(m=0,h=0,g=0,v=0);const E=o.extractPoints(c);let y=E.shape;const w=E.holes;if(!ps.isClockWise(y)){y=y.reverse();for(let Z=0,at=w.length;Z<at;Z++){const F=w[Z];ps.isClockWise(F)&&(w[Z]=F.reverse())}}const D=ps.triangulateShape(y,w),N=y;for(let Z=0,at=w.length;Z<at;Z++){const F=w[Z];y=y.concat(F)}function G(Z,at,F){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(at,F)}const W=y.length,nt=D.length;function q(Z,at,F){let Ct,st,Et;const dt=Z.x-at.x,zt=Z.y-at.y,Tt=F.x-Z.x,C=F.y-Z.y,b=dt*dt+zt*zt,V=dt*C-zt*Tt;if(Math.abs(V)>Number.EPSILON){const j=Math.sqrt(b),et=Math.sqrt(Tt*Tt+C*C),K=at.x-zt/j,Pt=at.y+dt/j,mt=F.x-C/et,Mt=F.y+Tt/et,ie=((mt-K)*C-(Mt-Pt)*Tt)/(dt*C-zt*Tt);Ct=K+dt*ie-Z.x,st=Pt+zt*ie-Z.y;const rt=Ct*Ct+st*st;if(rt<=2)return new it(Ct,st);Et=Math.sqrt(rt/2)}else{let j=!1;dt>Number.EPSILON?Tt>Number.EPSILON&&(j=!0):dt<-Number.EPSILON?Tt<-Number.EPSILON&&(j=!0):Math.sign(zt)===Math.sign(C)&&(j=!0),j?(Ct=-zt,st=dt,Et=Math.sqrt(b)):(Ct=dt,st=zt,Et=Math.sqrt(b/2))}return new it(Ct/Et,st/Et)}const ft=[];for(let Z=0,at=N.length,F=at-1,Ct=Z+1;Z<at;Z++,F++,Ct++)F===at&&(F=0),Ct===at&&(Ct=0),ft[Z]=q(N[Z],N[F],N[Ct]);const tt=[];let yt,$t=ft.concat();for(let Z=0,at=w.length;Z<at;Z++){const F=w[Z];yt=[];for(let Ct=0,st=F.length,Et=st-1,dt=Ct+1;Ct<st;Ct++,Et++,dt++)Et===st&&(Et=0),dt===st&&(dt=0),yt[Ct]=q(F[Ct],F[Et],F[dt]);tt.push(yt),$t=$t.concat(yt)}for(let Z=0;Z<m;Z++){const at=Z/m,F=h*Math.cos(at*Math.PI/2),Ct=g*Math.sin(at*Math.PI/2)+v;for(let st=0,Et=N.length;st<Et;st++){const dt=G(N[st],ft[st],Ct);ut(dt.x,dt.y,-F)}for(let st=0,Et=w.length;st<Et;st++){const dt=w[st];yt=tt[st];for(let zt=0,Tt=dt.length;zt<Tt;zt++){const C=G(dt[zt],yt[zt],Ct);ut(C.x,C.y,-F)}}}const de=g+v;for(let Z=0;Z<W;Z++){const at=d?G(y[Z],$t[Z],de):y[Z];x?(L.copy(U.normals[0]).multiplyScalar(at.x),A.copy(U.binormals[0]).multiplyScalar(at.y),P.copy(_[0]).add(L).add(A),ut(P.x,P.y,P.z)):ut(at.x,at.y,0)}for(let Z=1;Z<=u;Z++)for(let at=0;at<W;at++){const F=d?G(y[at],$t[at],de):y[at];x?(L.copy(U.normals[Z]).multiplyScalar(F.x),A.copy(U.binormals[Z]).multiplyScalar(F.y),P.copy(_[Z]).add(L).add(A),ut(P.x,P.y,P.z)):ut(F.x,F.y,f/u*Z)}for(let Z=m-1;Z>=0;Z--){const at=Z/m,F=h*Math.cos(at*Math.PI/2),Ct=g*Math.sin(at*Math.PI/2)+v;for(let st=0,Et=N.length;st<Et;st++){const dt=G(N[st],ft[st],Ct);ut(dt.x,dt.y,f+F)}for(let st=0,Et=w.length;st<Et;st++){const dt=w[st];yt=tt[st];for(let zt=0,Tt=dt.length;zt<Tt;zt++){const C=G(dt[zt],yt[zt],Ct);x?ut(C.x,C.y+_[u-1].y,_[u-1].x+F):ut(C.x,C.y,f+F)}}}J(),lt();function J(){const Z=s.length/3;if(d){let at=0,F=W*at;for(let Ct=0;Ct<nt;Ct++){const st=D[Ct];Ft(st[2]+F,st[1]+F,st[0]+F)}at=u+m*2,F=W*at;for(let Ct=0;Ct<nt;Ct++){const st=D[Ct];Ft(st[0]+F,st[1]+F,st[2]+F)}}else{for(let at=0;at<nt;at++){const F=D[at];Ft(F[2],F[1],F[0])}for(let at=0;at<nt;at++){const F=D[at];Ft(F[0]+W*u,F[1]+W*u,F[2]+W*u)}}n.addGroup(Z,s.length/3-Z,0)}function lt(){const Z=s.length/3;let at=0;Rt(N,at),at+=N.length;for(let F=0,Ct=w.length;F<Ct;F++){const st=w[F];Rt(st,at),at+=st.length}n.addGroup(Z,s.length/3-Z,1)}function Rt(Z,at){let F=Z.length;for(;--F>=0;){const Ct=F;let st=F-1;st<0&&(st=Z.length-1);for(let Et=0,dt=u+m*2;Et<dt;Et++){const zt=W*Et,Tt=W*(Et+1),C=at+Ct+zt,b=at+st+zt,V=at+st+Tt,j=at+Ct+Tt;Gt(C,b,V,j)}}}function ut(Z,at,F){l.push(Z),l.push(at),l.push(F)}function Ft(Z,at,F){Bt(Z),Bt(at),Bt(F);const Ct=s.length/3,st=M.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);oe(st[0]),oe(st[1]),oe(st[2])}function Gt(Z,at,F,Ct){Bt(Z),Bt(at),Bt(Ct),Bt(at),Bt(F),Bt(Ct);const st=s.length/3,Et=M.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);oe(Et[0]),oe(Et[1]),oe(Et[3]),oe(Et[1]),oe(Et[2]),oe(Et[3])}function Bt(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function oe(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ev(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ra[s.type]().fromJSON(s)),new ma(n,t.options)}}const bv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],d=t[s*3],h=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-f),new it(d,1-g),new it(v,1-p)]:[new it(o,1-l),new it(u,1-f),new it(h,1-g),new it(m,1-p)]}};function Ev(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pu extends Ml{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pu(t.radius,t.detail)}}class aa extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,d=new I,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){const A=U/e;f.x=-t*Math.cos(s+A*r)*Math.sin(a+_*o),f.y=t*Math.cos(a+_*o),f.z=t*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(A+x,1-_),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=u[p][M+1],x=u[p][M],U=u[p+1][M],A=u[p+1][M+1];(p!==0||a>0)&&h.push(_,x,A),(p!==n-1||l<Math.PI)&&h.push(x,U,A)}this.setIndex(h),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mu extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new I,f=new I,d=new I;for(let h=0;h<=n;h++)for(let g=0;g<=s;g++){const v=g/s*r,m=h/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=s;g++){const v=(s+1)*h+g-1,m=(s+1)*(h-1)+g-1,p=(s+1)*(h-1)+g,M=(s+1)*h+g;a.push(v,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sl extends Fe{constructor(t=new ou(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new it;let u=new I;const f=[],d=[],h=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(h,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),M(),p()}function m(_){u=t.getPointAt(_/e,u);const x=a.normals[_],U=a.binormals[_];for(let A=0;A<=s;A++){const L=A/s*Math.PI*2,P=Math.sin(L),E=-Math.cos(L);l.x=E*x.x+P*U.x,l.y=E*x.y+P*U.y,l.z=E*x.z+P*U.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){const U=(s+1)*(_-1)+(x-1),A=(s+1)*_+(x-1),L=(s+1)*_+x,P=(s+1)*(_-1)+x;g.push(U,A,P),g.push(A,L,P)}}function M(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)c.x=_/e,c.y=x/s,h.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sl(new ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class j_ extends Je{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Tv extends Vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oi extends Tv{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Wr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Av(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Kc(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function gu(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class ga{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cv extends ga{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-n;break;case Ol:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*n-e;break;case Ol:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-h)*m+(1.5+h)*v+.5*g,x=h*m-h*v;for(let U=0;U!==o;++U)r[U]=p*a[u+U]+M*a[c+U]+_*a[l+U]+x*a[f+U];return r}}class Rv extends ga{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}}class Pv extends ga{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Hn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wv(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{const f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const v=e[f+g];if(v!==e[d+g]||v!==e[h+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const f=o*n,d=a*n;for(let h=0;h!==n;++h)e[d+h]=e[f+h]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Yo;class Cs extends Hn{constructor(t,e,n){super(t,e,n)}}Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=ta;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class vu extends Hn{}vu.prototype.ValueTypeName="color";class oa extends Hn{}oa.prototype.ValueTypeName="number";class Lv extends ga{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let c=t*o;for(let u=c+o;c!==u;c+=4)ws.slerpFlat(r,0,a,c-o,a,c,l);return r}}class va extends Hn{InterpolantFactoryMethodLinear(t){return new Lv(this.times,this.values,this.getValueSize(),t)}}va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Hn{constructor(t,e,n){super(t,e,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ta;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class la extends Hn{}la.prototype.ValueTypeName="vector";class K_{constructor(t="",e=-1,n=[],s=ed){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Iv(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Av(l);l=Kc(l,1,u),c=Kc(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new oa(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let d=s[f];d||(s[f]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,v){if(h.length!==0){const m=[],p=[];gu(h,m,p,g),m.length!==0&&v.push(new f(d,m,p))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)h[d[g].morphTargets[v]]=-1;for(const v in h){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const _=d[g];m.push(_.time),p.push(_.morphTarget===v?1:0)}s.push(new oa(".morphTargetInfluence["+v+"]",m,p))}l=h.length*a}else{const h=".bones["+e[f].name+"]";n(la,h+".position",d,"pos",s),n(va,h+".quaternion",d,"rot",s),n(la,h+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oa;case"vector":case"vector2":case"vector3":case"vector4":return la;case"color":return vu;case"quaternion":return va;case"bool":case"boolean":return Cs;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Iv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Dv(i.type);if(i.times===void 0){const e=[],n=[];gu(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const xi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Uv{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const Fv=new Uv;class ar{constructor(t){this.manager=t!==void 0?t:Fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class Nv extends Error{constructor(t,e){super(t),this.response=e}}class J_ extends ar{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=xi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(jn[t]!==void 0){jn[t].push({onLoad:e,onProgress:n,onError:s});return}jn[t]=[],jn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=jn[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let A=0,L=u.length;A<L;A++){const P=u[A];P.onProgress&&P.onProgress(U)}p.enqueue(x),M()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Nv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{xi.add(t,c);const u=jn[t];delete jn[t];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=jn[t];if(u===void 0)throw this.manager.itemError(t),c;delete jn[t];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ov extends ar{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=xi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Js("img");function l(){u(),xi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Q_ extends ar{constructor(t){super(t)}load(t,e,n,s){const r=new en,a=new Ov(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class _a extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const no=new Zt,Jc=new I,Qc=new I;class bl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bv extends bl{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ms*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class tx extends _a{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const th=new Zt,Hs=new I,io=new I;class zv extends bl{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),io.copy(n.position),io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(io),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class ex extends _a{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kv extends bl{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nx extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new kv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ix extends _a{constructor(t,e,n=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class sx{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class rx extends Fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class ax extends ar{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=xi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),xi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});xi.add(t,l),r.manager.itemStart(t)}}class ox{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eh(){return performance.now()}const El="\\[\\]\\.:\\/",Vv=new RegExp("["+El+"]","g"),Tl="[^"+El+"]",Hv="[^"+El.replace("\\.","")+"]",Gv=/((?:WC+[\/:])*)/.source.replace("WC",Tl),Wv=/(WCOD+)?/.source.replace("WCOD",Hv),Xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),qv=new RegExp("^"+Gv+Wv+Xv+$v+"$"),Yv=["material","materials","bones","map"];class Zv{constructor(t,e,n){const s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Re{constructor(t,e,n){this.path=e,this.parsedPath=n||Re.parseTrackName(e),this.node=Re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Re.Composite(t,e,n):new Re(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vv,"")}static parseTrackName(t){const e=qv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Yv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Re.Composite=Zv;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const nh=new Zt;class lx{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(ih),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nl(t[s],this,n,e);return n.sort(ih),n}}function ih(i,t){return i.distance-t.distance}function nl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)nl(r[a],t,e,!0)}}class cx{constructor(){this.type="ShapePath",this.color=new kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Qo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const M=[];for(let _=0,x=p.length;_<x;_++){const U=p[_],A=new fs;A.curves=U.curves,M.push(A)}return M}function n(p,M){const _=M.length;let x=!1;for(let U=_-1,A=0;A<_;U=A++){let L=M[U],P=M[A],E=P.x-L.x,y=P.y-L.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(L=M[A],E=-E,P=M[U],y=-y),p.y<L.y||p.y>P.y)continue;if(p.y===L.y){if(p.x===L.x)return!0}else{const w=y*(p.x-L.x)-E*(p.y-L.y);if(w===0)return!0;if(w<0)continue;x=!x}}else{if(p.y!==L.y)continue;if(P.x<=p.x&&p.x<=L.x||L.x<=p.x&&p.x<=P.x)return!0}}return x}const s=ps.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new fs,l.curves=o.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const f=[],d=[];let h=[],g=0,v;d[g]=void 0,h[g]=[];for(let p=0,M=r.length;p<M;p++)o=r[p],v=o.getPoints(),a=s(v),a=t?!a:a,a?(!u&&d[g]&&g++,d[g]={s:new fs,p:v},d[g].s.curves=o.curves,u&&g++,h[g]=[]):h[g].push({h:o,p:v[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,M=0;for(let _=0,x=d.length;_<x;_++)f[_]=[];for(let _=0,x=d.length;_<x;_++){const U=h[_];for(let A=0;A<U.length;A++){const L=U[A];let P=!0;for(let E=0;E<d.length;E++)n(L.p,d[E].p)&&(_!==E&&M++,P?(P=!1,f[E].push(L)):p=!0);P&&f[_].push(L)}}M>0&&p===!1&&(h=f)}let m;for(let p=0,M=d.length;p<M;p++){l=d[p].s,c.push(l),m=h[p];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);const Ie={hero:new I(0,0,0),tunnel:{z0:-1.2,z1:-30,r0:.95,r1:3.9},dash:new I(0,.2,-42),globe:new I(0,0,-70),globeR:3,intel:new I(0,-2.6,-104),letters:new I(0,0,-118),vault:new I(0,0,-158),liq:new I(0,0,-204),final:new I(0,.15,-244)},so=25.5,cn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),js=(i,t,e)=>i+(t-i)*e,Dt=(i,t,e)=>{const n=cn((e-i)/(t-i));return n*n*(3-2*n)},be=(i,t,e)=>cn((e-i)/(t-i));function nr(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ke(i){let t=0,e=0;for(;t===0;)t=i();for(;e===0;)e=i();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}class hx{constructor(t,e="cr"){this.keys=t.slice().sort((n,s)=>n.g-s.g),this.mode=e}at(t,e){const n=this.keys,s=n.length;if(t<=n[0].g)return n[0][e];if(t>=n[s-1].g)return n[s-1][e];let r=0;for(;r<s-2&&t>n[r+1].g;)r++;const a=n[r],o=n[r+1];let l=(t-a.g)/(o.g-a.g);const c=o.ease||this.mode;if(c==="step")return a[e];const u=a[e],f=o[e];if(c==="cr"){const d=(n[r-1]||a)[e],h=(n[r+2]||o)[e],g=l;return Array.isArray(u)?u.map((v,m)=>sh(d[m],u[m],f[m],h[m],g)):sh(d,u,f,h,g)}return l=c==="lin"?l:l*l*(3-2*l),Array.isArray(u)?u.map((d,h)=>d+(f[h]-d)*l):u+(f-u)*l}}function sh(i,t,e,n,s){const r=s*s,a=r*s;return .5*(2*t+(-i+e)*s+(2*i-5*t+4*e-n)*r+(-i+3*t-3*e+n)*a)}class ux{constructor(t=0,e=90,n=2*Math.sqrt(90)){this.v=t,this.vel=0,this.k=e,this.d=n,this.t=t}step(t){const e=this.k*(this.t-this.v)-this.d*this.vel;return this.vel+=e*t,this.v+=this.vel*t,this.v}}function hn(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d",{willReadFrequently:!0})]}function wl(i,t,e,n=2){const s=i.getImageData(0,0,t,e).data,[r,a]=hn(t,e),o=a.createImageData(t,e),l=o.data,c=new Float32Array(t*e);for(let u=0;u<t*e;u++)c[u]=s[u*4]/255;for(let u=0;u<e;u++){const f=u>0?u-1:u,d=u<e-1?u+1:u;for(let h=0;h<t;h++){const g=h>0?h-1:h,v=h<t-1?h+1:h,m=c[f*t+g],p=c[f*t+h],M=c[f*t+v],_=c[u*t+g],x=c[u*t+v],U=c[d*t+g],A=c[d*t+h],L=c[d*t+v],P=M+2*x+L-(m+2*_+U),E=U+2*A+L-(m+2*p+M);let y=-P*n,w=E*n,R=1;const D=Math.hypot(y,w,R);y/=D,w/=D,R/=D;const N=(u*t+h)*4;l[N]=(y*.5+.5)*255,l[N+1]=(w*.5+.5)*255,l[N+2]=(R*.5+.5)*255,l[N+3]=255}}return a.putImageData(o,0,0),r}const jv="varying vec2 vUv; void main(){ vUv = position.xy * .5 + .5; gl_Position = vec4(position.xy, 0., 1.); }",gi="precision highp float; varying vec2 vUv; uniform vec2 uTexel;",Kv={advect:`${gi} uniform sampler2D uVel, uSrc; uniform float uDt, uDiss;
    void main(){ vec2 v = texture2D(uVel, vUv).xy; vec2 c = vUv - v * uDt; gl_FragColor = vec4(texture2D(uSrc, c).xy * uDiss, 0., 1.); }`,splat:`${gi} uniform sampler2D uSrc; uniform vec2 uPt, uForce; uniform float uRad, uAspect;
    void main(){ vec2 d = vUv - uPt; d.x *= uAspect; float g = exp(-dot(d, d) / uRad); gl_FragColor = vec4(texture2D(uSrc, vUv).xy + uForce * g, 0., 1.); }`,curl:`${gi} uniform sampler2D uVel;
    void main(){ float L = texture2D(uVel, vUv - vec2(uTexel.x, 0.)).y, R = texture2D(uVel, vUv + vec2(uTexel.x, 0.)).y;
      float B = texture2D(uVel, vUv - vec2(0., uTexel.y)).x, T = texture2D(uVel, vUv + vec2(0., uTexel.y)).x;
      gl_FragColor = vec4(.5 * (R - L - T + B), 0., 0., 1.); }`,vort:`${gi} uniform sampler2D uVel, uCurl; uniform float uDt, uK;
    void main(){ float L = texture2D(uCurl, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uCurl, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uCurl, vUv - vec2(0., uTexel.y)).x, T = texture2D(uCurl, vUv + vec2(0., uTexel.y)).x, C = texture2D(uCurl, vUv).x;
      vec2 f = .5 * vec2(abs(T) - abs(B), abs(R) - abs(L)); f /= length(f) + 1e-4; f *= uK * C; f.y *= -1.;
      gl_FragColor = vec4(texture2D(uVel, vUv).xy + f * uDt, 0., 1.); }`,div:`${gi} uniform sampler2D uVel;
    void main(){ float L = texture2D(uVel, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uVel, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uVel, vUv - vec2(0., uTexel.y)).y, T = texture2D(uVel, vUv + vec2(0., uTexel.y)).y;
      gl_FragColor = vec4(.5 * (R - L + T - B), 0., 0., 1.); }`,press:`${gi} uniform sampler2D uP, uDiv;
    void main(){ float L = texture2D(uP, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uP, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uP, vUv - vec2(0., uTexel.y)).x, T = texture2D(uP, vUv + vec2(0., uTexel.y)).x;
      gl_FragColor = vec4((L + R + B + T - texture2D(uDiv, vUv).x) * .25, 0., 0., 1.); }`,grad:`${gi} uniform sampler2D uP, uVel;
    void main(){ float L = texture2D(uP, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uP, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uP, vUv - vec2(0., uTexel.y)).x, T = texture2D(uP, vUv + vec2(0., uTexel.y)).x;
      gl_FragColor = vec4(texture2D(uVel, vUv).xy - .5 * vec2(R - L, T - B), 0., 1.); }`,scale:`${gi} uniform sampler2D uSrc; uniform float uK; void main(){ gl_FragColor = vec4(texture2D(uSrc, vUv).xy * uK, 0., 1.); }`};class Jv{constructor(t,{res:e=112}={}){this.r=t,this.res=e,this.cam=new da(-1,1,1,-1,0,1),this.scene=new Kh,this.quad=new Oe(new Fe().setAttribute("position",new Ge(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3))),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.mats={};for(const[n,s]of Object.entries(Kv))this.mats[n]=new Je({vertexShader:jv,fragmentShader:s,depthTest:!1,depthWrite:!1,uniforms:{uTexel:{value:new it},uVel:{value:null},uSrc:{value:null},uCurl:{value:null},uP:{value:null},uDiv:{value:null},uDt:{value:0},uDiss:{value:1},uPt:{value:new it},uForce:{value:new it},uRad:{value:.001},uAspect:{value:1},uK:{value:1}}});this.idle=99,this.resize(1)}rt(){return new Bn(this.w,this.h,{type:bi,format:gn,minFilter:mn,magFilter:mn,depthBuffer:!1,stencilBuffer:!1,wrapS:Rn,wrapT:Rn})}resize(t){var e;this.aspect=t,this.w=Math.round(this.res*Math.max(1,t)),this.h=Math.round(this.res/Math.min(1,t));for(const n of["v0","v1","p0","p1","c","d"])(e=this[n])==null||e.dispose(),this[n]=this.rt();for(const n of Object.values(this.mats))n.uniforms.uTexel.value.set(1/this.w,1/this.h);this.vel=this.v0,this.velB=this.v1,this.clear()}clear(){const t=this.r,e=t.getRenderTarget(),n=t.getClearColor(new kt),s=t.getClearAlpha();t.setClearColor(0,0);for(const r of["v0","v1","p0","p1","c","d"])t.setRenderTarget(this[r]),t.clear(!0,!1,!1);t.setRenderTarget(e),t.setClearColor(n,s),this.idle=99}pass(t,e,n){const s=this.mats[t];for(const r in n)s.uniforms[r].value=n[r];this.quad.material=s,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}swap(){const t=this.vel;this.vel=this.velB,this.velB=t}splat(t,e,n=.0016){const s=this.r.getRenderTarget();this.pass("splat",this.velB,{uSrc:this.vel.texture,uPt:t,uForce:e,uRad:n,uAspect:this.aspect}),this.swap(),this.r.setRenderTarget(s),this.idle=0}get live(){return this.idle<4}step(t){if(this.idle+=t,this.idle>4){this.idle-t<=4&&this.clear();return}const e=this.r.getRenderTarget();this.pass("curl",this.c,{uVel:this.vel.texture}),this.pass("vort",this.velB,{uVel:this.vel.texture,uCurl:this.c.texture,uDt:t,uK:22}),this.swap(),this.pass("div",this.d,{uVel:this.vel.texture}),this.pass("scale",this.p0,{uSrc:this.p1.texture,uK:.8});let n=this.p0,s=this.p1;for(let r=0;r<18;r++){this.pass("press",s,{uP:n.texture,uDiv:this.d.texture});const a=n;n=s,s=a}this.pass("grad",this.velB,{uP:n.texture,uVel:this.vel.texture}),this.swap(),this.pass("advect",this.velB,{uVel:this.vel.texture,uSrc:this.vel.texture,uDt:t,uDiss:Math.pow(.38,t)}),this.swap(),this.p1=n,this.p0=s,this.r.setRenderTarget(e)}get texture(){return this.vel.texture}}const Qn={tFlow:{value:null},uIView:{value:new it(1,1)},uIRes:{value:new it(1,1)},uIPtr:{value:new Qt(-1e4,-1e4,0,90)},uITime:{value:0},uILit:{value:new Qt(-1e4,-1e4,280,0)}},Al=`
uniform sampler2D tFlow; uniform vec2 uIView, uIRes; uniform vec4 uIPtr, uILit; uniform float uITime;
// the cursor's lamp at a screen position (uv 0..1): the same falloff as the page's surface under it (js/gl/light.js)
float mpLitUv(vec2 uv){ vec2 d = uv * uIView - uILit.xy; return uILit.w * pow(1. + dot(d, d) / (uILit.z * uILit.z) * 3.3, -1.5); }
float mpLit(vec4 clip){ return clip.w <= 0. ? 0. : mpLitUv(clip.xy / clip.w * .5 + .5); }
// the field at a screen position (uv 0..1): xy = how far the stir has carried the points there (CSS px), z = brightness lift
vec3 mpFieldUv(vec2 uv){
  if (uv.x < -.02 || uv.x > 1.02 || uv.y < -.02 || uv.y > 1.02) return vec3(0.);
  vec3 F = texture2D(tFlow, clamp(uv, 0., 1.)).xyz;
  F.z = smoothstep(.06, .9, F.z) * .9;   // heat -> lift: a ribbon's fresh head burns, its cooling body less
  vec2 d = uv * uIView - uIPtr.xy; float l = length(d), r2 = l * l / (uIPtr.w * uIPtr.w);
  F.xy += d / max(l, 1.) * uIPtr.z * exp(-r2) * min(1., l / 16.);   // a faint parting under a resting pointer
  F.z += uIPtr.z * .03 * exp(-r2 * 1.6);
  return F; }
vec3 mpField(vec4 clip){ return clip.w <= 0. ? vec3(0.) : mpFieldUv(clip.xy / clip.w * .5 + .5); }
// moves a projected point by the field (k scales the push) and returns its brightness lift (the stir's heat, plus the
// lamp's: points inside the light's pool catch it like dust in a beam)
vec4 mpInteract(vec4 clip, float k, out float lift){ vec3 f = mpField(clip); lift = f.z + mpLit(clip) * .3; clip.xy += f.xy * k * 2. / uIView * clip.w; return clip; }
`,Qv="varying vec2 vUv; void main(){ vUv = position.xy * .5 + .5; gl_Position = vec4(position.xy, 0., 1.); }",t_=`precision highp float;
uniform sampler2D tF, tFluid; uniform vec2 uView, uPtrV; uniform vec4 uPtr, uK; uniform float uDt, uMotion, uMax, uHDec, uDiv;
varying vec2 vUv;
vec2 h22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
void main(){
  vec4 F = texture2D(tF, vUv);
  vec2 D = F.xy; float heat = F.z;
  vec2 X = vUv * uView + D;                                   // where this texel's points are now (CSS px, y up)
  vec2 suv = X / uView;
  float edge = step(0., suv.x) * step(suv.x, 1.) * step(0., suv.y) * step(suv.y, 1.);
  vec2 fv = texture2D(tFluid, clamp(suv, 0., 1.)).xy * edge;   // the flow there, uv/s
  float fs = length(fv);
  heat = max(heat, smoothstep(.35, 1.1, fs) * uK.y);         // the swipe's strong core heats what it crosses; its broad wake does not
  vec2 dp = X - uPtr.xy; float near = exp(-dot(dp, dp) / (uPtr.w * uPtr.w));
  heat = max(heat, near * uPtr.z * uK.w);                     // caught at the cursor: hottest
  float hs = smoothstep(0., .6, heat);
  // hot points ride the flow, cold ones barely lean; at the cursor they are carried at its speed (the ribbon's head)
  vec2 vel = fv * uView * uK.x * smoothstep(.015, .22, fs) * (.12 + .88 * smoothstep(.15, .55, heat));
  vec2 capV = uPtrV * uK.z - dp * 2.2 + vec2(dp.y, -dp.x) * 1.2;
  vel = mix(vel, capV, clamp(near * uPtr.z * uMotion * 1.2, 0., .85));
  vel += (h22(gl_FragCoord.xy) * 2. - 1.) * smoothstep(.25, .8, heat) * uDiv;   // hot points drift apart a little: grain, not a sheet
  vel -= D * mix(6., .7, hs);                                 // the spring home: slow while hot, quick once cool
  D += vel * uDt * uMotion;
  float m = length(D); if (m > uMax) D *= uMax / m;
  D *= uMotion;
  heat = clamp(heat - uDt * uHDec, 0., 1.);
  gl_FragColor = vec4(D, heat, 1.);
}`;class dx{constructor(t,e){this.r=t,this.opts=e;const n=()=>new Bn(4,4,{type:bi,format:gn,minFilter:mn,magFilter:mn,depthBuffer:!1,stencilBuffer:!1,wrapS:Rn,wrapT:Rn});this.rt=[n(),n()],this.ping=0,this.fluid=new Jv(t,{res:e.mobile?80:112}),this.cam=new da(-1,1,1,-1,0,1),this.scene=new Kh,this.u={tF:{value:null},tFluid:{value:null},uView:{value:new it(1,1)},uPtr:{value:new Qt(-1e4,-1e4,0,70)},uPtrV:{value:new it},uK:{value:new Qt(.45,.65,.8,.15)},uDt:{value:.016},uMotion:{value:1},uMax:{value:260},uHDec:{value:1},uDiv:{value:30}};const s=new Oe(new Fe().setAttribute("position",new Ge(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),new Je({uniforms:this.u,vertexShader:Qv,fragmentShader:t_,depthTest:!1,depthWrite:!1}));s.frustumCulled=!1,this.scene.add(s),this.cur=new it(-1e4,-1e4),this.prev=this.cur.clone(),this.on=0,this.kind="mouse",this.active=!1,this.fresh=!0,this.lens=0,this.vel=new it,this.speed=0,this.capOn=0,this.capHeat=0,this._fp=new it,this._ff=new it,this.motion=e.reduced?0:1,this.resize(1,1,1)}resize(t,e,n){this.w=t,this.h=e;const s=this.opts.mobile?144:200,r=t/e,a=r>=1?s:Math.max(16,Math.round(s*r)),o=r>=1?Math.max(16,Math.round(s/r)):s;for(const l of this.rt)l.setSize(a,o);this.clear(),this.fluid.resize(t/e),this.u.uView.value.set(t,e),Qn.uIView.value.set(t,e),Qn.uIRes.value.set(t*n,e*n),this.rad=.076*e,this.u.uPtr.value.w=this.rad,Qn.uIPtr.value.w=Math.max(64,Math.min(132,Math.min(t,e)*.12))*1.05,this.u.uMax.value=.3*e}clear(){const t=this.r,e=t.getRenderTarget(),n=t.getClearColor(new kt),s=t.getClearAlpha();t.setClearColor(0,0);for(const r of this.rt)t.setRenderTarget(r),t.clear(!0,!1,!1);t.setRenderTarget(e),t.setClearColor(n,s)}move(t,e,n="mouse"){this.cur.set(t,this.h-e),this.kind=n,(!this.active||this.fresh)&&(this.prev.copy(this.cur),this.fresh=!1),this.active=!0}leave(){this.active=!1,this.fresh=!0}step(t){t=Math.min(Math.max(t,1/240),1/20);const e=this.u,n=this.kind==="touch",s=this.h;this.on+=((this.active?1:0)-this.on)*Math.min(1,t*10);const r=(this.cur.x-this.prev.x)/t,a=(this.cur.y-this.prev.y)/t;this.prev.copy(this.cur),this.speed=this.active?Math.hypot(r,a):0;const o=1.8*s,l=this.speed;if(this.vel.set(r,a),l>o&&this.vel.multiplyScalar(o/l),this.active&&this.motion&&this.speed>1){const h=Math.min(1,this.speed/(2.64*s)),g=.7*(n?.45:1);this._fp.set(this.cur.x/this.w,this.cur.y/s),this._ff.set(r/this.w*g,a/s*g).clampLength(0,2.2),this.fluid.splat(this._fp,this._ff,.0016+h*.0016)}this.motion&&this.fluid.step(Math.min(t,1/30)),this.capOn=this.active&&!n?Math.min(1,this.speed/(.091*s))*this.on:0,this.capHeat=Math.min(1,.15+e_(.11,.49,this.speed/s)),e.uDt.value=t,e.uMotion.value=this.motion,e.tFluid.value=this.fluid.texture,e.uPtr.value.set(this.cur.x,this.cur.y,this.capOn,this.rad),e.uPtrV.value.copy(this.vel),e.uK.value.w=this.capHeat,this.lens+=((this.active&&!n?5:0)*this.motion-this.lens)*Math.min(1,t*4),Qn.uIPtr.value.set(this.cur.x,this.cur.y,this.lens,Qn.uIPtr.value.w);const c=this.r,u=c.getRenderTarget(),f=this.ping,d=1-f;e.tF.value=this.rt[f].texture,c.setRenderTarget(this.rt[d]),c.render(this.scene,this.cam),c.setRenderTarget(u),this.ping=d,Qn.tFlow.value=this.rt[d].texture}}function e_(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}class xa extends Oe{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new pn;const n=this,s=e.color!==void 0?new kt(e.color):new kt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||xa.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new _i,f=new I,d=new I,h=new I,g=new Zt,v=new I(0,0,-1),m=new Qt,p=new I,M=new I,_=new Qt,x=new Zt,U=this.camera,A=new Bn(r,a,{samples:c,type:bi}),L=new Je({name:l.name!==void 0?l.name:"unspecified",uniforms:Vh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=A.texture,L.uniforms.color.value=s,L.uniforms.textureMatrix.value=x,this.material=L,this.onBeforeRender=function(P,E,y){if(d.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,h),p.dot(f)>0)return;p.reflect(f).negate(),p.add(d),g.extractRotation(y.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(h),M.subVectors(d,v),M.reflect(f).negate(),M.add(d),U.position.copy(p),U.up.set(0,1,0),U.up.applyMatrix4(g),U.up.reflect(f),U.lookAt(M),U.far=y.far,U.updateMatrixWorld(),U.projectionMatrix.copy(y.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(U.projectionMatrix),x.multiply(U.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(U.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const w=U.projectionMatrix;_.x=(Math.sign(m.x)+w.elements[8])/w.elements[0],_.y=(Math.sign(m.y)+w.elements[9])/w.elements[5],_.z=-1,_.w=(1+w.elements[10])/w.elements[14],m.multiplyScalar(2/m.dot(_)),w.elements[2]=m.x,w.elements[6]=m.y,w.elements[10]=m.z+1-o,w.elements[14]=m.w,n.visible=!1;const R=P.getRenderTarget(),D=P.xr.enabled,N=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(A),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(E,U),P.xr.enabled=D,P.shadowMap.autoUpdate=N,P.setRenderTarget(R);const G=y.viewport;G!==void 0&&P.state.viewport(G),n.visible=!0},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}}xa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const n_={name:"GlossFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uStr:{value:2.8},uCenter:{value:new it},uClip:{value:0},uOn:{value:1},uSq:{value:1.55},uThr:{value:new it(.02,.16)},uGain:{value:5.4},uBase:{value:.5},uLen:{value:new it(.2,1.4)},uLod:{value:new it(1.1,.7)},uGrain:{value:.08},uDir:{value:.1},uFade:{value:.6},uEdge:{value:1}},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW; varying vec2 vL;
    void main(){ vUv = textureMatrix * vec4(position, 1.); vL = position.xy; vW = (modelMatrix * vec4(position, 1.)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`uniform sampler2D tDiffuse; uniform mat4 textureMatrix; uniform float uStr, uClip, uOn, uSq, uGain, uBase, uGrain, uDir, uFade, uEdge; uniform vec2 uCenter, uThr, uLen, uLod; varying vec4 vUv; varying vec3 vW; varying vec2 vL;
    void main(){
      float fz = vW.z - uCenter.y, fx = vW.x - uCenter.x;
      float d = max(fz + .45, 0.);
      float len = uLen.x + d * uLen.y, lod = clamp(uLod.x + d * uLod.y, .4, 3.);
      vec3 acc = vec3(0.); float ws = 0.;
      // squeeze toward the contact line in texture space, straight down the screen
      vec4 q0 = textureMatrix * vec4(vL, 0., 1.), qc = textureMatrix * vec4(vL.x, .45 - uCenter.y * 0., 0., 1.);
      vec2 uv0 = q0.xy / q0.w, uvc = qc.xy / qc.w; uv0.y = uvc.y + (uv0.y - uvc.y) * uSq;
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(.06711056, .00583715)))) - .5;   // interleaved-gradient jitter: no tap banding
      for (int i = 0; i < 24; i++) { float fi = (float(i) + ign) / 23.; float w = exp(-(fi - .4) * (fi - .4) * 4.);
        acc += textureLod(tDiffuse, uv0 + vec2(0., (fi - .4) * len * uDir), lod).rgb * w; ws += w; }   // explicit lod: jittered uvs would inflate the derivative-based mip
      acc /= ws;
      float l = dot(acc, vec3(.3, .59, .11));
      acc *= uBase + smoothstep(uThr.x, uThr.y, l) * uGain;
      // cool highlights (the lit edge) read emerald on the lacquer; the warm chip pool goes soft and neutral
      float lum = dot(acc, vec3(.3, .59, .11));
      // the hero's lit-edge streak keeps its body near the contact line (uEdge: hero only); only the bright core is lifted, so it stays narrow
      float ls = dot(textureLod(tDiffuse, uv0, max(lod - 1.8, 0.)).rgb, vec3(.3, .59, .11)) * (uBase + uGain);   // a sharper read of the same spot: the lift follows the edge's core, not its blur
      float eb = mix(.42, 1.9, exp(-max(d - 2.2, 0.) * 1.75) * smoothstep(.08, .4, ls) * uEdge);
      acc = mix(acc, vec3(.04, 1., .54) * min(lum * eb, .58), smoothstep(.0, .06, acc.b - acc.r) * smoothstep(.04, .2, lum) * mix(.85, .97, uEdge));
      acc = mix(acc, vec3(1., 1.03, .82) * lum * .6, smoothstep(.0, .08, acc.r - acc.b) * .7);
      // fine vertical grooves in the floor's lacquer break the reflection into streaks
      float gx = vW.x * 46.; float gr = fract(sin(floor(gx) * 91.7) * 4375.5) * .6 + fract(sin(floor(gx * .37) * 13.1) * 917.3) * .4;
      acc *= 1. - uGrain + uGrain * 2. * gr * smoothstep(0., .5, d);
      float fade = exp(-d * uFade) * (1. - smoothstep(1.2, 3.4, abs(fx))) * smoothstep(-3.4, -.6, fz);
      float clip = smoothstep(uClip - 14., uClip + 70., gl_FragCoord.y);
      float a = clamp(fade * clip * uOn, 0., 1.);
      vec3 floorTone = vec3(.006, .0125, .0098);
      gl_FragColor = vec4((acc * uStr + floorTone) * a, a * .92);
    }`},se={W:3.37,H:2.125,T:.1,R:18*3.37/360,B:.026},il=se.W/360,rh=se.H/228,Ue={x:-122*il,y:18*rh,w:48*il,h:38*rh},_u=2048,xu=Math.round(2048*se.H/se.W);function sl(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const i_=new Path2D("M90 138 154 110V390H90ZM166 110 250 224 334 110V220L250 334 166 220ZM346 110 410 138V390H346Z");function ah(i,t,e,n,s){const r=n/280;if(i.save(),i.translate(t-250*r,e-250*r),i.scale(r,r),s){const a=i.createLinearGradient(80,100,420,400);a.addColorStop(0,"#05b366"),a.addColorStop(.5,"#0acc94"),a.addColorStop(1,"#1fe0d6"),i.fillStyle=a}i.fill(i_),i.restore()}function s_(i){const t=i?i.naturalWidth:_u,e=i?i.naturalHeight:xu,[n,s]=hn(t,e),r=s.createLinearGradient(0,0,t,e);return r.addColorStop(0,"#1b1f2b"),r.addColorStop(.5,"#0b1820"),r.addColorStop(1,"#09281f"),s.fillStyle=r,s.fillRect(0,0,t,e),i&&s.drawImage(i,0,0,t,e),{color:n}}function r_(){const i=_u,t=xu,[e,n]=hn(i,t),[s,r]=hn(i,t),[a,o]=hn(i,t);{const x=n.createLinearGradient(i,0,0,t);x.addColorStop(0,"#1b1f2b"),x.addColorStop(.5,"#0b1820"),x.addColorStop(1,"#09281f"),n.fillStyle=x,n.fillRect(0,0,i,t)}r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,i,t),o.fillStyle="rgb(0,148,40)",o.fillRect(0,0,i,t);const l=nr(11);for(let x=0;x<12e4;x++){const U=l()*i,A=l()*t,L=.8+l()*1.8;r.fillStyle=l()<.5?"rgba(255,255,255,.045)":"rgba(0,0,0,.045)",r.beginPath(),r.arc(U,A,L,0,6.283),r.fill()}n.fillStyle="#030404",n.fillRect(0,t*.1,i,t*.17),o.fillStyle="rgb(0,40,30)",o.fillRect(0,t*.1,i,t*.17),r.fillStyle="rgb(140,140,140)",r.fillRect(0,t*.1,i,t*.17);const c=i*.075,u=t*.38,f=i*.56,d=t*.13,h=n.createLinearGradient(c,0,c+f,0);h.addColorStop(0,"#2b302e"),h.addColorStop(1,"#202523"),n.fillStyle=h,n.fillRect(c,u,f,d),n.save(),n.strokeStyle="rgba(0,217,150,.08)",n.lineWidth=2;for(let x=c;x<c+f;x+=14)n.beginPath(),n.moveTo(x,u),n.lineTo(x+30,u+d),n.stroke();n.restore(),n.fillStyle="#d6dcd9",n.fillRect(c+f+22,u,i*.11,d),n.fillStyle="#121514",n.font='italic 500 58px "Geist Mono", monospace',n.fillText("•••",c+f+44,u+d*.68),n.font='500 22px "Geist Mono", monospace',n.letterSpacing="5px",n.fillStyle="#6d7673",n.fillText("AUTHORIZED SIGNATURE — NOT VALID UNLESS SIGNED",c,u-18);const g=["This card is property of MatrixPay Technologies Inc. and must be returned upon request.","Use of this card constitutes acceptance of the cardholder agreement. Treasury OS v4 · MPC secured.","Lost or stolen cards: report instantly in the MatrixPay console. Issued under licence."];n.font="400 24px Geist, sans-serif",n.letterSpacing="0px",n.fillStyle="#5b6461",g.forEach((x,U)=>n.fillText(x,c,t*.63+U*38));const v=i*.9,m=t*.82;ah(n,v,m,96,!0),o.fillStyle="rgb(0,70,0)",ah(o,v,m,96,!1);const p=x=>{const[U,A]=hn(i,t);return A.translate(i,0),A.scale(-1,1),A.drawImage(x,0,0),[U,A]},[,M]=p(s),_=wl(M,i,t,2);return{color:p(e)[0],normal:_,rm:p(a)[0]}}function a_(i){const e=Math.round(1024*Ue.h/Ue.w),[n,s]=hn(1024,e),[r,a]=hn(1024,e),o=s.createLinearGradient(0,0,1024,e);o.addColorStop(0,"#d9b46a"),o.addColorStop(1,"#b38b48"),s.fillStyle=o,s.fillRect(0,0,1024,e),i&&s.drawImage(i,0,0,1024,e);const l=s.getImageData(0,0,1024,e).data,c=a.createImageData(1024,e),[u,f]=hn(1024,e),d=f.createImageData(1024,e);for(let v=0;v<1024*e;v++){const m=(l[v*4]*.3+l[v*4+1]*.59+l[v*4+2]*.11)/255,p=Math.min(1,Math.max(0,(.47-m)/.1));c.data[v*4]=c.data[v*4+1]=c.data[v*4+2]=160-p*110,c.data[v*4+3]=255,d.data[v*4]=d.data[v*4+1]=d.data[v*4+2]=p*200,d.data[v*4+3]=255}a.putImageData(c,0,0),f.putImageData(d,0,0),a.save(),a.filter="blur(3px)",a.strokeStyle="rgb(110,110,110)",a.lineWidth=10,sl(a,0,0,1024,e,150),a.stroke(),a.restore();{const[v,m]=hn(1024,e);m.filter="blur(2px)",m.drawImage(u,0,0),f.clearRect(0,0,1024,e),f.drawImage(v,0,0)}const[h,g]=hn(1024,e);return g.fillStyle="rgb(0,80,255)",g.fillRect(0,0,1024,e),{color:n,normal:wl(a,1024,e,1.8),rm:h,emis:u}}function rs(i,t,e){const n=new sa(i);return n.anisotropy=t.capabilities.getMaxAnisotropy(),n.colorSpace=e?ln:Nn,n.generateMipmaps=!0,n.minFilter=On,n}function o_(i,t,e){const n=new fs,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n}function oh(i,t,e,n,s,r=18){const a=o_(i-2*s,t-2*s,Math.max(.001,n-s)),o=new ma(a,{depth:e-2*s,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:4,curveSegments:r});o.center();const l=o.attributes.position,c=o.attributes.uv;o.attributes.normal;const u=o.groups[0],f=o.groups[1],d=u.count/2;for(let h=u.start;h<u.start+u.count;h++){const g=l.getZ(h)>0,v=(l.getX(h)+i/2)/i,m=(l.getY(h)+t/2)/t;c.setXY(h,g?v:1-v,m)}return o.clearGroups(),o.addGroup(u.start+d,d,0),o.addGroup(u.start,d,1),o.addGroup(f.start,f.count,2),o}const l_={uDis:{value:-1},uDisC:{value:new it(Ue.x,Ue.y)},uDisW:{value:.46},uGlow:{value:1},uTime:{value:0},uScan:{value:0}},c_={uRimDir:{value:new I(1,0,0)},uRim:{value:1.6}};function Gs(i,t=new I,e=!1,n=e){const s={value:t};return i.onBeforeCompile=r=>{Object.assign(r.uniforms,l_,{uOff:s},e?c_:{}),r.vertexShader=`uniform vec3 uOff;
varying vec3 vCardP;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vCardP = position + uOff;`),r.fragmentShader=`uniform float uDis; uniform vec2 uDisC; uniform float uDisW; uniform float uGlow; uniform float uTime; uniform float uScan;
varying vec3 vCardP;
float dhash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float dnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(dhash(i),dhash(i+vec2(1,0)),f.x), mix(dhash(i+vec2(0,1)),dhash(i+vec2(1,1)),f.x), f.y); }
float disField(){ vec2 q = vCardP.xy; float n = dnoise(q*4.0)*.75 + dnoise(q*9.0)*.25;
  return mix(length(q - uDisC) + (n - .5)*.34, q.y + .45 * q.x + 1.9 + (dnoise(q * 14.) - .5) * .07, uScan); }   // uScan: a diagonal print (the hero) instead of the chip burst
`+r.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
float dF = disField() - uDis; if (dF < 0.0) discard;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float dE = 1.0 - smoothstep(0.0, uDisW, dF); vec3 dCol = mix(vec3(0.06, 0.48, 0.43), vec3(0.8, 0.96, 1.0), dE * dE * dE);   // the shared particle palette: teal falloff, cool-white front totalEmissiveRadiance += dCol * dE * dE * .95 * uGlow * step(-0.5, uDis);`+(e?`
float rimK = max(dot(normal, uRimDir), 0.0); float rimV = .25 + .75 * smoothstep(.9, -.7, vCardP.y); totalEmissiveRadiance += mix(vec3(0.0, 0.85, 0.59), vec3(.55, 1., .82), rimV * rimV) * rimK * rimK * rimK * uRim * rimV;`:"")),e&&(r.fragmentShader=`uniform vec3 uRimDir; uniform float uRim;
`+r.fragmentShader),n&&(r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = min(outgoingLight - totalEmissiveRadiance, vec3(.8)) + totalEmissiveRadiance;
#include <opaque_fragment>`))},i.customProgramCacheKey=()=>"mp-dissolve"+(e?"-rim":"")+(n?"-clamp":""),i}class fx{constructor(t,e={}){const n=s_(e.cardFace),s=r_(),r=a_(e.cardChip),a=(_,x)=>Gs(new Oi(Object.assign({map:rs(_.color,t,!0),normalMap:rs(_.normal,t,!1),roughnessMap:rs(_.rm,t,!1),metalnessMap:rs(_.rm,t,!1),roughness:1,metalness:1,normalScale:new it(1,1)},x)));this.matFront=Gs(new Oi({map:rs(n.color,t,!0),roughness:.42,metalness:.1,clearcoat:.6,clearcoatRoughness:.16,envMapIntensity:.3,specularIntensity:1,emissive:new kt(1,1,1),emissiveIntensity:0})),this.renderer=t,this.glowAt=-1,this.matBack=a(s,{clearcoat:.22,clearcoatRoughness:.34,envMapIntensity:.55}),this.matEdge=Gs(new Oi({color:new kt(.6,.65,.63),metalness:1,roughness:.32,envMapIntensity:1,emissive:new kt(.25,1,.78),emissiveIntensity:.07}),new I,!0),this.matChip=a(r,{envMapIntensity:1.05,metalness:.78,emissiveMap:rs(r.emis,t,!0),emissive:new kt(0,.85,.59),emissiveIntensity:0}),this.matChip.onBeforeCompile=null,Gs(this.matChip,new I(Ue.x,Ue.y,0),!1,!0),this.matChipSide=Gs(new Oi({color:new kt(.62,.48,.26),metalness:1,roughness:.38}),new I(Ue.x,Ue.y,0),!1,!0);const o=new Oe(oh(se.W,se.H,se.T,se.R,se.B,20),[this.matFront,this.matBack,this.matEdge]),l=new Oe(oh(Ue.w,Ue.h,.008,7*il,.002,10),[this.matChip,this.matChip,this.matChipSide]);l.position.set(Ue.x,Ue.y,se.T/2-.002),this.root=new si,this.root.add(o,l),this.body=o,this.chip=l,this.floorY=-1.235,this.floor=new xa(new bs(16,12),{textureWidth:512,textureHeight:512,multisample:4,shader:n_}),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=this.floorY,this.floor.camera.layers.set(1);{const _=this.floor.getRenderTarget().texture;_.generateMipmaps=!0,_.minFilter=On}Object.assign(this.floor.material,{transparent:!0,premultipliedAlpha:!0,depthWrite:!1}),this.floor.renderOrder=2,o.layers.enable(1),l.layers.enable(1);const c=1024,u=Math.round(1024*(se.H*1.6)/(se.W*1.36)),[f,d]=hn(c,u),h=c/(se.W*1.36),g=se.W*h,v=se.H*h,m=(c-g)/2,p=(u-v)/2,M=d.createLinearGradient(m,p+v,m+g,p);M.addColorStop(0,"rgba(0,217,150,0)"),M.addColorStop(.62,"rgba(0,217,150,0)"),M.addColorStop(.86,"rgba(0,217,150,.45)"),M.addColorStop(1,"rgba(120,255,205,.95)"),d.filter="blur(18px)",d.strokeStyle=M,d.lineWidth=22,sl(d,m,p,g,v,se.R*h),d.stroke(),d.filter="blur(40px)",d.lineWidth=46,d.globalAlpha=.5,sl(d,m,p,g,v,se.R*h),d.stroke(),this.halo=new Oe(new bs(se.W*1.36,se.H*1.6),new gl({map:new sa(f),transparent:!0,depthWrite:!1,blending:ri,opacity:.2})),this.halo.position.z=-.1/2-.03,this.halo.renderOrder=3,this.root.add(this.halo)}setGlow(t,e=.75){const n=new sa(t);n.colorSpace=ln,n.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),n.generateMipmaps=!0,n.minFilter=On,n.premultiplyAlpha=!0,this.matFront.emissiveMap=n,this.matFront.emissiveIntensity=e,this.matFront.needsUpdate=!0,this.glow=n}tickGlow(t){this.glow&&t-this.glowAt>1/31&&(this.glow.needsUpdate=!0,this.glowAt=t)}setPose(t,e){this.root.position.copy(t),this.root.rotation.copy(e)}setFloor(t,e,n=0){this.floor.visible=t>.001,e!==void 0&&(this.floorY=e,this.floor.position.y=e);const s=this.floor.material.uniforms;s.uOn.value=t,s.uClip.value=n}updateReflection(){const t=this.root.position;this.floor.position.x=t.x,this.floor.position.z=t.z,this.floor.material.uniforms.uCenter.value.set(t.x,t.z)}}const h_=`
// cool white 46%, pale mint 40%, restrained teal 14%
vec3 mpColor(float r){ return r < .46 ? vec3(.84, .95, 1.) : (r < .86 ? vec3(.56, 1., .83) : vec3(.09, .6, .54)); }
// a point's core diameter in CSS px: 66% fine, 30% medium, 4% small hot sparkles
float mpSizeCss(float r1, float r2){ return r1 < .66 ? 1.05 + r2 * .65 : (r1 < .96 ? 1.7 + r2 * .75 : 1.2); }
float mpHot(float r1){ return r1 >= .96 ? 2.3 : 1.; }
// sizes stay near-constant on screen (the hero's scale) with a gentle depth cue; never an oversized dot
float mpDepth(float z){ return clamp(sqrt(12.5 / max(z, .1)), .72, 1.55); }
// slow, smooth drift: every particle on the page breathes on the same flow
vec3 mpFlow(vec3 p, float t, float s){ return vec3(sin(t * .31 + p.y * 1.3 + s * 6.28), sin(t * .27 + p.z * 1.1 + s * 4.1), sin(t * .23 + p.x * 1.2 + s * 5.3)); }
`,u_=`
float mpSprite(vec2 pc, float px){ float d = length(pc - .5) * 2.;
  float core = clamp((.46 - d) * px * .5 + .5, 0., 1.);
  return core + exp(-d * d * 7.) * .2; }
`,d_=1/.46;function ms(i,t,e){const n=i*Math.PI/180,s=t*Math.PI/180;return new I(e*Math.cos(n)*Math.sin(s),e*Math.sin(n),e*Math.cos(n)*Math.cos(s))}function f_(i){const t=atob(i.bits),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return(n,s)=>{const r=Math.min(i.h-1,Math.max(0,Math.floor((90-n)/180*i.h))),a=Math.min(i.w-1,Math.max(0,Math.floor((s+180)/360*i.w))),o=r*i.w+a;return e[o>>3]>>7-(o&7)&1}}function p_(i,t){const e=nr(2026),n=nr(2026),s=i>2e4?9500:5200;for(let y=0;y<s*4;y++)n();for(let y=0;y<s;y++){let w,R;for(;;){w=(n()-.5)*(se.W-.04),R=(n()-.5)*(se.H-.04);const D=Math.max(Math.abs(w)-(se.W/2-se.R),0),N=Math.max(Math.abs(R)-(se.H/2-se.R),0);if(D*D+N*N<se.R*se.R)break}n()<.04&&(n(),n())}const r=[];for(let y=0;y<7;y++)r.push(new Float32Array(i*4));const a=new Float32Array(i*4);for(let y=0;y<i*4;y++)a[y]=e();const o=(y,w,R,D,N,G)=>{const W=r[y];W[w*4]=R,W[w*4+1]=D,W[w*4+2]=N,W[w*4+3]=G};for(let y=0;y<i;y++){let w,R;for(;;){w=(e()-.5)*(se.W-.04),R=(e()-.5)*(se.H-.04);const D=Math.max(Math.abs(w)-(se.W/2-se.R),0),N=Math.max(Math.abs(R)-(se.H/2-se.R),0);if(D*D+N*N<se.R*se.R)break}e()<.04&&(w=Ue.x+(e()-.5)*Ue.w,R=Ue.y+(e()-.5)*Ue.h),o(0,y,w,R,se.T/2+.004,Math.hypot(w-Ue.x,R-Ue.y))}const l=Ie.tunnel,c=[];for(let y=0;y<120;y++){const w=l.z0+(l.z1-l.z0)*Math.pow(n(),.9),R=l.r0+(l.r1-l.r0)*Math.sqrt(n()),D=n()*Math.PI*2;c.push(new I(Math.cos(D)*R,Math.sin(D)*R*.8,w))}for(let y=0;y<10;y++)c.push(new I(Ue.x*.4+Ke(n)*.5,Ue.y+Ke(n)*.4,-1.2-n()*3));const u=[];c.forEach((y,w)=>{const R=c.map((D,N)=>[y.distanceToSquared(D),N]).filter(D=>D[1]!==w).sort((D,N)=>D[0]-N[0]);for(let D=0;D<3;D++){const N=R[D][1];(w<N||!u.some(G=>G[0]===N&&G[1]===w))&&u.push([w,N])}});for(let y=0;y<i;y++){const w=e();if(w<.26){const R=c[e()*c.length|0];o(1,y,R.x+Ke(e)*.04,R.y+Ke(e)*.04,R.z+Ke(e)*.04,1.3)}else if(w<.8){const R=u[e()*u.length|0],D=c[R[0]],N=c[R[1]],G=e();o(1,y,D.x+(N.x-D.x)*G+Ke(e)*.012,D.y+(N.y-D.y)*G+Ke(e)*.012,D.z+(N.z-D.z)*G+Ke(e)*.012,.62)}else{const R=l.z0+4-e()*40,D=1.2+e()*7,N=e()*6.283;o(1,y,Math.cos(N)*D,Math.sin(N)*D*.7,R,.3)}}const f=Ie.dash,d=34,h=(y,w)=>{const R=(y+1)/2;return .25+.55*R+.12*Math.sin(R*9+w)+.06*Math.sin(R*23+w*2)};for(let y=0;y<i;y++){const w=e();if(w<.5){const R=e()*d|0,D=e()*3|0,N=R/(d-1)*2-1,G=h(N,D*1.7)*(D===1?4:3.1),W=N*5.4,nt=(D-1)*.9,q=-3+Math.floor(e()*G/.085)*.085;o(2,y,f.x+W+(e()-.5)*.015,f.y+q,f.z+nt+(e()-.5)*.015,D===1?.85:.5)}else if(w<.68){const R=e()*2-1,D=-3+h(R,4.1)*4.4+1;o(2,y,f.x+R*5.6,f.y+D+Ke(e)*.02,f.z+1.1+Ke(e)*.02,1.6)}else if(w<.8){const R=e()*2-1,D=-3+h(R,4.1)*4.4+1,N=-3+e()*(D+3);o(2,y,f.x+R*5.6,f.y+N,f.z+1.1,.16)}else if(w<.93){const R=(e()*30|0)/29*2-1,D=(e()*10|0)/9;o(2,y,f.x+R*6,f.y-3.05,f.z+2.2-D*7,.32)}else o(2,y,f.x+(e()-.5)*22,f.y+(e()-.5)*12,f.z-3-e()*8,.22)}const g=f_(t),v=Ie.globeR,m=[],p=Math.max(26e3,Math.round(i*3.6)),M=Math.PI*(3-Math.sqrt(5));for(let y=0;y<p;y++){const w=1-(y+.5)/p*2,R=Math.sqrt(1-w*w),D=M*y,N=Math.asin(w)*180/Math.PI;let G=Math.atan2(Math.cos(D)*R,Math.sin(D)*R)*180/Math.PI;g(N,G)&&m.push([N,G])}for(let y=0;y<i;y++)if(y<i*.82){const[w,R]=m[Math.floor(y/(i*.82)*m.length)],D=ms(w,R,v*1.003);o(3,y,D.x,D.y,D.z,1.75)}else{const w=new I(Ke(e),Ke(e),Ke(e)).normalize().multiplyScalar(v*(1.04+e()*.32));o(3,y,w.x,w.y,w.z,.18)}const _=Ie.intel,x=30,U=20,A=.62,L=(y,w)=>.5+.5*Math.sin(y*.55+1.3)*Math.cos(w*.42)+.35*Math.exp(-((y-3)**2+(w+2)**2)/6)+.28*Math.exp(-((y+5)**2+(w-3)**2)/5);for(let y=0;y<i;y++)if(e()<.84){const w=e()*x|0,R=e()*U|0,D=(w-x/2)*A,N=(R-U/2)*A,G=Math.max(.08,L(D,N))*2.6,W=e()*G,nt=e()<.42,q=nt?G-e()*.06:W;o(4,y,_.x+D,_.y+q,_.z+N,nt?.78:.16)}else{const w=(e()-.5)*x*A*1.4,R=(e()-.5)*U*A*1.4;o(4,y,_.x+w,_.y-.02,_.z+R,.2)}const P=Ie.vault;for(let y=0;y<i;y++){const w=e();if(w<.45){const D=-64+(e()*9|0)*16,N=e()*360-180,G=ms(D,N,4.4);o(5,y,P.x+G.x,P.y+G.y,P.z+G.z,.42)}else if(w<.8){const D=(e()*12|0)*30,N=e()*180-90,G=ms(N,D,4.4);o(5,y,P.x+G.x,P.y+G.y,P.z+G.z,.34)}else{const R=new I(Ke(e),Ke(e),Ke(e)).normalize().multiplyScalar(5+e()*4);o(5,y,P.x+R.x,P.y+R.y,P.z+R.z,.26)}}const E=Ie.liq;for(let y=0;y<i;y++)if(e()<.74){const w=e()*6.283,R=Math.floor(e()*3),D=Math.floor(e()*4),N=3.55+(D-1.5)*.12+Ke(e)*.022+Math.sin(w*3+R)*.07;o(6,y,E.x+Math.cos(w)*N,E.y+Math.sin(w)*N,E.z-.6+(D-1.5)*.05+Ke(e)*.025,D===1||D===2?.55:.36)}else o(6,y,E.x+(e()-.5)*20,E.y+(e()-.5)*12,E.z-2-e()*10,.2);return{F:r,RND:a,hubs:c,edges:u}}const m_=`
attribute vec4 aF0; attribute vec4 aF1; attribute vec4 aF2; attribute vec4 aF3; attribute vec4 aF4; attribute vec4 aF5; attribute vec4 aF6; attribute vec4 aRnd;
uniform float uS, uDisA, uDisB, uTime, uSize, uPx, uFade, uShell, uSwirl, uCurve, uTop, uCap, uDpr, uDens, uFlow;
uniform mat4 uCard, uGlobe;
varying float vA; varying vec3 vCol; varying float vGold; varying float vPx;
${h_}
${Al}
vec3 hash3(float n){ return fract(sin(vec3(n, n+1.31, n+2.17))*vec3(43758.5453, 22578.145, 19642.349)) * 2. - 1.; }
float ease(float t){ return t*t*(3.-2.*t); }
float stag(float t, float d){ return ease(clamp((t - d*.42)/.58, 0., 1.)); }
void main(){
  vec3 card = (uCard * vec4(aF0.xyz, 1.)).xyz;
  float d = aF0.w;
  vec3 sw = hash3(aRnd.x*97.3);
  // 0 -> 1 : released by the hero dissolve front (card-local distance to chip)
  float t = ease(clamp((uDisA - d) / 1.3, 0., 1.));
  vec3 P = mix(card, aF1.xyz, t) + sw * sin(3.14159*t) * .55;
  float a = aF1.w * t;
  float k;
  // network -> dashboard assembles as a left-to-right sweep (reads as the dashboard being built)
  float dx2 = clamp((aF2.x - (${Ie.dash.x.toFixed(1)}) + 7.4) / 14.8, 0., 1.) * .85 + aRnd.y * .15;
  k = ease(clamp((clamp(uS-1., 0., 1.) - dx2*.62) / .38, 0., 1.)); P = mix(P, aF2.xyz, k) + sw*sin(3.14159*k)*uSwirl*.6; a = mix(a, aF2.w, k);
  vec3 g = (uGlobe * vec4(aF3.xyz, 1.)).xyz;
  k = stag(clamp(uS-2., 0., 1.), aRnd.y); P = mix(P, g, k) + sw*sin(3.14159*k)*uSwirl*1.4; a = mix(a, aF3.w, k);
  // land dots crowding the horizon read as a bright crescent: fade them by how much they face the camera
  { vec3 gc = (uGlobe * vec4(0., 0., 0., 1.)).xyz; float fc = dot(normalize(g - gc), normalize(cameraPosition - g));
    a *= mix(1., smoothstep(.02, .3, fc), k * k * k * (1. - clamp(uS - 3., 0., 1.))); }   // only once seated: mid-flight the far half still builds the sphere
  float dx4 = clamp((aF4.x - (${Ie.intel.x.toFixed(1)}) + 9.5) / 19., 0., 1.) * .8 + aRnd.z * .2;
  k = ease(clamp((clamp(uS-3., 0., 1.) - dx4*.6) / .4, 0., 1.)); P = mix(P, aF4.xyz, k) + sw*sin(3.14159*k)*uSwirl; a = mix(a, aF4.w, k);
  vec3 v5 = aF5.xyz; v5 = mix(v5, (v5 - vec3(0.,0.,${Ie.vault.z.toFixed(1)}))*uShell + vec3(0.,0.,${Ie.vault.z.toFixed(1)}), 1.);
  k = stag(clamp(uS-4., 0., 1.), aRnd.y); P = mix(P, v5, k) + sw*sin(3.14159*k)*uSwirl*1.8; a = mix(a, aF5.w, k);
  k = stag(clamp(uS-5., 0., 1.), aRnd.z); P = mix(P, aF6.xyz, k) + sw*sin(3.14159*k)*uSwirl*1.6; a = mix(a, aF6.w, k);
  // liquidity field -> card: the card assembles as a left-to-right sweep (reads as the card, not a ball)
  float d7 = clamp((aF0.x + ${(se.W/2).toFixed(3)}) / ${se.W.toFixed(3)}, 0., 1.) * .8 + aRnd.w * .2;
  k = ease(clamp((clamp(uS-6., 0., 1.) - d7*.55) / .45, 0., 1.)); P = mix(P, card, k) + sw*sin(3.14159*k)*uSwirl*.45; a = mix(a * .6, .3, k) * (1. - uFade);
  // 7 -> 8 : the final card dissolves from the chip; released points drift up as emerald light
  float r8 = clamp((uDisB - d) / 2.2, 0., 1.);
  // released points stream up-and-right along the dissolve direction as soft emerald light
  vec3 dirW = (uCard * vec4(.75 + sw.x * .55, .1 + sw.y * .34, 0., 0.)).xyz;   // a tapered plume: mostly rightward, little lift
  vec3 drift = (dirW * (1.2 + abs(sw.z) * 1.4) + vec3(0., 0., .7 + sw.z * .4)) * (1. - pow(1. - r8, 2.)) * 1.6;
  drift += vec3(sin(uTime*.6 + aRnd.x*30.), cos(uTime*.5 + aRnd.y*25.), 0.) * .25 * r8;
  P += drift;
  a = max(a, step(.001, uDisB - d) * (1. - r8*.55) * step(5.5, uS));
  a *= mix(1., uCurve, step(1.2, aF2.w) * (1. - clamp(abs(uS - 2.), 0., 1.)));
  // the shared slow flow (js/gl/pointstyle.js)
  P += mpFlow(P * .6, uTime, aRnd.x) * uFlow;
  vec4 mv = modelViewMatrix * vec4(P, 1.);
  gl_Position = projectionMatrix * mv;
  // the page's one pointer response (js/gl/interact.js)
  float lift; gl_Position = mpInteract(gl_Position, 1., lift);
  float navFade = (1. - smoothstep(.62, .8, gl_Position.y / gl_Position.w)) * (1. - uTop * smoothstep(.05, .35, gl_Position.y / gl_Position.w));
  float near = smoothstep(.22, 1.1, -mv.z);   // the dive flies through the network: points stay until they are right at the lens
  // the hero's point: a fine core sized in CSS px (classes from pointstyle.js), a gentle depth cue, a halo around it
  float dm = mpSizeCss(aRnd.y, aRnd.w) * uDpr * mpDepth(-mv.z) * mix(1., uSize / 2., .3) * uCap * (.9 + a * .2), df = max(dm, 1.5);   // the chapters' size cues stay gentle: a fine point never shrinks into a dimmed pixel
  gl_PointSize = df * ${d_.toFixed(4)}; vPx = gl_PointSize;
  vA = a * near * navFade * (.78 + .22 * sin(uTime * (1.6 + aRnd.x * 1.6) + aRnd.x * 60.)) * min(1., (dm * dm) / (df * df)) * mpHot(aRnd.y) * uDens * (1. + lift * 1.2);
  vCol = mpColor(aRnd.z);
  vec2 cq = abs(aF0.xy - vec2(${Ue.x.toFixed(3)}, ${Ue.y.toFixed(3)})); vGold = step(cq.x, ${(Ue.w/2).toFixed(3)}) * step(cq.y, ${(Ue.h/2).toFixed(3)}) * clamp(uS - 6., 0., 1.);
}`,g_=`
uniform float uAlpha;
varying float vA; varying vec3 vCol; varying float vGold; varying float vPx;
${u_}
void main(){
  float a = mpSprite(gl_PointCoord, vPx) * vA * uAlpha;
  if (a < .003) discard;
  vec3 c = mix(vCol, vec3(1., .82, .52), vGold);   // the final card's chip still assembles warm
  gl_FragColor = vec4(c * a, a);
}`;class px{constructor(t,e){const{F:n,RND:s,hubs:r,edges:a}=p_(t,e);this.hubs=r,this.edges=a;const o=new Fe;o.setAttribute("position",new Ge(new Float32Array(t*3),3)),n.forEach((l,c)=>o.setAttribute("aF"+c,new Ge(l,4))),o.setAttribute("aRnd",new Ge(s,4)),o.boundingSphere=new kn(new I(0,0,-120),1e4),this.u={uS:{value:0},uDisA:{value:-1},uDisB:{value:-1},uTime:{value:0},uSize:{value:2.2},uPx:{value:900},uFade:{value:0},uShell:{value:1},uSwirl:{value:.8},uAlpha:{value:1},uCurve:{value:1},uTop:{value:0},uCap:{value:1},uDpr:{value:1},uDens:{value:1.25},uFlow:{value:.035},uCard:{value:new Zt},uGlobe:{value:new Zt}},this.points=new iu(o,new Je({uniforms:{...this.u,...Qn},vertexShader:m_,fragmentShader:g_,transparent:!0,depthWrite:!1,blending:ri})),this.points.frustumCulled=!1}}const v_=Al+`
attribute float aT; attribute float aPh; attribute float aSp; attribute float aRoute;
uniform vec4 uSph;
varying float vT; varying float vPh; varying float vSp; varying float vRoute; varying float vDepth; varying float vNav; varying float vFace;
void main(){ vT=aT; vPh=aPh; vSp=aSp; vRoute=aRoute; vec4 mv = modelViewMatrix*vec4(position,1.);
  vec3 wp = (modelMatrix*vec4(position,1.)).xyz; vFace = uSph.w > 0. ? dot(normalize(wp - uSph.xyz), normalize(cameraPosition - wp)) : 1.; vDepth=-mv.z; gl_Position=projectionMatrix*mv; float lift; gl_Position = mpInteract(gl_Position, 1., lift); vNav = 1. - smoothstep(.62, .8, gl_Position.y / gl_Position.w); }`,__=`
uniform float uTime, uAlpha, uPulse, uHead, uRouteA, uBase, uFar; uniform vec3 uColor, uHot; uniform vec4 uEx;
varying float vT; varying float vPh; varying float vSp; varying float vRoute; varying float vDepth; varying float vNav; varying float vFace;
void main(){
  vec2 fc = gl_FragCoord.xy; float ex = step(uEx.x, fc.x) * step(fc.x, uEx.z) * step(uEx.y, fc.y) * step(fc.y, uEx.w);
  float far = (1. - smoothstep(uFar*.55, uFar, vDepth)) * (1. - ex);
  float near = smoothstep(.15, 1.2, vDepth);
  float x = fract(uTime*vSp + vPh);
  float dx = (vT - x)*14.; float p = (dx > 0. ? exp(-dx*dx*2.2) : exp(dx*.55)) * uPulse;   // bright head, fading tail
  float base = uBase;
  float a; vec3 c;
  if (vRoute > .5) {
    float lit = step(vT, uHead);
    float dh = (vT - uHead)*22.; float head = exp(-dh*dh);
    a = (base*.6 + lit*.55 + head*1.6) * uRouteA;
    c = mix(uColor, uHot, head);
  } else { a = base + p; c = mix(uColor, uHot, p*.7); }
  a *= uAlpha * far * near * vNav * smoothstep(.05, .26, vFace);   // arcs lifted past a sphere's horizon fade out
  if (a < .003) discard;
  gl_FragColor = vec4(c*a, a);
}`;class lh{constructor(t,e={}){const n=[],s=[],r=[],a=[],o=[];t.forEach((c,u)=>{const f=c.points||c,d=c.route?1:0;let h=0;const g=[0];for(let p=1;p<f.length;p++)h+=f[p].distanceTo(f[p-1]),g.push(h);const v=c.phase??Math.random(),m=c.speed??.12+Math.random()*.25;for(let p=1;p<f.length;p++){const M=f[p-1],_=f[p];n.push(M.x,M.y,M.z,_.x,_.y,_.z),s.push(g[p-1]/h,g[p]/h),r.push(v,v),a.push(m,m),o.push(d,d)}});const l=new Fe;l.setAttribute("position",new he(n,3)),l.setAttribute("aT",new he(s,1)),l.setAttribute("aPh",new he(r,1)),l.setAttribute("aSp",new he(a,1)),l.setAttribute("aRoute",new he(o,1)),this.u={uTime:{value:0},uAlpha:{value:0},uPulse:{value:e.pulse??1},uHead:{value:0},uRouteA:{value:1},uBase:{value:e.base??.12},uFar:{value:e.far??60},uEx:{value:new Qt(-1,-1,-1,-1)},uSph:{value:new Qt(0,0,0,0)},uColor:{value:new kt(e.color??55702)},uHot:{value:new kt(e.hot??13172712)}},this.mesh=new nu(l,new Je({uniforms:{...this.u,...Qn},vertexShader:v_,fragmentShader:__,transparent:!0,depthWrite:!1,blending:ri})),this.mesh.frustumCulled=!1}}function ro(i,t,e,n=.35,s=64){const r=[],a=i.clone().normalize(),o=t.clone().normalize(),l=a.angleTo(o);for(let c=0;c<=s;c++){const u=c/s,f=Math.sin(l),d=a.clone().multiplyScalar(Math.sin((1-u)*l)/f).add(o.clone().multiplyScalar(Math.sin(u*l)/f));r.push(d.multiplyScalar(e*(1+n*Math.sin(Math.PI*u)*Math.min(1,l/1.2))))}return r}const Cl=[{id:"nyc",name:"New York",lat:40.71,lon:-74,role:"Origin · Ops-Main",vol:"$2.41B",rails:"Fedwire · RTP · ACH",lat_ms:"8ms"},{id:"lon",name:"London",lat:51.5,lon:-.12,role:"Routing hub",vol:"$3.08B",rails:"FPS · CHAPS · SEPA",lat_ms:"11ms"},{id:"sgp",name:"Singapore",lat:1.35,lon:103.82,role:"Destination · Partner",vol:"$1.62B",rails:"FAST · MEPS+",lat_ms:"14ms"},{id:"fra",name:"Frankfurt",lat:50.11,lon:8.68,role:"EU clearing",vol:"$1.94B",rails:"SEPA Inst · TARGET2",lat_ms:"10ms"},{id:"tyo",name:"Tokyo",lat:35.68,lon:139.69,role:"APAC liquidity",vol:"$1.37B",rails:"Zengin · BOJ-NET",lat_ms:"16ms"},{id:"sao",name:"São Paulo",lat:-23.55,lon:-46.63,role:"LATAM · PIX",vol:"$0.88B",rails:"PIX · TED",lat_ms:"19ms"},{id:"dxb",name:"Dubai",lat:25.2,lon:55.27,role:"MENA corridor",vol:"$0.74B",rails:"UAEFTS · IPP",lat_ms:"13ms"},{id:"bom",name:"Mumbai",lat:19.07,lon:72.88,role:"South Asia · UPI",vol:"$0.69B",rails:"UPI · NEFT · IMPS",lat_ms:"15ms"},{id:"syd",name:"Sydney",lat:-33.87,lon:151.2,role:"Oceania",vol:"$0.52B",rails:"NPP · BECS",lat_ms:"21ms"},{id:"los",name:"Lagos",lat:6.52,lon:3.38,role:"West Africa",vol:"$0.31B",rails:"NIP · RTGS",lat_ms:"22ms"},{id:"tor",name:"Toronto",lat:43.65,lon:-79.38,role:"North America",vol:"$0.83B",rails:"Lynx · Interac",lat_ms:"9ms"},{id:"mex",name:"Mexico City",lat:19.43,lon:-99.13,role:"LATAM · SPEI",vol:"$0.47B",rails:"SPEI",lat_ms:"17ms"}],x_=[["nyc","lon"],["lon","sgp"],["nyc","sao"],["sgp","tyo"],["tyo","syd"],["sgp","syd"],["nyc","tor"],["nyc","mex"],["mex","sao"],["los","sao"]];class mx{constructor(){const t=Ie.globeR;this.group=new si,this.group.position.copy(Ie.globe),this.spin=new si,this.group.add(this.spin),this.body=new Oe(new aa(t*.985,96,64),new Oi({color:132356,roughness:.6,metalness:0,envMapIntensity:.08})),this.spin.add(this.body),this.atmo=new Oe(new aa(t*1.16,64,48),new Je({uniforms:{uA:{value:1}},transparent:!0,depthWrite:!1,blending:ri,side:un,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform float uA; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(clamp(1.0 - abs(dot(vN, vV)),0.,1.), 2.2); float rim = smoothstep(.0,.9,f); vec3 c = mix(vec3(0.,.85,.59), vec3(.6,1.,.83), f); float a = rim * .32 * uA * smoothstep(1.,.75,f); gl_FragColor = vec4(c*a, a); }"})),this.group.add(this.atmo);const e=[];for(let u=-60;u<=60;u+=30){const f=[];for(let d=-180;d<=180;d+=4)f.push(ms(u,d,t*1.002));e.push({points:f,speed:0})}for(let u=-180;u<180;u+=30){const f=[];for(let d=-90;d<=90;d+=4)f.push(ms(d,u,t*1.002));e.push({points:f,speed:0})}this.grat=new lh(e,{base:.05,pulse:0,far:40,color:55702}),this.spin.add(this.grat.mesh),this.hubs=Cl.map(u=>({...u,local:ms(u.lat,u.lon,t*1.01)}));const n=Object.fromEntries(this.hubs.map(u=>[u.id,u])),s=x_.filter(([u,f])=>!(u==="nyc"&&f==="lon"||u==="lon"&&f==="sgp")).map(([u,f],d)=>({points:ro(n[u].local,n[f].local,t*1.01,.32),phase:d*.137%1,speed:.16+d%5*.04}));this.arcs=new lh(s,{base:.06,pulse:.75,far:40});for(const u of[this.arcs,this.grat])u.u.uSph.value.set(Ie.globe.x,Ie.globe.y,Ie.globe.z,1);this.spin.add(this.arcs.mesh);const r=ro(n.nyc.local,n.lon.local,t*1.012,.14,80),a=ro(n.lon.local,n.sgp.local,t*1.012,.16,120),o=new Jo([...r.slice(0,76),...a.slice(4)]).getPoints(420),l=new Jo(o);this.routeU={uHead:{value:0},uA:{value:0},uTime:{value:0},uEx:{value:new Qt(-1,-1,-1,-1)},uSph:{value:new Qt(Ie.globe.x,Ie.globe.y,Ie.globe.z,1)}},this.route=new Oe(new Sl(l,420,.016,6,!1),new Je({uniforms:this.routeU,transparent:!0,depthWrite:!1,blending:ri,vertexShader:"uniform vec4 uSph; varying vec2 vUv; varying float vFace; void main(){ vUv = uv; vec3 wp = (modelMatrix*vec4(position,1.)).xyz; vFace = dot(normalize(wp - uSph.xyz), normalize(cameraPosition - wp)); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uHead, uA, uTime; uniform vec4 uEx; varying vec2 vUv; varying float vFace;
        void main(){ vec2 fc = gl_FragCoord.xy; if (fc.x > uEx.x && fc.x < uEx.z && fc.y > uEx.y && fc.y < uEx.w) discard; float x = vUv.x; float lit = step(x, uHead); float dh = (x - uHead) * 26.; float head = exp(-dh*dh);
          float flow = .5 + .5*sin(x*160. - uTime*6.);
          float rp = fract(uTime * .22); float dr = (x - rp) * 18.; float pulse = step(.999, uHead) * (dr > 0. ? exp(-dr*dr*3.) : exp(dr*.8));
          float plan = (1. - lit) * step(.5, fract(x * 110.)) * .62; float a = (.12 * lit + .02 + plan + lit*(.55 + .25*flow) + head*1.5*(1. - step(.999, uHead)) + pulse*1.4) * uA * smoothstep(.05, .26, vFace);
          vec3 c = mix(vec3(0., .85, .59), vec3(.6, 1., .84), clamp(head + pulse + lit*.2 + (1. - lit)*.85, 0., 1.));   // the planned leg: mint dashes above the land dots
          gl_FragColor = vec4(c*a, a); }`})),this.spin.add(this.route);const c=new Fe().setFromPoints(this.hubs.map(u=>u.local));c.setAttribute("aSel",new he(this.hubs.map(()=>0),1)),this.hubPts=new iu(c,new Je({uniforms:{uA:{value:1},uPx:{value:900},uTime:{value:0},...Qn},transparent:!0,depthWrite:!1,blending:ri,vertexShader:Al+"attribute float aSel; uniform float uPx; varying float vS; varying float vPx; void main(){ vS=aSel; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; float lift; gl_Position = mpInteract(gl_Position, .35, lift); gl_PointSize = (2.2 + aSel*1.6) * uPx / -mv.z * .05; vPx = gl_PointSize; }",fragmentShader:"uniform float uA; uniform float uTime; varying float vS; varying float vPx; void main(){ float d=length(gl_PointCoord-.5)*vPx; float ph=fract(uTime*.6); float core=clamp(max(.1*vPx,1.5)-d+.5,0.,1.); float rr=(.22+.18*ph)*vPx, lw=max(.045*vPx,1.2); float ring=clamp(lw*.5-abs(d-rr)+.5,0.,1.)*(1.-ph); float a=(core*1.4+ring*.8)*uA; if(a<.004) discard; gl_FragColor=vec4(mix(vec3(0.,.85,.59),vec3(.85,1.,.94),core)*a,a); }"})),this.spin.add(this.hubPts),this.drag=0,this.dragVel=0,this._v=new I,this._n=new I,this._c=new I}update(t,e,n,s,r){this.spin.rotation.y=e+this.drag,this.group.rotation.x=n;const a=Math.max(.001,s);this.body.scale.setScalar(a),this.atmo.material.uniforms.uA.value=s,this.grat.u.uAlpha.value=s,this.arcs.u.uAlpha.value=s*.9,this.routeU.uA.value=s,this.routeU.uHead.value=r,this.routeU.uTime.value=t,this.hubPts.material.uniforms.uA.value=s,this.hubPts.material.uniforms.uTime.value=t,[this.grat,this.arcs].forEach(o=>o.u.uTime.value=t),this.group.visible=s>.001}setExclusion(t,e,n,s){for(const r of[this.routeU.uEx.value,this.arcs.u.uEx.value,this.grat.u.uEx.value])r.set(t,e,n,s)}project(t,e,n){return this.group.updateMatrixWorld(),t.getWorldPosition(this._c),this.hubs.map(s=>{const r=this._v.copy(s.local).applyMatrix4(this.spin.matrixWorld),a=this._n.copy(r).sub(this.group.position).normalize(),o=this._c.clone().sub(r).normalize(),l=a.dot(o);return r.project(t),{id:s.id,x:(r.x*.5+.5)*e,y:(-r.y*.5+.5)*n,front:l}})}}const ir=[{code:"USD",sym:"$",name:"United States",rail:"Fedwire · RTP",settle:"Instant",rate:1,vol:"$2.41B",bal:"$412,906"},{code:"EUR",sym:"€",name:"Eurozone",rail:"SEPA Instant",settle:"T+0",rate:.9214,vol:"€1.12B",bal:"€12,907"},{code:"GBP",sym:"£",name:"United Kingdom",rail:"Faster Payments",settle:"Instant",rate:.7861,vol:"£640M",bal:"£48,210"},{code:"JPY",sym:"¥",name:"Japan",rail:"Zengin",settle:"T+0",rate:151.32,vol:"¥92.4B",bal:"¥3,906,400"},{code:"SGD",sym:"S$",name:"Singapore",rail:"FAST",settle:"Instant",rate:1.3194,vol:"S$880M",bal:"S$71,450"},{code:"BRL",sym:"R$",name:"Brazil",rail:"PIX",settle:"Instant",rate:5.0412,vol:"R$1.9B",bal:"R$31,220"},{code:"CHF",sym:"Fr",name:"Switzerland",rail:"SIC",settle:"T+0",rate:.8823,vol:"Fr410M",bal:"Fr22,180"},{code:"INR",sym:"₹",name:"India",rail:"UPI · IMPS",settle:"Instant",rate:83.41,vol:"₹38.6B",bal:"₹1,204,600"}];function y_(i,t,e){const n=new fs;n.absarc(0,0,i-e,0,Math.PI*2,!1);const s=new ma(n,{depth:t-2*e,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:4,curveSegments:72});s.center();const r=s.attributes.position,a=s.attributes.uv,o=s.groups[0],l=s.groups[1],c=o.count/2;for(let u=o.start;u<o.start+o.count;u++){const f=r.getZ(u)>0,d=(r.getX(u)+i)/(2*i),h=(r.getY(u)+i)/(2*i);a.setXY(u,f?d:1-d,h)}return s.clearGroups(),s.addGroup(o.start+c,c,0),s.addGroup(o.start,c,0),s.addGroup(l.start,l.count,1),s}function M_(i,t){const[n,s]=hn(512,512),[r,a]=hn(512,512),[o,l]=hn(512,512);s.fillStyle="#121916",s.fillRect(0,0,512,512),a.fillStyle="rgb(110,110,110)",a.fillRect(0,0,512,512),l.fillStyle="#000",l.fillRect(0,0,512,512);const c=nr(i.code.charCodeAt(0)*7);for(let d=0;d<160;d++){const h=c()*512*.5;a.strokeStyle=`rgba(${c()<.5?255:0},${c()<.5?255:0},${c()<.5?255:0},.06)`,a.lineWidth=1,a.beginPath(),a.arc(512/2,512/2,h,0,6.283),a.stroke()}a.lineWidth=14,a.strokeStyle="rgb(220,220,220)",a.beginPath(),a.arc(512/2,512/2,512*.44,0,6.283),a.stroke(),s.lineWidth=14,s.strokeStyle="#59625f",s.beginPath(),s.arc(512/2,512/2,512*.44,0,6.283),s.stroke();for(let d=0;d<64;d++){const h=d/64*6.283,g=512/2+Math.cos(h)*512*.385,v=512/2+Math.sin(h)*512*.385;a.fillStyle="rgb(200,200,200)",a.beginPath(),a.arc(g,v,3.2,0,6.283),a.fill(),s.fillStyle="#3c4542",s.beginPath(),s.arc(g,v,3.2,0,6.283),s.fill()}const u=i.sym.length>1?190:250;for(const[d,h,g]of[[a,"rgb(255,255,255)",4],[s,"#c9d2ce",0],[l,"#00d996",0]])d.save(),d.font=`600 ${u}px Archivo, Geist, sans-serif`,d.textAlign="center",d.textBaseline="middle",g&&(d.filter=`blur(${g}px)`),d===l?(d.lineWidth=3,d.strokeStyle=h,d.strokeText(i.sym,512/2,512/2+8)):(d.fillStyle=h,d.fillText(i.sym,512/2,512/2+8)),d.restore();s.font='500 30px "Geist Mono", monospace',s.textAlign="center",s.fillStyle="#7d8a85",s.letterSpacing="8px",s.fillText(i.code,512/2+4,512*.78);const f=(d,h)=>{const g=new sa(d);return g.colorSpace=h?ln:Nn,g.anisotropy=t.capabilities.getMaxAnisotropy(),g};return{map:f(n,!0),normal:f(wl(a,512,512,2.4),!1),emis:f(o,!0)}}class gx{constructor(t){this.group=new si,this.group.position.copy(Ie.liq);const e=y_(.62,.13,.025),n=new Oi({color:new kt(.78,.82,.8),metalness:1,roughness:.2,envMapIntensity:1.7});n.onBeforeCompile=d=>{d.fragmentShader=d.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = min(outgoingLight, vec3(.8));
#include <opaque_fragment>`)},n.customProgramCacheKey=()=>"mp-coin-rim",this.coins=ir.map((d,h)=>{const g=M_(d,t),v=new Oi({map:g.map,normalMap:g.normal,metalness:.9,roughness:.38,emissiveMap:g.emis,emissive:new kt(0,1,.7),emissiveIntensity:.6,clearcoat:.5,clearcoatRoughness:.3,envMapIntensity:1.35}),m=new Oe(e,[v,n]);m.userData={i:h,c:d,face:v,sel:0};const p=new si;return p.add(m),this.group.add(p),p});const s=ir.length,r=nr(77);this.A=this.coins.map((d,h)=>{const g=Math.PI/2-h/s*Math.PI*2;return new I(Math.cos(g)*2.75,Math.sin(g)*2.75,0)}),this.B=this.coins.map((d,h)=>new I((h%4-1.5)*1.75,h<4?.88:-.95,0)),this.C=this.coins.map((d,h)=>new I((r()-.5)*7.5,(r()-.5)*4.2,(r()-.5)*5-(h===0?-1:0))),this.C[0].set(0,.1,1.2);const a=[];for(let d=0;d<s;d++)for(let h=d+1;h<s;h++)((d+h)%3!==2||d===0)&&a.push([d,h]);this.pairs=a;const o=24,l=new Float32Array(a.length*o*2*3),c=new Float32Array(a.length*o*2),u=new Float32Array(a.length*o*2);a.forEach((d,h)=>{for(let g=0;g<o;g++){const v=(h*o+g)*2;c[v]=g/o,c[v+1]=(g+1)/o,u[v]=u[v+1]=r()}});const f=new Fe;f.setAttribute("position",new Ge(l,3)),f.setAttribute("aT",new Ge(c,1)),f.setAttribute("aPh",new Ge(u,1)),this.linkU={uA:{value:0},uTime:{value:0},uSel:{value:0}},this.links=new nu(f,new Je({uniforms:this.linkU,transparent:!0,depthWrite:!1,blending:ri,vertexShader:"attribute float aT; attribute float aPh; varying float vT; varying float vPh; void main(){ vT=aT; vPh=aPh; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform float uA; uniform float uTime; varying float vT; varying float vPh; void main(){ float x=fract(uTime*.25+vPh); float dx=(vT-x)*12.; float p=exp(-dx*dx); float a=(.2+p*1.0)*uA*smoothstep(0.,.08,vT)*smoothstep(1.,.92,vT); gl_FragColor=vec4(mix(vec3(0.,.85,.59),vec3(.8,1.,.92),p)*a,a); }"})),this.links.frustumCulled=!1,this.group.add(this.links),this.SEG=o,this.sel=1,this.hover=-1,this.group.visible=!1,this._v=new I}update(t,e,n,s){if(this.group.visible=e>.001,!this.group.visible)return;const r=s*s;this.group.position.set(Ie.liq.x,Ie.liq.y+(Ie.final.y-Ie.liq.y)*r,Ie.liq.z+(Ie.final.z-Ie.liq.z)*r*.92);const a=Dt(0,1,n),o=Dt(1,2,n);this.coins.forEach((u,f)=>{const d=this._v.copy(this.B[f]).lerp(this.A[f],a).lerp(this.C[f],o);d.y+=Math.sin(t*.8+f*1.7)*.06;const h=u.children[0],g=f===this.sel?1:0;h.userData.sel+=(g-h.userData.sel)*.08;const v=f===this.hover?1:0;d.z+=h.userData.sel*.9,d.y>0&&(d.y*=1-Math.sin(Math.PI*s)*.5),d.multiplyScalar(1-s*.9),u.position.copy(d);const m=(1+h.userData.sel*.22+v*.08)*(1-s*.3)*Math.min(1,e*1.4);u.scale.setScalar(Math.max(.001,m)),h.rotation.y=Math.sin(t*.4+f)*.35+(1-a)*0+o*Math.sin(f*2.1)*.5+h.userData.sel*Math.sin(t*.9)*.25,h.rotation.x=Math.sin(t*.3+f*.6)*.12,h.userData.face.emissiveIntensity=.75+(this.boost||0)+h.userData.sel*1+v*.5});const l=this.links.geometry.attributes.position.array,c=this.SEG;this.pairs.forEach(([u,f],d)=>{const h=this.coins[u].position,g=this.coins[f].position;for(let v=0;v<c;v++)for(let m=0;m<2;m++){const p=(v+m)/c,M=((d*c+v)*2+m)*3,_=Math.sin(Math.PI*p)*.6;l[M]=js(h.x,g.x,p),l[M+1]=js(h.y,g.y,p)+_*.3,l[M+2]=js(h.z,g.z,p)-_*.5-.15}}),this.links.geometry.attributes.position.needsUpdate=!0,this.linkU.uA.value=e*(.62+o*.5)*(1-s),this.linkU.uTime.value=t}pick(t){const e=t.intersectObjects(this.coins.map(n=>n.children[0]),!1);return e.length?e[0].object.userData.i:-1}}const bt=(i,t=document)=>t.querySelector(i),Le=(i,t=document)=>[...t.querySelectorAll(i)],Bi=i=>1-Math.pow(1-cn(i),3),rl=(i,t=0)=>i.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function S_(){Le("[data-split]").forEach(i=>{if(i.dataset.done)return;i.dataset.done=1;const t=i.dataset.split,e=i.textContent;i.textContent="",i.setAttribute("aria-label",e.trim()),t==="words"?e.split(/(\s+)/).forEach(n=>{if(/^\s+$/.test(n))i.append(" ");else if(n){const s=document.createElement("span");s.className="wd",s.setAttribute("aria-hidden","true"),s.textContent=n,i.append(s)}}):e.split(/(\s+)/).forEach(n=>{if(/^\s+$/.test(n)){i.append(" ");return}const s=document.createElement("span");s.style.display="inline-block",s.style.whiteSpace="nowrap",s.setAttribute("aria-hidden","true"),[...n].forEach(r=>{const a=document.createElement("span");a.className="chr",a.textContent=r,s.append(a)}),i.append(s)})})}const In=[["USD",.38,"#00D996"],["EUR",.21,"#4CF0B3"],["SGD",.14,"#9AFFD3"],["GBP",.11,"#2BAF84"],["BRL",.09,"#1F7A5E"],["USDC",.07,"#C9F5E3"]],as=[268,281,276,294,309,301,327,342,338,366,389,412.9],ch=["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"];function b_(){const i=bt("#odo"),t="412,906";i.innerHTML="";const e=document.createElement("span");e.className="odo__cur",e.textContent="$",i.append(e);const n=[];[...t].forEach(R=>{if(/\d/.test(R)){const D=document.createElement("span");D.className="odo__d";const N=document.createElement("span");N.className="odo__s";for(let G=0;G<30;G++){const W=document.createElement("span");W.textContent=G%10,N.append(W)}D.append(N),i.append(D),n.push({s:N,v:+R})}else{const D=document.createElement("span");D.className="odo__c",D.textContent=R,i.append(D)}});const s=document.createElement("span");s.className="odo__small",s.textContent=".37",i.append(s);const r=bt("#donut"),a=2*Math.PI*48;let o=0;r.innerHTML='<circle cx="60" cy="60" r="48" stroke="rgba(244,248,246,.06)" stroke-width="9" fill="none"/>'+In.map(([R,D,N],G)=>{const W=`<circle data-i="${G}" cx="60" cy="60" r="48" stroke="${N}" stroke-dasharray="0 ${a}" stroke-dashoffset="${-o*a}" />`;return o+=D,W}).join(""),bt("#legend").innerHTML=In.map(([R,D,N],G)=>`<li data-i="${G}"><i style="background:${N}"></i>${R}<b>${Math.round(D*100)}%</b></li>`).join("");const l=R=>{Le("#donut circle[data-i]").forEach(D=>{D.style.opacity=R<0||+D.dataset.i===R?1:.25,D.style.strokeWidth=+D.dataset.i===R?12:9}),Le("#legend li").forEach(D=>D.classList.toggle("is-on",+D.dataset.i===R)),bt("#donutV").textContent=R<0?"6":Math.round(In[R][1]*100)+"%",bt("#donutK").textContent=R<0?"pools":In[R][0]};Le("#donut circle[data-i]").forEach(R=>{R.style.pointerEvents="stroke",R.style.cursor="pointer",R.addEventListener("mouseenter",()=>l(+R.dataset.i)),R.addEventListener("mouseleave",()=>l(-1))}),Le("#legend li").forEach(R=>{const D=+R.dataset.i;R.tabIndex=0,R.setAttribute("aria-label",`${In[D][0]} ${Math.round(In[D][1]*100)}% of liquidity`),R.addEventListener("focus",()=>l(D)),R.addEventListener("blur",()=>l(-1)),R.addEventListener("mouseenter",()=>{const N=+R.dataset.i;Le("#donut circle[data-i]").forEach(G=>G.style.opacity=+G.dataset.i===N?1:.25),bt("#donutV").textContent=Math.round(In[N][1]*100)+"%",bt("#donutK").textContent=In[N][0]}),R.addEventListener("mouseleave",()=>{Le("#donut circle[data-i]").forEach(N=>N.style.opacity=1),bt("#donutV").textContent="6",bt("#donutK").textContent="pools"})});const c=bt("#flowbars"),u=[5.2,6.1,7.4,5.8,6.6,8.2,7.1,6.4,7.9,8.8,6.9,7.6,9.4,8.1],f=[4.1,3.6,5.2,4.4,3.9,4.8,4.2,5.6,3.8,4.5,4.9,3.7,4.6,4.3];c.innerHTML='<line x1="0" y1="45" x2="280" y2="45" stroke="rgba(244,248,246,.12)" stroke-width="1" vector-effect="non-scaling-stroke"/>'+u.map((R,D)=>`<rect data-k="in" x="${D*20+4}" width="11" rx="2" fill="#00D996" data-v="${R}"/><rect data-k="out" x="${D*20+4}" width="11" rx="2" fill="rgba(137,154,147,.42)" data-v="${f[D]}"/>`).join("");const d=document.createElement("div");d.className="fb-tip mono",bt(".mod--flow").append(d),d.setAttribute("aria-live","polite");const h=R=>{c._k=R,d.textContent=`Day ${R+1} · in $${(u[R]*1.2).toFixed(1)}k · out $${(f[R]*1.1).toFixed(1)}k`,d.style.opacity=1,Le("#flowbars rect").forEach((D,N)=>D.style.opacity=Math.floor(N/2)===R?1:.35)},g=()=>{d.style.opacity=0,Le("#flowbars rect").forEach(R=>R.style.opacity=1)};c.addEventListener("mousemove",R=>{const D=c.getBoundingClientRect();h(Math.max(0,Math.min(13,Math.floor((R.clientX-D.left)/D.width*14))))}),c.addEventListener("mouseleave",()=>{document.activeElement!==c&&g()}),c.setAttribute("tabindex","0"),c.setAttribute("role","img"),c.removeAttribute("aria-hidden"),c.setAttribute("aria-label","Daily flows over 14 days; use the arrow keys to read each day"),c.addEventListener("focus",()=>h(c._k??13)),c.addEventListener("blur",g),c.addEventListener("keydown",R=>{(R.key==="ArrowRight"||R.key==="ArrowLeft")&&(R.preventDefault(),h(Math.max(0,Math.min(13,(c._k??13)+(R.key==="ArrowRight"?1:-1)))))});const v=600,m=200,p=430,M=250,_=as.map((R,D)=>[D/(as.length-1)*v,m-(R-M)/(p-M)*(m-18)-6]);let x=`M${_[0][0]},${_[0][1]}`;for(let R=1;R<_.length;R++){const[D,N]=_[R-1],[G,W]=_[R],nt=(D+G)/2;x+=` C${nt},${N} ${nt},${W} ${G},${W}`}const U=[0,1,2,3].map(R=>`<line x1="0" x2="${v}" y1="${20+R*52}" y2="${20+R*52}" stroke="rgba(244,248,246,.06)" stroke-dasharray="3 6" vector-effect="non-scaling-stroke"/>`).join("");bt("#perfSvg").innerHTML=`<defs><linearGradient id="pg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00D996" stop-opacity=".32"/><stop offset="1" stop-color="#00D996" stop-opacity="0"/></linearGradient><clipPath id="pclip"><rect id="pclipR" x="-4" y="-20" width="0" height="260"/></clipPath></defs>${U}<g clip-path="url(#pclip)"><path d="${x} L${v},${m} L0,${m} Z" fill="url(#pg)"/></g><path id="perfLine" d="${x}" fill="none" stroke="#9AFFD3" stroke-width="2" vector-effect="non-scaling-stroke" clip-path="url(#pclip)"/><circle id="perfDot" r="4.5" fill="#9AFFD3" cx="${_[11][0]}" cy="${_[11][1]}"/>`;const A=bt("#perfLine"),L=1,P=bt("#perf"),E=bt("#perfTip"),y=R=>{P._i=R,E.style.left=R/11*100+"%",E.classList.toggle("flip",R>6),E.style.setProperty("--ty",_[R][1]/m*100+"%");const D=R?(as[R]/as[R-1]-1)*100:0;E.dataset.v=`${ch[R]} · $${as[R].toFixed(1)}k · ${R?(D>=0?"+":"−")+Math.abs(D).toFixed(1)+"% MoM":"start"}`,bt("#perfV").textContent=`${ch[R]} · $${as[R].toFixed(1)}k`,P.classList.add("is-hover")},w=()=>{bt("#perfV").textContent="Nov · $412.9k",P.classList.remove("is-hover")};return P.addEventListener("mousemove",R=>{const D=P.getBoundingClientRect();y(Math.round(cn((R.clientX-D.left)/D.width)*11))}),P.addEventListener("mouseleave",()=>{document.activeElement!==P&&w()}),P.tabIndex=0,P.setAttribute("aria-label","Performance over 12 months; use the arrow keys to read each month"),bt("#perfV").setAttribute("aria-live","polite"),P.addEventListener("focus",()=>y(P._i??11)),P.addEventListener("blur",w),P.addEventListener("keydown",R=>{(R.key==="ArrowRight"||R.key==="ArrowLeft")&&(R.preventDefault(),y(Math.max(0,Math.min(11,(P._i??11)+(R.key==="ArrowRight"?1:-1)))))}),{digits:n,L,line:A}}function E_(i){const t=bt("#hubs");return t.innerHTML=Cl.filter(e=>["nyc","lon","sgp","tyo","sao","dxb"].includes(e.id)).map(e=>`<button class="hub" data-id="${e.id}" data-cursor="View" aria-label="${e.name} — ${e.role}"><span class="hub__l">${e.name}</span></button>`).join(""),Le(".hub",t).forEach(e=>e.addEventListener("click",()=>i(e.dataset.id))),Object.fromEntries(Le(".hub",t).map(e=>[e.dataset.id,e]))}function T_(i){const t=Cl.find(n=>n.id===i);if(!t)return;const e=bt("#hubcard");e.hidden=!1,bt("#hubK").textContent=t.role,bt("#hubName").textContent=t.name,bt("#hubDl").innerHTML=`<dt>24h volume</dt><dd>${t.vol}</dd><dt>Rails</dt><dd>${t.rails}</dd><dt>Latency</dt><dd>${t.lat_ms}</dd><dt>Status</dt><dd style="color:var(--g)">Operational</dd>`,Le(".hub").forEach(n=>n.classList.toggle("is-sel",n.dataset.id===i))}const ao=["Ops","Vendors","Infra","Payroll","Travel","Tax","Other"],w_=[5.8,9.1,7.4,18.4,3.3,2.9,1.6],Xr=[[6.2,9.8,7.1,18.4,3.9,2.6,1.9],[7.4,11.6,6.6,18.4,5.2,2.2,2.4],[6.8,13.7,7.9,18.4,4.1,3.4,2.1]],hh={Ops:["Ops steady · −3% vs trend","No action needed"],Vendors:["Vendors +18% above trend","Flagged · 3 invoices · review suggested"],Infra:["Infra +9% · GPU reservations","Forecast within budget"],Payroll:["Payroll locked · 41 entities","Next run in 4 days"],Travel:["Travel −21% vs last cycle","Policy savings $1.1k"],Tax:["Tax provision +$0.8k","Q4 estimate updated"],Other:["Other spend nominal","12 merchants · auto-categorised"]};function A_(i){bt("#bars").innerHTML=ao.map((n,s)=>`<div class="bar" data-i="${s}" tabindex="0" role="button" aria-label="${n}" data-cursor="Inspect"><span class="bar__v"></span><div class="bar__g"></div><div class="bar__f"></div><span class="bar__l" data-s="${["Ops","Vend","Infra","Pay","Trav","Tax","Oth"][s]}">${n}</span></div>`).join("");const t=[["Burn rate",[52,55,54,58,57,61,60,63,61],"$61.3k/wk"],["Vendor spend",[8,9,9,10,11,10,12,13,13.7],"+18%"],["Card spend",[14,13,13,12,12,11,11,10,10.2],"−21%"]];bt("#trends").innerHTML=t.map(([n,s,r],a)=>{const o=Math.max(...s),l=Math.min(...s),c=s.map((u,f)=>`${f?"L":"M"}${(f/(s.length-1)*110).toFixed(1)},${(22-(u-l)/(o-l)*20).toFixed(1)}`).join(" ");return`<li><span>${n}</span><svg viewBox="0 0 110 24" preserveAspectRatio="none"><path class="tr" d="${c}" fill="none" stroke="${a===2?"#899A93":"#00D996"}" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg><b style="color:${a===1?"var(--mint)":a===2?"var(--mut)":"var(--w)"}">${r}</b></li>`}).join(""),Le("#trends .tr").forEach(n=>{const s=n.getTotalLength();n.style.strokeDasharray=s,n.style.strokeDashoffset=s,n._L=s});const e=n=>{i.cat=n,bt("#anoT").textContent=hh[ao[n]][0],bt("#anoS").textContent=hh[ao[n]][1],i.onCat&&i.onCat(n)};Le("#bars .bar").forEach(n=>{n.addEventListener("click",()=>e(+n.dataset.i)),n.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e(+n.dataset.i))})}),e(1)}function C_(i){bt("#fx").innerHTML=ir.slice(1).map((t,e)=>`<button class="fx__r" role="listitem" data-i="${e+1}" data-cursor="Select"><span class="fx__c">${t.code}</span><span class="fx__n">${t.name}</span><span class="fx__v" data-rate="${t.rate}">${t.rate.toFixed(t.rate>20?2:4)}</span><span class="fx__d"></span></button>`).join(""),Le(".fx__r").forEach(t=>t.addEventListener("click",()=>i(+t.dataset.i)))}function $r(i,t){const e=ir[i];t=t??e.rate,bt("#ccyCode").textContent=e.code,bt("#ccyName").textContent=e.name,bt("#ccyDl").innerHTML=`<dt>Rate vs USD</dt><dd id="ccyRate">${t.toFixed(e.rate>20?2:4)}</dd><dt>Rail</dt><dd>${e.rail}</dd><dt>Settlement</dt><dd>${e.settle}</dd><dt>24h volume</dt><dd>${e.vol}</dd><dt>Balance</dt><dd>${e.bal}</dd>`,Le(".fx__r").forEach(n=>n.setAttribute("aria-current",+n.dataset.i===i))}const Ln=(i,t)=>{i&&i._t!==t&&(i.style.transform=t,i._t=t)},tn=(i,t)=>{i&&i._o!==t&&(i.style.opacity=t,i._o=t)},ca=(i,t,e)=>{const n=`inset(${(t*100).toFixed(2)}% 0% ${(e*100).toFixed(2)}% 0%)`;i._c!==n&&(i.style.clipPath=n,i._c=n)},R_=matchMedia("(prefers-reduced-motion: reduce)").matches||new URLSearchParams(location.search).has("rm"),P_=()=>R_||document.documentElement.classList.contains("static");function yu(i,t,e,n){const s=performance.now(),r=Math.min(.1,Math.max(0,(s-i.t)/1e3));i.t=s,(i.show?t<.12:t>.3)&&(i.show=!i.show),(i.out?e<.3:e>.5)&&(i.out=!i.out);const a=i.show?i.out?-1:0:1;return a===0||i.side!==a&&i.k>0?i.k=Math.min(n,i.k+r):(i.side=a,i.k=Math.max(0,i.k-r*1.25)),i.k>=n&&a!==0&&(i.side=a),P_()&&(i.k=a===0?n:0,i.side=a||i.side),i.k}const Mu=()=>({k:0,side:1,show:!1,out:!1,t:performance.now()});function bn(i,t,e,n=.035,s=1){const r=i._chr||(i._chr=Le(".chr, .wd",i)),a=r.length,o=i._rv||(i._rv=Mu()),l=.55,c=Math.min(.045,n*.9),u=l+c*(a-1);yu(o,t,e,u);const f=o.side>0?135*s:-140;r.forEach((d,h)=>{const g=Bi(cn((o.k-h*c)/l));Ln(d,`translate3d(0,${((1-g)*f).toFixed(2)}%,0)`)})}function uh(i,t,e){bn(bt("#treTitle .line:first-child"),be(3.9,4.35,i),be(6.55,6.95,i)),bn(bt("#treTitle .line:last-child"),be(4,4.45,i),be(6.6,7,i)),tn(bt("#c-treasury .sec-head__idx"),Dt(3.9,4.2,i)*(1-Dt(6.6,6.9,i)));const n=bt("#tre"),s=n._hero||(n._hero=bt(".tre__hero",n)),r=n._mods||(n._mods=Le(".mod",n)),a=n._box||(n._box=bt(".tre__mods",n)),o=yu(t.rv||(t.rv=Mu()),be(4,4.3,i),be(6.45,6.85,i),1.3),l=(M,_)=>Bi(cn((o-M)/_));if(ca(s,1-l(0,.5),0),tn(a,l(.05,.35)),r.forEach((M,_)=>ca(M,1-l(.1+_*.09,.45),0)),e){const M=n._head||(n._head=bt("#c-treasury .sec-head"));(!n._ovN||--n._ovN<=0)&&(n._ovN=30,n._ov=Math.max(0,n.offsetTop+n.offsetHeight+22-innerHeight));const _=(-n._ov*Bi(be(4.55,6.1,i))).toFixed(1);Ln(n,`translate3d(0,${_}px,0)`),Ln(M,`translate3d(0,${_}px,0)`)}const c=l(.12,.7);t.digits.forEach((M,_)=>{const x=Bi(cn(c*1.35-_*.06)),U=(20+M.v)*x;Ln(M.s,`translate3d(0,${(-U).toFixed(3)}em,0)`)});const u=Dt(5.35,5.9,i)>.5;if(t.beat!==u){t.beat=u;const M=u?"413,218":"412,906";let _=0;[...M].forEach(x=>{/\d/.test(x)&&(t.digits[_].v=+x,_++)}),bt("#odo").setAttribute("aria-label","$"+M+".37"),bt("#yieldChip").classList.toggle("is-on",u),bt("#treSync").textContent=u?"Synced just now":"Synced 8s ago"}bt("#odo").classList.toggle("odo--live",c>=1),c>=1&&t.digits.forEach(M=>Ln(M.s,`translate3d(0,${(-(t.beat?M.v+10:20+M.v)).toFixed(3)}em,0)`));let f=0;const d=2*Math.PI*48,h=l(.25,.7);Le("#donut circle[data-i]").forEach((M,_)=>{const x=Math.max(0,In[_][1]*d*h-2.5);M.setAttribute("stroke-dasharray",`${x} ${d}`),M.setAttribute("stroke-dashoffset",-f*d*h),f+=In[_][1]});const g=l(.32,.65);Le("#flowbars rect").forEach((M,_)=>{const x=Math.floor(_/2),U=+M.dataset.v*Bi(cn(g*1.5-x*.035))*4.4;M.dataset.k==="in"?(M.setAttribute("y",45-U),M.setAttribute("height",U)):(M.setAttribute("y",46),M.setAttribute("height",U))});const v=l(.42,.85),m=bt("#pclipR");m&&m.setAttribute("width",610*v),tn(bt("#perfDot"),Dt(.92,1,v));const p=l(.3,.6);Le("#c-treasury [data-count]").forEach(M=>{const _=+M.dataset.count,x=+(M.dataset.dec||0);M.textContent=(M.dataset.prefix||"")+rl(_*p,x)})}function dh(i,t,e){bn(bt("#inTitle .line:first-child"),be(11,11.5,i),be(12.95,13.3,i));const n=bt("#numbersWord");bn(bt("#inThe"),be(11.15,11.6,i),be(12.95,13.3,i)),bn(n,be(11.2,11.7,i),0),tn(n,1-Dt(13.22,13.3,i));const s=bt("#depthCap"),r=be(13.35,14.15,i),a=Math.sin(Math.PI*r);tn(s,+(r<.5?Math.pow(a,.7):Math.pow(a,1.8)).toFixed(3)),Ln(s,`translate3d(0,${((.5-r)*30-Math.max(0,r-.5)*90).toFixed(1)}px,0)`),s.style.filter=r<.5?`blur(${((1-a)*6).toFixed(2)}px)`:"none",tn(bt("#c-intel .sec-head__idx"),Dt(11,11.3,i)*(1-Dt(12.95,13.2,i)));const o=bt("#intel");ca(o,1-Dt(11.35,11.85,i),Dt(12.85,13.2,i));const l=Dt(11.9,12.1,i)+Dt(12.5,12.7,i),c=Math.min(1,Math.floor(l)),u=l-c,f=Xr[c].map((M,_)=>js(M,Xr[c+1][_],u)),d=Bi(be(11.5,12,i)),h=o._bars||(o._bars=Le(".bar",o)),g=[w_,Xr[0],Xr[1]],v=Dt(11.75,12.05,i);h.forEach((M,_)=>{M.style.setProperty("--p",(js(g[c][_],g[c+1][_],u)/20*d).toFixed(4)),M.style.setProperty("--ga",v.toFixed(3))}),h.forEach((M,_)=>{M.style.setProperty("--h",(f[_]/20*d).toFixed(4)),M.querySelector(".bar__v").textContent="$"+rl(f[_]*1e3),M.classList.toggle("is-dim",t.cat!==void 0&&t.cat!==_),M.classList.toggle("is-sel",t.cat===_)});const m=f.reduce((M,_)=>M+_,0)*1e3*(61307/52e3);Le("#trends .tr").forEach((M,_)=>{M.style.strokeDashoffset=M._L*(1-Bi(be(11.55+_*.08,12+_*.08,i)))}),bt("#outNum").textContent="$"+rl(m*d);const p=Math.round(l);t.wk!==p&&(t.wk=p,bt("#wkLabel").textContent="Week "+(32+p),Le(".seg button").forEach(M=>M.setAttribute("aria-selected",+M.dataset.wk===p)),bt("#outDelta").textContent=["+3.1% vs last week","+8.6% vs last week","−2.4% vs last week"][p],bt("#lgCur").textContent="W"+(32+p),bt("#lgPrev").textContent="W"+(31+p))}function fh(i){bn(bt("#vaTitle .line:first-child"),be(14.55,15.05,i),be(17.4,17.8,i)),bn(bt("#vaTitle .line:last-child"),be(14.75,15.2,i),be(17.45,17.85,i)),tn(bt("#c-vault .sec-head__idx"),Dt(14.55,14.85,i)*(1-Dt(17.4,17.7,i))),Le("#specs li").forEach((n,s)=>{const r=Dt(15.1+s*.22,15.5+s*.22,i),a=Dt(17.3,17.6,i);ca(n,0,0),tn(n,r*(1-a)),Ln(n,`translate3d(${((1-r)*30-a*30).toFixed(1)}px,0,0)`)});const t=i<15.4?"Core sealed":i<16.4?"Unsealing · shards verified 3/5":i<17.5?"Vault open · core online":"Encrypting connections",e=bt("#vaultStateT");e.textContent!==t&&(e.textContent=t),tn(bt("#vaultState"),Dt(14.8,15.1,i)*(1-Dt(17.8,18.05,i))),tn(bt("#c-vault .certs"),Dt(15.6,16,i)*(1-Dt(17.3,17.6,i)))}function ph(i,t){bn(bt("#liTitle .line:first-child"),be(18.95,19.45,i),be(21.05,21.4,i)),bn(bt("#liTitle .line:last-child"),be(19.1,19.55,i),be(21.1,21.45,i)),tn(bt("#c-liquidity .sec-head__idx"),Dt(18.95,19.25,i)*(1-Dt(21.05,21.3,i))),Le(".fx__r").forEach((n,s)=>{const r=Dt(19.2+s*.06,19.5+s*.06,i),a=Dt(21,21.3,i);tn(n,r*(1-a)),Ln(n,`translate3d(0,${((1-r)*14).toFixed(1)}px,0)`)});const e=bt("#ccy");tn(e,Dt(19.4,19.7,i)*(1-Dt(21,21.3,i))),tn(bt(".fx__h"),Dt(19.15,19.45,i)*(1-Dt(21,21.3,i)))}const mh=(i,t)=>{const e=i.offsetTop+i.offsetHeight;return Dt(e+32,e-56,t)};function gh(i,t=1/0){Le("#fuTitle .line").forEach((o,l)=>bn(o,be(22.15+l*.12,22.7+l*.12,i),0));const e=bt("#fuTitle .serif");tn(e,Dt(22.5,22.8,i)),Ln(e,`translate3d(0,${((1-Dt(22.5,22.85,i))*40).toFixed(1)}px,0)`);const n=bt("#fuTitle"),s=mh(n,t);tn(n,1-s),Ln(n,`translate3d(0,${(-s*28).toFixed(1)}px,0)`);const r=bt("#c-future .future__cta"),a=mh(r,t);tn(r,Dt(24.2,24.7,i)*(1-a)),Ln(r,`translate3d(-50%,${((1-Dt(24.2,24.75,i))*30-a*28).toFixed(1)}px,0)`)}class L_{constructor(t){this.reduced=t,this.data={},this.anims=new Map}async load(){const t=[...document.querySelectorAll(".lottie[data-icon]")],e=[...new Set(t.map(n=>n.dataset.icon))];await Promise.all(e.map(n=>fetch(`assets/lottie/${n}.json`).then(s=>s.ok?s.json():null).then(s=>{this.data[n]=s}).catch(()=>{}))),window.lottie&&t.forEach(n=>{const s=this.data[n.dataset.icon];if(!s)return;const r=window.lottie.loadAnimation({container:n,renderer:"svg",loop:!1,autoplay:!1,animationData:JSON.parse(JSON.stringify(s)),rendererSettings:{preserveAspectRatio:"xMidYMid meet"}});r.addEventListener("DOMLoaded",()=>r.goToAndStop(r.totalFrames-1,!0)),n.setAttribute("aria-hidden","true"),this.anims.set(n,r)})}play(t){if(!t)return;const e=this.anims.get(t);!e||this.reduced||e.isPaused===!1&&e.currentFrame<e.totalFrames-2||e.goToAndPlay(0,!0)}}const Be=(i,t=document)=>t.querySelector(i),Ws=(i,t=document)=>[...t.querySelectorAll(i)],oo="http://www.w3.org/2000/svg",Su=120,D_=Su+75;class I_{constructor({reduced:t,touch:e,mobile:n,lenis:s,icons:r}){Object.assign(this,{reduced:t,touch:e,mobile:n,lenis:s,icons:r}),this.el=Be("#c-ops"),this.el&&(this.flow=Be("#opsFlow"),this.svg=Be("#opsPath"),this.track=Be(".ops__track",this.svg),this.glow=Be(".ops__glow",this.svg),this.lit=Be(".ops__lit",this.svg),this.packet=Be(".ops__packet",this.svg),this.portsG=Be(".ops__ports",this.svg),this.tapsG=Be(".ops__taps",this.svg),this.items=Ws(".sys",this.el).map((a,o)=>({el:a,i:o,key:a.dataset.key,cv:Be(".sys__cv",a),ping:Be(".sys__ping",a),live:Be("[data-live]",a),dl:null,ready:!1,started:!1,inView:!1,hover:0,leaveT:0,stages:Ws(".sys__stages li",a).map(l=>({li:l,a:+l.dataset.from,b:+l.dataset.to,on:!1})),paused:0,pauseAt:0})),this.counts=Ws(".ops__tally dd",this.el),this.py=0,this.ports=[],this.lastStart=0,this.inText=Be(".ops__in",this.svg),this.fixed=!1,this.top=0,this.active=!0,this._reveal(),this._preload(),this._hover(),this._live(),this.layout(),window.ResizeObserver&&new ResizeObserver(()=>this.layout()).observe(this.flow))}_reveal(){const t=[Be(".ops__head",this.el),...this.items.map(n=>n.el),Be(".ops__coda",this.el)];t.forEach(n=>Ws(".rv",n).forEach((s,r)=>s.style.setProperty("--i",r))),this.items.forEach(n=>Ws(".rv",n.el).forEach(s=>s.style.setProperty("--d","420ms")));const e=new IntersectionObserver(n=>n.forEach(s=>{const r=s.target,a=this.items.find(o=>o.el===r);if(a&&a.inView!==s.isIntersecting){const o=performance.now();s.isIntersecting?a.pauseAt&&(a.paused+=o-a.pauseAt,a.pauseAt=0):a.pauseAt=o,a.inView=s.isIntersecting}if(s.intersectionRatio<.16||r.classList.contains("is-in")){a&&s.isIntersecting&&this._start(a);return}if(r.classList.add("is-in"),r.classList.contains("ops__head")&&this.icons){const o=Be(".lottie",r);o&&setTimeout(()=>this.icons.play(o),320)}a&&this._start(a)}),{threshold:[0,.16],rootMargin:"0px 0px -4% 0px"});t.forEach(n=>e.observe(n))}_start(t){if(t.started||!t.ready||this.reduced||!t.el.classList.contains("is-in"))return;t.started=!0;const e=performance.now(),n=Math.max(e+460,this.lastStart+380);this.lastStart=n,setTimeout(async()=>{try{await t.dl.stateMachineLoad(`${t.key}_states`),await t.dl.stateMachineStart(),t.running=!0,t.t0=performance.now(),t.paused=0,t.pauseAt=0,t.hover&&this._post(t,!0)}catch(s){(window.__errs||[]).push(`ops start ${t.key} ${s}`)}},n-e)}_lib(){return this.libP||(this.libP=Qr(()=>import("./dotlottie-web-BTuVRhK9.js"),[],import.meta.url).then(t=>{const e=window.__VFS["vendor/dotlottie-web/dotlottie-player.wasm"],n=!!(window.Worker&&window.OffscreenCanvas&&HTMLCanvasElement.prototype.transferControlToOffscreen)&&!new URLSearchParams(location.search).has("noworker");return t.DotLottie.setWasmUrl(e),n&&t.DotLottieWorker.setWasmUrl(e),{Player:n?t.DotLottieWorker:t.DotLottie,worker:n}})),this.libP}_preload(){const t=new IntersectionObserver(e=>e.forEach(n=>{if(!n.isIntersecting)return;const s=this.items.find(r=>r.el===n.target);t.unobserve(n.target),this._load(s)}),{rootMargin:"140% 0px"});this.items.forEach(e=>t.observe(e.el))}_fail(t,e){t.ready||t.failed||(t.failed=!0,t.el.classList.add("is-fallback"),(window.__errs||[]).push(`ops ${t.key} ${e}`))}async _bytes(t){const e=await fetch(`assets/illustrations/${t}.lottie`).catch(()=>null);if(e&&e.ok)return e.arrayBuffer();const n=await fetch(`assets/illustrations/${t}.lottie.b64.txt`).then(a=>{if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.text()}),s=atob(n.replace(/\s+/g,"")),r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a);return r.buffer}async _load(t){if(!t.loading){t.loading=!0,setTimeout(()=>{t.ready||this._fail(t,"load timeout")},12e3);try{const[{Player:e,worker:n},s]=await Promise.all([this._lib(),this._bytes(t.key)]),r=Math.min(window.devicePixelRatio||1,1.5);t.dpr=r,t.worker=n,t.dl=new e({canvas:t.cv,data:s,autoplay:!1,loop:!1,...n?{workerId:`ops-${t.i%2}`}:{},renderConfig:{autoResize:!0,devicePixelRatio:r,freezeOnOffscreen:!0}}),t.dl.addEventListener("load",async()=>{await t.dl.setFrame(this.reduced?D_:Su),t.ready=!0,t.el.classList.add("is-loaded"),t.inView&&this._start(t)}),t.dl.addEventListener("loadError",a=>this._fail(t,`loadError ${a&&a.error}`)),t.dl.addEventListener("stateMachineStateEntered",a=>{t.el.dataset.sm=/^Focused/.test(a.state||"")?"focused":"ambient"})}catch(e){this._fail(t,`load ${e}`)}}}_hover(){this.touch||this.items.forEach(t=>{const e=s=>{s.pointerType&&s.pointerType!=="mouse"||(clearTimeout(t.leaveT),t.hover++||(t.el.classList.add("is-focus"),this._post(t,!0)))},n=s=>{s.pointerType&&s.pointerType!=="mouse"||(t.hover=Math.max(0,t.hover-1),t.hover||(t.leaveT=setTimeout(()=>{t.hover||(t.el.classList.remove("is-focus"),this._post(t,!1))},140)))};[Be(".sys__plate",t.el),Be(".sys__copy",t.el)].forEach(s=>{s.addEventListener("pointerenter",e),s.addEventListener("pointerleave",n)})})}_post(t,e){if(!t.dl||!t.running)return;const n=t.cv.getBoundingClientRect(),s=n.width*t.dpr/2,r=n.height*t.dpr/2,a=e?t.dl.stateMachinePostPointerEnterEvent(s,r):t.dl.stateMachinePostPointerExitEvent(-8,-8);a&&a.catch&&a.catch(()=>{})}_live(){if(this.reduced)return;let t=1204,e=3418,n=2;const s=r=>r.toLocaleString("en-US");setInterval(()=>{document.hidden||(t=Math.round(Math.min(1320,Math.max(1080,t+(Math.random()-.5)*70))),e+=1+Math.floor(Math.random()*3),n=n>=7?0:n+1,this.items.forEach(r=>{if(!r.inView||!r.live)return;const a=r.live.dataset.live;r.live.textContent=a==="orders"?s(t):a==="matched"?s(e):a==="ago"?n:r.live.textContent}))},1400)}layout(){if(!this.el)return;const t=this.flow.getBoundingClientRect(),e=d=>{const h=d.getBoundingClientRect();return{l:h.left-t.left,r:h.right-t.left,t:h.top-t.top,b:h.bottom-t.top,w:h.width,h:h.height}},n=innerWidth>1100,s=t.left-this.el.getBoundingClientRect().left,r=n?t.width/2:-s/2,a=e(Be(".ops__tally",this.el)),o=10,l=a.t-24;this.inText&&(this.inText.setAttribute("x",(r+12).toFixed(1)),this.inText.setAttribute("y",(o+3.5).toFixed(1)),this.inText.style.display=n?"":"none"),this.sx=r,this.y0=o,this.y1=l;const c=`M${r.toFixed(1)} ${o} V${l.toFixed(1)}`;[this.track,this.glow,this.lit].forEach(d=>d.setAttribute("d",c));const u=l-o;this.total=u,this.lit.style.strokeDasharray=this.glow.style.strokeDasharray=`${u} ${u}`,this.portsG.textContent="",this.tapsG.textContent="";const f=[{x:r,y:o,r:4.5}];this.items.forEach(d=>{const h=e(Be(".sys__frame",d.el));if(e(Be(".sys__bar",d.el)),n&&d.el.classList.contains("sys--wide"))f.push({x:r,y:h.t,r:3.6,i:d.i,ping:!0}),f.push({x:r,y:h.b,r:3.6});else{const v=h.t+h.h*.3,m=n?h.l>r?h.l:h.r:h.l,p=(x,U)=>{const A=document.createElementNS(oo,"path");return A.setAttribute("d",`M${r.toFixed(1)} ${v.toFixed(1)} H${m.toFixed(1)}`),A.setAttribute("class",x),U&&A.style.setProperty("--len",U),this.tapsG.append(A),A};p("ops__tap");const M=p("ops__tap--lit",Math.abs(m-r).toFixed(1));f.push({x:r,y:v,r:3.6,i:d.i,ping:!0,tap:M});const _=document.createElementNS(oo,"path");_.setAttribute("d",`M${m.toFixed(1)} ${(v-12).toFixed(1)} V${(v+12).toFixed(1)}`),_.setAttribute("class","ops__notch"),this.tapsG.append(_),f.push({x:m,y:v,r:3.6,follows:!0,notch:_})}}),f.push({x:r,y:l,r:4.5,end:!0}),this.ports=f.map(d=>{const h=document.createElementNS(oo,"circle");return h.setAttribute("cx",d.x.toFixed(1)),h.setAttribute("cy",d.y.toFixed(1)),h.setAttribute("r",d.r),h.setAttribute("class","ops__port"),this.portsG.append(h),{...d,el:h,hot:!1}}),this.ports.forEach((d,h)=>{d.follows&&(d.lead=this.ports[h-1])}),this.reduced&&(this.py=l,this._draw())}_draw(){const t=Math.max(0,Math.min(this.total,this.py-this.y0)),e=(this.total-t).toFixed(1);this.lit.style.strokeDashoffset=e,this.glow.style.strokeDashoffset=e,this.packet.setAttribute("transform",`translate(${this.sx.toFixed(1)} ${(this.y0+t).toFixed(1)})`),this.packet.style.opacity=t>3&&t<this.total-3&&!this.reduced?1:0;for(const n of this.ports){const s=n.follows?n.lead.hot:this.py>=n.y-2;if(s!==n.hot){if(n.hot=s,n.el.classList.toggle("is-hot",s),n.tap&&n.tap.classList.toggle("is-hot",s),n.notch&&n.notch.classList.toggle("is-hot",s),s&&n.ping&&!this.reduced){const r=this.items[n.i].ping;r.classList.remove("is-on"),r.offsetWidth,r.classList.add("is-on")}n.end&&s&&!this.reduced&&this._count()}}}_count(){const t=performance.now(),e=()=>{const n=Math.min(1,(performance.now()-t)/800),s=1-Math.pow(1-n,3);this.counts.forEach(r=>{const a=+r.dataset.from,o=+r.dataset.count;r.textContent=Math.round(a+(o-a)*s)}),n<1&&requestAnimationFrame(e)};requestAnimationFrame(e)}_stages(t){for(const e of this.items){if(!e.stages.length||!e.running||!e.inView)continue;const n=((t-e.t0-e.paused)/1e3%8+8)%8;for(const s of e.stages){const r=n>=s.a&&n<s.b;r!==s.on&&(s.on=r,s.li.classList.toggle("is-on",r))}}}height(){return this.el?this.el.offsetHeight:0}place(t){if(!this.el)return;this.fixed=!0,this.top=t;const e=this.el.offsetHeight+120,n=t<innerHeight&&t+e>0;(n!==this.active||!this.placed)&&(this.active=n,this.placed=!0,this.el.style.visibility=n?"visible":"hidden"),n&&(this.el.style.transform=`translate3d(0,${t.toFixed(1)}px,0)`)}covered(){const t=this.el?this.el.getBoundingClientRect():null,e=!!t&&this.active&&t.top<=0&&t.bottom>=innerHeight,n=!!t&&this.active&&t.top<=80&&t.bottom>80;return n!==this._under&&(this._under=n,document.documentElement.classList.toggle("in-ops",n)),e}update(t){if(!this.el||!this.total||this.reduced)return;const e=this.el.getBoundingClientRect();if(e.top>innerHeight||e.bottom<0)return;this._stages(performance.now());const n=this.flow.getBoundingClientRect(),s=Math.max(this.y0,Math.min(this.y1,innerHeight*.56-n.top));this.py+=(s-this.py)*(1-Math.exp(-t*6.5)),Math.abs(s-this.py)<.4&&(this.py=s),this._draw()}}const vh="assets/brand/logo-m.lottie",_h="__vd_PointerEnter_m_emerald",xh="__vd_PointerExit_m_emerald";async function U_(){const i=await fetch(vh).catch(()=>null);if(i&&i.ok)return i.arrayBuffer();const t=await fetch(vh+".b64.txt").then(s=>{if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.text()}),e=atob(t.replace(/\s+/g,"")),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}async function F_({reduced:i}){const t=[...document.querySelectorAll(".logo__m canvas")];if(!t.length)return[];const[{DotLottie:e},n]=await Promise.all([Qr(()=>import("./dotlottie-web-BTuVRhK9.js"),[],import.meta.url),U_()]);return e.setWasmUrl(window.__VFS["vendor/dotlottie-web/dotlottie-player.wasm"]),t.map(s=>{const r=new e({canvas:s,data:n.slice(0),autoplay:!i,loop:!0,...i?{}:{stateMachineId:"monogram_hover"},renderConfig:{autoResize:!0,devicePixelRatio:Math.min(2,window.devicePixelRatio||1)*1.25,freezeOnOffscreen:!0}}),a=s.parentElement;r.addEventListener("load",()=>{i&&r.setFrame(0),setTimeout(()=>a.classList.add("is-live"),80)});const o=s.closest(".loader");o&&new MutationObserver((c,u)=>{o.classList.contains("is-done")&&(u.disconnect(),setTimeout(()=>{try{r.destroy()}catch{}},1600))}).observe(o,{attributes:!0,attributeFilter:["class"]});const l=s.closest("a");if(l&&!i){const c=u=>{try{r.stateMachineFireEvent(u)}catch{}};l.addEventListener("pointerenter",()=>c(_h)),l.addEventListener("pointerleave",()=>c(xh)),l.addEventListener("focus",()=>c(_h)),l.addEventListener("blur",()=>c(xh))}return r})}const ct=(i,t=document)=>t.querySelector(i),Se=(i,t=document)=>[...t.querySelectorAll(i)],ze=new URLSearchParams(location.search),Pe=document.documentElement,Xe=matchMedia("(prefers-reduced-motion: reduce)").matches||ze.has("rm"),ti=matchMedia("(pointer: coarse)").matches,vi={still:ze.has("still"),reduced:Xe,touch:ti,mobile:matchMedia("(max-width: 760px)").matches||ti,dpr:ze.get("dpr")?+ze.get("dpr"):null},fn=ze.has("g")?+ze.get("g"):null;window.__errs=window.__errs||[];ti&&Pe.classList.add("touch");const te=window.__mp={ready:!1,frames:0,fps:60,g:0},Un={pct:0,target:0,el:ct("#loaderPct"),bar:ct("#loaderBar")};function Kn(i){Un.target=Math.max(Un.target,i)}(function i(){Un.pct+=(Un.target-Un.pct)*.12;const t=Math.round(Un.pct*100);Un.el.textContent=String(t).padStart(3,"0"),Un.bar.style.transform=`scaleX(${Un.pct})`,(!te.ready||Un.pct<.995)&&requestAnimationFrame(i)})();function N_(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function O_(){S_(),F_({reduced:Xe}).then(S=>{te.logo=S}).catch(S=>window.__errs.push("logo "+(S&&S.stack||S))),Kn(.08);const i=S=>new Promise(O=>{const H=new Image;H.onload=()=>O(H),H.onerror=()=>O(null),H.src=S}),[t,e,n,s]=await Promise.all([fetch("assets/data/glyphs.json").then(S=>S.json()),fetch("assets/data/land.json").then(S=>S.json()),i(window.__VFS["assets/brand/card-face.webp"]),i(window.__VFS["assets/brand/card-chip.webp"])]);Kn(.22),await Promise.race([Promise.all([document.fonts.load("600 80px Archivo"),document.fonts.load('500 40px "Geist Mono"'),document.fonts.load("600 40px Geist"),document.fonts.load('italic 40px "Instrument Serif"')]),new Promise(S=>setTimeout(S,2500))]),Kn(.38);const r=new L_(Xe);r.load().then(()=>Kn(.5));const a=b_(),o={};A_(o);let l=1,c=-1,u=-1;const f=ir.map(S=>S.rate);C_(S=>{c=S,u=Vt(),l=S,$r(S,f[S]),h&&(h.coins.sel=S)}),$r(1);const d=E_(S=>T_(S));ct("#hubcard .hubcard__x").addEventListener("click",()=>{ct("#hubcard").hidden=!0,Se(".hub").forEach(S=>S.classList.remove("is-sel"))});let h=null;if(N_()&&!ze.has("nogl"))try{const{Stage:S}=await Qr(async()=>{const{Stage:O}=await import("./stage-BxXqe_Qj.js");return{Stage:O}},__vite__mapDeps([0,1,2]),import.meta.url);Kn(.6),h=new S(ct("#gl"),{glyphs:t,land:e,cardFace:n,cardChip:s},vi),Qr(async()=>{const{CardGlow:O}=await import("./cardglow-DJOmBcUg.js");return{CardGlow:O}},__vite__mapDeps([3,1,2]),import.meta.url).then(({CardGlow:O})=>new O({reduced:Xe,width:vi.mobile?448:640}).start()).then(O=>{h.cardGlow=O,h.card.setGlow(O.canvas)}).catch(O=>window.__errs.push("card glow "+(O&&O.stack||O))),Kn(.7),await h.atrium.load().catch(O=>window.__errs.push("atrium "+(O&&O.stack||O))),Kn(.86),ze.has("light")&&(h.light.forced=ze.get("light").split(",").map(Number)),h.update(fn??0,0,.016),h.render(),Kn(.95)}catch(S){console.error(S),h=null}h?Pe.classList.add("gl"):Pe.classList.add("static"),h||(uh(5.9,a,!1),dh(12.7,o),fh(16.9),ph(20),gh(25),Se(".route__s").forEach(S=>S.classList.add("is-on")),ct("#route").style.opacity=1,ct("#c-transfer .globe-meta").style.opacity=1,Se("#c-transfer .chr, #c-hero .chr").forEach(S=>S.style.transform="none"),Se("#c-transfer .sec-head__idx").forEach(S=>S.style.opacity=1),Se(".depth, .hubs, #globeHint, #depthCap").forEach(S=>S.style.display="none")),te.stage=h;const v=ct("#sizer");let m=1,p=innerHeight;const M=3.8;let _=0,x=null;const U=ct("#foot"),A=7,L=.42,P=.62,E=.4,y=L+(A-1)*(P+E);let w=0;const R=S=>S<=M*m?S/m:S<=M*m+_?M:M+(S-M*m-_)/m,D=S=>S<=w?0:R(S-w),N=S=>S<=0?0:w+(S<=M?S*m:S*m+_),G=S=>{const O=Math.max(0,S)/m-L;if(O<=0)return 0;const H=Math.min(A-2,Math.floor(O/(P+E)));return Math.min(A-1,H+Math.min(1,(O-H*(P+E))/P))},W=S=>{if(S=cn(S,0,A-1),S<=0)return 0;const O=Math.ceil(S)-1,H=S-O;return(L+O*(P+E)+(H>=1?P+E*.5:H*P))*m},nt=()=>{p=innerHeight,m=p*(vi.mobile?.82:1),_=h&&x?x.height()+p:0,w=h?Math.round(y*m):0,v.style.height=h?w+so*m+p+_+"px":"0px",h&&(h.resize(),h._layoutKey=(h._layoutKey||0)+1)},q=()=>tt?tt.scroll:scrollY,ft=S=>{const O=q(),H=h&&O<=w,ht=G(O),St=fn??te.g;S(),H?te.goY(W(ht)):yt(St,!0)};nt();let tt=null;h&&!Xe&&window.Lenis&&(tt=new window.Lenis({lerp:.085,smoothWheel:!0,wheelMultiplier:.9,touchMultiplier:1.1})),history.scrollRestoration="manual";const yt=(S,O)=>{const H=N(S);tt?(tt.resize(),tt.scrollTo(H,{immediate:!!O,duration:1.6})):window.scrollTo(0,H)};if(te.goG=S=>{yt(S,!0)},te.goY=S=>{tt?(tt.resize(),tt.scrollTo(S,{immediate:!0})):window.scrollTo(0,S)},x=new I_({reduced:Xe,touch:ti,mobile:vi.mobile,lenis:tt,icons:r}),te.ops=x,nt(),h&&window.ResizeObserver){let S=x.height();new ResizeObserver(()=>{const O=x.height();Math.abs(O-S)>1&&(S=O,ft(nt))}).observe(x.el)}te.opsScrollFor=(S,O="center")=>{const H=typeof S=="string"?document.querySelector(S):S,ht=H.getBoundingClientRect(),St=ht.top-x.el.getBoundingClientRect().top;if(!h)return Math.max(0,scrollY+ht.top-(O==="center"?(innerHeight-ht.height)/2:0));const Xt=(O==="center"?(innerHeight-ht.height)/2:0)-St;return w+M*m+p-Xt},fn!==null&&yt(fn,!0),fn!==null?yt(fn,!0):window.scrollTo(0,0);let $t;addEventListener("resize",()=>{clearTimeout($t),$t=setTimeout(()=>{ft(nt),x.layout()},120)});const de={hero:0,ops:null,treasury:5.75,transfer:8.1,intel:11.95,vault:15.6,liquidity:19.55,future:24.9},J=S=>S==="ops"?te.goY(te.opsScrollFor("#c-ops","top")):yt(de[S],!0);let lt=!1;function Rt(S){if(!(S in de))return;if(Bt(),!h){const H=ct(S==="hero"?"#c-hero":S==="ops"?"#c-ops":`[data-ch="${S}"]`);H&&H.scrollIntoView({behavior:Xe?"auto":"smooth"});return}if(Xe||lt){J(S);return}lt=!0;const O=Se("#wipe i");gsap.timeline({onComplete:()=>{lt=!1}}).set(O,{transformOrigin:"50% 100%"}).to(O,{scaleY:1,duration:.55,ease:"expo.inOut",stagger:.05}).add(()=>J(S)).set(O,{transformOrigin:"50% 0%"},"+=.08").to(O,{scaleY:0,duration:.65,ease:"expo.inOut",stagger:.05})}Se("[data-goto]").forEach(S=>S.addEventListener("click",O=>{O.preventDefault(),Rt(S.dataset.goto)}));const ut=ct("#menuBtn"),Ft=ct("#menu");function Gt(){const S=Pe.classList.contains("in-ops")?"ops":{treasury:"treasury",transfer:"transfer",intel:"intel",vault:"vault",liquidity:"liquidity"}[te.ch];Se(".menu__list a",Ft).forEach(O=>O.classList.toggle("is-current",O.dataset.goto===S)),ct(".nav__menu-t").textContent="Close",Pe.classList.add("menu-open"),Ft.removeAttribute("inert"),Ft.setAttribute("aria-hidden","false"),ut.setAttribute("aria-expanded","true"),tt&&tt.stop(),Se(".menu__ic",Ft).forEach((O,H)=>setTimeout(()=>r.play(O),260+H*70))}function Bt(){Pe.classList.contains("menu-open")&&(ct(".nav__menu-t").textContent="Menu",Pe.classList.remove("menu-open"),Ft.setAttribute("inert",""),Ft.setAttribute("aria-hidden","true"),ut.setAttribute("aria-expanded","false"),tt&&tt.start())}ut.addEventListener("click",()=>Pe.classList.contains("menu-open")?Bt():Gt()),addEventListener("keydown",S=>{S.key==="Escape"&&Bt()});const oe=ct("#access");Se("[data-open-access]").forEach(S=>S.addEventListener("click",()=>{Bt(),ct("#accessDone").hidden=!0,ct("#accessSubmit").hidden=!1,oe.showModal(),tt&&tt.stop()})),oe.addEventListener("close",()=>tt&&tt.start()),ct("#accessForm").addEventListener("submit",S=>{S.submitter&&S.submitter.value==="cancel"||(S.preventDefault(),!S.target.reportValidity())||(ct("#accessDone").hidden=!1,ct("#accessSubmit").hidden=!0)});const Z={x:innerWidth/2,y:innerHeight/2,rx:innerWidth/2,ry:innerHeight/2,moved:!1},at=ct("#cursor"),F=ct("#cursorLabel");let Ct=null;addEventListener("pointermove",S=>{if(Z.x=S.clientX,Z.y=S.clientY,!Z.moved&&S.pointerType==="mouse"&&Pe.classList.add("cursor-on"),Z.moved=!0,h&&S.pointerType!=="touch"&&h.setPointer(S.clientX,S.clientY,!0,S.pointerType),Ct){const O=S.clientX-Ct.x;Ct.x=S.clientX,h.globe.drag+=O*.006}},{passive:!0}),addEventListener("pointerleave",()=>h&&h.setPointer(Z.x,Z.y,!1)),document.documentElement.addEventListener("mouseleave",()=>h&&h.setPointer(Z.x,Z.y,!1));const st=S=>{const O=S.touches[0];O&&h&&h.setPointer(O.clientX,O.clientY,!0,"touch")};addEventListener("touchstart",st,{passive:!0}),addEventListener("touchmove",st,{passive:!0});const Et=S=>{h&&!S.touches.length&&h.setPointer(Z.x,Z.y,!1,"touch")};addEventListener("touchend",Et,{passive:!0}),addEventListener("touchcancel",Et,{passive:!0}),addEventListener("pointerdown",S=>{if(at.classList.add("is-down"),!h)return;(S.target===ct("#gl")||S.target===document.body||S.target.closest(".ch")&&!S.target.closest("button, a, .intel, .tre, .route, .fx, .ccy, .hubcard"))&&te.ch==="transfer"&&(Ct={x:S.clientX})}),addEventListener("pointerup",()=>{at.classList.remove("is-down"),h&&te.ch==="liquidity"&&Kt>=0&&(c=Kt,u=Vt(),l=Kt,$r(Kt,f[Kt]),h.coins.sel=Kt),Ct=null});let dt="",zt=!1;document.addEventListener("mouseover",S=>{zt=!!(S.target.closest&&S.target.closest("button, a, input, .hud__label, .nav, .menu, dialog"))}),document.addEventListener("mouseover",S=>{at.classList.toggle("is-btn",!!(S.target.closest&&S.target.closest(".btn--key, .btn--text, .nav__menu, .access__x")));const O=S.target.closest&&S.target.closest("[data-cursor]");dt=O?O.dataset.cursor:"";const H=S.target.closest&&S.target.closest("button, a, .cell, .bar, .route__s");if(H){const ht=H.querySelector(".lottie")||H.closest(".sec-head__idx")&&H.querySelector(".lottie");ht&&!H._hov&&(H._hov=1,r.play(ht),setTimeout(()=>H._hov=0,900))}}),Se(".mod, .tre__hero, .route__s, .ccy, .hubcard, .intel__chart").forEach(S=>{S.classList.add("tilt"),S.addEventListener("pointermove",O=>{if(Xe||ti)return;const H=S.getBoundingClientRect(),ht=(O.clientX-H.left)/H.width,St=(O.clientY-H.top)/H.height;S.style.setProperty("--mx",(ht*100).toFixed(1)+"%"),S.style.setProperty("--my",(St*100).toFixed(1)+"%"),S.style.setProperty("--rx",((.5-St)*3).toFixed(2)+"deg"),S.style.setProperty("--ry",((ht-.5)*4).toFixed(2)+"deg")}),S.addEventListener("pointerleave",()=>{S.style.setProperty("--rx","0deg"),S.style.setProperty("--ry","0deg")})});const Tt='<svg viewBox="0 0 16 16"><path d="M2.5 8h10.6M9.2 3.9 13.3 8l-4.1 4.1"/></svg>',C=(S,O)=>S.map(H=>`<path class="lit" pathLength="1" style="--k:${O}" d="${H}"/><path class="glint" pathLength="1" style="--k:${O}" d="${H}"/>`).join(""),b="M5.75 20A14.25 14.25 0 0 1 34.25 20",V="M5.75 20A14.25 14.25 0 0 0 34.25 20",j=`<svg class="btn__trace" viewBox="0 0 40 40"><path class="dim" d="${b}${V}"/>`+C([b,V],0)+'<circle class="pad" cx="20" cy="20" r="8.5"/></svg>',et=S=>[...S].map((O,H)=>{const ht=O===" "?" ":O;return`<span class="btn__ch" style="--i:${H}" data-c="${ht}">${ht}</span>`}).join("");Se(".btn--primary, .btn--huge, .btn--ghost").forEach(S=>{const O=S.textContent.replace(/[→\s]+$/,"").trim(),H=S.classList.contains("btn--ghost");S.setAttribute("aria-label",O),S.classList.add("btn--key"),H&&S.classList.add("btn--dark"),S.innerHTML=`<span class="btn__bezel" aria-hidden="true"></span><span class="btn__cap" aria-hidden="true">${H?'<i class="btn__flood"></i>':""}</span>`+(H?'<i class="btn__led" aria-hidden="true"></i>':"")+`<span class="btn__label" aria-hidden="true">${et(O)}</span>`+(H?"":`<span class="btn__chip" aria-hidden="true">${j}<span class="btn__arrow">${Tt}</span></span>`),S.addEventListener("pointerdown",ht=>{const St=S.querySelector(".btn__cap"),Xt=St.getBoundingClientRect(),Ot=document.createElement("i");Ot.className="btn__ripple",Ot.style.left=ht.clientX-Xt.left+"px",Ot.style.top=ht.clientY-Xt.top+"px",St.append(Ot),setTimeout(()=>Ot.remove(),900)})}),Se(".btn--text").forEach(S=>S.insertAdjacentHTML("beforeend",'<svg class="btn__tip" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h10.6M9.2 3.9 13.3 8l-4.1 4.1"/></svg><i class="btn__track" aria-hidden="true"><i class="btn__run"><i></i></i></i>')),Se(".magnetic").forEach(S=>{S.addEventListener("pointermove",O=>{if(Xe||ti)return;const H=S.getBoundingClientRect(),ht=O.clientX-(H.left+H.width/2),St=O.clientY-(H.top+H.height/2);S.style.transform=`translate3d(${Math.max(-6,Math.min(6,ht*.22)).toFixed(2)}px,${Math.max(-4,Math.min(4,St*.32)).toFixed(2)}px,0)`,S.style.setProperty("--mx",O.clientX-H.left+"px"),S.style.setProperty("--my",O.clientY-H.top+"px"),S.style.transition="transform .15s linear"}),S.addEventListener("pointerleave",()=>{S.style.transition="transform .7s cubic-bezier(.22,1,.36,1)",S.style.transform=""})});const K=()=>Se("#heroTitle .chr, #fuTitle .chr");let Pt=null;function mt(){if(Xe||ti||!Z.moved)return;Pt||(Pt=K().map(O=>({c:O,r:null,x:0,y:0})));const S=te.ch==="hero"&&te.g<.3||te.ch==="future"&&te.g>22.8;Pt.forEach(O=>{if(!S){(O.x||O.y)&&(O.x=O.y=0,O.c.style.translate="");return}if(!O.r||te.frames%30===0){const xe=O.c.getBoundingClientRect();O.r=[xe.left+xe.width/2-O.x,xe.top+xe.height/2-O.y]}const H=O.r[0]-Z.x,ht=O.r[1]-Z.y,St=Math.hypot(H,ht),Xt=Math.pow(Math.max(0,1-St/150),2),Ot=St?H/St*Xt*16:0,Ht=St?ht/St*Xt*12:0;O.x+=(Ot-O.x)*.18,O.y+=(Ht-O.y)*.18,O.c.style.translate=`${O.x.toFixed(2)}px ${O.y.toFixed(2)}px`})}let Mt=!1;function ie(){if(Mt)return;Mt=!0;const S=ct("#toast");S.classList.add("is-on"),r.play(ct(".toast__ic")),setTimeout(()=>S.classList.remove("is-on"),4600)}ct("#topup").addEventListener("click",S=>{r.play(S.currentTarget.querySelector(".lottie"))}),Se(".seg button").forEach(S=>S.addEventListener("click",()=>yt([12.15,12.65,13.05][+S.dataset.wk]-.05))),Se(".route__s").forEach((S,O)=>{S.setAttribute("tabindex","0"),S.setAttribute("role","button");const H=()=>yt([8.15,8.75,9.4,10][O]);S.addEventListener("click",H),S.addEventListener("keydown",ht=>{(ht.key==="Enter"||ht.key===" ")&&(ht.preventDefault(),H())})});const rt=Object.fromEntries(Se(".ch").map(S=>[S.dataset.ch,S])),wt={hero:[-1,3.9],treasury:[3.85,7.15],transfer:[7.15,11.05],intel:[10.95,14.4],vault:[14.4,18.15],liquidity:[18.15,21.6],future:[21.85,99]},Nt={},Vt=()=>{const S=te.g;return S<20.2?0:S<20.9?1:2},At=Se("#heroTitle > .line"),re=Se("#c-hero .depth__t"),jt=Se(".depth__tag"),we=S=>h.particles.hubs.slice(0,120).filter(O=>Math.hypot(O.x,O.y)>1.5).reduce((O,H)=>Math.abs(H.z-S)<Math.abs(O.z-S)?H:O),B=h?[-6,-11,-16.5,-22].map(we):[];let pt=0,Y=0,Q=performance.now();const xt=Se(".route__s"),vt=ct("#vmarquee"),qt=ct(".vmarquee__track"),Ee=ct("#nav"),Ye=ct("#navProgress"),_e=Se(".nav__links a"),dn=ct(".nav__logo",Ee),En=ct(".nav__links",Ee),or=ct(".nav__right",Ee),Hi=ct(".nav__cta",Ee),Gn=ct("#menuBtn");function li(){const S=innerWidth,O=40;if(S>1100){const H=dn.getBoundingClientRect(),ht=or.getBoundingClientRect(),St=En.scrollWidth,Xt=S/2;Pe.classList.toggle("nav-tight",!(Xt-St/2>=H.right+O&&Xt+St/2<=ht.left-O))}else Pe.classList.toggle("nav-tight",!1);if(S<=760){const H=parseFloat(getComputedStyle(Ee).paddingLeft)*2,ht=dn.getBoundingClientRect().width+Gn.offsetWidth+8+20,St=Hi.offsetWidth||Hi._w||140;Hi._w=St,Pe.classList.toggle("nav-fold",ht+St>S-H)}else Pe.classList.toggle("nav-fold",!1)}li(),addEventListener("resize",li),document.fonts&&document.fonts.ready.then(li),setTimeout(li,1500);const Ps=ct("#foot");function lr(S,O,H){let ht="hero";for(const[ae,[De,ye]]of Object.entries(wt)){const ve=S>=De&&S<ye,ne=rt[ae];ve!==Nt[ae]&&(Nt[ae]=ve,ne.classList.toggle("is-on",ve),ve?ne.removeAttribute("inert"):ne.setAttribute("inert",""),ve&&Se(".sec-head .lottie, .globe-meta .lottie, .mod-ic",ne).forEach((fe,ue)=>setTimeout(()=>r.play(fe),350+ue*160))),ve&&(ht=ae)}if(te.ch=ht,Nt.hero){const ae=be(.3,1.25,S);At.forEach((ve,ne)=>{ve.style.transform=`translate3d(0,${(-ae*(210-ne*55)).toFixed(1)}px,0)`,ve.style.opacity=1-Dt(.08,.36,S)}),[".hero__sub",".hero__cta"].forEach((ve,ne)=>{const fe=ct(ve);fe.style.filter=`opacity(${(1-Dt(.05+ne*.04,.34+ne*.04,S)).toFixed(3)})`,fe.style.translate=`0 ${(-ae*(90+ne*30)).toFixed(1)}px`});const De=ct(".hero__stats");De.style.filter=`opacity(${(1-Dt(.03,.25,S)).toFixed(3)})`,De.style.translate=`0 ${(ae*60).toFixed(1)}px`;const ye=[[1.15,1.95],[2.3,3.05],[2.9,3.6]];if(re.forEach((ve,ne)=>{const fe=be(ye[ne][0],ye[ne][1],S),ue=Dt(0,.25,fe),Me=1-Dt(.72,1,fe);ve.style.opacity=(ue*Me).toFixed(3);const Ae=.86+ue*.14+Dt(.72,1,fe)*.06;ve.style.transform=`translate3d(0,${((1-ue)*26-Dt(.72,1,fe)*80).toFixed(1)}px,0) scale(${Ae.toFixed(3)})`,ve.style.filter=fe<.25?`blur(${((1-ue)*4).toFixed(2)}px)`:"none"}),h){const ve=re.filter(ne=>+ne.style.opacity>.05).map(ne=>{const fe=ne.getBoundingClientRect();return[fe.left-30,fe.top-24,fe.right+30,fe.bottom+24]});jt.forEach((ne,fe)=>{const ue=B[fe];if(!ue)return;const Me=h.anchor(ue);let Ae=Me.z<1&&Me.z>0?Dt(2.4,2.6,S)*(1-Dt(3.25,3.5,S)):0;const Ze=ne.offsetWidth||150,wi=ne.offsetHeight||26,Is=Me.x-Ze/2,Us=Me.y-wi*1.4,Ai=Is+Ze,Rl=Us+wi,Pl=Math.min(124,Math.max(20,innerWidth*.076));(Us<118||Is<Pl||Ai>innerWidth-Pl||Rl>innerHeight-40||ve.some(hr=>Ai>hr[0]&&Is<hr[2]&&Rl>hr[1]&&Us<hr[3]))&&(Ae=0),ne._v=(ne._v??0)+(Ae-(ne._v??0))*.25,ne.style.opacity=ne._v.toFixed(3),ne.style.transform=`translate3d(${Me.x.toFixed(1)}px,${Me.y.toFixed(1)}px,0) translate(-50%,-140%)`})}}if(Nt.treasury&&uh(S,a,vi.mobile),Nt.transfer){bn(ct("#trTitle .line:first-child"),be(7.3,7.85,S),be(10.3,10.7,S)),bn(ct("#trTitle .line:last-child"),be(7.45,7.95,S),be(10.35,10.75,S)),ct("#c-transfer .sec-head__idx").style.opacity=Dt(7.3,7.6,S)*(1-Dt(10.3,10.6,S));const ae=S<7.9?-1:S<8.5?0:S<9.1?1:S<9.75?2:3;xt.forEach((ye,ve)=>{ye.classList.toggle("is-on",ve<=ae),ye.classList.toggle("is-cur",ve===ae),ye.classList.toggle("is-prev",ve===ae-1)}),ct("#route").style.opacity=Dt(7.75,7.95,S)*(1-Dt(10.3,10.55,S)),ct("#c-transfer .globe-meta").style.opacity=Dt(7.9,8.2,S)*(1-Dt(10.25,10.5,S)),ct("#globeHint").style.opacity=Dt(8,8.3,S)*(1-Dt(10.2,10.4,S));const De=ct("#fxRate");if(De.textContent=(1.3194+Math.sin(O*1.7)*3e-4*(Xe?0:1)).toFixed(4),S>9.8&&fn===null&&ie(),h){const ye=Dt(7.85,8.1,S)*(1-Dt(10.2,10.45,S)),ve=h.hubScreen();(!rt.transfer._ex||te.frames%60===0)&&(rt.transfer._ex=["#trTitle","#c-transfer .sec-head__idx","#route","#c-transfer .globe-meta","#hubcard"].map(ue=>{const Me=ct(ue);if(!Me||Me.hidden)return null;const Ae=Me.getBoundingClientRect();return[Ae.left-24,Ae.top-18,Ae.right+24,Ae.bottom+18]}).filter(Boolean));const ne=rt.transfer._ex;{const ue=ct("#trTitle").getBoundingClientRect(),Me=h.dpr,Ae=innerHeight;h.globe.setExclusion((ue.left-30)*Me,(Ae-ue.bottom-26)*Me,(ue.right+30)*Me,(Ae-ue.top+10)*Me)}ve.forEach(ue=>{const Me=d[ue.id];if(!Me)return;ye*Dt(-.04,.18,ue.front);const Ae=devicePixelRatio||1;Me.style.transform=`translate3d(${Math.round(ue.x*Ae)/Ae}px,${Math.round(ue.y*Ae)/Ae}px,0)`;const Ze=ue.x-16,wi=ue.x+140,Is=ue.y-14,Us=ue.y+14;Me.classList.toggle("is-muted",ne.some(Ai=>wi>Ai[0]&&Ze<Ai[2]&&Us>Ai[1]&&Is<Ai[3]))}),d.sgp&&d.sgp.classList.toggle("is-dest",S>=9.6);const fe=ct("#hubcard");fe.hidden||(fe.style.opacity=ye)}}else!ct("#hubcard").hidden&&!Nt.transfer&&(ct("#hubcard").hidden=!0);if(Nt.intel&&dh(S,o,vi.mobile),Nt.vault&&fh(S),Nt.liquidity){ph(S,vi.mobile);const ae=Vt();c>=0&&ae!==u&&(c=-1);const De=[1,3,5][ae],ye=c>=0?c:De;ye!==l&&(l=ye,$r(ye,f[ye])),h&&(h.coins.sel=l),te.frames%20===0&&Se(".fx__v").forEach((ve,ne)=>{const fe=+ve.dataset.rate,ue=fe*(1+Math.sin(O*.7+ne*1.3)*9e-4*(Xe?0:1));if(f[ne+1]=ue,ve.textContent=ue.toFixed(fe>20?2:4),ne+1===l){const wi=ct("#ccyRate");wi&&(wi.textContent=ve.textContent)}const Me=ve.nextElementSibling,Ae=Math.sin(O*.7+ne*1.3)*.09+(ne%3-1)*.07,Ze=Math.round(Ae*100)/100;Me.textContent=Ze===0?"0.00%":(Ze>0?"+":"−")+Math.abs(Ze).toFixed(2)+"%",Me.style.color=Ze===0?"var(--mut)":Ze>0?"var(--g)":"var(--mut)"})}if(Nt.future&&gh(S,Ps.getBoundingClientRect().top),h){const ae=ct("#tmask"),De=S>18.08&&S<19.12;if(ae.style.visibility=De?"visible":"hidden",De){const ye=ct("#tmaskText"),ve=Dt(18.2,18.4,S),ne=Math.pow(Dt(18.62,19.08,S),2.4),fe=(.001+ve*.999)*(1+ne*60);if(!ye._zp||ye._zw!==innerWidth){ye.removeAttribute("transform");const Ze=ye.getExtentOfChar(1);ye._zp=[Ze.x+Ze.width*.13,Ze.y+Ze.height*.55],ye._zw=innerWidth}const[ue,Me]=ye._zp;ye.setAttribute("transform",`translate(${ue} ${Me}) scale(${fe.toFixed(4)}) translate(${-ue} ${-Me})`);const Ae=ct("#tmaskStroke");Ae.setAttribute("transform",ye.getAttribute("transform")),Ae.style.opacity=(1-Dt(18.5,18.75,S)).toFixed(3),ae.style.opacity=1-Dt(18.98,19.1,S)}}Ye.style.transform=`scaleX(${cn(q()/Math.max(1,w+so*m+_)).toFixed(4)})`;const St={ops:0,treasury:1,transfer:2,intel:3,vault:4,liquidity:5},Xt=Pe.classList.contains("in-ops")?"ops":ht;_e.forEach((ae,De)=>ae.classList.toggle("is-active",St[Xt]===De));const Ot=performance.now(),Ht=tt?tt.scroll:scrollY,xe=(Ht-Y)/Math.max(1,Ot-Q)*16.7;Y=Ht,Q=Ot,pt+=(xe-pt)*.12;const nn=Xe?0:cn(pt,-40,40);Pe.style.setProperty("--vel",nn.toFixed(2)),Pe.style.setProperty("--vabs",Math.abs(nn).toFixed(2));const ge=[4,7.2,11,14.4,18.4,22].reduce((ae,De)=>Math.max(ae,1-Math.min(1,Math.abs(S-De)/.32)),0),We=Xe||x.active?0:ge*cn(Math.abs(pt)/18)*.9;vt.style.opacity=We.toFixed(3),We>.01&&(qt.style.transform=`translate3d(${(-(S*900)%(qt.scrollWidth/2)).toFixed(1)}px,0,0)`),Ee.style.opacity=Ps.getBoundingClientRect().top<p*.5?0:1,Pe.classList.toggle("nav-compact",S>.45)}let Ti=!1;function Gi(){const S=ct(".w-financial"),O=ct(".w-limits"),H=Se(".w-intel .chr"),ht=Se("#c-hero [data-reveal]");h&&(h.bgDraw=0),gsap.set(S,{yPercent:115}),gsap.set(H,{yPercent:110,rotateX:-85,opacity:0,transformPerspective:600,transformOrigin:"50% 100%"}),gsap.set(O,{yPercent:110,scaleX:1.85,"--wd":125}),gsap.set(ht,{y:26,opacity:0}),Ti=!0}function ci(){const S=ct(".w-financial"),O=ct(".w-limits"),H=Se(".w-intel .chr"),ht=Se("#c-hero [data-reveal]");if(Xe||fn!==null){h&&(h.intro=1,h.bgDraw=1),Se(".hl").forEach(Xt=>Xt.style.strokeDashoffset=0);return}Ti||Gi(),gsap.timeline({delay:.25}).to(".hl",{strokeDashoffset:0,duration:2.2,ease:"expo.inOut",stagger:.18},0).to(h||{},{bgDraw:1,duration:2.4,ease:"expo.inOut"},0).to(S,{yPercent:0,duration:1.15,ease:"expo.out"},.15).to(H,{yPercent:0,rotateX:0,opacity:1,duration:1,ease:"expo.out",stagger:.034},.38).to(O,{yPercent:0,duration:.9,ease:"expo.out"},.72).to(O,{scaleX:1,"--wd":100,duration:1.5,ease:"elastic.out(1,.62)"},.82).to(ht,{y:0,opacity:1,duration:.9,ease:"expo.out",stagger:.08},1.05)}const Wn={m:{n:"01",tag:"System 01",kind:"Core",data:"6 systems · one ledger · 37 ms",title:"MATRIX OS",sr:"Matrix OS, the operating layer",go:"ops",cta:"View system",a:[1.45,1.25,.2]},coins:{n:"02",tag:"System 02",kind:"Treasury",data:"$412.9M managed · +9.73% YTD",title:"TREASURY",sr:"Treasury",go:"treasury",cta:"View treasury",a:[.55,1.62,.9]},globe:{n:"03",tag:"System 03",kind:"Routing",data:"40+ venues · settles in 0.09 s",title:"TRANSFERS",sr:"Transfers",go:"transfer",cta:"View transfers",a:[1.12,1.15,.45]},crystal:{n:"04",tag:"System 04",kind:"Analytics",data:"2.1M signals scored a day",title:"INSIGHT",sr:"Insight, spend intelligence",go:"intel",cta:"View insight",a:[.85,1.45,.55]},vault:{n:"05",tag:"System 05",kind:"Security",data:"SOC 2 · ISO 27001 · PCI-DSS",title:"SENTINEL",sr:"Sentinel, the vault",go:"vault",cta:"View security",a:[1.25,1.3,.3]},liquid:{n:"06",tag:"System 06",kind:"Liquidity",data:"6 pools · 40+ venues · every market",title:"LIQUIDITY",sr:"Liquidity, every market",go:"liquidity",cta:"View liquidity",a:[1.2,1.1,.3]},card:{n:"07",tag:"System 07",kind:"Issuing",data:"Metal · contactless · 3-D Secure",title:"METAL CARD",sr:"The MatrixPay metal card",go:"access",cta:"Get the card",a:[1.55,.95,.1]}},Ls="ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&$@",Ds=Object.keys(Wn).length,Dn={el:ct("#hud"),title:ct("#hudTitle"),line:ct("#hudLine"),dot:ct("#hudDot"),ring:ct("#hudRing"),label:ct("#hudLabel"),on:!1,cur:null,ax:null,ay:0,tScr:0,scr:null,born:0,lastSet:-1e9,show(){this.on=!0,this.el.classList.add("is-on"),this.set(h.sculpt.active||"m",!0)},set(S,O){const H=Wn[S];if(!H||S===this.cur)return;this.cur=S,ct("#hudTag").textContent=H.tag,ct("#hudKind").textContent=H.kind,ct("#hudGoT").textContent=H.cta,ct("#hudSr").textContent=H.sr,ct("#hudN").textContent=H.n,ct("#hudPn").textContent=H.n,ct("#hudData").textContent=H.data;const ht=+H.n-1;ct("#hudPrev").setAttribute("aria-disabled",String(ht<=0)),ct("#hudNext").setAttribute("aria-disabled",String(ht>=Ds-1));const St=performance.now(),Xt=St-this.lastSet<380;this.lastSet=St,O||Xe||Xt?(this.title.textContent=H.title,this.scr=null,this.el.classList.remove("is-draw")):(this.scr={to:H.title,t:0},this.el.classList.remove("is-draw"),this.el.offsetWidth,this.el.classList.add("is-draw"))},frame(S,O,H){const ht=h.hero,St=this.on?1-Dt(.015,.07,S):0;this.el.style.setProperty("--hudA",St.toFixed(3)),this.el.style.visibility=St>.01?"visible":"hidden";const Xt=St>.5&&h.sculptHover;if(Xt!==this.lit&&(this.lit=Xt,ct("#hudGo").classList.toggle("is-lit",Xt)),St<.01)return;this.lift=(this.lift||0)+((this.label.matches(":hover")?-10:0)-(this.lift||0))*Math.min(1,H*6);const Ot=(h.heroPan.x*.82).toFixed(1)+"px",Ht=(h.heroPan.y*.82+this.lift).toFixed(1)+"px";if((Ot!==this.tx||Ht!==this.ty)&&(this.tx=Ot,this.ty=Ht,this.label.style.translate=`${Ot} ${Ht}`),this.scr){const fe=this.scr;fe.t+=H;const ue=fe.to.length;let Me="";for(let Ae=0;Ae<ue;Ae++){const Ze=(fe.t-.1-Ae*.045)/.32;Me+=fe.to[Ae]===" "?" ":Ze>=1?fe.to[Ae]:Ze<0?"█":Ls[Math.random()*Ls.length|0]}this.title.textContent=Me,fe.t>.5+ue*.045&&(this.title.textContent=fe.to,this.scr=null)}Wn[this.cur]||Wn.m;const xe=h.sculpt,nn=xe.anchorAt(this.cur,xe.u.uTime.value),ge=h.anchor(nn);this.ax===null&&(this.ax=ge.x,this.ay=ge.y),this.ax+=(ge.x-this.ax)*.12,this.ay+=(ge.y-this.ay)*.12;const We=this.label.getBoundingClientRect(),ae=this.title.getBoundingClientRect(),De=ae.top+ae.height*.55,ye=We.left-14,ve=Math.min(ye-18,Math.max(this.ax+24,ye-Math.max(60,(De<this.ay?this.ay-De:60)*.9))),ne=De;this.line.setAttribute("points",`${this.ax.toFixed(1)},${this.ay.toFixed(1)} ${ve.toFixed(1)},${ne.toFixed(1)} ${ye.toFixed(1)},${ne.toFixed(1)}`),this.dot.setAttribute("cx",this.ax.toFixed(1)),this.dot.setAttribute("cy",this.ay.toFixed(1)),this.ring.setAttribute("cx",this.ax.toFixed(1)),this.ring.setAttribute("cy",this.ay.toFixed(1)),this.el.style.setProperty("--hn",cn(ht.pos,0,Ds-1).toFixed(3)),this.el.style.setProperty("--hp","1")}};let cr=null,T=null,z=0;function X(S){if(!h)return;const O=q(),H=G(O);T!==null&&(performance.now()-z>1600||Math.abs(H-T)<.01)&&(T=null);const ht=T!==null?T:S>0?Math.floor(H+.001):Math.ceil(H-.001),St=cn(ht+S,0,Ds-1);if(St===ht&&T===null&&Math.abs(H-St)<.01)return;T=St,z=performance.now();const Xt=W(St);tt&&(h.hero.entered&&tt.start(),tt.resize(),tt.scrollTo(Xt,{duration:1.15,easing:Ot=>1-Math.pow(1-Ot,3)}))}if(h){cr=h.camera.position.constructor,h.sculpt.onForm(O=>{Dn.on&&Wn[O]&&Dn.set(O)}),ct("#hudPrev").addEventListener("click",()=>{ct("#hudPrev").getAttribute("aria-disabled")!=="true"&&X(-1)}),ct("#hudNext").addEventListener("click",()=>{ct("#hudNext").getAttribute("aria-disabled")!=="true"&&X(1)}),ct("#hudGo").addEventListener("click",()=>{const O=Wn[Dn.cur];if(O){if(O.go==="access"){ct("[data-open-access]").click();return}Rt(O.go)}});let S=null;addEventListener("pointerdown",O=>{S=h.sculptHover&&O.button===0&&O.pointerType==="mouse"&&!(O.target.closest&&O.target.closest("button, a, input, .hud__label, .nav, .menu, dialog"))?{x:O.clientX,y:O.clientY,t:performance.now()}:null}),addEventListener("pointerup",O=>{const H=S;S=null,H&&h.sculptHover&&Math.hypot(O.clientX-H.x,O.clientY-H.y)<8&&performance.now()-H.t<600&&ct("#hudGo").click()}),addEventListener("keydown",O=>{!Dn.on||te.g>.05||Pe.classList.contains("menu-open")||O.target.closest&&O.target.closest("input, textarea, dialog")||(O.key==="ArrowRight"?(O.preventDefault(),X(1)):O.key==="ArrowLeft"&&(O.preventDefault(),X(-1)))})}const $={el:ct("#gate"),fill:ct("#gateFill"),p:0,held:!1,open:!1,t0:0,idle:0,frame(S){if(!this.open)return;this.idle+=S,this.p=this.fixed!=null?this.fixed:Math.max(0,Math.min(1,this.p+(this.held?S/.95:-S*1.8))),this.fill.style.strokeDashoffset=(1-this.p).toFixed(4);const O=h.hero;O.sAlpha=.85+this.p*.2,h.sculpt.meta.seed.spin=.5+this.p*1.2,O.cam=this.p*.12;const H=this.p*this.p*(3-2*this.p);O.draw=H*.38,O.hold=H,O.rays=H*H*.22;const ht=h.anchor(new cr(0,0,0));this.el.style.setProperty("--gx",ht.x.toFixed(1)+"px"),this.el.style.setProperty("--gy",ht.y.toFixed(1)+"px"),(this.p>=1&&this.fixed==null||this.idle>11&&!this.held&&this.fixed==null)&&ot()},show(){this.open=!0,this.el.hidden=!1,Pe.classList.add("gated"),tt&&tt.stop(),ti&&(ct(".gate__s").textContent="or swipe up");const S=ht=>{!this.open||ht.button>0||ht.target.closest(".nav, .menu, dialog")||(this.held=!0,this.idle=0)},O=()=>{this.held=!1};addEventListener("pointerdown",S),addEventListener("pointerup",O),addEventListener("pointercancel",O),addEventListener("keydown",ht=>{this.open&&(ht.key===" "||ht.key==="Enter")&&(ht.preventDefault(),this.held=!0,this.idle=0)}),addEventListener("keyup",ht=>{(ht.key===" "||ht.key==="Enter")&&(this.held=!1)});const H=()=>{this.open&&ot(!0)};addEventListener("wheel",H,{passive:!0}),addEventListener("touchmove",H,{passive:!0}),ct("#gateBtn").addEventListener("click",ht=>{ht.detail===0&&ot()})},close(){this.open=!1,this.held=!1,Pe.classList.remove("gated"),this.el.classList.add("is-out"),setTimeout(()=>{this.el.hidden=!0},1e3)}};te.enter=()=>ot(),te.heroStep=S=>X(S),te.heroY=W,te.heroPosOf=G;function k(S){const O=h.sculpt;for(let H=0;H<280;H++)O.step(S-4.5+H*.016,.016)}function ot(S){const O=h.hero,H=h.sculpt;return O.entered?null:(O.entered=!0,$.close(),H.meta.seed.spin=.5,S&&tt&&tt.start(),gsap.timeline().add(()=>H.go("lattice",1.15),0).to(O,{sAlpha:.3,duration:.6},0).to(O,{sAlpha:.025,duration:.6},1).to(O,{bk:1,duration:1.2},3).to(O,{hold:1,duration:.4},0).to(O,{rays:.5,duration:1.2,ease:"power2.out"},0).to(O,{draw:1,duration:1.5,ease:"power1.inOut"},0).to(O,{sAlpha:1,duration:1},3.4).to(O,{cam:1,duration:4.8,ease:"power2.inOut"},0).to(O,{fill:1,duration:2.2,ease:"power1.in"},1).to(O,{reveal:1,duration:2.5,ease:"power1.inOut"},1.6).to(O,{rays:0,duration:1.5},3).to(O,{wire:0,duration:1,ease:"power1.in"},3.3).to(O,{lat:1,duration:1.4,ease:"power1.inOut"},3.5).add(()=>{O.idx=0,H.go("m",3)},3.9).add(()=>{Pe.classList.add("entered"),ci()},4.4).add(()=>Dn.show(),5.4).add(()=>{tt&&tt.start()},6).timeScale(S?2.4:1))}function _t(){if(!h){ci();return}const S=h.hero,O=h.sculpt,H=performance.now()/1e3,ht=ze.get("form"),St=Math.max(0,h.heroForms.indexOf(ht||"m"));if(ze.has("reveal")){const Ot=+ze.get("reveal");S.reveal=Ot,S.fill=Math.min(1,Ot*1.6+.15),S.hold=1,S.rays=.9*(1-Dt(.6,1,Ot)),S.wire=1-Dt(.55,1,Ot),S.draw=1,S.lat=Dt(.75,1,Ot),S.cam=Ot,S.entered=!0,S.cycle=!1,S.idx=St,O.go(Ot<.6?"lattice":h.heroForms[St],2.6),k(H),Gi(),Ot>.8?Pe.classList.add("entered"):Pe.classList.add("revealing");return}let Xt=ze.has("hs")?+ze.get("hs"):null;if(ze.has("morphAt")){const[Ot,Ht]=ze.get("morphAt").split(":");Xt=Math.max(0,h.heroForms.indexOf(Ot)-1+ +Ht)}if(Xt===null&&ht&&(Xt=St),Xe||Xt!==null||fn!==null&&!ze.has("gate")){S.entered=!0,S.reveal=1,S.fill=1,S.hold=0,S.rays=0,S.wire=0,S.draw=1,S.lat=1,S.cam=1,S.cycle=!1,S.scrub=!0;const Ot=fn>0?h.heroForms.length-1:Xt??G(q());Xt!==null&&!(fn>0)&&te.goY(W(Xt)),S.pos=ce=Ot,O.scrub(h.heroForms,Ot),k(H),Pe.classList.add("entered"),ci(),Dn.show();return}if(S.entered=!1,S.reveal=0,S.fill=0,S.hold=0,S.rays=0,S.wire=1,S.draw=0,S.lat=0,S.cam=0,S.cycle=!1,S.bk=.4,O.go("seed",2.4),Gi(),ze.has("enterAt")){const Ot=Math.max(0,+ze.get("enterAt")),Ht=H-Ot;for(let ge=0;ge<280;ge++)O.step(Ht-4.5+ge*.016,.016);const xe=ot();xe.pause();const nn=Math.round(Ot/.016);for(let ge=0;ge<=nn;ge++)xe.seek(Math.min(Ot,ge*.016),!1),O.step(Ht+ge*.016,.016);return}ze.has("hold")&&($.fixed=cn(+ze.get("hold"),0,1)),fn!==null&&k(H),$.show()}const Ut=[".nav__logo",".nav__links",".nav__right",".ch.is-on .sec-head",".ch.is-on .tre__hero",".ch.is-on .tre__mods",".ch.is-on .route",".ch.is-on .globe-meta","#hubcard:not([hidden])",".ch.is-on .intel",".ch.is-on .specs",".ch.is-on .vault-state",".ch.is-on .certs",".ch.is-on .fx-wrap",".ch.is-on .ccy",".ch.is-on .future__title",".ch.is-on .future__cta",".ops__head","#c-ops .sys",".foot__top",".foot__cols",".foot__bot"].join(",");let It=null;function Wt(){if(!h||te.frames%8&&It===te.ch)return;It=te.ch;const S=innerWidth,O=innerHeight,H=[];for(const ht of document.querySelectorAll(Ut)){const St=ht.getBoundingClientRect();St.width<4||St.height<4||St.bottom<0||St.top>O||St.right<0||St.left>S||+getComputedStyle(ht).opacity<.05||H.push([St.left,St.top,St.right,St.bottom,St.width*St.height])}H.sort((ht,St)=>St[4]-ht[4]),h.setQuiet(H)}let Yt=performance.now(),Lt=0,le=0,me=0,ce=0;function Qe(S){const O=Math.min(.05,(S-Yt)/1e3);Yt=S,tt&&tt.raf(S);const H=tt?tt.scroll:scrollY,ht=h?D(H):0;if(te.g=ht,h){const Ot=G(H);Math.abs(Ot-ce)>1.35&&(ce=Ot-Math.sign(Ot-ce)),ce+=(Ot-ce)*(Xe?1:1-Math.exp(-O*10)),Math.abs(Ot-ce)<1e-4&&(ce=Ot),h.hero.pos=ce,te.hs=ce;const Ht=Math.max(0,H-w),xe=M*m,nn=xe+_,ge=so*m+_;h.setWall(Ht<=xe?Ht*.5:Ht<=nn?xe*.5+(Ht-xe):Ht<=ge?xe*.5+_+(Ht-nn)*.5:xe*.5+_+(ge-nn)*.5+(Ht-ge));const We=w+xe+p-H,ae=x.height(),De=Math.max(70,Math.min(110,p*.11));h.setCover(We,We+ae,We<p+De&&We+ae>-De?De:0,U.getBoundingClientRect().top),x.place(We)}const St=S/1e3,Xt=x.covered();if(h){if(Xt)h.renderBackdrop(O);else{if(h.update(ht,St,O),te.ch==="liquidity"){const Ot=h.pickCoin();Ot!==Kt&&(Kt=Ot,h.coins.hover=Ot)}else Kt=-1;h.render()}lr(ht,St),Wt()}if(x.update(O),h&&(Dn.frame(ht,St,O),$.frame(O)),mt(),!ti){Z.rx+=(Z.x-Z.rx)*.2,Z.ry+=(Z.y-Z.ry)*.2,ct(".cursor__ring").style.transform=`translate3d(${Z.rx}px,${Z.ry}px,0)`;const Ot=dt||(Kt>=0?"Select":te.ch==="transfer"&&Ct?"Drag":h&&h.sculptHover&&h.stirRest&&Dn.lit&&!zt?"View":"");at.classList.toggle("is-chart",!!document.querySelector(".perf.is-hover")),at.classList.toggle("is-hover",!!Ot),F.textContent!==Ot&&Ot&&(F.textContent=Ot)}te.frames++,Lt+=O,le++,Lt>1.5&&(te.fps=le/Lt,h&&fn===null&&!vi.dpr&&document.visibilityState==="visible"&&(te.fps<42?(me++,me>=2&&h.dpr>1?(h.dpr=Math.max(1,h.dpr-.25),h.renderer.setPixelRatio(h.dpr),h.resize(),me=0):me>=3&&h.bloom.enabled&&(h.bloom.enabled=!1)):me=0),Lt=0,le=0),requestAnimationFrame(Qe)}let Kt=-1;Kn(1),await new Promise(S=>setTimeout(S,fn!==null?0:650)),ct("#loader").classList.add("is-done"),Pe.classList.remove("is-loading"),te.ready=!0,_t(),requestAnimationFrame(Qe)}O_().catch(i=>{console.error(i),window.__errs.push(String(i&&i.stack||i)),Pe.classList.add("static"),ct("#loader").classList.add("is-done"),Pe.classList.remove("is-loading")});const vx=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{sr as $,ri as A,Fe as B,ox as C,Qh as D,cx as E,he as F,si as G,bi as H,ma as I,Ge as J,iu as K,$u as L,Oe as M,yi as N,da as O,hc as P,u_ as Q,j_ as R,Je as S,h_ as T,Vh as U,it as V,Bn as W,Al as X,Qn as Y,d_ as Z,_i as _,kt as a,se as a$,Ie as a0,pu as a1,mu as a2,nu as a3,Z_ as a4,q0 as a5,ex as a6,cu as a7,q_ as a8,rr as a9,Mo as aA,Y0 as aB,Vi as aC,Tv as aD,Re as aE,$_ as aF,eu as aG,Y_ as aH,pn as aI,H_ as aJ,tu as aK,K_ as aL,W0 as aM,ta as aN,Yo as aO,Jh as aP,en as aQ,la as aR,oa as aS,va as aT,Si as aU,ga as aV,Ei as aW,kn as aX,zn as aY,Ke as aZ,ms as a_,ke as aa,fs as ab,lh as ac,nr as ad,hn as ae,Qt as af,z_ as ag,V_ as ah,k_ as ai,ar as aj,sx as ak,J_ as al,Es as am,ln as an,tx as ao,nx as ap,Zt as aq,ws as ar,Bc as as,Q_ as at,ax as au,X_ as av,On as aw,ur as ax,ya as ay,td as az,I as b,rx as b0,Nn as b1,hu as b2,W_ as b3,jh as b4,dx as b5,lx as b6,fx as b7,px as b8,mx as b9,gx as ba,ux as bb,ix as bc,hx as bd,Dt as be,be as bf,c_ as bg,cn as bh,js as bi,Ue as bj,l_ as bk,vx as bl,gl as c,pe as d,Ce as e,qu as f,Yu as g,Zu as h,Ku as i,Ju as j,gn as k,Pn as l,Sh as m,Rn as n,mn as o,xn as p,G_ as q,gt as r,Kh as s,aa as t,un as u,bs as v,ei as w,sa as x,yo as y,Oi as z};
