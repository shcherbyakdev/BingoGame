!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/public/",t(t.s=10)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){var n=document.createElement("div");n.setAttribute("id","users");for(var t=0;t<e.userCount;t++){var r=document.createElement("div");r.setAttribute("id","user-"+t),r.appendChild(a(t));for(var d=0;d<e.userCardsCount;d++){var s=o(e.users[t].cards[d].numbers);s.setAttribute("id","card-"+d),r.appendChild(u(d)),r.appendChild(s)}n.appendChild(r)}document.getElementById("users").appendChild(n)},o=function(e){var n=document.createElement("div");document.querySelector("#cards");n.className="cardWrapper";for(var t=[],r=void 0,o=void 0,a=0;a<e.length;a+=5){t=e.slice(a,a+5),(r=document.createElement("div")).className="cardContainer";for(var u=0;u<t.length;u++)(o=document.createElement("div")).className="divEl",o.innerText=t[u].numberToPresent,o.classList.add("number-"+t[u].numberToPresent),r.appendChild(o);n.appendChild(r)}return n},a=function(e){var n=document.createElement("h3");return n.innerHTML="User #"+e,n},u=function(e){var n=document.createElement("h5");return n.innerHTML="Card #"+e,n};n.renderOneCard=o,n.renderRoundCount=function(e){document.getElementById("round-count").innerHTML="Round: "+e.currentRound},n.renderRandomNumber=function(e){var n=document.createElement("div");n.setAttribute("class","r-num-"+e.currentRound),n.innerHTML=e.randomNumber,document.getElementById("random-numbers").appendChild(n)},n.renderCards=r,n.swapStopToStartNewGameBtn=function(e){e.getElementById("stop-game").style.display="none",e.getElementById("start-new-game").style.display="block"},n.initRenderView=function(e){r(e)},n.changeViewToCreateGame=function(){document.getElementById("play-game-page").style.display="none",document.getElementById("random-numbers-container").style.display="none",document.getElementById("msg").style.display="none",document.getElementById("users").innerHTML="",document.getElementById("random-numbers").innerHTML="",document.getElementById("create-game-page").style.display="block"},n.changeViewToPlayGame=function(){document.getElementById("create-game-page").style.display="none",document.getElementById("play-game-page").style.display="flex",document.getElementById("start-game").style.display="block",document.getElementById("stop-game").style.display="none"},n.swapStopToStartBtn=function(e){e.getElementById("stop-game").style.display="none",e.getElementById("start-game").style.display="block",e.getElementById("random-numbers-container").style.display="none",e.getElementById("msg").style.display="none"},n.swapStartToStopBtn=function(e){e.getElementById("start-game").style.display="none",e.getElementById("stop-game").style.display="block"},n.paintNumberInCard=function(e,n,t){document.getElementById("user-"+e).querySelector("#card-"+n).querySelector(".number-"+t).classList.add("paintedNumber")},n.renderLineCompleted=function(e,n,t){var r=document.getElementById("msg"),o=document.createElement("li");o.innerHTML="User #"+e+" has crossed line #"+n+" in card #"+t,r.appendChild(o)},n.renderCardCompleted=function(e,n){var t=document.getElementById("msg"),r=document.createElement("li");r.innerHTML="User #"+e+" has completed card #"+n,t.appendChild(r)},n.renderWinner=function(e){var n=document.getElementById("msg"),t=document.createElement("li");t.innerHTML="User #"+e+" won!",n.appendChild(t)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.clearMsg=n.playRound=n.createRandomArray=n.clearRandomNumber=n.clearPaintedNumbers=n.updateRoundCount=n.generateRandomNumbers=void 0;var r,o=t(0),a=t(5),u=t(4),d=(r=u)&&r.__esModule?r:{default:r};function s(e){for(var n,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),n=e[r-=1],e[r]=e[t],e[t]=n;return e}var c=function(e){for(var n=e.users,t=0;t<n.length;t++)for(var r=0;r<n[t].cards.length;r++){e.users[t].cards[r].completedLines.fill(!1);for(var o=0;o<n[t].cards[r].numbers.length;o++)e.users[t].cards[r].numbers[o].isPainted=!1}},l=function(e){document.getElementById("msg").innerHTML=""},i=function(e){e.randomNumber=null},m=function(e){e.getElementById("random-numbers").innerHTML=""},p=function(e){for(var n=e.users,t=0;t<n.length;t++)for(var r=0;r<n[t].cards.length;r++)for(var o=0;o<n[t].cards[r].numbers.length;o++)e.users[t].cards[r].numbers[o].isPainted=!1},f=function(e){for(var n=e.querySelectorAll(".divEl"),t=0;t<n.length;t++)n[t].classList.remove("paintedNumber")},y=function(e){e.currentRound+=1,(0,o.renderRoundCount)(e)},g=function(e){e.randomNumber=function(e){return e.numbersArray.pop()}(e),(0,o.renderRandomNumber)(e)},v=function(e,n,t,r){e.users[n].cards[t].numbers[r].isPainted=!0,(0,o.paintNumberInCard)(n,t,e.users[n].cards[t].numbers[r].numberToPresent)},b=function(e){for(var n=0;n<e.userCount;n++)for(var t=0;t<e.userCardsCount;t++)if(!e.users[n].cards[t].isCompleted)for(var r=0;r<25;r++)if(!e.users[n].cards[t].numbers[r].isPainted&&e.users[n].cards[t].numbers[r].numberToPresent==e.randomNumber){v(e,n,t,r);var u=r%5;(e.users[n].cards[t].completedLines[u]||(0,a.checkIfLineCompleted)(e,n,t,u))&&(e.users[n].cards[t].completedLines[u]=!0,(0,o.renderLineCompleted)(n,u,t),(0,a.checkIfCardCompleted)(e,n,t)&&(e.users[n].cards[t].isCompleted=!0,(0,o.renderCardCompleted)(n,t),(0,a.checkIfUserWon)(e,n)&&((0,o.renderWinner)(n),(0,d.default)(document,e))))}};n.generateRandomNumbers=function(e){for(var n=[],t=1;t<=e;)n.push(t++);return s(n).slice(0,25).sort(function(e,n){return e-n}).map(function(e){return{numberToPresent:e,isPainted:!1}})},n.updateRoundCount=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.currentRound=n,(0,o.renderRoundCount)(e)},n.clearPaintedNumbers=function(e){p(e),f(document)},n.clearRandomNumber=function(e,n){i(n),m(e)},n.createRandomArray=function(e){for(var n=[],t=1;t<=e.maxNumber;)n.push(t),t++;return s(n)},n.playRound=function(){var e=window.app.model;y(e),g(e),b(e)},n.clearMsg=function(e,n){c(n),l(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);n.default=function(e,n){var t=e.getElementById("random-numbers-container"),o=e.getElementById("msg");t.style.display="block",o.style.display="block",n.numbersArray=(0,r.createRandomArray)(n),n.gameContinueInterval=setInterval(r.playRound,2e3)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);n.default=function(e,n){n.gameContinueInterval&&clearInterval(n.gameContinueInterval),(0,r.updateRoundCount)(n,0),(0,r.clearRandomNumber)(e,n),(0,r.clearPaintedNumbers)(n),(0,r.clearMsg)(e,n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0);n.default=function(e,n){n.gameContinueInterval&&clearInterval(n.gameContinueInterval),(0,r.swapStopToStartNewGameBtn)(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.checkIfLineCompleted=function(e,n,t,r){for(var o=r;o<25;o+=5)if(!e.users[n].cards[t].numbers[o].isPainted)return!1;return!0},n.checkIfUserWon=function(e,n){for(var t=0;t<e.users[n].cards.length;t++)if(!e.users[n].cards[t].isCompleted)return!1;return!0},n.checkIfCardCompleted=function(e,n,t){for(var r=0;r<e.users[n].cards[t].completedLines.length;r++)if(!e.users[n].cards[t].completedLines[r])return!1;return!0}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);n.default=function(e){var n=e.userCount,t=e.userCardsCount,o=e.maxNumber;e.users=[];for(var a=0;a<n;a++)e.users[a]={};for(var u=0;u<n;u++){e.users[u].cards=new Array(t);for(var d=0;d<t;d++)e.users[u].cards[d]={isCompleted:!1,numbers:(0,r.generateRandomNumbers)(o),completedLines:[!1,!1,!1,!1,!1]}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.processInputUsers=function(e){var n=Number(e);if(n<2||n>5)throw new Error("User count must be between 2 and 5");return n},n.processInputCardsCount=function(e){var n=Number(e);if(n<1||n>3)throw new Error("Cards count must be between 1 and 3");return n},n.processInputMaxNumber=function(e){var n=Number(e);if(n<25||n>100)throw new Error("Max number must be between 25 and 100");return n}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(7),a=t(6),u=(r=a)&&r.__esModule?r:{default:r},d=t(0);n.default=function(e,n){n.userCount=(0,o.processInputUsers)(e.getElementById("usersNum").value),n.userCardsCount=(0,o.processInputCardsCount)(e.getElementById("cardsNum").value),n.maxNumber=(0,o.processInputMaxNumber)(e.getElementById("countNum").value),(0,u.default)(n),(0,d.initRenderView)(n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=window.app={model:{userCount:0,users:[{cards:[{isCompleted:!1,numbers:[{isPainted:!1,numberToPresent:0}]}]}],maxNumber:0,numbersArray:null,userCardsCount:0,randomNumber:null,gameIsOn:!0,isGameInitialized:!1,winner:null,currentRound:0,gameContinueInterval:null}}},function(e,n,t){"use strict";i(t(9));var r,o,a,u,d=i(t(8)),s=t(0),c=i(t(3)),l=i(t(2));function i(e){return e&&e.__esModule?e:{default:e}}r=document.getElementById("form"),(o=document.createElement("h5")).classList.add("errMsg"),r.addEventListener("submit",function(e){e.preventDefault();try{(0,d.default)(document,window.app.model),(0,s.changeViewToPlayGame)(),r.lastChild==o&&r.removeChild(o)}catch(e){console.log(e),o.innerHTML="Error\n"+e.message,r.appendChild(o)}}),a=document.getElementById("exit-game"),u=document.getElementById("start-new-game"),a.addEventListener("click",function(){try{(0,c.default)(document,window.app.model),(0,s.changeViewToCreateGame)(),u.style.display="none"}catch(e){console.log(e)}}),document.getElementById("start-game").addEventListener("click",function(){try{(0,s.swapStartToStopBtn)(document),(0,l.default)(document,window.app.model),console.log(window.app.model)}catch(e){console.log(e)}}),document.getElementById("stop-game").addEventListener("click",function(){try{(0,s.swapStopToStartBtn)(document),(0,c.default)(document,window.app.model),console.log(window.app.model)}catch(e){console.log(e)}}),function(){var e=document.getElementById("start-new-game");e.addEventListener("click",function(){try{(0,c.default)(document,window.app.model),(0,s.changeViewToCreateGame)(),e.style.display="none"}catch(e){console.log(e)}})}()}]);
//# sourceMappingURL=bundle.js.map