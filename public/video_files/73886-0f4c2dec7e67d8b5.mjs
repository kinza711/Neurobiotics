"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73886],{17314:(e,t,r)=>{r.d(t,{Z:()=>u});var a,o,n=r(813653),i=r(861470),d=0,c=0;let u=function(e,t,r){var u=t&&r||0,s=t||Array(16),l=(e=e||{}).node||a,m=void 0!==e.clockseq?e.clockseq:o;if(null==l||null==m){var g=e.random||(e.rng||n.Z)();null==l&&(l=a=[1|g[0],g[1],g[2],g[3],g[4],g[5]]),null==m&&(m=o=(g[6]<<8|g[7])&16383)}var _=void 0!==e.msecs?e.msecs:Date.now(),E=void 0!==e.nsecs?e.nsecs:c+1,p=_-d+(E-c)/1e4;if(p<0&&void 0===e.clockseq&&(m=m+1&16383),(p<0||_>d)&&void 0===e.nsecs&&(E=0),E>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");d=_,c=E,o=m;var T=((268435455&(_+=122192928e5))*1e4+E)%4294967296;s[u++]=T>>>24&255,s[u++]=T>>>16&255,s[u++]=T>>>8&255,s[u++]=255&T;var y=_/4294967296*1e4&268435455;s[u++]=y>>>8&255,s[u++]=255&y,s[u++]=y>>>24&15|16,s[u++]=y>>>16&255,s[u++]=m>>>8|128,s[u++]=255&m;for(var f=0;f<6;++f)s[u+f]=l[f];return t||(0,i.Z)(s)}},136061:(e,t,r)=>{r.d(t,{Hv:()=>c,aX:()=>l,nK:()=>m});var a=r(667294),o=r(616550),n=r(498490),i=r(785893);let{Provider:d,useHook:c}=(0,n.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),u=e=>e&&e.pathname?e.pathname+(e.search||""):"";function s(e,t){let r={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&u(e.forward[0].location)===u(r.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:r,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:r};default:return e}}function l(){let{current:e,previous:t}=c();return(0,a.useMemo)(()=>e?t.concat(e):t,[e,t])}function m({children:e}){let t=(0,o.k6)(),r=(0,o.TH)(),n=(0,o.$B)(),c={forward:[],current:{action:t.action,location:r,match:n},previous:[]},[u,l]=(0,a.useReducer)(s,c);return(0,a.useEffect)(()=>{let{action:e}=t;l({type:e,location:r,match:n})},[r]),(0,i.jsx)(d,{value:u,children:e})}},616949:(e,t,r)=>{r.d(t,{Z:()=>d,h:()=>i});var a=r(172045),o=r(17314);function n(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let i="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),d=class{constructor(e){n(this,"start",()=>(this.startTime=i(),this.startTime)),n(this,"end",()=>(this.endTime=i(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,a.Z)()}catch(e){this.uuid=(0,o.Z)()}e&&Object.assign(this,e)}}},625987:(e,t,r)=>{r.d(t,{pb:()=>f,nf:()=>A,lV:()=>C});var a=r(667294),o=r(545007),n=r(441143),i=r.n(n),d=r(252071),c=r(498490),u=r(400416),s=r(465848),l=r(785220),m=r(972147);let g={feature_map:Object.freeze({})},_=(e,t)=>{let r={...(0,m.Z)(e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return(0,l.ZP)(e,r)?e:r},E=(e=g,t)=>{if("FETCH_COMPLETE"===t.type){let{payload:{resource:r}}=t,{data:a}=t.payload.response.resource_response;if("AggregatedCommentFeedResource"===r||"AggregatedCommentReplyFeedResource"===r||"DidItCommentsResource"===r){let t=(a||[]).reduce((t,r)=>(t[r.id]=_(e[r.id],r),t),{});return{...e,...t}}if("UnifiedCommentsResource"===r&&a&&a.length>0){let t=a.filter(e=>"aggregatedcomment"===e.type).reduce((t,r)=>(t[r.id]=_(e[r.id],r),t),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===r&&a&&a.length>0){let t=a[0].aggregated_comment,r=t?{[t.id]:_(e[t.id],t)}:{},o=a[0].creator_reply,n=o?{[o.id]:_(e[o.id],o)}:{};return{...e,...r,...n}}if("AggregatedCommentFeaturesResource"===r&&a&&Object.keys(a).length>0)return{...e,feature_map:a}}else if("AGGREGATED_COMMENT_CREATED"===t.type){let{payload:{aggregatedComment:r}}=t;return r.id?{...e,[r.id]:r}:e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){let{payload:{aggregatedCommentId:r}}=t,a={...e};return delete a[r],a}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){let{payload:{userId:r}}=t;return Object.fromEntries(Object.entries(e).filter(e=>e[1].user?.id!==r))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){let{payload:{data:r}}=t;return{...e,[r.id]:_(e[r.id],r)}}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){let{payload:{data:r}}=t,a=e[r.id],o=a.reaction_counts[1]||0,n={1:r.reaction_by_me?o+1:o-1},i={...a,reaction_by_me:r.reaction_by_me,reaction_counts:n};return{...e,[r.id]:i}}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){let{payload:{data:r}}=t,a=e[r.id],o=a.helpful_count||0,n=r.marked_helpful_by_me?o+1:o-1,i={...a,marked_helpful_by_me:r.marked_helpful_by_me,helpful_count:n};return{...e,[r.id]:i}}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){let{payload:{data:r}}=t,a={...e[r.aggregated_comment_id],highlighted_by_pin_owner:r.is_highlighted};return{...e,[r.aggregated_comment_id]:a}}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){let{payload:{data:{featureMap:r}}}=t;return{...e,feature_map:{...e.feature_map,...r}}}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){let{payload:{increment:r,id:a}}=t,o=e[a];if(!o)return e;let n={...o,comment_count:o.comment_count+r};return{...e,[a]:n}}else if("DELETE_COMMENT_MENTION"===t.type){let{payload:{aggregatedCommentId:r,tagged_users:a}}=t,o={...e[r],tagged_users:a};return{...e,[r]:o}}else if("GET_COMMENT_TRANSLATION"===t.type){let{payload:{aggregatedCommentId:r,translatedText:a}}=t,o={...e[r],translatedText:a};return{...e,[r]:o}}return e};var p=r(785893);let{Provider:T,useHook:y}=(0,c.Z)("AggregatedComments");function f({children:e}){let t=(0,o.v9)(({resources:e})=>e?.UnifiedCommentsResource),r=g;t&&Object.values(t).forEach(e=>{let t=e.data?.filter(e=>"aggregatedcomment"===e.type),a=t?.reduce((e,t)=>(e[t.id]=_(r[t.id],t),e),{});r={...r,...a}});let[n,i]=(0,a.useReducer)(E,r),d=e=>{i({type:"FETCH_COMPLETE",payload:e})};(0,s.Z8)("AggregatedCommentFeaturesResource",d),(0,s.my)("AggregatedCommentFeaturesResource",d),(0,s.Z8)("AggregatedCommentFeedResource",d),(0,s.my)("AggregatedCommentFeedResource",d),(0,s.Z8)("AggregatedCommentReplyFeedResource",d),(0,s.my)("AggregatedCommentReplyFeedResource",d),(0,s.Z8)("DidItCommentsResource",d),(0,s.my)("DidItCommentsResource",d),(0,s.Z8)("UnifiedCommentsPreviewResource",d),(0,s.my)("UnifiedCommentsPreviewResource",d),(0,s.Z8)("UnifiedCommentsResource",d),(0,s.my)("UnifiedCommentsResource",d);let c=(0,a.useMemo)(()=>({aggregatedComments:n,dispatch:i}),[n,i]);return(0,p.jsx)(T,{value:c,children:e})}function A(){let{dispatch:e}=y();return(0,a.useMemo)(()=>({aggregatedCommentCreated(t,r){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:r}})},aggregatedCommentDeleted:(t,r)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:r}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({commentId:e,reason:t,detailedReasons:r})=>(0,u.Z)({url:`/v3/aggregated_comments/${e}/flag/`,method:"PUT",data:{commentId:e,reason:t,detailedReasons:r}}),deleteCommentMention:async t=>{let{resource_response:r}=await (0,u.Z)({url:`/v3/aggregated_comments/${t}/mentions/`,method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}}),a=r.data??{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:a.id,tagged_users:a.tagged_users}})},translateAggregatedComment:async t=>{try{let{resource_response:r}=await (0,u.Z)({url:`/v3/aggregated_comments/${t}/translate/`,method:"GET"}),a=r.data??"";e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:a}})}catch(r){e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:""}})}},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:r,orbacSubjectId:a})=>{(0,u.Z)({url:`/v3/helpful/1/${t}/`,method:r?"DELETE":"POST",data:a?{orbac_subject_id:a}:{}}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!r}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:r,isHighlighted:a})=>{i()(t,"Could not find comment"),i()(r,"Could not find Pin"),await (0,u.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:t,pin:r,highlight:!a}}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:r,is_highlighted:!a}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:r,orbacSubjectId:a})=>{(0,u.Z)({url:`/v3/aggregated_comments/${t}/react/`,method:r?"DELETE":"POST",data:{reaction_type:1,...a?{orbac_subject_id:a}:{}}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:r?0:1}}})},updateAggregatedComment:async({commentId:t,force:r,orbacSubjectId:a,tags:o,text:n})=>{let{resource_response:i}=await d.Z.create("AggregatedCommentResource",{commentId:t,force:r,tags:o,text:n,...a?{orbacSubjectId:a}:{}}).callUpdate({showError:!1}),{tagged_users:c}=i.data??{};e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:c.map(e=>({...e})),tags:JSON.parse(o),text:n}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:r,passcode:a,userConfirmPasscode:o})=>{let n={userId:t,featureMap:r,passcode:a,user_confirm_skip_passcode:o};void 0===o&&(n.user_confirm_skip_passcode=!1);let{resource_response:i}=await d.Z.create("AggregatedCommentFeaturesResource",n).callUpdate({showError:!1});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:i.data??Object.freeze({})}}})},updateCommentCount:(t,r)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:r,id:t}})}}),[e])}function C(){let{aggregatedComments:e}=y();return e}},60983:(e,t,r)=>{r.d(t,{G:()=>m,Kl:()=>g,vo:()=>l});var a=r(667294),o=r(498490),n=r(465848),i=r(576359),d=r(785893);let c=()=>r.e(27137).then(r.bind(r,527137)),{Provider:u,useHook:s}=(0,o.Z)("NativeEngagements");function l({children:e}){let[t,r]=(0,i.Z)(c,[]);(0,n.Z8)("NativeInteractionsResource",e=>{r({type:"FETCH_COMPLETE",payload:e})}),(0,n.my)("NativeInteractionsResource",e=>{r({type:"FETCH_MORE_COMPLETE",payload:e})});let o=(0,a.useMemo)(()=>({dispatch:r,nativeEngagements:t}),[r,t]);return(0,d.jsx)(u,{value:o,children:e})}function m(){let{dispatch:e}=s();return(0,a.useMemo)(()=>({nativeEngagementsHiddenForUser:t=>{e({type:"NATIVE_ENGAGEMENT_HIDDEN_FOR_USER",payload:{userId:t}})}}),[e])}function g(){let{nativeEngagements:e}=s();return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73886-0f4c2dec7e67d8b5.mjs.map