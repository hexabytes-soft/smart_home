/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wn={ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,fl=1,zh=2,mr=1,Hh=2,ps=3,ji=0,We=1,ti=2,Di=0,Xn=1,pl=2,ml=3,gl=4,Gh=5,ln=100,Vh=101,Wh=102,Xh=103,qh=104,$h=200,Yh=201,Kh=202,Zh=203,Fo=204,Oo=205,Jh=206,Qh=207,jh=208,td=209,ed=210,id=211,nd=212,sd=213,rd=214,Bo=0,ko=1,zo=2,Kn=3,Ho=4,Go=5,Vo=6,Wo=7,Bc=0,od=1,ad=2,li=0,kc=1,zc=2,Hc=3,Sr=4,Gc=5,Vc=6,Wc=7,Xc=300,un=301,Zn=302,Vr=303,Wr=304,Nr=306,Xo=1e3,Li=1001,qo=1002,De=1003,ld=1004,Is=1005,Fe=1006,Xr=1007,hn=1008,Ke=1009,qc=1010,$c=1011,Ss=1012,Ua=1013,Mi=1014,vi=1015,Ui=1016,Fa=1017,Oa=1018,bs=1020,Yc=35902,Kc=35899,Zc=1021,Jc=1022,ai=1023,Fi=1026,dn=1027,Qc=1028,Ba=1029,fn=1030,ka=1031,za=1033,gr=33776,_r=33777,vr=33778,xr=33779,$o=35840,Yo=35841,Ko=35842,Zo=35843,Jo=36196,Qo=37492,jo=37496,ta=37488,ea=37489,br=37490,ia=37491,na=37808,sa=37809,ra=37810,oa=37811,aa=37812,la=37813,ca=37814,ha=37815,da=37816,ua=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,va=36494,xa=36495,ya=36283,Ma=36284,Er=36285,Sa=36286,cd=3200,ba=0,hd=1,Ji="",je="srgb",wr="srgb-linear",Tr="linear",te="srgb",xn=7680,_l=519,dd=512,ud=513,fd=514,Ha=515,pd=516,md=517,Ga=518,gd=519,Ea=35044,vl="300 es",xi=2e3,Es=2001;function _d(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vd(){const s=Ar("canvas");return s.style.display="block",s}const xl={};function Pr(...s){const t="THREE."+s.shift();console.log(t,...s)}function jc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Lt(...s){s=jc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Xt(...s){s=jc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function qn(...s){const t=s.join(" ");t in xl||(xl[t]=!0,Lt(...s))}function xd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const yd={[Bo]:ko,[zo]:Vo,[Ho]:Wo,[Kn]:Go,[ko]:Bo,[Vo]:zo,[Wo]:Ho,[Go]:Kn};class en{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,wa=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Vt(s,t,e){return Math.max(t,Math.min(e,s))}function Md(s,t){return(s%t+t)%t}function qr(s,t,e){return(1-e)*s+e*t}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sd={DEG2RAD:yr},ja=class ja{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ja.prototype.isVector2=!0;let ot=ja;class tn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],d=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==m||h!==g){let p=l*d+c*m+h*g+f*x;p<0&&(d=-d,m=-m,g=-g,x=-x,p=-p);let u=1-a;if(p<.9995){const b=Math.acos(p),w=Math.sin(b);u=Math.sin(u*b)/w,a=Math.sin(a*b)/w,l=l*u+d*a,c=c*u+m*a,h=h*u+g*a,f=f*u+x*a}else{l=l*u+d*a,c=c*u+m*a,h=h*u+g*a,f=f*u+x*a;const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*m-c*d,t[e+1]=l*g+h*d+c*f-a*m,t[e+2]=c*g+h*m+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),f=a(r/2),d=l(i/2),m=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-n)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tl=class tl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=n+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tl.prototype.isVector3=!0;let D=tl;const $r=new D,yl=new tn,el=class el{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],x=n[0],p=n[3],u=n[6],b=n[1],w=n[4],M=n[7],A=n[2],T=n[5],R=n[8];return r[0]=o*x+a*b+l*A,r[3]=o*p+a*w+l*T,r[6]=o*u+a*M+l*R,r[1]=c*x+h*b+f*A,r[4]=c*p+h*w+f*T,r[7]=c*u+h*M+f*R,r[2]=d*x+m*b+g*A,r[5]=d*p+m*w+g*T,r[8]=d*u+m*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*f+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return qn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return qn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return qn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};el.prototype.isMatrix3=!0;let Ft=el;const Yr=new Ft,Ml=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){const s={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(n.r=Ni(n.r),n.g=Ni(n.g),n.b=Ni(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(n.r=$n(n.r),n.g=$n(n.g),n.b=$n(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?Tr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[wr]:{primaries:t,whitePoint:i,transfer:Tr,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:te,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),s}const qt=bd();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $n(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yn;class Ed{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yn===void 0&&(yn=Ar("canvas")),yn.width=t.width,yn.height=t.height;const n=yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=yn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wd=0;class Va{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Kr(n[o].image)):r.push(Kr(n[o]))}else r=Kr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Kr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ed.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let Td=0;const Zr=new D;class Oe extends en{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=Li,n=Li,r=Fe,o=hn,a=ai,l=Ke,c=Oe.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ii(),this.name="",this.source=new Va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zr).x}get height(){return this.source.getSize(Zr).y}get depth(){return this.source.getSize(Zr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Xc;Oe.DEFAULT_ANISOTROPY=1;const il=class il{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(m+1)/2,A=(u+1)/2,T=(h+d)/4,R=(f+x)/4,_=(g+p)/4;return w>M&&w>A?w<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(w),n=T/i,r=R/i):M>A?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=T/n,r=_/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=R/r,n=_/r),this.set(i,n,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};il.prototype.isVector4=!0;let ue=il;class Ad extends en{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new Oe(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Va(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Ad{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class th extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ir=class Ir{constructor(t,e,i,n,r,o,a,l,c,h,f,d,m,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,f,d,m,g,x,p)}set(t,e,i,n,r,o,a,l,c,h,f,d,m,g,x,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=n,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ir().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Mn.setFromMatrixColumn(t,0).length(),r=1/Mn.setFromMatrixColumn(t,1).length(),o=1/Mn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*f,g=c*h,x=c*f;e[0]=d+x*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*f,g=c*h,x=c*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*f,e[8]=g*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=o*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,Rd)}lookAt(t,e,i){const n=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Hi.crossVectors(i,qe),Hi.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Hi.crossVectors(i,qe)),Hi.normalize(),Ns.crossVectors(qe,Hi),n[0]=Hi.x,n[4]=Ns.x,n[8]=qe.x,n[1]=Hi.y,n[5]=Ns.y,n[9]=qe.y,n[2]=Hi.z,n[6]=Ns.z,n[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],u=i[14],b=i[3],w=i[7],M=i[11],A=i[15],T=n[0],R=n[4],_=n[8],y=n[12],E=n[1],C=n[5],L=n[9],k=n[13],W=n[2],U=n[6],q=n[10],H=n[14],j=n[3],et=n[7],ht=n[11],gt=n[15];return r[0]=o*T+a*E+l*W+c*j,r[4]=o*R+a*C+l*U+c*et,r[8]=o*_+a*L+l*q+c*ht,r[12]=o*y+a*k+l*H+c*gt,r[1]=h*T+f*E+d*W+m*j,r[5]=h*R+f*C+d*U+m*et,r[9]=h*_+f*L+d*q+m*ht,r[13]=h*y+f*k+d*H+m*gt,r[2]=g*T+x*E+p*W+u*j,r[6]=g*R+x*C+p*U+u*et,r[10]=g*_+x*L+p*q+u*ht,r[14]=g*y+x*k+p*H+u*gt,r[3]=b*T+w*E+M*W+A*j,r[7]=b*R+w*C+M*U+A*et,r[11]=b*_+w*L+M*q+A*ht,r[15]=b*y+w*k+M*H+A*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],u=t[15],b=l*m-c*d,w=a*m-c*f,M=a*d-l*f,A=o*m-c*h,T=o*d-l*h,R=o*f-a*h;return e*(x*b-p*w+u*M)-i*(g*b-p*A+u*T)+n*(g*w-x*A+u*R)-r*(g*M-x*T+p*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],u=t[15],b=e*a-i*o,w=e*l-n*o,M=e*c-r*o,A=i*l-n*a,T=i*c-r*a,R=n*c-r*l,_=h*x-f*g,y=h*p-d*g,E=h*u-m*g,C=f*p-d*x,L=f*u-m*x,k=d*u-m*p,W=b*k-w*L+M*C+A*E-T*y+R*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/W;return t[0]=(a*k-l*L+c*C)*U,t[1]=(n*L-i*k-r*C)*U,t[2]=(x*R-p*T+u*A)*U,t[3]=(d*T-f*R-m*A)*U,t[4]=(l*E-o*k-c*y)*U,t[5]=(e*k-n*E+r*y)*U,t[6]=(p*M-g*R-u*w)*U,t[7]=(h*R-d*M+m*w)*U,t[8]=(o*L-a*E+c*_)*U,t[9]=(i*E-e*L-r*_)*U,t[10]=(g*T-x*M+u*b)*U,t[11]=(f*M-h*T-m*b)*U,t[12]=(a*y-o*C-l*_)*U,t[13]=(e*C-i*y+n*_)*U,t[14]=(x*w-g*A-p*b)*U,t[15]=(h*A-f*w+d*b)*U,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,m=r*h,g=r*f,x=o*h,p=o*f,u=a*f,b=l*c,w=l*h,M=l*f,A=i.x,T=i.y,R=i.z;return n[0]=(1-(x+u))*A,n[1]=(m+M)*A,n[2]=(g-w)*A,n[3]=0,n[4]=(m-M)*T,n[5]=(1-(d+u))*T,n[6]=(p+b)*T,n[7]=0,n[8]=(g+w)*R,n[9]=(p-b)*R,n[10]=(1-(d+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Mn.set(n[0],n[1],n[2]).length();const a=Mn.set(n[4],n[5],n[6]).length(),l=Mn.set(n[8],n[9],n[10]).length();r<0&&(o=-o),ni.copy(this);const c=1/o,h=1/a,f=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,e.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=xi,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(i-n),d=(e+t)/(e-t),m=(i+n)/(i-n);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===xi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Es)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=xi,l=!1){const c=this.elements,h=2/(e-t),f=2/(i-n),d=-(e+t)/(e-t),m=-(i+n)/(i-n);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===xi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Es)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ir.prototype.isMatrix4=!0;let ce=Ir;const Mn=new D,ni=new ce,Cd=new D(0,0,0),Rd=new D(1,1,1),Hi=new D,Ns=new D,qe=new D,bl=new ce,El=new tn;class Oi{constructor(t=0,e=0,i=0,n=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ld=0;const wl=new D,Sn=new tn,Ei=new ce,Us=new D,ns=new D,Dd=new D,Id=new tn,Tl=new D(1,0,0),Al=new D(0,1,0),Pl=new D(0,0,1),Cl={type:"added"},Nd={type:"removed"},bn={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Ee extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new Oi,i=new tn,n=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ft}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Sn.setFromAxisAngle(t,e),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(t,e){return Sn.setFromAxisAngle(t,e),this.quaternion.premultiply(Sn),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(Al,t)}rotateZ(t){return this.rotateOnAxis(Pl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(Al,t)}translateZ(t){return this.translateOnAxis(Pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Us.copy(t):Us.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ns,Us,this.up):Ei.lookAt(Us,ns,this.up),this.quaternion.setFromRotationMatrix(Ei),n&&(Ei.extractRotation(n.matrixWorld),Sn.setFromRotationMatrix(Ei),this.quaternion.premultiply(Sn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cl),bn.child=t,this.dispatchEvent(bn),bn.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cl),bn.child=t,this.dispatchEvent(bn),bn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function jr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=Md(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=jr(o,r,t+1/3),this.g=jr(o,r,t),this.b=jr(o,r,t-1/3)}return qt.colorSpaceToWorking(this,n),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return qt.workingToColorSpace(Ue.copy(this),t),Math.round(Vt(Ue.r*255,0,255))*65536+Math.round(Vt(Ue.g*255,0,255))*256+Math.round(Vt(Ue.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,n=Ue.g,r=Ue.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=je){qt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,n=Ue.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Fs);const i=qr(Gi.h,Fs.h,e),n=qr(Gi.s,Fs.s,e),r=qr(Gi.l,Fs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Ot;Ot.NAMES=eh;class Gn{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new Gn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fd extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const si=new D,wi=new D,to=new D,Ti=new D,En=new D,wn=new D,Rl=new D,eo=new D,io=new D,no=new D,so=new ue,ro=new ue,oo=new ue;class ei{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),si.subVectors(t,e),n.cross(si);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){si.subVectors(n,e),wi.subVectors(i,e),to.subVectors(t,e);const o=si.dot(si),a=si.dot(wi),l=si.dot(to),c=wi.dot(wi),h=wi.dot(to),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return so.setScalar(0),ro.setScalar(0),oo.setScalar(0),so.fromBufferAttribute(t,e),ro.fromBufferAttribute(t,i),oo.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(so,r.x),o.addScaledVector(ro,r.y),o.addScaledVector(oo,r.z),o}static isFrontFacing(t,e,i,n){return si.subVectors(i,e),wi.subVectors(t,e),si.cross(wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),si.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;En.subVectors(n,i),wn.subVectors(r,i),eo.subVectors(t,i);const l=En.dot(eo),c=wn.dot(eo);if(l<=0&&c<=0)return e.copy(i);io.subVectors(t,n);const h=En.dot(io),f=wn.dot(io);if(h>=0&&f<=h)return e.copy(n);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(En,o);no.subVectors(t,r);const m=En.dot(no),g=wn.dot(no);if(g>=0&&m<=g)return e.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(wn,a);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return Rl.subVectors(r,n),a=(f-h)/(f-h+(m-g)),e.copy(n).addScaledVector(Rl,a);const u=1/(p+x+d);return o=x*u,a=d*u,e.copy(i).addScaledVector(En,o).addScaledVector(wn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Bs.subVectors(this.max,ss),Tn.subVectors(t.a,ss),An.subVectors(t.b,ss),Pn.subVectors(t.c,ss),Vi.subVectors(An,Tn),Wi.subVectors(Pn,An),sn.subVectors(Tn,Pn);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-sn.z,sn.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,sn.z,0,-sn.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-sn.y,sn.x,0];return!ao(e,Tn,An,Pn,Bs)||(e=[1,0,0,0,1,0,0,0,1],!ao(e,Tn,An,Pn,Bs))?!1:(ks.crossVectors(Vi,Wi),e=[ks.x,ks.y,ks.z],ao(e,Tn,An,Pn,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ai=[new D,new D,new D,new D,new D,new D,new D,new D],ri=new D,Os=new Rs,Tn=new D,An=new D,Pn=new D,Vi=new D,Wi=new D,sn=new D,ss=new D,Bs=new D,ks=new D,rn=new D;function ao(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){rn.fromArray(s,r);const a=n.x*Math.abs(rn.x)+n.y*Math.abs(rn.y)+n.z*Math.abs(rn.z),l=t.dot(rn),c=e.dot(rn),h=i.dot(rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Me=new D,zs=new ot;let Od=0;class ci extends en{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ea,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ih extends ci{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nh extends ci{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends ci{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Bd=new Rs,rs=new D,lo=new D;class Ur{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Bd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(rs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(lo)),this.expandByPoint(rs.copy(t.center).sub(lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let kd=0;const Qe=new ce,co=new Ee,Cn=new D,$e=new Rs,os=new Rs,Ce=new D;class we extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?nh:ih)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors($e.min,os.min),$e.expandByPoint(Ce),Ce.addVectors($e.max,os.max),$e.expandByPoint(Ce)):($e.expandByPoint(os.min),$e.expandByPoint(os.max))}$e.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Cn.fromBufferAttribute(t,c),Ce.add(Cn)),n=Math.max(n,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new D,l[_]=new D;const c=new D,h=new D,f=new D,d=new ot,m=new ot,g=new ot,x=new D,p=new D;function u(_,y,E){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),h.sub(c),f.sub(c),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[_].add(x),a[y].add(x),a[E].add(x),l[_].add(p),l[y].add(p),l[E].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,y=b.length;_<y;++_){const E=b[_],C=E.start,L=E.count;for(let k=C,W=C+L;k<W;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new D,M=new D,A=new D,T=new D;function R(_){A.fromBufferAttribute(n,_),T.copy(A);const y=a[_];w.copy(y),w.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(T,y);const C=M.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,y=b.length;_<y;++_){const E=b[_],C=E.start,L=E.count;for(let k=C,W=C+L;k<W;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new ci(d,h,f)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new D;class Cr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ci(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Hd=0;class gn extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Xn,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fo&&(i.blendSrc=this.blendSrc),this.blendDst!==Oo&&(i.blendDst=this.blendDst),this.blendEquation!==ln&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sh extends gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rn;const as=new D,Ln=new D,Dn=new D,In=new ot,ls=new ot,rh=new ce,Hs=new D,cs=new D,Gs=new D,Ll=new ot,ho=new ot,Dl=new ot;class Gd extends Ee{constructor(t=new sh){if(super(),this.isSprite=!0,this.type="Sprite",Rn===void 0){Rn=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zd(e,5);Rn.setIndex([0,1,2,0,2,3]),Rn.setAttribute("position",new Cr(i,3,0,!1)),Rn.setAttribute("uv",new Cr(i,2,3,!1))}this.geometry=Rn,this.material=t,this.center=new ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ln.setFromMatrixScale(this.matrixWorld),rh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Dn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ln.multiplyScalar(-Dn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;Vs(Hs.set(-.5,-.5,0),Dn,o,Ln,n,r),Vs(cs.set(.5,-.5,0),Dn,o,Ln,n,r),Vs(Gs.set(.5,.5,0),Dn,o,Ln,n,r),Ll.set(0,0),ho.set(1,0),Dl.set(1,1);let a=t.ray.intersectTriangle(Hs,cs,Gs,!1,as);if(a===null&&(Vs(cs.set(-.5,.5,0),Dn,o,Ln,n,r),ho.set(0,1),a=t.ray.intersectTriangle(Hs,Gs,cs,!1,as),a===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:ei.getInterpolation(as,Hs,cs,Gs,Ll,ho,Dl,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vs(s,t,e,i,n,r){In.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ls.x=r*In.x-n*In.y,ls.y=n*In.x+r*In.y):ls.copy(In),s.copy(t),s.x+=ls.x,s.y+=ls.y,s.applyMatrix4(rh)}const Pi=new D,uo=new D,Ws=new D,Xi=new D,fo=new D,Xs=new D,po=new D;class Fr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){uo.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(uo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ws),a=Xi.dot(this.direction),l=-Xi.dot(Ws),c=Xi.lengthSq(),h=Math.abs(1-o*o);let f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const x=1/h;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(uo).addScaledVector(Ws,d),m}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),n=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,n,r){fo.subVectors(e,t),Xs.subVectors(i,t),po.crossVectors(fo,Xs);let o=this.direction.dot(po),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);const l=a*this.direction.dot(Xs.crossVectors(Xi,Xs));if(l<0)return null;const c=a*this.direction.dot(fo.cross(Xi));if(c<0||l+c>o)return null;const h=-a*Xi.dot(po);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Il=new ce,on=new Fr,qs=new Ur,Nl=new D,$s=new D,Ys=new D,Ks=new D,mo=new D,Zs=new D,Ul=new D,Js=new D;class Jt extends Ee{constructor(t=new we,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(mo.fromBufferAttribute(f,t),o?Zs.addScaledVector(mo,h):Zs.addScaledVector(mo.sub(e),h))}e.add(Zs)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),on.copy(t.ray).recast(t.near),!(qs.containsPoint(on.origin)===!1&&(on.intersectSphere(qs,Nl)===null||on.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Il.copy(r).invert(),on.copy(t.ray).applyMatrix4(Il),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,on)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,A=w;M<A;M+=3){const T=a.getX(M),R=a.getX(M+1),_=a.getX(M+2);n=Qs(this,u,t,i,c,h,f,T,R,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const b=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);n=Qs(this,o,t,i,c,h,f,b,w,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,A=w;M<A;M+=3){const T=M,R=M+1,_=M+2;n=Qs(this,u,t,i,c,h,f,T,R,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const b=p,w=p+1,M=p+2;n=Qs(this,o,t,i,c,h,f,b,w,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function Vd(s,t,e,i,n,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===ji,a),l===null)return null;Js.copy(a),Js.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:s}}function Qs(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,$s),s.getVertexPosition(l,Ys),s.getVertexPosition(c,Ks);const h=Vd(s,t,e,i,$s,Ys,Ks,Ul);if(h){const f=new D;ei.getBarycoord(Ul,$s,Ys,Ks,f),n&&(h.uv=ei.getInterpolatedAttribute(n,a,l,c,f,new ot)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,l,c,f,new ot)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal($s,Ys,Ks,d.normal),h.face=d,h.barycoord=f}return h}class Wd extends Oe{constructor(t=null,e=1,i=1,n,r,o,a,l,c=De,h=De,f,d){super(null,o,a,l,c,h,n,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const go=new D,Xd=new D,qd=new Ft;class Ki{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=go.subVectors(i,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(go),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qd.getNormalMatrix(t),n=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const an=new Ur,$d=new ot(.5,.5),js=new D;class Xa{constructor(t=new Ki,e=new Ki,i=new Ki,n=new Ki,r=new Ki,o=new Ki){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi,i=!1){const n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],m=r[7],g=r[8],x=r[9],p=r[10],u=r[11],b=r[12],w=r[13],M=r[14],A=r[15];if(n[0].setComponents(c-o,m-h,u-g,A-b).normalize(),n[1].setComponents(c+o,m+h,u+g,A+b).normalize(),n[2].setComponents(c+a,m+f,u+x,A+w).normalize(),n[3].setComponents(c-a,m-f,u-x,A-w).normalize(),i)n[4].setComponents(l,d,p,M).normalize(),n[5].setComponents(c-l,m-d,u-p,A-M).normalize();else if(n[4].setComponents(c-l,m-d,u-p,A-M).normalize(),e===xi)n[5].setComponents(c+l,m+d,u+p,A+M).normalize();else if(e===Es)n[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),an.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),an.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(an)}intersectsSprite(t){an.center.set(0,0,0);const e=$d.distanceTo(t.center);return an.radius=.7071067811865476+e,an.applyMatrix4(t.matrixWorld),this.intersectsSphere(an)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(js.x=n.normal.x>0?t.max.x:t.min.x,js.y=n.normal.y>0?t.max.y:t.min.y,js.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rr extends gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lr=new D,Dr=new D,Fl=new ce,hs=new Fr,tr=new Ur,_o=new D,Ol=new D;class qa extends Ee{constructor(t=new we,e=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Lr.fromBufferAttribute(e,n-1),Dr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Lr.distanceTo(Dr);t.setAttribute("lineDistance",new se(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(n),tr.radius+=r,t.ray.intersectsSphere(tr)===!1)return;Fl.copy(n).invert(),hs.copy(t.ray).applyMatrix4(Fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const u=h.getX(x),b=h.getX(x+1),w=er(this,t,hs,l,u,b,x);w&&e.push(w)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(m),u=er(this,t,hs,l,x,p,g-1);u&&e.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const u=er(this,t,hs,l,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){const x=er(this,t,hs,l,g-1,m,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function er(s,t,e,i,n,r,o){const a=s.geometry.attributes.position;if(Lr.fromBufferAttribute(a,n),Dr.fromBufferAttribute(a,r),e.distanceSqToSegment(Lr,Dr,_o,Ol)>i)return;_o.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(_o);if(!(c<t.near||c>t.far))return{distance:c,point:Ol.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Bl=new D,kl=new D;class Yd extends qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Bl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Bl.distanceTo(kl);t.setAttribute("lineDistance",new se(i,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kd extends qa{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class oh extends Oe{constructor(t=[],e=un,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vs extends Oe{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn extends Oe{constructor(t,e,i=Mi,n,r,o,a=De,l=De,c,h=Fi,f=1){if(h!==Fi&&h!==dn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zd extends Jn{constructor(t,e=Mi,i=un,n,r,o=De,a=De,l,c=Fi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ah extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class es extends we{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function g(x,p,u,b,w,M,A,T,R,_,y){const E=M/R,C=A/_,L=M/2,k=A/2,W=T/2,U=R+1,q=_+1;let H=0,j=0;const et=new D;for(let ht=0;ht<q;ht++){const gt=ht*C-k;for(let Mt=0;Mt<U;Mt++){const $t=Mt*E-L;et[x]=$t*b,et[p]=gt*w,et[u]=W,c.push(et.x,et.y,et.z),et[x]=0,et[p]=0,et[u]=T>0?1:-1,h.push(et.x,et.y,et.z),f.push(Mt/R),f.push(1-ht/_),H+=1}}for(let ht=0;ht<_;ht++)for(let gt=0;gt<R;gt++){const Mt=d+gt+U*ht,$t=d+gt+U*(ht+1),he=d+(gt+1)+U*(ht+1),Yt=d+(gt+1)+U*ht;l.push(Mt,$t,Yt),l.push($t,he,Yt),j+=6}a.addGroup(m,j,y),m+=j,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Yn extends we{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],f=[],d=[],m=[];let g=0;const x=[],p=i/2;let u=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(m,2));function b(){const M=new D,A=new D;let T=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const y=[],E=_/r,C=E*(e-t)+t;for(let L=0;L<=n;L++){const k=L/n,W=k*l+a,U=Math.sin(W),q=Math.cos(W);A.x=C*U,A.y=-E*i+p,A.z=C*q,f.push(A.x,A.y,A.z),M.set(U,R,q).normalize(),d.push(M.x,M.y,M.z),m.push(k,1-E),y.push(g++)}x.push(y)}for(let _=0;_<n;_++)for(let y=0;y<r;y++){const E=x[y][_],C=x[y+1][_],L=x[y+1][_+1],k=x[y][_+1];(t>0||y!==0)&&(h.push(E,C,k),T+=3),(e>0||y!==r-1)&&(h.push(C,L,k),T+=3)}c.addGroup(u,T,0),u+=T}function w(M){const A=g,T=new ot,R=new D;let _=0;const y=M===!0?t:e,E=M===!0?1:-1;for(let L=1;L<=n;L++)f.push(0,p*E,0),d.push(0,E,0),m.push(.5,.5),g++;const C=g;for(let L=0;L<=n;L++){const W=L/n*l+a,U=Math.cos(W),q=Math.sin(W);R.x=y*q,R.y=p*E,R.z=y*U,f.push(R.x,R.y,R.z),d.push(0,E,0),T.x=U*.5+.5,T.y=q*.5*E+.5,m.push(T.x,T.y),g++}for(let L=0;L<n;L++){const k=A+L,W=C+L;M===!0?h.push(W,W+1,k):h.push(W+1,W,k),_+=3}c.addGroup(u,_,M===!0?1:2),u+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],d=i[n+1]-h,m=(o-h)/d;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new ot:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,n=[],r=[],o=[],a=new D,l=new ce;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),f=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Vt(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(Vt(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $a extends bi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Jd extends $a{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ya(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,m*=h,n(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const zl=new D,Hl=new D,vo=new Ya,xo=new Ya,yo=new Ya;class Qd extends bi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Hl.subVectors(n[0],n[1]).add(n[0]),c=Hl);const f=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(zl.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),vo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,p),xo.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,p),yo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),xo.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),yo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(vo.calc(l),xo.calc(l),yo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gl(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function jd(s,t){const e=1-s;return e*e*t}function tu(s,t){return 2*(1-s)*s*t}function eu(s,t){return s*s*t}function xs(s,t,e,i){return jd(s,t)+tu(s,e)+eu(s,i)}function iu(s,t){const e=1-s;return e*e*e*t}function nu(s,t){const e=1-s;return 3*e*e*s*t}function su(s,t){return 3*(1-s)*s*s*t}function ru(s,t){return s*s*s*t}function ys(s,t,e,i,n){return iu(s,t)+nu(s,e)+su(s,i)+ru(s,n)}class lh extends bi{constructor(t=new ot,e=new ot,i=new ot,n=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ot){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ys(t,n.x,r.x,o.x,a.x),ys(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ou extends bi{constructor(t=new D,e=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new D){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ys(t,n.x,r.x,o.x,a.x),ys(t,n.y,r.y,o.y,a.y),ys(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ch extends bi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends bi{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends bi{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(xs(t,n.x,r.x,o.x),xs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends bi{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(xs(t,n.x,r.x,o.x),xs(t,n.y,r.y,o.y),xs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],f=n[o>n.length-3?n.length-1:o+2];return i.set(Gl(a,l.x,c.x,h.x,f.x),Gl(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new ot().fromArray(n))}return this}}var Vl=Object.freeze({__proto__:null,ArcCurve:Jd,CatmullRomCurve3:Qd,CubicBezierCurve:lh,CubicBezierCurve3:ou,EllipseCurve:$a,LineCurve:ch,LineCurve3:au,QuadraticBezierCurve:hh,QuadraticBezierCurve3:lu,SplineCurve:dh});class cu extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Vl[n.type]().fromJSON(n))}return this}}class Wl extends cu{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ch(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new hh(this.currentPoint.clone(),new ot(t,e),new ot(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new lh(this.currentPoint.clone(),new ot(t,e),new ot(i,n),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new dh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new $a(t,e,i,n,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ka extends Wl{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Wl().fromJSON(n))}return this}}function hu(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=uh(s,0,n,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=mu(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,f=l;for(let d=e;d<n;d+=e){const m=s[d],g=s[d+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return ws(r,o,e,a,l,c,0),o}function uh(s,t,e,i,n){let r;if(n===Tu(s,t,e,i)>0)for(let o=t;o<e;o+=i)r=Xl(o/i|0,s[o],s[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Xl(o/i|0,s[o],s[o+1],r);return r&&Qn(r,r.next)&&(As(r),r=r.next),r}function pn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Qn(e,e.next)||fe(e.prev,e,e.next)===0)){if(As(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ws(s,t,e,i,n,r,o){if(!s)return;!o&&r&&yu(s,i,n,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?uu(s,i,n,r):du(s)){t.push(l.i,s.i,c.i),As(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=fu(pn(s),t),ws(s,t,e,i,n,r,2)):o===2&&pu(s,t,e,i,n,r):ws(pn(s),t,e,i,n,r,1);break}}}function du(s){const t=s.prev,e=s,i=s.next;if(fe(t,e,i)>=0)return!1;const n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(n,r,o),f=Math.min(a,l,c),d=Math.max(n,r,o),m=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=m&&ms(n,a,r,l,o,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uu(s,t,e,i){const n=s.prev,r=s,o=s.next;if(fe(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,f=r.y,d=o.y,m=Math.min(a,l,c),g=Math.min(h,f,d),x=Math.max(a,l,c),p=Math.max(h,f,d),u=Ta(m,g,t,e,i),b=Ta(x,p,t,e,i);let w=s.prevZ,M=s.nextZ;for(;w&&w.z>=u&&M&&M.z<=b;){if(w.x>=m&&w.x<=x&&w.y>=g&&w.y<=p&&w!==n&&w!==o&&ms(a,h,l,f,c,d,w.x,w.y)&&fe(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=m&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&ms(a,h,l,f,c,d,M.x,M.y)&&fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=u;){if(w.x>=m&&w.x<=x&&w.y>=g&&w.y<=p&&w!==n&&w!==o&&ms(a,h,l,f,c,d,w.x,w.y)&&fe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=b;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&ms(a,h,l,f,c,d,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fu(s,t){let e=s;do{const i=e.prev,n=e.next.next;!Qn(i,n)&&ph(i,e,e.next,n)&&Ts(i,n)&&Ts(n,i)&&(t.push(i.i,e.i,n.i),As(e),As(e.next),e=s=n),e=e.next}while(e!==s);return pn(e)}function pu(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bu(o,a)){let l=mh(o,a);o=pn(o,o.next),l=pn(l,l.next),ws(o,t,e,i,n,r,0),ws(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function mu(s,t,e,i){const n=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=uh(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Su(c))}n.sort(gu);for(let r=0;r<n.length;r++)e=_u(n[r],e);return e}function gu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function _u(s,t){const e=vu(s,t);if(!e)return t;const i=mh(e,s);return pn(i,i.next),pn(e,e.next)}function vu(s,t){let e=t;const i=s.x,n=s.y;let r=-1/0,o;if(Qn(s,e))return e;do{if(Qn(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&fh(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){const f=Math.abs(n-e.y)/(i-e.x);Ts(e,s)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&xu(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function xu(s,t){return fe(s.prev,s,t.prev)<0&&fe(t.next,s,s.next)<0}function yu(s,t,e,i){let n=s;do n.z===0&&(n.z=Ta(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Mu(n)}function Mu(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,e*=2}while(t>1);return s}function Ta(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Su(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function fh(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function ms(s,t,e,i,n,r,o,a){return!(s===o&&t===a)&&fh(s,t,e,i,n,r,o,a)}function bu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Eu(s,t)&&(Ts(s,t)&&Ts(t,s)&&wu(s,t)&&(fe(s.prev,s,t.prev)||fe(s,t.prev,t))||Qn(s,t)&&fe(s.prev,s,s.next)>0&&fe(t.prev,t,t.next)>0)}function fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Qn(s,t){return s.x===t.x&&s.y===t.y}function ph(s,t,e,i){const n=nr(fe(s,t,e)),r=nr(fe(s,t,i)),o=nr(fe(e,i,s)),a=nr(fe(e,i,t));return!!(n!==r&&o!==a||n===0&&ir(s,e,t)||r===0&&ir(s,i,t)||o===0&&ir(e,s,i)||a===0&&ir(e,t,i))}function ir(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function nr(s){return s>0?1:s<0?-1:0}function Eu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ph(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ts(s,t){return fe(s.prev,s,s.next)<0?fe(s,t,s.next)>=0&&fe(s,s.prev,t)>=0:fe(s,t,s.prev)<0||fe(s,s.next,t)<0}function wu(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function mh(s,t){const e=Aa(s.i,s.x,s.y),i=Aa(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Xl(s,t,e,i){const n=Aa(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function As(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Aa(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tu(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class Au{static triangulate(t,e,i=2){return hu(t,e,i)}}class Ms{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return Ms.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];ql(t),$l(i,t);let o=t.length;e.forEach(ql);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,$l(i,e[l]);const a=Au.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ql(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function $l(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class jn extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,f=t/a,d=e/l,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){const b=u*d-o;for(let w=0;w<c;w++){const M=w*f-r;g.push(M,-b,0),x.push(0,0,1),p.push(w/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const w=b+c*u,M=b+c*(u+1),A=b+1+c*(u+1),T=b+1+c*u;m.push(w,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Za extends we{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let f=t;const d=(e-t)/n,m=new D,g=new ot;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){const u=r+p/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let x=0;x<n;x++){const p=x*(i+1);for(let u=0;u<i;u++){const b=u+p,w=b,M=b+i+1,A=b+i+2,T=b+1;a.push(w,M,T),a.push(M,A,T)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Or extends we{constructor(t=new Ka([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new se(n,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function c(h){const f=n.length/3,d=h.extractPoints(e);let m=d.shape;const g=d.holes;Ms.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,u=g.length;p<u;p++){const b=g[p];Ms.isClockWise(b)===!0&&(g[p]=b.reverse())}const x=Ms.triangulateShape(m,g);for(let p=0,u=g.length;p<u;p++){const b=g[p];m=m.concat(b)}for(let p=0,u=m.length;p<u;p++){const b=m[p];n.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,u=x.length;p<u;p++){const b=x[p],w=b[0]+f,M=b[1]+f,A=b[2]+f;i.push(w,M,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Pu(e,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const o=e[t.shapes[n]];i.push(o)}return new Or(i,t.curveSegments)}}function Pu(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}class ii extends we{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new D,d=new D,m=[],g=[],x=[],p=[];for(let u=0;u<=i;u++){const b=[],w=u/i,M=o+w*a,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A);let R=0;u===0&&o===0?R=.5/e:u===i&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const y=_/e,E=n+y*r;f.x=-T*Math.cos(E),f.y=A,f.z=T*Math.sin(E),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(y+R,1-w),b.push(c++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const w=h[u][b+1],M=h[u][b],A=h[u+1][b],T=h[u+1][b+1];(u!==0||o>0)&&m.push(w,M,T),(u!==i-1||l<Math.PI)&&m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ps extends we{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],f=[],d=new D,m=new D,g=new D;for(let x=0;x<=i;x++){const p=o+x/i*a;for(let u=0;u<=n;u++){const b=u/n*r;m.x=(t+e*Math.cos(p))*Math.cos(b),m.y=(t+e*Math.cos(p))*Math.sin(b),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(u/n),f.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=n;p++){const u=(n+1)*x+p-1,b=(n+1)*(x-1)+p-1,w=(n+1)*(x-1)+p,M=(n+1)*x+p;l.push(u,b,M),l.push(b,w,M)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ts(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(Yl(n))n.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Yl(n[0])){const r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ke(s){const t={};for(let e=0;e<s.length;e++){const i=ts(s[e]);for(const n in i)t[n]=i[n]}return t}function Yl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ru={clone:ts,merge:ke};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(n.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ue().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ce().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Iu extends Si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oi extends gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nu extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uu extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Br extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Fu extends Br{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Mo=new ce,Kl=new D,Zl=new D;class _h{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zl),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Es||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sr=new D,rr=new tn,fi=new D;class vh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sr,rr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(sr,rr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new D,Jl=new ot,Ql=new ot;class Ye extends vh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,Ql),e.subVectors(Ql,Jl)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ou extends _h{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}}class Zi extends Br{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ou}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ja extends vh{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bu extends _h{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ku extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class zu extends Br{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nn=-90,Un=1;class Hu extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ye(Nn,Un,t,e);n.layers=this.layers,this.add(n);const r=new Ye(Nn,Un,t,e);r.layers=this.layers,this.add(r);const o=new Ye(Nn,Un,t,e);o.layers=this.layers,this.add(o);const a=new Ye(Nn,Un,t,e);a.layers=this.layers,this.add(a);const l=new Ye(Nn,Un,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Nn,Un,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gu extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jl=new ce;class Vu{constructor(t,e,i=0,n=1/0){this.ray=new Fr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,i=[]){return Pa(t,this,i,e),i.sort(tc),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Pa(t[n],this,i,e);return i.sort(tc),i}}function tc(s,t){return s.distance-t.distance}function Pa(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Pa(r[o],t,e,!0)}}class Wu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class ec{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nl=class nl{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};nl.prototype.isMatrix2=!0;let ic=nl;class Xu extends Yd{constructor(t=10,e=10,i=4473924,n=8947848){i=new Ot(i),n=new Ot(n);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===r?i:n;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const h=new we;h.setAttribute("position",new se(l,3)),h.setAttribute("color",new se(c,3));const f=new Rr({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xh extends en{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nc(s,t,e,i){const n=qu(i);switch(e){case Zc:return s*t;case Qc:return s*t/n.components*n.byteLength;case Ba:return s*t/n.components*n.byteLength;case fn:return s*t*2/n.components*n.byteLength;case ka:return s*t*2/n.components*n.byteLength;case Jc:return s*t*3/n.components*n.byteLength;case ai:return s*t*4/n.components*n.byteLength;case za:return s*t*4/n.components*n.byteLength;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vr:case xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Zo:return Math.max(s,16)*Math.max(t,8)/4;case $o:case Ko:return Math.max(s,8)*Math.max(t,8)/2;case Jo:case Qo:case ta:case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jo:case br:case ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _a:case va:case xa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ya:case Ma:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Er:case Sa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(s){switch(s){case Ke:case qc:return{byteLength:1,components:1};case Ss:case $c:case Ui:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case Mi:case Ua:case vi:return{byteLength:4,components:1};case Yc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yh(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $u(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lf=`#ifdef USE_IRIDESCENCE
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
#endif`,cf=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,$f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Np=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_m=`#define PHONG
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
}`,vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,xm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Mm=`#define TOON
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
}`,Sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,bm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Am=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Yu,alphahash_pars_fragment:Ku,alphamap_fragment:Zu,alphamap_pars_fragment:Ju,alphatest_fragment:Qu,alphatest_pars_fragment:ju,aomap_fragment:tf,aomap_pars_fragment:ef,batching_pars_vertex:nf,batching_vertex:sf,begin_vertex:rf,beginnormal_vertex:of,bsdfs:af,iridescence_fragment:lf,bumpmap_pars_fragment:cf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:uf,clipping_planes_vertex:ff,color_fragment:pf,color_pars_fragment:mf,color_pars_vertex:gf,color_vertex:_f,common:vf,cube_uv_reflection_fragment:xf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:bf,emissivemap_pars_fragment:Ef,colorspace_fragment:wf,colorspace_pars_fragment:Tf,envmap_fragment:Af,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Hf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:If,fog_fragment:Nf,fog_pars_fragment:Uf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:kf,lights_pars_begin:zf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Wf,lights_phong_pars_fragment:Xf,lights_physical_fragment:qf,lights_physical_pars_fragment:$f,lights_fragment_begin:Yf,lights_fragment_maps:Kf,lights_fragment_end:Zf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:ip,map_pars_fragment:np,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:op,metalnessmap_pars_fragment:ap,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:dp,morphtarget_vertex:up,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:Sp,opaque_fragment:bp,packing:Ep,premultiplied_alpha_fragment:wp,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Pp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Np,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:zp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Gp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:$p,worldpos_vertex:Yp,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:jp,cube_frag:tm,depth_vert:em,depth_frag:im,distance_vert:nm,distance_frag:sm,equirect_vert:rm,equirect_frag:om,linedashed_vert:am,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:dm,meshlambert_frag:um,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:ym,meshtoon_vert:Mm,meshtoon_frag:Sm,points_vert:bm,points_frag:Em,shadow_vert:wm,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Pm},mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},gi={basic:{uniforms:ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ke([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ke([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ke([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ke([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ke([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ke([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:ke([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:ke([mt.lights,mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gi.physical={uniforms:ke([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const or={r:0,b:0,g:0},Cm=new ce,Mh=new Ft;Mh.set(-1,0,0,0,1,0,0,0,1);function Rm(s,t,e,i,n,r){const o=new Ot(0);let a=n===!0?0:1,l,c,h=null,f=0,d=null;function m(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const M=b.backgroundBlurriness>0;w=t.get(w,M)}return w}function g(b){let w=!1;const M=m(b);M===null?p(o,a):M&&M.isColor&&(p(M,1),w=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,w){const M=m(w);M&&(M.isCubeTexture||M.mapping===Nr)?(c===void 0&&(c=new Jt(new es(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ts(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mh),c.material.toneMapped=qt.getTransfer(M.colorSpace)!==te,(h!==M||f!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Jt(new jn(2,2),new Si({name:"BackgroundMaterial",uniforms:ts(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=qt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,w){b.getRGB(or,gh(s)),e.buffers.color.setClear(or.r,or.g,or.b,w,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:g,addToRenderList:x,dispose:u}}function Lm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(C,L,k,W,U){let q=!1;const H=f(C,W,k,L);r!==H&&(r=H,c(r.object)),q=m(C,W,k,U),q&&g(C,W,k,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(C,L,k,W),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function f(C,L,k,W){const U=W.wireframe===!0;let q=i[L.id];q===void 0&&(q={},i[L.id]=q);const H=C.isInstancedMesh===!0?C.id:0;let j=q[H];j===void 0&&(j={},q[H]=j);let et=j[k.id];et===void 0&&(et={},j[k.id]=et);let ht=et[U];return ht===void 0&&(ht=d(l()),et[U]=ht),ht}function d(C){const L=[],k=[],W=[];for(let U=0;U<e;U++)L[U]=0,k[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:W,object:C,attributes:{},index:null}}function m(C,L,k,W){const U=r.attributes,q=L.attributes;let H=0;const j=k.getAttributes();for(const et in j)if(j[et].location>=0){const gt=U[et];let Mt=q[et];if(Mt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==W}function g(C,L,k,W){const U={},q=L.attributes;let H=0;const j=k.getAttributes();for(const et in j)if(j[et].location>=0){let gt=q[et];gt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor));const Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),U[et]=Mt,H++}r.attributes=U,r.attributesNum=H,r.index=W}function x(){const C=r.newAttributes;for(let L=0,k=C.length;L<k;L++)C[L]=0}function p(C){u(C,0)}function u(C,L){const k=r.newAttributes,W=r.enabledAttributes,U=r.attributeDivisors;k[C]=1,W[C]===0&&(s.enableVertexAttribArray(C),W[C]=1),U[C]!==L&&(s.vertexAttribDivisor(C,L),U[C]=L)}function b(){const C=r.newAttributes,L=r.enabledAttributes;for(let k=0,W=L.length;k<W;k++)L[k]!==C[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function w(C,L,k,W,U,q,H){H===!0?s.vertexAttribIPointer(C,L,k,U,q):s.vertexAttribPointer(C,L,k,W,U,q)}function M(C,L,k,W){x();const U=W.attributes,q=k.getAttributes(),H=L.defaultAttributeValues;for(const j in q){const et=q[j];if(et.location>=0){let ht=U[j];if(ht===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),ht!==void 0){const gt=ht.normalized,Mt=ht.itemSize,$t=t.get(ht);if($t===void 0)continue;const he=$t.buffer,Yt=$t.type,K=$t.bytesPerElement,at=Yt===s.INT||Yt===s.UNSIGNED_INT||ht.gpuType===Ua;if(ht.isInterleavedBufferAttribute){const it=ht.data,Ut=it.stride,X=ht.offset;if(it.isInstancedInterleavedBuffer){for(let nt=0;nt<et.locationSize;nt++)u(et.location+nt,it.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<et.locationSize;nt++)p(et.location+nt);s.bindBuffer(s.ARRAY_BUFFER,he);for(let nt=0;nt<et.locationSize;nt++)w(et.location+nt,Mt/et.locationSize,Yt,gt,Ut*K,(X+Mt/et.locationSize*nt)*K,at)}else{if(ht.isInstancedBufferAttribute){for(let it=0;it<et.locationSize;it++)u(et.location+it,ht.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let it=0;it<et.locationSize;it++)p(et.location+it);s.bindBuffer(s.ARRAY_BUFFER,he);for(let it=0;it<et.locationSize;it++)w(et.location+it,Mt/et.locationSize,Yt,gt,Mt*K,Mt/et.locationSize*it*K,at)}}else if(H!==void 0){const gt=H[j];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(et.location,gt);break;case 3:s.vertexAttrib3fv(et.location,gt);break;case 4:s.vertexAttrib4fv(et.location,gt);break;default:s.vertexAttrib1fv(et.location,gt)}}}}b()}function A(){y();for(const C in i){const L=i[C];for(const k in L){const W=L[k];for(const U in W){const q=W[U];for(const H in q)h(q[H].object),delete q[H];delete W[U]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const L=i[C.id];for(const k in L){const W=L[k];for(const U in W){const q=W[U];for(const H in q)h(q[H].object),delete q[H];delete W[U]}}delete i[C.id]}function R(C){for(const L in i){const k=i[L];for(const W in k){const U=k[W];if(U[C.id]===void 0)continue;const q=U[C.id];for(const H in q)h(q[H].object),delete q[H];delete U[C.id]}}}function _(C){for(const L in i){const k=i[L],W=C.isInstancedMesh===!0?C.id:0,U=k[W];if(U!==void 0){for(const q in U){const H=U[q];for(const j in H)h(H[j].object),delete H[j];delete U[q]}delete k[W],Object.keys(k).length===0&&delete i[L]}}}function y(){E(),o=!0,r!==n&&(r=n,c(r.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:y,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Dm(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Im(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==ai&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ke&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vi&&!_)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:T}}function Nm(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new Ki,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||n;return n=d,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=s.get(f);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,w=b*4;let M=u.clippingState||null;l.value=M,M=h(g,d,w,m);for(let A=0;A!==w;++A)M[A]=e[A];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const u=m+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,M=m;w!==x;++w,M+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}const Qi=4,sc=[.125,.215,.35,.446,.526,.582],cn=20,Um=256,ds=new Ja,rc=new Ot;let So=null,bo=0,Eo=0,wo=!1;const Fm=new D;class oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:o=256,position:a=Fm}=r;So=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(So,bo,Eo),this._renderer.xr.enabled=wo,t.scissorTest=!1,Fn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===un||t.mapping===Zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Ui,format:ai,colorSpace:wr,depthBuffer:!1},n=ac(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Om(r)),this._blurMaterial=km(r,t,e),this._ggxMaterial=Bm(r,t,e)}return n}_compileMaterial(t){const e=new Jt(new we,t);this._renderer.compile(e,ds)}_sceneToCubeUV(t,e,i,n,r){const l=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(rc),f.toneMapping=li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new es,new Vn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let u=!1;const b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,u=!0):(p.color.copy(rc),u=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const A=this._cubeSize;Fn(n,M*A,w>2?A:0,A,A),f.setRenderTarget(n),u&&f.render(x,l),f.render(t,l)}f.toneMapping=m,f.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===un||t.mapping===Zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const r=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Fn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ds)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,m=f*d,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-Qi?i-g+Qi:0),u=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Fn(r,p,u,3*x,2*x),n.setRenderTarget(r),n.render(a,ds),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Fn(t,p,u,3*x,2*x),n.setRenderTarget(t),n.render(a,ds)}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[n];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):cn;p>cn&&Lt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cn}`);const u=[];let b=0;for(let R=0;R<cn;++R){const _=R/x,y=Math.exp(-_*_/2);u.push(y),R===0?b+=y:R<p&&(b+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const M=this._sizeLods[n],A=3*M*(n>w-Qi?n-w+Qi:0),T=4*(this._cubeSize-M);Fn(e,A,T,3*M,2*M),l.setRenderTarget(e),l.render(f,ds)}}function Om(s){const t=[],e=[],i=[];let n=s;const r=s-Qi+1+sc.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Qi?l=sc[o-s+Qi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,x=3,p=2,u=1,b=new Float32Array(x*g*m),w=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,_=T>2?0:-1,y=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];b.set(y,x*g*T),w.set(d,p*g*T);const E=[T,T,T,T,T,T];M.set(E,u*g*T)}const A=new we;A.setAttribute("position",new ci(b,x)),A.setAttribute("uv",new ci(w,p)),A.setAttribute("faceIndex",new ci(M,u)),i.push(new Jt(A,null)),n>Qi&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ac(s,t,e){const i=new yi(s,t,e);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fn(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Bm(s,t,e){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function km(s,t,e){const i=new Float32Array(cn),n=new D(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:cn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function lc(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cc(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}class Sh extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new oh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new es(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Di});r.uniforms.tEquirect.value=e;const o=new Jt(n,r),a=e.minFilter;return e.minFilter===hn&&(e.minFilter=Fe),new Hu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}function zm(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Vr||m===Wr)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Sh(g.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,g=m===Vr||m===Wr,x=m===un||m===Zn;if(g||x){let p=e.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new oc(s)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const b=d.image;return g&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new oc(s)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,m){return m===Vr?d.mapping=un:m===Wr&&(d.mapping=Zn),d}function l(d){let m=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Hm(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&qn("WebGLRenderer: "+i+" extension not supported."),n}}}function Gm(s,t,e,i){const n={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete n[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(m!==null){const b=m.array;x=m.version;for(let w=0,M=b.length;w<M;w+=3){const A=b[w+0],T=b[w+1],R=b[w+2];d.push(A,T,T,R,R,A)}}else{const b=g.array;x=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const A=w+0,T=w+1,R=w+2;d.push(A,T,T,R,R,A)}}const p=new(g.count>=65535?nh:ih)(d,1);p.version=x;const u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Vm(s,t,e){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let x=0;for(let p=0;p<m;p++)x+=d[p];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xm(s,t,e){const i=new WeakMap,n=new ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*f),_=new th(R,A,T,f);_.type=vi,_.needsUpdate=!0;const y=M*4;for(let C=0;C<f;C++){const L=u[C],k=b[C],W=w[C],U=A*T*4*C;for(let q=0;q<L.count;q++){const H=q*y;g===!0&&(n.fromBufferAttribute(L,q),R[U+H+0]=n.x,R[U+H+1]=n.y,R[U+H+2]=n.z,R[U+H+3]=0),x===!0&&(n.fromBufferAttribute(k,q),R[U+H+4]=n.x,R[U+H+5]=n.y,R[U+H+6]=n.z,R[U+H+7]=0),p===!0&&(n.fromBufferAttribute(W,q),R[U+H+8]=n.x,R[U+H+9]=n.y,R[U+H+10]=n.z,R[U+H+11]=W.itemSize===4?n.w:1)}}d={count:f,texture:_,size:new ot(A,T)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qm(s,t,e,i,n){let r=new WeakMap;function o(c){const h=n.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const $m={[kc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[Hc]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function Ym(s,t,e,i,n,r){const o=new yi(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,depthTexture:n?new Jn(t,e):void 0}),a=new yi(t,e,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new we;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));const c=new Iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Jt(l,c),f=new Ja(-1,1,1,-1,0,1);let d=null,m=null,g=!1,x,p=null,u=[],b=!1;this.setSize=function(w,M){o.setSize(w,M),a.setSize(w,M);for(let A=0;A<u.length;A++){const T=u[A];T.setSize&&T.setSize(w,M)}},this.setEffects=function(w){u=w,b=u.length>0&&u[0].isRenderPass===!0;const M=o.width,A=o.height;for(let T=0;T<u.length;T++){const R=u[T];R.setSize&&R.setSize(M,A)}},this.begin=function(w,M){if(g||w.toneMapping===li&&u.length===0)return!1;if(p=M,M!==null){const A=M.width,T=M.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return b===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=li,!0},this.hasRenderPass=function(){return b},this.end=function(w,M){w.toneMapping=x,g=!0;let A=o,T=a;for(let R=0;R<u.length;R++){const _=u[R];if(_.enabled!==!1&&(_.render(w,T,A,M),_.needsSwap!==!1)){const y=A;A=T,T=y}}if(d!==w.outputColorSpace||m!==w.toneMapping){d=w.outputColorSpace,m=w.toneMapping,c.defines={},qt.getTransfer(d)===te&&(c.defines.SRGB_TRANSFER="");const R=$m[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(h,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const bh=new Oe,Ca=new Jn(1,1),Eh=new th,wh=new Pd,Th=new oh,hc=[],dc=[],uc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function is(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=hc[n];if(r===void 0&&(r=new Float32Array(n),hc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function zr(s,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Km(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function Jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function Qm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function jm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;pc.set(i),s.uniformMatrix2fv(this.addr,!1,pc),Ae(e,i)}}function t0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;fc.set(i),s.uniformMatrix3fv(this.addr,!1,fc),Ae(e,i)}}function e0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;uc.set(i),s.uniformMatrix4fv(this.addr,!1,uc),Ae(e,i)}}function i0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function n0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function s0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function r0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function o0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function a0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function h0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ca.compareFunction=e.isReversedDepthBuffer()?Ga:Ha,r=Ca):r=bh,e.setTexture2D(t||r,n)}function d0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||wh,n)}function u0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Th,n)}function f0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Eh,n)}function p0(s){switch(s){case 5126:return Km;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return jm;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return i0;case 35667:case 35671:return n0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(s,t){s.uniform1fv(this.addr,t)}function g0(s,t){const e=is(t,this.size,2);s.uniform2fv(this.addr,e)}function _0(s,t){const e=is(t,this.size,3);s.uniform3fv(this.addr,e)}function v0(s,t){const e=is(t,this.size,4);s.uniform4fv(this.addr,e)}function x0(s,t){const e=is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function y0(s,t){const e=is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function M0(s,t){const e=is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function S0(s,t){s.uniform1iv(this.addr,t)}function b0(s,t){s.uniform2iv(this.addr,t)}function E0(s,t){s.uniform3iv(this.addr,t)}function w0(s,t){s.uniform4iv(this.addr,t)}function T0(s,t){s.uniform1uiv(this.addr,t)}function A0(s,t){s.uniform2uiv(this.addr,t)}function P0(s,t){s.uniform3uiv(this.addr,t)}function C0(s,t){s.uniform4uiv(this.addr,t)}function R0(s,t,e){const i=this.cache,n=t.length,r=zr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ca:o=bh;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function L0(s,t,e){const i=this.cache,n=t.length,r=zr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||wh,r[o])}function D0(s,t,e){const i=this.cache,n=t.length,r=zr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Th,r[o])}function I0(s,t,e){const i=this.cache,n=t.length,r=zr(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Eh,r[o])}function N0(s){switch(s){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return v0;case 35674:return x0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return b0;case 35668:case 35672:return E0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return A0;case 36295:return P0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}class U0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class F0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}}class O0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function mc(s,t){s.seq.push(t),s.map[t.id]=t}function B0(s,t,e){const i=s.name,n=i.length;for(To.lastIndex=0;;){const r=To.exec(i),o=To.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){mc(e,c===void 0?new U0(a,s,t):new F0(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new O0(a),mc(e,f)),e=f}}}class Mr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);B0(a,l,this)}const n=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function gc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const k0=37297;let z0=0;function H0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const _c=new Ft;function G0(s){qt._getMatrix(_c,qt.workingColorSpace,s);const t=`mat3( ${_c.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case Tr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+H0(s.getShaderSource(t),a)}else return r}function V0(s,t){const e=G0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const W0={[kc]:"Linear",[zc]:"Reinhard",[Hc]:"Cineon",[Sr]:"ACESFilmic",[Vc]:"AgX",[Wc]:"Neutral",[Gc]:"Custom"};function X0(s,t){const e=W0[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new D;function q0(){qt.getLuminanceCoefficients(ar);const s=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Y0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function gs(s){return s!==""}function xc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(s){return s.replace(Z0,Q0)}const J0=new Map;function Q0(s,t){let e=Ht[t];if(e===void 0){const i=J0.get(t);if(i!==void 0)e=Ht[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ra(e)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(s){return s.replace(j0,tg)}function tg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Sc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const eg={[mr]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function ig(s){return eg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ng={[un]:"ENVMAP_TYPE_CUBE",[Zn]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function sg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ng[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const rg={[Zn]:"ENVMAP_MODE_REFRACTION"};function og(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ag={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[od]:"ENVMAP_BLENDING_MIX",[ad]:"ENVMAP_BLENDING_ADD"};function lg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ag[s.combine]||"ENVMAP_BLENDING_NONE"}function cg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hg(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ig(e),c=sg(e),h=og(e),f=lg(e),d=cg(e),m=$0(e),g=Y0(r),x=n.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),u.length>0&&(u+=`
`)):(p=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),u=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Ht.tonemapping_pars_fragment:"",e.toneMapping!==li?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=Ra(o),o=xc(o,e),o=yc(o,e),a=Ra(a),a=xc(a,e),a=yc(a,e),o=Mc(o),a=Mc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=b+p+o,M=b+u+a,A=gc(n,n.VERTEX_SHADER,w),T=gc(n,n.FRAGMENT_SHADER,M);n.attachShader(x,A),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(C){if(s.debug.checkShaderErrors){const L=n.getProgramInfoLog(x)||"",k=n.getShaderInfoLog(A)||"",W=n.getShaderInfoLog(T)||"",U=L.trim(),q=k.trim(),H=W.trim();let j=!0,et=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,A,T);else{const ht=vc(n,A,"vertex"),gt=vc(n,T,"fragment");Xt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+ht+`
`+gt)}else U!==""?Lt("WebGLProgram: Program Info Log:",U):(q===""||H==="")&&(et=!1);et&&(C.diagnostics={runnable:j,programLog:U,vertexShader:{log:q,prefix:p},fragmentShader:{log:H,prefix:u}})}n.deleteShader(A),n.deleteShader(T),_=new Mr(n,x),y=K0(n,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(x,k0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}let dg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fg(t),e.set(t,i)),i}}class fg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function pg(s){return s===fn||s===br||s===Er}function mg(s,t,e,i,n,r){const o=new Wa,a=new ug,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,y,E,C,L,k){const W=C.fog,U=L.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||q,H),et=j&&j.mapping===Nr?j.image.height:null,ht=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const gt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Mt=gt!==void 0?gt.length:0;let $t=0;U.morphAttributes.position!==void 0&&($t=1),U.morphAttributes.normal!==void 0&&($t=2),U.morphAttributes.color!==void 0&&($t=3);let he,Yt,K,at;if(ht){const bt=gi[ht];he=bt.vertexShader,Yt=bt.fragmentShader}else{he=_.vertexShader,Yt=_.fragmentShader;const bt=a.getVertexShaderStage(_),me=a.getFragmentShaderStage(_);a.update(_,bt,me),K=bt.id,at=me.id}const it=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),X=L.isInstancedMesh===!0,nt=L.isBatchedMesh===!0,Dt=!!_.map,It=!!_.matcap,zt=!!j,Wt=!!_.aoMap,Kt=!!_.lightMap,xe=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,Pe=!!_.displacementMap,Re=!!_.emissiveMap,pe=!!_.metalnessMap,ye=!!_.roughnessMap,N=_.anisotropy>0,ze=_.clearcoat>0,jt=_.dispersion>0,P=_.iridescence>0,v=_.sheen>0,O=_.transmission>0,G=N&&!!_.anisotropyMap,$=ze&&!!_.clearcoatMap,rt=ze&&!!_.clearcoatNormalMap,ct=ze&&!!_.clearcoatRoughnessMap,Y=P&&!!_.iridescenceMap,J=P&&!!_.iridescenceThicknessMap,dt=v&&!!_.sheenColorMap,Tt=v&&!!_.sheenRoughnessMap,pt=!!_.specularMap,ut=!!_.specularColorMap,Rt=!!_.specularIntensityMap,Nt=O&&!!_.transmissionMap,Bt=O&&!!_.thicknessMap,I=!!_.gradientMap,lt=!!_.alphaMap,Z=_.alphaTest>0,ft=!!_.alphaHash,xt=!!_.extensions;let tt=li;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(tt=s.toneMapping);const wt={shaderID:ht,shaderType:_.type,shaderName:_.name,vertexShader:he,fragmentShader:Yt,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:nt,batchingColor:nt&&L._colorsTexture!==null,instancing:X,instancingColor:X&&L.instanceColor!==null,instancingMorph:X&&L.morphTexture!==null,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:It,envMap:zt,envMapMode:zt&&j.mapping,envMapCubeUVHeight:et,aoMap:Wt,lightMap:Kt,bumpMap:xe,normalMap:Se,displacementMap:Pe,emissiveMap:Re,normalMapObjectSpace:Se&&_.normalMapType===hd,normalMapTangentSpace:Se&&_.normalMapType===ba,packedNormalMap:Se&&_.normalMapType===ba&&pg(_.normalMap.format),metalnessMap:pe,roughnessMap:ye,anisotropy:N,anisotropyMap:G,clearcoat:ze,clearcoatMap:$,clearcoatNormalMap:rt,clearcoatRoughnessMap:ct,dispersion:jt,iridescence:P,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:v,sheenColorMap:dt,sheenRoughnessMap:Tt,specularMap:pt,specularColorMap:ut,specularIntensityMap:Rt,transmission:O,transmissionMap:Nt,thicknessMap:Bt,gradientMap:I,opaque:_.transparent===!1&&_.blending===Xn&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:Z,alphaHash:ft,combine:_.combine,mapUv:Dt&&g(_.map.channel),aoMapUv:Wt&&g(_.aoMap.channel),lightMapUv:Kt&&g(_.lightMap.channel),bumpMapUv:xe&&g(_.bumpMap.channel),normalMapUv:Se&&g(_.normalMap.channel),displacementMapUv:Pe&&g(_.displacementMap.channel),emissiveMapUv:Re&&g(_.emissiveMap.channel),metalnessMapUv:pe&&g(_.metalnessMap.channel),roughnessMapUv:ye&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:$&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(_.sheenRoughnessMap.channel),specularMapUv:pt&&g(_.specularMap.channel),specularColorMapUv:ut&&g(_.specularColorMap.channel),specularIntensityMapUv:Rt&&g(_.specularIntensityMap.channel),transmissionMapUv:Nt&&g(_.transmissionMap.channel),thicknessMapUv:Bt&&g(_.thicknessMap.channel),alphaMapUv:lt&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Se||N),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Dt||lt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ut,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:$t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===te,decodeVideoTextureEmissive:Re&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ti,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const E in _.defines)y.push(E),y.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(u(y,_),b(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function u(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function b(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const y=m[_.type];let E;if(y){const C=gi[y];E=Ru.clone(C.uniforms)}else E=_.uniforms;return E}function M(_,y){let E=h.get(y);return E!==void 0?++E.usedTimes:(E=new hg(s,y,_,n),c.push(E),h.set(y,E)),E}function A(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function gg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function _g(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function bc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ec(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,g,x,p,u){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:u},s[t]=b):(b.id=d.id,b.object=d,b.geometry=m,b.material=g,b.materialVariant=o(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=p,b.group=u),t++,b}function l(d,m,g,x,p,u){const b=a(d,m,g,x,p,u);g.transmission>0?i.push(b):g.transparent===!0?n.push(b):e.push(b)}function c(d,m,g,x,p,u){const b=a(d,m,g,x,p,u);g.transmission>0?i.unshift(b):g.transparent===!0?n.unshift(b):e.unshift(b)}function h(d,m,g){e.length>1&&e.sort(d||_g),i.length>1&&i.sort(m||bc),n.length>1&&n.sort(m||bc),g&&(e.reverse(),i.reverse(),n.reverse())}function f(){for(let d=t,m=s.length;d<m;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function vg(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new Ec,s.set(i,[o])):n>=r.length?(o=new Ec,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ot};break;case"SpotLight":e={position:new D,direction:new D,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function yg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Mg=0;function Sg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bg(s){const t=new xg,e=yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,r=new ce,o=new ce;function a(c){let h=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,b=0,w=0,M=0,A=0,T=0,R=0;c.sort(Sg);for(let y=0,E=c.length;y<E;y++){const C=c[y],L=C.color,k=C.intensity,W=C.distance;let U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===fn?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*k,f+=L.g*k,d+=L.b*k;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],k);R++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,j=e.get(C);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=q,m++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(L).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[x]=q;const H=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,H.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=H.matrix,C.castShadow){const j=e.get(C);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=U,M++}x++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(L).multiplyScalar(k),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=q,p++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const H=C.shadow,j=e.get(C);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(k),q.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[u]=q,u++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==m||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==p||_.hemiLength!==u||_.numDirectionalShadows!==b||_.numPointShadows!==w||_.numSpotShadows!==M||_.numSpotMaps!==A||_.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,_.directionalLength=m,_.pointLength=g,_.spotLength=x,_.rectAreaLength=p,_.hemiLength=u,_.numDirectionalShadows=b,_.numPointShadows=w,_.numSpotShadows=M,_.numSpotMaps=A,_.numLightProbes=R,i.version=Mg++)}function l(c,h){let f=0,d=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const w=c[u];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(w.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function wc(s){const t=new bg(s),e=[],i=[],n=[];function r(d){f.camera=d,e.length=0,i.length=0,n.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Eg(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new wc(s),t.set(n,[a])):r>=o.length?(a=new wc(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ag=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Pg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Tc=new ce,us=new D,Ao=new D;function Cg(s,t,e){let i=new Xa;const n=new ot,r=new ot,o=new ue,a=new Nu,l=new Uu,c={},h=e.maxTextureSize,f={[ji]:We,[We]:ji,[ti]:ti},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let u=this.type;this.render=function(T,R,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Hh&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mr);const y=s.getRenderTarget(),E=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Di),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=u!==this.type;k&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(U=>U.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,U=T.length;W<U;W++){const q=T[W],H=q.shadow;if(H===void 0){Lt("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const j=H.getFrameExtents();n.multiply(j),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/j.x),n.x=r.x*j.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/j.y),n.y=r.y*j.y,H.mapSize.y=r.y));const et=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=et,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ps){if(q.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new yi(n.x,n.y,{format:fn,type:Ui,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Jn(n.x,n.y,vi),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Fi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De}else q.isPointLight?(H.map=new Sh(n.x),H.map.depthTexture=new Zd(n.x,Mi)):(H.map=new yi(n.x,n.y),H.map.depthTexture=new Jn(n.x,n.y,Mi)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Fi,this.type===mr?(H.map.depthTexture.compareFunction=et?Ga:Ha,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De);H.camera.updateProjectionMatrix()}const ht=H.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ht;gt++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,gt),s.clear();else{gt===0&&(s.setRenderTarget(H.map),s.clear());const Mt=H.getViewport(gt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),L.viewport(o)}if(q.isPointLight){const Mt=H.camera,$t=H.matrix,he=q.distance||Mt.far;he!==Mt.far&&(Mt.far=he,Mt.updateProjectionMatrix()),us.setFromMatrixPosition(q.matrixWorld),Mt.position.copy(us),Ao.copy(Mt.position),Ao.add(Ag[gt]),Mt.up.copy(Pg[gt]),Mt.lookAt(Ao),Mt.updateMatrixWorld(),$t.makeTranslation(-us.x,-us.y,-us.z),Tc.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Tc,Mt.coordinateSystem,Mt.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),M(R,_,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===ps&&b(H,_),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(y,E,C)};function b(T,R){const _=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(n.x,n.y,{format:fn,type:Ui})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,_,d,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,_,m,x,null)}function w(T,R,_,y){let E=null;const C=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)E=C;else if(E=_.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=E.uuid,k=R.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let U=W[k];U===void 0&&(U=E.clone(),W[k]=U,R.addEventListener("dispose",A)),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,y===ps?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=s.properties.get(E);L.light=_}return E}function M(T,R,_,y,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===ps)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const k=t.update(T),W=T.material;if(Array.isArray(W)){const U=k.groups;for(let q=0,H=U.length;q<H;q++){const j=U[q],et=W[j.materialIndex];if(et&&et.visible){const ht=w(T,et,y,E);T.onBeforeShadow(s,T,R,_,k,ht,j),s.renderBufferDirect(_,null,k,ht,T,j),T.onAfterShadow(s,T,R,_,k,ht,j)}}}else if(W.visible){const U=w(T,W,y,E);T.onBeforeShadow(s,T,R,_,k,U,null),s.renderBufferDirect(_,null,k,U,T,null),T.onAfterShadow(s,T,R,_,k,U,null)}}const L=T.children;for(let k=0,W=L.length;k<W;k++)M(L[k],R,_,y,E)}function A(T){T.target.removeEventListener("dispose",A);for(const _ in c){const y=c[_],E=T.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Rg(s,t){function e(){let I=!1;const lt=new ue;let Z=null;const ft=new ue(0,0,0,0);return{setMask:function(xt){Z!==xt&&!I&&(s.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){I=xt},setClear:function(xt,tt,wt,bt,me){me===!0&&(xt*=bt,tt*=bt,wt*=bt),lt.set(xt,tt,wt,bt),ft.equals(lt)===!1&&(s.clearColor(xt,tt,wt,bt),ft.copy(lt))},reset:function(){I=!1,Z=null,ft.set(-1,0,0,0)}}}function i(){let I=!1,lt=!1,Z=null,ft=null,xt=null;return{setReversed:function(tt){if(lt!==tt){const wt=t.get("EXT_clip_control");tt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),lt=tt;const bt=xt;xt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(tt){tt?it(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!I&&(s.depthMask(tt),Z=tt)},setFunc:function(tt){if(lt&&(tt=yd[tt]),ft!==tt){switch(tt){case Bo:s.depthFunc(s.NEVER);break;case ko:s.depthFunc(s.ALWAYS);break;case zo:s.depthFunc(s.LESS);break;case Kn:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Go:s.depthFunc(s.GEQUAL);break;case Vo:s.depthFunc(s.GREATER);break;case Wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=tt}},setLocked:function(tt){I=tt},setClear:function(tt){xt!==tt&&(xt=tt,lt&&(tt=1-tt),s.clearDepth(tt))},reset:function(){I=!1,Z=null,ft=null,xt=null,lt=!1}}}function n(){let I=!1,lt=null,Z=null,ft=null,xt=null,tt=null,wt=null,bt=null,me=null;return{setTest:function(ae){I||(ae?it(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!I&&(s.stencilMask(ae),lt=ae)},setFunc:function(ae,hi,di){(Z!==ae||ft!==hi||xt!==di)&&(s.stencilFunc(ae,hi,di),Z=ae,ft=hi,xt=di)},setOp:function(ae,hi,di){(tt!==ae||wt!==hi||bt!==di)&&(s.stencilOp(ae,hi,di),tt=ae,wt=hi,bt=di)},setLocked:function(ae){I=ae},setClear:function(ae){me!==ae&&(s.clearStencil(ae),me=ae)},reset:function(){I=!1,lt=null,Z=null,ft=null,xt=null,tt=null,wt=null,bt=null,me=null}}}const r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},f={},d={},m=new WeakMap,g=[],x=null,p=!1,u=null,b=null,w=null,M=null,A=null,T=null,R=null,_=new Ot(0,0,0),y=0,E=!1,C=null,L=null,k=null,W=null,U=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(et)[1]),H=j>=1):et.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),H=j>=2);let ht=null,gt={};const Mt=s.getParameter(s.SCISSOR_BOX),$t=s.getParameter(s.VIEWPORT),he=new ue().fromArray(Mt),Yt=new ue().fromArray($t);function K(I,lt,Z,ft){const xt=new Uint8Array(4),tt=s.createTexture();s.bindTexture(I,tt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let wt=0;wt<Z;wt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(lt+wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return tt}const at={};at[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(Kn),xe(!1),Se(fl),it(s.CULL_FACE),Wt(Di);function it(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ut(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function X(I,lt){return d[I]!==lt?(s.bindFramebuffer(I,lt),d[I]=lt,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function nt(I,lt){let Z=g,ft=!1;if(I){Z=m.get(lt),Z===void 0&&(Z=[],m.set(lt,Z));const xt=I.textures;if(Z.length!==xt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,wt=xt.length;tt<wt;tt++)Z[tt]=s.COLOR_ATTACHMENT0+tt;Z.length=xt.length,ft=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,ft=!0);ft&&s.drawBuffers(Z)}function Dt(I){return x!==I?(s.useProgram(I),x=I,!0):!1}const It={[ln]:s.FUNC_ADD,[Vh]:s.FUNC_SUBTRACT,[Wh]:s.FUNC_REVERSE_SUBTRACT};It[Xh]=s.MIN,It[qh]=s.MAX;const zt={[$h]:s.ZERO,[Yh]:s.ONE,[Kh]:s.SRC_COLOR,[Fo]:s.SRC_ALPHA,[ed]:s.SRC_ALPHA_SATURATE,[jh]:s.DST_COLOR,[Jh]:s.DST_ALPHA,[Zh]:s.ONE_MINUS_SRC_COLOR,[Oo]:s.ONE_MINUS_SRC_ALPHA,[td]:s.ONE_MINUS_DST_COLOR,[Qh]:s.ONE_MINUS_DST_ALPHA,[id]:s.CONSTANT_COLOR,[nd]:s.ONE_MINUS_CONSTANT_COLOR,[sd]:s.CONSTANT_ALPHA,[rd]:s.ONE_MINUS_CONSTANT_ALPHA};function Wt(I,lt,Z,ft,xt,tt,wt,bt,me,ae){if(I===Di){p===!0&&(Ut(s.BLEND),p=!1);return}if(p===!1&&(it(s.BLEND),p=!0),I!==Gh){if(I!==u||ae!==E){if((b!==ln||A!==ln)&&(s.blendEquation(s.FUNC_ADD),b=ln,A=ln),ae)switch(I){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFunc(s.ONE,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",I);break}else switch(I){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ml:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",I);break}w=null,M=null,T=null,R=null,_.set(0,0,0),y=0,u=I,E=ae}return}xt=xt||lt,tt=tt||Z,wt=wt||ft,(lt!==b||xt!==A)&&(s.blendEquationSeparate(It[lt],It[xt]),b=lt,A=xt),(Z!==w||ft!==M||tt!==T||wt!==R)&&(s.blendFuncSeparate(zt[Z],zt[ft],zt[tt],zt[wt]),w=Z,M=ft,T=tt,R=wt),(bt.equals(_)===!1||me!==y)&&(s.blendColor(bt.r,bt.g,bt.b,me),_.copy(bt),y=me),u=I,E=!1}function Kt(I,lt){I.side===ti?Ut(s.CULL_FACE):it(s.CULL_FACE);let Z=I.side===We;lt&&(Z=!Z),xe(Z),I.blending===Xn&&I.transparent===!1?Wt(Di):Wt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;a.setTest(ft),ft&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function xe(I){C!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),C=I)}function Se(I){I!==kh?(it(s.CULL_FACE),I!==L&&(I===fl?s.cullFace(s.BACK):I===zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),L=I}function Pe(I){I!==k&&(H&&s.lineWidth(I),k=I)}function Re(I,lt,Z){I?(it(s.POLYGON_OFFSET_FILL),(W!==lt||U!==Z)&&(W=lt,U=Z,o.getReversed()&&(lt=-lt),s.polygonOffset(lt,Z))):Ut(s.POLYGON_OFFSET_FILL)}function pe(I){I?it(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function ye(I){I===void 0&&(I=s.TEXTURE0+q-1),ht!==I&&(s.activeTexture(I),ht=I)}function N(I,lt,Z){Z===void 0&&(ht===null?Z=s.TEXTURE0+q-1:Z=ht);let ft=gt[Z];ft===void 0&&(ft={type:void 0,texture:void 0},gt[Z]=ft),(ft.type!==I||ft.texture!==lt)&&(ht!==Z&&(s.activeTexture(Z),ht=Z),s.bindTexture(I,lt||at[I]),ft.type=I,ft.texture=lt)}function ze(){const I=gt[ht];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function jt(){try{s.compressedTexImage2D(...arguments)}catch(I){Xt("WebGLState:",I)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(I){Xt("WebGLState:",I)}}function v(){try{s.texSubImage2D(...arguments)}catch(I){Xt("WebGLState:",I)}}function O(){try{s.texSubImage3D(...arguments)}catch(I){Xt("WebGLState:",I)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Xt("WebGLState:",I)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Xt("WebGLState:",I)}}function rt(){try{s.texStorage2D(...arguments)}catch(I){Xt("WebGLState:",I)}}function ct(){try{s.texStorage3D(...arguments)}catch(I){Xt("WebGLState:",I)}}function Y(){try{s.texImage2D(...arguments)}catch(I){Xt("WebGLState:",I)}}function J(){try{s.texImage3D(...arguments)}catch(I){Xt("WebGLState:",I)}}function dt(I){return f[I]!==void 0?f[I]:s.getParameter(I)}function Tt(I,lt){f[I]!==lt&&(s.pixelStorei(I,lt),f[I]=lt)}function pt(I){he.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function ut(I){Yt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Yt.copy(I))}function Rt(I,lt){let Z=c.get(lt);Z===void 0&&(Z=new WeakMap,c.set(lt,Z));let ft=Z.get(I);ft===void 0&&(ft=s.getUniformBlockIndex(lt,I.name),Z.set(I,ft))}function Nt(I,lt){const ft=c.get(lt).get(I);l.get(lt)!==ft&&(s.uniformBlockBinding(lt,ft,I.__bindingPointIndex),l.set(lt,ft))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},ht=null,gt={},d={},m=new WeakMap,g=[],x=null,p=!1,u=null,b=null,w=null,M=null,A=null,T=null,R=null,_=new Ot(0,0,0),y=0,E=!1,C=null,L=null,k=null,W=null,U=null,he.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Ut,bindFramebuffer:X,drawBuffers:nt,useProgram:Dt,setBlending:Wt,setMaterial:Kt,setFlipSided:xe,setCullFace:Se,setLineWidth:Pe,setPolygonOffset:Re,setScissorTest:pe,activeTexture:ye,bindTexture:N,unbindTexture:ze,compressedTexImage2D:jt,compressedTexImage3D:P,texImage2D:Y,texImage3D:J,pixelStorei:Tt,getParameter:dt,updateUBOMapping:Rt,uniformBlockBinding:Nt,texStorage2D:rt,texStorage3D:ct,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:pt,viewport:ut,reset:Bt}}function Lg(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return g?new OffscreenCanvas(P,v):Ar("canvas")}function p(P,v,O){let G=1;const $=jt(P);if(($.width>O||$.height>O)&&(G=O/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const rt=Math.floor(G*$.width),ct=Math.floor(G*$.height);d===void 0&&(d=x(rt,ct));const Y=v?x(rt,ct):d;return Y.width=rt,Y.height=ct,Y.getContext("2d").drawImage(P,0,0,rt,ct),Lt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+rt+"x"+ct+")."),Y}else return"data"in P&&Lt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function u(P){return P.generateMipmaps}function b(P){s.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,v,O,G,$,rt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct;G&&(ct=t.get("EXT_texture_norm16"),ct||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),O===s.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),v===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),O===s.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),O===s.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),v===s.RGBA){const J=rt?Tr:qt.getTransfer($);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=J===te?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),O===s.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function A(P,v){let O;return P?v===null||v===Mi||v===bs?O=s.DEPTH24_STENCIL8:v===vi?O=s.DEPTH32F_STENCIL8:v===Ss&&(O=s.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===bs?O=s.DEPTH_COMPONENT24:v===vi?O=s.DEPTH_COMPONENT32F:v===Ss&&(O=s.DEPTH_COMPONENT16),O}function T(P,v){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==De&&P.minFilter!==Fe?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function R(P){const v=P.target;v.removeEventListener("dispose",R),y(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function _(P){const v=P.target;v.removeEventListener("dispose",_),C(v)}function y(P){const v=i.get(P);if(v.__webglInit===void 0)return;const O=P.source,G=m.get(O);if(G){const $=G[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(P),Object.keys(G).length===0&&m.delete(O)}i.remove(P)}function E(P){const v=i.get(P);s.deleteTexture(v.__webglTexture);const O=P.source,G=m.get(O);delete G[v.__cacheKey],o.memory.textures--}function C(P){const v=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let $=0;$<v.__webglFramebuffer[G].length;$++)s.deleteFramebuffer(v.__webglFramebuffer[G][$]);else s.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)s.deleteFramebuffer(v.__webglFramebuffer[G]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=P.textures;for(let G=0,$=O.length;G<$;G++){const rt=i.get(O[G]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(O[G])}i.remove(P)}let L=0;function k(){L=0}function W(){return L}function U(P){L=P}function q(){const P=L;return P>=n.maxTextures&&Lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),L+=1,P}function H(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function j(P,v){const O=i.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const G=P.image;if(G===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(O,P,v);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function et(P,v){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Ut(O,P,v);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function ht(P,v){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Ut(O,P,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function gt(P,v){const O=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){X(O,P,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const Mt={[Xo]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[qo]:s.MIRRORED_REPEAT},$t={[De]:s.NEAREST,[ld]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[Fe]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[hn]:s.LINEAR_MIPMAP_LINEAR},he={[dd]:s.NEVER,[gd]:s.ALWAYS,[ud]:s.LESS,[Ha]:s.LEQUAL,[fd]:s.EQUAL,[Ga]:s.GEQUAL,[pd]:s.GREATER,[md]:s.NOTEQUAL};function Yt(P,v){if(v.type===vi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Fe||v.magFilter===Xr||v.magFilter===Is||v.magFilter===hn||v.minFilter===Fe||v.minFilter===Xr||v.minFilter===Is||v.minFilter===hn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Mt[v.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Mt[v.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Mt[v.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,$t[v.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,$t[v.minFilter]),v.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===De||v.minFilter!==Is&&v.minFilter!==hn||v.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(P,v){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",R));const G=v.source;let $=m.get(G);$===void 0&&($={},m.set(G,$));const rt=H(v);if(rt!==P.__cacheKey){$[rt]===void 0&&($[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[rt].usedTimes++;const ct=$[P.__cacheKey];ct!==void 0&&($[P.__cacheKey].usedTimes--,ct.usedTimes===0&&E(v)),P.__cacheKey=rt,P.__webglTexture=$[rt].texture}return O}function at(P,v,O){return Math.floor(Math.floor(P/O)/v)}function it(P,v,O,G){const rt=P.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,G,v.data);else{rt.sort((Tt,pt)=>Tt.start-pt.start);let ct=0;for(let Tt=1;Tt<rt.length;Tt++){const pt=rt[ct],ut=rt[Tt],Rt=pt.start+pt.count,Nt=at(ut.start,v.width,4),Bt=at(pt.start,v.width,4);ut.start<=Rt+1&&Nt===Bt&&at(ut.start+ut.count-1,v.width,4)===Nt?pt.count=Math.max(pt.count,ut.start+ut.count-pt.start):(++ct,rt[ct]=ut)}rt.length=ct+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Tt=0,pt=rt.length;Tt<pt;Tt++){const ut=rt[Tt],Rt=Math.floor(ut.start/4),Nt=Math.ceil(ut.count/4),Bt=Rt%v.width,I=Math.floor(Rt/v.width),lt=Nt,Z=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Bt,I,lt,Z,O,G,v.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function Ut(P,v,O){let G=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=s.TEXTURE_3D);const $=K(P,v),rt=v.source;e.bindTexture(G,P.__webglTexture,s.TEXTURE0+O);const ct=i.get(rt);if(rt.version!==ct.__version||$===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Z=qt.getPrimaries(qt.workingColorSpace),ft=v.colorSpace===Ji?null:qt.getPrimaries(v.colorSpace),xt=v.colorSpace===Ji||Z===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let J=p(v.image,!1,n.maxTextureSize);J=ze(v,J);const dt=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let pt=M(v.internalFormat,dt,Tt,v.normalized,v.colorSpace,v.isVideoTexture);Yt(G,v);let ut;const Rt=v.mipmaps,Nt=v.isVideoTexture!==!0,Bt=ct.__version===void 0||$===!0,I=rt.dataReady,lt=T(v,J);if(v.isDepthTexture)pt=A(v.format===dn,v.type),Bt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,pt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,pt,J.width,J.height,0,dt,Tt,null));else if(v.isDataTexture)if(Rt.length>0){Nt&&Bt&&e.texStorage2D(s.TEXTURE_2D,lt,pt,Rt[0].width,Rt[0].height);for(let Z=0,ft=Rt.length;Z<ft;Z++)ut=Rt[Z],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ut.width,ut.height,dt,Tt,ut.data):e.texImage2D(s.TEXTURE_2D,Z,pt,ut.width,ut.height,0,dt,Tt,ut.data);v.generateMipmaps=!1}else Nt?(Bt&&e.texStorage2D(s.TEXTURE_2D,lt,pt,J.width,J.height),I&&it(v,J,dt,Tt)):e.texImage2D(s.TEXTURE_2D,0,pt,J.width,J.height,0,dt,Tt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,pt,Rt[0].width,Rt[0].height,J.depth);for(let Z=0,ft=Rt.length;Z<ft;Z++)if(ut=Rt[Z],v.format!==ai)if(dt!==null)if(Nt){if(I)if(v.layerUpdates.size>0){const xt=nc(ut.width,ut.height,v.format,v.type);for(const tt of v.layerUpdates){const wt=ut.data.subarray(tt*xt/ut.data.BYTES_PER_ELEMENT,(tt+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,tt,ut.width,ut.height,1,dt,wt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ut.width,ut.height,J.depth,dt,ut.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,pt,ut.width,ut.height,J.depth,0,ut.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ut.width,ut.height,J.depth,dt,Tt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,pt,ut.width,ut.height,J.depth,0,dt,Tt,ut.data)}else{Nt&&Bt&&e.texStorage2D(s.TEXTURE_2D,lt,pt,Rt[0].width,Rt[0].height);for(let Z=0,ft=Rt.length;Z<ft;Z++)ut=Rt[Z],v.format!==ai?dt!==null?Nt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,pt,ut.width,ut.height,0,ut.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ut.width,ut.height,dt,Tt,ut.data):e.texImage2D(s.TEXTURE_2D,Z,pt,ut.width,ut.height,0,dt,Tt,ut.data)}else if(v.isDataArrayTexture)if(Nt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,pt,J.width,J.height,J.depth),I)if(v.layerUpdates.size>0){const Z=nc(J.width,J.height,v.format,v.type);for(const ft of v.layerUpdates){const xt=J.data.subarray(ft*Z/J.data.BYTES_PER_ELEMENT,(ft+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ft,J.width,J.height,1,dt,Tt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Tt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,pt,J.width,J.height,J.depth,0,dt,Tt,J.data);else if(v.isData3DTexture)Nt?(Bt&&e.texStorage3D(s.TEXTURE_3D,lt,pt,J.width,J.height,J.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Tt,J.data)):e.texImage3D(s.TEXTURE_3D,0,pt,J.width,J.height,J.depth,0,dt,Tt,J.data);else if(v.isFramebufferTexture){if(Bt)if(Nt)e.texStorage2D(s.TEXTURE_2D,lt,pt,J.width,J.height);else{let Z=J.width,ft=J.height;for(let xt=0;xt<lt;xt++)e.texImage2D(s.TEXTURE_2D,xt,pt,Z,ft,0,dt,Tt,null),Z>>=1,ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){const Z=s.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(v),Z.onpaint=ft=>{const xt=ft.changedElements;for(const tt of f)xt.includes(tt.image)&&(tt.needsUpdate=!0)},Z.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const xt=s.RGBA,tt=s.RGBA,wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,tt,wt,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Nt&&Bt){const Z=jt(Rt[0]);e.texStorage2D(s.TEXTURE_2D,lt,pt,Z.width,Z.height)}for(let Z=0,ft=Rt.length;Z<ft;Z++)ut=Rt[Z],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,dt,Tt,ut):e.texImage2D(s.TEXTURE_2D,Z,pt,dt,Tt,ut);v.generateMipmaps=!1}else if(Nt){if(Bt){const Z=jt(J);e.texStorage2D(s.TEXTURE_2D,lt,pt,Z.width,Z.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Tt,J)}else e.texImage2D(s.TEXTURE_2D,0,pt,dt,Tt,J);u(v)&&b(G),ct.__version=rt.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function X(P,v,O){if(v.image.length!==6)return;const G=K(P,v),$=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+O);const rt=i.get($);if($.version!==rt.__version||G===!0){e.activeTexture(s.TEXTURE0+O);const ct=qt.getPrimaries(qt.workingColorSpace),Y=v.colorSpace===Ji?null:qt.getPrimaries(v.colorSpace),J=v.colorSpace===Ji||ct===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const dt=v.isCompressedTexture||v.image[0].isCompressedTexture,Tt=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++)!dt&&!Tt?pt[tt]=p(v.image[tt],!0,n.maxCubemapSize):pt[tt]=Tt?v.image[tt].image:v.image[tt],pt[tt]=ze(v,pt[tt]);const ut=pt[0],Rt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),Bt=M(v.internalFormat,Rt,Nt,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,lt=rt.__version===void 0||G===!0,Z=$.dataReady;let ft=T(v,ut);Yt(s.TEXTURE_CUBE_MAP,v);let xt;if(dt){I&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Bt,ut.width,ut.height);for(let tt=0;tt<6;tt++){xt=pt[tt].mipmaps;for(let wt=0;wt<xt.length;wt++){const bt=xt[wt];v.format!==ai?Rt!==null?I?Z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,Bt,bt.width,bt.height,0,bt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,bt.width,bt.height,Rt,Nt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,Bt,bt.width,bt.height,0,Rt,Nt,bt.data)}}}else{if(xt=v.mipmaps,I&&lt){xt.length>0&&ft++;const tt=jt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Bt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Tt){I?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,Rt,Nt,pt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Bt,pt[tt].width,pt[tt].height,0,Rt,Nt,pt[tt].data);for(let wt=0;wt<xt.length;wt++){const me=xt[wt].image[tt].image;I?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,me.width,me.height,Rt,Nt,me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,Bt,me.width,me.height,0,Rt,Nt,me.data)}}else{I?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt,Nt,pt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Bt,Rt,Nt,pt[tt]);for(let wt=0;wt<xt.length;wt++){const bt=xt[wt];I?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,Rt,Nt,bt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,Bt,Rt,Nt,bt.image[tt])}}}u(v)&&b(s.TEXTURE_CUBE_MAP),rt.__version=$.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function nt(P,v,O,G,$,rt){const ct=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),J=M(O.internalFormat,ct,Y,O.normalized,O.colorSpace),dt=i.get(v),Tt=i.get(O);if(Tt.__renderTarget=v,!dt.__hasExternalTextures){const pt=Math.max(1,v.width>>rt),ut=Math.max(1,v.height>>rt);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,rt,J,pt,ut,v.depth,0,ct,Y,null):e.texImage2D($,rt,J,pt,ut,0,ct,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ye(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,$,Tt.__webglTexture,0,pe(v)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,$,Tt.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(P,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,P),v.depthBuffer){const G=v.depthTexture,$=G&&G.isDepthTexture?G.type:null,rt=A(v.stencilBuffer,$),ct=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ye(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(v),rt,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(v),rt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,rt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,P)}else{const G=v.textures;for(let $=0;$<G.length;$++){const rt=G[$],ct=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),J=M(rt.internalFormat,ct,Y,rt.normalized,rt.colorSpace);ye(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(v),J,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(v),J,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(P,v,O){const G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,v.depthTexture);const dt=r.convert(v.depthTexture.format),Tt=r.convert(v.depthTexture.type);let pt;v.depthTexture.format===Fi?pt=s.DEPTH_COMPONENT24:v.depthTexture.format===dn&&(pt=s.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,v.width,v.height,0,dt,Tt,null)}}else j(v.depthTexture,0);const rt=$.__webglTexture,ct=pe(v),Y=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,J=v.depthTexture.format===dn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Fi)ye(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Y,rt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,J,Y,rt,0);else if(v.depthTexture.format===dn)ye(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Y,rt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,J,Y,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(P){const v=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const G=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=G}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)It(v.__webglFramebuffer[G],P,G);else{const G=P.texture.mipmaps;G&&G.length>0?It(v.__webglFramebuffer[0],P,0):It(v.__webglFramebuffer,P,0)}else if(O){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=s.createRenderbuffer(),Dt(v.__webglDepthbuffer[G],P,!1);else{const $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,rt)}}else{const G=P.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Dt(v.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,rt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(P,v,O){const G=i.get(P);v!==void 0&&nt(G.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&zt(P)}function Kt(P){const v=P.texture,O=i.get(P),G=i.get(v);P.addEventListener("dispose",_);const $=P.textures,rt=P.isWebGLCubeRenderTarget===!0,ct=$.length>1;if(ct||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=v.version,o.memory.textures++),rt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let J=0;J<v.mipmaps.length;J++)O.__webglFramebuffer[Y][J]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ct)for(let Y=0,J=$.length;Y<J;Y++){const dt=i.get($[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const J=$[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const dt=r.convert(J.format,J.colorSpace),Tt=r.convert(J.type),pt=M(J.internalFormat,dt,Tt,J.normalized,J.colorSpace,P.isXRRenderTarget===!0),ut=pe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)nt(O.__webglFramebuffer[Y][J],P,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else nt(O.__webglFramebuffer[Y],P,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);u(v)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Y=0,J=$.length;Y<J;Y++){const dt=$[Y],Tt=i.get(dt);let pt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Tt.__webglTexture),Yt(pt,dt),nt(O.__webglFramebuffer,P,dt,s.COLOR_ATTACHMENT0+Y,pt,0),u(dt)&&b(pt)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Y=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,G.__webglTexture),Yt(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)nt(O.__webglFramebuffer[J],P,v,s.COLOR_ATTACHMENT0,Y,J);else nt(O.__webglFramebuffer,P,v,s.COLOR_ATTACHMENT0,Y,0);u(v)&&b(Y),e.unbindTexture()}P.depthBuffer&&zt(P)}function xe(P){const v=P.textures;for(let O=0,G=v.length;O<G;O++){const $=v[O];if(u($)){const rt=w(P),ct=i.get($).__webglTexture;e.bindTexture(rt,ct),b(rt),e.unbindTexture()}}}const Se=[],Pe=[];function Re(P){if(P.samples>0){if(ye(P)===!1){const v=P.textures,O=P.width,G=P.height;let $=s.COLOR_BUFFER_BIT;const rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=i.get(P),Y=v.length>1;if(Y)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const J=P.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);const Tt=i.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,O,G,0,0,O,G,$,s.NEAREST),l===!0&&(Se.length=0,Pe.length=0,Se.push(s.COLOR_ATTACHMENT0+dt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Se.push(rt),Pe.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Pe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);const Tt=i.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const v=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function pe(P){return Math.min(n.maxSamples,P.samples)}function ye(P){const v=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(P){const v=o.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function ze(P,v){const O=P.colorSpace,G=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==wr&&O!==Ji&&(qt.getTransfer(O)===te?(G!==ai||$!==Ke)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",O)),v}function jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=W,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=et,this.setTexture3D=ht,this.setTextureCube=gt,this.rebindTextures=Wt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dg(s,t){function e(i,n=Ji){let r;const o=qt.getTransfer(n);if(i===Ke)return s.UNSIGNED_BYTE;if(i===Fa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Oa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Yc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Kc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return s.BYTE;if(i===$c)return s.SHORT;if(i===Ss)return s.UNSIGNED_SHORT;if(i===Ua)return s.INT;if(i===Mi)return s.UNSIGNED_INT;if(i===vi)return s.FLOAT;if(i===Ui)return s.HALF_FLOAT;if(i===Zc)return s.ALPHA;if(i===Jc)return s.RGB;if(i===ai)return s.RGBA;if(i===Fi)return s.DEPTH_COMPONENT;if(i===dn)return s.DEPTH_STENCIL;if(i===Qc)return s.RED;if(i===Ba)return s.RED_INTEGER;if(i===fn)return s.RG;if(i===ka)return s.RG_INTEGER;if(i===za)return s.RGBA_INTEGER;if(i===gr||i===_r||i===vr||i===xr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$o||i===Yo||i===Ko||i===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jo||i===Qo||i===jo||i===ta||i===ea||i===br||i===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jo||i===Qo)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ta)return r.COMPRESSED_R11_EAC;if(i===ea)return r.COMPRESSED_SIGNED_R11_EAC;if(i===br)return r.COMPRESSED_RG11_EAC;if(i===ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===na||i===sa||i===ra||i===oa||i===aa||i===la||i===ca||i===ha||i===da||i===ua||i===fa||i===pa||i===ma||i===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ra)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===la)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_a||i===va||i===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_a)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ya||i===Ma||i===Er||i===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ah(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:Ig,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends en{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Ug,u={},b=e.getContextAttributes();let w=null,M=null;const A=[],T=[],R=new ot;let _=null;const y=new Ye;y.viewport=new ue;const E=new Ye;E.viewport=new ue;const C=[y,E],L=new Gu;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=A[K];return at===void 0&&(at=new Qr,A[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=A[K];return at===void 0&&(at=new Qr,A[K]=at),at.getGripSpace()},this.getHand=function(K){let at=A[K];return at===void 0&&(at=new Qr,A[K]=at),at.getHandSpace()};function U(K){const at=T.indexOf(K.inputSource);if(at===-1)return;const it=A[at];it!==void 0&&(it.update(K.inputSource,K.frame,c||o),it.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",H);for(let K=0;K<A.length;K++){const at=T[K];at!==null&&(T[K]=null,A[K].disconnect(at))}k=null,W=null,p.reset();for(const K in u)delete u[K];t.setRenderTarget(w),m=null,d=null,f=null,n=null,M=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",q),n.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Ut=null,X=null;b.depth&&(X=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=b.stencil?dn:Fi,Ut=b.stencil?bs:Mi);const nt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(nt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new yi(d.textureWidth,d.textureHeight,{format:ai,type:Ke,depthTexture:new Jn(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const it={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,it),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new yi(m.framebufferWidth,m.framebufferHeight,{format:ai,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Yt.setContext(n),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(K){for(let at=0;at<K.removed.length;at++){const it=K.removed[at],Ut=T.indexOf(it);Ut>=0&&(T[Ut]=null,A[Ut].disconnect(it))}for(let at=0;at<K.added.length;at++){const it=K.added[at];let Ut=T.indexOf(it);if(Ut===-1){for(let nt=0;nt<A.length;nt++)if(nt>=T.length){T.push(it),Ut=nt;break}else if(T[nt]===null){T[nt]=it,Ut=nt;break}if(Ut===-1)break}const X=A[Ut];X&&X.connect(it)}}const j=new D,et=new D;function ht(K,at,it){j.setFromMatrixPosition(at.matrixWorld),et.setFromMatrixPosition(it.matrixWorld);const Ut=j.distanceTo(et),X=at.projectionMatrix.elements,nt=it.projectionMatrix.elements,Dt=X[14]/(X[10]-1),It=X[14]/(X[10]+1),zt=(X[9]+1)/X[5],Wt=(X[9]-1)/X[5],Kt=(X[8]-1)/X[0],xe=(nt[8]+1)/nt[0],Se=Dt*Kt,Pe=Dt*xe,Re=Ut/(-Kt+xe),pe=Re*-Kt;if(at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(Re),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),X[10]===-1)K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ye=Dt+Re,N=It+Re,ze=Se-pe,jt=Pe+(Ut-pe),P=zt*It/N*ye,v=Wt*It/N*ye;K.projectionMatrix.makePerspective(ze,jt,P,v,ye,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function gt(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let at=K.near,it=K.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(it=p.depthFar)),L.near=E.near=y.near=at,L.far=E.far=y.far=it,(k!==L.near||W!==L.far)&&(n.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,W=L.far),L.layers.mask=K.layers.mask|6,y.layers.mask=L.layers.mask&-5,E.layers.mask=L.layers.mask&-3;const Ut=K.parent,X=L.cameras;gt(L,Ut);for(let nt=0;nt<X.length;nt++)gt(X[nt],Ut);X.length===2?ht(L,y,E):L.projectionMatrix.copy(y.projectionMatrix),Mt(K,L,Ut)};function Mt(K,at,it){it===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(it.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(K){return u[K]};let $t=null;function he(K,at){if(h=at.getViewerPose(c||o),g=at,h!==null){const it=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Ut=!1;it.length!==L.cameras.length&&(L.cameras.length=0,Ut=!0);for(let It=0;It<it.length;It++){const zt=it[It];let Wt=null;if(m!==null)Wt=m.getViewport(zt);else{const xe=f.getViewSubImage(d,zt);Wt=xe.viewport,It===0&&(t.setRenderTargetTextures(M,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(M))}let Kt=C[It];Kt===void 0&&(Kt=new Ye,Kt.layers.enable(It),Kt.viewport=new ue,C[It]=Kt),Kt.matrix.fromArray(zt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(zt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),It===0&&(L.matrix.copy(Kt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ut===!0&&L.cameras.push(Kt)}const X=n.enabledFeatures;if(X&&X.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const It=f.getDepthInformation(it[0]);It&&It.isValid&&It.texture&&p.init(It,n.renderState)}if(X&&X.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let It=0;It<it.length;It++){const zt=it[It].camera;if(zt){let Wt=u[zt];Wt||(Wt=new ah,u[zt]=Wt);const Kt=f.getCameraImage(zt);Wt.sourceTexture=Kt}}}}for(let it=0;it<A.length;it++){const Ut=T[it],X=A[it];Ut!==null&&X!==void 0&&X.update(Ut,at,c||o)}$t&&$t(K,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const Yt=new yh;Yt.setAnimationLoop(he),this.setAnimationLoop=function(K){$t=K},this.dispose=function(){}}}const Og=new ce,Ah=new Ft;Ah.set(-1,0,0,0,1,0,0,0,1);function Bg(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,gh(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,b,w,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,w):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===We&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===We&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),w=b.envMap,M=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ah),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=w*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function kg(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const T=A.program;i.uniformBlockBinding(M,T)}function c(M,A){let T=n[M.id];T===void 0&&(p(M),T=h(M),n[M.id]=T,M.addEventListener("dispose",b));const R=A.program;i.updateUBOMapping(M,R);const _=t.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){const A=f();M.__bindingPointIndex=A;const T=s.createBuffer(),R=M.__size,_=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,T),T}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const A=n[M.id],T=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let _=0,y=T.length;_<y;_++){const E=T[_];if(Array.isArray(E))for(let C=0,L=E.length;C<L;C++)m(E[C],_,C,R);else m(E,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,A,T,R){if(x(M,A,T,R)===!0){const _=M.__offset,y=M.value;if(Array.isArray(y)){let E=0;for(let C=0;C<y.length;C++){const L=y[C],k=u(L);g(L,M.__data,E),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(E+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,M.__data)}}function g(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function x(M,A,T,R){const _=M.value,y=A+"_"+T;if(R[y]===void 0)return typeof _=="number"||typeof _=="boolean"?R[y]=_:ArrayBuffer.isView(_)?R[y]=_.slice():R[y]=_.clone(),!0;{const E=R[y];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return R[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(M){const A=M.uniforms;let T=0;const R=16;for(let y=0,E=A.length;y<E;y++){const C=Array.isArray(A[y])?A[y]:[A[y]];for(let L=0,k=C.length;L<k;L++){const W=C[L],U=Array.isArray(W.value)?W.value:[W.value];for(let q=0,H=U.length;q<H;q++){const j=U[q],et=u(j),ht=T%R,gt=ht%et.boundary,Mt=ht+gt;T+=gt,Mt!==0&&R-Mt<et.storage&&(T+=R-Mt),W.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=et.storage}}}const _=T%R;return _>0&&(T+=R-_),M.__size=T,M.__cache={},this}function u(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){const A=M.target;A.removeEventListener("dispose",b);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(n[A.id]),delete n[A.id],delete r[A.id]}function w(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:l,update:c,dispose:w}}const zg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function Hg(){return pi===null&&(pi=new Wd(zg,16,16,fn,Ui),pi.name="DFG_LUT",pi.minFilter=Fe,pi.magFilter=Fe,pi.wrapS=Li,pi.wrapT=Li,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class Gg{constructor(t={}){const{canvas:e=vd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ke}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=m,p=new Set([za,ka,Ba]),u=new Set([Ke,Mi,Ss,bs,Fa,Oa]),b=new Uint32Array(4),w=new Int32Array(4),M=new D;let A=null,T=null;const R=[],_=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1,L=null,k=null,W=null,U=null;this._outputColorSpace=je;let q=0,H=0,j=null,et=-1,ht=null;const gt=new ue,Mt=new ue;let $t=null;const he=new Ot(0);let Yt=0,K=e.width,at=e.height,it=1,Ut=null,X=null;const nt=new ue(0,0,K,at),Dt=new ue(0,0,K,at);let It=!1;const zt=new Xa;let Wt=!1,Kt=!1;const xe=new ce,Se=new D,Pe=new ue,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function ye(){return j===null?it:1}let N=i;function ze(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r185"),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",hi,!1),N===null){const F="webgl2";if(N=ze(F,S),N===null)throw ze(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Xt("WebGLRenderer: "+S.message),S}let jt,P,v,O,G,$,rt,ct,Y,J,dt,Tt,pt,ut,Rt,Nt,Bt,I,lt,Z,ft,xt,tt;function wt(){jt=new Hm(N),jt.init(),ft=new Dg(N,jt),P=new Im(N,jt,t,ft),v=new Rg(N,jt),P.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),k=N.createFramebuffer(),W=N.createFramebuffer(),U=N.createFramebuffer(),O=new Wm(N),G=new gg,$=new Lg(N,jt,v,G,P,ft,O),rt=new zm(E),ct=new $u(N),xt=new Lm(N,ct),Y=new Gm(N,ct,O,xt),J=new qm(N,Y,ct,xt,O),I=new Xm(N,P,$),Rt=new Nm(G),dt=new mg(E,rt,jt,P,xt,Rt),Tt=new Bg(E,G),pt=new vg,ut=new Eg(jt),Bt=new Rm(E,rt,v,J,g,l),Nt=new Cg(E,J,P),tt=new kg(N,O,P,v),lt=new Dm(N,jt,O),Z=new Vm(N,jt,O),O.programs=dt.programs,E.capabilities=P,E.extensions=jt,E.properties=G,E.renderLists=pt,E.shadowMap=Nt,E.state=v,E.info=O}wt(),x!==Ke&&(y=new Ym(x,e.width,e.height,a,n,r));const bt=new Fg(E,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(K,at,!1))},this.getSize=function(S){return S.set(K,at)},this.setSize=function(S,F,V=!0){if(bt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,at=F,e.width=Math.floor(S*it),e.height=Math.floor(F*it),V===!0&&(e.style.width=S+"px",e.style.height=F+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(K*it,at*it).floor()},this.setDrawingBufferSize=function(S,F,V){K=S,at=F,it=V,e.width=Math.floor(S*V),e.height=Math.floor(F*V),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(x===Ke){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(gt)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,F,V,B){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,F,V,B),v.viewport(gt.copy(nt).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(Dt)},this.setScissor=function(S,F,V,B){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,F,V,B),v.scissor(Mt.copy(Dt).multiplyScalar(it).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(S){v.setScissorTest(It=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,V=!0){let B=0;if(S){let z=!1;if(j!==null){const vt=j.texture.format;z=p.has(vt)}if(z){const vt=j.texture.type,St=u.has(vt),_t=Bt.getClearColor(),Et=Bt.getClearAlpha(),At=_t.r,kt=_t.g,Gt=_t.b;St?(b[0]=At,b[1]=kt,b[2]=Gt,b[3]=Et,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=At,w[1]=kt,w[2]=Gt,w[3]=Et,N.clearBufferiv(N.COLOR,0,w))}else B|=N.COLOR_BUFFER_BIT}F&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),Bt.dispose(),pt.dispose(),ut.dispose(),G.dispose(),rt.dispose(),J.dispose(),xt.dispose(),tt.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",rl),bt.removeEventListener("sessionend",ol),nn.stop()};function me(S){S.preventDefault(),Pr("WebGLRenderer: Context Lost."),C=!0}function ae(){Pr("WebGLRenderer: Context Restored."),C=!1;const S=O.autoReset,F=Nt.enabled,V=Nt.autoUpdate,B=Nt.needsUpdate,z=Nt.type;wt(),O.autoReset=S,Nt.enabled=F,Nt.autoUpdate=V,Nt.needsUpdate=B,Nt.type=z}function hi(S){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function di(S){const F=S.target;F.removeEventListener("dispose",di),Dh(F)}function Dh(S){Ih(S),G.remove(S)}function Ih(S){const F=G.get(S).programs;F!==void 0&&(F.forEach(function(V){dt.releaseProgram(V)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,V,B,z,vt){F===null&&(F=Re);const St=z.isMesh&&z.matrixWorld.determinantAffine()<0,_t=Fh(S,F,V,B,z);v.setMaterial(B,St);let Et=V.index,At=1;if(B.wireframe===!0){if(Et=Y.getWireframeAttribute(V),Et===void 0)return;At=2}const kt=V.drawRange,Gt=V.attributes.position;let Pt=kt.start*At,ee=(kt.start+kt.count)*At;vt!==null&&(Pt=Math.max(Pt,vt.start*At),ee=Math.min(ee,(vt.start+vt.count)*At)),Et!==null?(Pt=Math.max(Pt,0),ee=Math.min(ee,Et.count)):Gt!=null&&(Pt=Math.max(Pt,0),ee=Math.min(ee,Gt.count));const _e=ee-Pt;if(_e<0||_e===1/0)return;xt.setup(z,B,_t,V,Et);let ge,re=lt;if(Et!==null&&(ge=ct.get(Et),re=Z,re.setIndex(ge)),z.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*ye()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(z.isLine){let Ie=B.linewidth;Ie===void 0&&(Ie=1),v.setLineWidth(Ie*ye()),z.isLineSegments?re.setMode(N.LINES):z.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else z.isPoints?re.setMode(N.POINTS):z.isSprite&&re.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ie=z._multiDrawStarts,yt=z._multiDrawCounts,Xe=z._multiDrawCount,Zt=Et?ct.get(Et).bytesPerElement:1,Je=G.get(B).currentProgram.getUniforms();for(let ui=0;ui<Xe;ui++)Je.setValue(N,"_gl_DrawID",ui),re.render(Ie[ui]/Zt,yt[ui])}else if(z.isInstancedMesh)re.renderInstances(Pt,_e,z.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yt=Math.min(V.instanceCount,Ie);re.renderInstances(Pt,_e,yt)}else re.render(Pt,_e)};function sl(S,F,V){S.transparent===!0&&S.side===ti&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,Ds(S,F,V),S.side=ji,S.needsUpdate=!0,Ds(S,F,V),S.side=ti):Ds(S,F,V)}this.compile=function(S,F,V=null){V===null&&(V=S),T=ut.get(V),T.init(F),_.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const vt=z.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){const _t=vt[St];sl(_t,V,z),B.add(_t)}else sl(vt,V,z),B.add(vt)}),T=_.pop(),B},this.compileAsync=function(S,F,V=null){const B=this.compile(S,F,V);return new Promise(z=>{function vt(){if(B.forEach(function(St){G.get(St).currentProgram.isReady()&&B.delete(St)}),B.size===0){z(S);return}setTimeout(vt,10)}jt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Hr=null;function Nh(S){Hr&&Hr(S)}function rl(){nn.stop()}function ol(){nn.start()}const nn=new yh;nn.setAnimationLoop(Nh),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(S){Hr=S,bt.setAnimationLoop(S),S===null?nn.stop():nn.start()},bt.addEventListener("sessionstart",rl),bt.addEventListener("sessionend",ol),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(S,F);const V=bt.enabled===!0&&bt.isPresenting===!0,B=y!==null&&(j===null||V)&&y.begin(E,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(F),F=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,F,j),T=ut.get(S,_.length),T.init(F),T.state.textureUnits=$.getTextureUnits(),_.push(T),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),zt.setFromProjectionMatrix(xe,xi,F.reversedDepth),Kt=this.localClippingEnabled,Wt=Rt.init(this.clippingPlanes,Kt),A=pt.get(S,R.length),A.init(),R.push(A),bt.enabled===!0&&bt.isPresenting===!0){const St=E.xr.getDepthSensingMesh();St!==null&&Gr(St,F,-1/0,E.sortObjects)}Gr(S,F,0,E.sortObjects),A.finish(),E.sortObjects===!0&&A.sort(Ut,X,F.reversedDepth),pe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,pe&&Bt.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Rt.beginShadows();const z=T.state.shadowsArray;if(Nt.render(z,S,F),Wt===!0&&Rt.endShadows(),(B&&y.hasRenderPass())===!1){const St=A.opaque,_t=A.transmissive;if(T.setupLights(),F.isArrayCamera){const Et=F.cameras;if(_t.length>0)for(let At=0,kt=Et.length;At<kt;At++){const Gt=Et[At];ll(St,_t,S,Gt)}pe&&Bt.render(S);for(let At=0,kt=Et.length;At<kt;At++){const Gt=Et[At];al(A,S,Gt,Gt.viewport)}}else _t.length>0&&ll(St,_t,S,F),pe&&Bt.render(S),al(A,S,F)}j!==null&&H===0&&($.updateMultisampleRenderTarget(j),$.updateRenderTargetMipmap(j)),B&&y.end(E),S.isScene===!0&&S.onAfterRender(E,S,F),xt.resetDefaultState(),et=-1,ht=null,_.pop(),_.length>0?(T=_[_.length-1],$.setTextureUnits(T.state.textureUnits),Wt===!0&&Rt.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,L!==null&&L.renderEnd()};function Gr(S,F,V,B){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||zt.intersectsSprite(S)){B&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xe);const St=J.update(S),_t=S.material;_t.visible&&A.push(S,St,_t,V,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||zt.intersectsObject(S))){const St=J.update(S),_t=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Pe.copy(St.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(xe)),Array.isArray(_t)){const Et=St.groups;for(let At=0,kt=Et.length;At<kt;At++){const Gt=Et[At],Pt=_t[Gt.materialIndex];Pt&&Pt.visible&&A.push(S,St,Pt,V,Pe.z,Gt)}}else _t.visible&&A.push(S,St,_t,V,Pe.z,null)}}const vt=S.children;for(let St=0,_t=vt.length;St<_t;St++)Gr(vt[St],F,V,B)}function al(S,F,V,B){const{opaque:z,transmissive:vt,transparent:St}=S;T.setupLightsView(V),Wt===!0&&Rt.setGlobalState(E.clippingPlanes,V),B&&v.viewport(gt.copy(B)),z.length>0&&Ls(z,F,V),vt.length>0&&Ls(vt,F,V),St.length>0&&Ls(St,F,V),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ll(S,F,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Pt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new yi(1,1,{generateMipmaps:!0,type:Pt?Ui:Ke,minFilter:hn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const vt=T.state.transmissionRenderTarget[B.id],St=B.viewport||gt;vt.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);const _t=E.getRenderTarget(),Et=E.getActiveCubeFace(),At=E.getActiveMipmapLevel();E.setRenderTarget(vt),E.getClearColor(he),Yt=E.getClearAlpha(),Yt<1&&E.setClearColor(16777215,.5),E.clear(),pe&&Bt.render(V);const kt=E.toneMapping;E.toneMapping=li;const Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Wt===!0&&Rt.setGlobalState(E.clippingPlanes,B),Ls(S,V,B),$.updateMultisampleRenderTarget(vt),$.updateRenderTargetMipmap(vt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ee=0,_e=F.length;ee<_e;ee++){const ge=F[ee],{object:re,geometry:Ie,material:yt,group:Xe}=ge;if(yt.side===ti&&re.layers.test(B.layers)){const Zt=yt.side;yt.side=We,yt.needsUpdate=!0,cl(re,V,B,Ie,yt,Xe),yt.side=Zt,yt.needsUpdate=!0,Pt=!0}}Pt===!0&&($.updateMultisampleRenderTarget(vt),$.updateRenderTargetMipmap(vt))}E.setRenderTarget(_t,Et,At),E.setClearColor(he,Yt),Gt!==void 0&&(B.viewport=Gt),E.toneMapping=kt}function Ls(S,F,V){const B=F.isScene===!0?F.overrideMaterial:null;for(let z=0,vt=S.length;z<vt;z++){const St=S[z],{object:_t,geometry:Et,group:At}=St;let kt=St.material;kt.allowOverride===!0&&B!==null&&(kt=B),_t.layers.test(V.layers)&&cl(_t,F,V,Et,kt,At)}}function cl(S,F,V,B,z,vt){S.onBeforeRender(E,F,V,B,z,vt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(E,F,V,B,S,vt),z.transparent===!0&&z.side===ti&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,E.renderBufferDirect(V,F,B,z,S,vt),z.side=ji,z.needsUpdate=!0,E.renderBufferDirect(V,F,B,z,S,vt),z.side=ti):E.renderBufferDirect(V,F,B,z,S,vt),S.onAfterRender(E,F,V,B,z,vt)}function Ds(S,F,V){F.isScene!==!0&&(F=Re);const B=G.get(S),z=T.state.lights,vt=T.state.shadowsArray,St=z.state.version,_t=dt.getParameters(S,z.state,vt,F,V,T.state.lightProbeGridArray),Et=dt.getProgramCacheKey(_t);let At=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;const kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=rt.get(S.envMap||B.environment,kt),B.envMapRotation=B.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",di),At=new Map,B.programs=At);let Gt=At.get(Et);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===St)return dl(S,_t),Gt}else _t.uniforms=dt.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,V,_t),S.onBeforeCompile(_t,E),Gt=dt.acquireProgram(_t,Et),At.set(Et,Gt),B.uniforms=_t.uniforms;const Pt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=Rt.uniform),dl(S,_t),B.needsLights=Bh(S),B.lightsStateVersion=St,B.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function hl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function dl(S,F){const V=G.get(S);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Uh(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let V=0,B=S.length;V<B;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function Fh(S,F,V,B,z){F.isScene!==!0&&(F=Re),$.resetTextureUnits();const vt=F.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,_t=j===null?E.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qt.workingColorSpace,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,At=rt.get(B.envMap||St,Et),kt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!V.morphAttributes.position,ee=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color;let ge=li;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ge=E.toneMapping);const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=re!==void 0?re.length:0,yt=G.get(B),Xe=T.state.lights;if(Wt===!0&&(Kt===!0||S!==ht)){const le=S===ht&&B.id===et;Rt.setState(B,S,le)}let Zt=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Xe.state.version||yt.outputColorSpace!==_t||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==At||B.fog===!0&&yt.fog!==vt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Rt.numPlanes||yt.numIntersection!==Rt.numIntersection)||yt.vertexAlphas!==kt||yt.vertexTangents!==Gt||yt.morphTargets!==Pt||yt.morphNormals!==ee||yt.morphColors!==_e||yt.toneMapping!==ge||yt.morphTargetsCount!==Ie||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,yt.__version=B.version);let Je=yt.currentProgram;Zt===!0&&(Je=Ds(B,F,z),L&&B.isNodeMaterial&&L.onUpdateProgram(B,Je,yt));let ui=!1,Bi=!1,_n=!1;const oe=Je.getUniforms(),ve=yt.uniforms;if(v.useProgram(Je.program)&&(ui=!0,Bi=!0,_n=!0),B.id!==et&&(et=B.id,Bi=!0),yt.needsLights){const le=Uh(T.state.lightProbeGridArray,z);yt.lightProbeGrid!==le&&(yt.lightProbeGrid=le,Bi=!0)}if(ui||ht!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),oe.setValue(N,"projectionMatrix",S.projectionMatrix),oe.setValue(N,"viewMatrix",S.matrixWorldInverse);const zi=oe.map.cameraPosition;zi!==void 0&&zi.setValue(N,Se.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),ht!==S&&(ht=S,Bi=!0,_n=!0)}if(yt.needsLights&&(Xe.state.directionalShadowMap.length>0&&oe.setValue(N,"directionalShadowMap",Xe.state.directionalShadowMap,$),Xe.state.spotShadowMap.length>0&&oe.setValue(N,"spotShadowMap",Xe.state.spotShadowMap,$),Xe.state.pointShadowMap.length>0&&oe.setValue(N,"pointShadowMap",Xe.state.pointShadowMap,$)),z.isSkinnedMesh){oe.setOptional(N,z,"bindMatrix"),oe.setOptional(N,z,"bindMatrixInverse");const le=z.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),oe.setValue(N,"boneTexture",le.boneTexture,$))}z.isBatchedMesh&&(oe.setOptional(N,z,"batchingTexture"),oe.setValue(N,"batchingTexture",z._matricesTexture,$),oe.setOptional(N,z,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",z._indirectTexture,$),oe.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",z._colorsTexture,$));const ki=V.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&I.update(z,V,Je),(Bi||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,oe.setValue(N,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(ve.envMapIntensity.value=F.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=Hg()),Bi){if(oe.setValue(N,"toneMappingExposure",E.toneMappingExposure),yt.needsLights&&Oh(ve,_n),vt&&B.fog===!0&&Tt.refreshFogUniforms(ve,vt),Tt.refreshMaterialUniforms(ve,B,it,at,T.state.transmissionRenderTarget[S.id]),yt.needsLights&&yt.lightProbeGrid){const le=yt.lightProbeGrid;ve.probesSH.value=le.texture,ve.probesMin.value.copy(le.boundingBox.min),ve.probesMax.value.copy(le.boundingBox.max),ve.probesResolution.value.copy(le.resolution)}Mr.upload(N,hl(yt),ve,$)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mr.upload(N,hl(yt),ve,$),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(N,"center",z.center),oe.setValue(N,"modelViewMatrix",z.modelViewMatrix),oe.setValue(N,"normalMatrix",z.normalMatrix),oe.setValue(N,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const le=B.uniformsGroups;for(let zi=0,vn=le.length;zi<vn;zi++){const ul=le[zi];tt.update(ul,Je),tt.bind(ul,Je)}}return Je}function Oh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Bh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,F,V){const B=G.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=F,G.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const V=G.get(S);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,V=0){j=S,q=F,H=V;let B=null,z=!1,vt=!1;if(S){const _t=G.get(S);if(_t.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,_t.__webglFramebuffer),gt.copy(S.viewport),Mt.copy(S.scissor),$t=S.scissorTest,v.viewport(gt),v.scissor(Mt),v.setScissorTest($t),et=-1;return}else if(_t.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(_t.__hasExternalTextures)$.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const kt=S.depthTexture;if(_t.__boundDepthTexture!==kt){if(kt!==null&&G.has(kt)&&(S.width!==kt.image.width||S.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(vt=!0);const At=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[F])?B=At[F][V]:B=At[F],z=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?B=G.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?B=At[V]:B=At,gt.copy(S.viewport),Mt.copy(S.scissor),$t=S.scissorTest}else gt.copy(nt).multiplyScalar(it).floor(),Mt.copy(Dt).multiplyScalar(it).floor(),$t=It;if(V!==0&&(B=k),v.bindFramebuffer(N.FRAMEBUFFER,B)&&v.drawBuffers(S,B),v.viewport(gt),v.scissor(Mt),v.setScissorTest($t),z){const _t=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,V)}else if(vt){const _t=F;for(let Et=0;Et<S.textures.length;Et++){const At=G.get(S.textures[Et]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Et,At.__webglTexture,V,_t)}}else if(S!==null&&V!==0){const _t=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,V)}et=-1},this.readRenderTargetPixels=function(S,F,V,B,z,vt,St,_t=0){if(!(S&&S.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){v.bindFramebuffer(N.FRAMEBUFFER,Et);try{const At=S.textures[_t],kt=At.format,Gt=At.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t),!P.textureFormatReadable(kt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Gt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-B&&V>=0&&V<=S.height-z&&N.readPixels(F,V,B,z,ft.convert(kt),ft.convert(Gt),vt)}finally{const At=j!==null?G.get(j).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,F,V,B,z,vt,St,_t=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(F>=0&&F<=S.width-B&&V>=0&&V<=S.height-z){v.bindFramebuffer(N.FRAMEBUFFER,Et);const At=S.textures[_t],kt=At.format,Gt=At.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t),!P.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(F,V,B,z,ft.convert(kt),ft.convert(Gt),0);const ee=j!==null?G.get(j).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,ee);const _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await xd(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.deleteBuffer(Pt),N.deleteSync(_e),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,V=0){const B=Math.pow(2,-V),z=Math.floor(S.image.width*B),vt=Math.floor(S.image.height*B),St=F!==null?F.x:0,_t=F!==null?F.y:0;$.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,St,_t,z,vt),v.unbindTexture()},this.copyTextureToTexture=function(S,F,V=null,B=null,z=0,vt=0){let St,_t,Et,At,kt,Gt,Pt,ee,_e;const ge=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(V!==null)St=V.max.x-V.min.x,_t=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,kt=V.min.y,Gt=V.isBox3?V.min.z:0;else{const ve=Math.pow(2,-z);St=Math.floor(ge.width*ve),_t=Math.floor(ge.height*ve),S.isDataArrayTexture?Et=ge.depth:S.isData3DTexture?Et=Math.floor(ge.depth*ve):Et=1,At=0,kt=0,Gt=0}B!==null?(Pt=B.x,ee=B.y,_e=B.z):(Pt=0,ee=0,_e=0);const re=ft.convert(F.format),Ie=ft.convert(F.type);let yt;F.isData3DTexture?($.setTexture3D(F,0),yt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),yt=N.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),yt=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Xe=v.getParameter(N.UNPACK_ROW_LENGTH),Zt=v.getParameter(N.UNPACK_IMAGE_HEIGHT),Je=v.getParameter(N.UNPACK_SKIP_PIXELS),ui=v.getParameter(N.UNPACK_SKIP_ROWS),Bi=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,At),v.pixelStorei(N.UNPACK_SKIP_ROWS,kt),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const _n=S.isDataArrayTexture||S.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const ve=G.get(S),ki=G.get(F),le=G.get(ve.__renderTarget),zi=G.get(ki.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,le.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let vn=0;vn<Et;vn++)_n&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(S).__webglTexture,z,Gt+vn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(F).__webglTexture,vt,_e+vn)),N.blitFramebuffer(At,kt,St,_t,Pt,ee,St,_t,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||G.has(S)){const ve=G.get(S),ki=G.get(F);v.bindFramebuffer(N.READ_FRAMEBUFFER,W),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let le=0;le<Et;le++)_n?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,z,Gt+le):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,z),oe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ki.__webglTexture,vt,_e+le):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ki.__webglTexture,vt),z!==0?N.blitFramebuffer(At,kt,St,_t,Pt,ee,St,_t,N.COLOR_BUFFER_BIT,N.NEAREST):oe?N.copyTexSubImage3D(yt,vt,Pt,ee,_e+le,At,kt,St,_t):N.copyTexSubImage2D(yt,vt,Pt,ee,At,kt,St,_t);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(yt,vt,Pt,ee,_e,St,_t,Et,re,Ie,ge.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,vt,Pt,ee,_e,St,_t,Et,re,ge.data):N.texSubImage3D(yt,vt,Pt,ee,_e,St,_t,Et,re,Ie,ge):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,Pt,ee,St,_t,re,Ie,ge.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,Pt,ee,ge.width,ge.height,re,ge.data):N.texSubImage2D(N.TEXTURE_2D,vt,Pt,ee,St,_t,re,Ie,ge);v.pixelStorei(N.UNPACK_ROW_LENGTH,Xe),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),v.pixelStorei(N.UNPACK_SKIP_ROWS,ui),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Bi),vt===0&&F.generateMipmaps&&N.generateMipmap(yt),v.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){q=0,H=0,j=null,v.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Ac={type:"change"},Qa={type:"start"},Ph={type:"end"},lr=new Fr,Pc=new Ki,Vg=Math.cos(70*Sd.DEG2RAD),be=new D,He=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Po=1e-6;class Wg extends xh{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new tn,this._lastTargetPosition=new D,this._quat=new tn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ec,this._sphericalDelta=new ec,this._scale=1,this._panOffset=new D,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new D,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=$g.bind(this),this._onContextMenu=t_.bind(this),this._onMouseWheel=Zg.bind(this),this._onKeyDown=Jg.bind(this),this._onTouchStart=Qg.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=Yg.bind(this),this._onMouseMove=Kg.bind(this),this._interceptControlDown=e_.bind(this),this._interceptControlUp=i_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ac),this.update(),this.state=ne.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),n<-Math.PI?n+=He:n>Math.PI&&(n-=He),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lr.origin.copy(this.object.position),lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lr.direction))<Vg?this.object.lookAt(this.target):(Pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),lr.intersectPlane(Pc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Po||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Po||this._lastTargetPosition.distanceToSquared(this.target)>Po?(this.dispatchEvent(Ac),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;be.copy(n).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Xg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function $g(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ph),this.state=ne.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Yg(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ne.DOLLY;break;case Wn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}break;case Wn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Qa)}function Kg(s){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Zg(s){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(s.preventDefault(),this.dispatchEvent(Qa),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ph))}function Jg(s){this.enabled!==!1&&this._handleKeyDown(s)}function Qg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Hn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ne.TOUCH_ROTATE;break;case Hn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Hn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ne.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Qa)}function jg(s){switch(this._trackPointer(s),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ne.NONE}}function t_(s){this.enabled!==!1&&s.preventDefault()}function e_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const On=new Oi(0,0,0,"YXZ"),Bn=new D,n_={type:"change"},s_={type:"lock"},r_={type:"unlock"},Cc=.002,Rc=Math.PI/2;class o_ extends xh{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=a_.bind(this),this._onPointerlockChange=l_.bind(this),this._onPointerlockError=c_.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(t){super.connect(t),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Bn.setFromMatrixColumn(e.matrix,0),Bn.crossVectors(e.up,Bn),e.position.addScaledVector(Bn,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Bn.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Bn,t)}lock(t=!1){this.domElement.requestPointerLock({unadjustedMovement:t})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function a_(s){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;On.setFromQuaternion(t.quaternion),On.y-=s.movementX*Cc*this.pointerSpeed,On.x-=s.movementY*Cc*this.pointerSpeed,On.x=Math.max(Rc-this.maxPolarAngle,Math.min(Rc-this.minPolarAngle,On.x)),t.quaternion.setFromEuler(On),this.dispatchEvent(n_)}function l_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(s_),this.isLocked=!0):(this.dispatchEvent(r_),this.isLocked=!1)}function c_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Ch=[{level:-2,label:"Basement -2",labelAr:"قبو ٢",short:"B2"},{level:-1,label:"Basement",labelAr:"تحت الأرض",short:"B1"},{level:0,label:"Ground",labelAr:"الأرضي",short:"G"},{level:1,label:"First",labelAr:"الأول",short:"1"},{level:2,label:"Second",labelAr:"الثاني",short:"2"},{level:3,label:"Third",labelAr:"الثالث",short:"3"},{level:4,label:"Fourth",labelAr:"الرابع",short:"4"},{level:5,label:"Fifth",labelAr:"الخامس",short:"5"}];function cr(s,t=!0){const e=Ch.find(i=>i.level===s);if(!e){const i=s<0?`Basement ${Math.abs(s)}`:`Floor ${s}`;return i}return t?`${e.labelAr} · ${e.label}`:e.labelAr}function Co(s){var i,n;const t=(s==null?void 0:s.level)??0,e=Ch.find(r=>r.level===t);return e?e.labelAr:((n=(i=s==null?void 0:s.name)==null?void 0:i.split("·")[0])==null?void 0:n.trim())||`F${t}`}function h_(s){const t=(s||[]).map(e=>Number(e.level)||0);return t.length?Math.max(...t)+1:0}const mi={swing_modern:{label:"Modern Swing",icon:"🚪",width:1,height:2.1,type:"swing_modern"},swing_classic:{label:"Classic Panel",icon:"🪵",width:1,height:2.1,type:"swing_classic"},sliding_glass:{label:"Glass Sliding",icon:"↔️",width:1.6,height:2.2,type:"sliding_glass"},double_french:{label:"French Double",icon:"🚪",width:1.8,height:2.1,type:"double_french"},pivot_modern:{label:"Pivot Modern",icon:"↩️",width:1,height:2.2,type:"pivot_modern"},arched:{label:"Arched",icon:"⌒",width:1,height:2.3,type:"arched"},interior:{label:"Interior Flush",icon:"🚪",width:.9,height:2.05,type:"interior"},garage:{label:"Garage Wide",icon:"🚗",width:2.4,height:2.1,type:"garage"}},$i={standard:{label:"Standard",icon:"🪟",width:1.2,height:1.2,sill:.9,type:"standard"},wide:{label:"Wide Picture",icon:"🖼️",width:2,height:1.4,sill:.8,type:"wide"},sliding:{label:"Sliding Glass",icon:"↔️",width:1.8,height:2,sill:.1,type:"sliding"},bay:{label:"Bay Window",icon:"🏠",width:2.2,height:1.3,sill:.7,type:"bay"},floor_ceiling:{label:"Floor-to-Ceiling",icon:"🌅",width:1.5,height:2.4,sill:.05,type:"floor_ceiling"},arched:{label:"Arched",icon:"⌒",width:1.2,height:1.5,sill:.9,type:"arched"},skylight:{label:"Skylight",icon:"☀️",width:1,height:.8,sill:2,type:"skylight"}},Qt={smoke_detector:{label:"Smoke detector",icon:"🚨",price:8,category:"all",haDomain:"binary_sensor",model:"Smoke Alarm",mount:"ceiling",defaultHeight:2.73,w:.14,h:.05},gas_detector:{label:"Gas detector",icon:"⛽",price:12,category:"all",haDomain:"binary_sensor",model:"Gas Alarm",mount:"ceiling",defaultHeight:2.73,w:.12,h:.05},vibration_sensor:{label:"Vibration sensor",icon:"📳",price:6,category:"all",haDomain:"binary_sensor",model:"Vibration",mount:"wall",defaultHeight:1,w:.08,h:.08},door_sensor:{label:"Door sensor",icon:"🚪",price:4,category:"all",haDomain:"binary_sensor",model:"Door Contact",mount:"door",defaultHeight:1,w:.08,h:.12},intercom:{label:"Entercom",icon:"📞",price:45,category:"all",haDomain:"switch",model:"Video Intercom",mount:"wall",defaultHeight:1.45,w:.15,h:.22},main_screen:{label:"Main Screen",icon:"🖥️",price:80,category:"all",haDomain:"media_player",model:"Wall Display",mount:"wall",defaultHeight:1.4,w:.6,h:.45},motion_sensor:{label:"Motion sensor",icon:"👁️",price:7,category:"all",haDomain:"binary_sensor",model:"PIR Motion",mount:"wall",defaultHeight:2.2,w:.12,h:.12},micro_sensor:{label:"Micro sensor",icon:"🎤",price:9,category:"all",haDomain:"binary_sensor",model:"Sound / Mic",mount:"wall",defaultHeight:2.2,w:.1,h:.1},camera:{label:"Camera",icon:"📷",price:2,category:"all",haDomain:"camera",model:"Dome Camera",mount:"ceiling",defaultHeight:2.72,w:.2,h:.15},ir_remote:{label:"IR remote",icon:"📡",price:15,category:"all",haDomain:"remote",model:"Broadlink RM",mount:"wall",defaultHeight:2.3,w:.08,h:.08},wifi_router:{label:"Wifi router",icon:"🌐",price:25,category:"all",haDomain:"device_tracker",model:"Home Router",mount:"floor",w:.22,h:.06},access_point:{label:"Access point",icon:"📶",price:35,category:"all",haDomain:"device_tracker",model:"Ceiling AP",mount:"ceiling",defaultHeight:2.74,w:.25,h:.08},socket:{label:"Socket",icon:"🔌",price:3,category:"all",haDomain:"switch",model:"Smart Socket",mount:"wall",defaultHeight:.35,w:.08,h:.12},switch:{label:"Switch",icon:"🔘",price:4,category:"all",haDomain:"switch",model:"Wall Switch",mount:"wall",defaultHeight:1.2,w:.12,h:.18},speakers:{label:"Speakers",icon:"🔊",price:20,category:"all",haDomain:"media_player",model:"Wall Speakers",mount:"wall",defaultHeight:1.8,w:.22,h:.32}},La={code:"OMR",symbolUrl:"/images/omr-symbol.png"};function d_(){var s;return typeof window<"u"&&((s=window.location)!=null&&s.origin)?`${window.location.origin}${La.symbolUrl}`:La.symbolUrl}function hr(s){const t=Number(s);return`${(Number.isFinite(t)?t:0).toFixed(3)} ${La.code}`}function de(s){const t=Number(s),e=Number.isFinite(t)?t:0;return`<span class="omr-amount"><span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask:url('${d_()}')"></span>${e.toFixed(3)}</span>`}function Lc(s,t=null){const e=Number(s),i=Number.isFinite(e)?e:0;return`<span class="omr-amount"><img class="omr-symbol" src="${t||`${typeof window<"u"?window.location.origin:""}/images/omr-symbol-ink.png`}" alt="OMR" width="18" height="18">${i.toFixed(3)}</span>`}function dr(s,t=null){const e=t==null?void 0:t.price;if(e!=null&&Number.isFinite(Number(e)))return Number(e);const i=Qt[s];return Number(i==null?void 0:i.price)||0}function fs(s){var t;return((t=Qt[s])==null?void 0:t.unit)||"piece"}function Yi(s){var e;return(((e=Qt[s])==null?void 0:e.unit)||s)==="meter"}function Ro(s){return s==="meter"?"m":"pc"}function Lo(s){const t=Number(s==null?void 0:s.qty);return Number.isFinite(t)&&t>0?t:1}function u_(s){if(!(!Array.isArray(s)||!s.length)){for(const t of Object.keys(Qt))delete Qt[t];Cs.length=0,s.forEach(t=>{t!=null&&t.key&&(Qt[t.key]={label:t.name||t.key,icon:t.icon||"●",price:Number(t.price)||0,buy_price:Number(t.buy_price)||0,unit:t.unit==="meter"?"meter":"piece",category:"all",haDomain:"sensor",model:t.model||t.name||t.key,mount:t.mount||"wall",defaultHeight:t.mount==="ceiling"?2.73:t.mount==="floor"?.05:1.4,w:.14,h:.14},Cs.push(t.key))})}}const Cs=["smoke_detector","gas_detector","vibration_sensor","door_sensor","intercom","main_screen","motion_sensor","micro_sensor","camera","ir_remote","wifi_router","access_point","socket","switch","speakers"],f_=new Set(Object.entries(Qt).filter(([,s])=>s.autoLight).map(([s])=>s));function ur(s){return f_.has(s)||s==="lamp"}function p_(s){return Cs.filter(e=>Qt[e]).map(e=>[e,Qt[e]])}const Ge={sofa:{label:"Sofa",icon:"🛋️",w:2.2,d:.9,h:.85,color:4937059},bed:{label:"Bed",icon:"🛏️",w:2,d:1.6,h:.55,color:6514417},dining_table:{label:"Dining Table",icon:"🍽️",w:1.6,d:.9,h:.75,color:9584654},chair:{label:"Chair",icon:"🪑",w:.5,d:.5,h:.9,color:7893356},desk:{label:"Desk",icon:"🖥️",w:1.4,d:.7,h:.75,color:5722958},tv:{label:'TV 50"',icon:"📺",w:1.11,d:.06,h:.62,color:1120295,emissive:1981023,inches:50},fridge:{label:"Fridge",icon:"🧊",w:.7,d:.7,h:1.8,color:15067115},oven:{label:"Oven",icon:"🔥",w:.6,d:.6,h:.9,color:3621201},sink:{label:"Sink",icon:"🚰",w:.8,d:.5,h:.9,color:10265519},bathtub:{label:"Bathtub",icon:"🛁",w:1.7,d:.75,h:.55,color:15987958},toilet:{label:"Toilet",icon:"🚽",w:.45,d:.7,h:.85,color:16777215},wardrobe:{label:"Wardrobe",icon:"👔",w:1.2,d:.6,h:2.2,color:7877903},lamp:{label:"Floor Lamp",icon:"💡",w:.35,d:.35,h:1.5,color:16498468,emissive:16096779,autoLight:!0},stairs:{label:"Stairs",icon:"🪜",w:1.2,d:2.4,h:.2,color:7041664,steps:6},plant:{label:"Plant",icon:"🪴",w:.4,d:.4,h:.9,color:1483594}},kn={bathroom_standard:{label:"Standard Bathroom",category:"bathroom",icon:"🚿",preset:"bathroom",description:"2.5 × 2 m · tub, toilet, sink, lights",footprint:{w:2.5,d:2},structure:!0,door:{wall:0,position:.5,width:.85,style:"interior"},items:[{kind:"component",type:"toilet",at:[.45,.45],rotation:0},{kind:"component",type:"bathtub",at:[1.55,1.15],rotation:0},{kind:"component",type:"sink",at:[.55,1.55],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[1.25,1],mount:"ceiling"},{kind:"smart",type:"motion_sensor",at:[2.35,1],mount:"wall",height:2.2}]},bathroom_powder:{label:"Powder Room",category:"bathroom",icon:"🚽",preset:"bathroom",description:"1.8 × 1.5 m · compact guest bath",footprint:{w:1.8,d:1.5},structure:!0,door:{wall:0,position:.5,width:.75,style:"interior"},items:[{kind:"component",type:"toilet",at:[.4,.4],rotation:0},{kind:"component",type:"sink",at:[1,1],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[.9,.75],mount:"ceiling"}]},kitchen_galley:{label:"Galley Kitchen",category:"kitchen",icon:"🍳",preset:"kitchen",description:"3 × 2.5 m · fridge, oven, sink, dining",footprint:{w:3,d:2.5},structure:!0,door:{wall:0,position:.35,width:.9,style:"interior"},items:[{kind:"component",type:"fridge",at:[.45,.45],rotation:0},{kind:"component",type:"oven",at:[1.2,.45],rotation:0},{kind:"component",type:"sink",at:[2,.45],rotation:0},{kind:"component",type:"dining_table",at:[1.5,1.6],rotation:0},{kind:"component",type:"chair",at:[1,1.7],rotation:0},{kind:"component",type:"chair",at:[2,1.7],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[1.5,1.25],mount:"ceiling"}]},kitchen_l_shape:{label:"L-Shape Kitchen",category:"kitchen",icon:"🥘",preset:"kitchen",description:"4 × 3 m · full kitchen + dining nook",footprint:{w:4,d:3},structure:!0,door:{wall:0,position:.25,width:.9,style:"interior"},items:[{kind:"component",type:"fridge",at:[.5,.5],rotation:0},{kind:"component",type:"oven",at:[1.3,.5],rotation:0},{kind:"component",type:"sink",at:[2.1,.5],rotation:0},{kind:"component",type:"dining_table",at:[2.8,2],rotation:0},{kind:"component",type:"chair",at:[2.3,2.1],rotation:0},{kind:"component",type:"chair",at:[3.3,2.1],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[2,1.5],mount:"ceiling"},{kind:"smart",type:"motion_sensor",at:[3.85,1.5],mount:"wall",height:2.2}]},bedroom_master:{label:"Master Bedroom",category:"bedroom",icon:"🛏️",preset:"bedroom",description:"4.5 × 4 m · bed, wardrobe, smart lighting",footprint:{w:4.5,d:4},structure:!0,door:{wall:0,position:.7,width:.9,style:"interior"},items:[{kind:"component",type:"bed",at:[2.25,2.5],rotation:0},{kind:"component",type:"wardrobe",at:[.7,3.2],rotation:Math.PI/2},{kind:"component",type:"lamp",at:[.8,1.2],rotation:0},{kind:"component",type:"lamp",at:[3.7,1.2],rotation:0},{kind:"smart",type:"smart_light",at:[2.25,2],mount:"ceiling"},{kind:"smart",type:"temp_sensor",at:[4.3,2],mount:"wall",height:1.5}]},bedroom_guest:{label:"Guest Bedroom",category:"bedroom",icon:"🛌",preset:"bedroom",description:"3 × 3 m · bed + bedside lamp",footprint:{w:3,d:3},structure:!0,door:{wall:0,position:.5,width:.85,style:"interior"},items:[{kind:"component",type:"bed",at:[1.5,1.8],rotation:0},{kind:"component",type:"lamp",at:[.6,.8],rotation:0},{kind:"smart",type:"smart_light",at:[1.5,1.5],mount:"ceiling"}]},living_basic:{label:"Living Room",category:"living",icon:"🛋️",preset:"living",description:"5 × 4 m · sofa, TV, lamp, plant",footprint:{w:5,d:4},structure:!0,door:{wall:0,position:.2,width:1,style:"swing_modern"},items:[{kind:"component",type:"sofa",at:[2.5,2.8],rotation:0},{kind:"component",type:"tv",at:[2.5,.6],rotation:0},{kind:"component",type:"lamp",at:[.7,.7],rotation:0},{kind:"component",type:"plant",at:[4.2,3.2],rotation:0},{kind:"smart",type:"smart_light",at:[2.5,2],mount:"ceiling"},{kind:"smart",type:"smart_curtain",at:[4.85,2],mount:"wall",height:2.4}]},laundry_room:{label:"Laundry",category:"utility",icon:"🧺",preset:"laundry",description:"2 × 2.5 m · sink + smart plug",footprint:{w:2,d:2.5},structure:!0,door:{wall:0,position:.5,width:.8,style:"interior"},items:[{kind:"component",type:"sink",at:[1,.5],rotation:0},{kind:"smart",type:"smart_plug",at:[.5,1.8],mount:"floor"},{kind:"smart",type:"smart_light",at:[1,1.25],mount:"ceiling"},{kind:"smart",type:"water_leak",at:[1,.3],mount:"floor"}]},office_nook:{label:"Home Office",category:"utility",icon:"💼",preset:"office",description:"3 × 2.5 m · desk, chair, lamp",footprint:{w:3,d:2.5},structure:!0,door:{wall:0,position:.5,width:.85,style:"interior"},items:[{kind:"component",type:"desk",at:[1.5,1.3],rotation:0},{kind:"component",type:"chair",at:[1.5,1.9],rotation:Math.PI},{kind:"component",type:"lamp",at:[.5,.5],rotation:0},{kind:"smart",type:"smart_light",at:[1.5,1.25],mount:"ceiling"}]}},Ci={living:{label:"Living Room",color:11006928},bedroom:{label:"Bedroom",color:10090212},kitchen:{label:"Kitchen",color:16639626},bathroom:{label:"Bathroom",color:12248829},media:{label:"Media Room",color:12573694},dining:{label:"Dining",color:16698835},office:{label:"Office",color:15324671},laundry:{label:"Laundry",color:13095678},garage:{label:"Garage",color:13751771},default:{label:"Room",color:15067115}};function mn(s){return typeof s=="number"?s:typeof s=="string"&&s.startsWith("#")?parseInt(s.replace("#",""),16):15067115}function Dc(s,t,e){if(!(e!=null&&e.length)||e.length<3)return!1;let i=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){const[o,a]=e[n],[l,c]=e[r];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}function Rh(s){return Math.hypot(s.to[0]-s.from[0],s.to[1]-s.from[1])}function Q(s,t,e,i){const n=new Jt(new es(s,t,e),i);return n.castShadow=!0,n.receiveShadow=!0,n}function Ct(s,t,e,i,n){const r=new Jt(new Yn(s,t,e,i),n);return r.castShadow=!0,r}function st(s,t={}){return new oi({color:s,roughness:t.roughness??.6,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??(t.emissive?.4:0),transparent:t.transparent??!1,opacity:t.opacity??1})}function m_(s,t,e,i,n){const r=new Ze,o=Rh(s)||.1,a=s.height||2.8,l=s.thickness||.15,c=[...e.filter(p=>p.wall_id===s.id).map(p=>({l:_s(p.position*o-(p.width||1)/2,0,o),r:_s(p.position*o+(p.width||1)/2,0,o),b:0,t:Math.min(p.height||2.1,a)})),...i.filter(p=>p.wall_id===s.id).map(p=>({l:_s(p.position*o-(p.width||1.2)/2,0,o),r:_s(p.position*o+(p.width||1.2)/2,0,o),b:p.sill||.9,t:Math.min((p.sill||.9)+(p.height||1.2),a)}))].sort((p,u)=>p.l-u.l),h=[];for(const p of c)if(!h.length||p.l>h[h.length-1].r+.01)h.push({...p});else{const u=h[h.length-1];u.r=Math.max(u.r,p.r),u.b=Math.min(u.b,p.b),u.t=Math.max(u.t,p.t)}const f=(p,u,b,w)=>{const M=u-p,A=w-b;if(M<.03||A<.03)return;const T=Q(M,A,l,n);T.position.set(-o/2+p+M/2,b+A/2,0),r.add(T)};if(h.length){let p=0;for(const u of h)u.l>p&&f(p,u.l,0,a),u.t<a-.03&&f(u.l,u.r,u.t,a),u.b>.03&&f(u.l,u.r,0,u.b),p=Math.max(p,u.r);p<o-.03&&f(p,o,0,a)}else{const p=Q(o,a,l,n);p.position.y=a/2,r.add(p)}const[d,m]=s.from,[g,x]=s.to;return r.position.set((d+g)/2,t,(m+x)/2),r.rotation.y=-Math.atan2(x-m,g-d),r.userData={type:"wall",id:s.id},r}function _s(s,t,e){return Math.max(t,Math.min(e,s))}function Lh(s,t,e){const[i,n]=s.from,[r,o]=s.to,a=Math.atan2(o-n,r-i),l=i+(r-i)*t,c=n+(o-n)*t;return{x:l,z:c,angle:a,floorY:e}}function g_(s,t){const e=s.position??.5,i=t.from[0]+(t.to[0]-t.from[0])*e,n=t.from[1]+(t.to[1]-t.from[1])*e;return{x:i,z:n}}function Do(s,t,e,i,n,r,o=1){const a=new Ze;a.position.set(-t/2+i,0,0),a.userData.doorPanel=!0,a.userData.panelKind="swing",a.userData.openDir=o;const l=t-i*2,c=Q(l,e,.05,n);if(c.position.set(l/2,e/2+.02,.03),a.add(c),r){const h=Ct(.035,.035,.12,10,r);h.rotation.z=Math.PI/2,h.position.set(l-.08,e*.45,.07),a.add(h)}return s.add(a),a}function Ic(s,t,e,i,n,r=0){const o=new Ze;o.position.set(r,0,0),o.userData.doorPanel=!0,o.userData.panelKind="slide",o.userData.slideDist=(t-i*2)*.55,o.userData.baseX=r;const a=Q((t-i*2)*.48,e,.02,n);return a.position.set(0,e/2+.02,.02),o.add(a),s.add(o),o}function Nc(s,t,e,i=!1){const n=new Ze,r=s.width||1,o=s.height||2.1,a=s.style||s.type||"swing_modern",l=.06,c=s.frame_color?mn(s.frame_color):16777215,h=s.color?mn(s.color):i?16498468:9136404,f=st(c,{roughness:.45}),d=st(h,{roughness:.55,emissive:i?14251782:0,emissiveIntensity:i?.25:0}),m=st(9684477,{transparent:!0,opacity:.4,metalness:.5,roughness:.05}),g=st(13948120,{metalness:.9,roughness:.15}),x=st(2042167),p=()=>{const A=Q(l,o,.1,f);A.position.set(-r/2+l/2,o/2,0);const T=Q(l,o,.1,f);T.position.set(r/2-l/2,o/2,0);const R=Q(r,l,.1,f);R.position.set(0,o-l/2,0),n.add(A,T,R)},u=o-l-.05;switch(a){case"sliding_glass":case"garage":if(p(),a==="garage"){const _=Q(r-l*2,u,.04,st(15067115,{metalness:.4}));_.position.set(0,u/2+.02,.02),n.add(_);const y=Q(r-l*2,.02,.05,x);for(let E=1;E<5;E++){const C=y.clone();C.position.set(0,u*(E/5),.04),n.add(C)}}else Ic(n,r,u,l,m,r*.08),Ic(n,r,u,l,m,-r*.15);n.add(Q(r,.04,.12,x)),n.children[n.children.length-1].position.set(0,.02,0);break;case"double_french":p(),[-1,1].forEach(_=>{const y=r/2-l*1.1,E=Q(y,u,.04,d);E.position.set(_*(y/2+l*.5),u/2+.02,.03),E.rotation.y=_*.45,n.add(E),n.add(Q(y*.7,u*.55,.02,m)),n.children[n.children.length-1].position.set(_*(y/2+l*.5),u*.55,.05)});break;case"pivot_modern":p();const A=Q(r-l*2,u,.05,st(3621201,{metalness:.3}));A.position.set(0,u/2+.02,.03),A.rotation.y=.6,n.add(A),n.add(Ct(.04,.04,u*.8,8,g)),n.children[n.children.length-1].position.set(-r/2+l+.05,u/2,.06);break;case"arched":p();const T=Q(r-l*2,u*.85,.05,d);T.position.set(0,u*.42,.03),n.add(T);const R=new Jt(new ii((r-l*2)/2,16,8,0,Math.PI),d);R.position.set(0,u*.85,.03),R.scale.set(1,.5,.08),n.add(R);break;case"interior":{const _=Q(r,o,.06,st(16777215));_.position.set(0,o/2,0),n.add(_),Do(n,r,u,.04,st(16119284),null,1);break}case"swing_classic":p(),Do(n,r,u,l,d,g,1);for(let _=0;_<3;_++){const y=Q(r-l*2-.1,.02,.06,st(6045747));y.position.set(0,u*(.3+_*.22),.06),n.add(y)}break;default:p(),Do(n,r,u,l,d,g,1)}const{x:b,z:w,angle:M}=Lh(t,s.position??.5,e);return n.position.set(b,e,w),n.rotation.y=-M,n.translateZ(.02),n.userData={type:"door",id:s.id},n}function Uc(s,t,e,i=!1){const n=new Ze,r=s.width||1.2,o=s.height||1.2,a=s.sill??.9,l=s.style||s.type||"standard",c=.05,h=s.frame_color?mn(s.frame_color):16777215,f=st(h,{roughness:.35}),d=st(i?8246268:10868986,{transparent:!0,opacity:.42,metalness:.55,roughness:.04,emissive:i?959977:1981023,emissiveIntensity:i?.2:.06}),m=()=>{[[-r/2+c/2,o/2,c,o],[r/2-c/2,o/2,c,o],[0,o-c/2,r,c],[0,c/2,r,c]].forEach(([b,w,M,A])=>{const T=Q(M,A,.08,f);T.position.set(b,w+a,0),n.add(T)})};switch(l){case"bay":m(),[-1,0,1].forEach(M=>{const A=Q(r/3-.02,o-c,.02,d);A.position.set(M*(r/3),a+o/2,M*.08),A.rotation.y=M*.25,n.add(A)});break;case"sliding":m(),n.add(Q(r*.45,o-c*2,.02,d)),n.children[n.children.length-1].position.set(-r*.12,a+o/2,.02),n.add(Q(r*.45,o-c*2,.02,d)),n.children[n.children.length-1].position.set(r*.12,a+o/2,.04);break;case"floor_ceiling":n.add(Q(c,o,.08,f)),n.children[0].position.set(-r/2+c/2,a+o/2,0),n.add(Q(c,o,.08,f)),n.children[1].position.set(r/2-c/2,a+o/2,0),n.add(Q(r,o,.02,d)),n.children[2].position.set(0,a+o/2,0);break;case"arched":m(),n.add(Q(r-c*2,o*.7,.02,d)),n.children[n.children.length-1].position.set(0,a+o*.35,0);const b=new Jt(new ii((r-c*2)/2,16,8,0,Math.PI),d);b.position.set(0,a+o*.7,0),b.scale.set(1,.45,.05),n.add(b);break;case"wide":m();const w=Q(r-c*2,o-c*2,.02,d);w.position.set(0,a+o/2,0),n.add(w);break;default:m(),n.add(Q(r-c*2,o-c*2,.02,d)),n.children[n.children.length-1].position.set(0,a+o/2,0),n.add(Q(.03,o-c*2,.03,f)),n.children[n.children.length-1].position.set(0,a+o/2,.02),n.add(Q(r-c*2,.03,.03,f)),n.children[n.children.length-1].position.set(0,a+o/2,.02)}const g=Q(r+.04,.04,.1,st(15197668));g.position.set(0,a-.02,.02),n.add(g);const{x,z:p,angle:u}=Lh(t,s.position??.5,e);return n.position.set(x,e,p),n.rotation.y=-u,n.userData={type:"window",id:s.id},n}function fr(s,t,e,i=!1,n=!0){const r=e[s.type];if(!r)return null;const o=new Ze,a=s.mount||r.mount||"floor",l=s.on!==!1,c=st(16317180,{roughness:.35,metalness:.05}),h=st(14870768,{roughness:.55}),f=st(1976635,{roughness:.4,metalness:.15}),d=st(12632256,{roughness:.25,metalness:.85}),m=st(1120295,{roughness:.05,metalness:.6,transparent:!0,opacity:.85}),g=st(15857145,{roughness:.45}),x=st(2278750,{emissive:1483594,emissiveIntensity:l?1.2:0}),p=st(15680580,{emissive:14427686,emissiveIntensity:l?.9:0}),u=st(3900150,{emissive:2450411,emissiveIntensity:l?.8:0}),b=i?.15:0,w=(()=>{const _=document.createElement("canvas");_.width=256,_.height=384;const y=_.getContext("2d"),E=y.createLinearGradient(0,0,0,384);return E.addColorStop(0,"#0f172a"),E.addColorStop(1,"#1e3a5f"),y.fillStyle=E,y.fillRect(0,0,256,384),y.fillStyle="rgba(255,255,255,0.9)",y.font="bold 28px system-ui,sans-serif",y.fillText("Smart Home",24,50),y.fillStyle="rgba(96,165,250,0.6)",y.fillRect(24,80,208,60),y.fillRect(24,160,98,60),y.fillRect(134,160,98,60),y.fillStyle="rgba(255,255,255,0.5)",y.font="18px system-ui,sans-serif",y.fillText("Living · 22°C",36,118),new vs(_)})();switch(s.type){case"smart_light":{const _=Ct(.11,.11,.015,24,c);_.position.y=-.008,o.add(_);const y=Ct(.085,.07,.08,16,st(13358561,{metalness:.4,roughness:.35}));y.position.y=-.05,o.add(y);const E=Ct(.07,.05,.02,16,st(14870768,{metalness:.9,roughness:.15}));E.position.y=-.09,o.add(E);const C=new Jt(new ii(.035,16,16),st(16776171,{emissive:l?16775149:4472892,emissiveIntensity:l?1.5+b:.1,roughness:.2}));if(C.position.y=-.1,o.add(C),l){const L=new Zi(16773600,n?1.2:.6,8,2);L.position.y=-.12,L.castShadow=n,o.add(L)}o.rotation.x=Math.PI;break}case"camera":{const _=Ct(.05,.05,.02,16,h);_.position.y=-.01,o.add(_);const y=new Jt(new ii(.065,20,16,0,Math.PI*2,0,Math.PI*.55),c);y.position.y=-.05,o.add(y);const E=new Jt(new ii(.045,16,12,0,Math.PI*2,0,Math.PI*.5),m);E.position.set(0,-.06,.02),E.rotation.x=-.3,o.add(E);const C=Ct(.018,.018,.01,12,st(988970,{metalness:.8}));C.rotation.x=Math.PI/2,C.position.set(0,-.055,.055),o.add(C);for(let k=0;k<6;k++){const W=k/6*Math.PI*2,U=Ct(.004,.004,.005,6,st(1973067,{emissive:l?3223169:0,emissiveIntensity:.5}));U.position.set(Math.cos(W)*.04,-.04,Math.sin(W)*.04+.02),o.add(U)}const L=Ct(.004,.004,.003,8,x);L.position.set(.04,-.02,0),o.add(L),o.rotation.x=Math.PI;break}case"wifi_ap":case"access_point":{const _=Ct(.14,.14,.008,32,c);_.position.y=-.004,o.add(_);const y=Ct(.12,.12,.025,32,g);y.position.y=-.02,o.add(y);const E=new Jt(new Ps(.08,.004,8,32),h);E.rotation.x=Math.PI/2,E.position.y=-.035,o.add(E);const C=Ct(.006,.006,.004,8,u);C.position.set(.05,-.034,0),o.add(C),o.rotation.x=Math.PI;break}case"router":case"wifi_router":{const _=Q(.22,.04,.16,st(16777215,{roughness:.3}));_.position.y=.02,o.add(_);const y=Q(.2,.005,.14,st(988970,{roughness:.5}));y.position.set(0,.042,0),o.add(y);for(let C=0;C<4;C++){const L=Ct(.004,.003,.14,6,st(1976635));L.position.set(-.07+C*.045,.11,-.02),o.add(L);const k=Ct(.006,.004,.015,6,st(1976635));k.position.set(-.07+C*.045,.19,-.02),o.add(k)}const E=Ct(.003,.003,.004,6,x);E.position.set(.09,.038,.06),o.add(E);break}case"ceiling_speaker":{const _=Ct(.145,.145,.012,32,c);_.position.y=-.006,o.add(_);const y=Ct(.125,.125,.008,32,st(13948120,{roughness:.7}));y.position.y=-.018,o.add(y);for(let C=.03;C<=.1;C+=.025){const L=new Jt(new Ps(C,.0015,4,32),st(10592682));L.rotation.x=Math.PI/2,L.position.y=-.022,o.add(L)}const E=Ct(.035,.02,.025,12,st(5395035));E.position.y=-.03,o.add(E),o.rotation.x=Math.PI;break}case"speakers":{const _=Q(.18,.32,.14,st(1976635,{roughness:.55}));o.add(_);const y=Ct(.055,.055,.02,16,st(988970));y.position.set(0,-.04,.075),o.add(y);const E=Ct(.02,.02,.015,12,st(3359061));E.position.set(0,.1,.075),o.add(E);const C=Q(.16,.3,.005,st(3621201,{roughness:.8}));C.position.set(0,0,.072),o.add(C);break}case"switch":case"smart_switch":case"dimmer_switch":case"relay":{const _=Q(.08,.12,.012,st(15857145,{metalness:.1}));_.position.set(0,0,-.006),o.add(_);const y=Q(.076,.116,.008,st(988970,{roughness:.15,metalness:.2}));o.add(y);const E=Q(.074,.114,.003,st(16777215,{transparent:!0,opacity:.12,roughness:.05,metalness:.1}));E.position.z=.005,o.add(E);for(let C=0;C<3;C++){const L=Q(.055,.028,.002,st(3359061,{emissive:l&&C===0?4674921:0,emissiveIntensity:.3}));L.position.set(0,.038-C*.038,.006),o.add(L)}break}case"control_screen":case"main_screen":{const _=s.type==="main_screen"?2.2:1,y=.28*_,E=.42*_,C=.24*_,L=.36*_,k=Q(y,E,.018,f);k.position.set(0,0,-.009),o.add(k);const W=Q(y-.01,E-.01,.012,st(2565930,{metalness:.3,roughness:.35}));o.add(W);const U=Q(C,L,.004,new oi({map:w,emissive:l?1982639:657930,emissiveMap:w,emissiveIntensity:l?.6+b:.05,roughness:.1,metalness:0}));U.position.z=.008,o.add(U);const q=Ct(.004,.004,.003,8,st(1579035));if(q.position.set(0,E/2-.04,.012),o.add(q),l&&n){const H=new Zi(9684477,.15,2);H.position.z=.05,o.add(H)}break}case"temp_sensor":case"thermostat":{const _=Q(.09,.13,.015,c);o.add(_);const y=Q(.07,.05,.004,st(988970,{emissive:l?1981023:0,emissiveIntensity:.5}));y.position.set(0,.02,.009),o.add(y);const E=document.createElement("canvas");E.width=128,E.height=64;const C=E.getContext("2d");C.fillStyle="#38bdf8",C.font="bold 36px system-ui",C.fillText("22°",20,48);const L=new vs(E),k=Q(.068,.048,.002,new oi({map:L,emissiveMap:L,emissive:16777215,emissiveIntensity:l?.4:0}));k.position.set(0,.02,.011),o.add(k);const W=Ct(.025,.025,.008,16,d);W.rotation.x=Math.PI/2,W.position.set(0,-.035,.01),o.add(W);break}case"motion_sensor":{const _=Q(.07,.1,.025,c);o.add(_);const y=Ct(.028,.028,.015,16,h);y.rotation.x=Math.PI/2,y.position.set(0,0,.018),o.add(y);const E=new Jt(new ii(.022,12,8),st(16708551,{transparent:!0,opacity:.85,roughness:.1}));E.position.set(0,0,.028),o.add(E);const C=Ct(.004,.004,.003,6,p);C.position.set(.025,.03,.013),o.add(C);break}case"door_sensor":{const _=Q(.025,.07,.018,c);_.position.set(-.02,0,0),o.add(_);const y=Q(.015,.06,.012,st(6583435,{metalness:.5}));y.position.set(.025,0,0),o.add(y);const E=Ct(.003,.003,.002,6,x);E.position.set(-.02,.025,.01),o.add(E);break}case"alarm_siren":{const _=Q(.12,.12,.04,c);o.add(_),Q(.1,.1,.005,st(13948120,{roughness:.8}));for(let E=-.04;E<=.04;E+=.02){const C=Q(.08,.003,.006,st(10592682));C.position.set(0,E,.022),o.add(C)}const y=Ct(.025,.025,.01,12,st(16777215,{emissive:l?15680580:0,emissiveIntensity:l?1:0,transparent:!0,opacity:.9}));y.rotation.x=Math.PI/2,y.position.set(0,0,.025),o.add(y);break}case"ac_split":{const _=Q(.85,.28,.22,c);o.add(_);const y=Q(.75,.04,.18,st(14870768,{metalness:.3}));y.position.set(0,-.05,.02),o.add(y);for(let L=0;L<5;L++){const k=Q(.7,.008,.015,st(13358561));k.position.set(0,-.02,-.06+L*.03),o.add(k)}const E=Q(.12,.04,.01,st(988970,{emissive:l?3718648:0,emissiveIntensity:.6}));E.position.set(.3,.05,.12),o.add(E);const C=Ct(.005,.005,.004,6,l?x:st(6583435));C.position.set(-.35,.1,.12),o.add(C);break}case"ac_cassette":{o.rotation.x=Math.PI;const _=Q(.6,.08,.6,c);_.position.y=-.04,o.add(_);const y=Q(.5,.01,.5,st(13948120));y.position.y=-.085,o.add(y);for(let E=-.2;E<=.2;E+=.1){const C=Q(.45,.005,.008,st(10592682));C.position.set(0,-.088,E),o.add(C)}if(l){const E=new Zi(12248829,.3,4);E.position.y=-.15,o.add(E)}break}case"smart_tv_50":case"soundbar":{const _=s.type==="soundbar"?1.1:1.11,y=s.type==="soundbar"?.07:.62,E=Q(_+.03,y+.03,.03,st(1579035,{metalness:.3}));o.add(E);const C=document.createElement("canvas");C.width=512,C.height=s.type==="soundbar"?64:288;const L=C.getContext("2d");L.fillStyle=s.type==="soundbar"?"#1e293b":"#0f172a",L.fillRect(0,0,C.width,C.height),s.type!=="soundbar"&&(L.fillStyle="#1e40af",L.fillRect(10,10,492,268),L.fillStyle="#fff",L.font="bold 28px system-ui",L.fillText('Smart TV 50" · Home Assistant',20,40));const k=new vs(C),W=Q(_,y,.012,new oi({map:k,emissiveMap:k,emissive:16777215,emissiveIntensity:l?.5:.05,roughness:.05}));W.position.z=.018,o.add(W);break}case"smart_bulb":{const _=Ct(.003,.003,.15,6,st(3621201));_.position.y=.075,o.add(_);const y=new Jt(new ii(.09,16,16),st(16776171,{emissive:l?16498468:4472892,emissiveIntensity:l?1.4:.08}));if(y.position.y=-.02,o.add(y),l){const E=new Zi(16773600,n?1:.5,7,2);E.position.y=-.04,o.add(E)}o.rotation.x=Math.PI;break}case"light_strip":{const _=Q(1.2,.025,.03,st(1976635));_.position.y=0,o.add(_);const y=Q(1.15,.012,.02,st(16777215,{emissive:l?11032055:3355443,emissiveIntensity:l?1.2:0}));if(y.position.set(0,.01,.01),o.add(y),l){const E=new Zi(12616956,.4,5);E.position.set(0,-.1,.2),o.add(E)}break}case"ceiling_panel":{o.rotation.x=Math.PI;const _=Q(.55,.04,.55,c);_.position.y=-.02,o.add(_);const y=Q(.48,.01,.48,st(16777215,{emissive:l?16775149:3355443,emissiveIntensity:l?1:0}));if(y.position.y=-.045,o.add(y),l){const E=new Zi(16773600,1.4,10,2);E.position.y=-.2,o.add(E)}break}case"humidifier":{const _=Ct(.12,.14,.32,16,c);_.position.y=.16,o.add(_);const y=Ct(.005,.02,.06,8,st(12248829,{transparent:!0,opacity:l?.5:.1}));y.position.y=.35,o.add(y);const E=Ct(.006,.006,.004,8,l?u:st(6583435));E.position.set(.08,.25,.08),o.add(E);break}case"fan":{const _=Ct(.12,.14,.03,16,f);_.position.y=.015,o.add(_);const y=Ct(.03,.03,.85,10,d);y.position.y=.45,o.add(y);const E=Ct(.18,.18,.03,20,c);E.position.y=.9,o.add(E);break}case"heater":{const _=Q(.28,.48,.12,c);_.position.y=.24,o.add(_);for(let y=0;y<6;y++){const E=Q(.22,.008,.08,st(13358561,{emissive:l?16347926:0,emissiveIntensity:l?.5:0}));E.position.set(0,.1+y*.06,.02),o.add(E)}break}case"smart_plug":{const _=Q(.08,.12,.05,c);_.position.y=.06,o.add(_);const y=Q(.04,.015,.02,d);y.position.set(0,.125,.02),o.add(y);const E=Ct(.004,.004,.003,6,l?x:st(6583435));E.position.set(.025,.08,.026),o.add(E);break}case"socket":{const _=Q(.08,.12,.012,h);o.add(_);const y=Q(.06,.08,.008,st(16317180,{roughness:.4}));y.position.z=.008,o.add(y);const E=Q(.012,.035,.012,d);E.position.set(-.015,0,.014),o.add(E);const C=E.clone();C.position.x=.015,o.add(C);const L=Ct(.003,.003,.003,6,l?u:st(6583435));L.position.set(0,-.04,.012),o.add(L);break}case"ir_remote":{const _=Q(.07,.07,.03,st(1579035,{roughness:.35}));o.add(_);const y=Ct(.025,.025,.008,12,m);y.position.set(0,0,.018),o.add(y);const E=Ct(.004,.004,.003,6,l?p:st(6583435));E.position.set(.025,.025,.016),o.add(E);break}case"micro_sensor":{const _=Q(.09,.09,.025,c);o.add(_);const y=Ct(.025,.025,.012,12,st(3359061,{metalness:.3}));y.position.set(0,0,.018),o.add(y);const E=Ct(.004,.004,.003,6,l?u:st(6583435));E.position.set(.03,.03,.014),o.add(E);break}case"vibration_sensor":{const _=Q(.07,.07,.02,h);o.add(_);const y=Ct(.02,.02,.008,10,st(4674921));y.position.set(0,0,.012),o.add(y);const E=Ct(.003,.003,.003,6,l?x:st(6583435));E.position.set(.025,.025,.012),o.add(E);break}case"intercom":{const _=Q(.13,.2,.025,f);o.add(_);const y=Q(.1,.1,.006,st(988970,{emissive:l?1981023:0,emissiveIntensity:.45}));y.position.set(0,.03,.014),o.add(y);const E=Ct(.012,.012,.008,10,st(1579035));E.position.set(0,.08,.016),o.add(E);for(let C=0;C<3;C++){const L=Ct(.015,.015,.004,10,st(3359061,{emissive:l&&C===1?4674921:0,emissiveIntensity:.3}));L.position.set(-.03+C*.03,-.06,.016),o.add(L)}break}case"robot_vacuum":{const _=Ct(.17,.17,.09,24,st(16777215,{metalness:.2}));_.position.y=.045,o.add(_);const y=Ct(.04,.04,.02,12,f);y.position.set(.1,.08,0),o.add(y);const E=Ct(.005,.005,.003,6,l?u:st(6583435));E.position.set(-.08,.085,.06),o.add(E);break}case"smart_lock":{const _=Q(.12,.22,.04,st(1579035,{metalness:.5}));o.add(_);const y=Ct(.04,.04,.06,12,d);y.rotation.z=Math.PI/2,y.position.set(.06,0,.03),o.add(y);break}case"smoke_detector":case"gas_detector":{o.rotation.x=Math.PI;const _=Ct(.12,.12,.04,20,c);_.position.y=-.02,o.add(_);const y=Ct(.04,.04,.015,12,st(14870768,{roughness:.6}));y.position.y=-.035,o.add(y);const E=Ct(.006,.006,.004,8,l?s.type==="gas_detector"?p:x:st(6583435));E.position.set(.05,-.03,0),o.add(E);break}case"smart_curtain":case"smart_blinds":{const _=Q(.12,.08,.08,c);_.position.y=.04,o.add(_);const y=Ct(.008,.008,.8,6,d);y.rotation.z=Math.PI/2,y.position.set(.4,.04,0),o.add(y);break}case"zigbee_hub":{const _=Q(.12,.035,.12,g);_.position.y=.018,o.add(_);const y=Ct(.004,.004,.003,6,l?x:st(6583435));y.position.set(.04,.035,0),o.add(y);break}case"water_leak":{const _=Q(.08,.025,.08,c);_.position.y=.012,o.add(_);const y=Q(.02,.01,.04,d);y.position.set(0,.025,.02),o.add(y);break}case"electrical_panel":{const _=Q(.38,.52,.08,st(15067115,{metalness:.35,roughness:.45}));_.position.y=.26,o.add(_);const y=Q(.36,.5,.01,st(16317180,{metalness:.25,roughness:.4}));y.position.set(0,.26,.042),o.add(y);const E=Q(.04,.12,.015,d);E.position.set(.14,.26,.05),o.add(E);const C=Q(.15,.04,.005,st(16498468,{emissive:16096779,emissiveIntensity:.3}));C.position.set(-.05,.48,.045),o.add(C);for(let L=0;L<6;L++){const k=Q(.04,.07,.008,st(1976635));k.position.set(-.12+L%3*.12,.38-Math.floor(L/3)*.12,.046),o.add(k)}break}default:o.add(Q(r.w,r.h||.15,r.w,g)),o.children[0].position.y=(r.h||.15)/2}if(i&&!n){const _=new Jt(new Za(.12,.14,24),st(2282478,{emissive:561586,emissiveIntensity:.6,transparent:!0,opacity:.7}));_.rotation.x=-Math.PI/2,_.position.y=.01,o.add(_)}const[M,A]=s.position||[0,0];let T=t;const R=s.ceiling_height??2.75;return a==="ceiling"?T=t+R:a==="wall"?T=t+(s.height_offset??r.defaultHeight??1.35):a==="door"&&(T=t+1),o.position.set(M,T,A),o.rotation.y=s.rotation||0,o.userData={type:"smart",id:s.id,smartType:s.type},o}function Io(s,t,e,i=!1){const n=e[s.type];if(!n)return null;const r=new Ze,o=s.width||n.w,a=s.depth||n.d,l=s.height||n.h,c=s.color?mn(s.color):n.color,h=(g,x={})=>st(g,{...x,transparent:i,opacity:i?.35:1}),f=h(c);switch(h(3621201),s.type){case"sofa":{r.add(Q(o,.35,a,f)),r.children[0].position.set(0,.175,0);const g=Q(o,.5,.15,f);g.position.set(0,.45,-a/2+.075),r.add(g,Q(.12,.45,a,f)),r.children[2].position.set(-o/2+.06,.35,0),r.add(Q(o-.3,.12,a-.2,h(7041664))),r.children[3].position.set(0,.4,.05);break}case"bed":{r.add(Q(o,.25,a,f)),r.children[0].position.set(0,.125,0),r.add(Q(o-.08,.2,a-.08,h(16317180))),r.children[1].position.set(0,.35,0),r.add(Q(o,.9,.08,f)),r.children[2].position.set(0,.55,-a/2+.04);break}case"lamp":{const g=s.on!==!1,x=Ct(.16,.18,.025,20,h(1841431,{metalness:.6,roughness:.35}));x.position.y=.012,r.add(x);const p=Ct(.018,.022,l-.3,10,h(12632256,{metalness:.85,roughness:.2}));p.position.y=(l-.3)/2+.02,r.add(p);const u=new Jt(new Yn(.2,.24,.22,20,1,!0),h(16448249,{emissive:g?16775149:0,emissiveIntensity:g?.4:0,side:ti}));u.position.y=l-.18,r.add(u);const b=new Jt(new ii(.05,12,12),h(16776171,{emissive:g?16498468:4472892,emissiveIntensity:g?.8:.05}));if(b.position.y=l-.2,r.add(b),g){const w=new Zi(16772565,.9,7,2);w.position.y=l-.22,w.castShadow=!i,r.add(w)}break}case"tv":{const x=Q(.12,.9,.08,h(2565930,{metalness:.4}));x.position.set(0,.9/2,.05),r.add(x);const p=Q(.06,.05,.18,h(5395035,{metalness:.5}));p.position.set(0,.9-.03,.12),r.add(p);const u=Q(o+.03,l+.03,.03,h(1579035,{metalness:.3,roughness:.4}));u.position.set(0,.9+l/2+.08,0),r.add(u);const b=document.createElement("canvas");b.width=512,b.height=288;const w=b.getContext("2d");w.fillStyle="#0a0a0a",w.fillRect(0,0,512,288);const M=w.createLinearGradient(0,0,512,288);M.addColorStop(0,"#1e3a5f"),M.addColorStop(1,"#0f172a"),w.fillStyle=M,w.fillRect(8,8,496,272),w.fillStyle="rgba(255,255,255,0.85)",w.font="bold 32px system-ui,sans-serif",w.fillText('Smart TV 50"',24,48),w.fillStyle="rgba(96,165,250,0.5)",w.fillRect(24,70,464,190);const A=new vs(b),T=Q(o,l,.015,new oi({map:A,emissiveMap:A,emissive:16777215,emissiveIntensity:.45,roughness:.05,metalness:0}));T.position.set(0,.9+l/2+.08,.018),r.add(T);const R=new Zi(9684477,.12,3);R.position.set(0,.9+l/2+.08,.4),r.add(R);break}case"toilet":{const g=h(16317180,{roughness:.25,metalness:.05}),x=Q(.38,.38,.18,g);x.position.set(0,.55,-a/2+.12),r.add(x);const p=new Jt(new Yn(.2,.17,.32,20),g);p.position.set(0,.2,.05),r.add(p);const u=new Jt(new Ps(.17,.025,8,24),h(15067115,{roughness:.5}));u.rotation.x=Math.PI/2,u.position.set(0,.38,.05),r.add(u);break}case"bathtub":{const g=h(15857145,{roughness:.2,metalness:.08}),x=Q(o,l*.85,a,g);x.position.set(0,l*.42,0),r.add(x);const p=Q(o-.12,l*.55,a-.12,h(14870768,{roughness:.15}));p.position.set(0,l*.5,0),r.add(p);const u=Q(.04,.25,.04,h(12632256,{metalness:.85,roughness:.2}));u.position.set(-o/2+.15,l*.75,0),r.add(u);break}case"sink":{const g=Q(o,l*.65,a,h(7893356,{roughness:.7}));g.position.set(0,l*.32,0),r.add(g);const x=Q(o+.02,.04,a+.02,h(15067115,{roughness:.3}));x.position.set(0,l*.66,0),r.add(x);const p=new Jt(new Yn(.22,.18,.08,20),h(16317180,{roughness:.2}));p.position.set(0,l*.72,0),r.add(p);const u=Q(.03,.18,.03,h(11579568,{metalness:.9,roughness:.15}));u.position.set(0,l*.82,-a/2+.08),r.add(u);break}case"fridge":{const g=Q(o,l,a,h(15067115,{roughness:.35,metalness:.15}));g.position.set(0,l/2,0),r.add(g);const x=Q(o+.01,.015,a+.01,h(10265519,{metalness:.4}));x.position.set(0,l*.62,0),r.add(x);const p=Q(.03,.35,.03,h(7041664,{metalness:.7}));p.position.set(o/2-.06,l*.78,0),r.add(p);const u=p.clone();u.position.y=l*.35,r.add(u);break}case"oven":{const g=Q(o,l,a,h(3621201,{roughness:.45,metalness:.2}));g.position.set(0,l/2,0),r.add(g);const x=Q(o-.08,l*.45,.02,h(2042167,{roughness:.1,metalness:.3}));x.position.set(0,l*.38,a/2+.01),r.add(x);const p=Q(o*.5,.04,.04,h(1120295,{metalness:.5}));p.position.set(0,l*.82,a/2+.02),r.add(p);break}case"wardrobe":{const g=Q(o,l,a,h(c,{roughness:.75}));g.position.set(0,l/2,0),r.add(g);const p=Q(o/2-.02,l-.08,.03,h(9584654,{roughness:.65}));p.position.set(-o/4,l/2,a/2+.015),r.add(p);const u=p.clone();u.position.x=o/4,r.add(u);const b=Ct(.015,.015,.08,8,h(12632256,{metalness:.8}));b.rotation.z=Math.PI/2,b.position.set(-.05,l*.45,a/2+.05),r.add(b);break}default:r.add(Q(o,l,a,f)),r.children[0].position.y=l/2}const[d,m]=s.position||[0,0];return r.position.set(d,t,m),r.rotation.y=s.rotation||0,r.userData={type:"component",id:s.id},r}function __(s,t,e){if(!(s!=null&&s.length)||s.length<3)return null;const i=new Ka;i.moveTo(s[0][0],s[0][1]);for(let o=1;o<s.length;o++)i.lineTo(s[o][0],s[o][1]);i.closePath();const n=e.isMaterial?e:st(typeof e=="number"?e:mn(e),{roughness:.88}),r=new Jt(new Or(i),n);return r.rotation.x=-Math.PI/2,r.position.y=t+.02,r.receiveShadow=!0,r.userData.isFloor=!0,r}function v_(s,t,e,i){if(!(s!=null&&s.length)||s.length<3)return null;const n=new Ka;n.moveTo(s[0][0],s[0][1]);for(let o=1;o<s.length;o++)n.lineTo(s[o][0],s[o][1]);n.closePath();const r=new Jt(new Or(n),i);return r.rotation.x=Math.PI/2,r.position.y=t+e-.02,r.userData.isCeiling=!0,r}function x_(s,t){var l;if(!((l=s.polygon)!=null&&l.length))return null;const e=s.polygon.reduce((c,h)=>c+h[0],0)/s.polygon.length,i=s.polygon.reduce((c,h)=>c+h[1],0)/s.polygon.length,n=document.createElement("canvas");n.width=256,n.height=64;const r=n.getContext("2d");r.fillStyle="rgba(15,23,42,0.75)",r.roundRect(8,8,240,48,12),r.fill(),r.fillStyle="#ffffff",r.font="bold 22px Inter, sans-serif",r.textAlign="center",r.fillText(s.name||"Room",128,40);const o=new vs(n),a=new Gd(new sh({map:o,transparent:!0}));return a.scale.set(2.5,.65,1),a.position.set(e,t+.15,i),a.userData.isLabel=!0,a}function y_(s,t,e,i){const n=Rh(e);if(n<.1)return!1;const r=e.to[0]-e.from[0],o=e.to[1]-e.from[1],a=r*r+o*o,l=_s(((s-e.from[0])*r+(t-e.from[1])*o)/a,0,1),c=l*n,h=e.from[0]+r*l,f=e.from[1]+o*l,d=Math.hypot(s-h,t-f);for(const m of i.filter(g=>g.wall_id===e.id)){const g=(m.width||1)/2+.35,x=(m.position??.5)*n;if(c>=x-g&&c<=x+g&&d<(m.width||1)/2+.55)return!0}return!1}function No(s,t){s.traverse(e=>{var i;(i=e.userData)!=null&&i.doorPanel&&(e.userData.panelKind==="swing"?e.rotation.y=-t*(Math.PI/2.2)*(e.userData.openDir||1):e.userData.panelKind==="slide"&&(e.position.x=(e.userData.baseX||0)+t*(e.userData.slideDist||.5)))})}function M_(s){return typeof s=="number"?`#${(s>>>0).toString(16).padStart(6,"0")}`:typeof s=="string"&&s.startsWith("#")?s:"#e5e7eb"}function S_(s,t,e,i,n,r){const o=n-e,a=r-i,l=o*o+a*a;if(l<1e-4)return Math.hypot(s-e,t-i);let c=((s-e)*o+(t-i)*a)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(s-(e+c*o),t-(i+c*a))}class b_{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="plan2d-canvas",this.canvas.setAttribute("aria-label","2D floor plan"),t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.zoom=1,this.panX=0,this.panY=0,this.padding=48,this.isPanning=!1,this.panMoved=!1,this.lastPan={x:0,y:0},this.bounds={w:20,d:15},this.visible=!1,this._underlayCache={},this._underlayLoading={},this._pointers=new Map,this._pinch=null,this.hide()}resolveUnderlayUrl(t){return t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:")?t:t.startsWith("//")?`${window.location.protocol}${t}`:t.startsWith("/")?`${window.location.origin}${t}`:t:""}isUnderlayReady(t){return!!(t&&t.naturalWidth>0&&t.complete)}loadUnderlay(t,e){if(!t)return;const i=this.resolveUnderlayUrl(t),n=i||t,r=this._underlayCache[n]||this._underlayCache[t];if(this.isUnderlayReady(r)){this._underlayCache[n]=r,this._underlayCache[t]=r;return}if(this._underlayLoading[n])return;this._underlayLoading[n]=!0;const o=r&&r.tagName==="IMG"?r:new Image;o.onload=()=>{this._underlayCache[n]=o,this._underlayCache[t]=o,delete this._underlayLoading[n],e==null||e()},o.onerror=()=>{if(delete this._underlayLoading[n],!o.dataset.retried){o.dataset.retried="1";const a=this.resolveUnderlayUrl(t);a&&a!==o.src&&(this._underlayLoading[n]=!0,o.src=a)}},this._underlayCache[n]=o,this._underlayCache[t]=o,o.src!==i?o.src=i:this.isUnderlayReady(o)&&(delete this._underlayLoading[n],e==null||e())}drawUnderlay(t,e,i,n){if(!(e!=null&&e.url))return;const r=this.resolveUnderlayUrl(e.url),o=this._underlayCache[r]||this._underlayCache[e.url];if(!this.isUnderlayReady(o))return;const a=e.bounds||[0,0,i,n],[l,c,h,f]=a,[d,m]=this.worldToScreen(l,c),[g,x]=this.worldToScreen(h,f),p=g-d,u=x-m;Math.abs(p)<1||Math.abs(u)<1||(t.save(),t.globalAlpha=e.opacity??.55,t.drawImage(o,Math.min(d,g),Math.min(m,x),Math.abs(p),Math.abs(u)),t.restore())}show(){this.visible=!0,this.canvas.classList.remove("hidden")}hide(){this.visible=!1,this.canvas.classList.add("hidden")}resize(t,e){const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.max(1,Math.floor(t*i)),this.canvas.height=Math.max(1,Math.floor(e*i)),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.ctx.setTransform(i,0,0,i,0,0),this.viewW=t,this.viewH=e}fitToBounds(t,e){this.bounds={w:t||20,d:e||15};const i=this.viewW||1,n=this.viewH||1,r=Math.max(i-this.padding*2,1),o=Math.max(n-this.padding*2,1);this.zoom=Math.min(r/this.bounds.w,o/this.bounds.d),(!Number.isFinite(this.zoom)||this.zoom<=0)&&(this.zoom=1),this.panX=this.padding+(r-this.bounds.w*this.zoom)/2,this.panY=this.padding+(o-this.bounds.d*this.zoom)/2}minZoom(){const t=this.viewW||1,e=this.viewH||1,i=Math.max(t-this.padding*2,1),n=Math.max(e-this.padding*2,1),r=Math.min(i/this.bounds.w,n/this.bounds.d);return Math.max(.25,r*.15)}worldToScreen(t,e){return[this.panX+t*this.zoom,this.panY+e*this.zoom]}screenToWorld(t,e){return[(t-this.panX)/this.zoom,(e-this.panY)/this.zoom]}maxZoom(){return 120}clampZoom(t){const e=Number(t);return!Number.isFinite(e)||e<=0?this.minZoom():Math.max(this.minZoom(),Math.min(this.maxZoom(),e))}zoomAt(t,e,i){const[n,r]=this.screenToWorld(t,e);this.zoom=this.clampZoom(this.zoom*i);const[o,a]=this.worldToScreen(n,r);this.panX+=t-o,this.panY+=e-a}zoomBy(t,e=null){const i=(e==null?void 0:e.sx)??(this.viewW||1)/2,n=(e==null?void 0:e.sy)??(this.viewH||1)/2;this.zoomAt(i,n,t)}onWheel(t){t.preventDefault();const e=t.deltaX||0,i=t.deltaY||0;if((t.shiftKey||Math.abs(e)>Math.abs(i))&&(e!==0||i!==0)){const c=t.deltaMode===1?16:t.deltaMode===2?40:1;return this.panX-=e*c,this.panY-=i*c,"pan"}const r=this.canvas.getBoundingClientRect(),o=t.clientX-r.left,a=t.clientY-r.top,l=i<0?1.08:.92;return this.zoomAt(o,a,l),"zoom"}pointerCount(){return this._pointers.size}updatePointer(t){this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY})}removePointer(t){this._pointers.delete(t.pointerId),this._pointers.size<2&&(this._pinch=null)}clearPointers(){this._pointers.clear(),this._pinch=null,this.isPanning=!1,this.panMoved=!1}pinchDistance(){if(this._pointers.size<2)return 0;const t=[...this._pointers.values()];return Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y)}pinchCenter(){const t=this.canvas.getBoundingClientRect(),e=[...this._pointers.values()],i=(e[0].x+e[1].x)/2,n=(e[0].y+e[1].y)/2;return{sx:i-t.left,sy:n-t.top,clientX:i,clientY:n}}onPointerDown(t,e={}){if(this.updatePointer(t),this._pointers.size>=2){this.isPanning=!1;const a=this.pinchDistance(),l=this.pinchCenter();this._pinch={startDist:Math.max(a,1),startZoom:this.zoom,lastCenter:l};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return!0}const i=e.allowFingerPan===!0,n=e.forcePan===!0,r=t.pointerType==="touch"||t.pointerType==="pen";if(n||t.button===1||t.button===2||t.altKey||t.button===0&&t.shiftKey||i&&r&&t.button===0){this.isPanning=!0,this.panMoved=!1,this.lastPan={x:t.clientX,y:t.clientY};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return!0}return!1}onPointerMove(t){if(!this._pointers.has(t.pointerId)&&!this.isPanning&&!this._pinch)return!1;if(this.updatePointer(t),this._pointers.size>=2){const n=this.pinchDistance(),r=this.pinchCenter();if(!this._pinch)return this._pinch={startDist:Math.max(n,1),startZoom:this.zoom,lastCenter:r},this.isPanning=!1,!0;const o=n/this._pinch.startDist,a=this.clampZoom(this._pinch.startZoom*o),[l,c]=this.screenToWorld(r.sx,r.sy);this.zoom=a;const[h,f]=this.worldToScreen(l,c);this.panX+=r.sx-h,this.panY+=r.sy-f;const d=this._pinch.lastCenter;return this.panX+=r.sx-d.sx,this.panY+=r.sy-d.sy,this._pinch.lastCenter=r,this.isPanning=!1,!0}if(!this.isPanning)return!1;const e=t.clientX-this.lastPan.x,i=t.clientY-this.lastPan.y;return(e!==0||i!==0)&&(this.panX+=e,this.panY+=i,Math.hypot(e,i)>2&&(this.panMoved=!0),this.lastPan={x:t.clientX,y:t.clientY}),!0}onPointerUp(t){const e=this.isPanning&&this.panMoved;return t?this.removePointer(t):this.clearPointers(),this._pointers.size===0&&(this.isPanning=!1),this._pointers.size<2&&(this._pinch=null),e}hitTest(t,e,i){var h,f,d;const n=this.ctx;for(const m of[...t.labels||[]].reverse())if(this.hitTestLabel(n,m,e,i))return{type:"label",id:m.id};const[r,o]=this.screenToWorld(e,i),a=.35/this.zoom;for(const m of[...t.components||[]].reverse()){const g=(m.width||1)/2,x=(m.depth||1)/2,[p,u]=m.position;if(r>=p-g&&r<=p+g&&o>=u-x&&o<=u+x)return{type:"component",id:m.id}}for(const m of[...t.smart_devices||[]].reverse()){const[g,x]=m.position;if(Math.hypot(r-g,o-x)<.7)return{type:"smart",id:m.id}}for(const m of t.doors||[]){const g=(h=t.walls)==null?void 0:h.find(u=>u.id===m.wall_id);if(!g)continue;const{x,z:p}=this.pointOnWall(g,m.position??.5);if(Math.hypot(r-x,o-p)<.5)return{type:"door",id:m.id}}for(const m of t.windows||[]){const g=(f=t.walls)==null?void 0:f.find(u=>u.id===m.wall_id);if(!g)continue;const{x,z:p}=this.pointOnWall(g,m.position??.5);if(Math.hypot(r-x,o-p)<.5)return{type:"window",id:m.id}}let l=null,c=a;for(const m of t.walls||[]){const g=S_(r,o,m.from[0],m.from[1],m.to[0],m.to[1]);g<c&&(c=g,l=m)}if(l)return{type:"wall",id:l.id};for(const m of t.rooms||[])if((d=m.polygon)!=null&&d.length&&this.pointInPolygon(r,o,m.polygon))return{type:"room",id:m.id};return null}hitTestWallHandle(t,e,i,n){var f;if((e==null?void 0:e.type)!=="wall")return null;const r=(f=t.walls)==null?void 0:f.find(d=>d.id===e.id);if(!r)return null;const o=10,[a,l]=this.worldToScreen(r.from[0],r.from[1]),[c,h]=this.worldToScreen(r.to[0],r.to[1]);return Math.hypot(i-a,n-l)<=o?{userData:{dragType:"wall-from",refId:r.id,endpoint:"from"}}:Math.hypot(i-c,n-h)<=o?{userData:{dragType:"wall-to",refId:r.id,endpoint:"to"}}:null}pointOnWall(t,e){const[i,n]=t.from,[r,o]=t.to;return{x:i+(r-i)*e,z:n+(o-n)*e}}pointInPolygon(t,e,i){let n=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){const[a,l]=i[r],[c,h]=i[o];l>e!=h>e&&t<(c-a)*(e-l)/(h-l+1e-4)+a&&(n=!n)}return n}drawWallSegment(t,e,i,n,r){const[o,a]=e.from,[l,c]=e.to,h=Math.hypot(l-o,c-a)||.001,f=(e.thickness||.15)*this.zoom/2,d=n===e.id,m=(i||[]).filter(x=>x.wall_id===e.id),g=[[0,1]];m.forEach(x=>{const p=(x.width||1)/(2*h),u=x.position??.5,b=Math.max(0,u-p),w=Math.min(1,u+p),M=[];g.forEach(([A,T])=>{w<=A||b>=T?M.push([A,T]):(b>A&&M.push([A,b]),w<T&&M.push([w,T]))}),g.length=0,g.push(...M)}),t.strokeStyle=d?"#22d3ee":"#cbd5e1",t.lineWidth=Math.max(3,f*2),t.lineCap="square",g.forEach(([x,p])=>{const[u,b]=this.worldToScreen(o+(l-o)*x,a+(c-a)*x),[w,M]=this.worldToScreen(o+(l-o)*p,a+(c-a)*p);t.beginPath(),t.moveTo(u,b),t.lineTo(w,M),t.stroke()}),m.forEach(x=>{const{x:p,z:u}=this.pointOnWall(e,x.position??.5),[b,w]=this.worldToScreen(p,u),M=r===x.id,A=x.sill!==void 0&&x.sill!==null;t.fillStyle=M?"#22d3ee":A?"#38bdf8":"#f59e0b",t.beginPath(),t.arc(b,w,4,0,Math.PI*2),t.fill()})}measureLabel(t,e){const i=e.size||14,n=String(e.text||"Text").split(`
`);t.font=`${e.bold?"700":"600"} ${i}px Inter, system-ui, sans-serif`;const r=i*1.25,o=n.map(a=>t.measureText(a).width);return{w:Math.max(...o,1),h:Math.max(n.length*r,r),lineHeight:r,lines:n,size:i}}hitTestLabel(t,e,i,n){const[r,o]=this.worldToScreen(e.position[0],e.position[1]),a=this.measureLabel(t,e),l=6;return i>=r-l&&i<=r+a.w+l&&n>=o-l&&n<=o+a.h+l}drawLabel(t,e,i){const[n,r]=this.worldToScreen(e.position[0],e.position[1]),o=this.measureLabel(t,e);t.save(),t.font=`${e.bold?"700":"600"} ${o.size}px Inter, system-ui, sans-serif`,t.textAlign="left",t.textBaseline="top",t.fillStyle=e.color||"#e2e8f0",i&&(t.strokeStyle="#22d3ee",t.lineWidth=1.5,t.strokeRect(n-4,r-4,o.w+8,o.h+8)),o.lines.forEach((a,l)=>{t.fillText(a,n,r+l*o.lineHeight)}),t.restore()}drawWallPreview(t,e,i){const[n,r]=this.worldToScreen(e[0],e[1]),[o,a]=this.worldToScreen(i[0],i[1]);t.strokeStyle="#22d3ee",t.lineWidth=2,t.setLineDash([6,4]),t.beginPath(),t.moveTo(n,r),t.lineTo(o,a),t.stroke(),t.setLineDash([]),[[e,"#22d3ee"],[i,"#67e8f9"]].forEach(([l,c])=>{const[h,f]=this.worldToScreen(l[0],l[1]);t.fillStyle=c,t.beginPath(),t.arc(h,f,5,0,Math.PI*2),t.fill()})}drawWallHandles(t,e){[[e.from,"#22d3ee"],[e.to,"#67e8f9"]].forEach(([i,n])=>{const[r,o]=this.worldToScreen(i[0],i[1]);t.fillStyle=n,t.strokeStyle="#0f172a",t.lineWidth=2,t.beginPath(),t.arc(r,o,6,0,Math.PI*2),t.fill(),t.stroke()})}drawPlacementGhost(t,e){if(!(e!=null&&e.position))return;const[i,n]=e.position;if(e.kind==="smart"){this.drawSmartMarker(t,{position:e.position,type:e.type,selected:!0,ghost:!0});return}const r=(e.width||1)/2,o=(e.depth||1)/2,[a,l]=this.worldToScreen(i-r,n-o),[c,h]=this.worldToScreen(i+r,n+o);t.fillStyle="rgba(34,211,238,0.2)",t.strokeStyle="#22d3ee",t.lineWidth=1.5,t.setLineDash([4,3]),t.fillRect(a,l,c-a,h-l),t.strokeRect(a,l,c-a,h-l),t.setLineDash([])}drawSmartMarker(t,{position:e,type:i,selected:n=!1,ghost:r=!1,on:o=!0}){const[a,l]=e,[c,h]=this.worldToScreen(a,l),f=Qt[i]||{},d=f.icon||"●",m=f.label||i||"Device",g=11;t.save(),t.globalAlpha=r?.75:1,t.beginPath(),t.arc(c,h-3,g,0,Math.PI*2),t.fillStyle=n||r?"rgba(14, 165, 233, 0.92)":o!==!1?"rgba(15, 23, 42, 0.88)":"rgba(51, 65, 85, 0.9)",t.fill(),t.lineWidth=n?2:1.25,t.strokeStyle=n||r?"#67e8f9":"#e2e8f0",t.stroke(),t.font='13px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#ffffff",t.fillText(d,c,h-3);const x=4,p=2;t.font="600 10px Inter, system-ui, sans-serif",t.textBaseline="top";const b=t.measureText(m).width+x*2,w=14,M=c-b/2,A=h+g+1;t.fillStyle=n||r?"rgba(8, 145, 178, 0.92)":"rgba(15, 23, 42, 0.86)",t.beginPath();const T=4;t.moveTo(M+T,A),t.arcTo(M+b,A,M+b,A+w,T),t.arcTo(M+b,A+w,M,A+w,T),t.arcTo(M,A+w,M,A,T),t.arcTo(M,A,M+b,A,T),t.closePath(),t.fill(),t.fillStyle="#f8fafc",t.fillText(m,c,A+p),t.restore()}render({floor:t,projectWidth:e,projectDepth:i,selected:n,floorLabel:r,previewWall:o,placementGhost:a,onUnderlayReady:l}){var g,x,p;if(!this.visible)return;const c=this.ctx,h=this.viewW||1,f=this.viewH||1;c.clearRect(0,0,h,f),c.fillStyle="#0a1018",c.fillRect(0,0,h,f);const d=!!((g=t.underlay)!=null&&g.url&&t.underlay.visible!==!1&&(t.underlay.opacity??0)>.01);if(d&&(this.loadUnderlay(t.underlay.url,l),this.drawUnderlay(c,t.underlay,e,i)),this.drawGrid(c,e,i),((x=t.rooms)!=null&&x.length?t.rooms:d?[]:[{polygon:[[0,0],[e,0],[e,i],[0,i]],color:1976635,name:"Floor"}]).forEach(u=>{const b=u.polygon||[];if(!(b.length<3)&&(c.beginPath(),b.forEach(([w,M],A)=>{const[T,R]=this.worldToScreen(w,M);A===0?c.moveTo(T,R):c.lineTo(T,R)}),c.closePath(),c.fillStyle=M_(u.color??1976635),c.globalAlpha=d?(n==null?void 0:n.type)==="room"&&n.id===u.id?.28:.12:(n==null?void 0:n.type)==="room"&&n.id===u.id?.95:.75,c.fill(),c.globalAlpha=1,c.strokeStyle="rgba(255,255,255,0.08)",c.lineWidth=1,c.stroke(),u.name)){const w=b.reduce((R,_)=>R+_[0],0)/b.length,M=b.reduce((R,_)=>R+_[1],0)/b.length,[A,T]=this.worldToScreen(w,M);c.fillStyle="rgba(255,255,255,0.85)",c.font="600 11px Inter, system-ui, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(u.name,A,T)}}),(t.walls||[]).forEach(u=>{const b=[...t.doors||[],...t.windows||[]],w=(n==null?void 0:n.type)==="wall"?n.id:null;this.drawWallSegment(c,u,b,w,n==null?void 0:n.id)}),(t.components||[]).forEach(u=>{const[b,w]=u.position,M=(u.width||1)/2,A=(u.depth||1)/2,[T,R]=this.worldToScreen(b-M,w-A),[_,y]=this.worldToScreen(b+M,w+A),E=(n==null?void 0:n.type)==="component"&&n.id===u.id;c.fillStyle=E?"rgba(34,211,238,0.35)":"rgba(148,163,184,0.45)",c.strokeStyle=E?"#22d3ee":"#94a3b8",c.lineWidth=E?2:1,c.fillRect(T,R,_-T,y-R),c.strokeRect(T,R,_-T,y-R)}),(t.smart_devices||[]).forEach(u=>{const b=(n==null?void 0:n.type)==="smart"&&n.id===u.id;this.drawSmartMarker(c,{position:u.position,type:u.type,selected:b,on:u.on!==!1})}),(n==null?void 0:n.type)==="wall"){const u=(p=t.walls)==null?void 0:p.find(b=>b.id===n.id);u&&this.drawWallHandles(c,u)}o!=null&&o.from&&(o!=null&&o.to)&&this.drawWallPreview(c,o.from,o.to),a&&this.drawPlacementGhost(c,a),(t.labels||[]).forEach(u=>{const b=(n==null?void 0:n.type)==="label"&&n.id===u.id;this.drawLabel(c,u,b)}),c.fillStyle="rgba(255,255,255,0.5)",c.font="500 10px Inter, system-ui, sans-serif",c.textAlign="left",c.fillText(r||"Floor plan",12,f-12),c.textAlign="right",c.fillText(`${e}×${i} m · drag pan · wheel zoom · Shift+wheel scroll`,h-12,f-12)}drawGrid(t,e,i){t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;for(let c=0;c<=e;c+=1){const[h,f]=this.worldToScreen(c,0),[,d]=this.worldToScreen(c,i);t.beginPath(),t.moveTo(h,f),t.lineTo(h,d),t.stroke()}for(let c=0;c<=i;c+=1){const[h,f]=this.worldToScreen(0,c),[d]=this.worldToScreen(e,c);t.beginPath(),t.moveTo(h,f),t.lineTo(d,f),t.stroke()}t.strokeStyle="rgba(34,211,238,0.25)",t.lineWidth=2;const[r,o]=this.worldToScreen(0,0),[a,l]=this.worldToScreen(e,i);t.strokeRect(r,o,a-r,l-o)}}const Da=.5,Ri=2.8,zn=.15,E_=.15;function Le(s){return`${s}-${crypto.randomUUID().slice(0,8)}`}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function Ia(s,t){return t?Math.round(s/Da)*Da:Math.round(s*100)/100}function Fc(s,t,e){return[Ia(s,e),Ia(t,e)]}function w_(s){var e,i;let t=s;for(;t;){if((e=t.userData)!=null&&e.type&&((i=t.userData)!=null&&i.id))return t;t=t.parent}return null}function Na(s){return Math.hypot(s.to[0]-s.from[0],s.to[1]-s.from[1])}function Uo(s,t,e){const[i,n]=s.from,[r,o]=s.to,a=r-i,l=o-n,c=a*a+l*l;return c<.001?.5:Ve(((t-i)*a+(e-n)*l)/c,0,1)}function pr(s,t){const e=Na(s)||.1,i=(t||1)/2;return[i/e,1-i/e]}class T_{constructor(t){this.root=t,this.canEdit=t.dataset.canEdit==="true",this.projectWidth=parseFloat(t.dataset.width)||20,this.projectDepth=parseFloat(t.dataset.depth)||15,this.mapData=JSON.parse(t.dataset.mapData||"{}"),this.viewerOnly=t.dataset.viewerOnly==="true",this.initialViewMode=t.dataset.initialViewMode||(this.viewerOnly,"plan2d"),this.liveUrl=t.dataset.liveUrl||"",this.liveRevision=t.dataset.mapRevision||"",this.liveSyncTimer=null;try{u_(JSON.parse(t.dataset.smartCatalog||"[]"))}catch{}if(this.container=t.querySelector("#map-canvas"),this.longPressTimer=null,this.longPressMoved=!1,this.deviceDetailsEl=document.querySelector("#device-details-popover"),this.toolButtons=t.querySelectorAll("[data-tool]"),this.kitsCatalogEl=t.querySelector("#kits-catalog"),this.itemsCatalogEl=t.querySelector("#items-catalog"),this.doorsCatalogEl=t.querySelector("#doors-catalog"),this.windowsCatalogEl=t.querySelector("#windows-catalog"),this.roomsCatalogEl=t.querySelector("#rooms-catalog"),this.componentButtons=[],this.smartButtons=[],this.doorStyleButtons=[],this.windowStyleButtons=[],this.roomPaintButtons=[],this.kitButtons=[],this.catalogTabs=t.querySelectorAll("[data-catalog-tab]"),this.catalogPanels=t.querySelectorAll("[data-catalog-panel]"),this.statusEl=t.querySelector("#map-status"),this.contextEl=t.querySelector("#studio-context"),this.placingBadgeEl=t.querySelector("#studio-placing-badge"),this.assetScrollEl=t.querySelector(".studio-asset-content"),this.outlinerSearchEl=t.querySelector("#outliner-search"),this.outlinerCountEl=t.querySelector("#outliner-count"),this.outlinerFilter="",this.deviceSearchEl=t.querySelector("#device-catalog-search"),this.deviceCatalogEmptyEl=t.querySelector("#device-catalog-empty"),this.deviceFilter="",this.propsEl=t.querySelector("#map-properties"),this.listEl=t.querySelector("#map-elements-list"),this.saveBtn=document.querySelector("#save-map-btn"),this.clearFloorBtn=document.querySelector("#clear-floor-btn"),this.snapToggle=t.querySelector("#snap-toggle"),this.viewModeButtons=t.querySelectorAll("[data-view-mode]"),this.studioPanels=t.querySelectorAll("[data-studio-panel]"),this.simOverlay=t.querySelector("#sim-overlay"),this.form=t.querySelector("#map-form"),this.input=t.querySelector("#map_data_input"),this.widthInput=t.querySelector("#map_width_input"),this.depthInput=t.querySelector("#map_depth_input"),this.importUrl=t.dataset.underlayUrl||"",this.importBtn=document.querySelector("#import-plan-btn"),this.importModal=document.querySelector("#import-plan-modal"),this.importForm=document.querySelector("#import-plan-form"),this.importError=document.querySelector("#import-plan-error"),this.importSubmit=document.querySelector("#import-plan-submit"),this.importCloseButtons=document.querySelectorAll("[data-import-close]"),this.importImageInput=document.querySelector("#import-plan-image"),this.importPasteZone=document.querySelector("#import-paste-zone"),this.importPreview=document.querySelector("#import-image-preview"),this.importPreviewImg=document.querySelector("#import-image-preview-img"),this.importPreviewName=document.querySelector("#import-image-preview-name"),this.importFile=null,this.floorSwitcherEl=t.querySelector("#floor-switcher"),this.quotationBtn=document.querySelector("#quotation-btn"),this.quotationModal=document.querySelector("#quotation-modal"),this.quotationLinesEl=document.querySelector("#quotation-lines"),this.quotationTotalsEl=document.querySelector("#quotation-totals"),this.quotationClientInput=document.querySelector("#quotation-client"),this.quotationPhoneInput=document.querySelector("#quotation-phone"),this.quotationLocationInput=document.querySelector("#quotation-location"),this.quotationNotesInput=document.querySelector("#quotation-notes"),this.quotationProgrammingInput=document.querySelector("#quotation-programming"),this.quotationInstallationInput=document.querySelector("#quotation-installation"),this.quotationDiscountInput=document.querySelector("#quotation-discount"),this.quotationTvaInput=document.querySelector("#quotation-tva"),this.quotationSaveDefaultsBtn=document.querySelector("#quotation-save-defaults-btn"),this.quotationPrintBtn=document.querySelector("#quotation-print-btn"),this.quotationDefaultsKey="smart_home_quotation_service_defaults",this.benefitsBtn=document.querySelector("#benefits-btn"),this.benefitsModal=document.querySelector("#benefits-modal"),this.benefitsStatsEl=document.querySelector("#benefits-stats"),this.benefitsLinesEl=document.querySelector("#benefits-lines"),this.benefitsExpensesEl=document.querySelector("#benefits-expenses"),this.benefitsTotalsEl=document.querySelector("#benefits-totals"),this.benefitsAddExpenseBtn=document.querySelector("#benefits-add-expense-btn"),this.activeFloorIndex=Number(this.mapData.active_floor)||0,this.viewMode=this.initialViewMode,this.eyeHeight=1.65,this.walkKeys={w:!1,a:!1,s:!1,d:!1,shift:!1},this.look360={yaw:0,pitch:0,dragging:!1,lastX:0,lastY:0},this.walkLookDrag=!1,this.doorAnimStates=new Map,this.nearDoorId=null,this.currentRoomId=null,this.nightMode=this.isNightTime(),this.smartCategoryFilter="all",this.kitCategoryFilter="all",this.furnitureCategoryFilter="all",this.haCategoryEl=t.querySelector("#ha-category-filter"),this.haDeviceGridEl=t.querySelector("#ha-device-grid"),this.nightModeBtn=t.querySelector("#night-mode-btn"),this.walkVelocity=new D,this.tool="select",this.snapEnabled=!0,this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.selectedDoorStyle="swing_modern",this.selectedWindowStyle="standard",this.selected=null,this.wallStart=null,this.wallPreviewEnd=null,this.cursorWorld=null,this.previewLine=null,this.startMarker=null,this.previewComponent=null,this.previewKit=null,this.drag=null,this.labelEditor=null,this.meshes={walls:new Map,doors:new Map,windows:new Map,components:new Map,smart:new Map},this.decorMeshes=[],this.normalizeMapData(),this.initScene(),this.bindEvents(),this.viewerOnly){this.updateNightModeUI(),this.renderFloorSwitcher(),this.rebuildScene(),this.setViewMode("plan2d"),this.startLiveSync(),requestAnimationFrame(()=>{this.onResize(),this.renderPlan2d(),setTimeout(()=>this.renderPlan2d(),250),setTimeout(()=>this.renderPlan2d(),1e3)}),this.animate();return}this.setTool("select"),this.setCatalogTab("smart"),this.renderAllCatalogs(),this.updateStyleButtons(),this.updateNightModeUI(),this.renderFloorSwitcher(),this.viewMode!=="plan2d"&&this.rebuildScene(),this.renderElementsList(),this.updateStudioContext(),this.setViewMode(this.initialViewMode),requestAnimationFrame(()=>this.onResize()),this.animate()}normalizeMapData(){(!Array.isArray(this.mapData.floors)||!this.mapData.floors.length)&&(this.mapData.floors=[{id:"floor-1",name:"Ground Floor",level:0,height:Ri,rooms:[],walls:[],doors:[],windows:[],components:[],smart_devices:[],labels:[]}]),this.activeFloorIndex=Ve(Number(this.mapData.active_floor)||0,0,this.mapData.floors.length-1),this.mapData.active_floor=this.activeFloorIndex,this.mapData.floors.forEach((t,e)=>{var i,n,r;t.id??(t.id=`floor-${e+1}`),t.name??(t.name=cr(t.level??e)),t.level??(t.level=e),t.height??(t.height=Ri),t.walls??(t.walls=[]),t.doors??(t.doors=[]),t.windows??(t.windows=[]),t.components??(t.components=[]),t.smart_devices??(t.smart_devices=[]),t.labels??(t.labels=[]),t.rooms??(t.rooms=[]),(i=t.underlay)!=null&&i.url&&(t.underlay.url=this.normalizeUnderlayUrl(t.underlay.url),(n=t.underlay).visible??(n.visible=!0),(r=t.underlay).opacity??(r.opacity=.92),(!Array.isArray(t.underlay.bounds)||t.underlay.bounds.length<4)&&(t.underlay.bounds=[0,0,this.projectWidth,this.projectDepth])),t.walls.forEach(o=>{o.thickness??(o.thickness=zn),o.height??(o.height=t.height||Ri)}),t.doors.forEach(o=>{o.type==="swing"&&(o.style="swing_modern"),o.type==="sliding"&&(o.style="sliding_glass"),o.type==="double"&&(o.style="double_french"),o.style??(o.style=o.type??"swing_modern")}),t.windows.forEach(o=>{o.style??(o.style=o.type??"standard")}),t.rooms.forEach(o=>{var a;o.preset&&!o.color&&(o.color=(a=Ci[o.preset])==null?void 0:a.color)})})}normalizeUnderlayUrl(t){const e=String(t||"").trim();if(!e)return"";if(e.startsWith("data:")||e.startsWith("blob:"))return e;try{if(e.startsWith("http://")||e.startsWith("https://")||e.startsWith("//")){const i=e.startsWith("//")?`${window.location.protocol}${e}`:e,n=new URL(i,window.location.origin);return`${n.pathname}${n.search}`}}catch{}return e.startsWith("/")?e:`/${e.replace(/^\/+/,"")}`}getFloor(){var e;(e=this.mapData.floors)!=null&&e.length||(this.mapData.floors=[{id:"floor-1",name:"Ground Floor",level:0,height:Ri,rooms:[],walls:[],doors:[],windows:[],components:[],smart_devices:[],labels:[]}],this.activeFloorIndex=0),(this.activeFloorIndex<0||this.activeFloorIndex>=this.mapData.floors.length)&&(this.activeFloorIndex=0);const t=this.mapData.floors[this.activeFloorIndex];return t.walls??(t.walls=[]),t.doors??(t.doors=[]),t.windows??(t.windows=[]),t.components??(t.components=[]),t.smart_devices??(t.smart_devices=[]),t.labels??(t.labels=[]),t.rooms??(t.rooms=[]),t.height??(t.height=Ri),t}setActiveFloor(t){var n;if(!((n=this.mapData.floors)!=null&&n.length))return;const e=Ve(t,0,this.mapData.floors.length-1);if(e===this.activeFloorIndex)return;this.activeFloorIndex=e,this.mapData.active_floor=e,this.selected=null,this.wallStart=null,this.wallPreviewEnd=null,this.doorAnimStates.clear(),this.nearDoorId=null,this.currentRoomId=null,this.renderFloorSwitcher(),this.viewMode==="plan2d"?this.renderPlan2d():this.rebuildScene(),this.viewerOnly||(this.renderElementsList(),this.renderProperties());const i=this.getFloor();this.viewerOnly&&this.viewMode==="plan2d"&&this.renderPlan2d(),this.setStatus(this.viewerOnly?`Viewing ${i.name||`Floor ${e+1}`}`:`Editing ${i.name||`Floor ${e+1}`}`)}renderFloorSwitcher(){if(!this.floorSwitcherEl)return;const e=(this.mapData.floors||[]).map((r,o)=>({floor:r,index:o})).sort((r,o)=>(r.floor.level??0)-(o.floor.level??0));this.floorSwitcherEl.classList.remove("hidden"),this.floorSwitcherEl.classList.add("flex");const i=e.map(({floor:r,index:o})=>{const a=o===this.activeFloorIndex,l=Co(r),c=r.name||cr(r.level??0);return`<button type="button" data-floor-index="${o}" class="${a?"view-mode-active":"view-mode-btn"}" title="${c}">${l}</button>`}).join(""),n=this.canEdit&&!this.viewerOnly?'<button type="button" data-floor-add class="view-mode-btn !px-2" title="Add floor layer">+</button>':"";this.floorSwitcherEl.innerHTML=`<div class="studio-segment studio-floor-switcher">${i}${n}</div>`}addFloorLayer(){if(!this.canEdit)return;const t=this.mapData.floors,e=h_(t);t.push({id:Le("floor"),name:cr(e),level:e,height:Ri,rooms:[],walls:[],doors:[],windows:[],components:[],smart_devices:[],labels:[]}),this.setActiveFloor(t.length-1),this.setStatus(`Added ${cr(e)} — switch floors in the top bar`)}initScene(){var o;this.scene=new Fd,this.scene.background=new Ot(659226),this.scene.fog=new Gn(659226,50,140);const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.camera=new Ye(50,t/e,.1,500);const i=this.mapData.camera||{};this.camera.position.set(...i.position||[this.projectWidth/2,12,this.projectDepth+12]),this.renderer=new Gg({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new Wg(this.camera,this.renderer.domElement),this.controls.target.set(...i.target||[this.projectWidth/2,0,this.projectDepth/2]),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.05,this.scene.add(this.ambientLight=new zu(16774635,.45)),this.sun=new ku(16775408,1.1),this.sun.position.set(15,25,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=80,this.scene.add(this.sun),this.hemiLight=new Fu(14412542,4472892,.35),this.scene.add(this.hemiLight);const n=Math.max(this.projectWidth,this.projectDepth)*1.5;this.grid=new Xu(n,n*2,1722970,1384496),this.scene.add(this.grid),this.groundPlane=new Jt(new jn(n*2,n*2),new Vn({visible:!1})),this.groundPlane.rotation.x=-Math.PI/2,this.scene.add(this.groundPlane),this.handleGroup=new Ze,this.scene.add(this.handleGroup),this.raycaster=new Vu,this.pointer=new ot,this.materials={floor:new oi({color:9139029,roughness:.85,metalness:.05}),ceiling:new oi({color:16317180,roughness:.95,side:ti}),wall:new oi({color:15262943,roughness:.82}),wallSelected:new oi({color:6809849,roughness:.5,emissive:561586,emissiveIntensity:.35}),componentSelected:new oi({color:10980346,emissive:8141549,emissiveIntensity:.3}),preview:new Rr({color:2282478}),marker:new Vn({color:2282478}),previewGhost:new oi({color:2282478,transparent:!0,opacity:.35}),handle:new Vn({color:2282478})},this.pointerLock=new o_(this.camera,this.renderer.domElement),this.clock=new Wu;const r=this.renderer.domElement;r.tabIndex=0,r.setAttribute("role","application"),r.setAttribute("aria-label","3D map viewport"),(o=this.root.querySelector("#map-loading"))==null||o.remove(),this.plan2d=new b_(this.container),this.bindPlan2dEvents()}isPlan2dMovableHit(t,e){return t?!!(["component","smart","label","door","window"].includes(t.type)||this.tool==="select"&&this.getHandleAt(e)):!1}applyPlan2dClickSelection(t){this.tool!=="select"||!this.canEdit||(t?t.type==="door"||t.type==="window"?this.selectById(t.type,t.id):t.type==="component"||t.type==="smart"?this.selectById(t.type,t.id):t.type==="label"?this.selectById("label",t.id):t.type==="room"?this.selectById("room",t.id):t.type==="wall"?this.selectById("wall",t.id):this.selectObject(null):this.selectObject(null),this.renderElementsList(),this.renderPlan2d())}bindPlan2dEvents(){if(!this.plan2d)return;const t=this.plan2d.canvas;if(t.style.touchAction="none",this._plan2dClickCandidate=null,t.addEventListener("wheel",e=>{this.viewMode==="plan2d"&&(this.plan2d.onWheel(e),this.renderPlan2d())},{passive:!1}),t.addEventListener("pointerdown",e=>{if(this.viewMode!=="plan2d")return;this.hideDeviceDetails();const{sx:i,sy:n}=this.getPlan2dScreen(e),r=this.plan2d.hitTest(this.getFloor(),i,n),o=this.isPlan2dMovableHit(r,e),a=e.pointerType==="touch"||e.pointerType==="pen",l=this.plan2d.zoom>this.plan2d.minZoom()*1.35,c=this.viewerOnly||!this.canEdit||this.tool==="select",h=!o&&e.button===0&&(c||a||l),f=h||c||l;if(this.plan2d.pointerCount()===0&&this.startSmartLongPress(e),this.plan2d.onPointerDown(e,{allowFingerPan:f,forcePan:h})){this.clearSmartLongPress(),this._plan2dClickCandidate=h?{hit:r,x:e.clientX,y:e.clientY,place:!c}:null;return}this._plan2dClickCandidate=null,this.onPointerDown(e)}),t.addEventListener("pointermove",e=>{var n,r;if(this.viewMode!=="plan2d")return;if(this.longPressTimer){const o=e.clientX-(((n=this.longPressOrigin)==null?void 0:n.x)||0),a=e.clientY-(((r=this.longPressOrigin)==null?void 0:r.y)||0);Math.hypot(o,a)>8&&(this.longPressMoved=!0,this.clearSmartLongPress())}if(this.plan2d.onPointerMove(e)||this.plan2d.isPanning||this.plan2d._pinch){this.plan2d.panMoved&&(this._plan2dClickCandidate=null),this.clearSmartLongPress(),this.renderPlan2d();return}this.onPointerMove(e)}),t.addEventListener("pointerup",e=>{var o;const i=this.longPressFired,n=this._plan2dClickCandidate;this._plan2dClickCandidate=null,this.clearSmartLongPress(),!((o=this.plan2d)==null?void 0:o.onPointerUp(e))&&n&&(n.place?this.onPointerDown(e):this.tool==="select"&&this.applyPlan2dClickSelection(n.hit)),i||this.hideDeviceDetails(),this.renderPlan2d()}),t.addEventListener("pointercancel",e=>{var i;this._plan2dClickCandidate=null,this.clearSmartLongPress(),(i=this.plan2d)==null||i.onPointerUp(e),this.hideDeviceDetails(),this.renderPlan2d()}),t.addEventListener("dblclick",e=>{if(this.viewMode!=="plan2d"||!this.canEdit)return;const{sx:i,sy:n}=this.getPlan2dScreen(e),r=this.plan2d.hitTest(this.getFloor(),i,n);if((r==null?void 0:r.type)==="label"){e.preventDefault();const o=this.getFloor().labels.find(a=>a.id===r.id);o&&this.openLabelEditor({labelId:o.id,worldPos:o.position,text:o.text})}}),t.addEventListener("contextmenu",e=>{e.preventDefault(),this.viewMode==="plan2d"&&this.showSmartDetailsAtEvent(e)}),!this._deviceDetailsDismissBound){this._deviceDetailsDismissBound=!0;const e=i=>{this.isDeviceDetailsOpen()&&(this.longPressFired&&this.longPressTimer==null&&i.type==="pointerup"||t.contains(i.target)||this.hideDeviceDetails())};document.addEventListener("pointerdown",e,!0),document.addEventListener("click",e,!0)}this.bindPlan2dZoomControls()}bindPlan2dZoomControls(){const t=()=>{this.viewMode!=="plan2d"||!this.plan2d||(this.plan2d.zoomBy(1.2),this.renderPlan2d(),this.setStatus("Zoomed in"))},e=()=>{this.viewMode!=="plan2d"||!this.plan2d||(this.plan2d.zoomBy(.8333333333333334),this.renderPlan2d(),this.setStatus("Zoomed out"))},i=()=>{this.viewMode!=="plan2d"||!this.plan2d||(this.ensurePlan2dLayout(),this.renderPlan2d(),this.setStatus("Fit to view"))};this.root.querySelectorAll('[data-plan-zoom="in"]').forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),t()})}),this.root.querySelectorAll('[data-plan-zoom="out"]').forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),e()})}),this.root.querySelectorAll('[data-plan-zoom="fit"]').forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),i()})})}startSmartLongPress(t){this.clearSmartLongPress(),this.longPressMoved=!1,this.longPressFired=!1,this.longPressOrigin={x:t.clientX,y:t.clientY};const{sx:e,sy:i}=this.getPlan2dScreen(t),n=this.plan2d.hitTest(this.getFloor(),e,i);(n==null?void 0:n.type)==="smart"&&(this.longPressTimer=window.setTimeout(()=>{this.longPressMoved||(this.longPressFired=!0,this.showSmartDetails(n.id,t.clientX,t.clientY))},480))}clearSmartLongPress(){this.longPressTimer&&(window.clearTimeout(this.longPressTimer),this.longPressTimer=null)}isDeviceDetailsOpen(){const t=this.ensureDeviceDetailsEl();return!!(t!=null&&t.classList.contains("is-open"))}ensureDeviceDetailsEl(){return(!this.deviceDetailsEl||!document.body.contains(this.deviceDetailsEl))&&(this.deviceDetailsEl=document.querySelector("#device-details-popover")),this.deviceDetailsEl}showSmartDetailsAtEvent(t){const{sx:e,sy:i}=this.getPlan2dScreen(t),n=this.plan2d.hitTest(this.getFloor(),e,i);if((n==null?void 0:n.type)!=="smart"){this.hideDeviceDetails();return}this.longPressFired=!0,this.showSmartDetails(n.id,t.clientX,t.clientY)}showSmartDetails(t,e,i){const n=this.ensureDeviceDetailsEl();if(!n)return;const o=this.getFloor().smart_devices.find(g=>g.id===t);if(!o)return;const a=Qt[o.type]||{},l=Number(a.price),c=Number.isFinite(l)?l:dr(o.type,o);n.innerHTML=`
            <div class="device-details-icon">${a.icon||"●"}</div>
            <div class="device-details-body">
                <p class="device-details-name">${a.label||o.type}</p>
                <p class="device-details-price">${de(c)}</p>
            </div>
        `,n.classList.add("is-open"),n.classList.remove("hidden"),n.style.display="flex";const h=12,f=n.getBoundingClientRect();let d=e+12,m=i+12;d+f.width>window.innerWidth-h&&(d=e-f.width-12),m+f.height>window.innerHeight-h&&(m=i-f.height-12),n.style.left=`${Math.max(h,d)}px`,n.style.top=`${Math.max(h,m)}px`,this.selectById("smart",t),this.setStatus(`${a.label||o.type} · ${hr(c)}`)}hideDeviceDetails(){const t=this.ensureDeviceDetailsEl();t&&(t.classList.remove("is-open"),t.classList.add("hidden"),t.style.display="none")}isDesignMode(){return this.viewMode==="studio"||this.viewMode==="plan2d"}getPlan2dScreen(t){const e=this.plan2d.canvas.getBoundingClientRect();return{sx:t.clientX-e.left,sy:t.clientY-e.top}}getWorldPoint(t){if(this.viewMode==="plan2d"){const{sx:e,sy:i}=this.getPlan2dScreen(t),[n,r]=this.plan2d.screenToWorld(e,i);return Fc(n,r,this.snapEnabled)}return this.getGroundPoint(t)}getHitAtEvent(t){if(this.viewMode==="plan2d"){const{sx:e,sy:i}=this.getPlan2dScreen(t),n=this.plan2d.hitTest(this.getFloor(),e,i);return n?{userData:{type:n.type,id:n.id}}:null}return this.getIntersectedObject(t)}getPlacementGhost(){if(!this.cursorWorld||this.viewMode!=="plan2d")return null;if(this.tool==="furniture"&&this.placingComponent){const t=Ge[this.placingComponent];return t?{position:this.cursorWorld,width:t.w,depth:t.d}:null}if(this.tool==="kit"&&this.placingKit){const t=kn[this.placingKit];return t?{position:this.cursorWorld,width:t.footprint.w,depth:t.footprint.d}:null}return this.tool==="smart"&&this.placingSmart?{kind:"smart",type:this.placingSmart,position:this.cursorWorld,width:.6,depth:.6}:null}ensurePlan2dLayout(){if(!this.plan2d||!this.container)return;const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.plan2d.resize(t,e),this.plan2d.fitToBounds(this.projectWidth,this.projectDepth)}renderPlan2d(){if(!this.plan2d||this.viewMode!=="plan2d")return;(!this.plan2d.viewW||!this.plan2d.viewH)&&this.ensurePlan2dLayout();const t=this.getFloor(),e=this.wallStart?{from:this.wallStart,to:this.wallPreviewEnd||this.wallStart}:null;this.plan2d.render({floor:t,projectWidth:this.projectWidth,projectDepth:this.projectDepth,selected:this.selected,floorLabel:t.name||Co(t),previewWall:e,placementGhost:this.getPlacementGhost(),onUnderlayReady:()=>{this.viewMode==="plan2d"&&this.renderPlan2d()}})}bindEvents(){var n,r,o,a,l,c,h,f,d,m,g,x,p,u,b,w,M,A,T,R,_,y,E,C,L,k,W,U,q,H,j,et,ht,gt,Mt,$t,he,Yt,K,at,it,Ut;this.toolButtons.forEach(X=>{X.addEventListener("click",()=>{this.endDrag(),this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.updateComponentButtons(),this.updateSmartButtons(),this.updateKitButtons(),this.removePreviewComponent(),this.removePreviewSmart(),this.removePreviewKit();const nt=X.dataset.tool;this.setTool(nt)})}),this.catalogTabs.forEach(X=>{X.addEventListener("click",()=>this.setCatalogTab(X.dataset.catalogTab))}),this.viewModeButtons.forEach(X=>{X.addEventListener("click",()=>this.setViewMode(X.dataset.viewMode))}),(n=this.snapToggle)==null||n.addEventListener("change",X=>{this.snapEnabled=X.target.checked,this.setStatus(this.snapEnabled?"Grid snap ON (0.5m)":"Grid snap OFF — free placement")});const t=this.renderer.domElement;t.addEventListener("pointerdown",X=>this.onPointerDown(X)),t.addEventListener("pointermove",X=>this.onPointerMove(X)),window.addEventListener("pointerup",()=>this.endDrag()),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("keydown",X=>this.onKeyDown(X)),window.addEventListener("keyup",X=>this.onKeyUp(X)),this.renderer.domElement.addEventListener("mouseup",()=>{this.look360.dragging=!1,this.walkLookDrag=!1}),this.renderer.domElement.addEventListener("mouseleave",()=>{this.look360.dragging=!1,this.walkLookDrag=!1}),this.pointerLock.addEventListener("lock",()=>{this.viewMode==="view360"&&(this.look360.yaw=this.camera.rotation.y,this.look360.pitch=this.camera.rotation.x,this.setStatus("360° — WASD move · mouse look · E door · Shift run · Esc exit"))}),this.pointerLock.addEventListener("unlock",()=>{this.viewMode==="view360"&&(this.look360.yaw=this.camera.rotation.y,this.look360.pitch=this.camera.rotation.x,this.setStatus("360° — click view · WASD move · drag look · E door · Esc exit"))}),(r=this.nightModeBtn)==null||r.addEventListener("click",()=>{this.nightMode=!this.nightMode,this.applySceneLighting(this.viewMode!=="studio"),this.updateNightModeUI(),this.nightMode&&this.currentRoomId&&this.setRoomLights(this.currentRoomId,!0)}),(o=this.saveBtn)==null||o.addEventListener("click",()=>this.save()),(a=this.clearFloorBtn)==null||a.addEventListener("click",()=>this.clearCurrentFloor()),(l=this.importBtn)==null||l.addEventListener("click",()=>this.openImportModal()),this.importCloseButtons.forEach(X=>{X.addEventListener("click",()=>this.closeImportModal())}),(c=this.importModal)==null||c.addEventListener("click",X=>{X.target===this.importModal&&this.closeImportModal()}),(h=this.importForm)==null||h.addEventListener("submit",X=>{X.preventDefault(),this.submitFloorImage()}),(f=this.importImageInput)==null||f.addEventListener("change",()=>{var nt;const X=((nt=this.importImageInput.files)==null?void 0:nt[0])||null;this.setImportFile(X)}),(d=this.importPasteZone)==null||d.addEventListener("click",X=>{var nt;X.target.closest("input, button, a")||(nt=this.importImageInput)==null||nt.click()}),(m=this.importPasteZone)==null||m.addEventListener("dragover",X=>{X.preventDefault(),this.importPasteZone.classList.add("border-brand-500/60","bg-brand-500/10")}),(g=this.importPasteZone)==null||g.addEventListener("dragleave",()=>{this.importPasteZone.classList.remove("border-brand-500/60","bg-brand-500/10")}),(x=this.importPasteZone)==null||x.addEventListener("drop",X=>{var Dt;X.preventDefault(),this.importPasteZone.classList.remove("border-brand-500/60","bg-brand-500/10");const nt=Array.from(((Dt=X.dataTransfer)==null?void 0:Dt.files)||[]).find(It=>this.isImportableImage(It));nt&&this.setImportFile(nt)}),document.addEventListener("paste",X=>this.onImportPaste(X));const e=document.querySelector("#share-viewer-btn"),i=document.querySelector("#share-viewer-modal");e==null||e.addEventListener("click",()=>i==null?void 0:i.classList.remove("hidden")),document.querySelectorAll("[data-share-close]").forEach(X=>{X.addEventListener("click",()=>i==null?void 0:i.classList.add("hidden"))}),i==null||i.addEventListener("click",X=>{X.target===i&&i.classList.add("hidden")}),(p=this.quotationBtn)==null||p.addEventListener("click",()=>this.openQuotationModal()),document.querySelectorAll("[data-quotation-close]").forEach(X=>{X.addEventListener("click",()=>this.closeQuotationModal())}),(u=this.quotationModal)==null||u.addEventListener("click",X=>{X.target===this.quotationModal&&this.closeQuotationModal()}),(b=this.quotationDiscountInput)==null||b.addEventListener("input",()=>this.renderQuotation()),(w=this.quotationTvaInput)==null||w.addEventListener("input",()=>this.renderQuotation()),(M=this.quotationProgrammingInput)==null||M.addEventListener("input",()=>this.renderQuotation()),(A=this.quotationInstallationInput)==null||A.addEventListener("input",()=>this.renderQuotation()),(T=this.quotationClientInput)==null||T.addEventListener("change",()=>this.persistQuotationMeta()),(R=this.quotationPhoneInput)==null||R.addEventListener("change",()=>this.persistQuotationMeta()),(_=this.quotationLocationInput)==null||_.addEventListener("change",()=>this.persistQuotationMeta()),(y=this.quotationNotesInput)==null||y.addEventListener("change",()=>this.persistQuotationMeta()),(E=this.quotationProgrammingInput)==null||E.addEventListener("change",()=>this.persistQuotationMeta()),(C=this.quotationInstallationInput)==null||C.addEventListener("change",()=>this.persistQuotationMeta()),(L=this.quotationDiscountInput)==null||L.addEventListener("change",()=>this.persistQuotationMeta()),(k=this.quotationTvaInput)==null||k.addEventListener("change",()=>this.persistQuotationMeta()),(W=this.quotationSaveDefaultsBtn)==null||W.addEventListener("click",()=>this.saveQuotationServiceDefaults()),(U=this.quotationPrintBtn)==null||U.addEventListener("click",()=>this.printQuotation()),document.querySelectorAll("[data-qty-close]").forEach(X=>{X.addEventListener("click",()=>this.closeQtyModal())}),(q=document.querySelector("#device-qty-confirm"))==null||q.addEventListener("click",()=>this.confirmQtyModal()),(H=document.querySelector("#device-qty-modal"))==null||H.addEventListener("click",X=>{var nt;((nt=X.target)==null?void 0:nt.id)==="device-qty-modal"&&this.closeQtyModal()}),(j=document.querySelector("#device-qty-input"))==null||j.addEventListener("keydown",X=>{X.key==="Enter"&&(X.preventDefault(),this.confirmQtyModal()),X.key==="Escape"&&this.closeQtyModal()}),(et=this.benefitsBtn)==null||et.addEventListener("click",()=>this.openBenefitsModal()),document.querySelectorAll("[data-benefits-close]").forEach(X=>{X.addEventListener("click",()=>this.closeBenefitsModal())}),(ht=this.benefitsModal)==null||ht.addEventListener("click",X=>{X.target===this.benefitsModal&&this.closeBenefitsModal()}),(gt=this.benefitsAddExpenseBtn)==null||gt.addEventListener("click",()=>{this.ensureBenefitsMeta(),this.mapData.benefits.extra_expenses.push({id:`exp_${Date.now()}`,name:"",price:0}),this.renderBenefits()}),(Mt=this.benefitsExpensesEl)==null||Mt.addEventListener("input",X=>{const nt=X.target.closest("[data-expense-index]");if(!nt)return;const Dt=Number(nt.dataset.expenseIndex);this.ensureBenefitsMeta();const It=this.mapData.benefits.extra_expenses[Dt];It&&(X.target.dataset.field==="name"&&(It.name=X.target.value),X.target.dataset.field==="price"&&(It.price=Math.max(0,Number(X.target.value)||0)),this.renderBenefitsTotalsOnly())}),($t=this.benefitsExpensesEl)==null||$t.addEventListener("click",X=>{const nt=X.target.closest("[data-expense-remove]");if(!nt)return;const Dt=Number(nt.dataset.expenseRemove);this.ensureBenefitsMeta(),this.mapData.benefits.extra_expenses.splice(Dt,1),this.renderBenefits()}),(he=this.floorSwitcherEl)==null||he.addEventListener("click",X=>{if(X.target.closest("[data-floor-add]")){this.addFloorLayer();return}const nt=X.target.closest("[data-floor-index]");nt&&this.setActiveFloor(Number(nt.dataset.floorIndex))}),(Yt=this.propsEl)==null||Yt.addEventListener("click",X=>{if(X.target.closest("[data-underlay-replace]")){this.openImportModal();return}if(X.target.closest("[data-underlay-remove]")){this.removeFloorUnderlay();return}X.target.closest('[data-action="delete"]')&&this.deleteSelected(),X.target.closest('[data-action="rotate"]')&&this.rotateSelected(-90),X.target.closest('[data-action="rotate-cw"]')&&this.rotateSelected(90),X.target.closest('[data-action="duplicate"]')&&this.duplicateSelected();const nt=X.target.closest("[data-prop-style]");if(nt){this.applyProperty("style",nt.dataset.propStyle,!1),this.renderProperties(!1);return}const Dt=X.target.closest("[data-opening-size]");if(Dt){this.applyOpeningSizePreset(Dt.dataset.openingSize),this.renderProperties(!1);return}const It=X.target.closest("[data-component-size]");if(It){this.applyComponentSizePreset(It.dataset.componentSize),this.renderProperties(!1);return}const zt=X.target.closest("[data-prop-preset]");if(zt){this.applyProperty("preset",zt.dataset.propPreset,!1),this.renderProperties(!1);return}X.target.closest('[data-action="reset-size"]')&&(this.applyComponentSizePreset("standard"),this.renderProperties(!1))}),(K=this.propsEl)==null||K.addEventListener("input",X=>{const nt=X.target.closest("[data-underlay-prop]");if(nt){const zt=nt.dataset.underlayProp;if(nt.type==="range"){const Wt=this.propsEl.querySelector(`input[type="number"][data-underlay-prop="${zt}"]`);Wt&&(Wt.value=nt.value)}else if(nt.type==="number"){const Wt=this.propsEl.querySelector(`input[type="range"][data-underlay-prop="${zt}"]`);Wt&&(Wt.value=nt.value)}this.applyUnderlayProperty(zt,nt.value,nt.type==="range"||nt.type==="number");return}const Dt=X.target.closest("[data-prop]");if(!Dt)return;const It=Dt.dataset.prop;if(Dt.type==="range"){const zt=this.propsEl.querySelector(`input[type="number"][data-prop="${It}"]`);zt&&(zt.value=Dt.value),this.applyProperty(It,Dt.value,!0);return}if(Dt.type==="number"){const zt=this.propsEl.querySelector(`input[data-range-sync="${It}"]`);zt&&(zt.value=Dt.value),this.applyProperty(It,Dt.value,!0);return}this.applyProperty(It,Dt.value,Dt.type==="number"),Dt.tagName==="TEXTAREA"&&this.renderElementsList()}),(at=this.propsEl)==null||at.addEventListener("change",X=>{const nt=X.target.closest("[data-underlay-prop]");if(nt&&nt.type==="checkbox"){this.applyUnderlayProperty(nt.dataset.underlayProp,nt.checked?"true":"false",!1);return}const Dt=X.target.closest("[data-prop]");if(Dt){if(Dt.type==="checkbox"){this.applyProperty(Dt.dataset.prop,Dt.checked?"true":"false",!1);return}Dt.tagName==="SELECT"&&this.applyProperty(Dt.dataset.prop,Dt.value,!1)}}),(it=this.outlinerSearchEl)==null||it.addEventListener("input",X=>{this.outlinerFilter=X.target.value.trim().toLowerCase(),this.renderElementsList()}),(Ut=this.deviceSearchEl)==null||Ut.addEventListener("input",X=>{this.deviceFilter=X.target.value.trim().toLowerCase(),this.renderSmartCatalog()})}preserveScroll(t,e){const i=(t==null?void 0:t.scrollTop)??0;e(),t&&(t.scrollTop=i)}updatePlacingBadge(){if(!this.placingBadgeEl)return;let t="";this.placingKit&&kn[this.placingKit]?t=kn[this.placingKit].label:this.placingComponent&&Ge[this.placingComponent]?t=Ge[this.placingComponent].label:this.placingSmart&&Qt[this.placingSmart]&&(t=Qt[this.placingSmart].label),t?(this.placingBadgeEl.textContent=`Placing: ${t}`,this.placingBadgeEl.classList.remove("hidden"),this.placingBadgeEl.classList.add("studio-chip-active")):(this.placingBadgeEl.classList.add("hidden"),this.placingBadgeEl.classList.remove("studio-chip-active"))}updateStudioContext(){if(!this.contextEl)return;const t={select:"Select",kit:"Room kit",wall:"Wall",door:"Door",window:"Window",furniture:"Item",smart:"Smart",delete:"Delete"};this.contextEl.textContent=t[this.tool]?`Tool: ${t[this.tool]}`:"",this.updatePlacingBadge()}updateComponentButtons(){this.componentButtons.forEach(t=>{const e=this.placingComponent===t.dataset.component;t.classList.toggle("catalog-tile-active",e)})}updateKitButtons(){this.kitButtons.forEach(t=>{const e=this.placingKit===t.dataset.kit;t.classList.toggle("kit-card-active",e),t.classList.toggle("kit-card",!e)})}updateSmartButtons(){this.smartButtons.forEach(t=>{const e=this.placingSmart===t.dataset.smart;t.classList.toggle("catalog-tile-active",e)})}updateStyleButtons(){this.doorStyleButtons.forEach(t=>{const e=this.selectedDoorStyle===t.getAttribute("data-door-style");t.classList.toggle("catalog-style-row-active",e)}),this.windowStyleButtons.forEach(t=>{const e=this.selectedWindowStyle===t.getAttribute("data-window-style");t.classList.toggle("catalog-style-row-active",e)})}renderAllCatalogs(){this.renderSmartCatalog()}matchesDeviceFilter(t,e,i){if(!i)return!0;const n=[t,e.label,e.model,e.haDomain,e.mount,e.category].filter(Boolean).join(" ").toLowerCase();return i.split(/\s+/).every(r=>n.includes(r))}renderSmartCatalog(){this.haDeviceGridEl&&this.preserveScroll(this.assetScrollEl,()=>{const t=this.deviceFilter||"",e=p_().filter(([i,n])=>this.matchesDeviceFilter(i,n,t));this.haDeviceGridEl.className="device-grid",this.haDeviceGridEl.innerHTML=e.map(([i,n])=>{const r=n.unit==="meter"?"meter":"piece",o=r==="meter"?"/m":"";return`
            <button type="button" data-smart="${i}" title="${n.label} · ${hr(n.price)}${o}" class="catalog-tile">
                <span class="catalog-tile-icon" aria-hidden="true">${n.icon}</span>
                <span class="catalog-tile-label">${n.label}${r==="meter"?' <span class="text-surface-500 font-normal">(m)</span>':""}</span>
                <span class="catalog-tile-price">${de(n.price)}${o?`<span class="text-surface-500">${o}</span>`:""}</span>
            </button>`}).join(""),this.deviceCatalogEmptyEl&&this.deviceCatalogEmptyEl.classList.toggle("hidden",e.length>0),this.smartButtons=this.haDeviceGridEl.querySelectorAll("[data-smart]"),this.smartButtons.forEach(i=>{i.addEventListener("click",()=>{this.placingComponent=null,this.placingKit=null,this.updateComponentButtons(),this.updateKitButtons(),this.placingSmart=i.dataset.smart,this.updateSmartButtons(),this.setTool("smart")})}),this.updateSmartButtons()})}setCatalogTab(t){this.catalogTabs.forEach(e=>{const i=e.dataset.catalogTab===t;e.classList.toggle("studio-asset-tab-active",i),e.classList.toggle("studio-asset-tab",!i)}),this.catalogPanels.forEach(e=>{e.classList.toggle("hidden",e.dataset.catalogPanel!==t)})}setViewMode(t){var r,o,a;if(this.endDrag(),t==="walk"&&(t="view360"),this.viewerOnly&&t!=="plan2d")return;this.viewMode=t,this.viewModeButtons.forEach(l=>{l.classList.toggle("view-mode-active",l.dataset.viewMode===t),l.classList.toggle("view-mode-btn",l.dataset.viewMode!==t)});const e=t==="plan2d",i=t==="studio",n=t==="view360";this.studioPanels.forEach(l=>l.classList.toggle("hidden",!e&&!i)),this.handleGroup.visible=i,this.grid.visible=i,(r=this.nightModeBtn)==null||r.classList.toggle("hidden",!n),this.simOverlay&&this.simOverlay.classList.toggle("hidden",!n),this.renderer.domElement.classList.toggle("hidden",e),this.renderer.domElement.style.pointerEvents=e?"none":"",e?((o=this.plan2d)==null||o.show(),this.ensurePlan2dLayout()):(a=this.plan2d)==null||a.hide(),this.root.querySelectorAll(".plan2d-zoom-controls").forEach(l=>{l.classList.toggle("hidden",!e)}),this.controls.enabled=i,this.pointerLock.unlock(),e||this.rebuildScene(),n?this.enter360Mode():i?(this.restoreStudioCamera(),this.setTool("select")):e&&(this.renderPlan2d(),this.viewerOnly||this.setTool(this.tool||"select"),this.setStatus("2D plan — drag to pan · wheel zoom · Shift+wheel / trackpad scroll · pinch zoom"))}getSimOrigin(){var e;const t=(e=this.mapData.sim360)==null?void 0:e.position;return t||[this.projectWidth/2,this.projectDepth/2]}isNightTime(){const t=new Date().getHours();return t>=18||t<6}updateNightModeUI(){this.nightModeBtn&&(this.nightModeBtn.classList.toggle("view-mode-active",this.nightMode),this.nightModeBtn.classList.toggle("view-mode-btn",!this.nightMode),this.nightModeBtn.textContent=this.nightMode?"🌙 Night ON":"☀️ Day")}getRoomAt(t,e){const i=this.getFloor();for(const n of i.rooms||[])if(n.polygon&&Dc(t,e,n.polygon))return n.id;return null}setRoomLights(t,e){const i=this.getFloor();let n=!1;for(const r of i.smart_devices){if(!ur(r.type))continue;this.getRoomAt(r.position[0],r.position[1])===t&&r.on!==e&&(r.on=e,n=!0)}for(const r of i.components){if(!ur(r.type))continue;this.getRoomAt(r.position[0],r.position[1])===t&&r.on!==e&&(r.on=e,n=!0)}n&&this.refreshAutomatedLights()}refreshAutomatedLights(){const t=this.getFloor(),e=0,i=this.viewMode!=="studio";t.smart_devices.forEach(n=>{var l;if(!ur(n.type))return;const r=this.meshes.smart.get(n.id);r&&(this.scene.remove(r),this.disposeObject3D(r));const o=((l=this.selected)==null?void 0:l.type)==="smart"&&this.selected.id===n.id,a=fr(n,e,Qt,o,i);a&&(this.meshes.smart.set(n.id,a),this.scene.add(a))}),t.components.forEach(n=>{if(n.type!=="lamp")return;const r=this.meshes.components.get(n.id);r&&(this.scene.remove(r),this.disposeObject3D(r));const o=Io(n,e,Ge);o&&(this.meshes.components.set(n.id,o),this.scene.add(o))})}updateRoomAutomation(){if(this.viewMode==="studio")return;const t=this.getRoomAt(this.camera.position.x,this.camera.position.z);t!==this.currentRoomId&&(this.currentRoomId&&this.setRoomLights(this.currentRoomId,!1),this.currentRoomId=t,t&&this.setRoomLights(t,!0))}enterImmersiveMode(){this.nightMode=this.isNightTime(),this.updateNightModeUI(),this.currentRoomId=null}enterWalkMode(){this.enterImmersiveMode();const[t,e]=this.getSimOrigin();this.camera.position.set(t,this.eyeHeight,e);const i=this.mapData.sim360||{};this.look360.yaw=i.yaw||0,this.look360.pitch=i.pitch||0,this.apply360Rotation(),this.applySceneLighting(!0),this.updateRoomAutomation(),this.setStatus("WASD move · E door · N night mode · lights auto on/off per room"),this.tryPointerLock()}enter360Mode(){this.enterImmersiveMode();const[t,e]=this.getSimOrigin(),i=this.mapData.sim360||{},[n,r]=this.findWalkableSpawn(t,e);this.camera.position.set(n,this.eyeHeight,r),this.look360.yaw=i.yaw||0,this.look360.pitch=i.pitch||0,this.apply360Rotation(),this.applySceneLighting(!0),this.updateRoomAutomation(),this.persistSimPosition();const o=this.viewerOnly?"360° tour — click view · WASD move · drag look · E door · N night":"360° — click view · WASD move · drag look · E door · N night · Esc exit";this.setStatus(o),queueMicrotask(()=>this.renderer.domElement.focus())}findWalkableSpawn(t,e){const i=(o,a)=>this.canWalkTo(o,a)?[o,a]:null,n=i(t,e);if(n)return n;const r=this.getFloor();for(const o of r.rooms||[]){const a=o.polygon;if(!(a!=null&&a.length))continue;const l=a.map(u=>u[0]),c=a.map(u=>u[1]),h=Math.min(...l),f=Math.max(...l),d=Math.min(...c),m=Math.max(...c),g=l.reduce((u,b)=>u+b,0)/l.length,x=c.reduce((u,b)=>u+b,0)/c.length,p=[[g,x]];for(let u=h+.5;u<=f-.5;u+=.75)for(let b=d+.5;b<=m-.5;b+=.75)Dc(u,b,a)&&p.push([u,b]);for(const[u,b]of p){const w=i(u,b);if(w)return w}}for(let o=.5;o<=Math.max(this.projectWidth,this.projectDepth);o+=.5){const a=Math.max(8,Math.ceil(o*4));for(let l=0;l<a;l++){const c=l/a*Math.PI*2,h=t+Math.cos(c)*o,f=e+Math.sin(c)*o,d=i(h,f);if(d)return d}}return[t,e]}tryPointerLock(){var t,e;this.viewMode==="view360"&&document.pointerLockElement!==this.renderer.domElement&&((e=(t=this.renderer.domElement).requestPointerLock)==null||e.call(t))}apply360Rotation(){this.camera.rotation.order="YXZ",this.camera.rotation.y=this.look360.yaw,this.camera.rotation.x=this.look360.pitch,this.camera.rotation.z=0}restoreStudioCamera(){const t=this.mapData.camera||{};this.camera.position.set(...t.position||[this.projectWidth/2,12,this.projectDepth+12]),this.camera.rotation.set(0,0,0),this.controls.target.set(...t.target||[this.projectWidth/2,0,this.projectDepth/2])}distToWall(t,e,i){const[n,r]=i.from,[o,a]=i.to,l=o-n,c=a-r,h=l*l+c*c;if(h<.001)return Math.hypot(t-n,e-r);let f=Ve(((t-n)*l+(e-r)*c)/h,0,1);const d=n+f*l,m=r+f*c;return Math.hypot(t-d,e-m)}canWalkTo(t,e){const i=E_,n=this.getFloor();for(const r of n.walls){const o=this.distToWall(t,e,r),a=(r.thickness||zn)/2;if(o<i+a){if(y_(t,e,r,n.doors))continue;return!1}}return!0}tryMove(t,e){const i=this.camera.position.x,n=this.camera.position.z,r=i+t,o=n+e;let a=!1;return this.canWalkTo(r,o)?(this.camera.position.x=r,this.camera.position.z=o,a=!0):(this.canWalkTo(r,n)&&(this.camera.position.x=r,a=!0),this.canWalkTo(this.camera.position.x,o)&&(this.camera.position.z=o,a=!0)),this.camera.position.y=this.eyeHeight,a&&this.persistSimPosition(),a}getMoveYaw(){return this.viewMode==="view360"?this.look360.yaw:this.pointerLock.isLocked?this.camera.rotation.y:this.look360.yaw}updateFirstPerson(t){if(this.viewMode!=="view360")return;const e=(this.walkKeys.shift?6.5:3.8)*t,i=this.getMoveYaw(),n=new D(-Math.sin(i),0,-Math.cos(i)),r=new D(Math.cos(i),0,-Math.sin(i)),o=new D;if(this.walkKeys.w&&o.add(n),this.walkKeys.s&&o.sub(n),this.walkKeys.d&&o.add(r),this.walkKeys.a&&o.sub(r),o.lengthSq()>0){o.normalize().multiplyScalar(e);const a=this.tryMove(o.x,o.z);!a&&!this._walkBlockedHint?(this._walkBlockedHint=!0,this.setStatus("360° — movement blocked by walls · try another spot or fix walls in Studio")):a&&(this._walkBlockedHint=!1),this.updateDoorProximity(o)}else this.updateDoorProximity(new D);this.updateDoorAnimations(t),this.updateRoomAutomation()}persistSimPosition(){this.viewMode==="view360"&&(this.mapData.sim360={position:[this.camera.position.x,this.camera.position.z],yaw:this.look360.yaw,pitch:this.look360.pitch})}initDoorAnimStates(){const t=new Map(this.doorAnimStates);this.doorAnimStates.clear();for(const e of this.getFloor().doors){const i=t.get(e.id);this.doorAnimStates.set(e.id,{open:(i==null?void 0:i.open)??0,target:(i==null?void 0:i.target)??0})}}updateDoorProximity(t){const e=this.getFloor();let i=null,n=1/0;const r=this.camera.position.x,o=this.camera.position.z;for(const a of e.doors){const l=e.walls.find(m=>m.id===a.wall_id);if(!l)continue;const{x:c,z:h}=g_(a,l),f=Math.hypot(r-c,o-h);f<n&&(n=f,i=a);const d=this.doorAnimStates.get(a.id);if(d)if(f<2.2){const m=new D(c-r,0,h-o);m.lengthSq()>.01&&m.normalize();const g=t.lengthSq()>0?t.clone().normalize():null;(g&&g.dot(m)>.2||f<1.4)&&(d.target=1)}else f>3.2&&(d.target=0)}this.nearDoorId=n<2.5?i==null?void 0:i.id:null}toggleNearestDoor(){if(!this.nearDoorId)return;const t=this.doorAnimStates.get(this.nearDoorId);t&&(t.target=t.target>.5?0:1)}updateDoorAnimations(t){const e=4*t;this.doorAnimStates.forEach((i,n)=>{i.open+=(i.target-i.open)*Math.min(1,e),Math.abs(i.target-i.open)<.005&&(i.open=i.target);const r=this.meshes.doors.get(n);r&&No(r,i.open)})}onKeyUp(t){const e=t.key.toLowerCase();e in this.walkKeys&&(this.walkKeys[e]=!1),t.key==="Shift"&&(this.walkKeys.shift=!1)}setTool(t){var i,n,r,o,a;if(!this.isDesignMode())return;this.tool=t,this.cancelWallDraw(),this.toolButtons.forEach(l=>{l.classList.toggle("tool-btn-active",l.dataset.tool===t),l.classList.toggle("tool-btn",l.dataset.tool!==t)});const e={select:"Select & drag to move · Click room floor to paint · Edit properties →",kit:this.placingKit?`Click floor corner to place ${((i=kn[this.placingKit])==null?void 0:i.label)||"room kit"}`:"Pick a room kit from the library (bathroom, kitchen, bedroom…)",wall:"Click two points to draw walls · Esc to cancel",door:`Click any wall for ${((n=mi[this.selectedDoorStyle])==null?void 0:n.label)||"door"}`,window:`Click any wall for ${((r=$i[this.selectedWindowStyle])==null?void 0:r.label)||"window"}`,furniture:this.placingComponent?`Click floor to place ${(o=Ge[this.placingComponent])==null?void 0:o.label}`:"Pick an item from the Items tab, then click floor",smart:this.placingSmart?`Click to place ${(a=Qt[this.placingSmart])==null?void 0:a.label}`:"Pick a smart device, then click floor/wall area",text:"Click anywhere on the 2D plan to add text · double-click to edit",delete:"Click any element to delete"};this.setStatus(e[t]||""),this.updateStudioContext()}setStatus(t){this.statusEl&&(this.statusEl.textContent=t)}allInteractables(){return[...this.meshes.walls.values(),...this.meshes.doors.values(),...this.meshes.windows.values(),...this.meshes.components.values(),...this.meshes.smart.values(),...this.decorMeshes.filter(t=>{var e;return((e=t.userData)==null?void 0:e.type)==="room"})]}updatePointer(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera)}getGroundPoint(t){this.updatePointer(t);const e=this.raycaster.intersectObject(this.groundPlane);return e.length?Fc(e[0].point.x,e[0].point.z,this.snapEnabled):null}getIntersectedObject(t,e=null){var n;this.updatePointer(t);const i=this.raycaster.intersectObjects(e||this.allInteractables(),!0);return w_((n=i[0])==null?void 0:n.object)||null}getHandleAt(t){var i;if(this.viewMode==="plan2d"){const{sx:n,sy:r}=this.getPlan2dScreen(t);return this.plan2d.hitTestWallHandle(this.getFloor(),this.selected,n,r)}return this.updatePointer(t),((i=this.raycaster.intersectObjects(this.handleGroup.children,!1)[0])==null?void 0:i.object)||null}onPointerDown(t){var n,r,o,a;if(this.viewMode==="view360"){if(this.renderer.domElement.focus(),t.button===0){this.tryPointerLock(),this.look360.dragging=!0,this.look360.lastX=t.clientX,this.look360.lastY=t.clientY;try{(r=(n=t.target).setPointerCapture)==null||r.call(n,t.pointerId)}catch{}}return}if(!this.canEdit||this.viewMode==="plan2d"&&((o=this.plan2d)!=null&&o.isPanning||(a=this.plan2d)!=null&&a._pinch))return;if(this.tool==="wall"){const l=this.getWorldPoint(t);if(!l)return;this.wallStart?(this.addWall(this.wallStart,l),this.cancelWallDraw()):(this.wallStart=l,this.wallPreviewEnd=l,this.showStartMarker(l),this.setStatus("Click end point · Esc to cancel"));return}if(this.tool==="furniture"&&this.placingComponent){const l=this.getWorldPoint(t);l&&this.addComponent(this.placingComponent,l);return}if(this.tool==="kit"&&this.placingKit){const l=this.getWorldPoint(t);l&&this.placeRoomKit(this.placingKit,l[0],l[1]);return}if(this.tool==="smart"&&this.placingSmart){const l=this.getWorldPoint(t);l&&this.beginPlaceSmartDevice(this.placingSmart,l);return}if(this.tool==="text"){if(this.viewMode!=="plan2d"){this.setStatus("Switch to 2D Plan to add text labels");return}const l=this.getWorldPoint(t);if(!l)return;this.openLabelEditor({worldPos:l,text:""});return}const e=this.getHandleAt(t);if(e&&this.tool==="select"){this.startDrag(e.userData.dragType,e.userData.refId,e.userData.endpoint);return}const i=this.getHitAtEvent(t);if(this.tool==="door"&&(i==null?void 0:i.userData.type)==="wall"){const l=this.getWorldPoint(t);this.addOpeningOnWall(i.userData.id,"door",l);return}if(this.tool==="window"&&(i==null?void 0:i.userData.type)==="wall"){const l=this.getWorldPoint(t);this.addOpeningOnWall(i.userData.id,"window",l);return}if(this.tool==="delete"&&i){this.deleteById(i.userData.type,i.userData.id);return}this.tool==="select"&&((i==null?void 0:i.userData.type)==="door"||(i==null?void 0:i.userData.type)==="window"?(this.selectById(i.userData.type,i.userData.id),this.startDrag("opening-slide",i.userData.id)):(i==null?void 0:i.userData.type)==="component"||(i==null?void 0:i.userData.type)==="smart"?(this.selectById(i.userData.type,i.userData.id),this.startDrag("component-move",i.userData.id)):(i==null?void 0:i.userData.type)==="label"?(this.selectById("label",i.userData.id),this.startDrag("label-move",i.userData.id)):(i==null?void 0:i.userData.type)==="room"?this.selectById("room",i.userData.id):(i==null?void 0:i.userData.type)==="wall"?this.selectById("wall",i.userData.id):this.selectObject(null),this.renderElementsList(),this.viewMode==="plan2d"&&this.renderPlan2d())}onPointerMove(t){if(this.viewMode==="view360"){if(document.pointerLockElement===this.renderer.domElement)return;if(this.look360.dragging){const i=t.clientX-this.look360.lastX,n=t.clientY-this.look360.lastY;this.look360.lastX=t.clientX,this.look360.lastY=t.clientY,this.look360.yaw-=i*.004,this.look360.pitch=Ve(this.look360.pitch-n*.004,-Math.PI/2+.1,Math.PI/2-.1),this.apply360Rotation(),this.persistSimPosition()}return}if(!this.isDesignMode()||!this.canEdit)return;if(this.drag){this.processDrag(t);return}const e=this.getWorldPoint(t);if(e&&(this.cursorWorld=e),this.tool==="wall"&&this.wallStart){e&&(this.wallPreviewEnd=e,this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewLine(this.wallStart,e));return}if(this.tool==="furniture"&&this.placingComponent){e&&(this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewComponent(this.placingComponent,e));return}if(this.tool==="kit"&&this.placingKit){e&&(this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewKit(this.placingKit,e));return}this.tool==="smart"&&this.placingSmart&&e&&(this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewSmart(this.placingSmart,e))}startDrag(t,e,i=null){this.drag={type:t,refId:e,endpoint:i},this.controls.enabled=!1}endDrag(){this.drag&&(this.drag=null,this.controls.enabled=!0,this.renderElementsList(),this.renderProperties(),this.updateHandles())}processDrag(t){const e=this.getFloor(),i=this.getWorldPoint(t);if(i){if(this.drag.type==="wall-from"||this.drag.type==="wall-to"){const n=e.walls.find(r=>r.id===this.drag.refId);if(!n)return;this.drag.type==="wall-from"?n.from=i:n.to=i,this.refreshScene();return}if(this.drag.type==="opening-slide"){const n=e.doors.find(f=>f.id===this.drag.refId),r=e.windows.find(f=>f.id===this.drag.refId),o=n||r;if(!o)return;const a=e.walls.find(f=>f.id===o.wall_id);if(!a)return;let l=Uo(a,i[0],i[1]);const[c,h]=pr(a,o.width);o.position=Math.round(Ve(l,c,h)*1e3)/1e3,this.refreshScene();return}if(this.drag.type==="component-move"){const n=e.components.find(a=>a.id===this.drag.refId),r=e.smart_devices.find(a=>a.id===this.drag.refId),o=n||r;if(!o)return;o.position=i,this.refreshScene();return}if(this.drag.type==="label-move"){const n=e.labels.find(r=>r.id===this.drag.refId);if(!n)return;n.position=i,this.refreshScene()}}}refreshScene(){this.viewMode==="plan2d"?this.renderPlan2d():this.rebuildScene()}onKeyDown(t){var i,n,r;const e=t.key.toLowerCase();if(this.viewMode==="view360"){if((e in this.walkKeys||t.key==="Shift")&&t.preventDefault(),e in this.walkKeys&&(this.walkKeys[e]=!0),t.key==="Shift"&&(this.walkKeys.shift=!0),t.key==="Escape"){if(document.pointerLockElement===this.renderer.domElement){(i=document.exitPointerLock)==null||i.call(document);return}this.viewerOnly||this.setViewMode("studio");return}if(e==="e"){t.preventDefault(),this.toggleNearestDoor();return}if(e==="n"){t.preventDefault(),this.nightMode=!this.nightMode,this.applySceneLighting(!0),this.updateNightModeUI(),this.nightMode&&this.currentRoomId&&this.setRoomLights(this.currentRoomId,!0);return}return}if(e in this.walkKeys&&(this.walkKeys[e]=!0),t.key==="Shift"&&(this.walkKeys.shift=!0),t.key==="Escape"){if(this.labelEditor){this.closeLabelEditor(!0);return}this.endDrag(),this.cancelWallDraw(),this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.updateComponentButtons(),this.updateSmartButtons(),this.updateKitButtons(),this.removePreviewComponent(),this.removePreviewSmart(),this.removePreviewKit(),(this.tool==="furniture"||this.tool==="smart"||this.tool==="kit")&&this.setTool("select");return}!this.isDesignMode()||!this.canEdit||((t.key==="Delete"||t.key==="Backspace")&&this.selected&&(t.preventDefault(),this.deleteSelected()),t.key==="r"&&(((n=this.selected)==null?void 0:n.type)==="component"||((r=this.selected)==null?void 0:r.type)==="smart")&&this.rotateSelected(90),t.key==="d"&&t.ctrlKey&&this.selected&&(t.preventDefault(),this.duplicateSelected()))}showStartMarker(t){if(this.viewMode==="plan2d"){this.renderPlan2d();return}this.removeStartMarker(),this.startMarker=new Jt(new ii(.15,16,16),this.materials.marker),this.startMarker.position.set(t[0],.15,t[1]),this.scene.add(this.startMarker)}removeStartMarker(){this.startMarker&&(this.scene.remove(this.startMarker),this.startMarker.geometry.dispose(),this.startMarker=null)}updatePreviewLine(t,e){this.previewLine&&(this.scene.remove(this.previewLine),this.previewLine.geometry.dispose()),this.previewLine=new qa(new we().setFromPoints([new D(t[0],.05,t[1]),new D(e[0],.05,e[1])]),this.materials.preview),this.scene.add(this.previewLine)}updatePreviewComponent(t,e){this.removePreviewComponent();const i=Ge[t];if(!i)return;const n=Io({type:t,...i,position:e,rotation:0,width:i.w,depth:i.d,height:i.h},0,Ge,!0);n&&(this.previewComponent=n,this.scene.add(n))}updatePreviewSmart(t,e){this.removePreviewSmart();const i=Qt[t];if(!i)return;const n=fr({type:t,position:e,rotation:0,mount:i.mount,on:!0},0,Qt,!1,!1);n&&(this.previewSmart=n,this.scene.add(n))}removePreviewSmart(){this.previewSmart&&(this.scene.remove(this.previewSmart),this.disposeObject3D(this.previewSmart),this.previewSmart=null)}removePreviewComponent(){this.previewComponent&&(this.scene.remove(this.previewComponent),this.disposeObject3D(this.previewComponent),this.previewComponent=null)}updatePreviewKit(t,e){this.removePreviewKit();const i=kn[t];if(!(i!=null&&i.footprint))return;const{w:n,d:r}=i.footprint,[o,a]=e,l=[new D(o,.02,a),new D(o+n,.02,a),new D(o+n,.02,a+r),new D(o,.02,a+r)],c=new we().setFromPoints(l),h=new Kd(c,new Rr({color:2282478,transparent:!0,opacity:.85})),f=new Jt(new jn(n,r),new Vn({color:2282478,transparent:!0,opacity:.12,side:ti}));f.rotation.x=-Math.PI/2,f.position.set(o+n/2,.01,a+r/2);const d=new Ze;d.add(h,f),this.previewKit=d,this.scene.add(d)}removePreviewKit(){this.previewKit&&(this.scene.remove(this.previewKit),this.previewKit.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.previewKit=null)}cancelWallDraw(){this.wallStart=null,this.wallPreviewEnd=null,this.removeStartMarker(),this.previewLine&&(this.scene.remove(this.previewLine),this.previewLine.geometry.dispose(),this.previewLine=null),this.viewMode==="plan2d"&&this.renderPlan2d()}addWall(t,e){if(t[0]===e[0]&&t[1]===e[1])return;const i=this.getFloor(),n={id:Le("wall"),from:t,to:e,height:i.height||Ri,thickness:zn};i.walls.push(n),this.refreshScene(),this.renderElementsList(),this.selectById("wall",n.id)}addOpeningOnWall(t,e,i=null){var x;const n=typeof t=="string"?t:(x=t.userData)==null?void 0:x.id,r=this.getFloor(),o=r.walls.find(p=>p.id===n);if(!o)return;let a;if(i)a=Uo(o,i[0],i[1]);else{const p=this.raycaster.intersectObject(t,!0);if(!p.length)return;a=Uo(o,p[0].point.x,p[0].point.z)}const l=e==="door"?r.doors:r.windows,c=e==="door"?this.selectedDoorStyle:this.selectedWindowStyle,h=e==="door"?mi:$i,f=h[c]||Object.values(h)[0],d={id:Le(e),wall_id:o.id,position:Math.round(a*100)/100,width:f.width,height:f.height,style:f.type,...e==="window"?{sill:f.sill??.9}:{}},[m,g]=pr(o,d.width);d.position=Ve(d.position,m,g),l.push(d),this.refreshScene(),this.renderElementsList(),this.selectById(e,d.id),this.setStatus(`${f.label} placed — drag along wall or edit in inspector →`)}addComponent(t,e){const i=Ge[t];if(!i)return;const n=this.getFloor(),r={id:Le("comp"),type:t,position:e,rotation:0,width:i.w,depth:i.d,height:i.h};n.components.push(r),this.refreshScene(),this.renderElementsList(),this.selectById("component",r.id)}beginPlaceSmartDevice(t,e){if(Qt[t]){if(Yi(t)){this.openQtyModal({type:t,position:e});return}this.addSmartDevice(t,e,1)}}openQtyModal({type:t,position:e}){const i=Qt[t]||{},n=document.querySelector("#device-qty-modal"),r=document.querySelector("#device-qty-title"),o=document.querySelector("#device-qty-meta"),a=document.querySelector("#device-qty-input"),l=document.querySelector("#device-qty-total");if(!n||!a){this.addSmartDevice(t,e,1);return}this._pendingSmartPlace={type:t,position:e};const c=Number(i.price)||0;r&&(r.textContent=`${i.icon||"●"} ${i.label||t}`),o&&(o.textContent=`Price per 1 m: ${hr(c)} OMR · enter length in meters`),a.value="1",a.min="0.001",a.step="0.001";const h=()=>{const f=Math.max(0,Number(a.value)||0);l&&(l.textContent=`${hr(c*f)} OMR`)};a.oninput=h,h(),n.classList.remove("hidden"),setTimeout(()=>{a.focus(),a.select()},30)}closeQtyModal(){var e;(e=document.querySelector("#device-qty-modal"))==null||e.classList.add("hidden"),this._pendingSmartPlace=null;const t=document.querySelector("#device-qty-input");t&&(t.oninput=null)}confirmQtyModal(){var o;const t=this._pendingSmartPlace;if(!t){this.closeQtyModal();return}const e=document.querySelector("#device-qty-input"),i=Math.max(.001,Number(e==null?void 0:e.value)||1),{type:n,position:r}=t;this.closeQtyModal(),this.addSmartDevice(n,r,i),this.setStatus(`Placed ${((o=Qt[n])==null?void 0:o.label)||n} · ${i} m`)}addSmartDevice(t,e,i=1){const n=Qt[t];if(!n)return;const r=this.getFloor(),o=Math.max(.001,Number(i)||1),a={id:Le("smart"),type:t,position:e,rotation:0,mount:n.mount,ceiling_height:n.defaultHeight??2.75,height_offset:n.defaultHeight??1.35,on:!0,price:Number(n.price)||0,qty:o,unit:fs(t)};r.smart_devices.push(a),this.refreshScene(),this.renderElementsList(),this.selectById("smart",a.id)}addLabel(t,e){const i=this.getFloor(),n={id:Le("label"),text:e||"Text",position:t,size:14,color:"#e2e8f0"};return i.labels.push(n),this.refreshScene(),this.renderElementsList(),this.selectById("label",n.id),n}openLabelEditor({labelId:t=null,worldPos:e,text:i=""}){if(!this.canEdit||this.viewMode!=="plan2d")return;this.closeLabelEditor(!0);const[n,r]=this.plan2d.worldToScreen(e[0],e[1]),o=document.createElement("textarea");o.className="plan2d-label-editor",o.value=i,o.rows=Math.min(6,Math.max(1,String(i).split(`
`).length)),o.style.left=`${n}px`,o.style.top=`${r}px`,o.placeholder="Type label…",this.container.appendChild(o),o.focus(),o.select();const a=()=>{const l=o.value.replace(/\r\n/g,`
`),c=l.trim();if(t){const h=this.getFloor().labels.find(f=>f.id===t);h&&(c?(h.text=l,this.selectById("label",h.id)):this.deleteById("label",t))}else c&&this.addLabel(e,l);this.closeLabelEditor(!0),this.refreshScene(),this.renderElementsList(),this.renderProperties()};o.addEventListener("keydown",l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),a()),l.key==="Escape"&&(l.preventDefault(),this.closeLabelEditor(!0))}),o.addEventListener("blur",()=>a()),this.labelEditor={input:o,labelId:t,worldPos:e}}closeLabelEditor(t=!1){if(!this.labelEditor)return;const{input:e}=this.labelEditor;e.remove(),this.labelEditor=null,t||this.renderPlan2d()}placeRoomKit(t,e,i){var g;const n=kn[t];if(!n)return;const r=this.getFloor(),o=Le("kit"),{w:a,d:l}=n.footprint,c=e,h=i,f=c+a,d=h+l,m=[];if(n.structure){const x=[[c,h],[f,h],[f,d],[c,d]];if(r.rooms.push({id:Le("room"),name:n.label,preset:n.preset,color:((g=Ci[n.preset])==null?void 0:g.color)??Ci.default.color,polygon:x,kit_group:o}),[{from:[c,h],to:[f,h]},{from:[f,h],to:[f,d]},{from:[f,d],to:[c,d]},{from:[c,d],to:[c,h]}].forEach(u=>{const b={id:Le("wall"),from:u.from,to:u.to,height:r.height||Ri,thickness:zn,kit_group:o};r.walls.push(b),m.push(b)}),n.door&&m.length){const u=Ve(n.door.wall??0,0,m.length-1),b=m[u],w=n.door.style||"interior",M=mi[w]||mi.interior;r.doors.push({id:Le("door"),wall_id:b.id,position:n.door.position??.5,width:n.door.width??M.width,height:n.door.height??M.height,style:M.type,kit_group:o})}}for(const x of n.items||[]){const p=c+x.at[0],u=h+x.at[1];if(x.kind==="component"){const b=Ge[x.type];if(!b)continue;r.components.push({id:Le("comp"),type:x.type,position:[p,u],rotation:x.rotation??0,width:b.w,depth:b.d,height:b.h,kit_group:o})}else if(x.kind==="smart"){const b=Qt[x.type];if(!b)continue;r.smart_devices.push({id:Le("smart"),type:x.type,position:[p,u],rotation:x.rotation??0,mount:x.mount||b.mount,ceiling_height:x.height??b.defaultHeight??2.75,height_offset:x.height??b.defaultHeight??1.35,on:!0,price:Number(b.price)||0,qty:1,unit:fs(x.type),kit_group:o})}}this.refreshScene(),this.renderElementsList(),this.setStatus(`${n.label} placed — drag items to adjust · view in 360°`)}selectObject(t){this.selected=t?{type:t.userData.type,id:t.userData.id}:null,this.updateSelectionHighlight(),this.updateHandles(),this.renderProperties()}selectById(t,e){this.selected={type:t,id:e},this.updateSelectionHighlight(),this.updateHandles(),this.renderProperties()}rotateSelected(t=90){var o,a;if(((o=this.selected)==null?void 0:o.type)!=="component"&&((a=this.selected)==null?void 0:a.type)!=="smart")return;const e=this.getFloor(),i=e.components.find(l=>l.id===this.selected.id),n=e.smart_devices.find(l=>l.id===this.selected.id),r=i||n;r&&(r.rotation=((r.rotation||0)+t*Math.PI/180)%(Math.PI*2),this.refreshScene())}duplicateSelected(){if(!this.selected||!this.canEdit)return;const t=this.getFloor(),e=this.snapEnabled?Da:.5;if(this.selected.type==="wall"){const i=t.walls.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("wall"),from:[i.from[0]+e,i.from[1]],to:[i.to[0]+e,i.to[1]]};t.walls.push(n),this.selectById("wall",n.id)}else if(this.selected.type==="door"){const i=t.doors.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("door"),position:Ve(i.position+.15,.05,.95)};t.doors.push(n),this.selectById("door",n.id)}else if(this.selected.type==="window"){const i=t.windows.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("window"),position:Ve(i.position+.15,.05,.95)};t.windows.push(n),this.selectById("window",n.id)}else if(this.selected.type==="component"){const i=t.components.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("comp"),position:[i.position[0]+e,i.position[1]+e]};t.components.push(n),this.selectById("component",n.id)}else if(this.selected.type==="smart"){const i=t.smart_devices.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("smart"),position:[i.position[0]+e,i.position[1]+e]};t.smart_devices.push(n),this.selectById("smart",n.id)}this.refreshScene(),this.renderElementsList()}applyProperty(t,e,i){var l,c,h;if(!this.selected||!this.canEdit)return;const n=this.getFloor(),r=i?parseFloat(e):e;if(i&&Number.isNaN(r))return;const o=(c=(l={wall:()=>n.walls.find(f=>f.id===this.selected.id),door:()=>n.doors.find(f=>f.id===this.selected.id),window:()=>n.windows.find(f=>f.id===this.selected.id),component:()=>n.components.find(f=>f.id===this.selected.id),smart:()=>n.smart_devices.find(f=>f.id===this.selected.id),label:()=>n.labels.find(f=>f.id===this.selected.id),room:()=>n.rooms.find(f=>f.id===this.selected.id)})[this.selected.type])==null?void 0:c.call(l);if(!o)return;const a=t.split(".");if(a.length===2){const f=a[1]==="x"?0:1,d=Ia(r,this.snapEnabled);a[0]==="from"?o.from[f]=d:a[0]==="to"?o.to[f]=d:a[0]==="position"&&(o.position[f]=d)}else if(t==="rotation")o.rotation=r*Math.PI/180;else if(t==="position_pct"){const f=n.walls.find(d=>d.id===o.wall_id);if(f){const[d,m]=pr(f,o.width);o.position=Ve(r/100,d,m)}}else if(t==="wall_id"){o.wall_id=r;const f=n.walls.find(d=>d.id===r);if(f){const[d,m]=pr(f,o.width);o.position=Ve(o.position,d,m)}}else if(t==="style"){const d=(this.selected.type==="door"?mi:$i)[r];d?(o.style=d.type,o.width=d.width,o.height=d.height,this.selected.type==="window"&&(o.sill=d.sill??o.sill)):o.style=r}else if(t==="on"){o.on=r==="true"||r===!0;const f=(this.selected.type==="smart",o.type);if(ur(f)){this.refreshAutomatedLights();return}}else t==="color"&&this.selected.type==="label"?o.color=r:t==="color"&&this.selected.type==="room"?o.color=mn(r):t==="frame_color"?o.frame_color=r:t==="color"&&this.selected.type==="door"?o.color=r:t==="preset"&&this.selected.type==="room"?(o.preset=r,o.color=((h=Ci[r])==null?void 0:h.color)??o.color):t==="name"?o.name=r:o[t]=r;this.refreshScene()}updateSelectionHighlight(){if(this.viewMode==="plan2d"){this.renderPlan2d();return}const t=this.getFloor(),e=0;this.meshes.walls.forEach((i,n)=>{var o;const r=((o=this.selected)==null?void 0:o.type)==="wall"&&this.selected.id===n;i.traverse(a=>{a.isMesh&&(a.material=r?this.materials.wallSelected:this.materials.wall)})}),t.doors.forEach(i=>{var c;const n=t.walls.find(h=>h.id===i.wall_id);if(!n)return;const r=((c=this.selected)==null?void 0:c.type)==="door"&&this.selected.id===i.id,o=this.meshes.doors.get(i.id);o&&(this.scene.remove(o),this.disposeObject3D(o));const a=Nc(i,n,e,r);this.meshes.doors.set(i.id,a),this.scene.add(a);const l=this.doorAnimStates.get(i.id);l&&No(a,l.open)}),t.windows.forEach(i=>{var l;const n=t.walls.find(c=>c.id===i.wall_id);if(!n)return;const r=((l=this.selected)==null?void 0:l.type)==="window"&&this.selected.id===i.id,o=this.meshes.windows.get(i.id);o&&(this.scene.remove(o),this.disposeObject3D(o));const a=Uc(i,n,e,r);this.meshes.windows.set(i.id,a),this.scene.add(a)}),this.meshes.components.forEach((i,n)=>{var o;const r=((o=this.selected)==null?void 0:o.type)==="component"&&this.selected.id===n;i.traverse(a=>{var l;!a.isMesh||(l=a.material)!=null&&l.isPointLight||r&&(a.material=this.materials.componentSelected)})}),t.smart_devices.forEach(i=>{var a;const n=((a=this.selected)==null?void 0:a.type)==="smart"&&this.selected.id===i.id,r=this.meshes.smart.get(i.id);r&&(this.scene.remove(r),this.disposeObject3D(r));const o=fr(i,e,Qt,n,this.viewMode!=="studio");o&&(this.meshes.smart.set(i.id,o),this.scene.add(o))})}updateHandles(){var i;for(;this.handleGroup.children.length;){const n=this.handleGroup.children[0];this.handleGroup.remove(n),(i=n.geometry)==null||i.dispose()}if(!this.selected||!this.canEdit)return;const t=this.getFloor(),e=0;if(this.selected.type==="wall"){const n=t.walls.find(r=>r.id===this.selected.id);if(!n)return;this.addHandle(n.from[0],e+.2,n.from[1],"wall-from",n.id,"from"),this.addHandle(n.to[0],e+.2,n.to[1],"wall-to",n.id,"to")}if(this.selected.type==="door"||this.selected.type==="window"){const r=(this.selected.type==="door"?t.doors:t.windows).find(a=>a.id===this.selected.id),o=t.walls.find(a=>a.id===(r==null?void 0:r.wall_id));if(r&&o){const a=r.position??.5,l=o.from[0]+(o.to[0]-o.from[0])*a,c=o.from[1]+(o.to[1]-o.from[1])*a,h=this.selected.type==="window"?e+(r.sill||.9)+(r.height||1.2)/2:e+(r.height||2.1)/2;this.addHandle(l,h,c,"opening-slide",r.id)}}}addHandle(t,e,i,n,r,o=null){const a=new Jt(new ii(.2,12,12),this.materials.handle);a.position.set(t,e,i),a.userData={dragType:n,refId:r,endpoint:o,isHandle:!0},this.handleGroup.add(a)}deleteSelected(){this.selected&&this.deleteById(this.selected.type,this.selected.id)}countFloorElements(t){var e,i,n,r,o,a,l;return(((e=t.walls)==null?void 0:e.length)||0)+(((i=t.doors)==null?void 0:i.length)||0)+(((n=t.windows)==null?void 0:n.length)||0)+(((r=t.rooms)==null?void 0:r.length)||0)+(((o=t.components)==null?void 0:o.length)||0)+(((a=t.smart_devices)==null?void 0:a.length)||0)+(((l=t.labels)==null?void 0:l.length)||0)}resetPlacementState(){this.endDrag(),this.cancelWallDraw(),this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.updateComponentButtons(),this.updateSmartButtons(),this.updateKitButtons(),this.removePreviewComponent(),this.removePreviewSmart(),this.removePreviewKit(),this.closeLabelEditor(!0)}clearFloorData(t){t.walls=[],t.doors=[],t.windows=[],t.rooms=[],t.components=[],t.smart_devices=[],t.labels=[]}clearCurrentFloor(){var a;if(!this.canEdit)return;const t=this.getFloor(),e=t.name||Co(t),i=this.countFloorElements(t);if(i===0){this.setStatus(`${e} is already empty`);return}const r=(((a=this.mapData.floors)==null?void 0:a.length)||1)>1?`

Other floor layers are not affected.`:"";window.confirm(`Delete ALL elements on "${e}"?

This removes walls, doors, windows, rooms, furniture, smart devices, and text labels.
The floor image (if any) is kept.`+r)&&(this.clearFloorData(t),this.selected=null,this.resetPlacementState(),this.tool!=="select"&&this.setTool("select"),this.refreshScene(),this.renderElementsList(),this.renderProperties(),this.setStatus(`Cleared all elements on ${e} — ${i} item(s) removed`))}deleteById(t,e){const i=this.getFloor();t==="wall"?(i.walls=i.walls.filter(n=>n.id!==e),i.doors=i.doors.filter(n=>n.wall_id!==e),i.windows=i.windows.filter(n=>n.wall_id!==e)):t==="door"?i.doors=i.doors.filter(n=>n.id!==e):t==="window"?i.windows=i.windows.filter(n=>n.id!==e):t==="component"?i.components=i.components.filter(n=>n.id!==e):t==="smart"?i.smart_devices=i.smart_devices.filter(n=>n.id!==e):t==="label"&&(i.labels=i.labels.filter(n=>n.id!==e)),this.selected=null,this.refreshScene(),this.renderElementsList(),this.renderProperties()}deleteObject(t){this.deleteById(t.userData.type,t.userData.id)}disposeObject3D(t){t.traverse(e=>{var i;(i=e.geometry)==null||i.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}clearMeshes(){["walls","doors","windows","components","smart"].forEach(t=>{this.meshes[t].forEach(e=>{this.scene.remove(e),this.disposeObject3D(e)}),this.meshes[t].clear()}),this.decorMeshes.forEach(t=>{var e,i;this.scene.remove(t),t.geometry&&t.geometry.dispose(),(e=t.material)!=null&&e.map&&t.material.map.dispose(),(i=t.material)==null||i.dispose()}),this.decorMeshes=[],this.scene.children.filter(t=>t.userData.isFloor||t.userData.isCeiling).forEach(t=>{var e;this.scene.remove(t),(e=t.geometry)==null||e.dispose()})}roomColor(t){return t.color?typeof t.color=="number"?t.color:mn(t.color):t.preset&&Ci[t.preset]?Ci[t.preset].color:Ci.default.color}rebuildScene(){var r;if(this.viewMode==="plan2d"){this.renderPlan2d();return}this.clearMeshes();const t=this.getFloor(),e=0,i=this.viewMode!=="studio";((r=t.rooms)!=null&&r.length?t.rooms:[{id:"room-default",name:"Floor",polygon:[[0,0],[this.projectWidth,0],[this.projectWidth,this.projectDepth],[0,this.projectDepth]],color:Ci.default.color}]).forEach(o=>{const a=o.polygon||[],l=__(a,e,this.roomColor(o));if(l&&(l.userData={type:"room",id:o.id,isFloor:!0},this.scene.add(l),this.decorMeshes.push(l)),i){const c=v_(a,e,t.height||Ri,this.materials.ceiling);c&&this.scene.add(c)}if(!i){const c=x_(o,e);c&&(this.scene.add(c),this.decorMeshes.push(c))}}),t.walls.forEach(o=>{const a=m_(o,e,t.doors,t.windows,this.materials.wall);this.meshes.walls.set(o.id,a),this.scene.add(a)}),t.doors.forEach(o=>{var h;const a=t.walls.find(f=>f.id===o.wall_id);if(!a)return;const l=((h=this.selected)==null?void 0:h.type)==="door"&&this.selected.id===o.id,c=Nc(o,a,e,l);this.meshes.doors.set(o.id,c),this.scene.add(c)}),this.initDoorAnimStates(),this.doorAnimStates.forEach((o,a)=>{const l=this.meshes.doors.get(a);l&&No(l,o.open)}),t.windows.forEach(o=>{var h;const a=t.walls.find(f=>f.id===o.wall_id);if(!a)return;const l=((h=this.selected)==null?void 0:h.type)==="window"&&this.selected.id===o.id,c=Uc(o,a,e,l);this.meshes.windows.set(o.id,c),this.scene.add(c)}),t.components.forEach(o=>{const a=Io(o,e,Ge);a&&(this.meshes.components.set(o.id,a),this.scene.add(a))}),t.smart_devices.forEach(o=>{var c;const a=((c=this.selected)==null?void 0:c.type)==="smart"&&this.selected.id===o.id,l=fr(o,e,Qt,a,i);l&&(this.meshes.smart.set(o.id,l),this.scene.add(l))}),this.applySceneLighting(i),this.updateSelectionHighlight(),this.updateHandles()}applySceneLighting(t){t&&this.nightMode?(this.scene.background=new Ot(789001),this.scene.fog=new Gn(789001,6,28),this.ambientLight.intensity=.12,this.ambientLight.color.setHex(1981023),this.sun.intensity=.08,this.hemiLight.intensity=.1,this.materials.wall.color.setHex(14078929),this.materials.ceiling.color.setHex(11051678),this.renderer.toneMapping=Sr,this.renderer.toneMappingExposure=.85):t?(this.scene.background=new Ot(2696484),this.scene.fog=new Gn(2696484,10,40),this.ambientLight.intensity=.7,this.ambientLight.color.setHex(16775149),this.sun.intensity=.45,this.hemiLight.intensity=.6,this.materials.wall.color.setHex(16119284),this.materials.ceiling.color.setHex(16777215),this.renderer.toneMapping=Sr,this.renderer.toneMappingExposure=1.1):(this.scene.background=new Ot(659226),this.scene.fog=new Gn(659226,50,140),this.ambientLight.intensity=.45,this.ambientLight.color.setHex(16774635),this.sun.intensity=1.1,this.hemiLight.intensity=.35,this.materials.wall.color.setHex(15262943),this.materials.ceiling.color.setHex(16317180),this.renderer.toneMapping=li,this.renderer.toneMappingExposure=1)}propsWrap(t){return`<div class="inspector-panel">${t}</div>`}propsHeader(t,e,i){return`<div class="inspector-head">
            <span class="inspector-head-icon">${t}</span>
            <div class="min-w-0">
                <p class="inspector-head-title">${e}</p>
                <p class="inspector-head-sub">${i}</p>
            </div>
        </div>`}propsSection(t,e=""){return`<div class="inspector-section">
            <p class="inspector-section-title">${t}</p>
            ${e?`<p class="inspector-section-hint">${e}</p>`:""}
        </div>`}statRow(t){return`<div class="inspector-stat-row">${t.map(e=>`<span class="inspector-stat">
                <span class="inspector-stat-label">${e.label}</span>
                <span class="inspector-stat-value">${e.value}</span>
            </span>`).join("")}</div>`}numControl(t,e,i,n={}){const r=n.step??.1,o=n.min??0,a=n.max??100,l=n.unit??"m",c=n.slider!==!1,h=Ve(Number(i)||0,o,a),f=c?`<input type="range" data-prop="${t}" data-range-sync="${t}" value="${h}" step="${r}" min="${o}" max="${a}" class="inspector-range">`:"";return`<div class="inspector-control">
            <div class="inspector-control-head">
                <label class="inspector-control-label">${e}</label>
                <div class="inspector-num-wrap">
                    <input type="number" data-prop="${t}" value="${h}" step="${r}" min="${o}" max="${a}" class="inspector-num-input">
                    <span class="inspector-unit">${l}</span>
                </div>
            </div>
            ${f}
        </div>`}textControl(t,e,i,n={}){return`<div class="inspector-control inspector-control--text">
            <label class="inspector-control-label">${e}</label>
            <input type="text" data-prop="${t}" value="${i??""}" maxlength="${n.max??120}" class="inspector-text-input" placeholder="${n.placeholder??""}">
        </div>`}textAreaControl(t,e,i,n={}){const r=String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<div class="inspector-control inspector-control--text">
            <label class="inspector-control-label">${e}</label>
            <textarea data-prop="${t}" rows="${n.rows??3}" maxlength="${n.max??500}" class="inspector-text-input min-h-[4.5rem] resize-y" placeholder="${n.placeholder??""}">${r}</textarea>
        </div>`}colorControl(t,e,i){const n=typeof i=="number"?`#${i.toString(16).padStart(6,"0")}`:i!=null&&i.startsWith("#")?i:"#e5e7eb";return`<div class="inspector-color">
            <span class="inspector-control-label">${e}</span>
            <label class="inspector-color-swatch" style="--swatch:${n}">
                <input type="color" data-prop="${t}" value="${n}" class="inspector-color-input">
                <span class="inspector-color-hex">${n}</span>
            </label>
        </div>`}toggleControl(t,e,i){return`<label class="inspector-toggle">
            <span class="inspector-control-label">${e}</span>
            <input type="checkbox" data-prop="${t}" ${i?"checked":""} class="sr-only">
            <span class="inspector-toggle-track" aria-hidden="true"></span>
        </label>`}presetRow(t,e,i,n={}){const r={compact:"S",standard:"M",wide:"L",large:"L",...n};return`<div class="inspector-preset-row">${e.map(o=>`<button type="button" ${t}="${o}" class="inspector-preset-btn ${i===o?"inspector-preset-btn-active":""}" title="${o}">${r[o]||o}</button>`).join("")}</div>`}stylePickerGrid(t,e){return`<div class="inspector-style-grid">${Object.entries(t).map(([i,n])=>`<button type="button" data-prop-style="${i}" class="inspector-style-chip ${e===i?"inspector-style-chip-active":""}" title="${n.label}">
                    <span class="inspector-style-icon">${n.icon||"•"}</span>
                    <span class="inspector-style-name">${n.label}</span>
                </button>`).join("")}</div>`}roomPresetGrid(t){return`<div class="inspector-style-grid">${Object.entries(Ci).filter(([e])=>e!=="default").map(([e,i])=>{const n=`#${(i.color>>>0).toString(16).padStart(6,"0")}`;return`<button type="button" data-prop-preset="${e}" class="inspector-style-chip ${t===e?"inspector-style-chip-active":""}" title="${i.label}">
                    <span class="inspector-style-icon w-4 h-4 rounded-full border border-white/20" style="background:${n}"></span>
                    <span class="inspector-style-name">${i.label}</span>
                </button>`}).join("")}</div>`}rotateControls(){return this.canEdit?`<div class="inspector-rotate-row">
            <button type="button" data-action="rotate" class="inspector-icon-btn" title="Rotate -90°">↺</button>
            <span class="inspector-control-label">Rotation</span>
            <button type="button" data-action="rotate-cw" class="inspector-icon-btn" title="Rotate +90°">↻</button>
        </div>`:""}actionButtons(){return this.canEdit?`<div class="inspector-actions">
            <button type="button" data-action="duplicate" class="inspector-action-btn">Duplicate</button>
            <button type="button" data-action="delete" class="inspector-action-btn inspector-action-btn--danger">Delete</button>
        </div>`:""}colorField(t,e,i){return this.colorControl(e,t,i)}field(t,e,i,n={}){return n.text?this.textControl(e,t,i,n):this.numControl(e,t,i,n)}selectField(t,e,i,n){const r=n.map(([o,a])=>`<option value="${o}" ${String(i)===String(o)?"selected":""}>${a}</option>`).join("");return`<div class="inspector-control inspector-control--text">
            <label class="inspector-control-label">${t}</label>
            <select data-prop="${e}" class="inspector-select">${r}</select>
        </div>`}renderElementsList(){if(!this.listEl)return;const t=this.listEl.parentElement,e=this.getFloor(),i=[...e.walls.map(r=>({kind:"wall",id:r.id,label:`Wall · ${Na(r).toFixed(1)}m × ${(r.thickness||zn).toFixed(2)}m`})),...e.doors.map(r=>({kind:"door",id:r.id,label:`Door · ${Math.round((r.position||.5)*100)}% · ${r.width}m`})),...e.windows.map(r=>({kind:"window",id:r.id,label:`Window · ${Math.round((r.position||.5)*100)}%`})),...e.components.map(r=>{var o;return{kind:"component",id:r.id,label:((o=Ge[r.type])==null?void 0:o.label)||r.type}}),...e.smart_devices.map(r=>{var o,a;return{kind:"smart",id:r.id,label:`${((o=Qt[r.type])==null?void 0:o.icon)||"●"} ${((a=Qt[r.type])==null?void 0:a.label)||r.type}`}}),...e.labels.map(r=>({kind:"label",id:r.id,label:`Text · ${(r.text||"").split(`
`)[0].slice(0,32)||"Empty"}`})),...e.rooms.map(r=>({kind:"room",id:r.id,label:`Room · ${r.name||"Unnamed"}`}))],n=this.outlinerFilter?i.filter(r=>r.label.toLowerCase().includes(this.outlinerFilter)):i;this.outlinerCountEl&&(this.outlinerCountEl.textContent=String(i.length)),this.preserveScroll(t,()=>{if(!n.length){this.listEl.innerHTML=`<p class="studio-empty">${i.length?"No matches.":"No elements yet — place a kit or draw walls."}</p>`;return}this.listEl.innerHTML=n.map(r=>{var a;const o=((a=this.selected)==null?void 0:a.type)===r.kind&&this.selected.id===r.id;return`<button type="button" data-select="${r.kind}:${r.id}" class="${o?"studio-outliner-item-active":"studio-outliner-item"}">${r.label}</button>`}).join(""),this.listEl.querySelectorAll("[data-select]").forEach(r=>{r.addEventListener("click",()=>{const[o,a]=r.dataset.select.split(":");this.selectById(o,a),this.renderElementsList()})})})}resolveStyleKey(t,e){if(t[e])return e;const i=Object.entries(t).find(([,n])=>n.type===e);return(i==null?void 0:i[0])||Object.keys(t)[0]}guessOpeningSizePreset(t,e,i){const n=e[i];if(!n)return"standard";const r=t.width/n.width,o=t.height/n.height;return r<.92&&o<.98?"compact":r>1.08||o>1.05?"wide":"standard"}guessComponentSizePreset(t){const e=Ge[t.type];if(!e)return"standard";const i=(t.width/e.w+t.depth/e.d+t.height/e.h)/3;return i<.92?"compact":i>1.08?"large":"standard"}applyOpeningSizePreset(t){if(!this.selected||this.selected.type!=="door"&&this.selected.type!=="window")return;const e=this.getFloor(),i=this.selected.type==="door"?mi:$i,n=this.selected.type==="door"?e.doors.find(l=>l.id===this.selected.id):e.windows.find(l=>l.id===this.selected.id);if(!n)return;const r=this.resolveStyleKey(i,n.style||n.type),o=i[r],a={compact:[.85,.95],standard:[1,1],wide:[1.2,1.05]}[t]||[1,1];n.width=Math.round(o.width*a[0]*100)/100,n.height=Math.round(o.height*a[1]*100)/100,this.selected.type==="window"&&(n.sill=o.sill??n.sill),this.refreshScene()}applyComponentSizePreset(t){var o;if(((o=this.selected)==null?void 0:o.type)!=="component")return;const i=this.getFloor().components.find(a=>a.id===this.selected.id);if(!i)return;const n=Ge[i.type];if(!n)return;const r={compact:.85,standard:1,large:1.15}[t]||1;i.width=Math.round(n.w*r*100)/100,i.depth=Math.round(n.d*r*100)/100,i.height=Math.round(n.h*r*100)/100,this.refreshScene()}renderProperties(t=!0){if(!this.propsEl)return;if(!this.selected){this.propsEl.innerHTML=this.renderFloorImagePanel();return}const e=this.getFloor();if(this.selected.type==="wall"){const i=e.walls.find(o=>o.id===this.selected.id);if(!i)return;const n=Na(i).toFixed(2),r=i.thickness||zn;this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader("🧱","Wall","Drag cyan handles to move endpoints")}
                ${this.statRow([{label:"Length",value:`${n} m`},{label:"Height",value:`${i.height} m`},{label:"Thick",value:`${r} m`}])}
                ${this.propsSection("Dimensions")}
                ${this.numControl("height","Height",i.height,{step:.1,min:.5,max:6})}
                ${this.numControl("thickness","Thickness",r,{step:.05,min:.05,max:1})}
                <details class="inspector-advanced">
                    <summary>Placement</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl("from.x","Start X",i.from[0],{step:.1,min:-200,max:200})}
                        ${this.numControl("from.z","Start Z",i.from[1],{step:.1,min:-200,max:200})}
                        ${this.numControl("to.x","End X",i.to[0],{step:.1,min:-200,max:200})}
                        ${this.numControl("to.z","End Z",i.to[1],{step:.1,min:-200,max:200})}
                    </div>
                </details>
                ${this.actionButtons()}
            `);return}if(this.selected.type==="door"){const i=e.doors.find(a=>a.id===this.selected.id);if(!i)return;const n=this.resolveStyleKey(mi,i.style||i.type||"swing_modern"),r=mi[n],o=this.guessOpeningSizePreset(i,mi,n);this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader((r==null?void 0:r.icon)||"🚪",(r==null?void 0:r.label)||"Door","Drag along wall to reposition")}
                ${this.propsSection("Style")}
                ${this.stylePickerGrid(mi,n)}
                ${this.propsSection("Quick size","S · M · L presets")}
                ${this.presetRow("data-opening-size",["compact","standard","wide"],o,{compact:"S",standard:"M",wide:"L"})}
                ${this.propsSection("Dimensions")}
                ${this.numControl("width","Width",i.width,{step:.05,min:.5,max:3})}
                ${this.numControl("height","Height",i.height,{step:.05,min:1.5,max:3})}
                <details class="inspector-advanced">
                    <summary>More options</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl("position_pct","Along wall",Math.round((i.position||.5)*100),{step:1,min:5,max:95,unit:"%"})}
                        ${this.colorControl("frame_color","Frame",i.frame_color||"#ffffff")}
                        ${this.colorControl("color","Panel",i.color||"#8B6914")}
                    </div>
                </details>
                ${this.actionButtons()}
            `);return}if(this.selected.type==="window"){const i=e.windows.find(a=>a.id===this.selected.id);if(!i)return;const n=this.resolveStyleKey($i,i.style||i.type||"standard"),r=$i[n],o=this.guessOpeningSizePreset(i,$i,n);this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader((r==null?void 0:r.icon)||"🪟",(r==null?void 0:r.label)||"Window","Drag along wall to reposition")}
                ${this.propsSection("Style")}
                ${this.stylePickerGrid($i,n)}
                ${this.propsSection("Quick size","S · M · L presets")}
                ${this.presetRow("data-opening-size",["compact","standard","wide"],o,{compact:"S",standard:"M",wide:"L"})}
                ${this.propsSection("Dimensions")}
                ${this.numControl("width","Width",i.width,{step:.05,min:.4,max:4})}
                ${this.numControl("height","Height",i.height,{step:.05,min:.4,max:3})}
                ${this.numControl("sill","Sill height",i.sill??.9,{step:.05,min:0,max:2.5})}
                <details class="inspector-advanced">
                    <summary>More options</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl("position_pct","Along wall",Math.round((i.position||.5)*100),{step:1,min:5,max:95,unit:"%"})}
                        ${this.colorControl("frame_color","Frame",i.frame_color||"#ffffff")}
                    </div>
                </details>
                ${this.actionButtons()}
            `);return}if(this.selected.type==="component"){const i=e.components.find(a=>a.id===this.selected.id);if(!i)return;const n=Ge[i.type]||{},r=n.label||i.type,o=this.guessComponentSizePreset(i);this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader(n.icon||"📦",r,"Drag on floor to move")}
                ${this.statRow([{label:"W",value:`${i.width} m`},{label:"D",value:`${i.depth} m`},{label:"H",value:`${i.height} m`}])}
                ${this.propsSection("Quick size","S · M · L presets")}
                ${this.presetRow("data-component-size",["compact","standard","large"],o,{compact:"S",standard:"M",large:"L"})}
                ${this.propsSection("Dimensions")}
                ${this.numControl("width","Width",i.width,{step:.05,min:.1,max:8})}
                ${this.numControl("depth","Depth",i.depth,{step:.05,min:.1,max:8})}
                ${this.numControl("height","Height",i.height,{step:.05,min:.1,max:4})}
                ${this.rotateControls()}
                <details class="inspector-advanced">
                    <summary>Placement</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl("position.x","Position X",i.position[0],{step:.1,min:-200,max:200})}
                        ${this.numControl("position.z","Position Z",i.position[1],{step:.1,min:-200,max:200})}
                        ${this.numControl("rotation","Rotation",Math.round((i.rotation||0)*180/Math.PI),{step:15,min:0,max:360,unit:"°"})}
                        <button type="button" data-action="reset-size" class="inspector-action-btn w-full mt-1">Reset default size</button>
                    </div>
                </details>
                ${this.actionButtons()}
            `);return}if(this.selected.type==="smart"){const i=e.smart_devices.find(h=>h.id===this.selected.id);if(!i)return;const n=Qt[i.type]||{},r=dr(i.type,i),o=i.unit||fs(i.type),a=Lo(i),l=Math.round(r*a*1e3)/1e3,c=Yi(o)?"Length (m)":"Quantity";this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader(n.icon||"●",n.label||i.type,n.model||"Smart device")}
                ${this.statRow([{label:"Unit",value:Ro(o)},{label:"Line",value:de(l)}])}
                ${this.toggleControl("on","Power",i.on!==!1)}
                ${this.propsSection("Price (OMR)")}
                ${this.numControl("price",Yi(o)?"Price per 1 m":"Unit price",r,{step:.1,min:0,max:99999})}
                ${this.numControl("qty",c,a,{step:Yi(o)?.1:1,min:.001,max:99999})}
                ${this.propsSection("Placement")}
                ${this.numControl("position.x","Position X",i.position[0],{step:.1,min:-200,max:200})}
                ${this.numControl("position.z","Position Z",i.position[1],{step:.1,min:-200,max:200})}
                ${this.numControl("rotation","Rotation",Math.round((i.rotation||0)*180/Math.PI),{step:15,min:0,max:360,unit:"°"})}
                ${this.rotateControls()}
                ${this.actionButtons()}
            `);return}if(this.selected.type==="label"){const i=e.labels.find(n=>n.id===this.selected.id);if(!i)return;this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader("T","Text label","Shown on 2D plan · double-click to edit")}
                ${this.textAreaControl("text","Text",i.text||"",{placeholder:"Room name, dimensions, notes…",rows:4,max:500})}
                ${this.propsSection("Style")}
                ${this.numControl("size","Font size",i.size||14,{step:1,min:8,max:48,unit:"px"})}
                ${this.colorControl("color","Color",i.color||"#e2e8f0")}
                ${this.propsSection("Placement")}
                ${this.numControl("position.x","Position X",i.position[0],{step:.1,min:-200,max:200})}
                ${this.numControl("position.z","Position Z",i.position[1],{step:.1,min:-200,max:200})}
                ${this.actionButtons()}
            `);return}if(this.selected.type==="room"){const i=e.rooms.find(n=>n.id===this.selected.id);if(!i)return;this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader("🏠",i.name||"Room","Floor color & preset")}
                ${this.textControl("name","Name",i.name||"",{placeholder:"Living room"})}
                ${this.propsSection("Preset")}
                ${this.roomPresetGrid(i.preset||"default")}
                ${this.colorControl("color","Custom color",this.roomColor(i))}
            `)}}save(){var e;this.viewMode==="studio"?this.mapData.camera={position:this.camera.position.toArray(),target:this.controls.target.toArray()}:this.viewMode==="view360"&&(this.mapData.sim360={position:[this.camera.position.x,this.camera.position.z],yaw:this.look360.yaw,pitch:this.look360.pitch});const t=this.root.querySelector("#map_mode_input");t&&(t.value=this.viewMode==="plan2d"?"2d":this.viewMode==="view360"?"360":"3d"),this.persistQuotationMeta(),this.persistBenefitsMeta(),this.input&&(this.input.value=JSON.stringify(this.mapData)),this.widthInput&&(this.widthInput.value=String(Math.round(this.projectWidth)||20)),this.depthInput&&(this.depthInput.value=String(Math.round(this.projectDepth)||15)),(e=this.form)==null||e.submit()}renderFloorImagePanel(){const e=this.getFloor().underlay;if(!!!(e!=null&&e.url))return`<div class="inspector-empty">
                <span class="inspector-empty-icon">◎</span>
                <p>Import a floor image, then place components on it. Share a public URL when ready.</p>
                <button type="button" data-underlay-replace class="btn-secondary text-xs py-2 px-3 mt-3">Import floor image</button>
            </div>`;const n=Math.round((e.opacity??.9)*100),r=e.visible!==!1,o=this.numControl("opacity_pct","Opacity",n,{step:1,min:5,max:100,unit:"%"}).replaceAll("data-prop=","data-underlay-prop="),a=this.toggleControl("visible","Show image",r).replaceAll("data-prop=","data-underlay-prop=");return this.propsWrap(`
            ${this.propsHeader("🖼","Floor image","Background for this floor")}
            <div class="rounded-lg overflow-hidden border border-surface-700 bg-surface-950 mb-3">
                <img src="${e.url}" alt="" class="w-full max-h-28 object-contain">
            </div>
            ${this.propsSection("Display")}
            ${a}
            ${o}
            <div class="flex gap-2 mt-3">
                <button type="button" data-underlay-replace class="btn-secondary text-xs py-2 px-3 flex-1">Replace</button>
                <button type="button" data-underlay-remove class="btn-secondary text-xs py-2 px-3 text-rose-300">Remove</button>
            </div>
            <p class="text-[10px] text-surface-500 mt-3">Place furniture, devices, and labels on the image, then Save and Share a public URL.</p>
        `)}applyUnderlayProperty(t,e,i){if(!this.canEdit)return;const n=this.getFloor();if(n.underlay){if(t==="visible")n.underlay.visible=e===!0||e==="true"||e===1||e==="1";else if(t==="opacity"||t==="opacity_pct"){const r=Number(e),o=t==="opacity_pct"?r/100:r;n.underlay.opacity=Math.min(1,Math.max(.05,Number.isFinite(o)?o:.9))}this.renderPlan2d()}}removeFloorUnderlay(){var e;if(!this.canEdit)return;const t=this.getFloor();(e=t.underlay)!=null&&e.url&&window.confirm("Remove the floor image from this floor?")&&(delete t.underlay,this.renderPlan2d(),this.renderProperties(),this.setStatus("Floor image removed"))}openImportModal(){!this.canEdit||!this.importModal||(this.clearImportError(),this.setImportFile(null),this.importModal.classList.remove("hidden"),queueMicrotask(()=>{var t;return(t=this.importPasteZone)==null?void 0:t.focus()}))}isImportModalOpen(){return!!(this.importModal&&!this.importModal.classList.contains("hidden"))}isImportableImage(t){if(!t)return!1;const e=(t.type||"").toLowerCase(),i=(t.name||"").toLowerCase();return e.startsWith("image/")||/\.(jpe?g|png|webp|gif)$/i.test(i)}onImportPaste(t){var i,n;if(!this.isImportModalOpen()||(i=this.importSubmit)!=null&&i.disabled)return;const e=Array.from(((n=t.clipboardData)==null?void 0:n.items)||[]);for(const r of e)if(r.kind==="file"&&r.type.startsWith("image/")){const o=r.getAsFile();if(o){t.preventDefault(),this.setImportFile(o),this.clearImportError(),this.setStatus("Pasted floor image");return}}}setImportFile(t){var e,i;if(this._importPreviewUrl&&(URL.revokeObjectURL(this._importPreviewUrl),this._importPreviewUrl=null),this.importFile=t&&this.isImportableImage(t)?t:null,this.importImageInput){const n=new DataTransfer;this.importFile&&n.items.add(this.importFile),this.importImageInput.files=n.files}if(this.importSubmit&&(this.importSubmit.disabled=!this.importFile),!this.importFile){(e=this.importPreview)==null||e.classList.add("hidden"),this.importPreviewImg&&this.importPreviewImg.removeAttribute("src"),this.importPreviewName&&(this.importPreviewName.textContent=""),t&&this.showImportError("Only JPEG, PNG, WebP, or GIF images are supported.");return}this.clearImportError(),this._importPreviewUrl=URL.createObjectURL(this.importFile),this.importPreviewImg&&(this.importPreviewImg.src=this._importPreviewUrl),this.importPreviewName&&(this.importPreviewName.textContent=this.importFile.name),(i=this.importPreview)==null||i.classList.remove("hidden")}closeImportModal(){!this.importModal||this._importBusy||(this.importModal.classList.add("hidden"),this.clearImportError(),this.setImportFile(null))}clearImportError(){this.importError&&(this.importError.textContent="",this.importError.classList.add("hidden"))}showImportError(t){this.importError&&(this.importError.textContent=t,this.importError.classList.remove("hidden"))}setImportBusy(t){var e;this._importBusy=!!t,this.importSubmit&&(this.importSubmit.disabled=t||!this.importFile,this.importSubmit.textContent=t?"Uploading…":"Place on floor"),(e=this.importForm)==null||e.querySelectorAll("input, button").forEach(i=>{if(i!==this.importSubmit){if(i.hasAttribute("data-import-close")){i.disabled=t;return}i.type!=="submit"&&(i.disabled=t)}}),this.importPasteZone&&(this.importPasteZone.classList.toggle("pointer-events-none",t),this.importPasteZone.classList.toggle("opacity-60",t))}async submitFloorImage(){var i;if(!this.importUrl||!this.importFile){this.showImportError("Choose an image first.");return}const t=(i=document.querySelector('meta[name="csrf-token"]'))==null?void 0:i.content,e=new FormData;e.append("image",this.importFile),this.clearImportError(),this.setImportBusy(!0),this.setStatus("Uploading floor image…");try{const n=await fetch(this.importUrl,{method:"POST",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...t?{"X-CSRF-TOKEN":t}:{}},body:e,credentials:"same-origin"}),r=await n.json().catch(()=>({}));if(!n.ok){const o=r.errors?Object.values(r.errors).flat():[];throw new Error(r.message||o[0]||`Upload failed (${n.status})`)}if(!r.url)throw new Error("Upload succeeded but no image URL was returned.");this.applyFloorUnderlay(r.url),this.closeImportModalForced(),this.setStatus("Floor image placed — add components, then Save & Share")}catch(n){this.showImportError(n.message||"Upload failed."),this.setStatus("Floor image upload failed")}finally{this.setImportBusy(!1)}}applyFloorUnderlay(t){var n;const e=this.getFloor();let i=String(t||"");i.startsWith("/")?i=`${window.location.origin}${i}`:i.startsWith("//")&&(i=`${window.location.protocol}${i}`),e.underlay={url:i,opacity:.92,visible:!0,bounds:[0,0,this.projectWidth,this.projectDepth]},this.selected=null,this.viewMode!=="plan2d"?this.setViewMode("plan2d"):this.renderPlan2d(),this.renderProperties(),(n=this.plan2d)==null||n.fitToBounds(this.projectWidth,this.projectDepth)}closeImportModalForced(){var t;(t=this.importModal)==null||t.classList.add("hidden"),this.clearImportError(),this.setImportFile(null)}getQuotationServiceDefaults(){try{const t=localStorage.getItem(this.quotationDefaultsKey),e=t?JSON.parse(t):{};return{programming_price:Math.max(0,Number(e.programming_price)||0),installation_price:Math.max(0,Number(e.installation_price)||0),tva_pct:Math.min(100,Math.max(0,Number(e.tva_pct)||0)),notes:typeof e.notes=="string"?e.notes:""}}catch{return{programming_price:0,installation_price:0,tva_pct:0,notes:""}}}resolveQuotationDefault(t,e,i=0){const n=this.getQuotationServiceDefaults();if(e==="notes"){const r=typeof t.notes=="string"?t.notes:"";return r.trim()!==""?r:n.notes||""}return Object.prototype.hasOwnProperty.call(t,e)&&t[e]!==null&&t[e]!==void 0?t[e]:Object.prototype.hasOwnProperty.call(n,e)?n[e]:i}saveQuotationServiceDefaults(){var r,o,a,l;const t=Math.max(0,Number((r=this.quotationProgrammingInput)==null?void 0:r.value)||0),e=Math.max(0,Number((o=this.quotationInstallationInput)==null?void 0:o.value)||0),i=Math.min(100,Math.max(0,Number((a=this.quotationTvaInput)==null?void 0:a.value)||0)),n=((l=this.quotationNotesInput)==null?void 0:l.value)??"";if(localStorage.setItem(this.quotationDefaultsKey,JSON.stringify({programming_price:t,installation_price:e,tva_pct:i,notes:n})),this.persistQuotationMeta(),this.setStatus("Saved for next quotations: برمجة · تركيب · ضريبة · الشروط والأحكام"),this.quotationSaveDefaultsBtn){const c=this.quotationSaveDefaultsBtn.textContent;this.quotationSaveDefaultsBtn.textContent="Saved ✓",setTimeout(()=>{this.quotationSaveDefaultsBtn&&(this.quotationSaveDefaultsBtn.textContent=c||"Save for next quotations")},1600)}}openQuotationModal(){if(!this.quotationModal)return;const t=this.mapData.quotation||{},e=this.root.dataset.clientName||"",i=this.root.dataset.clientPhone||"",n=this.root.dataset.projectLocation||"";if(this.quotationClientInput&&(this.quotationClientInput.value=t.client||e||""),this.quotationPhoneInput&&(this.quotationPhoneInput.value=t.phone||i||""),this.quotationLocationInput&&(this.quotationLocationInput.value=t.location||n||""),this.quotationNotesInput&&(this.quotationNotesInput.value=this.resolveQuotationDefault(t,"notes","")),this.quotationProgrammingInput){const r=this.resolveQuotationDefault(t,"programming_price",0);this.quotationProgrammingInput.value=String(Number(r)||0)}if(this.quotationInstallationInput){const r=this.resolveQuotationDefault(t,"installation_price",0);this.quotationInstallationInput.value=String(Number(r)||0)}if(this.quotationDiscountInput&&(this.quotationDiscountInput.value=String(t.discount_pct??0)),this.quotationTvaInput){const r=Object.prototype.hasOwnProperty.call(t,"tva_pct")?t.tva_pct:this.getQuotationServiceDefaults().tva_pct;this.quotationTvaInput.value=String(Math.min(100,Math.max(0,Number(r)||0)))}this.renderQuotation(),this.quotationModal.classList.remove("hidden")}closeQuotationModal(){var t;this.persistQuotationMeta(),(t=this.quotationModal)==null||t.classList.add("hidden")}ensureBenefitsMeta(){(!this.mapData.benefits||typeof this.mapData.benefits!="object")&&(this.mapData.benefits={extra_expenses:[]}),Array.isArray(this.mapData.benefits.extra_expenses)||(this.mapData.benefits.extra_expenses=[])}persistBenefitsMeta(){this.ensureBenefitsMeta(),this.mapData.benefits={extra_expenses:this.mapData.benefits.extra_expenses.map(t=>({id:t.id||`exp_${Date.now()}`,name:String(t.name||"").trim()||"مصروف",price:Math.round(Math.max(0,Number(t.price)||0)*1e3)/1e3})).filter(t=>t.name!=="مصروف"||t.price>0)}}openBenefitsModal(){this.benefitsModal&&(this.ensureBenefitsMeta(),this.renderBenefits(),this.benefitsModal.classList.remove("hidden"))}closeBenefitsModal(){var t;this.persistBenefitsMeta(),(t=this.benefitsModal)==null||t.classList.add("hidden")}collectBenefitLines(){const t=new Map;for(const i of this.mapData.floors||[])for(const n of i.smart_devices||[]){const r=n.type,o=Qt[r]||{},a=Number(o.price),l=Number.isFinite(a)?a:dr(r,n),c=Math.max(0,Number(o.buy_price)||0),h=Lo(n),f=fs(r),d=`${r}::${c.toFixed(3)}::${l.toFixed(3)}`,m=t.get(d);m?m.qty+=h:t.set(d,{type:r,icon:o.icon||"●",name:o.label||r,buy:c,sell:l,qty:h,unit:f})}const e=new Map(Cs.map((i,n)=>[i,n]));return[...t.values()].map(i=>{const n=Math.round(i.buy*i.qty*1e3)/1e3,r=Math.round(i.sell*i.qty*1e3)/1e3;return{...i,buyTotal:n,sellTotal:r,benefit:Math.round((r-n)*1e3)/1e3}}).sort((i,n)=>(e.get(i.type)??999)-(e.get(n.type)??999)||i.sell-n.sell)}computeBenefitTotals(t){var m,g;const e=Math.round(t.reduce((x,p)=>x+p.buyTotal,0)*1e3)/1e3,i=Math.round(t.reduce((x,p)=>x+p.sellTotal,0)*1e3)/1e3,n=this.mapData.quotation||{},r=this.getQuotationServiceDefaults(),o=Math.max(0,Number(((m=this.quotationProgrammingInput)==null?void 0:m.value)??n.programming_price??r.programming_price)||0),a=Math.max(0,Number(((g=this.quotationInstallationInput)==null?void 0:g.value)??n.installation_price??r.installation_price)||0);this.ensureBenefitsMeta();const l=this.mapData.benefits.extra_expenses||[],c=Math.round(l.reduce((x,p)=>x+Math.max(0,Number(p.price)||0),0)*1e3)/1e3,h=Math.round((e+c)*1e3)/1e3,f=Math.round((i+o+a)*1e3)/1e3,d=Math.round((f-h)*1e3)/1e3;return{devicesBuy:e,devicesSell:i,programming:o,installation:a,expensesTotal:c,totalBuy:h,totalSell:f,totalBenefit:d,itemCount:t.reduce((x,p)=>x+p.qty,0)}}renderBenefitsTotalsOnly(){if(!this.benefitsStatsEl||!this.benefitsTotalsEl)return;const t=this.collectBenefitLines(),e=this.computeBenefitTotals(t);this.paintBenefitsStats(e),this.paintBenefitsTotals(e)}paintBenefitsStats(t){this.benefitsStatsEl&&(this.benefitsStatsEl.innerHTML=`
            <div class="rounded-xl border border-surface-700 bg-surface-800/40 p-3">
                <p class="text-[10px] uppercase tracking-wide text-surface-500 mb-1">Bought · الشراء</p>
                <p class="text-lg font-semibold font-mono text-white">${de(t.totalBuy)}</p>
            </div>
            <div class="rounded-xl border border-surface-700 bg-surface-800/40 p-3">
                <p class="text-[10px] uppercase tracking-wide text-surface-500 mb-1">Sell · البيع</p>
                <p class="text-lg font-semibold font-mono text-emerald-300">${de(t.totalSell)}</p>
            </div>
            <div class="rounded-xl border border-brand-500/30 bg-brand-500/10 p-3">
                <p class="text-[10px] uppercase tracking-wide text-brand-300/80 mb-1">Benefit · الربح</p>
                <p class="text-lg font-semibold font-mono ${t.totalBenefit>=0?"text-brand-300":"text-rose-300"}">${de(t.totalBenefit)}</p>
            </div>`)}paintBenefitsTotals(t){this.benefitsTotalsEl&&(this.benefitsTotalsEl.innerHTML=`
            <div class="flex justify-between text-sm text-surface-300">
                <span>Devices buy</span>
                <span class="font-mono">${de(t.devicesBuy)}</span>
            </div>
            <div class="flex justify-between text-sm text-surface-300">
                <span>Devices sell</span>
                <span class="font-mono">${de(t.devicesSell)}</span>
            </div>
            ${t.programming>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر البرمجة / Programming</span>
                    <span class="font-mono">${de(t.programming)}</span>
                </div>
            `:""}
            ${t.installation>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر التركيب / Installation</span>
                    <span class="font-mono">${de(t.installation)}</span>
                </div>
            `:""}
            ${t.expensesTotal>0?`
                <div class="flex justify-between text-sm text-rose-300/90">
                    <span>مصاريف إضافية</span>
                    <span class="font-mono">− ${de(t.expensesTotal)}</span>
                </div>
            `:""}
            <div class="pt-2 mt-1 border-t border-surface-700 flex justify-between text-base font-semibold text-white">
                <span>Benefit · الربح</span>
                <span class="font-mono ${t.totalBenefit>=0?"text-brand-300":"text-rose-300"}">${de(t.totalBenefit)}</span>
            </div>`)}renderBenefits(){if(!this.benefitsLinesEl||!this.benefitsExpensesEl)return;this.ensureBenefitsMeta();const t=this.collectBenefitLines(),e=this.computeBenefitTotals(t);t.length?this.benefitsLinesEl.innerHTML=`
                <table class="quotation-table w-full text-left">
                    <thead>
                        <tr class="text-[10px] uppercase tracking-wide text-surface-500 border-b border-surface-700 bg-surface-800/60">
                            <th class="px-3 py-2 font-medium">Item</th>
                            <th class="px-3 py-2 font-medium text-center">Qty</th>
                            <th class="px-3 py-2 font-medium text-right">Buy</th>
                            <th class="px-3 py-2 font-medium text-right">Sell</th>
                            <th class="px-3 py-2 font-medium text-right">Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${t.map(n=>`
                            <tr class="border-b border-surface-800/80 text-sm text-surface-200">
                                <td class="px-3 py-2.5">
                                    <span class="inline-flex items-center gap-2">
                                        <span aria-hidden="true">${n.icon}</span>
                                        <span>${n.name}</span>
                                    </span>
                                </td>
                                <td class="px-3 py-2.5 text-center">${n.qty}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs">${de(n.buyTotal)}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs">${de(n.sellTotal)}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs text-brand-300">${de(n.benefit)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>`:this.benefitsLinesEl.innerHTML=`
                <div class="p-6 text-center text-sm text-surface-400">
                    No devices placed yet. Place smart components on the map to calculate benefits.
                </div>`;const i=this.mapData.benefits.extra_expenses;i.length?this.benefitsExpensesEl.innerHTML=i.map((n,r)=>`
                <div class="flex flex-wrap gap-2 items-center" data-expense-index="${r}">
                    <input type="text" data-field="name" value="${this.escapeHtml(n.name||"")}" placeholder="اسم المصروف"
                        class="flex-1 min-w-[140px] rounded-lg border-surface-700 bg-surface-800 text-sm text-white">
                    <input type="number" data-field="price" min="0" step="0.001" value="${Number(n.price)||0}"
                        class="w-32 rounded-lg border-surface-700 bg-surface-800 text-sm text-white font-mono">
                    <button type="button" data-expense-remove="${r}" class="text-xs text-rose-400 hover:text-rose-300 px-2">Remove</button>
                </div>
            `).join(""):this.benefitsExpensesEl.innerHTML=`
                <p class="text-xs text-surface-500">No extra expenses yet. Click + Add.</p>`,this.paintBenefitsStats(e),this.paintBenefitsTotals(e)}persistQuotationMeta(){var t,e,i,n,r,o,a,l,c,h,f,d;this.mapData.quotation={client:((e=(t=this.quotationClientInput)==null?void 0:t.value)==null?void 0:e.trim())||"",phone:((n=(i=this.quotationPhoneInput)==null?void 0:i.value)==null?void 0:n.trim())||"",location:((o=(r=this.quotationLocationInput)==null?void 0:r.value)==null?void 0:o.trim())||"",notes:((l=(a=this.quotationNotesInput)==null?void 0:a.value)==null?void 0:l.trim())||"",programming_price:Math.max(0,Number((c=this.quotationProgrammingInput)==null?void 0:c.value)||0),installation_price:Math.max(0,Number((h=this.quotationInstallationInput)==null?void 0:h.value)||0),discount_pct:Number((f=this.quotationDiscountInput)==null?void 0:f.value)||0,tva_pct:Number((d=this.quotationTvaInput)==null?void 0:d.value)||0}}collectQuotationLines(){var i;const t=new Map;for(const n of this.mapData.floors||[])for(const r of n.smart_devices||[]){const o=r.type,a=Number((i=Qt[o])==null?void 0:i.price),l=Number.isFinite(a)?a:dr(o,r),c=Lo(r),h=fs(o),f=`${o}::${l.toFixed(3)}`,d=t.get(f);if(d)d.qty+=c;else{const m=Qt[o]||{};t.set(f,{type:o,icon:m.icon||"●",name:m.label||o,unit:l,qty:c,uom:h})}}const e=new Map(Cs.map((n,r)=>[n,r]));return[...t.values()].map(n=>({...n,total:Math.round(n.unit*n.qty*1e3)/1e3})).sort((n,r)=>(e.get(n.type)??999)-(e.get(r.type)??999)||n.unit-r.unit)}computeQuotationTotals(t){var d,m,g,x;const e=t.reduce((p,u)=>p+u.total,0),i=Math.max(0,Number((d=this.quotationProgrammingInput)==null?void 0:d.value)||0),n=Math.max(0,Number((m=this.quotationInstallationInput)==null?void 0:m.value)||0),r=Math.round((e+i+n)*1e3)/1e3,o=Math.min(100,Math.max(0,Number((g=this.quotationDiscountInput)==null?void 0:g.value)||0)),a=Math.min(100,Math.max(0,Number((x=this.quotationTvaInput)==null?void 0:x.value)||0)),l=Math.round(r*(o/100)*1e3)/1e3,c=Math.round((r-l)*1e3)/1e3,h=Math.round(c*(a/100)*1e3)/1e3,f=Math.round((c+h)*1e3)/1e3;return{devicesSubtotal:e,programming:i,installation:n,subtotal:r,discountPct:o,discountAmount:l,afterDiscount:c,tvaPct:a,tvaAmount:h,total:f,itemCount:t.reduce((p,u)=>p+u.qty,0)}}renderQuotation(){var n,r;if(!this.quotationLinesEl||!this.quotationTotalsEl)return;this.persistQuotationMeta();const t=this.collectQuotationLines(),e=this.computeQuotationTotals(t),i=this.root.dataset.projectName||((r=(n=this.root.querySelector(".studio-topbar-title"))==null?void 0:n.textContent)==null?void 0:r.trim())||"Project";!t.length&&e.programming<=0&&e.installation<=0?this.quotationLinesEl.innerHTML=`
                <div class="p-6 text-center text-sm text-surface-400">
                    No devices placed yet. Add cameras, sensors, network gear… then open Quotation again.
                </div>`:t.length?this.quotationLinesEl.innerHTML=`
                <table class="quotation-table w-full text-left">
                    <thead>
                        <tr class="text-[10px] uppercase tracking-wide text-surface-500 border-b border-surface-700 bg-surface-800/60">
                            <th class="px-3 py-2 font-medium">Item</th>
                            <th class="px-3 py-2 font-medium text-center">Qty</th>
                            <th class="px-3 py-2 font-medium text-right">Unit</th>
                            <th class="px-3 py-2 font-medium text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${t.map(o=>`
                            <tr class="border-b border-surface-800/80 text-sm text-surface-200">
                                <td class="px-3 py-2.5">
                                    <span class="inline-flex items-center gap-2">
                                        <span aria-hidden="true">${o.icon}</span>
                                        <span>${o.name}</span>
                                    </span>
                                </td>
                                <td class="px-3 py-2.5 text-center">${Number(o.qty).toFixed(Yi(o.uom)?3:0)} ${Ro(o.uom||"piece")}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs">${de(o.unit)}${Yi(o.uom)?'<span class="text-surface-500">/m</span>':""}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs text-white">${de(o.total)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>`:this.quotationLinesEl.innerHTML=`
                <div class="p-4 text-center text-xs text-surface-500">
                    No devices on map — totals include programming / installation only.
                </div>`,this.quotationTotalsEl.innerHTML=`
            <div class="flex justify-between text-xs text-surface-400">
                <span>${i}</span>
                <span>${e.itemCount} item(s)</span>
            </div>
            <div class="flex justify-between text-sm text-surface-300">
                <span>Devices · الأجهزة</span>
                <span class="font-mono">${de(e.devicesSubtotal)}</span>
            </div>
            ${e.programming>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر البرمجة / Programming</span>
                    <span class="font-mono">${de(e.programming)}</span>
                </div>
            `:""}
            ${e.installation>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر التركيب / Installation</span>
                    <span class="font-mono">${de(e.installation)}</span>
                </div>
            `:""}
            <div class="flex justify-between text-sm text-surface-300">
                <span>Subtotal</span>
                <span class="font-mono">${de(e.subtotal)}</span>
            </div>
            ${e.discountPct>0?`
                <div class="flex justify-between text-sm text-amber-300/90">
                    <span>Discount (${e.discountPct}%)</span>
                    <span class="font-mono">− ${de(e.discountAmount)}</span>
                </div>
            `:""}
            ${e.tvaPct>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>TVA / VAT (${e.tvaPct}%)</span>
                    <span class="font-mono">${de(e.tvaAmount)}</span>
                </div>
            `:""}
            <div class="pt-2 mt-1 border-t border-surface-700 flex justify-between text-base font-semibold text-white">
                <span>Total · الإجمالي</span>
                <span class="font-mono text-brand-300">${de(e.total)}</span>
            </div>
            <p class="text-[10px] text-surface-500 pt-1 flex items-center gap-1.5">
                Amounts in Omani Rial
                <span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask:url('${window.location.origin}/images/omr-symbol.png')"></span>
            </p>
        `}printQuotation(){var A,T,R,_,y,E,C,L,k,W;this.persistQuotationMeta();const t=this.collectQuotationLines(),e=this.computeQuotationTotals(t),i=this.escapeHtml(((T=(A=this.quotationClientInput)==null?void 0:A.value)==null?void 0:T.trim())||"—"),n=this.escapeHtml(((_=(R=this.quotationPhoneInput)==null?void 0:R.value)==null?void 0:_.trim())||"—"),r=this.escapeHtml(((E=(y=this.quotationLocationInput)==null?void 0:y.value)==null?void 0:E.trim())||"—"),o=this.escapeHtml(((L=(C=this.quotationNotesInput)==null?void 0:C.value)==null?void 0:L.trim())||""),a=this.escapeHtml(this.root.dataset.projectName||((W=(k=this.root.querySelector(".studio-topbar-title"))==null?void 0:k.textContent)==null?void 0:W.trim())||"Project"),l=new Date().toLocaleDateString("en-GB"),c=`QT-${Date.now().toString().slice(-8)}`,h=`${window.location.origin}/images/afaq-smart-logo.png`,f=`${window.location.origin}/images/omr-symbol-ink.png`,d=`${window.location.origin}/images/omr-symbol-navy.png`,m=this.escapeHtml(this.root.dataset.termsUrl||`${window.location.origin}/terms`),g="شركة الأفاق للبيوت الذكية",x="afaq.smart",p="بيوت ذكية .. حياة أسهل",u=U=>Lc(U,f),b=U=>Lc(U,d),w=t.length?t.map((U,q)=>`
                <tr>
                    <td class="num">${q+1}</td>
                    <td>
                        <div class="item-cell">
                            <span class="item-icon">${U.icon}</span>
                            <span>${this.escapeHtml(U.name)}</span>
                        </div>
                    </td>
                    <td class="center">${Number(U.qty).toFixed(Yi(U.uom)?3:0)} ${Ro(U.uom||"piece")}</td>
                    <td class="right mono">${u(U.unit)}${Yi(U.uom)?" /m":""}</td>
                    <td class="right mono strong">${u(U.total)}</td>
                </tr>`).join(""):'<tr><td colspan="5" class="empty">No devices on this map yet</td></tr>',M=`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<title>عرض سعر — ${g}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --navy: #0b2a4a;
    --cyan: #00b4d8;
    --ink: #0f172a;
    --muted: #64748b;
    --line: #e2e8f0;
    --soft: #f8fafc;
    --card: #ffffff;
  }
  @page { margin: 12mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: var(--ink);
    background: #fff;
    font-family: "Manrope", "Cairo", system-ui, sans-serif;
  }
  .sheet {
    max-width: 820px;
    margin: 0 auto;
    padding: 28px 32px 36px;
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 22px;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(90deg, var(--navy), var(--cyan)) 1;
    margin-bottom: 22px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .brand img {
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 8px 24px rgba(11, 42, 74, 0.12);
  }
  .brand-text h1 {
    margin: 0;
    font-family: "Cairo", "Manrope", sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: var(--navy);
    letter-spacing: 0;
    line-height: 1.35;
  }
  .brand-text .en {
    margin-top: 2px;
    font-size: 13px;
    font-weight: 700;
    color: var(--cyan);
  }
  .brand-text .tag {
    margin-top: 4px;
    font-family: "Cairo", sans-serif;
    font-size: 12px;
    color: var(--muted);
  }
  .doc-badge {
    text-align: left;
    min-width: 180px;
  }
  .doc-badge .label {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(11,42,74,0.08), rgba(0,180,216,0.14));
    color: var(--navy);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .doc-badge h2 {
    margin: 10px 0 0;
    font-size: 28px;
    font-weight: 800;
    color: var(--navy);
  }
  .doc-badge p {
    margin: 4px 0 0;
    font-size: 12px;
    color: var(--muted);
  }
  .meta-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 14px;
    margin-bottom: 22px;
  }
  .meta-card {
    background: var(--soft);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 14px 16px;
  }
  .meta-card .k {
    font-size: 11px;
    color: var(--muted);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .meta-card .v {
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 16px;
    margin: 8px 0 18px;
  }
  thead th {
    background: linear-gradient(90deg, var(--navy), #12507a 55%, var(--cyan));
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 12px 12px;
    text-align: right;
  }
  thead th.center, td.center { text-align: center; }
  thead th.right, td.right { text-align: left; }
  thead th.num, td.num { text-align: center; width: 44px; }
  tbody td {
    padding: 12px;
    border-top: 1px solid var(--line);
    font-size: 13px;
    vertical-align: middle;
  }
  tbody tr:nth-child(even) td { background: #fbfdff; }
  .item-cell { display: flex; align-items: center; gap: 10px; }
  .item-icon {
    width: 30px; height: 30px; border-radius: 9px;
    display: inline-flex; align-items: center; justify-content: center;
    background: rgba(0,180,216,0.1); font-size: 15px;
  }
  .mono { font-variant-numeric: tabular-nums; font-family: "Manrope", monospace; }
  .strong { font-weight: 700; }
  .empty { text-align: center; color: var(--muted); padding: 28px !important; }
  .bottom {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    align-items: start;
  }
  .note-box {
    border: 1px dashed #cbd5e1;
    border-radius: 16px;
    padding: 14px 16px;
    background: #fff;
    min-height: 110px;
  }
  .note-box .k {
    font-size: 11px;
    font-weight: 800;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .note-box .v {
    font-size: 13px;
    color: var(--ink);
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .totals {
    max-width: 360px;
    margin-inline-start: auto;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--line);
    background: var(--card);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  }
  .totals .row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 11px 16px;
    font-size: 13px;
    border-bottom: 1px solid var(--line);
  }
  .totals .row span:last-child { font-weight: 700; font-variant-numeric: tabular-nums; }
  .totals .row.muted { color: var(--muted); }
  .totals .row.discount { color: #b45309; background: #fffbeb; }
  .totals .row.grand {
    border-bottom: 0;
    background: linear-gradient(90deg, var(--navy), #12507a 50%, var(--cyan));
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    padding: 16px;
  }
  .footer {
    margin-top: 28px;
    padding-top: 14px;
    border-top: 1px solid var(--line);
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: var(--muted);
    font-size: 11px;
  }
  .footer strong { color: var(--navy); }
  .accept {
    margin-top: 26px;
    padding: 16px 18px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--soft);
  }
  .accept h3 {
    margin: 0 0 8px;
    font-size: 13px;
    font-weight: 800;
    color: var(--navy);
  }
  .accept p {
    margin: 0;
    font-size: 12px;
    line-height: 1.65;
    color: var(--ink);
  }
  .accept a {
    color: var(--cyan);
    font-weight: 700;
    text-decoration: underline;
    word-break: break-all;
  }
  .accept-signs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
  }
  .sign-box {
    min-height: 78px;
    border-top: 1px solid #94a3b8;
    padding-top: 8px;
    font-size: 11px;
    color: var(--muted);
  }
  .sign-box strong {
    display: block;
    color: var(--navy);
    font-size: 12px;
    margin-bottom: 4px;
  }
  .omr-amount {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    color: var(--ink);
  }
  .omr-symbol {
    width: 18px;
    height: 18px;
    object-fit: contain;
    flex-shrink: 0;
    display: inline-block;
    vertical-align: middle;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .totals .row.grand .omr-amount { color: #fff; }
  .totals .row.grand .omr-symbol {
    filter: brightness(0) invert(1);
  }
  @media print {
    .sheet { padding: 0; }
    .totals { box-shadow: none; }
    .omr-symbol { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>
  <div class="sheet">
    <header class="hero">
      <div class="brand">
        <img src="${h}" alt="${x}" />
        <div class="brand-text">
          <h1>${g}</h1>
          <div class="en">${x}</div>
          <div class="tag">${p}</div>
        </div>
      </div>
      <div class="doc-badge">
        <span class="label">Quotation / عرض سعر</span>
        <h2>Invoice</h2>
        <p>${c}<br>${l}</p>
      </div>
    </header>

    <section class="meta-grid">
      <div class="meta-card">
        <div class="k">اسم العميل / Client</div>
        <div class="v">${i}</div>
        <div class="k" style="margin-top:10px">رقم الهاتف / Phone</div>
        <div class="v">${n}</div>
      </div>
      <div class="meta-card">
        <div class="k">المشروع / Project</div>
        <div class="v">${a}</div>
        <div class="k" style="margin-top:10px">مكان المشروع / Location</div>
        <div class="v">${r}</div>
      </div>
    </section>

    <table>
      <thead>
        <tr>
          <th class="num">#</th>
          <th>الصنف / Item</th>
          <th class="center">الكمية / Qty</th>
          <th class="right">السعر / Unit</th>
          <th class="right">الإجمالي / Total</th>
        </tr>
      </thead>
      <tbody>${w}</tbody>
    </table>

    <section class="bottom">
      <div class="totals">
        <div class="row muted"><span>الأجهزة / Devices</span><span>${u(e.devicesSubtotal)}</span></div>
        ${e.programming>0?`<div class="row"><span>سعر البرمجة / Programming</span><span>${u(e.programming)}</span></div>`:""}
        ${e.installation>0?`<div class="row"><span>سعر التركيب / Installation</span><span>${u(e.installation)}</span></div>`:""}
        <div class="row muted"><span>المجموع الفرعي / Subtotal</span><span>${u(e.subtotal)}</span></div>
        ${e.discountPct>0?`<div class="row discount"><span>الخصم / Discount (${e.discountPct}%)</span><span>− ${u(e.discountAmount)}</span></div>`:""}
        ${e.tvaPct>0?`<div class="row"><span>الضريبة / TVA (${e.tvaPct}%)</span><span>${b(e.tvaAmount)}</span></div>`:""}
        <div class="row grand"><span>الإجمالي / Total</span><span>${u(e.total)}</span></div>
      </div>
      <div class="note-box">
        <div class="k">ملاحظات / الشروط والأحكام · Notes / Terms &amp; Conditions</div>
        <div class="v">${o||"—"}</div>
      </div>
    </section>

    <section class="accept">
      <h3>الموافقة على الشروط والأحكام / Acceptance of Terms &amp; Conditions</h3>
      <p>
        بالتوقيع أدناه، يقر العميل بأنه اطلع على الشروط والأحكام ووافق عليها، وأن عرض السعر هذا ملزم وفق البنود الواردة فيه.
        By signing below, the client confirms they have read and accepted the Terms &amp; Conditions, and that this quotation is binding as stated.
      </p>
      <p style="margin-top:8px">
        رابط الشروط والأحكام / Terms link:
        <a href="${m}" target="_blank" rel="noopener">${m}</a>
      </p>
      <div class="accept-signs">
        <div class="sign-box">
          <strong>توقيع العميل / Client signature</strong>
          الاسم / Name: ____________________________<br>
          التاريخ / Date: ____________________________
        </div>
        <div class="sign-box">
          <strong>توقيع الشركة / Company signature</strong>
          الاسم / Name: ____________________________<br>
          التاريخ / Date: ____________________________
        </div>
      </div>
    </section>

    <footer class="footer">
      <div><strong>${g}</strong> · ${x}</div>
      <div class="omr-amount">العملة: <img class="omr-symbol" src="${f}" alt="OMR" width="16" height="16"> ريال عماني</div>
    </footer>
  </div>
</body>
</html>`;this.printHtmlDocument(M),this.setStatus("Print dialog opened for quotation invoice")}escapeHtml(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}printHtmlDocument(t){var c;let e=document.getElementById("quotation-print-frame");e||(e=document.createElement("iframe"),e.id="quotation-print-frame",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(e));const i=e.contentDocument||((c=e.contentWindow)==null?void 0:c.document);if(!i||!e.contentWindow){const h=new Blob([t],{type:"text/html"}),f=URL.createObjectURL(h),d=window.open(f,"_blank");if(!d){this.setStatus("Pop-up blocked — allow pop-ups to print the invoice"),URL.revokeObjectURL(f);return}const m=()=>URL.revokeObjectURL(f);d.addEventListener("load",()=>{d.focus(),d.print(),setTimeout(m,1e3)}),setTimeout(()=>{try{d.focus(),d.print()}catch{}setTimeout(m,1500)},400);return}i.open(),i.write(t),i.close();const n=()=>{try{e.contentWindow.focus(),e.contentWindow.print()}catch{this.setStatus("Could not open print dialog")}},o=Array.from(i.images||[]).filter(h=>!h.complete);if(!o.length){setTimeout(n,120);return}let a=o.length;const l=()=>{a-=1,a<=0&&setTimeout(n,80)};o.forEach(h=>{h.addEventListener("load",l,{once:!0}),h.addEventListener("error",l,{once:!0})}),setTimeout(n,1500)}applyLiveMap(t){if(!(t!=null&&t.map_data))return;const e=this.camera.position.x,i=this.camera.position.z,n=this.look360.yaw,r=this.look360.pitch,o=this.activeFloorIndex,a=this.viewMode==="view360";if(this.mapData=t.map_data,this.projectWidth=Number(t.width)||this.projectWidth,this.projectDepth=Number(t.depth)||this.projectDepth,this.root.dataset.width=String(this.projectWidth),this.root.dataset.depth=String(this.projectDepth),this.normalizeMapData(),this.activeFloorIndex=Ve(o,0,this.mapData.floors.length-1),this.mapData.active_floor=this.activeFloorIndex,this.renderFloorSwitcher(),this.viewMode==="plan2d"?this.renderPlan2d():this.rebuildScene(),a){const l=this.canWalkTo(e,i),[c,h]=l?[e,i]:this.findWalkableSpawn(e,i);this.camera.position.set(c,this.eyeHeight,h),this.look360.yaw=n,this.look360.pitch=r,this.apply360Rotation(),this.applySceneLighting(!0),this.updateRoomAutomation()}}startLiveSync(){if(!this.liveUrl)return;const t=async()=>{try{const e=await fetch(this.liveUrl,{headers:{Accept:"application/json"},credentials:"same-origin"});if(!e.ok)return;const i=await e.json(),n=String(i.updated_at||"");n&&n!==this.liveRevision&&(this.liveRevision=n,this.applyLiveMap(i),this.setStatus("Home updated — latest design loaded"))}catch{}};t(),this.liveSyncTimer=setInterval(t,15e3)}onResize(){var i;const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.viewMode!=="plan2d"&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)),(i=this.plan2d)==null||i.resize(t,e),this.viewMode==="plan2d"&&this.renderPlan2d()}animate(){if(requestAnimationFrame(()=>this.animate()),this.viewMode==="plan2d")return;const t=this.clock.getDelta();this.viewMode==="studio"?this.controls.update():this.viewMode==="view360"&&(document.pointerLockElement===this.renderer.domElement&&(this.look360.yaw=this.camera.rotation.y,this.look360.pitch=this.camera.rotation.x),this.updateFirstPerson(t)),this.renderer.render(this.scene,this.camera)}}function Oc(){const s=document.getElementById("map-editor-root");s&&!s.dataset.initialized&&(s.dataset.initialized="true",new T_(s))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oc):Oc();
