import axios from "axios";
import HTTPClient from "./HTTPClient";

export default function http_client(url_base:string, headers:object):HTTPClient {
    return axios.create({
        baseURL: url_base,
        headers: headers
    });
}
