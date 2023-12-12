<?php
require("online-controllers/onlineControllers.php");
if (isset($_POST["getOnlineControllers"])) {
    if (empty(getControllers())) {
        echo false;
    } else {
        echo true;
    }
} 
?>