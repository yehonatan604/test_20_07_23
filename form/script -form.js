const myForm = document.getElementById("form-Major-Data");
const text = document.getElementById("text");




const firstRegex = /^[A-Z]{8,8}/;
const secondRegex = /^[0-9]{2,2}/;
const thirdRegex = /^[A-Z]{3,3}/;

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const discountInput = myForm.elements["Discount-Code"];
  const discountAsArray = discountInput.value.split('-');

  let test1 = firstRegex.test(discountAsArray[0]);
  let test2 = secondRegex.test(discountAsArray[1]);
  let test3 = thirdRegex.test(discountAsArray[2]);

  if (!test1 || !test2 || !test3) {
    text.innerText = "please enter doscount code with the pattern 'CHIKAMSO-20-OFF'";
    return;
  }

  alert('ok');
  text.innerText = "";
  myForm.submit();
});
