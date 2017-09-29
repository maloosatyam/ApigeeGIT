var words =  CryptoJS.enc.Latin1.parse(String(context.getVariable("samlResponse")));
var base64 = CryptoJS.enc.Base64.stringify(words);
context.setVariable("samlResponse", base64);