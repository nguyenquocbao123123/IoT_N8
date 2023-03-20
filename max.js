function max() {
    var a;
    var b;
    a = prompt("nhap so a", "");
    if (a != null || a != "") {
      console.log(a);}
      var b = prompt("nhap so b", "");
      if (b != null || b != "") {
    }
    if(parseInt(a) > parseInt(b)) {
        document.getElementById("demo").innerHTML = "max = " + a;
    }else{
        document.getElementById("demo").innerHTML = "max = " + b;
    }
  }