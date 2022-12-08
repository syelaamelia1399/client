//$(document).ready(function ChangePasswordSiswa() {
//    $.ajax({
//        url: 'https://localhost:7215/api/Siswa/1',
//        method: 'GET',
//        dataType: 'json',
//    }).done((result) => {
//        let temp1 = "";
//        temp1 = `
//                <div>
//                    <label class="form-group-float-table is-visible">Id</label>
//                    <input type="text" id="id-department" class="form-control" value="${result.data.email}" data-toggle="tooltip" data-placement="bottom" readonly/>
//                </div>
//                <div>
//                    <label class="form-group-float-table is-visible">Department Name</label>
//                    <input type="text" id="input-name-department" class="form-control" placeholder="Name" data-toggle="tooltip" data-placement="bottom" />
//                </div>
//        `;
//        $("#bodyChangePasswordSiswa").html(temp1);
//    });
//});

function ChangePasswordSiswa() {
    $.ajax({
        url: 'https://localhost:7215/api/Siswa/1',
        method: 'GET',
        dataType: 'json',
    }).done((result) => {
        let temp1 = "";
        temp1 = `
                <div>
                    <label class="form-group-float-table is-visible">Id</label>
                    <input type="text" id="emailSiswaC" class="form-control" value="${result.data.email}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Current Password</label>
                    <input type="text" id="currentPasswordSiswa" class="form-control" placeholder="Enter your current password here ..." data-toggle="tooltip" data-placement="bottom" />
                </div>
                <div>
                    <label class="form-group-float-table is-visible">New Password</label>
                    <input type="text" id="newPasswordSiswa" class="form-control" placeholder="Enter your new password here ..." data-toggle="tooltip" data-placement="bottom" />
                </div>
        `;
        $("#bodyChangePasswordSiswa").html(temp1);
    });
}

function SaveChangePassword() {
    const formData = {
        email: $("#emailSiswaC").val(),
        password: $("#currentPasswordSiswa").val(),
        newPassword: $("#newPasswordSiswa").val(),
    };
    
    $.ajax({
        url: `https://localhost:7215/api/AccountSiswa/ChangePassword`,
        method: "PUT",
        dataType: "JSON",
        data: formData,
        //url: url,
        //contentType: 'application/json; charset=utf-8',
        //dataType: 'json',
        //method: 'PUT',
        //data: JSON.stringify(editItem),
        success: function (data) {
            if (data.message == "Password Lama Anda Salah" || data.message == "Email Salah") {
                console.log("error");
                //Swal.fire("Error!", `${data.message}`, "error");
            } else {
                console.log("Berhasil");
                //Swal.fire("Done!", `${data.message}`, "success");
                //.then(function () {
                //    $('#change_password').modal('show');
                //    NewPassword(data.data);
                //})
            }
        },
        error: function () {
            Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: 'Something went wrong!'
            });
        }
    });
}