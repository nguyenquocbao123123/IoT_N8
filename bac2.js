
var btn = document.getElementById("btngiai");
//----------------------------------------------------------------
function giaipt (){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    if (a == 0){
        if (b == 0){
            if (c == 0){// vo so nghiem
                document.getElementById("kq").innerHTML="<p>phuong trinh vo so nghiem</p>";
            }
            else{//vo nghiem
                document.getElementById("kq").innerHTML="<p>phuong trinh vo nghiem</p>";
            }
        }
        else{
            var x = -c/b;
            x = x.toFixed(2);
            document.getElementById("kq").innerHTML="<br>nghiem cua pt: "+x;
        }
    }
    else{
        var delta = b*b - 4*a*c;
        if (delta < 0){//pt vo nghiem
            document.getElementById("kq").innerHTML="<p>phuong trinh vo nghiem</p>";
        }
        else if (delta== 0){//pt nghiem kep
            var x = -b/(2*a);
            x = x.toFixed(2);
            document.getElementById("kq").innerHTML="<br>phuong trinh co nghiem kep: "+x;
        }
        else{//delta>0: 2 nghiem
            var x1 = (- b - Math.sqrt(delta))/(2 * a);
                x1 = x1.toFixed(2);
            var x2 = (- b + Math.sqrt(delta))/(2 * a);
                x2 = x2.toFixed(2);
            var str =`<p>phuong trinh co 2 nghiem:<br>
                        X<sub>1</sub> = ${x1}<br>
                        X<sub>2</sub> = ${x2}</p>`
            document.getElementById("kq").innerHTML = str;
        }
    }
}
//-----------------------------------
btn.addEventListener("click", giaipt);

