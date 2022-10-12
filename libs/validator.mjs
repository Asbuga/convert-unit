const validator = {
    
    nameKey: function (string) {
        if (/^[a-z]{1,2}$/gm.test(string)) return true;
        return false
    },

    value: function (num) {
        if (typeof num === 'number') return true;
        return false
    },

    inputData: function (data) {
        try {
            if (validator.nameKey(data.distance.unit) &&
                validator.value(data.distance.value) &&
                validator.nameKey(data.convert_to) === true)
                return true;
            return false
        }
        catch (e) {
            console.log(e.message);
        }
    }, 

    expandData: function (data) {
        let flag = true;
        try {
            for (let key in data) {
                if (validator.nameKey(key) && 
                    validator.value(data[key])) {
                        if (flag === false) return false;
                        else return true;
                }
                else {
                    flag = false;
                }
            }
        }
        catch (e) {
            console.log(e.message);
        }
        return flag;
    } 
}    

export default validator;
