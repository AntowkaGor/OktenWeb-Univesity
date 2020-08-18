const actionMaker = (startActionsStr, onErr, onOk) => {
	return async response => {
		await later(Math.random() * 1000)
		document.write(`${startActionsStr}<br>`)
		if (Math.random() < 0.3)
			throw new Error(`${onErr}<br>`)
		else
			return `${onOk}<br>`
	}
}

const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));

const myDay = actionMaker(
	"Hello",
	"The day is not started. Goodby",
	"This is my day"
)

const wakeUp = actionMaker(
	"Firstly, I am waking up",
	"Naaagh, I wanna sleep more!!!",
	"It is good day to be not dead!"
)

const cleanTeeth = actionMaker(
	"Secondly, I am cleaning my teeth",
	"Ooops, I can`t clean my teeth, i don`t have toothpaste",
	"Yep, I cleaned my teeth"
)

const haveBreakfast = actionMaker(
	"Then, I am having my breakfast",
	"Yayks, we dont have food",
	"It was realy delicious"
)

const goToSchool = actionMaker(
	"Then then, I am going to school",
	"Goood, it`s raining, I am not gonna go to school",
	"Nagh, another day in school"
)

const getBadMark = actionMaker(
	"At school I try to get a good mark",
	"Yep, smth went wrong in matrix",
	"Another bad mark, nothing new"
)

const comeHome = actionMaker(
	"At the end, of the school hell I am going to home",
	"I don`t have money for bus, shit!",
	"Finaly I am at home"
)

const haveLunch = actionMaker(
	"Then I am gonna have lunch",
	"Yayks, we dont have food",
	"Borsh is my favourite dish, realy"
)

const doHw = actionMaker(
	"After having lunch I start doing my hw",
	"Noice, I don`t have hw :)",
	"What the hell?! Why there is so much hw???"
)

const haveDinner = actionMaker(
	"After doing my hw I am gonna have dinner",
	"Yayks, we dont have food",
	"Eggs, mmm, it`s realy delicious"
)

const goSleep = actionMaker(
	"At the end of the day, I am going to bad",
	"Amm, where is my bad?",
	"Zzzz"
);

(async _ => {
	try {
		document.write(await myDay())
		document.write(await wakeUp())
		document.write(await cleanTeeth())
		document.write(await haveBreakfast())
		document.write(await goToSchool())
		document.write(await getBadMark())
		document.write(await comeHome())
		document.write(await haveLunch())
		document.write(await doHw())
		document.write(await haveDinner())
		document.write(await goSleep())
		document.write("This is my day in a nutshell")
	} catch (err) {
		document.write(err)
	}  
})()
