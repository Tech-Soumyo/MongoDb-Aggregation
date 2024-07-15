import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $project: {
      name: -1,
      registered: -1,
    },
  },
];

[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
    },
  },
];

[
  {
    $match: {
      tags: {
        $all: ["ad", "id"],
      },
    },
  },
  {
    $count: "bothtagAsAd",
  },
];

[
  {
    $match: {
      "tags.1": "ad",
    },
  },
  {
    $count: "secondtagAsAd",
  },
];

const client = await MongoClient.connect("");
const coll = client.db("agree").collection("user");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
