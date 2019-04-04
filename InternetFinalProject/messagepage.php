<?php
include 'db.php';
?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/universal.css">
    <link rel="stylesheet" href="css/drawPage.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script>
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
    <title>Drawessager</title>

	<link rel="stylesheet" href="styles.css">
	<script type="text/javascript">
		function ajax(){
		var req=new XMLHttpRequest();
		req.onreadystatechange=function(){
		if(req.readyState==4 && req.status==200){
		document.getElementById('chat').innerHTML=req.responseText;
	}
	}
	req.open('GET','chat.php',true);
	req.send();

	}
	setInterval(function(){ajax()},1000);
	</script>
</head>
<body onload="ajax(); init()">
<?php

if (count($_POST) && (strpos($_POST['img'], 'data:image/png;base64') === 0)) {
    $name =$_POST['labelContent'];
    $img = $_POST['img'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file = 'uploads/img'.date("YmdHis").'.png';
    $date = date("YmdHis");
    file_put_contents($file, $data);
    $query = "INSERT INTO chat (name,msg) values ('$name','$file')";
	$run   = $conn->query($query);

}

?>

<script src="js/draw.js"></script>
    <script src="fireBase.js"></script>
    <div class="header">
        <div class="left">
            <a href="login.html" class="logo">Log Out</a>
            <a href="viewaccount.html" class="logo">My Account</a>
        </div>
    </div>
<div class = "leftbarpanel">
        <table>
            <tr>
                <th></th>
            </tr>
            <tr>
                <td>
                    <label class="lables" for="color">Line Color</label>
                    <input id="color" name="color" type="color" />
                </td>
            </tr>
            <tr>
                <td>
                    <label class="lables" for="line_width">Line Width</label>
                    <input type="range" min="1" max="10" value="5" class="slider" id="line_width"></td>
            </tr>
<!--             <tr>
                <td>
                    <label class="lables" for="color">Background Color</label>
                    <input id="color_background" name="color_background" type="color" value="#ffffff" onchange="background_color_change()" />
                </td>
            </tr> -->
        </table>

        <div class = "left">
            <input type="button" value="Clear" id="clr" onclick="clear_message()">
        </div>

        <form method="post" action="" onsubmit="prepareImg();">
            <input id="inp_img" name="img" type="hidden" value="tester321">
            <input id="bt_upload" type="submit" value="Send">
            <h1 id="name"></h1>
            <input type="hidden" name="labelContent" id="labelContent" value="theValueToSet" />
            <script src="set_name.js"></script>
        </form>
    </div>


        <canvas id="can" name= "can1"width="375" height="375"></canvas>

    <div id="container">
	<div id="chat_box">
		<div id="chat">
		</div>
	</div>
    <script src="set_name.js"></script>
</div>
<script>



function prepareImg() {
    var canvas = document.getElementById('can');
    document.getElementById('inp_img').value = canvas.toDataURL();
}

</script>
</body>

</html>