export const validateNewUserInfo = (userInfo, users, imgAvatar, setValidateStatus, fnAfterValidate) => {
  if (!userInfo) {
    setValidateStatus({ valid: false, response: 'Invalid form data' });
    return;
  }
  if (!userInfo.username || !userInfo.password || !userInfo.email || !imgAvatar.imgUrl) {
    setValidateStatus({ valid: false, response: 'Correctly enter the data in the inputs' });
    return;
  }
  if (userInfo.password.length < 6) {
    setValidateStatus({ valid: false, response: 'Password cannot be less than 6 symbols' });
    return;
  }
  if (userInfo.username.length < 6) {
    setValidateStatus({ valid: false, response: 'Login cannot be less than 6 symbols' });
    return;
  }
  if (!userInfo.email.includes('@')) {
    setValidateStatus({ valid: false, response: 'Correctly enter email' });
    return;
  }
  if (users.some((el) => el.username === userInfo.username)) {
    setValidateStatus({ valid: false, response: 'Login is busy' });
    return;
  }
  if(users.some((el) => el.email === userInfo.email)) {
    setValidateStatus({ valid: false, response: 'E-Mail is busy' })
    return
  }
  setValidateStatus({ valid: true, response: 'Account has been created' });
  fnAfterValidate()
  return
};
