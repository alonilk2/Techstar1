(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(19),i=a.n(s),o=(a(81),a(7)),l=a(8),d=a(10),j=a(9),u=(a(82),a(59),a(124)),b=a(123),h=(a(83),a.p+"static/media/logo.23f3f658.png"),p=a(70),O=Object(p.a)(),m=a(12),f=(a(88),a.p+"static/media/avatar.5fedd648.png"),x=a(26),v=a.n(x),g=a(33),y=a.n(g),N=a(46),S=a(37),w=a.n(S),C="USER_SIGNIN_FAILED",E="USER_SIGNUP_FAILED";var k=a(34);var A=function(e){var t=v.a.get("userInstance"),a=Object(m.b)();if(t){var r=JSON.parse(t);return console.log(r),Object(n.jsxs)(k.a,{className:"user-instance",children:[Object(n.jsx)("img",{className:"avatar",src:f,alt:"profile picture"}),Object(n.jsxs)(k.a.Toggle,{id:"dropdown-basic",children:["Hello ",r.data.user.first_name]}),Object(n.jsxs)(k.a.Menu,{children:[Object(n.jsx)(k.a.Item,{href:"#/action-1",children:"My Profile"}),Object(n.jsx)(k.a.Item,{href:"/",onClick:function(){a((function(e){v.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})}return Object(n.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(n.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Login"}),Object(n.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-parent",children:Object(n.jsxs)(u.a,{expand:"lg",children:[Object(n.jsx)(u.a.Brand,{href:"/",children:Object(n.jsx)("img",{src:h,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(n.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsx)(b.a,{className:"mr-auto"}),Object(n.jsx)(A,{})]})]})})}}]),a}(r.Component),I=(a(111),a(35));var _=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(I.a,{style:{width:"18rem"},children:[Object(n.jsx)(I.a.Img,{variant:"top",src:"./"+e.imagePath}),Object(n.jsxs)(I.a.Body,{children:[Object(n.jsx)(I.a.Title,{children:e.title}),Object(n.jsxs)(I.a.Text,{children:["Click here to see more ",e.title]}),Object(n.jsx)("a",{href:"/Constraction",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Find out more"})]})]})})},U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).categoryList=function(){if(r.state.categories)return r.state.categories.map((function(e){return Object(n.jsx)(_,{title:e.Name,imagePath:e.imagePath},e.Name)}))},r.state={categories:[]},r}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoryList=this.categoryList.bind(this),e.prev=1,e.next=4,w.a.post("https://techstar12.herokuapp.com/fetch_categories");case 4:t=e.sent,console.log(t),t.data.success?(this.setState({categories:t.data.result}),console.log(this.state.categories)):console.log("Error: could not fetch category list from server."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{className:"HomePagecontainer",children:Object(n.jsx)("div",{className:"row",children:this.categoryList()})})}}]),a}(r.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(U,{})]})}}]),a}(r.Component),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(T,{})})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(118),L=a(32),G=a(74),D="USER_SIGNIN_ATTEMPT",B="USER_SIGNIN_SUCCESS",q="USER_SIGNIN_FAILED",z="USER_SIGNUP_ATTEMPT",Z="USER_SIGNUP_SUCCESS",J="USER_SIGNUP_FAILED",M="USER_SIGNOUT_SUCCESS";var W=v.a.getJSON("userInstance")||null,V=0;V=W?{loggedin:!0,user:W}:{};var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,Y=Object(L.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{logging:!0};case B:return{logging:!1,loggedin:!0,user:t.payload};case q:return{logging:!1,loggedin:!1,error:t.payload};case z:return{registering:!0};case Z:return{registering:!1,loggedin:!0,user:t.payload};case J:return{registering:!1,loggedin:!1,error:t.payload};case M:return{loggedin:!1,user:null,error:null};default:return e}}),V,X(Object(L.a)(G.a))),$=a(15),H=(a(112),a(27)),K=a(52);var Q=function(e){var t=Object(r.useState)(""),a=Object($.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object($.a)(o,2),d=l[0],j=l[1],u=Object(m.b)(),b=Object(m.c)((function(e){return e.error})),h=c.a.createRef();return Object(F.e)(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignIncontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignIn",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),w.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),v.a.set("userInstance",JSON.stringify(e)),O.push("/")):0===e.data.error?a({type:C,payload:0}):1===e.data.error&&a({type:C,payload:1})})).catch((function(e){a({type:C,payload:e})}))}}(s,d)),function(){var e=h.current.getValue();this.props.onSubmit(e),document.getElementById("my_captcha_form").addEventListener("submit",(function(e){if(0==H.a.getResponse().length)return alert("please verify you are humann!"),e.preventDefault(),!1}))}()},autocomplete:"on",children:[0===b&&Object(n.jsx)(K.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(n.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(n.jsxs)("div",{className:"email-field",children:[Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(n.jsxs)("div",{className:"password-field",children:[Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return j(e.target.value)},"aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"SignInButton",type:"submit",href:"/",children:"Sign-In"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(n.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})}),Object(n.jsx)(H.a,{ref:h,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},ee=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(Q,{})]})}}]),a}(r.Component);a(114);var te=function(e){var t=Object(r.useState)(""),a=Object($.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object($.a)(o,2),d=l[0],j=l[1],u=Object(r.useState)(""),b=Object($.a)(u,2),h=b[0],p=b[1],f=Object(r.useState)(""),x=Object($.a)(f,2),g=x[0],S=x[1],C=Object(r.useState)(""),k=Object($.a)(C,2),A=k[0],P=k[1],I=c.a.createRef(),_=Object(m.c)((function(e){return e.error})),U=Object(m.b)();function T(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignUpcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignUp",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)&&T(g)&&T(A)&&function(){var e=I.current.getValue();this.props.onSubmit(e),document.getElementById("my_captcha_form").addEventListener("submit",(function(e){return 0!=H.a.getResponse().length||(alert("please verify you are humann!"),e.preventDefault(),!1)}))}()){if(d!==h)return alert("The passwords do not match"),!1;U(function(e,t,a,n){return function(){var r=Object(N.a)(y.a.mark((function r(c){var s;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"USER_SIGNUP_ATTEMPT",payload:{}}),r.prev=1,r.next=4,w.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:n});case 4:(s=r.sent).data.success?(c({type:"USER_SIGNUP_SUCCESS",payload:s}),v.a.set("userInstance",JSON.stringify(s)),O.push("/")):0===s.data.error?c({type:E,payload:0}):1===s.data.error&&c({type:E,payload:1}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c({type:E,payload:r.t0});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(s,d,g,A))}},children:[0===_&&Object(n.jsx)(K.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(n.jsx)("p",{id:"title",children:"Sign Up"}),Object(n.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return S(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(n.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return P(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return p(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(n.jsx)("a",{href:"/SignIn",children:"Sign-In"})," "]})}),Object(n.jsx)(H.a,{ref:I,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)},id:"my_captcha_form"})]})})})})})},ae=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(te,{})]})}}]),a}(r.Component);a(115);var ne=function(e){var t=Object(r.useState)(""),a=Object($.a)(t,2),c=(a[0],a[1],Object(r.useState)("")),s=Object($.a)(c,2);return s[0],s[1],Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"UpdatePassword",children:Object(n.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Update Password"}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e||(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},re=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(ne,{})]})}}]),a}(r.Component);a(116);var ce=function(e){var t=Object(r.useState)(""),a=Object($.a)(t,2),s=(a[0],a[1],Object(r.useState)("")),i=Object($.a)(s,2),o=(i[0],i[1],c.a.createRef());return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ForgotContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"Forgot",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"ForgotForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Reset Password"}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:"onClickReset()",children:"Reset Password"})}),Object(n.jsx)(H.a,{ref:o,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})})},se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(ce,{})]})}}]),a}(r.Component),ie=(a(69),a.p+"static/media/FinalTask.17e43989.pdf");var oe=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"AboutContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"About",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"About"}),Object(n.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(n.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(n.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(n.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(n.jsx)("p",{id:"subTitle",children:"Website"}),Object(n.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("a",{href:ie,target:"_blank",children:"Privacy Policy & Terms"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(oe,{})]})}}]),a}(r.Component);a(41);var de=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},je=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(de,{})]})}}]),a}(r.Component);var ue=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"404 page"}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Home Page"})]})]})})})})})},be=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(ue,{})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m.a,{store:Y,children:Object(n.jsx)(F.c,{history:O,children:Object(n.jsxs)(F.d,{children:[Object(n.jsx)(F.b,{exact:!0,path:"/",component:R}),Object(n.jsx)(F.b,{path:"/SignIn",component:ee}),Object(n.jsx)(F.b,{path:"/SignUp",component:ae}),Object(n.jsx)(F.b,{path:"/UpdatePass",component:re}),Object(n.jsx)(F.b,{path:"/ForgotPass",component:se}),Object(n.jsx)(F.b,{path:"/About",component:le}),Object(n.jsx)(F.b,{path:"/Constraction",component:je}),Object(n.jsx)(F.b,{path:"/404",component:be}),Object(n.jsx)(F.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){},59:function(e,t,a){},69:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.f3576391.chunk.js.map