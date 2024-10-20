function check(animals){
    filtered_animals=[]
    let len =animals.length
    for (i=0;i<len;i++){
        ans = false
        word=animals[i]
        for (let letter of word.toLowerCase()){
            if (letter == "a"){
                ans=true
            }
        }
        console.log(animals[i]+" : "+ans)
         if (ans == false){
                filtered_animals.push(animals[i])
            }

    }
    return (filtered_animals)
}
   


const animals =["cat","dog","horse","eagle"]
console.log(check(animals))
