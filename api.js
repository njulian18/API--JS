const API= "https://rickandmortyapi.com/api/character/";

const data = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json =>{
            printData(json),
            printPagination(json.info)
    })
        .catch(error => { console.error ("error: ", error)})
}

const printData = (datos) => {
    let html = '';
    datos.results.forEach(d => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 14rem;">'
        html += `<img src=${d.image} class="card-img-top">`
        html += '<div class="card-body">'
        html += `<h5 class="card-title">${d.name}</h5>`
        html += `<p class="card-text">${d.gender}</p>`
        html += `<p class="card-text" backgroundColor = "red">${d.status}</p>`
        html += `<p class="card-text">${d.species}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'



    });

    document.getElementById('dato').innerHTML = html
}
const printPagination = (info) =>{

    let preDisable = info.prev == null ? 'disabled' : '';
    let nextDisable = info.next == null ? 'disabled' : '';



    let html = `<li class="page-item ${preDisable} "><a class="page-link" onclick="data('${info.prev}')" >Previous</a></li>`
    html +=    `<li class="page-item ${nextDisable}"><a class="page-link" onclick="data('${info.next}')" >Next</a></li>`
    document.getElementById('pagination').innerHTML = html;
}





data(API)