const toMilliseconds = require("@sindresorhus/to-milliseconds");

module.exports = function(time = "0:00") {
  const arr = time.split(":");
  if (arr.every(s => !isNaN(s))) {
    const final = arr.reverse();
    return toMilliseconds({
      seconds: parseInt(final[0]) || 0,
      minutes: parseInt(final[1]) || 0,
      hours: parseInt(final[2]) || 0,
      days: parseInt(final[3]) || 0
    });
  } else throw new Error("Uno de los parámetros en el string no es un número");
}
