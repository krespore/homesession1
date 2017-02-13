module.exports = function(n) {
  var primesArray= [];
  for (var i = 2 ; i <= n; i++){
    if (isPrime(i)){
      primesArray.push(i)
    }
  }
  return primesArray;
}

function isPrime (n){
  for (var i =2; i< n/2; i++){
    if (n % i === 0){
      return false;
    }
  }
  return true;
}