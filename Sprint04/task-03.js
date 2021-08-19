const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
  const user = await getUser(userInfo => userInfo);
  const userProfile = await getUserProfile(user.id);
  return userProfile.age;
}