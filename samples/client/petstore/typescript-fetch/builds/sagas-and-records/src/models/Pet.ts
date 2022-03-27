/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Category,
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import {
    DeploymentRequestStatus,
    DeploymentRequestStatusFromJSON,
    DeploymentRequestStatusFromJSONTyped,
    DeploymentRequestStatusToJSON,
} from './DeploymentRequestStatus';
import {
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';
import {
    WarningCode,
    WarningCodeFromJSON,
    WarningCodeFromJSONTyped,
    WarningCodeToJSON,
} from './WarningCode';

/**
 * A pet for sale in the pet store
 * @export
 * @interface Pet
 */
export interface Pet {
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    friendId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof Pet
     */
    otherFriendIds: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    friendAge: number;
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    age: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pet
     */
    isHappy: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Pet
     */
    isTall: boolean;
    /**
     * 
     * @type {Category}
     * @memberof Pet
     */
    category: Category;
    /**
     * 
     * @type {Category}
     * @memberof Pet
     */
    optionalCategory?: Category;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    name: string;
    /**
     * 
     * @type {Array<Category>}
     * @memberof Pet
     */
    _entries?: Array<Category>;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    surname?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Pet
     */
    photoUrls: Array<string>;
    /**
     * 
     * @type {WarningCode}
     * @memberof Pet
     */
    warningStatus: WarningCode;
    /**
     * 
     * @type {DeploymentRequestStatus}
     * @memberof Pet
     */
    depStatus?: DeploymentRequestStatus;
    /**
     * 
     * @type {DeploymentRequestStatus}
     * @memberof Pet
     */
    alternateStatus: DeploymentRequestStatus;
    /**
     * 
     * @type {Array<DeploymentRequestStatus>}
     * @memberof Pet
     */
    otherDepStatuses: Array<DeploymentRequestStatus>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Pet
     */
    tags: Array<Tag>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Pet
     */
    optionalTags?: Array<Tag>;
    /**
     * pet status in the store
     * @type {string}
     * @memberof Pet
     */
    status: PetStatusEnum;
    /**
     * An array of all 15-minute time slots in 24 hours.
     * @type {Array<Array<number>>}
     * @memberof Pet
     */
    regions?: Array<Array<number>>;
}


/**
* @export
*/
export const PetStatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold'
} as const;

export type PetStatusEnum = typeof PetStatusEnum[keyof typeof PetStatusEnum];


export function PetFromJSON(json: any): Pet {
    return PetFromJSONTyped(json, false);
}

export function PetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'friendId': !exists(json, 'friendId') ? undefined : json['friendId'],
        'otherFriendIds': json['otherFriendIds'],
        'friendAge': json['friendAge'],
        'age': json['age'],
        'isHappy': json['isHappy'],
        'isTall': json['isTall'],
        'category': CategoryFromJSON(json['category']),
        'optionalCategory': !exists(json, 'optionalCategory') ? undefined : CategoryFromJSON(json['optionalCategory']),
        'name': json['name'],
        '_entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(CategoryFromJSON)),
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'photoUrls': json['photoUrls'],
        'warningStatus': WarningCodeFromJSON(json['warningStatus']),
        'depStatus': !exists(json, 'depStatus') ? undefined : DeploymentRequestStatusFromJSON(json['depStatus']),
        'alternateStatus': DeploymentRequestStatusFromJSON(json['alternateStatus']),
        'otherDepStatuses': ((json['otherDepStatuses'] as Array<any>).map(DeploymentRequestStatusFromJSON)),
        'tags': ((json['tags'] as Array<any>).map(TagFromJSON)),
        'optionalTags': !exists(json, 'optionalTags') ? undefined : ((json['optionalTags'] as Array<any>).map(TagFromJSON)),
        'status': json['status'],
        'regions': !exists(json, 'regions') ? undefined : json['regions'],
    };
}

export function PetToJSON(value?: Pet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'friendId': value.friendId,
        'otherFriendIds': value.otherFriendIds,
        'friendAge': value.friendAge,
        'age': value.age,
        'isHappy': value.isHappy,
        'isTall': value.isTall,
        'category': CategoryToJSON(value.category),
        'optionalCategory': CategoryToJSON(value.optionalCategory),
        'name': value.name,
        'entries': value._entries === undefined ? undefined : ((value._entries as Array<any>).map(CategoryToJSON)),
        'surname': value.surname,
        'photoUrls': value.photoUrls,
        'warningStatus': WarningCodeToJSON(value.warningStatus),
        'depStatus': DeploymentRequestStatusToJSON(value.depStatus),
        'alternateStatus': DeploymentRequestStatusToJSON(value.alternateStatus),
        'otherDepStatuses': ((value.otherDepStatuses as Array<any>).map(DeploymentRequestStatusToJSON)),
        'tags': ((value.tags as Array<any>).map(TagToJSON)),
        'optionalTags': value.optionalTags === undefined ? undefined : ((value.optionalTags as Array<any>).map(TagToJSON)),
        'status': value.status,
        'regions': value.regions,
    };
}

