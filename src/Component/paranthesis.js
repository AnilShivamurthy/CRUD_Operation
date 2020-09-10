
function check(str) {
    let emptyArray = [];
    let map = {
        '(': ')',
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] === '(') {
            emptyArray.push(str[i]);

        }else {
            let last = emptyArray.pop();
            console.log("a", map[last]);
            if (str[i] !== map[last]) {
                return false
            };
        }
    }
        // if (emptyArray.length !== 0) {
        //     return false
        // };

    return true;
}


