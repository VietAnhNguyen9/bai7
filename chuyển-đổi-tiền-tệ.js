function chuyentien(){
    let vn = document.getElementById("a").value;
    let dl = document.getElementById("b").value;
    let dt = document.getElementById("Amount").value;

    if(vn=="Việt Nam" && dl=="Đông Lào")
    {dt=dt*2;}
    else if(vn=="Đông Lào" && dl=="Việt Nam")
    {dt=dt/2;}
    document.getElementById('Result').innerText='Result:' + dt;}