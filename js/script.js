// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name,
        email,
        city,
        zipCode,
        status
    };
}

function isNumber(input) {
    return !isNaN(input);
}

function checkboxIsChecked() {
    const checkbox = document.getElementById("status");

    if (checkbox.checked) {
        return true;
    } else {
        return false;
    }
}

function validateFormData(formData) {
    if (
        formData &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked()
    ) {
        return true;
    } else {
        return false;
    }
}

function submit() {
    if (validateFormData(handleGetFormData()) == false) {
        return (document.getElementById("warning").innerHTML =
            "Periksa form anda sekali lagi");
    } else {
        return (document.getElementById("warning").innerHTML = "");
    }
}