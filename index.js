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

        'count' : data.count,
        'path' : data.path,
        'posts' : data.posts

    };
    return info;

}

var getPost = (postname,postsInfo) => {

    var path;

    for (let i = 0;i<=postsInfo.count;i++) {

        if (postsInfo.posts[i] == postname)

            path = postsInfo.path[i];
            break;

    }
    return getData(path);

}
