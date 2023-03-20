function min() {
    var a;
    var b;
    a = prompt("nhap so a", "");
    if (a != null || a != "") {
      console.log(a);}
      var b= prompt("nhap so b", "");
      if (b != null || b != "") {
        console.log(b);
    }
    if(parseInt(a) < parseInt(b)) {
        console.log("min = " + a);
        document.getElementById("demo2").innerHTML = "min = " + a;
    }else{
        console.log("min = " + b);
        document.getElementById("demo2").innerHTML = "min = " + b;
    }
  }