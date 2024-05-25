function extractFile(path) {
    let fileInfo = path.split('\\').pop(); //pop да си вземем последния елемент
    //console.log(fileInfo) само със сплит; //['C:', 'Internal', 'training-internal', 'Template.asdf.adf.pptx']
    //console.log(fileInfo); //Template.asdf.adf.pptx
    let lastDotIndex = fileInfo.lastIndexOf('.');
    // console.log(lastDotIndex); //17 на 17 индекс се намира последната точка от Template.asdf.adf.pptx
    let fileName = fileInfo.slice(0, lastDotIndex);
    let fileExtension = fileInfo.slice(lastDotIndex + 1); //тук започваме от lastDotIndex докрая, затова няма нуж да да слагаме ',' и нещо си след lastDotIndex; и същи слагаме + 1 защото искат да го принтираме без точката пред pptx
    
    console.log(`File name: ${fileName}`); //File name: Template.asdf.adf
    console.log(`File extension: ${fileExtension}`); //File extension: pptx
}

// extractFile('C:\\Internal\\training-internal\\Template.asdf.adf.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');