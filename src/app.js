import { xml2js } from "xml-js";

export class App {
    static getLocaleDateString(dateString) {
        return new Date(dateString).toLocaleDateString();
    }

    static getLocaleDateTimeString(dateString) {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    static readFile(file) {
        const reader = new FileReader();
        
        return new Promise((resolve, reject) => {
            reader.onload = evt => {
                resolve(evt.target.result);
            };
            reader.onerror = reject;

            reader.readAsText(file);
        });
    }

    constructor() {
        const fileInput = document.querySelector("#file-input");
        fileInput.addEventListener("change", this.onFileInputChange.bind(this));

        this.openFileHint = document.querySelector(".open-file-hint");
        this.cardHolder = document.querySelector(".card-holder");
    }

    async onFileInputChange(evt) {
        const file = evt.target.files[0];

        if (file.type !== "text/xml") {
            alert("Only XML files are supported.");
            return;
        }

        try {
            const result = await App.readFile(file);
            const xml = xml2js(result, { compact: true });
            this.processXml(xml);
        } catch (err) {
            console.error(err);
            alert("An error occured while reading the file");
            return;
        }
    }

    processXml(xml) {
        // Hide the hint
        this.openFileHint.style.display = "none";
        
        // Remove all previous cards
        while (this.cardHolder.firstChild) {
            this.cardHolder.removeChild(this.cardHolder.firstChild);
        }

        // Create the header card
        const grpHdr = xml.Document.CstmrDrctDbtInitn.GrpHdr;
        const headerCard = document.createElement("div");
        headerCard.classList.add("mdc-card");
        headerCard.classList.add("card--padded");
        headerCard.innerHTML = `NachrichtenID: ${grpHdr.MsgId._text}<br>
                                Erstellungsdatum: ${App.getLocaleDateTimeString(grpHdr.CreDtTm._text)}<br>
                                Name: ${grpHdr.InitgPty.Nm._text}<br>
                                Anzahl Transaktionen: ${grpHdr.NbOfTxs._text}<br>
                                Kontrollsumme: ${parseFloat(grpHdr.CtrlSum._text).toLocaleString()}`;
        this.cardHolder.appendChild(headerCard);

        // Create array if it is a single object
        if (!Array.isArray(xml.Document.CstmrDrctDbtInitn.PmtInf)) {
            xml.Document.CstmrDrctDbtInitn.PmtInf = [xml.Document.CstmrDrctDbtInitn.PmtInf];
        }

        // Create a card for each PmtInf
        for (let pmtInf of xml.Document.CstmrDrctDbtInitn.PmtInf) {
            const card = document.createElement("div");
            card.classList.add("page-break-after");
            card.classList.add("mdc-card");
            card.classList.add("card--padded");
            card.innerHTML = `Beleg-ID: ${pmtInf.PmtInfId._text}&emsp;Durchführungsdatum: ${App.getLocaleDateString(pmtInf.ReqdColltnDt._text)}<br>
                                Anzahl Transaktionen: ${pmtInf.NbOfTxs._text}&emsp;Kontrollsumme: ${parseFloat(pmtInf.CtrlSum._text).toLocaleString()}<br>
                                Name: ${pmtInf.Cdtr.Nm._text}&emsp;Identifikation: ${pmtInf.CdtrSchmeId.Id.PrvtId.Othr.Id._text}<br>
                                IBAN: ${pmtInf.CdtrAcct.Id.IBAN._text}&emsp;BIC: ${pmtInf.CdtrAgt.FinInstnId.BIC._text}`;

            // Create the list for all DrctDbtTxInf
            const list = document.createElement("ul");
            list.classList.add("mdc-list");
            list.classList.add("mdc-list--two-line");
            list.classList.add("list--remove-padding");

            // Create array if it is a single object
            if (!Array.isArray(pmtInf.DrctDbtTxInf)) {
                pmtInf.DrctDbtTxInf = [pmtInf.DrctDbtTxInf];
            }

            // Create a list item for each DrctDbtTxInf
            for (let drctDbtTxInf of pmtInf.DrctDbtTxInf) {
                const item = document.createElement("li");
                item.classList.add("mdc-list-item");
                item.innerHTML = `Name: ${drctDbtTxInf.Dbtr.Nm._text}&emsp;Betrag: ${drctDbtTxInf.InstdAmt._attributes.Ccy} ${parseFloat(drctDbtTxInf.InstdAmt._text).toLocaleString()}&emsp;${drctDbtTxInf.RmtInf.Ustrd._text.replace("Schulgeld ", "")}<br>
                                IBAN: ${drctDbtTxInf.DbtrAcct.Id.IBAN._text}&emsp;BIC: ${drctDbtTxInf.DbtrAgt.FinInstnId.BIC._text}&emsp;Deb.-/Anmelder-ID: ${drctDbtTxInf.DrctDbtTx.MndtRltdInf.MndtId._text}`;

                list.appendChild(item);
            }

            card.appendChild(list);
            this.cardHolder.appendChild(card);
        }
    }
}
