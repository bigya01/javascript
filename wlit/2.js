word ="bindu"
len=word.length
let l= len/2;
let palindrome =true
for (i=0;i<=l;i++){
    if(word[i]!=word[len-i-1]){
        palindrome= false
    }
}
console.log("the word is "+ palindrome+ " palindrome")

