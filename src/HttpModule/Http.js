
export function Get() {
  return new Promise(function (resolve, reject) {
    return (
      fetch(
        `https://api.github.com/repos/facebook/create-react-app/issues`
      )
       .then(
          (response) => {
            resolve(response.json());
          },
          (error) => {
            console.log("An error occurred.", error);
            reject(error);
          }
        )
    );
  });
}

export function Post(userData) {
  console.log(userData)
  return new Promise(function (resolve, reject) {
    return (
      fetch( `http://localhost:3000/api/v1/users/login`, { method: 'POST', headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json' }, body: JSON.stringify(userData) })
      .then(
      (response) => {
        resolve(response.json());
      },
      (error) => {
        reject(error);
      }
    )
    )
  });
}
