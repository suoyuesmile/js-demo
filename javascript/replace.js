function replaceStr(originStr) {
originStr.replace(\(/[/d*/|/S*/])\, () => {})
}

replaceStr('ab[12|cd]ef]')