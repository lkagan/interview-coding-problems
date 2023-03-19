import bfs from './graph-bfs-ts';

const graph = [
    [1,3],
    [0],
    [3,8],
    [0,4,5,2],
    [3,6],
    [3],
    [4,7],
    [6],
    [2],
];

const results = [0,1,3,4,5,2,6,8,7];

test('Graph BFS', () => {
    expect(bfs(graph)).toEqual(results);
})