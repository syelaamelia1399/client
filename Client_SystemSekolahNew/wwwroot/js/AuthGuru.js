$(document).ready(function Login() {
    $("#btn-loginGuru").click(function () {
        const dataEmail = $("#emailGuru").val().trim();
        const dataPassword = $("#passwordGuru").val().trim();

        $.ajax({
            url: 'https://localhost:7215/api/Guru/Login',
            method: 'POST',
            dataType: 'json',
            data: {
                email: dataEmail,
                password: dataPassword
            },
            success: function (data) {
                //console.log("login berhasil");
                if (data.message == "Email or Password Invalid") {
                    //console.log("Login Gagal")
                    Swal.fire("Error!", `${data.message}`, "error")
                } else {
                    //console.log("Login Berhasil")
                    Swal.fire("Done!", `${data.message}`, "success")
                    //sessionStorage.setItem("key", `${data.token}`);
                    //location.replace('https://localhost:7104');

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("error");
                //Swal.fire("Error!", "Please try again", "error");
            }
        })
    })
})