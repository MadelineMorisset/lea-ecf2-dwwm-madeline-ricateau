function greenTheme() {
    document.getElementById("theme_principal").removeAttribute("disabled");
    document.getElementById("theme_alternatif").setAttribute("disabled", true);
}

function blueTheme() {
    document.getElementById("theme_alternatif").removeAttribute("disabled");
    document.getElementById("theme_principal").setAttribute("disabled", true);
}
