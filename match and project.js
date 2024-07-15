import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "userTagName",
  },
];

[
  {
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      name: 1,
      age: -1,
    },
  },
];

[
  {
    $match: {
      "company.phone": new RegExp("^+1 (940)"),
    },
  },
  {
    $count: "PhoneNumber",
  },
];

const client = await MongoClient.connect("");
const coll = client.db("agree").collection("user");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
