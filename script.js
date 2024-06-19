const email = 'm.platonov@innopolis.university';

const params = new URLSearchParams();
params.append('email', email);

async function get_id() {
    let response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());

    return  await response.text();
}
function load(data) {

    const dateElement = document.getElementById('date');
    const imgElement = document.getElementById('image');
    const title = document.getElementById('title');

    imgElement.alt = data['alt'];
    imgElement.src = data['img'];
    imgElement.title = data['safe_title'];
    title.textContent = "Title: " + data['safe_title'];

    let year = data['year'];
    let month = parseInt(data['month'],10) - 1;
    let day = parseInt(data['day'], 10);
    const Date1 = new Date(year, month, day);
    dateElement.textContent = "Date: " + Date1.toLocaleDateString();

}
function get_data(res) {
    let url = 'https://fwd.innopolis.university/api/comic?id=' + res
    let response = fetch(url);
    response.then((result) =>
        result = result.json())
        .then(data => load(data));
}
let id = get_id();


id.then((result) =>
    get_data(result));

