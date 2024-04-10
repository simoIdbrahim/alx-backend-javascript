import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (
      result.map((req) => ({
        status: req.status,
        value: req.status === 'fulfilled' ? req.value : String(req.reason),
      }))
    ));
}
