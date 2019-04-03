import { workSchedule } from "../model/workSchedule";

let s1 = new workSchedule();
s1.userCode = '333';
s1.storeCode = 's1';

let s2 = new workSchedule();
s2.userCode = '444';
s2.storeCode = 's1';


let workSchedules : workSchedule[];
let r = Math.floor(Math.random() * 3) + 1
for (let i = 1; i <= 31; i++) {
    s1.startDateTime = new Date(2019, 3, i, 9);
    s1.endDateTime = new Date(2019, 3, i, 18);

    s2.startDateTime = new Date(2019, 3, i, 9);
    s2.endDateTime = new Date(2019, 3, i, 18);

    switch (r) {
        case 1:
            workSchedules.push(s1);
            break;
        case 2:
            workSchedules.push(s2);
            break;
        case 3:
            workSchedules.push(s1);
            workSchedules.push(s2);
            break;

        default:
            workSchedules.push(s1);
            workSchedules.push(s2);
            break;
    }

}

export {workSchedules};


