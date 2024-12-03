function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Home">My Automobile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <a class="nav-link active" aria-current="page" href="/Home">Home</a>
          <a class="nav-link" href="/About">About Us</a>
          <a class="nav-link" href="/AddVehicle">AddVehicle</a>
          <a class="nav-link" href="/VehicleList">VehicleList</a>

      </ul>
    </div>
  </div>
</nav>
    );
}
export default Navbar;