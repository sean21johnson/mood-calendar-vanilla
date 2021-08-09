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
	// {
	// 	month: "February",
	// 	startDay: "Fri",
	// 	dayCount: 28,
	// },
	// {
	// 	month: "March",
	// 	startDay: "Fri",
	// 	dayCount: 31,
	// },
	// {
	// 	month: "April",
	// 	startDay: "Mon",
	// 	dayCount: 30,
	// },
	// {
	// 	month: "May",
	// 	startDay: "Wed",
	// 	dayCount: 31,
	// },
	// {
	// 	month: "June",
	// 	startDay: "Sat",
	// 	dayCount: 30,
	// },
	// {
	// 	month: "July",
	// 	startDay: "Mon",
	// 	dayCount: 31,
	// },
	// {
	// 	month: "August",
	// 	startDay: "Thu",
	// 	dayCount: 31,
	// },
	// {
	// 	month: "September",
	// 	startDay: "Sun",
	// 	dayCount: 30,
	// },
	// {
	// 	month: "October",
	// 	startDay: "Tue",
	// 	dayCount: 31,
	// },
	// {
	// 	month: "November",
	// 	startDay: "Fri",
	// 	dayCount: 30,
	// },
	// {
	// 	month: "December",
	// 	startDay: "Sun",
	// 	dayCount: 31,
	// },
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
	let calendarHTML = "";

	monthsData.forEach((month) => {
		calendarHTML += `<div class="table_container"><table>
            <thead>
                <tr>
                    <th class="month_header">${month.month}</th>
                </tr>
            </thead>
            `;

		let dayNamesHTML = buildDayNames();

		calendarHTML += dayNamesHTML;

		let dayNumbersHTML = buildDayNumbers(month.startDay, month.dayCount);

        // console.log(dayNumbersHTML)

		calendarHTML += dayNumbersHTML;

		calendarHTML += `</tbody></table></div>`;
	});

	calendarSection.innerHTML = calendarHTML;

	console.log(calendarSection.innerHTML);
}

function buildDayNumbers(monthStartDay, monthDayCount) {
	let count = 0;
	let dayCountHTML = document.createElement("tbody");
	let introSubHTML = `<tr class="date">`;
	let closeSubHTML = `</tr>`;

	while (count < monthDayCount) {
		if (monthStartDay === "Sun" && count === 0) {
			let newTr = document.createElement("tr");
			let newDay = document.createElement("td");
			newDay.innerText = count + 1;
			newTr.appendChild(newDay);

			newDay.addEventListener("click", () => {
				console.log("clicked");
			});

			dayCountHTML.appendChild(newTr);
			count++;
		} else if (monthStartDay === "Mon" && count === 0) {
			let newTr = document.createElement("tr");

			let emptyDay1 = document.createElement("td");
			emptyDay1.innerText = "";

			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);
			newTr.appendChild(newDay);

			newDay.addEventListener("click", () => {
				console.log("clicked");
			});

			dayCountHTML.appendChild(newTr);
			count++;
		} else if (monthStartDay === "Tue" && count === 0) {
			let newTr = document.createElement("tr");
            newTr.classList.add("date")

			let emptyDay1 = document.createElement("td");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.innerText = "";

			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(newDay);

			// newDay.addEventListener("click", () => {
			// 	console.log("clicked");
			// });

            console.log(newDay)

            newDay.addEventListener("click", handleClick)

			dayCountHTML.appendChild(newTr);
			count++;
		} else if (monthStartDay === "Wed" && count === 0) {
			let newTr = document.createElement("tr");

			let emptyDay1 = document.createElement("td");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.innerText = "";

			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(newDay);

			newDay.addEventListener("click", () => {
				console.log("clicked");
			});

			dayCountHTML.appendChild(newTr);
			count++;
		} else if (monthStartDay === "Thu" && count === 0) {
			let newTr = document.createElement("tr");

			let emptyDay1 = document.createElement("td");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.innerText = "";
			let emptyDay4 = document.createElement("td");
			emptyDay4.innerText = "";

			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(emptyDay4);
			newTr.appendChild(newDay);

			newDay.addEventListener("click", () => {
				console.log("clicked");
			});

			dayCountHTML.appendChild(newTr);
			count++;
		} else if (monthStartDay === "Fri" && count === 0) {
			let newTr = document.createElement("tr");

			let emptyDay1 = document.createElement("td");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.innerText = "";
			let emptyDay4 = document.createElement("td");
			emptyDay4.innerText = "";
			let emptyDay5 = document.createElement("td");
			emptyDay5.innerText = "";

			let newDay = document.createElement("td");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(emptyDay4);
			newTr.appendChild(emptyDay5);
			newTr.appendChild(newDay);

			newDay.addEventListener("click", () => {
				console.log("clicked");
			});

			dayCountHTML.appendChild(newTr);
			count++;
		}else if (monthStartDay === "Sat" && count === 0) {
			let newTr = document.createElement("tr");

			let emptyDay1 = document.createElement("td");
			emptyDay1.innerText = "";
			let emptyDay2 = document.createElement("td");
			emptyDay2.innerText = "";
			let emptyDay3 = document.createElement("td");
			emptyDay3.innerText = "";
			let emptyDay4 = document.createElement("td");
			emptyDay4.innerText = "";
			let emptyDay5 = document.createElement("td");
			emptyDay5.innerText = "";
            let emptyDay6 = document.createElement("td");
			emptyDay6.innerText = "";

			let newDay = document.createElement("button");
			newDay.innerText = count + 1;

			newTr.appendChild(emptyDay1);
			newTr.appendChild(emptyDay2);
			newTr.appendChild(emptyDay3);
			newTr.appendChild(emptyDay4);
			newTr.appendChild(emptyDay5);
            newTr.appendChild(emptyDay6);
			newTr.appendChild(newDay);

			// newDay.addEventListener("click", () => {
			// 	console.log("clicked");
			// });



			dayCountHTML.appendChild(newTr);
			count++;
        }

        count++;

	}

	return dayCountHTML.innerHTML;
}

function handleClick() {
    console.log(2)
}

// Loop through the days of the week and populate the HTML in a table
function buildDayNames() {
	let dayNameHTML = `<tbody><tr class="days">`;

	daysOfWeek.map(
		(day) =>
			(dayNameHTML += `
                <th class="day_of_week">${day}</th>
    `)
	);

	return dayNameHTML;
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
