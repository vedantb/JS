import { get } from "./get.js";
import lodash from "lodash";
import chalk from "chalk";

/////////////////
// SAMPLE DATA //
/////////////////

const data = {
  collection: [
    {},
    null,
    null,
    {
      nodes: {
        molecule: "H2O"
      },
      hasDetails: false
    },
    undefined
  ],
  status: 200,
  connections: 0
};

/////////////
// TESTING //
/////////////

const fail = () => chalk.bgRed("FAIL");
const pass = () => chalk.bgGreen("PASS");
const id = 2;

assert('data, "status"');
assert('data, "connections", 10');
assert('data, "collection[1]"');
assert('data, "collection[3].nodes"');
assert('data, "collection[2].nodes.molecule"');
assert("data, \"collection[2]['nodes']['molecule']\"");
assert('data, "collection[3].nodes.molecule"');
assert('data, "collection[2].hasDetails", false');
assert('data, "collection[2]", {}');
assert('data, "collection[4]", {}');
assert("data, `collection[${id}].nodes`");
assert("data, `collection.${id}.nodes`");
assert("data, `collection.${id}['nodes']`");

function assert(thing) {
  thing = `get(${thing})`;
  let hasPassed = false;
  try {
    hasPassed = lodash.isEqual(eval(thing), eval(`lodash.${thing}`));
  } catch (e) {
    hasPassed = false;
  }
  if (!hasPassed) {
    console.log(thing, fail());
  } else {
    console.log(thing, pass());
  }
}
