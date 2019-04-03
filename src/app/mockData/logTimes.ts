import { logTime } from "../model/logTime";

let t1 = new logTime();
t1.userCode = '333';
t1.login = new Date(2019, 3, 10, 9);
t1.logout = new Date(2019, 3, 10, 18);

let t2 = new logTime();
t2.userCode = '333';
t2.login = new Date(2019, 3, 11, 9);
t2.logout = new Date(2019, 3, 11, 18);

let t3 = new logTime();
t3.userCode = '444';
t3.login = new Date(2019, 3, 11, 9);
t3.logout = new Date(2019, 3, 11, 18);

let t4 = new logTime();
t3.userCode = '444';
t3.login = new Date(2019, 3, 12, 9);
t3.logout = new Date(2019, 3, 12, 18);

export const logTimes=[t1,t2,t3,t4];

