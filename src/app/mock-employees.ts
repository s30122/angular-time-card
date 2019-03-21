import  {Employee}from './employee';

let Employees:Employee[];
Employees=[
    new Employee(1,"A001","abc123","王大明",{ primary: 'red',
        secondary: 'pink'}),
    new Employee(2,"A002","abc123","林小凡",{ primary: 'blue',
    secondary: 'blue'}),
    new Employee(3,"B001","abc123","陳阿斯",{ primary: 'yellow',
    secondary: 'yellow'}),
    new Employee(4,"B002","abc123","翁兒雷",{ primary: 'red',
    secondary: 'pink'}),
]
export { Employees};