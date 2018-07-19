import 'jquery-validation';

export default function _formValidation() {

    $.validator.addMethod('customphone', function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, ''); 
        console.log(phone_number.length);
        return this.optional(element) || (phone_number.length !== 0 &&
		phone_number.match(/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/));
    });

    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            phone: {
                required: true,
                'customphone': true,
            },
            mail: {
                required: true,
                email: true,
            },
        },
        errorPlacement: function(){
            return false;
        },
    });
}