(this["webpackJsonppanorbit-assignment"]=this["webpackJsonppanorbit-assignment"]||[]).push([[0],{43:function(e,t,a){e.exports=a(88)},48:function(e,t,a){},49:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getUserList",(function(){return g})),a.d(n,"getUserListSuccess",(function(){return O})),a.d(n,"getUserData",(function(){return j}));var r=a(0),c=a.n(r),s=a(15),l=a.n(s),i=(a(48),a(49),a(20)),o=a(2),m=a(10),u=a(11),d=a(13),v=a(12),p=a(16),E=a(8),f=a(26),b=a.n(f),h=a(39),N=a(40),y=a.n(N),g=function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://panorbit.in/api/users.json");case 2:a=e.sent,t(O(a.data.users));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return{type:"GET_USER_LIST_SUCCESS",res:e}},j=function(e){return{type:"GET_USER_DATA",userId:e}},S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.actions.getUserList().then((function(){console.log(e.props.users),e.setState({users:e.props.users})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-cont"},c.a.createElement("div",{className:"user-list-cont"},c.a.createElement("div",{className:"list-header"},"Select an account"),c.a.createElement("div",{className:"list-body"},this.state.users.map((function(e,t){return c.a.createElement(i.b,{className:"list-item",key:t,to:"/profile/"+e.id},c.a.createElement("div",{className:"item-img",style:{backgroundImage:"url("+e.profilepicture+")"}}),c.a.createElement("div",null,e.name))})))))}}]),a}(r.Component),w=Object(p.b)((function(e){return{users:e.users.users}}),(function(e){return{actions:Object(E.bindActionCreators)(n,e)}}))(S),k=a(29),_={width:"650px",height:"400px",borderRadius:"1rem",margin:"1rem"},C={position:"relative",width:"100%",height:"100%"},U=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(k.Map,{google:this.props.google,zoom:14,style:_,containerStyle:C,initialCenter:{lat:-1.2884,lng:36.8233}})}}]),a}(r.Component),A=Object(k.GoogleApiWrapper)({apiKey:"YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE"})(U),I=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-header-cont"},c.a.createElement("div",null,"Page Name"),c.a.createElement("div",null,"Profile"))}}]),a}(r.Component),D=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={menuItems:[{id:0,name:"Profile",active:!0},{id:1,name:"Posts"},{id:2,name:"Gallery"},{id:3,name:"ToDo"}]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"sidebar-cont"},this.state.menuItems.map((function(e){return c.a.createElement("div",{className:"sidebar-item "+(e.active?"active":""),key:e.id},c.a.createElement("span",{className:"item-title"},e.name),e.active?c.a.createElement("span",{className:"active-icon"}," * "):"")})))}}]),a}(r.Component),T=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userData:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a=parseInt(t.userId,10);this.props.actions.getUserList().then((function(){var t=e.props.users.find((function(e){return e.id===a}));e.setState({users:e.props.users,userData:t})}))}},{key:"render",value:function(){var e=this.state.userData;return c.a.createElement("div",{className:"profile-cont"},c.a.createElement(D,null),c.a.createElement("div",{className:"main-cont"},c.a.createElement(I,null),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"profile-det-cont"},c.a.createElement("div",{className:"profile-image",style:{backgroundImage:"url("+e.profilepicture+")"}}),c.a.createElement("div",null,c.a.createElement("strong",null,e.name)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Username : "),c.a.createElement("div",{className:"value"}," ",e.username)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"E-mail : "),c.a.createElement("div",{className:"value"}," ",e.email)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Phone : "),c.a.createElement("div",{className:"value"}," ",e.phone)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Website : "),c.a.createElement("div",{className:"value"}," ",e.website)),c.a.createElement("div",{className:"det-item border-top"},c.a.createElement("div",{className:"label"},"Company ")),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Name : "),c.a.createElement("div",{className:"value"},e.company&&e.company.name)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"catchPhrase : "),c.a.createElement("div",{className:"value"},e.company&&e.company.catchPhrase)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"bs : "),c.a.createElement("div",{className:"value"},e.company&&e.company.bs))),c.a.createElement("div",{className:"profile-map-cont "},c.a.createElement("div",{className:"profile-det-cont"},c.a.createElement("div",{className:"det-item "},c.a.createElement("div",{className:"label"},"Address "),c.a.createElement("div",{className:"value"})),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Street : "),c.a.createElement("div",{className:"value"},e.address&&e.address.street)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Suite : "),c.a.createElement("div",{className:"value"},e.address&&e.address.suite)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"City : "),c.a.createElement("div",{className:"value"},e.address&&e.address.city)),c.a.createElement("div",{className:"det-item"},c.a.createElement("div",{className:"label"},"Zipcode : "),c.a.createElement("div",{className:"value"},e.address&&e.address.zipcode))),c.a.createElement(A,null)))))}}]),a}(r.Component),G=Object(p.b)((function(e){return{users:e.users.users}}),(function(e){return{actions:Object(E.bindActionCreators)(n,e)}}))(T);var P=function(){return c.a.createElement(i.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/profile/:userId",component:G}),c.a.createElement(o.a,{path:"/",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(41),R=a(42),x=function(e){return function(t,a,n){return e((function(e,a){var n,r=performance.now(),c=t(e,a),s=performance.now(),l=(n=s-r,Math.round(100*n)/100);return console.log("reducer process time:",l),c}),a,n)}},L=function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}},W=a(18),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_LIST_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{users:t.res});case"GET_USER_DATA":return Object(W.a)(Object(W.a)({},e),{},{activeUser:e.users.find((function(e){return e.id===t.userId}))});default:return e}},B=Object(E.combineReducers)({users:z});var J=function(e){var t=[L,M.a],a=[E.applyMiddleware.apply(void 0,t),x],n=R.composeWithDevTools.apply(void 0,a);return Object(E.createStore)(B,e,n)}({});l.a.render(c.a.createElement(p.a,{store:J},c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.c655926a.chunk.js.map