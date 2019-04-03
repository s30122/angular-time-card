import { store } from "../model/store";

let s1=new store();
s1.code='s1';
s1.companyCode='AAA';
s1.name='內湖店';

let s2=new store();
s2.code='s2';
s2.companyCode='AAA';
s2.name='萬華店';

let s3=new store();
s3.code='s11';
s3.companyCode='BBB';
s3.name='包包店';

let s4=new store();
s4.code='s22';
s4.companyCode='BBB';
s4.name='雞排店';

export const stores=[s1,s2,s3,s4];