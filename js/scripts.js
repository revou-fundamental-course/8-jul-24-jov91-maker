// menghitung BMI
function hitungBmi(event) {
    event.preventDefault();

        const bbd = parseFloat(document.getElementById("input-berat-badan").value);
        const tbd = parseFloat(document.getElementById("input-tinggi-badan").value) / 100;
                    
        if (isNaN(bbd) || isNaN(tbd) || bbd <= 0 || tbd <= 0) {
            alert("Mohon masukkan data anda dengan benar");
            return;
        }
        let bmi = bbd / (tbd * tbd);
        let bmirounded = bmi.toFixed(1);
        document.getElementById("hasil-bmi").innerHTML = bmirounded;

        // menampilkan keseluruhan hasil BMI
        let kategori = "";
        if (bmirounded < 18.5) {
            kategori = "KEKURANGAN BERAT BADAN";
        }   else if (bmirounded < 24.9) {
            kategori = "NORMAL (IDEAL)";
        }   else if (bmirounded <= 29.9) {
            kategori = "KELEBIHAN BERAT BADAN";
        }   else {
            kategori = "KEGEMUKAN (OBESITAS)";
        }
        document.getElementById("kategori-bmi").innerHTML = kategori;
    }
// reset button command 
function resetButton () {
    document.getElementById("form-bmi").reset();
    document.getElementById("hasil-bmi").textContent = "0";
    document.getElementById("input-berat-badan").textContent = "";
    document.getElementById("input-tinggi-badan").textContent = "";
    document.getElementById("input-usia").textContent = "";
    document.getElementById("kategori-bmi").textContent = "";
}

// event submit & reset
document.getElementById("form-bmi").addEventListener('submit', hitungBmi);
document.getElementById("reset-button").addEventListener('click', resetButton);