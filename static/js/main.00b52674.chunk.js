(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(n,e,t){n.exports={container:"Container_container__GiA9r"}},28:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a,r,c=t(0),o=t.n(c),i=t(12),s=t.n(i),l=t(8),u=t(9),d=t(4),b=t(5),m=t(7),h=t(6),j=t(2),p=t(20),x=t(3),f=t(16),O=t.n(f),g=t(1);function v(n){var e=n.children;return Object(g.jsx)("div",{className:O.a.container,children:e})}var C,k,y=x.a.label(a||(a=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n  font-size: 25px;\n  cursor: pointer;\n"]))),S=x.a.input(r||(r=Object(j.a)(["\n  max-width: 200px;\n  height: 10px;\n  margin-left: 30px;\n  padding: 20px 10px;\n  background: #bebebe;\n  color: #036103;\n  border: 2px solid red;\n  border-radius: 10px;\n"])));function w(n){var e=n.value,t=n.onChange;return Object(g.jsxs)(y,{children:["Find contacts by name",Object(g.jsx)(S,{type:"text",name:"filter",value:e,onChange:t})]})}var A,z,F,q,D,J,N,T=x.a.button(C||(C=Object(j.a)(["\n  padding: 5px 10px;\n  width: 100px;\n  margin-top: 10px;\n  background-color: #ff1414;\n  color: black;\n  border-radius: 5px;\n  transition: background-color 200ms linear, color 500ms linear;\n  &:hover,\n  &:focus {\n    background-color: #c9baba;\n    color: red;\n    transition: background-color 200ms linear, color 500ms linear;\n  }\n"]))),Z=x.a.p(k||(k=Object(j.a)(["\n  font-size: 25px;\n"]))),_=function(n){Object(m.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).handleClick=function(e){var t=e.currentTarget.name;n.props.onClick(t)},n}return Object(b.a)(t,[{key:"render",value:function(){var n=this.props.contact,e=n.name,t=n.number,a=n.id;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(Z,{children:[e,": ",t]}),Object(g.jsx)(T,{name:a,type:"button",onClick:this.handleClick,children:"delete"})]})}}]),t}(c.Component),B=x.a.form(A||(A=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  padding: 20px 70px;\n  border: 2px solid red;\n  border-radius: 10px;\n  background: orange;\n"]))),E=Object(x.a)(T)(z||(z=Object(j.a)(["\n  background-color: #278a27;\n  margin: 0 auto;\n  margin-top: 10px;\n  width: 150px;\n  &:hover,\n  &:focus {\n    color: #006900;\n  }\n"]))),L=function(n){Object(m.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.handleStateChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit({name:n.state.name,number:n.state.number}),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(b.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return Object(g.jsxs)(B,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(y,{children:["Name",Object(g.jsx)(S,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.handleStateChange,value:e,required:!0})]}),Object(g.jsxs)(y,{children:["Number",Object(g.jsx)(S,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleStateChange,value:t,required:!0})]}),Object(g.jsx)(E,{type:"submit",children:"Add contact"})]})}}]),t}(c.Component),M=L,G=x.a.ul(F||(F=Object(j.a)(["\n  color: green;\n  font-weight: 100;\n"]))),H=x.a.li(q||(q=Object(j.a)(["\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),I=function(n){Object(m.a)(t,n);var e=Object(h.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){var n=this.props,e=n.contacts,t=n.onClick;return Object(g.jsx)(G,{children:Object(l.a)(e).sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){return Object(g.jsx)(H,{children:Object(g.jsx)(_,{contact:n,onClick:t})},n.id)}))})}}]),t}(c.Component),K=I,P=x.a.h1(D||(D=Object(j.a)(["\n  margin-bottom: 40px;\n  font-size: 40px;\n  text-align: center;\n"]))),R=x.a.h2(J||(J=Object(j.a)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 35px;\n"]))),$=x.a.div(N||(N=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Q=function(n){Object(m.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleStateChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.handleContactAdd=function(e){var t=e.name,a=e.number;n.state.contacts.some((function(n){return n.name===t||n.number===a}))?alert("".concat(t," is already in contacts")):n.setState((function(n){return{contacts:[].concat(Object(l.a)(n.contacts),[{id:Object(p.a)(),name:t,number:a}])}}))},n.getFilteredContacts=function(){var e=n.state,t=e.contacts,a=e.filter.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(a)}))},n.handleContactDelete=function(e){n.setState((function(n){var t=n.contacts.find((function(n){return n.id===e})),a=n.contacts.indexOf(t);return n.contacts.splice(a,1),{contacts:Object(l.a)(n.contacts),filter:""}}))},n}return Object(b.a)(t,[{key:"render",value:function(){var n=this.state.filter,e=this.getFilteredContacts();return Object(g.jsxs)(v,{children:[Object(g.jsx)(P,{children:"Phonebook"}),Object(g.jsx)(M,{onSubmit:this.handleContactAdd}),Object(g.jsxs)($,{children:[Object(g.jsx)(R,{children:"Contacts"}),Object(g.jsx)(w,{value:n,onChange:this.handleStateChange}),Object(g.jsx)(K,{contacts:e,onClick:this.handleContactDelete})]})]})}}]),t}(c.Component),U=Q;t(28);s.a.render(Object(g.jsx)(U,{}),document.querySelector("#root")),s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.00b52674.chunk.js.map