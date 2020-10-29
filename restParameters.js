//BEFORE
const queryBefore = {
    must: [
        { match: { 'parameter1': '1' } },
        { match: { 'parameter2': '2' } },
        { match: { 'parameter3': '3' } }
    ]};
console.log(queryBefore);


//AFTER
const createElkQuery = (...paramsList) => {
    const query = paramsList.map(params => ({ match: params }));
    return { must: query };
}

const queryAfter = createElkQuery({ 'parameter1': '1' }, { 'parameter2': '2' }, { 'parameter3': '3' });

console.log(queryAfter);