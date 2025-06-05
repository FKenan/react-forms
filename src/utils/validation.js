export function isEmail(value){
    return value.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
}

export function isNotEmpty(value){
    return value.trim() !=""
}

export function hasMinLength(value,minLength){
    return value.length >=minLength
}

export function isEqual(value,valueToCompare){
    return value ===valueToCompare
}