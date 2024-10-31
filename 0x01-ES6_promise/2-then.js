export default function handleResponseFromAPI(promise) {
  const answer = new Promise((myResolve, myReject) => {
    if (promise) {
      myResolve({ status: 200, body: 'Success' });
    } else {
      myReject(new Error());
    }
  });
  return answer;
}

handleResponseFromAPI(true).then(() => {
  console.log('Got a response from the API');
});
