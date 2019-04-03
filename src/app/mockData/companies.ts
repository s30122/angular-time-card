import { company } from '../model/company';

let c1=new company();
c1.code='AAA';
c1.name='AAA公司';

let c2=new company();
c2.code='BBB';
c2.name='BBB公司';

export const companies=[c1,c2];
