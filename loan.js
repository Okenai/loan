let creditLimit = 5000;

const loanOut = function (amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0 || creditLimit < amount) {
      reject('Insufficient Funds!')
    } else {
      creditLimit -= amount;
      resolve(amount);
    }
  });
};



loanOut(400)
  .then(amount => {console.log(`Asking for ${amount}, which should be okay ...`)})
  .then((sum) => {
    console.log(`\t-> I got $${sum} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });