import handleRequest from "../../src/handle-request";

export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: [
    "sin1",
    "cdg1",
    "arn1",
    "dub1",
    "lhr1",
    "iad1",
    "sfo1",
    "pdx1",
    "cle1",
    "gru1",
    "hnd1",
    "icn1",
    "kix1",
    "bom1",
    "syd1",
    "fra1",
    "cpt1",
    "hkg1",
  ],
};

export default handleRequest;
