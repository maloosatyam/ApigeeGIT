var base64 = CryptoJS.enc.Base64.parse(context.getVariable("samlResponse"));
var words =  CryptoJS.enc.Latin1.stringify(base64);
context.setVariable("samlResponse", words);