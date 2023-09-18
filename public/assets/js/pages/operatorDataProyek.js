var pnSelect = document.getElementById("pn");
var mpSelect = document.getElementById("mp");

var choicesMp = new Choices(mpSelect);

pnSelect.addEventListener("change", function() {
    var selectedPn = pnSelect.value.substring(0, 4);
    choicesMp.clearChoices();

    if (selectedPn === "PN 0") {
        choicesMp.setChoices([
            { label: "Major project belum teridentifikasi" },
        ], 'label');
    } else if (selectedPn === "PN 1") {
        choicesMp.setChoices([
            { label: "Industri 4.0 di 7 Subsektor Prioritas" },
            { label: "Kawasan Industri Prioritas dan Smelter" },
            { label: "Destinasi Pariwisata Prioritas" },
            { label: "Penguatan Jaminan Usaha Serta 350 Korporasi Petani dan Nelayan" },
            { label: "Akselerasi Pengembangan Energi Terbarukan dan Konservasi Energi" },
            { label: "Revitalisasi Tambak di Kawasan Sentra Produksi Udang dan Bandeng" },
            { label: "Integrasi Pelabuhan Perikanan dan Fish Market bertaraf Internasional" },
            { label: "Food Estate (Kawasan Sentra Produksi Pangan)" },
            { label: "Pengelolaan Terpadu UMKM" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 1)" },
        ], 'label');
    } else if (selectedPn === "PN 2") {
        choicesMp.setChoices([
            { label: "Pembangunan Wilayah Batam-Bintan" },
            { label: "Pengembangan Wilayah Metropolitan (WM): Palembang, Denpasar, Banjarmasin, Makassar" },
            { label: "Pembangunan Ibu Kota Nusantara" },
            { label: "Pembangunan Kota Baru: Maja, Tanjung Selor, Sofifi, dan Sorong" },
            { label: "Wilayah Adat Papua: Wilayah Adat Laa Pago dan Wilayah Adat Domberay" },
            { label: "Pemulihan Pascabencana: Kota Palu dan Sekitarnya, Pulau Lombok dan Sekitarnya, serta Kawasan Pesisir Selat Sunda" },
            { label: "PKSN Kawasan Perbatasan Negara" },
            { label: "Manajemen Aset Lahan dalam Pemberdayaan Masyarakat (Reforma Agraria)" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 2)" },
        ], 'label');
    } else if (selectedPn === "PN 3") {
        choicesMp.setChoices([
            { label: "Percepatan Penurunan Kematian Ibu dan Stunting" },
            { label: "Pembangunan Science Techno Park" },
            { label: "Pendidikan dan Pelatihan Vokasi untuk Industri 4.0" },
            { label: "Reformasi Sistem Perlindungan Sosial" },
            { label: "Reformasi Sistem Kesehatan Nasional" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 3)" },
        ], 'label');
    } else if (selectedPn === "PN 4") {
        choicesMp.setChoices([
            { label: "Mendukung Pelaksanaan MP di PN Lainnya" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 4)" },
        ], 'label');
    } else if (selectedPn === "PN 5") {
        choicesMp.setChoices([
            { label: "Rumah Susun Perkotaan" },
            { label: "Akses Air Minum Perpipaan (10 Juta Sambungan Rumah)" },
            { label: "Akses Sanitasi (Air Limbah Domestik) Layak dan Aman (90 Persen Rumah Tangga)" },
            { label: "Pemulihan 4 DAS Kritis" },
            { label: "18 Waduk Multiguna" },
            { label: "Pengamanan Pesisir 5 Perkotaan Pantura Jawa" },
            { label: "Jaringan Pelabuhan Utama Terpadu" },
            { label: "Kereta Api Makassar-Pare Pare" },
            { label: "KA Kecepatan Tinggi Pulau Jawa (Jakarta-Semarang dan Jakarta-Bandung)" },
            { label: "Jalan Tol Trans Sumatera Aceh-Lampung" },
            { label: "Jalan Trans pada 18 Pulau Tertinggal, Terluar, dan Terdepan" },
            { label: "Jalan Trans Papua Merauke-Sorong" },
            { label: "Jembatan Udara 37 Rute di Papua" },
            { label: "Sistem Angkutan Umum Massal Perkotaan di 6 WM: Jakarta, Surabaya, Bandung, Medan, Semarang, dan Makassar" },
            { label: "Penyediaan Tenaga Listrik: Pembangkit Listrik 27.000 MW, Transmisi 19.000 kms, dan Gardu Induk 38.000 MCA" },
            { label: "Jaringan Gas Kota untuk 4 Juta Sambungan Rumah" },
            { label: "Pipa Gas Bumi Trans Kalimantan (2.219 Km)" },
            { label: "Pembangunan dan Pengembangan Kilang Minyak" },
            { label: "Transformasi Digital" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 5)" },
        ], 'label');
    } else if (selectedPn === "PN 6") {
        choicesMp.setChoices([
            { label: "Pembangunan Fasilitas Pengolahan Limbah B3" },
            { label: "Penguatan Sistem Peringatan Dini bencana" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 6)" },
        ], 'label');
    } else if (selectedPn === "PN 7") {
        choicesMp.setChoices([
            { label: "Penguatan NSOC-SOC dan Pembentukan 121 CSIRT" },
            { label: "Penguatan Keamanan Laut di Natuna" },
            { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 7)" },
        ], 'label');
    }
});

function checkFileSize(input) {
    const maxFileSizeMB = 2;
    const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;
  
    if (input.files.length > 0) {
        const fileSize = input.files[0].size;
        if (fileSize > maxFileSizeBytes) {
            alert('Ukuran file melebihi batas maksimum (2 MB). Silakan pilih file lain.');
            input.value = '';
        }
    }
}

var tnp = document.getElementById('tnp');
tnp.addEventListener('keyup', function() {
    tnp.value = formatRupiah(this.value);
});

var npv = document.getElementById('npv');
npv.addEventListener('keyup', function() {
    npv.value = formatRupiah(this.value);
});

var capex = document.getElementById('capex');
capex.addEventListener('keyup', function() {
    capex.value = formatRupiah(this.value);
});

var e_tnp = document.getElementById('e_tnp');
e_tnp.addEventListener('keyup', function() {
    e_tnp.value = formatRupiah(this.value);
});

var e_npv = document.getElementById('e_npv');
e_npv.addEventListener('keyup', function() {
    e_npv.value = formatRupiah(this.value);
});

var e_capex = document.getElementById('e_capex');
e_capex.addEventListener('keyup', function() {
    e_capex.value = formatRupiah(this.value);
});

function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split	= number_string.split(','),
        sisa 	= split[0].length % 3,
        rupiah 	= split[0].substr(0, sisa),
        ribuan 	= split[0].substr(sisa).match(/\d{3}/gi);
        
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function initializeDatepicker() {
    $('.date-picker').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
    });
}

function initializeDragAndDrop() {
    const milestonesDiv = document.getElementById('milestones');
    const milestones = document.querySelectorAll('.milestone');
    
    milestones.forEach(milestone => {
        milestone.draggable = true;

        milestone.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', '');
            e.target.classList.add('dragging');
        });

        milestone.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });

    milestonesDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingMilestone = document.querySelector('.dragging');
        const afterMilestone = getDragAfterMilestone(milestones, e.clientY);

        if (afterMilestone === null) {
            milestonesDiv.appendChild(draggingMilestone);
        } else {
            milestonesDiv.insertBefore(draggingMilestone, afterMilestone);
        }
    });
}

function e_initializeDragAndDrop() {
    const milestonesDiv = document.getElementById('e_milestones');
    const milestones = document.querySelectorAll('.milestone');
    
    milestones.forEach(milestone => {
        milestone.draggable = true;

        milestone.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', '');
            e.target.classList.add('dragging');
        });

        milestone.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });

    milestonesDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingMilestone = document.querySelector('.dragging');
        const afterMilestone = getDragAfterMilestone(milestones, e.clientY);

        if (afterMilestone === null) {
            milestonesDiv.appendChild(draggingMilestone);
        } else {
            milestonesDiv.insertBefore(draggingMilestone, afterMilestone);
        }
    });
}

function getDragAfterMilestone(milestones, y) {
    const draggableMilestones = [...milestones].filter(milestone => !milestone.classList.contains('dragging'));
    return draggableMilestones.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset, milestone: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).milestone;
}

function addMilestone() {
    var milestonesDiv = document.getElementById('milestones');
    var rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'milestone');
    rowDiv.draggable = true;

    var col1Div = document.createElement('div');
    col1Div.classList.add('col-5', 'mb-3');
    col1Div.innerHTML = `
        <label class="form-label">Milestone<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="milestone[]" class="form-control" placeholder="Milestone" required/>
    `;
    rowDiv.appendChild(col1Div);

    var col2Div = document.createElement('div');
    col2Div.classList.add('col-3', 'mb-3');
    col2Div.innerHTML = `
        <label class="form-label">Tanggal Mulai<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="m_mulai[]" class="form-control date-picker" required/>
        <div class="form-text">Contoh: 13/01/2024</div>
    `;
    rowDiv.appendChild(col2Div);

    var col3Div = document.createElement('div');
    col3Div.classList.add('col-3', 'mb-3');
    col3Div.innerHTML = `
        <label class="form-label">Tanggal Selesai<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="m_selesai[]" class="form-control date-picker" required/>
        <div class="form-text">Contoh: 13/01/2024</div>
    `;
    rowDiv.appendChild(col3Div);
    
    var col4Div = document.createElement('div');
    col4Div.classList.add('col-1', 'mb-3');
    var removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-4');
    removeButton.innerHTML = '<i class="bx bx-minus-circle"></i>';
    removeButton.onclick = function() {
        removeMilestone(rowDiv);
    };
    col4Div.appendChild(removeButton);
    rowDiv.appendChild(col4Div);

    milestonesDiv.appendChild(rowDiv);

    initializeDatepicker();
    initializeDragAndDrop();
}

function removeMilestone(row) {
    var milestonesDiv = document.getElementById('milestones');
    milestonesDiv.removeChild(row);
}

