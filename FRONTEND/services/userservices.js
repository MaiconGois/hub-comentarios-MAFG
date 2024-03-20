const UserService = {
    getUserById: (userId) => {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:7000/user/${userId}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao obter informações do usuário');
            }
            return response.json();
          })
          .then(user => {
            const { firstname, lastname } = user;
            const userInfo = { firstname, lastname };
            resolve(userInfo);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  };
  
  export { UserService };
  