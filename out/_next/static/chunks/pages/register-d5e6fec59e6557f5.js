(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{922:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(9339)}])},5465:function(e,t,n){"use strict";var s=n(5893);n(7294),t.Z=function(e){let{data:t,cbFunction:n}=e;return(0,s.jsx)("div",{className:"fixed h-full w-full inset-0 ] bg-[rgba(0,0,0,0.6)]",children:(0,s.jsx)("div",{className:"flex items-center h-full justify-center",children:(0,s.jsxs)("div",{className:"bg-stone-100 rounded w-3/4 h-1/4 md:w-1/2 flex justify-center items-center flex-col",children:[(0,s.jsx)("p",{className:"text-black",children:t}),(0,s.jsx)("button",{className:"text-black border-[1px] border-black rounded mt-6",children:(0,s.jsx)("p",{className:"px-2 py-1",onClick:n,children:"Okay"})})]})})})}},9339:function(e,t,n){"use strict";n.r(t);var s=n(5893),a=n(7294),r=n(5465),i=n(1163);function l(){let e=(0,i.useRouter)(),[t,n]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),[u,o]=(0,a.useState)(!1),[d,m]=(0,a.useState)(!1),[h,x]=(0,a.useState)(!1),[f,b]=(0,a.useState)(!1);function p(e){var t=e.target.name;"email"===t?n(e.target.value):"password"===t&&c(e.target.value)}async function g(e){if(e.preventDefault(),0===t.length|0===l.length){x(e=>!e),n(""),c("");return}let s=await fetch("/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:l})}),a=await s.json();(console.log(a),200==a.status)?o(e=>!e):(n(""),c(""),b(e=>!e)),n(""),c("")}return(0,s.jsxs)("div",{className:"flex justify-center h-screen items-center",children:[!0===u?(0,s.jsx)(r.Z,{setEmailSend:o,cbFunction:()=>{o(e=>!e),e.push("/")},data:"Wir haben dir eine Email mit einem Aktivierungslink geschickt."}):"",!0===d?(0,s.jsx)(r.Z,{setEmailSend:m,cbFunction:()=>{m(e=>!e)},data:"Diese Email ist schon vergeben."}):"",!0===h?(0,s.jsx)(r.Z,{setEmailSend:x,cbFunction:()=>{x(e=>!e)},data:"Die Eingabefelder d\xfcrfen nicht leer bleiben."}):"",!0===f?(0,s.jsx)(r.Z,{setEmailSend:b,cbFunction:()=>{b(e=>!e)},data:"Dieser Nutzer l\xe4sst sich nicht erstellen."}):"",(0,s.jsx)("div",{className:"#18181b w-[80%] h-[80%] md:w-[60%] rounded-xl border-[1px] border-[rgb(255,255,255)] shadow-[0_1px_60px_-15px_rgba(255,255,255,0.6)] flex justify-center items-center",children:(0,s.jsxs)("form",{className:"form flex flex-col",action:"/register",method:"POST",children:[(0,s.jsx)("input",{onChange:p,name:"email",placeholder:"Your Email",value:t,className:"text-black rounded w-40"}),(0,s.jsx)("input",{onChange:p,type:"password",name:"password",placeholder:"Your Password",value:l,className:"text-black rounded mt-2 w-40"}),(0,s.jsx)("button",{onClick:g,className:"mt-4 border-[1px] rounded mytransition transition",children:(0,s.jsx)("p",{className:"gradient p-2",children:"Register"})})]})})]})}t.default=l,l.getLayout=function(e){return(0,s.jsx)(s.Fragment,{children:e})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=922)}),_N_E=e.O()}]);