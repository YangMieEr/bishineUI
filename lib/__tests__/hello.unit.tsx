function add (a: number, b: number){
    return a + b;
}

test("FizzBuzz test", () => {
    expect(add(2, 3)).toBe(5);
});