function e_addMilestone() {
    var milestonesDiv = document.getElementById('e_milestones');
    var rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'milestone');
    rowDiv.draggable = true;

    var col1Div = document.createElement('div');
    col1Div.classList.add('col-5', 'mb-3');
    col1Div.innerHTML = `
        <label class="form-label">Milestone<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="milestone[]" class="form-control" placeholder="Milestone" required/>
    `;
    rowDiv.appendChild(col1Div);

    var col2Div = document.createElement('div');
    col2Div.classList.add('col-3', 'mb-3');
    col2Div.innerHTML = `
        <label class="form-label">Tanggal Mulai<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="m_mulai[]" class="form-control date-picker" required/>
        <div class="form-text">Contoh: 13/01/2024</div>
    `;
    rowDiv.appendChild(col2Div);

    var col3Div = document.createElement('div');
    col3Div.classList.add('col-3', 'mb-3');
    col3Div.innerHTML = `
        <label class="form-label">Tanggal Selesai<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="m_selesai[]" class="form-control date-picker" required/>
        <div class="form-text">Contoh: 13/01/2024</div>
    `;
    rowDiv.appendChild(col3Div);
    
    var col4Div = document.createElement('div');
    col4Div.classList.add('col-1', 'mb-3');
    var removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-4');
    removeButton.innerHTML = '<i class="bx bx-minus-circle"></i>';
    removeButton.onclick = function() {
        e_removeMilestone(rowDiv);
    };
    col4Div.appendChild(removeButton);
    rowDiv.appendChild(col4Div);

    milestonesDiv.appendChild(rowDiv);

    initializeDatepicker();
    e_initializeDragAndDrop();
}

function e_removeMilestone(row) {
    var milestonesDiv = document.getElementById('e_milestones');
    milestonesDiv.removeChild(row);
}

function loopMilestone(data_milestone, data_mulai, data_selesai) {
    var milestonesDiv = document.getElementById('e_milestones');
    var rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'milestone');
    rowDiv.draggable = true;

    var col1Div = document.createElement('div');
    col1Div.classList.add('col-5', 'mb-3');
    col1Div.innerHTML = `
        <label class="form-label">Milestone<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="milestone[]" value="${data_milestone}" class="form-control" placeholder="Milestone" required/>
    `;
    rowDiv.appendChild(col1Div);

    var data_mulai = data_mulai;
    var parts = data_mulai.split("-");
    var tanggal = parts[2];
    var bulan = parts[1];
    var tahun = parts[0];
    var data_mulai = tanggal + "/" + bulan + "/" + tahun;

    var col2Div = document.createElement('div');
    col2Div.classList.add('col-3', 'mb-3');
    col2Div.innerHTML = `
        <label class="form-label">Tanggal Mulai<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="m_mulai[]" value="${data_mulai}" class="form-control date-picker" required/>
        <div class="form-text">Contoh: 13/01/2024</div>
    `;
    rowDiv.appendChild(col2Div);

    var data_selesai = data_selesai;
    var parts = data_selesai.split("-");
    var tanggal = parts[2];
    var bulan = parts[1];
    var tahun = parts[0];
    var data_selesai = tanggal + "/" + bulan + "/" + tahun;

    var col3Div = document.createElement('div');
    col3Div.classList.add('col-3', 'mb-3');
    col3Div.innerHTML = `
        <label class="form-label">Tanggal Selesai<span style="color: red; font-weight: bold;">*</span></label>
        <input type="text" name="m_selesai[]" value="${data_selesai}" class="form-control date-picker" required/>
        <div class="form-text">Contoh: 13/01/2024</div>
    `;
    rowDiv.appendChild(col3Div);
    
    var col4Div = document.createElement('div');
    col4Div.classList.add('col-1', 'mb-3');
    var removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-4');
    removeButton.innerHTML = '<i class="bx bx-minus-circle"></i>';
    removeButton.onclick = function() {
        e_removeMilestone(rowDiv);
    };
    col4Div.appendChild(removeButton);
    rowDiv.appendChild(col4Div);

    milestonesDiv.appendChild(rowDiv);

    initializeDatepicker();
    e_initializeDragAndDrop();
    
    return rowDiv;
}

var e_pnSelect = document.getElementById("e_pn")
var choicesEpn = new Choices(e_pnSelect)

var e_mpSelect = document.getElementById("e_mp")
var choicesEmp = new Choices(e_mpSelect)

var addBumnSelect = document.getElementById("bumn")
var addChoicesBUMN = new Choices(addBumnSelect, {
    removeItemButton: true,
    duplicateItemsAllowed: false,
    searchResultLimit: 20,
})

let loopbumn = JSON.parse(document.querySelector('#loopbumn').value);
let choicesDataBUMN = [];
loopbumn.forEach(function(name) {
    choicesDataBUMN.push({ label: name });
});
addChoicesBUMN.removeActiveItems()
addChoicesBUMN.clearChoices().setChoices(choicesDataBUMN, 'label')

var addKabSelect = document.getElementById("kab")
var addChoicesKab = new Choices(addKabSelect, {
    removeItemButton: true,
    duplicateItemsAllowed: false,
    searchResultLimit: 15,
})

