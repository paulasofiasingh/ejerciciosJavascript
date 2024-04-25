/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17. */

function solution(year) {
    number = parseInt(year)
    if (number % 100 === 0)
        return number/100;
    else
        return parseInt(number/100 + 1);
}