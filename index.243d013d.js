function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequire94c2;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequire94c2=a),a.register("27Lyk",(function(e,t){var o,a;n(e.exports,"register",(()=>o),(n=>o=n)),n(e.exports,"resolve",(()=>a),(n=>a=n));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},a=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("7HECa",(function(n,e){n.exports=new URL(a("27Lyk").resolve("jlyPo"),import.meta.url).toString()})),a.register("6DPnJ",(function(n,e){n.exports=new URL(a("27Lyk").resolve("9k2AR"),import.meta.url).toString()})),a.register("fuSe9",(function(n,e){n.exports=new URL(a("27Lyk").resolve("1IT0P"),import.meta.url).toString()})),a.register("1yuhe",(function(n,e){n.exports=new URL(a("27Lyk").resolve("9PGIl"),import.meta.url).toString()})),a.register("7QFFw",(function(n,e){n.exports=new URL(a("27Lyk").resolve("ijrVJ"),import.meta.url).toString()})),a.register("bDqwJ",(function(n,e){n.exports=new URL(a("27Lyk").resolve("lhsqF"),import.meta.url).toString()})),a("27Lyk").register(JSON.parse('{"dZpbI":"index.243d013d.js","jlyPo":"tijera.70ebdfd1.png","9k2AR":"piedra.e29da490.png","1IT0P":"papel.c45efa9e.png","9PGIl":"perdiste.62ed16dd.png","ijrVJ":"ganaste.ef8d7289.png","lhsqF":"empate.3a0fc3ba.png"}'));const i={data:{currentGame:{computerPlay:"",playerPlay:""},score:{computer:0,player:0},listeners:[]},init(){const n=localStorage.getItem("saved-state");this.setState(JSON.parse(n))},getSate(){return this.data},setState(n){this.data=n,console.log("El state, ha sido cambiado."),console.log("El nuevo state: ",this.data),localStorage.setItem("saved-state",JSON.stringify(n))},whoWins(n,e){const t="Tijeras"==e&&"Papel"==n,o="Papel"==e&&"Piedra"==n,a="Piedra"==e&&"Tijeras"==n;console.log("Gana tijeras: ",t,", Gana Papel: ",o,", Gana piedra: ",a);const i=[t,o,a].includes(!0);return n==e?"Empate":i},addVictory(n){const e=this.getSate();"player"==n?e.score.player++:(n="computer",e.score.computer++),this.setState(e)}};function r(){return location.host.includes("github.io")}const s=[{path:/\/home/,handler:function(n){const e=document.createElement("div");var t=document.createElement("style");t.textContent="\n    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n    .home{\n        min-height: 600px;\n        min-width: 500px;\n        max-width: 700px;\n        height: 100%;\n        display: flex;\n        justify-content: space-evenly;\n        flex-direction: column;\n        padding: 50px;\n    }\n    @media (min-width: 767px){\n        .home {\n            margin: 0 auto;\n            padding-top: 0;\n        }\n\n    ",e.innerHTML='\n        <titleone-el class="h1">Piedra Papel <span class="span">o</span> Tijeras</titleone-el>\n        <button-el class="button">Empezar</button-el>\n        <choices-el></choices-el>\n        ',e.appendChild(t),e.classList.add("home");const o=document.querySelector(".root"),a=e.querySelector(".button");return console.log("Soy el home usando el button component",a),a.addEventListener("click",(()=>{c("/instructions",o)})),e}},{path:/\/instructions/,handler:function(n){const e=document.createElement("div");var t=document.createElement("style");t.textContent="\n   .instructions{\n        min-height: 600px;\n        min-width: 500px;\n        max-width: 700px;\n        height: 100%;\n        display: flex;\n        justify-content: space-evenly;\n        flex-direction: column;\n        padding: 50px;\n    }\n    @media (min-width: 767px){\n        .instructions {\n            margin: 0 auto;\n            padding-top: 0;\n        }\n    ",e.innerHTML='\n        <titletwo-el>Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos, si no llegas a elegir, el juego se expresará gráficamente y podrás volver a jugar.</titletwo-el>\n        <button-el class="button">¡Jugar!</button-el>\n        <choices-el></choices-el>\n        ',e.appendChild(t),e.classList.add("instructions");const o=document.querySelector(".root"),a=e.querySelector(".button");return console.log("Soy el 'instructions' usando el button component",a),a.addEventListener("click",(()=>{c("/duel",o)})),e}},{path:/\/duel/,handler:function(n){const e=i.getSate(),t=document.createElement("div");var o=document.createElement("style");const r={tijeras:a("7HECa"),piedra:a("6DPnJ"),papel:a("fuSe9")};o.textContent="\n   .duel{\n        min-height: 600px;\n        min-width: 500px;\n        max-width: 700px;\n        height: 100%;\n        display: flex;\n        justify-content: space-evenly;\n        flex-direction: column;\n        padding: 50px;\n    }\n    @media (min-width: 767px){\n        .duel {\n            margin: 0 auto;\n            padding-top: 0;\n        }\n        .container__img{\n            height: 200px;\n        }\n        .container{\n            gap: 120px;\n        }\n    }\n    .container{     \n        display:flex;\n        position: fixed;\n        bottom: -56px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        justify-content: center;\n        align-items: center;\n        align-self: center;\n        gap: 95px;\n        margin: 0 auto;\n    }\n    .container__img{\n        cursor: pointer;\n        position: relative;\n        height: 30vh;   \n        \n        transition: transform 250ms;\n    }\n    .container__img:hover{\n        transform: translateY(-50px);\n        \n    }\n    @media (max-height: 367px){\n        .container{\n            display: none;\n        }\n    }\n    .computer-hand{\n        position: relative;\n        height: 25vh; \n        \n        transform: rotate(180deg);\n    }\n    .computer-container{\n        margin: 0 auto;\n        display:flex;\n        justify-content: center;\n        align-items: center;\n        align-self: center;\n        position: fixed;\n        top: -12px;\n    }\n    .final__results{\n        width: 100%;\n        height: 100%;\n        top: 50%;\n        left: 50%;\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n       \n        z-index: 10;\n        background-color: ;\n        margin: 0 auto;\n        gap: 15px;\n        transform: translate(-50%, -50%);\n    }\n    ",t.innerHTML=`\n    <timer-el class="timer"></timer-el>\n    <div class="container">\n            <img class="container__img papel"src="${r.papel}" id="papel">\n            <img class="container__img piedra"src="${r.piedra}" id="piedra">\n            <img class="container__img tijera"src="${r.tijeras}" id="tijera">\n    </div>\n        `,t.appendChild(o),t.classList.add("duel");var s="",l=t.querySelector(".papel"),d=t.querySelector(".piedra"),p=t.querySelector(".tijera"),m=()=>{s="Papel",console.log("Clickeaste papel, playerPlay: ",s),l.style.opacity="1",d.style.opacity="0.5",p.style.opacity="0.5"},u=()=>{s="Piedra",console.log("Clickeaste piedra,  playerPlay: ",s),d.style.opacity="1",l.style.opacity="0.5",p.style.opacity="0.5"},h=()=>{s="Tijeras",console.log("Clickeaste tijera, playerPlay: ",s),p.style.opacity="1",d.style.opacity="0.5",l.style.opacity="0.5"};l.addEventListener("click",m),d.addEventListener("click",u),p.addEventListener("click",h);var g,f,y=(g=1,f=10,Math.floor(Math.random()*(f-g))+g),x="";y<=3?x="Papel":y>=4&&y<=6?x="Piedra":y>=7&&y<=9&&(x="Tijeras"),console.log("Este es el numero randomizado: ",y),console.log("Soy la duelPage, esta es la computerPlay: ",x),e.currentGame.computerPlay=x,console.log("updatedState from Duel, ",e);const v=document.createElement("div");v.classList.add("computer-container"),v.innerHTML=`\n         <img class="computer-hand" src="${"Tijeras"==x?r.tijeras:"Papel"==x?r.papel:"Piedra"==x?r.piedra:void 0}">\n         `;let w=0;const b=setInterval((()=>{if(w++,console.log("Pasaron",w," segundos. PD SOY EL DUEL XD"),w>2){clearInterval(b);let a=t.querySelector(".timer");var n;console.log("timer",a),a.remove(),l.removeEventListener("click",m),d.removeEventListener("click",u),p.removeEventListener("click",h),t.appendChild(v),e.currentGame.playerPlay=s,console.log("Current Game: ",e.currentGame);var o=setInterval((()=>{var e=document.createElement("div");e.classList.add("final__results"),e.innerHTML='\n                <result-el></result-el>\n                <score-el></score-el>\n                <button-el class="button">Volver a jugar <button-el>\n                ';var t=e.querySelector(".button");console.log(t);var a=document.querySelector(".root");a.appendChild(e),t.addEventListener("click",(()=>{e.remove(),c("/duel",a)})),""==s?e.style.background="rgba(42, 40, 40, 0.8)":1==(n=i.whoWins(x,s))?e.style.background="rgba(136, 137, 73, 0.8)":0==n?e.style.background="rgba(137, 73, 73, 0.8)":"Empate"==n&&(e.style.background="rgba(42, 40, 40, 0.8)"),clearInterval(o)}),700);i.setState(e)}}),1e3);return t}}];function l(n,e){console.log("El handleRoute recibió una nueva ruta",n),console.log("El container recibido en handleRoute",e);const t=r()?n.replace("/desafio-m5",""):n;for(const n of s)if(n.path.test(t)){const t=n.handler({goTo:c});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}function c(n,e){const t=r()?"/desafio-m5"+n:n;history.pushState({},"",t),l(t,e)}customElements.define("menu-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){var n=document.createElement("style");n.innerHTML="\n        #navMenu{\n            cursor: pointer;\n            width: 30px;\n        }\n        #navMenu > span{\n            display: block;\n            width: 28px;\n            height: 2px;\n            border-radius: 9999px;\n            background-color: black;\n        }\n        #navMenu >span:not(:last-child){\n            margin-bottom: 7px;\n        }\n        #navMenu, #navMenu>span{\n            transition: all .4s ease-in-out;\n        }\n\n        #navMenu.active{\n            transition-delay: 0.8s;\n            transform: rotate(45deg);\n        }\n        #navMenu.active > span:nth-child(2){\n            width: 0;\n        }\n        #navMenu.active > span:nth-child(1), #navMenu.active > span.nth-child(3){\n            transition-delay: .4s\n        }\n        #navMenu.active > span:nth-child(1){\n            transform: translateY(9px);\n        }\n        #navMenu.active > span:nth-child(3){\n            transform: translateY(-9px) rotate(90deg);\n        }\n        ",this.shadow.innerHTML='\n        <div id="navMenu">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        ',this.shadow.appendChild(n);const e=this.shadow.querySelector("#navMenu");e.addEventListener("click",(()=>{e.classList.toggle("active")})),console.log("Soy el menu component")}}),customElements.define("button-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){var n=document.createElement("style");n.innerHTML="\n            @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n            .button{\n                width: 100%;\n                align-self: center;\n                background: #006CFC;\n                border: 10px solid #001997;\n                border-radius: 10px;\n                cursor: pointer;\n                height: 80px;\n        \n                font-family: \"Odibee Sans\";\n                font-size: 45px;\n                font-weight: 400;\n                line-height: 50px;\n                letter-spacing: 0.05em;\n                text-align: center;\n                color: white;\n            }\n            .button:hover{\n                border: 1px solid white;\n                transform: scale(1.1);\n                transition: transform 250ms;\n            }\n            ",this.shadow.innerHTML=`\n            <button class="button">${this.textContent}</button>\n            `,this.shadow.appendChild(n)}}),customElements.define("choices-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const n=a("fuSe9"),e=a("6DPnJ"),t=a("7HECa");var o=document.createElement("style");o.textContent="\n            .container{     \n                display:flex;\n                position: fixed;\n                bottom: -56px;\n                left: 50%;\n                transform: translate(-50%, 0);\n                justify-content: center;\n                align-items: center;\n                align-self: center;\n                gap: 65px;\n                margin: 0 auto;\n            }\n            .container__img{\n                position: relative;\n                height: 150px;   \n                transition: transform 250ms;\n            }\n            .container__img:hover{\n                transform: translateY(-34px);\n                \n            }\n            @media (min-width: 767px){\n                .container__img{\n                    height: 200px;\n                }\n                .container{\n                    gap: 120px;\n                }\n            }\n            @media (max-height: 367px){\n                .container{\n                    display: none;\n                }\n            }\n            \n            ",this.shadow.innerHTML=`\n            <div class="container">\n             <img class="container__img"src="${n}" id="papel">\n             <img class="container__img"src="${e}" id="piedra">\n             <img class="container__img"src="${t}" id="tijera">\n            </div>\n            `,this.shadow.appendChild(o)}}),customElements.define("result-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){var n=i.getSate();const e={perdiste:a("1yuhe"),ganaste:a("7QFFw"),empate:a("bDqwJ")};var t,o,r=n.currentGame.playerPlay,s=n.currentGame.computerPlay;""==r?(t="noEligio",o=e.empate):1==(t=i.whoWins(s,r))?(i.data.score.player++,o=e.ganaste):0==t?(i.data.score.computer++,o=e.perdiste):"Empate"==t&&(o=e.empate),console.log("Resultado del component 'result': ",t);var l=document.createElement("style");l.textContent="\n        .container__img{\n            width: 363px;\n            height: 362px;\n        }\n        ",this.shadow.innerHTML=`\n            <img class="container__img"src="${o}">\n        `,this.shadow.appendChild(l)}}),customElements.define("score-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const n=i.getSate().score;console.log("Soy el Score del componente Score ",n);var e=document.createElement("style");e.textContent="\n             @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n            .container-main{\n                padding: 15px 30px 30px 30px;\n                box-sizing: border-box;\n                background: #FFFFFF;\n                border: 10px solid #000000;\n                border-radius: 10px;\n                display: flex;\n                justify-content: flex-end;\n                flex-direction: column;\n                align-items: center;\n                width: 100%;\n                max-width: 350px;\n                height: 270px;\n                margin: 0 auto;\n            }\n            .container__title, container__score{\n                font-family: 'Odibee Sans', cursive;\n                font-style: normal;\n                letter-spacing: 0.05em;\n            }\n            .container__title{\n                margin: 0;\n                margin-bottom: 15px;\n                font-weight: 400;\n                font-size: 55px;\n                line-height: 61px;\n            }\n            .container__score{\n                font-family: 'Odibee Sans', cursive;\n                margin: 0px;\n                font-weight: 400;\n                font-size: 35px;\n                line-height: 50px;\n                align-self: flex-end;\n            }\n            ",this.shadow.innerHTML=`\n            <div class="container-main">\n                <h2 class="container__title">Score</h2>\n                <h3 class="container__score">Vos: ${n.player}</h3>\n                <h3 class="container__score">Máquina: ${n.computer}</h3>\n            </div>\n            `,this.shadow.appendChild(e)}}),customElements.define("titleone-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){var n=document.createElement("style");n.innerHTML="\n            @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n            .h1{\n                align-self: center;\n                max-width: 400px;\n                font-family: \"Lobster\", cursive;\n                font-style: normal;\n                font-weight: 700;\n                font-size: 110px;\n                line-height: 98.1%;\n                margin: 0 auto;\n                color: #009048;\n                \n            }\n            .span{\n                opacity: 0.5;\n            }\n            ",this.shadow.innerHTML=`\n            <h1 class="h1">${this.textContent}</h1>\n            `,this.shadow.appendChild(n);const e=this.shadow.querySelector(".h1");console.log("Soy el title component",e)}}),customElements.define("titletwo-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){var n=document.createElement("style");n.innerHTML="\n            @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');\n           .title-two{\n                align-self: center;\n                max-width: 500px;\n                font-family: 'Permanent Marker', cursive;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 50px;\n                line-height: 100%;\n                /* or 40px */\n                text-align: center;\n                color: #000000;\n                margin: 0 auto;\n            }\n            ",this.shadow.innerHTML=`\n            <h2 class="title-two">${this.textContent}</h2>\n            `,this.shadow.appendChild(n)}}),customElements.define("timer-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){var n=document.createElement("style");n.innerHTML="\n        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n        body {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        min-height: 100vh;\n        background: radial-gradient(#93d9f9, #0cb0b5);\n        font-family: \"Lobster\", cursive;\n        }\n\n        .countdown {\n        position: relative;\n        width: 400px;\n        height: 400px;\n        transform-style: preserve-3d;\n        perspective: 1000px;\n        margin: 0 auto;\n        }\n\n        .countdown:before {\n        content: '';\n        position: absolute;\n        bottom: -50px;\n        left: 0;\n        width: 100%;\n        height: 10px;\n        background: transparent;\n        border-radius: 50%;\n        filter: blur(14px);\n        animation: shadow 1s linear infinite;\n        }\n\n        @keyframes shadow {\n        0%, 100% {\n            transform: scale(0.5);\n        }\n        \n        50% {\n            transform: scale(1);\n        }\n        }\n\n        .countdown .number {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        transform: rotateY(270deg);\n        animation: animate 10s linear infinite;\n        }\n\n        .countdown .number:nth-child(1) {\n        animation-delay: 0s;\n        }\n\n        .countdown .number:nth-child(2) {\n        animation-delay: 1s;\n        }\n\n        .countdown .number:nth-child(3) {\n        animation-delay: 2s;\n        }\n        \n\n        .countdown .number h2 {\n        margin: 0;\n        padding: 0;\n        font-size: 20em;\n        color: #009048;\n        }\n\n        @keyframes animate {\n        0% {\n            transform: rotateY(90deg);\n        }\n        \n        10%, 100% {\n            transform: rotateY(-90deg);\n        }\n        }\n        ",this.shadow.innerHTML='\n        <div class="countdown">\n        \n        <div class="number">\n          <h2>3</h2>\n        </div>\n        \n        <div class="number">\n          <h2>2</h2>\n        </div>\n\n        <div class="number">\n        <h2>1</h2>\n        </div>\n      \n        </div>\n        ',this.shadow.appendChild(n)}}),function(){const n=document.querySelector(".root");var e;e=n,(r()||"/"!==location.pathname)&&c("/",e),(r()||"/"==location.pathname)&&window.addEventListener("load",(()=>{c("/home",e)})),l(location.pathname,e),i.init()}();
//# sourceMappingURL=index.243d013d.js.map
