const random = (callback) => {
  const num = Math.floor(Math.random() * 10);
  callback(num);
};

const square = (num, callback) => {
  let newNum = num * num;
  callback(newNum);
};

const divide = (num, callback) => {
  let newNum = num / 10;
  callback(newNum);
};

// callback hell
random((num) => {
  square(num, (newNum) => {
    divide(newNum, (newNewNum) => {
      console.log('callback: ', newNewNum);
    });
  });
});

const randomP = new Promise((res, rej) => {
  const num = Math.floor(Math.random() * 10);
  res(num);
});

const squareP = (num) => {
  return new Promise((res, rej) => {
    const newNum = num * num;
    res(newNum);
  });
};

const divideP = (num) => {
  return new Promise((res, rej) => {
    let newNum = num / 10;
    res(newNum);
  });
};

// Promise
randomP
  .then((num) => squareP(num))
  .then((num) => divideP(num))
  .then((num) => console.log('promise: ', num));

// Promise async/await
const getNum = async () => {
  let num = await randomP;
  num = await squareP(num);
  num = await divideP(num);
  console.log('promise (async/await): ', num);
};
getNum();
