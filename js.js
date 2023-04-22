let input = document.querySelector("input");
function send() {
    event.preventDefault();
    let input = document.querySelector("input");
    let upercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowercase = "qwertyuiopasdfghjklzxcvbnm"
    let symbols = "!@#$%&*()+{}\<>?";
    numbers = "0123456789";
    let length = document.querySelector("#l").value;

    let all = upercase + lowercase + symbols + numbers;
    let password = "";
    password += upercase[Math.floor(Math.random() * upercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (length > password.length) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    input.value = password
}
function copy() {
    input.select();
    document.execCommand("copy")
}