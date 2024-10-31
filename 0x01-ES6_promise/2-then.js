// 2-then.js
export default function handleResponseFromAPI(promise) {
  return new Promise((myResolve, myReject) => {
    if (promise) {
      myResolve(
        {
          body: 'success',
          status: 200
        }
      );
    } else {
      myReject(new Error());
    }
  }).then(() => {
    console.warn('Got a response from the API');
  }).catch(() => {
    console.warn('Got a response from the API');
  });
}
