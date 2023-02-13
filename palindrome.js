const isPalindrome=(word)=>{
    let left=0;
    let right=word.length-1;

    while(left<right){
        if (word[left]!= word[right]){
            return false;
        }
        left++;
        right--;
    }
    return true
}


console.log(isPalindrome(['m','a','h','a','m']));