let phrases;

exports.connect = function () {
  phrases = require('./_ru.json');
}

exports.getPhrases = function (phrase) {
  if (!phrases[phrase])
    throw new Error(`Нет такой фрозы: ${phrase}`);

  return phrases[phrase]
}
