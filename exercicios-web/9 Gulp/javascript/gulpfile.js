const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //evita que as linhas de comentarios sejam passadas para o arquivo final
            presets: ['env'] //pega a versao mais atual do js

        }))
        .pipe(uglify())
        .on('error', erro => console.log(err)) //quando acontecer um determinado evento
        .pipe(concat('codigo.min.js')) //arquivo que vc quer gerar
        .pipe(gulp.dest('build')) // pasta de destino desse novo arquivo gerado

    return cb()
}

//ou

function padrao2(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //evita que as linhas de comentarios sejam passadas para o arquivo final
            presets: ['env'] //pega a versao mais atual do js

        }))
        .pipe(uglify())
        .on('error', erro => console.log(err)) //quando acontecer um determinado evento
        .pipe(concat('codigo.min.js')) //arquivo que vc quer gerar
        .pipe(gulp.dest('build')) // pasta de destino desse novo arquivo gerado
}

module.exports.default = series(padrao)