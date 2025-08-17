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

originalTextArea.on("input", () => {
  let originalText = originalTextArea.val();
  translatedTextArea.val(toSelvaKorpi(originalText));
});

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
