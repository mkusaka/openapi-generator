/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    User,
    UserFromJSON,
    UserToJSON,
} from '../models/User';

export interface CreateUserRequest {
    user: User;
}

export interface CreateUsersWithArrayInputRequest {
    user: Array<User>;
}

export interface CreateUsersWithListInputRequest {
    user: Array<User>;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface UpdateUserRequest {
    username: string;
    user: User;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createUserRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Creates list of users with given input array
     */
    async createUsersWithArrayInputRaw(requestParameters: CreateUsersWithArrayInputRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUsersWithArrayInput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/createWithArray`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.user.map(UserToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Creates list of users with given input array
     */
    async createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createUsersWithArrayInputRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Creates list of users with given input array
     */
    async createUsersWithListInputRaw(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUsersWithListInput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/createWithList`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.user.map(UserToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Creates list of users with given input array
     */
    async createUsersWithListInput(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createUsersWithListInputRaw(requestParameters, initOverrides);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Get user by user name
     */
    async getUserByNameRaw(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByName.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * 
     * Get user by user name
     */
    async getUserByName(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit): Promise<User> {
        const response = await this.getUserByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Logs user into the system
     */
    async loginUserRaw(requestParameters: LoginUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling loginUser.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling loginUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * 
     * Logs user into the system
     */
    async loginUser(requestParameters: LoginUserRequest, initOverrides?: RequestInit): Promise<string> {
        const response = await this.loginUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Logs out current logged in user session
     */
    async logoutUserRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Logs out current logged in user session
     */
    async logoutUser(initOverrides?: RequestInit): Promise<void> {
        await this.logoutUserRaw(initOverrides);
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling updateUser.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateUserRaw(requestParameters, initOverrides);
    }

}
