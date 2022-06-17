/**
 * check the obj is empty or not 
 */
function isObjEmpty(obj){
    // obj has to not undefine, not null
    // obj has to be empty inside
    // obj has to an instance of `Object`
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * sort an array by elements' one property
 * @arr:                the array
 * @propName:           a string, the name of a propery
 * @ascend:             whether we use ascend or descend
 */
function sortObjArrByPropery(arr, propName, ascend=true){
    // set the order to ascend or descend
    let order = ascend ? 1: -1;
    // sort 
    return arr.sort((one, another)=>{
        let onePropVal = one[propName];
        let anotherPropVal = another[propName];
        // if both undefined, unchanged
        if (onePropVal == undefined && anotherPropVal == undefined ){
            return 0;
        }
        // one undefined, select the other
        if (onePropVal == undefined){
            return order*-1;
        }
        if(anotherPropVal == undefined){
            return order*1;
        }

        // both defined
        // for numbers, we just subtract
        if (typeof(onePropVal) == 'number'){
            return (onePropVal - anotherPropVal)*order;
        }
        // for strings, we subtract the ascii for their first letters
        if (typeof(onePropVal) == 'string'){
            return (onePropVal.toLowerCase().charCodeAt(0) - anotherPropVal.toLowerCase().charCodeAt(0))*order;
        }
    });
}

export {isObjEmpty, sortObjArrByPropery};