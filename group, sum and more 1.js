import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 4,
  },
];

const client = await MongoClient.connect("");
const coll = client.db("agree").collection("user");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
