const weight = 90;
const height = 1.75;


const bmi = weight / (height * height);
if (bmi < 18) {
    console.log("Gầy");
} else if (bmi < 25.0) {
    console.log("Bình thường");
} else if (bmi < 30.0) {
    console.log("Hơi béo");
} else {
    console.log("Hơi béo");
}
