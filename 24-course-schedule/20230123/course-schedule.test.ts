import canFinish from './course-schedule-ts';

class TestData {
    public constructor(
        public numCourses: number,
        public prereqs: Array<Array<number>>,
        public result: boolean) {}
}


const testData = [
    new TestData(
        6,
        [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]],
        true
    ),
    new TestData(
        2,
        [[1, 0], [0, 1]],
        false
    ),
];


describe('Can finish all classes', () => {
    testData.forEach(({numCourses, prereqs, result}) => {
        it('canFinish(${numCourses}, [${prereqs}])', () => {
            expect(canFinish(numCourses, prereqs)).toEqual(result);
        });
    })
});