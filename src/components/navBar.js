import App from "../App"

function NavBar () {
    return (
        <nav
  class="navbar sticky-top container-fluid row-md"
  style="background-color: #ffffff"
  >
  <div class="container-md d-flex justify-content-between">
    <div class="d-flex">
      <div class="me-3">
        <div class="div div__container-img d-flex align-items-center">
        <div class="div div__menu-burguer mx-3 d-block d-md-none">
          <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3uzztorovwykeessr6lbtvkxzautcfm" class="crayons-icon"><title id="a3uzztorovwykeessr6lbtvkxzautcfm">Navigation menu</title>
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
          </svg>
          </a>
        </div>
          <a class="navbar-brand" href="./index.html">
            <img
            class="div__nav-menu img__devto-logo"
            src="./assets/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            />
          </a>
        </div>
      </div>
      <div class="container text-start col align-items-start">
        <form class="form__navbar" action="">
          <div class="input-group">
            <input
            type="text"
            class="d-none d-sm-none d-md-none d-lg-block form-control input__loupe-control"
            placeholder="Search..."
            />
            <button class="d-none d-sm-none d-md-none d-lg-block btn btn-search" type="button">
              <img width="20" src="/assets/loupe.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="d-flex align-items-center gap-3 dropdown">
      <button onclick="window.location.href='./create-post.html'" class="d-none d-sm-none d-md-none d-lg-block btn btn-purple btn-outline-purple fw-bold" type="button">
        Create Post
      </button>
      <button class="d-md-block d-lg-none btn btn-search" type="button">
        <img width="20" src="/assets/loupe.svg" alt="" />
      </button>
      <svg class= "bell__notification-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agdk31akwd0wvega671bi3rc07bwke7d" class="crayons-icon"><title id="agdk31akwd0wvega671bi3rc07bwke7d">Notifications</title>
        <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
    </svg>
      <button
      type="button" data-bs-toggle="dropdown" aria-expanded="false"
      class="avatar avatar__button p-1"
      id="member-menu-button"
      >
      <img
      class="avatar__icon-image rounded-circle"
      alt=""
      id="nav-profile-image"
      src="https://res.cloudinary.com/practicaldev/image/fetch/s--iEKpXQPg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/922746/4331f4ce-8208-4936-bed4-d88204212fcd.jpeg"
      />
    </button>
    <ul class="dropdown-menu dropdown__user-options dropdown-menu-light pt-2">
      <li><a class="dropdown-item d-flex flex-column" href="#">
        <span class="span span__dropdown">Jésica</span>
        <small>@Jex</small></a>
        </li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Dashboard</a></li>
      <li><a class="dropdown-item" href="#">Create Post</a></li>
      <li><a class="dropdown-item" href="#">Reading List</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>      
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Sign Out</a></li>
    </ul>
  </div>
</div>
</nav>
    )
}

export default NavBar;