const gulp = require('gulp')

//const { series, parallel } = require('gulp')
//ou
const series = gulp.series
const parallel = gulp.parallel

const antes1 = cb => {
    console.log("Tarefa antes 1")

    return cb()
}

const antes2 = cb => {
    console.log("Tarefa antes 2")

    return cb()
}


function copiar(cb){
    //seleciona quais arquivos serão usados
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/**.txt') //qualquer arquivo que estaja na pasta A e que tenha extensao txt
        .pipe(gulp.dest('pastaB'))
        //.pipe(imagePelaMetade()) transformação a ser feita com os arquivos
        

    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar
    )