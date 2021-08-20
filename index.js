const dateParser = oldDate=>`${oldDate.split("-")[1]}/${oldDate.split("-")[2]}/${oldDate.split("-")[0]}/`

console.log(dateParser("1995-19-05"))
