(self.webpackChunksepa_viewer=self.webpackChunksepa_viewer||[]).push([[143],{780:(r,n,t)=>{"use strict";t.d(n,{Z:()=>d});var e=t(537),a=t.n(e),i=t(645),o=t.n(i)()(a());o.push([r.id,"* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    background: #eee;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nmain {\r\n    flex: 1;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\nfooter {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    color: #9e9e9e;\r\n    padding: 1em 0;\r\n}\r\n\r\n.open-file-hint {\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    color: #9e9e9e;\r\n    margin: 60px 16px;\r\n    pointer-events: none;\r\n}\r\n\r\n.mdc-card {\r\n    margin: 8px;\r\n}\r\n\r\n.card--padded {\r\n    padding: 16px;\r\n}\r\n\r\n.list--remove-padding {\r\n    margin: 0 -16px -16px;\r\n}\r\n\r\n.page-break-after {\r\n    page-break-after: always;\r\n}\r\n","",{version:3,sources:["webpack://./src/app.css"],names:[],mappings:"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,WAAW;IACX,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B",sourcesContent:["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    background: #eee;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nmain {\r\n    flex: 1;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\nfooter {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    color: #9e9e9e;\r\n    padding: 1em 0;\r\n}\r\n\r\n.open-file-hint {\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    color: #9e9e9e;\r\n    margin: 60px 16px;\r\n    pointer-events: none;\r\n}\r\n\r\n.mdc-card {\r\n    margin: 8px;\r\n}\r\n\r\n.card--padded {\r\n    padding: 16px;\r\n}\r\n\r\n.list--remove-padding {\r\n    margin: 0 -16px -16px;\r\n}\r\n\r\n.page-break-after {\r\n    page-break-after: always;\r\n}\r\n"],sourceRoot:""}]);const d=o},153:(r,n,t)=>{"use strict";t.d(n,{Z:()=>d});var e=t(537),a=t.n(e),i=t(645),o=t.n(i)()(a());o.push([r.id,"@media print {\r\n    * {\r\n        color: black !important;\r\n        background: none !important;\r\n    }\r\n\r\n    html,\r\n    body {\r\n        display: block;\r\n        font-family: Arial, sans-serif !important;\r\n        font-size: 10pt !important;\r\n    }\r\n\r\n    header {\r\n        display: none !important;\r\n    }\r\n\r\n    footer {\r\n        display: none;\r\n    }\r\n\r\n    .mdc-top-app-bar--fixed-adjust {\r\n        padding-top: 0;\r\n    }\r\n\r\n    .mdc-card {\r\n        display: block;\r\n        border-radius: 0;\r\n        border: 1px solid black;\r\n        box-shadow: none;\r\n        margin: 8px 0;\r\n    }\r\n\r\n    .card--padded {\r\n        padding: 4px;\r\n    }\r\n\r\n    .mdc-list-item {\r\n        display: block;\r\n        height: auto !important;\r\n        border-bottom: 1px solid black;\r\n    }\r\n}\r\n","",{version:3,sources:["webpack://./src/print.css"],names:[],mappings:"AAAA;IACI;QACI,uBAAuB;QACvB,2BAA2B;IAC/B;;IAEA;;QAEI,cAAc;QACd,yCAAyC;QACzC,0BAA0B;IAC9B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;QACd,gBAAgB;QAChB,uBAAuB;QACvB,gBAAgB;QAChB,aAAa;IACjB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,cAAc;QACd,uBAAuB;QACvB,8BAA8B;IAClC;AACJ",sourcesContent:["@media print {\r\n    * {\r\n        color: black !important;\r\n        background: none !important;\r\n    }\r\n\r\n    html,\r\n    body {\r\n        display: block;\r\n        font-family: Arial, sans-serif !important;\r\n        font-size: 10pt !important;\r\n    }\r\n\r\n    header {\r\n        display: none !important;\r\n    }\r\n\r\n    footer {\r\n        display: none;\r\n    }\r\n\r\n    .mdc-top-app-bar--fixed-adjust {\r\n        padding-top: 0;\r\n    }\r\n\r\n    .mdc-card {\r\n        display: block;\r\n        border-radius: 0;\r\n        border: 1px solid black;\r\n        box-shadow: none;\r\n        margin: 8px 0;\r\n    }\r\n\r\n    .card--padded {\r\n        padding: 4px;\r\n    }\r\n\r\n    .mdc-list-item {\r\n        display: block;\r\n        height: auto !important;\r\n        border-bottom: 1px solid black;\r\n    }\r\n}\r\n"],sourceRoot:""}]);const d=o},389:(r,n,t)=>{"use strict";var e=t(379),a=t.n(e),i=t(795),o=t.n(i),d=t(569),A=t.n(d),s=t(565),l=t.n(s),c=t(216),p=t.n(c),m=t(589),I=t.n(m),g=t(780),C={};C.styleTagTransform=I(),C.setAttributes=l(),C.insert=A().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=p(),a()(g.Z,C),g.Z&&g.Z.locals&&g.Z.locals;var h=t(153),B={};B.styleTagTransform=I(),B.setAttributes=l(),B.insert=A().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=p(),a()(h.Z,B),h.Z&&h.Z.locals&&h.Z.locals,t(308);var b=t(888);class x{static getLocaleDateString(r){return new Date(r).toLocaleDateString()}static getLocaleDateTimeString(r){const n=new Date(r);return`${n.toLocaleDateString()} ${n.toLocaleTimeString()}`}static readFile(r){const n=new FileReader;return new Promise(((t,e)=>{n.onload=r=>{t(r.target.result)},n.onerror=e,n.readAsText(r)}))}constructor(){document.querySelector("#file-input").addEventListener("change",this.onFileInputChange.bind(this)),this.openFileHint=document.querySelector(".open-file-hint"),this.cardHolder=document.querySelector(".card-holder")}async onFileInputChange(r){const n=r.target.files[0];if("text/xml"===n.type)try{const r=await x.readFile(n),t=(0,b.xml2js)(r,{compact:!0});this.processXml(t)}catch(r){return console.error(r),void alert("An error occured while reading the file")}else alert("Only XML files are supported.")}processXml(r){for(this.openFileHint.style.display="none";this.cardHolder.firstChild;)this.cardHolder.removeChild(this.cardHolder.firstChild);const n=r.Document.CstmrDrctDbtInitn.GrpHdr,t=document.createElement("div");t.classList.add("mdc-card"),t.classList.add("card--padded"),t.innerHTML=`NachrichtenID: ${n.MsgId._text}<br>\n                                Erstellungsdatum: ${x.getLocaleDateTimeString(n.CreDtTm._text)}<br>\n                                Name: ${n.InitgPty.Nm._text}<br>\n                                Anzahl Transaktionen: ${n.NbOfTxs._text}<br>\n                                Kontrollsumme: ${parseFloat(n.CtrlSum._text).toLocaleString()}`,this.cardHolder.appendChild(t),Array.isArray(r.Document.CstmrDrctDbtInitn.PmtInf)||(r.Document.CstmrDrctDbtInitn.PmtInf=[r.Document.CstmrDrctDbtInitn.PmtInf]);for(let n of r.Document.CstmrDrctDbtInitn.PmtInf){const r=document.createElement("div");r.classList.add("page-break-after"),r.classList.add("mdc-card"),r.classList.add("card--padded"),r.innerHTML=`Beleg-ID: ${n.PmtInfId._text}&emsp;Durchführungsdatum: ${x.getLocaleDateString(n.ReqdColltnDt._text)}<br>\n                                Anzahl Transaktionen: ${n.NbOfTxs._text}&emsp;Kontrollsumme: ${parseFloat(n.CtrlSum._text).toLocaleString()}<br>\n                                Name: ${n.Cdtr.Nm._text}&emsp;Identifikation: ${n.CdtrSchmeId.Id.PrvtId.Othr.Id._text}<br>\n                                IBAN: ${n.CdtrAcct.Id.IBAN._text}&emsp;BIC: ${n.CdtrAgt.FinInstnId.BIC._text}`;const t=document.createElement("ul");t.classList.add("mdc-list"),t.classList.add("mdc-list--two-line"),t.classList.add("list--remove-padding"),Array.isArray(n.DrctDbtTxInf)||(n.DrctDbtTxInf=[n.DrctDbtTxInf]);for(let r of n.DrctDbtTxInf){const n=document.createElement("li");n.classList.add("mdc-list-item"),n.innerHTML=`Name: ${r.Dbtr.Nm._text}&emsp;Betrag: ${r.InstdAmt._attributes.Ccy} ${parseFloat(r.InstdAmt._text).toLocaleString()}&emsp;${r.RmtInf.Ustrd._text.replace("Schulgeld ","")}<br>\n                                IBAN: ${r.DbtrAcct.Id.IBAN._text}&emsp;BIC: ${r.DbtrAgt.FinInstnId.BIC._text}&emsp;Deb.-/Anmelder-ID: ${r.DrctDbtTx.MndtRltdInf.MndtId._text}`,t.appendChild(n)}r.appendChild(t),this.cardHolder.appendChild(r)}}}new x},308:()=>{"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((r=>{console.log("SW registered: ",r)})).catch((r=>{console.log("SW registration failed: ",r)}))}))},361:()=>{},616:()=>{}},r=>{r.O(0,[216],(()=>(389,r(r.s=389)))),r.O()}]);
//# sourceMappingURL=app.a7dcc18b7d90944a1299.bundle.js.map