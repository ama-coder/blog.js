// blog.js created by ama
//copy right : GPL-3

var xhttp = new XMLHttpRequest();

var getdata = (path) => {

    xhttp.open('GET', path, false);
    xhttp.send(null);
    return JSON.parse(xhttp.responseText);

}
var getPostsInfo = (path) => {



}

var getPost = (postname,postsInfo) => {

    

}
