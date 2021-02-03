
const heartBeat = callback=>{
  const timerId= setInterval(callback,1000,new Date())
  //stop the interval
  setTimeout(()=>{
      console.log('stopping task')
      //stopping
       clearInterval(timerId);
  },5000)

}
heartBeat(now=>console.log(now))