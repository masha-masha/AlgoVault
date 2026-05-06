export interface Algorithm {
  id: string;
  title: string;
  description: string;
  complexity: {
    time: string;
    space: string;
  };
  jsCode: string;
  tsCode: string;
}

export const algorithms: Algorithm[] = [
  {
    id: "binary-search",
    title: "Бинарный поиск",
    description: "Эффективный алгоритм поиска элемента в отсортированном массиве путем многократного деления интервала поиска пополам.",
    complexity: { time: "O(log n)", space: "O(1)" },
    jsCode: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    tsCode: `function binarySearch(arr: number[], target: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mid: number = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
  },
  {
    id: "quick-sort",
    title: "Быстрая сортировка",
    description: "Алгоритм, основанный на принципе «разделяй и властвуй». Выбирается опорный элемент, и массив делится на две части: элементы меньше опорного и больше опорного.",
    complexity: { time: "O(n log n) (среднее), O(n²) (худшее)", space: "O(log n) (среднее, рекурсия)" },
    jsCode: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [], equal = [], right = [];
  for (const element of arr) {
    if (element < pivot) left.push(element);
    else if (element > pivot) right.push(element);
    else equal.push(element);
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}`,
    tsCode: `function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left: number[] = [], equal: number[] = [], right: number[] = [];
  for (const element of arr) {
    if (element < pivot) left.push(element);
    else if (element > pivot) right.push(element);
    else equal.push(element);
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}`
  },
  {
    id: "bubble-sort",
    title: "Пузырьковая сортировка",
    description: "Простой алгоритм, многократно проходящий по списку, сравнивающий соседние элементы и меняющий их местами, если они стоят в неправильном порядке.",
    complexity: { time: "O(n²) (среднее и худшее), O(n) (лучшее)", space: "O(1)" },
    jsCode: `function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}`,
    tsCode: `function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}`
  },
  {
    id: "two-sum",
    title: "Two Sum",
    description: "Найти два числа в массиве, сумма которых равна заданному значению.",
    complexity: { time: "O(n) (с хэш-таблицей)", space: "O(n)" },
    jsCode: `function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return []; // Если пара не найдена
}`,
    tsCode: `function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(nums[i], i);
  }
  return []; // Если пара не найдена
}`
  },
  {
    id: "insertion-sort",
    title: "Сортировка вставками",
    description: "Алгоритм, при котором массив постепенно перестраивается путем вставки каждого следующего элемента в правильную позицию в уже отсортированной части.",
    complexity: { time: "O(n²)", space: "O(1)" },
    jsCode: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}`,
    tsCode: `function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    // комментарий
    const current: number = arr[i];
    let j: number = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}`
  }

];