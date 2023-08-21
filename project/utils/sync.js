import store from "@/store";
import api from "../api/index.js";
import axios from "axios";
/*
 * In this file, please follow the naming rule below
 * for the string variables of attributes in request,
 * regardless of their names in the request filter:
 *
 * "req" + "attribute_name", in camelCase.
 * For example:
 *   id - reqId
 *   platform_name - reqPlatformName
 */

var globalPage = store.state.global.page;

function getReqOrdering(sorterKey, sorterOrder) {
  let reqOrdering = "";
  if (
    typeof sorterKey === "undefined" ||
    sorterKey === "" ||
    typeof sorterOrder === "undefined" ||
    sorterOrder === ""
  ) {
    reqOrdering = undefined;
  } else {
    reqOrdering = sorterOrder === "descend" ? "-" + sorterKey : sorterKey;
  }
  return reqOrdering;
}
