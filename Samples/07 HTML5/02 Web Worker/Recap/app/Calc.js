var stopRequested = false;

var steps;
addEventListener("message", function (e) {
    var message = e.data;
    if (message.type == "start") {
        steps = 0;

        nextStep();
    }
    else if (message.type = "stop") {
        stopRequested = true;
    }
});

function nextStep() {
    execute(1000);

    if (++steps == 5) {
        postMessage({ type: "done", result: true });
        return;
    }

    if (stopRequested) {
        postMessage({ type: "stop" });
        return;
    }

    setTimeout(function () {
        nextStep();
    }, 0);
}

function execute(interval) {
    var begin = new Date();

    while (true) {
        var now = new Date();
        if (now - begin > interval) {
            break;
        }
    }
}
