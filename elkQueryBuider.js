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