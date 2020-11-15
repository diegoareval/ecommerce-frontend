import  { getToken }  from "../config/config";

export default class Headers {
  constructor() {
    this.header = {};
  }
setFullHeader() {
    this.header = {
      "Content-Type": "application/json",
       "Authorization": getToken()
     }
    return this;
  }

  setHeader() {
    this.header = {
      "Content-Type": "application/json"
     }
    return this;
  }

  build() {
    return this.header
  }

}


