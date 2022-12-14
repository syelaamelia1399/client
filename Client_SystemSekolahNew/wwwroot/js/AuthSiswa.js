$(document).ready(function Login() {
    $("#btn-loginSiswa").click(function () {
        const dataEmail = $("#emailSiswa").val().trim();
        const dataPassword = $("#passwordSiswa").val().trim();

        $.ajax({
            url: 'https://localhost:7215/api/AccountSiswa/Login',
            method: 'POST',
            dataType: 'json',
            data: {
                email: dataEmail,
                password: dataPassword
            },
            success: function (data) {
                //console.log("login berhasil");
                if (data.message == "Email/Password salah") {
                    //console.log("Login Gagal")
                    Swal.fire("Error!", `${data.message}`, "error");
                } else {
                    //console.log("Login Berhasil")
                    Swal.fire("Done!", `${data.message}`, "success");
                    //sessionStorage.setItem("key", `${data.token}`);
                    //location.replace('https://localhost:7104');

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("error");
                Swal.fire("Error!", "Please try again", "error");
            }
        })
    })
})

$(document).ready(function () {

    const ca = sessionStorage.getItem("key");
    const base6url = ca.split('.')[1];
    const decodeValue = JSON.parse(window.atob(base6url));

    $.ajax({
        url: `http://localhost:29539/api/Employee/${decodeValue.userId}`,
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("key"),
        }
    }).done((res) => {
        let namaUser = "";
        namaUser = `Halo Admin <h1>${res.fullName}</h1>`

        let dataImage = "";
        dataImage = `<img  width="100" height="100" src="http://localhost:29539/api/ImageUpload/${res.gender}" class="img-circle elevation-2">`

        $('#gambar').html(dataImage);
        $("#nama_user_login").html(namaUser);
    });

})


$(document).ready(function ForgotPassword() {
    $("#btn-forgetPasswordSiswa").click(function () {
        const email = $("#emailSiswaF").val();
        const newPassword = $("#passwordSiswaF").val();
        //console.log(email, newPassword);
        $.ajax({
            url: 'https://localhost:7215/api/AccountSiswa/ForgotPassword',
            method: 'PUT',
            async: false,
            dataType: 'json',
            data: {
                email: email,
                newPassword: newPassword
            },
            success: function (data) {
                if (data.message == "Email Tidak Terdaftar") {
                    console.log("error");
                    //Swal.fire("Error!", `${data.message}`, "error");
                } else {
                    console.log("berhasil");
                    //Swal.fire("Done!", `${data.message}`, "success");
                    //.then(function () {
                    //    $('#change_password').modal('show');
                    //    NewPassword(data.data);
                    //})
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                Swal.fire("Error!", "Please try again", "error");
            }
        })

    })

});



function NewPassword(dataId) {
    console.log(dataId);

    let buttonSubmit = "";
    buttonSubmit = `<button type="button" class="btn btn-primary" value="Submit" onclick="confirmPassword(${dataId})">Submit</button>`

    $("#btn_newPassword").html(buttonSubmit);

};


function confirmPassword(dataId) {
    const dataInput = {
        id: dataId,
        password: $("#InputNewPassword").val(),
        retypePassword: $("#InputConfirmPassword").val(),
    }

    $.ajax({
        url: 'http://localhost:29539/api/Auth/ResetPassword',
        method: 'POST',
        dataType: 'json',
        data: dataInput,
        success: function (data) {
            if (data.message == "Confirm Password Invalid" || data.message == "Reset Password Failed") {
                Swal.fire("Error!", `${data.message}`, "error")
            } else {
                Swal.fire("Done!", `${data.message}`, "success").then(function () {
                    location.replace('https://localhost:7104/Auth/Login')
                })
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            Swal.fire("Error!", "Please try again", "error");
        }

    })
}

function logout() {
    sessionStorage.clear();
    console.log("test");
    location.replace('https://localhost:7104/Auth/Login');

}
//Auth.js
//5 KB