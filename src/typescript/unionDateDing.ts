interface Day {
    type: 'Day'
    year: number
    month: number
    day: number
}

interface Week {
    // sogenannter "Union Discrimnator"
    type: 'Week'
    year: number
    week: number
}

export type Wurst = Day | Week

function formatWurst(wurst: Wurst)
{
    if (wurst.type === 'Week') {
        // hier ist wurst vom typen Week
        return `KW ${wurst.week} (${wurst.year})`;
    }

    return `${wurst.month}${wurst.year}${wurst.day}`
}

function funktionInEinerAnderenDatei(day: Extract<Wurst, {type: 'Day'}>) {
    console.log(day.month)
}
