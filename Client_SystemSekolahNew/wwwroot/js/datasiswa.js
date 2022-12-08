$(document).ready(function () {
    $('#tableMatpelSiswa').DataTable({
        ajax: {
            url: 'https://localhost:7215/api/MatpelSiswa/1',
            dataType: 'json',
            dataSrc: 'data'
        },
        columns: [
            { data: 'mataPelajaran' },
            { data: 'kelas' },
        ],
        dom: 'Bfrtip',
        buttons: ['colvis', 'pdf', 'excel']
    });
});

$(document).ready(function () {
    $('#tableJadwalSiswa').DataTable({
        ajax: {
            url: 'https://localhost:7215/api/JadwalSiswa/1',
            dataType: 'json',
            dataSrc: 'data'
        },
        columns: [
            { data: 'hari' },
            { data: 'jam' },
            { data: 'mataPelajaran' },
            { data: 'kelas'}
        ],
        dom: 'Bfrtip',
        buttons: ['colvis', 'pdf', 'excel']
    });
});

$(document).ready(function () {
    $('#tableNilaiSiswa').DataTable({
        ajax: {
            url: 'https://localhost:7215/api/NilaiSiswa/1',
            dataType: 'json',
            dataSrc: 'data'
        },
        columns: [
            { data: 'mataPelajaran' },
            { data: 'kelas'},
            { data: 'nilaiHarian' },
            { data: 'nilaiUTS' },
            { data: 'nilaiUAS' },
            { data: 'nilaiRata' },
        ],
        dom: 'Bfrtip',
        buttons: ['colvis', 'pdf', 'excel']
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'https://localhost:7215/api/Siswa/1',
        method: 'GET',
        dataType: 'json',
    }).done((res) => {
        console.log(res);
        let temp = "";
        temp = `
                <div>
                    <label class="form-group-float-table is-visible">Id</label>
                    <input type="number" class="form-control" placeholder="${res.data.nis}" value="${res.data.nis}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Nama</label>
                    <input type="text" class="form-control" placeholder="${res.data.name}" value="${res.data.name}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Email</label>
                    <input type="email" class="form-control" placeholder="${res.data.email}" value="${res.data.email}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Gender</label>
                    <input type="text" class="form-control" placeholder="${res.data.gender}" value="${res.data.gender}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Tempat Lahir</label>
                    <input type="text" class="form-control" placeholder="${res.data.place_Of_Birth}" value="${res.data.place_Of_Birth}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Tanggal Lahir</label>
                    <input type="text" class="form-control" placeholder="${res.data.date_Of_Birth}" value="${res.data.date_Of_Birth}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Alamat</label>
                    <input type="text" class="form-control" placeholder="${res.data.address}" value="${res.data.address}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">No. HP</label>
                    <input type="number" class="form-control" placeholder="${res.data.noTelp}" value="${res.data.noTelp}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
                <div>
                    <label class="form-group-float-table is-visible">Nama Ibu</label>
                    <input type="text" class="form-control" placeholder="${res.data.mother_Name}" value="${res.data.mother_Name}" data-toggle="tooltip" data-placement="bottom" readonly/>
                </div>
        `;
        console.log(temp);
        $("#profileSiswa").html(temp);
    });
});



//$(document).ready(function ChangePasswordSiswa() {
//    $.ajax({
//        url: 'https://localhost:7215/api/Siswa/1',
//        method: 'GET',
//        dataType: 'json',
//    }).done((res) => {
//        let temp = "";
//        temp += `
//                <div>
//                    <label class="form-group-float-table is-visible">Id</label>
//                    <input type="text" id="id-department" class="form-control" value="${res.data.email}" data-toggle="tooltip" data-placement="bottom" readonly/>
//                </div>
//                <div>
//                    <label class="form-group-float-table is-visible">Department Name</label>
//                    <input type="text" id="input-name-department" class="form-control" placeholder="Name" data-toggle="tooltip" data-placement="bottom" />
//                </div>
//        `;
//        $("#bodyChangePasswordSiswa").html(temp);
//    });
//});
