<?php
include 'db.php';

$query = "SELECT * FROM chat ORDER BY id ASC";
$run   = $conn->query($query);
while ($row = $run->fetch_array()):
?>
<div id="chat_data">
				<span style="color:green;"><?php echo $row['name'];
?>:</span>
				<span style="color:red;"><?php echo "<img src='".$row['msg']."' alt='Smiley face' height='75' width='75'> ";
?></span>


			</div>
<?php endwhile;?>