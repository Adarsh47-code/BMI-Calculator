document.getElementById("calculate-button").addEventListener("click", function () {

    const heightInput = document.getElementById("forHeight").value;
    const weightInput = document.getElementById("forWeight").value;

    if (!heightInput || !weightInput || isNaN(heightInput) || isNaN(weightInput)) {
        alert("The box should be filled with NUMBERS");
        return;
    };

    const heightInMeters = heightInput / 100;
    const bmi = weightInput / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.querySelector(".result").innerHTML = `
<h3>Your BMI is: ${roundedBMI}</h3>
<p> Category: ${category}</p>`;

});
