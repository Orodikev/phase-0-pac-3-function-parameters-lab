function introduction(name) {
    return `Hello, my name is ${name}.`;
}

console.log(introduction("Orodi"));
function introductionWithLanguage(name, language) {
    return `Hello, my name is ${name} and I am learning to program in ${language}.`;
    
}

console.log(introductionWithLanguage("Orodi", "JavaScript"));
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hello, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Orodi"));
console.log(introductionWithLanguageOptional("Orodi", "Python"));