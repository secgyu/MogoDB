# MongoDB CRUD 문제모음

## MongoDB 학습

MongoDB의 CRUD(Create, Read, Update, Delete) 연산을 학습하고 연습하기 위해 작성되었습니다

## Create 데이터 생성

## 문제 1.

`inventory` 라는 컬렉션에 다음 데이터를 넣어보세요

```js
{
  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' }
}
```

## 문제 2.

`inventory` 컬렉션에 다음 데이터를 추가하세요

```js
[
  {
    item: "journal",
    qty: 25,
    tags: ["blank", "red"],
    size: { h: 14, w: 21, uom: "cm" },
  },
  {
    item: "mat",
    qty: 85,
    tags: ["gray"],
    size: { h: 27.9, w: 35.5, uom: "cm" },
  },
  {
    item: "mousepad",
    qty: 25,
    tags: ["gel", "blue"],
    size: { h: 19, w: 22.85, uom: "cm" },
  },
];
```

## Read 데이터 읽어오기

## 문제 3.

`inventory`에 저장된 모든 데이터를 읽어오세요.

## 문제 4.

`inventory` 컬렉션에 다음 데이터를 추가하세요.

```js
[
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
];
```

status가 D인 데이터를 찾아보세요

## 문제 5.

`status`가 `A`이고 `qty`가 50인 데이터를 찾아보세요

## 문제 6.

`status`가 `A`또는 `B`인 데이터를 찾아보세요.

## 문제 7.

`status`가 `A`이고 `qty`가 30보다 작은 데이터를 찾아보세요.

## 문제 8.

`status`가 `A`이거나 `qty`가 30보다 작은 데이터를 찾아보세요.

## 문제 9.

`size.uom`이 `in`인 데이터를 찾아보세요.

## 문제 10.

`size.h`가 10을 초과하는 데이터를 찾아보세요.

## Update 데이터 수정하기

## 문제 11.

`students` 컬렉션에 다음 데이터를 추가하세요

```js
[
  { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },
  { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020") },
  { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
];
```

`_id`가 3인 학생의 `test3` 점수를 98로 수정하세요.

## 문제 12.

모든 데이터의 `test1` 점수를 0으로 수정하고, `status: 'modified'` 필드를 추가하세요.

## Delete 데이터 삭제하기

## 문제 13.

`test2` 점수가 92점인 학생을 삭제하세요.

## 문제 14.

`test1` 점수가 0인 학생들을 삭제하세요.
