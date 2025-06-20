
const translations = {
    en: {
        finance: "Finance",
        history: "History",
        nature: "Nature",
        tech: "Technology",
        about: "About",
        welcome: "Welcome to Conversations with AI. Choose a section to read."
    },
    ru: {
        finance: "Финансы",
        history: "История",
        nature: "Природа",
        tech: "Технологии",
        about: "О проекте",
        welcome: "Добро пожаловать в Разговоры с ИИ. Выберите раздел для чтения."
    },
    de: {
        finance: "Finanzen",
        history: "Geschichte",
        nature: "Natur",
        tech: "Technologie",
        about: "Über das Projekt",
        welcome: "Willkommen bei Gespräche mit KI. Wählen Sie einen Bereich."
    },
    fr: {
        finance: "Finance",
        history: "Histoire",
        nature: "Nature",
        tech: "Technologie",
        about: "À propos",
        welcome: "Bienvenue sur Conversations avec l'IA. Choisissez une section."
    },
    es: {
        finance: "Finanzas",
        history: "Historia",
        nature: "Naturaleza",
        tech: "Tecnología",
        about: "Sobre el proyecto",
        welcome: "Bienvenido a Conversaciones con IA. Elige una sección."
    },
    cs: {
        finance: "Finance",
        history: "Historie",
        nature: "Příroda",
        tech: "Technologie",
        about: "O projektu",
        welcome: "Vítejte na stránce Rozhovory s AI. Vyberte sekci pro čtení."
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
