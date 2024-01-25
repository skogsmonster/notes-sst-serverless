import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
