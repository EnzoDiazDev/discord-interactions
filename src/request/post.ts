import Response from "./Response";
import HTTPClient from "../http_client/HTTPClient";

export default async function post(http_client:HTTPClient, resource:string, data?:object):Promise<Response> {
    return http_client.post(resource, data);
}
