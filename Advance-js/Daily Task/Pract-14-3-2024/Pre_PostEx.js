function counter(params) {
    let count = 0;
    // return () => ++count;
    return () => count++;
  }
  let c = counter();
  console.log(c());
  console.log(c());
  console.log(c());
  console.log(c());
  