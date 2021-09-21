const rewire = require("rewire")
const script = rewire("./script")
const handleAnimalFormSubmit = script.__get__("handleAnimalFormSubmit")
// @ponicode
describe("handleAnimalFormSubmit", () => {
    test("0", () => {
        let callFunction = () => {
            handleAnimalFormSubmit(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleAnimalFormSubmit(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleAnimalFormSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
