/// <reference path="../../libraries/waa.d.ts" />

/// <reference path="../fxRealTimeAudioContext.ts" />
/// <reference path="../fxAudioNode.ts" />


module FxAudioEngine.Nodes {
    'use strict';


    export class FxAudioDestinationNode  extends FxAudioNode {

        private _audioDestinationNode: AudioDestinationNode;


        public get maxChannelCount(): number {
            return this._audioDestinationNode.maxNumberOfChannels;
        }


        constructor(audioContext: FxRealTimeAudioContext) {
            var audioGraph = this._buildAudioGraph(audioContext);

            super(audioContext, audioGraph);
        }


        private _buildAudioGraph(audioContext: FxAudioContext): AudioNode[] {
            var audioDestinationNode: AudioDestinationNode = audioContext._audioContext.destination;
            var audioGraph: AudioNode[] = [audioDestinationNode];

            return audioGraph;
        }
    }
}