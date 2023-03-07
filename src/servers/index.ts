import axios from "axios";

interface sInterface {
    url: string;
    body?: any;
    header?: any;
    param?: any;
}

const onGet = async (s: sInterface) => {
    return await axios.get(s.url, {params: s.param, headers: s.header});
}

const onPut = async (s: sInterface) => {
    return await axios.put(s.url, {body: s.body, headers: s.header});
}

const onDelete = async (s: sInterface) => {
    return await axios.delete(s.url, {headers: s.header});
}

const onPost = async (s: sInterface) => {
    return await axios.post(s.url, {body: s.body, headers: s.header});
}

export {onGet, onPut, onDelete, onPost}