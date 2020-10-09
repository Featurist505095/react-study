import App from './index.tsx';

it ('Base length must be 2', () => {
    expect(App(2, 10)).toBe(12);
    expect(App(1, -2)).toBe(-1);
})