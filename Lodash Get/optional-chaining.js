import _ from "lodash";

const data = {
  collection: [
    {},
    null,
    null,
    {
      nodes: {
        molecule: "H2O",
        "max-temp": 100
      },
      hasDetails: false
    },
    undefined
  ],
  status: 200,
  connections: 0
};

// Accessing Nested Arrays and Obejcts
const molecule1 = _.get(data, "collection.3.nodes.molecule");
const molecule2 = _.get(data, "collection[3]['nodes']['molecule']");
const molecule3 = _.get(data, ["collection", 3, "nodes", "molecule"]);
console.log({ molecule1, molecule2, molecule3 });

const molecule4 = data.collection?.[3]?.nodes?.molecule;
console.log({ molecule4 });

// Accessing Properties with Strings and Variables
const key = "max-temp";
const temp1 = _.get(data, "collection[3].nodes['max-temp']");
const temp2 = _.get(data, "collection[3].nodes[" + key + "]");
console.log({ temp1, temp2 });

const temp3 = data.collection?.[3]?.nodes?.[key];
const temp4 = data.collection?.[3]?.nodes?.["max-temp"];
console.log({ temp3, temp4 });

// Looping through an Array which may or may not exist
const collections = _.get(data, "collection", []);
collections.forEach((item) => console.log(item));

data.collection?.forEach((item) => console.log(item));

// Providing Defaults when a value is not found
const col2 = _.get(data, "collection[2]", {});
const col4 = _.get(data, "collection[4]", {});
const hasDetails = _.get(data, "collection[3].hasDetails", true);
console.log({ col2, col4, hasDetails });

//Accessing the data with optional chaining is easy. Optional chaining doesn't provide a way to provide default values but 2 options:
// common is to use the OR syntax
// You'll see the results are different from what we had. This is because if the OR operator encounters any falsy value on the left
// side it will return the thing on the right. So even when it has a legitimate false value, it returns true instead.
// const col_2 = data.collection?.[2] || {};
// const col_4 = data.collection?.[4] || {};
// const has_details = data.collection?.[3]?.hasDetails || true;

// Another option is to use the nullish coalescing operator (??) . This is similar to the or operator but it only returns the value on
// the right if the value on the left is null or undefined. This is exactly what we want in most cases even though the behavior differs for null.
const col_2 = data.collection?.[2] ?? {};
const col_4 = data.collection?.[4] ?? {};
const has_details = data.collection?.[3]?.hasDetails ?? true;

console.log({ col_2, col_4, has_details });
