(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,s,t){e.exports={messages:"Dialogs_messages__1w_Up",dialogs:"Dialogs_dialogs__2xRSA",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",currentDialog:"Dialogs_currentDialog__3vRb1"}},,function(e,s,t){e.exports={nav:"Nav_nav__1eId6",activeLink:"Nav_activeLink__U7gR5"}},,function(e,s,t){e.exports={sidebar:"Sidebar_sidebar__2WupE",menu:"Sidebar_menu__1HeL0",friends:"Sidebar_friends__18f4t"}},,,,,,,,,,,function(e,s,t){e.exports={header:"Header_header__1VCKf"}},function(e,s,t){e.exports={profile:"Profile_profile__3dzvr"}},function(e,s,t){e.exports={profileInfo:"ProfileInfo_profileInfo__11KLK"}},function(e,s,t){e.exports={posts:"Posts_posts__tkALa"}},function(e,s,t){e.exports={myPost:"Post_myPost__KdJKK"}},function(e,s,t){e.exports={createPost:"CreatePost_createPost__2m6ri"}},,function(e,s,t){e.exports={message:"OpenDialog_message__3jY3e"}},function(e,s,t){},function(e,s,t){e.exports={music:"Music_music__2wD7r"}},function(e,s,t){e.exports={news:"News_news__2L27l"}},function(e,s,t){e.exports={settings:"Settings_settings__3U6ep"}},function(e,s,t){e.exports={friends:"Friends_friends__20TGW"}},,,,,,function(e,s,t){},function(e,s,t){},,,,,,function(e,s,t){"use strict";t.r(s);var i=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(s){var t=s.getCLS,i=s.getFID,n=s.getFCP,a=s.getLCP,c=s.getTTFB;t(e),i(e),n(e),a(e),c(e)}))},n=t(15),a="ADD-POST",c="UPDATE-NEW-POST-TEXT",r={posts:[{id:1,message:"Hey how are you?",likes:50,views:200},{id:2,message:"It's my second post",likes:30,views:100},{id:3,message:"Yo what's up guys?",likes:60,views:300}],newText:""},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case a:var t={id:e.posts.length,message:e.newText,likes:0,views:0};return e.posts.push(t),e.newText="",e;case c:return e.newText=s.newText,e;default:return e}},l="UPDATE-NEW-MESSAGE",d="SEND-MESSAGE",j={dialogs:[{id:1,name:"Leo"},{id:2,name:"Jes"},{id:3,name:"Mum"},{id:4,name:"Gra"},{id:5,name:"Alex"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Let's meet tomorrow, bro"}],newMessage:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case l:return e.newMessage=s.newMessage,e;case d:var t={id:e.messages.length,message:e.newMessage};return e.messages.push(t),e.newMessage="",e;default:return e}},g={friends:[{id:1,name:"Leo",img:"img1"},{id:2,name:"Jes",img:"img2"},{id:3,name:"Mum",img:"img3"},{id:4,name:"Gra",img:"img4"},{id:5,name:"Alex",img:"img5"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},m=Object(n.a)({profilePage:o,dialogsPage:u,sidebar:x}),h=Object(n.b)(m),b=t(1),p=t.n(b),f=t(22),v=t.n(f),O=(t(41),t(6)),_=t(2),w=(t(42),t(23)),N=t.n(w),P=t(0);var T=function(){return Object(P.jsxs)("header",{className:N.a.header,children:[Object(P.jsx)("img",{src:"https://img.freepik.com/free-vector/gold-lion-leo-shield-logo-icon_23758-201.jpg?size=338&ext=jpg",alt:"leo logo"}),Object(P.jsx)("span",{children:"Header"})]})},k=t(24),y=t.n(k),M=t(25),D=t.n(M);var S=function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:"https://images.all-free-download.com/images/graphicthumb/beautiful_cat_picture_6_168770.jpg",alt:"cat"}),Object(P.jsx)("p",{className:D.a.profileInfo,children:"avatar + description"})]})},L=t(26),C=t.n(L),A=t(27),E=t.n(A);var I=function(e){return Object(P.jsxs)("article",{className:E.a.myPost,children:[Object(P.jsx)("div",{children:e.message}),Object(P.jsxs)("span",{children:["Likes: ",e.likes,", "]}),Object(P.jsxs)("span",{children:["Views: ",e.views]})]})},U=t(28),F=t.n(U);var H=function(e){var s=p.a.createRef();return Object(P.jsxs)("div",{className:F.a.createPost,children:[Object(P.jsx)("h3",{children:"New post:"}),Object(P.jsx)("textarea",{ref:s,onChange:function(){var t=s.current.value;e.updateNewPostText(t)},value:e.newText,placeholder:"Your new post"}),Object(P.jsx)("button",{onClick:function(){e.addPost()},children:"Upload"})]})};var K=function(e){return Object(P.jsx)(H,{updateNewPostText:function(s){var t=function(e){return{type:c,newText:e}}(s);e.dispatch(t)},addPost:function(){e.dispatch({type:a})},newText:e.newText})};var G=function(e){var s=e.posts.map((function(e){return Object(P.jsx)(I,{message:e.message,likes:e.likes,views:e.views})}));return Object(P.jsxs)("section",{className:C.a.posts,children:[Object(P.jsx)("h2",{children:"Posts"}),Object(P.jsx)(K,{dispatch:e.dispatch,newText:e.newText}),s]})};var J=function(e){return Object(P.jsxs)("main",{className:y.a.profile,children:["Profile",Object(P.jsx)(S,{}),Object(P.jsx)(G,{posts:e.profilePage.posts,newText:e.profilePage.newText,dispatch:e.dispatch})]})},R=t(8),W=t.n(R);var Y=function(e){return Object(P.jsx)("div",{className:W.a.dialog+" "+W.a.active,children:Object(P.jsx)(O.b,{to:"/dialogs/"+e.id,children:e.name})})},z=t(30),B=t.n(z);var V=function(e){return Object(P.jsx)("div",{className:B.a.message,children:e.message})},Q=t(31),X=t.n(Q);var q=function(e){var s=p.a.createRef();return Object(P.jsxs)("div",{className:X.a.sendMessage,children:[Object(P.jsx)("h3",{children:"New message:"}),Object(P.jsx)("textarea",{ref:s,placeholder:"Your message",onChange:function(){var t=s.current.value,i={type:l,newMessage:t};e.dispatch(i)},value:e.newMessage}),Object(P.jsx)("button",{onClick:function(){e.dispatch({type:d})},children:"Upload"})]})};var Z=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(P.jsx)(Y,{name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return Object(P.jsx)(V,{message:e.message})}));return Object(P.jsxs)("div",{className:W.a.messages,children:[Object(P.jsxs)("section",{className:W.a.dialogs,children:["Dialogs",s]}),Object(P.jsxs)("section",{className:W.a.currentDialog,children:["Current dialog",t,Object(P.jsx)(q,{dispatch:e.dispatch,newMessage:e.dialogsPage.newMessage})]})]})},$=t(32),ee=t.n($);var se=function(){return Object(P.jsxs)("div",{className:ee.a.music,children:[Object(P.jsx)("h2",{children:"Music"}),Object(P.jsx)("audio",{controls:!0})]})},te=t(33),ie=t.n(te);var ne=function(){return Object(P.jsxs)("div",{className:ie.a.news,children:[Object(P.jsx)("h2",{children:"News"}),Object(P.jsx)("article",{children:"Article 1"}),Object(P.jsx)("article",{children:"Article 2"}),Object(P.jsx)("article",{children:"Article 3"})]})},ae=t(34),ce=t.n(ae);var re=function(){return Object(P.jsxs)("div",{className:ce.a.settings,children:[Object(P.jsx)("h3",{children:"Settings"}),Object(P.jsxs)("div",{children:["Notifications volume",Object(P.jsx)("input",{type:"range",step:"5"})]}),Object(P.jsxs)("div",{children:["Turn off notifications till:",Object(P.jsx)("input",{type:"datetime-local"})]}),Object(P.jsxs)("div",{children:["Upload avatar",Object(P.jsx)("input",{type:"file"})]})]})},oe=t(12),le=t.n(oe),de=t(35),je=t.n(de);var ue=function(e){return Object(P.jsxs)("div",{className:je.a.friends,children:[Object(P.jsx)("img",{src:e.img,alt:"avatar"}),Object(P.jsx)("span",{children:e.name})]})},ge=t(10),xe=t.n(ge);var me=function(){return Object(P.jsx)("nav",{className:xe.a.nav,children:Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsx)(O.b,{to:"/profile",activeClassName:xe.a.activeLink,children:"Profile"})}),Object(P.jsx)("li",{children:Object(P.jsx)(O.b,{to:"/news",activeClassName:xe.a.activeLink,children:"News"})}),Object(P.jsx)("li",{children:Object(P.jsx)(O.b,{to:"/dialogs",activeClassName:xe.a.activeLink,children:"Dialogs"})}),Object(P.jsx)("li",{children:Object(P.jsx)(O.b,{to:"/music",activeClassName:xe.a.activeLink,children:"Music"})}),Object(P.jsx)("li",{children:Object(P.jsx)(O.b,{to:"/settings",activeClassName:xe.a.activeLink,children:"Settings"})})]})})};var he=function(e){var s=e.sidebar.friends.map((function(e){return Object(P.jsx)(ue,{name:e.name,id:e.id,img:e.img})}));return Object(P.jsxs)("section",{className:le.a.sidebar,children:[Object(P.jsxs)("div",{className:le.a.menu,children:[Object(P.jsx)("h3",{children:"Menu"}),Object(P.jsx)(me,{})]}),Object(P.jsxs)("div",{className:le.a.friends,children:[Object(P.jsx)("h3",{children:"Friends"}),s]})]})};var be=function(e){return Object(P.jsx)(O.a,{children:Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(T,{}),Object(P.jsx)(he,{sidebar:e.state.sidebar}),Object(P.jsxs)("div",{className:"Main",children:[Object(P.jsx)(_.a,{render:function(){return Object(P.jsx)(J,{profilePage:e.state.profilePage,dispatch:e.dispatch})},path:"/profile"}),Object(P.jsx)(_.a,{render:function(){return Object(P.jsx)(Z,{dialogsPage:e.state.dialogsPage,dispatch:e.dispatch})},path:"/dialogs"}),Object(P.jsx)(_.a,{component:se,path:"/music"}),Object(P.jsx)(_.a,{component:ne,path:"/news"}),Object(P.jsx)(_.a,{component:re,path:"/settings"})]})]})})},pe=function(e){v.a.render(Object(P.jsx)(p.a.StrictMode,{children:Object(P.jsx)(O.a,{children:Object(P.jsx)(be,{state:e,dispatch:h.dispatch.bind(h),store:h})})}),document.getElementById("root"))};pe(h.getState()),h.subscribe((function(){var e=h.getState();pe(e)})),i()}],[[48,1,2]]]);
//# sourceMappingURL=main.483791e5.chunk.js.map