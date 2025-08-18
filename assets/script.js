// **VARIABLES**
const originalTextArea = $("#original-text");
const translatedTextArea = $("#translated-text");
const resetButton = $("#reset");
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
  // Tildes ´
  á: "í",
  é: "ó",
  í: "á",
  ó: "é",
  // Tildes `
  à: "ì",
  è: "ò",
  ì: "à",
  ò: "è",
  // Tildes "
  ä: "ï",
  ë: "ö",
  ï: "ä",
  ö: "ë",
};
// Copied text
const copy = $("#copy");


// **LISTENERS**
// Translator
originalTextArea.on("input", () => {
  let originalText = originalTextArea.val();
  translatedTextArea.val(toSelvaKorpi(originalText));
});

// Copy to clipboard
copy.on("click", () => {
  copyToClipboard(translatedTextArea.val());
});

// Reset text
resetButton.on("click", () =>{
  resetText();
})


// **FUNCTIONS**
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

function resetText() {
  originalTextArea.val('');
}

// Copy API
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
    console.log("Text copied to clipboard successfully!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}
