
const btnAssign = document.getElementById("btn-assign");
const txtname = document.getElementById("txt-name");
const txtnota1 = document.getElementById("txt-nota1");
const txtnota2 = document.getElementById("txt-nota2");
const txtnota3 = document.getElementById("txt-nota3");
const response = document.getElementById("p-result");

const printDate = () => {
  console.log(txtname.value);
  console.log(txtnota1.value);
  console.log(txtnota2.value);
  console.log(txtnota3.value);
}
btnAssign.addEventListener("click", printDate);

btnAssign.addEventListener("click", calcular)

function calcular(){

let nota1 = 0.3;
let nota2 = 0.3;
let nota3 = 0.4;

let txtName = txtname.value;
let n1 = txtnota1.value;
let n2 = txtnota2.value;
let n3 = txtnota3.value;

  let notafinal = (n1 * nota1) + (n2 * nota2) + (n3 * nota3) / 3;
  if (notafinal >= 4.5){
    response.textContent = `${txtName},Su nota es de 4.5,Usted es considerado Excelente" `;    
    response.style.color = "aqua";
  } else if (notafinal > 3.5 && notafinal < 4.5){
    response.textContent = `${txtName},Su nota está entre 3.5 y 4.5 "Usted es considerado un estudiante Bueno" `;    
    response.style.color = "darkcyan";
  } else if (notafinal > 2 && notafinal < 3.4){
    response.textContent = `${txtName}, usted tiene la oportunidad de recuperar" `;    
    response.style.color = "aqua";
  } else {
    response.textContent = `${txtName}, Su la nota está por debajo de 2,habrá perdido la materia y deberá repetirla" `;    
    response.style.color = "red";
  }


}


