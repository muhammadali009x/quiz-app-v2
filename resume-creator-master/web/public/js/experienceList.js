
const optExperience = document.getElementById("optExperience");

let optExperienceOptions = []
for (let i = 3; i <= 40; i++) {
    optExperienceOptions[0] = `<option value="0" selected>Experience</option>`
    optExperienceOptions[1] = `<option value="1">Fresh</option>`
    optExperienceOptions[2] = `<option value="2">Less than 1 Year</option>`
    optExperienceOptions[i] = `<option value=${i + 1}>${i} Year</option>`
}

optExperience.innerHTML = optExperienceOptions;