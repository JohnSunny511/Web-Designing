function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+=val
}

function equalClick()
{
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById('screen').value=res
}

function clearDisplay()
{
    document.getElementById("screen").value=""

}

