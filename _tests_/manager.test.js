const Manager = require('../lib/manager');

describe('Manager', () => {
    it("can get office number via constructor", () => {
        const testValue = "012345678";
        const e = new Manager ("Levina", 1, "testing@test.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });

    it("should return \"Manager\"", () => {
        const testValue = "Manager";
        const e = new Manager ("Levina", 1, "testing@test.com", testValue);
        expect(e.getRole()).toBe(testValue);
    });
})