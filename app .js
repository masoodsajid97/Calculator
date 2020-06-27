function getNumber(num)
{
    var abc = document.getElementById("abc");
    abc.value += num;
}

function empty()
{
    var abc = document.getElementById("abc");
    abc.value = "";
}

function getResult()
{
    var abc = document.getElementById("abc");
    abc.value = eval(abc.value);
}
