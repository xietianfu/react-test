import { sum } from './sum';

test('加法函数', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 4)).toBe(6);
});

test('对象相等', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK');
}

async function fetchData() {
  return 'peanut butter';
  
}

test('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
