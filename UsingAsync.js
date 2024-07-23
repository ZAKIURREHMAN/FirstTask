aliceTumbling = [
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
const Alice1Fun = async()=>{
     await  alice1.animate(aliceTumbling,aliceTiming).finished
      Alice2Fun()
}
const Alice2Fun = async()=>{
   await alice2.animate(aliceTumbling,aliceTiming).finished
   Alice3Fun()
}
const Alice3Fun = ()=>{
    alice3.animate(aliceTumbling,aliceTiming)
}
Alice1Fun()