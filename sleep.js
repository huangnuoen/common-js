// sleep方法，异步调用，等待ms后执行
const sleepAsync = ms => new Promise(resolve => setTimeout(resolve, ms))
async function sleepyWork() {
  console.log('sleep for 1 second.')
  await sleepAsync(1000)
  console.log('woke up after 1 second.')
}

// sleep 同步调用
const sleepSync = ms => {
  const end = new Date().getTime() + ms
  while (new Date().getTime() < end) {
    /* do nothing */
  }
}
const printNums = () => {
  console.log(1)
  sleepSync(500)
  console.log(2)
  console.log(3)
}
