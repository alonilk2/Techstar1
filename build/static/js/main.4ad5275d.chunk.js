(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(21),i=a.n(s),o=(a(82),a(8)),l=a(9),d=a(11),u=a(10),j=(a(83),a(61),a(126)),b=a(125),h=(a(84),a.p+"static/media/logo.23f3f658.png"),p=a(71),O=Object(p.a)(),m=a(12),f=(a(89),a.p+"static/media/avatar.5fedd648.png"),x=a(24),v=a.n(x),g=a(19),y=a.n(g),N=a(32),w=a(28),S=a.n(w),C="USER_SIGNIN_FAILED",k="USER_SIGNUP_FAILED";var P=function(){return function(e){v.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}},E=a(36),A=a(39);var _=function(e){var t=v.a.get("userInstance"),a=Object(m.b)();if(t){var r=function(){O.push("/Constraction")},c=JSON.parse(t);return console.log(c),Object(n.jsxs)("div",{className:"newDiv",children:[Object(n.jsx)(A.a,{className:"btn",variant:"primary",onClick:r,children:"Buy PC"}),Object(n.jsx)(A.a,{className:"btn",variant:"primary",onClick:r,children:"Buy Cellphone"}),Object(n.jsx)("img",{className:"avatar",src:f,alt:"profile picture"}),Object(n.jsxs)(E.a,{className:"user-instance",children:[Object(n.jsxs)(E.a.Toggle,{id:"dropdown-basic",children:["Hello ",c.data.user.first_name]}),Object(n.jsxs)(E.a.Menu,{children:[Object(n.jsx)(E.a.Item,{href:"/profile",children:"My Profile"}),Object(n.jsx)(E.a.Item,{href:"/",onClick:function(){a(P())},children:"Logout"})]})]})]})}return Object(n.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(n.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Sign In"}),Object(n.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-parent",children:Object(n.jsxs)(j.a,{expand:"lg",children:[Object(n.jsx)(j.a.Brand,{href:"/",children:Object(n.jsx)("img",{src:h,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsx)(b.a,{className:"mr-auto"}),Object(n.jsx)(_,{})]})]})})}}]),a}(r.Component),I=(a(112),a(37));var T=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(I.a,{style:{width:"18rem"},children:[Object(n.jsx)(I.a.Img,{variant:"top",src:"./"+e.imagePath}),Object(n.jsxs)(I.a.Body,{children:[Object(n.jsx)(I.a.Title,{children:e.title}),Object(n.jsxs)(I.a.Text,{children:["Click here to see more ",e.title]}),Object(n.jsx)("a",{href:"/Constraction",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Find out more"})]})]})})},R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).categoryList=function(){if(r.state.categories)return r.state.categories.map((function(e){return Object(n.jsx)(T,{title:e.Name,imagePath:e.imagePath},e.Name)}))},r.state={categories:[]},r}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoryList=this.categoryList.bind(this),e.prev=1,e.next=4,S.a.post("https://techstar12.herokuapp.com/fetch_categories");case 4:(t=e.sent).data.success?(this.setState({categories:t.data.result}),console.log(this.state.categories)):console.log("Error: could not fetch category list from server."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{className:"HomePagecontainer",children:Object(n.jsx)("div",{className:"row",children:this.categoryList()})})}}]),a}(r.Component),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(R,{})]})}}]),a}(r.Component),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(F,{})})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(120),G=a(35),q=a(75),z="USER_SIGNIN_ATTEMPT",Z="USER_SIGNIN_SUCCESS",B="USER_SIGNIN_FAILED",M="USER_SIGNUP_ATTEMPT",W="USER_SIGNUP_SUCCESS",J="USER_SIGNUP_FAILED",$="USER_SIGNOUT_SUCCESS";var Y=v.a.getJSON("userInstance")||null,V=0;V=Y?{loggedin:!0,user:Y}:{};var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.c,H=Object(G.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{logging:!0};case Z:return{logging:!1,loggedin:!0,user:t.payload};case B:return{logging:!1,loggedin:!1,error:t.payload};case M:return{registering:!0};case W:return{registering:!1,loggedin:!0,user:t.payload};case J:return{registering:!1,loggedin:!1,error:t.payload};case $:return{loggedin:!1,user:null,error:null};default:return e}}),V,X(Object(G.a)(q.a))),K=a(7),Q=(a(113),a(34)),ee=a(53);var te=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(K.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)("[empty]"),b=Object(K.a)(j,2),h=(b[0],b[1]),p=Object(r.useState)("false"),f=Object(K.a)(p,2),x=(f[0],f[1]),g=Object(m.b)(),y=Object(m.c)((function(e){return e.error})),N=c.a.createRef();return Object(D.e)(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignIncontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignIn",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),S.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),v.a.set("userInstance",JSON.stringify(e)),O.push("/")):0===e.data.error?a({type:C,payload:0}):1===e.data.error&&a({type:C,payload:1})})).catch((function(e){a({type:C,payload:e})}))}}(s,d))},autocomplete:"on",children:[0===y&&Object(n.jsx)(ee.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(n.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(n.jsxs)("div",{className:"email-field",children:[Object(n.jsx)("input",{id:"email-signin",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(n.jsxs)("div",{className:"password-field",children:[Object(n.jsx)("input",{id:"pass-signin",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return u(e.target.value)},"aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"SignInButton",type:"submit",children:"Sign-In"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(n.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})}),Object(n.jsx)(Q.a,{ref:N,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),h(e),null==e&&x(!0)}})]})})})})})},ae=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(te,{})]})}}]),a}(r.Component);a(115);var ne=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(K.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)(""),b=Object(K.a)(j,2),h=b[0],p=b[1],f=Object(r.useState)(""),x=Object(K.a)(f,2),g=x[0],w=x[1],C=Object(r.useState)(""),P=Object(K.a)(C,2),E=P[0],A=P[1],_=Object(r.useState)("not fired"),U=Object(K.a)(_,2),I=(U[0],U[1],Object(r.useState)("[empty]")),T=Object(K.a)(I,2),R=T[0],F=T[1],L=Object(r.useState)(!1),D=Object(K.a)(L,2),G=(D[0],D[1],Object(r.useState)("false")),q=Object(K.a)(G,2),z=(q[0],q[1]),Z=c.a.createRef(),B=Object(m.c)((function(e){return e.error})),M=Object(m.b)();function W(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignUpcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignUp",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)&&W(g)&&W(E)){if("[empty]"==R)return alert("You have to verify the Recaptcha!"),!1;if(d!==h)return alert("The passwords do not match"),!1;M(function(e,t,a,n){return function(){var r=Object(N.a)(y.a.mark((function r(c){var s;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"USER_SIGNUP_ATTEMPT",payload:{}}),r.prev=1,r.next=4,S.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:n});case 4:(s=r.sent).data.success?(c({type:"USER_SIGNUP_SUCCESS",payload:s}),v.a.set("userInstance",JSON.stringify(s)),O.push("/")):0===s.data.error?c({type:k,payload:0}):1===s.data.error&&c({type:k,payload:1}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c({type:k,payload:r.t0});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(s,d,g,E)),alert("We sent you an email about your sign-up")}},children:[0===B&&Object(n.jsx)(ee.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(n.jsx)("p",{id:"title",children:"Sign Up"}),Object(n.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return w(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(n.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return A(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(n.jsx)("input",{id:"password2",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return u(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password3",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return p(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(n.jsx)("a",{href:"/SignIn",children:"Sign-In"})]})}),Object(n.jsx)(Q.a,{ref:Z,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),F(e),null==e&&z(!0)},id:"my_captcha_form"})]})})})})})},re=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ne,{})]})}}]),a}(r.Component);a(116);var ce=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),c=(a[0],a[1],Object(r.useState)("")),s=Object(K.a)(c,2);return s[0],s[1],Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"UpdatePassword",children:Object(n.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Update Password"}),Object(n.jsx)("input",{id:"pass1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"pass2",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e?(alert("We sent you an email about this update"),!0):(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ce,{})]})}}]),a}(r.Component);a(117);var ie=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=c.a.createRef(),l=Object(m.b)(),d=Object(r.useState)("[empty]"),u=Object(K.a)(d,2),j=u[0],b=u[1],h=Object(r.useState)("false"),p=Object(K.a)(h,2),O=(p[0],p[1]);return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ForgotContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"Forgot",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)||"[empty]"==j)return alert("You have to verify the Recaptcha!"),!1;var t,a,n;l((t=s,a="Reset Password",n="Please enter this URL to change password: https://techstar12.herokuapp.com/updatepass",function(){var e=Object(N.a)(y.a.mark((function e(r){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("https://techstar12.herokuapp.com/sendMail",{email:t,subject:a,text:n});case 3:(c=e.sent).data.error&&console.log(c.data.status),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),alert("We sent you an email to update your password")},children:[Object(n.jsx)("p",{id:"title",children:"Reset Password"}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Reset Password"})}),Object(n.jsx)(Q.a,{ref:o,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),b(e),null==e&&O(!0)}})]})})})})})})},oe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ie,{})]})}}]),a}(r.Component),le=(a(57),a.p+"static/media/FinalTask.17e43989.pdf");var de=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"AboutContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"About",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"About"}),Object(n.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(n.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(n.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(n.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(n.jsx)("p",{id:"subTitle",children:"Website"}),Object(n.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("a",{href:le,target:"_blank",children:"Privacy Policy & Terms"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},ue=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(de,{})]})}}]),a}(r.Component);a(43);var je=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},be=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(je,{})]})}}]),a}(r.Component);var he=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"404 page"}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Home Page"})]})]})})})})})},pe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(he,{})]})}}]),a}(r.Component);a(118);var Oe=function(e){var t=v.a.get("userInstance"),a=JSON.parse(t),c=Object(r.useState)(""),s=Object(K.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(""),d=Object(K.a)(l,2),u=d[0],j=d[1],b=Object(r.useState)(""),h=Object(K.a)(b,2),p=h[0],f=h[1],x=Object(r.useState)(a.data.user.first_name),g=Object(K.a)(x,2),w=g[0],C=g[1],k=Object(r.useState)(a.data.user.last_name),E=Object(K.a)(k,2),A=E[0],_=E[1],U=Object(r.useState)(a.data.user.phonenumber),I=Object(K.a)(U,2),T=I[0],R=I[1],F=Object(r.useState)(a.data.user.email),L=Object(K.a)(F,2),D=(L[0],L[1]),G=Object(r.useState)(a.data.user.country),q=Object(K.a)(G,2),z=q[0],Z=q[1],B=Object(r.useState)(a.data.user.city),M=Object(K.a)(B,2),W=M[0],J=M[1],$=Object(m.b)();if(t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"main-section",children:[Object(n.jsx)("h1",{children:"My Profile"}),Object(n.jsxs)("div",{className:"content-section",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"subtitle",children:" First name: "}),Object(n.jsx)("input",{id:"first_name",type:"text",onChange:function(e){return C(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.first_name})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Phone: "}),Object(n.jsx)("input",{id:"phonenumber",type:"text",onChange:function(e){return R(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.phonenumber?a.data.user.phonenumber:"-------"})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Country: "}),Object(n.jsx)("input",{id:"country",type:"text",onChange:function(e){return Z(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.country?a.data.user.country:"-------"})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Last name: "}),Object(n.jsx)("input",{id:"last_name",type:"text",onChange:function(e){return _(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.last_name})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Email: "}),Object(n.jsx)("input",{id:"email1",type:"text",onChange:function(e){return D(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.email})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" City: "}),Object(n.jsx)("input",{id:"city",type:"text",onChange:function(e){return J(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.city?a.data.user.city:"-------"})]})]}),Object(n.jsx)("button",{type:"submit",onClick:function(){$(function(e,t,a,n,r,c){return function(){var s=Object(N.a)(y.a.mark((function s(i){var o;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,S.a.post("https://techstar12.herokuapp.com/updateDet",{email:e,first_name:t,last_name:a,phonenumber:n,country:r,city:c});case 3:1==(o=s.sent).data.success?alert("Detailes updated successfully!"):console.log(o.data.status),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(e){return s.apply(this,arguments)}}()}(a.data.user.email,w,A,T,z,W))},children:"Update Detailes"})]}),Object(n.jsx)("h2",{children:"Update Password"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"updatepass-section",children:[Object(n.jsxs)("div",{className:"col pass-col",children:[Object(n.jsx)("input",{id:"password0",type:"password",onChange:function(e){return o(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Old Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password",type:"password",onChange:function(e){return j(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",onChange:function(e){return f(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsxs)("div",{className:"col pass-col",children:[Object(n.jsx)("p",{children:"* Both Password must match"}),Object(n.jsx)("p",{children:"* The password must contain at least one number"}),Object(n.jsx)("p",{children:"* The password must contain at least 6 characters"})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{type:"submit",onClick:function(){u===p?$(function(e,t,a){return function(){var n=Object(N.a)(y.a.mark((function n(r){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.post("https://techstar12.herokuapp.com/updatePass",{email:e,oldpass:t,newpass:a});case 3:!0===n.sent.data.success?(r(P()),O.push("/"),alert("Password has been changed successfully, please re-login.")):alert("The old password you have entered is wrong. Password hasn't changed"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(a.data.user.email,i,u)):alert("Both passwords should be identical.")},children:"Update Password"})})]})]})})}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"main-section",children:[Object(n.jsx)("h1",{children:" My Profile "}),Object(n.jsx)("h2",{children:" Please log-in ! "})]})})},me=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(Oe,{})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m.a,{store:H,children:Object(n.jsx)(D.c,{history:O,children:Object(n.jsxs)(D.d,{children:[Object(n.jsx)(D.b,{exact:!0,path:"/",component:L}),Object(n.jsx)(D.b,{path:"/SignIn",component:ae}),Object(n.jsx)(D.b,{path:"/SignUp",component:re}),Object(n.jsx)(D.b,{path:"/UpdatePass/:id/:token",component:se}),Object(n.jsx)(D.b,{path:"/ForgotPass",component:oe}),Object(n.jsx)(D.b,{path:"/About",component:ue}),Object(n.jsx)(D.b,{path:"/Constraction",component:be}),Object(n.jsx)(D.b,{path:"/profile",component:me}),Object(n.jsx)(D.b,{path:"/404",component:pe}),Object(n.jsx)(D.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.4ad5275d.chunk.js.map