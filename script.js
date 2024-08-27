const result = document.querySelector(".result");
const polynomial = document.querySelector(".poly");
const input = document.querySelectorAll(".option");
let string = '';

input.forEach(button => {
    button.addEventListener("click",(e)=>{
        clickedValue = e.target.innerHTML;
        if(clickedValue == '='){
          string=eval(string);
          result.innerText = string;
        } else if(clickedValue === 'CE'){
          clearAll();
        } else if(clickedValue == 'DEL'){
          if(typeof(string) === 'number'){
            clearAll();
          } else{
            string = string.slice(0,-1);
            polynomial.innerText = polynomial.innerText.slice(0,-1);
            result.innerText = result.innerText.slice(0,-1);
          }
        }else{
          polynomial.innerText +=clickedValue; 
          string = string+e.target.innerHTML;
          result.innerText = string; 
        }     
    });
});

function clearAll(){
  string = '';
  result.innerText = '';
  polynomial.innerText = '';
}
