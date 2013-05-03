require.config({
    paths: {
        livescript: "libs/livescript",
        ls: "libs/ls"
    },

    shim: {
        livescript: {
            exports: "LiveScript"
        }
    }
});

require(["ls!lstest"], function () {
});