const password_validation = {
    check_length: "Password must be within 8 and 12 chars",
    password_length: function (pass) {
        return pass.length;
    },
    // test_array: [{},{}]
};


const password1 = (carr) => {
    let answer;
    if(carr.length < 8) {
        answer = password_validation.check_length;
    } else if(carr.length > 12) {
        answer = password_validation.check_length;
    } else {
        answer = "";
    }
    return answer;
}

const password2 = (carr) => {
    return (carr.length < 8 || carr.length > 12 ? password_validation.check_length : "");
}

const password3 = (carr) => (carr.length < 8 || carr.length > 12 ? password_validation.check_length : "");

const password4 = (carr) => (password_validation.password_length(carr) < 8 || password_validation.password_length(carr) > 12 ? password_validation.check_length : "");