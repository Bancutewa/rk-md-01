
function calculateDays() {
    const monthNumber = parseInt(
        document.getElementById("monthNumber").value
    );
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
    const monthsWith30Days = [4, 6, 9, 11];

    let resultMessage = "";

    if (monthNumber >= 1 && monthNumber <= 12) {
        if (monthsWith31Days.includes(monthNumber)) {
            resultMessage = "Tháng này có 31 ngày.";
        } else if (monthsWith30Days.includes(monthNumber)) {
            resultMessage = "Tháng này có 30 ngày.";
        } else {
            // Tháng 2 - cần kiểm tra năm nhuận
            const isLeapYear = new Date().getFullYear() % 4 === 0;
            if (isLeapYear) {
                resultMessage = "Tháng này có 29 ngày (năm nhuận).";
            } else {
                resultMessage = "Tháng này có 28 ngày (không năm nhuận).";
            }
        }
    } else {
        resultMessage = "Vui lòng nhập số thứ tự tháng từ 1 đến 12.";
    }

    document.getElementById("result").textContent = resultMessage;
}
