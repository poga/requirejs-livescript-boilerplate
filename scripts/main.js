require.config({
    paths: {
        livescript: "libs/livescript",
        ls: "libs/ls",
        prelude: "libs/prelude-browser"
    },

    shim: {
        livescript: {
            exports: "LiveScript"
        },

        prelude: {
            exports: "prelude"
        }
    }
});

require(["prelude"], function () {
    // Install prelude.js to global namespace
    prelude.installPrelude(window);
});

require(["ls!lstest"], function () {
    // Main
});