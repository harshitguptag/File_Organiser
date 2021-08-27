function organiseFn(dirPath)
{
    // Algorithm.
    // 1. input -> directory path.
    let destPath;
    if(dirPath==undefined)
    {
        destPath = process.cwd();
        return;
    }
    else 
    {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist == true)
        {
            // 2. create -> organised file dir
            destPath = path.join(dirPath,"Organised_Files");
            if(fs.existsSync(destPath)== false)
            {
                fs.mkdirSync(destPath);
            }               
        }
        else 
        {
            console.log("Enter valid Path.");
            return;
        }
    }
    organiseHelper(dirPath, destPath);
}
// 3. identify category of each file in the given directory
function organiseHelper(src, dest)
{
    let childNames=fs.readdirSync(src);
    //console.log(childNames);
    for (let i=0; i<childNames.length; i++)
    {
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile==true)
        {
            //console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i],"belongs to ---> ", category);
            sendFiles(childAddress,dest,category);
        }
    }
} 
function getCategory(name)
{
    let ext= path.extname(name);
    console.log(ext);
    ext = ext.slice(1);
    for (let type in types)
    {
        let cTypesArray = types[type];
        for (let i=0;i<cTypesArray.length;i++)
        {
            if(ext ==cTypesArray[i])
                return type;
        }
    }
    return "others";
}
// 4. transfer file to organised directory into the required category folder
function sendFiles(srcFilePath, dest, category)
{
    let categoryPath = path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}

module.exports = {
    organiseKey = organiseFn
}