import Response from "./Response";
import HTTPClient from "../http_client/HTTPClient";

export default async function get(http_client:HTTPClient, resource:string, parameters?:object):Promise<Response> {
    return http_client.get(resource, {
        params: parameters
    });
}
