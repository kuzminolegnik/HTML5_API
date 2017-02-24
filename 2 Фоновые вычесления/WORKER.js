onmessage = function (event) {
    var command = String(event.data).toLocaleLowerCase();
    switch (command) {
        case "start":
            try {
                postMessage("Web Worker Start");
                var max = 10000000000,
                    step = 1000000000;
                for (var i = 0; i < max; i++) {
                    if (i % step == 0) {
                        postMessage("Web Worker progress: % " + (i / step) * 10);
                    }
                }
                postMessage("Web Worker stop");
            }
            catch (e) {
                postMessage("ERROR: " + e.message);
            }
            break;
        default:
            postMessage("Command '" + command + "' not found");
    }
};