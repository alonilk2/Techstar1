(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),s=a(20),i=a.n(s),o=(a(81),a(7)),l=a(8),d=a(10),j=a(9),u=(a(82),a(60),a(125)),b=a(124),h=(a(83),a.p+"static/media/logo.23f3f658.png"),p=a(70),O=Object(p.a)(),m=a(12),f=(a(88),a.p+"static/media/avatar.5fedd648.png"),x=a(23),v=a.n(x),g=a(24),y=a.n(g),N=a(35),w=a(32),S=a.n(w),C="USER_SIGNIN_FAILED",P="USER_SIGNUP_FAILED";var k=a(36);var E=function(e){var t=v.a.get("userInstance"),a=Object(m.b)();if(t){var n=JSON.parse(t);return console.log(n),Object(r.jsxs)(k.a,{className:"user-instance",children:[Object(r.jsx)("img",{className:"avatar",src:f,alt:"profile picture"}),Object(r.jsxs)(k.a.Toggle,{id:"dropdown-basic",children:["Hello ",n.data.user.first_name]}),Object(r.jsxs)(k.a.Menu,{children:[Object(r.jsx)(k.a.Item,{href:"#/action-1",children:"My Profile"}),Object(r.jsx)(k.a.Item,{href:"/",onClick:function(){a((function(e){v.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})}return Object(r.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(r.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Sign In"}),Object(r.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"navbar-parent",children:Object(r.jsxs)(u.a,{expand:"lg",children:[Object(r.jsx)(u.a.Brand,{href:"/",children:Object(r.jsx)("img",{src:h,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(r.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(b.a,{className:"mr-auto"}),Object(r.jsx)(E,{})]})]})})}}]),a}(n.Component),A=(a(111),a(37));var I=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)(A.a,{style:{width:"18rem"},children:[Object(r.jsx)(A.a.Img,{variant:"top",src:"./"+e.imagePath}),Object(r.jsxs)(A.a.Body,{children:[Object(r.jsx)(A.a.Title,{children:e.title}),Object(r.jsxs)(A.a.Text,{children:["Click here to see more ",e.title]}),Object(r.jsx)("a",{href:"/Constraction",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Find out more"})]})]})})},_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).categoryList=function(){if(n.state.categories)return n.state.categories.map((function(e){return Object(r.jsx)(I,{title:e.Name,imagePath:e.imagePath},e.Name)}))},n.state={categories:[]},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoryList=this.categoryList.bind(this),e.prev=1,e.next=4,S.a.post("https://techstar12.herokuapp.com/fetch_categories");case 4:(t=e.sent).data.success?(this.setState({categories:t.data.result}),console.log(this.state.categories)):console.log("Error: could not fetch category list from server."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsx)("div",{className:"HomePagecontainer",children:Object(r.jsx)("div",{className:"row",children:this.categoryList()})})}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(_,{})]})}}]),a}(n.Component),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(T,{})})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(119),L=a(34),G=a(74),D="USER_SIGNIN_ATTEMPT",q="USER_SIGNIN_SUCCESS",B="USER_SIGNIN_FAILED",M="USER_SIGNUP_ATTEMPT",z="USER_SIGNUP_SUCCESS",J="USER_SIGNUP_FAILED",Z="USER_SIGNOUT_SUCCESS";var W=v.a.getJSON("userInstance")||null,V=0;V=W?{loggedin:!0,user:W}:{};var Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,X=Object(L.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{logging:!0};case q:return{logging:!1,loggedin:!0,user:t.payload};case B:return{logging:!1,loggedin:!1,error:t.payload};case M:return{registering:!0};case z:return{registering:!1,loggedin:!0,user:t.payload};case J:return{registering:!1,loggedin:!1,error:t.payload};case Z:return{loggedin:!1,user:null,error:null};default:return e}}),V,Y(Object(L.a)(G.a))),$=a(11),H=(a(112),a(31)),K=a(52);var Q=function(e){var t=Object(n.useState)(""),a=Object($.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(""),l=Object($.a)(o,2),d=l[0],j=l[1],u=Object(m.b)(),b=Object(m.c)((function(e){return e.error})),h=c.a.createRef();return Object(F.e)(),Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"SignIncontainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"SignIn",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),S.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),v.a.set("userInstance",JSON.stringify(e)),O.push("/")):0===e.data.error?a({type:C,payload:0}):1===e.data.error&&a({type:C,payload:1})})).catch((function(e){a({type:C,payload:e})}))}}(s,d)),function(){var e=h.current.getValue();this.props.onSubmit(e),document.getElementById("my_captcha_form").addEventListener("submit",(function(e){if(0==H.a.getResponse().length)return alert("please verify you are humann!"),e.preventDefault(),!1}))}()},autocomplete:"on",children:[0===b&&Object(r.jsx)(K.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(r.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(r.jsxs)("div",{className:"email-field",children:[Object(r.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(r.jsxs)("div",{className:"password-field",children:[Object(r.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return j(e.target.value)},"aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"SignInButton",type:"submit",href:"/",children:"Sign-In"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(r.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})}),Object(r.jsx)(H.a,{ref:h,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},ee=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(Q,{})]})}}]),a}(n.Component);a(114);var te=function(e){var t=Object(n.useState)(""),a=Object($.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(""),l=Object($.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(""),b=Object($.a)(u,2),h=b[0],p=b[1],f=Object(n.useState)(""),x=Object($.a)(f,2),g=x[0],w=x[1],C=Object(n.useState)(""),k=Object($.a)(C,2),E=k[0],U=k[1],A=Object(n.useState)("not fired"),I=Object($.a)(A,2),_=(I[0],I[1],Object(n.useState)("[empty]")),T=Object($.a)(_,2),R=T[0],F=T[1],L=Object(n.useState)(!1),G=Object($.a)(L,2),D=(G[0],G[1],Object(n.useState)("false")),q=Object($.a)(D,2),B=(q[0],q[1]),M=c.a.createRef(),z=Object(m.c)((function(e){return e.error})),J=Object(m.b)();function Z(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"SignUpcontainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"SignUp",children:Object(r.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)&&Z(g)&&Z(E)&&"[empty]"!=R?d!==h?(alert("The passwords do not match"),!1):void J(function(e,t,a,r){return function(){var n=Object(N.a)(y.a.mark((function n(c){var s;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:"USER_SIGNUP_ATTEMPT",payload:{}}),n.prev=1,n.next=4,S.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:r});case 4:(s=n.sent).data.success?(c({type:"USER_SIGNUP_SUCCESS",payload:s}),v.a.set("userInstance",JSON.stringify(s)),O.push("/")):0===s.data.error?c({type:P,payload:0}):1===s.data.error&&c({type:P,payload:1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),c({type:P,payload:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(s,d,g,E)):(alert("You have to verify the Recaptcha !"),!1)},children:[0===z&&Object(r.jsx)(K.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(r.jsx)("p",{id:"title",children:"Sign Up"}),Object(r.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return w(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(r.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return U(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(r.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(r.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return p(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(r.jsx)("a",{href:"/SignIn",children:"Sign-In"})," "]})}),Object(r.jsx)(H.a,{ref:M,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),F(e),null==e&&B(!0)},id:"my_captcha_form"})]})})})})})},ae=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(te,{})]})}}]),a}(n.Component);a(115);var re=function(e){var t=Object(n.useState)(""),a=Object($.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),s=Object($.a)(c,2);return s[0],s[1],Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"UpdatePassword",children:Object(r.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"Update Password"}),Object(r.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e||(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},ne=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(re,{})]})}}]),a}(n.Component);a(116);var ce=function(e){var t=Object(n.useState)(""),a=Object($.a)(t,2),s=a[0],i=a[1],o=c.a.createRef(),l=Object(m.b)();return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"ForgotContainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"Forgot",children:Object(r.jsx)("div",{className:"col login-left",children:Object(r.jsxs)("form",{onSubmit:function(){var e,t,a;l((e=s,t="Reset Password",a="Please enter this URL to change password: ",function(){var r=Object(N.a)(y.a.mark((function r(n){var c;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S.a.post("https://techstar12.herokuapp.com/sendMail",{email:e,subject:t,text:a});case 3:(c=r.sent).data.error&&console.log(c.data.status),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()))},children:[Object(r.jsx)("p",{id:"title",children:"Reset Password"}),Object(r.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",children:"Reset Password"})}),Object(r.jsx)(H.a,{ref:o,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})})},se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(ce,{})]})}}]),a}(n.Component),ie=(a(56),a.p+"static/media/FinalTask.17e43989.pdf");var oe=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"AboutContainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"About",children:Object(r.jsx)("div",{className:"col login-left",children:Object(r.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"About"}),Object(r.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(r.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(r.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(r.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(r.jsx)("p",{id:"subTitle",children:"Website"}),Object(r.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("a",{href:ie,target:"_blank",children:"Privacy Policy & Terms"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(oe,{})]})}}]),a}(n.Component);a(42);var de=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"ConstractionContainer",children:Object(r.jsx)("div",{id:"Constractionform",children:Object(r.jsx)("div",{className:"col login-left-Constraction",children:Object(r.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(r.jsxs)("div",{className:"constract",children:["Return to ",Object(r.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},je=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(de,{})]})}}]),a}(n.Component);var ue=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"ConstractionContainer",children:Object(r.jsx)("div",{id:"Constractionform",children:Object(r.jsx)("div",{className:"col login-left-Constraction",children:Object(r.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"404 page"}),Object(r.jsxs)("div",{className:"constract",children:["Return to ",Object(r.jsx)("a",{href:"/",children:"Home Page"})]})]})})})})})},be=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(ue,{})]})}}]),a}(n.Component);a(117);var he=function(e){var t=v.a.get("userInstance"),a=Object(n.useState)(""),c=Object($.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object($.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(""),b=Object($.a)(u,2),h=b[0],p=b[1],O=Object(m.b)();if(t){var f=JSON.parse(t);return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{id:"main-section",children:[Object(r.jsx)("h1",{children:" My Profile "}),Object(r.jsxs)("div",{className:"content-section",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("p",{className:"col subtitle",children:" First name: "}),Object(r.jsx)("p",{className:"col subtitle",children:" Phone: "}),Object(r.jsx)("p",{className:"col subtitle",children:" Country: "})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"col subtitle",children:[" ",f.data.user.first_name," "]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",f.data.user.phonenumber?f.data.user.phonenumber:"-------"]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",f.data.user.country?f.data.user.country:"-------"]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("p",{className:"col subtitle",children:" Last name: "}),Object(r.jsx)("p",{className:"col subtitle",children:" Email: "}),Object(r.jsx)("p",{className:"col subtitle",children:" City: "})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"col subtitle",children:[" ",f.data.user.last_name]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",f.data.user.email]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",f.data.user.city?f.data.user.city:"-------"]})]})]}),Object(r.jsx)("div",{className:"updatepass-section",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"Update Password"}),Object(r.jsx)("input",{id:"password",type:"password",onChange:function(e){return i(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Old Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password",type:"password",onChange:function(e){return j(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password1",type:"password",onChange:function(e){return p(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){d===h?O(function(e,t,a){return function(){var r=Object(N.a)(y.a.mark((function r(n){var c;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S.a.post("https://techstar12.herokuapp.com/updatePass",{email:e,oldpass:t,newpass:a});case 3:(c=r.sent).data.error&&console.log(c.data.status),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}(f.data.user.email,s,d)):alert("Both passwords should be identical.")},children:"Update Password"})})]})})})]})})}return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"main-section",children:Object(r.jsx)("h1",{children:" My Profile "})})})},pe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{}),Object(r.jsx)(he,{})]})}}]),a}(n.Component);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m.a,{store:X,children:Object(r.jsx)(F.c,{history:O,children:Object(r.jsxs)(F.d,{children:[Object(r.jsx)(F.b,{exact:!0,path:"/",component:R}),Object(r.jsx)(F.b,{path:"/SignIn",component:ee}),Object(r.jsx)(F.b,{path:"/SignUp",component:ae}),Object(r.jsx)(F.b,{path:"/UpdatePass",component:ne}),Object(r.jsx)(F.b,{path:"/ForgotPass",component:se}),Object(r.jsx)(F.b,{path:"/About",component:le}),Object(r.jsx)(F.b,{path:"/Constraction",component:je}),Object(r.jsx)(F.b,{path:"/profile",component:pe}),Object(r.jsx)(F.b,{path:"/404",component:be}),Object(r.jsx)(F.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.61703ad2.chunk.js.map