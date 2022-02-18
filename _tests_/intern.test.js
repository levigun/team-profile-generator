const Intern = require('../lib/intern');

describe('Intern', () => {
    it("can get school via constructor", () => {
        const testValue = "bootcamp";
        const e = new Intern ("Levina", 1, "testing@test.com", testValue);
        expect(e.school).toBe(testValue);
    });

    it("can get school name via getSchool()", () => {
        const testValue = "bootcamp";
        const e = new Intern ("Levina", 1, "testing@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });

    it("should return \"Intern\"", () => {
        const testValue = "Intern";
        const e = new Intern ("Levina", 1, "testing@test.com", testValue);
        expect(e.getRole()).toBe(testValue);
    });
})
    