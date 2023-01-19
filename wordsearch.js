// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

const wordSearch = function(letters, word) {
  // const newArray = transpose(letter);
  let wordBackwards = word.split('');
  wordBackwards = wordBackwards.reverse();
  wordBackwards = wordBackwards.join('').toLowerCase();

  if (word === undefined) {
    return false;
  }

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].join("").toLowerCase().includes(word.toLowerCase()) || letters[i].join("").toLowerCase().includes(wordBackwards)) {
      return true;
    }
  }

  for (let i = 0; i < letters[0].length; i++) {
    let verticalWord = '';
    for (let j = 0; j < letters.length; j++) {
      verticalWord += letters[j][i].toLowerCase();
    }
    if (verticalWord.includes(word.toLowerCase()) || verticalWord.includes(wordBackwards)) {
      return true;
    }
  }

  return false;
}

module.exports = wordSearch