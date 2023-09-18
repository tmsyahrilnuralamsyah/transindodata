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

  <!-- Page CSS -->
  <link rel="stylesheet" href="{{ asset('assets/assets/vendor/css/pages/page-auth.css') }}" />

  <!-- Helpers -->
  <script src="{{ asset('assets/assets/vendor/js/helpers.js') }}"></script>
</head>
<body>
  <!-- Content -->
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <h4 class="mb-2">Selamat Datang 👋</h4>
            <p class="mb-4">Silakan masuk ke akun Anda dan mulai jelajah</p>

            <form id="formAuthentication" class="mb-3" method="post" action="">
              {{ csrf_field() }}

              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  autofocus
                />
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                </div>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                  />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="remember-me" />
                  <label class="form-check-label" for="remember-me"> Remember Me </label>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>
  <!-- / Content -->

  <!-- Main JS -->
  <script src="{{ asset('assets/assets/js/main.js') }}"></script>

  <!-- Sweet Alert -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <script>
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