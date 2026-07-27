/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vn={ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uh=0,ll=1,Fh=2,ur=1,Oh=2,us=3,Qi=0,We=1,ti=2,Di=0,Wn=1,cl=2,hl=3,dl=4,Bh=5,an=100,kh=101,zh=102,Hh=103,Gh=104,Vh=200,Wh=201,Xh=202,qh=203,Lo=204,Do=205,$h=206,Yh=207,Kh=208,Zh=209,Jh=210,Qh=211,jh=212,td=213,ed=214,Io=0,No=1,Uo=2,Yn=3,Fo=4,Oo=5,Bo=6,ko=7,Nc=0,id=1,nd=2,li=0,Uc=1,Fc=2,Oc=3,vr=4,Bc=5,kc=6,zc=7,Hc=300,dn=301,Kn=302,zr=303,Hr=304,Lr=306,zo=1e3,Li=1001,Ho=1002,De=1003,sd=1004,Ls=1005,Fe=1006,Gr=1007,cn=1008,Ke=1009,Gc=1010,Vc=1011,ys=1012,Ra=1013,Mi=1014,xi=1015,Ui=1016,La=1017,Da=1018,Ms=1020,Wc=35902,Xc=35899,qc=1021,$c=1022,ai=1023,Fi=1026,hn=1027,Yc=1028,Ia=1029,un=1030,Na=1031,Ua=1033,fr=33776,pr=33777,mr=33778,gr=33779,Go=35840,Vo=35841,Wo=35842,Xo=35843,qo=36196,$o=37492,Yo=37496,Ko=37488,Zo=37489,yr=37490,Jo=37491,Qo=37808,jo=37809,ta=37810,ea=37811,ia=37812,na=37813,sa=37814,ra=37815,oa=37816,aa=37817,la=37818,ca=37819,ha=37820,da=37821,ua=36492,fa=36494,pa=36495,ma=36283,ga=36284,Mr=36285,_a=36286,rd=3200,xa=0,od=1,Zi="",je="srgb",Sr="srgb-linear",br="linear",Qt="srgb",xn=7680,ul=519,ad=512,ld=513,cd=514,Fa=515,hd=516,dd=517,Oa=518,ud=519,va=35044,fl="300 es",vi=2e3,Ss=2001;function fd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pd(){const s=Er("canvas");return s.style.display="block",s}const pl={};function wr(...s){const t="THREE."+s.shift();console.log(t,...s)}function Kc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=Kc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=Kc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Xn(...s){const t=s.join(" ");t in pl||(pl[t]=!0,Dt(...s))}function md(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const gd={[Io]:No,[Uo]:Bo,[Fo]:ko,[Yn]:Oo,[No]:Io,[Bo]:Uo,[ko]:Fo,[Oo]:Yn};class tn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,ya=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function _d(s,t){return(s%t+t)%t}function Vr(s,t,e){return(1-e)*s+e*t}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xd={DEG2RAD:_r},Ya=class Ya{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ya.prototype.isVector2=!0;let ot=Ya;class ji{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||l!==d||c!==m||h!==g){let p=l*d+c*m+h*g+f*v;p<0&&(d=-d,m=-m,g=-g,v=-v,p=-p);let u=1-a;if(p<.9995){const b=Math.acos(p),w=Math.sin(b);u=Math.sin(u*b)/w,a=Math.sin(a*b)/w,l=l*u+d*a,c=c*u+m*a,h=h*u+g*a,f=f*u+v*a}else{l=l*u+d*a,c=c*u+m*a,h=h*u+g*a,f=f*u+v*a;const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*m-c*d,t[e+1]=l*g+h*d+c*f-a*m,t[e+2]=c*g+h*m+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),f=a(r/2),d=l(i/2),m=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-n)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ka=class Ka{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=n+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ka.prototype.isVector3=!0;let D=Ka;const Wr=new D,ml=new ji,Za=class Za{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=n[0],p=n[3],u=n[6],b=n[1],w=n[4],M=n[7],A=n[2],T=n[5],R=n[8];return r[0]=o*v+a*b+l*A,r[3]=o*p+a*w+l*T,r[6]=o*u+a*M+l*R,r[1]=c*v+h*b+f*A,r[4]=c*p+h*w+f*T,r[7]=c*u+h*M+f*R,r[2]=d*v+m*b+g*A,r[5]=d*p+m*w+g*T,r[8]=d*u+m*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*f+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(n*c-h*i)*v,t[2]=(a*i-n*o)*v,t[3]=d*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-a*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return Xn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return Xn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Za.prototype.isMatrix3=!0;let Ut=Za;const Xr=new Ut,gl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){const s={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(n.r=Ni(n.r),n.g=Ni(n.g),n.b=Ni(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(n.r=qn(n.r),n.g=qn(n.g),n.b=qn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zi?br:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Xn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Xn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Sr]:{primaries:t,whitePoint:i,transfer:br,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:Qt,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),s}const Xt=vd();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vn;class yd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vn===void 0&&(vn=Er("canvas")),vn.width=t.width,vn.height=t.height;const n=vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=vn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Md=0;class Ba{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(qr(n[o].image)):r.push(qr(n[o]))}else r=qr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Sd=0;const $r=new D;class Oe extends tn{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=Li,n=Li,r=Fe,o=cn,a=ai,l=Ke,c=Oe.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ii(),this.name="",this.source=new Ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Hc;Oe.DEFAULT_ANISOTROPY=1;const Ja=class Ja{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(m+1)/2,A=(u+1)/2,T=(h+d)/4,R=(f+v)/4,_=(g+p)/4;return w>M&&w>A?w<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(w),n=T/i,r=R/i):M>A?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=T/n,r=_/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=R/r,n=_/r),this.set(i,n,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ja.prototype.isVector4=!0;let de=Ja;class bd extends tn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new Oe(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ba(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends bd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zc extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rr=class Rr{constructor(t,e,i,n,r,o,a,l,c,h,f,d,m,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,f,d,m,g,v,p)}set(t,e,i,n,r,o,a,l,c,h,f,d,m,g,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=n,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/yn.setFromMatrixColumn(t,0).length(),r=1/yn.setFromMatrixColumn(t,1).length(),o=1/yn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*f,g=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*f,g=c*h,v=c*f;e[0]=d+v*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*f,g=c*h,v=c*f;e[0]=d-v*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*f,g=a*h,v=a*f;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*f,e[8]=g*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=o*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Td)}lookAt(t,e,i){const n=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Hi.crossVectors(i,qe),Hi.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Hi.crossVectors(i,qe)),Hi.normalize(),Ds.crossVectors(qe,Hi),n[0]=Hi.x,n[4]=Ds.x,n[8]=qe.x,n[1]=Hi.y,n[5]=Ds.y,n[9]=qe.y,n[2]=Hi.z,n[6]=Ds.z,n[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],b=i[3],w=i[7],M=i[11],A=i[15],T=n[0],R=n[4],_=n[8],y=n[12],E=n[1],C=n[5],L=n[9],k=n[13],X=n[2],F=n[6],$=n[10],H=n[14],Q=n[3],it=n[7],ct=n[11],mt=n[15];return r[0]=o*T+a*E+l*X+c*Q,r[4]=o*R+a*C+l*F+c*it,r[8]=o*_+a*L+l*$+c*ct,r[12]=o*y+a*k+l*H+c*mt,r[1]=h*T+f*E+d*X+m*Q,r[5]=h*R+f*C+d*F+m*it,r[9]=h*_+f*L+d*$+m*ct,r[13]=h*y+f*k+d*H+m*mt,r[2]=g*T+v*E+p*X+u*Q,r[6]=g*R+v*C+p*F+u*it,r[10]=g*_+v*L+p*$+u*ct,r[14]=g*y+v*k+p*H+u*mt,r[3]=b*T+w*E+M*X+A*Q,r[7]=b*R+w*C+M*F+A*it,r[11]=b*_+w*L+M*$+A*ct,r[15]=b*y+w*k+M*H+A*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15],b=l*m-c*d,w=a*m-c*f,M=a*d-l*f,A=o*m-c*h,T=o*d-l*h,R=o*f-a*h;return e*(v*b-p*w+u*M)-i*(g*b-p*A+u*T)+n*(g*w-v*A+u*R)-r*(g*M-v*T+p*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],b=e*a-i*o,w=e*l-n*o,M=e*c-r*o,A=i*l-n*a,T=i*c-r*a,R=n*c-r*l,_=h*v-f*g,y=h*p-d*g,E=h*u-m*g,C=f*p-d*v,L=f*u-m*v,k=d*u-m*p,X=b*k-w*L+M*C+A*E-T*y+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/X;return t[0]=(a*k-l*L+c*C)*F,t[1]=(n*L-i*k-r*C)*F,t[2]=(v*R-p*T+u*A)*F,t[3]=(d*T-f*R-m*A)*F,t[4]=(l*E-o*k-c*y)*F,t[5]=(e*k-n*E+r*y)*F,t[6]=(p*M-g*R-u*w)*F,t[7]=(h*R-d*M+m*w)*F,t[8]=(o*L-a*E+c*_)*F,t[9]=(i*E-e*L-r*_)*F,t[10]=(g*T-v*M+u*b)*F,t[11]=(f*M-h*T-m*b)*F,t[12]=(a*y-o*C-l*_)*F,t[13]=(e*C-i*y+n*_)*F,t[14]=(v*w-g*A-p*b)*F,t[15]=(h*A-f*w+d*b)*F,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,m=r*h,g=r*f,v=o*h,p=o*f,u=a*f,b=l*c,w=l*h,M=l*f,A=i.x,T=i.y,R=i.z;return n[0]=(1-(v+u))*A,n[1]=(m+M)*A,n[2]=(g-w)*A,n[3]=0,n[4]=(m-M)*T,n[5]=(1-(d+u))*T,n[6]=(p+b)*T,n[7]=0,n[8]=(g+w)*R,n[9]=(p-b)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=yn.set(n[0],n[1],n[2]).length();const a=yn.set(n[4],n[5],n[6]).length(),l=yn.set(n[8],n[9],n[10]).length();r<0&&(o=-o),ni.copy(this);const c=1/o,h=1/a,f=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,e.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=vi,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(i-n),d=(e+t)/(e-t),m=(i+n)/(i-n);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===vi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ss)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=vi,l=!1){const c=this.elements,h=2/(e-t),f=2/(i-n),d=-(e+t)/(e-t),m=-(i+n)/(i-n);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===vi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ss)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Rr.prototype.isMatrix4=!0;let le=Rr;const yn=new D,ni=new le,wd=new D(0,0,0),Td=new D(1,1,1),Hi=new D,Ds=new D,qe=new D,xl=new le,vl=new ji;class Oi{constructor(t=0,e=0,i=0,n=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vl.setFromEuler(this),this.setFromQuaternion(vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ad=0;const yl=new D,Mn=new ji,Ei=new le,Is=new D,is=new D,Pd=new D,Cd=new ji,Ml=new D(1,0,0),Sl=new D(0,1,0),bl=new D(0,0,1),El={type:"added"},Rd={type:"removed"},Sn={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Ee extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new Oi,i=new ji,n=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new le},normalMatrix:{value:new Ut}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.multiply(Mn),this}rotateOnWorldAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.premultiply(Mn),this}rotateX(t){return this.rotateOnAxis(Ml,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ml,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Is.copy(t):Is.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(is,Is,this.up):Ei.lookAt(Is,is,this.up),this.quaternion.setFromRotationMatrix(Ei),n&&(Ei.extractRotation(n.matrixWorld),Mn.setFromRotationMatrix(Ei),this.quaternion.premultiply(Mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(El),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(El),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ld={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Zr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=_d(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return Xt.colorSpaceToWorking(this,n),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=Jc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Xt.workingToColorSpace(Ue.copy(this),t),Math.round(Gt(Ue.r*255,0,255))*65536+Math.round(Gt(Ue.g*255,0,255))*256+Math.round(Gt(Ue.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,n=Ue.g,r=Ue.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=je){Xt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,n=Ue.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Ns);const i=Vr(Gi.h,Ns.h,e),n=Vr(Gi.s,Ns.s,e),r=Vr(Gi.l,Ns.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Ft;Ft.NAMES=Jc;class Hn{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=i}clone(){return new Hn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dd extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const si=new D,wi=new D,Jr=new D,Ti=new D,bn=new D,En=new D,wl=new D,Qr=new D,jr=new D,to=new D,eo=new de,io=new de,no=new de;class ei{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),si.subVectors(t,e),n.cross(si);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){si.subVectors(n,e),wi.subVectors(i,e),Jr.subVectors(t,e);const o=si.dot(si),a=si.dot(wi),l=si.dot(Jr),c=wi.dot(wi),h=wi.dot(Jr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return eo.setScalar(0),io.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(t,e),io.fromBufferAttribute(t,i),no.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(eo,r.x),o.addScaledVector(io,r.y),o.addScaledVector(no,r.z),o}static isFrontFacing(t,e,i,n){return si.subVectors(i,e),wi.subVectors(t,e),si.cross(wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),si.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;bn.subVectors(n,i),En.subVectors(r,i),Qr.subVectors(t,i);const l=bn.dot(Qr),c=En.dot(Qr);if(l<=0&&c<=0)return e.copy(i);jr.subVectors(t,n);const h=bn.dot(jr),f=En.dot(jr);if(h>=0&&f<=h)return e.copy(n);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(bn,o);to.subVectors(t,r);const m=bn.dot(to),g=En.dot(to);if(g>=0&&m<=g)return e.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(En,a);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return wl.subVectors(r,n),a=(f-h)/(f-h+(m-g)),e.copy(n).addScaledVector(wl,a);const u=1/(p+v+d);return o=v*u,a=d*u,e.copy(i).addScaledVector(bn,o).addScaledVector(En,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ps{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Fs.subVectors(this.max,ns),wn.subVectors(t.a,ns),Tn.subVectors(t.b,ns),An.subVectors(t.c,ns),Vi.subVectors(Tn,wn),Wi.subVectors(An,Tn),nn.subVectors(wn,An);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-nn.z,nn.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,nn.z,0,-nn.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-nn.y,nn.x,0];return!so(e,wn,Tn,An,Fs)||(e=[1,0,0,0,1,0,0,0,1],!so(e,wn,Tn,An,Fs))?!1:(Os.crossVectors(Vi,Wi),e=[Os.x,Os.y,Os.z],so(e,wn,Tn,An,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ai=[new D,new D,new D,new D,new D,new D,new D,new D],ri=new D,Us=new Ps,wn=new D,Tn=new D,An=new D,Vi=new D,Wi=new D,nn=new D,ns=new D,Fs=new D,Os=new D,sn=new D;function so(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){sn.fromArray(s,r);const a=n.x*Math.abs(sn.x)+n.y*Math.abs(sn.y)+n.z*Math.abs(sn.z),l=t.dot(sn),c=e.dot(sn),h=i.dot(sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Me=new D,Bs=new ot;let Id=0;class ci extends tn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Id++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=va,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Qc extends ci{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class jc extends ci{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends ci{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Nd=new Ps,ss=new D,ro=new D;class Dr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ss,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(ro)),this.expandByPoint(ss.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ud=0;const Qe=new le,oo=new Ee,Pn=new D,$e=new Ps,rs=new Ps,Ce=new D;class we extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?jc:Qc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors($e.min,rs.min),$e.expandByPoint(Ce),Ce.addVectors($e.max,rs.max),$e.expandByPoint(Ce)):($e.expandByPoint(rs.min),$e.expandByPoint(rs.max))}$e.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Pn.fromBufferAttribute(t,c),Ce.add(Pn)),n=Math.max(n,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new D,l[_]=new D;const c=new D,h=new D,f=new D,d=new ot,m=new ot,g=new ot,v=new D,p=new D;function u(_,y,E){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),h.sub(c),f.sub(c),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[_].add(v),a[y].add(v),a[E].add(v),l[_].add(p),l[y].add(p),l[E].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,y=b.length;_<y;++_){const E=b[_],C=E.start,L=E.count;for(let k=C,X=C+L;k<X;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new D,M=new D,A=new D,T=new D;function R(_){A.fromBufferAttribute(n,_),T.copy(A);const y=a[_];w.copy(y),w.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(T,y);const C=M.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,y=b.length;_<y;++_){const E=b[_],C=E.start,L=E.count;for(let k=C,X=C+L;k<X;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new ci(d,h,f)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new D;class Tr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ci(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Od=0;class mn extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Wn,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Do,this.blendEquation=an,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Do&&(i.blendDst=this.blendDst),this.blendEquation!==an&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class th extends mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Cn;const os=new D,Rn=new D,Ln=new D,Dn=new ot,as=new ot,eh=new le,ks=new D,ls=new D,zs=new D,Tl=new ot,ao=new ot,Al=new ot;class Bd extends Ee{constructor(t=new th){if(super(),this.isSprite=!0,this.type="Sprite",Cn===void 0){Cn=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fd(e,5);Cn.setIndex([0,1,2,0,2,3]),Cn.setAttribute("position",new Tr(i,3,0,!1)),Cn.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=Cn,this.material=t,this.center=new ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rn.setFromMatrixScale(this.matrixWorld),eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ln.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rn.multiplyScalar(-Ln.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;Hs(ks.set(-.5,-.5,0),Ln,o,Rn,n,r),Hs(ls.set(.5,-.5,0),Ln,o,Rn,n,r),Hs(zs.set(.5,.5,0),Ln,o,Rn,n,r),Tl.set(0,0),ao.set(1,0),Al.set(1,1);let a=t.ray.intersectTriangle(ks,ls,zs,!1,os);if(a===null&&(Hs(ls.set(-.5,.5,0),Ln,o,Rn,n,r),ao.set(0,1),a=t.ray.intersectTriangle(ks,zs,ls,!1,os),a===null))return;const l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:ei.getInterpolation(os,ks,ls,zs,Tl,ao,Al,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hs(s,t,e,i,n,r){Dn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(as.x=r*Dn.x-n*Dn.y,as.y=n*Dn.x+r*Dn.y):as.copy(Dn),s.copy(t),s.x+=as.x,s.y+=as.y,s.applyMatrix4(eh)}const Pi=new D,lo=new D,Gs=new D,Xi=new D,co=new D,Vs=new D,ho=new D;class Ir{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){lo.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(lo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=Xi.dot(this.direction),l=-Xi.dot(Gs),c=Xi.lengthSq(),h=Math.abs(1-o*o);let f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(lo).addScaledVector(Gs,d),m}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),n=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,n,r){co.subVectors(e,t),Vs.subVectors(i,t),ho.crossVectors(co,Vs);let o=this.direction.dot(ho),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);const l=a*this.direction.dot(Vs.crossVectors(Xi,Vs));if(l<0)return null;const c=a*this.direction.dot(co.cross(Xi));if(c<0||l+c>o)return null;const h=-a*Xi.dot(ho);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gn extends mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pl=new le,rn=new Ir,Ws=new Dr,Cl=new D,Xs=new D,qs=new D,$s=new D,uo=new D,Ys=new D,Rl=new D,Ks=new D;class Kt extends Ee{constructor(t=new we,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(uo.fromBufferAttribute(f,t),o?Ys.addScaledVector(uo,h):Ys.addScaledVector(uo.sub(e),h))}e.add(Ys)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),rn.copy(t.ray).recast(t.near),!(Ws.containsPoint(rn.origin)===!1&&(rn.intersectSphere(Ws,Cl)===null||rn.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Pl.copy(r).invert(),rn.copy(t.ray).applyMatrix4(Pl),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,A=w;M<A;M+=3){const T=a.getX(M),R=a.getX(M+1),_=a.getX(M+2);n=Zs(this,u,t,i,c,h,f,T,R,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const b=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);n=Zs(this,o,t,i,c,h,f,b,w,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,A=w;M<A;M+=3){const T=M,R=M+1,_=M+2;n=Zs(this,u,t,i,c,h,f,T,R,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const b=p,w=p+1,M=p+2;n=Zs(this,o,t,i,c,h,f,b,w,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function kd(s,t,e,i,n,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Qi,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:s}}function Zs(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Xs),s.getVertexPosition(l,qs),s.getVertexPosition(c,$s);const h=kd(s,t,e,i,Xs,qs,$s,Rl);if(h){const f=new D;ei.getBarycoord(Rl,Xs,qs,$s,f),n&&(h.uv=ei.getInterpolatedAttribute(n,a,l,c,f,new ot)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,l,c,f,new ot)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal(Xs,qs,$s,d.normal),h.face=d,h.barycoord=f}return h}class zd extends Oe{constructor(t=null,e=1,i=1,n,r,o,a,l,c=De,h=De,f,d){super(null,o,a,l,c,h,n,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fo=new D,Hd=new D,Gd=new Ut;class Yi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=fo.subVectors(i,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(fo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Gd.getNormalMatrix(t),n=this.coplanarPoint(fo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const on=new Dr,Vd=new ot(.5,.5),Js=new D;class za{constructor(t=new Yi,e=new Yi,i=new Yi,n=new Yi,r=new Yi,o=new Yi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi,i=!1){const n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],m=r[7],g=r[8],v=r[9],p=r[10],u=r[11],b=r[12],w=r[13],M=r[14],A=r[15];if(n[0].setComponents(c-o,m-h,u-g,A-b).normalize(),n[1].setComponents(c+o,m+h,u+g,A+b).normalize(),n[2].setComponents(c+a,m+f,u+v,A+w).normalize(),n[3].setComponents(c-a,m-f,u-v,A-w).normalize(),i)n[4].setComponents(l,d,p,M).normalize(),n[5].setComponents(c-l,m-d,u-p,A-M).normalize();else if(n[4].setComponents(c-l,m-d,u-p,A-M).normalize(),e===vi)n[5].setComponents(c+l,m+d,u+p,A+M).normalize();else if(e===Ss)n[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(t){on.center.set(0,0,0);const e=Vd.distanceTo(t.center);return on.radius=.7071067811865476+e,on.applyMatrix4(t.matrixWorld),this.intersectsSphere(on)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Js.x=n.normal.x>0?t.max.x:t.min.x,Js.y=n.normal.y>0?t.max.y:t.min.y,Js.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ar extends mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new D,Cr=new D,Ll=new le,cs=new Ir,Qs=new Dr,po=new D,Dl=new D;class Ha extends Ee{constructor(t=new we,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Pr.fromBufferAttribute(e,n-1),Cr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Pr.distanceTo(Cr);t.setAttribute("lineDistance",new ie(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(n),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Ll.copy(n).invert(),cs.copy(t.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const u=h.getX(v),b=h.getX(v+1),w=js(this,t,cs,l,u,b,v);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),u=js(this,t,cs,l,v,p,g-1);u&&e.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const u=js(this,t,cs,l,v,v+1,v);u&&e.push(u)}if(this.isLineLoop){const v=js(this,t,cs,l,g-1,m,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function js(s,t,e,i,n,r,o){const a=s.geometry.attributes.position;if(Pr.fromBufferAttribute(a,n),Cr.fromBufferAttribute(a,r),e.distanceSqToSegment(Pr,Cr,po,Dl)>i)return;po.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(po);if(!(c<t.near||c>t.far))return{distance:c,point:Dl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Il=new D,Nl=new D;class Wd extends Ha{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Il.fromBufferAttribute(e,n),Nl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Il.distanceTo(Nl);t.setAttribute("lineDistance",new ie(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends Ha{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ih extends Oe{constructor(t=[],e=dn,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gs extends Oe{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn extends Oe{constructor(t,e,i=Mi,n,r,o,a=De,l=De,c,h=Fi,f=1){if(h!==Fi&&h!==hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ba(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qd extends Zn{constructor(t,e=Mi,i=dn,n,r,o=De,a=De,l,c=Fi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class nh extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ts extends we{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function g(v,p,u,b,w,M,A,T,R,_,y){const E=M/R,C=A/_,L=M/2,k=A/2,X=T/2,F=R+1,$=_+1;let H=0,Q=0;const it=new D;for(let ct=0;ct<$;ct++){const mt=ct*C-k;for(let Mt=0;Mt<F;Mt++){const qt=Mt*E-L;it[v]=qt*b,it[p]=mt*w,it[u]=X,c.push(it.x,it.y,it.z),it[v]=0,it[p]=0,it[u]=T>0?1:-1,h.push(it.x,it.y,it.z),f.push(Mt/R),f.push(1-ct/_),H+=1}}for(let ct=0;ct<_;ct++)for(let mt=0;mt<R;mt++){const Mt=d+mt+F*ct,qt=d+mt+F*(ct+1),et=d+(mt+1)+F*(ct+1),vt=d+(mt+1)+F*ct;l.push(Mt,qt,vt),l.push(qt,et,vt),Q+=6}a.addGroup(m,Q,y),m+=Q,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $n extends we{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],f=[],d=[],m=[];let g=0;const v=[],p=i/2;let u=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(m,2));function b(){const M=new D,A=new D;let T=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const y=[],E=_/r,C=E*(e-t)+t;for(let L=0;L<=n;L++){const k=L/n,X=k*l+a,F=Math.sin(X),$=Math.cos(X);A.x=C*F,A.y=-E*i+p,A.z=C*$,f.push(A.x,A.y,A.z),M.set(F,R,$).normalize(),d.push(M.x,M.y,M.z),m.push(k,1-E),y.push(g++)}v.push(y)}for(let _=0;_<n;_++)for(let y=0;y<r;y++){const E=v[y][_],C=v[y+1][_],L=v[y+1][_+1],k=v[y][_+1];(t>0||y!==0)&&(h.push(E,C,k),T+=3),(e>0||y!==r-1)&&(h.push(C,L,k),T+=3)}c.addGroup(u,T,0),u+=T}function w(M){const A=g,T=new ot,R=new D;let _=0;const y=M===!0?t:e,E=M===!0?1:-1;for(let L=1;L<=n;L++)f.push(0,p*E,0),d.push(0,E,0),m.push(.5,.5),g++;const C=g;for(let L=0;L<=n;L++){const X=L/n*l+a,F=Math.cos(X),$=Math.sin(X);R.x=y*$,R.y=p*E,R.z=y*F,f.push(R.x,R.y,R.z),d.push(0,E,0),T.x=F*.5+.5,T.y=$*.5*E+.5,m.push(T.x,T.y),g++}for(let L=0;L<n;L++){const k=A+L,X=C+L;M===!0?h.push(X,X+1,k):h.push(X+1,X,k),_+=3}c.addGroup(u,_,M===!0?1:2),u+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],d=i[n+1]-h,m=(o-h)/d;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new ot:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,n=[],r=[],o=[],a=new D,l=new le;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),f=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Gt(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(Gt(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ga extends bi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $d extends Ga{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,m*=h,n(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const Ul=new D,Fl=new D,mo=new Va,go=new Va,_o=new Va;class Yd extends bi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Fl.subVectors(n[0],n[1]).add(n[0]),c=Fl);const f=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Ul.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Ul),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),mo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,v,p),go.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,v,p),_o.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),go.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),_o.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(mo.calc(l),go.calc(l),_o.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ol(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Kd(s,t){const e=1-s;return e*e*t}function Zd(s,t){return 2*(1-s)*s*t}function Jd(s,t){return s*s*t}function _s(s,t,e,i){return Kd(s,t)+Zd(s,e)+Jd(s,i)}function Qd(s,t){const e=1-s;return e*e*e*t}function jd(s,t){const e=1-s;return 3*e*e*s*t}function tu(s,t){return 3*(1-s)*s*s*t}function eu(s,t){return s*s*s*t}function xs(s,t,e,i,n){return Qd(s,t)+jd(s,e)+tu(s,i)+eu(s,n)}class sh extends bi{constructor(t=new ot,e=new ot,i=new ot,n=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ot){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xs(t,n.x,r.x,o.x,a.x),xs(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iu extends bi{constructor(t=new D,e=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new D){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xs(t,n.x,r.x,o.x,a.x),xs(t,n.y,r.y,o.y,a.y),xs(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rh extends bi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends bi{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oh extends bi{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(_s(t,n.x,r.x,o.x),_s(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class su extends bi{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(_s(t,n.x,r.x,o.x),_s(t,n.y,r.y,o.y),_s(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ah extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],f=n[o>n.length-3?n.length-1:o+2];return i.set(Ol(a,l.x,c.x,h.x,f.x),Ol(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new ot().fromArray(n))}return this}}var Bl=Object.freeze({__proto__:null,ArcCurve:$d,CatmullRomCurve3:Yd,CubicBezierCurve:sh,CubicBezierCurve3:iu,EllipseCurve:Ga,LineCurve:rh,LineCurve3:nu,QuadraticBezierCurve:oh,QuadraticBezierCurve3:su,SplineCurve:ah});class ru extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Bl[n.type]().fromJSON(n))}return this}}class kl extends ru{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new rh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new oh(this.currentPoint.clone(),new ot(t,e),new ot(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new sh(this.currentPoint.clone(),new ot(t,e),new ot(i,n),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new ah(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new Ga(t,e,i,n,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wa extends kl{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new kl().fromJSON(n))}return this}}function ou(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=lh(s,0,n,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=du(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,f=l;for(let d=e;d<n;d+=e){const m=s[d],g=s[d+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return bs(r,o,e,a,l,c,0),o}function lh(s,t,e,i,n){let r;if(n===Su(s,t,e,i)>0)for(let o=t;o<e;o+=i)r=zl(o/i|0,s[o],s[o+1],r);else for(let o=e-i;o>=t;o-=i)r=zl(o/i|0,s[o],s[o+1],r);return r&&Jn(r,r.next)&&(ws(r),r=r.next),r}function fn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Jn(e,e.next)||ue(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function bs(s,t,e,i,n,r,o){if(!s)return;!o&&r&&gu(s,i,n,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?lu(s,i,n,r):au(s)){t.push(l.i,s.i,c.i),ws(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=cu(fn(s),t),bs(s,t,e,i,n,r,2)):o===2&&hu(s,t,e,i,n,r):bs(fn(s),t,e,i,n,r,1);break}}}function au(s){const t=s.prev,e=s,i=s.next;if(ue(t,e,i)>=0)return!1;const n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(n,r,o),f=Math.min(a,l,c),d=Math.max(n,r,o),m=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=m&&fs(n,a,r,l,o,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lu(s,t,e,i){const n=s.prev,r=s,o=s.next;if(ue(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,f=r.y,d=o.y,m=Math.min(a,l,c),g=Math.min(h,f,d),v=Math.max(a,l,c),p=Math.max(h,f,d),u=Ma(m,g,t,e,i),b=Ma(v,p,t,e,i);let w=s.prevZ,M=s.nextZ;for(;w&&w.z>=u&&M&&M.z<=b;){if(w.x>=m&&w.x<=v&&w.y>=g&&w.y<=p&&w!==n&&w!==o&&fs(a,h,l,f,c,d,w.x,w.y)&&ue(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&fs(a,h,l,f,c,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=u;){if(w.x>=m&&w.x<=v&&w.y>=g&&w.y<=p&&w!==n&&w!==o&&fs(a,h,l,f,c,d,w.x,w.y)&&ue(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=b;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&fs(a,h,l,f,c,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cu(s,t){let e=s;do{const i=e.prev,n=e.next.next;!Jn(i,n)&&hh(i,e,e.next,n)&&Es(i,n)&&Es(n,i)&&(t.push(i.i,e.i,n.i),ws(e),ws(e.next),e=s=n),e=e.next}while(e!==s);return fn(e)}function hu(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vu(o,a)){let l=dh(o,a);o=fn(o,o.next),l=fn(l,l.next),bs(o,t,e,i,n,r,0),bs(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function du(s,t,e,i){const n=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=lh(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(xu(c))}n.sort(uu);for(let r=0;r<n.length;r++)e=fu(n[r],e);return e}function uu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function fu(s,t){const e=pu(s,t);if(!e)return t;const i=dh(e,s);return fn(i,i.next),fn(e,e.next)}function pu(s,t){let e=t;const i=s.x,n=s.y;let r=-1/0,o;if(Jn(s,e))return e;do{if(Jn(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&ch(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){const f=Math.abs(n-e.y)/(i-e.x);Es(e,s)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&mu(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function mu(s,t){return ue(s.prev,s,t.prev)<0&&ue(t.next,s,s.next)<0}function gu(s,t,e,i){let n=s;do n.z===0&&(n.z=Ma(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,_u(n)}function _u(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,e*=2}while(t>1);return s}function Ma(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function xu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ch(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function fs(s,t,e,i,n,r,o,a){return!(s===o&&t===a)&&ch(s,t,e,i,n,r,o,a)}function vu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!yu(s,t)&&(Es(s,t)&&Es(t,s)&&Mu(s,t)&&(ue(s.prev,s,t.prev)||ue(s,t.prev,t))||Jn(s,t)&&ue(s.prev,s,s.next)>0&&ue(t.prev,t,t.next)>0)}function ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Jn(s,t){return s.x===t.x&&s.y===t.y}function hh(s,t,e,i){const n=er(ue(s,t,e)),r=er(ue(s,t,i)),o=er(ue(e,i,s)),a=er(ue(e,i,t));return!!(n!==r&&o!==a||n===0&&tr(s,e,t)||r===0&&tr(s,i,t)||o===0&&tr(e,s,i)||a===0&&tr(e,t,i))}function tr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function er(s){return s>0?1:s<0?-1:0}function yu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Es(s,t){return ue(s.prev,s,s.next)<0?ue(s,t,s.next)>=0&&ue(s,s.prev,t)>=0:ue(s,t,s.prev)<0||ue(s,s.next,t)<0}function Mu(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function dh(s,t){const e=Sa(s.i,s.x,s.y),i=Sa(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zl(s,t,e,i){const n=Sa(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ws(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Sa(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Su(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class bu{static triangulate(t,e,i=2){return ou(t,e,i)}}class vs{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return vs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];Hl(t),Gl(i,t);let o=t.length;e.forEach(Hl);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,Gl(i,e[l]);const a=bu.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Qn extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,f=t/a,d=e/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const b=u*d-o;for(let w=0;w<c;w++){const M=w*f-r;g.push(M,-b,0),v.push(0,0,1),p.push(w/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const w=b+c*u,M=b+c*(u+1),A=b+1+c*(u+1),T=b+1+c*u;m.push(w,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xa extends we{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let f=t;const d=(e-t)/n,m=new D,g=new ot;for(let v=0;v<=n;v++){for(let p=0;p<=i;p++){const u=r+p/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let v=0;v<n;v++){const p=v*(i+1);for(let u=0;u<i;u++){const b=u+p,w=b,M=b+i+1,A=b+i+2,T=b+1;a.push(w,M,T),a.push(M,A,T)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nr extends we{constructor(t=new Wa([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ie(n,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function c(h){const f=n.length/3,d=h.extractPoints(e);let m=d.shape;const g=d.holes;vs.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,u=g.length;p<u;p++){const b=g[p];vs.isClockWise(b)===!0&&(g[p]=b.reverse())}const v=vs.triangulateShape(m,g);for(let p=0,u=g.length;p<u;p++){const b=g[p];m=m.concat(b)}for(let p=0,u=m.length;p<u;p++){const b=m[p];n.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,u=v.length;p<u;p++){const b=v[p],w=b[0]+f,M=b[1]+f,A=b[2]+f;i.push(w,M,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Eu(e,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const o=e[t.shapes[n]];i.push(o)}return new Nr(i,t.curveSegments)}}function Eu(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}class ii extends we{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new D,d=new D,m=[],g=[],v=[],p=[];for(let u=0;u<=i;u++){const b=[],w=u/i,M=o+w*a,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A);let R=0;u===0&&o===0?R=.5/e:u===i&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const y=_/e,E=n+y*r;f.x=-T*Math.cos(E),f.y=A,f.z=T*Math.sin(E),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(y+R,1-w),b.push(c++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const w=h[u][b+1],M=h[u][b],A=h[u+1][b],T=h[u+1][b+1];(u!==0||o>0)&&m.push(w,M,T),(u!==i-1||l<Math.PI)&&m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ts extends we{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],f=[],d=new D,m=new D,g=new D;for(let v=0;v<=i;v++){const p=o+v/i*a;for(let u=0;u<=n;u++){const b=u/n*r;m.x=(t+e*Math.cos(p))*Math.cos(b),m.y=(t+e*Math.cos(p))*Math.sin(b),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(u/n),f.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=n;p++){const u=(n+1)*v+p-1,b=(n+1)*(v-1)+p-1,w=(n+1)*(v-1)+p,M=(n+1)*v+p;l.push(u,b,M),l.push(b,w,M)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function jn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(Vl(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Vl(n[0])){const r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ke(s){const t={};for(let e=0;e<s.length;e++){const i=jn(s[e]);for(const n in i)t[n]=i[n]}return t}function Vl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function wu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Tu={clone:jn,merge:ke};var Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Ft().setHex(n.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new de().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(n.value);break;case"m4":this.uniforms[i].value=new le().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Cu extends Si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oi extends mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ru extends mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lu extends mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ur extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Du extends Ur{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xo=new le,Wl=new D,Xl=new D;class fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ss||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ir=new D,nr=new ji,fi=new D;class ph extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ir,nr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,nr,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ir,nr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,nr,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new D,ql=new ot,$l=new ot;class Ye extends ph{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,ql,$l),e.subVectors($l,ql)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Iu extends fh{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}}class Ki extends Ur{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Iu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class qa extends ph{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nu extends fh{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uu extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Nu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Fu extends Ur{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const In=-90,Nn=1;class Ou extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ye(In,Nn,t,e);n.layers=this.layers,this.add(n);const r=new Ye(In,Nn,t,e);r.layers=this.layers,this.add(r);const o=new Ye(In,Nn,t,e);o.layers=this.layers,this.add(o);const a=new Ye(In,Nn,t,e);a.layers=this.layers,this.add(a);const l=new Ye(In,Nn,t,e);l.layers=this.layers,this.add(l);const c=new Ye(In,Nn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bu extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yl=new le;class ku{constructor(t,e,i=0,n=1/0){this.ray=new Ir(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(t,e=!0,i=[]){return ba(t,this,i,e),i.sort(Kl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)ba(t[n],this,i,e);return i.sort(Kl),i}}function Kl(s,t){return s.distance-t.distance}function ba(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ba(r[o],t,e,!0)}}class zu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Zl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qa=class Qa{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Qa.prototype.isMatrix2=!0;let Jl=Qa;class Hu extends Wd{constructor(t=10,e=10,i=4473924,n=8947848){i=new Ft(i),n=new Ft(n);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?i:n;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const h=new we;h.setAttribute("position",new ie(l,3)),h.setAttribute("color",new ie(c,3));const f=new Ar({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class mh extends tn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Dt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ql(s,t,e,i){const n=Gu(i);switch(e){case qc:return s*t;case Yc:return s*t/n.components*n.byteLength;case Ia:return s*t/n.components*n.byteLength;case un:return s*t*2/n.components*n.byteLength;case Na:return s*t*2/n.components*n.byteLength;case $c:return s*t*3/n.components*n.byteLength;case ai:return s*t*4/n.components*n.byteLength;case Ua:return s*t*4/n.components*n.byteLength;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Xo:return Math.max(s,16)*Math.max(t,8)/4;case Go:case Wo:return Math.max(s,8)*Math.max(t,8)/2;case qo:case $o:case Ko:case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yo:case yr:case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ia:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case sa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case aa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ha:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ua:case fa:case pa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ma:case ga:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Mr:case _a:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gu(s){switch(s){case Ke:case Gc:return{byteLength:1,components:1};case ys:case Vc:case Ui:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case Mi:case Ra:case xi:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gh(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Vu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
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
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Vf=`uniform sampler2D dfgLUT;
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Qp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,xm=`#define TOON
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
}`,vm=`uniform float size;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:$u,alphatest_fragment:Yu,alphatest_pars_fragment:Ku,aomap_fragment:Zu,aomap_pars_fragment:Ju,batching_pars_vertex:Qu,batching_vertex:ju,begin_vertex:tf,beginnormal_vertex:ef,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:df,color_pars_vertex:uf,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:xf,emissivemap_fragment:vf,emissivemap_pars_fragment:yf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:bf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Pf,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:If,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:kf,lights_phong_fragment:zf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,lightprobes_pars_fragment:$f,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:Qf,map_pars_fragment:jf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:ip,metalnessmap_pars_fragment:np,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:dp,normal_pars_vertex:up,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:xp,opaque_fragment:vp,packing:yp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:bp,dithering_pars_fragment:Ep,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Pp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Ip,skinnormal_vertex:Np,specularmap_fragment:Up,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:Bp,transmission_fragment:kp,transmission_pars_fragment:zp,uv_pars_fragment:Hp,uv_pars_vertex:Gp,uv_vertex:Vp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:$p,backgroundCube_frag:Yp,cube_vert:Kp,cube_frag:Zp,depth_vert:Jp,depth_frag:Qp,distance_vert:jp,distance_frag:tm,equirect_vert:em,equirect_frag:im,linedashed_vert:nm,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:om,meshlambert_vert:am,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:dm,meshnormal_frag:um,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:_m,meshtoon_frag:xm,points_vert:vm,points_frag:ym,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:bm,sprite_frag:Em},pt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},gi={basic:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([pt.points,pt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([pt.common,pt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([pt.sprite,pt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:ke([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:ke([pt.lights,pt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};gi.physical={uniforms:ke([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const sr={r:0,b:0,g:0},wm=new le,_h=new Ut;_h.set(-1,0,0,0,1,0,0,0,1);function Tm(s,t,e,i,n,r){const o=new Ft(0);let a=n===!0?0:1,l,c,h=null,f=0,d=null;function m(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const M=b.backgroundBlurriness>0;w=t.get(w,M)}return w}function g(b){let w=!1;const M=m(b);M===null?p(o,a):M&&M.isColor&&(p(M,1),w=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(b,w){const M=m(w);M&&(M.isCubeTexture||M.mapping===Lr)?(c===void 0&&(c=new Kt(new ts(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:jn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_h),c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Qt,(h!==M||f!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Kt(new Qn(2,2),new Si({name:"BackgroundMaterial",uniforms:jn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,w){b.getRGB(sr,uh(s)),e.buffers.color.setClear(sr.r,sr.g,sr.b,w,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:g,addToRenderList:v,dispose:u}}function Am(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(C,L,k,X,F){let $=!1;const H=f(C,X,k,L);r!==H&&(r=H,c(r.object)),$=m(C,X,k,F),$&&g(C,X,k,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(C,L,k,X),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function f(C,L,k,X){const F=X.wireframe===!0;let $=i[L.id];$===void 0&&($={},i[L.id]=$);const H=C.isInstancedMesh===!0?C.id:0;let Q=$[H];Q===void 0&&(Q={},$[H]=Q);let it=Q[k.id];it===void 0&&(it={},Q[k.id]=it);let ct=it[F];return ct===void 0&&(ct=d(l()),it[F]=ct),ct}function d(C){const L=[],k=[],X=[];for(let F=0;F<e;F++)L[F]=0,k[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:X,object:C,attributes:{},index:null}}function m(C,L,k,X){const F=r.attributes,$=L.attributes;let H=0;const Q=k.getAttributes();for(const it in Q)if(Q[it].location>=0){const mt=F[it];let Mt=$[it];if(Mt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==X}function g(C,L,k,X){const F={},$=L.attributes;let H=0;const Q=k.getAttributes();for(const it in Q)if(Q[it].location>=0){let mt=$[it];mt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(mt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(mt=C.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),F[it]=Mt,H++}r.attributes=F,r.attributesNum=H,r.index=X}function v(){const C=r.newAttributes;for(let L=0,k=C.length;L<k;L++)C[L]=0}function p(C){u(C,0)}function u(C,L){const k=r.newAttributes,X=r.enabledAttributes,F=r.attributeDivisors;k[C]=1,X[C]===0&&(s.enableVertexAttribArray(C),X[C]=1),F[C]!==L&&(s.vertexAttribDivisor(C,L),F[C]=L)}function b(){const C=r.newAttributes,L=r.enabledAttributes;for(let k=0,X=L.length;k<X;k++)L[k]!==C[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function w(C,L,k,X,F,$,H){H===!0?s.vertexAttribIPointer(C,L,k,F,$):s.vertexAttribPointer(C,L,k,X,F,$)}function M(C,L,k,X){v();const F=X.attributes,$=k.getAttributes(),H=L.defaultAttributeValues;for(const Q in $){const it=$[Q];if(it.location>=0){let ct=F[Q];if(ct===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const mt=ct.normalized,Mt=ct.itemSize,qt=t.get(ct);if(qt===void 0)continue;const et=qt.buffer,vt=qt.type,V=qt.bytesPerElement,nt=vt===s.INT||vt===s.UNSIGNED_INT||ct.gpuType===Ra;if(ct.isInterleavedBufferAttribute){const tt=ct.data,Lt=tt.stride,Ot=ct.offset;if(tt.isInstancedInterleavedBuffer){for(let It=0;It<it.locationSize;It++)u(it.location+It,tt.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let It=0;It<it.locationSize;It++)p(it.location+It);s.bindBuffer(s.ARRAY_BUFFER,et);for(let It=0;It<it.locationSize;It++)w(it.location+It,Mt/it.locationSize,vt,mt,Lt*V,(Ot+Mt/it.locationSize*It)*V,nt)}else{if(ct.isInstancedBufferAttribute){for(let tt=0;tt<it.locationSize;tt++)u(it.location+tt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let tt=0;tt<it.locationSize;tt++)p(it.location+tt);s.bindBuffer(s.ARRAY_BUFFER,et);for(let tt=0;tt<it.locationSize;tt++)w(it.location+tt,Mt/it.locationSize,vt,mt,Mt*V,Mt/it.locationSize*tt*V,nt)}}else if(H!==void 0){const mt=H[Q];if(mt!==void 0)switch(mt.length){case 2:s.vertexAttrib2fv(it.location,mt);break;case 3:s.vertexAttrib3fv(it.location,mt);break;case 4:s.vertexAttrib4fv(it.location,mt);break;default:s.vertexAttrib1fv(it.location,mt)}}}}b()}function A(){y();for(const C in i){const L=i[C];for(const k in L){const X=L[k];for(const F in X){const $=X[F];for(const H in $)h($[H].object),delete $[H];delete X[F]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const L=i[C.id];for(const k in L){const X=L[k];for(const F in X){const $=X[F];for(const H in $)h($[H].object),delete $[H];delete X[F]}}delete i[C.id]}function R(C){for(const L in i){const k=i[L];for(const X in k){const F=k[X];if(F[C.id]===void 0)continue;const $=F[C.id];for(const H in $)h($[H].object),delete $[H];delete F[C.id]}}}function _(C){for(const L in i){const k=i[L],X=C.isInstancedMesh===!0?C.id:0,F=k[X];if(F!==void 0){for(const $ in F){const H=F[$];for(const Q in H)h(H[Q].object),delete H[Q];delete F[$]}delete k[X],Object.keys(k).length===0&&delete i[L]}}}function y(){E(),o=!0,r!==n&&(r=n,c(r.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:y,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function Pm(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==ai&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ke&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!_)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:T}}function Rm(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new Yi,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||n;return n=d,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,u=s.get(f);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,w=b*4;let M=u.clippingState||null;l.value=M,M=h(g,d,w,m);for(let A=0;A!==w;++A)M[A]=e[A];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,M=m;w!==v;++w,M+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const Ji=4,jl=[.125,.215,.35,.446,.526,.582],ln=20,Lm=256,hs=new qa,tc=new Ft;let vo=null,yo=0,Mo=0,So=!1;const Dm=new D;class ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:o=256,position:a=Dm}=r;vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vo,yo,Mo),this._renderer.xr.enabled=So,t.scissorTest=!1,Un(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dn||t.mapping===Kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Ui,format:ai,colorSpace:Sr,depthBuffer:!1},n=ic(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Um(r,t,e),this._ggxMaterial=Nm(r,t,e)}return n}_compileMaterial(t){const e=new Kt(new we,t);this._renderer.compile(e,hs)}_sceneToCubeUV(t,e,i,n,r){const l=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(tc),f.toneMapping=li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new ts,new Gn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let u=!1;const b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,u=!0):(p.color.copy(tc),u=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const A=this._cubeSize;Un(n,M*A,w>2?A:0,A,A),f.setRenderTarget(n),u&&f.render(v,l),f.render(t,l)}f.toneMapping=m,f.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===dn||t.mapping===Kn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Un(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,hs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,m=f*d,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-Ji?i-g+Ji:0),u=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Un(r,p,u,3*v,2*v),n.setRenderTarget(r),n.render(a,hs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Un(t,p,u,3*v,2*v),n.setRenderTarget(t),n.render(a,hs)}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[n];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ln-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):ln;p>ln&&Dt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ln}`);const u=[];let b=0;for(let R=0;R<ln;++R){const _=R/v,y=Math.exp(-_*_/2);u.push(y),R===0?b+=y:R<p&&(b+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const M=this._sizeLods[n],A=3*M*(n>w-Ji?n-w+Ji:0),T=4*(this._cubeSize-M);Un(e,A,T,3*M,2*M),l.setRenderTarget(e),l.render(f,hs)}}function Im(s){const t=[],e=[],i=[];let n=s;const r=s-Ji+1+jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Ji?l=jl[o-s+Ji-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,v=3,p=2,u=1,b=new Float32Array(v*g*m),w=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,_=T>2?0:-1,y=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];b.set(y,v*g*T),w.set(d,p*g*T);const E=[T,T,T,T,T,T];M.set(E,u*g*T)}const A=new we;A.setAttribute("position",new ci(b,v)),A.setAttribute("uv",new ci(w,p)),A.setAttribute("faceIndex",new ci(M,u)),i.push(new Kt(A,null)),n>Ji&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ic(s,t,e){const i=new yi(s,t,e);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Un(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Nm(s,t,e){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Um(s,t,e){const i=new Float32Array(ln),n=new D(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function nc(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function sc(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fr(){return`

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
	`}class xh extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ih(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ts(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Di});r.uniforms.tEquirect.value=e;const o=new Kt(n,r),a=e.minFilter;return e.minFilter===cn&&(e.minFilter=Fe),new Ou(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}function Fm(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===zr||m===Hr)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new xh(g.height);return v.fromEquirectangularTexture(s,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,g=m===zr||m===Hr,v=m===dn||m===Kn;if(g||v){let p=e.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new ec(s)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const b=d.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new ec(s)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,m){return m===zr?d.mapping=dn:m===Hr&&(d.mapping=Kn),d}function l(d){let m=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Om(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Xn("WebGLRenderer: "+i+" extension not supported."),n}}}function Bm(s,t,e,i){const n={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete n[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const b=m.array;v=m.version;for(let w=0,M=b.length;w<M;w+=3){const A=b[w+0],T=b[w+1],R=b[w+2];d.push(A,T,T,R,R,A)}}else{const b=g.array;v=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const A=w+0,T=w+1,R=w+2;d.push(A,T,T,R,R,A)}}const p=new(g.count>=65535?jc:Qc)(d,1);p.version=v;const u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function km(s,t,e){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let v=0;for(let p=0;p<m;p++)v+=d[p];e.update(v,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Hm(s,t,e){const i=new WeakMap,n=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*f),_=new Zc(R,A,T,f);_.type=xi,_.needsUpdate=!0;const y=M*4;for(let C=0;C<f;C++){const L=u[C],k=b[C],X=w[C],F=A*T*4*C;for(let $=0;$<L.count;$++){const H=$*y;g===!0&&(n.fromBufferAttribute(L,$),R[F+H+0]=n.x,R[F+H+1]=n.y,R[F+H+2]=n.z,R[F+H+3]=0),v===!0&&(n.fromBufferAttribute(k,$),R[F+H+4]=n.x,R[F+H+5]=n.y,R[F+H+6]=n.z,R[F+H+7]=0),p===!0&&(n.fromBufferAttribute(X,$),R[F+H+8]=n.x,R[F+H+9]=n.y,R[F+H+10]=n.z,R[F+H+11]=X.itemSize===4?n.w:1)}}d={count:f,texture:_,size:new ot(A,T)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gm(s,t,e,i,n){let r=new WeakMap;function o(c){const h=n.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Vm={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Wm(s,t,e,i,n,r){const o=new yi(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,depthTexture:n?new Zn(t,e):void 0}),a=new yi(t,e,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new we;l.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ie([0,2,0,0,2,0],2));const c=new Cu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Kt(l,c),f=new qa(-1,1,1,-1,0,1);let d=null,m=null,g=!1,v,p=null,u=[],b=!1;this.setSize=function(w,M){o.setSize(w,M),a.setSize(w,M);for(let A=0;A<u.length;A++){const T=u[A];T.setSize&&T.setSize(w,M)}},this.setEffects=function(w){u=w,b=u.length>0&&u[0].isRenderPass===!0;const M=o.width,A=o.height;for(let T=0;T<u.length;T++){const R=u[T];R.setSize&&R.setSize(M,A)}},this.begin=function(w,M){if(g||w.toneMapping===li&&u.length===0)return!1;if(p=M,M!==null){const A=M.width,T=M.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return b===!1&&w.setRenderTarget(o),v=w.toneMapping,w.toneMapping=li,!0},this.hasRenderPass=function(){return b},this.end=function(w,M){w.toneMapping=v,g=!0;let A=o,T=a;for(let R=0;R<u.length;R++){const _=u[R];if(_.enabled!==!1&&(_.render(w,T,A,M),_.needsSwap!==!1)){const y=A;A=T,T=y}}if(d!==w.outputColorSpace||m!==w.toneMapping){d=w.outputColorSpace,m=w.toneMapping,c.defines={},Xt.getTransfer(d)===Qt&&(c.defines.SRGB_TRANSFER="");const R=Vm[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(h,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const vh=new Oe,Ea=new Zn(1,1),yh=new Zc,Mh=new Ed,Sh=new ih,rc=[],oc=[],ac=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function es(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=rc[n];if(r===void 0&&(r=new Float32Array(n),rc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Or(s,t){let e=oc[t];e===void 0&&(e=new Int32Array(t),oc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Xm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function $m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function Ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function Km(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;cc.set(i),s.uniformMatrix2fv(this.addr,!1,cc),Ae(e,i)}}function Zm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;lc.set(i),s.uniformMatrix3fv(this.addr,!1,lc),Ae(e,i)}}function Jm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;ac.set(i),s.uniformMatrix4fv(this.addr,!1,ac),Ae(e,i)}}function Qm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function t0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function e0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function i0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function n0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function s0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function r0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function o0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ea.compareFunction=e.isReversedDepthBuffer()?Oa:Fa,r=Ea):r=vh,e.setTexture2D(t||r,n)}function a0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Mh,n)}function l0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Sh,n)}function c0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||yh,n)}function h0(s){switch(s){case 5126:return Xm;case 35664:return qm;case 35665:return $m;case 35666:return Ym;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return i0;case 36294:return n0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function d0(s,t){s.uniform1fv(this.addr,t)}function u0(s,t){const e=es(t,this.size,2);s.uniform2fv(this.addr,e)}function f0(s,t){const e=es(t,this.size,3);s.uniform3fv(this.addr,e)}function p0(s,t){const e=es(t,this.size,4);s.uniform4fv(this.addr,e)}function m0(s,t){const e=es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function g0(s,t){const e=es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function _0(s,t){const e=es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function x0(s,t){s.uniform1iv(this.addr,t)}function v0(s,t){s.uniform2iv(this.addr,t)}function y0(s,t){s.uniform3iv(this.addr,t)}function M0(s,t){s.uniform4iv(this.addr,t)}function S0(s,t){s.uniform1uiv(this.addr,t)}function b0(s,t){s.uniform2uiv(this.addr,t)}function E0(s,t){s.uniform3uiv(this.addr,t)}function w0(s,t){s.uniform4uiv(this.addr,t)}function T0(s,t,e){const i=this.cache,n=t.length,r=Or(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ea:o=vh;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function A0(s,t,e){const i=this.cache,n=t.length,r=Or(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Mh,r[o])}function P0(s,t,e){const i=this.cache,n=t.length,r=Or(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Sh,r[o])}function C0(s,t,e){const i=this.cache,n=t.length,r=Or(e,n);Te(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||yh,r[o])}function R0(s){switch(s){case 5126:return d0;case 35664:return u0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return C0}}class L0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}}class D0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}}class I0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function hc(s,t){s.seq.push(t),s.map[t.id]=t}function N0(s,t,e){const i=s.name,n=i.length;for(bo.lastIndex=0;;){const r=bo.exec(i),o=bo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){hc(e,c===void 0?new L0(a,s,t):new D0(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new I0(a),hc(e,f)),e=f}}}class xr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);N0(a,l,this)}const n=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function dc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const U0=37297;let F0=0;function O0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const uc=new Ut;function B0(s){Xt._getMatrix(uc,Xt.workingColorSpace,s);const t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case br:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function fc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+O0(s.getShaderSource(t),a)}else return r}function k0(s,t){const e=B0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const z0={[Uc]:"Linear",[Fc]:"Reinhard",[Oc]:"Cineon",[vr]:"ACESFilmic",[kc]:"AgX",[zc]:"Neutral",[Bc]:"Custom"};function H0(s,t){const e=z0[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new D;function G0(){Xt.getLuminanceCoefficients(rr);const s=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function W0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function X0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ps(s){return s!==""}function pc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(s){return s.replace(q0,Y0)}const $0=new Map;function Y0(s,t){let e=zt[t];if(e===void 0){const i=$0.get(t);if(i!==void 0)e=zt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wa(e)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(s){return s.replace(K0,Z0)}function Z0(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function _c(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const J0={[ur]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function Q0(s){return J0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j0={[dn]:"ENVMAP_TYPE_CUBE",[Kn]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function tg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":j0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const eg={[Kn]:"ENVMAP_MODE_REFRACTION"};function ig(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ng={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function sg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ng[s.combine]||"ENVMAP_BLENDING_NONE"}function rg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function og(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Q0(e),c=tg(e),h=ig(e),f=sg(e),d=rg(e),m=V0(e),g=W0(r),v=n.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),u.length>0&&(u+=`
`)):(p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),u=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?zt.tonemapping_pars_fragment:"",e.toneMapping!==li?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,k0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),o=wa(o),o=pc(o,e),o=mc(o,e),a=wa(a),a=pc(a,e),a=mc(a,e),o=gc(o),a=gc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=b+p+o,M=b+u+a,A=dc(n,n.VERTEX_SHADER,w),T=dc(n,n.FRAGMENT_SHADER,M);n.attachShader(v,A),n.attachShader(v,T),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(C){if(s.debug.checkShaderErrors){const L=n.getProgramInfoLog(v)||"",k=n.getShaderInfoLog(A)||"",X=n.getShaderInfoLog(T)||"",F=L.trim(),$=k.trim(),H=X.trim();let Q=!0,it=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,A,T);else{const ct=fc(n,A,"vertex"),mt=fc(n,T,"fragment");Wt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+ct+`
`+mt)}else F!==""?Dt("WebGLProgram: Program Info Log:",F):($===""||H==="")&&(it=!1);it&&(C.diagnostics={runnable:Q,programLog:F,vertexShader:{log:$,prefix:p},fragmentShader:{log:H,prefix:u}})}n.deleteShader(A),n.deleteShader(T),_=new xr(n,v),y=X0(n,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(v,U0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cg(t),e.set(t,i)),i}}class cg{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function hg(s){return s===un||s===yr||s===Mr}function dg(s,t,e,i,n,r){const o=new ka,a=new lg,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,y,E,C,L,k){const X=C.fog,F=L.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=t.get(_.envMap||$,H),it=Q&&Q.mapping===Lr?Q.image.height:null,ct=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let qt=0;F.morphAttributes.position!==void 0&&(qt=1),F.morphAttributes.normal!==void 0&&(qt=2),F.morphAttributes.color!==void 0&&(qt=3);let et,vt,V,nt;if(ct){const bt=gi[ct];et=bt.vertexShader,vt=bt.fragmentShader}else{et=_.vertexShader,vt=_.fragmentShader;const bt=a.getVertexShaderStage(_),pe=a.getFragmentShaderStage(_);a.update(_,bt,pe),V=bt.id,nt=pe.id}const tt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,It=L.isBatchedMesh===!0,ge=!!_.map,Vt=!!_.matcap,ne=!!Q,Zt=!!_.aoMap,$t=!!_.lightMap,ve=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,Pe=!!_.displacementMap,Re=!!_.emissiveMap,fe=!!_.metalnessMap,ye=!!_.roughnessMap,N=_.anisotropy>0,ze=_.clearcoat>0,Jt=_.dispersion>0,P=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,G=N&&!!_.anisotropyMap,q=ze&&!!_.clearcoatMap,rt=ze&&!!_.clearcoatNormalMap,lt=ze&&!!_.clearcoatRoughnessMap,Y=P&&!!_.iridescenceMap,Z=P&&!!_.iridescenceThicknessMap,ht=x&&!!_.sheenColorMap,Tt=x&&!!_.sheenRoughnessMap,ft=!!_.specularMap,dt=!!_.specularColorMap,Rt=!!_.specularIntensityMap,Nt=O&&!!_.transmissionMap,Bt=O&&!!_.thicknessMap,I=!!_.gradientMap,at=!!_.alphaMap,K=_.alphaTest>0,ut=!!_.alphaHash,xt=!!_.extensions;let j=li;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(j=s.toneMapping);const wt={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:vt,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:nt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:It,batchingColor:It&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ge,matcap:Vt,envMap:ne,envMapMode:ne&&Q.mapping,envMapCubeUVHeight:it,aoMap:Zt,lightMap:$t,bumpMap:ve,normalMap:Se,displacementMap:Pe,emissiveMap:Re,normalMapObjectSpace:Se&&_.normalMapType===od,normalMapTangentSpace:Se&&_.normalMapType===xa,packedNormalMap:Se&&_.normalMapType===xa&&hg(_.normalMap.format),metalnessMap:fe,roughnessMap:ye,anisotropy:N,anisotropyMap:G,clearcoat:ze,clearcoatMap:q,clearcoatNormalMap:rt,clearcoatRoughnessMap:lt,dispersion:Jt,iridescence:P,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:ht,sheenRoughnessMap:Tt,specularMap:ft,specularColorMap:dt,specularIntensityMap:Rt,transmission:O,transmissionMap:Nt,thicknessMap:Bt,gradientMap:I,opaque:_.transparent===!1&&_.blending===Wn&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:K,alphaHash:ut,combine:_.combine,mapUv:ge&&g(_.map.channel),aoMapUv:Zt&&g(_.aoMap.channel),lightMapUv:$t&&g(_.lightMap.channel),bumpMapUv:ve&&g(_.bumpMap.channel),normalMapUv:Se&&g(_.normalMap.channel),displacementMapUv:Pe&&g(_.displacementMap.channel),emissiveMapUv:Re&&g(_.emissiveMap.channel),metalnessMapUv:fe&&g(_.metalnessMap.channel),roughnessMapUv:ye&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:q&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(_.sheenRoughnessMap.channel),specularMapUv:ft&&g(_.specularMap.channel),specularColorMapUv:dt&&g(_.specularColorMap.channel),specularIntensityMapUv:Rt&&g(_.specularIntensityMap.channel),transmissionMapUv:Nt&&g(_.transmissionMap.channel),thicknessMapUv:Bt&&g(_.thicknessMap.channel),alphaMapUv:at&&g(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||N),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ge||at),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Lt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:j,decodeVideoTexture:ge&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===Qt,decodeVideoTextureEmissive:Re&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===Qt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ti,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const E in _.defines)y.push(E),y.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(u(y,_),b(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function u(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function b(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const y=m[_.type];let E;if(y){const C=gi[y];E=Tu.clone(C.uniforms)}else E=_.uniforms;return E}function M(_,y){let E=h.get(y);return E!==void 0?++E.usedTimes:(E=new og(s,y,_,n),c.push(E),h.set(y,E)),E}function A(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function ug(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function fg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function xc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vc(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,g,v,p,u){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:u},s[t]=b):(b.id=d.id,b.object=d,b.geometry=m,b.material=g,b.materialVariant=o(d),b.groupOrder=v,b.renderOrder=d.renderOrder,b.z=p,b.group=u),t++,b}function l(d,m,g,v,p,u){const b=a(d,m,g,v,p,u);g.transmission>0?i.push(b):g.transparent===!0?n.push(b):e.push(b)}function c(d,m,g,v,p,u){const b=a(d,m,g,v,p,u);g.transmission>0?i.unshift(b):g.transparent===!0?n.unshift(b):e.unshift(b)}function h(d,m,g){e.length>1&&e.sort(d||fg),i.length>1&&i.sort(m||xc),n.length>1&&n.sort(m||xc),g&&(e.reverse(),i.reverse(),n.reverse())}function f(){for(let d=t,m=s.length;d<m;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function pg(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new vc,s.set(i,[o])):n>=r.length?(o=new vc,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ft};break;case"SpotLight":e={position:new D,direction:new D,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function gg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _g=0;function xg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vg(s){const t=new mg,e=gg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,r=new le,o=new le;function a(c){let h=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,b=0,w=0,M=0,A=0,T=0,R=0;c.sort(xg);for(let y=0,E=c.length;y<E;y++){const C=c[y],L=C.color,k=C.intensity,X=C.distance;let F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===un?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*k,f+=L.g*k,d+=L.b*k;else if(C.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(C.sh.coefficients[$],k);R++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,Q=e.get(C);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=$,m++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(L).multiplyScalar(k),$.distance=X,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,i.spot[v]=$;const H=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,H.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=H.matrix,C.castShadow){const Q=e.get(C);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=F,M++}v++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(L).multiplyScalar(k),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=$,p++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const H=C.shadow,Q=e.get(C);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(k),$.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[u]=$,u++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==m||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==p||_.hemiLength!==u||_.numDirectionalShadows!==b||_.numPointShadows!==w||_.numSpotShadows!==M||_.numSpotMaps!==A||_.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,_.directionalLength=m,_.pointLength=g,_.spotLength=v,_.rectAreaLength=p,_.hemiLength=u,_.numDirectionalShadows=b,_.numPointShadows=w,_.numSpotShadows=M,_.numSpotMaps=A,_.numLightProbes=R,i.version=_g++)}function l(c,h){let f=0,d=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const w=c[u];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(w.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function yc(s){const t=new vg(s),e=[],i=[],n=[];function r(d){f.camera=d,e.length=0,i.length=0,n.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function yg(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new yc(s),t.set(n,[a])):r>=o.length?(a=new yc(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`,bg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Eg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Mc=new le,ds=new D,Eo=new D;function wg(s,t,e){let i=new za;const n=new ot,r=new ot,o=new de,a=new Ru,l=new Lu,c={},h=e.maxTextureSize,f={[Qi]:We,[We]:Qi,[ti]:ti},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let u=this.type;this.render=function(T,R,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Oh&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ur);const y=s.getRenderTarget(),E=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Di),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=u!==this.type;k&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=T.length;X<F;X++){const $=T[X],H=$.shadow;if(H===void 0){Dt("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Q=H.getFrameExtents();n.multiply(Q),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,H.mapSize.y=r.y));const it=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=it,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===us){if($.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new yi(n.x,n.y,{format:un,type:Ui,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Zn(n.x,n.y,xi),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=Fi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De}else $.isPointLight?(H.map=new xh(n.x),H.map.depthTexture=new qd(n.x,Mi)):(H.map=new yi(n.x,n.y),H.map.depthTexture=new Zn(n.x,n.y,Mi)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=Fi,this.type===ur?(H.map.depthTexture.compareFunction=it?Oa:Fa,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De);H.camera.updateProjectionMatrix()}const ct=H.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ct;mt++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,mt),s.clear();else{mt===0&&(s.setRenderTarget(H.map),s.clear());const Mt=H.getViewport(mt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),L.viewport(o)}if($.isPointLight){const Mt=H.camera,qt=H.matrix,et=$.distance||Mt.far;et!==Mt.far&&(Mt.far=et,Mt.updateProjectionMatrix()),ds.setFromMatrixPosition($.matrixWorld),Mt.position.copy(ds),Eo.copy(Mt.position),Eo.add(bg[mt]),Mt.up.copy(Eg[mt]),Mt.lookAt(Eo),Mt.updateMatrixWorld(),qt.makeTranslation(-ds.x,-ds.y,-ds.z),Mc.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mc,Mt.coordinateSystem,Mt.reversedDepth)}else H.updateMatrices($);i=H.getFrustum(),M(R,_,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===us&&b(H,_),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(y,E,C)};function b(T,R){const _=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(n.x,n.y,{format:un,type:Ui})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,_,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,_,m,v,null)}function w(T,R,_,y){let E=null;const C=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)E=C;else if(E=_.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=E.uuid,k=R.uuid;let X=c[L];X===void 0&&(X={},c[L]=X);let F=X[k];F===void 0&&(F=E.clone(),X[k]=F,R.addEventListener("dispose",A)),E=F}if(E.visible=R.visible,E.wireframe=R.wireframe,y===us?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=s.properties.get(E);L.light=_}return E}function M(T,R,_,y,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===us)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const k=t.update(T),X=T.material;if(Array.isArray(X)){const F=k.groups;for(let $=0,H=F.length;$<H;$++){const Q=F[$],it=X[Q.materialIndex];if(it&&it.visible){const ct=w(T,it,y,E);T.onBeforeShadow(s,T,R,_,k,ct,Q),s.renderBufferDirect(_,null,k,ct,T,Q),T.onAfterShadow(s,T,R,_,k,ct,Q)}}}else if(X.visible){const F=w(T,X,y,E);T.onBeforeShadow(s,T,R,_,k,F,null),s.renderBufferDirect(_,null,k,F,T,null),T.onAfterShadow(s,T,R,_,k,F,null)}}const L=T.children;for(let k=0,X=L.length;k<X;k++)M(L[k],R,_,y,E)}function A(T){T.target.removeEventListener("dispose",A);for(const _ in c){const y=c[_],E=T.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Tg(s,t){function e(){let I=!1;const at=new de;let K=null;const ut=new de(0,0,0,0);return{setMask:function(xt){K!==xt&&!I&&(s.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){I=xt},setClear:function(xt,j,wt,bt,pe){pe===!0&&(xt*=bt,j*=bt,wt*=bt),at.set(xt,j,wt,bt),ut.equals(at)===!1&&(s.clearColor(xt,j,wt,bt),ut.copy(at))},reset:function(){I=!1,K=null,ut.set(-1,0,0,0)}}}function i(){let I=!1,at=!1,K=null,ut=null,xt=null;return{setReversed:function(j){if(at!==j){const wt=t.get("EXT_clip_control");j?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),at=j;const bt=xt;xt=null,this.setClear(bt)}},getReversed:function(){return at},setTest:function(j){j?tt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(j){K!==j&&!I&&(s.depthMask(j),K=j)},setFunc:function(j){if(at&&(j=gd[j]),ut!==j){switch(j){case Io:s.depthFunc(s.NEVER);break;case No:s.depthFunc(s.ALWAYS);break;case Uo:s.depthFunc(s.LESS);break;case Yn:s.depthFunc(s.LEQUAL);break;case Fo:s.depthFunc(s.EQUAL);break;case Oo:s.depthFunc(s.GEQUAL);break;case Bo:s.depthFunc(s.GREATER);break;case ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=j}},setLocked:function(j){I=j},setClear:function(j){xt!==j&&(xt=j,at&&(j=1-j),s.clearDepth(j))},reset:function(){I=!1,K=null,ut=null,xt=null,at=!1}}}function n(){let I=!1,at=null,K=null,ut=null,xt=null,j=null,wt=null,bt=null,pe=null;return{setTest:function(oe){I||(oe?tt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(oe){at!==oe&&!I&&(s.stencilMask(oe),at=oe)},setFunc:function(oe,hi,di){(K!==oe||ut!==hi||xt!==di)&&(s.stencilFunc(oe,hi,di),K=oe,ut=hi,xt=di)},setOp:function(oe,hi,di){(j!==oe||wt!==hi||bt!==di)&&(s.stencilOp(oe,hi,di),j=oe,wt=hi,bt=di)},setLocked:function(oe){I=oe},setClear:function(oe){pe!==oe&&(s.clearStencil(oe),pe=oe)},reset:function(){I=!1,at=null,K=null,ut=null,xt=null,j=null,wt=null,bt=null,pe=null}}}const r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},f={},d={},m=new WeakMap,g=[],v=null,p=!1,u=null,b=null,w=null,M=null,A=null,T=null,R=null,_=new Ft(0,0,0),y=0,E=!1,C=null,L=null,k=null,X=null,F=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(it)[1]),H=Q>=1):it.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),H=Q>=2);let ct=null,mt={};const Mt=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),et=new de().fromArray(Mt),vt=new de().fromArray(qt);function V(I,at,K,ut){const xt=new Uint8Array(4),j=s.createTexture();s.bindTexture(I,j),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let wt=0;wt<K;wt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(at+wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return j}const nt={};nt[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),o.setFunc(Yn),ve(!1),Se(ll),tt(s.CULL_FACE),Zt(Di);function tt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Lt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ot(I,at){return d[I]!==at?(s.bindFramebuffer(I,at),d[I]=at,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function It(I,at){let K=g,ut=!1;if(I){K=m.get(at),K===void 0&&(K=[],m.set(at,K));const xt=I.textures;if(K.length!==xt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let j=0,wt=xt.length;j<wt;j++)K[j]=s.COLOR_ATTACHMENT0+j;K.length=xt.length,ut=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ut=!0);ut&&s.drawBuffers(K)}function ge(I){return v!==I?(s.useProgram(I),v=I,!0):!1}const Vt={[an]:s.FUNC_ADD,[kh]:s.FUNC_SUBTRACT,[zh]:s.FUNC_REVERSE_SUBTRACT};Vt[Hh]=s.MIN,Vt[Gh]=s.MAX;const ne={[Vh]:s.ZERO,[Wh]:s.ONE,[Xh]:s.SRC_COLOR,[Lo]:s.SRC_ALPHA,[Jh]:s.SRC_ALPHA_SATURATE,[Kh]:s.DST_COLOR,[$h]:s.DST_ALPHA,[qh]:s.ONE_MINUS_SRC_COLOR,[Do]:s.ONE_MINUS_SRC_ALPHA,[Zh]:s.ONE_MINUS_DST_COLOR,[Yh]:s.ONE_MINUS_DST_ALPHA,[Qh]:s.CONSTANT_COLOR,[jh]:s.ONE_MINUS_CONSTANT_COLOR,[td]:s.CONSTANT_ALPHA,[ed]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(I,at,K,ut,xt,j,wt,bt,pe,oe){if(I===Di){p===!0&&(Lt(s.BLEND),p=!1);return}if(p===!1&&(tt(s.BLEND),p=!0),I!==Bh){if(I!==u||oe!==E){if((b!==an||A!==an)&&(s.blendEquation(s.FUNC_ADD),b=an,A=an),oe)switch(I){case Wn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cl:s.blendFunc(s.ONE,s.ONE);break;case hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",I);break}else switch(I){case Wn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hl:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",I);break}w=null,M=null,T=null,R=null,_.set(0,0,0),y=0,u=I,E=oe}return}xt=xt||at,j=j||K,wt=wt||ut,(at!==b||xt!==A)&&(s.blendEquationSeparate(Vt[at],Vt[xt]),b=at,A=xt),(K!==w||ut!==M||j!==T||wt!==R)&&(s.blendFuncSeparate(ne[K],ne[ut],ne[j],ne[wt]),w=K,M=ut,T=j,R=wt),(bt.equals(_)===!1||pe!==y)&&(s.blendColor(bt.r,bt.g,bt.b,pe),_.copy(bt),y=pe),u=I,E=!1}function $t(I,at){I.side===ti?Lt(s.CULL_FACE):tt(s.CULL_FACE);let K=I.side===We;at&&(K=!K),ve(K),I.blending===Wn&&I.transparent===!1?Zt(Di):Zt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ut=I.stencilWrite;a.setTest(ut),ut&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(I){C!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),C=I)}function Se(I){I!==Uh?(tt(s.CULL_FACE),I!==L&&(I===ll?s.cullFace(s.BACK):I===Fh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),L=I}function Pe(I){I!==k&&(H&&s.lineWidth(I),k=I)}function Re(I,at,K){I?(tt(s.POLYGON_OFFSET_FILL),(X!==at||F!==K)&&(X=at,F=K,o.getReversed()&&(at=-at),s.polygonOffset(at,K))):Lt(s.POLYGON_OFFSET_FILL)}function fe(I){I?tt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function ye(I){I===void 0&&(I=s.TEXTURE0+$-1),ct!==I&&(s.activeTexture(I),ct=I)}function N(I,at,K){K===void 0&&(ct===null?K=s.TEXTURE0+$-1:K=ct);let ut=mt[K];ut===void 0&&(ut={type:void 0,texture:void 0},mt[K]=ut),(ut.type!==I||ut.texture!==at)&&(ct!==K&&(s.activeTexture(K),ct=K),s.bindTexture(I,at||nt[I]),ut.type=I,ut.texture=at)}function ze(){const I=mt[ct];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Jt(){try{s.compressedTexImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function x(){try{s.texSubImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function O(){try{s.texSubImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function rt(){try{s.texStorage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function lt(){try{s.texStorage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Y(){try{s.texImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Z(){try{s.texImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function ht(I){return f[I]!==void 0?f[I]:s.getParameter(I)}function Tt(I,at){f[I]!==at&&(s.pixelStorei(I,at),f[I]=at)}function ft(I){et.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function dt(I){vt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),vt.copy(I))}function Rt(I,at){let K=c.get(at);K===void 0&&(K=new WeakMap,c.set(at,K));let ut=K.get(I);ut===void 0&&(ut=s.getUniformBlockIndex(at,I.name),K.set(I,ut))}function Nt(I,at){const ut=c.get(at).get(I);l.get(at)!==ut&&(s.uniformBlockBinding(at,ut,I.__bindingPointIndex),l.set(at,ut))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},ct=null,mt={},d={},m=new WeakMap,g=[],v=null,p=!1,u=null,b=null,w=null,M=null,A=null,T=null,R=null,_=new Ft(0,0,0),y=0,E=!1,C=null,L=null,k=null,X=null,F=null,et.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:Lt,bindFramebuffer:Ot,drawBuffers:It,useProgram:ge,setBlending:Zt,setMaterial:$t,setFlipSided:ve,setCullFace:Se,setLineWidth:Pe,setPolygonOffset:Re,setScissorTest:fe,activeTexture:ye,bindTexture:N,unbindTexture:ze,compressedTexImage2D:Jt,compressedTexImage3D:P,texImage2D:Y,texImage3D:Z,pixelStorei:Tt,getParameter:ht,updateUBOMapping:Rt,uniformBlockBinding:Nt,texStorage2D:rt,texStorage3D:lt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:ft,viewport:dt,reset:Bt}}function Ag(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,x){return g?new OffscreenCanvas(P,x):Er("canvas")}function p(P,x,O){let G=1;const q=Jt(P);if((q.width>O||q.height>O)&&(G=O/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const rt=Math.floor(G*q.width),lt=Math.floor(G*q.height);d===void 0&&(d=v(rt,lt));const Y=x?v(rt,lt):d;return Y.width=rt,Y.height=lt,Y.getContext("2d").drawImage(P,0,0,rt,lt),Dt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+rt+"x"+lt+")."),Y}else return"data"in P&&Dt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),P;return P}function u(P){return P.generateMipmaps}function b(P){s.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,x,O,G,q,rt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt;G&&(lt=t.get("EXT_texture_norm16"),lt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),O===s.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),O===s.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),O===s.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const Z=rt?br:Xt.getTransfer(q);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=Z===Qt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),O===s.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function A(P,x){let O;return P?x===null||x===Mi||x===Ms?O=s.DEPTH24_STENCIL8:x===xi?O=s.DEPTH32F_STENCIL8:x===ys&&(O=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===Ms?O=s.DEPTH_COMPONENT24:x===xi?O=s.DEPTH_COMPONENT32F:x===ys&&(O=s.DEPTH_COMPONENT16),O}function T(P,x){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==De&&P.minFilter!==Fe?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function R(P){const x=P.target;x.removeEventListener("dispose",R),y(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(P){const x=P.target;x.removeEventListener("dispose",_),C(x)}function y(P){const x=i.get(P);if(x.__webglInit===void 0)return;const O=P.source,G=m.get(O);if(G){const q=G[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(P),Object.keys(G).length===0&&m.delete(O)}i.remove(P)}function E(P){const x=i.get(P);s.deleteTexture(x.__webglTexture);const O=P.source,G=m.get(O);delete G[x.__cacheKey],o.memory.textures--}function C(P){const x=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let q=0;q<x.__webglFramebuffer[G].length;q++)s.deleteFramebuffer(x.__webglFramebuffer[G][q]);else s.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)s.deleteFramebuffer(x.__webglFramebuffer[G]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=P.textures;for(let G=0,q=O.length;G<q;G++){const rt=i.get(O[G]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(O[G])}i.remove(P)}let L=0;function k(){L=0}function X(){return L}function F(P){L=P}function $(){const P=L;return P>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),L+=1,P}function H(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function Q(P,x){const O=i.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const G=P.image;if(G===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(O,P,x);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function it(P,x){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Lt(O,P,x);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function ct(P,x){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Lt(O,P,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function mt(P,x){const O=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){Ot(O,P,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const Mt={[zo]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[Ho]:s.MIRRORED_REPEAT},qt={[De]:s.NEAREST,[sd]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Fe]:s.LINEAR,[Gr]:s.LINEAR_MIPMAP_NEAREST,[cn]:s.LINEAR_MIPMAP_LINEAR},et={[ad]:s.NEVER,[ud]:s.ALWAYS,[ld]:s.LESS,[Fa]:s.LEQUAL,[cd]:s.EQUAL,[Oa]:s.GEQUAL,[hd]:s.GREATER,[dd]:s.NOTEQUAL};function vt(P,x){if(x.type===xi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Fe||x.magFilter===Gr||x.magFilter===Ls||x.magFilter===cn||x.minFilter===Fe||x.minFilter===Gr||x.minFilter===Ls||x.minFilter===cn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Mt[x.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Mt[x.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Mt[x.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,qt[x.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,qt[x.minFilter]),x.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==Ls&&x.minFilter!==cn||x.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function V(P,x){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",R));const G=x.source;let q=m.get(G);q===void 0&&(q={},m.set(G,q));const rt=H(x);if(rt!==P.__cacheKey){q[rt]===void 0&&(q[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),q[rt].usedTimes++;const lt=q[P.__cacheKey];lt!==void 0&&(q[P.__cacheKey].usedTimes--,lt.usedTimes===0&&E(x)),P.__cacheKey=rt,P.__webglTexture=q[rt].texture}return O}function nt(P,x,O){return Math.floor(Math.floor(P/O)/x)}function tt(P,x,O,G){const rt=P.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{rt.sort((Tt,ft)=>Tt.start-ft.start);let lt=0;for(let Tt=1;Tt<rt.length;Tt++){const ft=rt[lt],dt=rt[Tt],Rt=ft.start+ft.count,Nt=nt(dt.start,x.width,4),Bt=nt(ft.start,x.width,4);dt.start<=Rt+1&&Nt===Bt&&nt(dt.start+dt.count-1,x.width,4)===Nt?ft.count=Math.max(ft.count,dt.start+dt.count-ft.start):(++lt,rt[lt]=dt)}rt.length=lt+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),Z=e.getParameter(s.UNPACK_SKIP_PIXELS),ht=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Tt=0,ft=rt.length;Tt<ft;Tt++){const dt=rt[Tt],Rt=Math.floor(dt.start/4),Nt=Math.ceil(dt.count/4),Bt=Rt%x.width,I=Math.floor(Rt/x.width),at=Nt,K=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Bt,I,at,K,O,G,x.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht)}}function Lt(P,x,O){let G=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=s.TEXTURE_3D);const q=V(P,x),rt=x.source;e.bindTexture(G,P.__webglTexture,s.TEXTURE0+O);const lt=i.get(rt);if(rt.version!==lt.__version||q===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===Zi?null:Xt.getPrimaries(x.colorSpace),xt=x.colorSpace===Zi||K===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=p(x.image,!1,n.maxTextureSize);Z=ze(x,Z);const ht=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type);let ft=M(x.internalFormat,ht,Tt,x.normalized,x.colorSpace,x.isVideoTexture);vt(G,x);let dt;const Rt=x.mipmaps,Nt=x.isVideoTexture!==!0,Bt=lt.__version===void 0||q===!0,I=rt.dataReady,at=T(x,Z);if(x.isDepthTexture)ft=A(x.format===hn,x.type),Bt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,ft,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,ft,Z.width,Z.height,0,ht,Tt,null));else if(x.isDataTexture)if(Rt.length>0){Nt&&Bt&&e.texStorage2D(s.TEXTURE_2D,at,ft,Rt[0].width,Rt[0].height);for(let K=0,ut=Rt.length;K<ut;K++)dt=Rt[K],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,dt.width,dt.height,ht,Tt,dt.data):e.texImage2D(s.TEXTURE_2D,K,ft,dt.width,dt.height,0,ht,Tt,dt.data);x.generateMipmaps=!1}else Nt?(Bt&&e.texStorage2D(s.TEXTURE_2D,at,ft,Z.width,Z.height),I&&tt(x,Z,ht,Tt)):e.texImage2D(s.TEXTURE_2D,0,ft,Z.width,Z.height,0,ht,Tt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,ft,Rt[0].width,Rt[0].height,Z.depth);for(let K=0,ut=Rt.length;K<ut;K++)if(dt=Rt[K],x.format!==ai)if(ht!==null)if(Nt){if(I)if(x.layerUpdates.size>0){const xt=Ql(dt.width,dt.height,x.format,x.type);for(const j of x.layerUpdates){const wt=dt.data.subarray(j*xt/dt.data.BYTES_PER_ELEMENT,(j+1)*xt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,j,dt.width,dt.height,1,ht,wt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,dt.width,dt.height,Z.depth,ht,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ft,dt.width,dt.height,Z.depth,0,dt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,dt.width,dt.height,Z.depth,ht,Tt,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,ft,dt.width,dt.height,Z.depth,0,ht,Tt,dt.data)}else{Nt&&Bt&&e.texStorage2D(s.TEXTURE_2D,at,ft,Rt[0].width,Rt[0].height);for(let K=0,ut=Rt.length;K<ut;K++)dt=Rt[K],x.format!==ai?ht!==null?Nt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,ft,dt.width,dt.height,0,dt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,dt.width,dt.height,ht,Tt,dt.data):e.texImage2D(s.TEXTURE_2D,K,ft,dt.width,dt.height,0,ht,Tt,dt.data)}else if(x.isDataArrayTexture)if(Nt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,ft,Z.width,Z.height,Z.depth),I)if(x.layerUpdates.size>0){const K=Ql(Z.width,Z.height,x.format,x.type);for(const ut of x.layerUpdates){const xt=Z.data.subarray(ut*K/Z.data.BYTES_PER_ELEMENT,(ut+1)*K/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,Z.width,Z.height,1,ht,Tt,xt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ht,Tt,Z.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,Z.width,Z.height,Z.depth,0,ht,Tt,Z.data);else if(x.isData3DTexture)Nt?(Bt&&e.texStorage3D(s.TEXTURE_3D,at,ft,Z.width,Z.height,Z.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ht,Tt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,ft,Z.width,Z.height,Z.depth,0,ht,Tt,Z.data);else if(x.isFramebufferTexture){if(Bt)if(Nt)e.texStorage2D(s.TEXTURE_2D,at,ft,Z.width,Z.height);else{let K=Z.width,ut=Z.height;for(let xt=0;xt<at;xt++)e.texImage2D(s.TEXTURE_2D,xt,ft,K,ut,0,ht,Tt,null),K>>=1,ut>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),f.add(x),K.onpaint=ut=>{const xt=ut.changedElements;for(const j of f)xt.includes(j.image)&&(j.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{const xt=s.RGBA,j=s.RGBA,wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,j,wt,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Nt&&Bt){const K=Jt(Rt[0]);e.texStorage2D(s.TEXTURE_2D,at,ft,K.width,K.height)}for(let K=0,ut=Rt.length;K<ut;K++)dt=Rt[K],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ht,Tt,dt):e.texImage2D(s.TEXTURE_2D,K,ft,ht,Tt,dt);x.generateMipmaps=!1}else if(Nt){if(Bt){const K=Jt(Z);e.texStorage2D(s.TEXTURE_2D,at,ft,K.width,K.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,Tt,Z)}else e.texImage2D(s.TEXTURE_2D,0,ft,ht,Tt,Z);u(x)&&b(G),lt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ot(P,x,O){if(x.image.length!==6)return;const G=V(P,x),q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+O);const rt=i.get(q);if(q.version!==rt.__version||G===!0){e.activeTexture(s.TEXTURE0+O);const lt=Xt.getPrimaries(Xt.workingColorSpace),Y=x.colorSpace===Zi?null:Xt.getPrimaries(x.colorSpace),Z=x.colorSpace===Zi||lt===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ht=x.isCompressedTexture||x.image[0].isCompressedTexture,Tt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!ht&&!Tt?ft[j]=p(x.image[j],!0,n.maxCubemapSize):ft[j]=Tt?x.image[j].image:x.image[j],ft[j]=ze(x,ft[j]);const dt=ft[0],Rt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),Bt=M(x.internalFormat,Rt,Nt,x.normalized,x.colorSpace),I=x.isVideoTexture!==!0,at=rt.__version===void 0||G===!0,K=q.dataReady;let ut=T(x,dt);vt(s.TEXTURE_CUBE_MAP,x);let xt;if(ht){I&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Bt,dt.width,dt.height);for(let j=0;j<6;j++){xt=ft[j].mipmaps;for(let wt=0;wt<xt.length;wt++){const bt=xt[wt];x.format!==ai?Rt!==null?I?K&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,Bt,bt.width,bt.height,0,bt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,bt.width,bt.height,Rt,Nt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,Bt,bt.width,bt.height,0,Rt,Nt,bt.data)}}}else{if(xt=x.mipmaps,I&&at){xt.length>0&&ut++;const j=Jt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(Tt){I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Rt,Nt,ft[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,ft[j].width,ft[j].height,0,Rt,Nt,ft[j].data);for(let wt=0;wt<xt.length;wt++){const pe=xt[wt].image[j].image;I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,pe.width,pe.height,Rt,Nt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,Bt,pe.width,pe.height,0,Rt,Nt,pe.data)}}else{I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,Nt,ft[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,Rt,Nt,ft[j]);for(let wt=0;wt<xt.length;wt++){const bt=xt[wt];I?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,Rt,Nt,bt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,Bt,Rt,Nt,bt.image[j])}}}u(x)&&b(s.TEXTURE_CUBE_MAP),rt.__version=q.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function It(P,x,O,G,q,rt){const lt=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),Z=M(O.internalFormat,lt,Y,O.normalized,O.colorSpace),ht=i.get(x),Tt=i.get(O);if(Tt.__renderTarget=x,!ht.__hasExternalTextures){const ft=Math.max(1,x.width>>rt),dt=Math.max(1,x.height>>rt);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?e.texImage3D(q,rt,Z,ft,dt,x.depth,0,lt,Y,null):e.texImage2D(q,rt,Z,ft,dt,0,lt,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ye(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,q,Tt.__webglTexture,0,fe(x)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,q,Tt.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(P,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,P),x.depthBuffer){const G=x.depthTexture,q=G&&G.isDepthTexture?G.type:null,rt=A(x.stencilBuffer,q),lt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ye(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe(x),rt,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe(x),rt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,rt,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,P)}else{const G=x.textures;for(let q=0;q<G.length;q++){const rt=G[q],lt=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),Z=M(rt.internalFormat,lt,Y,rt.normalized,rt.colorSpace);ye(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe(x),Z,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe(x),Z,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Z,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(P,x,O){const G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),vt(s.TEXTURE_CUBE_MAP,x.depthTexture);const ht=r.convert(x.depthTexture.format),Tt=r.convert(x.depthTexture.type);let ft;x.depthTexture.format===Fi?ft=s.DEPTH_COMPONENT24:x.depthTexture.format===hn&&(ft=s.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ft,x.width,x.height,0,ht,Tt,null)}}else Q(x.depthTexture,0);const rt=q.__webglTexture,lt=fe(x),Y=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Z=x.depthTexture.format===hn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fi)ye(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Y,rt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,Z,Y,rt,0);else if(x.depthTexture.format===hn)ye(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Y,rt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,Z,Y,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(P){const x=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){const G=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=G}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Vt(x.__webglFramebuffer[G],P,G);else{const G=P.texture.mipmaps;G&&G.length>0?Vt(x.__webglFramebuffer[0],P,0):Vt(x.__webglFramebuffer,P,0)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=s.createRenderbuffer(),ge(x.__webglDepthbuffer[G],P,!1);else{const q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,rt)}}else{const G=P.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ge(x.__webglDepthbuffer,P,!1);else{const q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,rt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(P,x,O){const G=i.get(P);x!==void 0&&It(G.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ne(P)}function $t(P){const x=P.texture,O=i.get(P),G=i.get(x);P.addEventListener("dispose",_);const q=P.textures,rt=P.isWebGLCubeRenderTarget===!0,lt=q.length>1;if(lt||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=x.version,o.memory.textures++),rt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(lt)for(let Y=0,Z=q.length;Y<Z;Y++){const ht=i.get(q[Y]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){const Z=q[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ht=r.convert(Z.format,Z.colorSpace),Tt=r.convert(Z.type),ft=M(Z.internalFormat,ht,Tt,Z.normalized,Z.colorSpace,P.isXRRenderTarget===!0),dt=fe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ft,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),vt(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)It(O.__webglFramebuffer[Y][Z],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else It(O.__webglFramebuffer[Y],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);u(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Y=0,Z=q.length;Y<Z;Y++){const ht=q[Y],Tt=i.get(ht);let ft=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,Tt.__webglTexture),vt(ft,ht),It(O.__webglFramebuffer,P,ht,s.COLOR_ATTACHMENT0+Y,ft,0),u(ht)&&b(ft)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Y=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,G.__webglTexture),vt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)It(O.__webglFramebuffer[Z],P,x,s.COLOR_ATTACHMENT0,Y,Z);else It(O.__webglFramebuffer,P,x,s.COLOR_ATTACHMENT0,Y,0);u(x)&&b(Y),e.unbindTexture()}P.depthBuffer&&ne(P)}function ve(P){const x=P.textures;for(let O=0,G=x.length;O<G;O++){const q=x[O];if(u(q)){const rt=w(P),lt=i.get(q).__webglTexture;e.bindTexture(rt,lt),b(rt),e.unbindTexture()}}}const Se=[],Pe=[];function Re(P){if(P.samples>0){if(ye(P)===!1){const x=P.textures,O=P.width,G=P.height;let q=s.COLOR_BUFFER_BIT;const rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=i.get(P),Y=x.length>1;if(Y)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Z=P.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);const Tt=i.get(x[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,O,G,0,0,O,G,q,s.NEAREST),l===!0&&(Se.length=0,Pe.length=0,Se.push(s.COLOR_ATTACHMENT0+ht),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Se.push(rt),Pe.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Pe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);const Tt=i.get(x[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const x=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function fe(P){return Math.min(n.maxSamples,P.samples)}function ye(P){const x=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(P){const x=o.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function ze(P,x){const O=P.colorSpace,G=P.format,q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Sr&&O!==Zi&&(Xt.getTransfer(O)===Qt?(G!==ai||q!==Ke)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",O)),x}function Jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=k,this.getTextureUnits=X,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=it,this.setTexture3D=ct,this.setTextureCube=mt,this.rebindTextures=Zt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pg(s,t){function e(i,n=Zi){let r;const o=Xt.getTransfer(n);if(i===Ke)return s.UNSIGNED_BYTE;if(i===La)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Da)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Wc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Xc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return s.BYTE;if(i===Vc)return s.SHORT;if(i===ys)return s.UNSIGNED_SHORT;if(i===Ra)return s.INT;if(i===Mi)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===Ui)return s.HALF_FLOAT;if(i===qc)return s.ALPHA;if(i===$c)return s.RGB;if(i===ai)return s.RGBA;if(i===Fi)return s.DEPTH_COMPONENT;if(i===hn)return s.DEPTH_STENCIL;if(i===Yc)return s.RED;if(i===Ia)return s.RED_INTEGER;if(i===un)return s.RG;if(i===Na)return s.RG_INTEGER;if(i===Ua)return s.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Go||i===Vo||i===Wo||i===Xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===$o||i===Yo||i===Ko||i===Zo||i===yr||i===Jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qo||i===$o)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ko)return r.COMPRESSED_R11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yr)return r.COMPRESSED_RG11_EAC;if(i===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qo||i===jo||i===ta||i===ea||i===ia||i===na||i===sa||i===ra||i===oa||i===aa||i===la||i===ca||i===ha||i===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ta)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ea)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ia)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===na)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ra)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===aa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===la)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ca)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ha)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ua||i===fa||i===pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ua)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ma||i===ga||i===Mr||i===_a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new nh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:Cg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends tn{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Lg,u={},b=e.getContextAttributes();let w=null,M=null;const A=[],T=[],R=new ot;let _=null;const y=new Ye;y.viewport=new de;const E=new Ye;E.viewport=new de;const C=[y,E],L=new Bu;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let nt=A[V];return nt===void 0&&(nt=new Kr,A[V]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(V){let nt=A[V];return nt===void 0&&(nt=new Kr,A[V]=nt),nt.getGripSpace()},this.getHand=function(V){let nt=A[V];return nt===void 0&&(nt=new Kr,A[V]=nt),nt.getHandSpace()};function F(V){const nt=T.indexOf(V.inputSource);if(nt===-1)return;const tt=A[nt];tt!==void 0&&(tt.update(V.inputSource,V.frame,c||o),tt.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",H);for(let V=0;V<A.length;V++){const nt=T[V];nt!==null&&(T[V]=null,A[V].disconnect(nt))}k=null,X=null,p.reset();for(const V in u)delete u[V];t.setRenderTarget(w),m=null,d=null,f=null,n=null,M=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",$),n.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,Lt=null,Ot=null;b.depth&&(Ot=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=b.stencil?hn:Fi,Lt=b.stencil?Ms:Mi);const It={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(It),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new yi(d.textureWidth,d.textureHeight,{format:ai,type:Ke,depthTexture:new Zn(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const tt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new yi(m.framebufferWidth,m.framebufferHeight,{format:ai,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),vt.setContext(n),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(V){for(let nt=0;nt<V.removed.length;nt++){const tt=V.removed[nt],Lt=T.indexOf(tt);Lt>=0&&(T[Lt]=null,A[Lt].disconnect(tt))}for(let nt=0;nt<V.added.length;nt++){const tt=V.added[nt];let Lt=T.indexOf(tt);if(Lt===-1){for(let It=0;It<A.length;It++)if(It>=T.length){T.push(tt),Lt=It;break}else if(T[It]===null){T[It]=tt,Lt=It;break}if(Lt===-1)break}const Ot=A[Lt];Ot&&Ot.connect(tt)}}const Q=new D,it=new D;function ct(V,nt,tt){Q.setFromMatrixPosition(nt.matrixWorld),it.setFromMatrixPosition(tt.matrixWorld);const Lt=Q.distanceTo(it),Ot=nt.projectionMatrix.elements,It=tt.projectionMatrix.elements,ge=Ot[14]/(Ot[10]-1),Vt=Ot[14]/(Ot[10]+1),ne=(Ot[9]+1)/Ot[5],Zt=(Ot[9]-1)/Ot[5],$t=(Ot[8]-1)/Ot[0],ve=(It[8]+1)/It[0],Se=ge*$t,Pe=ge*ve,Re=Lt/(-$t+ve),fe=Re*-$t;if(nt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(fe),V.translateZ(Re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ot[10]===-1)V.projectionMatrix.copy(nt.projectionMatrix),V.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const ye=ge+Re,N=Vt+Re,ze=Se-fe,Jt=Pe+(Lt-fe),P=ne*Vt/N*ye,x=Zt*Vt/N*ye;V.projectionMatrix.makePerspective(ze,Jt,P,x,ye,N),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function mt(V,nt){nt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(nt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;let nt=V.near,tt=V.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(tt=p.depthFar)),L.near=E.near=y.near=nt,L.far=E.far=y.far=tt,(k!==L.near||X!==L.far)&&(n.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,X=L.far),L.layers.mask=V.layers.mask|6,y.layers.mask=L.layers.mask&-5,E.layers.mask=L.layers.mask&-3;const Lt=V.parent,Ot=L.cameras;mt(L,Lt);for(let It=0;It<Ot.length;It++)mt(Ot[It],Lt);Ot.length===2?ct(L,y,E):L.projectionMatrix.copy(y.projectionMatrix),Mt(V,L,Lt)};function Mt(V,nt,tt){tt===null?V.matrix.copy(nt.matrixWorld):(V.matrix.copy(tt.matrixWorld),V.matrix.invert(),V.matrix.multiply(nt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(nt.projectionMatrix),V.projectionMatrixInverse.copy(nt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ya*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(V){return u[V]};let qt=null;function et(V,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const tt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Lt=!1;tt.length!==L.cameras.length&&(L.cameras.length=0,Lt=!0);for(let Vt=0;Vt<tt.length;Vt++){const ne=tt[Vt];let Zt=null;if(m!==null)Zt=m.getViewport(ne);else{const ve=f.getViewSubImage(d,ne);Zt=ve.viewport,Vt===0&&(t.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(M))}let $t=C[Vt];$t===void 0&&($t=new Ye,$t.layers.enable(Vt),$t.viewport=new de,C[Vt]=$t),$t.matrix.fromArray(ne.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ne.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Vt===0&&(L.matrix.copy($t.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Lt===!0&&L.cameras.push($t)}const Ot=n.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Vt=f.getDepthInformation(tt[0]);Vt&&Vt.isValid&&Vt.texture&&p.init(Vt,n.renderState)}if(Ot&&Ot.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let Vt=0;Vt<tt.length;Vt++){const ne=tt[Vt].camera;if(ne){let Zt=u[ne];Zt||(Zt=new nh,u[ne]=Zt);const $t=f.getCameraImage(ne);Zt.sourceTexture=$t}}}}for(let tt=0;tt<A.length;tt++){const Lt=T[tt],Ot=A[tt];Lt!==null&&Ot!==void 0&&Ot.update(Lt,nt,c||o)}qt&&qt(V,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const vt=new gh;vt.setAnimationLoop(et),this.setAnimationLoop=function(V){qt=V},this.dispose=function(){}}}const Ig=new le,bh=new Ut;bh.set(-1,0,0,0,1,0,0,0,1);function Ng(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,uh(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,b,w,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,w):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===We&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===We&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),w=b.envMap,M=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(bh),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=w*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ug(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const T=A.program;i.uniformBlockBinding(M,T)}function c(M,A){let T=n[M.id];T===void 0&&(p(M),T=h(M),n[M.id]=T,M.addEventListener("dispose",b));const R=A.program;i.updateUBOMapping(M,R);const _=t.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){const A=f();M.__bindingPointIndex=A;const T=s.createBuffer(),R=M.__size,_=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,T),T}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const A=n[M.id],T=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let _=0,y=T.length;_<y;_++){const E=T[_];if(Array.isArray(E))for(let C=0,L=E.length;C<L;C++)m(E[C],_,C,R);else m(E,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,A,T,R){if(v(M,A,T,R)===!0){const _=M.__offset,y=M.value;if(Array.isArray(y)){let E=0;for(let C=0;C<y.length;C++){const L=y[C],k=u(L);g(L,M.__data,E),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(E+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,M.__data)}}function g(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function v(M,A,T,R){const _=M.value,y=A+"_"+T;if(R[y]===void 0)return typeof _=="number"||typeof _=="boolean"?R[y]=_:ArrayBuffer.isView(_)?R[y]=_.slice():R[y]=_.clone(),!0;{const E=R[y];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return R[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(M){const A=M.uniforms;let T=0;const R=16;for(let y=0,E=A.length;y<E;y++){const C=Array.isArray(A[y])?A[y]:[A[y]];for(let L=0,k=C.length;L<k;L++){const X=C[L],F=Array.isArray(X.value)?X.value:[X.value];for(let $=0,H=F.length;$<H;$++){const Q=F[$],it=u(Q),ct=T%R,mt=ct%it.boundary,Mt=ct+mt;T+=mt,Mt!==0&&R-Mt<it.storage&&(T+=R-Mt),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=it.storage}}}const _=T%R;return _>0&&(T+=R-_),M.__size=T,M.__cache={},this}function u(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){const A=M.target;A.removeEventListener("dispose",b);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(n[A.id]),delete n[A.id],delete r[A.id]}function w(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:l,update:c,dispose:w}}const Fg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function Og(){return pi===null&&(pi=new zd(Fg,16,16,un,Ui),pi.name="DFG_LUT",pi.minFilter=Fe,pi.magFilter=Fe,pi.wrapS=Li,pi.wrapT=Li,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class Bg{constructor(t={}){const{canvas:e=pd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ke}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=m,p=new Set([Ua,Na,Ia]),u=new Set([Ke,Mi,ys,Ms,La,Da]),b=new Uint32Array(4),w=new Int32Array(4),M=new D;let A=null,T=null;const R=[],_=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1,L=null,k=null,X=null,F=null;this._outputColorSpace=je;let $=0,H=0,Q=null,it=-1,ct=null;const mt=new de,Mt=new de;let qt=null;const et=new Ft(0);let vt=0,V=e.width,nt=e.height,tt=1,Lt=null,Ot=null;const It=new de(0,0,V,nt),ge=new de(0,0,V,nt);let Vt=!1;const ne=new za;let Zt=!1,$t=!1;const ve=new le,Se=new D,Pe=new de,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ye(){return Q===null?tt:1}let N=i;function ze(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r185"),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",hi,!1),N===null){const U="webgl2";if(N=ze(U,S),N===null)throw ze(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Wt("WebGLRenderer: "+S.message),S}let Jt,P,x,O,G,q,rt,lt,Y,Z,ht,Tt,ft,dt,Rt,Nt,Bt,I,at,K,ut,xt,j;function wt(){Jt=new Om(N),Jt.init(),ut=new Pg(N,Jt),P=new Cm(N,Jt,t,ut),x=new Tg(N,Jt),P.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),k=N.createFramebuffer(),X=N.createFramebuffer(),F=N.createFramebuffer(),O=new zm(N),G=new ug,q=new Ag(N,Jt,x,G,P,ut,O),rt=new Fm(E),lt=new Vu(N),xt=new Am(N,lt),Y=new Bm(N,lt,O,xt),Z=new Gm(N,Y,lt,xt,O),I=new Hm(N,P,q),Rt=new Rm(G),ht=new dg(E,rt,Jt,P,xt,Rt),Tt=new Ng(E,G),ft=new pg,dt=new yg(Jt),Bt=new Tm(E,rt,x,Z,g,l),Nt=new wg(E,Z,P),j=new Ug(N,O,P,x),at=new Pm(N,Jt,O),K=new km(N,Jt,O),O.programs=ht.programs,E.capabilities=P,E.extensions=Jt,E.properties=G,E.renderLists=ft,E.shadowMap=Nt,E.state=x,E.info=O}wt(),v!==Ke&&(y=new Wm(v,e.width,e.height,a,n,r));const bt=new Dg(E,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(V,nt,!1))},this.getSize=function(S){return S.set(V,nt)},this.setSize=function(S,U,W=!0){if(bt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,nt=U,e.width=Math.floor(S*tt),e.height=Math.floor(U*tt),W===!0&&(e.style.width=S+"px",e.style.height=U+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(V*tt,nt*tt).floor()},this.setDrawingBufferSize=function(S,U,W){V=S,nt=U,tt=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Ke){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(mt)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,U,W,B){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,U,W,B),x.viewport(mt.copy(It).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(ge)},this.setScissor=function(S,U,W,B){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,U,W,B),x.scissor(Mt.copy(ge).multiplyScalar(tt).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){x.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){Lt=S},this.setTransparentSort=function(S){Ot=S},this.getClearColor=function(S){return S.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let B=0;if(S){let z=!1;if(Q!==null){const _t=Q.texture.format;z=p.has(_t)}if(z){const _t=Q.texture.type,St=u.has(_t),gt=Bt.getClearColor(),Et=Bt.getClearAlpha(),At=gt.r,kt=gt.g,Ht=gt.b;St?(b[0]=At,b[1]=kt,b[2]=Ht,b[3]=Et,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=At,w[1]=kt,w[2]=Ht,w[3]=Et,N.clearBufferiv(N.COLOR,0,w))}else B|=N.COLOR_BUFFER_BIT}U&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),Bt.dispose(),ft.dispose(),dt.dispose(),G.dispose(),rt.dispose(),Z.dispose(),xt.dispose(),j.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",tl),bt.removeEventListener("sessionend",el),en.stop()};function pe(S){S.preventDefault(),wr("WebGLRenderer: Context Lost."),C=!0}function oe(){wr("WebGLRenderer: Context Restored."),C=!1;const S=O.autoReset,U=Nt.enabled,W=Nt.autoUpdate,B=Nt.needsUpdate,z=Nt.type;wt(),O.autoReset=S,Nt.enabled=U,Nt.autoUpdate=W,Nt.needsUpdate=B,Nt.type=z}function hi(S){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function di(S){const U=S.target;U.removeEventListener("dispose",di),Ph(U)}function Ph(S){Ch(S),G.remove(S)}function Ch(S){const U=G.get(S).programs;U!==void 0&&(U.forEach(function(W){ht.releaseProgram(W)}),S.isShaderMaterial&&ht.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,B,z,_t){U===null&&(U=Re);const St=z.isMesh&&z.matrixWorld.determinantAffine()<0,gt=Dh(S,U,W,B,z);x.setMaterial(B,St);let Et=W.index,At=1;if(B.wireframe===!0){if(Et=Y.getWireframeAttribute(W),Et===void 0)return;At=2}const kt=W.drawRange,Ht=W.attributes.position;let Pt=kt.start*At,jt=(kt.start+kt.count)*At;_t!==null&&(Pt=Math.max(Pt,_t.start*At),jt=Math.min(jt,(_t.start+_t.count)*At)),Et!==null?(Pt=Math.max(Pt,0),jt=Math.min(jt,Et.count)):Ht!=null&&(Pt=Math.max(Pt,0),jt=Math.min(jt,Ht.count));const _e=jt-Pt;if(_e<0||_e===1/0)return;xt.setup(z,B,gt,W,Et);let me,se=at;if(Et!==null&&(me=lt.get(Et),se=K,se.setIndex(me)),z.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*ye()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(z.isLine){let Ie=B.linewidth;Ie===void 0&&(Ie=1),x.setLineWidth(Ie*ye()),z.isLineSegments?se.setMode(N.LINES):z.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else z.isPoints?se.setMode(N.POINTS):z.isSprite&&se.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ie=z._multiDrawStarts,yt=z._multiDrawCounts,Xe=z._multiDrawCount,Yt=Et?lt.get(Et).bytesPerElement:1,Je=G.get(B).currentProgram.getUniforms();for(let ui=0;ui<Xe;ui++)Je.setValue(N,"_gl_DrawID",ui),se.render(Ie[ui]/Yt,yt[ui])}else if(z.isInstancedMesh)se.renderInstances(Pt,_e,z.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yt=Math.min(W.instanceCount,Ie);se.renderInstances(Pt,_e,yt)}else se.render(Pt,_e)};function ja(S,U,W){S.transparent===!0&&S.side===ti&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,Rs(S,U,W),S.side=Qi,S.needsUpdate=!0,Rs(S,U,W),S.side=ti):Rs(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),T=dt.get(W),T.init(U),_.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const _t=z.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){const gt=_t[St];ja(gt,W,z),B.add(gt)}else ja(_t,W,z),B.add(_t)}),T=_.pop(),B},this.compileAsync=function(S,U,W=null){const B=this.compile(S,U,W);return new Promise(z=>{function _t(){if(B.forEach(function(St){G.get(St).currentProgram.isReady()&&B.delete(St)}),B.size===0){z(S);return}setTimeout(_t,10)}Jt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Br=null;function Rh(S){Br&&Br(S)}function tl(){en.stop()}function el(){en.start()}const en=new gh;en.setAnimationLoop(Rh),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(S){Br=S,bt.setAnimationLoop(S),S===null?en.stop():en.start()},bt.addEventListener("sessionstart",tl),bt.addEventListener("sessionend",el),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(S,U);const W=bt.enabled===!0&&bt.isPresenting===!0,B=y!==null&&(Q===null||W)&&y.begin(E,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(U),U=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,U,Q),T=dt.get(S,_.length),T.init(U),T.state.textureUnits=q.getTextureUnits(),_.push(T),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(ve,vi,U.reversedDepth),$t=this.localClippingEnabled,Zt=Rt.init(this.clippingPlanes,$t),A=ft.get(S,R.length),A.init(),R.push(A),bt.enabled===!0&&bt.isPresenting===!0){const St=E.xr.getDepthSensingMesh();St!==null&&kr(St,U,-1/0,E.sortObjects)}kr(S,U,0,E.sortObjects),A.finish(),E.sortObjects===!0&&A.sort(Lt,Ot,U.reversedDepth),fe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,fe&&Bt.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Rt.beginShadows();const z=T.state.shadowsArray;if(Nt.render(z,S,U),Zt===!0&&Rt.endShadows(),(B&&y.hasRenderPass())===!1){const St=A.opaque,gt=A.transmissive;if(T.setupLights(),U.isArrayCamera){const Et=U.cameras;if(gt.length>0)for(let At=0,kt=Et.length;At<kt;At++){const Ht=Et[At];nl(St,gt,S,Ht)}fe&&Bt.render(S);for(let At=0,kt=Et.length;At<kt;At++){const Ht=Et[At];il(A,S,Ht,Ht.viewport)}}else gt.length>0&&nl(St,gt,S,U),fe&&Bt.render(S),il(A,S,U)}Q!==null&&H===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),B&&y.end(E),S.isScene===!0&&S.onAfterRender(E,S,U),xt.resetDefaultState(),it=-1,ct=null,_.pop(),_.length>0?(T=_[_.length-1],q.setTextureUnits(T.state.textureUnits),Zt===!0&&Rt.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,L!==null&&L.renderEnd()};function kr(S,U,W,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ne.intersectsSprite(S)){B&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const St=Z.update(S),gt=S.material;gt.visible&&A.push(S,St,gt,W,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ne.intersectsObject(S))){const St=Z.update(S),gt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Pe.copy(St.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(gt)){const Et=St.groups;for(let At=0,kt=Et.length;At<kt;At++){const Ht=Et[At],Pt=gt[Ht.materialIndex];Pt&&Pt.visible&&A.push(S,St,Pt,W,Pe.z,Ht)}}else gt.visible&&A.push(S,St,gt,W,Pe.z,null)}}const _t=S.children;for(let St=0,gt=_t.length;St<gt;St++)kr(_t[St],U,W,B)}function il(S,U,W,B){const{opaque:z,transmissive:_t,transparent:St}=S;T.setupLightsView(W),Zt===!0&&Rt.setGlobalState(E.clippingPlanes,W),B&&x.viewport(mt.copy(B)),z.length>0&&Cs(z,U,W),_t.length>0&&Cs(_t,U,W),St.length>0&&Cs(St,U,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function nl(S,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Pt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new yi(1,1,{generateMipmaps:!0,type:Pt?Ui:Ke,minFilter:cn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const _t=T.state.transmissionRenderTarget[B.id],St=B.viewport||mt;_t.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);const gt=E.getRenderTarget(),Et=E.getActiveCubeFace(),At=E.getActiveMipmapLevel();E.setRenderTarget(_t),E.getClearColor(et),vt=E.getClearAlpha(),vt<1&&E.setClearColor(16777215,.5),E.clear(),fe&&Bt.render(W);const kt=E.toneMapping;E.toneMapping=li;const Ht=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Zt===!0&&Rt.setGlobalState(E.clippingPlanes,B),Cs(S,W,B),q.updateMultisampleRenderTarget(_t),q.updateRenderTargetMipmap(_t),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let jt=0,_e=U.length;jt<_e;jt++){const me=U[jt],{object:se,geometry:Ie,material:yt,group:Xe}=me;if(yt.side===ti&&se.layers.test(B.layers)){const Yt=yt.side;yt.side=We,yt.needsUpdate=!0,sl(se,W,B,Ie,yt,Xe),yt.side=Yt,yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(q.updateMultisampleRenderTarget(_t),q.updateRenderTargetMipmap(_t))}E.setRenderTarget(gt,Et,At),E.setClearColor(et,vt),Ht!==void 0&&(B.viewport=Ht),E.toneMapping=kt}function Cs(S,U,W){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_t=S.length;z<_t;z++){const St=S[z],{object:gt,geometry:Et,group:At}=St;let kt=St.material;kt.allowOverride===!0&&B!==null&&(kt=B),gt.layers.test(W.layers)&&sl(gt,U,W,Et,kt,At)}}function sl(S,U,W,B,z,_t){S.onBeforeRender(E,U,W,B,z,_t),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(E,U,W,B,S,_t),z.transparent===!0&&z.side===ti&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,E.renderBufferDirect(W,U,B,z,S,_t),z.side=Qi,z.needsUpdate=!0,E.renderBufferDirect(W,U,B,z,S,_t),z.side=ti):E.renderBufferDirect(W,U,B,z,S,_t),S.onAfterRender(E,U,W,B,z,_t)}function Rs(S,U,W){U.isScene!==!0&&(U=Re);const B=G.get(S),z=T.state.lights,_t=T.state.shadowsArray,St=z.state.version,gt=ht.getParameters(S,z.state,_t,U,W,T.state.lightProbeGridArray),Et=ht.getProgramCacheKey(gt);let At=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=rt.get(S.envMap||B.environment,kt),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",di),At=new Map,B.programs=At);let Ht=At.get(Et);if(Ht!==void 0){if(B.currentProgram===Ht&&B.lightsStateVersion===St)return ol(S,gt),Ht}else gt.uniforms=ht.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,W,gt),S.onBeforeCompile(gt,E),Ht=ht.acquireProgram(gt,Et),At.set(Et,Ht),B.uniforms=gt.uniforms;const Pt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=Rt.uniform),ol(S,gt),B.needsLights=Nh(S),B.lightsStateVersion=St,B.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Ht,B.uniformsList=null,Ht}function rl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=xr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ol(S,U){const W=G.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Lh(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let W=0,B=S.length;W<B;W++){const z=S[W];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function Dh(S,U,W,B,z){U.isScene!==!0&&(U=Re),q.resetTextureUnits();const _t=U.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,gt=Q===null?E.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xt.workingColorSpace,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,At=rt.get(B.envMap||St,Et),kt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,_e=!!W.morphAttributes.color;let me=li;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(me=E.toneMapping);const se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ie=se!==void 0?se.length:0,yt=G.get(B),Xe=T.state.lights;if(Zt===!0&&($t===!0||S!==ct)){const ae=S===ct&&B.id===it;Rt.setState(B,S,ae)}let Yt=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Xe.state.version||yt.outputColorSpace!==gt||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==At||B.fog===!0&&yt.fog!==_t||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Rt.numPlanes||yt.numIntersection!==Rt.numIntersection)||yt.vertexAlphas!==kt||yt.vertexTangents!==Ht||yt.morphTargets!==Pt||yt.morphNormals!==jt||yt.morphColors!==_e||yt.toneMapping!==me||yt.morphTargetsCount!==Ie||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,yt.__version=B.version);let Je=yt.currentProgram;Yt===!0&&(Je=Rs(B,U,z),L&&B.isNodeMaterial&&L.onUpdateProgram(B,Je,yt));let ui=!1,Bi=!1,gn=!1;const re=Je.getUniforms(),xe=yt.uniforms;if(x.useProgram(Je.program)&&(ui=!0,Bi=!0,gn=!0),B.id!==it&&(it=B.id,Bi=!0),yt.needsLights){const ae=Lh(T.state.lightProbeGridArray,z);yt.lightProbeGrid!==ae&&(yt.lightProbeGrid=ae,Bi=!0)}if(ui||ct!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),re.setValue(N,"projectionMatrix",S.projectionMatrix),re.setValue(N,"viewMatrix",S.matrixWorldInverse);const zi=re.map.cameraPosition;zi!==void 0&&zi.setValue(N,Se.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),ct!==S&&(ct=S,Bi=!0,gn=!0)}if(yt.needsLights&&(Xe.state.directionalShadowMap.length>0&&re.setValue(N,"directionalShadowMap",Xe.state.directionalShadowMap,q),Xe.state.spotShadowMap.length>0&&re.setValue(N,"spotShadowMap",Xe.state.spotShadowMap,q),Xe.state.pointShadowMap.length>0&&re.setValue(N,"pointShadowMap",Xe.state.pointShadowMap,q)),z.isSkinnedMesh){re.setOptional(N,z,"bindMatrix"),re.setOptional(N,z,"bindMatrixInverse");const ae=z.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),re.setValue(N,"boneTexture",ae.boneTexture,q))}z.isBatchedMesh&&(re.setOptional(N,z,"batchingTexture"),re.setValue(N,"batchingTexture",z._matricesTexture,q),re.setOptional(N,z,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",z._indirectTexture,q),re.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",z._colorsTexture,q));const ki=W.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&I.update(z,W,Je),(Bi||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,re.setValue(N,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(xe.envMapIntensity.value=U.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=Og()),Bi){if(re.setValue(N,"toneMappingExposure",E.toneMappingExposure),yt.needsLights&&Ih(xe,gn),_t&&B.fog===!0&&Tt.refreshFogUniforms(xe,_t),Tt.refreshMaterialUniforms(xe,B,tt,nt,T.state.transmissionRenderTarget[S.id]),yt.needsLights&&yt.lightProbeGrid){const ae=yt.lightProbeGrid;xe.probesSH.value=ae.texture,xe.probesMin.value.copy(ae.boundingBox.min),xe.probesMax.value.copy(ae.boundingBox.max),xe.probesResolution.value.copy(ae.resolution)}xr.upload(N,rl(yt),xe,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xr.upload(N,rl(yt),xe,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(N,"center",z.center),re.setValue(N,"modelViewMatrix",z.modelViewMatrix),re.setValue(N,"normalMatrix",z.normalMatrix),re.setValue(N,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ae=B.uniformsGroups;for(let zi=0,_n=ae.length;zi<_n;zi++){const al=ae[zi];j.update(al,Je),j.bind(al,Je)}}return Je}function Ih(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Nh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,U,W){const B=G.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=U,G.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const W=G.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){Q=S,$=U,H=W;let B=null,z=!1,_t=!1;if(S){const gt=G.get(S);if(gt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,gt.__webglFramebuffer),mt.copy(S.viewport),Mt.copy(S.scissor),qt=S.scissorTest,x.viewport(mt),x.scissor(Mt),x.setScissorTest(qt),it=-1;return}else if(gt.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(gt.__hasExternalTextures)q.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const kt=S.depthTexture;if(gt.__boundDepthTexture!==kt){if(kt!==null&&G.has(kt)&&(S.width!==kt.image.width||S.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const At=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[U])?B=At[U][W]:B=At[U],z=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?B=G.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?B=At[W]:B=At,mt.copy(S.viewport),Mt.copy(S.scissor),qt=S.scissorTest}else mt.copy(It).multiplyScalar(tt).floor(),Mt.copy(ge).multiplyScalar(tt).floor(),qt=Vt;if(W!==0&&(B=k),x.bindFramebuffer(N.FRAMEBUFFER,B)&&x.drawBuffers(S,B),x.viewport(mt),x.scissor(Mt),x.setScissorTest(qt),z){const gt=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,W)}else if(_t){const gt=U;for(let Et=0;Et<S.textures.length;Et++){const At=G.get(S.textures[Et]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Et,At.__webglTexture,W,gt)}}else if(S!==null&&W!==0){const gt=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gt.__webglTexture,W)}it=-1},this.readRenderTargetPixels=function(S,U,W,B,z,_t,St,gt=0){if(!(S&&S.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){x.bindFramebuffer(N.FRAMEBUFFER,Et);try{const At=S.textures[gt],kt=At.format,Ht=At.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+gt),!P.textureFormatReadable(kt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Ht)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&W>=0&&W<=S.height-z&&N.readPixels(U,W,B,z,ut.convert(kt),ut.convert(Ht),_t)}finally{const At=Q!==null?G.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,B,z,_t,St,gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(U>=0&&U<=S.width-B&&W>=0&&W<=S.height-z){x.bindFramebuffer(N.FRAMEBUFFER,Et);const At=S.textures[gt],kt=At.format,Ht=At.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+gt),!P.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),N.readPixels(U,W,B,z,ut.convert(kt),ut.convert(Ht),0);const jt=Q!==null?G.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,jt);const _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await md(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.deleteBuffer(Pt),N.deleteSync(_e),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){const B=Math.pow(2,-W),z=Math.floor(S.image.width*B),_t=Math.floor(S.image.height*B),St=U!==null?U.x:0,gt=U!==null?U.y:0;q.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,St,gt,z,_t),x.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,B=null,z=0,_t=0){let St,gt,Et,At,kt,Ht,Pt,jt,_e;const me=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(W!==null)St=W.max.x-W.min.x,gt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,kt=W.min.y,Ht=W.isBox3?W.min.z:0;else{const xe=Math.pow(2,-z);St=Math.floor(me.width*xe),gt=Math.floor(me.height*xe),S.isDataArrayTexture?Et=me.depth:S.isData3DTexture?Et=Math.floor(me.depth*xe):Et=1,At=0,kt=0,Ht=0}B!==null?(Pt=B.x,jt=B.y,_e=B.z):(Pt=0,jt=0,_e=0);const se=ut.convert(U.format),Ie=ut.convert(U.type);let yt;U.isData3DTexture?(q.setTexture3D(U,0),yt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),yt=N.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),yt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=x.getParameter(N.UNPACK_ROW_LENGTH),Yt=x.getParameter(N.UNPACK_IMAGE_HEIGHT),Je=x.getParameter(N.UNPACK_SKIP_PIXELS),ui=x.getParameter(N.UNPACK_SKIP_ROWS),Bi=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,me.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,At),x.pixelStorei(N.UNPACK_SKIP_ROWS,kt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht);const gn=S.isDataArrayTexture||S.isData3DTexture,re=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const xe=G.get(S),ki=G.get(U),ae=G.get(xe.__renderTarget),zi=G.get(ki.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,ae.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let _n=0;_n<Et;_n++)gn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(S).__webglTexture,z,Ht+_n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(U).__webglTexture,_t,_e+_n)),N.blitFramebuffer(At,kt,St,gt,Pt,jt,St,gt,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||G.has(S)){const xe=G.get(S),ki=G.get(U);x.bindFramebuffer(N.READ_FRAMEBUFFER,X),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let ae=0;ae<Et;ae++)gn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,z,Ht+ae):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,z),re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ki.__webglTexture,_t,_e+ae):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ki.__webglTexture,_t),z!==0?N.blitFramebuffer(At,kt,St,gt,Pt,jt,St,gt,N.COLOR_BUFFER_BIT,N.NEAREST):re?N.copyTexSubImage3D(yt,_t,Pt,jt,_e+ae,At,kt,St,gt):N.copyTexSubImage2D(yt,_t,Pt,jt,At,kt,St,gt);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(yt,_t,Pt,jt,_e,St,gt,Et,se,Ie,me.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,_t,Pt,jt,_e,St,gt,Et,se,me.data):N.texSubImage3D(yt,_t,Pt,jt,_e,St,gt,Et,se,Ie,me):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,Pt,jt,St,gt,se,Ie,me.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,Pt,jt,me.width,me.height,se,me.data):N.texSubImage2D(N.TEXTURE_2D,_t,Pt,jt,St,gt,se,Ie,me);x.pixelStorei(N.UNPACK_ROW_LENGTH,Xe),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),x.pixelStorei(N.UNPACK_SKIP_ROWS,ui),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Bi),_t===0&&U.generateMipmaps&&N.generateMipmap(yt),x.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){$=0,H=0,Q=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const Sc={type:"change"},$a={type:"start"},Eh={type:"end"},or=new Ir,bc=new Yi,kg=Math.cos(70*xd.DEG2RAD),be=new D,He=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wo=1e-6;class zg extends mh{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ji,this._lastTargetPosition=new D,this._quat=new ji().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zl,this._sphericalDelta=new Zl,this._scale=1,this._panOffset=new D,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new D,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gg.bind(this),this._onPointerDown=Hg.bind(this),this._onPointerUp=Vg.bind(this),this._onContextMenu=Zg.bind(this),this._onMouseWheel=qg.bind(this),this._onKeyDown=$g.bind(this),this._onTouchStart=Yg.bind(this),this._onTouchMove=Kg.bind(this),this._onMouseDown=Wg.bind(this),this._onMouseMove=Xg.bind(this),this._interceptControlDown=Jg.bind(this),this._interceptControlUp=Qg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sc),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),n<-Math.PI?n+=He:n>Math.PI&&(n-=He),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(or.origin.copy(this.object.position),or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(or.direction))<kg?this.object.lookAt(this.target):(bc.setFromNormalAndCoplanarPoint(this.object.up,this.target),or.intersectPlane(bc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wo||this._lastTargetPosition.distanceToSquared(this.target)>wo?(this.dispatchEvent(Sc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;be.copy(n).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Gg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Vg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eh),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Wg(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ee.DOLLY;break;case Vn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ee.ROTATE}break;case Vn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent($a)}function Xg(s){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function qg(s){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(s.preventDefault(),this.dispatchEvent($a),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Eh))}function $g(s){this.enabled!==!1&&this._handleKeyDown(s)}function Yg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case zn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ee.TOUCH_ROTATE;break;case zn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ee.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent($a)}function Kg(s){switch(this._trackPointer(s),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ee.NONE}}function Zg(s){this.enabled!==!1&&s.preventDefault()}function Jg(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fn=new Oi(0,0,0,"YXZ"),On=new D,jg={type:"change"},t_={type:"lock"},e_={type:"unlock"},Ec=.002,wc=Math.PI/2;class i_ extends mh{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=n_.bind(this),this._onPointerlockChange=s_.bind(this),this._onPointerlockError=r_.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(t){super.connect(t),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;On.setFromMatrixColumn(e.matrix,0),On.crossVectors(e.up,On),e.position.addScaledVector(On,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;On.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(On,t)}lock(t=!1){this.domElement.requestPointerLock({unadjustedMovement:t})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function n_(s){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;Fn.setFromQuaternion(t.quaternion),Fn.y-=s.movementX*Ec*this.pointerSpeed,Fn.x-=s.movementY*Ec*this.pointerSpeed,Fn.x=Math.max(wc-this.maxPolarAngle,Math.min(wc-this.minPolarAngle,Fn.x)),t.quaternion.setFromEuler(Fn),this.dispatchEvent(jg)}function s_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(t_),this.isLocked=!0):(this.dispatchEvent(e_),this.isLocked=!1)}function r_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const wh=[{level:-2,label:"Basement -2",labelAr:"قبو ٢",short:"B2"},{level:-1,label:"Basement",labelAr:"تحت الأرض",short:"B1"},{level:0,label:"Ground",labelAr:"الأرضي",short:"G"},{level:1,label:"First",labelAr:"الأول",short:"1"},{level:2,label:"Second",labelAr:"الثاني",short:"2"},{level:3,label:"Third",labelAr:"الثالث",short:"3"},{level:4,label:"Fourth",labelAr:"الرابع",short:"4"},{level:5,label:"Fifth",labelAr:"الخامس",short:"5"}];function ar(s,t=!0){const e=wh.find(i=>i.level===s);if(!e){const i=s<0?`Basement ${Math.abs(s)}`:`Floor ${s}`;return i}return t?`${e.labelAr} · ${e.label}`:e.labelAr}function To(s){var i,n;const t=(s==null?void 0:s.level)??0,e=wh.find(r=>r.level===t);return e?e.labelAr:((n=(i=s==null?void 0:s.name)==null?void 0:i.split("·")[0])==null?void 0:n.trim())||`F${t}`}function o_(s){const t=(s||[]).map(e=>Number(e.level)||0);return t.length?Math.max(...t)+1:0}const mi={swing_modern:{label:"Modern Swing",icon:"🚪",width:1,height:2.1,type:"swing_modern"},swing_classic:{label:"Classic Panel",icon:"🪵",width:1,height:2.1,type:"swing_classic"},sliding_glass:{label:"Glass Sliding",icon:"↔️",width:1.6,height:2.2,type:"sliding_glass"},double_french:{label:"French Double",icon:"🚪",width:1.8,height:2.1,type:"double_french"},pivot_modern:{label:"Pivot Modern",icon:"↩️",width:1,height:2.2,type:"pivot_modern"},arched:{label:"Arched",icon:"⌒",width:1,height:2.3,type:"arched"},interior:{label:"Interior Flush",icon:"🚪",width:.9,height:2.05,type:"interior"},garage:{label:"Garage Wide",icon:"🚗",width:2.4,height:2.1,type:"garage"}},$i={standard:{label:"Standard",icon:"🪟",width:1.2,height:1.2,sill:.9,type:"standard"},wide:{label:"Wide Picture",icon:"🖼️",width:2,height:1.4,sill:.8,type:"wide"},sliding:{label:"Sliding Glass",icon:"↔️",width:1.8,height:2,sill:.1,type:"sliding"},bay:{label:"Bay Window",icon:"🏠",width:2.2,height:1.3,sill:.7,type:"bay"},floor_ceiling:{label:"Floor-to-Ceiling",icon:"🌅",width:1.5,height:2.4,sill:.05,type:"floor_ceiling"},arched:{label:"Arched",icon:"⌒",width:1.2,height:1.5,sill:.9,type:"arched"},skylight:{label:"Skylight",icon:"☀️",width:1,height:.8,sill:2,type:"skylight"}},ce={smoke_detector:{label:"Smoke detector",icon:"🚨",price:8,category:"all",haDomain:"binary_sensor",model:"Smoke Alarm",mount:"ceiling",defaultHeight:2.73,w:.14,h:.05},gas_detector:{label:"Gas detector",icon:"⛽",price:12,category:"all",haDomain:"binary_sensor",model:"Gas Alarm",mount:"ceiling",defaultHeight:2.73,w:.12,h:.05},vibration_sensor:{label:"Vibration sensor",icon:"📳",price:6,category:"all",haDomain:"binary_sensor",model:"Vibration",mount:"wall",defaultHeight:1,w:.08,h:.08},door_sensor:{label:"Door sensor",icon:"🚪",price:4,category:"all",haDomain:"binary_sensor",model:"Door Contact",mount:"door",defaultHeight:1,w:.08,h:.12},intercom:{label:"Entercom",icon:"📞",price:45,category:"all",haDomain:"switch",model:"Video Intercom",mount:"wall",defaultHeight:1.45,w:.15,h:.22},main_screen:{label:"Main Screen",icon:"🖥️",price:80,category:"all",haDomain:"media_player",model:"Wall Display",mount:"wall",defaultHeight:1.4,w:.6,h:.45},motion_sensor:{label:"Motion sensor",icon:"👁️",price:7,category:"all",haDomain:"binary_sensor",model:"PIR Motion",mount:"wall",defaultHeight:2.2,w:.12,h:.12},micro_sensor:{label:"Micro sensor",icon:"🎤",price:9,category:"all",haDomain:"binary_sensor",model:"Sound / Mic",mount:"wall",defaultHeight:2.2,w:.1,h:.1},camera:{label:"Camera",icon:"📷",price:2,category:"all",haDomain:"camera",model:"Dome Camera",mount:"ceiling",defaultHeight:2.72,w:.2,h:.15},ir_remote:{label:"IR remote",icon:"📡",price:15,category:"all",haDomain:"remote",model:"Broadlink RM",mount:"wall",defaultHeight:2.3,w:.08,h:.08},wifi_router:{label:"Wifi router",icon:"🌐",price:25,category:"all",haDomain:"device_tracker",model:"Home Router",mount:"floor",w:.22,h:.06},access_point:{label:"Access point",icon:"📶",price:35,category:"all",haDomain:"device_tracker",model:"Ceiling AP",mount:"ceiling",defaultHeight:2.74,w:.25,h:.08},socket:{label:"Socket",icon:"🔌",price:3,category:"all",haDomain:"switch",model:"Smart Socket",mount:"wall",defaultHeight:.35,w:.08,h:.12},switch:{label:"Switch",icon:"🔘",price:4,category:"all",haDomain:"switch",model:"Wall Switch",mount:"wall",defaultHeight:1.2,w:.12,h:.18},speakers:{label:"Speakers",icon:"🔊",price:20,category:"all",haDomain:"media_player",model:"Wall Speakers",mount:"wall",defaultHeight:1.8,w:.22,h:.32}},Ta={code:"OMR",symbolUrl:"/images/omr-symbol.png"};function a_(){var s;return typeof window<"u"&&((s=window.location)!=null&&s.origin)?`${window.location.origin}${Ta.symbolUrl}`:Ta.symbolUrl}function Tc(s){const t=Number(s);return`${(Number.isFinite(t)?t:0).toFixed(3)} ${Ta.code}`}function he(s){const t=Number(s),e=Number.isFinite(t)?t:0;return`<span class="omr-amount"><span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask:url('${a_()}')"></span>${e.toFixed(3)}</span>`}function Ac(s,t=null){const e=Number(s),i=Number.isFinite(e)?e:0;return`<span class="omr-amount"><img class="omr-symbol" src="${t||`${typeof window<"u"?window.location.origin:""}/images/omr-symbol-ink.png`}" alt="OMR" width="18" height="18">${i.toFixed(3)}</span>`}function lr(s,t=null){const e=t==null?void 0:t.price;if(e!=null&&Number.isFinite(Number(e)))return Number(e);const i=ce[s];return Number(i==null?void 0:i.price)||0}function l_(s){if(!(!Array.isArray(s)||!s.length)){for(const t of Object.keys(ce))delete ce[t];As.length=0,s.forEach(t=>{t!=null&&t.key&&(ce[t.key]={label:t.name||t.key,icon:t.icon||"●",price:Number(t.price)||0,buy_price:Number(t.buy_price)||0,category:"all",haDomain:"sensor",model:t.model||t.name||t.key,mount:t.mount||"wall",defaultHeight:t.mount==="ceiling"?2.73:t.mount==="floor"?.05:1.4,w:.14,h:.14},As.push(t.key))})}}const As=["smoke_detector","gas_detector","vibration_sensor","door_sensor","intercom","main_screen","motion_sensor","micro_sensor","camera","ir_remote","wifi_router","access_point","socket","switch","speakers"],c_=new Set(Object.entries(ce).filter(([,s])=>s.autoLight).map(([s])=>s));function cr(s){return c_.has(s)||s==="lamp"}function h_(s){return As.filter(e=>ce[e]).map(e=>[e,ce[e]])}const Ge={sofa:{label:"Sofa",icon:"🛋️",w:2.2,d:.9,h:.85,color:4937059},bed:{label:"Bed",icon:"🛏️",w:2,d:1.6,h:.55,color:6514417},dining_table:{label:"Dining Table",icon:"🍽️",w:1.6,d:.9,h:.75,color:9584654},chair:{label:"Chair",icon:"🪑",w:.5,d:.5,h:.9,color:7893356},desk:{label:"Desk",icon:"🖥️",w:1.4,d:.7,h:.75,color:5722958},tv:{label:'TV 50"',icon:"📺",w:1.11,d:.06,h:.62,color:1120295,emissive:1981023,inches:50},fridge:{label:"Fridge",icon:"🧊",w:.7,d:.7,h:1.8,color:15067115},oven:{label:"Oven",icon:"🔥",w:.6,d:.6,h:.9,color:3621201},sink:{label:"Sink",icon:"🚰",w:.8,d:.5,h:.9,color:10265519},bathtub:{label:"Bathtub",icon:"🛁",w:1.7,d:.75,h:.55,color:15987958},toilet:{label:"Toilet",icon:"🚽",w:.45,d:.7,h:.85,color:16777215},wardrobe:{label:"Wardrobe",icon:"👔",w:1.2,d:.6,h:2.2,color:7877903},lamp:{label:"Floor Lamp",icon:"💡",w:.35,d:.35,h:1.5,color:16498468,emissive:16096779,autoLight:!0},stairs:{label:"Stairs",icon:"🪜",w:1.2,d:2.4,h:.2,color:7041664,steps:6},plant:{label:"Plant",icon:"🪴",w:.4,d:.4,h:.9,color:1483594}},Bn={bathroom_standard:{label:"Standard Bathroom",category:"bathroom",icon:"🚿",preset:"bathroom",description:"2.5 × 2 m · tub, toilet, sink, lights",footprint:{w:2.5,d:2},structure:!0,door:{wall:0,position:.5,width:.85,style:"interior"},items:[{kind:"component",type:"toilet",at:[.45,.45],rotation:0},{kind:"component",type:"bathtub",at:[1.55,1.15],rotation:0},{kind:"component",type:"sink",at:[.55,1.55],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[1.25,1],mount:"ceiling"},{kind:"smart",type:"motion_sensor",at:[2.35,1],mount:"wall",height:2.2}]},bathroom_powder:{label:"Powder Room",category:"bathroom",icon:"🚽",preset:"bathroom",description:"1.8 × 1.5 m · compact guest bath",footprint:{w:1.8,d:1.5},structure:!0,door:{wall:0,position:.5,width:.75,style:"interior"},items:[{kind:"component",type:"toilet",at:[.4,.4],rotation:0},{kind:"component",type:"sink",at:[1,1],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[.9,.75],mount:"ceiling"}]},kitchen_galley:{label:"Galley Kitchen",category:"kitchen",icon:"🍳",preset:"kitchen",description:"3 × 2.5 m · fridge, oven, sink, dining",footprint:{w:3,d:2.5},structure:!0,door:{wall:0,position:.35,width:.9,style:"interior"},items:[{kind:"component",type:"fridge",at:[.45,.45],rotation:0},{kind:"component",type:"oven",at:[1.2,.45],rotation:0},{kind:"component",type:"sink",at:[2,.45],rotation:0},{kind:"component",type:"dining_table",at:[1.5,1.6],rotation:0},{kind:"component",type:"chair",at:[1,1.7],rotation:0},{kind:"component",type:"chair",at:[2,1.7],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[1.5,1.25],mount:"ceiling"}]},kitchen_l_shape:{label:"L-Shape Kitchen",category:"kitchen",icon:"🥘",preset:"kitchen",description:"4 × 3 m · full kitchen + dining nook",footprint:{w:4,d:3},structure:!0,door:{wall:0,position:.25,width:.9,style:"interior"},items:[{kind:"component",type:"fridge",at:[.5,.5],rotation:0},{kind:"component",type:"oven",at:[1.3,.5],rotation:0},{kind:"component",type:"sink",at:[2.1,.5],rotation:0},{kind:"component",type:"dining_table",at:[2.8,2],rotation:0},{kind:"component",type:"chair",at:[2.3,2.1],rotation:0},{kind:"component",type:"chair",at:[3.3,2.1],rotation:Math.PI},{kind:"smart",type:"smart_light",at:[2,1.5],mount:"ceiling"},{kind:"smart",type:"motion_sensor",at:[3.85,1.5],mount:"wall",height:2.2}]},bedroom_master:{label:"Master Bedroom",category:"bedroom",icon:"🛏️",preset:"bedroom",description:"4.5 × 4 m · bed, wardrobe, smart lighting",footprint:{w:4.5,d:4},structure:!0,door:{wall:0,position:.7,width:.9,style:"interior"},items:[{kind:"component",type:"bed",at:[2.25,2.5],rotation:0},{kind:"component",type:"wardrobe",at:[.7,3.2],rotation:Math.PI/2},{kind:"component",type:"lamp",at:[.8,1.2],rotation:0},{kind:"component",type:"lamp",at:[3.7,1.2],rotation:0},{kind:"smart",type:"smart_light",at:[2.25,2],mount:"ceiling"},{kind:"smart",type:"temp_sensor",at:[4.3,2],mount:"wall",height:1.5}]},bedroom_guest:{label:"Guest Bedroom",category:"bedroom",icon:"🛌",preset:"bedroom",description:"3 × 3 m · bed + bedside lamp",footprint:{w:3,d:3},structure:!0,door:{wall:0,position:.5,width:.85,style:"interior"},items:[{kind:"component",type:"bed",at:[1.5,1.8],rotation:0},{kind:"component",type:"lamp",at:[.6,.8],rotation:0},{kind:"smart",type:"smart_light",at:[1.5,1.5],mount:"ceiling"}]},living_basic:{label:"Living Room",category:"living",icon:"🛋️",preset:"living",description:"5 × 4 m · sofa, TV, lamp, plant",footprint:{w:5,d:4},structure:!0,door:{wall:0,position:.2,width:1,style:"swing_modern"},items:[{kind:"component",type:"sofa",at:[2.5,2.8],rotation:0},{kind:"component",type:"tv",at:[2.5,.6],rotation:0},{kind:"component",type:"lamp",at:[.7,.7],rotation:0},{kind:"component",type:"plant",at:[4.2,3.2],rotation:0},{kind:"smart",type:"smart_light",at:[2.5,2],mount:"ceiling"},{kind:"smart",type:"smart_curtain",at:[4.85,2],mount:"wall",height:2.4}]},laundry_room:{label:"Laundry",category:"utility",icon:"🧺",preset:"laundry",description:"2 × 2.5 m · sink + smart plug",footprint:{w:2,d:2.5},structure:!0,door:{wall:0,position:.5,width:.8,style:"interior"},items:[{kind:"component",type:"sink",at:[1,.5],rotation:0},{kind:"smart",type:"smart_plug",at:[.5,1.8],mount:"floor"},{kind:"smart",type:"smart_light",at:[1,1.25],mount:"ceiling"},{kind:"smart",type:"water_leak",at:[1,.3],mount:"floor"}]},office_nook:{label:"Home Office",category:"utility",icon:"💼",preset:"office",description:"3 × 2.5 m · desk, chair, lamp",footprint:{w:3,d:2.5},structure:!0,door:{wall:0,position:.5,width:.85,style:"interior"},items:[{kind:"component",type:"desk",at:[1.5,1.3],rotation:0},{kind:"component",type:"chair",at:[1.5,1.9],rotation:Math.PI},{kind:"component",type:"lamp",at:[.5,.5],rotation:0},{kind:"smart",type:"smart_light",at:[1.5,1.25],mount:"ceiling"}]}},Ci={living:{label:"Living Room",color:11006928},bedroom:{label:"Bedroom",color:10090212},kitchen:{label:"Kitchen",color:16639626},bathroom:{label:"Bathroom",color:12248829},media:{label:"Media Room",color:12573694},dining:{label:"Dining",color:16698835},office:{label:"Office",color:15324671},laundry:{label:"Laundry",color:13095678},garage:{label:"Garage",color:13751771},default:{label:"Room",color:15067115}};function pn(s){return typeof s=="number"?s:typeof s=="string"&&s.startsWith("#")?parseInt(s.replace("#",""),16):15067115}function Pc(s,t,e){if(!(e!=null&&e.length)||e.length<3)return!1;let i=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){const[o,a]=e[n],[l,c]=e[r];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}function Th(s){return Math.hypot(s.to[0]-s.from[0],s.to[1]-s.from[1])}function J(s,t,e,i){const n=new Kt(new ts(s,t,e),i);return n.castShadow=!0,n.receiveShadow=!0,n}function Ct(s,t,e,i,n){const r=new Kt(new $n(s,t,e,i),n);return r.castShadow=!0,r}function st(s,t={}){return new oi({color:s,roughness:t.roughness??.6,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??(t.emissive?.4:0),transparent:t.transparent??!1,opacity:t.opacity??1})}function d_(s,t,e,i,n){const r=new Ze,o=Th(s)||.1,a=s.height||2.8,l=s.thickness||.15,c=[...e.filter(p=>p.wall_id===s.id).map(p=>({l:ms(p.position*o-(p.width||1)/2,0,o),r:ms(p.position*o+(p.width||1)/2,0,o),b:0,t:Math.min(p.height||2.1,a)})),...i.filter(p=>p.wall_id===s.id).map(p=>({l:ms(p.position*o-(p.width||1.2)/2,0,o),r:ms(p.position*o+(p.width||1.2)/2,0,o),b:p.sill||.9,t:Math.min((p.sill||.9)+(p.height||1.2),a)}))].sort((p,u)=>p.l-u.l),h=[];for(const p of c)if(!h.length||p.l>h[h.length-1].r+.01)h.push({...p});else{const u=h[h.length-1];u.r=Math.max(u.r,p.r),u.b=Math.min(u.b,p.b),u.t=Math.max(u.t,p.t)}const f=(p,u,b,w)=>{const M=u-p,A=w-b;if(M<.03||A<.03)return;const T=J(M,A,l,n);T.position.set(-o/2+p+M/2,b+A/2,0),r.add(T)};if(h.length){let p=0;for(const u of h)u.l>p&&f(p,u.l,0,a),u.t<a-.03&&f(u.l,u.r,u.t,a),u.b>.03&&f(u.l,u.r,0,u.b),p=Math.max(p,u.r);p<o-.03&&f(p,o,0,a)}else{const p=J(o,a,l,n);p.position.y=a/2,r.add(p)}const[d,m]=s.from,[g,v]=s.to;return r.position.set((d+g)/2,t,(m+v)/2),r.rotation.y=-Math.atan2(v-m,g-d),r.userData={type:"wall",id:s.id},r}function ms(s,t,e){return Math.max(t,Math.min(e,s))}function Ah(s,t,e){const[i,n]=s.from,[r,o]=s.to,a=Math.atan2(o-n,r-i),l=i+(r-i)*t,c=n+(o-n)*t;return{x:l,z:c,angle:a,floorY:e}}function u_(s,t){const e=s.position??.5,i=t.from[0]+(t.to[0]-t.from[0])*e,n=t.from[1]+(t.to[1]-t.from[1])*e;return{x:i,z:n}}function Ao(s,t,e,i,n,r,o=1){const a=new Ze;a.position.set(-t/2+i,0,0),a.userData.doorPanel=!0,a.userData.panelKind="swing",a.userData.openDir=o;const l=t-i*2,c=J(l,e,.05,n);if(c.position.set(l/2,e/2+.02,.03),a.add(c),r){const h=Ct(.035,.035,.12,10,r);h.rotation.z=Math.PI/2,h.position.set(l-.08,e*.45,.07),a.add(h)}return s.add(a),a}function Cc(s,t,e,i,n,r=0){const o=new Ze;o.position.set(r,0,0),o.userData.doorPanel=!0,o.userData.panelKind="slide",o.userData.slideDist=(t-i*2)*.55,o.userData.baseX=r;const a=J((t-i*2)*.48,e,.02,n);return a.position.set(0,e/2+.02,.02),o.add(a),s.add(o),o}function Rc(s,t,e,i=!1){const n=new Ze,r=s.width||1,o=s.height||2.1,a=s.style||s.type||"swing_modern",l=.06,c=s.frame_color?pn(s.frame_color):16777215,h=s.color?pn(s.color):i?16498468:9136404,f=st(c,{roughness:.45}),d=st(h,{roughness:.55,emissive:i?14251782:0,emissiveIntensity:i?.25:0}),m=st(9684477,{transparent:!0,opacity:.4,metalness:.5,roughness:.05}),g=st(13948120,{metalness:.9,roughness:.15}),v=st(2042167),p=()=>{const A=J(l,o,.1,f);A.position.set(-r/2+l/2,o/2,0);const T=J(l,o,.1,f);T.position.set(r/2-l/2,o/2,0);const R=J(r,l,.1,f);R.position.set(0,o-l/2,0),n.add(A,T,R)},u=o-l-.05;switch(a){case"sliding_glass":case"garage":if(p(),a==="garage"){const _=J(r-l*2,u,.04,st(15067115,{metalness:.4}));_.position.set(0,u/2+.02,.02),n.add(_);const y=J(r-l*2,.02,.05,v);for(let E=1;E<5;E++){const C=y.clone();C.position.set(0,u*(E/5),.04),n.add(C)}}else Cc(n,r,u,l,m,r*.08),Cc(n,r,u,l,m,-r*.15);n.add(J(r,.04,.12,v)),n.children[n.children.length-1].position.set(0,.02,0);break;case"double_french":p(),[-1,1].forEach(_=>{const y=r/2-l*1.1,E=J(y,u,.04,d);E.position.set(_*(y/2+l*.5),u/2+.02,.03),E.rotation.y=_*.45,n.add(E),n.add(J(y*.7,u*.55,.02,m)),n.children[n.children.length-1].position.set(_*(y/2+l*.5),u*.55,.05)});break;case"pivot_modern":p();const A=J(r-l*2,u,.05,st(3621201,{metalness:.3}));A.position.set(0,u/2+.02,.03),A.rotation.y=.6,n.add(A),n.add(Ct(.04,.04,u*.8,8,g)),n.children[n.children.length-1].position.set(-r/2+l+.05,u/2,.06);break;case"arched":p();const T=J(r-l*2,u*.85,.05,d);T.position.set(0,u*.42,.03),n.add(T);const R=new Kt(new ii((r-l*2)/2,16,8,0,Math.PI),d);R.position.set(0,u*.85,.03),R.scale.set(1,.5,.08),n.add(R);break;case"interior":{const _=J(r,o,.06,st(16777215));_.position.set(0,o/2,0),n.add(_),Ao(n,r,u,.04,st(16119284),null,1);break}case"swing_classic":p(),Ao(n,r,u,l,d,g,1);for(let _=0;_<3;_++){const y=J(r-l*2-.1,.02,.06,st(6045747));y.position.set(0,u*(.3+_*.22),.06),n.add(y)}break;default:p(),Ao(n,r,u,l,d,g,1)}const{x:b,z:w,angle:M}=Ah(t,s.position??.5,e);return n.position.set(b,e,w),n.rotation.y=-M,n.translateZ(.02),n.userData={type:"door",id:s.id},n}function Lc(s,t,e,i=!1){const n=new Ze,r=s.width||1.2,o=s.height||1.2,a=s.sill??.9,l=s.style||s.type||"standard",c=.05,h=s.frame_color?pn(s.frame_color):16777215,f=st(h,{roughness:.35}),d=st(i?8246268:10868986,{transparent:!0,opacity:.42,metalness:.55,roughness:.04,emissive:i?959977:1981023,emissiveIntensity:i?.2:.06}),m=()=>{[[-r/2+c/2,o/2,c,o],[r/2-c/2,o/2,c,o],[0,o-c/2,r,c],[0,c/2,r,c]].forEach(([b,w,M,A])=>{const T=J(M,A,.08,f);T.position.set(b,w+a,0),n.add(T)})};switch(l){case"bay":m(),[-1,0,1].forEach(M=>{const A=J(r/3-.02,o-c,.02,d);A.position.set(M*(r/3),a+o/2,M*.08),A.rotation.y=M*.25,n.add(A)});break;case"sliding":m(),n.add(J(r*.45,o-c*2,.02,d)),n.children[n.children.length-1].position.set(-r*.12,a+o/2,.02),n.add(J(r*.45,o-c*2,.02,d)),n.children[n.children.length-1].position.set(r*.12,a+o/2,.04);break;case"floor_ceiling":n.add(J(c,o,.08,f)),n.children[0].position.set(-r/2+c/2,a+o/2,0),n.add(J(c,o,.08,f)),n.children[1].position.set(r/2-c/2,a+o/2,0),n.add(J(r,o,.02,d)),n.children[2].position.set(0,a+o/2,0);break;case"arched":m(),n.add(J(r-c*2,o*.7,.02,d)),n.children[n.children.length-1].position.set(0,a+o*.35,0);const b=new Kt(new ii((r-c*2)/2,16,8,0,Math.PI),d);b.position.set(0,a+o*.7,0),b.scale.set(1,.45,.05),n.add(b);break;case"wide":m();const w=J(r-c*2,o-c*2,.02,d);w.position.set(0,a+o/2,0),n.add(w);break;default:m(),n.add(J(r-c*2,o-c*2,.02,d)),n.children[n.children.length-1].position.set(0,a+o/2,0),n.add(J(.03,o-c*2,.03,f)),n.children[n.children.length-1].position.set(0,a+o/2,.02),n.add(J(r-c*2,.03,.03,f)),n.children[n.children.length-1].position.set(0,a+o/2,.02)}const g=J(r+.04,.04,.1,st(15197668));g.position.set(0,a-.02,.02),n.add(g);const{x:v,z:p,angle:u}=Ah(t,s.position??.5,e);return n.position.set(v,e,p),n.rotation.y=-u,n.userData={type:"window",id:s.id},n}function hr(s,t,e,i=!1,n=!0){const r=e[s.type];if(!r)return null;const o=new Ze,a=s.mount||r.mount||"floor",l=s.on!==!1,c=st(16317180,{roughness:.35,metalness:.05}),h=st(14870768,{roughness:.55}),f=st(1976635,{roughness:.4,metalness:.15}),d=st(12632256,{roughness:.25,metalness:.85}),m=st(1120295,{roughness:.05,metalness:.6,transparent:!0,opacity:.85}),g=st(15857145,{roughness:.45}),v=st(2278750,{emissive:1483594,emissiveIntensity:l?1.2:0}),p=st(15680580,{emissive:14427686,emissiveIntensity:l?.9:0}),u=st(3900150,{emissive:2450411,emissiveIntensity:l?.8:0}),b=i?.15:0,w=(()=>{const _=document.createElement("canvas");_.width=256,_.height=384;const y=_.getContext("2d"),E=y.createLinearGradient(0,0,0,384);return E.addColorStop(0,"#0f172a"),E.addColorStop(1,"#1e3a5f"),y.fillStyle=E,y.fillRect(0,0,256,384),y.fillStyle="rgba(255,255,255,0.9)",y.font="bold 28px system-ui,sans-serif",y.fillText("Smart Home",24,50),y.fillStyle="rgba(96,165,250,0.6)",y.fillRect(24,80,208,60),y.fillRect(24,160,98,60),y.fillRect(134,160,98,60),y.fillStyle="rgba(255,255,255,0.5)",y.font="18px system-ui,sans-serif",y.fillText("Living · 22°C",36,118),new gs(_)})();switch(s.type){case"smart_light":{const _=Ct(.11,.11,.015,24,c);_.position.y=-.008,o.add(_);const y=Ct(.085,.07,.08,16,st(13358561,{metalness:.4,roughness:.35}));y.position.y=-.05,o.add(y);const E=Ct(.07,.05,.02,16,st(14870768,{metalness:.9,roughness:.15}));E.position.y=-.09,o.add(E);const C=new Kt(new ii(.035,16,16),st(16776171,{emissive:l?16775149:4472892,emissiveIntensity:l?1.5+b:.1,roughness:.2}));if(C.position.y=-.1,o.add(C),l){const L=new Ki(16773600,n?1.2:.6,8,2);L.position.y=-.12,L.castShadow=n,o.add(L)}o.rotation.x=Math.PI;break}case"camera":{const _=Ct(.05,.05,.02,16,h);_.position.y=-.01,o.add(_);const y=new Kt(new ii(.065,20,16,0,Math.PI*2,0,Math.PI*.55),c);y.position.y=-.05,o.add(y);const E=new Kt(new ii(.045,16,12,0,Math.PI*2,0,Math.PI*.5),m);E.position.set(0,-.06,.02),E.rotation.x=-.3,o.add(E);const C=Ct(.018,.018,.01,12,st(988970,{metalness:.8}));C.rotation.x=Math.PI/2,C.position.set(0,-.055,.055),o.add(C);for(let k=0;k<6;k++){const X=k/6*Math.PI*2,F=Ct(.004,.004,.005,6,st(1973067,{emissive:l?3223169:0,emissiveIntensity:.5}));F.position.set(Math.cos(X)*.04,-.04,Math.sin(X)*.04+.02),o.add(F)}const L=Ct(.004,.004,.003,8,v);L.position.set(.04,-.02,0),o.add(L),o.rotation.x=Math.PI;break}case"wifi_ap":case"access_point":{const _=Ct(.14,.14,.008,32,c);_.position.y=-.004,o.add(_);const y=Ct(.12,.12,.025,32,g);y.position.y=-.02,o.add(y);const E=new Kt(new Ts(.08,.004,8,32),h);E.rotation.x=Math.PI/2,E.position.y=-.035,o.add(E);const C=Ct(.006,.006,.004,8,u);C.position.set(.05,-.034,0),o.add(C),o.rotation.x=Math.PI;break}case"router":case"wifi_router":{const _=J(.22,.04,.16,st(16777215,{roughness:.3}));_.position.y=.02,o.add(_);const y=J(.2,.005,.14,st(988970,{roughness:.5}));y.position.set(0,.042,0),o.add(y);for(let C=0;C<4;C++){const L=Ct(.004,.003,.14,6,st(1976635));L.position.set(-.07+C*.045,.11,-.02),o.add(L);const k=Ct(.006,.004,.015,6,st(1976635));k.position.set(-.07+C*.045,.19,-.02),o.add(k)}const E=Ct(.003,.003,.004,6,v);E.position.set(.09,.038,.06),o.add(E);break}case"ceiling_speaker":{const _=Ct(.145,.145,.012,32,c);_.position.y=-.006,o.add(_);const y=Ct(.125,.125,.008,32,st(13948120,{roughness:.7}));y.position.y=-.018,o.add(y);for(let C=.03;C<=.1;C+=.025){const L=new Kt(new Ts(C,.0015,4,32),st(10592682));L.rotation.x=Math.PI/2,L.position.y=-.022,o.add(L)}const E=Ct(.035,.02,.025,12,st(5395035));E.position.y=-.03,o.add(E),o.rotation.x=Math.PI;break}case"speakers":{const _=J(.18,.32,.14,st(1976635,{roughness:.55}));o.add(_);const y=Ct(.055,.055,.02,16,st(988970));y.position.set(0,-.04,.075),o.add(y);const E=Ct(.02,.02,.015,12,st(3359061));E.position.set(0,.1,.075),o.add(E);const C=J(.16,.3,.005,st(3621201,{roughness:.8}));C.position.set(0,0,.072),o.add(C);break}case"switch":case"smart_switch":case"dimmer_switch":case"relay":{const _=J(.08,.12,.012,st(15857145,{metalness:.1}));_.position.set(0,0,-.006),o.add(_);const y=J(.076,.116,.008,st(988970,{roughness:.15,metalness:.2}));o.add(y);const E=J(.074,.114,.003,st(16777215,{transparent:!0,opacity:.12,roughness:.05,metalness:.1}));E.position.z=.005,o.add(E);for(let C=0;C<3;C++){const L=J(.055,.028,.002,st(3359061,{emissive:l&&C===0?4674921:0,emissiveIntensity:.3}));L.position.set(0,.038-C*.038,.006),o.add(L)}break}case"control_screen":case"main_screen":{const _=s.type==="main_screen"?2.2:1,y=.28*_,E=.42*_,C=.24*_,L=.36*_,k=J(y,E,.018,f);k.position.set(0,0,-.009),o.add(k);const X=J(y-.01,E-.01,.012,st(2565930,{metalness:.3,roughness:.35}));o.add(X);const F=J(C,L,.004,new oi({map:w,emissive:l?1982639:657930,emissiveMap:w,emissiveIntensity:l?.6+b:.05,roughness:.1,metalness:0}));F.position.z=.008,o.add(F);const $=Ct(.004,.004,.003,8,st(1579035));if($.position.set(0,E/2-.04,.012),o.add($),l&&n){const H=new Ki(9684477,.15,2);H.position.z=.05,o.add(H)}break}case"temp_sensor":case"thermostat":{const _=J(.09,.13,.015,c);o.add(_);const y=J(.07,.05,.004,st(988970,{emissive:l?1981023:0,emissiveIntensity:.5}));y.position.set(0,.02,.009),o.add(y);const E=document.createElement("canvas");E.width=128,E.height=64;const C=E.getContext("2d");C.fillStyle="#38bdf8",C.font="bold 36px system-ui",C.fillText("22°",20,48);const L=new gs(E),k=J(.068,.048,.002,new oi({map:L,emissiveMap:L,emissive:16777215,emissiveIntensity:l?.4:0}));k.position.set(0,.02,.011),o.add(k);const X=Ct(.025,.025,.008,16,d);X.rotation.x=Math.PI/2,X.position.set(0,-.035,.01),o.add(X);break}case"motion_sensor":{const _=J(.07,.1,.025,c);o.add(_);const y=Ct(.028,.028,.015,16,h);y.rotation.x=Math.PI/2,y.position.set(0,0,.018),o.add(y);const E=new Kt(new ii(.022,12,8),st(16708551,{transparent:!0,opacity:.85,roughness:.1}));E.position.set(0,0,.028),o.add(E);const C=Ct(.004,.004,.003,6,p);C.position.set(.025,.03,.013),o.add(C);break}case"door_sensor":{const _=J(.025,.07,.018,c);_.position.set(-.02,0,0),o.add(_);const y=J(.015,.06,.012,st(6583435,{metalness:.5}));y.position.set(.025,0,0),o.add(y);const E=Ct(.003,.003,.002,6,v);E.position.set(-.02,.025,.01),o.add(E);break}case"alarm_siren":{const _=J(.12,.12,.04,c);o.add(_),J(.1,.1,.005,st(13948120,{roughness:.8}));for(let E=-.04;E<=.04;E+=.02){const C=J(.08,.003,.006,st(10592682));C.position.set(0,E,.022),o.add(C)}const y=Ct(.025,.025,.01,12,st(16777215,{emissive:l?15680580:0,emissiveIntensity:l?1:0,transparent:!0,opacity:.9}));y.rotation.x=Math.PI/2,y.position.set(0,0,.025),o.add(y);break}case"ac_split":{const _=J(.85,.28,.22,c);o.add(_);const y=J(.75,.04,.18,st(14870768,{metalness:.3}));y.position.set(0,-.05,.02),o.add(y);for(let L=0;L<5;L++){const k=J(.7,.008,.015,st(13358561));k.position.set(0,-.02,-.06+L*.03),o.add(k)}const E=J(.12,.04,.01,st(988970,{emissive:l?3718648:0,emissiveIntensity:.6}));E.position.set(.3,.05,.12),o.add(E);const C=Ct(.005,.005,.004,6,l?v:st(6583435));C.position.set(-.35,.1,.12),o.add(C);break}case"ac_cassette":{o.rotation.x=Math.PI;const _=J(.6,.08,.6,c);_.position.y=-.04,o.add(_);const y=J(.5,.01,.5,st(13948120));y.position.y=-.085,o.add(y);for(let E=-.2;E<=.2;E+=.1){const C=J(.45,.005,.008,st(10592682));C.position.set(0,-.088,E),o.add(C)}if(l){const E=new Ki(12248829,.3,4);E.position.y=-.15,o.add(E)}break}case"smart_tv_50":case"soundbar":{const _=s.type==="soundbar"?1.1:1.11,y=s.type==="soundbar"?.07:.62,E=J(_+.03,y+.03,.03,st(1579035,{metalness:.3}));o.add(E);const C=document.createElement("canvas");C.width=512,C.height=s.type==="soundbar"?64:288;const L=C.getContext("2d");L.fillStyle=s.type==="soundbar"?"#1e293b":"#0f172a",L.fillRect(0,0,C.width,C.height),s.type!=="soundbar"&&(L.fillStyle="#1e40af",L.fillRect(10,10,492,268),L.fillStyle="#fff",L.font="bold 28px system-ui",L.fillText('Smart TV 50" · Home Assistant',20,40));const k=new gs(C),X=J(_,y,.012,new oi({map:k,emissiveMap:k,emissive:16777215,emissiveIntensity:l?.5:.05,roughness:.05}));X.position.z=.018,o.add(X);break}case"smart_bulb":{const _=Ct(.003,.003,.15,6,st(3621201));_.position.y=.075,o.add(_);const y=new Kt(new ii(.09,16,16),st(16776171,{emissive:l?16498468:4472892,emissiveIntensity:l?1.4:.08}));if(y.position.y=-.02,o.add(y),l){const E=new Ki(16773600,n?1:.5,7,2);E.position.y=-.04,o.add(E)}o.rotation.x=Math.PI;break}case"light_strip":{const _=J(1.2,.025,.03,st(1976635));_.position.y=0,o.add(_);const y=J(1.15,.012,.02,st(16777215,{emissive:l?11032055:3355443,emissiveIntensity:l?1.2:0}));if(y.position.set(0,.01,.01),o.add(y),l){const E=new Ki(12616956,.4,5);E.position.set(0,-.1,.2),o.add(E)}break}case"ceiling_panel":{o.rotation.x=Math.PI;const _=J(.55,.04,.55,c);_.position.y=-.02,o.add(_);const y=J(.48,.01,.48,st(16777215,{emissive:l?16775149:3355443,emissiveIntensity:l?1:0}));if(y.position.y=-.045,o.add(y),l){const E=new Ki(16773600,1.4,10,2);E.position.y=-.2,o.add(E)}break}case"humidifier":{const _=Ct(.12,.14,.32,16,c);_.position.y=.16,o.add(_);const y=Ct(.005,.02,.06,8,st(12248829,{transparent:!0,opacity:l?.5:.1}));y.position.y=.35,o.add(y);const E=Ct(.006,.006,.004,8,l?u:st(6583435));E.position.set(.08,.25,.08),o.add(E);break}case"fan":{const _=Ct(.12,.14,.03,16,f);_.position.y=.015,o.add(_);const y=Ct(.03,.03,.85,10,d);y.position.y=.45,o.add(y);const E=Ct(.18,.18,.03,20,c);E.position.y=.9,o.add(E);break}case"heater":{const _=J(.28,.48,.12,c);_.position.y=.24,o.add(_);for(let y=0;y<6;y++){const E=J(.22,.008,.08,st(13358561,{emissive:l?16347926:0,emissiveIntensity:l?.5:0}));E.position.set(0,.1+y*.06,.02),o.add(E)}break}case"smart_plug":{const _=J(.08,.12,.05,c);_.position.y=.06,o.add(_);const y=J(.04,.015,.02,d);y.position.set(0,.125,.02),o.add(y);const E=Ct(.004,.004,.003,6,l?v:st(6583435));E.position.set(.025,.08,.026),o.add(E);break}case"socket":{const _=J(.08,.12,.012,h);o.add(_);const y=J(.06,.08,.008,st(16317180,{roughness:.4}));y.position.z=.008,o.add(y);const E=J(.012,.035,.012,d);E.position.set(-.015,0,.014),o.add(E);const C=E.clone();C.position.x=.015,o.add(C);const L=Ct(.003,.003,.003,6,l?u:st(6583435));L.position.set(0,-.04,.012),o.add(L);break}case"ir_remote":{const _=J(.07,.07,.03,st(1579035,{roughness:.35}));o.add(_);const y=Ct(.025,.025,.008,12,m);y.position.set(0,0,.018),o.add(y);const E=Ct(.004,.004,.003,6,l?p:st(6583435));E.position.set(.025,.025,.016),o.add(E);break}case"micro_sensor":{const _=J(.09,.09,.025,c);o.add(_);const y=Ct(.025,.025,.012,12,st(3359061,{metalness:.3}));y.position.set(0,0,.018),o.add(y);const E=Ct(.004,.004,.003,6,l?u:st(6583435));E.position.set(.03,.03,.014),o.add(E);break}case"vibration_sensor":{const _=J(.07,.07,.02,h);o.add(_);const y=Ct(.02,.02,.008,10,st(4674921));y.position.set(0,0,.012),o.add(y);const E=Ct(.003,.003,.003,6,l?v:st(6583435));E.position.set(.025,.025,.012),o.add(E);break}case"intercom":{const _=J(.13,.2,.025,f);o.add(_);const y=J(.1,.1,.006,st(988970,{emissive:l?1981023:0,emissiveIntensity:.45}));y.position.set(0,.03,.014),o.add(y);const E=Ct(.012,.012,.008,10,st(1579035));E.position.set(0,.08,.016),o.add(E);for(let C=0;C<3;C++){const L=Ct(.015,.015,.004,10,st(3359061,{emissive:l&&C===1?4674921:0,emissiveIntensity:.3}));L.position.set(-.03+C*.03,-.06,.016),o.add(L)}break}case"robot_vacuum":{const _=Ct(.17,.17,.09,24,st(16777215,{metalness:.2}));_.position.y=.045,o.add(_);const y=Ct(.04,.04,.02,12,f);y.position.set(.1,.08,0),o.add(y);const E=Ct(.005,.005,.003,6,l?u:st(6583435));E.position.set(-.08,.085,.06),o.add(E);break}case"smart_lock":{const _=J(.12,.22,.04,st(1579035,{metalness:.5}));o.add(_);const y=Ct(.04,.04,.06,12,d);y.rotation.z=Math.PI/2,y.position.set(.06,0,.03),o.add(y);break}case"smoke_detector":case"gas_detector":{o.rotation.x=Math.PI;const _=Ct(.12,.12,.04,20,c);_.position.y=-.02,o.add(_);const y=Ct(.04,.04,.015,12,st(14870768,{roughness:.6}));y.position.y=-.035,o.add(y);const E=Ct(.006,.006,.004,8,l?s.type==="gas_detector"?p:v:st(6583435));E.position.set(.05,-.03,0),o.add(E);break}case"smart_curtain":case"smart_blinds":{const _=J(.12,.08,.08,c);_.position.y=.04,o.add(_);const y=Ct(.008,.008,.8,6,d);y.rotation.z=Math.PI/2,y.position.set(.4,.04,0),o.add(y);break}case"zigbee_hub":{const _=J(.12,.035,.12,g);_.position.y=.018,o.add(_);const y=Ct(.004,.004,.003,6,l?v:st(6583435));y.position.set(.04,.035,0),o.add(y);break}case"water_leak":{const _=J(.08,.025,.08,c);_.position.y=.012,o.add(_);const y=J(.02,.01,.04,d);y.position.set(0,.025,.02),o.add(y);break}case"electrical_panel":{const _=J(.38,.52,.08,st(15067115,{metalness:.35,roughness:.45}));_.position.y=.26,o.add(_);const y=J(.36,.5,.01,st(16317180,{metalness:.25,roughness:.4}));y.position.set(0,.26,.042),o.add(y);const E=J(.04,.12,.015,d);E.position.set(.14,.26,.05),o.add(E);const C=J(.15,.04,.005,st(16498468,{emissive:16096779,emissiveIntensity:.3}));C.position.set(-.05,.48,.045),o.add(C);for(let L=0;L<6;L++){const k=J(.04,.07,.008,st(1976635));k.position.set(-.12+L%3*.12,.38-Math.floor(L/3)*.12,.046),o.add(k)}break}default:o.add(J(r.w,r.h||.15,r.w,g)),o.children[0].position.y=(r.h||.15)/2}if(i&&!n){const _=new Kt(new Xa(.12,.14,24),st(2282478,{emissive:561586,emissiveIntensity:.6,transparent:!0,opacity:.7}));_.rotation.x=-Math.PI/2,_.position.y=.01,o.add(_)}const[M,A]=s.position||[0,0];let T=t;const R=s.ceiling_height??2.75;return a==="ceiling"?T=t+R:a==="wall"?T=t+(s.height_offset??r.defaultHeight??1.35):a==="door"&&(T=t+1),o.position.set(M,T,A),o.rotation.y=s.rotation||0,o.userData={type:"smart",id:s.id,smartType:s.type},o}function Po(s,t,e,i=!1){const n=e[s.type];if(!n)return null;const r=new Ze,o=s.width||n.w,a=s.depth||n.d,l=s.height||n.h,c=s.color?pn(s.color):n.color,h=(g,v={})=>st(g,{...v,transparent:i,opacity:i?.35:1}),f=h(c);switch(h(3621201),s.type){case"sofa":{r.add(J(o,.35,a,f)),r.children[0].position.set(0,.175,0);const g=J(o,.5,.15,f);g.position.set(0,.45,-a/2+.075),r.add(g,J(.12,.45,a,f)),r.children[2].position.set(-o/2+.06,.35,0),r.add(J(o-.3,.12,a-.2,h(7041664))),r.children[3].position.set(0,.4,.05);break}case"bed":{r.add(J(o,.25,a,f)),r.children[0].position.set(0,.125,0),r.add(J(o-.08,.2,a-.08,h(16317180))),r.children[1].position.set(0,.35,0),r.add(J(o,.9,.08,f)),r.children[2].position.set(0,.55,-a/2+.04);break}case"lamp":{const g=s.on!==!1,v=Ct(.16,.18,.025,20,h(1841431,{metalness:.6,roughness:.35}));v.position.y=.012,r.add(v);const p=Ct(.018,.022,l-.3,10,h(12632256,{metalness:.85,roughness:.2}));p.position.y=(l-.3)/2+.02,r.add(p);const u=new Kt(new $n(.2,.24,.22,20,1,!0),h(16448249,{emissive:g?16775149:0,emissiveIntensity:g?.4:0,side:ti}));u.position.y=l-.18,r.add(u);const b=new Kt(new ii(.05,12,12),h(16776171,{emissive:g?16498468:4472892,emissiveIntensity:g?.8:.05}));if(b.position.y=l-.2,r.add(b),g){const w=new Ki(16772565,.9,7,2);w.position.y=l-.22,w.castShadow=!i,r.add(w)}break}case"tv":{const v=J(.12,.9,.08,h(2565930,{metalness:.4}));v.position.set(0,.9/2,.05),r.add(v);const p=J(.06,.05,.18,h(5395035,{metalness:.5}));p.position.set(0,.9-.03,.12),r.add(p);const u=J(o+.03,l+.03,.03,h(1579035,{metalness:.3,roughness:.4}));u.position.set(0,.9+l/2+.08,0),r.add(u);const b=document.createElement("canvas");b.width=512,b.height=288;const w=b.getContext("2d");w.fillStyle="#0a0a0a",w.fillRect(0,0,512,288);const M=w.createLinearGradient(0,0,512,288);M.addColorStop(0,"#1e3a5f"),M.addColorStop(1,"#0f172a"),w.fillStyle=M,w.fillRect(8,8,496,272),w.fillStyle="rgba(255,255,255,0.85)",w.font="bold 32px system-ui,sans-serif",w.fillText('Smart TV 50"',24,48),w.fillStyle="rgba(96,165,250,0.5)",w.fillRect(24,70,464,190);const A=new gs(b),T=J(o,l,.015,new oi({map:A,emissiveMap:A,emissive:16777215,emissiveIntensity:.45,roughness:.05,metalness:0}));T.position.set(0,.9+l/2+.08,.018),r.add(T);const R=new Ki(9684477,.12,3);R.position.set(0,.9+l/2+.08,.4),r.add(R);break}case"toilet":{const g=h(16317180,{roughness:.25,metalness:.05}),v=J(.38,.38,.18,g);v.position.set(0,.55,-a/2+.12),r.add(v);const p=new Kt(new $n(.2,.17,.32,20),g);p.position.set(0,.2,.05),r.add(p);const u=new Kt(new Ts(.17,.025,8,24),h(15067115,{roughness:.5}));u.rotation.x=Math.PI/2,u.position.set(0,.38,.05),r.add(u);break}case"bathtub":{const g=h(15857145,{roughness:.2,metalness:.08}),v=J(o,l*.85,a,g);v.position.set(0,l*.42,0),r.add(v);const p=J(o-.12,l*.55,a-.12,h(14870768,{roughness:.15}));p.position.set(0,l*.5,0),r.add(p);const u=J(.04,.25,.04,h(12632256,{metalness:.85,roughness:.2}));u.position.set(-o/2+.15,l*.75,0),r.add(u);break}case"sink":{const g=J(o,l*.65,a,h(7893356,{roughness:.7}));g.position.set(0,l*.32,0),r.add(g);const v=J(o+.02,.04,a+.02,h(15067115,{roughness:.3}));v.position.set(0,l*.66,0),r.add(v);const p=new Kt(new $n(.22,.18,.08,20),h(16317180,{roughness:.2}));p.position.set(0,l*.72,0),r.add(p);const u=J(.03,.18,.03,h(11579568,{metalness:.9,roughness:.15}));u.position.set(0,l*.82,-a/2+.08),r.add(u);break}case"fridge":{const g=J(o,l,a,h(15067115,{roughness:.35,metalness:.15}));g.position.set(0,l/2,0),r.add(g);const v=J(o+.01,.015,a+.01,h(10265519,{metalness:.4}));v.position.set(0,l*.62,0),r.add(v);const p=J(.03,.35,.03,h(7041664,{metalness:.7}));p.position.set(o/2-.06,l*.78,0),r.add(p);const u=p.clone();u.position.y=l*.35,r.add(u);break}case"oven":{const g=J(o,l,a,h(3621201,{roughness:.45,metalness:.2}));g.position.set(0,l/2,0),r.add(g);const v=J(o-.08,l*.45,.02,h(2042167,{roughness:.1,metalness:.3}));v.position.set(0,l*.38,a/2+.01),r.add(v);const p=J(o*.5,.04,.04,h(1120295,{metalness:.5}));p.position.set(0,l*.82,a/2+.02),r.add(p);break}case"wardrobe":{const g=J(o,l,a,h(c,{roughness:.75}));g.position.set(0,l/2,0),r.add(g);const p=J(o/2-.02,l-.08,.03,h(9584654,{roughness:.65}));p.position.set(-o/4,l/2,a/2+.015),r.add(p);const u=p.clone();u.position.x=o/4,r.add(u);const b=Ct(.015,.015,.08,8,h(12632256,{metalness:.8}));b.rotation.z=Math.PI/2,b.position.set(-.05,l*.45,a/2+.05),r.add(b);break}default:r.add(J(o,l,a,f)),r.children[0].position.y=l/2}const[d,m]=s.position||[0,0];return r.position.set(d,t,m),r.rotation.y=s.rotation||0,r.userData={type:"component",id:s.id},r}function f_(s,t,e){if(!(s!=null&&s.length)||s.length<3)return null;const i=new Wa;i.moveTo(s[0][0],s[0][1]);for(let o=1;o<s.length;o++)i.lineTo(s[o][0],s[o][1]);i.closePath();const n=e.isMaterial?e:st(typeof e=="number"?e:pn(e),{roughness:.88}),r=new Kt(new Nr(i),n);return r.rotation.x=-Math.PI/2,r.position.y=t+.02,r.receiveShadow=!0,r.userData.isFloor=!0,r}function p_(s,t,e,i){if(!(s!=null&&s.length)||s.length<3)return null;const n=new Wa;n.moveTo(s[0][0],s[0][1]);for(let o=1;o<s.length;o++)n.lineTo(s[o][0],s[o][1]);n.closePath();const r=new Kt(new Nr(n),i);return r.rotation.x=Math.PI/2,r.position.y=t+e-.02,r.userData.isCeiling=!0,r}function m_(s,t){var l;if(!((l=s.polygon)!=null&&l.length))return null;const e=s.polygon.reduce((c,h)=>c+h[0],0)/s.polygon.length,i=s.polygon.reduce((c,h)=>c+h[1],0)/s.polygon.length,n=document.createElement("canvas");n.width=256,n.height=64;const r=n.getContext("2d");r.fillStyle="rgba(15,23,42,0.75)",r.roundRect(8,8,240,48,12),r.fill(),r.fillStyle="#ffffff",r.font="bold 22px Inter, sans-serif",r.textAlign="center",r.fillText(s.name||"Room",128,40);const o=new gs(n),a=new Bd(new th({map:o,transparent:!0}));return a.scale.set(2.5,.65,1),a.position.set(e,t+.15,i),a.userData.isLabel=!0,a}function g_(s,t,e,i){const n=Th(e);if(n<.1)return!1;const r=e.to[0]-e.from[0],o=e.to[1]-e.from[1],a=r*r+o*o,l=ms(((s-e.from[0])*r+(t-e.from[1])*o)/a,0,1),c=l*n,h=e.from[0]+r*l,f=e.from[1]+o*l,d=Math.hypot(s-h,t-f);for(const m of i.filter(g=>g.wall_id===e.id)){const g=(m.width||1)/2+.35,v=(m.position??.5)*n;if(c>=v-g&&c<=v+g&&d<(m.width||1)/2+.55)return!0}return!1}function Co(s,t){s.traverse(e=>{var i;(i=e.userData)!=null&&i.doorPanel&&(e.userData.panelKind==="swing"?e.rotation.y=-t*(Math.PI/2.2)*(e.userData.openDir||1):e.userData.panelKind==="slide"&&(e.position.x=(e.userData.baseX||0)+t*(e.userData.slideDist||.5)))})}function __(s){return typeof s=="number"?`#${(s>>>0).toString(16).padStart(6,"0")}`:typeof s=="string"&&s.startsWith("#")?s:"#e5e7eb"}function x_(s,t,e,i,n,r){const o=n-e,a=r-i,l=o*o+a*a;if(l<1e-4)return Math.hypot(s-e,t-i);let c=((s-e)*o+(t-i)*a)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(s-(e+c*o),t-(i+c*a))}class v_{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="plan2d-canvas",this.canvas.setAttribute("aria-label","2D floor plan"),t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.zoom=1,this.panX=0,this.panY=0,this.padding=48,this.isPanning=!1,this.lastPan={x:0,y:0},this.bounds={w:20,d:15},this.visible=!1,this._underlayCache={},this._underlayLoading={},this._pointers=new Map,this._pinch=null,this.hide()}resolveUnderlayUrl(t){return t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:")?t:t.startsWith("//")?`${window.location.protocol}${t}`:t.startsWith("/")?`${window.location.origin}${t}`:t:""}isUnderlayReady(t){return!!(t&&t.naturalWidth>0&&t.complete)}loadUnderlay(t,e){if(!t)return;const i=this.resolveUnderlayUrl(t),n=i||t,r=this._underlayCache[n]||this._underlayCache[t];if(this.isUnderlayReady(r)){this._underlayCache[n]=r,this._underlayCache[t]=r;return}if(this._underlayLoading[n])return;this._underlayLoading[n]=!0;const o=r&&r.tagName==="IMG"?r:new Image;o.onload=()=>{this._underlayCache[n]=o,this._underlayCache[t]=o,delete this._underlayLoading[n],e==null||e()},o.onerror=()=>{if(delete this._underlayLoading[n],!o.dataset.retried){o.dataset.retried="1";const a=this.resolveUnderlayUrl(t);a&&a!==o.src&&(this._underlayLoading[n]=!0,o.src=a)}},this._underlayCache[n]=o,this._underlayCache[t]=o,o.src!==i?o.src=i:this.isUnderlayReady(o)&&(delete this._underlayLoading[n],e==null||e())}drawUnderlay(t,e,i,n){if(!(e!=null&&e.url))return;const r=this.resolveUnderlayUrl(e.url),o=this._underlayCache[r]||this._underlayCache[e.url];if(!this.isUnderlayReady(o))return;const a=e.bounds||[0,0,i,n],[l,c,h,f]=a,[d,m]=this.worldToScreen(l,c),[g,v]=this.worldToScreen(h,f),p=g-d,u=v-m;Math.abs(p)<1||Math.abs(u)<1||(t.save(),t.globalAlpha=e.opacity??.55,t.drawImage(o,Math.min(d,g),Math.min(m,v),Math.abs(p),Math.abs(u)),t.restore())}show(){this.visible=!0,this.canvas.classList.remove("hidden")}hide(){this.visible=!1,this.canvas.classList.add("hidden")}resize(t,e){const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.max(1,Math.floor(t*i)),this.canvas.height=Math.max(1,Math.floor(e*i)),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.ctx.setTransform(i,0,0,i,0,0),this.viewW=t,this.viewH=e}fitToBounds(t,e){this.bounds={w:t||20,d:e||15};const i=this.viewW||1,n=this.viewH||1,r=Math.max(i-this.padding*2,1),o=Math.max(n-this.padding*2,1);this.zoom=Math.min(r/this.bounds.w,o/this.bounds.d),(!Number.isFinite(this.zoom)||this.zoom<=0)&&(this.zoom=1),this.panX=this.padding+(r-this.bounds.w*this.zoom)/2,this.panY=this.padding+(o-this.bounds.d*this.zoom)/2}minZoom(){const t=this.viewW||1,e=this.viewH||1,i=Math.max(t-this.padding*2,1),n=Math.max(e-this.padding*2,1),r=Math.min(i/this.bounds.w,n/this.bounds.d);return Math.max(.25,r*.15)}worldToScreen(t,e){return[this.panX+t*this.zoom,this.panY+e*this.zoom]}screenToWorld(t,e){return[(t-this.panX)/this.zoom,(e-this.panY)/this.zoom]}maxZoom(){return 120}clampZoom(t){const e=Number(t);return!Number.isFinite(e)||e<=0?this.minZoom():Math.max(this.minZoom(),Math.min(this.maxZoom(),e))}zoomAt(t,e,i){const[n,r]=this.screenToWorld(t,e);this.zoom=this.clampZoom(this.zoom*i);const[o,a]=this.worldToScreen(n,r);this.panX+=t-o,this.panY+=e-a}zoomBy(t,e=null){const i=(e==null?void 0:e.sx)??(this.viewW||1)/2,n=(e==null?void 0:e.sy)??(this.viewH||1)/2;this.zoomAt(i,n,t)}onWheel(t){t.preventDefault();const e=this.canvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top,r=t.deltaY<0?1.08:.92;this.zoomAt(i,n,r)}pointerCount(){return this._pointers.size}updatePointer(t){this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY})}removePointer(t){this._pointers.delete(t.pointerId),this._pointers.size<2&&(this._pinch=null)}clearPointers(){this._pointers.clear(),this._pinch=null,this.isPanning=!1}pinchDistance(){if(this._pointers.size<2)return 0;const t=[...this._pointers.values()];return Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y)}pinchCenter(){const t=this.canvas.getBoundingClientRect(),e=[...this._pointers.values()],i=(e[0].x+e[1].x)/2,n=(e[0].y+e[1].y)/2;return{sx:i-t.left,sy:n-t.top,clientX:i,clientY:n}}onPointerDown(t,e={}){if(this.updatePointer(t),this._pointers.size>=2){this.isPanning=!1;const o=this.pinchDistance(),a=this.pinchCenter();this._pinch={startDist:Math.max(o,1),startZoom:this.zoom,lastCenter:a};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return!0}const i=e.allowFingerPan===!0,n=t.pointerType==="touch"||t.pointerType==="pen";if(t.button===1||t.button===2||t.altKey||t.button===0&&t.shiftKey||i&&n&&t.button===0){this.isPanning=!0,this.lastPan={x:t.clientX,y:t.clientY};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return!0}return!1}onPointerMove(t){if(!this._pointers.has(t.pointerId)&&!this.isPanning&&!this._pinch)return!1;if(this.updatePointer(t),this._pointers.size>=2){const e=this.pinchDistance(),i=this.pinchCenter();if(!this._pinch)return this._pinch={startDist:Math.max(e,1),startZoom:this.zoom,lastCenter:i},this.isPanning=!1,!0;const n=e/this._pinch.startDist,r=this.clampZoom(this._pinch.startZoom*n),[o,a]=this.screenToWorld(i.sx,i.sy);this.zoom=r;const[l,c]=this.worldToScreen(o,a);this.panX+=i.sx-l,this.panY+=i.sy-c;const h=this._pinch.lastCenter;return this.panX+=i.sx-h.sx,this.panY+=i.sy-h.sy,this._pinch.lastCenter=i,this.isPanning=!1,!0}return this.isPanning?(this.panX+=t.clientX-this.lastPan.x,this.panY+=t.clientY-this.lastPan.y,this.lastPan={x:t.clientX,y:t.clientY},!0):!1}onPointerUp(t){t?this.removePointer(t):this.clearPointers(),this._pointers.size===0&&(this.isPanning=!1),this._pointers.size<2&&(this._pinch=null)}hitTest(t,e,i){var h,f,d;const n=this.ctx;for(const m of[...t.labels||[]].reverse())if(this.hitTestLabel(n,m,e,i))return{type:"label",id:m.id};const[r,o]=this.screenToWorld(e,i),a=.35/this.zoom;for(const m of[...t.components||[]].reverse()){const g=(m.width||1)/2,v=(m.depth||1)/2,[p,u]=m.position;if(r>=p-g&&r<=p+g&&o>=u-v&&o<=u+v)return{type:"component",id:m.id}}for(const m of[...t.smart_devices||[]].reverse()){const[g,v]=m.position;if(Math.hypot(r-g,o-v)<.7)return{type:"smart",id:m.id}}for(const m of t.doors||[]){const g=(h=t.walls)==null?void 0:h.find(u=>u.id===m.wall_id);if(!g)continue;const{x:v,z:p}=this.pointOnWall(g,m.position??.5);if(Math.hypot(r-v,o-p)<.5)return{type:"door",id:m.id}}for(const m of t.windows||[]){const g=(f=t.walls)==null?void 0:f.find(u=>u.id===m.wall_id);if(!g)continue;const{x:v,z:p}=this.pointOnWall(g,m.position??.5);if(Math.hypot(r-v,o-p)<.5)return{type:"window",id:m.id}}let l=null,c=a;for(const m of t.walls||[]){const g=x_(r,o,m.from[0],m.from[1],m.to[0],m.to[1]);g<c&&(c=g,l=m)}if(l)return{type:"wall",id:l.id};for(const m of t.rooms||[])if((d=m.polygon)!=null&&d.length&&this.pointInPolygon(r,o,m.polygon))return{type:"room",id:m.id};return null}hitTestWallHandle(t,e,i,n){var f;if((e==null?void 0:e.type)!=="wall")return null;const r=(f=t.walls)==null?void 0:f.find(d=>d.id===e.id);if(!r)return null;const o=10,[a,l]=this.worldToScreen(r.from[0],r.from[1]),[c,h]=this.worldToScreen(r.to[0],r.to[1]);return Math.hypot(i-a,n-l)<=o?{userData:{dragType:"wall-from",refId:r.id,endpoint:"from"}}:Math.hypot(i-c,n-h)<=o?{userData:{dragType:"wall-to",refId:r.id,endpoint:"to"}}:null}pointOnWall(t,e){const[i,n]=t.from,[r,o]=t.to;return{x:i+(r-i)*e,z:n+(o-n)*e}}pointInPolygon(t,e,i){let n=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){const[a,l]=i[r],[c,h]=i[o];l>e!=h>e&&t<(c-a)*(e-l)/(h-l+1e-4)+a&&(n=!n)}return n}drawWallSegment(t,e,i,n,r){const[o,a]=e.from,[l,c]=e.to,h=Math.hypot(l-o,c-a)||.001,f=(e.thickness||.15)*this.zoom/2,d=n===e.id,m=(i||[]).filter(v=>v.wall_id===e.id),g=[[0,1]];m.forEach(v=>{const p=(v.width||1)/(2*h),u=v.position??.5,b=Math.max(0,u-p),w=Math.min(1,u+p),M=[];g.forEach(([A,T])=>{w<=A||b>=T?M.push([A,T]):(b>A&&M.push([A,b]),w<T&&M.push([w,T]))}),g.length=0,g.push(...M)}),t.strokeStyle=d?"#22d3ee":"#cbd5e1",t.lineWidth=Math.max(3,f*2),t.lineCap="square",g.forEach(([v,p])=>{const[u,b]=this.worldToScreen(o+(l-o)*v,a+(c-a)*v),[w,M]=this.worldToScreen(o+(l-o)*p,a+(c-a)*p);t.beginPath(),t.moveTo(u,b),t.lineTo(w,M),t.stroke()}),m.forEach(v=>{const{x:p,z:u}=this.pointOnWall(e,v.position??.5),[b,w]=this.worldToScreen(p,u),M=r===v.id,A=v.sill!==void 0&&v.sill!==null;t.fillStyle=M?"#22d3ee":A?"#38bdf8":"#f59e0b",t.beginPath(),t.arc(b,w,4,0,Math.PI*2),t.fill()})}measureLabel(t,e){const i=e.size||14,n=String(e.text||"Text").split(`
`);t.font=`${e.bold?"700":"600"} ${i}px Inter, system-ui, sans-serif`;const r=i*1.25,o=n.map(a=>t.measureText(a).width);return{w:Math.max(...o,1),h:Math.max(n.length*r,r),lineHeight:r,lines:n,size:i}}hitTestLabel(t,e,i,n){const[r,o]=this.worldToScreen(e.position[0],e.position[1]),a=this.measureLabel(t,e),l=6;return i>=r-l&&i<=r+a.w+l&&n>=o-l&&n<=o+a.h+l}drawLabel(t,e,i){const[n,r]=this.worldToScreen(e.position[0],e.position[1]),o=this.measureLabel(t,e);t.save(),t.font=`${e.bold?"700":"600"} ${o.size}px Inter, system-ui, sans-serif`,t.textAlign="left",t.textBaseline="top",t.fillStyle=e.color||"#e2e8f0",i&&(t.strokeStyle="#22d3ee",t.lineWidth=1.5,t.strokeRect(n-4,r-4,o.w+8,o.h+8)),o.lines.forEach((a,l)=>{t.fillText(a,n,r+l*o.lineHeight)}),t.restore()}drawWallPreview(t,e,i){const[n,r]=this.worldToScreen(e[0],e[1]),[o,a]=this.worldToScreen(i[0],i[1]);t.strokeStyle="#22d3ee",t.lineWidth=2,t.setLineDash([6,4]),t.beginPath(),t.moveTo(n,r),t.lineTo(o,a),t.stroke(),t.setLineDash([]),[[e,"#22d3ee"],[i,"#67e8f9"]].forEach(([l,c])=>{const[h,f]=this.worldToScreen(l[0],l[1]);t.fillStyle=c,t.beginPath(),t.arc(h,f,5,0,Math.PI*2),t.fill()})}drawWallHandles(t,e){[[e.from,"#22d3ee"],[e.to,"#67e8f9"]].forEach(([i,n])=>{const[r,o]=this.worldToScreen(i[0],i[1]);t.fillStyle=n,t.strokeStyle="#0f172a",t.lineWidth=2,t.beginPath(),t.arc(r,o,6,0,Math.PI*2),t.fill(),t.stroke()})}drawPlacementGhost(t,e){if(!(e!=null&&e.position))return;const[i,n]=e.position;if(e.kind==="smart"){this.drawSmartMarker(t,{position:e.position,type:e.type,selected:!0,ghost:!0});return}const r=(e.width||1)/2,o=(e.depth||1)/2,[a,l]=this.worldToScreen(i-r,n-o),[c,h]=this.worldToScreen(i+r,n+o);t.fillStyle="rgba(34,211,238,0.2)",t.strokeStyle="#22d3ee",t.lineWidth=1.5,t.setLineDash([4,3]),t.fillRect(a,l,c-a,h-l),t.strokeRect(a,l,c-a,h-l),t.setLineDash([])}drawSmartMarker(t,{position:e,type:i,selected:n=!1,ghost:r=!1,on:o=!0}){const[a,l]=e,[c,h]=this.worldToScreen(a,l),f=ce[i]||{},d=f.icon||"●",m=f.label||i||"Device",g=11;t.save(),t.globalAlpha=r?.75:1,t.beginPath(),t.arc(c,h-3,g,0,Math.PI*2),t.fillStyle=n||r?"rgba(14, 165, 233, 0.92)":o!==!1?"rgba(15, 23, 42, 0.88)":"rgba(51, 65, 85, 0.9)",t.fill(),t.lineWidth=n?2:1.25,t.strokeStyle=n||r?"#67e8f9":"#e2e8f0",t.stroke(),t.font='13px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#ffffff",t.fillText(d,c,h-3);const v=4,p=2;t.font="600 10px Inter, system-ui, sans-serif",t.textBaseline="top";const b=t.measureText(m).width+v*2,w=14,M=c-b/2,A=h+g+1;t.fillStyle=n||r?"rgba(8, 145, 178, 0.92)":"rgba(15, 23, 42, 0.86)",t.beginPath();const T=4;t.moveTo(M+T,A),t.arcTo(M+b,A,M+b,A+w,T),t.arcTo(M+b,A+w,M,A+w,T),t.arcTo(M,A+w,M,A,T),t.arcTo(M,A,M+b,A,T),t.closePath(),t.fill(),t.fillStyle="#f8fafc",t.fillText(m,c,A+p),t.restore()}render({floor:t,projectWidth:e,projectDepth:i,selected:n,floorLabel:r,previewWall:o,placementGhost:a,onUnderlayReady:l}){var g,v,p;if(!this.visible)return;const c=this.ctx,h=this.viewW||1,f=this.viewH||1;c.clearRect(0,0,h,f),c.fillStyle="#0a1018",c.fillRect(0,0,h,f);const d=!!((g=t.underlay)!=null&&g.url&&t.underlay.visible!==!1&&(t.underlay.opacity??0)>.01);if(d&&(this.loadUnderlay(t.underlay.url,l),this.drawUnderlay(c,t.underlay,e,i)),this.drawGrid(c,e,i),((v=t.rooms)!=null&&v.length?t.rooms:d?[]:[{polygon:[[0,0],[e,0],[e,i],[0,i]],color:1976635,name:"Floor"}]).forEach(u=>{const b=u.polygon||[];if(!(b.length<3)&&(c.beginPath(),b.forEach(([w,M],A)=>{const[T,R]=this.worldToScreen(w,M);A===0?c.moveTo(T,R):c.lineTo(T,R)}),c.closePath(),c.fillStyle=__(u.color??1976635),c.globalAlpha=d?(n==null?void 0:n.type)==="room"&&n.id===u.id?.28:.12:(n==null?void 0:n.type)==="room"&&n.id===u.id?.95:.75,c.fill(),c.globalAlpha=1,c.strokeStyle="rgba(255,255,255,0.08)",c.lineWidth=1,c.stroke(),u.name)){const w=b.reduce((R,_)=>R+_[0],0)/b.length,M=b.reduce((R,_)=>R+_[1],0)/b.length,[A,T]=this.worldToScreen(w,M);c.fillStyle="rgba(255,255,255,0.85)",c.font="600 11px Inter, system-ui, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(u.name,A,T)}}),(t.walls||[]).forEach(u=>{const b=[...t.doors||[],...t.windows||[]],w=(n==null?void 0:n.type)==="wall"?n.id:null;this.drawWallSegment(c,u,b,w,n==null?void 0:n.id)}),(t.components||[]).forEach(u=>{const[b,w]=u.position,M=(u.width||1)/2,A=(u.depth||1)/2,[T,R]=this.worldToScreen(b-M,w-A),[_,y]=this.worldToScreen(b+M,w+A),E=(n==null?void 0:n.type)==="component"&&n.id===u.id;c.fillStyle=E?"rgba(34,211,238,0.35)":"rgba(148,163,184,0.45)",c.strokeStyle=E?"#22d3ee":"#94a3b8",c.lineWidth=E?2:1,c.fillRect(T,R,_-T,y-R),c.strokeRect(T,R,_-T,y-R)}),(t.smart_devices||[]).forEach(u=>{const b=(n==null?void 0:n.type)==="smart"&&n.id===u.id;this.drawSmartMarker(c,{position:u.position,type:u.type,selected:b,on:u.on!==!1})}),(n==null?void 0:n.type)==="wall"){const u=(p=t.walls)==null?void 0:p.find(b=>b.id===n.id);u&&this.drawWallHandles(c,u)}o!=null&&o.from&&(o!=null&&o.to)&&this.drawWallPreview(c,o.from,o.to),a&&this.drawPlacementGhost(c,a),(t.labels||[]).forEach(u=>{const b=(n==null?void 0:n.type)==="label"&&n.id===u.id;this.drawLabel(c,u,b)}),c.fillStyle="rgba(255,255,255,0.5)",c.font="500 10px Inter, system-ui, sans-serif",c.textAlign="left",c.fillText(r||"Floor plan",12,f-12),c.textAlign="right",c.fillText(`${e}×${i} m · pinch / buttons zoom · drag pan`,h-12,f-12)}drawGrid(t,e,i){t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;for(let c=0;c<=e;c+=1){const[h,f]=this.worldToScreen(c,0),[,d]=this.worldToScreen(c,i);t.beginPath(),t.moveTo(h,f),t.lineTo(h,d),t.stroke()}for(let c=0;c<=i;c+=1){const[h,f]=this.worldToScreen(0,c),[d]=this.worldToScreen(e,c);t.beginPath(),t.moveTo(h,f),t.lineTo(d,f),t.stroke()}t.strokeStyle="rgba(34,211,238,0.25)",t.lineWidth=2;const[r,o]=this.worldToScreen(0,0),[a,l]=this.worldToScreen(e,i);t.strokeRect(r,o,a-r,l-o)}}const Aa=.5,Ri=2.8,kn=.15,y_=.15;function Le(s){return`${s}-${crypto.randomUUID().slice(0,8)}`}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function Pa(s,t){return t?Math.round(s/Aa)*Aa:Math.round(s*100)/100}function Dc(s,t,e){return[Pa(s,e),Pa(t,e)]}function M_(s){var e,i;let t=s;for(;t;){if((e=t.userData)!=null&&e.type&&((i=t.userData)!=null&&i.id))return t;t=t.parent}return null}function Ca(s){return Math.hypot(s.to[0]-s.from[0],s.to[1]-s.from[1])}function Ro(s,t,e){const[i,n]=s.from,[r,o]=s.to,a=r-i,l=o-n,c=a*a+l*l;return c<.001?.5:Ve(((t-i)*a+(e-n)*l)/c,0,1)}function dr(s,t){const e=Ca(s)||.1,i=(t||1)/2;return[i/e,1-i/e]}class S_{constructor(t){this.root=t,this.canEdit=t.dataset.canEdit==="true",this.projectWidth=parseFloat(t.dataset.width)||20,this.projectDepth=parseFloat(t.dataset.depth)||15,this.mapData=JSON.parse(t.dataset.mapData||"{}"),this.viewerOnly=t.dataset.viewerOnly==="true",this.initialViewMode=t.dataset.initialViewMode||(this.viewerOnly,"plan2d"),this.liveUrl=t.dataset.liveUrl||"",this.liveRevision=t.dataset.mapRevision||"",this.liveSyncTimer=null;try{l_(JSON.parse(t.dataset.smartCatalog||"[]"))}catch{}if(this.container=t.querySelector("#map-canvas"),this.longPressTimer=null,this.longPressMoved=!1,this.deviceDetailsEl=document.querySelector("#device-details-popover"),this.toolButtons=t.querySelectorAll("[data-tool]"),this.kitsCatalogEl=t.querySelector("#kits-catalog"),this.itemsCatalogEl=t.querySelector("#items-catalog"),this.doorsCatalogEl=t.querySelector("#doors-catalog"),this.windowsCatalogEl=t.querySelector("#windows-catalog"),this.roomsCatalogEl=t.querySelector("#rooms-catalog"),this.componentButtons=[],this.smartButtons=[],this.doorStyleButtons=[],this.windowStyleButtons=[],this.roomPaintButtons=[],this.kitButtons=[],this.catalogTabs=t.querySelectorAll("[data-catalog-tab]"),this.catalogPanels=t.querySelectorAll("[data-catalog-panel]"),this.statusEl=t.querySelector("#map-status"),this.contextEl=t.querySelector("#studio-context"),this.placingBadgeEl=t.querySelector("#studio-placing-badge"),this.assetScrollEl=t.querySelector(".studio-asset-content"),this.outlinerSearchEl=t.querySelector("#outliner-search"),this.outlinerCountEl=t.querySelector("#outliner-count"),this.outlinerFilter="",this.propsEl=t.querySelector("#map-properties"),this.listEl=t.querySelector("#map-elements-list"),this.saveBtn=document.querySelector("#save-map-btn"),this.clearFloorBtn=document.querySelector("#clear-floor-btn"),this.snapToggle=t.querySelector("#snap-toggle"),this.viewModeButtons=t.querySelectorAll("[data-view-mode]"),this.studioPanels=t.querySelectorAll("[data-studio-panel]"),this.simOverlay=t.querySelector("#sim-overlay"),this.form=t.querySelector("#map-form"),this.input=t.querySelector("#map_data_input"),this.widthInput=t.querySelector("#map_width_input"),this.depthInput=t.querySelector("#map_depth_input"),this.importUrl=t.dataset.underlayUrl||"",this.importBtn=document.querySelector("#import-plan-btn"),this.importModal=document.querySelector("#import-plan-modal"),this.importForm=document.querySelector("#import-plan-form"),this.importError=document.querySelector("#import-plan-error"),this.importSubmit=document.querySelector("#import-plan-submit"),this.importCloseButtons=document.querySelectorAll("[data-import-close]"),this.importImageInput=document.querySelector("#import-plan-image"),this.importPasteZone=document.querySelector("#import-paste-zone"),this.importPreview=document.querySelector("#import-image-preview"),this.importPreviewImg=document.querySelector("#import-image-preview-img"),this.importPreviewName=document.querySelector("#import-image-preview-name"),this.importFile=null,this.floorSwitcherEl=t.querySelector("#floor-switcher"),this.quotationBtn=document.querySelector("#quotation-btn"),this.quotationModal=document.querySelector("#quotation-modal"),this.quotationLinesEl=document.querySelector("#quotation-lines"),this.quotationTotalsEl=document.querySelector("#quotation-totals"),this.quotationClientInput=document.querySelector("#quotation-client"),this.quotationPhoneInput=document.querySelector("#quotation-phone"),this.quotationLocationInput=document.querySelector("#quotation-location"),this.quotationNotesInput=document.querySelector("#quotation-notes"),this.quotationProgrammingInput=document.querySelector("#quotation-programming"),this.quotationInstallationInput=document.querySelector("#quotation-installation"),this.quotationDiscountInput=document.querySelector("#quotation-discount"),this.quotationTvaInput=document.querySelector("#quotation-tva"),this.quotationSaveDefaultsBtn=document.querySelector("#quotation-save-defaults-btn"),this.quotationPrintBtn=document.querySelector("#quotation-print-btn"),this.quotationDefaultsKey="smart_home_quotation_service_defaults",this.benefitsBtn=document.querySelector("#benefits-btn"),this.benefitsModal=document.querySelector("#benefits-modal"),this.benefitsStatsEl=document.querySelector("#benefits-stats"),this.benefitsLinesEl=document.querySelector("#benefits-lines"),this.benefitsExpensesEl=document.querySelector("#benefits-expenses"),this.benefitsTotalsEl=document.querySelector("#benefits-totals"),this.benefitsAddExpenseBtn=document.querySelector("#benefits-add-expense-btn"),this.activeFloorIndex=Number(this.mapData.active_floor)||0,this.viewMode=this.initialViewMode,this.eyeHeight=1.65,this.walkKeys={w:!1,a:!1,s:!1,d:!1,shift:!1},this.look360={yaw:0,pitch:0,dragging:!1,lastX:0,lastY:0},this.walkLookDrag=!1,this.doorAnimStates=new Map,this.nearDoorId=null,this.currentRoomId=null,this.nightMode=this.isNightTime(),this.smartCategoryFilter="all",this.kitCategoryFilter="all",this.furnitureCategoryFilter="all",this.haCategoryEl=t.querySelector("#ha-category-filter"),this.haDeviceGridEl=t.querySelector("#ha-device-grid"),this.nightModeBtn=t.querySelector("#night-mode-btn"),this.walkVelocity=new D,this.tool="select",this.snapEnabled=!0,this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.selectedDoorStyle="swing_modern",this.selectedWindowStyle="standard",this.selected=null,this.wallStart=null,this.wallPreviewEnd=null,this.cursorWorld=null,this.previewLine=null,this.startMarker=null,this.previewComponent=null,this.previewKit=null,this.drag=null,this.labelEditor=null,this.meshes={walls:new Map,doors:new Map,windows:new Map,components:new Map,smart:new Map},this.decorMeshes=[],this.normalizeMapData(),this.initScene(),this.bindEvents(),this.viewerOnly){this.updateNightModeUI(),this.renderFloorSwitcher(),this.rebuildScene(),this.setViewMode("plan2d"),this.startLiveSync(),requestAnimationFrame(()=>{this.onResize(),this.renderPlan2d(),setTimeout(()=>this.renderPlan2d(),250),setTimeout(()=>this.renderPlan2d(),1e3)}),this.animate();return}this.setTool("select"),this.setCatalogTab("smart"),this.renderAllCatalogs(),this.updateStyleButtons(),this.updateNightModeUI(),this.renderFloorSwitcher(),this.viewMode!=="plan2d"&&this.rebuildScene(),this.renderElementsList(),this.updateStudioContext(),this.setViewMode(this.initialViewMode),requestAnimationFrame(()=>this.onResize()),this.animate()}normalizeMapData(){(!Array.isArray(this.mapData.floors)||!this.mapData.floors.length)&&(this.mapData.floors=[{id:"floor-1",name:"Ground Floor",level:0,height:Ri,rooms:[],walls:[],doors:[],windows:[],components:[],smart_devices:[],labels:[]}]),this.activeFloorIndex=Ve(Number(this.mapData.active_floor)||0,0,this.mapData.floors.length-1),this.mapData.active_floor=this.activeFloorIndex,this.mapData.floors.forEach((t,e)=>{var i,n,r;t.id??(t.id=`floor-${e+1}`),t.name??(t.name=ar(t.level??e)),t.level??(t.level=e),t.height??(t.height=Ri),t.walls??(t.walls=[]),t.doors??(t.doors=[]),t.windows??(t.windows=[]),t.components??(t.components=[]),t.smart_devices??(t.smart_devices=[]),t.labels??(t.labels=[]),t.rooms??(t.rooms=[]),(i=t.underlay)!=null&&i.url&&(t.underlay.url=this.normalizeUnderlayUrl(t.underlay.url),(n=t.underlay).visible??(n.visible=!0),(r=t.underlay).opacity??(r.opacity=.92),(!Array.isArray(t.underlay.bounds)||t.underlay.bounds.length<4)&&(t.underlay.bounds=[0,0,this.projectWidth,this.projectDepth])),t.walls.forEach(o=>{o.thickness??(o.thickness=kn),o.height??(o.height=t.height||Ri)}),t.doors.forEach(o=>{o.type==="swing"&&(o.style="swing_modern"),o.type==="sliding"&&(o.style="sliding_glass"),o.type==="double"&&(o.style="double_french"),o.style??(o.style=o.type??"swing_modern")}),t.windows.forEach(o=>{o.style??(o.style=o.type??"standard")}),t.rooms.forEach(o=>{var a;o.preset&&!o.color&&(o.color=(a=Ci[o.preset])==null?void 0:a.color)})})}normalizeUnderlayUrl(t){const e=String(t||"").trim();if(!e)return"";if(e.startsWith("data:")||e.startsWith("blob:"))return e;try{if(e.startsWith("http://")||e.startsWith("https://")||e.startsWith("//")){const i=e.startsWith("//")?`${window.location.protocol}${e}`:e,n=new URL(i,window.location.origin);return`${n.pathname}${n.search}`}}catch{}return e.startsWith("/")?e:`/${e.replace(/^\/+/,"")}`}getFloor(){var e;(e=this.mapData.floors)!=null&&e.length||(this.mapData.floors=[{id:"floor-1",name:"Ground Floor",level:0,height:Ri,rooms:[],walls:[],doors:[],windows:[],components:[],smart_devices:[],labels:[]}],this.activeFloorIndex=0),(this.activeFloorIndex<0||this.activeFloorIndex>=this.mapData.floors.length)&&(this.activeFloorIndex=0);const t=this.mapData.floors[this.activeFloorIndex];return t.walls??(t.walls=[]),t.doors??(t.doors=[]),t.windows??(t.windows=[]),t.components??(t.components=[]),t.smart_devices??(t.smart_devices=[]),t.labels??(t.labels=[]),t.rooms??(t.rooms=[]),t.height??(t.height=Ri),t}setActiveFloor(t){var n;if(!((n=this.mapData.floors)!=null&&n.length))return;const e=Ve(t,0,this.mapData.floors.length-1);if(e===this.activeFloorIndex)return;this.activeFloorIndex=e,this.mapData.active_floor=e,this.selected=null,this.wallStart=null,this.wallPreviewEnd=null,this.doorAnimStates.clear(),this.nearDoorId=null,this.currentRoomId=null,this.renderFloorSwitcher(),this.viewMode==="plan2d"?this.renderPlan2d():this.rebuildScene(),this.viewerOnly||(this.renderElementsList(),this.renderProperties());const i=this.getFloor();this.viewerOnly&&this.viewMode==="plan2d"&&this.renderPlan2d(),this.setStatus(this.viewerOnly?`Viewing ${i.name||`Floor ${e+1}`}`:`Editing ${i.name||`Floor ${e+1}`}`)}renderFloorSwitcher(){if(!this.floorSwitcherEl)return;const e=(this.mapData.floors||[]).map((r,o)=>({floor:r,index:o})).sort((r,o)=>(r.floor.level??0)-(o.floor.level??0));this.floorSwitcherEl.classList.remove("hidden"),this.floorSwitcherEl.classList.add("flex");const i=e.map(({floor:r,index:o})=>{const a=o===this.activeFloorIndex,l=To(r),c=r.name||ar(r.level??0);return`<button type="button" data-floor-index="${o}" class="${a?"view-mode-active":"view-mode-btn"}" title="${c}">${l}</button>`}).join(""),n=this.canEdit&&!this.viewerOnly?'<button type="button" data-floor-add class="view-mode-btn !px-2" title="Add floor layer">+</button>':"";this.floorSwitcherEl.innerHTML=`<div class="studio-segment studio-floor-switcher">${i}${n}</div>`}addFloorLayer(){if(!this.canEdit)return;const t=this.mapData.floors,e=o_(t);t.push({id:Le("floor"),name:ar(e),level:e,height:Ri,rooms:[],walls:[],doors:[],windows:[],components:[],smart_devices:[],labels:[]}),this.setActiveFloor(t.length-1),this.setStatus(`Added ${ar(e)} — switch floors in the top bar`)}initScene(){var o;this.scene=new Dd,this.scene.background=new Ft(659226),this.scene.fog=new Hn(659226,50,140);const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.camera=new Ye(50,t/e,.1,500);const i=this.mapData.camera||{};this.camera.position.set(...i.position||[this.projectWidth/2,12,this.projectDepth+12]),this.renderer=new Bg({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new zg(this.camera,this.renderer.domElement),this.controls.target.set(...i.target||[this.projectWidth/2,0,this.projectDepth/2]),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.05,this.scene.add(this.ambientLight=new Fu(16774635,.45)),this.sun=new Uu(16775408,1.1),this.sun.position.set(15,25,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=80,this.scene.add(this.sun),this.hemiLight=new Du(14412542,4472892,.35),this.scene.add(this.hemiLight);const n=Math.max(this.projectWidth,this.projectDepth)*1.5;this.grid=new Hu(n,n*2,1722970,1384496),this.scene.add(this.grid),this.groundPlane=new Kt(new Qn(n*2,n*2),new Gn({visible:!1})),this.groundPlane.rotation.x=-Math.PI/2,this.scene.add(this.groundPlane),this.handleGroup=new Ze,this.scene.add(this.handleGroup),this.raycaster=new ku,this.pointer=new ot,this.materials={floor:new oi({color:9139029,roughness:.85,metalness:.05}),ceiling:new oi({color:16317180,roughness:.95,side:ti}),wall:new oi({color:15262943,roughness:.82}),wallSelected:new oi({color:6809849,roughness:.5,emissive:561586,emissiveIntensity:.35}),componentSelected:new oi({color:10980346,emissive:8141549,emissiveIntensity:.3}),preview:new Ar({color:2282478}),marker:new Gn({color:2282478}),previewGhost:new oi({color:2282478,transparent:!0,opacity:.35}),handle:new Gn({color:2282478})},this.pointerLock=new i_(this.camera,this.renderer.domElement),this.clock=new zu;const r=this.renderer.domElement;r.tabIndex=0,r.setAttribute("role","application"),r.setAttribute("aria-label","3D map viewport"),(o=this.root.querySelector("#map-loading"))==null||o.remove(),this.plan2d=new v_(this.container),this.bindPlan2dEvents()}bindPlan2dEvents(){if(!this.plan2d)return;const t=this.plan2d.canvas;if(t.style.touchAction="none",t.addEventListener("wheel",e=>{this.viewMode==="plan2d"&&(this.plan2d.onWheel(e),this.renderPlan2d())},{passive:!1}),t.addEventListener("pointerdown",e=>{if(this.viewMode!=="plan2d")return;this.hideDeviceDetails();const i=this.viewerOnly||this.tool==="select"||!this.canEdit;if(this.plan2d.pointerCount()===0&&this.startSmartLongPress(e),this.plan2d.onPointerDown(e,{allowFingerPan:i})){this.clearSmartLongPress();return}this.onPointerDown(e)}),t.addEventListener("pointermove",e=>{var n,r;if(this.viewMode!=="plan2d")return;if(this.longPressTimer){const o=e.clientX-(((n=this.longPressOrigin)==null?void 0:n.x)||0),a=e.clientY-(((r=this.longPressOrigin)==null?void 0:r.y)||0);Math.hypot(o,a)>8&&(this.longPressMoved=!0,this.clearSmartLongPress())}if(this.plan2d.onPointerMove(e)||this.plan2d.isPanning||this.plan2d._pinch){this.clearSmartLongPress(),this.renderPlan2d();return}this.onPointerMove(e)}),t.addEventListener("pointerup",e=>{var n;const i=this.longPressFired;this.clearSmartLongPress(),(n=this.plan2d)==null||n.onPointerUp(e),i||this.hideDeviceDetails(),this.renderPlan2d()}),t.addEventListener("pointercancel",e=>{var i;this.clearSmartLongPress(),(i=this.plan2d)==null||i.onPointerUp(e),this.hideDeviceDetails(),this.renderPlan2d()}),t.addEventListener("dblclick",e=>{if(this.viewMode!=="plan2d"||!this.canEdit)return;const{sx:i,sy:n}=this.getPlan2dScreen(e),r=this.plan2d.hitTest(this.getFloor(),i,n);if((r==null?void 0:r.type)==="label"){e.preventDefault();const o=this.getFloor().labels.find(a=>a.id===r.id);o&&this.openLabelEditor({labelId:o.id,worldPos:o.position,text:o.text})}}),t.addEventListener("contextmenu",e=>{e.preventDefault(),this.viewMode==="plan2d"&&this.showSmartDetailsAtEvent(e)}),!this._deviceDetailsDismissBound){this._deviceDetailsDismissBound=!0;const e=i=>{this.isDeviceDetailsOpen()&&(this.longPressFired&&this.longPressTimer==null&&i.type==="pointerup"||t.contains(i.target)||this.hideDeviceDetails())};document.addEventListener("pointerdown",e,!0),document.addEventListener("click",e,!0)}this.bindPlan2dZoomControls()}bindPlan2dZoomControls(){const t=()=>{this.viewMode!=="plan2d"||!this.plan2d||(this.plan2d.zoomBy(1.2),this.renderPlan2d(),this.setStatus("Zoomed in"))},e=()=>{this.viewMode!=="plan2d"||!this.plan2d||(this.plan2d.zoomBy(.8333333333333334),this.renderPlan2d(),this.setStatus("Zoomed out"))},i=()=>{this.viewMode!=="plan2d"||!this.plan2d||(this.ensurePlan2dLayout(),this.renderPlan2d(),this.setStatus("Fit to view"))};this.root.querySelectorAll('[data-plan-zoom="in"]').forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),t()})}),this.root.querySelectorAll('[data-plan-zoom="out"]').forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),e()})}),this.root.querySelectorAll('[data-plan-zoom="fit"]').forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),i()})})}startSmartLongPress(t){this.clearSmartLongPress(),this.longPressMoved=!1,this.longPressFired=!1,this.longPressOrigin={x:t.clientX,y:t.clientY};const{sx:e,sy:i}=this.getPlan2dScreen(t),n=this.plan2d.hitTest(this.getFloor(),e,i);(n==null?void 0:n.type)==="smart"&&(this.longPressTimer=window.setTimeout(()=>{this.longPressMoved||(this.longPressFired=!0,this.showSmartDetails(n.id,t.clientX,t.clientY))},480))}clearSmartLongPress(){this.longPressTimer&&(window.clearTimeout(this.longPressTimer),this.longPressTimer=null)}isDeviceDetailsOpen(){const t=this.ensureDeviceDetailsEl();return!!(t!=null&&t.classList.contains("is-open"))}ensureDeviceDetailsEl(){return(!this.deviceDetailsEl||!document.body.contains(this.deviceDetailsEl))&&(this.deviceDetailsEl=document.querySelector("#device-details-popover")),this.deviceDetailsEl}showSmartDetailsAtEvent(t){const{sx:e,sy:i}=this.getPlan2dScreen(t),n=this.plan2d.hitTest(this.getFloor(),e,i);if((n==null?void 0:n.type)!=="smart"){this.hideDeviceDetails();return}this.longPressFired=!0,this.showSmartDetails(n.id,t.clientX,t.clientY)}showSmartDetails(t,e,i){const n=this.ensureDeviceDetailsEl();if(!n)return;const o=this.getFloor().smart_devices.find(g=>g.id===t);if(!o)return;const a=ce[o.type]||{},l=Number(a.price),c=Number.isFinite(l)?l:lr(o.type,o);n.innerHTML=`
            <div class="device-details-icon">${a.icon||"●"}</div>
            <div class="device-details-body">
                <p class="device-details-name">${a.label||o.type}</p>
                <p class="device-details-price">${he(c)}</p>
            </div>
        `,n.classList.add("is-open"),n.classList.remove("hidden"),n.style.display="flex";const h=12,f=n.getBoundingClientRect();let d=e+12,m=i+12;d+f.width>window.innerWidth-h&&(d=e-f.width-12),m+f.height>window.innerHeight-h&&(m=i-f.height-12),n.style.left=`${Math.max(h,d)}px`,n.style.top=`${Math.max(h,m)}px`,this.selectById("smart",t),this.setStatus(`${a.label||o.type} · ${Tc(c)}`)}hideDeviceDetails(){const t=this.ensureDeviceDetailsEl();t&&(t.classList.remove("is-open"),t.classList.add("hidden"),t.style.display="none")}isDesignMode(){return this.viewMode==="studio"||this.viewMode==="plan2d"}getPlan2dScreen(t){const e=this.plan2d.canvas.getBoundingClientRect();return{sx:t.clientX-e.left,sy:t.clientY-e.top}}getWorldPoint(t){if(this.viewMode==="plan2d"){const{sx:e,sy:i}=this.getPlan2dScreen(t),[n,r]=this.plan2d.screenToWorld(e,i);return Dc(n,r,this.snapEnabled)}return this.getGroundPoint(t)}getHitAtEvent(t){if(this.viewMode==="plan2d"){const{sx:e,sy:i}=this.getPlan2dScreen(t),n=this.plan2d.hitTest(this.getFloor(),e,i);return n?{userData:{type:n.type,id:n.id}}:null}return this.getIntersectedObject(t)}getPlacementGhost(){if(!this.cursorWorld||this.viewMode!=="plan2d")return null;if(this.tool==="furniture"&&this.placingComponent){const t=Ge[this.placingComponent];return t?{position:this.cursorWorld,width:t.w,depth:t.d}:null}if(this.tool==="kit"&&this.placingKit){const t=Bn[this.placingKit];return t?{position:this.cursorWorld,width:t.footprint.w,depth:t.footprint.d}:null}return this.tool==="smart"&&this.placingSmart?{kind:"smart",type:this.placingSmart,position:this.cursorWorld,width:.6,depth:.6}:null}ensurePlan2dLayout(){if(!this.plan2d||!this.container)return;const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.plan2d.resize(t,e),this.plan2d.fitToBounds(this.projectWidth,this.projectDepth)}renderPlan2d(){if(!this.plan2d||this.viewMode!=="plan2d")return;(!this.plan2d.viewW||!this.plan2d.viewH)&&this.ensurePlan2dLayout();const t=this.getFloor(),e=this.wallStart?{from:this.wallStart,to:this.wallPreviewEnd||this.wallStart}:null;this.plan2d.render({floor:t,projectWidth:this.projectWidth,projectDepth:this.projectDepth,selected:this.selected,floorLabel:t.name||To(t),previewWall:e,placementGhost:this.getPlacementGhost(),onUnderlayReady:()=>{this.viewMode==="plan2d"&&this.renderPlan2d()}})}bindEvents(){var n,r,o,a,l,c,h,f,d,m,g,v,p,u,b,w,M,A,T,R,_,y,E,C,L,k,X,F,$,H,Q,it,ct,mt,Mt,qt;this.toolButtons.forEach(et=>{et.addEventListener("click",()=>{this.endDrag(),this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.updateComponentButtons(),this.updateSmartButtons(),this.updateKitButtons(),this.removePreviewComponent(),this.removePreviewSmart(),this.removePreviewKit();const vt=et.dataset.tool;this.setTool(vt)})}),this.catalogTabs.forEach(et=>{et.addEventListener("click",()=>this.setCatalogTab(et.dataset.catalogTab))}),this.viewModeButtons.forEach(et=>{et.addEventListener("click",()=>this.setViewMode(et.dataset.viewMode))}),(n=this.snapToggle)==null||n.addEventListener("change",et=>{this.snapEnabled=et.target.checked,this.setStatus(this.snapEnabled?"Grid snap ON (0.5m)":"Grid snap OFF — free placement")});const t=this.renderer.domElement;t.addEventListener("pointerdown",et=>this.onPointerDown(et)),t.addEventListener("pointermove",et=>this.onPointerMove(et)),window.addEventListener("pointerup",()=>this.endDrag()),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("keydown",et=>this.onKeyDown(et)),window.addEventListener("keyup",et=>this.onKeyUp(et)),this.renderer.domElement.addEventListener("mouseup",()=>{this.look360.dragging=!1,this.walkLookDrag=!1}),this.renderer.domElement.addEventListener("mouseleave",()=>{this.look360.dragging=!1,this.walkLookDrag=!1}),this.pointerLock.addEventListener("lock",()=>{this.viewMode==="view360"&&(this.look360.yaw=this.camera.rotation.y,this.look360.pitch=this.camera.rotation.x,this.setStatus("360° — WASD move · mouse look · E door · Shift run · Esc exit"))}),this.pointerLock.addEventListener("unlock",()=>{this.viewMode==="view360"&&(this.look360.yaw=this.camera.rotation.y,this.look360.pitch=this.camera.rotation.x,this.setStatus("360° — click view · WASD move · drag look · E door · Esc exit"))}),(r=this.nightModeBtn)==null||r.addEventListener("click",()=>{this.nightMode=!this.nightMode,this.applySceneLighting(this.viewMode!=="studio"),this.updateNightModeUI(),this.nightMode&&this.currentRoomId&&this.setRoomLights(this.currentRoomId,!0)}),(o=this.saveBtn)==null||o.addEventListener("click",()=>this.save()),(a=this.clearFloorBtn)==null||a.addEventListener("click",()=>this.clearCurrentFloor()),(l=this.importBtn)==null||l.addEventListener("click",()=>this.openImportModal()),this.importCloseButtons.forEach(et=>{et.addEventListener("click",()=>this.closeImportModal())}),(c=this.importModal)==null||c.addEventListener("click",et=>{et.target===this.importModal&&this.closeImportModal()}),(h=this.importForm)==null||h.addEventListener("submit",et=>{et.preventDefault(),this.submitFloorImage()}),(f=this.importImageInput)==null||f.addEventListener("change",()=>{var vt;const et=((vt=this.importImageInput.files)==null?void 0:vt[0])||null;this.setImportFile(et)}),(d=this.importPasteZone)==null||d.addEventListener("click",et=>{var vt;et.target.closest("input, button, a")||(vt=this.importImageInput)==null||vt.click()}),(m=this.importPasteZone)==null||m.addEventListener("dragover",et=>{et.preventDefault(),this.importPasteZone.classList.add("border-brand-500/60","bg-brand-500/10")}),(g=this.importPasteZone)==null||g.addEventListener("dragleave",()=>{this.importPasteZone.classList.remove("border-brand-500/60","bg-brand-500/10")}),(v=this.importPasteZone)==null||v.addEventListener("drop",et=>{var V;et.preventDefault(),this.importPasteZone.classList.remove("border-brand-500/60","bg-brand-500/10");const vt=Array.from(((V=et.dataTransfer)==null?void 0:V.files)||[]).find(nt=>this.isImportableImage(nt));vt&&this.setImportFile(vt)}),document.addEventListener("paste",et=>this.onImportPaste(et));const e=document.querySelector("#share-viewer-btn"),i=document.querySelector("#share-viewer-modal");e==null||e.addEventListener("click",()=>i==null?void 0:i.classList.remove("hidden")),document.querySelectorAll("[data-share-close]").forEach(et=>{et.addEventListener("click",()=>i==null?void 0:i.classList.add("hidden"))}),i==null||i.addEventListener("click",et=>{et.target===i&&i.classList.add("hidden")}),(p=this.quotationBtn)==null||p.addEventListener("click",()=>this.openQuotationModal()),document.querySelectorAll("[data-quotation-close]").forEach(et=>{et.addEventListener("click",()=>this.closeQuotationModal())}),(u=this.quotationModal)==null||u.addEventListener("click",et=>{et.target===this.quotationModal&&this.closeQuotationModal()}),(b=this.quotationDiscountInput)==null||b.addEventListener("input",()=>this.renderQuotation()),(w=this.quotationTvaInput)==null||w.addEventListener("input",()=>this.renderQuotation()),(M=this.quotationProgrammingInput)==null||M.addEventListener("input",()=>this.renderQuotation()),(A=this.quotationInstallationInput)==null||A.addEventListener("input",()=>this.renderQuotation()),(T=this.quotationClientInput)==null||T.addEventListener("change",()=>this.persistQuotationMeta()),(R=this.quotationPhoneInput)==null||R.addEventListener("change",()=>this.persistQuotationMeta()),(_=this.quotationLocationInput)==null||_.addEventListener("change",()=>this.persistQuotationMeta()),(y=this.quotationNotesInput)==null||y.addEventListener("change",()=>this.persistQuotationMeta()),(E=this.quotationProgrammingInput)==null||E.addEventListener("change",()=>this.persistQuotationMeta()),(C=this.quotationInstallationInput)==null||C.addEventListener("change",()=>this.persistQuotationMeta()),(L=this.quotationSaveDefaultsBtn)==null||L.addEventListener("click",()=>this.saveQuotationServiceDefaults()),(k=this.quotationPrintBtn)==null||k.addEventListener("click",()=>this.printQuotation()),(X=this.benefitsBtn)==null||X.addEventListener("click",()=>this.openBenefitsModal()),document.querySelectorAll("[data-benefits-close]").forEach(et=>{et.addEventListener("click",()=>this.closeBenefitsModal())}),(F=this.benefitsModal)==null||F.addEventListener("click",et=>{et.target===this.benefitsModal&&this.closeBenefitsModal()}),($=this.benefitsAddExpenseBtn)==null||$.addEventListener("click",()=>{this.ensureBenefitsMeta(),this.mapData.benefits.extra_expenses.push({id:`exp_${Date.now()}`,name:"",price:0}),this.renderBenefits()}),(H=this.benefitsExpensesEl)==null||H.addEventListener("input",et=>{const vt=et.target.closest("[data-expense-index]");if(!vt)return;const V=Number(vt.dataset.expenseIndex);this.ensureBenefitsMeta();const nt=this.mapData.benefits.extra_expenses[V];nt&&(et.target.dataset.field==="name"&&(nt.name=et.target.value),et.target.dataset.field==="price"&&(nt.price=Math.max(0,Number(et.target.value)||0)),this.renderBenefitsTotalsOnly())}),(Q=this.benefitsExpensesEl)==null||Q.addEventListener("click",et=>{const vt=et.target.closest("[data-expense-remove]");if(!vt)return;const V=Number(vt.dataset.expenseRemove);this.ensureBenefitsMeta(),this.mapData.benefits.extra_expenses.splice(V,1),this.renderBenefits()}),(it=this.floorSwitcherEl)==null||it.addEventListener("click",et=>{if(et.target.closest("[data-floor-add]")){this.addFloorLayer();return}const vt=et.target.closest("[data-floor-index]");vt&&this.setActiveFloor(Number(vt.dataset.floorIndex))}),(ct=this.propsEl)==null||ct.addEventListener("click",et=>{if(et.target.closest("[data-underlay-replace]")){this.openImportModal();return}if(et.target.closest("[data-underlay-remove]")){this.removeFloorUnderlay();return}et.target.closest('[data-action="delete"]')&&this.deleteSelected(),et.target.closest('[data-action="rotate"]')&&this.rotateSelected(-90),et.target.closest('[data-action="rotate-cw"]')&&this.rotateSelected(90),et.target.closest('[data-action="duplicate"]')&&this.duplicateSelected();const vt=et.target.closest("[data-prop-style]");if(vt){this.applyProperty("style",vt.dataset.propStyle,!1),this.renderProperties(!1);return}const V=et.target.closest("[data-opening-size]");if(V){this.applyOpeningSizePreset(V.dataset.openingSize),this.renderProperties(!1);return}const nt=et.target.closest("[data-component-size]");if(nt){this.applyComponentSizePreset(nt.dataset.componentSize),this.renderProperties(!1);return}const tt=et.target.closest("[data-prop-preset]");if(tt){this.applyProperty("preset",tt.dataset.propPreset,!1),this.renderProperties(!1);return}et.target.closest('[data-action="reset-size"]')&&(this.applyComponentSizePreset("standard"),this.renderProperties(!1))}),(mt=this.propsEl)==null||mt.addEventListener("input",et=>{const vt=et.target.closest("[data-underlay-prop]");if(vt){const tt=vt.dataset.underlayProp;if(vt.type==="range"){const Lt=this.propsEl.querySelector(`input[type="number"][data-underlay-prop="${tt}"]`);Lt&&(Lt.value=vt.value)}else if(vt.type==="number"){const Lt=this.propsEl.querySelector(`input[type="range"][data-underlay-prop="${tt}"]`);Lt&&(Lt.value=vt.value)}this.applyUnderlayProperty(tt,vt.value,vt.type==="range"||vt.type==="number");return}const V=et.target.closest("[data-prop]");if(!V)return;const nt=V.dataset.prop;if(V.type==="range"){const tt=this.propsEl.querySelector(`input[type="number"][data-prop="${nt}"]`);tt&&(tt.value=V.value),this.applyProperty(nt,V.value,!0);return}if(V.type==="number"){const tt=this.propsEl.querySelector(`input[data-range-sync="${nt}"]`);tt&&(tt.value=V.value),this.applyProperty(nt,V.value,!0);return}this.applyProperty(nt,V.value,V.type==="number"),V.tagName==="TEXTAREA"&&this.renderElementsList()}),(Mt=this.propsEl)==null||Mt.addEventListener("change",et=>{const vt=et.target.closest("[data-underlay-prop]");if(vt&&vt.type==="checkbox"){this.applyUnderlayProperty(vt.dataset.underlayProp,vt.checked?"true":"false",!1);return}const V=et.target.closest("[data-prop]");if(V){if(V.type==="checkbox"){this.applyProperty(V.dataset.prop,V.checked?"true":"false",!1);return}V.tagName==="SELECT"&&this.applyProperty(V.dataset.prop,V.value,!1)}}),(qt=this.outlinerSearchEl)==null||qt.addEventListener("input",et=>{this.outlinerFilter=et.target.value.trim().toLowerCase(),this.renderElementsList()})}preserveScroll(t,e){const i=(t==null?void 0:t.scrollTop)??0;e(),t&&(t.scrollTop=i)}updatePlacingBadge(){if(!this.placingBadgeEl)return;let t="";this.placingKit&&Bn[this.placingKit]?t=Bn[this.placingKit].label:this.placingComponent&&Ge[this.placingComponent]?t=Ge[this.placingComponent].label:this.placingSmart&&ce[this.placingSmart]&&(t=ce[this.placingSmart].label),t?(this.placingBadgeEl.textContent=`Placing: ${t}`,this.placingBadgeEl.classList.remove("hidden"),this.placingBadgeEl.classList.add("studio-chip-active")):(this.placingBadgeEl.classList.add("hidden"),this.placingBadgeEl.classList.remove("studio-chip-active"))}updateStudioContext(){if(!this.contextEl)return;const t={select:"Select",kit:"Room kit",wall:"Wall",door:"Door",window:"Window",furniture:"Item",smart:"Smart",delete:"Delete"};this.contextEl.textContent=t[this.tool]?`Tool: ${t[this.tool]}`:"",this.updatePlacingBadge()}updateComponentButtons(){this.componentButtons.forEach(t=>{const e=this.placingComponent===t.dataset.component;t.classList.toggle("catalog-tile-active",e)})}updateKitButtons(){this.kitButtons.forEach(t=>{const e=this.placingKit===t.dataset.kit;t.classList.toggle("kit-card-active",e),t.classList.toggle("kit-card",!e)})}updateSmartButtons(){this.smartButtons.forEach(t=>{const e=this.placingSmart===t.dataset.smart;t.classList.toggle("catalog-tile-active",e)})}updateStyleButtons(){this.doorStyleButtons.forEach(t=>{const e=this.selectedDoorStyle===t.getAttribute("data-door-style");t.classList.toggle("catalog-style-row-active",e)}),this.windowStyleButtons.forEach(t=>{const e=this.selectedWindowStyle===t.getAttribute("data-window-style");t.classList.toggle("catalog-style-row-active",e)})}renderAllCatalogs(){this.renderSmartCatalog()}renderSmartCatalog(){this.haDeviceGridEl&&this.preserveScroll(this.assetScrollEl,()=>{const t=h_();this.haDeviceGridEl.className="device-grid",this.haDeviceGridEl.innerHTML=t.map(([e,i])=>`
            <button type="button" data-smart="${e}" title="${i.label} · ${Tc(i.price)}" class="catalog-tile">
                <span class="catalog-tile-icon" aria-hidden="true">${i.icon}</span>
                <span class="catalog-tile-label">${i.label}</span>
                <span class="catalog-tile-price">${he(i.price)}</span>
            </button>
        `).join(""),this.smartButtons=this.haDeviceGridEl.querySelectorAll("[data-smart]"),this.smartButtons.forEach(e=>{e.addEventListener("click",()=>{this.placingComponent=null,this.placingKit=null,this.updateComponentButtons(),this.updateKitButtons(),this.placingSmart=e.dataset.smart,this.updateSmartButtons(),this.setTool("smart")})}),this.updateSmartButtons()})}setCatalogTab(t){this.catalogTabs.forEach(e=>{const i=e.dataset.catalogTab===t;e.classList.toggle("studio-asset-tab-active",i),e.classList.toggle("studio-asset-tab",!i)}),this.catalogPanels.forEach(e=>{e.classList.toggle("hidden",e.dataset.catalogPanel!==t)})}setViewMode(t){var r,o,a;if(this.endDrag(),t==="walk"&&(t="view360"),this.viewerOnly&&t!=="plan2d")return;this.viewMode=t,this.viewModeButtons.forEach(l=>{l.classList.toggle("view-mode-active",l.dataset.viewMode===t),l.classList.toggle("view-mode-btn",l.dataset.viewMode!==t)});const e=t==="plan2d",i=t==="studio",n=t==="view360";this.studioPanels.forEach(l=>l.classList.toggle("hidden",!e&&!i)),this.handleGroup.visible=i,this.grid.visible=i,(r=this.nightModeBtn)==null||r.classList.toggle("hidden",!n),this.simOverlay&&this.simOverlay.classList.toggle("hidden",!n),this.renderer.domElement.classList.toggle("hidden",e),this.renderer.domElement.style.pointerEvents=e?"none":"",e?((o=this.plan2d)==null||o.show(),this.ensurePlan2dLayout()):(a=this.plan2d)==null||a.hide(),this.root.querySelectorAll(".plan2d-zoom-controls").forEach(l=>{l.classList.toggle("hidden",!e)}),this.controls.enabled=i,this.pointerLock.unlock(),e||this.rebuildScene(),n?this.enter360Mode():i?(this.restoreStudioCamera(),this.setTool("select")):e&&(this.renderPlan2d(),this.viewerOnly||this.setTool(this.tool||"select"),this.setStatus("2D plan — pinch / buttons zoom · drag pan · place devices"))}getSimOrigin(){var e;const t=(e=this.mapData.sim360)==null?void 0:e.position;return t||[this.projectWidth/2,this.projectDepth/2]}isNightTime(){const t=new Date().getHours();return t>=18||t<6}updateNightModeUI(){this.nightModeBtn&&(this.nightModeBtn.classList.toggle("view-mode-active",this.nightMode),this.nightModeBtn.classList.toggle("view-mode-btn",!this.nightMode),this.nightModeBtn.textContent=this.nightMode?"🌙 Night ON":"☀️ Day")}getRoomAt(t,e){const i=this.getFloor();for(const n of i.rooms||[])if(n.polygon&&Pc(t,e,n.polygon))return n.id;return null}setRoomLights(t,e){const i=this.getFloor();let n=!1;for(const r of i.smart_devices){if(!cr(r.type))continue;this.getRoomAt(r.position[0],r.position[1])===t&&r.on!==e&&(r.on=e,n=!0)}for(const r of i.components){if(!cr(r.type))continue;this.getRoomAt(r.position[0],r.position[1])===t&&r.on!==e&&(r.on=e,n=!0)}n&&this.refreshAutomatedLights()}refreshAutomatedLights(){const t=this.getFloor(),e=0,i=this.viewMode!=="studio";t.smart_devices.forEach(n=>{var l;if(!cr(n.type))return;const r=this.meshes.smart.get(n.id);r&&(this.scene.remove(r),this.disposeObject3D(r));const o=((l=this.selected)==null?void 0:l.type)==="smart"&&this.selected.id===n.id,a=hr(n,e,ce,o,i);a&&(this.meshes.smart.set(n.id,a),this.scene.add(a))}),t.components.forEach(n=>{if(n.type!=="lamp")return;const r=this.meshes.components.get(n.id);r&&(this.scene.remove(r),this.disposeObject3D(r));const o=Po(n,e,Ge);o&&(this.meshes.components.set(n.id,o),this.scene.add(o))})}updateRoomAutomation(){if(this.viewMode==="studio")return;const t=this.getRoomAt(this.camera.position.x,this.camera.position.z);t!==this.currentRoomId&&(this.currentRoomId&&this.setRoomLights(this.currentRoomId,!1),this.currentRoomId=t,t&&this.setRoomLights(t,!0))}enterImmersiveMode(){this.nightMode=this.isNightTime(),this.updateNightModeUI(),this.currentRoomId=null}enterWalkMode(){this.enterImmersiveMode();const[t,e]=this.getSimOrigin();this.camera.position.set(t,this.eyeHeight,e);const i=this.mapData.sim360||{};this.look360.yaw=i.yaw||0,this.look360.pitch=i.pitch||0,this.apply360Rotation(),this.applySceneLighting(!0),this.updateRoomAutomation(),this.setStatus("WASD move · E door · N night mode · lights auto on/off per room"),this.tryPointerLock()}enter360Mode(){this.enterImmersiveMode();const[t,e]=this.getSimOrigin(),i=this.mapData.sim360||{},[n,r]=this.findWalkableSpawn(t,e);this.camera.position.set(n,this.eyeHeight,r),this.look360.yaw=i.yaw||0,this.look360.pitch=i.pitch||0,this.apply360Rotation(),this.applySceneLighting(!0),this.updateRoomAutomation(),this.persistSimPosition();const o=this.viewerOnly?"360° tour — click view · WASD move · drag look · E door · N night":"360° — click view · WASD move · drag look · E door · N night · Esc exit";this.setStatus(o),queueMicrotask(()=>this.renderer.domElement.focus())}findWalkableSpawn(t,e){const i=(o,a)=>this.canWalkTo(o,a)?[o,a]:null,n=i(t,e);if(n)return n;const r=this.getFloor();for(const o of r.rooms||[]){const a=o.polygon;if(!(a!=null&&a.length))continue;const l=a.map(u=>u[0]),c=a.map(u=>u[1]),h=Math.min(...l),f=Math.max(...l),d=Math.min(...c),m=Math.max(...c),g=l.reduce((u,b)=>u+b,0)/l.length,v=c.reduce((u,b)=>u+b,0)/c.length,p=[[g,v]];for(let u=h+.5;u<=f-.5;u+=.75)for(let b=d+.5;b<=m-.5;b+=.75)Pc(u,b,a)&&p.push([u,b]);for(const[u,b]of p){const w=i(u,b);if(w)return w}}for(let o=.5;o<=Math.max(this.projectWidth,this.projectDepth);o+=.5){const a=Math.max(8,Math.ceil(o*4));for(let l=0;l<a;l++){const c=l/a*Math.PI*2,h=t+Math.cos(c)*o,f=e+Math.sin(c)*o,d=i(h,f);if(d)return d}}return[t,e]}tryPointerLock(){var t,e;this.viewMode==="view360"&&document.pointerLockElement!==this.renderer.domElement&&((e=(t=this.renderer.domElement).requestPointerLock)==null||e.call(t))}apply360Rotation(){this.camera.rotation.order="YXZ",this.camera.rotation.y=this.look360.yaw,this.camera.rotation.x=this.look360.pitch,this.camera.rotation.z=0}restoreStudioCamera(){const t=this.mapData.camera||{};this.camera.position.set(...t.position||[this.projectWidth/2,12,this.projectDepth+12]),this.camera.rotation.set(0,0,0),this.controls.target.set(...t.target||[this.projectWidth/2,0,this.projectDepth/2])}distToWall(t,e,i){const[n,r]=i.from,[o,a]=i.to,l=o-n,c=a-r,h=l*l+c*c;if(h<.001)return Math.hypot(t-n,e-r);let f=Ve(((t-n)*l+(e-r)*c)/h,0,1);const d=n+f*l,m=r+f*c;return Math.hypot(t-d,e-m)}canWalkTo(t,e){const i=y_,n=this.getFloor();for(const r of n.walls){const o=this.distToWall(t,e,r),a=(r.thickness||kn)/2;if(o<i+a){if(g_(t,e,r,n.doors))continue;return!1}}return!0}tryMove(t,e){const i=this.camera.position.x,n=this.camera.position.z,r=i+t,o=n+e;let a=!1;return this.canWalkTo(r,o)?(this.camera.position.x=r,this.camera.position.z=o,a=!0):(this.canWalkTo(r,n)&&(this.camera.position.x=r,a=!0),this.canWalkTo(this.camera.position.x,o)&&(this.camera.position.z=o,a=!0)),this.camera.position.y=this.eyeHeight,a&&this.persistSimPosition(),a}getMoveYaw(){return this.viewMode==="view360"?this.look360.yaw:this.pointerLock.isLocked?this.camera.rotation.y:this.look360.yaw}updateFirstPerson(t){if(this.viewMode!=="view360")return;const e=(this.walkKeys.shift?6.5:3.8)*t,i=this.getMoveYaw(),n=new D(-Math.sin(i),0,-Math.cos(i)),r=new D(Math.cos(i),0,-Math.sin(i)),o=new D;if(this.walkKeys.w&&o.add(n),this.walkKeys.s&&o.sub(n),this.walkKeys.d&&o.add(r),this.walkKeys.a&&o.sub(r),o.lengthSq()>0){o.normalize().multiplyScalar(e);const a=this.tryMove(o.x,o.z);!a&&!this._walkBlockedHint?(this._walkBlockedHint=!0,this.setStatus("360° — movement blocked by walls · try another spot or fix walls in Studio")):a&&(this._walkBlockedHint=!1),this.updateDoorProximity(o)}else this.updateDoorProximity(new D);this.updateDoorAnimations(t),this.updateRoomAutomation()}persistSimPosition(){this.viewMode==="view360"&&(this.mapData.sim360={position:[this.camera.position.x,this.camera.position.z],yaw:this.look360.yaw,pitch:this.look360.pitch})}initDoorAnimStates(){const t=new Map(this.doorAnimStates);this.doorAnimStates.clear();for(const e of this.getFloor().doors){const i=t.get(e.id);this.doorAnimStates.set(e.id,{open:(i==null?void 0:i.open)??0,target:(i==null?void 0:i.target)??0})}}updateDoorProximity(t){const e=this.getFloor();let i=null,n=1/0;const r=this.camera.position.x,o=this.camera.position.z;for(const a of e.doors){const l=e.walls.find(m=>m.id===a.wall_id);if(!l)continue;const{x:c,z:h}=u_(a,l),f=Math.hypot(r-c,o-h);f<n&&(n=f,i=a);const d=this.doorAnimStates.get(a.id);if(d)if(f<2.2){const m=new D(c-r,0,h-o);m.lengthSq()>.01&&m.normalize();const g=t.lengthSq()>0?t.clone().normalize():null;(g&&g.dot(m)>.2||f<1.4)&&(d.target=1)}else f>3.2&&(d.target=0)}this.nearDoorId=n<2.5?i==null?void 0:i.id:null}toggleNearestDoor(){if(!this.nearDoorId)return;const t=this.doorAnimStates.get(this.nearDoorId);t&&(t.target=t.target>.5?0:1)}updateDoorAnimations(t){const e=4*t;this.doorAnimStates.forEach((i,n)=>{i.open+=(i.target-i.open)*Math.min(1,e),Math.abs(i.target-i.open)<.005&&(i.open=i.target);const r=this.meshes.doors.get(n);r&&Co(r,i.open)})}onKeyUp(t){const e=t.key.toLowerCase();e in this.walkKeys&&(this.walkKeys[e]=!1),t.key==="Shift"&&(this.walkKeys.shift=!1)}setTool(t){var i,n,r,o,a;if(!this.isDesignMode())return;this.tool=t,this.cancelWallDraw(),this.toolButtons.forEach(l=>{l.classList.toggle("tool-btn-active",l.dataset.tool===t),l.classList.toggle("tool-btn",l.dataset.tool!==t)});const e={select:"Select & drag to move · Click room floor to paint · Edit properties →",kit:this.placingKit?`Click floor corner to place ${((i=Bn[this.placingKit])==null?void 0:i.label)||"room kit"}`:"Pick a room kit from the library (bathroom, kitchen, bedroom…)",wall:"Click two points to draw walls · Esc to cancel",door:`Click any wall for ${((n=mi[this.selectedDoorStyle])==null?void 0:n.label)||"door"}`,window:`Click any wall for ${((r=$i[this.selectedWindowStyle])==null?void 0:r.label)||"window"}`,furniture:this.placingComponent?`Click floor to place ${(o=Ge[this.placingComponent])==null?void 0:o.label}`:"Pick an item from the Items tab, then click floor",smart:this.placingSmart?`Click to place ${(a=ce[this.placingSmart])==null?void 0:a.label}`:"Pick a smart device, then click floor/wall area",text:"Click anywhere on the 2D plan to add text · double-click to edit",delete:"Click any element to delete"};this.setStatus(e[t]||""),this.updateStudioContext()}setStatus(t){this.statusEl&&(this.statusEl.textContent=t)}allInteractables(){return[...this.meshes.walls.values(),...this.meshes.doors.values(),...this.meshes.windows.values(),...this.meshes.components.values(),...this.meshes.smart.values(),...this.decorMeshes.filter(t=>{var e;return((e=t.userData)==null?void 0:e.type)==="room"})]}updatePointer(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera)}getGroundPoint(t){this.updatePointer(t);const e=this.raycaster.intersectObject(this.groundPlane);return e.length?Dc(e[0].point.x,e[0].point.z,this.snapEnabled):null}getIntersectedObject(t,e=null){var n;this.updatePointer(t);const i=this.raycaster.intersectObjects(e||this.allInteractables(),!0);return M_((n=i[0])==null?void 0:n.object)||null}getHandleAt(t){var i;if(this.viewMode==="plan2d"){const{sx:n,sy:r}=this.getPlan2dScreen(t);return this.plan2d.hitTestWallHandle(this.getFloor(),this.selected,n,r)}return this.updatePointer(t),((i=this.raycaster.intersectObjects(this.handleGroup.children,!1)[0])==null?void 0:i.object)||null}onPointerDown(t){var n,r,o,a;if(this.viewMode==="view360"){if(this.renderer.domElement.focus(),t.button===0){this.tryPointerLock(),this.look360.dragging=!0,this.look360.lastX=t.clientX,this.look360.lastY=t.clientY;try{(r=(n=t.target).setPointerCapture)==null||r.call(n,t.pointerId)}catch{}}return}if(!this.canEdit||this.viewMode==="plan2d"&&((o=this.plan2d)!=null&&o.isPanning||(a=this.plan2d)!=null&&a._pinch))return;if(this.tool==="wall"){const l=this.getWorldPoint(t);if(!l)return;this.wallStart?(this.addWall(this.wallStart,l),this.cancelWallDraw()):(this.wallStart=l,this.wallPreviewEnd=l,this.showStartMarker(l),this.setStatus("Click end point · Esc to cancel"));return}if(this.tool==="furniture"&&this.placingComponent){const l=this.getWorldPoint(t);l&&this.addComponent(this.placingComponent,l);return}if(this.tool==="kit"&&this.placingKit){const l=this.getWorldPoint(t);l&&this.placeRoomKit(this.placingKit,l[0],l[1]);return}if(this.tool==="smart"&&this.placingSmart){const l=this.getWorldPoint(t);l&&this.addSmartDevice(this.placingSmart,l);return}if(this.tool==="text"){if(this.viewMode!=="plan2d"){this.setStatus("Switch to 2D Plan to add text labels");return}const l=this.getWorldPoint(t);if(!l)return;this.openLabelEditor({worldPos:l,text:""});return}const e=this.getHandleAt(t);if(e&&this.tool==="select"){this.startDrag(e.userData.dragType,e.userData.refId,e.userData.endpoint);return}const i=this.getHitAtEvent(t);if(this.tool==="door"&&(i==null?void 0:i.userData.type)==="wall"){const l=this.getWorldPoint(t);this.addOpeningOnWall(i.userData.id,"door",l);return}if(this.tool==="window"&&(i==null?void 0:i.userData.type)==="wall"){const l=this.getWorldPoint(t);this.addOpeningOnWall(i.userData.id,"window",l);return}if(this.tool==="delete"&&i){this.deleteById(i.userData.type,i.userData.id);return}this.tool==="select"&&((i==null?void 0:i.userData.type)==="door"||(i==null?void 0:i.userData.type)==="window"?(this.selectById(i.userData.type,i.userData.id),this.startDrag("opening-slide",i.userData.id)):(i==null?void 0:i.userData.type)==="component"||(i==null?void 0:i.userData.type)==="smart"?(this.selectById(i.userData.type,i.userData.id),this.startDrag("component-move",i.userData.id)):(i==null?void 0:i.userData.type)==="label"?(this.selectById("label",i.userData.id),this.startDrag("label-move",i.userData.id)):(i==null?void 0:i.userData.type)==="room"?this.selectById("room",i.userData.id):(i==null?void 0:i.userData.type)==="wall"?this.selectById("wall",i.userData.id):this.selectObject(null),this.renderElementsList(),this.viewMode==="plan2d"&&this.renderPlan2d())}onPointerMove(t){if(this.viewMode==="view360"){if(document.pointerLockElement===this.renderer.domElement)return;if(this.look360.dragging){const i=t.clientX-this.look360.lastX,n=t.clientY-this.look360.lastY;this.look360.lastX=t.clientX,this.look360.lastY=t.clientY,this.look360.yaw-=i*.004,this.look360.pitch=Ve(this.look360.pitch-n*.004,-Math.PI/2+.1,Math.PI/2-.1),this.apply360Rotation(),this.persistSimPosition()}return}if(!this.isDesignMode()||!this.canEdit)return;if(this.drag){this.processDrag(t);return}const e=this.getWorldPoint(t);if(e&&(this.cursorWorld=e),this.tool==="wall"&&this.wallStart){e&&(this.wallPreviewEnd=e,this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewLine(this.wallStart,e));return}if(this.tool==="furniture"&&this.placingComponent){e&&(this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewComponent(this.placingComponent,e));return}if(this.tool==="kit"&&this.placingKit){e&&(this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewKit(this.placingKit,e));return}this.tool==="smart"&&this.placingSmart&&e&&(this.viewMode==="plan2d"?this.renderPlan2d():this.updatePreviewSmart(this.placingSmart,e))}startDrag(t,e,i=null){this.drag={type:t,refId:e,endpoint:i},this.controls.enabled=!1}endDrag(){this.drag&&(this.drag=null,this.controls.enabled=!0,this.renderElementsList(),this.renderProperties(),this.updateHandles())}processDrag(t){const e=this.getFloor(),i=this.getWorldPoint(t);if(i){if(this.drag.type==="wall-from"||this.drag.type==="wall-to"){const n=e.walls.find(r=>r.id===this.drag.refId);if(!n)return;this.drag.type==="wall-from"?n.from=i:n.to=i,this.refreshScene();return}if(this.drag.type==="opening-slide"){const n=e.doors.find(f=>f.id===this.drag.refId),r=e.windows.find(f=>f.id===this.drag.refId),o=n||r;if(!o)return;const a=e.walls.find(f=>f.id===o.wall_id);if(!a)return;let l=Ro(a,i[0],i[1]);const[c,h]=dr(a,o.width);o.position=Math.round(Ve(l,c,h)*1e3)/1e3,this.refreshScene();return}if(this.drag.type==="component-move"){const n=e.components.find(a=>a.id===this.drag.refId),r=e.smart_devices.find(a=>a.id===this.drag.refId),o=n||r;if(!o)return;o.position=i,this.refreshScene();return}if(this.drag.type==="label-move"){const n=e.labels.find(r=>r.id===this.drag.refId);if(!n)return;n.position=i,this.refreshScene()}}}refreshScene(){this.viewMode==="plan2d"?this.renderPlan2d():this.rebuildScene()}onKeyDown(t){var i,n,r;const e=t.key.toLowerCase();if(this.viewMode==="view360"){if((e in this.walkKeys||t.key==="Shift")&&t.preventDefault(),e in this.walkKeys&&(this.walkKeys[e]=!0),t.key==="Shift"&&(this.walkKeys.shift=!0),t.key==="Escape"){if(document.pointerLockElement===this.renderer.domElement){(i=document.exitPointerLock)==null||i.call(document);return}this.viewerOnly||this.setViewMode("studio");return}if(e==="e"){t.preventDefault(),this.toggleNearestDoor();return}if(e==="n"){t.preventDefault(),this.nightMode=!this.nightMode,this.applySceneLighting(!0),this.updateNightModeUI(),this.nightMode&&this.currentRoomId&&this.setRoomLights(this.currentRoomId,!0);return}return}if(e in this.walkKeys&&(this.walkKeys[e]=!0),t.key==="Shift"&&(this.walkKeys.shift=!0),t.key==="Escape"){if(this.labelEditor){this.closeLabelEditor(!0);return}this.endDrag(),this.cancelWallDraw(),this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.updateComponentButtons(),this.updateSmartButtons(),this.updateKitButtons(),this.removePreviewComponent(),this.removePreviewSmart(),this.removePreviewKit(),(this.tool==="furniture"||this.tool==="smart"||this.tool==="kit")&&this.setTool("select");return}!this.isDesignMode()||!this.canEdit||((t.key==="Delete"||t.key==="Backspace")&&this.selected&&(t.preventDefault(),this.deleteSelected()),t.key==="r"&&(((n=this.selected)==null?void 0:n.type)==="component"||((r=this.selected)==null?void 0:r.type)==="smart")&&this.rotateSelected(90),t.key==="d"&&t.ctrlKey&&this.selected&&(t.preventDefault(),this.duplicateSelected()))}showStartMarker(t){if(this.viewMode==="plan2d"){this.renderPlan2d();return}this.removeStartMarker(),this.startMarker=new Kt(new ii(.15,16,16),this.materials.marker),this.startMarker.position.set(t[0],.15,t[1]),this.scene.add(this.startMarker)}removeStartMarker(){this.startMarker&&(this.scene.remove(this.startMarker),this.startMarker.geometry.dispose(),this.startMarker=null)}updatePreviewLine(t,e){this.previewLine&&(this.scene.remove(this.previewLine),this.previewLine.geometry.dispose()),this.previewLine=new Ha(new we().setFromPoints([new D(t[0],.05,t[1]),new D(e[0],.05,e[1])]),this.materials.preview),this.scene.add(this.previewLine)}updatePreviewComponent(t,e){this.removePreviewComponent();const i=Ge[t];if(!i)return;const n=Po({type:t,...i,position:e,rotation:0,width:i.w,depth:i.d,height:i.h},0,Ge,!0);n&&(this.previewComponent=n,this.scene.add(n))}updatePreviewSmart(t,e){this.removePreviewSmart();const i=ce[t];if(!i)return;const n=hr({type:t,position:e,rotation:0,mount:i.mount,on:!0},0,ce,!1,!1);n&&(this.previewSmart=n,this.scene.add(n))}removePreviewSmart(){this.previewSmart&&(this.scene.remove(this.previewSmart),this.disposeObject3D(this.previewSmart),this.previewSmart=null)}removePreviewComponent(){this.previewComponent&&(this.scene.remove(this.previewComponent),this.disposeObject3D(this.previewComponent),this.previewComponent=null)}updatePreviewKit(t,e){this.removePreviewKit();const i=Bn[t];if(!(i!=null&&i.footprint))return;const{w:n,d:r}=i.footprint,[o,a]=e,l=[new D(o,.02,a),new D(o+n,.02,a),new D(o+n,.02,a+r),new D(o,.02,a+r)],c=new we().setFromPoints(l),h=new Xd(c,new Ar({color:2282478,transparent:!0,opacity:.85})),f=new Kt(new Qn(n,r),new Gn({color:2282478,transparent:!0,opacity:.12,side:ti}));f.rotation.x=-Math.PI/2,f.position.set(o+n/2,.01,a+r/2);const d=new Ze;d.add(h,f),this.previewKit=d,this.scene.add(d)}removePreviewKit(){this.previewKit&&(this.scene.remove(this.previewKit),this.previewKit.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.previewKit=null)}cancelWallDraw(){this.wallStart=null,this.wallPreviewEnd=null,this.removeStartMarker(),this.previewLine&&(this.scene.remove(this.previewLine),this.previewLine.geometry.dispose(),this.previewLine=null),this.viewMode==="plan2d"&&this.renderPlan2d()}addWall(t,e){if(t[0]===e[0]&&t[1]===e[1])return;const i=this.getFloor(),n={id:Le("wall"),from:t,to:e,height:i.height||Ri,thickness:kn};i.walls.push(n),this.refreshScene(),this.renderElementsList(),this.selectById("wall",n.id)}addOpeningOnWall(t,e,i=null){var v;const n=typeof t=="string"?t:(v=t.userData)==null?void 0:v.id,r=this.getFloor(),o=r.walls.find(p=>p.id===n);if(!o)return;let a;if(i)a=Ro(o,i[0],i[1]);else{const p=this.raycaster.intersectObject(t,!0);if(!p.length)return;a=Ro(o,p[0].point.x,p[0].point.z)}const l=e==="door"?r.doors:r.windows,c=e==="door"?this.selectedDoorStyle:this.selectedWindowStyle,h=e==="door"?mi:$i,f=h[c]||Object.values(h)[0],d={id:Le(e),wall_id:o.id,position:Math.round(a*100)/100,width:f.width,height:f.height,style:f.type,...e==="window"?{sill:f.sill??.9}:{}},[m,g]=dr(o,d.width);d.position=Ve(d.position,m,g),l.push(d),this.refreshScene(),this.renderElementsList(),this.selectById(e,d.id),this.setStatus(`${f.label} placed — drag along wall or edit in inspector →`)}addComponent(t,e){const i=Ge[t];if(!i)return;const n=this.getFloor(),r={id:Le("comp"),type:t,position:e,rotation:0,width:i.w,depth:i.d,height:i.h};n.components.push(r),this.refreshScene(),this.renderElementsList(),this.selectById("component",r.id)}addSmartDevice(t,e){const i=ce[t];if(!i)return;const n=this.getFloor(),r={id:Le("smart"),type:t,position:e,rotation:0,mount:i.mount,ceiling_height:i.defaultHeight??2.75,height_offset:i.defaultHeight??1.35,on:!0,price:Number(i.price)||0};n.smart_devices.push(r),this.refreshScene(),this.renderElementsList(),this.selectById("smart",r.id)}addLabel(t,e){const i=this.getFloor(),n={id:Le("label"),text:e||"Text",position:t,size:14,color:"#e2e8f0"};return i.labels.push(n),this.refreshScene(),this.renderElementsList(),this.selectById("label",n.id),n}openLabelEditor({labelId:t=null,worldPos:e,text:i=""}){if(!this.canEdit||this.viewMode!=="plan2d")return;this.closeLabelEditor(!0);const[n,r]=this.plan2d.worldToScreen(e[0],e[1]),o=document.createElement("textarea");o.className="plan2d-label-editor",o.value=i,o.rows=Math.min(6,Math.max(1,String(i).split(`
`).length)),o.style.left=`${n}px`,o.style.top=`${r}px`,o.placeholder="Type label…",this.container.appendChild(o),o.focus(),o.select();const a=()=>{const l=o.value.replace(/\r\n/g,`
`),c=l.trim();if(t){const h=this.getFloor().labels.find(f=>f.id===t);h&&(c?(h.text=l,this.selectById("label",h.id)):this.deleteById("label",t))}else c&&this.addLabel(e,l);this.closeLabelEditor(!0),this.refreshScene(),this.renderElementsList(),this.renderProperties()};o.addEventListener("keydown",l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),a()),l.key==="Escape"&&(l.preventDefault(),this.closeLabelEditor(!0))}),o.addEventListener("blur",()=>a()),this.labelEditor={input:o,labelId:t,worldPos:e}}closeLabelEditor(t=!1){if(!this.labelEditor)return;const{input:e}=this.labelEditor;e.remove(),this.labelEditor=null,t||this.renderPlan2d()}placeRoomKit(t,e,i){var g;const n=Bn[t];if(!n)return;const r=this.getFloor(),o=Le("kit"),{w:a,d:l}=n.footprint,c=e,h=i,f=c+a,d=h+l,m=[];if(n.structure){const v=[[c,h],[f,h],[f,d],[c,d]];if(r.rooms.push({id:Le("room"),name:n.label,preset:n.preset,color:((g=Ci[n.preset])==null?void 0:g.color)??Ci.default.color,polygon:v,kit_group:o}),[{from:[c,h],to:[f,h]},{from:[f,h],to:[f,d]},{from:[f,d],to:[c,d]},{from:[c,d],to:[c,h]}].forEach(u=>{const b={id:Le("wall"),from:u.from,to:u.to,height:r.height||Ri,thickness:kn,kit_group:o};r.walls.push(b),m.push(b)}),n.door&&m.length){const u=Ve(n.door.wall??0,0,m.length-1),b=m[u],w=n.door.style||"interior",M=mi[w]||mi.interior;r.doors.push({id:Le("door"),wall_id:b.id,position:n.door.position??.5,width:n.door.width??M.width,height:n.door.height??M.height,style:M.type,kit_group:o})}}for(const v of n.items||[]){const p=c+v.at[0],u=h+v.at[1];if(v.kind==="component"){const b=Ge[v.type];if(!b)continue;r.components.push({id:Le("comp"),type:v.type,position:[p,u],rotation:v.rotation??0,width:b.w,depth:b.d,height:b.h,kit_group:o})}else if(v.kind==="smart"){const b=ce[v.type];if(!b)continue;r.smart_devices.push({id:Le("smart"),type:v.type,position:[p,u],rotation:v.rotation??0,mount:v.mount||b.mount,ceiling_height:v.height??b.defaultHeight??2.75,height_offset:v.height??b.defaultHeight??1.35,on:!0,price:Number(b.price)||0,kit_group:o})}}this.refreshScene(),this.renderElementsList(),this.setStatus(`${n.label} placed — drag items to adjust · view in 360°`)}selectObject(t){this.selected=t?{type:t.userData.type,id:t.userData.id}:null,this.updateSelectionHighlight(),this.updateHandles(),this.renderProperties()}selectById(t,e){this.selected={type:t,id:e},this.updateSelectionHighlight(),this.updateHandles(),this.renderProperties()}rotateSelected(t=90){var o,a;if(((o=this.selected)==null?void 0:o.type)!=="component"&&((a=this.selected)==null?void 0:a.type)!=="smart")return;const e=this.getFloor(),i=e.components.find(l=>l.id===this.selected.id),n=e.smart_devices.find(l=>l.id===this.selected.id),r=i||n;r&&(r.rotation=((r.rotation||0)+t*Math.PI/180)%(Math.PI*2),this.refreshScene())}duplicateSelected(){if(!this.selected||!this.canEdit)return;const t=this.getFloor(),e=this.snapEnabled?Aa:.5;if(this.selected.type==="wall"){const i=t.walls.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("wall"),from:[i.from[0]+e,i.from[1]],to:[i.to[0]+e,i.to[1]]};t.walls.push(n),this.selectById("wall",n.id)}else if(this.selected.type==="door"){const i=t.doors.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("door"),position:Ve(i.position+.15,.05,.95)};t.doors.push(n),this.selectById("door",n.id)}else if(this.selected.type==="window"){const i=t.windows.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("window"),position:Ve(i.position+.15,.05,.95)};t.windows.push(n),this.selectById("window",n.id)}else if(this.selected.type==="component"){const i=t.components.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("comp"),position:[i.position[0]+e,i.position[1]+e]};t.components.push(n),this.selectById("component",n.id)}else if(this.selected.type==="smart"){const i=t.smart_devices.find(r=>r.id===this.selected.id);if(!i)return;const n={...JSON.parse(JSON.stringify(i)),id:Le("smart"),position:[i.position[0]+e,i.position[1]+e]};t.smart_devices.push(n),this.selectById("smart",n.id)}this.refreshScene(),this.renderElementsList()}applyProperty(t,e,i){var l,c,h;if(!this.selected||!this.canEdit)return;const n=this.getFloor(),r=i?parseFloat(e):e;if(i&&Number.isNaN(r))return;const o=(c=(l={wall:()=>n.walls.find(f=>f.id===this.selected.id),door:()=>n.doors.find(f=>f.id===this.selected.id),window:()=>n.windows.find(f=>f.id===this.selected.id),component:()=>n.components.find(f=>f.id===this.selected.id),smart:()=>n.smart_devices.find(f=>f.id===this.selected.id),label:()=>n.labels.find(f=>f.id===this.selected.id),room:()=>n.rooms.find(f=>f.id===this.selected.id)})[this.selected.type])==null?void 0:c.call(l);if(!o)return;const a=t.split(".");if(a.length===2){const f=a[1]==="x"?0:1,d=Pa(r,this.snapEnabled);a[0]==="from"?o.from[f]=d:a[0]==="to"?o.to[f]=d:a[0]==="position"&&(o.position[f]=d)}else if(t==="rotation")o.rotation=r*Math.PI/180;else if(t==="position_pct"){const f=n.walls.find(d=>d.id===o.wall_id);if(f){const[d,m]=dr(f,o.width);o.position=Ve(r/100,d,m)}}else if(t==="wall_id"){o.wall_id=r;const f=n.walls.find(d=>d.id===r);if(f){const[d,m]=dr(f,o.width);o.position=Ve(o.position,d,m)}}else if(t==="style"){const d=(this.selected.type==="door"?mi:$i)[r];d?(o.style=d.type,o.width=d.width,o.height=d.height,this.selected.type==="window"&&(o.sill=d.sill??o.sill)):o.style=r}else if(t==="on"){o.on=r==="true"||r===!0;const f=(this.selected.type==="smart",o.type);if(cr(f)){this.refreshAutomatedLights();return}}else t==="color"&&this.selected.type==="label"?o.color=r:t==="color"&&this.selected.type==="room"?o.color=pn(r):t==="frame_color"?o.frame_color=r:t==="color"&&this.selected.type==="door"?o.color=r:t==="preset"&&this.selected.type==="room"?(o.preset=r,o.color=((h=Ci[r])==null?void 0:h.color)??o.color):t==="name"?o.name=r:o[t]=r;this.refreshScene()}updateSelectionHighlight(){if(this.viewMode==="plan2d"){this.renderPlan2d();return}const t=this.getFloor(),e=0;this.meshes.walls.forEach((i,n)=>{var o;const r=((o=this.selected)==null?void 0:o.type)==="wall"&&this.selected.id===n;i.traverse(a=>{a.isMesh&&(a.material=r?this.materials.wallSelected:this.materials.wall)})}),t.doors.forEach(i=>{var c;const n=t.walls.find(h=>h.id===i.wall_id);if(!n)return;const r=((c=this.selected)==null?void 0:c.type)==="door"&&this.selected.id===i.id,o=this.meshes.doors.get(i.id);o&&(this.scene.remove(o),this.disposeObject3D(o));const a=Rc(i,n,e,r);this.meshes.doors.set(i.id,a),this.scene.add(a);const l=this.doorAnimStates.get(i.id);l&&Co(a,l.open)}),t.windows.forEach(i=>{var l;const n=t.walls.find(c=>c.id===i.wall_id);if(!n)return;const r=((l=this.selected)==null?void 0:l.type)==="window"&&this.selected.id===i.id,o=this.meshes.windows.get(i.id);o&&(this.scene.remove(o),this.disposeObject3D(o));const a=Lc(i,n,e,r);this.meshes.windows.set(i.id,a),this.scene.add(a)}),this.meshes.components.forEach((i,n)=>{var o;const r=((o=this.selected)==null?void 0:o.type)==="component"&&this.selected.id===n;i.traverse(a=>{var l;!a.isMesh||(l=a.material)!=null&&l.isPointLight||r&&(a.material=this.materials.componentSelected)})}),t.smart_devices.forEach(i=>{var a;const n=((a=this.selected)==null?void 0:a.type)==="smart"&&this.selected.id===i.id,r=this.meshes.smart.get(i.id);r&&(this.scene.remove(r),this.disposeObject3D(r));const o=hr(i,e,ce,n,this.viewMode!=="studio");o&&(this.meshes.smart.set(i.id,o),this.scene.add(o))})}updateHandles(){var i;for(;this.handleGroup.children.length;){const n=this.handleGroup.children[0];this.handleGroup.remove(n),(i=n.geometry)==null||i.dispose()}if(!this.selected||!this.canEdit)return;const t=this.getFloor(),e=0;if(this.selected.type==="wall"){const n=t.walls.find(r=>r.id===this.selected.id);if(!n)return;this.addHandle(n.from[0],e+.2,n.from[1],"wall-from",n.id,"from"),this.addHandle(n.to[0],e+.2,n.to[1],"wall-to",n.id,"to")}if(this.selected.type==="door"||this.selected.type==="window"){const r=(this.selected.type==="door"?t.doors:t.windows).find(a=>a.id===this.selected.id),o=t.walls.find(a=>a.id===(r==null?void 0:r.wall_id));if(r&&o){const a=r.position??.5,l=o.from[0]+(o.to[0]-o.from[0])*a,c=o.from[1]+(o.to[1]-o.from[1])*a,h=this.selected.type==="window"?e+(r.sill||.9)+(r.height||1.2)/2:e+(r.height||2.1)/2;this.addHandle(l,h,c,"opening-slide",r.id)}}}addHandle(t,e,i,n,r,o=null){const a=new Kt(new ii(.2,12,12),this.materials.handle);a.position.set(t,e,i),a.userData={dragType:n,refId:r,endpoint:o,isHandle:!0},this.handleGroup.add(a)}deleteSelected(){this.selected&&this.deleteById(this.selected.type,this.selected.id)}countFloorElements(t){var e,i,n,r,o,a,l;return(((e=t.walls)==null?void 0:e.length)||0)+(((i=t.doors)==null?void 0:i.length)||0)+(((n=t.windows)==null?void 0:n.length)||0)+(((r=t.rooms)==null?void 0:r.length)||0)+(((o=t.components)==null?void 0:o.length)||0)+(((a=t.smart_devices)==null?void 0:a.length)||0)+(((l=t.labels)==null?void 0:l.length)||0)}resetPlacementState(){this.endDrag(),this.cancelWallDraw(),this.placingComponent=null,this.placingSmart=null,this.placingKit=null,this.updateComponentButtons(),this.updateSmartButtons(),this.updateKitButtons(),this.removePreviewComponent(),this.removePreviewSmart(),this.removePreviewKit(),this.closeLabelEditor(!0)}clearFloorData(t){t.walls=[],t.doors=[],t.windows=[],t.rooms=[],t.components=[],t.smart_devices=[],t.labels=[]}clearCurrentFloor(){var a;if(!this.canEdit)return;const t=this.getFloor(),e=t.name||To(t),i=this.countFloorElements(t);if(i===0){this.setStatus(`${e} is already empty`);return}const r=(((a=this.mapData.floors)==null?void 0:a.length)||1)>1?`

Other floor layers are not affected.`:"";window.confirm(`Delete ALL elements on "${e}"?

This removes walls, doors, windows, rooms, furniture, smart devices, and text labels.
The floor image (if any) is kept.`+r)&&(this.clearFloorData(t),this.selected=null,this.resetPlacementState(),this.tool!=="select"&&this.setTool("select"),this.refreshScene(),this.renderElementsList(),this.renderProperties(),this.setStatus(`Cleared all elements on ${e} — ${i} item(s) removed`))}deleteById(t,e){const i=this.getFloor();t==="wall"?(i.walls=i.walls.filter(n=>n.id!==e),i.doors=i.doors.filter(n=>n.wall_id!==e),i.windows=i.windows.filter(n=>n.wall_id!==e)):t==="door"?i.doors=i.doors.filter(n=>n.id!==e):t==="window"?i.windows=i.windows.filter(n=>n.id!==e):t==="component"?i.components=i.components.filter(n=>n.id!==e):t==="smart"?i.smart_devices=i.smart_devices.filter(n=>n.id!==e):t==="label"&&(i.labels=i.labels.filter(n=>n.id!==e)),this.selected=null,this.refreshScene(),this.renderElementsList(),this.renderProperties()}deleteObject(t){this.deleteById(t.userData.type,t.userData.id)}disposeObject3D(t){t.traverse(e=>{var i;(i=e.geometry)==null||i.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}clearMeshes(){["walls","doors","windows","components","smart"].forEach(t=>{this.meshes[t].forEach(e=>{this.scene.remove(e),this.disposeObject3D(e)}),this.meshes[t].clear()}),this.decorMeshes.forEach(t=>{var e,i;this.scene.remove(t),t.geometry&&t.geometry.dispose(),(e=t.material)!=null&&e.map&&t.material.map.dispose(),(i=t.material)==null||i.dispose()}),this.decorMeshes=[],this.scene.children.filter(t=>t.userData.isFloor||t.userData.isCeiling).forEach(t=>{var e;this.scene.remove(t),(e=t.geometry)==null||e.dispose()})}roomColor(t){return t.color?typeof t.color=="number"?t.color:pn(t.color):t.preset&&Ci[t.preset]?Ci[t.preset].color:Ci.default.color}rebuildScene(){var r;if(this.viewMode==="plan2d"){this.renderPlan2d();return}this.clearMeshes();const t=this.getFloor(),e=0,i=this.viewMode!=="studio";((r=t.rooms)!=null&&r.length?t.rooms:[{id:"room-default",name:"Floor",polygon:[[0,0],[this.projectWidth,0],[this.projectWidth,this.projectDepth],[0,this.projectDepth]],color:Ci.default.color}]).forEach(o=>{const a=o.polygon||[],l=f_(a,e,this.roomColor(o));if(l&&(l.userData={type:"room",id:o.id,isFloor:!0},this.scene.add(l),this.decorMeshes.push(l)),i){const c=p_(a,e,t.height||Ri,this.materials.ceiling);c&&this.scene.add(c)}if(!i){const c=m_(o,e);c&&(this.scene.add(c),this.decorMeshes.push(c))}}),t.walls.forEach(o=>{const a=d_(o,e,t.doors,t.windows,this.materials.wall);this.meshes.walls.set(o.id,a),this.scene.add(a)}),t.doors.forEach(o=>{var h;const a=t.walls.find(f=>f.id===o.wall_id);if(!a)return;const l=((h=this.selected)==null?void 0:h.type)==="door"&&this.selected.id===o.id,c=Rc(o,a,e,l);this.meshes.doors.set(o.id,c),this.scene.add(c)}),this.initDoorAnimStates(),this.doorAnimStates.forEach((o,a)=>{const l=this.meshes.doors.get(a);l&&Co(l,o.open)}),t.windows.forEach(o=>{var h;const a=t.walls.find(f=>f.id===o.wall_id);if(!a)return;const l=((h=this.selected)==null?void 0:h.type)==="window"&&this.selected.id===o.id,c=Lc(o,a,e,l);this.meshes.windows.set(o.id,c),this.scene.add(c)}),t.components.forEach(o=>{const a=Po(o,e,Ge);a&&(this.meshes.components.set(o.id,a),this.scene.add(a))}),t.smart_devices.forEach(o=>{var c;const a=((c=this.selected)==null?void 0:c.type)==="smart"&&this.selected.id===o.id,l=hr(o,e,ce,a,i);l&&(this.meshes.smart.set(o.id,l),this.scene.add(l))}),this.applySceneLighting(i),this.updateSelectionHighlight(),this.updateHandles()}applySceneLighting(t){t&&this.nightMode?(this.scene.background=new Ft(789001),this.scene.fog=new Hn(789001,6,28),this.ambientLight.intensity=.12,this.ambientLight.color.setHex(1981023),this.sun.intensity=.08,this.hemiLight.intensity=.1,this.materials.wall.color.setHex(14078929),this.materials.ceiling.color.setHex(11051678),this.renderer.toneMapping=vr,this.renderer.toneMappingExposure=.85):t?(this.scene.background=new Ft(2696484),this.scene.fog=new Hn(2696484,10,40),this.ambientLight.intensity=.7,this.ambientLight.color.setHex(16775149),this.sun.intensity=.45,this.hemiLight.intensity=.6,this.materials.wall.color.setHex(16119284),this.materials.ceiling.color.setHex(16777215),this.renderer.toneMapping=vr,this.renderer.toneMappingExposure=1.1):(this.scene.background=new Ft(659226),this.scene.fog=new Hn(659226,50,140),this.ambientLight.intensity=.45,this.ambientLight.color.setHex(16774635),this.sun.intensity=1.1,this.hemiLight.intensity=.35,this.materials.wall.color.setHex(15262943),this.materials.ceiling.color.setHex(16317180),this.renderer.toneMapping=li,this.renderer.toneMappingExposure=1)}propsWrap(t){return`<div class="inspector-panel">${t}</div>`}propsHeader(t,e,i){return`<div class="inspector-head">
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
        </div>`}renderElementsList(){if(!this.listEl)return;const t=this.listEl.parentElement,e=this.getFloor(),i=[...e.walls.map(r=>({kind:"wall",id:r.id,label:`Wall · ${Ca(r).toFixed(1)}m × ${(r.thickness||kn).toFixed(2)}m`})),...e.doors.map(r=>({kind:"door",id:r.id,label:`Door · ${Math.round((r.position||.5)*100)}% · ${r.width}m`})),...e.windows.map(r=>({kind:"window",id:r.id,label:`Window · ${Math.round((r.position||.5)*100)}%`})),...e.components.map(r=>{var o;return{kind:"component",id:r.id,label:((o=Ge[r.type])==null?void 0:o.label)||r.type}}),...e.smart_devices.map(r=>{var o,a;return{kind:"smart",id:r.id,label:`${((o=ce[r.type])==null?void 0:o.icon)||"●"} ${((a=ce[r.type])==null?void 0:a.label)||r.type}`}}),...e.labels.map(r=>({kind:"label",id:r.id,label:`Text · ${(r.text||"").split(`
`)[0].slice(0,32)||"Empty"}`})),...e.rooms.map(r=>({kind:"room",id:r.id,label:`Room · ${r.name||"Unnamed"}`}))],n=this.outlinerFilter?i.filter(r=>r.label.toLowerCase().includes(this.outlinerFilter)):i;this.outlinerCountEl&&(this.outlinerCountEl.textContent=String(i.length)),this.preserveScroll(t,()=>{if(!n.length){this.listEl.innerHTML=`<p class="studio-empty">${i.length?"No matches.":"No elements yet — place a kit or draw walls."}</p>`;return}this.listEl.innerHTML=n.map(r=>{var a;const o=((a=this.selected)==null?void 0:a.type)===r.kind&&this.selected.id===r.id;return`<button type="button" data-select="${r.kind}:${r.id}" class="${o?"studio-outliner-item-active":"studio-outliner-item"}">${r.label}</button>`}).join(""),this.listEl.querySelectorAll("[data-select]").forEach(r=>{r.addEventListener("click",()=>{const[o,a]=r.dataset.select.split(":");this.selectById(o,a),this.renderElementsList()})})})}resolveStyleKey(t,e){if(t[e])return e;const i=Object.entries(t).find(([,n])=>n.type===e);return(i==null?void 0:i[0])||Object.keys(t)[0]}guessOpeningSizePreset(t,e,i){const n=e[i];if(!n)return"standard";const r=t.width/n.width,o=t.height/n.height;return r<.92&&o<.98?"compact":r>1.08||o>1.05?"wide":"standard"}guessComponentSizePreset(t){const e=Ge[t.type];if(!e)return"standard";const i=(t.width/e.w+t.depth/e.d+t.height/e.h)/3;return i<.92?"compact":i>1.08?"large":"standard"}applyOpeningSizePreset(t){if(!this.selected||this.selected.type!=="door"&&this.selected.type!=="window")return;const e=this.getFloor(),i=this.selected.type==="door"?mi:$i,n=this.selected.type==="door"?e.doors.find(l=>l.id===this.selected.id):e.windows.find(l=>l.id===this.selected.id);if(!n)return;const r=this.resolveStyleKey(i,n.style||n.type),o=i[r],a={compact:[.85,.95],standard:[1,1],wide:[1.2,1.05]}[t]||[1,1];n.width=Math.round(o.width*a[0]*100)/100,n.height=Math.round(o.height*a[1]*100)/100,this.selected.type==="window"&&(n.sill=o.sill??n.sill),this.refreshScene()}applyComponentSizePreset(t){var o;if(((o=this.selected)==null?void 0:o.type)!=="component")return;const i=this.getFloor().components.find(a=>a.id===this.selected.id);if(!i)return;const n=Ge[i.type];if(!n)return;const r={compact:.85,standard:1,large:1.15}[t]||1;i.width=Math.round(n.w*r*100)/100,i.depth=Math.round(n.d*r*100)/100,i.height=Math.round(n.h*r*100)/100,this.refreshScene()}renderProperties(t=!0){if(!this.propsEl)return;if(!this.selected){this.propsEl.innerHTML=this.renderFloorImagePanel();return}const e=this.getFloor();if(this.selected.type==="wall"){const i=e.walls.find(o=>o.id===this.selected.id);if(!i)return;const n=Ca(i).toFixed(2),r=i.thickness||kn;this.propsEl.innerHTML=this.propsWrap(`
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
            `);return}if(this.selected.type==="smart"){const i=e.smart_devices.find(o=>o.id===this.selected.id);if(!i)return;const n=ce[i.type]||{},r=lr(i.type,i);this.propsEl.innerHTML=this.propsWrap(`
                ${this.propsHeader(n.icon||"●",n.label||i.type,n.model||"Smart device")}
                ${this.statRow([...n.haDomain?[{label:"HA",value:n.haDomain}]:[],{label:"Price",value:he(r)}])}
                ${this.toggleControl("on","Power",i.on!==!1)}
                ${this.propsSection("Price (OMR)")}
                ${this.numControl("price","Unit price",r,{step:.1,min:0,max:99999})}
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
        `)}applyUnderlayProperty(t,e,i){if(!this.canEdit)return;const n=this.getFloor();if(n.underlay){if(t==="visible")n.underlay.visible=e===!0||e==="true"||e===1||e==="1";else if(t==="opacity"||t==="opacity_pct"){const r=Number(e),o=t==="opacity_pct"?r/100:r;n.underlay.opacity=Math.min(1,Math.max(.05,Number.isFinite(o)?o:.9))}this.renderPlan2d()}}removeFloorUnderlay(){var e;if(!this.canEdit)return;const t=this.getFloor();(e=t.underlay)!=null&&e.url&&window.confirm("Remove the floor image from this floor?")&&(delete t.underlay,this.renderPlan2d(),this.renderProperties(),this.setStatus("Floor image removed"))}openImportModal(){!this.canEdit||!this.importModal||(this.clearImportError(),this.setImportFile(null),this.importModal.classList.remove("hidden"),queueMicrotask(()=>{var t;return(t=this.importPasteZone)==null?void 0:t.focus()}))}isImportModalOpen(){return!!(this.importModal&&!this.importModal.classList.contains("hidden"))}isImportableImage(t){if(!t)return!1;const e=(t.type||"").toLowerCase(),i=(t.name||"").toLowerCase();return e.startsWith("image/")||/\.(jpe?g|png|webp|gif)$/i.test(i)}onImportPaste(t){var i,n;if(!this.isImportModalOpen()||(i=this.importSubmit)!=null&&i.disabled)return;const e=Array.from(((n=t.clipboardData)==null?void 0:n.items)||[]);for(const r of e)if(r.kind==="file"&&r.type.startsWith("image/")){const o=r.getAsFile();if(o){t.preventDefault(),this.setImportFile(o),this.clearImportError(),this.setStatus("Pasted floor image");return}}}setImportFile(t){var e,i;if(this._importPreviewUrl&&(URL.revokeObjectURL(this._importPreviewUrl),this._importPreviewUrl=null),this.importFile=t&&this.isImportableImage(t)?t:null,this.importImageInput){const n=new DataTransfer;this.importFile&&n.items.add(this.importFile),this.importImageInput.files=n.files}if(this.importSubmit&&(this.importSubmit.disabled=!this.importFile),!this.importFile){(e=this.importPreview)==null||e.classList.add("hidden"),this.importPreviewImg&&this.importPreviewImg.removeAttribute("src"),this.importPreviewName&&(this.importPreviewName.textContent=""),t&&this.showImportError("Only JPEG, PNG, WebP, or GIF images are supported.");return}this.clearImportError(),this._importPreviewUrl=URL.createObjectURL(this.importFile),this.importPreviewImg&&(this.importPreviewImg.src=this._importPreviewUrl),this.importPreviewName&&(this.importPreviewName.textContent=this.importFile.name),(i=this.importPreview)==null||i.classList.remove("hidden")}closeImportModal(){!this.importModal||this._importBusy||(this.importModal.classList.add("hidden"),this.clearImportError(),this.setImportFile(null))}clearImportError(){this.importError&&(this.importError.textContent="",this.importError.classList.add("hidden"))}showImportError(t){this.importError&&(this.importError.textContent=t,this.importError.classList.remove("hidden"))}setImportBusy(t){var e;this._importBusy=!!t,this.importSubmit&&(this.importSubmit.disabled=t||!this.importFile,this.importSubmit.textContent=t?"Uploading…":"Place on floor"),(e=this.importForm)==null||e.querySelectorAll("input, button").forEach(i=>{if(i!==this.importSubmit){if(i.hasAttribute("data-import-close")){i.disabled=t;return}i.type!=="submit"&&(i.disabled=t)}}),this.importPasteZone&&(this.importPasteZone.classList.toggle("pointer-events-none",t),this.importPasteZone.classList.toggle("opacity-60",t))}async submitFloorImage(){var i;if(!this.importUrl||!this.importFile){this.showImportError("Choose an image first.");return}const t=(i=document.querySelector('meta[name="csrf-token"]'))==null?void 0:i.content,e=new FormData;e.append("image",this.importFile),this.clearImportError(),this.setImportBusy(!0),this.setStatus("Uploading floor image…");try{const n=await fetch(this.importUrl,{method:"POST",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...t?{"X-CSRF-TOKEN":t}:{}},body:e,credentials:"same-origin"}),r=await n.json().catch(()=>({}));if(!n.ok){const o=r.errors?Object.values(r.errors).flat():[];throw new Error(r.message||o[0]||`Upload failed (${n.status})`)}if(!r.url)throw new Error("Upload succeeded but no image URL was returned.");this.applyFloorUnderlay(r.url),this.closeImportModalForced(),this.setStatus("Floor image placed — add components, then Save & Share")}catch(n){this.showImportError(n.message||"Upload failed."),this.setStatus("Floor image upload failed")}finally{this.setImportBusy(!1)}}applyFloorUnderlay(t){var n;const e=this.getFloor();let i=String(t||"");i.startsWith("/")?i=`${window.location.origin}${i}`:i.startsWith("//")&&(i=`${window.location.protocol}${i}`),e.underlay={url:i,opacity:.92,visible:!0,bounds:[0,0,this.projectWidth,this.projectDepth]},this.selected=null,this.viewMode!=="plan2d"?this.setViewMode("plan2d"):this.renderPlan2d(),this.renderProperties(),(n=this.plan2d)==null||n.fitToBounds(this.projectWidth,this.projectDepth)}closeImportModalForced(){var t;(t=this.importModal)==null||t.classList.add("hidden"),this.clearImportError(),this.setImportFile(null)}getQuotationServiceDefaults(){try{const t=localStorage.getItem(this.quotationDefaultsKey),e=t?JSON.parse(t):{};return{programming_price:Math.max(0,Number(e.programming_price)||0),installation_price:Math.max(0,Number(e.installation_price)||0)}}catch{return{programming_price:0,installation_price:0}}}saveQuotationServiceDefaults(){var i,n;const t=Math.max(0,Number((i=this.quotationProgrammingInput)==null?void 0:i.value)||0),e=Math.max(0,Number((n=this.quotationInstallationInput)==null?void 0:n.value)||0);if(localStorage.setItem(this.quotationDefaultsKey,JSON.stringify({programming_price:t,installation_price:e})),this.persistQuotationMeta(),this.setStatus("Programming & installation prices saved for all quotations"),this.quotationSaveDefaultsBtn){const r=this.quotationSaveDefaultsBtn.textContent;this.quotationSaveDefaultsBtn.textContent="Saved ✓",setTimeout(()=>{this.quotationSaveDefaultsBtn&&(this.quotationSaveDefaultsBtn.textContent=r||"Save for all quotations")},1600)}}openQuotationModal(){if(!this.quotationModal)return;const t=this.mapData.quotation||{},e=this.getQuotationServiceDefaults(),i=this.root.dataset.clientName||"",n=this.root.dataset.clientPhone||"",r=this.root.dataset.projectLocation||"";if(this.quotationClientInput&&(this.quotationClientInput.value=t.client||i||""),this.quotationPhoneInput&&(this.quotationPhoneInput.value=t.phone||n||""),this.quotationLocationInput&&(this.quotationLocationInput.value=t.location||r||""),this.quotationNotesInput&&(this.quotationNotesInput.value=t.notes||""),this.quotationProgrammingInput){const o=t.programming_price??e.programming_price??0;this.quotationProgrammingInput.value=String(Number(o)||0)}if(this.quotationInstallationInput){const o=t.installation_price??e.installation_price??0;this.quotationInstallationInput.value=String(Number(o)||0)}this.quotationDiscountInput&&(this.quotationDiscountInput.value=String(t.discount_pct??0)),this.quotationTvaInput&&(this.quotationTvaInput.value=String(t.tva_pct??5)),this.renderQuotation(),this.quotationModal.classList.remove("hidden")}closeQuotationModal(){var t;this.persistQuotationMeta(),(t=this.quotationModal)==null||t.classList.add("hidden")}ensureBenefitsMeta(){(!this.mapData.benefits||typeof this.mapData.benefits!="object")&&(this.mapData.benefits={extra_expenses:[]}),Array.isArray(this.mapData.benefits.extra_expenses)||(this.mapData.benefits.extra_expenses=[])}persistBenefitsMeta(){this.ensureBenefitsMeta(),this.mapData.benefits={extra_expenses:this.mapData.benefits.extra_expenses.map(t=>({id:t.id||`exp_${Date.now()}`,name:String(t.name||"").trim()||"مصروف",price:Math.round(Math.max(0,Number(t.price)||0)*1e3)/1e3})).filter(t=>t.name!=="مصروف"||t.price>0)}}openBenefitsModal(){this.benefitsModal&&(this.ensureBenefitsMeta(),this.renderBenefits(),this.benefitsModal.classList.remove("hidden"))}closeBenefitsModal(){var t;this.persistBenefitsMeta(),(t=this.benefitsModal)==null||t.classList.add("hidden")}collectBenefitLines(){const t=new Map;for(const i of this.mapData.floors||[])for(const n of i.smart_devices||[]){const r=n.type,o=ce[r]||{},a=Number(o.price),l=Number.isFinite(a)?a:lr(r,n),c=Math.max(0,Number(o.buy_price)||0),h=`${r}::${c.toFixed(3)}::${l.toFixed(3)}`,f=t.get(h);f?f.qty+=1:t.set(h,{type:r,icon:o.icon||"●",name:o.label||r,buy:c,sell:l,qty:1})}const e=new Map(As.map((i,n)=>[i,n]));return[...t.values()].map(i=>{const n=Math.round(i.buy*i.qty*1e3)/1e3,r=Math.round(i.sell*i.qty*1e3)/1e3;return{...i,buyTotal:n,sellTotal:r,benefit:Math.round((r-n)*1e3)/1e3}}).sort((i,n)=>(e.get(i.type)??999)-(e.get(n.type)??999)||i.sell-n.sell)}computeBenefitTotals(t){var m,g;const e=Math.round(t.reduce((v,p)=>v+p.buyTotal,0)*1e3)/1e3,i=Math.round(t.reduce((v,p)=>v+p.sellTotal,0)*1e3)/1e3,n=this.mapData.quotation||{},r=this.getQuotationServiceDefaults(),o=Math.max(0,Number(((m=this.quotationProgrammingInput)==null?void 0:m.value)??n.programming_price??r.programming_price)||0),a=Math.max(0,Number(((g=this.quotationInstallationInput)==null?void 0:g.value)??n.installation_price??r.installation_price)||0);this.ensureBenefitsMeta();const l=this.mapData.benefits.extra_expenses||[],c=Math.round(l.reduce((v,p)=>v+Math.max(0,Number(p.price)||0),0)*1e3)/1e3,h=Math.round((e+c)*1e3)/1e3,f=Math.round((i+o+a)*1e3)/1e3,d=Math.round((f-h)*1e3)/1e3;return{devicesBuy:e,devicesSell:i,programming:o,installation:a,expensesTotal:c,totalBuy:h,totalSell:f,totalBenefit:d,itemCount:t.reduce((v,p)=>v+p.qty,0)}}renderBenefitsTotalsOnly(){if(!this.benefitsStatsEl||!this.benefitsTotalsEl)return;const t=this.collectBenefitLines(),e=this.computeBenefitTotals(t);this.paintBenefitsStats(e),this.paintBenefitsTotals(e)}paintBenefitsStats(t){this.benefitsStatsEl&&(this.benefitsStatsEl.innerHTML=`
            <div class="rounded-xl border border-surface-700 bg-surface-800/40 p-3">
                <p class="text-[10px] uppercase tracking-wide text-surface-500 mb-1">Bought · الشراء</p>
                <p class="text-lg font-semibold font-mono text-white">${he(t.totalBuy)}</p>
            </div>
            <div class="rounded-xl border border-surface-700 bg-surface-800/40 p-3">
                <p class="text-[10px] uppercase tracking-wide text-surface-500 mb-1">Sell · البيع</p>
                <p class="text-lg font-semibold font-mono text-emerald-300">${he(t.totalSell)}</p>
            </div>
            <div class="rounded-xl border border-brand-500/30 bg-brand-500/10 p-3">
                <p class="text-[10px] uppercase tracking-wide text-brand-300/80 mb-1">Benefit · الربح</p>
                <p class="text-lg font-semibold font-mono ${t.totalBenefit>=0?"text-brand-300":"text-rose-300"}">${he(t.totalBenefit)}</p>
            </div>`)}paintBenefitsTotals(t){this.benefitsTotalsEl&&(this.benefitsTotalsEl.innerHTML=`
            <div class="flex justify-between text-sm text-surface-300">
                <span>Devices buy</span>
                <span class="font-mono">${he(t.devicesBuy)}</span>
            </div>
            <div class="flex justify-between text-sm text-surface-300">
                <span>Devices sell</span>
                <span class="font-mono">${he(t.devicesSell)}</span>
            </div>
            ${t.programming>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر البرمجة / Programming</span>
                    <span class="font-mono">${he(t.programming)}</span>
                </div>
            `:""}
            ${t.installation>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر التركيب / Installation</span>
                    <span class="font-mono">${he(t.installation)}</span>
                </div>
            `:""}
            ${t.expensesTotal>0?`
                <div class="flex justify-between text-sm text-rose-300/90">
                    <span>مصاريف إضافية</span>
                    <span class="font-mono">− ${he(t.expensesTotal)}</span>
                </div>
            `:""}
            <div class="pt-2 mt-1 border-t border-surface-700 flex justify-between text-base font-semibold text-white">
                <span>Benefit · الربح</span>
                <span class="font-mono ${t.totalBenefit>=0?"text-brand-300":"text-rose-300"}">${he(t.totalBenefit)}</span>
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
                                <td class="px-3 py-2.5 text-right font-mono text-xs">${he(n.buyTotal)}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs">${he(n.sellTotal)}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs text-brand-300">${he(n.benefit)}</td>
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
                <p class="text-xs text-surface-500">No extra expenses yet. Click + Add.</p>`,this.paintBenefitsStats(e),this.paintBenefitsTotals(e)}persistQuotationMeta(){var t,e,i,n,r,o,a,l,c,h,f,d;this.mapData.quotation={client:((e=(t=this.quotationClientInput)==null?void 0:t.value)==null?void 0:e.trim())||"",phone:((n=(i=this.quotationPhoneInput)==null?void 0:i.value)==null?void 0:n.trim())||"",location:((o=(r=this.quotationLocationInput)==null?void 0:r.value)==null?void 0:o.trim())||"",notes:((l=(a=this.quotationNotesInput)==null?void 0:a.value)==null?void 0:l.trim())||"",programming_price:Math.max(0,Number((c=this.quotationProgrammingInput)==null?void 0:c.value)||0),installation_price:Math.max(0,Number((h=this.quotationInstallationInput)==null?void 0:h.value)||0),discount_pct:Number((f=this.quotationDiscountInput)==null?void 0:f.value)||0,tva_pct:Number((d=this.quotationTvaInput)==null?void 0:d.value)||0}}collectQuotationLines(){var i;const t=new Map;for(const n of this.mapData.floors||[])for(const r of n.smart_devices||[]){const o=r.type,a=Number((i=ce[o])==null?void 0:i.price),l=Number.isFinite(a)?a:lr(o,r),c=`${o}::${l.toFixed(3)}`,h=t.get(c);if(h)h.qty+=1;else{const f=ce[o]||{};t.set(c,{type:o,icon:f.icon||"●",name:f.label||o,unit:l,qty:1})}}const e=new Map(As.map((n,r)=>[n,r]));return[...t.values()].map(n=>({...n,total:Math.round(n.unit*n.qty*1e3)/1e3})).sort((n,r)=>(e.get(n.type)??999)-(e.get(r.type)??999)||n.unit-r.unit)}computeQuotationTotals(t){var d,m,g,v;const e=t.reduce((p,u)=>p+u.total,0),i=Math.max(0,Number((d=this.quotationProgrammingInput)==null?void 0:d.value)||0),n=Math.max(0,Number((m=this.quotationInstallationInput)==null?void 0:m.value)||0),r=Math.round((e+i+n)*1e3)/1e3,o=Math.min(100,Math.max(0,Number((g=this.quotationDiscountInput)==null?void 0:g.value)||0)),a=Math.min(100,Math.max(0,Number((v=this.quotationTvaInput)==null?void 0:v.value)||0)),l=Math.round(r*(o/100)*1e3)/1e3,c=Math.round((r-l)*1e3)/1e3,h=Math.round(c*(a/100)*1e3)/1e3,f=Math.round((c+h)*1e3)/1e3;return{devicesSubtotal:e,programming:i,installation:n,subtotal:r,discountPct:o,discountAmount:l,afterDiscount:c,tvaPct:a,tvaAmount:h,total:f,itemCount:t.reduce((p,u)=>p+u.qty,0)}}renderQuotation(){var n,r;if(!this.quotationLinesEl||!this.quotationTotalsEl)return;this.persistQuotationMeta();const t=this.collectQuotationLines(),e=this.computeQuotationTotals(t),i=this.root.dataset.projectName||((r=(n=this.root.querySelector(".studio-topbar-title"))==null?void 0:n.textContent)==null?void 0:r.trim())||"Project";!t.length&&e.programming<=0&&e.installation<=0?this.quotationLinesEl.innerHTML=`
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
                                <td class="px-3 py-2.5 text-center">${o.qty}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs">${he(o.unit)}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs text-white">${he(o.total)}</td>
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
                <span class="font-mono">${he(e.devicesSubtotal)}</span>
            </div>
            ${e.programming>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر البرمجة / Programming</span>
                    <span class="font-mono">${he(e.programming)}</span>
                </div>
            `:""}
            ${e.installation>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>سعر التركيب / Installation</span>
                    <span class="font-mono">${he(e.installation)}</span>
                </div>
            `:""}
            <div class="flex justify-between text-sm text-surface-300">
                <span>Subtotal</span>
                <span class="font-mono">${he(e.subtotal)}</span>
            </div>
            ${e.discountPct>0?`
                <div class="flex justify-between text-sm text-amber-300/90">
                    <span>Discount (${e.discountPct}%)</span>
                    <span class="font-mono">− ${he(e.discountAmount)}</span>
                </div>
            `:""}
            ${e.tvaPct>0?`
                <div class="flex justify-between text-sm text-surface-300">
                    <span>TVA / VAT (${e.tvaPct}%)</span>
                    <span class="font-mono">${he(e.tvaAmount)}</span>
                </div>
            `:""}
            <div class="pt-2 mt-1 border-t border-surface-700 flex justify-between text-base font-semibold text-white">
                <span>Total · الإجمالي</span>
                <span class="font-mono text-brand-300">${he(e.total)}</span>
            </div>
            <p class="text-[10px] text-surface-500 pt-1 flex items-center gap-1.5">
                Amounts in Omani Rial
                <span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask:url('${window.location.origin}/images/omr-symbol.png')"></span>
            </p>
        `}printQuotation(){var M,A,T,R,_,y,E,C,L,k;this.persistQuotationMeta();const t=this.collectQuotationLines(),e=this.computeQuotationTotals(t),i=this.escapeHtml(((A=(M=this.quotationClientInput)==null?void 0:M.value)==null?void 0:A.trim())||"—"),n=this.escapeHtml(((R=(T=this.quotationPhoneInput)==null?void 0:T.value)==null?void 0:R.trim())||"—"),r=this.escapeHtml(((y=(_=this.quotationLocationInput)==null?void 0:_.value)==null?void 0:y.trim())||"—"),o=this.escapeHtml(((C=(E=this.quotationNotesInput)==null?void 0:E.value)==null?void 0:C.trim())||""),a=this.escapeHtml(this.root.dataset.projectName||((k=(L=this.root.querySelector(".studio-topbar-title"))==null?void 0:L.textContent)==null?void 0:k.trim())||"Project"),l=new Date().toLocaleDateString("en-GB"),c=`QT-${Date.now().toString().slice(-8)}`,h=`${window.location.origin}/images/afaq-smart-logo.png`,f=`${window.location.origin}/images/omr-symbol-ink.png`,d=`${window.location.origin}/images/omr-symbol-navy.png`,m="شركة الأفاق للبيوت الذكية",g="afaq.smart",v="بيوت ذكية .. حياة أسهل",p=X=>Ac(X,f),u=X=>Ac(X,d),b=t.length?t.map((X,F)=>`
                <tr>
                    <td class="num">${F+1}</td>
                    <td>
                        <div class="item-cell">
                            <span class="item-icon">${X.icon}</span>
                            <span>${this.escapeHtml(X.name)}</span>
                        </div>
                    </td>
                    <td class="center">${X.qty}</td>
                    <td class="right mono">${p(X.unit)}</td>
                    <td class="right mono strong">${p(X.total)}</td>
                </tr>`).join(""):'<tr><td colspan="5" class="empty">No devices on this map yet</td></tr>',w=`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<title>عرض سعر — ${m}</title>
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
    grid-template-columns: 1.1fr 0.9fr;
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
  }
  .totals {
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
        <img src="${h}" alt="${g}" />
        <div class="brand-text">
          <h1>${m}</h1>
          <div class="en">${g}</div>
          <div class="tag">${v}</div>
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
      <tbody>${b}</tbody>
    </table>

    <section class="bottom">
      <div class="note-box">
        <div class="k">ملاحظات / Notes</div>
        <div class="v">${o||"—"}</div>
      </div>
      <div class="totals">
        <div class="row muted"><span>الأجهزة / Devices</span><span>${p(e.devicesSubtotal)}</span></div>
        ${e.programming>0?`<div class="row"><span>سعر البرمجة / Programming</span><span>${p(e.programming)}</span></div>`:""}
        ${e.installation>0?`<div class="row"><span>سعر التركيب / Installation</span><span>${p(e.installation)}</span></div>`:""}
        <div class="row muted"><span>المجموع الفرعي / Subtotal</span><span>${p(e.subtotal)}</span></div>
        ${e.discountPct>0?`<div class="row discount"><span>الخصم / Discount (${e.discountPct}%)</span><span>− ${p(e.discountAmount)}</span></div>`:""}
        ${e.tvaPct>0?`<div class="row"><span>الضريبة / TVA (${e.tvaPct}%)</span><span>${u(e.tvaAmount)}</span></div>`:""}
        <div class="row grand"><span>الإجمالي / Total</span><span>${p(e.total)}</span></div>
      </div>
    </section>

    <footer class="footer">
      <div><strong>${m}</strong> · ${g}</div>
      <div class="omr-amount">العملة: <img class="omr-symbol" src="${f}" alt="OMR" width="16" height="16"> ريال عماني</div>
    </footer>
  </div>
</body>
</html>`;this.printHtmlDocument(w),this.setStatus("Print dialog opened for quotation invoice")}escapeHtml(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}printHtmlDocument(t){var c;let e=document.getElementById("quotation-print-frame");e||(e=document.createElement("iframe"),e.id="quotation-print-frame",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(e));const i=e.contentDocument||((c=e.contentWindow)==null?void 0:c.document);if(!i||!e.contentWindow){const h=new Blob([t],{type:"text/html"}),f=URL.createObjectURL(h),d=window.open(f,"_blank");if(!d){this.setStatus("Pop-up blocked — allow pop-ups to print the invoice"),URL.revokeObjectURL(f);return}const m=()=>URL.revokeObjectURL(f);d.addEventListener("load",()=>{d.focus(),d.print(),setTimeout(m,1e3)}),setTimeout(()=>{try{d.focus(),d.print()}catch{}setTimeout(m,1500)},400);return}i.open(),i.write(t),i.close();const n=()=>{try{e.contentWindow.focus(),e.contentWindow.print()}catch{this.setStatus("Could not open print dialog")}},o=Array.from(i.images||[]).filter(h=>!h.complete);if(!o.length){setTimeout(n,120);return}let a=o.length;const l=()=>{a-=1,a<=0&&setTimeout(n,80)};o.forEach(h=>{h.addEventListener("load",l,{once:!0}),h.addEventListener("error",l,{once:!0})}),setTimeout(n,1500)}applyLiveMap(t){if(!(t!=null&&t.map_data))return;const e=this.camera.position.x,i=this.camera.position.z,n=this.look360.yaw,r=this.look360.pitch,o=this.activeFloorIndex,a=this.viewMode==="view360";if(this.mapData=t.map_data,this.projectWidth=Number(t.width)||this.projectWidth,this.projectDepth=Number(t.depth)||this.projectDepth,this.root.dataset.width=String(this.projectWidth),this.root.dataset.depth=String(this.projectDepth),this.normalizeMapData(),this.activeFloorIndex=Ve(o,0,this.mapData.floors.length-1),this.mapData.active_floor=this.activeFloorIndex,this.renderFloorSwitcher(),this.viewMode==="plan2d"?this.renderPlan2d():this.rebuildScene(),a){const l=this.canWalkTo(e,i),[c,h]=l?[e,i]:this.findWalkableSpawn(e,i);this.camera.position.set(c,this.eyeHeight,h),this.look360.yaw=n,this.look360.pitch=r,this.apply360Rotation(),this.applySceneLighting(!0),this.updateRoomAutomation()}}startLiveSync(){if(!this.liveUrl)return;const t=async()=>{try{const e=await fetch(this.liveUrl,{headers:{Accept:"application/json"},credentials:"same-origin"});if(!e.ok)return;const i=await e.json(),n=String(i.updated_at||"");n&&n!==this.liveRevision&&(this.liveRevision=n,this.applyLiveMap(i),this.setStatus("Home updated — latest design loaded"))}catch{}};t(),this.liveSyncTimer=setInterval(t,15e3)}onResize(){var i;const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.viewMode!=="plan2d"&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)),(i=this.plan2d)==null||i.resize(t,e),this.viewMode==="plan2d"&&this.renderPlan2d()}animate(){if(requestAnimationFrame(()=>this.animate()),this.viewMode==="plan2d")return;const t=this.clock.getDelta();this.viewMode==="studio"?this.controls.update():this.viewMode==="view360"&&(document.pointerLockElement===this.renderer.domElement&&(this.look360.yaw=this.camera.rotation.y,this.look360.pitch=this.camera.rotation.x),this.updateFirstPerson(t)),this.renderer.render(this.scene,this.camera)}}function Ic(){const s=document.getElementById("map-editor-root");s&&!s.dataset.initialized&&(s.dataset.initialized="true",new S_(s))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ic):Ic();
