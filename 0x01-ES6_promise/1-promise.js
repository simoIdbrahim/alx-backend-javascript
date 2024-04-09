export default function getFullResponseFromAPI(success) {
  return new Promise((res, reg) => {
    if(success) {
      res({ status: 200, body: 'Success' });
    } else {
      reg(new Error('The fake API is not working currently'));
    }
  });
}
