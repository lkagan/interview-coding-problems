const selectionSort = require('./selection-sort');

const testCases = [
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2],
    [2, 1],
    [2],
    []
];

testCases.forEach(testCase => {
    test(`selectionSort([${testCase}])`, () => {
        expect(selectionSort(testCase)).toEqual([...testCase].sort((a,b) => a - b));
    });
})