addChoicesKab.removeActiveItems()
addChoicesKab.clearChoices().setChoices([
    { label: 'Kabupaten Aceh Barat' },
    { label: 'Kabupaten Aceh Barat Daya' },
    { label: 'Kabupaten Aceh Besar' },
    { label: 'Kabupaten Aceh Jaya' },
    { label: 'Kabupaten Aceh Selatan' },
    { label: 'Kabupaten Aceh Singkil' },
    { label: 'Kabupaten Aceh Tamiang' },
    { label: 'Kabupaten Aceh Tengah' },
    { label: 'Kabupaten Aceh Tenggara' },
    { label: 'Kabupaten Aceh Timur' },
    { label: 'Kabupaten Aceh Utara' },
    { label: 'Kabupaten Bener Meriah' },
    { label: 'Kabupaten Bireuen' },
    { label: 'Kabupaten Gayo Lues' },
    { label: 'Kabupaten Nagan Raya' },
    { label: 'Kabupaten Pidie' },
    { label: 'Kabupaten Pidie Jaya' },
    { label: 'Kabupaten Simeulue' },
    { label: 'Kota Banda Aceh' },
    { label: 'Kota Langsa' },
    { label: 'Kota Lhokseumawe' },
    { label: 'Kota Sabang' },
    { label: 'Kota Subulussalam' },
    { label: 'Kabupaten Asahan' },
    { label: 'Kabupaten Batu Bara' },
    { label: 'Kabupaten Dairi' },
    { label: 'Kabupaten Deli Serdang' },
    { label: 'Kabupaten Humbang Hasundutan' },
    { label: 'Kabupaten Karo' },
    { label: 'Kabupaten Labuhanbatu' },
    { label: 'Kabupaten Labuhanbatu Selatan' },
    { label: 'Kabupaten Labuhanbatu Utara' },
    { label: 'Kabupaten Langkat' },
    { label: 'Kabupaten Mandailing Natal' },
    { label: 'Kabupaten Nias' },
    { label: 'Kabupaten Nias Barat' },
    { label: 'Kabupaten Nias Selatan' },
    { label: 'Kabupaten Nias Utara' },
    { label: 'Kabupaten Padang Lawas' },
    { label: 'Kabupaten Padang Lawas Utara' },
    { label: 'Kabupaten Pakpak Bharat' },
    { label: 'Kabupaten Samosir' },
    { label: 'Kabupaten Serdang Bedagai' },
    { label: 'Kabupaten Simalungun' },
    { label: 'Kabupaten Tapanuli Selatan' },
    { label: 'Kabupaten Tapanuli Tengah' },
    { label: 'Kabupaten Tapanuli Utara' },
    { label: 'Kabupaten Toba' },
    { label: 'Kota Binjai' },
    { label: 'Kota Gunungsitoli' },
    { label: 'Kota Medan' },
    { label: 'Kota Padang Sidempuan' },
    { label: 'Kota Pematangsiantar' },
    { label: 'Kota Sibolga' },
    { label: 'Kota Tanjungbalai' },
    { label: 'Kota Tebing Tinggi' },
    { label: 'Kabupaten Agam' },
    { label: 'Kabupaten Dharmasraya' },
    { label: 'Kabupaten Kepulauan Mentawai' },
    { label: 'Kabupaten Lima Puluh Kota' },
    { label: 'Kabupaten Padang Pariaman' },
    { label: 'Kabupaten Pasaman' },
    { label: 'Kabupaten Pasaman Barat' },
    { label: 'Kabupaten Pesisir Selatan' },
    { label: 'Kabupaten Sijunjung' },
    { label: 'Kabupaten Solok' },
    { label: 'Kabupaten Solok Selatan' },
    { label: 'Kabupaten Tanah Datar' },
    { label: 'Kota Bukittinggi' },
    { label: 'Kota Padang' },
    { label: 'Kota Padang Panjang' },
    { label: 'Kota Pariaman' },
    { label: 'Kota Payakumbuh' },
    { label: 'Kota Sawahlunto' },
    { label: 'Kota Solok' },
    { label: 'Kabupaten Bengkalis' },
    { label: 'Kabupaten Indragiri Hilir' },
    { label: 'Kabupaten Indragiri Hulu' },
    { label: 'Kabupaten Kampar' },
    { label: 'Kabupaten Kepulauan Meranti' },
    { label: 'Kabupaten Kuantan Singingi' },
    { label: 'Kabupaten Pelalawan' },
    { label: 'Kabupaten Rokan Hilir' },
    { label: 'Kabupaten Rokan Hulu' },
    { label: 'Kabupaten Siak' },
    { label: 'Kota Dumai' },
    { label: 'Kota Pekanbaru' },
    { label: 'Kabupaten Batanghari' },
    { label: 'Kabupaten Bungo' },
    { label: 'Kabupaten Kerinci' },
    { label: 'Kabupaten Merangin' },
    { label: 'Kabupaten Muaro Jambi' },
    { label: 'Kabupaten Sarolangun' },
    { label: 'Kabupaten Tanjung Jabung Barat' },
    { label: 'Kabupaten Tanjung Jabung Timur' },
    { label: 'Kabupaten Tebo' },
    { label: 'Kota Jambi' },
    { label: 'Kota Sungai Penuh' },
    { label: 'Kabupaten Banyuasin' },
    { label: 'Kabupaten Empat Lawang' },
    { label: 'Kabupaten Lahat' },
    { label: 'Kabupaten Muara Enim' },
    { label: 'Kabupaten Musi Banyuasin' },
    { label: 'Kabupaten Musi Rawas' },
    { label: 'Kabupaten Musi Rawas Utara' },
    { label: 'Kabupaten Ogan Ilir' },
    { label: 'Kabupaten Ogan Komering Ilir' },
    { label: 'Kabupaten Ogan Komering Ulu' },
    { label: 'Kabupaten Ogan Komering Ulu Selatan' },
    { label: 'Kabupaten Ogan Komering Ulu Timur' },
    { label: 'Kabupaten Penukal Abab Lematang Ilir' },
    { label: 'Kota Lubuklinggau' },
    { label: 'Kota Pagar Alam' },
    { label: 'Kota Palembang' },
    { label: 'Kota Prabumulih' },
    { label: 'Kabupaten Bengkulu Selatan' },
    { label: 'Kabupaten Bengkulu Tengah' },
    { label: 'Kabupaten Bengkulu Utara' },
    { label: 'Kabupaten Kaur' },
    { label: 'Kabupaten Kepahiang' },
    { label: 'Kabupaten Lebong' },
    { label: 'Kabupaten Mukomuko' },
    { label: 'Kabupaten Rejang Lebong' },
    { label: 'Kabupaten Seluma' },
    { label: 'Kota Bengkulu' },
    { label: 'Kabupaten Lampung Barat' },
    { label: 'Kabupaten Lampung Selatan' },
    { label: 'Kabupaten Lampung Tengah' },
    { label: 'Kabupaten Lampung Timur' },
    { label: 'Kabupaten Lampung Utara' },
    { label: 'Kabupaten Mesuji' },
    { label: 'Kabupaten Pesawaran' },
    { label: 'Kabupaten Pesisir Barat' },
    { label: 'Kabupaten Pringsewu' },
    { label: 'Kabupaten Tanggamus' },
    { label: 'Kabupaten Tulang Bawang' },
    { label: 'Kabupaten Tulang Bawang Barat' },
    { label: 'Kabupaten Way Kanan' },
    { label: 'Kota Bandar Lampung' },
    { label: 'Kota Metro' },
    { label: 'Kabupaten Bangka' },
    { label: 'Kabupaten Bangka Barat' },
    { label: 'Kabupaten Bangka Selatan' },
    { label: 'Kabupaten Bangka Tengah' },
    { label: 'Kabupaten Belitung' },
    { label: 'Kabupaten Belitung Timur' },
    { label: 'Kota Pangkalpinang' },
    { label: 'Kabupaten Bintan' },
    { label: 'Kabupaten Karimun' },
    { label: 'Kabupaten Kepulauan Anambas' },
    { label: 'Kabupaten Lingga' },
    { label: 'Kabupaten Natuna' },
    { label: 'Kota Batam' },
    { label: 'Kota Tanjungpinang' },
    { label: 'Kepulauan Seribu' },
    { label: 'Jakarta Barat' },
    { label: 'Jakarta Pusat' },
    { label: 'Jakarta Selatan' },
    { label: 'Jakarta Timur' },
    { label: 'Jakarta Utara' },
    { label: 'Kabupaten Bandung' },
    { label: 'Kabupaten Bandung Barat' },
    { label: 'Kabupaten Bekasi' },
    { label: 'Kabupaten Bogor' },
    { label: 'Kabupaten Ciamis' },
    { label: 'Kabupaten Cianjur' },
    { label: 'Kabupaten Cirebon' },
    { label: 'Kabupaten Garut' },
    { label: 'Kabupaten Indramayu' },
    { label: 'Kabupaten Karawang' },
    { label: 'Kabupaten Kuningan' },
    { label: 'Kabupaten Majalengka' },
    { label: 'Kabupaten Pangandaran' },
    { label: 'Kabupaten Purwakarta' },
    { label: 'Kabupaten Subang' },
    { label: 'Kabupaten Sukabumi' },
    { label: 'Kabupaten Sumedang' },
    { label: 'Kabupaten Tasikmalaya' },
    { label: 'Kota Bandung' },
    { label: 'Kota Banjar' },
    { label: 'Kota Bekasi' },
    { label: 'Kota Bogor' },
    { label: 'Kota Cimahi' },
    { label: 'Kota Cirebon' },
    { label: 'Kota Depok' },
    { label: 'Kota Sukabumi' },
    { label: 'Kota Tasikmalaya' },
    { label: 'Kabupaten Banjarnegara' },
    { label: 'Kabupaten Banyumas' },
    { label: 'Kabupaten Batang' },
    { label: 'Kabupaten Blora' },
    { label: 'Kabupaten Boyolali' },
    { label: 'Kabupaten Brebes' },
    { label: 'Kabupaten Cilacap' },
    { label: 'Kabupaten Demak' },
    { label: 'Kabupaten Grobogan' },
    { label: 'Kabupaten Jepara' },
    { label: 'Kabupaten Karanganyar' },
    { label: 'Kabupaten Kebumen' },
    { label: 'Kabupaten Kendal' },
    { label: 'Kabupaten Klaten' },
    { label: 'Kabupaten Kudus' },
    { label: 'Kabupaten Magelang' },
    { label: 'Kabupaten Pati' },
    { label: 'Kabupaten Pekalongan' },
    { label: 'Kabupaten Pemalang' },
    { label: 'Kabupaten Purbalingga' },
    { label: 'Kabupaten Purworejo' },
    { label: 'Kabupaten Rembang' },
    { label: 'Kabupaten Semarang' },
    { label: 'Kabupaten Sragen' },
    { label: 'Kabupaten Sukoharjo' },
    { label: 'Kabupaten Tegal' },
    { label: 'Kabupaten Temanggung' },
    { label: 'Kabupaten Wonogiri' },
    { label: 'Kabupaten Wonosobo' },
    { label: 'Kota Magelang' },
    { label: 'Kota Pekalongan' },
    { label: 'Kota Salatiga' },
    { label: 'Kota Semarang' },
    { label: 'Kota Surakarta' },
    { label: 'Kota Tegal' },
    { label: 'Kabupaten Bangkalan' },
    { label: 'Kabupaten Banyuwangi' },
    { label: 'Kabupaten Blitar' },
    { label: 'Kabupaten Bojonegoro' },
    { label: 'Kabupaten Bondowoso' },
    { label: 'Kabupaten Gresik' },
    { label: 'Kabupaten Jember' },
    { label: 'Kabupaten Jombang' },
    { label: 'Kabupaten Kediri' },
    { label: 'Kabupaten Lamongan' },
    { label: 'Kabupaten Lumajang' },
    { label: 'Kabupaten Madiun' },
    { label: 'Kabupaten Magetan' },
    { label: 'Kabupaten Malang' },
    { label: 'Kabupaten Mojokerto' },
    { label: 'Kabupaten Nganjuk' },
    { label: 'Kabupaten Ngawi' },
    { label: 'Kabupaten Pacitan' },
    { label: 'Kabupaten Pamekasan' },
    { label: 'Kabupaten Pasuruan' },
    { label: 'Kabupaten Ponorogo' },
    { label: 'Kabupaten Probolinggo' },
    { label: 'Kabupaten Sampang' },
    { label: 'Kabupaten Sidoarjo' },
    { label: 'Kabupaten Situbondo' },
    { label: 'Kabupaten Sumenep' },
    { label: 'Kabupaten Trenggalek' },
    { label: 'Kabupaten Tuban' },
    { label: 'Kabupaten Tulungagung' },
    { label: 'Kota Batu' },
    { label: 'Kota Blitar' },
    { label: 'Kota Kediri' },
    { label: 'Kota Madiun' },
    { label: 'Kota Malang' },
    { label: 'Kota Mojokerto' },
    { label: 'Kota Pasuruan' },
    { label: 'Kota Probolinggo' },
    { label: 'Kota Surabaya' },
    { label: 'Kabupaten Bantul' },
    { label: 'Kabupaten Gunungkidul' },
    { label: 'Kabupaten Kulon Progo' },
    { label: 'Kabupaten Sleman' },
    { label: 'Kota Yogyakarta' },
    { label: 'Kabupaten Lebak' },
    { label: 'Kabupaten Pandeglang' },
    { label: 'Kabupaten Serang' },
    { label: 'Kabupaten Tangerang' },
    { label: 'Kota Cilegon' },
    { label: 'Kota Serang' },
    { label: 'Kota Tangerang' },
    { label: 'Kota Tangerang Selatan' },
    { label: 'Kabupaten Bengkayang' },
    { label: 'Kabupaten Kapuas Hulu' },
    { label: 'Kabupaten Kayong Utara' },
    { label: 'Kabupaten Ketapang' },
    { label: 'Kabupaten Kubu Raya' },
    { label: 'Kabupaten Landak' },
    { label: 'Kabupaten Melawi' },
    { label: 'Kabupaten Mempawah' },
    { label: 'Kabupaten Sambas' },
    { label: 'Kabupaten Sanggau' },
    { label: 'Kabupaten Sekadau' },
    { label: 'Kabupaten Sintang' },
    { label: 'Kota Pontianak' },
    { label: 'Kota Singkawang' },
    { label: 'Kabupaten Barito Selatan' },
    { label: 'Kabupaten Barito Timur' },
    { label: 'Kabupaten Barito Utara' },
    { label: 'Kabupaten Gunung Mas' },
    { label: 'Kabupaten Kapuas' },
    { label: 'Kabupaten Katingan' },
    { label: 'Kabupaten Kotawaringin Barat' },
    { label: 'Kabupaten Kotawaringin Timur' },
    { label: 'Kabupaten Lamandau' },
    { label: 'Kabupaten Murung Raya' },
    { label: 'Kabupaten Pulang Pisau' },
    { label: 'Kabupaten Sukamara' },
    { label: 'Kabupaten Seruyan' },
    { label: 'Kota Palangka Raya' },
    { label: 'Kabupaten Balangan' },
    { label: 'Kabupaten Banjar' },
    { label: 'Kabupaten Barito Kuala' },
    { label: 'Kabupaten Hulu Sungai Selatan' },
    { label: 'Kabupaten Hulu Sungai Tengah' },
    { label: 'Kabupaten Hulu Sungai Utara' },
    { label: 'Kabupaten Kotabaru' },
    { label: 'Kabupaten Tabalong' },
    { label: 'Kabupaten Tanah Bumbu' },
    { label: 'Kabupaten Tanah Laut' },
    { label: 'Kabupaten Tapin' },
    { label: 'Kota Banjarbaru' },
    { label: 'Kota Banjarmasin' },
    { label: 'Kabupaten Berau' },
    { label: 'Kabupaten Kutai Barat' },
    { label: 'Kabupaten Kutai Kartanegara' },
    { label: 'Kabupaten Kutai Timur' },
    { label: 'Kabupaten Mahakam Ulu' },
    { label: 'Kabupaten Paser' },
    { label: 'Kabupaten Penajam Paser Utara' },
    { label: 'Kota Balikpapan' },
    { label: 'Kota Bontang' },
    { label: 'Kota Samarinda' },
    { label: 'Kabupaten Bulungan' },
    { label: 'Kabupaten Malinau' },
    { label: 'Kabupaten Nunukan' },
    { label: 'Kabupaten Tana Tidung' },
    { label: 'Kota Tarakan' },
    { label: 'Kabupaten Bolaang Mongondow' },
    { label: 'Kabupaten Bolaang Mongondow Selatan' },
    { label: 'Kabupaten Bolaang Mongondow Timur' },
    { label: 'Kabupaten Bolaang Mongondow Utara' },
    { label: 'Kabupaten Kepulauan Sangihe' },
    { label: 'Kabupaten Kepulauan Siau Tagulandang Biaro' },
    { label: 'Kabupaten Kepulauan Talaud' },
    { label: 'Kabupaten Minahasa' },
    { label: 'Kabupaten Minahasa Selatan' },
    { label: 'Kabupaten Minahasa Tenggara' },
    { label: 'Kabupaten Minahasa Utara' },
    { label: 'Kota Bitung' },
    { label: 'Kota Kotamobagu' },
    { label: 'Kota Manado' },
    { label: 'Kota Tomohon' },
    { label: 'Kabupaten Banggai' },
    { label: 'Kabupaten Banggai Kepulauan' },
    { label: 'Kabupaten Banggai Laut' },
    { label: 'Kabupaten Buol' },
    { label: 'Kabupaten Donggala' },
    { label: 'Kabupaten Morowali' },
    { label: 'Kabupaten Morowali Utara' },
    { label: 'Kabupaten Parigi Moutong' },
    { label: 'Kabupaten Poso' },
    { label: 'Kabupaten Sigi' },
    { label: 'Kabupaten Tojo Una-Una' },
    { label: 'Kabupaten Tolitoli' },
    { label: 'Kota Palu' },
    { label: 'Kabupaten Bantaeng' },
    { label: 'Kabupaten Barru' },
    { label: 'Kabupaten Bone' },
    { label: 'Kabupaten Bulukumba' },
    { label: 'Kabupaten Enrekang' },
    { label: 'Kabupaten Gowa' },
    { label: 'Kabupaten Jeneponto' },
    { label: 'Kabupaten Kepulauan Selayar' },
    { label: 'Kabupaten Luwu' },
    { label: 'Kabupaten Luwu Timur' },
    { label: 'Kabupaten Luwu Utara' },
    { label: 'Kabupaten Maros' },
    { label: 'Kabupaten Pangkajene dan Kepulauan' },
    { label: 'Kabupaten Pinrang' },
    { label: 'Kabupaten Sidenreng Rappang' },
    { label: 'Kabupaten Sinjai' },
    { label: 'Kabupaten Soppeng' },
    { label: 'Kabupaten Takalar' },
    { label: 'Kabupaten Tana Toraja' },
    { label: 'Kabupaten Toraja Utara' },
    { label: 'Kabupaten Wajo' },
    { label: 'Kota Makassar' },
    { label: 'Kota Palopo' },
    { label: 'Kota Parepare' },
    { label: 'Kabupaten Bombana' },
    { label: 'Kabupaten Buton' },
    { label: 'Kabupaten Buton Selatan' },
    { label: 'Kabupaten Buton Tengah' },
    { label: 'Kabupaten Buton Utara' },
    { label: 'Kabupaten Kolaka' },
    { label: 'Kabupaten Kolaka Timur' },
    { label: 'Kabupaten Kolaka Utara' },
    { label: 'Kabupaten Konawe' },
    { label: 'Kabupaten Konawe Kepulauan' },
    { label: 'Kabupaten Konawe Selatan' },
    { label: 'Kabupaten Konawe Utara' },
    { label: 'Kabupaten Muna' },
    { label: 'Kabupaten Muna Barat' },
    { label: 'Kabupaten Wakatobi' },
    { label: 'Kota Baubau' },
    { label: 'Kota Kendari' },
    { label: 'Kabupaten Majene' },
    { label: 'Kabupaten Mamasa' },
    { label: 'Kabupaten Mamuju' },
    { label: 'Kabupaten Mamuju Tengah' },
    { label: 'Kabupaten Pasangkayu' },
    { label: 'Kabupaten Polewali Mandar' },
    { label: 'Kabupaten Boalemo' },
    { label: 'Kabupaten Bone Bolango' },
    { label: 'Kabupaten Gorontalo' },
    { label: 'Kabupaten Gorontalo Utara' },
    { label: 'Kabupaten Pohuwato' },
    { label: 'Kota Gorontalo' },
    { label: 'Kabupaten Badung' },
    { label: 'Kabupaten Bangli' },
    { label: 'Kabupaten Buleleng' },
    { label: 'Kabupaten Gianyar' },
    { label: 'Kabupaten Jembrana' },
    { label: 'Kabupaten Karangasem' },
    { label: 'Kabupaten Klungkung' },
    { label: 'Kabupaten Tabanan' },
    { label: 'Kota Denpasar' },
    { label: 'Kabupaten Bima' },
    { label: 'Kabupaten Dompu' },
    { label: 'Kabupaten Lombok Barat' },
    { label: 'Kabupaten Lombok Tengah' },
    { label: 'Kabupaten Lombok Timur' },
    { label: 'Kabupaten Lombok Utara' },
    { label: 'Kabupaten Sumbawa' },
    { label: 'Kabupaten Sumbawa Barat' },
    { label: 'Kota Bima' },
    { label: 'Kota Mataram' },
    { label: 'Kabupaten Alor' },
    { label: 'Kabupaten Belu' },
    { label: 'Kabupaten Ende' },
    { label: 'Kabupaten Flores Timur' },
    { label: 'Kabupaten Kupang' },
    { label: 'Kabupaten Lembata' },
    { label: 'Kabupaten Malaka' },
    { label: 'Kabupaten Manggarai' },
    { label: 'Kabupaten Manggarai Barat' },
    { label: 'Kabupaten Manggarai Timur' },
    { label: 'Kabupaten Nagekeo' },
    { label: 'Kabupaten Ngada' },
    { label: 'Kabupaten Rote Ndao' },
    { label: 'Kabupaten Sabu Raijua' },
    { label: 'Kabupaten Sikka' },
    { label: 'Kabupaten Sumba Barat' },
    { label: 'Kabupaten Sumba Barat Daya' },
    { label: 'Kabupaten Sumba Tengah' },
    { label: 'Kabupaten Sumba Timur' },
    { label: 'Kabupaten Timor Tengah Selatan' },
    { label: 'Kabupaten Timor Tengah Utara' },
    { label: 'Kota Kupang' },
    { label: 'Kabupaten Buru' },
    { label: 'Kabupaten Buru Selatan' },
    { label: 'Kabupaten Kepulauan Aru' },
    { label: 'Kabupaten Kepulauan Tanimbar' },
    { label: 'Kabupaten Maluku Barat Daya' },
    { label: 'Kabupaten Maluku Tengah' },
    { label: 'Kabupaten Maluku Tenggara' },
    { label: 'Kabupaten Seram Bagian Barat' },
    { label: 'Kabupaten Seram Bagian Timur' },
    { label: 'Kota Ambon' },
    { label: 'Kota Tual' },
    { label: 'Kabupaten Halmahera Barat' },
    { label: 'Kabupaten Halmahera Tengah' },
    { label: 'Kabupaten Halmahera Timur' },
    { label: 'Kabupaten Halmahera Selatan' },
    { label: 'Kabupaten Halmahera Utara' },
    { label: 'Kabupaten Kepulauan Sula' },
    { label: 'Kabupaten Pulau Morotai' },
    { label: 'Kabupaten Pulau Taliabu' },
    { label: 'Kota Ternate' },
    { label: 'Kota Tidore Kepulauan' },
    { label: 'Kabupaten Biak Numfor' },
    { label: 'Kabupaten Jayapura' },
    { label: 'Kabupaten Keerom' },
    { label: 'Kabupaten Kepulauan Yapen' },
    { label: 'Kabupaten Mamberamo Raya' },
    { label: 'Kabupaten Sarmi' },
    { label: 'Kabupaten Supiori' },
    { label: 'Kabupaten Waropen' },
    { label: 'Kota Jayapura' },
    { label: 'Kabupaten Fakfak' },
    { label: 'Kabupaten Kaimana' },
    { label: 'Kabupaten Manokwari' },
    { label: 'Kabupaten Manokwari Selatan' },
    { label: 'Kabupaten Pegunungan Arfak' },
    { label: 'Kabupaten Teluk Bintuni' },
    { label: 'Kabupaten Teluk Wondama' },
    { label: 'Kabupaten Asmat' },
    { label: 'Kabupaten Boven Digoel' },
    { label: 'Kabupaten Mappi' },
    { label: 'Kabupaten Merauke' },
    { label: 'Kabupaten Deiyai' },
    { label: 'Kabupaten Dogiyai' },
    { label: 'Kabupaten Intan Jaya' },
    { label: 'Kabupaten Mimika' },
    { label: 'Kabupaten Nabire' },
    { label: 'Kabupaten Paniai' },
    { label: 'Kabupaten Puncak' },
    { label: 'Kabupaten Puncak Jaya' },
    { label: 'Kabupaten Jayawijaya' },
    { label: 'Kabupaten Lanny Jaya' },
    { label: 'Kabupaten Mamberamo Tengah' },
    { label: 'Kabupaten Nduga' },
    { label: 'Kabupaten Pegunungan Bintang' },
    { label: 'Kabupaten Tolikara' },
    { label: 'Kabupaten Yalimo' },
    { label: 'Kabupaten Yahukimo' },
    { label: 'Kabupaten Maybrat' },
    { label: 'Kabupaten Raja Ampat' },
    { label: 'Kabupaten Sorong' },
    { label: 'Kabupaten Sorong Selatan' },
    { label: 'Kabupaten Tambrauw' },
    { label: 'Kota Sorong' },
], 'label')

