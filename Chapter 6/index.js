const form = document.getElementById('form');
const cost = document.getElementById('cost');
const purchased = document.getElementById('purchased');
const totalDisplay = document.getElementById('total');
//document.ElementById() is used to get the elements from html.

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  /*.addEventListener() is used to form submit.
    .preventDefault() is used to prevent default form.*/
  
  const finalCost = parseFloat(cost.value);
  const finalPurchase = parseFloat(purchased.value);
  //parseFloat() is used to get the values from the input of the user.

  const totalCost = finalCost * finalPurchase;
  //multiplies the finalCost and finalPurchase, and then stores the data in totalCost.

  totalDisplay.textContent = "Total Cost: $" + totalCost.toFixed(2);
  //displays the total cost.
});