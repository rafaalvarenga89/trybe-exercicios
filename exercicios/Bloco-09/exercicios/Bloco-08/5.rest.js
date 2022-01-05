const formatDate = (year, month, day, hour, minute, second) => {
    return `${day}/ ${month}/ ${year} - ${hour}: ${minute}: ${second}`
}

const dateInfo = ['06','04','1989','20','30','00'];

const formattedDate = formatDate(dateInfo[0],dateInfo[1],dateInfo[2],dateInfo[3],dateInfo[4],dateInfo[5])

console.log(formattedDate);

const formattedDate2 = formatDate(...dateInfo)

console.log(formattedDate2);

const formatDate2 = (year, month, day, ...schedule) => {
    return `${day}/ ${month}/ ${year} - ${schedule[0]}: ${schedule[1]}: ${schedule[2]}`
}

const dateInfo2 = ['04','07','2012','23','45','00'];

const formattedDate3 = formatDate2(...dateInfo2)

console.log(formattedDate3);


const formatDate3 = (year, month, day, ...schedule) => {
    return `${day}/ ${month}/ ${year} - ${schedule.join(': ')}`;
}

const dateInfo3 = ['19','11','2021','14','45','00'];

const formattedDate4 = formatDate3(...dateInfo3)

console.log(formattedDate4);