var bumnSelect = document.getElementById("e_bumn")
var choicesBUMN = new Choices(bumnSelect, {
    removeItemButton: true,
    duplicateItemsAllowed: false,
    searchResultLimit: 20,
})
var sdgSelect = document.getElementById("e_sdg")
var choicesSdg = new Choices(sdgSelect, {
    removeItemButton: true,
    duplicateItemsAllowed: false,
})
var kabSelect = document.getElementById("e_kab")
var choicesKab = new Choices(kabSelect, {
    removeItemButton: true,
    duplicateItemsAllowed: false,
    searchResultLimit: 15,
})

function showModal(proyek){
    let modal = $('#editproyek').modal('show')
    choicesEpn.setValue([proyek['pn']])
    choicesEpn.clearChoices().setChoices([
        { label: 'PN 0: Prioritas Nasional belum teridentifikasi' },
        { label: 'PN 1: Memperkuat Ketahanan Ekonomi untuk Pertumbuhan yang Berkualitas dan Berkeadilan' },
        { label: 'PN 2: Mengembangkan Wilayah untuk Mengurangi Kesenjangan dan Menjamin Pemerataan' },
        { label: 'PN 3: Meningkatkan Sumber Daya Manusia Berkualitas dan Berdaya Saing' },
        { label: 'PN 4: Revolusi Mental dan Pembangunan Kebudayaan' },
        { label: 'PN 5: Memperkuat Infrastruktur untuk Mendukung Pengembangan Ekonomi dan Pelayanan Dasar' },
        { label: 'PN 6: Membangun Lingkungan Hidup, Meningkatkan Ketahanan Bencana, dan Perubahan Iklim' },
        { label: 'PN 7: Memperkuat Stabilitas Polhukhankam dan Transformasi Pelayanan Publik' },
    ], 'label')
    choicesEmp.setValue([proyek['mp']])
    e_pnSelect.addEventListener("change", function() {
        var selectedEpn = e_pnSelect.value.substring(0, 4);
        choicesEmp.clearChoices();
        
        if (selectedEpn === "PN 0") {
            choicesEmp.setChoices([
                { label: "Major project belum teridentifikasi" },
            ], 'label');
        } else if (selectedEpn === "PN 1") {
            choicesEmp.setChoices([
                { label: "Industri 4.0 di 7 Subsektor Prioritas" },
                { label: "Kawasan Industri Prioritas dan Smelter" },
                { label: "Destinasi Pariwisata Prioritas" },
                { label: "Penguatan Jaminan Usaha Serta 350 Korporasi Petani dan Nelayan" },
                { label: "Akselerasi Pengembangan Energi Terbarukan dan Konservasi Energi" },
                { label: "Revitalisasi Tambak di Kawasan Sentra Produksi Udang dan Bandeng" },
                { label: "Integrasi Pelabuhan Perikanan dan Fish Market bertaraf Internasional" },
                { label: "Food Estate (Kawasan Sentra Produksi Pangan)" },
                { label: "Pengelolaan Terpadu UMKM" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 1)" },
            ], 'label');
        } else if (selectedEpn === "PN 2") {
            choicesEmp.setChoices([
                { label: "Pembangunan Wilayah Batam-Bintan" },
                { label: "Pengembangan Wilayah Metropolitan (WM): Palembang, Denpasar, Banjarmasin, Makassar" },
                { label: "Pembangunan Ibu Kota Nusantara" },
                { label: "Pembangunan Kota Baru: Maja, Tanjung Selor, Sofifi, dan Sorong" },
                { label: "Wilayah Adat Papua: Wilayah Adat Laa Pago dan Wilayah Adat Domberay" },
                { label: "Pemulihan Pascabencana: Kota Palu dan Sekitarnya, Pulau Lombok dan Sekitarnya, serta Kawasan Pesisir Selat Sunda" },
                { label: "PKSN Kawasan Perbatasan Negara" },
                { label: "Manajemen Aset Lahan dalam Pemberdayaan Masyarakat (Reforma Agraria)" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 2)" },
            ], 'label');
        } else if (selectedEpn === "PN 3") {
            choicesEmp.setChoices([
                { label: "Percepatan Penurunan Kematian Ibu dan Stunting" },
                { label: "Pembangunan Science Techno Park" },
                { label: "Pendidikan dan Pelatihan Vokasi untuk Industri 4.0" },
                { label: "Reformasi Sistem Perlindungan Sosial" },
                { label: "Reformasi Sistem Kesehatan Nasional" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 3)" },
            ], 'label');
        } else if (selectedEpn === "PN 4") {
            choicesEmp.setChoices([
                { label: "Mendukung Pelaksanaan MP di PN Lainnya" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 4)" },
            ], 'label');
        } else if (selectedEpn === "PN 5") {
            choicesEmp.setChoices([
                { label: "Rumah Susun Perkotaan" },
                { label: "Akses Air Minum Perpipaan (10 Juta Sambungan Rumah)" },
                { label: "Akses Sanitasi (Air Limbah Domestik) Layak dan Aman (90 Persen Rumah Tangga)" },
                { label: "Pemulihan 4 DAS Kritis" },
                { label: "18 Waduk Multiguna" },
                { label: "Pengamanan Pesisir 5 Perkotaan Pantura Jawa" },
                { label: "Jaringan Pelabuhan Utama Terpadu" },
                { label: "Kereta Api Makassar-Pare Pare" },
                { label: "KA Kecepatan Tinggi Pulau Jawa (Jakarta-Semarang dan Jakarta-Bandung)" },
                { label: "Jalan Tol Trans Sumatera Aceh-Lampung" },
                { label: "Jalan Trans pada 18 Pulau Tertinggal, Terluar, dan Terdepan" },
                { label: "Jalan Trans Papua Merauke-Sorong" },
                { label: "Jembatan Udara 37 Rute di Papua" },
                { label: "Sistem Angkutan Umum Massal Perkotaan di 6 WM: Jakarta, Surabaya, Bandung, Medan, Semarang, dan Makassar" },
                { label: "Penyediaan Tenaga Listrik: Pembangkit Listrik 27.000 MW, Transmisi 19.000 kms, dan Gardu Induk 38.000 MCA" },
                { label: "Jaringan Gas Kota untuk 4 Juta Sambungan Rumah" },
                { label: "Pipa Gas Bumi Trans Kalimantan (2.219 Km)" },
                { label: "Pembangunan dan Pengembangan Kilang Minyak" },
                { label: "Transformasi Digital" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 5)" },
            ], 'label');
        } else if (selectedEpn === "PN 6") {
            choicesEmp.setChoices([
                { label: "Pembangunan Fasilitas Pengolahan Limbah B3" },
                { label: "Penguatan Sistem Peringatan Dini bencana" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 6)" },
            ], 'label');
        } else if (selectedEpn === "PN 7") {
            choicesEmp.setChoices([
                { label: "Penguatan NSOC-SOC dan Pembentukan 121 CSIRT" },
                { label: "Penguatan Keamanan Laut di Natuna" },
                { label: "Tidak Ada (Proyek BUMN lainnya selaras dengan PN 7)" },
            ], 'label');
        }
    })
    $('#e_prioritas', modal).val(proyek['prioritas'])
    $('#e_ds', modal).val(proyek['ds'])
    $('#e_asdep', modal).val(proyek['asdep'])
    $('#e_pj', modal).val(proyek['pj'])
    if (proyek['bumn'] != "null") {
        choicesBUMN.removeActiveItems().setValue(JSON.parse(proyek['bumn']))
    } else {
        choicesBUMN.removeActiveItems()
    }
    choicesBUMN.clearChoices().setChoices(choicesDataBUMN, 'label')
    $('#e_kld', modal).val(proyek['kld'])
    if (proyek['sdg'] != "null") {
        choicesSdg.removeActiveItems().setValue(JSON.parse(proyek['sdg']))
    } else {
        choicesSdg.removeActiveItems()
    }
    choicesSdg.clearChoices().setChoices([
        { label: '1. Tanpa Kemiskinan' },
        { label: '2. Tanpa Kelaparan' },
        { label: '3. Kehidupan Sehat dan Sejahtera' },
        { label: '4. Pendidikan Berkualitas' },
        { label: '5. Kesetaraan Gender' },
        { label: '6. Air Bersih dan Sanitasi Layak' },
        { label: '7. Energi Bersih dan Terjangkau' },
        { label: '8. Pekerjaan Layak dan Pertumbuhan Ekonomi' },
        { label: '9. Industri, Inovasi & Infrastruktur' },
        { label: '10. Berkurangnya Kesenjangan' },
        { label: '11. Kota dan Pemukiman yang Berkelanjutan' },
        { label: '12. Konsumsi dan Produksi yang Bertanggung Jawab' },
        { label: '13. Penanganan dan Perubahan Iklim' },
        { label: '14. Ekosistem Laut' },
        { label: '15. Ekosistem Daratan' },
        { label: '16. Perdamaian, Keadilan dan Kelembagaan yang Tangguh' },
        { label: '17. Kemitraan untuk Mencapai Tujuan' },
    ], 'label')
    $('#e_psn', modal).val(proyek['psn'])
    if (proyek.lokasi['kab'] != "null") {
        choicesKab.removeActiveItems().setValue(JSON.parse(proyek.lokasi['kab']))
    } else {
        choicesKab.removeActiveItems()
    }
    choicesKab.clearChoices().setChoices([
        { label: 'Kabupaten Aceh Barat' },
        { label: 'Kabupaten Aceh Barat Daya' },
        { label: 'Kabupaten Aceh Besar' },
        { label: 'Kabupaten Aceh Jaya' },
        { label: 'Kabupaten Aceh Selatan' },
        { label: 'Kabupaten Aceh Singkil' },
        { label: 'Kabupaten Aceh Tamiang' },
        { label: 'Kabupaten Aceh Tengah' },
        { label: 'Kabupaten Aceh Tenggara' },
        { label: 'Kabupaten Aceh Timur' },
        { label: 'Kabupaten Aceh Utara' },
        { label: 'Kabupaten Bener Meriah' },
        { label: 'Kabupaten Bireuen' },
        { label: 'Kabupaten Gayo Lues' },
        { label: 'Kabupaten Nagan Raya' },
        { label: 'Kabupaten Pidie' },
        { label: 'Kabupaten Pidie Jaya' },
        { label: 'Kabupaten Simeulue' },
        { label: 'Kota Banda Aceh' },
        { label: 'Kota Langsa' },
        { label: 'Kota Lhokseumawe' },
        { label: 'Kota Sabang' },
        { label: 'Kota Subulussalam' },
        { label: 'Kabupaten Asahan' },
        { label: 'Kabupaten Batu Bara' },
        { label: 'Kabupaten Dairi' },
        { label: 'Kabupaten Deli Serdang' },
        { label: 'Kabupaten Humbang Hasundutan' },
        { label: 'Kabupaten Karo' },
        { label: 'Kabupaten Labuhanbatu' },
        { label: 'Kabupaten Labuhanbatu Selatan' },
        { label: 'Kabupaten Labuhanbatu Utara' },
        { label: 'Kabupaten Langkat' },
        { label: 'Kabupaten Mandailing Natal' },
        { label: 'Kabupaten Nias' },
        { label: 'Kabupaten Nias Barat' },
        { label: 'Kabupaten Nias Selatan' },
        { label: 'Kabupaten Nias Utara' },
        { label: 'Kabupaten Padang Lawas' },
        { label: 'Kabupaten Padang Lawas Utara' },
        { label: 'Kabupaten Pakpak Bharat' },
        { label: 'Kabupaten Samosir' },
        { label: 'Kabupaten Serdang Bedagai' },
        { label: 'Kabupaten Simalungun' },
        { label: 'Kabupaten Tapanuli Selatan' },
        { label: 'Kabupaten Tapanuli Tengah' },
        { label: 'Kabupaten Tapanuli Utara' },
        { label: 'Kabupaten Toba' },
        { label: 'Kota Binjai' },
        { label: 'Kota Gunungsitoli' },
        { label: 'Kota Medan' },
        { label: 'Kota Padang Sidempuan' },
        { label: 'Kota Pematangsiantar' },
        { label: 'Kota Sibolga' },
        { label: 'Kota Tanjungbalai' },
        { label: 'Kota Tebing Tinggi' },
        { label: 'Kabupaten Agam' },
        { label: 'Kabupaten Dharmasraya' },
        { label: 'Kabupaten Kepulauan Mentawai' },
        { label: 'Kabupaten Lima Puluh Kota' },
        { label: 'Kabupaten Padang Pariaman' },
        { label: 'Kabupaten Pasaman' },
        { label: 'Kabupaten Pasaman Barat' },
        { label: 'Kabupaten Pesisir Selatan' },
        { label: 'Kabupaten Sijunjung' },
        { label: 'Kabupaten Solok' },
        { label: 'Kabupaten Solok Selatan' },
        { label: 'Kabupaten Tanah Datar' },
        { label: 'Kota Bukittinggi' },
        { label: 'Kota Padang' },
        { label: 'Kota Padang Panjang' },
        { label: 'Kota Pariaman' },
        { label: 'Kota Payakumbuh' },
        { label: 'Kota Sawahlunto' },
        { label: 'Kota Solok' },
        { label: 'Kabupaten Bengkalis' },
        { label: 'Kabupaten Indragiri Hilir' },
        { label: 'Kabupaten Indragiri Hulu' },
        { label: 'Kabupaten Kampar' },
        { label: 'Kabupaten Kepulauan Meranti' },
        { label: 'Kabupaten Kuantan Singingi' },
        { label: 'Kabupaten Pelalawan' },
        { label: 'Kabupaten Rokan Hilir' },
        { label: 'Kabupaten Rokan Hulu' },
        { label: 'Kabupaten Siak' },
        { label: 'Kota Dumai' },
        { label: 'Kota Pekanbaru' },
        { label: 'Kabupaten Batanghari' },
        { label: 'Kabupaten Bungo' },
        { label: 'Kabupaten Kerinci' },
        { label: 'Kabupaten Merangin' },
        { label: 'Kabupaten Muaro Jambi' },
        { label: 'Kabupaten Sarolangun' },
        { label: 'Kabupaten Tanjung Jabung Barat' },
        { label: 'Kabupaten Tanjung Jabung Timur' },
        { label: 'Kabupaten Tebo' },
        { label: 'Kota Jambi' },
        { label: 'Kota Sungai Penuh' },
        { label: 'Kabupaten Banyuasin' },
        { label: 'Kabupaten Empat Lawang' },
        { label: 'Kabupaten Lahat' },
        { label: 'Kabupaten Muara Enim' },
        { label: 'Kabupaten Musi Banyuasin' },
        { label: 'Kabupaten Musi Rawas' },
        { label: 'Kabupaten Musi Rawas Utara' },
        { label: 'Kabupaten Ogan Ilir' },
        { label: 'Kabupaten Ogan Komering Ilir' },
        { label: 'Kabupaten Ogan Komering Ulu' },
        { label: 'Kabupaten Ogan Komering Ulu Selatan' },
        { label: 'Kabupaten Ogan Komering Ulu Timur' },
        { label: 'Kabupaten Penukal Abab Lematang Ilir' },
        { label: 'Kota Lubuklinggau' },
        { label: 'Kota Pagar Alam' },
        { label: 'Kota Palembang' },
        { label: 'Kota Prabumulih' },
        { label: 'Kabupaten Bengkulu Selatan' },
        { label: 'Kabupaten Bengkulu Tengah' },
        { label: 'Kabupaten Bengkulu Utara' },
        { label: 'Kabupaten Kaur' },
        { label: 'Kabupaten Kepahiang' },
        { label: 'Kabupaten Lebong' },
        { label: 'Kabupaten Mukomuko' },
        { label: 'Kabupaten Rejang Lebong' },
        { label: 'Kabupaten Seluma' },
        { label: 'Kota Bengkulu' },
        { label: 'Kabupaten Lampung Barat' },
        { label: 'Kabupaten Lampung Selatan' },
        { label: 'Kabupaten Lampung Tengah' },
        { label: 'Kabupaten Lampung Timur' },
        { label: 'Kabupaten Lampung Utara' },
        { label: 'Kabupaten Mesuji' },
        { label: 'Kabupaten Pesawaran' },
        { label: 'Kabupaten Pesisir Barat' },
        { label: 'Kabupaten Pringsewu' },
        { label: 'Kabupaten Tanggamus' },
        { label: 'Kabupaten Tulang Bawang' },
        { label: 'Kabupaten Tulang Bawang Barat' },
        { label: 'Kabupaten Way Kanan' },
        { label: 'Kota Bandar Lampung' },
        { label: 'Kota Metro' },
        { label: 'Kabupaten Bangka' },
        { label: 'Kabupaten Bangka Barat' },
        { label: 'Kabupaten Bangka Selatan' },
        { label: 'Kabupaten Bangka Tengah' },
        { label: 'Kabupaten Belitung' },
        { label: 'Kabupaten Belitung Timur' },
        { label: 'Kota Pangkalpinang' },
        { label: 'Kabupaten Bintan' },
        { label: 'Kabupaten Karimun' },
        { label: 'Kabupaten Kepulauan Anambas' },
        { label: 'Kabupaten Lingga' },
        { label: 'Kabupaten Natuna' },
        { label: 'Kota Batam' },
        { label: 'Kota Tanjungpinang' },
        { label: 'Kepulauan Seribu' },
        { label: 'Jakarta Barat' },
        { label: 'Jakarta Pusat' },
        { label: 'Jakarta Selatan' },
        { label: 'Jakarta Timur' },
        { label: 'Jakarta Utara' },
        { label: 'Kabupaten Bandung' },
        { label: 'Kabupaten Bandung Barat' },
        { label: 'Kabupaten Bekasi' },
        { label: 'Kabupaten Bogor' },
        { label: 'Kabupaten Ciamis' },
        { label: 'Kabupaten Cianjur' },
        { label: 'Kabupaten Cirebon' },
        { label: 'Kabupaten Garut' },
        { label: 'Kabupaten Indramayu' },
        { label: 'Kabupaten Karawang' },
        { label: 'Kabupaten Kuningan' },
        { label: 'Kabupaten Majalengka' },
        { label: 'Kabupaten Pangandaran' },
        { label: 'Kabupaten Purwakarta' },
        { label: 'Kabupaten Subang' },
        { label: 'Kabupaten Sukabumi' },
        { label: 'Kabupaten Sumedang' },
        { label: 'Kabupaten Tasikmalaya' },
        { label: 'Kota Bandung' },
        { label: 'Kota Banjar' },
        { label: 'Kota Bekasi' },
        { label: 'Kota Bogor' },
        { label: 'Kota Cimahi' },
        { label: 'Kota Cirebon' },
        { label: 'Kota Depok' },
        { label: 'Kota Sukabumi' },
        { label: 'Kota Tasikmalaya' },
        { label: 'Kabupaten Banjarnegara' },
        { label: 'Kabupaten Banyumas' },
        { label: 'Kabupaten Batang' },
        { label: 'Kabupaten Blora' },
        { label: 'Kabupaten Boyolali' },
        { label: 'Kabupaten Brebes' },
        { label: 'Kabupaten Cilacap' },
        { label: 'Kabupaten Demak' },
        { label: 'Kabupaten Grobogan' },
        { label: 'Kabupaten Jepara' },
        { label: 'Kabupaten Karanganyar' },
        { label: 'Kabupaten Kebumen' },
        { label: 'Kabupaten Kendal' },
        { label: 'Kabupaten Klaten' },
        { label: 'Kabupaten Kudus' },
        { label: 'Kabupaten Magelang' },
        { label: 'Kabupaten Pati' },
        { label: 'Kabupaten Pekalongan' },
        { label: 'Kabupaten Pemalang' },
        { label: 'Kabupaten Purbalingga' },
        { label: 'Kabupaten Purworejo' },
        { label: 'Kabupaten Rembang' },
        { label: 'Kabupaten Semarang' },
        { label: 'Kabupaten Sragen' },
        { label: 'Kabupaten Sukoharjo' },
        { label: 'Kabupaten Tegal' },
        { label: 'Kabupaten Temanggung' },
        { label: 'Kabupaten Wonogiri' },
        { label: 'Kabupaten Wonosobo' },
        { label: 'Kota Magelang' },
        { label: 'Kota Pekalongan' },
        { label: 'Kota Salatiga' },
        { label: 'Kota Semarang' },
        { label: 'Kota Surakarta' },
        { label: 'Kota Tegal' },
        { label: 'Kabupaten Bangkalan' },
        { label: 'Kabupaten Banyuwangi' },
        { label: 'Kabupaten Blitar' },
        { label: 'Kabupaten Bojonegoro' },
        { label: 'Kabupaten Bondowoso' },
        { label: 'Kabupaten Gresik' },
        { label: 'Kabupaten Jember' },
        { label: 'Kabupaten Jombang' },
        { label: 'Kabupaten Kediri' },
        { label: 'Kabupaten Lamongan' },
        { label: 'Kabupaten Lumajang' },
        { label: 'Kabupaten Madiun' },
        { label: 'Kabupaten Magetan' },
        { label: 'Kabupaten Malang' },
        { label: 'Kabupaten Mojokerto' },
        { label: 'Kabupaten Nganjuk' },
        { label: 'Kabupaten Ngawi' },
        { label: 'Kabupaten Pacitan' },
        { label: 'Kabupaten Pamekasan' },
        { label: 'Kabupaten Pasuruan' },
        { label: 'Kabupaten Ponorogo' },
        { label: 'Kabupaten Probolinggo' },
        { label: 'Kabupaten Sampang' },
        { label: 'Kabupaten Sidoarjo' },
        { label: 'Kabupaten Situbondo' },
        { label: 'Kabupaten Sumenep' },
        { label: 'Kabupaten Trenggalek' },
        { label: 'Kabupaten Tuban' },
        { label: 'Kabupaten Tulungagung' },
        { label: 'Kota Batu' },
        { label: 'Kota Blitar' },
        { label: 'Kota Kediri' },
        { label: 'Kota Madiun' },
        { label: 'Kota Malang' },
        { label: 'Kota Mojokerto' },
        { label: 'Kota Pasuruan' },
        { label: 'Kota Probolinggo' },
        { label: 'Kota Surabaya' },
        { label: 'Kabupaten Bantul' },
        { label: 'Kabupaten Gunungkidul' },
        { label: 'Kabupaten Kulon Progo' },
        { label: 'Kabupaten Sleman' },
        { label: 'Kota Yogyakarta' },
        { label: 'Kabupaten Lebak' },
        { label: 'Kabupaten Pandeglang' },
        { label: 'Kabupaten Serang' },
        { label: 'Kabupaten Tangerang' },
        { label: 'Kota Cilegon' },
        { label: 'Kota Serang' },
        { label: 'Kota Tangerang' },
        { label: 'Kota Tangerang Selatan' },
        { label: 'Kabupaten Bengkayang' },
        { label: 'Kabupaten Kapuas Hulu' },
        { label: 'Kabupaten Kayong Utara' },
        { label: 'Kabupaten Ketapang' },
        { label: 'Kabupaten Kubu Raya' },
        { label: 'Kabupaten Landak' },
        { label: 'Kabupaten Melawi' },
        { label: 'Kabupaten Mempawah' },
        { label: 'Kabupaten Sambas' },
        { label: 'Kabupaten Sanggau' },
        { label: 'Kabupaten Sekadau' },
        { label: 'Kabupaten Sintang' },
        { label: 'Kota Pontianak' },
        { label: 'Kota Singkawang' },
        { label: 'Kabupaten Barito Selatan' },
        { label: 'Kabupaten Barito Timur' },
        { label: 'Kabupaten Barito Utara' },
        { label: 'Kabupaten Gunung Mas' },
        { label: 'Kabupaten Kapuas' },
        { label: 'Kabupaten Katingan' },
        { label: 'Kabupaten Kotawaringin Barat' },
        { label: 'Kabupaten Kotawaringin Timur' },
        { label: 'Kabupaten Lamandau' },
        { label: 'Kabupaten Murung Raya' },
        { label: 'Kabupaten Pulang Pisau' },
        { label: 'Kabupaten Sukamara' },
        { label: 'Kabupaten Seruyan' },
        { label: 'Kota Palangka Raya' },
        { label: 'Kabupaten Balangan' },
        { label: 'Kabupaten Banjar' },
        { label: 'Kabupaten Barito Kuala' },
        { label: 'Kabupaten Hulu Sungai Selatan' },
        { label: 'Kabupaten Hulu Sungai Tengah' },
        { label: 'Kabupaten Hulu Sungai Utara' },
        { label: 'Kabupaten Kotabaru' },
        { label: 'Kabupaten Tabalong' },
        { label: 'Kabupaten Tanah Bumbu' },
        { label: 'Kabupaten Tanah Laut' },
        { label: 'Kabupaten Tapin' },
        { label: 'Kota Banjarbaru' },
        { label: 'Kota Banjarmasin' },
        { label: 'Kabupaten Berau' },
        { label: 'Kabupaten Kutai Barat' },
        { label: 'Kabupaten Kutai Kartanegara' },
        { label: 'Kabupaten Kutai Timur' },
        { label: 'Kabupaten Mahakam Ulu' },
        { label: 'Kabupaten Paser' },
        { label: 'Kabupaten Penajam Paser Utara' },
        { label: 'Kota Balikpapan' },
        { label: 'Kota Bontang' },
        { label: 'Kota Samarinda' },
        { label: 'Kabupaten Bulungan' },
        { label: 'Kabupaten Malinau' },
        { label: 'Kabupaten Nunukan' },
        { label: 'Kabupaten Tana Tidung' },
        { label: 'Kota Tarakan' },
        { label: 'Kabupaten Bolaang Mongondow' },
        { label: 'Kabupaten Bolaang Mongondow Selatan' },
        { label: 'Kabupaten Bolaang Mongondow Timur' },
        { label: 'Kabupaten Bolaang Mongondow Utara' },
        { label: 'Kabupaten Kepulauan Sangihe' },
        { label: 'Kabupaten Kepulauan Siau Tagulandang Biaro' },
        { label: 'Kabupaten Kepulauan Talaud' },
        { label: 'Kabupaten Minahasa' },
        { label: 'Kabupaten Minahasa Selatan' },
        { label: 'Kabupaten Minahasa Tenggara' },
        { label: 'Kabupaten Minahasa Utara' },
        { label: 'Kota Bitung' },
        { label: 'Kota Kotamobagu' },
        { label: 'Kota Manado' },
        { label: 'Kota Tomohon' },
        { label: 'Kabupaten Banggai' },
        { label: 'Kabupaten Banggai Kepulauan' },
        { label: 'Kabupaten Banggai Laut' },
        { label: 'Kabupaten Buol' },
        { label: 'Kabupaten Donggala' },
        { label: 'Kabupaten Morowali' },
        { label: 'Kabupaten Morowali Utara' },
        { label: 'Kabupaten Parigi Moutong' },
        { label: 'Kabupaten Poso' },
        { label: 'Kabupaten Sigi' },
        { label: 'Kabupaten Tojo Una-Una' },
        { label: 'Kabupaten Tolitoli' },
        { label: 'Kota Palu' },
        { label: 'Kabupaten Bantaeng' },
        { label: 'Kabupaten Barru' },
        { label: 'Kabupaten Bone' },
        { label: 'Kabupaten Bulukumba' },
        { label: 'Kabupaten Enrekang' },
        { label: 'Kabupaten Gowa' },
        { label: 'Kabupaten Jeneponto' },
        { label: 'Kabupaten Kepulauan Selayar' },
        { label: 'Kabupaten Luwu' },
        { label: 'Kabupaten Luwu Timur' },
        { label: 'Kabupaten Luwu Utara' },
        { label: 'Kabupaten Maros' },
        { label: 'Kabupaten Pangkajene dan Kepulauan' },
        { label: 'Kabupaten Pinrang' },
        { label: 'Kabupaten Sidenreng Rappang' },
        { label: 'Kabupaten Sinjai' },
        { label: 'Kabupaten Soppeng' },
        { label: 'Kabupaten Takalar' },
        { label: 'Kabupaten Tana Toraja' },
        { label: 'Kabupaten Toraja Utara' },
        { label: 'Kabupaten Wajo' },
        { label: 'Kota Makassar' },
        { label: 'Kota Palopo' },
        { label: 'Kota Parepare' },
        { label: 'Kabupaten Bombana' },
        { label: 'Kabupaten Buton' },
        { label: 'Kabupaten Buton Selatan' },
        { label: 'Kabupaten Buton Tengah' },
        { label: 'Kabupaten Buton Utara' },
        { label: 'Kabupaten Kolaka' },
        { label: 'Kabupaten Kolaka Timur' },
        { label: 'Kabupaten Kolaka Utara' },
        { label: 'Kabupaten Konawe' },
        { label: 'Kabupaten Konawe Kepulauan' },
        { label: 'Kabupaten Konawe Selatan' },
        { label: 'Kabupaten Konawe Utara' },
        { label: 'Kabupaten Muna' },
        { label: 'Kabupaten Muna Barat' },
        { label: 'Kabupaten Wakatobi' },
        { label: 'Kota Baubau' },
        { label: 'Kota Kendari' },
        { label: 'Kabupaten Majene' },
        { label: 'Kabupaten Mamasa' },
        { label: 'Kabupaten Mamuju' },
        { label: 'Kabupaten Mamuju Tengah' },
        { label: 'Kabupaten Pasangkayu' },
        { label: 'Kabupaten Polewali Mandar' },
        { label: 'Kabupaten Boalemo' },
        { label: 'Kabupaten Bone Bolango' },
        { label: 'Kabupaten Gorontalo' },
        { label: 'Kabupaten Gorontalo Utara' },
        { label: 'Kabupaten Pohuwato' },
        { label: 'Kota Gorontalo' },
        { label: 'Kabupaten Badung' },
        { label: 'Kabupaten Bangli' },
        { label: 'Kabupaten Buleleng' },
        { label: 'Kabupaten Gianyar' },
        { label: 'Kabupaten Jembrana' },
        { label: 'Kabupaten Karangasem' },
        { label: 'Kabupaten Klungkung' },
        { label: 'Kabupaten Tabanan' },
        { label: 'Kota Denpasar' },
        { label: 'Kabupaten Bima' },
        { label: 'Kabupaten Dompu' },
        { label: 'Kabupaten Lombok Barat' },
        { label: 'Kabupaten Lombok Tengah' },
        { label: 'Kabupaten Lombok Timur' },
        { label: 'Kabupaten Lombok Utara' },
        { label: 'Kabupaten Sumbawa' },
        { label: 'Kabupaten Sumbawa Barat' },
        { label: 'Kota Bima' },
        { label: 'Kota Mataram' },
        { label: 'Kabupaten Alor' },
        { label: 'Kabupaten Belu' },
        { label: 'Kabupaten Ende' },
        { label: 'Kabupaten Flores Timur' },
        { label: 'Kabupaten Kupang' },
        { label: 'Kabupaten Lembata' },
        { label: 'Kabupaten Malaka' },
        { label: 'Kabupaten Manggarai' },
        { label: 'Kabupaten Manggarai Barat' },
        { label: 'Kabupaten Manggarai Timur' },
        { label: 'Kabupaten Nagekeo' },
        { label: 'Kabupaten Ngada' },
        { label: 'Kabupaten Rote Ndao' },
        { label: 'Kabupaten Sabu Raijua' },
        { label: 'Kabupaten Sikka' },
        { label: 'Kabupaten Sumba Barat' },
        { label: 'Kabupaten Sumba Barat Daya' },
        { label: 'Kabupaten Sumba Tengah' },
        { label: 'Kabupaten Sumba Timur' },
        { label: 'Kabupaten Timor Tengah Selatan' },
        { label: 'Kabupaten Timor Tengah Utara' },
        { label: 'Kota Kupang' },
        { label: 'Kabupaten Buru' },
        { label: 'Kabupaten Buru Selatan' },
        { label: 'Kabupaten Kepulauan Aru' },
        { label: 'Kabupaten Kepulauan Tanimbar' },
        { label: 'Kabupaten Maluku Barat Daya' },
        { label: 'Kabupaten Maluku Tengah' },
        { label: 'Kabupaten Maluku Tenggara' },
        { label: 'Kabupaten Seram Bagian Barat' },
        { label: 'Kabupaten Seram Bagian Timur' },
        { label: 'Kota Ambon' },
        { label: 'Kota Tual' },
        { label: 'Kabupaten Halmahera Barat' },
        { label: 'Kabupaten Halmahera Tengah' },
        { label: 'Kabupaten Halmahera Timur' },
        { label: 'Kabupaten Halmahera Selatan' },
        { label: 'Kabupaten Halmahera Utara' },
        { label: 'Kabupaten Kepulauan Sula' },
        { label: 'Kabupaten Pulau Morotai' },
        { label: 'Kabupaten Pulau Taliabu' },
        { label: 'Kota Ternate' },
        { label: 'Kota Tidore Kepulauan' },
        { label: 'Kabupaten Biak Numfor' },
        { label: 'Kabupaten Jayapura' },
        { label: 'Kabupaten Keerom' },
        { label: 'Kabupaten Kepulauan Yapen' },
        { label: 'Kabupaten Mamberamo Raya' },
        { label: 'Kabupaten Sarmi' },
        { label: 'Kabupaten Supiori' },
        { label: 'Kabupaten Waropen' },
        { label: 'Kota Jayapura' },
        { label: 'Kabupaten Fakfak' },
        { label: 'Kabupaten Kaimana' },
        { label: 'Kabupaten Manokwari' },
        { label: 'Kabupaten Manokwari Selatan' },
        { label: 'Kabupaten Pegunungan Arfak' },
        { label: 'Kabupaten Teluk Bintuni' },
        { label: 'Kabupaten Teluk Wondama' },
        { label: 'Kabupaten Asmat' },
        { label: 'Kabupaten Boven Digoel' },
        { label: 'Kabupaten Mappi' },
        { label: 'Kabupaten Merauke' },
        { label: 'Kabupaten Deiyai' },
        { label: 'Kabupaten Dogiyai' },
        { label: 'Kabupaten Intan Jaya' },
        { label: 'Kabupaten Mimika' },
        { label: 'Kabupaten Nabire' },
        { label: 'Kabupaten Paniai' },
        { label: 'Kabupaten Puncak' },
        { label: 'Kabupaten Puncak Jaya' },
        { label: 'Kabupaten Jayawijaya' },
        { label: 'Kabupaten Lanny Jaya' },
        { label: 'Kabupaten Mamberamo Tengah' },
        { label: 'Kabupaten Nduga' },
        { label: 'Kabupaten Pegunungan Bintang' },
        { label: 'Kabupaten Tolikara' },
        { label: 'Kabupaten Yalimo' },
        { label: 'Kabupaten Yahukimo' },
        { label: 'Kabupaten Maybrat' },
        { label: 'Kabupaten Raja Ampat' },
        { label: 'Kabupaten Sorong' },
        { label: 'Kabupaten Sorong Selatan' },
        { label: 'Kabupaten Tambrauw' },
        { label: 'Kota Sorong' },
    ], 'label')
    if (proyek.finansial['tnp'] != null) {
        $('#e_tnp', modal).val(proyek.finansial['tnp'].toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 }))
    } else {
        $('#e_tnp', modal).val(proyek.finansial['tnp'])
    }
    if (proyek.finansial['npv'] != null) {
        $('#e_npv', modal).val(proyek.finansial['npv'].toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 }))
    } else {
        $('#e_npv', modal).val(proyek.finansial['npv'])
    }
    $('#e_irr', modal).val(proyek.finansial['irr'])
    if (proyek.finansial['capex'] != null) {
        $('#e_capex', modal).val(proyek.finansial['capex'].toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 }))
    } else {
        $('#e_capex', modal).val(proyek.finansial['capex'])
    }
    $('#e_apbn', modal).val(proyek.dana['apbn'])
    $('#e_kas', modal).val(proyek.dana['kas'])
    $('#e_ekuitas', modal).val(proyek.dana['ekuitas'])
    $('#e_pinjaman', modal).val(proyek.dana['pinjaman'])
    $('#e_uang_lain', modal).val(proyek.dana['uang_lain'])
    $('#e_pmn', modal).val(proyek.dana['pmn'])
    $('#e_non_regulasi', modal).val(proyek.dukungan['non_regulasi'])
    $('#e_regulasi', modal).val(proyek.dukungan['regulasi'])
    $('#e_harapan', modal).val(proyek.dukungan['harapan'])
    var mulai = proyek.info_project['mulai'].substring(0, 7);
    $('#e_mulai', modal).val(mulai)
    var selesai = proyek.info_project['selesai'].substring(0, 7);
    $('#e_selesai', modal).val(selesai)
    $('#e_kondisi', modal).val(proyek.info_project['kondisi'])
    $('#e_intisari', modal).val(proyek.info_project['intisari'])
    $('#e_oi', modal).val(proyek.info_project['oi'])
    $('#e_p_lokal', modal).val(proyek.info_project['p_lokal'])
    $('#e_p_asing', modal).val(proyek.info_project['p_asing'])
    if (proyek.roadmap['milestone'] != "null") {
        var milestoneArray = JSON.parse(proyek.roadmap['milestone']);
        var mulaiArray = JSON.parse(proyek.roadmap['mulai']);
        var selesaiArray = JSON.parse(proyek.roadmap['selesai']);

        var data_length = Math.max(milestoneArray.length, mulaiArray.length, selesaiArray.length);

        var milestonesDiv = document.getElementById('e_milestones');
        milestonesDiv.innerHTML = '';

        for (var i = 0; i < data_length; i++) {
            var data_milestone = milestoneArray[i];
            var data_mulai = mulaiArray[i];
            var data_selesai = selesaiArray[i];
            
            milestonesDiv.appendChild(loopMilestone(data_milestone, data_mulai, data_selesai));
        }
    } else {
        var milestonesDiv = document.getElementById('e_milestones');
        milestonesDiv.innerHTML = '';
    }
    $('#formEditProyek').attr('action', `/o/editProyek/${proyek.id}`);
}

