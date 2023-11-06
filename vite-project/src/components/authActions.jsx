export const login = (user) => {
    return {
      type: 'LOGIN',
      payload: user,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };

//   export const loginAPi = (user) => {
//     return (dispatch) => {
//         fetch('postUseerdetails').then((res) => dispatch(login))
            // navigate('/home')
//     }
//   }
  