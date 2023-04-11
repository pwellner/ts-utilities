


//-----------------------------------------------------------------------------
// Like Node's assert
export function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error("Assertion ERROR " + msg);
  }
}



//-----------------------------------------------------------------------------
// Makes logs easier to read
export function hMinSecFormat(date?: any): string {
  function isValidDate(d: any) {
    return d instanceof Date && !isNaN(d.getTime());
  }
  if (!date) {
    date = new Date(); // now
  }
  if (isValidDate(date)) {
    return ("@" + date.getHours()).padStart(2, '0') + ":" +
      ("" + date.getMinutes()).padStart(2, '0') + "+" +
      ("" + date.getSeconds()).padStart(2, '0') + "s";
  }
  return "";
}

