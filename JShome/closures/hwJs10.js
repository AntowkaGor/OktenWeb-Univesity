// Необхідно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));


btn.onclick = async function (resolve, reject) {
    let text = document.getElementById('text');
    let btn = document.getElementById('btn')
    let readyText = document.getElementById('readyText')

    let touchText = text.value.split('')
    let random = Math.random();
    random = random < 0.1 ? 0.1 : random > 0.5 ? 0.5 : random;
    for (text of touchText) {
        await later(random * 1000)
        readyText.innerText += text
    }

}

