(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(19),s=a.n(i),o=(a(74),a(8)),d=a(9),l=a(11),j=a(10),b=(a(75),a(51),a(115)),u=a(117),h=a(114),O=(a(76),a.p+"static/media/logo.23f3f658.png"),p=a(7),m=a(63),x=Object(m.a)(),f=a(14),v=(a(81),a.p+"static/media/profile-avatar.a9c4102b.jpg");var g=function(e){var t=Object(c.useState)("Alon"),a=Object(p.a)(t,2),r=a[0];return a[1],Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("img",{class:"avatar",src:v,alt:"profile picture"}),"Hello ",r]})},w=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-parent",children:Object(n.jsxs)(b.a,{expand:"lg",children:[Object(n.jsx)(b.a.Brand,{href:"#home",children:Object(n.jsx)("img",{src:O,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(u.a,{className:"mr-auto",children:[Object(n.jsx)("a",{href:"/",children:"Home"}),Object(n.jsx)("a",{href:"/Signin",children:"Login"}),Object(n.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(h.a.Divider,{}),Object(n.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(n.jsx)(g,{})]})]})})}}]),a}(c.Component),y=a(67),N=(a(44),a(12));var S=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),r=(a[0],a[1],Object(c.useState)("")),i=Object(p.a)(r,2);return i[0],i[1],Object(n.jsx)("div",{children:Object(n.jsxs)(N.a,{style:{width:"18rem"},children:[Object(n.jsx)(N.a.Img,{variant:"top",src:"holder.js/100px180"}),Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)(N.a.Title,{children:"phone"}),Object(n.jsx)(N.a.Text,{children:"Click here to see more Phones."}),Object(n.jsx)(y.a,{variant:"primary",onClick:function(e){e.preventDefault(),window.location.href="/Constraction"},children:"Buy"})]})]})})};a.p;var C=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),r=(a[0],a[1],Object(c.useState)("")),i=Object(p.a)(r,2);return i[0],i[1],Object(n.jsx)("div",{children:Object(n.jsxs)(N.a,{style:{width:"18rem"},children:[Object(n.jsx)(N.a.Img,{variant:"top",src:"computer/100px180"}),Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)(N.a.Title,{children:"Computer"}),Object(n.jsx)(N.a.Text,{children:"Click here to see more Computers."}),Object(n.jsx)(y.a,{variant:"primary",onClick:function(e){e.preventDefault(),window.location.href="/Constraction"},children:"Buy"})]})]})})};var k=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),r=(a[0],a[1],Object(c.useState)("")),i=Object(p.a)(r,2);return i[0],i[1],Object(n.jsx)("div",{children:Object(n.jsxs)(N.a,{style:{width:"18rem"},children:[Object(n.jsx)(N.a.Img,{variant:"top",src:"holder.js/100px180"}),Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)(N.a.Title,{children:"Tablet"}),Object(n.jsx)(N.a.Text,{children:"Click here to see more Tablets."}),Object(n.jsx)(y.a,{variant:"primary",onClick:function(e){e.preventDefault(),window.location.href="/Constraction"},children:"Buy"})]})]})})};var A=function(e){return Object(n.jsxs)("div",{className:"HomePagecontainer",children:[Object(n.jsx)(S,{}),Object(n.jsx)(C,{}),Object(n.jsx)(k,{})]})},E=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(A,{})]})}}]),a}(c.Component),P=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(E,{})})}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(116),I=a(27),U=a(68),_="USER_SIGNIN_ATTEMPT",R="USER_SIGNIN_SUCCESS",B="USER_SIGNIN_FAILED",F="USER_SIGNUP_ATTEMPT",D="USER_SIGNUP_SUCCESS",L="USER_SIGNUP_FAILED",G="USER_SIGNOUT_SUCCESS";var M=Object(I.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{logging:!0};case R:return{logging:!1,loggedin:!0,data:t.payload.data};case B:return{logging:!1,loggedin:!1,error:t.payload};case F:return{registering:!0};case D:return{registering:!1,loggedin:!0,user:t.payload};case L:return{registering:!1,loggedin:!1,error:t.payload};case G:return{loggedin:!1,user:null,error:null};default:return e}}}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,Z=Object(I.e)(M,{},q(Object(I.a)(U.a))),W=a(33),z=a.n(W),H=a(46),$=a(47),J=a.n($),V=(a(104),a(30));var X=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),i=a[0],s=a[1],o=Object(c.useState)(""),d=Object(p.a)(o,2),l=d[0],j=d[1],b=Object(f.b)(),u=r.a.createRef();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignIncontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignIn",children:Object(n.jsxs)("form",{className:"SignInForm",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(n.jsxs)("div",{className:"email-field",children:[Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return s(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(n.jsxs)("div",{className:"password-field",children:[Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return j(e.target.value)},"aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{id:"forgot",href:"/ResetPass",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"SignInButton",type:"submit",onClick:function(){b(function(e,t){return function(){var a=Object(H.a)(z.a.mark((function a(n){var c;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,J.a.post("/signin",{email:e,password:t});case 3:c=a.sent,console.log(c),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0),n({type:"USER_SIGNIN_FAILED",payload:a.t0});case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}(i,l))},children:"Login"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(n.jsx)("a",{href:"/Signup",children:"Sign-Up"})," "]})}),Object(n.jsx)(V.a,{ref:u,sitekey:"6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},Y=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(X,{})]})}}]),a}(c.Component);a(105);var K=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),i=a[0],s=a[1],o=Object(c.useState)(""),d=Object(p.a)(o,2),l=d[0],j=d[1],b=Object(c.useState)(""),u=Object(p.a)(b,2),h=u[0],O=u[1],m=Object(c.useState)(""),x=Object(p.a)(m,2),v=x[0],g=x[1],w=Object(c.useState)(""),y=Object(p.a)(w,2),N=y[0],S=y[1],C=r.a.createRef(),k=Object(f.b)();function A(e){return e.length<1?(alert("Too short"),!1):-1==e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1==e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignUpcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignUp",children:Object(n.jsxs)("form",{className:"SignUpform",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Sign Up"}),Object(n.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return g(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(n.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return S(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return s(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return O(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){if((/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(i)||(alert("You have entered an invalid email address!"),0))&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1==e.search(/\d/))return alert("No num"),!1;if(-1==e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(l)&&A(v)&&A(N)){if(l!=h)return alert("The passwords do not match"),!1;k(function(e,t,a,n){return function(){var c=Object(H.a)(z.a.mark((function c(r){var i;return z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r({type:"USER_SIGNUP_ATTEMPT",payload:{}}),c.prev=1,c.next=4,J.a.post("/signup",{email:e,password:t,firstname:a,lastname:n});case 4:i=c.sent,r({type:"USER_SIGNUP_SUCCESS",payload:i}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),r({type:"USER_SIGNUP_FAILED",payload:c.t0});case 11:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}()}(i,l,v,N))}},children:"Signup"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(n.jsx)("a",{href:"/signin",children:"Sign-In"})," "]})}),Object(n.jsx)(V.a,{ref:C,sitekey:"6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},Q=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(K,{})]})}}]),a}(c.Component);a(106);var ee=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),r=(a[0],a[1],Object(c.useState)("")),i=Object(p.a)(r,2);return i[0],i[1],Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"UpdatePassword",children:Object(n.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Update Password"}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e||(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},te=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(ee,{})]})}}]),a}(c.Component);a(107);var ae=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),i=(a[0],a[1],Object(c.useState)("")),s=Object(p.a)(i,2),o=(s[0],s[1],r.a.createRef());return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ForgotContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"Forgot",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"ForgotForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Reset Password"}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:"onClickReset()",children:"Reset Password"})}),Object(n.jsx)(V.a,{ref:o,sitekey:"6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})})},ne=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(ae,{})]})}}]),a}(c.Component),ce=(a(61),a.p+"static/media/FinalTask.17e43989.pdf");var re=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"AboutContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"About",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"About"}),Object(n.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(n.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(n.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(n.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(n.jsx)("p",{id:"subTitle",children:"Website"}),Object(n.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("a",{href:ce,target:"_blank",children:"Privacy Policy & Terms"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},ie=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(re,{})]})}}]),a}(c.Component);a(62);var se=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},oe=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(se,{})]})}}]),a}(c.Component);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f.a,{store:Z,children:Object(n.jsx)(T.b,{history:x,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(T.a,{exact:!0,path:"/",component:P}),Object(n.jsx)(T.a,{path:"/Signin",component:Y}),Object(n.jsx)(T.a,{path:"/SignUp",component:Q}),Object(n.jsx)(T.a,{path:"/UpdatePass",component:te}),Object(n.jsx)(T.a,{path:"/ForgotPass",component:ne}),Object(n.jsx)(T.a,{path:"/About",component:ie}),Object(n.jsx)(T.a,{path:"/Constraction",component:oe})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.380827eb.chunk.js.map