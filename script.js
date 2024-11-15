const toastBox = document.querySelector("#toastBox");

const successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
const errorMsg = `<i class="fa-solid fa-circle-xmark error"></i> Please fix the error`;
const invalidMsg = `<i class="fa-solid fa-circle-exclamation invalid"></i> Invalid input, check again`;

function showToast(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
}