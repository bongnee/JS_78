
var numArray = [];
function getEle(n) {
    return document.getElementById(n)
}
function getNumber() {
    var n = Number(getEle("inputNum").value);
    numArray.push(n)
    document.getElementById("txtNum").innerHTML = numArray;
}
function tinhTongSoDuong() {
    for(var n= 0 , r = 0 ; r < numArray.length; r++  )
    numArray[r] > 0 && (n += numArray[r]);
    getEle("txtTongSoDuong").innerHTML = "Tổng số dương: " + n;
}
document.getElementById("btnTongSoDuong").onclick = tinhTongSoDuong;
function demSoDuong() {
    for(var n = 0, r = 0; r < numArray.length; r++)
    numArray[r] > 0 && n++;
   getEle("txtDemSoDuong").innerHTML = "Số dương: " + n;
} 
document.getElementById("btnDemSoDuong").onclick = demSoDuong; 
function findMin(){
    for( var n = numArray[0], r = 1; r < numArray.length; r++)
    numArray[r] < n && (n = numArray[r]);
    getEle("txtFindMin").innerHTML = "Số nhỏ nhất: " + n;
}
document.getElementById("btnFindMin").onclick = findMin;
function timSoDuongNhoNhat(){
    var index = 0 
    var min = numArray[0];
    for(var i = 1 ; i < numArray.length; i++)                        
    if (numArray[i] < min && numArray[i] > 0) {
        min = numArray[i];
        index = i;
    }
     getEle("txtFindMinPos").innerHTML = " Số dương nhỏ nhất: "  + min;
    }
    getEle("btnFindMinPos").onclick = timSoDuongNhoNhat;
function timSoChanCuoi() {
    var chan = [];
    for(var i = 0 ; i < numArray.length; i++)
    numArray[i] % 2 == 0 && (chan = numArray[i]) && (index = i);
    getEle("txtTimChan").innerHTML = "Số chẵn cuối cùng:" + chan;   
}
getEle("btnTimChan").onclick = timSoChanCuoi;
function viTri(a,b) {
    var c = numArray[a];
    numArray[a] = numArray[b];
    numArray[b] = c;
    
}
function doiCho() {
    viTri(getEle("viTri1").value, getEle("viTri2").value);
    getEle("txtDoiCho").innerHTML = "Mảng mới: " + numArray;
    console.log(numArray)
}
getEle("btnChange").onclick = doiCho;
function sapXepTang() {
    numArray.sort(function(a,b){
        return a - b;
    })
    getEle("txtSapXep").innerHTML = numArray;
}
getEle("btnSapXep").onclick = sapXepTang;
function timNguyenTo() {
    var nguyenTo = [];
    for(var i = 0; i <=numArray.length; i++){
        if(numArray[i]==2){
            nguyenTo = numArray[i];
            break
        }else if(numArray[i] >= 2){
            for( var n = 2, r = 0; r <= Math.sqrt((numArray[i])); r++){
                if (numArray[i] % n != 0) {
                    nguyenTo = numArray[i];
                }
            }
           break 
        }
    }
    getEle("txtNguyenTo").innerHTML = "số nguyên tố: " + nguyenTo;
    console.log(nguyenTo)
}
getEle("btnNguyenTo").onclick = timNguyenTo;
function demSoNguyen() {
    for(var n = 0, i = 0; i <= numArray.length;i++)
    Number.isInteger(numArray[i]) && n ++;
getEle("txtSoNguyen").innerHTML = "Tổng số nguyên: " + n;
}
getEle("btnSoNguyen").onclick = demSoNguyen;

function soSanh() {
    for(var n = 0, i = 0; i <= numArray.length;i++)
    numArray[i] > 0 && n++;
    for(var r = 0, i = 0; i <= numArray.length; i++)
    numArray[i] < 0 && r++;
    getEle("txtSoSanh").innerHTML = n > r ? "Số dương > số âm" : "Số dương < số âm";
}
getEle("btnSoSanh").onclick = soSanh;
