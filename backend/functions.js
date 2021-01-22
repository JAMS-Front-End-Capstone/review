/* eslint-disable no-plusplus */
function getPercentage(num, totalNum) {
  return (num / totalNum) * 100;
}

function getSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function getPercentageList(arr) {
  const temp = [];
  const sum = getSum(arr);
  for (let i = 0; i < arr.length; i++) {
    temp.push(getPercentage(arr[i], sum));
  }
  const result = [...temp, ...arr];
  return result;
}

// eslint-disable-next-line camelcase
function getRatings(input_arr) {
  const result = [0, 0, 0, 0, 0];
  for (let item = 0; item < input_arr.length; item++) {
    if (input_arr[item].rating === 5) {
      result[0]++;
    } else if (input_arr[item].rating === 4) {
      result[1]++;
    } else if (input_arr[item].rating === 3) {
      result[2]++;
    } else if (input_arr[item].rating === 2) {
      result[3]++;
    } else {
      result[4]++;
    }
  }

  return result;
}

module.exports = { getPercentageList, getRatings };
