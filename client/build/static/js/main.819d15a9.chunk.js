(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{174:function(e,t,a){e.exports=a(356)},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},185:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(179),a(4)),i=a(5),s=a(7),m=a(6),u=a(8);function d(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function p(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(180);var h=function(e){return r.a.createElement("div",{className:"card titles shadow-lg p-4 mb-5 bg-white rounded dashCard"},r.a.createElement("h2",null,e.title),e.children)};a(181);var v=function(){return r.a.createElement("footer",{className:"footer text-center sticky-bottom pt-3"},r.a.createElement("span",null,"Evently \xa9 2020"))};a(182);var E=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"listItem border border-dark rounded-pill"},r.a.createElement("a",{href:"#"},e.event),r.a.createElement("p",null,e.date)))},g=a(117),f=a(114),b=a.n(f),y=(a(185),a(186),Object(g.b)(b.a)),k=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));new Date;return a.state={name:"React"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"calContainer",style:{height:"500pt"}},r.a.createElement(g.a,{events:this.props.events,titleAccessor:"name",startAccessor:"dateStart",endAccessor:"dateEnd",defaultDate:b()().toDate(),localizer:y,drilldownView:"agenda",defaultView:"month",views:["month","agenda"]})))}}]),t}(n.Component),w=a(51),N=a.n(w),C=function(e){return console.log("inside getAllPrograms"),console.log(e),N.a.get("/api/programs/"+e)},O=function(e){return console.log("inside all events"),N.a.get("/api/events/"+e)},j=function(){console.log("inside of getUserInformation");var e=JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken;return console.log(e),N.a.get({url:"/api/users/information",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+e}})},x=a(21),S=a.n(x);a(205);var A=function(e){return r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:e.link},e.text," ",r.a.createElement("span",{className:"sr-only"})))};a(206);var P=a(88),I=a(24),q=a(32),T=a(50);a(207),a(208);var B=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.for},e.cleanname),r.a.createElement("input",{className:"form-control",id:e.id,type:e.type,name:e.name,onChange:e.onChange,cleanname:e.cleanname,placeholder:e.cleanname}))},F=a(59),R=a.n(F),z=a(16),D=Object(z.withAuth)(function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).checkAuthentication=function(){var t;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.awrap(e.props.auth.getIdToken());case 2:(t=a.sent)&&e.setState({sessionToken:t});case 4:case"end":return a.stop()}}))},e.componentDidUpdate=function(){e.checkAuthentication()},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;console.log(t.target),e.setState(Object(T.a)({},n,r))},e.togglePasswordVisbility=function(){e.setState((function(e){return{hidePassword:!e.hidePassword}}))},e.handleSubmit=function(t){t.preventDefault();var a={profile:{firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,login:e.state.email},credentials:{password:{value:e.state.password}}},n={dateOfBirth:e.state.dateOfBirth,street:e.state.street,zipcode:e.state.zipcode,city:e.state.city,stateCode:e.state.stateCode};N()({method:"post",url:"/api/users",data:{user:a,account:n}}).then((function(t){console.log(t),e.props.handleClose()})).catch((function(e){console.log(e)}))},e.state={email:"",password:"",hidePassword:!0,firstName:"",lastName:"",dateOfBirth:"",street:"",zipcode:"",city:"",stateCode:"",sessionToken:null},e.oktaAuth=new R.a({url:"https://dev-844753.okta.com"}),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"Profile"),r.a.createElement("hr",{className:"auth-section-divider"}),r.a.createElement("div",{className:"inline-input-container"},r.a.createElement(B,{name:"firstName",value:this.state.firstName,onChange:this.handleInputChange,type:"text",cleanname:"First name",inline:"true"}),r.a.createElement(B,{name:"lastName",value:this.state.firstName,onChange:this.handleInputChange,type:"text",cleanname:"Last name",inline:"true"})),r.a.createElement(B,{name:"dateOfBirth",value:this.state.dateOfBirth,onChange:this.handleInputChange,type:"date",cleanname:"Date of Birth"}),r.a.createElement(B,{name:"email",value:this.state.email,onChange:this.handleInputChange,type:"text",cleanname:"Email"}),r.a.createElement(B,{name:"password",value:this.state.password,onChange:this.handleInputChange,type:this.state.hidePassword?"password":"text",cleanname:"Password"}),r.a.createElement(B,{name:"auth-checkbox",cleanname:"Show Password",type:"checkbox",onChange:this.togglePasswordVisbility,checked:!this.state.hidePassword}),r.a.createElement("h4",null,"Address"),r.a.createElement("hr",{className:"auth-section-divider"}),r.a.createElement(B,{name:"street",value:this.state.street,onChange:this.handleInputChange,type:"text",cleanname:"Street"}),r.a.createElement(B,{name:"city",value:this.state.city,onChange:this.handleInputChange,type:"text",cleanname:"City"}),r.a.createElement("div",{className:"inline-input-container"},r.a.createElement(B,{name:"zipcode",value:this.state.zipcode,onChange:this.handleInputChange,type:"number",cleanname:"Zipcode",inline:"true"}),r.a.createElement(B,{name:"stateCode",value:this.state.stateCode,onChange:this.handleInputChange,type:"text",cleanname:"State Code",inline:"true"})),r.a.createElement("button",null,"Submit"))}}]),t}(n.Component));a(343);var _=function(e){var t=Object(n.useState)(!1),a=Object(P.a)(t,2),c=a[0],l=a[1],o=function(){return l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{variant:"primary",onClick:function(){return l(!0)}},"Sign Up"),r.a.createElement(I.a,{show:c,onHide:o},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,e.title)),r.a.createElement(I.a.Body,null,r.a.createElement(D,{handleClose:o})),r.a.createElement(I.a.Footer,null,r.a.createElement(q.a,{variant:"secondary",onClick:o},"Close"))))},U=(a(344),"".concat(window.location.origin,"/")),M=Object(z.withAuth)(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).logout=function(){var e;return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.awrap(a.props.auth.getIdToken());case 2:return e=t.sent,t.next=5,S.a.awrap(a.props.auth.logout("/"));case 5:window.location.href="".concat("https://dev-844753.okta.com/oauth2/default","/v1/logout?id_token_hint=").concat(e,"&post_logout_redirect_uri=").concat(U);case 6:case"end":return t.stop()}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(q.a,{onClick:this.logout},"Logout")}}]),t}(n.Component)),H=Object(z.withAuth)(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={authenticated:null},a.checkAuthentication(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkAuthentication",value:function(){var e;return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.awrap(this.props.auth.isAuthenticated());case 2:(e=t.sent)!==this.state.authenticated&&this.setState({authenticated:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return console.log(this.state.authenticated),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary"},this.props.children,r.a.createElement("a",{className:"navbar-brand landing-title",href:"/"},"Evently"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement(A,{link:"/features",text:"Features"}),r.a.createElement(A,{link:"/funtivity",text:"Fun Page"})),r.a.createElement("span",{className:"navbar-text"},this.state.authenticated?r.a.createElement(M,null):r.a.createElement(_,{title:"Sign Up",closeBtnText:"Sign up"}))))}}]),t}(n.Component)),L=[{event:"Race for the Cure",date:"April 17, 2020 at 3pm"},{event:"Community Yard Sale",date:"April 17, 2020 at 3pm"},{event:"Father Daughter Dance",date:"April 17, 2020 at 3pm"},{event:"CPR training",date:"April 17, 2020 at 3pm"}],V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={upcomingprogram:[],upcomingevent:[],programopen:!1,eventopen:!1,promo:[]},a.getUserInformation=function(){j().then((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getUserInformation()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center dashboard"}," Dashboard"),r.a.createElement(d,null,r.a.createElement(p,{size:"6"},r.a.createElement(h,{title:"Your upcoming events and programs:"},this.state.upcomingevent.map((function(e){return r.a.createElement(E,{event:e.name,date:e.dateStart})})),this.state.upcomingprogram.map((function(e){return r.a.createElement(E,{event:e.name,date:e.dateStart})})))),r.a.createElement(p,{size:"6"},r.a.createElement(h,{title:"Events you may be interested in:"},L.map((function(e){return r.a.createElement(E,{event:e.event})}))))),r.a.createElement(d,null,r.a.createElement(p,{size:"12"}))),r.a.createElement(v,null))}}]),t}(n.Component);a(345);var J=function(e){return r.a.createElement("div",null,e.children)};a(346);var W=function(e){return r.a.createElement("div",{className:"container"},e.children)},Y=a(26),G=Object(z.withAuth)(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r))},a.togglePasswordVisbility=function(){a.setState((function(e){return{hidePassword:!e.hidePassword}}))},a.handleSubmit=function(e){e.preventDefault(),a.oktaAuth.signIn({username:a.state.email,password:a.state.password}).then(a.onSuccess).catch((function(e){return console.log("Found an error",e)}))},a.state={email:"",password:"",hidePassword:!0,sessionToken:null},a.oktaAuth=new R.a({url:e.baseUrl}),a.onSuccess=e.onSuccess,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B,{name:"email",value:this.state.value,onChange:this.handleInputChange,type:"text",cleanname:"Email",id:"login-email",htmlFor:"login-email"}),r.a.createElement(B,{name:"password",value:this.state.value,onChange:this.handleInputChange,type:this.state.hidePassword?"password":"text",cleanname:"Password",id:"login-password",htmlFor:"login-password"}),r.a.createElement(B,{name:"auth-checkbox",cleanname:"Show Password",type:"checkbox",onChange:this.togglePasswordVisbility,checked:!this.state.hidePassword}),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Sign in"))}}]),t}(n.Component)),Z=Object(z.withAuth)(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onSuccess=function(e){if("SUCCESS"===e.status)return a.props.auth.redirect({sessionToken:e.sessionToken})},a.state={authenticated:null},a.checkAuthentication(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkAuthentication",value:function(){var e;return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.awrap(this.props.auth.isAuthenticated());case 2:(e=t.sent)!==this.state.authenticated&&this.setState({authenticated:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return null===this.state.authenticated?null:this.state.authenticated?r.a.createElement(Y.Redirect,{to:{pathname:"/"}}):r.a.createElement("div",null,r.a.createElement("h3",null,"Login"),r.a.createElement(G,{baseUrl:this.props.baseUrl,onSuccess:this.onSuccess,onError:this.onError}))}}]),t}(n.Component));a(347);var $=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid landingJumbo"},r.a.createElement(W,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",{className:"display-4"},e.mainText),r.a.createElement("p",{className:"lead"},e.smallText)),r.a.createElement("div",{className:"col-6"},r.a.createElement(Z,{baseUrl:"https://dev-844753.okta.com"})))))},X=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(H,null),r.a.createElement($,{mainText:"Welcome!",smallText:"This is some text that briefly describes what evently is about."}))}}]),t}(n.Component);a(348);var K=function(e){return r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement(W,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h1",{className:"display-4"},e.mainText),r.a.createElement("p",{className:"lead"},e.smallText),r.a.createElement("button",{type:"button",className:"btn btn-primary"},e.buttontext)))))};a(349);var Q=function(e){return r.a.createElement("div",{className:"card-columns"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:"https://place-hold.it/500",alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Online Registration"),r.a.createElement("p",{className:"card-text"},"Easily register for any event within your organization with our intuitive registration. Instantly become part of any event with a few clicks."))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Secure User Data"),r.a.createElement("p",{className:"card-text"},"You can have the peace of mind knowing all your valuable information is safe with our use of Square and Okta."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:"https://place-hold.it/500",alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Integrated Payments"),r.a.createElement("p",{className:"card-text"},"Easliy pay for any event as you register with our built-in Square payment system."))),r.a.createElement("div",{className:"card bg-primary text-white text-center p-3"},r.a.createElement("blockquote",{className:"blockquote mb-0"},r.a.createElement("p",null,'"All for one, one for all."'),r.a.createElement("p",null,"That's Evently."),r.a.createElement("footer",{className:"blockquote-footer"},r.a.createElement("small",null,"Alexandre Dumas")))),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Event Messaging"),r.a.createElement("p",{className:"card-text"},"Have a question about an upcoming event? Just message the event group with our built-in messaging system."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:"https://place-hold.it/500",alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"User Dashboard"),r.a.createElement("p",{className:"card-text"},"View all of your upcoming events at a glance with your personalized user dashboard."))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Live Look Calendar"),r.a.createElement("p",{className:"card-text"},"Easily view your events as well as all events for your club in a smooth flowing calendar view."),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))},ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(H,null),r.a.createElement(K,{mainText:"All of your events, togther in one place",smallText:"We make life easier for club and league commissioners, administrators, coaches and volunteers. And we do it by bringing everything into one integrated solution. From setting up registration or invoicing to getting the word out about your club or last-minute field changes, we get you up and running fast, put you in control and help you do it all. What can we say, we\u2019re the complete package",buttontext:"Contact us"}),r.a.createElement(W,null,r.a.createElement(Q,null)))}}]),t}(n.Component),te=a(63),ae=(a(350),a(41)),ne={name:{verticalAlign:"top",display:"none",margin:0,border:"none",fontSize:"16px",fontFamily:"Helvetica Neue",padding:"16px",color:"#373F4A",backgroundColor:"transparent",lineHeight:"1.15em",placeholderColor:"#000",_webkitFontSmoothing:"antialiased",_mozOsxFontSmoothing:"grayscale"},leftCenter:{float:"left",textAlign:"center"},blockRight:{display:"block",float:"right"},center:{textAlign:"center"}},re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={cardBrand:"",nonce:void 0,googlePay:!1,applePay:!1,masterpass:!1},a.requestCardNonce=a.requestCardNonce.bind(Object(ae.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"requestCardNonce",value:function(){this.paymentForm.requestCardNonce()}},{key:"componentDidMount",value:function(){var e=this,t={applicationId:"sandbox-sq0idb-___GqOJOEgvbEUelV8xgWA",locationId:"GMT96A77XABR1",inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",fontFamily:"Helvetica Neue",padding:"16px",color:"#373F4A",backgroundColor:"transparent",lineHeight:"1.15em",placeholderColor:"#000",_webkitFontSmoothing:"antialiased",_mozOsxFontSmoothing:"grayscale"}],applePay:{elementId:"sq-apple-pay"},masterpass:{elementId:"sq-masterpass"},googlePay:{elementId:"sq-google-pay"},cardNumber:{elementId:"sq-card-number",placeholder:"\u2022 \u2022 \u2022 \u2022  \u2022 \u2022 \u2022 \u2022  \u2022 \u2022 \u2022 \u2022  \u2022 \u2022 \u2022 \u2022"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY"},postalCode:{elementId:"sq-postal-code",placeholder:"Zip"},callbacks:{methodsSupported:function(t){t.googlePay&&e.setState({googlePay:t.googlePay}),t.applePay&&e.setState({applePay:t.applePay}),t.masterpass&&e.setState({masterpass:t.masterpass})},createPaymentRequest:function(){return{requestShippingAddress:!1,requestBillingInfo:!0,currencyCode:"USD",countryCode:"US",total:{label:"MERCHANT NAME",amount:"100",pending:!1},lineItems:[{label:"Subtotal",amount:"100",pending:!1}]}},cardNonceResponseReceived:function(t,a,n){if(t)return console.log("Encountered errors:"),void t.forEach((function(e){console.log("  "+e.message)}));e.setState({nonce:a}),fetch("api/payments/process",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({nonce:e.state.nonce})}).catch((function(e){alert("Network error: "+e)})).then((function(e){return e.ok?e.text():e.text().then((function(e){return Promise.reject(e)}))})).then((function(e){console.log(JSON.stringify(e)),alert("Payment complete successfully!\nCheck browser developer console for more details")})).catch((function(e){console.error(e),alert("Payment failed to complete!\nPlease try again or use another card.")}))},unsupportedBrowserDetected:function(){},inputEventReceived:function(t){switch(t.eventType){case"focusClassAdded":case"focusClassRemoved":break;case"errorClassAdded":document.getElementById("error").innerHTML="Please fix card information errors before continuing.";break;case"errorClassRemoved":document.getElementById("error").style.display="none";break;case"cardBrandChanged":"unknown"!==t.cardBrand?e.setState({cardBrand:t.cardBrand}):e.setState({cardBrand:""})}},paymentFormLoaded:function(){document.getElementById("name").style.display="inline-flex"}}};this.paymentForm=new this.props.paymentForm(t),this.paymentForm.build()}},{key:"render",value:function(){return r.a.createElement("div",{className:"pay-container"},r.a.createElement("div",{id:"form-container"},r.a.createElement("div",{id:"sq-walletbox"},r.a.createElement("button",{style:{display:this.state.applePay?"inherit":"none"},className:"wallet-button",id:"sq-apple-pay"}),r.a.createElement("button",{style:{display:this.state.masterpass?"block":"none"},className:"wallet-button",id:"sq-masterpass"}),r.a.createElement("button",{style:{display:this.state.googlePay?"inherit":"none"},className:"wallet-button",id:"sq-google-pay"}),r.a.createElement("hr",null)),r.a.createElement("div",{id:"sq-ccbox"},r.a.createElement("p",null,r.a.createElement("span",{style:ne.leftCenter},"Enter Card Info Below "),r.a.createElement("span",{style:ne.blockRight},this.state.cardBrand.toUpperCase())),r.a.createElement("div",{id:"cc-field-wrapper"},r.a.createElement("div",{id:"sq-card-number"}),r.a.createElement("input",{type:"hidden",id:"card-nonce",name:"nonce"}),r.a.createElement("div",{id:"sq-expiration-date"}),r.a.createElement("div",{id:"sq-cvv"})),r.a.createElement("input",{id:"name",style:ne.name,type:"text",placeholder:"Name"}),r.a.createElement("div",{id:"sq-postal-code"})),r.a.createElement("button",{className:"button-credit-card",onClick:this.requestCardNonce},"Pay")),r.a.createElement("p",{style:ne.center,id:"error"}))}}]),t}(n.Component),ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={loaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=document.createElement("script");t.src="https://js.squareupsandbox.com/v2/paymentform",t.type="text/javascript",t.async=!1,t.onload=function(){e.setState({loaded:!0})},document.getElementsByTagName("head")[0].appendChild(t)}},{key:"render",value:function(){return this.state.loaded&&r.a.createElement(re,{paymentForm:window.SqPaymentForm})}}]),t}(n.Component);a(351);var le=function(e){var t=Object(n.useState)(!1),a=Object(P.a)(t,2),c=a[0],l=a[1],o=function(){return l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{variant:"primary",onClick:function(){return l(!0)}},"Register"),r.a.createElement(I.a,{show:c,onHide:o},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,e.title)),r.a.createElement(I.a.Body,null,r.a.createElement("p",null,e.body),r.a.createElement("p",null,e.statement),r.a.createElement(ce,null)),r.a.createElement(I.a.Footer,null,r.a.createElement(q.a,{variant:"secondary",onClick:o},"Close"),r.a.createElement(q.a,{variant:"primary",onClick:o},e.closeBtnText))))};a(352);var oe=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card title shadow-sm p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.event),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.location),r.a.createElement("p",{className:"card-text"},e.description),r.a.createElement("h4",null,r.a.createElement("strong",null,"Price: $",e.price)),r.a.createElement(le,{title:"Register for "+e.event,body:"Cost: $"+e.price,statement:"Please enter your card information with Square Pay to register.",closeBtnText:"Register"}))))};a(353);var ie=function(e){return r.a.createElement("div",{className:"block-example border border-dark borderStyle"},e.children,"   ")};a(354);var se=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading text-center "},e.heading))},me=(a(355),a(359)),ue=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={organizationid:"5e35c71607cf87e4497c41a9",programs:[],events:[],programopen:!1,eventopen:!1},a.getPrograms=function(){C(a.state.organizationid).then((function(e){a.setState({programs:e.data})}))},a.getEvents=function(){O(a.state.organizationid).then((function(e){a.setState({events:e.data})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleCollapse",value:function(e){this.setState(Object(T.a)({},e,!this.state[e]))}},{key:"componentDidMount",value:function(){this.getPrograms(),this.getEvents()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{className:"container"},r.a.createElement(ie,null,r.a.createElement(se,{heading:"Programs"}),r.a.createElement("div",null,this.state.programs.length<=3?this.state.programs.map((function(e){return r.a.createElement(oe,{key:e._id,event:e.name,description:e.description,date:e.dateStart,price:e.price})})):r.a.createElement(d,null,Object(te.a)(this.state.programs).splice(0,3).map((function(e){return r.a.createElement(oe,{key:e._id,event:e.name,description:e.description,date:e.dateStart,price:e.price})})),r.a.createElement(me.a,{in:this.state.programopen},r.a.createElement("div",{id:"program-collapse"},r.a.createElement(d,null,Object(te.a)(this.state.programs).splice(3).map((function(e){return r.a.createElement(oe,{key:e._id,event:e.name,description:e.description,date:e.dateStart,price:e.price})}))))),r.a.createElement(q.a,{className:"collapsedButton",onClick:function(){return e.handleCollapse("programopen")},"aria-expanded":this.state.programopen,"aria-controls":"program-collapse"},this.state.programopen?"See Less":"See More")))),r.a.createElement(ie,null,r.a.createElement(se,{heading:"Events"}),r.a.createElement("div",null,this.state.events.length<=3?this.state.events.map((function(e){return r.a.createElement(oe,{key:e._id,event:e.name,description:e.description,date:e.dateStart,price:e.price})})):r.a.createElement(d,null,Object(te.a)(this.state.events).splice(0,3).map((function(e){return r.a.createElement(oe,{key:e._id,event:e.name,description:e.description,date:e.dateStart,price:e.price})})),r.a.createElement(me.a,{in:this.state.eventopen},r.a.createElement("div",{id:"program-collapse"},r.a.createElement(d,null,Object(te.a)(this.state.events).splice(3).map((function(e){return r.a.createElement(oe,{key:e._id,event:e.name,description:e.description,date:e.dateStart,price:e.price})}))))),r.a.createElement(q.a,{className:"collapsedButton",onClick:function(){return e.handleCollapse("eventopen")},"aria-expanded":this.state.eventopen,"aria-controls":"program-collapse"},this.state.eventopen?"See Less":"See More")))),r.a.createElement(ie,null,r.a.createElement(se,{heading:" Fun Calendar"}),r.a.createElement(d,null,r.a.createElement(p,{size:"12"},r.a.createElement(k,{events:this.state.events}))))),r.a.createElement(v,null))}}]),t}(n.Component),de=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(ce,null))}}]),t}(n.Component),pe=a(112);function he(e){e.history.push("/login")}var ve=function(){return r.a.createElement(pe.a,null,r.a.createElement(z.Security,{issuer:"https://dev-844753.okta.com/oauth2/default",clientId:"0oa19phl3wEn9R1iI4x6",redirect_uri:window.location.origin+"/implicit/callback",onAuthRequired:he,response_type:"id_token"},r.a.createElement(Y.Route,{exact:!0,path:"/",component:X}),r.a.createElement(z.SecureRoute,{exact:!0,path:"/dashboard",component:V}),r.a.createElement(Y.Route,{exact:!0,path:"/features",component:ee}),r.a.createElement(z.SecureRoute,{exact:!0,path:"/funtivity",component:ue}),r.a.createElement(Y.Route,{path:"/implicit/callback",component:z.ImplicitCallback}),r.a.createElement(Y.Route,{path:"/login",render:function(){return r.a.createElement(Z,{baseUrl:"https://dev-844753.okta.com"})}}),r.a.createElement(z.SecureRoute,{path:"/pay",component:de})))};l.a.render(r.a.createElement(ve,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.819d15a9.chunk.js.map