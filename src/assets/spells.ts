const Spells = [
    {
        link: {
            ru: 'https://dnd.su/spells/1-hellish-rebuke/',
            en: '',
        },
        name: {
            ru: 'Адское возмездие',
            en: 'Hellish Rebuke',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'hellish-rebuke',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Реакция',
            en: 'Reaction',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/2-antipathysympathy/',
            en: '',
        },
        name: {
            ru: 'Антипатия/симпатия',
            en: 'Antipathy/Sympathy',
        },
        level: 8,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'antipathy-sympathy',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/3-aura-of-vitality/',
            en: '',
        },
        name: {
            ru: 'Аура живучести',
            en: 'Aura of Vitality',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'aura-of-vitality',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/4-aura-of-life/',
            en: '',
        },
        name: {
            ru: 'Аура жизни',
            en: 'Aura of Life',
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'aura-of-life',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/5-aura-of-purity/',
            en: '',
        },
        name: {
            ru: 'Аура очищения',
            en: 'Aura of Purity',
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'aura-of-purity',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/6-holy-aura/',
            en: '',
        },
        name: {
            ru: 'Аура святости',
            en: 'Holy Aura',
        },
        level: 8,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'holy-aura',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/7-silent-image/',
            en: '',
        },
        name: {
            ru: 'Безмолвный образ',
            en: 'Silent Image',
        },
        level: 1,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'silent-image',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/8-pass-without-trace/',
            en: '',
        },
        name: {
            ru: 'Бесследное передвижение',
            en: 'Pass without Trace',
        },
        level: 2,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'pass-without-trace',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/9-bless/',
            en: '',
        },
        name: {
            ru: 'Благословение',
            en: 'Bless',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'bless',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/10-divine-favor/',
            en: '',
        },
        name: {
            ru: 'Божественное благоволение',
            en: 'Divine Favor',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'divine-favor',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/11-spiritual-weapon/',
            en: '',
        },
        name: {
            ru: 'Божественное оружие',
            en: 'Spiritual Weapon',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'spiritual-weapon',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/12-divine-word/',
            en: '',
        },
        name: {
            ru: 'Божественное слово',
            en: 'Divine Word',
        },
        level: 7,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'divine-word',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/13-acid-splash/',
            en: '',
        },
        name: {
            ru: 'Брызги кислоты',
            en: 'Acid Splash',
        },
        level: 0,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'acid-splash',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/14-swift-quiver/',
            en: '',
        },
        name: {
            ru: 'Быстрый колчан',
            en: 'Swift Quiver',
        },
        level: 5,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'swift-quiver',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/15-witch-bolt/',
            en: '',
        },
        name: {
            ru: 'Ведьмин снаряд',
            en: 'Witch Bolt',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'witch-bolt',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/16-mordenkainens-magnificent-mansion/',
            en: '',
        },
        name: {
            ru: 'Великолепный особняк Морденкайнена',
            en: "Mordenkainen's Magnificent Mansion",
        },
        level: 7,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'mordenkainens-magnificent-mansion',
        range: {
            ru: '300 футов',
            en: '300 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/17-mordenkainens-faithful-hound/',
            en: '',
        },
        name: {
            ru: 'Верный пёс Морденкайнена',
            en: "Mordenkainen's Faithful Hound",
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'mordenkainens-faithful-hound',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/18-continual-flame/',
            en: '',
        },
        name: {
            ru: 'Вечный огонь',
            en: 'Continual Flame',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'continual-flame',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/19-dream/',
            en: '',
        },
        name: {
            ru: 'Вещий сон',
            en: 'Dream',
        },
        level: 5,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'dream',
        range: {
            ru: 'Особая',
            en: 'Special',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/20-see-invisibility/',
            en: '',
        },
        name: {
            ru: 'Видение невидимого',
            en: 'See Invisibility',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'see-invisibility',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/21-control-water/',
            en: '',
        },
        name: {
            ru: 'Власть над водами',
            en: 'Control Water',
        },
        level: 4,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'control-water',
        range: {
            ru: '300 футов',
            en: '300 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/22-control-weather/',
            en: '',
        },
        name: {
            ru: 'Власть над погодой',
            en: 'Control Weather',
        },
        level: 8,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'control-weather',
        range: {
            ru: 'На себя (5-mile радиус)',
            en: 'Self (5-mile radius)',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/23-suggestion/',
            en: '',
        },
        name: {
            ru: 'Внушение',
            en: 'Suggestion',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: true,
        ritual: false,
        id: 'suggestion',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/24-revivify/',
            en: '',
        },
        name: {
            ru: 'Возрождение',
            en: 'Revivify',
        },
        level: 3,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'revivify',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/25-thunderwave/',
            en: '',
        },
        name: {
            ru: 'Волна грома',
            en: 'Thunderwave',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'thunderwave',
        range: {
            ru: 'На себя (15-фут куб)',
            en: 'Self (15-foot cube)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/26-mage-hand/',
            en: '',
        },
        name: {
            ru: 'Волшебная рука',
            en: 'Mage Hand',
        },
        level: 0,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'mage-hand',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/27-magic-missile/',
            en: '',
        },
        name: {
            ru: 'Волшебная стрела',
            en: 'Magic Missile',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'magic-missile',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/28-magic-mouth/',
            en: '',
        },
        name: {
            ru: 'Волшебные уста',
            en: 'Magic Mouth',
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'magic-mouth',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/29-arcane-lock/',
            en: '',
        },
        name: {
            ru: 'Волшебный замок',
            en: 'Arcane Lock',
        },
        level: 2,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'arcane-lock',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/30-magic-jar/',
            en: '',
        },
        name: {
            ru: 'Волшебный сосуд',
            en: 'Magic Jar',
        },
        level: 6,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'magic-jar',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/31-phantasmal-force/',
            en: '',
        },
        name: {
            ru: 'Воображаемая сила',
            en: 'Phantasmal Force',
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'phantasmal-force',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/32-phantasmal-killer/',
            en: '',
        },
        name: {
            ru: 'Воображаемый убийца',
            en: 'Phantasmal Killer',
        },
        level: 4,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'phantasmal-killer',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/33-resurrection/',
            en: '',
        },
        name: {
            ru: 'Воскрешение',
            en: 'Resurrection',
        },
        level: 7,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'resurrection',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/34-incendiary-cloud/',
            en: '',
        },
        name: {
            ru: 'Воспламеняющаяся туча',
            en: 'Incendiary Cloud',
        },
        level: 8,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'incendiary-cloud',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/35-animate-dead/',
            en: '',
        },
        name: {
            ru: 'Восставший труп',
            en: 'Animate Dead',
        },
        level: 3,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'animate-dead',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/36-gate/',
            en: '',
        },
        name: {
            ru: 'Врата',
            en: 'Gate',
        },
        level: 9,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'gate',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/37-compelled-duel/',
            en: '',
        },
        name: {
            ru: 'Вызов на дуэль',
            en: 'Compelled Duel',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'compelled-duel',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/38-greater-invisibility/',
            en: '',
        },
        name: {
            ru: 'Высшая невидимость',
            en: 'Greater Invisibility',
        },
        level: 4,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'greater-invisibility',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/39-greater-restoration/',
            en: '',
        },
        name: {
            ru: 'Высшее восстановление',
            en: 'Greater Restoration',
        },
        level: 5,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'greater-restoration',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/40-augury/',
            en: '',
        },
        name: {
            ru: 'Гадание',
            en: 'Augury',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'augury',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/41-gaseous-form/',
            en: '',
        },
        name: {
            ru: 'Газообразная форма',
            en: 'Gaseous Form',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'gaseous-form',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/42-heroism/',
            en: '',
        },
        name: {
            ru: 'Героизм',
            en: 'Heroism',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'heroism',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/43-giant-insect/',
            en: '',
        },
        name: {
            ru: 'Гигантское насекомое',
            en: 'Giant Insect',
        },
        level: 4,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'giant-insect',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/44-hypnotic-pattern/',
            en: '',
        },
        name: {
            ru: 'Гипнотический узор',
            en: 'Hypnotic Pattern',
        },
        level: 3,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: '.СМ',
            en: '.SM',
        },
        concentration: true,
        ritual: false,
        id: 'hypnotic-pattern',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/45-blindnessdeafness/',
            en: '',
        },
        name: {
            ru: 'Глухота/слепота',
            en: 'Blindness/Deafness',
        },
        level: 2,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'blindness-deafness',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/46-wrathful-smite/',
            en: '',
        },
        name: {
            ru: 'Гневная кара',
            en: 'Wrathful Smite',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'wrathful-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/47-hunger-of-hadar/',
            en: '',
        },
        name: {
            ru: 'Голод Хадара',
            en: 'Hunger of Hadar',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'hunger-of-hadar',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/48-flame-blade/',
            en: '',
        },
        name: {
            ru: 'Горящий клинок',
            en: 'Flame Blade',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'flame-blade',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/49-ice-storm/',
            en: '',
        },
        name: {
            ru: 'Град',
            en: 'Ice Storm',
        },
        level: 4,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'ice-storm',
        range: {
            ru: '300 футов',
            en: '300 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/50-hail-of-thorns/',
            en: '',
        },
        name: {
            ru: 'Град шипов',
            en: 'Hail of Thorns',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'hail-of-thorns',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/51-storm-of-vengeance/',
            en: '',
        },
        name: {
            ru: 'Гроза гнева',
            en: 'Storm of Vengeance',
        },
        level: 9,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'storm-of-vengeance',
        range: {
            ru: 'Видимоcть',
            en: 'Sight',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/52-thunderous-smite/',
            en: '',
        },
        name: {
            ru: 'Громовая кара',
            en: 'Thunderous Smite',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'thunderous-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/53-move-earth/',
            en: '',
        },
        name: {
            ru: 'Движение почвы',
            en: 'Move Earth',
        },
        level: 6,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'move-earth',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/54-clone/',
            en: '',
        },
        name: {
            ru: 'Двойник',
            en: 'Clone',
        },
        level: 8,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'clone',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/55-demiplane/',
            en: '',
        },
        name: {
            ru: 'Демиплан',
            en: 'Demiplane',
        },
        level: 8,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: '.С.',
            en: '.S.',
        },
        concentration: false,
        ritual: false,
        id: 'demiplane',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/56-dissonant-whispers/',
            en: '',
        },
        name: {
            ru: 'Диссонирующий шёпот',
            en: 'Dissonant Whispers',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'dissonant-whispers',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/57-bigbys-hand/',
            en: '',
        },
        name: {
            ru: 'Длань Бигби',
            en: "Bigby's Hand",
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'bigbys-hand',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/58-daylight/',
            en: '',
        },
        name: {
            ru: 'Дневной свет',
            en: 'Daylight',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'daylight',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/59-armor-of-agathys/',
            en: '',
        },
        name: {
            ru: 'Доспех Агатиса',
            en: 'Armor of Agathys',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'armor-of-agathys',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/60-mage-armor/',
            en: '',
        },
        name: {
            ru: 'Доспехи мага',
            en: 'Mage Armor',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'mage-armor',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/62-shatter/',
            en: '',
        },
        name: {
            ru: 'Дребезги',
            en: 'Shatter',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'shatter',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/65-tree-stride/',
            en: '',
        },
        name: {
            ru: 'Древесный путь',
            en: 'Tree Stride',
        },
        level: 5,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'tree-stride',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/68-drawmijs-instant-summons/',
            en: '',
        },
        name: {
            ru: 'Дромиджево появление',
            en: "Drawmij's Instant Summons",
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'drawmijs-instant-summons',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/71-friends/',
            en: '',
        },
        name: {
            ru: 'Дружба',
            en: 'Friends',
        },
        level: 0,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: '.СМ',
            en: '.SM',
        },
        concentration: true,
        ritual: false,
        id: 'friends',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/72-animal-friendship/',
            en: '',
        },
        name: {
            ru: 'Дружба с животными',
            en: 'Animal Friendship',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'animal-friendship',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/73-shillelagh/',
            en: '',
        },
        name: {
            ru: 'Дубинка',
            en: 'Shillelagh',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'shillelagh',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/74-barkskin/',
            en: '',
        },
        name: {
            ru: 'Дубовая кора',
            en: 'Barkskin',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'barkskin',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/75-spirit-guardians/',
            en: '',
        },
        name: {
            ru: 'Духовные стражи',
            en: 'Spirit Guardians',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'spirit-guardians',
        range: {
            ru: 'На себя (15-фут радиус)',
            en: 'Self (15-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/76-beast-sense/',
            en: '',
        },
        name: {
            ru: 'Животные чувства',
            en: 'Beast Sense',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: '.С.',
            en: '.S.',
        },
        concentration: true,
        ritual: true,
        id: 'beast-sense',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/79-tashas-hideous-laughter/',
            en: '',
        },
        name: {
            ru: 'Жуткий смех Таши',
            en: "Tasha's Hideous Laughter",
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'tashas-hideous-laughter',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/81-cordon-of-arrows/',
            en: '',
        },
        name: {
            ru: 'Завеса стрел',
            en: 'Cordon of Arrows',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'cordon-of-arrows',
        range: {
            ru: '5 футов',
            en: '5 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/82-programmed-illusion/',
            en: '',
        },
        name: {
            ru: 'Заданная иллюзия',
            en: 'Programmed Illusion',
        },
        level: 6,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'programmed-illusion',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/83-slow/',
            en: '',
        },
        name: {
            ru: 'Замедление',
            en: 'Slow',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'slow',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/87-delayed-blast-fireball/',
            en: '',
        },
        name: {
            ru: 'Замедленный огненный шар',
            en: 'Delayed Blast Fireball',
        },
        level: 7,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'delayed-blast-fireball',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/89-forbiddance/',
            en: '',
        },
        name: {
            ru: 'Запрет',
            en: 'Forbiddance',
        },
        level: 6,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'forbiddance',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/92-contagion/',
            en: '',
        },
        name: {
            ru: 'Заражение',
            en: 'Contagion',
        },
        level: 5,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'contagion',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/97-imprisonment/',
            en: '',
        },
        name: {
            ru: 'Заточение',
            en: 'Imprisonment',
        },
        level: 9,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'imprisonment',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/99-protection-from-evil-and-good/',
            en: '',
        },
        name: {
            ru: 'Защита от зла и добра',
            en: 'Protection from Evil and Good',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'protection-from-evil-and-good',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/101-blade-ward/',
            en: '',
        },
        name: {
            ru: 'Защита от оружия',
            en: 'Blade Ward',
        },
        level: 0,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'blade-ward',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/104-death-ward/',
            en: '',
        },
        name: {
            ru: 'Защита от смерти',
            en: 'Death Ward',
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'death-ward',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/106-protection-from-energy/',
            en: '',
        },
        name: {
            ru: 'Защита от энергии',
            en: 'Protection from Energy',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'protection-from-energy',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/108-protection-from-poison/',
            en: '',
        },
        name: {
            ru: 'Защита от яда',
            en: 'Protection from Poison',
        },
        level: 2,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'protection-from-poison',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/111-earthquake/',
            en: '',
        },
        name: {
            ru: 'Землетрясение',
            en: 'Earthquake',
        },
        level: 8,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'earthquake',
        range: {
            ru: '500 футов',
            en: '500 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/112-vicious-mockery/',
            en: '',
        },
        name: {
            ru: 'Злая насмешка',
            en: 'Vicious Mockery',
        },
        level: 0,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'vicious-mockery',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/113-stinking-cloud/',
            en: '',
        },
        name: {
            ru: 'Зловонное облако',
            en: 'Stinking Cloud',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'stinking-cloud',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/114-symbol/',
            en: '',
        },
        name: {
            ru: 'Знак',
            en: 'Symbol',
        },
        level: 7,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'symbol',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/115-legend-lore/',
            en: '',
        },
        name: {
            ru: 'Знание легенд',
            en: 'Legend Lore',
        },
        level: 5,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'legend-lore',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/116-banishment/',
            en: '',
        },
        name: {
            ru: 'Изгнание',
            en: 'Banishment',
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'banishment',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/117-banishing-smite/',
            en: '',
        },
        name: {
            ru: 'Изгоняющая кара',
            en: 'Banishing Smite',
        },
        level: 5,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'banishing-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/118-fabricate/',
            en: '',
        },
        name: {
            ru: 'Изготовление',
            en: 'Fabricate',
        },
        level: 4,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'fabricate',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/119-modify-memory/',
            en: '',
        },
        name: {
            ru: 'Изменение памяти',
            en: 'Modify Memory',
        },
        level: 5,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'modify-memory',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/120-reverse-gravity/',
            en: '',
        },
        name: {
            ru: 'Изменение тяготения',
            en: 'Reverse Gravity',
        },
        level: 7,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'reverse-gravity',
        range: {
            ru: '100 футов',
            en: '100 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/121-stone-shape/',
            en: '',
        },
        name: {
            ru: 'Изменение формы камня',
            en: 'Stone Shape',
        },
        level: 4,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'stone-shape',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/122-sequester/',
            en: '',
        },
        name: {
            ru: 'Изоляция',
            en: 'Sequester',
        },
        level: 7,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'sequester',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/123-druidcraft/',
            en: '',
        },
        name: {
            ru: 'Искусство друидов',
            en: 'Druidcraft',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'druidcraft',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/124-wish/',
            en: '',
        },
        name: {
            ru: 'Исполнение желаний',
            en: 'Wish',
        },
        level: 9,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'wish',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/125-true-resurrection/',
            en: '',
        },
        name: {
            ru: 'Истинное воскрешение',
            en: 'True Resurrection',
        },
        level: 9,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'true-resurrection',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/126-true-seeing/',
            en: '',
        },
        name: {
            ru: 'Истинное зрение',
            en: 'True Seeing',
        },
        level: 6,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'true-seeing',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/127-true-polymorph/',
            en: '',
        },
        name: {
            ru: 'Истинное превращение',
            en: 'True Polymorph',
        },
        level: 9,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'true-polymorph',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/128-mordenkainens-private-sanctum/',
            en: '',
        },
        name: {
            ru: 'Кабинет Морденкайнена',
            en: "Mordenkainen's Private Sanctum",
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'mordenkainens-private-sanctum',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/129-stoneskin/',
            en: '',
        },
        name: {
            ru: 'Каменная кожа',
            en: 'Stoneskin',
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'stoneskin',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/130-wall-of-stone/',
            en: '',
        },
        name: {
            ru: 'Каменная стена',
            en: 'Wall of Stone',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'wall-of-stone',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/131-branding-smite/',
            en: '',
        },
        name: {
            ru: 'Клеймящая кара',
            en: 'Branding Smite',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'branding-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/132-counterspell/',
            en: '',
        },
        name: {
            ru: 'Контрзаклинание',
            en: 'Counterspell',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: '.С.',
            en: '.S.',
        },
        concentration: false,
        ritual: false,
        id: 'counterspell',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Реакция',
            en: 'Reaction',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/133-cone-of-cold/',
            en: '',
        },
        name: {
            ru: 'Конус холода',
            en: 'Cone of Cold',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'cone-of-cold',
        range: {
            ru: 'На себя (60-фут cone)',
            en: 'Self (60-foot cone)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/134-crown-of-madness/',
            en: '',
        },
        name: {
            ru: 'Корона безумия',
            en: 'Crown of Madness',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'crown-of-madness',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/135-circle-of-power/',
            en: '',
        },
        name: {
            ru: 'Круг силы',
            en: 'Circle of Power',
        },
        level: 5,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'circle-of-power',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/136-circle-of-death/',
            en: '',
        },
        name: {
            ru: 'Круг смерти',
            en: 'Circle of Death',
        },
        level: 6,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'circle-of-death',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/137-teleportation-circle/',
            en: '',
        },
        name: {
            ru: 'Круг телепортации',
            en: 'Teleportation Circle',
        },
        level: 5,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: false,
        ritual: false,
        id: 'teleportation-circle',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/138-maze/',
            en: '',
        },
        name: {
            ru: 'Лабиринт',
            en: 'Maze',
        },
        level: 8,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'maze',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/139-levitate/',
            en: '',
        },
        name: {
            ru: 'Левитация',
            en: 'Levitate',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'levitate',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/140-chill-touch/',
            en: '',
        },
        name: {
            ru: 'Леденящее прикосновение',
            en: 'Chill Touch',
        },
        level: 0,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'chill-touch',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/141-wall-of-ice/',
            en: '',
        },
        name: {
            ru: 'Ледяная стена',
            en: 'Wall of Ice',
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'wall-of-ice',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/142-leomunds-secret-chest/',
            en: '',
        },
        name: {
            ru: 'Леомундов потайной сундук',
            en: "Leomund's Secret Chest",
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'leomunds-secret-chest',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/143-leomunds-tiny-hut/',
            en: '',
        },
        name: {
            ru: 'Леомундова хижина',
            en: "Leomund's Tiny Hut",
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'leomunds-tiny-hut',
        range: {
            ru: 'На себя (10-фут-радиус полусфера)',
            en: 'Self (10-foot-radius hemisphere)',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/144-healing-word/',
            en: '',
        },
        name: {
            ru: 'Лечащее слово',
            en: 'Healing Word',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'healing-word',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/145-cure-wounds/',
            en: '',
        },
        name: {
            ru: 'Лечение ран',
            en: 'Cure Wounds',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'cure-wounds',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/146-moonbeam/',
            en: '',
        },
        name: {
            ru: 'Лунный луч',
            en: 'Moonbeam',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'moonbeam',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/147-ray-of-sickness/',
            en: '',
        },
        name: {
            ru: 'Луч болезни',
            en: 'Ray of Sickness',
        },
        level: 1,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'ray-of-sickness',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/148-ray-of-enfeeblement/',
            en: '',
        },
        name: {
            ru: 'Луч слабости',
            en: 'Ray of Enfeeblement',
        },
        level: 2,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'ray-of-enfeeblement',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/149-ray-of-frost/',
            en: '',
        },
        name: {
            ru: 'Луч холода',
            en: 'Ray of Frost',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'ray-of-frost',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/150-arcane-gate/',
            en: '',
        },
        name: {
            ru: 'Магические врата',
            en: 'Arcane Gate',
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'arcane-gate',
        range: {
            ru: '500 футов',
            en: '500 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/151-arcane-eye/',
            en: '',
        },
        name: {
            ru: 'Магический глаз',
            en: 'Arcane Eye',
        },
        level: 4,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'arcane-eye',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/152-magic-circle/',
            en: '',
        },
        name: {
            ru: 'Магический круг',
            en: 'Magic Circle',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'magic-circle',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/153-magic-weapon/',
            en: '',
        },
        name: {
            ru: 'Магическое оружие',
            en: 'Magic Weapon',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'magic-weapon',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/154-minor-illusion/',
            en: '',
        },
        name: {
            ru: 'Малая иллюзия',
            en: 'Minor Illusion',
        },
        level: 0,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: '.СМ',
            en: '.SM',
        },
        concentration: false,
        ritual: false,
        id: 'minor-illusion',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/155-lesser-restoration/',
            en: '',
        },
        name: {
            ru: 'Малое восстановление',
            en: 'Lesser Restoration',
        },
        level: 2,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'lesser-restoration',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/156-crusaders-mantle/',
            en: '',
        },
        name: {
            ru: 'Мантия крестоносца',
            en: "Crusader's Mantle",
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'crusaders-mantle',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/157-disguise-self/',
            en: '',
        },
        name: {
            ru: 'Маскировка',
            en: 'Disguise Self',
        },
        level: 1,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'disguise-self',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/158-beacon-of-hope/',
            en: '',
        },
        name: {
            ru: 'Маяк надежды',
            en: 'Beacon of Hope',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'beacon-of-hope',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/159-melfs-acid-arrow/',
            en: '',
        },
        name: {
            ru: 'Мельфова кислотная стрела',
            en: "Melf's Acid Arrow",
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'melfs-acid-arrow',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/160-rarys-telepathic-bond/',
            en: '',
        },
        name: {
            ru: 'Ментальная связь Рэри',
            en: "Rary's Telepathic Bond",
        },
        level: 5,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'rarys-telepathic-bond',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/161-blink/',
            en: '',
        },
        name: {
            ru: 'Мерцание',
            en: 'Blink',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'blink',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/162-sleet-storm/',
            en: '',
        },
        name: {
            ru: 'Метель',
            en: 'Sleet Storm',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'sleet-storm',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/163-meteor-swarm/',
            en: '',
        },
        name: {
            ru: 'Метеоритный дождь',
            en: 'Meteor Swarm',
        },
        level: 9,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'meteor-swarm',
        range: {
            ru: '1 mile',
            en: '1 mile',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/164-hunters-mark/',
            en: '',
        },
        name: {
            ru: 'Метка охотника',
            en: "Hunter's Mark",
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'hunters-mark',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/165-true-strike/',
            en: '',
        },
        name: {
            ru: 'Меткий удар',
            en: 'True Strike',
        },
        level: 0,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: '.С.',
            en: '.S.',
        },
        concentration: true,
        ritual: false,
        id: 'true-strike',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/166-mordenkainens-sword/',
            en: '',
        },
        name: {
            ru: 'Меч Морденкайнена',
            en: "Mordenkainen's Sword",
        },
        level: 7,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'mordenkainens-sword',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/167-hallucinatory-terrain/',
            en: '',
        },
        name: {
            ru: 'Мираж',
            en: 'Hallucinatory Terrain',
        },
        level: 4,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'hallucinatory-terrain',
        range: {
            ru: '300 футов',
            en: '300 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/168-eldritch-blast/',
            en: '',
        },
        name: {
            ru: 'Мистический заряд',
            en: 'Eldritch Blast',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'eldritch-blast',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/169-mass-suggestion/',
            en: '',
        },
        name: {
            ru: 'Множественное внушение',
            en: 'Mass Suggestion',
        },
        level: 6,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: false,
        ritual: false,
        id: 'mass-suggestion',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/170-mass-healing-word/',
            en: '',
        },
        name: {
            ru: 'Множественное лечащее слово',
            en: 'Mass Healing Word',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'mass-healing-word',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/171-mass-cure-wounds/',
            en: '',
        },
        name: {
            ru: 'Множественное лечение ран',
            en: 'Mass Cure Wounds',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'mass-cure-wounds',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/172-mass-heal/',
            en: '',
        },
        name: {
            ru: 'Множественное полное исцеление',
            en: 'Mass Heal',
        },
        level: 9,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'mass-heal',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/173-prayer-of-healing/',
            en: '',
        },
        name: {
            ru: 'Молебен лечения',
            en: 'Prayer of Healing',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'prayer-of-healing',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/174-lightning-arrow/',
            en: '',
        },
        name: {
            ru: 'Молниевая стрела',
            en: 'Lightning Arrow',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'lightning-arrow',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/175-lightning-bolt/',
            en: '',
        },
        name: {
            ru: 'Молния',
            en: 'Lightning Bolt',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'lightning-bolt',
        range: {
            ru: 'На себя (100-фут line)',
            en: 'Self (100-foot line)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/176-scrying/',
            en: '',
        },
        name: {
            ru: 'Наблюдение',
            en: 'Scrying',
        },
        level: 5,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'scrying',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/177-inflict-wounds/',
            en: '',
        },
        name: {
            ru: 'Нанесение ран',
            en: 'Inflict Wounds',
        },
        level: 1,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'inflict-wounds',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/178-guiding-bolt/',
            en: '',
        },
        name: {
            ru: 'Направляющий снаряд',
            en: 'Guiding Bolt',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'guiding-bolt',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/179-glibness/',
            en: '',
        },
        name: {
            ru: 'Находчивость',
            en: 'Glibness',
        },
        level: 8,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'glibness',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/180-insect-plague/',
            en: '',
        },
        name: {
            ru: 'Нашествие насекомых',
            en: 'Insect Plague',
        },
        level: 5,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'insect-plague',
        range: {
            ru: '300 футов',
            en: '300 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/181-flame-strike/',
            en: '',
        },
        name: {
            ru: 'Небесный огонь',
            en: 'Flame Strike',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'flame-strike',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/182-illusory-script/',
            en: '',
        },
        name: {
            ru: 'Невидимое письмо',
            en: 'Illusory Script',
        },
        level: 1,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: '.СМ',
            en: '.SM',
        },
        concentration: false,
        ritual: true,
        id: 'illusory-script',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/183-invisibility/',
            en: '',
        },
        name: {
            ru: 'Невидимость',
            en: 'Invisibility',
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'invisibility',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/184-unseen-servant/',
            en: '',
        },
        name: {
            ru: 'Невидимый слуга',
            en: 'Unseen Servant',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'unseen-servant',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/185-nondetection/',
            en: '',
        },
        name: {
            ru: 'Необнаружимость',
            en: 'Nondetection',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'nondetection',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/186-gentle-repose/',
            en: '',
        },
        name: {
            ru: 'Нетленные останки',
            en: 'Gentle Repose',
        },
        level: 2,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'gentle-repose',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/187-ottos-irresistible-dance/',
            en: '',
        },
        name: {
            ru: 'Неудержимая пляска Отто',
            en: "Otto's Irresistible Dance",
        },
        level: 6,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'ottos-irresistible-dance',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/188-nystuls-magic-aura/',
            en: '',
        },
        name: {
            ru: 'Нистулова ложная аура',
            en: "Nystul's Magic Aura",
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'nystuls-magic-aura',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/189-geas/',
            en: '',
        },
        name: {
            ru: 'Обет',
            en: 'Geas',
        },
        level: 5,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'geas',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/190-cloud-of-daggers/',
            en: '',
        },
        name: {
            ru: 'Облако кинжалов',
            en: 'Cloud of Daggers',
        },
        level: 2,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'cloud-of-daggers',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/191-cloudkill/',
            en: '',
        },
        name: {
            ru: 'Облако смерти',
            en: 'Cloudkill',
        },
        level: 5,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'cloudkill',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/192-zone-of-truth/',
            en: '',
        },
        name: {
            ru: 'Область истины',
            en: 'Zone of Truth',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'zone-of-truth',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/193-detect-poison-and-disease/',
            en: '',
        },
        name: {
            ru: 'Обнаружение болезней и яда',
            en: 'Detect Poison and Disease',
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: true,
        id: 'detect-poison-and-disease',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/194-detect-evil-and-good/',
            en: '',
        },
        name: {
            ru: 'Обнаружение зла и добра',
            en: 'Detect Evil and Good',
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'detect-evil-and-good',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/195-detect-magic/',
            en: '',
        },
        name: {
            ru: 'Обнаружение магии',
            en: 'Detect Magic',
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: true,
        id: 'detect-magic',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/196-detect-thoughts/',
            en: '',
        },
        name: {
            ru: 'Обнаружение мыслей',
            en: 'Detect Thoughts',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'detect-thoughts',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/197-major-image/',
            en: '',
        },
        name: {
            ru: 'Образ',
            en: 'Major Image',
        },
        level: 3,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'major-image',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/198-commune/',
            en: '',
        },
        name: {
            ru: 'Общение',
            en: 'Commune',
        },
        level: 5,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'commune',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/199-commune-with-nature/',
            en: '',
        },
        name: {
            ru: 'Общение с природой',
            en: 'Commune with Nature',
        },
        level: 5,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: true,
        id: 'commune-with-nature',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/200-staggering-smite/',
            en: '',
        },
        name: {
            ru: 'Оглушающая кара',
            en: 'Staggering Smite',
        },
        level: 4,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'staggering-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/201-fire-storm/',
            en: '',
        },
        name: {
            ru: 'Огненная буря',
            en: 'Fire Storm',
        },
        level: 7,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'fire-storm',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/202-wall-of-fire/',
            en: '',
        },
        name: {
            ru: 'Огненная стена',
            en: 'Wall of Fire',
        },
        level: 4,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'wall-of-fire',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/203-burning-hands/',
            en: '',
        },
        name: {
            ru: 'Огненные ладони',
            en: 'Burning Hands',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'burning-hands',
        range: {
            ru: 'На себя (15-фут cone)',
            en: 'Self (15-foot cone)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/204-fire-bolt/',
            en: '',
        },
        name: {
            ru: 'Огненный снаряд',
            en: 'Fire Bolt',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'fire-bolt',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/205-fireball/',
            en: '',
        },
        name: {
            ru: 'Огненный шар',
            en: 'Fireball',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'fireball',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/206-fire-shield/',
            en: '',
        },
        name: {
            ru: 'Огненный щит',
            en: 'Fire Shield',
        },
        level: 4,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'fire-shield',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/207-faerie-fire/',
            en: '',
        },
        name: {
            ru: 'Огонь фей',
            en: 'Faerie Fire',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'faerie-fire',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/208-raise-dead/',
            en: '',
        },
        name: {
            ru: 'Оживление',
            en: 'Raise Dead',
        },
        level: 5,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'raise-dead',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/364-animate-objects/',
            en: '',
        },
        name: {
            ru: 'Оживление вещей',
            en: 'Animate Objects',
        },
        level: 5,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'animate-objects',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/209-flesh-to-stone/',
            en: '',
        },
        name: {
            ru: 'Окаменение',
            en: 'Flesh to Stone',
        },
        level: 6,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'flesh-to-stone',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/210-identify/',
            en: '',
        },
        name: {
            ru: 'Опознание',
            en: 'Identify',
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'identify',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/211-entangle/',
            en: '',
        },
        name: {
            ru: 'Опутывание',
            en: 'Entangle',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'entangle',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/212-ensnaring-strike/',
            en: '',
        },
        name: {
            ru: 'Опутывающий удар',
            en: 'Ensnaring Strike',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'ensnaring-strike',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/213-blinding-smite/',
            en: '',
        },
        name: {
            ru: 'Ослепляющая кара',
            en: 'Blinding Smite',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'blinding-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/214-time-stop/',
            en: '',
        },
        name: {
            ru: 'Остановка времени',
            en: 'Time Stop',
        },
        level: 9,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'time-stop',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/215-otilukes-freezing-sphere/',
            en: '',
        },
        name: {
            ru: 'Отилюков ледяной шар',
            en: "Otiluke's Freezing Sphere",
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'otilukes-freezing-sphere',
        range: {
            ru: '300 футов',
            en: '300 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/216-otilukes-resilient-sphere/',
            en: '',
        },
        name: {
            ru: 'Отилюков упругий шар',
            en: "Otiluke's Resilient Sphere",
        },
        level: 4,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'otilukes-resilient-sphere',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/217-knock/',
            en: '',
        },
        name: {
            ru: 'Открывание',
            en: 'Knock',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'knock',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/218-mirror-image/',
            en: '',
        },
        name: {
            ru: 'Отражения',
            en: 'Mirror Image',
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'mirror-image',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/219-glyph-of-warding/',
            en: '',
        },
        name: {
            ru: 'Охранная руна',
            en: 'Glyph of Warding',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'glyph-of-warding',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/220-warding-bond/',
            en: '',
        },
        name: {
            ru: 'Охраняющая связь',
            en: 'Warding Bond',
        },
        level: 2,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'warding-bond',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/221-charm-person/',
            en: '',
        },
        name: {
            ru: 'Очарование личности',
            en: 'Charm Person',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'charm-person',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/222-purify-food-and-drink/',
            en: '',
        },
        name: {
            ru: 'Очищение пищи и питья',
            en: 'Purify Food and Drink',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: true,
        id: 'purify-food-and-drink',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/223-feather-fall/',
            en: '',
        },
        name: {
            ru: 'Падение пёрышком',
            en: 'Feather Fall',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: false,
        ritual: false,
        id: 'feather-fall',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Реакция',
            en: 'Reaction',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/224-searing-smite/',
            en: '',
        },
        name: {
            ru: 'Палящая кара',
            en: 'Searing Smite',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'searing-smite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/225-scorching-ray/',
            en: '',
        },
        name: {
            ru: 'Палящий луч',
            en: 'Scorching Ray',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'scorching-ray',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/226-spider-climb/',
            en: '',
        },
        name: {
            ru: 'Паук',
            en: 'Spider Climb',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'spider-climb',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/227-web/',
            en: '',
        },
        name: {
            ru: 'Паутина',
            en: 'Web',
        },
        level: 2,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'web',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/228-dimension-door/',
            en: '',
        },
        name: {
            ru: 'Переносящая дверь',
            en: 'Dimension Door',
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'dimension-door',
        range: {
            ru: '500 футов',
            en: '500 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/229-finger-of-death/',
            en: '',
        },
        name: {
            ru: 'Перст смерти',
            en: 'Finger of Death',
        },
        level: 7,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'finger-of-death',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/230-heroes-feast/',
            en: '',
        },
        name: {
            ru: 'Пир героев',
            en: "Heroes' Feast",
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'heroes-feast',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/231-planar-binding/',
            en: '',
        },
        name: {
            ru: 'Планарные узы',
            en: 'Planar Binding',
        },
        level: 5,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'planar-binding',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/232-planar-ally/',
            en: '',
        },
        name: {
            ru: 'Планарный союзник',
            en: 'Planar Ally',
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'planar-ally',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/233-chain-lightning/',
            en: '',
        },
        name: {
            ru: 'Пляшущая молния',
            en: 'Chain Lightning',
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'chain-lightning',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/234-dancing-lights/',
            en: '',
        },
        name: {
            ru: 'Пляшущие огоньки',
            en: 'Dancing Lights',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'dancing-lights',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/235-water-breathing/',
            en: '',
        },
        name: {
            ru: 'Подводное дыхание',
            en: 'Water Breathing',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'water-breathing',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/236-aid/',
            en: '',
        },
        name: {
            ru: 'Подмога',
            en: 'Aid',
        },
        level: 2,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'aid',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/237-simulacrum/',
            en: '',
        },
        name: {
            ru: 'Подобие',
            en: 'Simulacrum',
        },
        level: 7,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'simulacrum',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '12 ч.',
            en: '12 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/238-clairvoyance/',
            en: '',
        },
        name: {
            ru: 'Подсматривание',
            en: 'Clairvoyance',
        },
        level: 3,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'clairvoyance',
        range: {
            ru: '1 mile',
            en: '1 mile',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/239-dominate-beast/',
            en: '',
        },
        name: {
            ru: 'Подчинение зверя',
            en: 'Dominate Beast',
        },
        level: 4,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'dominate-beast',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/240-dominate-person/',
            en: '',
        },
        name: {
            ru: 'Подчинение личности',
            en: 'Dominate Person',
        },
        level: 5,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'dominate-person',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/241-dominate-monster/',
            en: '',
        },
        name: {
            ru: 'Подчинение чудовища',
            en: 'Dominate Monster',
        },
        level: 8,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'dominate-monster',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/242-locate-animals-or-plants/',
            en: '',
        },
        name: {
            ru: 'Поиск животных или растений',
            en: 'Locate Animals or Plants',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'locate-animals-or-plants',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/243-find-traps/',
            en: '',
        },
        name: {
            ru: 'Поиск ловушек',
            en: 'Find Traps',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'find-traps',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/244-locate-object/',
            en: '',
        },
        name: {
            ru: 'Поиск предмета',
            en: 'Locate Object',
        },
        level: 2,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'locate-object',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/245-find-the-path/',
            en: '',
        },
        name: {
            ru: 'Поиск пути',
            en: 'Find the Path',
        },
        level: 6,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'find-the-path',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/246-find-steed/',
            en: '',
        },
        name: {
            ru: 'Поиск скакуна',
            en: 'Find Steed',
        },
        level: 2,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'find-steed',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/247-locate-creature/',
            en: '',
        },
        name: {
            ru: 'Поиск существа',
            en: 'Locate Creature',
        },
        level: 4,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'locate-creature',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/248-find-familiar/',
            en: '',
        },
        name: {
            ru: 'Поиск фамильяра',
            en: 'Find Familiar',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'find-familiar',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/249-fly/',
            en: '',
        },
        name: {
            ru: 'Полёт',
            en: 'Fly',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'fly',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/250-heal/',
            en: '',
        },
        name: {
            ru: 'Полное исцеление',
            en: 'Heal',
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'heal',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/251-shapechange/',
            en: '',
        },
        name: {
            ru: 'Полное превращение',
            en: 'Shapechange',
        },
        level: 9,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'shapechange',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/252-comprehend-languages/',
            en: '',
        },
        name: {
            ru: 'Понимание языков',
            en: 'Comprehend Languages',
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'comprehend-languages',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/253-harm/',
            en: '',
        },
        name: {
            ru: 'Поражение',
            en: 'Harm',
        },
        level: 6,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'harm',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/254-bane/',
            en: '',
        },
        name: {
            ru: 'Порча',
            en: 'Bane',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'bane',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/255-gust-of-wind/',
            en: '',
        },
        name: {
            ru: 'Порыв ветра',
            en: 'Gust of Wind',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'gust-of-wind',
        range: {
            ru: 'На себя (60-фут line)',
            en: 'Self (60-foot line)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/256-sending/',
            en: '',
        },
        name: {
            ru: 'Послание',
            en: 'Sending',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'sending',
        range: {
            ru: 'unlimited',
            en: 'Unlimited',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/257-expeditious-retreat/',
            en: '',
        },
        name: {
            ru: 'Поспешное отступление',
            en: 'Expeditious Retreat',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'expeditious-retreat',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/258-mending/',
            en: '',
        },
        name: {
            ru: 'Починка',
            en: 'Mending',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'mending',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/259-animal-messenger/',
            en: '',
        },
        name: {
            ru: 'Почтовое животное',
            en: 'Animal Messenger',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'animal-messenger',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/260-polymorph/',
            en: '',
        },
        name: {
            ru: 'Превращение',
            en: 'Polymorph',
        },
        level: 4,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'polymorph',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/261-animal-shapes/',
            en: '',
        },
        name: {
            ru: 'Превращение в животных',
            en: 'Animal Shapes',
        },
        level: 8,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'animal-shapes',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/262-antilife-shell/',
            en: '',
        },
        name: {
            ru: 'Преграда жизни',
            en: 'Antilife Shell',
        },
        level: 5,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'antilife-shell',
        range: {
            ru: 'На себя (10-фут радиус)',
            en: 'Self (10-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/263-antimagic-field/',
            en: '',
        },
        name: {
            ru: 'Преграда магии',
            en: 'Antimagic Field',
        },
        level: 8,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'antimagic-field',
        range: {
            ru: 'На себя (10-фут радиус)',
            en: 'Self (10-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/264-foresight/',
            en: '',
        },
        name: {
            ru: 'Предвидение',
            en: 'Foresight',
        },
        level: 9,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'foresight',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/265-contingency/',
            en: '',
        },
        name: {
            ru: 'Предосторожность',
            en: 'Contingency',
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'contingency',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/266-divination/',
            en: '',
        },
        name: {
            ru: 'Предсказание',
            en: 'Divination',
        },
        level: 4,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'divination',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/279-phantom-steed/',
            en: '',
        },
        name: {
            ru: 'Призрачный скакун',
            en: 'Phantom Steed',
        },
        level: 3,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: true,
        id: 'phantom-steed',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/267-conjure-animals/',
            en: '',
        },
        name: {
            ru: 'Призыв животных',
            en: 'Conjure Animals',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'conjure-animals',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/268-conjure-barrage/',
            en: '',
        },
        name: {
            ru: 'Призыв заграждения',
            en: 'Conjure Barrage',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'conjure-barrage',
        range: {
            ru: 'На себя (60-фут cone)',
            en: 'Self (60-foot cone)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/269-conjure-volley/',
            en: '',
        },
        name: {
            ru: 'Призыв залпа',
            en: 'Conjure Volley',
        },
        level: 5,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'conjure-volley',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/270-conjure-woodland-beings/',
            en: '',
        },
        name: {
            ru: 'Призыв лесных обитателей',
            en: 'Conjure Woodland Beings',
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'conjure-woodland-beings',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/271-conjure-minor-elementals/',
            en: '',
        },
        name: {
            ru: 'Призыв малых элементалей',
            en: 'Conjure Minor Elementals',
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'conjure-minor-elementals',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/272-call-lightning/',
            en: '',
        },
        name: {
            ru: 'Призыв молнии',
            en: 'Call Lightning',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'call-lightning',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/273-conjure-celestial/',
            en: '',
        },
        name: {
            ru: 'Призыв небожителя',
            en: 'Conjure Celestial',
        },
        level: 7,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'conjure-celestial',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/274-conjure-fey/',
            en: '',
        },
        name: {
            ru: 'Призыв феи',
            en: 'Conjure Fey',
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'conjure-fey',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/275-conjure-elemental/',
            en: '',
        },
        name: {
            ru: 'Призыв элементаля',
            en: 'Conjure Elemental',
        },
        level: 5,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'conjure-elemental',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/276-command/',
            en: '',
        },
        name: {
            ru: 'Приказ',
            en: 'Command',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'command',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/277-vampiric-touch/',
            en: '',
        },
        name: {
            ru: 'Прикосновение вампира',
            en: 'Vampiric Touch',
        },
        level: 3,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'vampiric-touch',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/278-compulsion/',
            en: '',
        },
        name: {
            ru: 'Принуждение',
            en: 'Compulsion',
        },
        level: 4,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'compulsion',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/280-feign-death/',
            en: '',
        },
        name: {
            ru: 'Притворная смерть',
            en: 'Feign Death',
        },
        level: 3,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'feign-death',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/281-seeming/',
            en: '',
        },
        name: {
            ru: 'Притворство',
            en: 'Seeming',
        },
        level: 5,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'seeming',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/282-awaken/',
            en: '',
        },
        name: {
            ru: 'Пробуждение разума',
            en: 'Awaken',
        },
        level: 5,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'awaken',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '8 ч.',
            en: '8 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/283-project-image/',
            en: '',
        },
        name: {
            ru: 'Проекция',
            en: 'Project Image',
        },
        level: 7,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'project-image',
        range: {
            ru: '500 miles',
            en: '500 miles',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/284-astral-projection/',
            en: '',
        },
        name: {
            ru: 'Проекция в астрал',
            en: 'Astral Projection',
        },
        level: 9,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'astral-projection',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/285-bestow-curse/',
            en: '',
        },
        name: {
            ru: 'Проклятие',
            en: 'Bestow Curse',
        },
        level: 3,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'bestow-curse',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/286-jump/',
            en: '',
        },
        name: {
            ru: 'Прыжок',
            en: 'Jump',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'jump',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/287-false-life/',
            en: '',
        },
        name: {
            ru: 'Псевдожизнь',
            en: 'False Life',
        },
        level: 1,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'false-life',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/288-transport-via-plants/',
            en: '',
        },
        name: {
            ru: 'Путешествие через растения',
            en: 'Transport via Plants',
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'transport-via-plants',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/289-flaming-sphere/',
            en: '',
        },
        name: {
            ru: 'Пылающий шар',
            en: 'Flaming Sphere',
        },
        level: 2,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'flaming-sphere',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/290-prismatic-wall/',
            en: '',
        },
        name: {
            ru: 'Радужная стена',
            en: 'Prismatic Wall',
        },
        level: 9,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'prismatic-wall',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/291-prismatic-spray/',
            en: '',
        },
        name: {
            ru: 'Радужные брызги',
            en: 'Prismatic Spray',
        },
        level: 7,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'prismatic-spray',
        range: {
            ru: 'На себя (60-фут cone)',
            en: 'Self (60-foot cone)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/292-speak-with-animals/',
            en: '',
        },
        name: {
            ru: 'Разговор с животными',
            en: 'Speak with Animals',
        },
        level: 1,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: true,
        id: 'speak-with-animals',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/293-speak-with-dead/',
            en: '',
        },
        name: {
            ru: 'Разговор с мёртвыми',
            en: 'Speak with Dead',
        },
        level: 3,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'speak-with-dead',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/294-speak-with-plants/',
            en: '',
        },
        name: {
            ru: 'Разговор с растениями',
            en: 'Speak with Plants',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'speak-with-plants',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/295-blur/',
            en: '',
        },
        name: {
            ru: 'Размытый образ',
            en: 'Blur',
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: true,
        ritual: false,
        id: 'blur',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/296-destructive-wave/',
            en: '',
        },
        name: {
            ru: 'Разрушительная волна',
            en: 'Destructive Wave',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'destructive-wave',
        range: {
            ru: 'На себя (30-фут радиус)',
            en: 'Self (30-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/297-eyebite/',
            en: '',
        },
        name: {
            ru: 'Разящее око',
            en: 'Eyebite',
        },
        level: 6,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'eyebite',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/298-heat-metal/',
            en: '',
        },
        name: {
            ru: 'Раскалённый металл',
            en: 'Heat Metal',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'heat-metal',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/299-disintegrate/',
            en: '',
        },
        name: {
            ru: 'Распад',
            en: 'Disintegrate',
        },
        level: 6,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'disintegrate',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/300-dispel-evil-and-good/',
            en: '',
        },
        name: {
            ru: 'Рассеивание зла и добра',
            en: 'Dispel Evil and Good',
        },
        level: 5,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'dispel-evil-and-good',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/301-dispel-magic/',
            en: '',
        },
        name: {
            ru: 'Рассеивание магии',
            en: 'Dispel Magic',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'dispel-magic',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/302-regenerate/',
            en: '',
        },
        name: {
            ru: 'Регенерация',
            en: 'Regenerate',
        },
        level: 7,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'regenerate',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/365-reincarnate/',
            en: '',
        },
        name: {
            ru: 'Реинкарнация',
            en: 'Reincarnate',
        },
        level: 5,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'reincarnate',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '1 ч.',
            en: '1 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/303-enthrall/',
            en: '',
        },
        name: {
            ru: 'Речь златоуста',
            en: 'Enthrall',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'enthrall',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/304-plant-growth/',
            en: '',
        },
        name: {
            ru: 'Рост растений',
            en: 'Plant Growth',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'plant-growth',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/305-arms-of-hadar/',
            en: '',
        },
        name: {
            ru: 'Руки Хадара',
            en: 'Arms of Hadar',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'arms-of-hadar',
        range: {
            ru: 'На себя (10-фут радиус)',
            en: 'Self (10-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/306-color-spray/',
            en: '',
        },
        name: {
            ru: 'Сверкающие брызги',
            en: 'Color Spray',
        },
        level: 1,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'color-spray',
        range: {
            ru: 'На себя (15-фут cone)',
            en: 'Self (15-foot cone)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/307-light/',
            en: '',
        },
        name: {
            ru: 'Свет',
            en: 'Light',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: false,
        ritual: false,
        id: 'light',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/308-freedom-of-movement/',
            en: '',
        },
        name: {
            ru: 'Свобода перемещения',
            en: 'Freedom of Movement',
        },
        level: 4,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'freedom-of-movement',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/309-contact-other-plane/',
            en: '',
        },
        name: {
            ru: 'Связь с иным миром',
            en: 'Contact Other Plane',
        },
        level: 5,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: true,
        id: 'contact-other-plane',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/310-hallow/',
            en: '',
        },
        name: {
            ru: 'Святилище',
            en: 'Hallow',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'hallow',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '24 ч.',
            en: '24 Hr.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/311-sacred-flame/',
            en: '',
        },
        name: {
            ru: 'Священное пламя',
            en: 'Sacred Flame',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'sacred-flame',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/312-hex/',
            en: '',
        },
        name: {
            ru: 'Сглаз',
            en: 'Hex',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'hex',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/313-alarm/',
            en: '',
        },
        name: {
            ru: 'Сигнал тревоги',
            en: 'Alarm',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'alarm',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/314-wall-of-force/',
            en: '',
        },
        name: {
            ru: 'Силовая стена',
            en: 'Wall of Force',
        },
        level: 5,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'wall-of-force',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/315-grease/',
            en: '',
        },
        name: {
            ru: 'Скольжение',
            en: 'Grease',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'grease',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/316-longstrider/',
            en: '',
        },
        name: {
            ru: 'Скороход',
            en: 'Longstrider',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'longstrider',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/317-feeblemind/',
            en: '',
        },
        name: {
            ru: 'Слабоумие',
            en: 'Feeblemind',
        },
        level: 8,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'feeblemind',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/318-meld-into-stone/',
            en: '',
        },
        name: {
            ru: 'Слияние с камнем',
            en: 'Meld into Stone',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: true,
        id: 'meld-into-stone',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/319-word-of-recall/',
            en: '',
        },
        name: {
            ru: 'Слово возврата',
            en: 'Word of Recall',
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'word-of-recall',
        range: {
            ru: '5 футов',
            en: '5 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/320-power-word-heal/',
            en: '',
        },
        name: {
            ru: 'Слово силы: исцеление',
            en: 'Power Word Heal',
        },
        level: 9,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'power-word-heal',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/321-power-word-stun/',
            en: '',
        },
        name: {
            ru: 'Слово силы: ошеломление',
            en: 'Power Word Stun',
        },
        level: 8,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'power-word-stun',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/322-power-word-kill/',
            en: '',
        },
        name: {
            ru: 'Слово силы: смерть',
            en: 'Power Word Kill',
        },
        level: 9,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'power-word-kill',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/323-alter-self/',
            en: '',
        },
        name: {
            ru: 'Смена обличья',
            en: 'Alter Self',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'alter-self',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/324-weird/',
            en: '',
        },
        name: {
            ru: 'Смертный ужас',
            en: 'Weird',
        },
        level: 9,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'weird',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/325-confusion/',
            en: '',
        },
        name: {
            ru: 'Смятение',
            en: 'Confusion',
        },
        level: 4,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'confusion',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/326-remove-curse/',
            en: '',
        },
        name: {
            ru: 'Снятие проклятия',
            en: 'Remove Curse',
        },
        level: 3,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'remove-curse',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/327-passwall/',
            en: '',
        },
        name: {
            ru: 'Создание прохода',
            en: 'Passwall',
        },
        level: 5,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'passwall',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/328-mind-blank/',
            en: '',
        },
        name: {
            ru: 'Сокрытие разума',
            en: 'Mind Blank',
        },
        level: 8,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'mind-blank',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/329-sunbeam/',
            en: '',
        },
        name: {
            ru: 'Солнечный луч',
            en: 'Sunbeam',
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'sunbeam',
        range: {
            ru: 'На себя (60-фут line)',
            en: 'Self (60-foot line)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/330-sunburst/',
            en: '',
        },
        name: {
            ru: 'Солнечный ожог',
            en: 'Sunburst',
        },
        level: 8,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'sunburst',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/331-message/',
            en: '',
        },
        name: {
            ru: 'Сообщение',
            en: 'Message',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'message',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/332-resistance/',
            en: '',
        },
        name: {
            ru: 'Сопротивление',
            en: 'Resistance',
        },
        level: 0,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'resistance',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/366-creation/',
            en: '',
        },
        name: {
            ru: 'Сотворение',
            en: 'Creation',
        },
        level: 5,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'creation',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/333-create-or-destroy-water/',
            en: '',
        },
        name: {
            ru: 'Сотворение или уничтожение воды',
            en: 'Create or Destroy Water',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'create-or-destroy-water',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/334-create-undead/',
            en: '',
        },
        name: {
            ru: 'Сотворение нежити',
            en: 'Create Undead',
        },
        level: 6,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'create-undead',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/335-create-food-and-water/',
            en: '',
        },
        name: {
            ru: 'Сотворение пищи и воды',
            en: 'Create Food and Water',
        },
        level: 3,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'create-food-and-water',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/336-produce-flame/',
            en: '',
        },
        name: {
            ru: 'Сотворение пламени',
            en: 'Produce Flame',
        },
        level: 0,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'produce-flame',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/337-wind-wall/',
            en: '',
        },
        name: {
            ru: 'Стена ветров',
            en: 'Wind Wall',
        },
        level: 3,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'wind-wall',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/338-blade-barrier/',
            en: '',
        },
        name: {
            ru: 'Стена клинков',
            en: 'Blade Barrier',
        },
        level: 6,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'blade-barrier',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/339-elemental-weapon/',
            en: '',
        },
        name: {
            ru: 'Стихийное оружие',
            en: 'Elemental Weapon',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'elemental-weapon',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/340-guardian-of-faith/',
            en: '',
        },
        name: {
            ru: 'Страж веры',
            en: 'Guardian of Faith',
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'guardian-of-faith',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/341-guards-and-wards/',
            en: '',
        },
        name: {
            ru: 'Стражи',
            en: 'Guards and Wards',
        },
        level: 6,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'guards-and-wards',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/342-globe-of-invulnerability/',
            en: '',
        },
        name: {
            ru: 'Сфера неуязвимости',
            en: 'Globe of Invulnerability',
        },
        level: 6,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'globe-of-invulnerability',
        range: {
            ru: 'На себя (10-фут радиус)',
            en: 'Self (10-foot radius)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/343-mirage-arcane/',
            en: '',
        },
        name: {
            ru: 'Таинственный мираж',
            en: 'Mirage Arcane',
        },
        level: 7,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'mirage-arcane',
        range: {
            ru: 'Видимоcть',
            en: 'Sight',
        },
        castTime: {
            ru: '10 мин.',
            en: '10 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/344-telekinesis/',
            en: '',
        },
        name: {
            ru: 'Телекинез',
            en: 'Telekinesis',
        },
        level: 5,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'telekinesis',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/345-telepathy/',
            en: '',
        },
        name: {
            ru: 'Телепатия',
            en: 'Telepathy',
        },
        level: 8,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'telepathy',
        range: {
            ru: 'unlimited',
            en: 'Unlimited',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/367-teleport/',
            en: '',
        },
        name: {
            ru: 'Телепортация',
            en: 'Teleport',
        },
        level: 7,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'teleport',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/368-darkvision/',
            en: '',
        },
        name: {
            ru: 'Тёмное зрение',
            en: 'Darkvision',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'darkvision',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/346-tensers-floating-disk/',
            en: '',
        },
        name: {
            ru: 'Тензеров парящий диск',
            en: "Tenser's Floating Disk",
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'tensers-floating-disk',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/347-wall-of-thorns/',
            en: '',
        },
        name: {
            ru: 'Терновая стена',
            en: 'Wall of Thorns',
        },
        level: 6,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'wall-of-thorns',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/348-thorn-whip/',
            en: '',
        },
        name: {
            ru: 'Терновый кнут',
            en: 'Thorn Whip',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'thorn-whip',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/349-silence/',
            en: '',
        },
        name: {
            ru: 'Тишина',
            en: 'Silence',
        },
        level: 2,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: true,
        id: 'silence',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/350-rope-trick/',
            en: '',
        },
        name: {
            ru: 'Трюк с верёвкой',
            en: 'Rope Trick',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'rope-trick',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/351-fog-cloud/',
            en: '',
        },
        name: {
            ru: 'Туманное облако',
            en: 'Fog Cloud',
        },
        level: 1,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'fog-cloud',
        range: {
            ru: '120 футов',
            en: '120 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/352-misty-step/',
            en: '',
        },
        name: {
            ru: 'Туманный шаг',
            en: 'Misty Step',
        },
        level: 2,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'misty-step',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/353-darkness/',
            en: '',
        },
        name: {
            ru: 'Тьма',
            en: 'Darkness',
        },
        level: 2,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: true,
        ritual: false,
        id: 'darkness',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/354-sanctuary/',
            en: '',
        },
        name: {
            ru: 'Убежище',
            en: 'Sanctuary',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'sanctuary',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/355-enlargereduce/',
            en: '',
        },
        name: {
            ru: 'Увеличение/уменьшение',
            en: 'Enlarge/Reduce',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'enlarge-reduce',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/356-hold-person/',
            en: '',
        },
        name: {
            ru: 'Удержание личности',
            en: 'Hold Person',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'hold-person',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/110-hold-monster/',
            en: '',
        },
        name: {
            ru: 'Удержание чудовища',
            en: 'Hold Monster',
        },
        level: 5,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'hold-monster',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/109-fear/',
            en: '',
        },
        name: {
            ru: 'Ужас',
            en: 'Fear',
        },
        level: 3,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'fear',
        range: {
            ru: 'На себя (30-фут cone)',
            en: 'Self (30-foot cone)',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/107-forcecage/',
            en: '',
        },
        name: {
            ru: 'Узилище',
            en: 'Forcecage',
        },
        level: 7,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'forcecage',
        range: {
            ru: '100 футов',
            en: '100 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/105-guidance/',
            en: '',
        },
        name: {
            ru: 'Указание',
            en: 'Guidance',
        },
        level: 0,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'guidance',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/103-enhance-ability/',
            en: '',
        },
        name: {
            ru: 'Улучшение характеристики',
            en: 'Enhance Ability',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'enhance-ability',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/102-calm-emotions/',
            en: '',
        },
        name: {
            ru: 'Умиротворение',
            en: 'Calm Emotions',
        },
        level: 2,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'calm-emotions',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/100-haste/',
            en: '',
        },
        name: {
            ru: 'Ускорение',
            en: 'Haste',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'haste',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/98-sleep/',
            en: '',
        },
        name: {
            ru: 'Усыпление',
            en: 'Sleep',
        },
        level: 1,
        type: {
            ru: 'Очарование',
            en: 'Enchantment',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'sleep',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/96-blight/',
            en: '',
        },
        name: {
            ru: 'Усыхание',
            en: 'Blight',
        },
        level: 4,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'blight',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/95-plane-shift/',
            en: '',
        },
        name: {
            ru: 'Уход в иной мир',
            en: 'Plane Shift',
        },
        level: 7,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'plane-shift',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/94-spare-the-dying/',
            en: '',
        },
        name: {
            ru: 'Уход за умирающим',
            en: 'Spare the Dying',
        },
        level: 0,
        type: {
            ru: 'Некромантия',
            en: 'Necromancy',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'spare-the-dying',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/93-mislead/',
            en: '',
        },
        name: {
            ru: 'Фальшивый двойник',
            en: 'Mislead',
        },
        level: 5,
        type: {
            ru: 'Иллюзия',
            en: 'Illusion',
        },
        components: {
            ru: '.С.',
            en: '.S.',
        },
        concentration: true,
        ritual: false,
        id: 'mislead',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/91-prestidigitation/',
            en: '',
        },
        name: {
            ru: 'Фокусы',
            en: 'Prestidigitation',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'prestidigitation',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/90-wind-walk/',
            en: '',
        },
        name: {
            ru: 'Хождение по ветру',
            en: 'Wind Walk',
        },
        level: 6,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'wind-walk',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/88-water-walk/',
            en: '',
        },
        name: {
            ru: 'Хождение по воде',
            en: 'Water Walk',
        },
        level: 3,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: true,
        id: 'water-walk',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/86-chromatic-orb/',
            en: '',
        },
        name: {
            ru: 'Цветной шарик',
            en: 'Chromatic Orb',
        },
        level: 1,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'chromatic-orb',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/85-grasping-vine/',
            en: '',
        },
        name: {
            ru: 'Цепкая лоза',
            en: 'Grasping Vine',
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'grasping-vine',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/84-tsunami/',
            en: '',
        },
        name: {
            ru: 'Цунами',
            en: 'Tsunami',
        },
        level: 8,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: true,
        ritual: false,
        id: 'tsunami',
        range: {
            ru: 'Видимоcть',
            en: 'Sight',
        },
        castTime: {
            ru: '1 мин.',
            en: '1 Min.',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/78-goodberry/',
            en: '',
        },
        name: {
            ru: 'Чудо-ягоды',
            en: 'Goodberry',
        },
        level: 1,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: false,
        ritual: false,
        id: 'goodberry',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/80-thaumaturgy/',
            en: '',
        },
        name: {
            ru: 'Чудотворство',
            en: 'Thaumaturgy',
        },
        level: 0,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'В..',
            en: 'V..',
        },
        concentration: false,
        ritual: false,
        id: 'thaumaturgy',
        range: {
            ru: '30 футов',
            en: '30 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/77-spike-growth/',
            en: '',
        },
        name: {
            ru: 'Шипы',
            en: 'Spike Growth',
        },
        level: 2,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'spike-growth',
        range: {
            ru: '150 футов',
            en: '150 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/70-shield/',
            en: '',
        },
        name: {
            ru: 'Щит',
            en: 'Shield',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'shield',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Реакция',
            en: 'Reaction',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/69-shield-of-faith/',
            en: '',
        },
        name: {
            ru: 'Щит веры',
            en: 'Shield of Faith',
        },
        level: 1,
        type: {
            ru: 'Ограждение',
            en: 'Abjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'shield-of-faith',
        range: {
            ru: '60 футов',
            en: '60 feet',
        },
        castTime: {
            ru: 'Бонусное действие',
            en: 'Bonus',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/67-evards-black-tentacles/',
            en: '',
        },
        name: {
            ru: 'Эвардовы чёрные щупальца',
            en: "Evard's Black Tentacles",
        },
        level: 4,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВСМ',
            en: 'VSM',
        },
        concentration: true,
        ritual: false,
        id: 'evards-black-tentacles',
        range: {
            ru: '90 футов',
            en: '90 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/66-shocking-grasp/',
            en: '',
        },
        name: {
            ru: 'Электрошок',
            en: 'Shocking Grasp',
        },
        level: 0,
        type: {
            ru: 'Воплощение',
            en: 'Evocation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'shocking-grasp',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/64-etherealness/',
            en: '',
        },
        name: {
            ru: 'Эфирность',
            en: 'Etherealness',
        },
        level: 7,
        type: {
            ru: 'Преобразование',
            en: 'Transmutation',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'etherealness',
        range: {
            ru: 'На себя',
            en: 'Self',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/63-poison-spray/',
            en: '',
        },
        name: {
            ru: 'Ядовитые брызги',
            en: 'Poison Spray',
        },
        level: 0,
        type: {
            ru: 'Вызов',
            en: 'Conjuration',
        },
        components: {
            ru: 'ВС.',
            en: 'VS.',
        },
        concentration: false,
        ritual: false,
        id: 'poison-spray',
        range: {
            ru: '10 футов',
            en: '10 feet',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
    {
        link: {
            ru: 'https://dnd.su/spells/61-tongues/',
            en: '',
        },
        name: {
            ru: 'Языки',
            en: 'Tongues',
        },
        level: 3,
        type: {
            ru: 'Прорицание',
            en: 'Divination',
        },
        components: {
            ru: 'В.М',
            en: 'V.M',
        },
        concentration: false,
        ritual: false,
        id: 'tongues',
        range: {
            ru: 'Касание',
            en: 'Touch',
        },
        castTime: {
            ru: 'Действие',
            en: 'Action',
        },
    },
];

export default Spells;
