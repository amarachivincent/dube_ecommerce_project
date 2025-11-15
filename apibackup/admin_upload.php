<?php include 'db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $title = $_POST['title'];
  $city = $_POST['city'];
  $type = $_POST['type'];
  $bedrooms = $_POST['bedrooms'];
  $price = $_POST['price'];
  $desc = $_POST['description'];

  $img = $_FILES['image']['name'];
  $tmp = $_FILES['image']['tmp_name'];
  move_uploaded_file($tmp, "uploads/" . $img);

  $sql = "INSERT INTO properties (title, city, type, bedrooms, price, image, description)
          VALUES ('$title', '$city', '$type', $bedrooms, $price, '$img', '$desc')";
  mysqli_query($conn, $sql);
  echo "<p>Property added successfully!</p>";
}
?>
<form method="POST" enctype="multipart/form-data" class="container my-5">
  <h3>Upload New Property</h3>
  <input name="title" class="form-control mb-2" placeholder="Title" required>
  <input name="city" class="form-control mb-2" placeholder="City" required>
  <select name="type" class="form-select mb-2">
    <option value="Apartment">Apartment</option>
    <option value="Bungalow">Bungalow</option>
    <option value="Duplex">Duplex</option>
  </select>
  <input type="number" name="bedrooms" class="form-control mb-2" placeholder="Bedrooms" required>
  <input type="number" name="price" class="form-control mb-2" placeholder="Price" required>
  <textarea name="description" class="form-control mb-2" placeholder="Description"></textarea>
  <input type="file" name="image" class="form-control mb-3" required>
  <button class="btn btn-success">Upload</button>
</form>
