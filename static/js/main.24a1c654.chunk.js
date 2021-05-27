(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__L67n3",image:"MeetupItem_image__1hTwb",content:"MeetupItem_content__2O1UX",actions:"MeetupItem_actions__3CUh3"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__1yejS",logo:"MainNavigation_logo__lj7HG",active:"MainNavigation_active__DzxUS",badge:"MainNavigation_badge__1uPZJ"}},20:function(e,t,c){e.exports={list:"MeetupList_list__r32OQ"}},21:function(e,t,c){e.exports={card:"Card_card__3sdRC"}},23:function(e,t,c){e.exports={main:"Layout_main__3AAxQ"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(19),r=c.n(n),s=c(7),a=(c(29),c(2)),o=c(24),j=c(11),d=c(20),u=c.n(d),l=c(12),b=c.n(l),O=c(21),h=c.n(O),x=c(0);var v=function(e){return Object(x.jsx)("div",{className:h.a.card,children:e.children})},m=Object(i.createContext)({favourties:[],totalFavourites:0,addFavourite:function(e){},removeFavourite:function(e){},itemIsFavourite:function(e){}});function f(e){var t=Object(i.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1];var s={favourites:n,totalFavourites:n.length,addFavourite:function(e){r((function(t){return t.concat(e)}))},removeFavourite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavourite:function(e){return n.some((function(t){return t.id===e}))}};return Object(x.jsx)(m.Provider,{value:s,children:e.children})}var p=m;var _=function(e){var t=Object(i.useContext)(p),c=t.itemIsFavourite(e.id);return Object(x.jsx)(v,{children:Object(x.jsxs)("li",{className:b.a.item,children:[Object(x.jsx)("div",{className:b.a.image,children:Object(x.jsx)("img",{src:e.image,alt:e.title})}),Object(x.jsxs)("div",{className:b.a.content,children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("address",{children:e.address}),Object(x.jsx)("p",{children:e.description})]}),Object(x.jsx)("div",{className:b.a.actions,children:Object(x.jsx)("button",{onClick:function(){c?t.removeFavourite(e.id):t.addFavourite({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:c?"Remove From Favourties":"To Favourites"})})]})})};var g=function(e){return Object(x.jsx)("ul",{className:u.a.list,children:e.meetups.map((function(e){return Object(x.jsx)(_,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var N=function(){var e=Object(i.useState)(!0),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),s=Object(j.a)(r,2),a=s[0],d=s[1];return Object(i.useEffect)((function(){n(!0),fetch("https://react-getting-started-c944f-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(o.a)({id:c},e[c]);t.push(i)}n(!1),d(t)}))}),[]),c?Object(x.jsx)("section",{children:Object(x.jsx)("p",{children:"Loading..."})}):Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"All Meetings"}),Object(x.jsx)(g,{meetups:a})]})};var F=function(){var e,t=Object(i.useContext)(p);return 0===t.totalFavourites||(e=Object(x.jsx)(g,{meetups:t.favourites})),Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"My Favourites"}),e]})},M=c(9),w=c.n(M);var y=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(x.jsx)(v,{children:Object(x.jsxs)("form",{className:w.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(x.jsxs)("div",{className:w.a.control,children:[Object(x.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(x.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(x.jsxs)("div",{className:w.a.control,children:[Object(x.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(x.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(x.jsxs)("div",{className:w.a.control,children:[Object(x.jsx)("label",{htmlFor:"address",children:"Address"}),Object(x.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(x.jsxs)("div",{className:w.a.control,children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(x.jsx)("div",{className:w.a.actions,children:Object(x.jsx)("button",{children:"Add Meetup"})})]})})};var A=function(){var e=Object(a.f)();return Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"Add New Meetup"}),Object(x.jsx)(y,{onAddMeetup:function(t){fetch("https://react-getting-started-c944f-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then((function(){e.replace("/")}))}})]})},C=c(23),I=c.n(C),R=c(13),S=c.n(R);var k=function(){var e=Object(i.useContext)(p);return Object(x.jsxs)("header",{className:S.a.header,children:[Object(x.jsx)("div",{className:S.a.logo,children:"React Meetups"}),Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/",children:"All Meetups"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/new-meetup",children:"New Meetups"})}),Object(x.jsx)("li",{children:Object(x.jsxs)(s.b,{to:"/favourites",children:["Favourites",Object(x.jsx)("span",{className:S.a.badge,children:e.totalFavourites})]})})]})})]})};var q=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsx)("main",{className:I.a.main,children:e.children})]})};var D=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(q,{children:Object(x.jsxs)(a.c,{children:[Object(x.jsx)(a.a,{path:"/",exact:!0,children:Object(x.jsx)(N,{})}),Object(x.jsx)(a.a,{path:"/new-meetup",children:Object(x.jsx)(A,{})}),Object(x.jsx)(a.a,{path:"/favourites",children:Object(x.jsx)(F,{})})]})})})};r.a.render(Object(x.jsx)(f,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(D,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__gvZ96",control:"NewMeetupForm_control__1RxA3",actions:"NewMeetupForm_actions__1rlDk"}}},[[36,1,2]]]);
//# sourceMappingURL=main.24a1c654.chunk.js.map