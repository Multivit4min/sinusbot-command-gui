(this["webpackJsonpsinusbot-commander-gui"]=this["webpackJsonpsinusbot-commander-gui"]||[]).push([[0],{102:function(e,t,n){e.exports=n(113)},113:function(e,t,n){"use strict";n.r(t);var a,r,i=n(0),c=n.n(i),l=n(9),o=n.n(l),u=n(163),s=n(54),m=n(10),d=n(7),h=n(19),p=n(20),g=n(22),f=n(141),v=n(114),E=n(115),C=n(162),y=n(4),b=n(86),k=n.n(b),O=n(164),j=function(){function e(t){Object(m.a)(this,e),this.hasConfig=!0,this.hasCode=!0,this.valueCallback=void 0,this.changeCallback=void 0,this.isValidCallback=void 0,this.displayCodeCallback=void 0,this.renderCodeCallback=void 0,this.icon=void 0,this.label=void 0,this.multiline=void 0,this.valueCallback=t.getValue,this.changeCallback=t.onChange,this.isValidCallback=t.isValid||function(){return!0},this.displayCodeCallback=t.displayCode||function(){return!0},this.renderCodeCallback=t.renderCode,this.icon=t.icon,this.label=t.label,this.multiline=t.multiline||!1}return Object(d.a)(e,[{key:"onChange",value:function(e){return this.changeCallback(this,e)}},{key:"getValue",value:function(){return this.valueCallback(this)}},{key:"isValid",value:function(){return this.isValidCallback(this)}},{key:"displayCode",value:function(){return this.displayCodeCallback(this)}},{key:"renderCode",value:function(){return this.renderCodeCallback(this)}},{key:"renderConfigField",value:function(e){var t=this;return c.a.createElement(f.a,{key:e,container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},this.icon),c.a.createElement(f.a,{item:!0},c.a.createElement(O.a,{label:this.label,value:this.getValue(),multiline:this.multiline,error:!this.isValid(),onChange:function(e){return t.onChange(e)}})))}}]),e}(),N=function(){function e(t){Object(m.a)(this,e),this.hasConfig=!1,this.hasCode=!0,this.displayCodeCallback=void 0,this.renderCodeCallback=void 0,this.displayCodeCallback=t.displayCode||function(){return!0},this.renderCodeCallback=t.renderCode}return Object(d.a)(e,[{key:"displayCode",value:function(){return this.displayCodeCallback(this)}},{key:"renderCode",value:function(){return this.renderCodeCallback(this)}}]),e}(),A=n(148),w=n(159),S=function(){function e(t){Object(m.a)(this,e),this.hasConfig=!0,this.hasCode=!0,this.valueCallback=void 0,this.changeCallback=void 0,this.displayCodeCallback=void 0,this.renderCodeCallback=void 0,this.icon=void 0,this.label=void 0,this.valueCallback=t.getValue,this.changeCallback=t.onChange,this.displayCodeCallback=t.displayCode||function(){return!0},this.renderCodeCallback=t.renderCode,this.icon=t.icon,this.label=t.label}return Object(d.a)(e,[{key:"onChange",value:function(e){return this.changeCallback(this,e)}},{key:"getValue",value:function(){return this.valueCallback(this)}},{key:"displayCode",value:function(){return this.displayCodeCallback(this)}},{key:"renderCode",value:function(){return this.renderCodeCallback(this)}},{key:"renderConfigField",value:function(){var e=this;return c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},this.icon),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getValue(),onChange:function(t){return e.onChange(t)},color:"primary"}),label:this.label})))}}]),e}(),D=n(149),P=n(160),T=n(151),M=n(150),I=n(167),x=n(145),U=n(166),R=n(157),L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=n.state.selected,a=n.props,r=a.onSelect,i=a.listItems;e&&i.includes(t)&&r(t),n.setState({open:!1,selected:""})}},n.handleChange=function(e){n.setState({selected:e.target.value||""})},n.state={selected:"",open:!1},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.open,n=e.selected,a=this.props,r=a.classes,i=a.label,l=a.icon,o=a.listItems;return c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},l),c.a.createElement(f.a,{item:!0},c.a.createElement(D.a,{onClick:this.handleOpen},i),c.a.createElement(P.a,{open:t,onClose:this.handleClose(!1)},c.a.createElement(M.a,null,c.a.createElement("form",{className:r.container},c.a.createElement(U.a,{className:r.formControl},c.a.createElement(I.a,{htmlFor:"demo-dialog-native"},i),c.a.createElement(R.a,{native:!0,value:n,onChange:this.handleChange,input:c.a.createElement(x.a,{id:"demo-dialog-native"})},c.a.createElement("option",{value:""}),o.map((function(e,t){return c.a.createElement("option",{key:t,value:e},e)})))))),c.a.createElement(T.a,null,c.a.createElement(D.a,{onClick:this.handleClose(!1),color:"primary"},"Cancel"),c.a.createElement(D.a,{onClick:this.handleClose(!0),color:"primary"},"Ok")))))}}]),t}(i.Component),V=Object(y.a)((function(e){var t=e.spacing;return Object(C.a)({container:{display:"flex",flexWrap:"wrap"},formControl:{margin:t(1),minWidth:120}})}))(L),F=function(){function e(t){var n=this;Object(m.a)(this,e),this.hasConfig=!0,this.hasCode=!0,this.icon=void 0,this.label=void 0,this.listItems=void 0,this.onSelectCallback=void 0,this.elements=[],this.selectItem=function(e){return n.onSelectCallback(n,n.listItems[e])},this.icon=t.icon,this.label=t.label,this.listItems=t.listItems,this.onSelectCallback=t.onSelect}return Object(d.a)(e,[{key:"addElement",value:function(e){this.elements.push(e)}},{key:"removeElement",value:function(e){return this.elements=this.elements.filter((function(t){return t!==e})),this}},{key:"renderConfigField",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(V,{label:this.label,icon:this.icon,listItems:Object.keys(this.listItems),onSelect:this.selectItem}),this.elements.map((function(e){return e.hasConfig?e.renderConfigField():null})))}},{key:"displayCode",value:function(){return this.elements.length>0}},{key:"renderCode",value:function(){return"".concat(this.elements.map((function(e){return e.renderCode()})).join("\n"),"\n")}}]),e}(),G=n(81),B=n.n(G),H=n(82),_=n.n(H),W=n(83),X=n.n(W),K=n(84),z=n.n(K),J=n(85),q=n.n(J);function $(e){return{type:a.ADDARGUMENT,argument:e}}!function(e){e.RESET="COMMAND/RESET",e.SETNAME="COMMAND/SETNAME",e.SETHELP="COMMAND/SETHELP",e.CHECKPERMISSION="COMMAND/CHECKPERMISSION",e.ADDARGUMENT="COMMAND/ADDARGUMENT",e.DELETEARGUMENT="COMMAND/DELETEARGUMENT",e.UPDATEARGUMENT="COMMAND/UPDATEARGUMENT",e.SETMANUAL="COMMAND/SETMANUAL",e.UPDATEPREFIX="COMMAND/UPDATEPREFIX"}(a||(a={})),function(e){e[e.STRING=0]="STRING",e[e.NUMBER=1]="NUMBER",e[e.CLIENT=2]="CLIENT",e[e.REST=3]="REST"}(r||(r={}));var Q=n(42),Y=n(29),Z=n(12);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(Z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={argId:0,name:"ping",help:"responds with pong!",manual:"manual text",checkPerm:!1,argument:[],prefix:"!"};var ae=Object(Q.b)({command:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te({},ne),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.RESET:return te({},ne);case a.SETNAME:return te({},e,{name:t.name});case a.SETHELP:return te({},e,{help:t.help});case a.SETMANUAL:return te({},e,{manual:t.manual});case a.CHECKPERMISSION:return te({},e,{checkPerm:t.check});case a.ADDARGUMENT:return te({},e,{argId:e.argId+1,argument:[].concat(Object(Y.a)(e.argument),[te({},t.argument)])});case a.DELETEARGUMENT:return te({},e,{argument:e.argument.filter((function(e){return e.id!==t.id}))});case a.UPDATEARGUMENT:return te({},e,{argument:e.argument.map((function(e){return e.id!==t.id?e:te({},e,{},t.argument)}))});case a.UPDATEPREFIX:return te({},e,{prefix:""===t.prefix?ne.prefix:t.prefix});default:return e}}}),re=Object(Q.c)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ie=n(72),ce=n.n(ie),le=n(73),oe=n.n(le),ue=function(){function e(t,n,a){Object(m.a)(this,e),this.id=void 0,this.type=void 0,this.parent=void 0,this.hasCode=!0,this.hasConfig=!0,this.id=t,this.type=n,this.parent=a}return Object(d.a)(e,[{key:"update",value:function(e){return re.dispatch((t=this.id,n=e,{type:a.UPDATEARGUMENT,id:t,argument:n}));var t,n}},{key:"getArgument",value:function(){var e=this,t=re.getState().command.argument.find((function(t){return t.id===e.id&&t.type===e.type}));if(!t)throw new Error("argument with id ".concat(this.id," not found"));return t}},{key:"removeArgument",value:function(){return this.parent.removeElement(this),re.dispatch((e=this.id,{type:a.DELETEARGUMENT,id:e}));var e}},{key:"getType",value:function(){return this.getArgument().type}},{key:"updateName",value:function(e){return this.update({name:e})}},{key:"getName",value:function(){return this.getArgument().name}},{key:"updateOptional",value:function(e){return this.update({optional:e})}},{key:"getOptional",value:function(){return this.getArgument().optional}},{key:"updateDisplay",value:function(e){return this.update({display:e})}},{key:"getDisplay",value:function(){return this.getArgument().display}},{key:"updateDisplayDefault",value:function(e){return this.update({displayDefault:e})}},{key:"getDisplayDefault",value:function(){return this.getArgument().displayDefault}},{key:"updateDefault",value:function(e){return this.update({default:e})}},{key:"getDefault",value:function(){return this.getArgument().default}},{key:"renderBasicConfig",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(ce.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(O.a,{label:"name",value:this.getName(),onChange:function(t){return e.updateName(t.target.value)},error:/\s/.test(this.getName())}))),c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(oe.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getOptional(),onChange:function(t){return e.updateOptional(t.target.checked)},color:"primary"}),label:"is optional?"}))))}},{key:"renderBasicCode",value:function(){var t=e.initial(0),n="";return this.getName()!==t.name&&(n+='.setName("'.concat(this.getName(),'"').concat(this.getDisplay()!==t.display?', "'.concat(this.getDisplay(),'"'):"",")")),this.getOptional()!==t.optional&&(n+=".isOptional()"),n}}],[{key:"initial",value:function(e){return{id:e,name:"_",optional:!1,display:"",displayDefault:!1,default:void 0}}}]),e}(),se=n(76),me=n.n(se),de=n(77),he=n.n(de),pe=n(53),ge=n.n(pe),fe=n(161),ve=n(152),Ee=n(153),Ce=n(154);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var be=function(e){function t(e,n){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e,r.STRING,n))).hasConfig=!0,a.hasCode=!0,a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"getRegex",value:function(){return this.getArgument().regex}},{key:"updateRegex",value:function(e){return this.update({regex:e})}},{key:"getMaxLen",value:function(){return this.getArgument().maxlen}},{key:"updateMaxLen",value:function(e){return this.update({maxlen:e})}},{key:"getMinLen",value:function(){return this.getArgument().minlen}},{key:"updateMinLen",value:function(e){return this.update({minlen:e})}},{key:"getWhitelist",value:function(){return this.getArgument().whitelist}},{key:"updateWhitelist",value:function(e){return this.update({whitelist:e})}},{key:"getUpperCase",value:function(){return this.getArgument().uppercase}},{key:"updateUpperCase",value:function(e){var t={uppercase:e};return e&&(t.lowercase=!1),this.update(t)}},{key:"getLowerCase",value:function(){return this.getArgument().lowercase}},{key:"updateLowerCase",value:function(e){var t={lowercase:e};return e&&(t.uppercase=!1),this.update(t)}},{key:"displayCode",value:function(){return!0}},{key:"renderCode",value:function(){var e="  .addArgument(arg => arg.string".concat(this.renderBasicCode());return this.getUpperCase()&&(e+=".toUpperCase()"),this.getLowerCase()&&(e+=".toLowerCase()"),"".concat(e,")")}},{key:"renderConfigField",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(fe.a,null,c.a.createElement(ve.a,{expandIcon:c.a.createElement(ge.a,null)},c.a.createElement(v.a,null,"String Argument")),c.a.createElement(Ee.a,null,c.a.createElement("div",null,this.renderBasicConfig(),c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(me.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getUpperCase(),onChange:function(t){return e.updateUpperCase(t.target.checked)},color:"primary"}),label:"To Uppercase"}))),c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(he.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getLowerCase(),onChange:function(t){return e.updateLowerCase(t.target.checked)},color:"primary"}),label:"To Lowercase"}))))),c.a.createElement(Ce.a,null,c.a.createElement(D.a,{size:"small",color:"secondary",onClick:function(){return e.removeArgument()}},"Delete"))))}}],[{key:"create",value:function(e){var n=re.getState().command.argId;return re.dispatch($(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(Z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:r.STRING,uppercase:!1,lowercase:!1},ue.initial(n)))),new t(n,e)}}]),t}(ue),ke=n(80),Oe=n.n(ke),je=n(79),Ne=n.n(je),Ae=n(78),we=n.n(Ae);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var De=function(e){function t(e,n){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e,r.NUMBER,n))).hasConfig=!0,a.hasCode=!0,a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"getInt",value:function(){return this.getArgument().int}},{key:"updateInt",value:function(e){return this.update({int:e})}},{key:"getForcePositive",value:function(){return this.getArgument().forcePositive}},{key:"updateForcePositive",value:function(e){var t={forcePositive:e};return e&&(t.forceNegative=!1),this.update(t)}},{key:"getForceNegative",value:function(){return this.getArgument().forceNegative}},{key:"updateForceNegative",value:function(e){var t={forceNegative:e};return e&&(t.forcePositive=!1),this.update(t)}},{key:"displayCode",value:function(){return!0}},{key:"renderCode",value:function(){var e="  .addArgument(arg => arg.number".concat(this.renderBasicCode());return this.getInt()&&(e+=".integer()"),this.getForcePositive()&&(e+=".forcePositive()"),this.getForceNegative()&&(e+=".forceNegative()"),"".concat(e,")")}},{key:"renderConfigField",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(fe.a,null,c.a.createElement(ve.a,{expandIcon:c.a.createElement(ge.a,null)},c.a.createElement(v.a,null,"Number Argument")),c.a.createElement(Ee.a,null,c.a.createElement("div",null,this.renderBasicConfig(),c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(we.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getInt(),onChange:function(t){return e.updateInt(t.target.checked)},color:"primary"}),label:"want an integer number (whole number)"}))),c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(Ne.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getForcePositive(),onChange:function(t){return e.updateForcePositive(t.target.checked)},color:"primary"}),label:"expect positive number"}))),c.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},c.a.createElement(f.a,{item:!0},c.a.createElement(Oe.a,null)),c.a.createElement(f.a,{item:!0},c.a.createElement(A.a,{control:c.a.createElement(w.a,{checked:this.getForceNegative(),onChange:function(t){return e.updateForceNegative(t.target.checked)},color:"primary"}),label:"expect negative number"}))))),c.a.createElement(Ce.a,null,c.a.createElement(D.a,{size:"small",color:"secondary",onClick:function(){return e.removeArgument()}},"Delete"))))}}],[{key:"create",value:function(e){var n=re.getState().command.argId;return re.dispatch($(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(n,!0).forEach((function(t){Object(Z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:r.NUMBER,int:!1,forcePositive:!1,forceNegative:!1},ue.initial(n)))),new t(n,e)}}]),t}(ue),Pe=[new j({getValue:function(){return re.getState().command.name},onChange:function(e,t){return re.dispatch((n=t.target.value,{type:a.SETNAME,name:n}));var n},renderCode:function(e){return"commander.createCommand(".concat(e.getValue(),")\n")},icon:c.a.createElement(B.a,null),label:"Command Name",isValid:function(e){return!/\s/.test(e.getValue())}}),new j({getValue:function(){return re.getState().command.help},onChange:function(e,t){return re.dispatch((n=t.target.value,{type:a.SETHELP,help:n}));var n},renderCode:function(e){return'  .setHelp("'.concat(e.getValue(),'")\n')},icon:c.a.createElement(_.a,null),label:"Help Text",isValid:function(e){return e.getValue().length>0}}),new j({getValue:function(){return re.getState().command.manual},onChange:function(e,t){return re.dispatch((n=t.target.value,{type:a.SETMANUAL,manual:n}));var n},multiline:!0,displayCode:function(e){return e.getValue().length>0},renderCode:function(e){return"".concat(e.getValue().split("\n").map((function(e){return'  .setManual("'.concat(e,'")')})).join("\n"),"\n")},icon:c.a.createElement(X.a,null),label:"Manual Text"}),new S({icon:c.a.createElement(z.a,null),label:"check permissions",displayCode:function(e){return e.getValue()},getValue:function(){return re.getState().command.checkPerm},onChange:function(e,t){return re.dispatch((n=t.target.checked,{type:a.CHECKPERMISSION,check:n}));var n},renderCode:function(e){return"  .checkPermissions(client => {\n    //retrieves as first argument the requesting sinusbot client\n    //return either true or false in order to allow the client to use this command\n  })\n"}}),new F({icon:c.a.createElement(q.a,null),label:"Add Argument",listItems:{StringArgument:be,NumberArgument:De},onSelect:function(e,t){e.addElement(t.create(e))}}),new N({renderCode:function(){return"  .exec((client, args, reply) => {\n    //your logic here\n    //arguments:\n    //  client   -> the client which issued this command\n    //  args     -> all parsed arguments\n    //  reply    -> a function which takes a string as parameter\n    //              it responds to the source where the client has sent a command\n".concat(re.getState().command.argument.length>0?"".concat(re.getState().command.argument.map((function(e){return"    arg.".concat(e.name," //is a ").concat(r[e.type])})).join("\n"),"\n  )"):"  )")}})],Te=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"argumentUsage",value:function(){return this.props.command.argument.map((function(e){var t="".concat(""===e.display?e.name:e.display);return e.displayDefault&&void 0!==e.default&&(t+="=".concat(e.default)),t=e.optional?"[".concat(t,"]"):"<".concat(t,">")})).join("")}},{key:"getUsage",value:function(){var e=this.props.command;return"".concat(e.prefix).concat(e.name," ").concat(this.argumentUsage())}},{key:"render",value:function(){var e=this.props.command;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{variant:"h5"},"MAN Command:"),c.a.createElement("pre",{className:"code"},'\n        <14:52:43> "TeamSpeakClient": !man '.concat(e.name,'\n        <14:52:43> "Sinusbot": \n        Manual for command: !').concat(e.name,"\n        Usage: ").concat(this.getUsage(),"\n        ").concat(e.manual||e.help,"\n        ")))}}]),t}(i.Component),Me=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"getHelp",value:function(){var e=this.props.command;return"".concat(e.prefix).concat(e.name," ").concat(e.help)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{variant:"h5"},"HELP Command:"),c.a.createElement("pre",{className:"code"},'\n        <22:01:09> "TeamSpeakClient": !help\n        <22:01:09> "Sinusbot": 3 Commands found:\n        <22:01:09> "Sinusbot": \n        !help Displays this text\n        !man Displays detailed help about a command if available\n    >>> '.concat(this.getHelp(),"\n        ")))}}]),t}(i.Component),Ie=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).copyCode=function(){var e=document.createElement("textarea");e.value=n.renderCode(),e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},n.renderCode=function(){return Pe.map((function(e){return e.hasCode&&e.displayCode()?e.renderCode():""})).join("")},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.command;return c.a.createElement(f.a,{container:!0,className:t.content},c.a.createElement(f.a,{item:!0,sm:12,md:6,lg:3},c.a.createElement(v.a,null,"Sinusbot Command Builder"),c.a.createElement("div",{className:t.margin},Pe.map((function(e,t){return e.hasConfig?e.renderConfigField(t):null})))),c.a.createElement(f.a,{item:!0,sm:12,md:6,lg:5},c.a.createElement(v.a,{variant:"h5"},c.a.createElement(E.a,{onClick:this.copyCode},c.a.createElement(k.a,null))," CODE:"),c.a.createElement("pre",{className:"code"},this.renderCode())),c.a.createElement(f.a,{item:!0,sm:12,md:6,lg:4},c.a.createElement(Me,{command:n}),c.a.createElement(Te,{command:n})))}}]),t}(i.Component),xe=Object(s.b)((function(e){return{command:e.command}}))(Object(y.a)((function(e){var t=e.spacing;return Object(C.a)({content:{flexGrow:1,padding:t(3),minWidth:0,height:"100vh",overflow:"auto"},code:{display:"block",whiteSpace:"pre-wrap"},margin:{margin:t(1)}})}))(Ie));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=n(87),Re=n(155),Le=Object(Ue.a)({palette:{type:"dark"}});o.a.render(c.a.createElement(s.a,{store:re},c.a.createElement(Re.a,{theme:Le},c.a.createElement(u.a,null),c.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.bab09047.chunk.js.map