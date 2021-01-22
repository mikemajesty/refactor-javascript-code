const parameters = [
    { "name": "user", "tag": "input", "type": "hidden", "value": "usertest" },
    { "name": "password", "tag": "input", "type": "hidden", "value": "passtest" },
    { "tag": "input", "name": "exam", "type": "hidden", "value": "covid" }
];

const tagCreator = (params) => ({
    input: `<input type='${params.type}' name='${params.name}' value='${params.value}' />`
})[params.tag];

console.log(...parameters.map(tag => tagCreator(tag)));