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
  },
  {
    id: "selection-sort",
    title: "Сортировка выбором",
    description: "Алгоритм, который проходит по массиву, находит минимальный элемент и меняет его местами с первым элементом неотсортированной части.",
    complexity: { time: "O(n²)", space: "O(1)" },
    jsCode: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`,
    tsCode: `function selectionSort(arr: number[]): number[] {
  const n: number = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx: number = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`
  },
  {
    id: "merge-sort",
    title: "Сортировка слиянием",
    description: "Классический алгоритм 'разделяй и властвуй'. Массив рекурсивно делится пополам, а затем части сливаются в правильном порядке.",
    complexity: { time: "O(n log n)", space: "O(n)" },
    jsCode: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) result.push(left[l++]);
    else result.push(right[r++]);
  }
  return [...result, ...left.slice(l), ...right.slice(r)];
}`,
    tsCode: `function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid: number = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) result.push(left[l++]);
    else result.push(right[r++]);
  }
  return [...result, ...left.slice(l), ...right.slice(r)];
}`
  },
  {
    id: "factorial",
    title: "Факториал(рекурсия)",
    description: "Вычисление произведения всех натуральных чисел от 1 до n. Приведены два метода: классическая рекурсия, которая накапливает стек вызовов, и хвостовая рекурсия, использующая аккумулятор.",
    complexity: { time: "O(n)", space: "O(n) / O(1)" },
    jsCode: `// 1. КЛАССИЧЕСКАЯ РЕКУРСИЯ
// Стек вызовов растет пропорционально n
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// 2. ХВОСТОВАЯ РЕКУРСИЯ
// Результат передается в аккумулятор (acc), 
// что позволяет оптимизировать использование памяти
const tailFactorial = (n, acc = 1) => {
  if (n === 0) return acc;
  return tailFactorial(n - 1, n * acc);
};`,
    tsCode: `// 1. КЛАССИЧЕСКАЯ РЕКУРСИЯ
const factorial = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// 2. ХВОСТОВАЯ РЕКУРСИЯ
const tailFactorial = (n: number, acc: number = 1): number => {
  if (n === 0) return acc;
  return tailFactorial(n - 1, n * acc);
};`
  }

];