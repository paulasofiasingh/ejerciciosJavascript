/* After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
solution(matrix) = 9.
*/

function solution(matrix) {
    let suitables = 0;
    let arrCheck = Array(matrix[0].length).fill(1);
     for (let i=0; i < matrix.length; i++) {
         for (let n=0; n < matrix[i].length; n++){
            if(matrix[i][n] == 0 || arrCheck[n] == 0) {
              arrCheck[n] = 0
            }
              else {
                suitables += matrix[i][n]
              }
            }
    }
      return suitables;
    }