const body = getComputedStyle(document.body)
const colorNeutralWhite = body.getPropertyValue('--clr-neutral-white')
const colorLightGrey = body.getPropertyValue('--clr-neutral-light-grey')
const colorMediumGrey = body.getPropertyValue('--clr-neutral-medium-grey')
const colorVeryDarkBlue = body.getPropertyValue('--clr-neutral-very-dark-blue')

const ratingSubmitButton = document.querySelector('.ratings .submit-btn')

const ratings = document.querySelector('.ratings input')

function displayThankYou(e) {
    const rating = document.querySelector('.ratings .selections input[name="rating"]:checked').value

    document.querySelector('.component').classList.add('hide')
    document.querySelector('.thank-you').classList.remove('hide')

    document.querySelector('.thank-you .selection').textContent = `You selected ${rating} out of 5` 

}

ratingSubmitButton.addEventListener('click', displayThankYou)