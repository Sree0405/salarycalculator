document.getElementById("calculateButton").addEventListener("click", function () {
    const job = document.getElementById("job").value || "______";
    const workHour = parseInt(document.getElementById("workHour").value) || 0;
    const workWeek = parseInt(document.getElementById("workWeek").value) || 0;
    const grossSalary = parseFloat(document.getElementById("netSalary").value) || 0;
    const tax = parseFloat(document.getElementById("tax").value) || 0;
    const overtimeHours = parseInt(document.getElementById("overtimeHours").value) || 0;
    const overtimeRate = parseFloat(document.getElementById("overtimeRate").value) || 0;

    const monthlyTaxDeduction = (grossSalary * tax) / 100;
    const netMonthlySalary = grossSalary - monthlyTaxDeduction;
    const hourlySalary = netMonthlySalary / (workWeek * workHour * 4);
    const dailySalary = hourlySalary * workHour;
    const yearlySalary = netMonthlySalary * 12;
    const overtimeEarnings = overtimeHours * overtimeRate * 4;
    const totalEarnings = yearlySalary + overtimeEarnings;

    document.getElementById("jobTitle").textContent = job;
    document.getElementById("hourly").textContent = `$${hourlySalary.toFixed(2) + ". Rs"}`;
    document.getElementById("daily").textContent = `$${dailySalary.toFixed(2) + ". Rs"}`;
    document.getElementById("monthlyGross").textContent = `$${grossSalary.toFixed(2) + ". Rs"}`;
    document.getElementById("taxDeduction").textContent = `-$${monthlyTaxDeduction.toFixed(2) + ". Rs"}`;
    document.getElementById("monthlyNet").textContent = `$${netMonthlySalary.toFixed(2) + ". Rs"}`;
    document.getElementById("yearly").textContent = `$${yearlySalary.toFixed(2) + ". Rs"}`;
    document.getElementById("overtimeEarnings").textContent = `$${overtimeEarnings.toFixed(2) + ". Rs"}`;
    document.getElementById("totalEarnings").textContent = `$${totalEarnings.toFixed(2) + ". Rs"}`;
});

document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("salaryForm").reset();
    document.getElementById("jobTitle").textContent = "______";
    document.getElementById("hourly").textContent = "Rs0";
    document.getElementById("daily").textContent = "Rs0";
    document.getElementById("monthlyGross").textContent = "Rs0";
    document.getElementById("taxDeduction").textContent = "Rs0";
    document.getElementById("monthlyNet").textContent = "Rs0";
    document.getElementById("yearly").textContent = "Rs0";
    document.getElementById("overtimeEarnings").textContent = "Rs0";
    document.getElementById("totalEarnings").textContent = "Rs0";
});