import { sortArrayAsc, sortArrayofObjectsAsc} from "./helpers";

describe('SortArrayAsc', () => {
  const testArray = [3,2,1]
  test('should sort an array in ascending order', () => {
    expect(sortArrayAsc(testArray)[0]).toEqual(1);
  });
});

describe('SortArrayofObjectsAsc', () => {
  const testArray = [
    {
      name: "a",
      number: 3
    },
    {
      name: "b",
      number: 2
    },
    {
      name: "c",
      number: 1
    }
  ]
  test('should sort array of objects in ascending order by number', () => {
    expect(sortArrayofObjectsAsc(testArray, "number")[0].name).toEqual("c");
  });
});

describe('SortArrayofObjectsAsc', () => {
  const testArray = [
    {
      name: "a",
      string: "Z"
    },
    {
      name: "b",
      string: "Y"
    },
    {
      name: "c",
      string: "A"
    }
  ]
  test('should sort an array of objects in ascending order by string', () => {
    expect(sortArrayofObjectsAsc(testArray, "string")[0].name).toEqual("c");
  });
});