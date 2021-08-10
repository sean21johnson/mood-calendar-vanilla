// TARGET ELEMENTS
const laughBtn = document.getElementById("laugh");
const smileBtn = document.getElementById("smile");
const mehBtn = document.getElementById("meh");
const frownBtn = document.getElementById("frown");
const sadBtn = document.getElementById("sad");
const calendarSection = document.getElementById("calendar_element");

const moodBtns = document.getElementsByClassName("moodBtn");

// ADDITIONAL VARIABLES
let currentMood = "";
// laugh, smile, meh, frown, sad
const theMoods = ["laugh", "smile", "meh", "frown", "sad"];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const monthsData = [
	{
		month: "January",
		startDay: "Tue",
		dayCount: 31,
	},
	{
		month: "February",
		startDay: "Fri",
		dayCount: 28,
	},
	{
		month: "March",
		startDay: "Fri",
		dayCount: 31,
	},
	{
		month: "April",
		startDay: "Mon",
		dayCount: 30,
	},
	{
		month: "May",
		startDay: "Wed",
		dayCount: 31,
	},
	{
		month: "June",
		startDay: "Sat",
		dayCount: 30,
	},
	{
		month: "July",
		startDay: "Mon",
		dayCount: 31,
	},
	{
		month: "August",
		startDay: "Thu",
		dayCount: 31,
	},
	{
		month: "September",
		startDay: "Sun",
		dayCount: 30,
	},
	{
		month: "October",
		startDay: "Tue",
		dayCount: 31,
	},
	{
		month: "November",
		startDay: "Fri",
		dayCount: 30,
	},
	{
		month: "December",
		startDay: "Sun",
		dayCount: 31,
	},
];
const daysInYear = monthsData.reduce(
	(accumulator, currentValue) => accumulator + currentValue.dayCount,
	0
);

// FUNCTIONS
function setSmileDisplay() {
	for (let button of moodBtns) {
		if (button.classList.contains(currentMood)) {
			button.classList.add("border");
		} else if (button.classList.contains("border")) {
			button.classList.remove("border");
		}
	}
}

// EVENT LISTENERS
function buildTables() {
	monthsData.forEach((month) => {
		const newTableContainer = document.createElement("div");
		newTableContainer.classList.add("table_container");

		const newTable = document.createElement("table");
		const newTHead = document.createElement("thead");
		const newTr = document.createElement("tr");
		const newTh = document.createElement("th");

		newTh.classList.add("month_header");

		newTh.innerText = `${month.month}`;

		newTr.appendChild(newTh);
		newTHead.appendChild(newTr);
		newTable.appendChild(newTHead);
		newTableContainer.appendChild(newTable);

		calendarSection.appendChild(newTableContainer);

		const dayNamesChildElement = buildDayNames();

		newTable.appendChild(dayNamesChildElement);

		const individualDays = buildDayNumbers(month.startDay, month.dayCount);

		const {
			newTr: el1,
			newTr2: el2,
			newTr3: el3,
			newTr4: el4,
			newTr5: el5,
			newTr6: el6,
		} = individualDays;

		newTable.appendChild(el1);
		newTable.appendChild(el2);
		newTable.appendChild(el3);
		newTable.appendChild(el4);
		newTable.appendChild(el5);
		newTable.appendChild(el6);
	});
}

function updateClassList(currentEl) {

	if (currentMood === "smile") {
		currentEl.classList.add("theSmile");
	} else if (currentMood === "laugh") {
		currentEl.classList.add("theLaugh");
	} else if (currentMood === "frown") {
		currentEl.classList.add("theFrown");
	} else if (currentMood === "meh") {
		currentEl.classList.add("theMeh");
	} else {
		currentEl.classList.add("theSad");
	}

	if (currentMood !== "smile" && currentEl.classList.contains("theSmile")) {
		currentEl.classList.remove("theSmile");
	} else if (
		currentMood !== "laugh" &&
		currentEl.classList.contains("theLaugh")
	) {
		currentEl.classList.remove("theLaugh");
	} else if (currentMood !== "meh" && currentEl.classList.contains("theMeh")) {
		currentEl.classList.remove("theMeh");
	} else if (
		currentMood !== "frown" &&
		currentEl.classList.contains("theFrown")
	) {
		currentEl.classList.remove("theFrown");
	} else if (currentMood !== "sad" && currentEl.classList.contains("theSad")) {
		currentEl.classList.remove("theSad");
	}
}

