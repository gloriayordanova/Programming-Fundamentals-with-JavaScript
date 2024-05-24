function extractFile(path) {
    let fileInfo = path.split('\\');
    console.log(fileInfo); //['C:', 'Internal', 'training-internal', 'Template.pptx']
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');