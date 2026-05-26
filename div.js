const division = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log(division(6, 3));