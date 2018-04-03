//recursion

function Multiply(x,y){

	if(y==0){
		return 0;
	}

	if(y>0){
		return(x + Multiply(x,y-1));
	}

	if(y<0){
		return -Multiply(x, -y);
		return -1;
		
	}
}

// if 0
console.log("0 x 321" + " = " + Multiply(321,0));
// if positive integer
console.log("5 x 321" + " = " + Multiply(321,5));
// if negative interger
console.log("321 x -2" + " = " + Multiply(321,-2));



