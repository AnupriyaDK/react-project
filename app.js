// palindrome Program
function isPalindrome(str){
    let len=str.length;
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("mam"));

// sum of numbers in an array
function arraySum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(arraySum([1,2,3,4,5]));

// Factorial of a Number
function factorial(num){
    
    if(num===1 || num===0){
        return 1
    }
    else{
        let answer=1;
        for(let i=1;i<num;i++){
            answer=answer*i;

        }
        return answer;
    }
    
    
}
console.log(factorial(10));