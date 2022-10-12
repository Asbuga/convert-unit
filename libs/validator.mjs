const validator = {
    
    nameKey: function (string) {
        if (/^[a-z]{1,2}$/gm.test(string)) return true;
        throw Error("Incorrect name of the unit.");
    },

    value: function (num) {
        if (typeof num === 'number') return true;
        return new Error("Invalid unit value.");
    },

    inputData: function (data) {
        try {
            if (validator.nameKey(data.distance.unit) &&
                validator.value(data.distance.value) &&
                validator.nameKey(data.convert_to) === true)
                return true;
        }
        catch (e) {
            if (e instanceof TypeError) {
                console.log(TypeError.message);
                return false;
            }
            else {
                console.log(e.message);
                return false;
            }
        }
    }, 

    expandData: function (data) {
        let flag = true;
        try {
            for (let key in data) {
                if (validNameKey(key) && 
                    validValue(data[key])) {
                        if (flag === false) return false;
                        else return true;
                }
                else {
                    flag = false;
                }
            }
        }
        catch (e) {
            if (e instanceof TypeError) {
                console.log(TypeError.message);
                return false;
            }
            if (e instanceof IncorrectNameError) {
                console.log(IncorrectNameError.message);
                return false;
            }
            if (e instanceof IncorrectValueError) {
                console.log(IncorrectValueError.message);
                return false;
            }
            else {
                console.log(e.message);
                return false;
            }
        }
        return flag;
    } 
}    

export default validator;
