let chessboard = "";
let grid = 7;
let space = " ";
let hashtag = "#";
let length;

for (i = 0; i <= grid; i++) {

  length = chessboard.length;

 for (j = 0; j <= grid; j++) {
   if (chessboard.length % 2 == 0) {
     chessboard = chessboard + hashtag;
   } else {
     chessboard = chessboard + space;
   }
 }

 chessboard = chessboard + "\n";

}

console.log(chessboard);
