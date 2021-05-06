var inputs=[];
function get_para_1()
{
    for (var i=1; i<=6; i++)
    {
inputs.push(document.getElementById("para1_input_box_" + i).value);
    } 
document.getElementById("show_paragraph_1"). innerHTML= inputs.join(". ");
}
function get_para_2()
{
    for (var i=1; i<=6; i++)
    {
inputs.push(document.getElementById("para2_input_box_" + i).value);
    } 
document.getElementById("show_paragraph_1"). innerHTML= inputs.join(". ");
}