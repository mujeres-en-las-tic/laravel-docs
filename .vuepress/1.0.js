module.exports = [
    {
        title: 'Laravel Introducción',
        collapsable: true,
        children: prefix('laravel', [
            'instalacion',
            'configuracion',
            'estructura-de-directorios',
        ]),
    },
    {
        title: 'Route (Rutas)',
        collapsable: true,
        children: prefix('rutas', [
            '',
            'ejercicio',
        ]),
    },
    {
        title: 'Controller (Controladores)',
        collapsable: true,
        children: prefix('controladores', [
            '',
            'controladores-de-recursos',
            'ejercicio'
        ]),
    },
    {
        title: 'View (Vistas)',
        collapsable: true,
        children: prefix('vistas', [
            '',
            'blade',
            'ejercicio',
        ]),
    },
    {
        title: 'Model (Modelos)',
        collapsable: true,
        children: prefix('modelos', [
            '',
            'ejercicio',
        ]),
    },
    {
        title: 'Base de datos',
        collapsable: false,
        children: prefix('bases-de-datos', [
            '',
            'factory',
            'seeder'
        ]),
    }
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
