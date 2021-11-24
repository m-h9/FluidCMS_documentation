"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[599],{6567:function(e,l,t){t.r(l),t.d(l,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],d={sidebar_position:1},i="Model Api",s={unversionedId:"model",id:"model",isDocsHomePage:!1,title:"Model Api",description:"Let's create New Model For Project.",source:"@site/docs/model.md",sourceDirName:".",slug:"/model",permalink:"/FluidCMS_documentation/docs/model",editUrl:"https://github.com/m-h9/FluidCMS_documentation/docs/model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Media Api",permalink:"/FluidCMS_documentation/docs/media"},next:{title:"Records Api",permalink:"/FluidCMS_documentation/docs/record"}},p=[{value:"Route For Create New Model",id:"route-for-create-new-model",children:[],level:2},{value:"Route Get Only One Model",id:"route-get-only-one-model",children:[],level:2},{value:"Route For Update Model",id:"route-for-update-model",children:[],level:2},{value:"Route For Get All Model",id:"route-for-get-all-model",children:[],level:2},{value:"Route For Deleting Model",id:"route-for-deleting-model",children:[],level:2}],u={toc:p};function m(e){var l=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"model-api"},"Model Api"),(0,a.kt)("p",null,"Let's create ",(0,a.kt)("strong",{parentName:"p"},"New Model For Project"),"."),(0,a.kt)("h2",{id:"route-for-create-new-model"},"Route For Create New Model"),(0,a.kt)("p",null,"Here is Create new Model EndPoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/project\n")),(0,a.kt)("p",null,"Provide Project title to create new Project.\n",(0,a.kt)("em",{parentName:"p"},"Provide Full Access Token in Authorization Header")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "name":"Demo",\n    "alias":"demo"\n}\n\n')),(0,a.kt)("p",null,"In response will look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "ok": true,\n    "data": {\n        "model_id": "617e53efd61e1d0a1719eee8"\n    }\n}\n')),(0,a.kt)("h2",{id:"route-get-only-one-model"},"Route Get Only One Model"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("br",null)," Provide Access Token in Authorization Header.")),(0,a.kt)("p",null,"Here is Getting single model EndPoint ",(0,a.kt)("strong",{parentName:"p"},"Provide model identifier in URL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/<modelAlias>\n")),(0,a.kt)("p",null,"And URL will look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/demo\n")),(0,a.kt)("p",null,"And response will be like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "ok": true,\n    "data": {\n        "model": {\n            "name": "Demo",\n            "alias": "demo",\n            "fields": []\n        }\n    }\n}\n\n')),(0,a.kt)("h2",{id:"route-for-update-model"},"Route For Update Model"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Provide Full Access Token in Authorization Header")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Provide model identifier in URL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/<modelAlias>\n")),(0,a.kt)("p",null,"And URL will look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/demo\n")),(0,a.kt)("p",null,"You can only update Model Title through this endpoint. ",(0,a.kt)("br",null),"\nAnd Use patch Http method to update User"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "alias":"Demo2"\n}\n\n')),(0,a.kt)("p",null,"And response will be like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "ok": true,\n    "data": {\n        "message": "Model updated"\n    }\n}\n\n')),(0,a.kt)("h2",{id:"route-for-get-all-model"},"Route For Get All Model"),(0,a.kt)("p",null,"Here is Get All Project EndPoint.\nPlease ",(0,a.kt)("em",{parentName:"p"},"Provide Full access token in authorization Header to Get ALL Models"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/all\n")),(0,a.kt)("p",null,"And response will be like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "ok": true,\n    "data": {\n        "models": [\n            {\n                "_id": "617e53efd61e1d0a1719eee8",\n                "name": "Demo",\n                "alias": "Demo2",\n                "fields": []\n            }\n        ]\n    }\n}\n\n\n')),(0,a.kt)("h2",{id:"route-for-deleting-model"},"Route For Deleting Model"),(0,a.kt)("p",null,"Here is Deleting EndPoint through User Token."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Provide Full Access Token in Authorization Header")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Provide model identifier in URL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/<modelAlias>\n")),(0,a.kt)("p",null,"And URL will look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://api-fluidcms.herokuapp.com/model/Demo2\n")),(0,a.kt)("p",null,"Response will be like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "ok": true,\n    "data": {\n        "message": "Model deleted successfully"\n    }\n}\n\n')),(0,a.kt)("p",null,"Your API Base URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-fluidcms.herokuapp.com"),"."))}m.isMDXComponent=!0}}]);