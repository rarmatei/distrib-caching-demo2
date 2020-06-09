function fibonacci(input){
    let a = 1;
    let b = 0;
  
    for(let i=input; i>0; i--) {
      const temp = a;
      a += b;
      b = temp;
    }
    return b;
  }

  console.log(fibonacci(100));

  /*
    Virtual cache:
        input: 100 --> output: 354224848179262000000,
        input: 78 --> output: 8944394323791464
  */