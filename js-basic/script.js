function hide() {
    let status = document.getElementById("wraith").style.visibility;
    if(status == '') {
        document.getElementById("wraith").style.visibility = "hidden";
    }
    else{
        document.getElementById("wraith").style.visibility = "";
    }
    }