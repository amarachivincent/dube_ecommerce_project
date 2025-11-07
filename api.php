<?php 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Content-Type: application/json; charset=utf-8");

$host = "localhost";
$user = "";
$pass = "";
$dbname = "";

$conn = mysqli_connect($host, $user, $pass, $dbname);

if(isset($_POST['city'])){

$city = isset($_POST['city']) ? $_POST['city'] : '';
$type = isset($_POST['type']) ? $_POST['type'] : '';
$bedrooms = isset($_POST['bedrooms']) ? $_POST['bedrooms'] : '';
$max_price = isset($_POST['max_price']) ? $_POST['max_price'] : '';

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
$data = array();

if ($result && mysqli_num_rows($result) > 0) {
     $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $data= $rows;
}

// Output the JSON response
 echo json_encode($data);

// Close statement and connection

mysqli_close($conn);

}

if(isset($_GET['city'])){

$result = mysqli_query($conn, "SELECT DISTINCT city FROM properties LIMIT 8");
$data = array();

if ($result && mysqli_num_rows($result) > 0) {
     $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
     $data=$rows;
}


// Output the JSON response
 echo json_encode($data);

// Close statement and connection

mysqli_close($conn);

}



if(isset($_GET['q'])){

$input=$_GET['q'];

if($input=="more"){

$query = "SELECT * FROM properties";

}else{
$query = "SELECT * FROM properties LIMIT 3";
}

$result = mysqli_query($conn, $query);
$data = array();

if ($result && mysqli_num_rows($result) > 0) {
     $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
     $data=$rows;
}


// Output the JSON response
 echo json_encode($data);

// Close statement and connection

mysqli_close($conn);

}

?>