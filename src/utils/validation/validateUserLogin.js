export const validateUserLogin = (userInfo, users, setValidateStatus, fnAfterValidate) => {
    if (!userInfo) {
      setValidateStatus({ valid: false, response: 'Invalid form data' });
      return;
    }
    if (!userInfo.username || !userInfo.password) {
      setValidateStatus({ valid: false, response: 'Correctly enter the data in the inputs' });
      return;
    }
    if(!users.some((el) => el.username === userInfo.username) ) {
      setValidateStatus({ valid: false, response: 'Login is not currectly' })
      return
    }
    if(!users.some((el) => el.password === userInfo.password)) {
      setValidateStatus({ valid: false, response: 'Password is not currectly' })
      console.log(users)
      return
    }
    if (userInfo.password.length < 6) {
      setValidateStatus({ valid: false, response: 'Password cannot be less than 6 symbols' });
      return;
    }
    if (userInfo.username.length < 6) {
      setValidateStatus({ valid: false, response: 'Login cannot be less than 6 symbols' });
      return;
    }
    setValidateStatus({ valid: true, response: 'Sucsess login' });
    fnAfterValidate()
    return
  };
  