/**
* Hace codigo que se vea bien en discord
*
* @param {string} lang - El lenguaje del codigo
* @param {string} code - EL codigo en si
*
*/
exports.code = function(lang, code) {
  if(!lang) throw new TypeError("No has puesto el lenguaje")
  if(!code) throw new TypeError("No has puesto el codigo");
  return "```" + lang +"\n" + code +"```";
}