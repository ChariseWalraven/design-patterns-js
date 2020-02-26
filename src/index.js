console.log("hello from index.js!")

const waitForMe = new Promise((res, rej) => {
  const tO = setTimeout(() => {
    res(true)
    clearTimeout(tO)
  }, 3000)
})

var didYouWait = await waitForMe

console.log(didYouWait)
