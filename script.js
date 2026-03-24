document.addEventListener('DOMContentLoaded', (event) => {
    const pw = document.getElementById('password');
    const cpw = document.getElementById('confirm_pw');
    const password = pw.value;
    const confirm = cpw.value;

    [pw,cpw].forEach(item => {
        item.addEventListener('change', ()=> {
            if(pw !== '' && cpw !== '' && password !== confirm) {
                pw.setCustomValidity('Invalid');
                cpw.setCustomValidity('Invalid');
            }
            else if(password === confirm) {
                pw.setCustomValidity('')
                cpw.setCustomValidity('')
            }
        });
    });
});

