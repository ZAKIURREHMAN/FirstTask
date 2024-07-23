const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");


  const Alice1Promise = ()=>{
    return alice1.animate(aliceTumbling,aliceTiming).finished
}
const Alice2Promise = ()=>{
    return alice2.animate(aliceTumbling,aliceTiming).finished
}
const Alice3Promise = ()=>{
    return alice3.animate(aliceTumbling,aliceTiming).finished
}
Alice1Promise()
.then(()=>Alice2Promise())
.then(()=>Alice3Promise())
.catch((err)=>{
    console.log(err)
})



// Promise.all

Promise.all([Alice1Promise(),Alice2Promise(),Alice3Promise()]).then((result)=>{
    console.log("All Promise is working")
})
.catch((err)=>{
    console.log("Some error",err)
})




// Promise.allSettled
Promise.allSettled([Alice1Promise(),Alice2Promise(),Alice3Promise()])
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})


// Promise.any

Promise.any([Alice1Promise(),Alice2Promise(),Alice3Promise()])
.then((result)=>{
    console.log("This is result",result)
})
.catch((err)=>{
    console.log("Error",err)
})



// Promise.race
Promise.race([Alice1Promise(),Alice2Promise(),Alice3Promise()])
.then((result)=>{
    console.log("This is result",result)
})
.catch((err)=>{
    console.log("Error",err)
})
