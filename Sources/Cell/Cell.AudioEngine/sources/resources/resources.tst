﻿/// <reference path="../_references.ts" />


module FxAudioEngine {
    'use strict';


    export interface IStringResourceMap {
        [id: number]: string
    }


    export interface IResourceMap {
        strings: IStringResourceMap
    }



    export var ResourceMap: IResourceMap = {
        strings: {}
    };


    export enum ResourceKey {
        <% _.forEach(strings, function(value, key) { %>
            <%= key %>,
        <% }); %>
    }

    <% _.forEach(strings, function(value, key) { %>
        ResourceMap.strings[ResourceKey.<%= key %>] = '<%= value %>';
    <% }); %>
}