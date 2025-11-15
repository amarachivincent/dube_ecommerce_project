<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Your database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dube";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(array("message" => "Connection failed: " . $conn->connect_error)));
}

$method = $_SERVER['REQUEST_METHOD'];
$table = $_GET['table'] ? $_GET['table'] : '';
$id = isset($_GET['id'])? $_GET['id'] : null;

switch ($table) {
    case 'stores':
        handleStoresRequest($conn, $method, $id);
        break;
    case 'news':
        handleNewsRequest($conn, $method, $id);
        break;
    case 'categories':
        handleCategoriesRequest($conn, $method, $id);
        break;
    case 'products':
        handleProductsRequest($conn, $method, $id);
        break;
    default:
        http_response_code(400);
        echo json_encode(array("message" => "Invalid table specified."));
}

$conn->close();

function handleStoresRequest($conn, $method, $id) {
    switch ($method) {
        case 'GET':
            $sql = $id ? "SELECT * FROM stores WHERE store_id = ?" : "SELECT * FROM stores";
            $stmt = $conn->prepare($sql);
            if ($id) $stmt->bind_param("i", $id);
             $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            break;
        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "INSERT INTO stores (store_name, store_type, description, address, city, state, zip_code, phone_number, email, image_url, latitude, longitude, established_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssssssddsssss", $data['store_name'], $data['store_type'], $data['description'], $data['address'], $data['city'], $data['state'], $data['zip_code'], $data['phone_number'], $data['email'], $data['image_url'], $data['latitude'], $data['longitude'], $data['established_date']);
            $stmt->execute();
            echo json_encode(array("message" => "Store created."));
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            
            $sql = "UPDATE stores SET store_name = ?, store_type = ?, description = ?, address = ?, city = ?, state = ?, zip_code = ?, phone_number = ?, email = ?, image_url = ?, latitude = ?, longitude = ?, established_date = ? WHERE store_id = ?";
           $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssssssddsssssi", $data['store_name'], $data['store_type'], $data['description'], $data['address'], $data['city'], $data['state'], $data['zip_code'], $data['phone_number'], $data['email'], $data['image_url'],  $data['latitude'], $data['longitude'], $data['established_date'], $id);
            $stmt->execute();
          
            echo json_encode(array("message" => "Store updated."));
            break;

        case 'DELETE':
           
            $sql = "DELETE FROM stores WHERE store_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            echo json_encode(array("message" => "Store deleted."));
            break;
    }
}

function handleNewsRequest($conn, $method, $id) {
    switch ($method) {
        case 'GET':
            $sql = $id ? "SELECT * FROM news WHERE id = ?" : "SELECT * FROM news";
            $stmt = $conn->prepare($sql);
            if ($id) $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            break;
        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "INSERT INTO news (title, content, image_url, author_name, category, is_published) VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssssi", $data['title'], $data['content'], $data['image_url'], $data['author_name'], $data['category'], $data['is_published']);
            $stmt->execute();
            echo json_encode(array("message" => "News article created."));
            break;
        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "UPDATE news SET title = ?, content = ?, image_url = ?, author_name = ?, category = ?, is_published = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssssii", $data['title'], $data['content'], $data['image_url'], $data['author_name'], $data['category'], $data['is_published'], $id);
            $stmt->execute();
            echo json_encode(array("message" => "News article updated."));
            break;
        case 'DELETE':
            $sql = "DELETE FROM news WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            echo json_encode(array("message" => "News article deleted."));
            break;
    }
}


function handleCategoriesRequest($conn, $method, $id) {
    switch ($method) {
        case 'GET':
            $sql = $id ? "SELECT * FROM categories WHERE category_id = ?" : "SELECT * FROM categories";
            $stmt = $conn->prepare($sql);
            if ($id) $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            break;
        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "INSERT INTO categories (category_name, description) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ss", $data['category_name'], $data['description']);
            $stmt->execute();
            echo json_encode(array("message" => "Categories article created."));
            break;
        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "UPDATE categories SET category_name = ?, description = ? WHERE category_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssi", $data['category_name'], $data['description'], $id);
            $stmt->execute();
            echo json_encode(array("message" => "Categories article updated."));
            break;
        case 'DELETE':
            $sql = "DELETE FROM categories WHERE category_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            echo json_encode(array("message" => "Categories article deleted."));
            break;
    }
}


function handleProductsRequest($conn, $method, $id) {
    switch ($method) {
        case 'GET':
            $sql = $id ? "SELECT * FROM products WHERE id = ?" : "SELECT * FROM products";
            $stmt = $conn->prepare($sql);
            if ($id) $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            break;

        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "INSERT INTO products (product_name, description, price, stock_quantity, category_id, image_url, thumbnail_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssdddss", $data['product_name'], $data['description'], $data['price'], $data['stock_quantity'], $data['category_id'], $data['image_url'], $data['thumbnail_url']);
            $stmt->execute();
            echo json_encode(array("message" => "Product created."));
            break;
        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $sql = "UPDATE products SET product_name = ?, description = ?, price = ?, stock_quantity = ?, category_id = ?, image_url = ?, thumbnail_url = ? WHERE product_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssdddssi", $data['product_name'], $data['description'], $data['price'], $data['stock_quantity'], $data['category_id'], $data['image_url'], $data['thumbnail_url'], $id);
            $stmt->execute();
            echo json_encode(array("message" => "Product updated."));
            break;
        case 'DELETE':
            $sql = "DELETE FROM products WHERE product_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            echo json_encode(array("message" => "Product deleted."));
            break;
    }
}
?>