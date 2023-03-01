class HString{
    reverse(strIn){
        return strIn.split("").reverse().join("");
    }
    ucFirst(strIn){
        let arr = strIn.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }
    ucWords(strIn){
        let arr = strIn.split(' ');
        arr = arr.map(e => this.ucFirst(e));
        return arr.join(' ');
    }
}

let str = new HString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'