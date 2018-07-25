import 'jquery-validation';
import swal from 'sweetalert';


export default function _formValidation() {

    $.validator.addMethod('customphone', function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, ''); 
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
        submitHandler: function(form) {

            $(form).submit(function() {
                const data = {};
                data['name'] = $('.input_name').val();
                data['phone'] = $('.input_phone').val();
                data['mail'] = $('.input_mail').val();
                data['comment'] = $('.input_comment').val();
        
                const csrf_token = $('#form [name="csrfmiddlewaretoken"]').val();
                data['csrfmiddlewaretoken'] = csrf_token;
                $.ajax({
                    type: 'POST',
                    url: 'dinner',
                    data: data,
                }).done(function () {
                    swal('Спасибо', 'Мы скоро с вами свяжемся', 'success');
                    $('#form').trigger('reset');
                });
                return false;
            });         
        },
    });
}