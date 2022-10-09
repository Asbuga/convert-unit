const validator = {
    
    _nameKey: function (string) {
        if (/^[a-z]{1,2}$/gm.test(string))
            return true;
        const IncorrectNameError = new Error("Incorrect name of the unit.");
        console.log(IncorrectNameError.message);
        return false;
    },

    _value: function (num) {
        if (typeof num === 'number')
            return true;
        const IncorrectValueError = new Error("Invalid unit value.");
        console.log(IncorrectValueError.message);
        return false;
    },

    inputData: function (data) {
        try {
            if (validNameKey(data.distance.unit) &&
                validValue(data.distance.value) &&
                validNameKey(data.convert_to))
                return true;
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
        return false;
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
