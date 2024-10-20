function count(word){
    count =0
    vowels=["a","e","i","o","u"]
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)){
            count ++;
        }
    }
    return count
}

console.log(count("bindu"))