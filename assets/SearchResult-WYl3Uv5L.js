import{u as U,e as se,f as te,g as M,h as ae,P as le,t as re,i as ue,j as b,k as w,l as ie,w as Y,m as t,n as oe,R as T,p as ne,q as ce,s as ve,C as pe,v as de,x as he,y as ye,z as me,A as ge,B as Ee,D as fe,E as $,F as j,G as He,H as Q,I as Ae}from"./app-Be8e4xxy.js";const Re=["/","/posts/mission.html","/posts/paper/HCI.html","/posts/paper/LLM.html","/posts/paper/AI/5%20%E4%B8%AA%E9%80%82%E5%90%88%E4%B8%AA%E4%BA%BA%E5%92%8C%E4%B8%93%E4%B8%9A%E7%94%A8%E9%80%94%E7%9A%84%20AI%20%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E7%94%9F%E6%88%90%E5%99%A8.html","/404.html"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),we=()=>{const{queryHistoryCount:a}=Q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=Q,E=U(Qe,[]),qe=()=>{const a=_>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,_-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},xe=a=>{const l=pe(),r=M(),q=de(),i=b(0),A=w(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:x}=me(),f=He(c=>{const H=c.join(" "),{searchFilter:C=d=>d,splitWord:S,suggestionsFilter:I,...m}=l.value;H?(i.value+=1,y(c.join(" "),r.value,m).then(d=>C(d,H,r.value,q.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},Q.searchDelay-Q.suggestDelay);Y([a,r],([c])=>f(c),{immediate:!0}),ge(()=>{x()})}),{isSearching:A,results:h}};var Se=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),q=M(),i=ae(le),{enabled:A,addQueryHistory:h,queryHistory:y,removeQueryHistory:x}=we(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:C}=qe(),S=A||f,I=re(a,"queries"),{results:m,isSearching:d}=xe(I),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),P=w(()=>S&&(y.value.length>0||c.value.length>0)),B=w(()=>m.value.length>0),L=w(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},V=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=L.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<L.value.contents.length-1?p.value+=1:J()},N=()=>{p.value>0?p.value-=1:V()},D=e=>e.map(s=>Ae(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=Ee[e.index]||"$content",[o,k=""]=fe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",D([o,...n,k])))}return e.display.map(s=>t("div",D(s)))},R=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(s)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>D(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(B.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=L.value.contents[p.value];h(a.queries.join(" ")),H(s),r.push(F(s)),R()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),R())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!B.value:!P.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):B.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const k=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=k&&p.value===ee;return t(T,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),H(n),R()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:S?P.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};