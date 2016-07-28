﻿/// <reference path="../../../_references.ts" />


module FXAudio {
    'use strict';


    export class ChannelMergerUnit extends Unit<ChannelMergerCircuit> {

        constructor(context: Context, numberOfInputs: number = 6) {
            Contract.isNotNullOrUndefined(context, 'context');
            Contract.isPositiveOrZero(numberOfInputs, 'numberOfInputs');

            super(new ChannelMergerCircuit(context, numberOfInputs));
        }
    }
}