let value = 0;
changeColor = () => {
  if (value <0)
  {
    document.querySelector("#value").style.color = "#E21717";

  }else if(value > 0){
    document.querySelector("#value").style.color = "#F7CD2E";
  }else{
    document.querySelector("#value").style.color = "#fff";

  }
}

document.querySelector(".increase").onclick = () => {
  value = value + 1;
  changeColor();
  document.querySelector("#value").innerHTML = value;

}

document.querySelector(".decrease").onclick = () => {
  value = value - 1;
  changeColor();
  document.querySelector("#value").innerHTML = value;

}

document.querySelector(".reset").onclick = () => {
  value = 0;
  changeColor();
  document.querySelector("#value").innerHTML = value;
   
}
