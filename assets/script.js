const originalTextArea = $("#original-text");
const translatedTextArea = $("#translated-text");
const dictionary = {
  s: "k",
  e: "o",
  l: "r",
  v: "p",
  a: "i",
  k: "s",
  o: "e",
  r: "l",
  p: "v",
  i: "a",
  é: "ó",
  á: "í",
  è: "ò",
  à: "ì",
  ë: "ö",
  ä: "ï",
};
const copy = $("#copy");

originalTextArea.on("input", () => {
  let originalText = originalTextArea.val();
  translatedTextArea.val(toSelvaKorpi(originalText));
});

copy.on("click",()=>{
    copyToClipboard(translatedTextArea.val());
})

function toSelvaKorpi(text) {
  let translatedText = "";
  for (char of text) {
    const isUpperCase = char === char.toUpperCase();
    if (dictionary[char.toLowerCase()]) {
      char = dictionary[char.toLowerCase()];
    }
    if (isUpperCase) {
      char = char.toUpperCase();
    }
    translatedText += char;
  }
  return translatedText;
}

async function copyToClipboard(text){
    try{
        await navigator.clipboard.writeText(text);
        alert("Text copied");
        console.log('Text copied to clipboard successfully!');
    } catch (err){
        console.error('Failed to copy text: ', err);
    }
}
