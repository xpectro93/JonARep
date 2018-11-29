const median=(arr)=> {
  let sortarr = arr.sort((a, b) => a - b);
  let midid = Math.floor(sortarr.length / 2);
  if (sortarr.length % 2) {
    return sortarr;
  } else {
    return (sortarr[midid - 1] + sortarr[midid]) / 2;
  }
}

const largest=(arr)=> {
  return arr.reduce((acc, curEl) => {
    if (acc > curEl) {
      return acc;
    } else {
      curEl;
    }
  });
}

const includes=(arr, target)=> {
  // let exists =true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const filterWord = (arr, badWords) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let comment = arr[i].comment;
    let splitComment = comment.split(" ");
    let okToPush = true;
    for (let j = 0; j < splitComment.length; j++) {
      if (badWords[splitComment[j]]) {
        okToPush = false;
      }
    }

    if (okToPush) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

const factorialize = num => {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factorialize(num - 1);

  }
};

module.exports = {
  factorialize,
  filterWord,
  includes,
  largest,
  median
}
