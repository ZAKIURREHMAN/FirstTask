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
const Alice1Pro = ()=>{
    return new Promise((resolve,reject)=>{
        resolve( alice1.animate(aliceTumbling,aliceTiming).finished)
    })
}
const Alice2Pro = ()=>{
    return new Promise((resolve,reject)=>{
        resolve( alice2.animate(aliceTumbling,aliceTiming).finished)
    })
}
const Alice3Pro = ()=>{
    return new Promise((resolve,reject)=>{
        resolve( alice3.animate(aliceTumbling,aliceTiming).finished)
    })
}
Alice1Pro().then((res)=>{
    Alice2Pro().then((res)=>{
        Alice3Pro()
    })
})