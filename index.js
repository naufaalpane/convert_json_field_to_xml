const xmlFieldName = ""; // your xml field name

var xmlIds;
const xmlOpeningBracket = "<" + xmlFieldName  + ">";
const xmlClosingBracket = "</" + xmlFieldName + ">";

const json = [
  {"id": "foo", "value": "baz"},
  {"id": "quu", "value": "qux"}
];

var jsonIds = [];

for (let jsonObj of json) {
  jsonIds.push(jsonObj.id);
}

xmlIds = jsonIds.toString().replace(/,/g, xmlClosingBracket + xmlOpeningBracket);
console.log(xmlOpeningBracket.concat(xmlIds.concat(xmlClosingBracket)));