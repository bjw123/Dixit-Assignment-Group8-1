//get the name from input filed
//wrap it in a package and sends it to the server
const newPlayer = () => {
    let text = $('#inputName').val()
    console.log(text);
    let data = {
        name: text,
        storyTold: 0,
        stories: [],
        score: 0
    }
    console.log(data);
    $.ajax({
        url: '/createProfile',
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: 'POST',
        success: (result) => {
            console.log(result);
        }

    })
}
$(document).ready(() => {
    console.log('Ready')
    $('#profileButton').click(newPlayer);
})