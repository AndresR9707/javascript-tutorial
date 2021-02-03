function ValidateAge(){
const question = prompt("How old are you?");
if(!question){
    return;
}
if(question < 18){
    alert('You are not an adult.');
}else{
    alert('You are an adult.');
    }
}
ValidateAge();




