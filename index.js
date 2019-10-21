function goToCCI() {
    //window.open('https://drexel.edu/cci/');
}


/**
 * Week 6
 */
function getBooks() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/getBooks");
    xhr.onreadystatechange=function() {
        myCallBack(xhr);
      };
    xhr.send(null);   
}

function myCallBack(xhr) {
    if (xhr.readyState==4 && xhr.status==200) {
        let table = document.getElementById('book-list');
        table.innerHTML = `<tr>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Available?</th>
        </tr>` + xhr.responseText;
    }
}