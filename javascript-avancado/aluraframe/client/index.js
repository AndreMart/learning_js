let campos = [
  (data = document.querySelector("#data")),
  (qtd = document.querySelector("#quantidade")),
  (valor = document.querySelector("#valor")),
];

document.querySelector(
  ".form",
  addEventListener("submit", function (event) {
    event.preventDefault();

    let tr = document.createElement("tr");
    campos.forEach((campo) => {
      const td = document.createElement("td");
      td.textContent = campo.value;
      tr.appendChild(td);
    });
    const tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    let tbody = document.querySelector("table tbody");
    tbody.appendChild(tr);

    campos[0].value = ''
    campos[1].value = ''
    campos[2].value = ''
    campos[0].focus();
  })
);
