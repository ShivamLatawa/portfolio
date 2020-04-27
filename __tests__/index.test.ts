import { helloWorld } from '../src/index';

describe('HelloWorld', () => {
    test("should greet", () => {
        console.log = jest.fn();
        
        helloWorld("Chatbot");

        expect(console.log).toHaveBeenCalledWith("Chatbot says Hi!");
    })
});
