let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");

//function
function paliarr(){

var newarr=[];

for(let i=0;i<arr.length;i++){

var temp=arr[i]; 
var b; 
var c=0;

while(arr[i]>0){
    b=arr[i]%10; 
    arr[i]=parseInt(arr[i]/10);
    c=c*10+b;
}

if(temp==c){
    newarr.push (temp);
}

}

return newarr;
}



//function calling
var a=paliarr()
document.write("Palindrome numbers are = [ "+a+" ]");