import Axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.request.use((req: any) => {
    const token: string | null = localStorage.getItem("token");
    if (token) req.headers.common["x-auth-token"] = token;
    return req;
});

instance.interceptors.response.use(
    res => res,
    (err: any) => {
        console.log(err)
        if (err.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = "/login";
        }
    }
)
export default instance;
