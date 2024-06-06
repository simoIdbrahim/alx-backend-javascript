const calculateNumber = (type, a, b) => {
  switch (type) {
  case 'SUM':
    return roundedA + roundedB;
  case 'SUBTRACT':
    return roundedA - roundedB;
  case 'DIVIDE':
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  default:
    throw new Error('Invalid operation type');
}
};

module.exports = calculateNumber;
