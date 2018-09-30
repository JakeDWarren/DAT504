function isEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return n * ifEven(n - 2)
  }
}

console.log(isEven(50));

//console.log(isEven(75));

//console.log(isEven(-1));
