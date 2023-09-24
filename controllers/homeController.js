exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        nombrePagina: 'DevJobs',
        tagline: 'Encuentra y pública trabajos para Desarrolladores Web',
        barra: true,
        boton: true
    })
}