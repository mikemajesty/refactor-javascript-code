# refactor-javascript-code

## ELk query refactor using [Rest Parameters]
![Elk Quert Refactor](https://github.com/mikemajesty/refactor-javascript-code/blob/main/img/restParameters/elkQuery.png?raw=true)

```
const createElkQuery = (...paramsList) => {
    const query = paramsList.map(params => ({ match: params }));
    return { must: query };
}

const queryAfter = createElkQuery({ 'parameter1': '1' }, { 'parameter2': '2' }, { 'parameter3': '3' });
```