function showModalRoadmap(roadmap){
    $('#viewroadmap').modal('show')
    document.querySelector("#gantt_chart").style.display = "block";

    if (roadmap.milestone != "null") {
        var milestones = JSON.parse(roadmap.milestone);
        var mulais = JSON.parse(roadmap.mulai);
        var selesais = JSON.parse(roadmap.selesai);
    
        var seriesData = [];
    
        for (var i = 0; i < milestones.length; i++) {
            var startTimestamp = new Date(mulais[i]).getTime();
            var endTimestamp = new Date(selesais[i]).getTime();

            seriesData.push({
                x: milestones[i],
                y: [startTimestamp, endTimestamp]
            });
        }
        
        var options = {
            series: [
                {
                    data: seriesData
                }
            ],
            chart: {
                height: 450,
                type: 'rangeBar'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (value) {
                    const startDate = new Date(value[0]);
                    const endDate = new Date(value[1]);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedStartDate = startDate.toLocaleString('id-ID', options);
                    const formattedEndDate = endDate.toLocaleString('id-ID', options);
                    return `${formattedStartDate} - ${formattedEndDate}`;
                }
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        if (value.length > 25) {
                            var words = value.split(' ');
                            var lines = [];
                            var line = '';
                            for (var i = 0; i < words.length; i++) {
                                if (line.length + words[i].length <= 25) {
                                    line += words[i] + ' ';
                                } else {
                                    lines.push(line.trim());
                                    line = words[i] + ' ';
                                }
                            }
                            lines.push(line.trim());
                            return lines;
                        }
                        return [value];
                    }
                }
            },
            tooltip: {
                x: {
                    formatter: function (value) {
                        if (typeof value === 'string') {
                            return value;
                        } else if (typeof value === 'number') {
                            const date = new Date(value);
                            const options = { year: 'numeric', month: 'long', day: 'numeric' };
                            const formattedDate = date.toLocaleString('id-ID', options);
                            return formattedDate;
                        }
                    }
                }
            },
            grid: {
                borderColor: '#90A4AE',
                xaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#gantt_chart"), options);
        chart.render();
    } else {
        document.querySelector("#gantt_chart").style.display = "none";
    }
}