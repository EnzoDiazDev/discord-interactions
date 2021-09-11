import {AxiosInstance} from "axios";

type HTTPClient = Pick<AxiosInstance, "get" | "post" | "put" | "patch" | "delete">;

export default HTTPClient;
