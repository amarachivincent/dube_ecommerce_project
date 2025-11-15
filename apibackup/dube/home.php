<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Real Estate</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/custom.css" rel="stylesheet">
  <style>
    body { 
      background-color: #f5f9fc;
    }
    .hero { 
     /* background: linear-gradient(to right, #00aaff, #00ddaa); */
      color: white; 
      padding: 2.8em 0 0.8em;
    }
    .footer { 
      background-color: #1a1a2e; color: white; padding: 30px 0;
     }
    .property-card img { 
      height: 200px; 
      object-fit: cover; 
    }
  </style>
</head>
<body>
  <section class="container">
   <nav class="navbar navbar-expand-lg navbar-light   fixed-top container-fluid">
            <a class="navbar-brand" href="?index">REAL ESTATE</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#signin">Sign In</a></li>
                 
                </ul>
            </div>
        </div>
    </nav>
</section>

<section>
   <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <form class="row justify-content-center" method="GET" action="search.php">
              <div class="container-fluid top-search">
                    <div class="col-md-4">
                      <select name="type" class="form-select bg-light">
                        <option value="">Type</option>
                        <option value="Apartment"  class="search1">Apartment</option>
                        <option value="Bungalow" class="search1">Bungalow</option>
                        <option value="Duplex" class="search1">Duplex</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <select name="bedrooms" class="form-select bg-light">
                        <option value="">Bedrooms</option>
                        <option value="1" class="search1">1+</option>
                        <option value="2" class="search1">2+</option>
                        <option value="3" class="search1">3+</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <input type="number" name="max_price" class="form-control bg-light" placeholder="Max Price">
                    </div>
              </div>
              <img src="images/residence.jpg" class="d-block w-100" alt="business reviews hero image">
              <div class="carousel-caption  d-md-block">
                   <h1 class="mb-4">Find Your Dream Home in Nigeria</h1>           
                  <div>
                      <button class="btn btn-primary" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                      <span aria-hidden="true"></span>Residence
                      </button>
                      <button class="btn btn-secondary" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                      <span  aria-hidden="true"></span>Commercial
                    </button>
                </div>
                
                <div class="inner-search">
                      <input type="text" name="city" class="form-control btn-text" placeholder="Enter City" required>
                      <button class="btn btn-light w-40 btn-search" type="submit">Search</button>
                </div> 

        
                
            </div>
          </form>
        </div>
            
        <div class="carousel-item">
          <form class="row justify-content-center" method="GET" action="search.php">
    <div class="container-fluid top-search">
          <div class="col-md-4">
            <select name="type" class="form-select bg-light">
              <option value="">Type</option>
              <option value="Apartment"  class="search1">Apartment</option>
              <option value="Bungalow" class="search1">Bungalow</option>
              <option value="Duplex" class="search1">Duplex</option>
            </select>
          </div>
          <div class="col-md-4">
            <select name="bedrooms" class="form-select bg-light">
              <option value="">Bedrooms</option>
              <option value="1" class="search1">1+</option>
              <option value="2" class="search1">2+</option>
              <option value="3" class="search1">3+</option>
            </select>
          </div>
          <div class="col-md-4">
            <input type="number" name="max_price" class="form-control bg-light" placeholder="Max Price">
          </div>
     </div>

            <img src="images/commercial.jpg" class="d-block w-100" alt="business reviews image">
            <div class="carousel-caption d-md-block">
                <h1 class="mb-4">Find Your Dream Home in Nigeria</h1> 
                 <div>
                    <button class="btn btn-primary" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                        <span aria-hidden="true"></span>Residence
                    </button> 
                    <button class="btn btn-secondary" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                        <span  aria-hidden="true"></span>Commercial
                    </button>
                  </div>
           
                  <div class="inner-search">
                      <input type="text" name="city" class="form-control btn-text" placeholder="Enter City" required>
                      <button class="btn btn-light w-40 btn-search" type="submit">Search</button>
                  </div>
        
              </div>
          </form>
          </div>


      </div>
    </div>
</section>
<section class="container my-5">
  <h3 class="mb-4">Latest Living Room Posts</h3>
  <div class="row">
    <div class="col-md-4"><div class="card"><img src="images/apt1.jpg" class="card-img-top"><div class="card-body"><p>Smart Home Gadgets in Nigeria</p></div></div></div>
    <div class="col-md-4"><div class="card"><img src="images/apt2.jpg" class="card-img-top"><div class="card-body"><p>Cost-Efficient Apartments in Lagos</p></div></div></div>
    <div class="col-md-4"><div class="card"><img src="images/apt3.jpg" class="card-img-top"><div class="card-body"><p>Green Living Spaces for Families</p></div></div></div>
  </div>
</section>

<section class="container my-5">
  <h4 class="mb-4">Popular Cities</h4>
  <div class="row">
    <?php
    $cities = mysqli_query($conn, "SELECT DISTINCT city FROM properties LIMIT 8");
    while ($city = mysqli_fetch_assoc($cities)) {
    ;?>

   <div class="col-md-3 mb-2"><a href="search.php?city=<?php echo urlencode($city['city']);?>" class="text-decoration-none text-primary"><?php echo htmlspecialchars($city['city']);?></a>
  </div>
  <?php
    }
    ?>
  </div>
</section>

<section class="text-white text-center py-5" style="background-color: #007766;">
  <div class="container">
    <h3>Why Choose Real Estate?</h3>
    <p class="mt-3">Verified listings, trusted agents, and the easiest way to find your dream home anywhere in Nigeria.</p>
  </div>
</section>

<footer class="footer text-center">
  <div class="container">
    <p>© 2025 Real Estate. All rights reserved.</p>
  </div>
</footer>
    
<script src="js/bootstrap.bundle.min.js"></script>
    <!-- Include Swiper JS -->
<script src="js/swiper-bundle.min.js"></script>
<script src="js/custom.js"></script>
<!--<script src="aos/aos.js"></script>-->
<script>
    //AOS.init({   easing: 'ease-out-back',   duration: 1500, delay:200,  once: false,   disable: 'mobile' })
</script>

</body>
</html>
