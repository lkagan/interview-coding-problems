'use strict';
const matrixBfs = require('./20221123');

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const results = [1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16];

it('matrixBfs(matrix)', () => {
    expect(matrixBfs(matrix)).toEqual(results);
});
