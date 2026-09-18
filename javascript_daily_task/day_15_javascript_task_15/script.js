const password = document.querySelector("#password");
const generateBtn = document.querySelector("#generateBtn");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

generateBtn.addEventListener("click", () => {
  let newPassword = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    newPassword += characters[randomIndex];
  }

  password.value = newPassword;
});