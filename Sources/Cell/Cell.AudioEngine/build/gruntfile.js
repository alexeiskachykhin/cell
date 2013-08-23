﻿module.exports = function (grunt) {
    'use strict';


    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.initConfig({

        clean: {
            options: {
                force: true
            },

            dev: [
                '../sources/**/*.js',
                '../sources/**/*.map'
            ]
        },

        ts: {
            options: {
                target: 'es5',
                module: 'amd'
            },

            dev: {
                src: ['../sources/**/*.ts'],
                watch: '../sources'
            }
        }
    });


    grunt.registerTask('default', ['clean:dev', 'ts:dev']);
}