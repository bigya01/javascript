let a = [1, 2, 3, 4];

let greatestnum = (a) => {
  let g = a[0];  
  for (let x of a) {
    if (x > g) {
      g = x;  
    }
  }
  console.log(g); 
};

greatestnum(a); 