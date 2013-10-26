﻿/// <reference path="_references.ts" />


module FxAudioEngine.Test {
    'use strict';


    export class TestEnvironment {

        private _configurationFileUrl: string;

        private _configuration: any;

        private _audioDataFileUrl: string;

        private _audioData: ArrayBuffer;

        private _context: Context;

        private _components: Unit<Circuit>[];


        constructor() {
            this.configurationFileUrl = '../nova/bufferSourceUnit.json';
            this.audioDataFileUrl = '../fixtures/audio/sample.mp3';
            this._components = [];
        }


        public get configurationFileUrl(): string {
            return this._configurationFileUrl;
        }

        public set configurationFileUrl(value: string) {
            this._configurationFileUrl = value;
        }

        public get configuration(): any {
            return this._configuration;
        }

        public set configuration(value: any) {
            this._configuration = value;
        }

        public get audioDataFileUrl(): string {
            return this._audioDataFileUrl;
        }

        public set audioDataFileUrl(value: string) {
            this._audioDataFileUrl = value;
        }

        public get audioData(): ArrayBuffer {
            return this._audioData;
        }

        public set audioData(value: ArrayBuffer) {
            this._audioData = value;
        }

        public get context(): Context {
            return this._context;
        }

        public set context(value: Context) {
            this._context = value;
        }

        public get components(): Unit<Circuit>[] {
            return this._components;
        }

        public set components(value: Unit<Circuit>[]) {
            this._components = value;
        }
    }
}
