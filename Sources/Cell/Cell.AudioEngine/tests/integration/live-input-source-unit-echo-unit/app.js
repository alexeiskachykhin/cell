﻿(function () {
    'use strict';


    function getInputStream(callback) {
        navigator.getUserMedia({
            audio: true
        }, callback, function () { });
    }


    getInputStream(function (stream) {
        var context = new FxAudioEngine.FxRealTimeContext();

        var sourceUnit = new FxAudioEngine.FxLiveInputSourceUnit(context);
        var echoUnit = new FxAudioEngine.FxEchoUnit(context);
        var destinationUnit = new FxAudioEngine.FxAudioDestinationUnit(context);

        echoUnit.delayTime = 1;
        echoUnit.feedbackGain = 0.25;
        echoUnit.echoGain = 0.5;

        sourceUnit.ports.outputs[0].connect(echoUnit.ports.inputs[0]);
        echoUnit.ports.outputs[0].connect(destinationUnit.ports.inputs[0]);

        var initOperation = sourceUnit.init(stream);

        initOperation.addEventListener('success', function () {
            sourceUnit.stream.start(0);
        });

        initOperation.addEventListener('error', function () {
            throw new Error('Initialization of source node has failed.');
        });
    });
}());