import Response from "./Response";
import HTTPClient from "../http_client/HTTPClient";

export default async function del(http_client:HTTPClient, resource:string, data?:object):Promise<Response> {
    return http_client.delete(resource, data);
}
