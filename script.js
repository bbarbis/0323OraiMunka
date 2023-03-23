// Létrehozunk egy üres tömböt az adatoknak
let data = [];

// Hozzáadjuk az adatokat a tömbhöz
data.push(["Alma", "100 Ft"]);
data.push(["Körte", "150 Ft"]);

// Kiválasztjuk a táblázatot a DOM-ból
let table = document.getElementById("myTable");

// Létrehozunk egy új sorkat az adatokból
for (let i = 0; i < data.length; i++) {
  let row = table.insertRow();

  // Létrehozzuk az új cellákat és beállítjuk az adatokat
  for (let j = 0; j < data[i].length; j++) {
    let cell = row.insertCell();
    cell.innerHTML = data[i][j];
  }
}
