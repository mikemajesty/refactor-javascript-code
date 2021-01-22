# refactor-javascript-code

## ELk query refactor using [Rest Parameters]
![Elk Query Refactor](https://github.com/mikemajesty/refactor-javascript-code/blob/main/img/restParameters/elkQuery.png?raw=true)

```
const createElkQuery = (...paramsList) => {
    const query = paramsList.map(params => ({ match: params }));
    return { must: query };
}

const queryAfter = createElkQuery({ 'parameter1': '1' }, { 'parameter2': '2' }, { 'parameter3': '3' });
```

## Elk query Builder
![Elk Query Builder](https://github.com/mikemajesty/refactor-javascript-code/blob/main/img/elkQueryBuilder/queryBuilderKibana.png?raw=true)

```
const elkPropertyList = ['city', 'brand'];

const filterList = [
  {"field":"city","value":["SP"]},
  {"field":"state","value":["RJ", "PR"]},
  {"field":"coutry","value":["brazil", "spain"], "conditional": "AND"}
];

const defaultQuery = (params) =>
  `(${[params.field]}:"${(params.value || []).join(`" ${params.conditional || ' OR '} ${[params.field]}:"`)}")`;

const kibanaQuery = [];

const query = filterList.map(filter => {
  return defaultQuery(filter);
}).join(" AND ");
```

## Input creator
![Elk Query Builder](https://github.com/mikemajesty/refactor-javascript-code/blob/main/img/inputCreator/inputCreator.png?raw=true)

```
const parameters = [
    { "name": "user", "tag": "input", "type": "hidden", "value": "usertest" },
    { "name": "password", "tag": "input", "type": "hidden", "value": "passtest" },
    { "tag": "input", "name": "exam", "type": "hidden", "value": "covid" }
];

const tagCreator = (params) => ({
    input: `<input type='${params.type}' name='${params.name}' value='${params.value}' />`
})[params.tag];

console.log(...parameters.map(tag => tagCreator(tag)));
```