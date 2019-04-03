import { user } from "../model/user";

const pwd = 'abc123';

let u1 = new user();
u1.code = '111';
u1.name = '老闆';
u1.companyCode = 'AAA';
//u1.parentCode
u1.password = pwd;

let u2 = new user();
u2.code = '222';
u2.companyCode = 'AAA';
u2.name = '主管';
u2.parentCode = '111';
u2.password = pwd;
u2.storeCode = 's1';

let u3 = new user();
u3.code = '333';
u3.companyCode = 'AAA';
u3.name = '員工一號';
u3.parentCode = '222';
u3.password = pwd;
u3.storeCode = 's1';

let u4 = new user();
u4.code = '444';
u4.companyCode = 'AAA';
u4.name = '員工二號';
u4.parentCode = '222';
u4.password = pwd;
u4.storeCode = 's1';

export const users = [u1, u2, u3, u4];
