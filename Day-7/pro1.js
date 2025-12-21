function cal() {
  var input_calls = prompt("Enter the number of calls made in a month:");
  var input_sms = prompt("Enter the number of SMS sent in a month:");
  var A = parseInt(input_calls);
  var B = parseInt(input_sms);
  var result = document.getElementById("result");

  if (A <= 100 || A > 500) {
    if (A <= 100) {
      result.innerHTML = "Your bill is 300 Rs. ";
    } else {
      var total = cal_calls(A, 10) + cal_sms(B, 1);
      result.innerHTML = "Your bill is " + total + " Rs.";
    }
  } else if (A >= 200 && A < 300) {
    var total = cal_calls(A, 3) + cal_sms(B, 1);
    result.innerHTML = "Your bill is " + total + " Rs.";
  } else if (A >= 300 && A < 400) {
    var total = cal_calls(A, 4) + cal_sms(B, 1);
    result.innerHTML = "Your bill is " + total + " Rs.";
  } else if (A >= 400 && A < 500) {
    var total = cal_calls(A, 5) + cal_sms(B, 1);
    result.innerHTML = "Your bill is " + total + " Rs.";
  } else {
    result.innerHTML = "Invalid input.";
  }
}
function cal_calls(unit, price) {
  return (unit - 100) * price + 300;
}
function cal_sms(unit, price) {
  return unit * price;
}
