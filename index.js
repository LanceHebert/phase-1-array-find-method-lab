
function superbowlWin(array)
{
    const finder = array.find(function(value){
        if(value.result === "W")
        {
           return value;     
        }
    }) 
       
    if(finder !== undefined)
    {
        return finder.year;
    }
       
}



