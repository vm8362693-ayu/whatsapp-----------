const phoneInputField = document.querySelector("#phone");

// Library initialize karna
const phoneInput = window.intlTelInput(phoneInputField, {
    // Default country India rakhne ke liye
    initialCountry: "in",
    // Saari countries dikhane ke liye yeh enable rehta hai by default
    separateDialCode: true, 
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Aapka validation logic (Fixed)
phoneInputField.addEventListener('input', function() {
    // 'const' lowercase hona chahiye
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Agar aapko full number (with country code) nikalna ho:
phoneInputField.addEventListener('blur', function() {
    const fullNumber = phoneInput.getNumber();
    console.log("Full Number:", fullNumber);
});
