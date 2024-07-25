let billamount = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let errormessage = document.getElementById("errorMessage");

function calculate() {
    if (billamount.value === "" || percentagetip.value === "") {
        errormessage.textContent = "Please enter a valid input.";
        return;
    } else {
        errormessage.textContent = "";
        let percenttip = parseInt(percentagetip.value);
        let billval = parseInt(billamount.value);
        let tipval = billval * (percenttip / 100);
        let totalbillamount = billval + tipval;
        totalamount.value = totalbillamount;
        tipamount.value = tipval;
    }
}