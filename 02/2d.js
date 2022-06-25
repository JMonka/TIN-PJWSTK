var x = ['p0', 'p1', 'p2'];
call_me(x);

function call_me(params) {
    for (i = 0; i < params.length; i++) {
        console.log(params[i])
    }
}