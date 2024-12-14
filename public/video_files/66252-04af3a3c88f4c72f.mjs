"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[66252,18755],{835157:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(383399);let r=()=>{let e=(0,s.Z)();return!!e.isAuth&&e.isPartner}},53608:(e,t,a)=>{a.d(t,{FE:()=>$,lG:()=>U,d9:()=>R});var s=a(667294),r=a(616550),n=a(835157),i=a(957583),u=a(297728),l=a(383399),c=a(415787);let d=()=>{let e=(0,l.Z)(),{checkExperiment:t}=(0,u.F)(),a=(0,n.Z)()&&t("web_m10n_business_reporting_business_entity_service").anyEnabled,[r,d]=(0,s.useState)({isReady:!1}),o=(0,s.useCallback)(async({entityId:e,actingBusinessId:t,favorites:s})=>{a&&(await (0,i.yo)({entityId:e,actingBusinessId:t,favorites:s}),d(e=>{let a={...e,actingBusinessId:t};return s&&(a.favoriteAdAccounts={favoriteAdAccountsMap:{...e.favoriteAdAccounts?.favoriteAdAccountsMap||{},[s.actingBusinessId]:{advertiserId:s.adAccounts}}}),a}))},[a]);return(0,s.useEffect)(()=>{a&&e.isAuth&&!r.isReady&&(async()=>{let t=!1;try{let t=await (0,i.SF)({entityId:e.id});d(e=>({...e,...t}))}catch{t=!0}finally{(0,c.nP)("globalAccountSwitcher.getFavoriteAdAccounts",{sampleRate:1,tags:{businessId:e.id,hasError:t}}),d(e=>({...e,isReady:!0}))}})()},[r.isReady,a,e]),{accountSwitcherConfig:r,setConfig:o}};var o=a(545007),_=a(366513),m=a(442279),p=a(689567);let A=(0,m.P1)(p.Z,({viewerIsProfileOwnerOrProfileManager:e})=>e??void 0);var g=a(501912),S=a(801621),E=a(467403);let f=()=>{let e=(0,l.Z)(),t=(0,s.useRef)(e);t.current=e;let a=(0,o.I0)(),r=(0,g.Z)(),n=(0,s.useRef)(r);n.current=r;let u=(0,o.v9)(A),c=u?.data||void 0,d=(0,s.useRef)(c);d.current=c,(0,s.useEffect)(()=>{(async()=>{if(t.current.isAuth&&void 0===u.data){let e=await (0,i.bG)({user_id:t.current.id});if(void 0!==e&&void 0===d.current){let s=(0,S.D3)(t.current,e?.id??"",n)||t.current.isAuth&&t.current.username===e?.username;a((0,_.Z)(!!s))}}})()},[t,d,a,n,u]);let m=(0,E.rc)(c);return{viewerIsProfileOwnerOrProfileManagerData:c,previousIsViewerProfileOwnerOrProfileManager:m}};var y=a(200892),h=a(573706),I=a(498490),C=a(282999),N=a(812477),b=a(868808),O=a(668868),v=a(553740),T=a(785893);let{Provider:w,useHook:R}=(0,I.Z)("AccountSwitcherContext"),U=e=>e.search&&(0,b.mB)(e.search).advertiserId,$=({children:e})=>{let t=(0,r.TH)(),{params:{userBizId:a,businessHierarchyId:c,advertiserId:o,username:_}}=(0,r.$B)(),{catalogId:m}=(0,v.Z)(),p=U(t),A=(0,l.Z)(),{viewerIsProfileOwnerOrProfileManagerData:g,previousIsViewerProfileOwnerOrProfileManager:S}=f(),{checkExperiment:I}=(0,u.F)(),b=I("web_m10n_business_access_catalogs").anyEnabled,[R,$]=(0,s.useState)(""),[B,L]=(0,s.useState)(null),[D,Z]=(0,s.useState)(!1),[P,F]=(0,s.useState)(null),H=new URLSearchParams(t.search),[M,G]=(0,s.useState)(H.has("actingBusinessId")?null:{id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||""}),[k,x]=(0,s.useState)(!1),z=(0,n.Z)(),{logContextEvent:V}=(0,h.v)(),{accountSwitcherConfig:W,setConfig:Y}=d();(0,s.useEffect)(()=>{c?$(c):$("")},[c]);let j=(0,s.useCallback)(async({id:e,username:t})=>{let a=await (0,i.bG)({user_id:e,username:t});a&&F({type:e?y.Oz.BUSINESS_ACCOUNT:y.Oz.PROFILE,id:e||a.id,name:a.full_name,img:a.image_medium_url,username:t,ownerImg:a.image_medium_url,ownerName:a.full_name,actingBusinessFullName:M?.name||a.full_name}),x(!1)},[M]),q=(0,E.rc)(_);(0,s.useEffect)(()=>{(0,N.Z)(t)&&P&&q!==_&&_===A.username&&(j({username:A.username}),G({id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||""}),L({type:y.nt,id:A.id}))},[t,q,j,P,_,A.fullName,A.id,A.imageMediumUrl,A.username]),(0,s.useEffect)(()=>{let e=async({businessId:e,assetId:a})=>{if(!e){x(!1);return}let s=b&&(0,C.Bg)(t)?"CATALOG":"AD_ACCOUNT";try{let e={asset:{name:""},type:s};if(A.isAuth){let{data:{data:t={[a]:e}}={}}=await (0,O.pI)({businessId:M?.id||A.id,assetIds:[a],resourceType:s})||{},{asset:r,type:n}=t[a]||e;F({id:a,name:"CATALOG"===s?t[a].owner.full_name:r.name,img:t[a].owner.image_medium_url,type:n,ownerImg:t[a].owner.image_medium_url,ownerName:t[a].owner.full_name,actingBusinessFullName:M?.name||t[a].owner.full_name})}}catch{F({id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||"",type:y.Oz.BUSINESS_ACCOUNT,ownerImg:A.imageMediumUrl||"",ownerName:A.fullName||"",actingBusinessFullName:A.fullName||""})}x(!1)},s=async({id:e})=>{let t=await (0,i.p)({hierarchyId:e});F({id:e,name:t?.data?t.data.name:"",img:t?.data?t.data.img_medium_url:"",type:y.Oz.BUSINESS_HIERARCHY,ownerImg:t?.data?t.data.img_medium_url:"",ownerName:t?.data?t.data.name:"",actingBusinessFullName:t?.data?t.data.name:""}),x(!1)};if(A.isAuth&&z){let r=P&&P.username&&P.username!==_,n=!0===g&&g!==S;if((!P||r||n)&&!k&&M){let r=(0,C.z6)(t)||(0,C.h3)(t),n=o||!!p&&!r||(0,C.Bg)(t)&&b;x(!0),c?s({id:c}):a?j({id:a}):(0,N.Z)(t)&&_&&g?j({username:_}):n?e({businessId:A.id,assetId:o||p||m||""}):P&&P.id===A.id||(F({type:y.Oz.BUSINESS_ACCOUNT,id:A.id||"",name:A.fullName||"",img:A.imageMediumUrl||"",ownerImg:A.imageMediumUrl||"",ownerName:A.fullName||"",actingBusinessFullName:A.fullName||""}),x(!1))}}},[P,A,c,a,_,o,p,M,z,t,j,k,g,S,m,b]);let X=(0,s.useMemo)(()=>({activePanel:B,selectedHierarchyId:R,switcherOpen:D,openAccountSwitcher:()=>{if(V({event_type:101,view_type:608,component:14346}),!B){if((0,C.z6)(t))L({type:y.v8});else{let e=new URLSearchParams(t.search).get("actingBusinessId");L({type:y.nt,id:e??M?.id})}}Z(!0)},closeAccountSwitcher:()=>{L(P&&!(0,C.z6)(t)?{type:y.nt,id:M?.id}:{type:y.v8}),Z(!1)},openAssetPanel:e=>{L({type:y.nt,id:e})},closeAssetPanel:()=>{L(P&&!(0,C.z6)(t)?{type:y.nt,id:M?.id}:{type:y.v8})},activateBusinessPanel:()=>{L({type:y.v8})},actingBusiness:M,selectedAccount:P,setSelectedAccount:F,setActingBusiness:G,accountSwitcherConfig:W,setConfig:Y}),[B,R,D,M,P,W,Y,V,t]);return(0,T.jsx)(w,{value:X,children:e})}},252025:(e,t,a)=>{a.d(t,{C:()=>S,H:()=>E});var s=a(667294),r=a(835157),n=a(200892),i=a(957583),u=a(449112),l=a(909015),c=a(591769),d=a(498490),o=a(400416),_=a(697254),m=a(383399),p=a(697843),A=a(785893);let{Provider:g,useHook:S}=(0,d.Z)("BusinessHierarchyContext"),E=({children:e})=>{let[t,a]=(0,s.useState)([]),[d,S]=(0,s.useState)([]),[E,f]=(0,s.useState)(!1),[y,h]=(0,s.useState)(!1),[I,C]=(0,s.useState)({}),[N,b]=(0,s.useState)(null),[O,v]=(0,s.useState)([]),[T,w]=(0,s.useState)({}),R=(0,p.Z)(),U=(0,s.useRef)(R),$=(0,m.Z)(),B=(0,r.Z)(),L=(0,s.useRef)({}),D=(0,s.useCallback)((e,t)=>{let a;t===n.Oz.BUSINESS_HIERARCHY?a=(0,c.Z)(l.Q6.DASHBOARD,"","",e):t===n.Oz.BUSINESS_ACCOUNT&&(a=(0,c.Z)(l.Q6.DASHBOARD,e));let s=(0,_.Z)({site:"www",path:a});(0,u.Z)(s)},[]),Z=(0,s.useCallback)(async e=>{if(!B)return[];if(h(!0),L.current[e])return h(!1),L.current[e];{let{data:t}=(await (0,o.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:e}})).resource_response,a=t&&t.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=n.Oz.USER_ACCOUNT,e))),e))||[],s=/^\d+$/.test(e),r=RegExp(e.toLowerCase(),"g"),u=[];N||b(u=await U.current());let l=(N??u).filter(t=>s?t.id.includes(e):t.user.full_name.toLowerCase().match(r)).map(i.IT),c=[...a.map(e=>e.id),...l.map(e=>e.id)],d=s?($.id||"").includes(e):($.fullName||"").toLowerCase().match(r);return $.isAuth&&d&&c.push($.id),L.current[e]=c,h(!1),c}},[B,U,$.id,$.fullName,$.isAuth,N]),{id:P="",username:F="",email:H="",fullName:M="",imageSmallUrl:G="",imageMediumUrl:k="",isAuth:x}=$,z=async(e,t)=>{if((!x||!B||N)&&!e)return;f(!0);let s=[];try{let{data:e}=(await (0,o.Z)({url:"ads/v4/business_access/business_hierarchies/"})).resource_response;s=e&&e.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=n.Oz.USER_ACCOUNT,e))),e))||[],a(s)}catch{a([])}try{let a=[];(!N||e)&&(a=await U.current(),S(a.filter(e=>t&&N&&!N.some(({id:t})=>t===e.id)).map(e=>e.user.full_name)),b(a));let r=e?a:N??a;v(r.map(i.IT)),w(r.reduce((e,t)=>(e[t.id]=t.business_roles||[],e),{})),C((0,i.WP)({id:P,username:F,email:H,fullName:M,imageSmallUrl:G,imageMediumUrl:k})),L.current[""]=[...s.map(e=>e.id),...r.map(i.IT).map(e=>e.id),P],f(!1)}catch{f(!1)}},V=(0,s.useCallback)(z,[P,F,H,M,G,k,x,B,N]),W=(0,s.useCallback)(e=>t.some(t=>t.id===e||t.children.some(t=>t.id===e||t.user.id===e)),[t]),Y=(0,s.useCallback)(e=>t.map(e=>"BUSINESS_HIERARCHY"===e.entity_type?e:null).find(t=>!!t&&t.children.some(t=>t.user.id===e)),[t]),j=(0,s.useCallback)(()=>{S([])},[S]),q=(0,s.useMemo)(()=>({businessHierarchies:[...I.id&&!W(I.id)?[I]:[],...t,...O.filter(e=>!W(e.id))],switchAccount:D,searchAccounts:Z,loadingAccounts:E,isSearchingAccounts:y,fetchData:V,getParentHierarchyForIdIfExists:Y,viewerRolesOfEachEmployer:T,tooltipEmployers:d,hideTooltip:j}),[t,D,Z,O,E,y,I,V,W,Y,T,d,j]);return(0,A.jsx)(g,{value:q,children:e})}},957583:(e,t,a)=>{a.d(t,{IT:()=>c,SF:()=>m,Vq:()=>l,WP:()=>d,bG:()=>_,p:()=>o,yo:()=>p});var s=a(252071),r=a(200892),n=a(400416),i=a(113916),u=a(719641);let l=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,user:{id:e.user.id,entity_type:r.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),c=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:e.requires_mfa_for_roles,user:{id:e.user.id,entity_type:r.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),d=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,user:{id:e.id,entity_type:r.Oz.USER_ACCOUNT,username:e.username,email:e.email,full_name:e.fullName,image_small_url:e.imageSmallUrl,image_medium_url:e.imageMediumUrl}}),o=async({hierarchyId:e})=>(await (0,n.Z)({url:`ads/v4/business_access/business_hierarchy/${e}/`})).resource_response,_=async({user_id:e,username:t})=>{if(!t&&!e)return null;let{resource_response:{data:a}}=await s.Z.create("UserResource",{user_id:e,username:t}).callGet();return a},m=async({entityId:e})=>{let t=(await (0,i.FO)([{entity_type:"BIZ_USER",entity_id:e,property_keys:["GLOBAL_ACCOUNT_SWITCHER_CONFIG"]}]))[0];return t&&t.properties?t.properties.GLOBAL_ACCOUNT_SWITCHER_CONFIG:{}},p=async({entityId:e,actingBusinessId:t,favorites:a})=>{let s={};(0,u.k)(t)||(s.actingBusinessId=t),a&&(s.favoriteAdAccounts={favoriteAdAccountsMap:{[a.actingBusinessId]:{advertiserId:a.adAccounts}}}),Object.keys(s).length>0&&await (0,i.RM)([{entity_type:"BIZ_USER",entity_id:e,properties:{GLOBAL_ACCOUNT_SWITCHER_CONFIG:s}}])}},118755:(e,t,a)=>{a.d(t,{G6:()=>n,i7:()=>i,oi:()=>s,u$:()=>r,un:()=>l,vU:()=>u,w1:()=>c});let s=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>e?e.includes("Chrome")?s.CHROME:e.includes("Safari")?s.SAFARI:e.includes("Firefox")?s.FIREFOX:e.includes("Opera")?s.OPERA:e.includes("IE")?s.IE:e.includes("Edge")?s.EDGE:s.OTHER:s.OTHER;function n(e){return r(e)===s.SAFARI}function i(e){return r(e)===s.CHROME}function u(e){return r(e)===s.FIREFOX}function l(e){return r(e)===s.EDGE}function c(e){return r(e)===s.IE}},591769:(e,t,a)=>{a.d(t,{Z:()=>n});let s="/business/business-manager/",r="/business/business-hierarchy/",n=(e,t,a,n)=>{switch(e){case"DASHBOARD":return n?`${r}${String(n)}/dashboard/`:`${s}${String(t)}/dashboard/`;case"PEOPLE":return`${s}${String(t)}/employees/`;case"PARTNERS":return`${s}${String(t)}/partners/`;case"AD_ACCOUNTS":return`${s}${String(t)}/ad-accounts/`;case"HISTORY":return`${s}${String(t)}/history/`;case"PEOPLE_DETAIL":return`${s}${String(t)}/employees/${String(a)}/details/`;case"PARTNERS_DETAIL":return`${s}${String(t)}/partners/${String(a)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${s}${String(t)}/shared/${String(a)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${s}${String(t)}/ad-accounts/${String(a)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${s}${String(t)}/ad-accounts/pending/${String(a)}/details/`;case"PEOPLE_PENDING_TAB":return`${s}${String(t)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${s}${String(t)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${s}${String(t)}/ad-accounts/pending`;case"AD_ACCOUNTS_CEE_MIGRATION":return`${s}${String(t)}/ad-accounts/cee-migration`;case"PROFILES":return`${s}${String(t)}/profiles/`;case"PROFILES_DETAIL":return`${s}${String(t)}/profiles/${String(a)}/details/`;case"BUSINESS_SECURITY":return`${s}${String(t)}/security/`;case"SUPPORT_TOOL":return`${s}${String(t)}/support/`;case"ASSET_GROUPS":return a?`${s}${String(t)}/asset-groups/?asset_group_id=${String(a)}`:`${s}${String(t)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${s}${String(t)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${r}${String(n)}/hierarchy/`;case"BUSINESS_HIERARCHY_BUSINESS_SECURITY":return`${r}${String(n)}/business_security/`;case"MANAGERS":return`${r}${String(n)}/managers/`;case"AUDIENCES":return`${s}${String(t)}/audiences/`;case"SHARED_TAGS":return`${s}${String(t)}/shared-tags/`;case"CATALOGS":return`${s}${String(t)}/catalogs/`;case"BRAND_SAFETY":return`${s}${String(t)}/brand-safety/`;case"BUSINESS_SETTINGS":return`${s}${String(t)}/settings/`;default:return s}}},777396:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(566344);let r=()=>{let{hostname:e}=window.location,t=e.includes("pinterdev")&&!e.includes("ads.pinterdev"),a=e.includes("pinterest")&&(e.startsWith("www")||e.startsWith("latest")||e.startsWith("testing"));return t||a?e:e.includes("ads-latest")?"latest.pinterest.com":s.Vi}},812477:(e,t,a)=>{a.d(t,{Z:()=>n,c:()=>i});var s=a(616550);let r=["/BingSiteAuth.xml","/about","/add-account","/ads","/ads.txt","/age_verification","/all","/app-ads.txt","/apple-app-site-association","/apple-app-site-association.p7m","/attribution_source","/bot.html","/branded-pins","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-personal","/creation-inspiration","/creator-onboarding-landing","/csrf_error","/ct.html","/deactivate-account","/deed6a3ef3a44d41bb3ae2bad137db84.txt","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/flyup-instant-loading-indicator-app-shell.html","/following","/getWebPushKey","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-ads-tool","/idea-pin-builder","/ideas","/inbox","/install-shuffles","/invited","/jobs","/lens-search","/login","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/app-factory-oauth","/appealed-pin","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/parental-passcode","/pin-builder","/pin-creation-tool","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/public-beta","/quick-instant-loading-indicator-app-shell.html","/quick-lite-instant-loading-indicator-app-shell.html","/recently-viewed","/refresh_stored_accounts","/refresh_token","/report","/reports-and-violations","/request-data","/robots.txt","/safe-redirect","/search","/settings","/shopping","/signup","/socialmanager","/story-pin-builder","/story_feed","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/unauth-profile","/unlink","/upload-image","/upload-image-lens-history","/upload-lens-image","/upload-profile-image","/verified","/verify","/videos","/web-custom-svg","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"];function n(e){return!!(0,s.LX)(e.pathname,{path:"/:username/",exact:!0})&&!r.includes(e.pathname.replace(/\/$/,""))}function i(e){return!!(0,s.LX)(e.pathname,{path:"/:username/_created/",exact:!0})}},697843:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(400416);function r(){return async()=>{let e=await (0,s.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),t=e.resource_response?e.resource_response.data:{data:[]};return await Promise.all(t&&t.data||[])}}},366513:(e,t,a)=>{a.d(t,{Z:()=>s});function s(e){return{type:"UPDATE_VIEWER_IS_PROFILE_OWNER_OR_PROFILE_MANAGER",payload:e}}},126441:(e,t,a)=>{a.d(t,{By:()=>n,di:()=>u,s8:()=>i});var s=a(909015),r=a(400416);let n=async({limit:e,sortBy:t="FULL_NAME",sortDirection:a="ASCENDING",searchBy:n="FULL_NAME",searchTerm:i="",startIndex:u=0})=>{let l=e&&e<s.xX?e:s.xX;return(await (0,r.Z)({url:"ads/v4/business_access/businesses/me/get_pinterest_support_businesses",data:{sort_by:t,sort_ascending:"ASCENDING"===a,search_by:n,search_value:i,start_index:u,page_size:l}})).resource_response},i=async e=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${e}/get_pinterest_support_access`})).resource_response,u=async()=>(await (0,r.Z)({url:"ads/v4/pinterest_support_managed_advertisers",data:{add_fields:"advertiser.owner_user()"}})).resource_response},689567:(e,t,a)=>{a.d(t,{Z:()=>s});let s=({businessAccess:e})=>e??{}},553740:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(616550);function r(){let{catalog_id:e,feed_profile_id:t,workflow_id:a,product_group_id:r,event_type_id:n,supplemental_feed_profile_id:i}=(0,s.UO)();return{catalogId:e,feedProfileId:t,workflowId:a,productGroupId:r,eventTypeId:n,supplementalFeedProfileId:i}}},148961:(e,t,a)=>{a.d(t,{I:()=>S,a:()=>A});var s=a(667294),r=a(616550),n=a(957583),i=a(277516),u=a(498490),l=a(297728),c=a(383399),d=a(126441),o=a(999765);let _=()=>{let{checkExperiment:e}=(0,l.F)(),t=(0,c.Z)(),a=!!(t.isAuth&&t.isPartner&&e("web_m10n_pin_support_tool").anyEnabled),{state:r,receiveAdAccounts:n}=(0,o.Z)(a),{managedBusinessesMap:i,error:u,fetching:_}=r,m=!!u||i.size>0,p=(0,s.useCallback)(async()=>{let e=await (0,d.di)();n(e?.data??[])},[n]);return(0,s.useEffect)(()=>{m||_||p()},[p,m,_]),i};var m=a(785893);let{Provider:p,useMaybeHook:A}=(0,u.Z)("PinSupportToolContext"),g=()=>{let{search:e}=(0,r.TH)();return(0,s.useMemo)(()=>new URLSearchParams(e),[e])},S=({children:e,viewerAdvertiser:t})=>{let{checkExperiment:a}=(0,l.F)(),r=(0,c.Z)(),u=r.isAuth&&r.isPartner&&a("web_m10n_pin_support_tool").anyEnabled,{state:d,actions:A}=(0,o.Z)(u),S=_(),E=[...S.values()].map(e=>(0,n.Vq)(e)),{sterling_on_steroids_ldap:f}=(0,i.u)(),{activeAdAccount:y,headerVisible:h}=d,I=r.isAuth&&!!f,{changeClient:C,changeAdAccount:N,toggleHeaderVisibility:b}=A;(0,s.useEffect)(()=>{u&&(I&&!h&&b(!0),!I&&h&&b(!1))},[b,I,u,h]);let O=g(),v=O.get("managedClientId"),T=O.get("advertiserId")||t?.id;(0,s.useEffect)(()=>{v&&T?N(T,v):v&&C(v)},[C,N,v,T]);let w=S.get(y?.clientId||""),R=(w?.managedAdAccounts||new Map).get(y?.adAccountId||""),U=[...S.values()];return(0,m.jsx)(p,{value:{managedBusinesses:U,managedBusinessAccounts:E,headerVisible:d.headerVisible,activeClient:w,activeAdAccount:R,viewerAdvertiser:t,changeClient:C,changeAdAccount:N,toggleHeaderVisibility:b},children:e})}},999765:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(667294),r=a(978993);let n=e=>[...e.map(e=>({id:e.business.id,ownedAndManagedAdAccounts:e.business.ad_account_count,user:e.business.pinterest_support_business,managedAdAccounts:e.advertisers.reduce((e,t)=>e.set(t.id,t),new Map)}))].sort(({user:{username:e}},{user:{username:t}})=>e.localeCompare(t)).map(e=>{let t=[...e.managedAdAccounts.values()].sort(({name:e},{name:t})=>e.localeCompare(t));return e.managedAdAccounts=t.reduce((e,t)=>e.set(t.id,t),new Map),e}).reduce((e,t)=>e.set(t.id,t),new Map),i={managedBusinessesMap:new Map,headerVisible:!1,activeAdAccount:{clientId:void 0,adAccountId:void 0},fetching:!1,error:!1},u=(e,t)=>{switch(t.type){case"LOAD_AD_ACCOUNTS":return{...e,managedBusinessesMap:t.payload.managedBusinesses};case"SET_ACTIVE_CLIENT":case"SET_ACTIVE_AD_ACCOUNT":return{...e,activeAdAccount:t.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:t.payload};default:return e}},l=({dispatch:e,isEnabled:t,state:a})=>{let{headerVisible:r}=a;return{changeClient:(0,s.useCallback)(a=>{t&&e({type:"SET_ACTIVE_CLIENT",payload:{clientId:a,adAccountId:null}})},[t,e]),changeAdAccount:(0,s.useCallback)((a,s)=>{t&&e({type:"SET_ACTIVE_AD_ACCOUNT",payload:{adAccountId:a,clientId:s}})},[t,e]),toggleHeaderVisibility:(0,s.useCallback)(a=>{t&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:a??!r})},[t,e,r])}},c=e=>{let[t,a]=(0,s.useReducer)(u,i),c=l({dispatch:a,isEnabled:e,state:t}),{activeAdAccount:d}=t;return(0,s.useEffect)(()=>{let e=JSON.parse((0,r.qn)("psToolAdAccount",!1));e&&a({type:"SET_ACTIVE_AD_ACCOUNT",payload:e})},[]),(0,s.useEffect)(()=>{(0,r.Nh)("psToolAdAccount",JSON.stringify(d))},[d]),{state:t,actions:c,receiveAdAccounts:(0,s.useCallback)(e=>{a({type:"LOAD_AD_ACCOUNTS",payload:{managedBusinesses:n(e)}})},[a])}}},605935:(e,t,a)=>{a.d(t,{Z:()=>o,f:()=>d});var s=a(667294),r=a(400416),n=a(297728),i=a(730212),u=a(319453);let l="ADVERTISER",c=(e,t)=>e&&e[t]&&e[t][0]&&e[t][0].preferences,d=async e=>{let t;try{let a=(await (0,r.Z)({method:"GET",url:`/ads/v4/preferences/${e}/`,data:{level:l,key:"CAMPAIGN_TOOL_PREFERENCE"}})).resource_response.data;t=c(a,l)}catch{return null}return t&&(0,u.TT)(t)?t:null},o=()=>{let[e,t]=(0,s.useState)(null),a=(0,n.F)(),{advertiser:r}=(0,i.B)();return(0,s.useEffect)(()=>{(0,u.UM)(a,{skipActivation:!0})&&(async()=>{r&&t(await d(r.id))})()},[r,a]),e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/66252-04af3a3c88f4c72f.mjs.map