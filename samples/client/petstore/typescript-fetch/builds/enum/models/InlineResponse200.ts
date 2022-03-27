/* tslint:disable */
/* eslint-disable */
/**
 * Enum test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    stringEnum?: InlineResponse200StringEnumEnum;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    nullableStringEnum?: string | null;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    numberEnum?: InlineResponse200NumberEnumEnum;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    nullableNumberEnum?: number | null;
}


/**
* @export
*/
export const InlineResponse200StringEnumEnum = {
    One: 'one',
    Two: 'two',
    Three: 'three'
} as const;

export type InlineResponse200StringEnumEnum = typeof InlineResponse200StringEnumEnum[keyof typeof InlineResponse200StringEnumEnum];

/**
* @export
*/
export const InlineResponse200NumberEnumEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type InlineResponse200NumberEnumEnum = typeof InlineResponse200NumberEnumEnum[keyof typeof InlineResponse200NumberEnumEnum];


export function InlineResponse200FromJSON(json: any): InlineResponse200 {
    return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stringEnum': !exists(json, 'string-enum') ? undefined : json['string-enum'],
        'nullableStringEnum': !exists(json, 'nullable-string-enum') ? undefined : json['nullable-string-enum'],
        'numberEnum': !exists(json, 'number-enum') ? undefined : json['number-enum'],
        'nullableNumberEnum': !exists(json, 'nullable-number-enum') ? undefined : json['nullable-number-enum'],
    };
}

export function InlineResponse200ToJSON(value?: InlineResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'string-enum': value.stringEnum,
        'nullable-string-enum': value.nullableStringEnum,
        'number-enum': value.numberEnum,
        'nullable-number-enum': value.nullableNumberEnum,
    };
}

