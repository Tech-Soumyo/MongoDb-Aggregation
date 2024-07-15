import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      avgNumOftags: {
        $avg: "$numberOfTags",
      },
    },
  },
];

const client = await MongoClient.connect("");
const coll = client.db("agree").collection("user");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
