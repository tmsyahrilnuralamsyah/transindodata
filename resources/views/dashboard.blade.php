<!DOCTYPE html>
<html
  lang="en"
  class="light-style layout-menu-fixed"
  dir="ltr"
  data-theme="theme-default"
  data-assets-path="{{ asset('assets/assets/') }}"
  data-template="vertical-menu-template-free">

<head>
    <meta charset="utf-8" />
    <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Bank Sampah</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/assets/img/favicon/favicon.ico') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

    <!-- Icons. Uncomment required icon fonts -->
    <link rel="stylesheet" href="{{ asset('assets/assets/vendor/fonts/boxicons.css') }}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('assets/assets/vendor/css/core.css') }}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{ asset('assets/assets/vendor/css/theme-default.css') }}" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{ asset('assets/assets/css/demo.css') }}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />

    <!-- Helpers -->
    <script src="{{ asset('assets/assets/vendor/js/helpers.js') }}"></script>

    <!-- Config -->
    <script src="{{ asset('assets/assets/js/config.js') }}"></script>

    <!-- Table CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/dataTables.bootstrap5.min.css">
</head>
<body style="zoom: 0.8;">
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <!-- Menu -->
            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
                <div class="app-brand demo">
                    <span class="app-brand-text demo menu-text fw-bolder ms-2" style="text-transform:uppercase; font-size: 20px;">Bank Sampah</span>
        
                    <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </a>
                </div>
      
                <ul class="menu-inner py-1">
                    <li class="menu-item {{ request()->is('*dashboard*') ? 'active' : '' }}">
                        <a href="{{ route("dashboard") }}" class="menu-link">
                            <i class="menu-icon tf-icons bx bx-home-circle"></i>
                            <div>Dashboard</div>
                        </a>
                    </li>
                </ul>
            </aside>
            <!-- / Menu -->

            <div class="layout-page">
                <!-- Navbar -->
                <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar" style="z-index: 5;">
                    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                            <i class="bx bx-menu bx-sm"></i>
                        </a>
                    </div>
                    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                        <ul class="navbar-nav flex-row align-items-center ms-auto">
                            <!-- User -->
                            <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <div class="avatar avatar-online">
                                        <img src="{{ asset('assets/assets/img/admin.jpg') }}" alt="" class=" w-px-40 h-auto rounded-circle">
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a class="dropdown-item" href="{{ route("logout") }}">
                                            <i class="bx bx-power-off me-2"></i>
                                            <span class="align-middle">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <!--/ User -->
                        </ul>
                    </div>
                </nav>
                <!-- / Navbar -->

                <!-- Content -->
                <div class="content-wrapper">
                    <div class="container-xxl flex-grow-1 container-p-y">
                        <div class="p-2">
                            <div class="row mb-3">
                                <div class="col-6 col-lg-3">
                                    <div class="card mb-2 mb-lg-1">
                                        <div class="card-body">
                                            <span class="fw-semibold d-block mb-4">Harga Sampah Organik (Kg)</span>
                                            <h3 class="card-title">Rp {{ $harga->organik }}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="card mb-2 mb-lg-1">
                                        <div class="card-body">
                                            <span class="fw-semibold d-block mb-4">Harga Sampah Plastik (Kg)</span>
                                            <h3 class="card-title">Rp {{ $harga->plastik }}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="card mb-2 mb-lg-1">
                                        <div class="card-body">
                                            <span class="fw-semibold d-block mb-4">Harga Sampah Logam (Kg)</span>
                                            <h3 class="card-title">Rp {{ $harga->logam }}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="card mb-2 mb-lg-1">
                                        <div class="card-body">
                                            <span class="fw-semibold d-block mb-4">Harga Sampah Kaca (Kg)</span>
                                            <h3 class="card-title">Rp {{ $harga->kaca }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card p-2">
                                <div class="row">
                                    <div class="col-5 col-lg-3">
                                        <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#konfirmasi">Pengelolahan Sampah</button>
                                    </div>
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" id="tablejs">
                                        <thead class="table-dark">
                                            <tr style="vertical-align: middle;">
                                                <th rowspan="2" class="text-center" style="color: white">No</th>
                                                <th rowspan="2" class="text-center" style="color: white">Nama</th>
                                                <th colspan="4" class="text-center" style="color: white">Sampah</th>
                                                <th rowspan="2" class="text-center" style="color: white">Total Harga (Rp)</th>
                                                <th rowspan="2" class="text-center" style="color: white">Status</th>
                                                <th rowspan="2" class="text-center" style="color: white">Tindakan</th>
                                            </tr>
                                            <tr style="vertical-align: middle;">
                                                <th style="color: white">Organik (Kg)</th>
                                                <th style="color: white">Plastik (Kg)</th>
                                                <th style="color: white">Logam (Kg)</th>
                                                <th style="color: white">Kaca (Kg)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($data as $d)
                                                <tr>
                                                    <td class="text-center">{{ $loop->iteration }}</td>
                                                    <td>{{ $d->nama }}</td>
                                                    <td>{{ $d->organik }}</td>
                                                    <td>{{ $d->plastik }}</td>
                                                    <td>{{ $d->logam }}</td>
                                                    <td>{{ $d->kaca }}</td>
                                                    <td>{{ $d->harga }}</td>
                                                    <td>{{ $d->status }}</td>
                                                    <td class="text-center px-4">
                                                        @if ($d->status != "Selesai")
                                                            <form action="{{ route("konfirmasi", $d->id) }}" method="post" class="d-inline">
                                                                {{ csrf_field() }}
                                                                {{ method_field('PUT') }}
    
                                                                <button class="btn btn-success my-1"><i class='bx bxs-check-square'></i></button>
                                                            </form>
                                                        @endif
    
                                                        <form action="{{ route("hapus", $d->id) }}" method="post" class="d-inline">
                                                            {{ csrf_field() }}
                                                            {{ method_field('delete') }}
                                                            <button class="btn btn-danger my-1 hapusdata"><i class="bi bi-trash3"></i><i class='bx bxs-trash'></i></button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / Content -->
            </div>
        </div>
    </div>

    <div class="modal fade" id="konfirmasi" tabindex="-1" aria-labelledby="konfirmasi2" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="konfirmasi2">Pengelolahan Sampah</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form method="post" action="{{ route("ubahHarga", 1) }}" enctype="multipart/form-data">
                {{ csrf_field() }}
                {{ method_field('PUT') }}

                <div class="modal-body">
                    <div class="row mb-2">
                        <div class="col">
                            <label for="uang_organik" class="form-label">Sampah Organik (Rp/Kg)</label>
                            <input type="number" class="form-control" id="uang_organik" name="uang_organik" min="0" value="{{ $harga->organik }}">
                        </div>
                        <div class="col">
                            <label for="uang_plastik" class="form-label">Sampah Plastik (Rp/Kg)</label>
                            <input type="number" class="form-control" id="uang_plastik" name="uang_plastik" min="0" value="{{ $harga->plastik }}">
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col">
                            <label for="uang_logam" class="form-label">Sampah Logam (Rp/Kg)</label>
                            <input type="number" class="form-control" id="uang_logam" name="uang_logam" min="0" value="{{ $harga->logam }}">
                        </div>
                        <div class="col">
                            <label for="uang_kaca" class="form-label">Sampah Kaca (Rp/Kg)</label>
                            <input type="number" class="form-control" id="uang_kaca" name="uang_kaca" min="0" value="{{ $harga->kaca }}">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
            </div>
        </div>
    </div>

    <!-- Core JS -->
    <script src="{{ asset('assets/assets/vendor/libs/jquery/jquery.js') }}"></script>
    <script src="{{ asset('assets/assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ asset('assets/assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ asset('assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ asset('assets/assets/vendor/js/menu.js') }}"></script>

    <!-- Main JS -->
    <script src="{{ asset('assets/assets/js/main.js') }}"></script>

    <!-- Page JS -->
    <script src="{{ asset('assets/assets/js/dashboards-analytics.js') }}"></script>

    <!-- Sweet Alert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- Place this tag in your head or just before your close body tag. -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>

    <!-- Table JS -->
    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
    <script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js"></script>

    <!-- Sweet Alert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $(document).ready(function() {
            $('#tablejs').DataTable({
                pageLength : 10,
                lengthMenu: [[10, 20, 50, 100, -1], [10, 20, 50, 100, 'all']],
            });
        });

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        @if (session()->get('success'))
            Toast.fire({
                icon: 'success',
                title: '{{ session()->get('success') }}'
            })
        @elseif(session()->get('error'))
        Toast.fire({
                icon: 'error',
                title: '{{ session()->get('error') }}'
            })
        @endif
    </script>
</body>
</html>