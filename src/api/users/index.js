//对users模块进行整合
import axiosInstance from "./interceotor";
import interfaceObj from "./interface";
import utilFn from "@/api/users/util";
export default utilFn(axiosInstance,interfaceObj)