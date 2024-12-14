"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[37955],{208121:(e,t,l)=>{l.d(t,{CB:()=>h,y9:()=>u});var o=l(667294),i=l(498490),s=l(883119),r=l(400416),n=l(758339),a=l(144326),d=l(785893);let c=({onConfirm:e})=>{let t=(0,a.ZP)(),[l,i]=(0,o.useState)(!1),c=()=>{i(!0),(0,r.Z)({url:"/v3/users/email/verify/resend/",method:"POST"})};return(0,d.jsx)(n.ZP,{accessibilityModalLabel:t.bt("Verify your email", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,d.jsxs)(s.kC,{gap:{row:2,column:0},justifyContent:"end",children:[l?(0,d.jsx)(s.zx,{color:"gray",disabled:l,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Email sent", "Email sent", "Button text for verification email being sent", undefined, true)}):(0,d.jsx)(s.zx,{color:"gray",disabled:l,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Resend email", "Resend email", "Button text for resending email verification email", undefined, true)}),(0,d.jsx)(s.zx,{color:"red",fullWidth:!0,onClick:e,size:"lg",text:t.bt("OK", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true)})]}),heading:t.bt("Verify your email", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,role:"alertdialog",children:(0,d.jsx)(s.xu,{padding:8,children:(0,d.jsx)(s.xv,{align:"center",size:"300",children:t.bt("Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})},{Provider:_,useHook:u}=(0,i.Z)("EmailVerificationReminderModal");function h({children:e}){let[t,l]=(0,o.useState)(!1),i=(0,o.useMemo)(()=>({showEmailVerificationReminderModal:()=>{l(!0)}}),[]);return(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(_,{value:i,children:e}),t&&(0,d.jsx)(c,{onConfirm:()=>{l(!1)}})]})}},289762:(e,t,l)=>{l.d(t,{Z:()=>r});var o=l(167912),i=l(244311),s=l(286102);let r=function({strategy:e,query:t,variables:l,options:r,useGetLegacyResource:n,useGetLegacyPaginatedResource:a,useGetLegacyData:d}){if("GRAPHQL"===e){let e=(0,i.getRequest)(t);return(0,o.useLazyLoadQuery)(e,l,r)}if(null!=n&&null!=a&&null!=d)throw Error("Only pass one of those calls from the list: \n[useGetLegacyResource, useGetLegacyPaginatedResource, useGetLegacyData]\nto useLazyLoadQueryOrLegacy");if(null!=d){let e=d(l);if(!e)return null;let{selections:o}=(0,i.getRequest)(t).fragment;return(0,s.Z)(o,{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null})}if(null!=n){let{data:e,refresh:o}=n(l);if(null==e)return null;let{selections:r}=(0,i.getRequest)(t).fragment;return(0,s.Z)(r,{kind:"LegacyData",singularLegacyData:e,refetchInfo:{refetch:o},paginationInfo:null})}if(null!=a){let{data:e,refresh:o,isFetching:r,isAtEnd:n,fetchMore:d}=a(l);if(null==e)return null;let{selections:c}=(0,i.getRequest)(t).fragment;return(0,s.Z)(c,{kind:"PaginationLegacyData",paginationLegacyData:e,refetchInfo:{refetch:o},paginationInfo:{isLoadingNext:r,hasNext:!n,loadNext:d}},null)}throw Error("useGetLegacyData or useGetLegacyResource must be provided")}},948938:(e,t,l)=>{l.d(t,{Z:()=>y});var o=l(667294),i=l(883119),s=l(559028),r=l(357013),n=l(144326),a=l(590338),d=l(240760),c=l(297728),_=l(730212),u=l(415384),h=l(715824),f=l(1006),p=l(228867),x=l(453854),g=l(115642),m=l(811093),b=l(701918),w=l(785893);let y=function(e){let t=(0,n.ZP)(),{locale:l,isAuthenticated:y}=(0,_.B)(),v=(0,a.Z)(),{checkExperiment:P}=(0,c.F)(),{isCloseupRelatedPinsAboveTheFoldEnabled:j}=(0,g.x4)(),{aggregatedSaves:z,boardName:A,boardUrl:C,followerCount:k,fullName:T,isVerifiedIdentity:L,imageUrl:E,isPromoted:Z,isVerifiedMerchant:B,profileUrl:S,sponsorName:I,sponsorshipStatus:F,sponsorUsername:N="",verified:M,color:D="default",onAvatarClick:U,onNavigateClick:R,onNavigateSponsorClick:q,openNewTab:O,isLeadPin:X=!1}=e,G=(0,c.F)().checkExperiment("mweb_web_android_ios_backend_clbc_display_controls").anyEnabled,H=!y&&P("unauth_show_aggregate_saves").anyEnabled,V=H&&P("unauth_show_aggregate_saves").group,W=(0,u.Z)(t.bt("{{ fullName }} avatar link", "{{ fullName }} avatar link", "creatorCardProfile.avatar.accessibilityLabel", undefined, true),{fullName:T??""}),K=(0,w.jsx)(x.q,{children:({active:e,focused:t,hovered:l,onBlur:o,onFocus:r,onMouseEnter:n,onMouseLeave:a})=>(0,w.jsx)(i.xu,{onBlur:o,onFocus:r,onMouseDown:()=>{U&&U()},onMouseEnter:n,onMouseLeave:a,children:(0,w.jsx)(i.zd,{rounding:"circle",wash:l||e||t,children:(0,w.jsx)(s.qE,{accessibilityLabel:W,name:T??"",size:j?"xs":"md",src:E??"",verified:M})})})}),Q=(0,h.ZP)(T,70),$=(0,w.jsxs)(o.Fragment,{children:[Z&&(0,w.jsx)(i.xv,{lineClamp:1,size:"200",weight:"bold",children:t.bt("Promoted by", "Promoted by", "indicating the username of the person who promoted the pin", undefined, true)}),(0,w.jsx)(i.xu,{"data-test-id":"creator-profile-name",children:(0,w.jsx)(i.xu,{maxWidth:270,children:(0,w.jsx)(i.xv,{color:D,size:"200",weight:X||j?"normal":"bold",children:L||B?(0,w.jsx)(i.xu,{"data-test-id":"verified-name",children:(0,w.jsx)(b.Z,{badgeSize:"xs",badgeSpacing:2,fullName:Q,isVerifiedIdentity:L,isVerifiedMerchant:B})}):T})})})]}),Y=N&&I||m.j.includes(F)&&G,J=`/${N??""}/`,ee=(0,w.jsx)(i.xu,{marginBottom:1,paddingX:1,children:(0,w.jsx)(i.xv,{size:"300",children:z&&(0,d.nk)(t.bt("{{ saveCount }} people saved Pins like this", "{{ saveCount }} people saved Pins like this", "closeup.pinAttribution.aggregateSaveCount", undefined, true),{saveCount:v(l,z,{shortform:!0,shortform_maximum_fraction_digits:0})})})}),et=S?(0,w.jsx)(i.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,w.jsx)(i.rU,{dataTestId:"creator-profile-link",href:S,onClick:R,rel:(0,p.Z)(S)?"none":"nofollow",target:O?"blank":null,underline:"none",children:$})}):$,el=A&&C&&(0,w.jsx)(i.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,w.jsx)(i.xv,{inline:!0,size:"enabled_show_board"!==V&&z?"200":"300",children:(0,d.XB)({text:t.bt("<a id=\"1\">{{pinnerName}}</a> saved to <a id=\"2\">{{boardName}}</a>", "<a id=\"1\">{{pinnerName}}</a> saved to <a id=\"2\">{{boardName}}</a>", "unauth.userAttribution.board", undefined, true),markers:{pinnerName:Q.toString(),boardName:A.toString()},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,w.jsx)(i.rU,{display:"inline",href:S??"",onClick:()=>(0,f.My)("unauth_aggregate_saves.username.click"),underline:"none",children:(0,w.jsx)(i.xv,{inline:!0,size:"enabled_show_board"!==V&&z?"200":"300",weight:"bold",children:L||B?(0,w.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{display:"inline"}},"data-test-id":"verified-name",children:(0,w.jsx)(b.Z,{badgeSize:"xs",badgeSpacing:H?0:2,fullName:Q,isVerifiedIdentity:L,isVerifiedMerchant:B})}):e})},"pinner-name-attribution"),2:({innerHtmlStrings:e})=>(0,w.jsx)(i.rU,{display:"inline",href:C?.toLowerCase(),onClick:()=>(0,f.My)("unauth_aggregate_saves.board_name.click"),underline:"none",children:(0,w.jsx)(i.xv,{inline:!0,size:"enabled_show_board"!==V&&z?"200":"300",weight:"bold",children:e})},"board-name-attribution")}})})});return(0,w.jsxs)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},"data-test-id":"creator-card-profile",display:"flex",marginEnd:-1,marginStart:-1,children:[(0,w.jsx)(i.xu,{"data-test-id":"creator-avatar",flex:"none",paddingX:1,children:S?(0,w.jsx)(i.Tg,{dataTestId:"creator-avatar-link",href:S,onTap:R,rel:(0,p.Z)(S)?"none":"nofollow",target:O?"blank":null,children:K}):K}),(0,w.jsxs)(i.xu,{children:[(!H||"enabled_dweb_no_follow"===V)&&et,("enabled_all"===V||"enabled_save_count"===V)&&z&&z>1&&ee,"enabled_show_board"===V&&el,Y?(0,w.jsx)(i.xu,{"data-test-id":"sponsor-title",display:"flex",paddingX:1,children:(0,w.jsx)(m.Z,{href:J,isPromoted:Z,onNavigateSponsorClick:q,sponsorName:I,sponsorshipStatus:F,sponsorUsername:N})}):!!k&&(!H||"enabled_show_board"===V)&&!j&&(0,w.jsx)(i.xu,{"data-test-id":"follower-count",display:"flex",paddingX:1,children:(0,w.jsx)(i.xv,{color:D,size:"200",children:(0,d.nk)(t.nbt(["{{ followerCount }} follower", "{{ followerCount }} followers"], k, "closeup.creator.followerCount", true),{followerCount:(0,w.jsx)(r.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:k},k)})})}),"enabled_save_count"===V&&et,"enabled_all"===V&&el]})]})}},838486:(e,t,l)=>{l.d(t,{Z:()=>C});var o=l(667294),i=l(545007),s=l(883119),r=l(609326),n=l(573706),a=l(703454),d=l(803611),c=l(208121),_=l(194093),u=l(144326),h=l(240760),f=l(267005),p=l(864723),x=l(901450),g=l(969119),m=l(357013),b=l(785893);let w=({followText:e,followerCount:t,userFollowed:l})=>{let o=(0,u.ZP)();return(0,h.nk)(o.bt("{{ followCount }} {{ followText }}", "{{ followCount }} {{ followText }}", " - ", undefined, true),{followCount:(0,b.jsx)(s.xu,{"data-test-id":"followCount",opacity:l?void 0:.8,paddingX:1,children:(0,b.jsx)(s.xv,{color:l?"subtle":"inverse",children:(0,b.jsx)(m.Z,{shortform:!0,shortformMaximumFractionDigits:0,value:t})})},"followCount"),followText:(0,b.jsx)(s.xu,{"data-test-id":"followText",paddingX:1,children:(0,b.jsx)(s.xv,{color:l?"default":"inverse",weight:"bold",children:e})},"followText")})};var y=l(212443),v=l(402151),P=l(424583),j=l(310368);function z(e,t,l){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:o+"")in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}class A extends o.PureComponent{constructor(...e){super(...e),z(this,"handleButtonClick",({event:e})=>{let{requireAuth:t,i18n:l,userFollowed:o}=this.props;if(t){e.stopPropagation(),t({loginModalHeader:(0,a.N4)({i18n:l,toFollow:!o})});return}let{shouldStopEventPropagation:i,loggingData:s}=this.props;i&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,clientTrackingParams:this.props.clientTrackingParams,...s||Object.freeze({})}),this.toggleFollowUnfollow()}),z(this,"handleClick",({event:e})=>{let{requireAuth:t}=this.props;if((t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t){t();return}this.toggleFollowUnfollow()}),z(this,"toggleFollowUnfollow",()=>{let{id:e,mostRecentPinId:t,loggingData:l,userFollowed:o,viewType:i,viewParameter:s,clientTrackingParams:r}=this.props;o?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:i,view_parameter:s,aux_data:{pin_id:t},clientTrackingParams:r,...l||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:i,view_parameter:s,aux_data:{pin_id:t},clientTrackingParams:r,...l||Object.freeze({})}),this.follow())}),z(this,"follow",()=>{let{follow:e,id:t,onUserFollow:l,mostRecentPinId:o,setMostRecentPinId:i,inviteCode:s,handleFollowSuccessFromInvite:r,loggingData:n,viewType:a,viewParameter:d}=this.props;e(t,o,()=>{s?(r?.(),this.props.logContextEvent({event_type:14858,object_id_str:t,view_type:a,view_parameter:d,...n||Object.freeze({})})):this.showConfirmation()},this.showError),l&&l(!0),i(null)}),z(this,"showToast",e=>{let{id:t,imageUrl:l,profileUrl:o,toastManagerContext:i,suppressToasts:s}=this.props;s||i.showOneToast(({hideToast:i})=>(0,b.jsx)(j.Z,{handleHide:i,href:o,imageUrl:l,text:e,userId:t}))}),z(this,"showConfirmation",()=>{let e=(0,b.jsx)(s.xv,{children:this.props.i18n.bt("Following! Their created Pins will show up in your home feed!", "Following! Their created Pins will show up in your home feed!", "userFollowButton.informationalToastText2", undefined, true)});this.showToast(e)}),z(this,"showError",e=>{let{fullName:t,userFollowed:l,showEmailVerificationReminderModal:o,loggingData:i,inviteCode:r,id:n,viewParameter:a,viewType:d}=this.props,c=l?this.props.i18n.bt("Error unfollowing {{ usernameComponent }}.", "Error unfollowing {{ usernameComponent }}.", "UserFollowButton.error.unfollowing", undefined, true):this.props.i18n.bt("Error following {{ usernameComponent }}.", "Error following {{ usernameComponent }}.", "UserFollowButton.error.following", undefined, true);if((0,_.Z)(e,"api_error_code")===f.H9){o();return}let u=(0,b.jsx)(s.xv,{children:(0,h.nk)(c,{usernameComponent:(0,b.jsx)(s.xv,{inline:!0,weight:"bold",children:t})})});this.showToast(u),!l&&r&&this.props.logContextEvent({event_type:14859,object_id_str:n,view_type:d,view_parameter:a,...i||Object.freeze({})})}),z(this,"unfollow",()=>{let{id:e,onUserFollow:t,unfollow:l,mostRecentPinId:o,setMostRecentPinId:i}=this.props;l(e,o,()=>{},this.showError),t&&t(!1),i(null)})}renderButton(){let{button:e,followerCount:t,inline:l=!1,isOwnProfile:o,invertButtonColor:i,isSecondaryButton:r,size:n,showFollowerCount:a,userFollowed:d}=this.props,c=d?this.props.i18n.bt("Following", "Following", "User follow button", undefined, true):this.props.i18n.bt("Follow", "Follow", "User follow button", undefined, true);if(e)return e({followText:c,onClick:this.handleButtonClick,userFollowed:d});if(o)return(0,b.jsx)(s.zx,{disabled:!0,fullWidth:!0,text:this.props.i18n.bt("This is you", "This is you", "Button label to note that this is your Profile", undefined, true)});if(!a)return(0,b.jsx)(s.xu,{"data-test-id":`user-${d?"unfollow":"follow"}-button`,display:"inlineBlock",children:(0,b.jsx)(s.zx,{accessibilityLabel:d?this.props.i18n.bt("Unfollow", "Unfollow", "userUnfollowButton.button.accessibilityLabel", undefined, true):this.props.i18n.bt("Follow", "Follow", "userFollowButton.button.accessibilityLabel", undefined, true),color:r||d?"gray":"red",fullWidth:l,onClick:this.handleButtonClick,selected:i?!d:!!d,size:n??void 0,text:c})});{let e="number"==typeof t?(0,b.jsx)(w,{followerCount:t,followText:c,userFollowed:d}):c;return(0,b.jsx)(s.iP,{onTap:this.handleClick,children:(0,b.jsx)(s.xu,{color:d?"secondary":"primary",paddingX:3,paddingY:3,rounding:2,children:(0,b.jsx)(s.kC,{alignItems:"center",justifyContent:"start",children:e})})})}}render(){let{showPulsar:e,userFollowed:t}=this.props;return(0,b.jsxs)(s.xu,{display:"flex",position:"relative",children:[this.renderButton(),e&&(0,b.jsx)(s.iP,{onTap:this.handleClick,children:(0,b.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},display:"inlineBlock",position:"absolute",children:(0,b.jsx)(s.o3,{paused:t||!1})})})]})}}function C(e){let{logContextEvent:t}=(0,n.v)(),l=(0,u.ZP)(),{id:o,setMostRecentPinId:s}=(0,y.f)(),a=(0,d.Z)(),_=(0,i.I0)(),{showEmailVerificationReminderModal:h}=(0,c.y9)(),f=(0,P.mN)()(e.id),m=f?.follower_count,w=f?f.explicitly_followed_by_me:e.userFollowed;return(0,g.Z)(()=>{let{id:t}=e,l=(0,p.M0)().getItem(r.AG)||"";l&&l===t&&((0,p.M0)().removeItem(r.AG),_((0,v.ZN)(l,e.clientTrackingParams)))}),(0,b.jsx)(A,{...e,follow:(t,l,o,i)=>{_((0,v.yA)(t,l,e.clientTrackingParams,e.inviteCode)).then(o).catch(e=>{i(e)})},followerCount:m,i18n:l,logContextEvent:t,mostRecentPinId:o,requireAuth:a,setMostRecentPinId:s,showEmailVerificationReminderModal:h,toastManagerContext:(0,x.F9)(),unfollow:(t,l,o,i)=>{_((0,v.KF)(t,l,e.clientTrackingParams)).then(o,i)},userFollowed:w})}},212443:(e,t,l)=>{l.d(t,{C:()=>a,f:()=>n});var o=l(667294),i=l(498490),s=l(785893);let{Provider:r,useHook:n}=(0,i.Z)("MostRecentPin");function a({children:e}){let[t,l]=(0,o.useState)(),[i,n]=(0,o.useState)(),a=(0,o.useCallback)(e=>{n([e].concat((i?i.slice(0,10):[]).filter(t=>t!==e)))},[i]),d=(0,o.useMemo)(()=>({id:t,plpImageSignatures:i,setMostRecentPinId:l,setMostRecentPinImage:a}),[t,i,a]);return(0,s.jsx)(r,{value:d,children:e})}},811093:(e,t,l)=>{l.d(t,{Z:()=>c,j:()=>d});var o=l(883119),i=l(144326),s=l(240760),r=l(297728),n=l(730212),a=l(785893);let d=[0,2,3];function c({hasAffiliateProducts:e,hasAffiliateLink:t,href:l,isPromoted:c,onNavigateSponsorClick:_,sponsorName:u,sponsorUsername:h,sponsorshipStatus:f,textWeight:p="bold",isGrid:x}){let g,m,b,w,y;let v=(0,i.ZP)(),{isAuthenticated:P}=(0,n.B)(),{checkExperiment:j}=(0,r.F)(),z=j("mweb_web_android_ios_clbc_eu_ad_string").anyEnabled,A=P&&(t||e)&&("enabled"===(m=j("closeup_affiliate_ui_label_web").group)||"employees"===m)||"enabled"===(b=j("mweb_closeup_affiliate_ui_label").group)||"employees"===b,C=!P&&(t||e)&&("enabled"===(w=j("closeup_unauth_affiliate_ui_label_web").group)||"employees"===w||"enabled"===(y=j("mweb_closeup_unauth_affiliate_ui_label").group)||"employees"===y),k=l||(h?`/${h}/`:null),T=k&&u?(0,a.jsx)(o.rU,{dataTestId:"sponsorship-text-link",href:k,onClick:_,children:(0,a.jsx)(o.xv,{size:"200",weight:p,children:u})},u):void 0;return c?g=(0,s.nk)(v.bt("Promoted by {{ name }}", "Promoted by {{ name }}", "sponsorship.sponsorshipText.promotedByBrand", undefined, true),{name:T}):f||0===f?u&&!d.includes(f)?g=(0,s.nk)(v.bt("Paid partnership with {{ name }}", "Paid partnership with {{ name }}", "closeup.creator.sponsoredPinTitle", undefined, true),{name:T}):2!==f&&(g=v.bt("Paid partnership", "Paid partnership", "closeup.creator.sponsoredPinTitle", undefined, true)):A||C?g=v.bt("Paid link", "Paid link", "sponsorship.sponsorshipText.affiliatedProducts", undefined, true):x&&e&&(g=v.bt("Paid link", "Paid link", "sponsorship.sponsorshipText.affiliatedProducts", undefined, true)),(0,a.jsxs)(o.xv,{color:"subtle",inline:!0,lineClamp:2,size:"200",children:[z&&!c&&"Ad • "||"",g]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/37955.en_IN-96b98ec238bd1d5b.mjs.map