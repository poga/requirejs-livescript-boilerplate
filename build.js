({
    appDir: '../',
    baseUrl: 'scripts',

    dir: '../build',

    //Stub out the ls module after a build since
    //it will not be needed.
    stubModules: ['ls'],
    mainConfigFile: "main.js",

    modules: [
        {
            name: 'main',
            //The optimization will load LiveScript to convert
            //the LiveScript files to plain JS. Use the exclude
            //directive so that the livescript module is not included
            //in the built file.
            exclude: ['livescript']
        }
    ]
})