function buildDayNumbers(monthStartDay, monthDayCount) {
	let count = 0;

	const newTr = document.createElement("tr");
	const newTr2 = document.createElement("tr");
	const newTr3 = document.createElement("tr");
	const newTr4 = document.createElement("tr");
	const newTr5 = document.createElement("tr");
	const newTr6 = document.createElement("tr");

	newTr.classList.add("date");

	while (count < monthDayCount) {
		if (monthStartDay === "Sun" && count === 0) {
			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			let newCount = 0;

			while (newCount < 7) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}
			count += 7;
		} else if (monthStartDay === "Mon" && count === 0) {
			let emptyDay1 = document.createElement("td");
			emptyDay1.classList.add("blank");
			emptyDay1.innerText = "";

			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);

			let newCount = 0;

			while (newCount < 6) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}

			count += 6;
		} else if (monthStartDay === "Tue" && count === 0) {
			let emptyDay1 = document.createElement("td");
			emptyDay1.classList.add("blank");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.classList.add("blank");
			emptyDay2.innerText = "";

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);

			let newCount = 0;

			while (newCount < 5) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}

			count += 5;
		} else if (monthStartDay === "Wed" && count === 0) {
			let emptyDay1 = document.createElement("td");
			emptyDay1.classList.add("blank");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.classList.add("blank");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.classList.add("blank");
			emptyDay3.innerText = "";

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);

			let newCount = 0;

			while (newCount < 4) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}

			count += 4;
		} else if (monthStartDay === "Thu" && count === 0) {
			let emptyDay1 = document.createElement("td");
			emptyDay1.classList.add("blank");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.classList.add("blank");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.classList.add("blank");
			emptyDay3.innerText = "";
			let emptyDay4 = document.createElement("td");
			emptyDay4.classList.add("blank");
			emptyDay4.innerText = "";

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(emptyDay4);

			let newCount = 0;

			while (newCount < 3) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}

			count += 3;
		} else if (monthStartDay === "Fri" && count === 0) {
			let emptyDay1 = document.createElement("td");
			emptyDay1.classList.add("blank");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.classList.add("blank");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.classList.add("blank");
			emptyDay3.innerText = "";
			let emptyDay4 = document.createElement("td");
			emptyDay4.classList.add("blank");
			emptyDay4.innerText = "";
			let emptyDay5 = document.createElement("td");
			emptyDay5.classList.add("blank");
			emptyDay5.innerText = "";

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(emptyDay4);
			newTr.appendChild(emptyDay5);

			let newCount = 0;

			while (newCount < 2) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}
			count += 2;
		} else if (monthStartDay === "Sat" && count === 0) {
			let emptyDay1 = document.createElement("td");
			emptyDay1.classList.add("blank");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.classList.add("blank");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.classList.add("blank");
			emptyDay3.innerText = "";
			let emptyDay4 = document.createElement("td");
			emptyDay4.classList.add("blank");
			emptyDay4.innerText = "";
			let emptyDay5 = document.createElement("td");
			emptyDay5.classList.add("blank");
			emptyDay5.innerText = "";
			let emptyDay6 = document.createElement("td");
			emptyDay6.classList.add("blank");
			emptyDay6.innerText = "";

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(emptyDay4);
			newTr.appendChild(emptyDay5);
			newTr.appendChild(emptyDay6);

			let newCount = 0;

			while (newCount < 1) {
				let newDay = document.createElement("td");

				newDay.innerText = newCount + 1;

				newTr.appendChild(newDay);

				newDay.addEventListener("click", function () {
					updateClassList(newDay);
				});

				newCount++;
			}

			count += 1;
		}

		// After we break out of the first row of numbers, we need to start another row
		// Problem is that we are at different counts depending on which day we started

		let newCount = count + 7;

		while (count < newCount && newCount < 15) {
			const newDay = document.createElement("td");

			newDay.innerText = count + 1;

			newTr2.appendChild(newDay);

            newDay.addEventListener("click", function () {
                updateClassList(newDay);
            });

			count++;
		}

		while (count < newCount && newCount < 22) {
			const newDay = document.createElement("td");

			newDay.innerText = count + 1;

			newTr3.appendChild(newDay);

            newDay.addEventListener("click", function () {
                updateClassList(newDay);
            });

			count++;
		}

		while (count < newCount && newCount < 29) {
			const newDay = document.createElement("td");

			newDay.innerText = count + 1;

			newTr4.appendChild(newDay);

            newDay.addEventListener("click", function () {
                updateClassList(newDay);
            });

			count++;
		}

		while (count < newCount && newCount < 36 && count < monthDayCount) {
			const newDay = document.createElement("td");

			newDay.innerText = count + 1;

			newTr5.appendChild(newDay);

            newDay.addEventListener("click", function () {
                updateClassList(newDay);
            });

			count++;
		}

		while (count < newCount && newCount < 43 && count < monthDayCount) {
			const newDay = document.createElement("td");

			newDay.innerText = count + 1;

			newTr6.appendChild(newDay);

            newDay.addEventListener("click", function () {
                updateClassList(newDay);
            });

			count++;
		}
		count++;
	}

	return { newTr, newTr2, newTr3, newTr4, newTr5, newTr6 };
}

// Loop through the days of the week and populate the HTML in a table
function buildDayNames() {
	const newTBody = document.createElement("tbody");
	const newTr = document.createElement("tr");
	newTr.classList.add("days");
	newTBody.appendChild(newTr);

	daysOfWeek.map((day) => {
		const newDay = document.createElement("th");
		newDay.classList.add("day_of_week");
		newDay.innerText = day;

		newTr.appendChild(newDay);

	});

	return newTBody;
}

// Listeners on the buttons to change the classes
laughBtn.addEventListener("click", () => {
	currentMood = "laugh";
	setSmileDisplay();
});

smileBtn.addEventListener("click", () => {
	currentMood = "smile";
	setSmileDisplay();
});

mehBtn.addEventListener("click", () => {
	currentMood = "meh";
	setSmileDisplay();
});

frownBtn.addEventListener("click", () => {
	currentMood = "frown";
	setSmileDisplay();
});

sadBtn.addEventListener("click", () => {
	currentMood = "sad";
	setSmileDisplay();
});

buildTables();
