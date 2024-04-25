/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product. */

function solution(inputArray) {
    let maximo = 0
    for (let i = 0; i < inputArray.length - 1; i++){
            let producto = inputArray[i] * inputArray[i+1];
            if (i==0){
              maximo = producto
            }
            if (producto > maximo){
                maximo = producto
            }
    }
    return maximo
}