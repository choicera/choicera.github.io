// Klaro! Consent Manager Configuration
window.klaroConfig = {
    version: 1,
    elementID: 'klaro',
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    stylePrefix: 'klaro',
    additionalClass: 'klaro-bottom-right',
    theme: 'light',
    
    // Auto-detect language from URL path
    lang: function() {
        const path = window.location.pathname;
        if (path.startsWith('/de/')) return 'de';
        if (path.startsWith('/fr/')) return 'fr';
        if (path.startsWith('/nl/')) return 'nl';
        if (path.startsWith('/es/')) return 'es';
        if (path.startsWith('/it/')) return 'it';
        if (path.startsWith('/ru/')) return 'ru';
        if (path.startsWith('/pl/')) return 'pl';
        return 'en';
    }(),

    // Translations
    translations: {
        en: {
            consentModal: {
                title: 'Cookie Settings',
                description: 'We use cookies and similar technologies to improve your experience and analyze website usage. Please choose your preferences below.',
            },
            consentNotice: {
                title: 'Cookie Consent',
                description: 'We use cookies to enhance your experience and analyze website usage. {learnMore}',
                learnMore: 'Learn more',
                testing: 'Testing mode!',
                changeSettings: 'Change settings'
            },
            purposes: {
                analytics: 'Analytics',
                functional: 'Functional'
            },
            purposeItem: {
                service: 'Service'
            },
            close: 'Close',
            save: 'Save settings',
            acceptAll: 'Accept all',
            declineAll: 'Decline all',
            app: {
                disableAll: {
                    title: 'Toggle all apps',
                    description: 'Use this switch to enable/disable all apps.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Required',
                    description: 'This application is always loaded (required)'
                },
                purposes: 'Purposes',
                purpose: 'Purpose'
            },
            poweredBy: 'Powered by Klaro!'
        },
        de: {
            consentModal: {
                title: 'Cookie-Einstellungen',
                description: 'Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern und die Website-Nutzung zu analysieren. Bitte wählen Sie Ihre Präferenzen unten aus.',
            },
            consentNotice: {
                title: 'Cookie-Zustimmung',
                description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und die Website-Nutzung zu analysieren. {learnMore}',
                learnMore: 'Mehr erfahren',
                testing: 'Test-Modus!',
                changeSettings: 'Einstellungen ändern'
            },
            purposes: {
                analytics: 'Analytik',
                functional: 'Funktional'
            },
            purposeItem: {
                service: 'Service'
            },
            close: 'Schließen',
            save: 'Einstellungen speichern',
            acceptAll: 'Alle akzeptieren',
            declineAll: 'Alle ablehnen',
            app: {
                disableAll: {
                    title: 'Alle Apps umschalten',
                    description: 'Verwenden Sie diesen Schalter, um alle Apps zu aktivieren/deaktivieren.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Erforderlich',
                    description: 'Diese Anwendung wird immer geladen (erforderlich)'
                },
                purposes: 'Zwecke',
                purpose: 'Zweck'
            },
            poweredBy: 'Powered by Klaro!'
        },
        es: {
            consentModal: {
                title: 'Configuración de Cookies',
                description: 'Utilizamos cookies y tecnologías similares para mejorar su experiencia y analizar el uso del sitio web. Por favor, elija sus preferencias a continuación.',
            },
            consentNotice: {
                title: 'Consentimiento de Cookies',
                description: 'Utilizamos cookies para mejorar su experiencia y analizar el uso del sitio web. {learnMore}',
                learnMore: 'Saber más',
                testing: '¡Modo de prueba!',
                changeSettings: 'Cambiar configuración'
            },
            purposes: {
                analytics: 'Analíticas',
                functional: 'Funcional'
            },
            purposeItem: {
                service: 'Servicio'
            },
            close: 'Cerrar',
            save: 'Guardar configuración',
            acceptAll: 'Aceptar todo',
            declineAll: 'Rechazar todo',
            app: {
                disableAll: {
                    title: 'Alternar todas las apps',
                    description: 'Use este interruptor para habilitar/deshabilitar todas las apps.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Requerido',
                    description: 'Esta aplicación siempre se carga (requerida)'
                },
                purposes: 'Propósitos',
                purpose: 'Propósito'
            },
            poweredBy: 'Powered by Klaro!'
        },
        fr: {
            consentModal: {
                title: 'Paramètres des Cookies',
                description: 'Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience et analyser l\'utilisation du site web. Veuillez choisir vos préférences ci-dessous.',
            },
            consentNotice: {
                title: 'Consentement aux Cookies',
                description: 'Nous utilisons des cookies pour améliorer votre expérience et analyser l\'utilisation du site web. {learnMore}',
                learnMore: 'En savoir plus',
                testing: 'Mode test !',
                changeSettings: 'Modifier les paramètres'
            },
            purposes: {
                analytics: 'Analytiques',
                functional: 'Fonctionnel'
            },
            purposeItem: {
                service: 'Service'
            },
            close: 'Fermer',
            save: 'Sauvegarder les paramètres',
            acceptAll: 'Tout accepter',
            declineAll: 'Tout refuser',
            app: {
                disableAll: {
                    title: 'Basculer toutes les apps',
                    description: 'Utilisez cet interrupteur pour activer/désactiver toutes les apps.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Requis',
                    description: 'Cette application est toujours chargée (requise)'
                },
                purposes: 'Objectifs',
                purpose: 'Objectif'
            },
            poweredBy: 'Powered by Klaro!'
        },
        it: {
            consentModal: {
                title: 'Impostazioni Cookie',
                description: 'Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza e analizzare l\'utilizzo del sito web. Scegli le tue preferenze qui sotto.',
            },
            consentNotice: {
                title: 'Consenso Cookie',
                description: 'Utilizziamo cookie per migliorare la tua esperienza e analizzare l\'utilizzo del sito web. {learnMore}',
                learnMore: 'Scopri di più',
                testing: 'Modalità test!',
                changeSettings: 'Modifica impostazioni'
            },
            purposes: {
                analytics: 'Analitici',
                functional: 'Funzionale'
            },
            purposeItem: {
                service: 'Servizio'
            },
            close: 'Chiudi',
            save: 'Salva impostazioni',
            acceptAll: 'Accetta tutto',
            declineAll: 'Rifiuta tutto',
            app: {
                disableAll: {
                    title: 'Attiva/disattiva tutte le app',
                    description: 'Usa questo interruttore per abilitare/disabilitare tutte le app.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Richiesto',
                    description: 'Questa applicazione è sempre caricata (richiesta)'
                },
                purposes: 'Scopi',
                purpose: 'Scopo'
            },
            poweredBy: 'Powered by Klaro!'
        },
        ru: {
            consentModal: {
                title: 'Настройки Cookie',
                description: 'Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта и анализа использования веб-сайта. Пожалуйста, выберите свои предпочтения ниже.',
            },
            consentNotice: {
                title: 'Согласие на Cookie',
                description: 'Мы используем файлы cookie для улучшения вашего опыта и анализа использования веб-сайта. {learnMore}',
                learnMore: 'Узнать больше',
                testing: 'Тестовый режим!',
                changeSettings: 'Изменить настройки'
            },
            purposes: {
                analytics: 'Аналитика',
                functional: 'Функциональные'
            },
            purposeItem: {
                service: 'Сервис'
            },
            close: 'Закрыть',
            save: 'Сохранить настройки',
            acceptAll: 'Принять все',
            declineAll: 'Отклонить все',
            app: {
                disableAll: {
                    title: 'Переключить все приложения',
                    description: 'Используйте этот переключатель для включения/отключения всех приложений.'
                },
                optOut: 'Отказаться',
                required: {
                    title: 'Обязательно',
                    description: 'Это приложение всегда загружается (обязательно)'
                },
                purposes: 'Цели',
                purpose: 'Цель'
            },
            poweredBy: 'Powered by Klaro!'
        },
        nl: {
            consentModal: {
                title: 'Cookie-instellingen',
                description: 'We gebruiken cookies en vergelijkbare technologieën om uw ervaring te verbeteren en websitegebruik te analyseren. Kies hieronder uw voorkeuren.',
            },
            consentNotice: {
                title: 'Cookie-toestemming',
                description: 'We gebruiken cookies om uw ervaring te verbeteren en websitegebruik te analyseren. {learnMore}',
                learnMore: 'Meer informatie',
                testing: 'Testmodus!',
                changeSettings: 'Instellingen wijzigen'
            },
            purposes: {
                analytics: 'Analytiek',
                functional: 'Functioneel'
            },
            purposeItem: {
                service: 'Service'
            },
            close: 'Sluiten',
            save: 'Instellingen opslaan',
            acceptAll: 'Alles accepteren',
            declineAll: 'Alles weigeren',
            app: {
                disableAll: {
                    title: 'Alle apps in-/uitschakelen',
                    description: 'Gebruik deze schakelaar om alle apps in/uit te schakelen.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Vereist',
                    description: 'Deze applicatie wordt altijd geladen (vereist)'
                },
                purposes: 'Doelen',
                purpose: 'Doel'
            },
            poweredBy: 'Powered by Klaro!'
        },
        pl: {
            consentModal: {
                title: 'Ustawienia plików cookie',
                description: 'Używamy plików cookie i podobnych technologii, aby poprawić Twoje doświadczenia i analizować korzystanie z witryny. Wybierz swoje preferencje poniżej.',
            },
            consentNotice: {
                title: 'Zgoda na pliki cookie',
                description: 'Używamy plików cookie, aby poprawić Twoje doświadczenia i analizować korzystanie z witryny. {learnMore}',
                learnMore: 'Dowiedz się więcej',
                testing: 'Tryb testowy!',
                changeSettings: 'Zmień ustawienia'
            },
            purposes: {
                analytics: 'Analityka',
                functional: 'Funkcjonalne'
            },
            purposeItem: {
                service: 'Usługa'
            },
            close: 'Zamknij',
            save: 'Zapisz ustawienia',
            acceptAll: 'Zaakceptuj wszystko',
            declineAll: 'Odrzuć wszystko',
            app: {
                disableAll: {
                    title: 'Przełącz wszystkie aplikacje',
                    description: 'Użyj tego przełącznika, aby włączyć/wyłączyć wszystkie aplikacje.'
                },
                optOut: 'Opt-out',
                required: {
                    title: 'Wymagane',
                    description: 'Ta aplikacja jest zawsze ładowana (wymagana)'
                },
                purposes: 'Cele',
                purpose: 'Cel'
            },
            poweredBy: 'Powered by Klaro!'
        }
    },

    // Services/Apps
    apps: [
        {
            name: 'microsoft-clarity',
            purposes: ['analytics'],
            required: false,
            optOut: true,
            onlyOnce: true,
            translations: {
                en: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity helps us understand how users interact with our website through heatmaps and session recordings to improve user experience.'
                },
                de: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity hilft uns zu verstehen, wie Nutzer mit unserer Website interagieren, durch Heatmaps und Session-Aufzeichnungen zur Verbesserung der Nutzererfahrung.'
                },
                es: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity nos ayuda a entender cómo los usuarios interactúan con nuestro sitio web a través de mapas de calor y grabaciones de sesiones para mejorar la experiencia del usuario.'
                },
                fr: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity nous aide à comprendre comment les utilisateurs interagissent avec notre site web grâce aux cartes de chaleur et aux enregistrements de sessions pour améliorer l\'expérience utilisateur.'
                },
                it: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity ci aiuta a capire come gli utenti interagiscono con il nostro sito web tramite mappe di calore e registrazioni di sessioni per migliorare l\'esperienza utente.'
                },
                ru: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity помогает нам понять, как пользователи взаимодействуют с нашим веб-сайтом с помощью тепловых карт и записей сеансов для улучшения пользовательского опыта.'
                },
                nl: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity helpt ons begrijpen hoe gebruikers interageren met onze website door middel van heatmaps en sessie-opnames om de gebruikerservaring te verbeteren.'
                },
                pl: {
                    title: 'Microsoft Clarity',
                    description: 'Microsoft Clarity pomaga nam zrozumieć, jak użytkownicy wchodzą w interakcję z naszą stroną internetową za pomocą map cieplnych i nagrań sesji, aby poprawić doświadczenia użytkownika.'
                }
            }
        }
    ]
};
