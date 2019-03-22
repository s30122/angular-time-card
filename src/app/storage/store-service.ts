
import { Employee } from '../employee';

let LOGIN_EMP:Employee;

export function Set_Login_Emp(emp: Employee) {
    LOGIN_EMP={...emp};
}
export function Get_Login_Emp():Employee {
    return LOGIN_EMP;
}
export{LOGIN_EMP}
