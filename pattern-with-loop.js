let i;
let j;
let row;
let n = 10;


// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         row = row + "*";
        
//     }
//     console.log(row);
// }

// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********
// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(i == 1 || i == n || j == 1 || j == n) {
//             row = row + "*";
//         }else {
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }


// ********************
// **      ** *      **
// * *    * *  *    * *
// *  *  *  *   *  *  *
// *   **   *    **   *
// *   **   *    **   *
// *  *  *  *   *  *  *
// *  *  *  *   *  *  *
// * *    * *  *    * *
// **      ** *      **
// ********************
// *        **       **
// **      ** *     * *
// * *    * *  *   *  *
// *  *  *  *   * *   *
// *   **   *    *    *
// *   **   *   * *   *
// *  *  *  *  *   *  *
// * *    * * *     * *
// **      ***       **
// ********************

// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(i == 1 || i == n || j == 1 || j == n || i == j || i + j == n + 1 || i == Math.ceil(n/2) || j == Math.ceil(n/2)
//         || i + j == Math.ceil(n/2 + 1) || j - i == Math.floor(n/2) | i - j == Math.floor(n/2) || i + j == Math.ceil(n + n/2)) {
//             row = row + "*";
//         }else {
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }

// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
// for(i = n; i >= 1; i--) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(j > i)
//         {
//             row = row + " ";
//         }else {
//             row = row + "*";
//         }
//     }
//     console.log(row);
// }


//     *
//    ***
//   *****
//  *******
// *********
// let before = Math.ceil(n/2) - 1;
// let after = Math.ceil(n/2) + 1;

// for(i = 1; i <= Math.ceil(n/2); i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(j <= before || j >= after)
//         {
//             row = row + " ";
//         }else {
//             row = row + "*";
//         }
//     }
//     console.log(row);
//     before--;
//     after++;
// }


//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

// let before = Math.ceil(n/2) - 1;
// let after = Math.ceil(n/2) + 1;

// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(j <= before || j >= after)
//         {
//             row = row + " ";
//         }else {
//             row = row + "*";
//         }
//     }
//     console.log(row);
//     if(i < Math.ceil(n/2)){
//         before--;
//         after++;
//     }else{
//         before++;
//         after--;
//     }
// }


// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(j <= i) {
//             row = row + "*";
//         }else {
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }

// *********
//  ********
//   *******
//    ******
//     *****
//      ****
//       ***
//        **
//         *

// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(j >= i) {
//             row = row + "*";
//         }else {
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// for(i = n; i >= 1; i--) {
//     row = "";
//     for(j = 1; j <= n; j++) {
//         if(j < i) {
//             row = row + " ";
//         }else {
//             row = row + "*";
//         }
//     }
//     console.log(row);
// }


//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************

// let inner = n;
// for(i = n; i >= 1; i--) {
//     row = "";
//     for(j = 1; j <= inner; j++) {
//         if(j < i) {
//             row = row + " ";
//         }else {
//             row = row + "*";
//         }
//     }
//     inner++;
//     console.log(row);
// }


// *********
//  *******
//   *****
//    ***
//     *
// let inner = (n*2) - 1;
// for(i = 1; i <= n; i++) {
//     row = "";
//     for(j = 1; j <= inner; j++) {
//         if(j < i) {
//             row = row + " ";
//         }else {
//             row = row + "*";
//         }
//     }
//     inner--;
//     console.log(row);
// }



// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// for(i = 1; i <= (n*2) - 1; i++) {
//     row = "";
//     for(j = 1; j <= n; j++) {

//         if(i <= n){
//             if(j > i) {
//                 row = row + " ";
//             }
//             else {
//                 row = row + "*";
//             }
//         }else {
//             if((n - (i - (n-1) - 1)) < j) {
//                 row = row + " ";
//             }
//             else {
//                 row = row + "*";
//             }
//         }
        
//     }
//     console.log(row);
// }







