function sayGoodMorning(country: (keyof (typeof localization))) {
    return <i>{localization[country]}</i>;

}

const localization = {
    de: "Guten Morgen",
    nl: "Goedemorgen",
    en: "Good morning",
    fr: "Bonjour",
    se: "Hey dag",
    es: "¡Hola!"
};

const element = <h1>{sayGoodMorning("es")}, Sara!</h1>;
