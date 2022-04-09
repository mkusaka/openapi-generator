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


import * as runtime from '../runtime';
import {
    Order,
    OrderFromJSON,
    OrderToJSON,
} from '../models/Order';

export interface DeleteOrderRequest {
    orderId: string;
}

export interface GetOrderByIdRequest {
    orderId: number;
}

export interface PlaceOrderRequest {
    body: Order;
}

/**
 * StoreApi - interface
 * 
 * @export
 * @interface StoreApiInterface
 */
export interface StoreApiInterface {
    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * @summary Delete purchase order by ID
     * @param {string} orderId ID of the order that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApiInterface
     */
    deleteOrderRaw(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    deleteOrder(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit): Promise<void>;

    /**
     * Returns a map of status codes to quantities
     * @summary Returns pet inventories by status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApiInterface
     */
    getInventoryRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<{ [key: string]: number; }>>;

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    getInventory(initOverrides?: RequestInit): Promise<{ [key: string]: number; }>;

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * @summary Find purchase order by ID
     * @param {number} orderId ID of pet that needs to be fetched
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApiInterface
     */
    getOrderByIdRaw(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Order>>;

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    getOrderById(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit): Promise<Order>;

    /**
     * 
     * @summary Place an order for a pet
     * @param {Order} body order placed for purchasing the pet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoreApiInterface
     */
    placeOrderRaw(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Order>>;

    /**
     * Place an order for a pet
     */
    placeOrder(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit): Promise<Order>;

}

/**
 * 
 */
export class StoreApi extends runtime.BaseAPI implements StoreApiInterface {

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    async deleteOrderRaw(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling deleteOrder.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    async deleteOrder(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteOrderRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    async getInventoryRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<{ [key: string]: number; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        const response = await this.request({
            path: `/store/inventory`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    async getInventory(initOverrides?: RequestInit): Promise<{ [key: string]: number; }> {
        const response = await this.getInventoryRaw(initOverrides);
        return await response.value();
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    async getOrderByIdRaw(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling getOrderById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    async getOrderById(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit): Promise<Order> {
        const response = await this.getOrderByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Place an order for a pet
     */
    async placeOrderRaw(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling placeOrder.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/store/order`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Place an order for a pet
     */
    async placeOrder(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit): Promise<Order> {
        const response = await this.placeOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
