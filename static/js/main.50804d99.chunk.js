(this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar=this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar||[]).push([[0],{378:function(n,e){},382:function(n,e){},383:function(n,e){},387:function(n,e){},388:function(n,e){},414:function(n,e){},416:function(n,e){},430:function(n,e){},432:function(n,e){},447:function(n,e){},466:function(n,e){},468:function(n,e){},486:function(n,e){},487:function(n,e){},558:function(n,e){},560:function(n,e){},566:function(n,e){},578:function(n,e){},581:function(n,e){},586:function(n,e){},822:function(n,e,t){},823:function(n,e,t){"use strict";t.r(e);var i,a,o,r,c,s,d,x,p,l,b,h,u,g,f,j,m,w,O,y,v,k,C,S,A,E,_,T,N,z,M,F,D,R,L,I,P,K,U,W,X,Y,H,B,G,q=t(0),Q=t.n(q),J=t(46),V=t.n(J),Z=t(48),$=t(22),nn=t(5),en=t(18),tn=t.n(en),an=t(39),on=t(92),rn=t.n(on),cn=t(106),sn=t.n(cn),dn=t(108),xn=t(345),pn=t(20),ln={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(pn.a)(Object(pn.a)({},ln),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(pn.a)(Object(pn.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(pn.a)(Object(pn.a)({},ln),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(pn.a)(Object(pn.a)({},n),{},{account:e.payload.account});default:return n}},hn={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(pn.a)(Object(pn.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(pn.a)(Object(pn.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(pn.a)(Object(pn.a)({},hn),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},gn=Object(dn.b)({blockchain:bn,data:un}),fn=[xn.a],jn=Object(dn.c)(dn.a.apply(void 0,fn)),mn=Object(dn.d)(gn,jn),wn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},On=function(){return function(){var n=Object(Z.a)(tn.a.mark((function n(e){var t;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,mn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(wn("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},yn=function(n){return{type:"CONNECTION_FAILED",payload:n}},vn=function(){return function(){var n=Object(Z.a)(tn.a.mark((function n(e){var t,i,a,o,r,c,s,d,x,p,l,b;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(o=n.sent,r=window,c=r.ethereum,!(c&&c.isMetaMask)){n.next=50;break}return rn.a.setProvider(c),s=new sn.a(c),n.prev=18,n.next=21,c.request({method:"eth_requestAccounts"});case 21:return d=n.sent,n.next=24,c.request({method:"net_version"});case 24:if(n.sent!=o.NETWORK.ID){n.next=33;break}x=new rn.a(i,o.CONTRACT_ADDRESS),p=new rn.a(i,o.TOKEN),e({type:"CONNECTION_SUCCESS",payload:{account:d[0],smartContract:x,smartToken:p,web3:s}}),c.on("accountsChanged",(function(n){e(kn(n[0]))})),c.on("chainChanged",(function(){window.location.reload()})),n.next=43;break;case 33:return l=o.NETWORK.ID,b=sn.a.utils.toHex(l.toString()),n.prev=35,n.next=38,c.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 38:n.next=43;break;case 40:n.prev=40,n.t0=n.catch(35),4902===n.t0.code&&e(yn("Please Add ".concat(o.NETWORK.NAME," Network to your Metamask.")));case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(18),e(yn("Something went wrong."));case 48:n.next=51;break;case 50:e(yn("Install Metamask."));case 51:case"end":return n.stop()}}),n,null,[[18,45],[35,40]])})));return function(e){return n.apply(this,arguments)}}()},kn=function(n){return function(){var e=Object(Z.a)(tn.a.mark((function e(t){return tn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(On());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},Cn=t(6),Sn=Cn.b.div(i||(i=Object(nn.a)(["\n  background-color: #fff;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),An=Cn.b.div(a||(a=Object(nn.a)(["\n  height: 8px;\n  width: 8px;\n"]))),En=Cn.b.div(o||(o=Object(nn.a)(["\n  height: 16px;\n  width: 16px;\n"]))),_n=Cn.b.div(r||(r=Object(nn.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Tn=Cn.b.div(c||(c=Object(nn.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Nn=Cn.b.div(s||(s=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),zn=Cn.b.div(d||(d=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n  //border: 2px solid #A673EF;\n  border-radius: 10px;\n  //box-shadow: 0px 0px 3px 0px #A673EF;\n"])),(function(n){var e=n.flex;return e||0})),Mn=Cn.b.p(x||(x=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 25px;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n"]))),Fn=Cn.b.p(p||(p=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n  }\n"]))),Dn=Cn.b.p(l||(l=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n  }\n"]))),Rn=(Cn.b.p(b||(b=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  border: 2px solid midnightblue;\n  width: 400px;\n  background: #9DC5F0;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n    width: 200px;\n  }\n"]))),Cn.b.p(h||(h=Object(nn.a)(["\n  font-family: 'Renomono';\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n    text-align: center;\n  }\n"])))),Ln=Cn.b.p(u||(u=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  line-height: 1.6;\n"]))),In=Cn.b.p(g||(g=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 30px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    line-height: 0;\n  }\n"]))),Pn=(Cn.b.div(f||(f=Object(nn.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),Cn.b.hr(j||(j=Object(nn.a)(["\n  border: 2px solid white;  \n  background-color: white;\n  border-radius: 2px;\n  width: 450px;\n  @media (max-width: 565px) {\n    width: 350px;\n  }\n"]))),Cn.b.a(m||(m=Object(nn.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n  margin-right: 5rem;\n  cursor: pointer;\n  :hover {\n    color: #FF8938;\n  }\n  @media (max-width: 565px) {\n    margin-right: 0.75rem;\n    margin-top: 1rem;\n  }\n"]))),Cn.b.img(w||(w=Object(nn.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.5);\n      transition: transform 0.5s;\n    }\n"])))),Kn=Cn.b.div(O||(O=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 3.5rem;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  flex-direction: column;\n}\n"]))),Un=Cn.b.div(y||(y=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 20px;\n  flex-direction: row;\n}\n"]))),Wn=(Cn.b.div(v||(v=Object(nn.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 565px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n"]))),Cn.b.div(k||(k=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: center;;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  margin-top: 5%;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){return n.test?"pink":"none"}))),Xn=Cn.b.p(C||(C=Object(nn.a)(["\ntext-align: center;\nfont-size: 1rem;\nletter-spacing: 1px;\nline-height: 2;\nwidth: 70%;\n"]))),Yn=(Cn.b.button(S||(S=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 40px;\n  border: none;\n  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Cn.b.div(A||(A=Object(nn.a)(["\n  display: flex;\n  background: #171717;\n  border-radius: 40px;\n  width: max-content;\n  margin-top: 5%;\n  align-items: center;\n    justify-content: center;\n    @media (max-width: 565px) {\n      width: 100%;\n    }\n"]))),Cn.b.div(E||(E=Object(nn.a)(["\n  display: flex;\n  margin-top: 5%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 5%;\n  @media (max-width: 565px) {\n    flex-direction: column;\n  }\n"]))),Cn.b.div(_||(_=Object(nn.a)(["\nheight: 120px;\nwidth: 250px;\nborder-radius: 20px;\nbackground: #171717;\npadding: 10px;\n@media (max-width: 565px) {\n  margin-top: 10px;\n}\n:hover {\n  transform: scale(1.2);\n}\n\n"]))),Cn.b.div(T||(T=Object(nn.a)(["\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 10px;\n"]))),Cn.b.img(N||(N=Object(nn.a)(["\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),Cn.b.p(z||(z=Object(nn.a)(["\ntext-align: left;\nwidth: 125px;\nfont-size: 1rem;\n"]))),Cn.b.p(M||(M=Object(nn.a)(["\ntext-align: left;\nfont-size: 0.75rem;\n"]))),Cn.b.div(F||(F=Object(nn.a)(["\nwidth: 30%;\n@media (max-width: 565px) {\n  width: 80%;\n}\n"]))),t(683),t(684),t(830)),Hn=t(831),Bn=t(832),Gn=t(833),qn=t(1),Qn=Cn.b.button(D||(D=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Jn=Cn.b.button(R||(R=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Vn=Cn.b.button(L||(L=Object(nn.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: #F48C2C;\n  font-weight: bold;\n  color: white;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Zn=Cn.b.button(I||(I=Object(nn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 30px;\n  color: white;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n"]))),$n=Cn.b.div(P||(P=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nalign-content: center;\ngap: 10%;\nwidth: 300px;\n"]))),ne=Cn.b.div(K||(K=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: center;\n  margin: auto;\n  width: 70%;\n  border: 2px solid white;\n  border-radius: 40px;\n  background: linear-gradient(90deg, rgba(142,111,182,1) 10%, rgba(142,111,182,1) 93%);\n    @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ee=Cn.b.div(U||(U=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-height: 80px;\n  padding: 10px;\n  background-color : #252525;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (max-width: 565px) {\n    max-height: 220px;\n  }\n"]))),te=Cn.b.img(W||(W=Object(nn.a)(["\n  display: inline;\n  width: 200px;\n  @media (max-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=Cn.b.img(X||(X=Object(nn.a)(["\n  width: 450px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 450px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),ae=(Cn.b.img(Y||(Y=Object(nn.a)(["\n  width: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n"]))),Cn.b.img(H||(H=Object(nn.a)(["\n  width: 220px;\n  height: 220px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 220px;\n    height: 220px;\n  }\n  @media (min-width: 1000px) {\n    width: 220px;\n    height: 220px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),Cn.b.a(B||(B=Object(nn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),oe=Cn.b.div(G||(G=Object(nn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: transparent;\n  //padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 180px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px white;\n  -webkit-box-shadow: 0px 4px 0px -2px white;\n  -moz-box-shadow: 0px 4px 0px -2px white;\n  @media (max-width: 565px) {\n    margin-top: 20px;\n  \n"])));var re,ce,se,de,xe,pe,le,be,he=function(){var n=Object(an.b)(),e=Object(an.c)((function(n){return n.blockchain})),t=Object(an.c)((function(n){return n.data})),i=Object(q.useState)("Not Connected"),a=Object($.a)(i,2),o=a[0],r=a[1],c=Object(q.useState)(!1),s=Object($.a)(c,2),d=s[0],x=s[1],p=Object(q.useState)(""),l=Object($.a)(p,2),b=l[0],h=l[1],u=Object(q.useState)(1),g=Object($.a)(u,2),f=g[0],j=g[1],m=Object(q.useState)("2px solid #FFFFFF"),w=Object($.a)(m,2),O=w[0],y=w[1],v=Object(q.useState)("0px 0px 3px 0px #FFFFFF"),k=Object($.a)(v,2),C=k[0],S=k[1],A=Object(q.useState)("red"),E=Object($.a)(A,2),_=E[0],T=E[1],N=Q.a.useState("info"),z=Object($.a)(N,2),M=(z[0],z[1],Q.a.useState("topStart")),F=Object($.a)(M,2),D=F[0],R=(F[1],Object(qn.jsx)(Yn.a,{type:"error",header:"error",closable:!0,children:"Sorry, something went wrong please try again later."})),L=Object(qn.jsx)(Yn.a,{type:"success",header:"success",closable:!0,children:"Congrats, Mint Was successfull."}),I=Object(qn.jsxs)(Yn.a,{type:"info",header:"success",closable:!0,children:[Object(qn.jsx)(Bn.a,{})," Minting in Progress...."]}),P=Object(q.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,DISPLAY_COST:0,WL_Display:0,GAS_LIMIT:0,MAX_PER_TX:0,freetokens:1,MARKETPLACE:"",MARKETPLACE_LINK:"",Telegram:"",Discord:"",Twitter:"",SHOW_BACKGROUND:!1}),K=Object($.a)(P,2),U=K[0],W=K[1];function X(){""!==e.account&&null!==e.smartContract&&(n(On(e.account)),r(e.account.substring(0,4)+"..."+e.account.substring(38,42)),T("green"))}var Y=function(){var n=Object(Z.a)(tn.a.mark((function n(){var e,t;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,W(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(q.useEffect)((function(){Y()}),[]),Object(q.useEffect)((function(){X()}),[e.account]),Object(qn.jsx)(Sn,{children:Object(qn.jsxs)(Nn,{flex:1,style:{backgroundColor:"var(--primary)"},image:U.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(qn.jsxs)(ee,{children:[Object(qn.jsx)($n,{children:Object(qn.jsx)("a",{href:"#",target:"_blank",children:Object(qn.jsx)(te,{alt:"logo",src:"/config/images/logo.png"})})}),Object(qn.jsxs)(Kn,{children:[Object(qn.jsx)(Un,{children:Object(qn.jsx)("a",{href:U.MARKETPLACE_LINK,target:"_blank",children:Object(qn.jsx)(Pn,{src:"/config/images/opensea.svg",alt:"opensea"})})}),Object(qn.jsx)(oe,{children:""!==e.account?Object(qn.jsx)(qn.Fragment,{children:Object(qn.jsxs)(Rn,{style:{fontSize:"1rem",color:"white"},children:[Object(qn.jsx)(Gn.a,{color:_})," ",o]})}):null})]})]}),Object(qn.jsx)(Tn,{}),Object(qn.jsx)(Nn,{flex:1,jc:"center",ai:"center",children:Object(qn.jsxs)(Mn,{children:["Mint Your ",U.NFT_NAME]})}),Object(qn.jsx)(En,{}),Object(qn.jsxs)(ne,{flex:1,style:{padding:24},test:!0,children:[Object(qn.jsx)(ie,{src:"/config/images/195.gif",alt:"image"}),Object(qn.jsx)(En,{}),Object(qn.jsx)(Nn,{flex:1,jc:"center",ai:"center",children:Number(t.totalSupply)>=U.MAX_SUPPLY?Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsx)(Fn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:"The sale has ended."}),Object(qn.jsxs)(Ln,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:["You can still find ",U.NFT_NAME," on"]}),Object(qn.jsx)(En,{}),Object(qn.jsx)(ae,{target:"_blank",href:U.MARKETPLACE_LINK,children:U.MARKETPLACE})]}):Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsxs)(Fn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",U.MAX_SUPPLY]}),Object(qn.jsx)(En,{}),Object(qn.jsxs)(Dn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:["Price\u2003\u2003\u2003\u2003\u2003",U.DISPLAY_COST," ",U.NETWORK.SYMBOL]}),Object(qn.jsx)(_n,{}),""===e.account||null===e.smartContract?Object(qn.jsx)(qn.Fragment,{children:Object(qn.jsxs)(Nn,{ai:"center",jc:"center",children:[Object(qn.jsx)(En,{}),Object(qn.jsxs)(Jn,{onClick:function(e){e.preventDefault(),n(vn()),X()},children:["CONNECT Wallet",Object(qn.jsx)("img",{style:{width:30,paddingLeft:10},src:"/config/images/mm.svg"})]}),""!==e.errorMsg?Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsx)(En,{}),Object(qn.jsx)(Ln,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder",fontSize:20},children:e.errorMsg})]}):null]})}):Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsxs)(zn,{style:{border:O,boxShadow:C},children:[Object(qn.jsx)(Zn,{style:{lineHeight:.4},disabled:d?1:0,onClick:function(n){n.preventDefault(),j(U.freetokens)},children:"-"}),Object(qn.jsxs)(In,{children:["\u2002\u2002\u2002\u2002",f,"\u2002\u2002\u2002\u2002"]}),Object(qn.jsx)(_n,{}),Object(qn.jsx)(Zn,{disabled:d?1:0,onClick:function(n){n.preventDefault(),function(){var n=f+1;n>U.MAX_PER_TX&&(n=U.MAX_PER_TX),j(n)}()},children:"+"})]}),Object(qn.jsx)(En,{}),Object(qn.jsx)(Vn,{onClick:function(n){n.preventDefault(),j(U.MAX_PER_TX)},children:"SetMax"}),Object(qn.jsx)(En,{}),Object(qn.jsx)(En,{}),Object(qn.jsxs)(Dn,{style:{color:"black"},children:["Total\u2003\u2003\u2003\u2003\u2003",((f-U.freetokens)*U.DISPLAY_COST).toString().substring(0,6)," ",U.NETWORK.SYMBOL]}),Object(qn.jsx)(En,{}),Object(qn.jsx)(An,{}),Object(qn.jsx)(Nn,{ai:"center",jc:"center",fd:"column",children:Object(qn.jsx)(Qn,{disabled:d?1:0,onClick:function(t){t.preventDefault(),function(){var t=(f-U.freetokens)*U.DISPLAY_COST,i=sn.a.utils.toWei(t.toString(),"ether"),a=U.GAS_LIMIT,o=String(a);console.log("Cost: ",i),console.log("Gas limit: ",o),h("Minting your ".concat(U.NFT_NAME,"...")),x(!0),y("2px solid yellow"),S("0px 0px 3px 0px yellow"),Hn.a.push(I,{placement:D}),e.smartContract.methods.mint(f).send({gasLimit:String(o),to:U.CONTRACT_ADDRESS,from:e.account,value:i}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),x(!1),Hn.a.push(R,{placement:D}),y("2px solid red"),S("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("WOW, the ".concat(U.NFT_NAME," is yours! go visit Opensea.io to view it.")),Hn.a.push(L,{placement:D}),y("2px solid green"),S("0px 0px 3px 0px green"),x(!1),n(On(e.account))}))}(),X()},children:d?Object(qn.jsx)(Bn.a,{speed:"fast",content:"Minting..."}):"MINT"})}),Object(qn.jsx)(An,{}),Object(qn.jsxs)(Rn,{style:{fontSize:15},children:["Max ",U.MAX_PER_TX," Per Tx. Only 2 NFTs free per Wallet."]}),Object(qn.jsx)(An,{}),Object(qn.jsx)(Rn,{style:{textAlign:"center",fontSize:"1rem"},children:b})]})]})})]}),Object(qn.jsxs)(Wn,{id:"",children:[Object(qn.jsx)(En,{}),Object(qn.jsxs)(Xn,{children:["Copyright \xa9 2022 ",U.NFT_NAME]})]})]})})};Cn.b.button(re||(re=Object(nn.a)(["\n  font-family: 'Upheaval';\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 6px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  letter-spacing: 6px;\n  // font-weight: bold;\n  color: #7167E3;\n  width: 450px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Cn.b.button(ce||(ce=Object(nn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  // font-weight: bold;\n  font-size: 50px;\n  color: #7167E3;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Cn.b.div(se||(se=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  // margin: auto;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Cn.b.div(de||(de=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Cn.b.img(xe||(xe=Object(nn.a)(["\n  display: inline;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Cn.b.img(pe||(pe=Object(nn.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 100%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),Cn.b.a(le||(le=Object(nn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),Cn.b.div(be||(be=Object(nn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: #7167E3;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 250px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n"])));var ue,ge=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,834)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))},fe=(t(822),t.p+"static/media/RenoMono.8b239c68.otf"),je=t.p+"static/media/upheavtt.e3d365ba.ttf",me=Object(Cn.a)(ue||(ue=Object(nn.a)(["\n    @font-face {\n        font-family: 'Upheaval';\n        src: url(",") format('truetype');\n    }\n\n    @font-face {\n        font-family: 'Renomono';\n        src: url(",") format('opentype');\n    }\n"])),je,fe);V.a.render(Object(qn.jsxs)(an.a,{store:mn,children:[Object(qn.jsx)(me,{}),Object(qn.jsx)(he,{})]}),document.getElementById("root")),ge()}},[[823,1,2]]]);
//# sourceMappingURL=main.50804d99.chunk.js.map
