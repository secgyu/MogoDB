const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db("Pract");
  const students = database.collection("students");

  // 문제 1. insertOne
  // const data = await inventory.insertOne({ item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } });
  // console.log(data);

  // 문제 2. insertMany
  // const dataList = [
  //   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
  //   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
  //   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } },
  // ];
  // const data2 = await inventory.insertMany(dataList);
  // console.log(data2);

  // 문제 3. find
  // const findData = await inventory.find({}).toArray();
  // console.log(findData);

  // 문제 4. status가 D인 데이터 찾기
  // const dataList2 = [
  //   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  //   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
  //   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  //   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  //   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
  // ];
  // const data3 = await inventory.insertMany(dataList2);
  // const findData2 = await inventory.find({ status: { $eq: "D" } }).toArray();
  // console.log(findData2);

  // 문제 5. status가 A이고 qty가 50인 데이터 찾기
  // const findData3 = await inventory.find({ $and: [{ status: { $eq: "A" } }, { qty: { $eq: 50 } }] }).toArray();
  // console.log(findData3);

  // 문제 6. $in 연산자 사용
  // const findData4 = await inventory.find({ status: { $in: ["A", "B"] } }).toArray();
  // console.log(findData4);

  // 문제 7. $lt 연산자 사용
  // const findData5 = await inventory.find({ $and: [{ status: { $eq: "A" } }, { qty: { $lt: 30 } }] }).toArray();
  // console.log(findData5);

  // 문제 8. $or 연산자 사용
  // const findData6 = await inventory.find({ $or: [{ status: { $eq: "A" } }, { qty: { $lt: 30 } }] }).toArray();
  // console.log(findData6);

  // 문제 9. Nested field 검색
  // const findData7 = await inventory.find({ "size.uom": { $eq: "in" } }).toArray();
  // console.log(findData7);

  // 문제 10. size.h가 10을 초과하는 데이터 찾기
  // const findData8 = await inventory.find({ "size.h": { $gt: 10 } }).toArray();
  // console.log(findData8);

  // 문제 11. updateOne
  // const dataList3 = [
  //   { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },
  //   { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020") },
  //   { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  // ];
  // const insertData = await students.insertMany(dataList3);
  // const updateId = await students.updateOne({ _id: 3 }, { $set: { test3: 98 } });
  // console.log(updateId);

  // 문제 12. updateMany
  // const updateData = await students.updateMany({}, { $set: { test1: 0, status: "modified" } });
  // console.log(updateData);

  // 문제 13. deleteOne
  // const deleteStudent = await students.deleteOne({ test2: { $eq: 92 } });
  // console.log(deleteStudent);

  // 문제 14. deleteMany
  const deleteStudent2 = await students.deleteMany({ test1: { $eq: 0 } });
  console.log(deleteStudent2);
}

run();
