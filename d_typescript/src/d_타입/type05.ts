// type05.ts

//! === Intersection(인터섹션) 타입 ===
// : 여러 타입을 하나로 결합하여 모든 타입의 기능 갖춘 단일 타입을 생성
// >> 여러 타입을 모두 만족하는 하나의 타입
// >> And 연산자 (A 그리고 B)
// >> & 기호를 사용하여 구현

//? 인터섹션 타입 사용 방법
// type 타입별칭 = Type1 &  Type2 & ...;

type Employee = {
  name: string;
  starDate: Date;
}

type Manager = Employee &  {group: string};

let managerA:Manager = {
  name:'이승아',
  starDate: new Date(),
  group: '개발부서'
}

//? 인터섹션 타입의 특징
// - 타입 결합
// : 여러 타입의 속성을 결합하여 새로운 타입을 생성
// : 코드의 재사용성 + 복잡한 타입의 조합 가능

// 인터섹션 타입 예시
type Admin = {
  isAdmin: boolean;
}

type User = {
  id: string;
  password: string;
}

// 관리 사용자
type AdminUser = Admin & User;

function createAdminUser(user: User): AdminUser {
  // 스프레드 연산자를 사용하는 새로운 객체 생성
  return {...user, isAdmin: true};
}

let newAdminUser: User = {
  id: 'qwe123',
  password:'qweqwe123123'
}

let adminUser1 = createAdminUser(newAdminUser);
console.log(adminUser1); //{ id: 'qwe123', password: 'qweqwe123123', isAdmin: true }


export const tmp = '';