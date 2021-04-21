
function Oblicz()
{
    let n = document.getElementById("n").value;
    let m = document.getElementById("m").value;
let a = document.getElementById("ΔE");
a.innerHTML = (-13.6*(1/Math.pow(n,2)-(1/Math.pow(m,2))));
}
