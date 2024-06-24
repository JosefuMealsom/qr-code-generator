let index = 0;
const words = ["banana", "cool dog", "joe is cool", "joe is bad"];

function getNextWord() {
    const word = words[index % words.length];
    index++;
    return word;
}

function generateQRCode() {
    document.getElementById("qrcode").innerHTML = "";
    const word = getNextWord();

    new QRCode("qrcode", {
        text: word,
        width: 512,
        height: 512,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    const label = document.createElement("p");
    label.textContent = `QRCode value: ${word}`;
    document.getElementById("qrcode").appendChild(label)
}

document.getElementById("next-qr-code-button").addEventListener("click", generateQRCode);
generateQRCode();
