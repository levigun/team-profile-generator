const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it("can get github account via constructor", () => {
        const testValue = "githubUser";
        const e = new Engineer ("Levina", 1, "testing@test.com", testValue);
        expect(e.github).toBe(testValue);
    });

    it("can get github username via getGithub()", () => {
        const testValue = "githubUser";
        const e = new Engineer ("Levina", 1, "testing@test.com", testValue);
        expect(e.getGithub()).toBe(testValue);
    });

    it("should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const e = new Engineer ("Levina", 1, "testing@test.com", testValue);
        expect(e.getRole()).toBe(testValue);
    });
})
    
      
     