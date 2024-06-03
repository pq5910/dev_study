function addContact(name, mobile, home="없음", address="없음", email="없음")
{
    var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact("홍길동", "010-123-3331");
addContact("홍길동", "010-123-4567", "031-123-3311", "서울시");