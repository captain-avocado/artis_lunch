import swal from 'sweetalert';

export default function _formValidation() {

    $.validator.addMethod('customphone', function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, ''); 
        return this.optional(element) || (phone_number.length !== 0 &&
		phone_number.match(/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/));
    });

    $('#form').submit(function () {

        if (validate()){

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
        }
        return false;
    });

    function validate_name() {
        if (($('.input_name').val().length) === 0) {
            $('.input_name').css('border', '1px solid red');
            return false;
        } else {
            $('.input_name').css('border', '1px solid #d4d4d4');
            return true;
        }
    }

    function validate_mail() {
        const reg_mail = /.+?@.+?\..+/;
        if ((($('.input_mail').val().length) === 0) || $('.input_mail').val().search(reg_mail) !== 0) {
            $('.input_mail').css('border', '1px solid red');
            return false;
        } else {
            $('.input_mail').css('border', '1px solid #d4d4d4');
            return true;
        }
    }

    function validate_phone() {
        const reg_phone = /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        if ((($('.input_phone').val().length) === 0) || $('.input_phone').val().search(reg_phone) !== 0) {
            $('.input_phone').css('border', '1px solid red');
            return false;
        } else {
            $('.input_phone').css('border', '1px solid #d4d4d4');
            return true;
        }
    }

    function validate() {
        var flag = true;
        if (!validate_mail()) {
            flag = false;
        }
        if (!validate_name()) {
            flag = false;
        }
        if (!validate_phone()) {
            flag = false;
        }
        return flag;
    }

    $('.input_name').blur(function(){
        validate_name();
    });

    $('.input_name').on('input', function(){
        validate_name();
    });

    $('.input_mail').blur(function(){
        validate_mail();
    });

    $('.input_mail').on('input', function(){
        validate_mail();
    });

    $('.input_phone').blur(function(){
        validate_phone();
    });

    $('.input_phone').on('input', function(){
        validate_phone();
    });

}



