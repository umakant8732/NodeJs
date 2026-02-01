console.log('thread 1 is running')
for (let index = 0; index < 10000000000; index++) {
  if (index % 400000000 == 0) {
    console.log(`running loop 1 ${index}`)
  }
}
