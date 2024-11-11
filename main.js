const setAns = (Ans) => document.getElementById("ans").textContent = Ans

const c1 = () => {
    const birthdate = new Date(prompt("date of birth"))
    const neg = new Date().getTime() - birthdate.getTime()
    const days = Math.floor(neg / 86400000)
    const years = Math.floor(neg / 31556952000)
    setAns(`${days} days. ${years} years.`)
}

const c3 = () => {
    const date = new Date(prompt("give the date"))
    const start = new Date(date.getFullYear(), 0, 0)
    const neg = date.getTime() - start.getTime()
    const day = Math.floor(neg / 86400000)
    setAns(`It's the ${day} of the year`)
}

const c4 = () => {
    const n = Number(prompt("give n"))
    const ms = new Date().getTime() + Math.floor(n * 86400000)
    const date = new Date(ms)
    setAns(date.toDateString())
}

const c5 = () => {
    const year = new Date().getFullYear()
    const long = []
    for (let i = 0; i < 12; i++) {
        const day = new Date(year, i, 1)
        for (let j = day; j.getMonth() === i; day.setDate(day.getDate() + 1)) {
            if (day.getDay() === 5) {
                long.push(day.toDateString())
            }
        }
    }
setAns(long.join('. '))
}

const c6 = () => {
    const year = 2023
    const long = []
    for (let i = 0; i < 12; i++) {
        const day = new Date(year, i, 1)
        for (let j = day; j.getMonth() === i; day.setDate(day.getDate() + 1)) {
            if (day.getDay() === 3) {
                long.push(day.toDateString())
            }
        }
    }
setAns(long.join('. '))
}

const c7 = () => {
    const a = new Date(prompt("first date"))
    const b = new Date(prompt("secont date"))
    const neg = Math.abs(a.getTime() - b.getTime())
    const days = Math.floor(neg / 86400000)
    setAns(`${days} days difference`)
}

const c8 = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const neg = end.getTime() - now.getTime()
    const hours = Math.floor(neg / 3600000);
    const mins = Math.floor((neg % 3600000) / 60000)
    setAns(`${hours} hours and ${mins} mins remaining until EOD`)
}