module.exports = [
  {
    title: "Laravel Introducción",
    collapsable: true,
    children: prefix("laravel", [
      "instalacion",
      "configuracion",
      "estructura-de-directorios",
      "tecnologias",
    ]),
  },
  {
    title: "Model (Modelos)",
    collapsable: true,
    children: prefix("modelos", ["", "ejercicio"]),
  },
  {
    title: "Route (Rutas)",
    collapsable: true,
    children: prefix("rutas", ["", "ejercicio"]),
  },
  {
    title: "Controller (Controladores)",
    collapsable: true,
    children: prefix("controladores", [
      "",
      "controladores-de-recursos",
      "ejercicio",
    ]),
  },
  {
    title: "View (Vistas)",
    collapsable: true,
    children: prefix("vistas", [
      "",
      "blade",
      "ejercicio",
      "ejercicio-productos",
    ]),
  },
  {
    title: "Base de datos",
    collapsable: true,
    children: prefix("bases-de-datos", ["", "factory", "seeder", "ejercicio"]),
  },
  {
    title: "Control de Versiones",
    collapsable: true,
    children: prefix("control-de-versiones", [
      "",
      "trabajo-diario-con-git",
      "terminal",
    ]),
  },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
