(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6MZL":function(e,t,a){},EDuE:function(e,t,a){},FRpb:function(e,t,a){"use strict";var c=a("wbLb"),l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=(a("HDCr"),function(e){var t=e.author,a=e.tagline;return n.a.createElement("div",{className:"bio-main w-75"},n.a.createElement("h3",{className:"mt-2 author-bio"},t),n.a.createElement("small",{className:"text-muted"},a))}),s=a("ma3e"),i=function(e){var t=e.contacts;return n.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},n.a.createElement("a",{className:"text-secondary p-2",href:t.facebook},n.a.createElement("span",{title:"Facebook"},n.a.createElement(s.d,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:t.github},n.a.createElement("span",{title:"GitHub"},n.a.createElement(s.e,{size:26,style:{color:"secondary"}}))))},m=(a("pJf4"),a("gu/5"),a("eoYm"),a("o+pQ")),u=function(e){var t=e.labels,a=e.posts,c=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",null,"Tech Topics"),n.a.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,c){t.forEach((function(t){e===t.tag&&a.push(n.a.createElement(m.a,{key:c,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(c)))};t.a=function(){return n.a.createElement(r.StaticQuery,{query:"3963689063",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sidebar-main border-right"},n.a.createElement(o,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.a.createElement(i,{contacts:e.site.siteMetadata.contacts}),n.a.createElement("div",{className:"page-links"}),n.a.createElement("div",{className:"tech-tags mt-4"},n.a.createElement(u,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))},data:c})}},HDCr:function(e,t,a){},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("AqHK"),a("4DPX"),a("sc67"),a("E5k/");var c=a("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=c.createContext&&c.createContext(l),r=function(){return(r=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(c=Object.getOwnPropertySymbols(e);l<c.length;l++)t.indexOf(c[l])<0&&(a[c[l]]=e[c[l]])}return a};function s(e){return function(t){return c.createElement(i,r({attr:r({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return c.createElement(t.tag,r({key:a},t.attr),e(t.child))}))}(e.child))}}function i(e){var t=function(t){var a,l=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,s=e.title,i=o(e,["attr","title"]);return c.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:a,style:r({color:e.color||t.color},t.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&c.createElement("title",null,s),e.children)};return void 0!==n?c.createElement(n.Consumer,null,(function(e){return t(e)})):t(l)}},ccoC:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));a("pJf4");var c=a("q1tI"),l=a.n(c),n=a("Wbzz"),r=(a("+eM2"),a("EDuE"),a("Bl7J")),o=a("vrFN"),s=a("FRpb"),i=a("o+pQ"),m="1633462394";t.default=function(e){var t=e.pageContext,a=e.data,c=a.allMarkdownRemark.edges,m=a.site.siteMetadata.labels,u=t.tag,d=a.allMarkdownRemark.totalCount,h=d+" post"+(1===d?"":"s")+' tagged with "'+u+'"';return l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"Home",keywords:["gatsby","javascript","react","web development","node.js","graphql"]}),l.a.createElement("div",{className:"index-main"},l.a.createElement("div",{className:"sidebar px-4 py-2"},l.a.createElement(s.a,null)),l.a.createElement("div",{className:"post-list-main"},l.a.createElement("i",null,l.a.createElement("h2",{className:"heading"},h)),c.map((function(e){var t=e.node.frontmatter.tags;return l.a.createElement("div",{key:e.node.id,className:"container mt-5"},l.a.createElement(n.Link,{to:e.node.fields.slug,className:"text-dark"},l.a.createElement("h2",{className:"heading"},e.node.frontmatter.title)),l.a.createElement("small",{className:"d-block text-info"},"Được đăng vào ",e.node.frontmatter.date),l.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),l.a.createElement(n.Link,{to:e.node.fields.slug,className:"text-primary"},l.a.createElement("small",{className:"d-inline-block ml-3"}," Đọc cả bài")),l.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,a){m.forEach((function(c){e===c.tag&&t.push(l.a.createElement(i.a,{key:a,tag:c.tag,tech:c.tech,name:c.name,size:c.size,color:c.color}))}))})),t}(t)))})))))}},"o+pQ":function(e,t,a){"use strict";a("pJf4");var c=a("q1tI"),l=a.n(c),n=(a("6MZL"),a("Wbzz"));t.a=function(e){var t=e.tag,a=e.tech,c=e.name,r=e.size,o=e.color;return l.a.createElement("div",{className:"d-inline-block p-1"},l.a.createElement(n.Link,{to:"/tags/"+t+"/"},l.a.createElement("button",{className:"tech-tag text-white"},l.a.createElement("p",{className:"d-inline"},a," "),l.a.createElement("div",{className:"d-inline",style:{fontSize:r,color:o}},l.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,style:{fill:""+o}},l.a.createElement("title",null,a),l.a.createElement("path",{d:c}))))))}},wbLb:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"TOMOSIA VIETNAM","tagline":"お客様と共に新たな価値を生み出し、幸せの明かりを灯す会社。","author":"「共に」「幸せ」「灯す」","contacts":{"linkedin":"https://www.linkedin.com/in/will-ward-65234a170/","github":"https://github.com/TOMOSIA-VIETNAM","stackoverflow":"https://stackoverflow.com/users/10262432/will-ward?tab=profile","freecodecamp":"https://www.freecodecamp.org/willjw3","twitter":"https://twitter.com/willjw3","facebook":"https://www.facebook.com/tomosiavn/"},"labels":[{"tag":"react","tech":"React","name":"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z","size":20,"color":"deepskyblue"},{"tag":"nodejs","tech":"Node.js","name":"M11.177 25.3a1.94 1.94 0 0 1-.969-.259l-3.086-1.826c-.46-.257-.235-.349-.083-.402.614-.213.739-.262 1.394-.635.069-.038.159-.024.231.018l2.37 1.407a.304.304 0 0 0 .287 0l9.241-5.333a.292.292 0 0 0 .141-.25V7.355a.3.3 0 0 0-.143-.255l-9.237-5.329a.29.29 0 0 0-.285 0L1.803 7.102a.296.296 0 0 0-.146.253v10.666c0 .102.056.198.145.247l2.532 1.462c1.374.687 2.215-.122 2.215-.935V8.265c0-.149.12-.266.269-.266H7.99c.146 0 .267.117.267.266v10.53c0 1.833-.998 2.885-2.736 2.885-.534 0-.955 0-2.129-.579L.969 19.706A1.953 1.953 0 0 1 0 18.02V7.355c0-.693.371-1.339.969-1.684l9.242-5.34a2.023 2.023 0 0 1 1.942 0l9.241 5.34c.599.346.971.992.971 1.684V18.02c0 .693-.372 1.337-.971 1.686l-9.241 5.335a1.942 1.942 0 0 1-.973.259zm2.855-7.348c-4.045 0-4.892-1.857-4.892-3.414 0-.148.118-.266.266-.266h1.195c.133 0 .245.096.265.226.18 1.216.717 1.831 3.164 1.831 1.946 0 2.775-.441 2.775-1.473 0-.596-.234-1.037-3.26-1.334-2.528-.25-4.093-.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233a.27.27 0 0 1-.267.291h-1.2a.266.266 0 0 1-.259-.209c-.288-1.28-.988-1.689-2.886-1.689-2.126 0-2.373.74-2.373 1.295 0 .673.292.869 3.161 1.248 2.84.375 4.19.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z","size":20,"color":"lightgreen"},{"tag":"git","tech":"Git","name":"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187","size":20,"color":"white"},{"tag":"javascript","tech":"JavaScript","name":"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z","size":20,"color":"yellow"},{"tag":"ruby","tech":"Ruby","name":"M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.029.003zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z","size":20,"color":"crimson"},{"tag":"php","tech":"php","name":"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z","size":20,"color":"violet"},{"tag":"swift","tech":"Swift","name":"M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.617-.28.897a5.173 5.173 0 0 1-.45-.28S11.104 9.17 5.273 3.282c-.169-.168 3.14 4.71 6.841 8.58-1.738-1.01-6.673-4.542-9.758-7.403.337.617.842 1.234 1.346 1.851 2.58 3.309 5.945 7.346 9.983 10.43-2.86 1.74-6.842 1.851-10.88 0-1.01-.448-1.85-1.009-2.804-1.682 1.682 2.636 4.318 5.048 7.459 6.337 3.757 1.627 7.57 1.515 10.318 0h.057c.112-.056.224-.112.336-.224 1.346-.673 3.982-1.402 5.44 1.402.392.785 1.121-2.86-1.626-6.225z","size":20,"color":"#FA7343"},{"tag":"ios","tech":"iOS","name":"M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z","size":20,"color":"#000000"}]}},"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tags":["swift","ios"]}}},{"node":{"frontmatter":{"tags":["ruby"]}}},{"node":{"frontmatter":{"tags":["ruby"]}}}]}}}')}}]);
//# sourceMappingURL=component---src-templates-tag-js-2a925c9b827c8d44917a.js.map