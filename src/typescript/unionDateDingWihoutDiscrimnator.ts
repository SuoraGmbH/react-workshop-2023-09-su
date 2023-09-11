interface Day {
    year: number
    month: number
    day: number
}

interface Week {
    year: number
    week: number
}

// interface DayOfCalendarWeek {
//     week: number;
//     dayOfWeek: "monday" | "tuesday" // …
// }

export type Wurst = Day | Week // | DayOfCalendarWeek

function wurstIsWeek(wurst: Wurst) : wurst is Week {
    // Mit dem as sagen wir, dass wurst Week ist.
    // D.h. von da an können wir alles mit wurst machen,
    // was wir auch mit Week machen dürften.
    // Das ist nicht korrekt und kann zu Fehlern führen.
    return (wurst as Week).week !== undefined
}

function wurstIsWeek2(wurst: Wurst): wurst is Week {
    return Object.hasOwn(wurst, 'week')
}

function formatWurst(wurst: Wurst)
{
    if (wurstIsWeek(wurst)) {
        // hier ist wurst vom typen Week
        return `KW ${wurst.week} (${wurst.year})`;
    }

    return `${wurst.month}${wurst.year}${wurst.day}`
}
