const isPowerOfTwo = (number) => {
  //your code here
	while(number>1){
		number=number/2;
	}
	if(number==1){
		return true;
	}
	return false;
};
 
const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
