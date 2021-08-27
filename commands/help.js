function helpFn(dirPath)
{
    console.log(`List of all the commands :-
                             node main.js tree "diectorypath"
                             node main.js organise "diectorypath"
                             node main.js help`);
}
module.exports={
    helpKey: helpFn
}