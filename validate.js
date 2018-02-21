$(function () {

    $('#fName_error').hide();
    $('#lName_error').hide();
    $('#email_error').hide();
    $('#confirmEmail_error').hide();
    $('#phone_error').hide();

    function validate_firstName() {
        var is_name = $('#fName').val();
        console.log(is_name);
        if (is_name) {
            return true;
        }
        else {
            return false;
        }
    }


    function validate_email() {
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test($('#email').val());
        if (is_email) {
            return true;
        }
        else {
            return false;
        }
    }

    function validate_confirm_email() {
        var email = $('#email').val();
        var confirm_email = $('#confirmEmail').val();
        if (confirm_email && confirm_email === email) {
            return true;
        }
        else {
            return false;
        }
    }

    // function validate_gender() {
    //     if ($('input[name=gender]').is(":checked")) {
    //         $('#gender_error').hide();
    //         return true;
    //     }
    //     else {
    //         $('#gender_error').show();
    //         return false;
    //     }
    // }

    function validate_phone() {
        var re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
        var is_phone = re.test($('#phone').val());
        if (is_phone) {
            return true;
        }
        else {
            return false;
        }
    }

    $('#fName').focusout(function () {
        if (validate_firstName()) {
            $('#fName_error').hide();
        }
        else {
            $('#fName_error').show();
        }
    });
    $('#email').focusout(function () {
        if (validate_email()) {
            $('#email_error').hide();
        }
        else {
            $('#email_error').show();
        }
    });
    $('#confirmEmail').focusout(function () {
        if (validate_confirm_email()) {
            $('#confirmEmail_error').hide();
        }
        else {
            $('#confirmEmail_error').show();
        }
    });
    $('#phone').focusout(function () {
        if (validate_phone()) {
            $('#phone_error').hide();
        }
        else {
            $('#phone_error').show();
        }
    });

    $('#register').click(function () {
        if (validate_phone() &&
            validate_firstName() &&
            validate_email() &&
            validate_confirm_email()) {
            alert("form submitted");
        }
        else {
            alert("please fill the required fields");
        }
    });

    function ajaxCall() {
        $.ajax({
            url: "https://reqres.in/api/users/10",
            async: false,
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function (data) {
                $('#userTable').append($("<tr><td>" + data.data.id + "</td><td>" + data.data.first_name + "</td><td>" + data.data.last_name + '</td><td><img src = " ' + data.data.avatar + '" height ="50" width ="50"</td></tr>'));
            },
            error: function (er) {
                console.log(er);
            }
        });
    }

    ajaxCall();
});