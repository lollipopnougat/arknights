!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r=["能天使","推进之王","伊芙利特","艾雅法拉","安洁莉娜","闪灵","夜莺","星熊","塞雷娅","银灰","斯卡蒂","陈","黑","赫拉格","麦哲伦","莫斯提马","煌","阿"],n=["白面鸮","凛冬","德克萨斯","芙兰卡","拉普兰德","幽灵鲨","蓝毒","白金","陨星","天火","梅尔","赫默","华法琳","临光","红","雷蛇","可颂","普罗旺斯","守林人","崖心","初雪","真理","空","狮蝎","食铁兽","夜魔","诗怀雅","格劳克斯","星极","送葬人","槐琥","苇草","布洛卡","灰喉","吽"],i=["夜烟","远山","杰西卡","流星","白雪","清道夫","红豆","杜宾","缠丸","霜叶","慕斯","砾","暗索","末药","调香师","角峰","蛇屠箱","古米","深海色","地灵","阿消","猎蜂","格雷伊","苏苏洛","桃金娘","红云","梅","安比尔"],o=["芬","香草","翎羽","玫兰莎","卡缇","米格鲁","克洛丝","炎熔","芙蓉","安塞尔","史都华德","梓兰","空爆","月见夜","斑点","泡普卡"],s=[1,7,24,50,90,185],u=[6,30,98,198,328,648],a=[3,12,40,80,132,260],c=["斯卡蒂","艾雅法拉"],d=["夜魔","诗怀雅","赫默"],h=function(){this.Next=function(e,t){void 0===e&&(e=0),void 0===t&&(t=1);var r=t-e;return e+Math.round(Math.random()*r)}},S=function(){function e(){var t=this;this.isFirstBuySStone0=!0,this.isFirstBuySStone1=!0,this.isFirstBuySStone2=!0,this.isFirstBuySStone3=!0,this.isFirstBuySStone4=!0,this.isFirstBuySStone5=!0,this.isFirstBuy=function(e){switch(e){case 0:return t.isFirstBuySStone0;case 1:return t.isFirstBuySStone1;case 2:return t.isFirstBuySStone2;case 3:return t.isFirstBuySStone3;case 4:return t.isFirstBuySStone4;case 5:return t.isFirstBuySStone5;default:throw new Error("不存在这样的的源石商品")}},this.BuySStone=function(e){switch(e){case 0:t.isFirstBuySStone0?t.AddStone(a[0]):t.AddStone(s[0]),t.AddMoney(u[0]),t.isFirstBuySStone0=!1;break;case 1:t.isFirstBuySStone1?t.AddStone(a[1]):t.AddStone(s[1]),t.AddMoney(u[1]),t.isFirstBuySStone1=!1;break;case 2:t.isFirstBuySStone2?t.AddStone(a[2]):t.AddStone(s[2]),t.AddMoney(u[2]),t.isFirstBuySStone2=!1;break;case 3:t.isFirstBuySStone3?t.AddStone(a[3]):t.AddStone(s[3]),t.AddMoney(u[3]),t.isFirstBuySStone3=!1;break;case 4:t.isFirstBuySStone4?t.AddStone(a[4]):t.AddStone(s[4]),t.AddMoney(u[4]),t.isFirstBuySStone4=!1;break;case 5:t.isFirstBuySStone5?t.AddStone(a[5]):t.AddStone(s[5]),t.AddMoney(u[5]),t.isFirstBuySStone5=!1;break;default:throw new Error("不存在价格为 "+u[e].toString()+" 的源石商品")}},this.SStoneToJade=function(t){if(void 0===t&&(t=0),t>e.sStone)throw new Error("兑换失败：源石不足");e.sStone-=t,e.compoundJade+=180*t},this.BuyPackage=function(e,r){switch(r){case 0:t.AddStone(42),t.AddJade(6e3),t.AddMoney(128);break;case 1:t.AddJade(12e3),t.AddMoney(128);break;case 2:t.AddStone(90),t.AddJade(6e3),t.AddMoney(328);break;default:throw new Error("不存在价格为 "+e.toString()+" 的组合包")}},this.AddStone=function(t){e.sStone+=t},this.AddMoney=function(t){e.costMoney+=t},this.AddJade=function(t){e.compoundJade+=t}}return e.compoundJade=12e3,e.sStone=56,e.costMoney=0,e.CanCalsStoneJade=function(t){void 0===t&&(t=!0);var r=e.sStone,n=e.compoundJade,i=0;if(t){for(;r>0;)if(r--,i++,(n+=180)>=600)return i}else for(;r>0;)if(r--,i++,(n+=180)>=6e3)return i;return-1},e}(),g=function(){function e(t,s,u,a,c,d,S,g,f){var A=this;void 0===t&&(t=!1),void 0===s&&(s=50),void 0===u&&(u=[]),void 0===a&&(a=50),void 0===c&&(c=[]),void 0===d&&(d=50),void 0===S&&(S=[]),void 0===g&&(g=50),void 0===f&&(f=[]),this.rand=new h,this.currSix=[],this.currFive=[],this.currFour=[],this.currThree=[],this.sixTimes=0,this.fiveTimes=0,this.fourTimes=0,this.threeTimes=0,this.currAgentLevel=3,this.currAgent="",this.currAgentArray=[],this.lastIsTen=!1,this.tenAgentLevel=[],this.minGuNum=10,this.DrawOnce=function(){A.validDrawTimes++;var t=A.rand.Next(0,100),r=A.AddSixProb()%100,n=(A.AddSixProb()+e.standrdFiveProb)%100,i=(A.AddSixProb()+e.standrdFiveProb+e.standrdFourProb)%100;return A.minGuNum>1?A.minGuNum--:1==A.minGuNum&&(3==A.rand.Next(0,3)?r=100:(r=0,n=100)),A.lastIsTen=!1,t<=r?(A.minGuNum=0,A.currAgentLevel=6,A.sixTimes++,A.currAgent=A.GetAgent(6,A.isActivity&&0==A.rand.Next()&&0!=A.actSix.length),A.validDrawTimes=0,A.currAgent):t<=n?(A.minGuNum=0,A.currAgentLevel=5,A.fiveTimes++,A.currAgent=A.GetAgent(5,A.isActivity&&0==A.rand.Next()&&0!=A.actFive.length),A.currAgent):t<=i?(A.currAgentLevel=4,A.fourTimes++,A.currAgent=A.GetAgent(4,A.isActivity&&0==A.rand.Next()&&0!=A.actFour.length),A.currAgent):(A.currAgentLevel=3,A.threeTimes++,A.currAgent=A.GetAgent(3,A.isActivity&&0==A.rand.Next()&&0!=A.actThree.length),A.currAgent)},this.DrawTenth=function(){A.tenAgentLevel.length=0,A.currAgentArray.length=0;for(var e=0;e<10;e++)A.currAgentArray.push(A.DrawOnce()),A.tenAgentLevel.push(A.currAgentLevel);return A.lastIsTen=!0,A.currAgentArray},this.AddSixProb=function(){for(var e=A.validDrawTimes,t=2;e-50>=0;)t+=2,e-=50;return t},this.GetAgent=function(e,t){var r,n,i;if(t)switch(e){case 6:r=A.actSix.length,i=A.rand.Next(0,r-1),n=A.actSix[i];break;case 5:r=A.actFive.length,i=A.rand.Next(0,r-1),n=A.actFive[i];break;case 4:r=A.actFour.length,i=A.rand.Next(0,r-1),n=A.actFour[i];break;case 3:r=A.actThree.length,i=A.rand.Next(0,r-1),n=A.actThree[i];break;default:throw new Error("错误，不存在低于3星的或高于6星的寻访干员")}else switch(e){case 6:r=A.currSix.length,i=A.rand.Next(0,r-1),n=A.currSix[i];break;case 5:r=A.currFive.length,i=A.rand.Next(0,r-1),n=A.currFive[i];break;case 4:r=A.currFour.length,i=A.rand.Next(0,r-1),n=A.currFour[i];break;case 3:r=A.currThree.length,i=A.rand.Next(0,r-1),n=A.currThree[i];break;default:throw new Error("错误，不存在低于3星的或高于6星的寻访干员")}return n},this.GetSixTimes=function(){return A.sixTimes},this.GetFiveTimes=function(){return A.fiveTimes},this.GetFourTimes=function(){return A.fourTimes},this.GetThreeTimes=function(){return A.threeTimes},this.GetLastAgentLevel=function(){return A.currAgentLevel},this.GetLastAgentsLevelArray=function(){return A.tenAgentLevel},this.isLastTen=function(){return A.lastIsTen},this.GetCurrAgent=function(){return A.currAgent},this.GetCurrAgentArray=function(){return A.currAgentArray},this.GetMinGuNum=function(){return A.minGuNum},this.validDrawTimes=0,this.isActivity=t,this.sixActProbablity=s,this.fiveActProbablity=a,this.fourActProbablity=d,this.threeActProbablity=g,this.actSix=u,this.actFive=c,this.actFour=S,this.actThree=f,r.forEach((function(e){e in u||A.currSix.push(e)})),n.forEach((function(e){e in c||A.currFive.push(e)})),i.forEach((function(e){e in S||A.currFour.push(e)})),o.forEach((function(e){e in f||A.currThree.push(e)}))}return e.standrdSixProb=2,e.standrdFiveProb=8,e.standrdFourProb=50,e.standrdThreeProb=40,e}();new g(!0,50,c,50,d),new S,function(){function e(){}e.SyncView=function(e){$("#sstone").text(S.sStone),$("#jade").text(S.compoundJade),$("#tojade").text(180*S.sStone),$("#jade").text(S.compoundJade),$("#sixnum").text(e.GetSixTimes()),$("#fivenum").text(e.GetFiveTimes()),$("#fournum").text(e.GetFourTimes()),$("#threenum").text(e.GetThreeTimes());var t=e.GetSixTimes()+e.GetFiveTimes()+e.GetFourTimes()+e.GetThreeTimes();$("#moneycost").text(t.toString()+" / "+S.costMoney.toString()),0==e.GetMinGuNum()?$("#tips").text("保底已出"):$("#tips").text(e.GetMinGuNum()+"次内必定获得5星及以上干员")},e.ShowImg=function(e){if(e.isLastTen()){for(var t="",r=e.GetLastAgentsLevelArray(),n=e.GetCurrAgentArray(),i=0;i<10;i++)t+='<img id="img-agent0" src="./img/'+r[i].toString()+"/"+n[i].toString()+'.jpg" class="agen-img">';$("#image-box").html(t)}else $("#image-box").html('<img id="img-agent0" src="./img/'+e.GetLastAgentLevel().toString()+"/"+e.GetCurrAgent()+'.jpg" class="agen-img">')},e.CloseFirstEx=function(e){$("#buy-sstone"+e.toString()).text("氪金"+u[e].toString()+"元买"+s[e]+"源石")},e.ClosePackage=function(e){$("#buy-package"+e.toString()).attr({disabled:"disabled"}),$("#buy-package"+e.toString()).hover((function(){$("#buy-package"+e.toString()).css("background-color","#aaa")})),$("#buy-package"+e.toString()).css("background-color","#aaa"),$("#buy-package"+e.toString()).css("cursor","no-drop")},e.HideRadio=function(){$("#rad0").prop("checked")?$("#rad1").css("display","none"):$("#rad1").prop("checked")&&$("#rad0").css("display","none")}}()}]);
//# sourceMappingURL=main.js.map