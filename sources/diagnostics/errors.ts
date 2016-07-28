﻿/// <reference path="../_references.ts" />


module FXAudio {
    'use strict';


    export class Errors {

        public static argument(argument: string, message?: string): Error {
            var errorMessage: string = ResourceManager.getString(
                ResourceKey.ARGUMENT_ERROR_MESSAGE, [argument, message]);

            return new Error(errorMessage);
        }

        public static argumentOutOfRange(argument: string): Error {
            var errorMessage: string = ResourceManager.getString(
                ResourceKey.ARGUMENT_OUT_OF_RANGE_ERROR_MESSAGE, [argument]);

            return new Error(errorMessage);
        }

        public static argumentNullOrUndefined(argument: string): Error {
            var errorMessage: string = ResourceManager.getString(
                ResourceKey.ARGUMENT_NULL_OR_UNDEFINED_ERROR_MESSAGE, [argument]);

            return new Error(errorMessage);
        }

        public static abstract(): Error {
            var errorMessage: string = ResourceManager.getString(
                ResourceKey.ABSTRACT_ERROR_MESSAGE, null);

            return new Error(errorMessage);
        }

        public static notYetImplemented(): Error {
            var errorMessage: string = ResourceManager.getString(
                ResourceKey.NOT_YET_IMPLEMENTED_ERROR_MESSAGE, null);

            return new Error(errorMessage);
        }

        public static invalidOperation(message?: string): Error {
            var errorMessage: string = ResourceManager.getString(
                ResourceKey.INVALID_OPERATION_ERROR_MESSAGE, null);

            return new Error(errorMessage);
        }
    }
}