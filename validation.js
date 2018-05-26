const inputs = document.querySelectorAll('input');
//returns collection of elements in that case collection of input elements 

// regex patterns
const patterns = {
        telephone: /^\d{11}$/,
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        slug: /^[a-z\d-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .de )
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        //console.log(regex.test(field.value));
        // takes the regex and the test it against the value whatever is in that input field and returns either True or False 
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            // console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
            //e.target grabs the input field, second argument is passing the regex 
    });
});
