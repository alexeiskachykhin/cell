﻿(function () {
    'use strict';


    function loadSound(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.addEventListener('load', function () {
            callback(this.response);
        });

        request.send();
    };

    function initUI(leftGain, rightGain) {
        var channels = [leftGain, rightGain];
        var channelSwitches = document.getElementsByTagName('input');

        for (var i = 0; i <= channelSwitches.length - 1; i++) {
            var channelSwitch = channelSwitches[i];

            channelSwitch.addEventListener('change', function () {
                var channel = channels[this.dataset.channel];
                channel.gain.value = Number(this.checked);
            });
        }
    }


    loadSound('../fixtures/audio/sample.mp3', function (audioBuffer) {
        var unitContext = new FxAudioEngine.FxRealTimeUnitContext();

        var sourceUnit = new FxAudioEngine.Units.Source.FxBufferSourceUnit(unitContext);
        var destinationUnit = new FxAudioEngine.Units.FxAudioDestinationUnit(unitContext);
        var splitterUnit = new FxAudioEngine.Units.FxChannelSplitterUnit(unitContext, 2);

        var leftGain = unitContext.audioContext.createGain();
        var rightGain = unitContext.audioContext.createGain();

        sourceUnit.ports.outputs[0].connect(splitterUnit.ports.inputs[0]);
        splitterUnit.ports.outputs[0]._audioNode.connect(leftGain, 0, 0);
        splitterUnit.ports.outputs[0]._audioNode.connect(rightGain, 1, 0);

        leftGain.connect(destinationUnit.ports.inputs[0]._audioNode);
        rightGain.connect(destinationUnit.ports.inputs[0]._audioNode);


        var initOperation = sourceUnit.init(audioBuffer);

        initOperation.addEventListener('success', function () {
            sourceUnit.stream.start(0);
        });


        initUI(leftGain, rightGain);
    });
}());