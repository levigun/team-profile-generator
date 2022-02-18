const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        // positive test for each requirements
        // arrange, accts, and assert
        it("should contain employee", () => {
            const e = new Employee();
            expect(typeof(e)).toBe("obejct");
        });

        it("can set a name via constructor arguments", () => {
            const name = "Levina";
            const e = new Employee(name);
            expect(e.name).toBe(name);
        });

        it("can set an id via constructor argument", () => {
            const testValue = 100;
            const e = new Employee("Levina", testValue);
            expect(e.id).toBe(testValue);
        });

        it("can set an email via constructor argument", () => {
            const testValue = "testing@test.com";
            const e = new Employee("Levina", 1, testValue);
            expect(e.email).toBe(testValue);
        });

        it("should get name via getName()", () => {
            const testValue = "Levina";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });

        it("should get name via getId()", () => {
            const testValue = 100;
            const e = new Employee("Levina", testValue);
            expect(e.getId()).toBe(testValue);
        });

        it("should get name via getEmail()", () => {
            const testValue = "testing@test.com";
            const e = new Employee("Levina", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });

        it("should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Levina", 1, "testing@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    })
})