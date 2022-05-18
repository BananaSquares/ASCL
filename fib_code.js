function encode(input,length) {
    var c = 0;
    var i = 1;
    var b = 0;
    while(c <= input) {
        b = c;
        c = find_fib(i);
        i++;
    }
    var output = new Array(i + 2)
    var a = input - b;
    let index = i - 3;
    i = i-3;
    while (input > 0) {
        output[i] = '1';
        input = input - fib[i]
        i = i -1
        while (i >= 0 && fib[i] > input)
        {
            output[i] = '0';
            i = i - 1;
        }
    }
    output[index + 1] = '1';
    let e =(output).join("");
    output = output.filter(n => n)
    var newarr = []
    while( output.length > 3) {
        var a = output.splice(output.length - 4,output.length)
        newarr.push(a.join(""))
    }
    if(output.length > 0) {
        newarr.push(output.join(""))
    }
    var final = []
    newarr.reverse().forEach((num) => {
        final.push(parseInt(num,2).toString(16))
    })
    return [final.join(""),e.length];
}
function decode(number,length) {
    var b = number.split("");
    var binarr = []
    b.forEach((thing) => {
        binarr.push(parseInt(thing,16).toString(2))
    })
    var newstring = ""
    binarr.forEach((thing) => {
        newstring = newstring + thing.padStart(4,'0');
    })
    var newarr = newstring.split("").reverse()
    newarr.splice(length, newstring.length - length)
    var i = 1
    var finalint = 0;
    newarr.splice(0,1)
    newarr.reverse().forEach((char) => {
        if(char == "1" ) {
            finalint = finalint + find_fib(i)
        }
        i++;
    })
    return finalint
}
const fib = new Array(input);
fib[0] = 1;
var find_fib = (number) => {
    var a = 1
    var b = 1
    var c = 0
    if(fib[number - 1]) {
        return fib[number - 1]
    }
    for (var i = 1; i < number; i++) {
        c = a
        a = a + b
        b = c
        fib[i] = a;
    }
    return a;
}
console.log(encode(164))
console.log(decode('543',12))