function calculate() {
    if (!document.getElementById("radiocong").checked && !document.getElementById("radiotru").checked
    && !document.getElementById("radionhan").checked && !document.getElementById("radiochia").checked ) {

        alert("Chưa chọn phép tính");
        return;
    }
}

function checkradio(cal,kq){
    if(cal==="cong"){
        document.getElementById("radiocong").checked = true ;
    }else if(cal=="tru"){
        document.getElementById("radiotru").checked = true ;
    }else if(cal=="nhan"){
        document.getElementById("radionhan").checked = true ;
    }else if(cal=="chia"){
        document.getElementById("radiochia").checked = true ;
    }

    if(kq==" "){
        document.getElementById("announce").innerHTML="Giá trị không hợp lệ";
    }

    return;
}
function checkvalid(n) {
    let fnum = document.getElementById("sodau").value;
    let snum = document.getElementById("sosau").value;
    if (fnum.length == 0) {
        alert("Chưa điền số thứ nhất");
        return false;
    }
    if (snum.length == 0) {
        alert("Chưa điền số thứ hai");
        return false;
    }
    if (n == 1) {
        if (isNaN(Number(fnum))) {
            alert("Giá trị ở ô thứ nhất không phải số thực");
            return false;
        }
    }
    else {
        if (isNaN(Number(snum))) {
            alert("Giá trị ở ô thứ hai không phải số thực");
            return false;
        }
    }
    return true;
}

function connect() {
    if (checkvalid(1) && checkvalid(2)) {
        calculate();
    }
}