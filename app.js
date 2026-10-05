function abrirPagina(modulo) {
    alert(`Abrindo módulo: ${modulo.toUpperCase()}`);
}

// Menu ativo

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

document.addEventListener("DOMContentLoaded", () => {

    new Chart(
        document.getElementById("processosChart"),
        {
            type: "bar",
            data: {
                labels: ["Jan","Fev","Mar","Abr","Mai","Jun"],
                datasets: [{
                    label: "Processos",
                    data: [45,62,58,80,95,76],
                    backgroundColor: "#145da0"
                }]
            }
        }
    );

});

/*
// Gráfico 1 - Processos por Mês

new Chart(
    document.getElementById("processosChart"),
    {
        type: "bar",
        data: {
            labels: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun"
            ],
            datasets: [{
                label: "Processos",
                data: [45, 62, 58, 80, 95, 76],
                backgroundColor: "#145da0"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);

// Gráfico 2 - Demandas

new Chart(
    document.getElementById("demandasChart"),
    {
        type: "doughnut",
        data: {
            labels: [
                "TI",
                "RH",
                "Jurídico",
                "Financeiro",
                "Patrimônio"
            ],
            datasets: [{
                data: [30, 20, 15, 25, 10],
                backgroundColor: [
                    "#0d3b66",
                    "#145da0",
                    "#3c91e6",
                    "#60a5fa",
                    "#93c5fd"
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);

// Gráfico 3 - Produtividade

new Chart(
    document.getElementById("produtividadeChart"),
    {
        type: "line",
        data: {
            labels: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez"
            ],
            datasets: [{
                label: "Atividades Concluídas",
                data: [
                    120,
                    135,
                    150,
                    180,
                    165,
                    210,
                    225,
                    240,
                    235,
                    260,
                    280,
                    300
                ],
                borderColor: "#145da0",
                backgroundColor: "rgba(20,93,160,0.2)",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);
*/