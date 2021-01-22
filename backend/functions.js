/* eslint-disable no-plusplus */
function getPercentage(num, totalNum) {
  return (num / totalNum) * 100;
}

// eslint-disable-next-line camelcase
function getRatings(input_arr) {
  const result = [0, 0, 0, 0, 0];
  for (let item = 0; item < input_arr.length; item++) {
    if (input_arr[item].rating === 5) {
      result[4]++;
    } else if (input_arr[item].rating === 4) {
      result[3]++;
    } else if (input_arr[item].rating === 3) {
      result[2]++;
    } else if (input_arr[item].rating === 2) {
      result[1]++;
    } else {
      result[0]++;
    }
  }
  return result;
}

module.exports = { getPercentage, getRatings };
