<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Naija Property Finder</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/custom.css" rel="stylesheet">
  <style>
    body { 
      background-color: #f5f9fc;
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
            <a class="navbar-brand" href="index.php">REAL ESTATE</a>
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
<div class="container my-5">
  <h2 class="mb-4">Search Results</h2>
  <div class="row">
    <?php
    $city = isset($_GET['city']) ? $_GET['city'] : '';
    $type = isset($_GET['type']) ? $_GET['type'] : '';
    $bedrooms = isset($_GET['bedrooms']) ? $_GET['bedrooms'] : '';
    $max_price = isset($_GET['max_price']) ? $_GET['max_price'] : '';

    $query = "SELECT * FROM properties WHERE city LIKE '%" . mysqli_real_escape_string($conn, $city) . "%'";
    if ($type != '') {
      $query .= " AND type='" . mysqli_real_escape_string($conn, $type) . "'";
    }
    if ($bedrooms != '') {
      $query .= " AND bedrooms >= " . (int)$bedrooms;
    }
    if ($max_price != '') {
      $query .= " AND price <= " . (float)$max_price;
    }

    $result = mysqli_query($conn, $query);
    if ($result && mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_assoc($result)) {
    ?>
        <div class="col-md-4 mb-4">
          <div class="card property-card">
            <img src="uploads/<?php echo  htmlspecialchars($row['image']);?>" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title"><?php echo  htmlspecialchars($row['title']);?></h5>
              <p><?php echo  htmlspecialchars($row['city']) . ' | ' . htmlspecialchars($row['type']) . ' | ' . (int)$row['bedrooms']; ?> Beds</p>
              <p>₦ <?php echo  number_format($row['price']*100000, 2);?></p>
            </div>
          </div>
        </div>

      <?php 
      }
    } else {;?>

      <p style="margin-bottom:8em;">No results found.</p>
      
   <?php
    }
    ?>
  </div>
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
