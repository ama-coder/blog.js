// blog.js created by ama
//copy right : GPL-3

var xhttp = new XMLHttpRequest();

var getData = (path) => {

    xhttp.open('GET', path, false);
    xhttp.send(null);
    return JSON.parse(xhttp.responseText);

}
var getPostsInfo = (path) => {

    var data = getData(path);

    var info = {

        'count' :Object.keys(data).length,
        'posts' : data

    };
    return info;

}

var getPost = (postname,postsInfo) => {

    return getData(postsInfo.posts[postname]);

}
