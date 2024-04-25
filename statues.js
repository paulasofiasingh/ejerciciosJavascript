/*Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.*/


function solution(statues){
    const maximo = Math.max(...statues);
    const minimo = Math.min(...statues);
    let numeros = 0;
    for (i = minimo+1; i < maximo; i++){
        if (!statues.find(x => x == i)) {
            numeros++;         
        }
    }
    return numeros;
 }
 
 statues = [6, 2, 3, 8]
 
 solution(statues)