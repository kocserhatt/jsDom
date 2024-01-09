const tableUser = document.querySelector("#users");


const people = [
  {
       isim: "furkan",
       soyisim: "özay",
       yas: 24
  },
  {
    isim: "serhat",
    soyisim: "koç",
    yas: 20
  }
]
for (const person of people) {
    tableUser.innerHTML +=`
        <tr>
             <td>${person.isim}</td>
             <td>${person.soyisim}</td>
             <td>${person.yas}</td>

        </tr>

        `;
}