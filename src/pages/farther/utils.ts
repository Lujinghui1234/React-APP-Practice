export const ttt = () => {
//用for循环打印100次，每次循环都会随机生成一个新的数字
    const operatorList = ['+', '-', '*', '/'];
    for (let i = 0; i < 100; i++) {
        //0-0.9==>10-99
        let num1 = Math.floor(Math.random() * 90 + 10);
        let num2 = Math.floor(Math.random() * 90 + 10);
        //获取随机运算符的下标；
        const i = Math.floor(Math.random() * operatorList.length);//0-0.9==>0-3
        console.log(`${num1} ${operatorList[i]} ${num2} = `);
    }
};