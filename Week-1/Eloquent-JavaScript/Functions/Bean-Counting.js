let countBs = function(a) {
  let count = a.length;
  let result = 0;
  for (i = 0; i < count; i++) {
    if (a[i] == "B") {
     result = result + 1;
    }
  }
  return result;
}

let countChar = function(a,b) {
  let count = a.length;
  let result = 0;
  for (i = 0; i < count; i++) {
    if (a[i] == b) {
     result = result + 1;
    }
  }
  return result;
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
