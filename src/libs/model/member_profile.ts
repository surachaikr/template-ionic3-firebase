type MEMBER_TYPE = 'ANONYMOUS' | 'EMAIL' | 'PHONE' | 'FACEBOOK';

export class MemberProfile {
  id: string = '0';
  type: MEMBER_TYPE = 'ANONYMOUS';
  language: string;
  name: string;
  address: string;
  createdDate: number;
  lastUpdatedDate: number;
}