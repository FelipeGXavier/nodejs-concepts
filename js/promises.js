let promise = new Promise((resolve, reject) => {
  let x = 10;
  if(x == 10){
    resolve(() => {
      return 'Success';
    });
  }else {
    reject('Failed');
  }
});

promise.then(res => {
  console.log(res());
}).catch(err => {
  console.log(err);
})


function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function response() {
  await wait(500);
  console.log("Executed");
}

response();
console.log("Before");


const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorial() {
  return new Promise((resolve, reject) => {
    if(userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      });
    }else if(userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      });
    }else {
      resolve('Thumbs up and subscribe');
    }
  });
}

watchTutorial().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


const res = async () => {
  try{
    console.log(await watchTutorial());
  }catch(err){
    console.log(err);
  }
}

res();


const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 Finished");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 Finished");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("Promise 3 Finished");
});

Promise.all([promise1, promise2, promise3]).then(messages => {
  console.log(messages);
})

setTimeout(() => {
  console.log("Timed")
}, 1000);
