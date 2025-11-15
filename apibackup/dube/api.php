<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database connection parameters (replace with your actual details)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dube";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}


if(isset($_GET['q'])){
// --- Fetch all products for AllPage and map to expected keys ---
// 'name' AS 'title', 'image_url' AS 'image', 'category_name' AS 'type'
$products_sql = "SELECT p.product_id, p.product_name AS title, p.description, p.image_url AS image, p.thumbnail_url AS thumbnail, p.price, c.category_name AS type FROM products p JOIN categories c ON p.category_id = c.category_id";
$products_result = $conn->query($products_sql);
$products_data = [];
if ($products_result && $products_result->num_rows > 0) {
    while($row = $products_result->fetch_assoc()) {
        $products_data[] = $row;
    }
}

// --- Fetch all categories ---
$categories_sql = "SELECT category_id, category_name FROM categories";
$categories_result = $conn->query($categories_sql);
$categories_data = [];
if ($categories_result && $categories_result->num_rows > 0) {
    while($row = $categories_result->fetch_assoc()) {
        $categories_data[] = $row;
    }
}

// --- Fetch all stores for StoreGrid and map to expected keys ---
// 'store_name' AS 'title', 'store_type' AS 'type', 'established_date' AS 'date', 'image_filename' AS 'image'
$stores_sql = "SELECT store_id, store_name AS title, store_type AS type, description, address, city, latitude, longitude, image_url AS image, established_date AS date FROM stores";
$stores_result = $conn->query($stores_sql);
$stores_data = [];
if ($stores_result && $stores_result->num_rows > 0) {
    while($row = $stores_result->fetch_assoc()) {
        $stores_data[] = $row;
    }
}

// --- Fetch all published news articles ---
$news_sql = "SELECT id, title, content, image_url AS image, author_name AS author, category, created_at FROM news WHERE is_published = 1 ORDER BY created_at DESC";
$news_result = $conn->query($news_sql);
$news_data = [];
if ($news_result && $news_result->num_rows > 0) {
    while($row = $news_result->fetch_assoc()) {
        $news_data[] = $row;
    }
}


// Combine and return ALL relevant data as JSON
echo json_encode([
    'products' => $products_data,
    'categories' => $categories_data,
    'stores' => $stores_data,
    'news' => $news_data
]);

$conn->close();
}
?>