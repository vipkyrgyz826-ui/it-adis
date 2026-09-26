const logoPath = "public/logo.png";
const logo = (dark = false, small = false) =>
  `<div class="logo-slot ${dark ? "darkslot" : ""} ${small ? "logo-small" : ""} missing"><img alt="Оригинальный логотип IT ADIS"><span class="placeholder">Оригинальный логотип<br><b>public/logo.png</b></span></div>`;
const slideTop = (n, section) =>
  `<div class="topline"><span>${section}</span><span class="section-no">IT ADIS &nbsp; / &nbsp; ${String(n).padStart(2, "0")}</span></div>`;
const slide = (n, section, title, sub, body, opts = "") =>
  `<section class="slide ${opts}" data-slide="${n}">${slideTop(n, section)}<h2 class="title">${title}</h2>${sub ? `<p class="subtitle">${sub}</p>` : ""}<div class="content ${body.cls || ""}">${body.html}</div></section>`;
const panel = (title, content) =>
  `<div class="panel"><h3>${title}</h3>${content}</div>`;
const visual = (inner, caption = "Концептуальная визуализация") =>
  `<div class="visual"><div class="gridbg"></div>${inner}<span class="caption">${caption}</span></div>`;
const room = (label = "Концептуальная визуализация") =>
  visual(
    `<div class="room"><div class="window"></div><div class="monitor"></div><div class="desk"></div><div class="plant"></div><span class="roomlabel">Учебное пространство • IT ADIS</span></div>`,
    label,
  );
const mock = (dark = false, inner = "") =>
  `<div class="mock ${dark ? "darkmock" : ""}"><div class="brand"><em>IT</em> ADIS</div><div>${inner}</div><div class="note">Окуу борбору</div></div>`;
const slides = [];
slides.push(
  `<section class="slide cover active" data-slide="1"><div class="topline"><span>ПРЕЗЕНТАЦИЯ КОНЦЕПЦИИ</span><span class="section-no">2026</span></div><div class="content"><div><span class="eyebrow">Брендбук • пространство • опыт</span><h1>IT ADIS<br><span>Брендбук</span><br>и дизайн<br>интерьера</h1><div class="divider"></div><p class="subtitle">Визуальная система учебного IT-центра<br>Концептуальный проект</p></div><div class="visual"><div class="orb"></div><div class="cover-logo">${logo()}</div><div class="floating f1">01 / ОБУЧЕНИЕ</div><div class="floating f2">02 / ПРАКТИКА</div><div class="floating f3">03 / РАЗВИТИЕ</div></div></div><div class="coverfoot"><span>IT ADIS • Окуу борбору</span><span>Концепция для обсуждения заказчиком</span></div></section>`,
);
slides.push(
  slide(
    2,
    "01 / БРЕНДБУК",
    "Обучение через практику",
    "IT ADIS — учебный центр IT-направления. Концепция опирается на обучение, развитие навыков и совместную практику.",
    {
      cls: "wide-left",
      html:
        panel(
          "Основа бренда",
          `<p class="tagline">Знания становятся навыком, когда их применяют.</p><ul class="bullets"><li>Технологичность — ясные цифровые образы и точная графика</li><li>Обучение — понятная коммуникация и комфортная среда</li><li>Развитие — путь от первого шага к самостоятельному проекту</li><li>Практика — рабочие места и командные форматы</li></ul><span class="note">Направления и история бренда не добавлялись без подтверждения заказчика.</span>`,
        ) +
        visual(
          `<div class="mock darkmock"><span class="eyebrow">LEARN → BUILD → GROW</span><div class="tagline">Окуу.<br>Практика.<br><em style="color:#70da96">Өнүгүү.</em></div><div class="chips"><span class="chip">IT үйрөнүү</span><span class="chip">Бирге иштөө</span></div></div>`,
        ),
    },
  ),
);
slides.push(
  slide(
    3,
    "01 / БРЕНДБУК",
    "Логотип",
    "Основная версия — предоставленный заказчиком оригинал. Цветовые инверсии и дополнительные версии возможны только как концепция и после согласования.",
    {
      html: `<div class="panel"><span class="eyebrow">ОРИГИНАЛЬНЫЙ ФАЙЛ</span><div style="height:65%;display:grid;place-items:center">${logo()}</div><p>Размещение: фирменные материалы, пространство, цифровые носители.</p></div><div style="display:grid;grid-template-rows:1fr 1fr;gap:12px">${visual(`<div class="panel" style="width:86%;display:grid;place-items:center">${logo()}</div>`, "Вариант на светлом фоне")}<div class="visual" style="background:#11243a"><div class="gridbg"></div><div class="panel" style="width:86%;background:#132a43;border-color:#2a4662;display:grid;place-items:center">${logo(true)}</div><span class="caption">Инверсия — концепция после проверки оригинала</span></div></div>`,
    },
  ),
);
slides.push(
  slide(
    4,
    "01 / БРЕНДБУК",
    "Правила использования",
    "Оригинал всегда размещается пропорционально, с читаемым слоганом и достаточным контрастом.",
    {
      html: `${panel("Охранное поле и размер", `<div style="border:1px dashed #1769d2;padding:24px;text-align:center;background:#f6f9fc">${logo(false, true)}</div><ul class="bullets"><li>Минимальный отступ со всех сторон — высота буквы A в знаке</li><li>Экран: ширина от 120 px; печать: от 28 мм. Проверить читаемость слогана</li><li>Использовать только исходные пропорции и файлы</li></ul>`)}${panel("Правильно / неправильно", `<div class="cards3"><div><div class="logo-slot" style="width:100%;height:70px">${logo().replace(/<div class="logo-slot[^>]*>|<\/div>$/g, "")}</div><p>✓ Масштабировать равномерно</p></div><div><div style="height:70px;display:grid;place-items:center">${logo(false, true)}</div><p>✓ Сохранять контраст</p></div><div style="opacity:.55"><div style="height:70px;transform:scaleX(1.35);display:grid;place-items:center">${logo(false, true)}</div><p>× Не растягивать</p></div></div><p class="note">Не менять цвет, шрифт, композицию или слоган. Точные параметры сверить с исходным файлом.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    5,
    "01 / БРЕНДБУК",
    "Фирменные цвета",
    "Цвета ниже подобраны как рабочие цифровые ориентиры по заявленному синему и зелёному. Требуют сверки с оригинальным PNG.",
    {
      html: `${panel("Рабочая палитра", `<div class="swatches"><div class="swatch" style="background:#1769d2"><span>Синий</span>#1769D2 · RGB 23,105,210</div><div class="swatch" style="background:#43b86b"><span>Зелёный</span>#43B86B · RGB 67,184,107</div><div class="swatch" style="background:#142338"><span>Тёмный</span>#142338 · RGB 20,35,56</div><div class="swatch" style="background:#f4f7fb;color:#142338;border:1px solid #dce5ef"><span>Светлый</span>#F4F7FB · RGB 244,247,251</div><div class="swatch" style="background:#fff;color:#142338;border:1px solid #dce5ef"><span>Белый</span>#FFFFFF · RGB 255,255,255</div><div class="swatch" style="background:#617188"><span>Нейтральный</span>#617188 · RGB 97,113,136</div></div>`)}${panel("Сочетания и печать", `<div class="kv"><div><b>Интерфейс</b>Синий + белый</div><div><b>Акцент</b>Зелёный дозированно</div><div><b>Фон</b>Светлый нейтральный</div><div><b>Текст</b>Тёмный нейтральный</div></div><p style="margin-top:15px">CMYK — предварительная конверсия: синий 89/50/0/18, зелёный 64/0/42/28. Обязательна цветопроба и сверка с заказчиком.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    6,
    "01 / БРЕНДБУК",
    "Типографика",
    "Предложение: Manrope для интерфейсов и заголовков, Roboto для длинного текста и технических материалов. Поддержку кыргызских символов проверить на выбранных файлах шрифтов.",
    {
      html: `${panel("Иерархия", `<p style="font-size:clamp(25px,3vw,42px);font-weight:800;letter-spacing:-.05em;margin:5px 0">Заголовок / Manrope ExtraBold</p><p style="font-size:21px;font-weight:600">Подзаголовок / Manrope SemiBold</p><p style="font-size:15px">Основной текст / Roboto Regular<br>Окуу жана технологиялар — билимден тажрыйбага.</p><p style="font-size:12px;color:#74859a">Подпись / Roboto Medium · 12 px</p><button style="background:#1769d2;color:white;border:0;padding:10px 17px;border-radius:8px;font-weight:700">Записаться / Катталуу</button>`)}${panel("Принципы набора", `<ul class="bullets"><li>Не использовать более двух гарнитур в одном макете</li><li>Короткие заголовки, спокойный ритм и высокий контраст</li><li>Основной текст — не мельче 14 pt в печатных макетах</li><li>Проверить кыргызские буквы в выбранном начертании перед выпуском</li></ul><div class="chips"><span class="chip">Manrope</span><span class="chip">Roboto</span><span class="chip">Кыргызча</span><span class="chip">Русский</span></div>`)} `,
    },
  ),
);
slides.push(
  slide(
    7,
    "01 / БРЕНДБУК",
    "Фирменный графический элемент",
    "Модульный паттерн — концептуальная геометрия из квадратной сетки и дуг. Он поддерживает систему, не подменяя и не редактируя логотип.",
    {
      html: `${panel("Геометрический модуль", `<div style="height:72%;border-radius:12px;background-color:#f5f8fc;background-image:linear-gradient(90deg,transparent 48%,#1769d21a 49%,#1769d21a 51%,transparent 52%),linear-gradient(transparent 48%,#1769d21a 49%,#1769d21a 51%,transparent 52%);background-size:48px 48px;display:grid;place-items:center"><div style="width:130px;height:130px;border:18px solid #1769d2;border-right-color:#43b86b;border-radius:50%;transform:rotate(-38deg)"></div></div><p class="note">Использовать как вторичный графический приём; не вставлять внутрь знака.</p>`)}${panel("Применение", `<div class="cards3"><div style="background:#eaf2fb;border-radius:10px;padding:14px;height:105px;background-image:radial-gradient(#1769d233 1.4px,transparent 1.4px);background-size:12px 12px"><b>Фон</b></div><div style="background:#102840;color:#fff;border-radius:10px;padding:14px;height:105px"><b>Стена</b><div style="height:42px;margin-top:10px;border-top:2px solid #43b86b;border-radius:50%"></div></div><div style="background:#f2f6fb;border-radius:10px;padding:14px;height:105px"><b>Цифровое</b><div class="chips"><span class="chip">01</span><span class="chip">{ }</span></div></div></div><p>Масштабировать свободно, оставлять много воздуха и не снижать контраст.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    8,
    "01 / БРЕНДБУК",
    "Фотостиль",
    "Естественные ситуации обучения с реальными участниками и рабочими задачами. Изображения ниже — концептуальные иллюстрации, не фотографии сотрудников IT ADIS.",
    {
      html: `<div class="photogrid"><div class="photo"><div class="screen"></div></div><div class="photo alt"><div class="screen"></div></div><div class="photo"><div class="screen"></div></div></div>${panel("Как снимать", `<ul class="bullets"><li>Студенты погружены в задачу, преподаватель помогает рядом</li><li>Командная работа и взаимодействие за экраном</li><li>Дневной или мягкий нейтральный свет, естественные эмоции</li><li>Показывать реальные компьютеры и учебную среду</li><li>Избегать чрезмерной постановочности и игровых клише</li></ul><span class="note">Иллюстративные макеты. Для публикации заменить на согласованные фотографии центра.</span>`)} `,
    },
  ),
);
slides.push(
  slide(
    9,
    "02 / МАТЕРИАЛЫ",
    "Визитка",
    "Макет двусторонней визитки без вымышленных контактов. Поля для имени, должности и контакта заполняются заказчиком.",
    {
      html: `<div class="mockrow"><div class="mock" style="background:#102840;color:white"><div>${logo(false, true)}</div><div class="tagline">Обучение<br>с практикой.</div><div class="note" style="color:#b8c8d9">IT ADIS · Окуу борбору</div></div><div class="mock"><div class="brand"><em>IT</em> ADIS</div><div><b>Имя Фамилия</b><p>Должность</p><div class="line"></div><p>Телефон · Email</p></div><div class="note">Данные для заполнения заказчиком</div></div></div>${panel("Параметры макета", `<ul class="bullets"><li>Формат 90 × 50 мм, вылеты и профиль — по требованиям типографии</li><li>Лицевая сторона — бренд и лаконичное сообщение</li><li>Оборот — имя, должность и подтверждённые контакты</li><li>Цвета сверить с логотипом и цветопробой</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    10,
    "02 / МАТЕРИАЛЫ",
    "Фирменный бланк",
    "Аккуратный шаблон для официальной переписки. Юридические реквизиты и контакты не указаны до получения данных.",
    {
      html: `<div class="visual"><div class="printsheet"><div style="display:flex;justify-content:space-between;align-items:center">${logo(false, true)}<span class="smalltext">Исх. № ____ от ______</span></div><div style="height:2px;background:#43b86b;margin:12px 0"></div><div class="headline">Название документа</div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line short"></div><div style="position:absolute;bottom:8%;left:6%;right:6%;border-top:1px solid #dce5ef;padding-top:8px" class="smalltext">Реквизиты и контакты — заполняются заказчиком</div></div></div>${panel("Система документа", `<ul class="bullets"><li>Логотип в верхней зоне с охранным полем</li><li>Заголовки и основной текст имеют ясную иерархию</li><li>Тонкая цветовая линия отделяет шапку</li><li>Футер зарезервирован под подтверждённые реквизиты</li></ul><p class="note">Макет концептуальный; поля и формат листа подтвердить перед печатью.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    11,
    "02 / МАТЕРИАЛЫ",
    "Бейдж",
    "Единый шаблон для сотрудника и преподавателя. Фото, имя и должность — заменяемые поля.",
    {
      html: `<div class="mockrow">${["СОТРУДНИК", "ПРЕПОДАВАТЕЛЬ"].map((x, i) => `<div class="panel" style="display:flex;flex-direction:column;align-items:center;justify-content:space-around"><div class="badge">IT<br>ADIS<br><small>${x}</small></div><b>Имя Фамилия</b><span class="note">${i ? "Курс / направление" : "Должность"}</span></div>`).join("")}</div>${panel("Применение", `<p>Высокий контраст имени, крупная категория, отверстие или клипса для крепления. Для посетителей — отдельная цветовая метка, если потребуется.</p><div class="chips"><span class="chip">Ламинация</span><span class="chip">Печать</span><span class="chip">Шнурок</span></div>`)} `,
    },
  ),
);
slides.push(
  slide(
    12,
    "02 / МАТЕРИАЛЫ",
    "Сертификат",
    "Макет сертификата об окончании курса. Название курса, имя, дата, подписи и подтверждённая система выдачи заполняются заказчиком.",
    {
      html: `<div class="visual"><div class="printsheet" style="aspect-ratio:1.414;border:1px solid #dce5ef;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column"><div style="position:absolute;inset:12px;border:1px solid #43b86b;pointer-events:none"></div>${logo(false, true)}<span class="eyebrow" style="margin-top:12px">СЕРТИФИКАТ</span><div class="headline" style="font-size:clamp(18px,3vw,36px)">об окончании курса</div><span class="smalltext">Настоящим подтверждается, что</span><div style="font-size:clamp(15px,2vw,24px);font-weight:800;margin:8px">Имя Фамилия</div><span class="smalltext">успешно завершил(а) курс «Название курса»</span><div style="display:flex;justify-content:space-between;width:80%;margin-top:25px" class="smalltext"><span>Дата _______</span><span>Подпись _______</span></div></div></div>${panel("Визуальная логика", `<ul class="bullets"><li>Спокойная рамка на основе фирменного зелёного</li><li>Логотип и название программы хорошо читаются</li><li>Поля для даты, подписи и данных получателя не заполняются вымышленной информацией</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    13,
    "02 / МАТЕРИАЛЫ",
    "Благодарственное письмо",
    "Образец оформления благодарности без вымышленных адресатов и подписантов.",
    {
      html: `<div class="visual"><div class="printsheet"><div style="display:flex;justify-content:space-between">${logo(false, true)}<span class="eyebrow">IT ADIS</span></div><div class="headline" style="margin-top:30px">Благодарственное письмо</div><p style="font-size:9px;color:#617188;line-height:1.7">Уважаемый(ая) __________________,<br><br>Благодарим Вас за вклад и сотрудничество. Ваша поддержка помогает развивать обучение и создавать возможности для практики.<br><br>С уважением,<br>Команда IT ADIS</p><div style="position:absolute;bottom:8%;left:6%;right:6%;border-top:2px solid #43b86b"></div></div></div>${panel("Тон и оформление", `<p class="tagline">Тёпло, уважительно, по делу.</p><ul class="bullets"><li>Свободная композиция с аккуратной шапкой</li><li>Имя адресата и основания благодарности вводятся после подтверждения</li><li>Подпись и реквизиты остаются на согласование</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    14,
    "02 / МАТЕРИАЛЫ",
    "Социальные сети",
    "Шаблоны поста, Stories и объявления о наборе. Формулировки курса и условия оставлены как поля для подтверждения.",
    {
      html: `<div class="mockrow"><div class="panel" style="display:grid;place-items:center"><div class="poster"><span class="eyebrow">IT ADIS • ОКУУ БОРБОРУ</span><h3>Учись.<br>Создавай.<br>Расти.</h3><span>Набор на курс<br>[название курса]</span><span class="cta">Подробности →</span></div></div><div class="panel" style="display:grid;place-items:center"><div class="mockphone"><div class="brand"><em>IT</em> ADIS</div><div class="poster"><span class="eyebrow">ЖАҢЫ КУРС</span><h3>Набор<br>открыт</h3><span>[курс] · [дата]</span><span class="cta">Катталуу</span></div><small>IT ADIS • Story</small></div></div></div>${panel("Заменяемые данные", `<div class="kv"><div><b>Курс</b>[название]</div><div><b>Старт</b>[дата]</div><div><b>Формат</b>[очно / онлайн]</div><div><b>Запись</b>[подтверждённая ссылка / QR]</div></div>`)} `,
    },
  ),
);
slides.push(
  slide(
    15,
    "02 / МАТЕРИАЛЫ",
    "Мерч",
    "Лаконичная система для повседневных вещей. На мерче размещать исходный знак без декоративной модификации.",
    {
      html: `<div class="visual"><div style="display:flex;align-items:center;gap:18px;position:relative;z-index:1"><div style="width:45%;height:210px;background:#15314b;border-radius:70px 70px 22px 22px;position:relative;display:grid;place-items:center;color:white"><div style="position:absolute;top:-12px;width:70px;height:30px;border-radius:0 0 18px 18px;background:#f4f7fb"></div>${logo(true, true)}</div><div style="display:flex;flex-direction:column;gap:12px"><div style="width:100px;height:130px;background:#fff;border-radius:5px;box-shadow:0 8px 22px #152b4230;padding:12px"><div class="brand"><em>IT</em> ADIS</div><div style="height:2px;background:#43b86b;margin-top:50px"></div></div><div style="width:130px;height:14px;background:#1a2737;border-radius:10px;transform:rotate(-15deg)"><span style="display:block;background:#43b86b;width:26px;height:100%;border-radius:10px"></span></div></div></div><span class="caption">Концептуальный мокап</span></div>${panel("Носители", `<ul class="bullets"><li>Футболка / худи — небольшой знак на груди или рукаве</li><li>Блокнот — знак на обложке, паттерн внутри</li><li>Ручка — компактное имя бренда при достаточном размере</li></ul><p class="note">Цвет ткани, способ нанесения и тираж определить с заказчиком и производством.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    16,
    "02 / МАТЕРИАЛЫ",
    "Роллап и флаер",
    "Макеты для мероприятий и привлечения студентов. Контактный блок оставлен под подтверждённую информацию.",
    {
      html: `<div class="visual"><div style="display:flex;align-items:flex-end;gap:14px;position:relative;z-index:1;height:90%"><div class="poster" style="height:94%;width:39%;border-radius:4px 4px 0 0"><span class="eyebrow">IT ADIS</span><h3>IT начинается<br>с практики</h3><span>Окуу борбору<br>[курс / набор]</span><span class="cta">Узнать больше</span></div><div class="printsheet" style="width:35%;aspect-ratio:.72;height:75%;padding:8%"><div class="brand"><em>IT</em> ADIS</div><div class="headline">Набор<br>на курс</div><div class="line"></div><div class="line"></div><div class="line short"></div><div style="height:35px;background:#e9f2fb;border-radius:5px;margin-top:15px"></div></div></div></div>${panel("Контент макета", `<ul class="bullets"><li>Один главный тезис и заметный призыв к действию</li><li>Описание курса, дата, формат и условия — подтверждённые данные</li><li>QR-код только на действующую страницу или контакт</li><li>Формат и вылеты согласовать с типографией</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    17,
    "02 / МАТЕРИАЛЫ",
    "Шаблоны навигации",
    "Навигационная система должна быть понятна на двух языках; названия аудиторий и назначения требуют подтверждения.",
    {
      html: `<div class="cards3">${[
        ["→", "Кабинеттер", "Аудитории"],
        ["01", "Окуу залы", "Учебные классы"],
        ["i", "Маалымат", "Информация"],
      ]
        .map(
          (a) =>
            `<div class="panel" style="display:flex;flex-direction:column;justify-content:space-between;min-height:180px"><span style="font-size:40px;color:#1769d2;font-weight:800">${a[0]}</span><b>${a[1]}</b><span class="note">${a[2]}</span></div>`,
        )
        .join(
          "",
        )}</div>${panel("QR-материалы", `<div style="display:flex;align-items:center;gap:20px"><div style="width:96px;height:96px;background:repeating-conic-gradient(#142338 0 25%,white 0 50%) 50%/12px 12px;border:8px solid white;box-shadow:0 0 0 1px #dce5ef"></div><div><b>Сканируйте для информации</b><p>QR-макет показан как заглушка. Подключить проверенную ссылку при финализации.</p></div></div><div class="chips"><span class="chip">RU</span><span class="chip">KG</span><span class="chip">Высокий контраст</span></div>`)} `,
    },
  ),
);
slides.push(
  slide(
    18,
    "03 / ИНТЕРЬЕР",
    "Спокойная технологичная среда",
    "Современный и уютный учебный центр: нейтральная основа, синие и зелёные акценты, естественный свет и практичные зоны.",
    {
      html: `${room()}${panel("Принципы интерьера", `<ul class="bullets"><li>Рабочая атмосфера вместо визуального шума игровой комнаты</li><li>Светлые плоскости, тёплые натуральные фактуры</li><li>Фирменные цвета дозированно: ориентиры, навигация, детали</li><li>Реальные планы и размеры помещения нужны для проектирования</li></ul><p class="note">Все интерьерные изображения в презентации — концептуальные; планировка не задана.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    19,
    "03 / ИНТЕРЬЕР",
    "Входная группа",
    "Понятный вход, читаемая вывеска и спокойная фирменная графика встречают посетителя и направляют внутрь.",
    {
      html: `${room("Концептуальный эскиз входа")}${panel("Фасадная логика", `<div style="background:#eaf0f5;border-radius:12px;padding:18px"><div class="sign">IT ADIS <small style="color:#718298">Окуу борбору</small></div><div style="height:68px;margin-top:12px;background:linear-gradient(90deg,#dce7f0 30%,#b6ccdc 30% 32%,#e5edf3 32%);border:4px solid white"></div></div><ul class="bullets"><li>Вывеска с оригинальным логотипом и проверяемым контрастом</li><li>Ненавязчивая геометрическая графика на стене</li><li>Размер, крепления и освещение определить по фасаду и нормам</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    20,
    "03 / ИНТЕРЬЕР",
    "Ресепшен",
    "Стойка администратора с логотипом, фирменными цветами и мягким архитектурным освещением.",
    {
      html: `${visual(`<div class="room"><div style="position:absolute;left:10%;top:20%;width:36%;height:18%;background:#fff;border-radius:6px;display:grid;place-items:center">${logo(false, true)}</div><div style="position:absolute;bottom:18%;left:12%;width:66%;height:27%;background:#fff;border-radius:6px;box-shadow:0 12px 15px #43566a22"></div><div style="position:absolute;bottom:18%;left:12%;width:66%;height:7px;background:#43b86b"></div><div class="plant" style="right:8%"></div><span class="roomlabel">Световая линия • ориентир стойки</span></div>`)}${panel("Детали концепции", `<ul class="bullets"><li>Логотип на лицевой панели стойки без изменения оригинала</li><li>Синий и зелёный — в навигации и световых акцентах</li><li>Рабочий свет без бликов в поле зрения посетителя</li><li>Габариты стойки определяются после обмера помещения</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    21,
    "03 / ИНТЕРЬЕР",
    "Зона ожидания",
    "Удобное место для студентов и посетителей с простой навигацией и спокойной посадкой.",
    {
      html: `${visual(`<div class="room"><div style="position:absolute;bottom:18%;left:12%;width:56%;height:25%;background:#48708a;border-radius:18px 18px 5px 5px"></div><div style="position:absolute;bottom:17%;left:13%;width:54%;height:8%;background:#d4b18a;border-radius:5px"></div><div style="position:absolute;bottom:15%;right:13%;width:22%;height:8%;background:#b58b66;border-radius:50%"></div><div class="plant"></div><span class="roomlabel">Ожидание • спокойная посадка • навигация</span></div>`)}${panel("Опыт посетителя", `<ul class="bullets"><li>Удобная мебель с местом для личных вещей</li><li>Понятная информация о расписании и начале занятий</li><li>Небольшой зелёный акцент и долговечные материалы</li><li>Вместимость зависит от реальной площади и потока посетителей</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    22,
    "03 / ИНТЕРЬЕР",
    "Учебная аудитория",
    "Концепция учебного класса с рабочими местами, местом преподавателя, экраном и доской. Количество мебели и компьютеров не задано.",
    {
      html: `${visual(`<div class="room"><div class="window"></div><div style="position:absolute;left:8%;top:17%;width:20%;height:29%;background:#e8f5ec;border:5px solid white"></div><div class="monitor" style="left:40%"></div><div class="desk" style="left:10%;width:70%"></div><div class="monitor" style="left:68%;width:17%;height:18%;bottom:32%"></div><div class="plant"></div><span class="roomlabel">Рабочий свет • экран • доска • кабель-менеджмент</span></div>`)}${panel("Комфорт и оснащение", `<ul class="bullets"><li>Мониторы без бликов; экран и доска видны с рабочих мест</li><li>Равномерное освещение и отдельный свет у доски</li><li>Кабели уложены и закреплены, проходы свободны</li><li>Эргономичные кресла и столы под реальные задачи обучения</li><li>Расстановка и количество техники определяются планом и группой</li></ul>`)} `,
    },
  ),
);
slides.push(
  slide(
    23,
    "03 / ИНТЕРЬЕР",
    "Компьютерный класс / IT-лаборатория",
    "Современные рабочие места для изучения программирования и цифровых инструментов.",
    {
      html: `${visual(`<div class="room"><div class="window"></div><div class="desk" style="left:8%;width:84%"></div><div class="monitor" style="left:11%;width:20%"></div><div class="monitor" style="left:40%;width:20%"></div><div class="monitor" style="left:69%;width:20%"></div><div class="plant"></div><span class="roomlabel">Схема рабочих мест • оборудование концептуально</span></div>`)}${panel("Требования к лаборатории", `<ul class="bullets"><li>Рабочая поверхность и кресло для длительной работы</li><li>Питание и сеть спроектировать по числу мест после утверждения</li><li>Учесть вентиляцию и теплоотвод оборудования</li><li>Оставить преподавателю обзор группы и доступ к демонстрации</li></ul><p class="note">Число мест, конфигурации компьютеров и требования к сети пока неизвестны.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    24,
    "03 / ИНТЕРЬЕР",
    "Зона групповой работы",
    "Гибкое место для обсуждений, совместных проектов и коротких презентаций.",
    {
      html: `${visual(`<div class="room"><div class="window"></div><div style="position:absolute;bottom:22%;left:20%;width:55%;height:12%;background:#b58b66;border-radius:6px"></div><div style="position:absolute;bottom:10%;left:18%;width:16%;height:15%;background:#48708a;border-radius:10px 10px 2px 2px"></div><div style="position:absolute;bottom:10%;left:62%;width:16%;height:15%;background:#43b86b;border-radius:10px 10px 2px 2px"></div><div class="plant"></div><span class="roomlabel">Командный стол • поверхность для идей</span></div>`)}${panel("Формат работы", `<ul class="bullets"><li>Передвижная мебель для разных размеров команд</li><li>Доска или экран для фиксации идей</li><li>Розетки доступны без удлинителей через проходы</li><li>Акустические поверхности смягчают шум обсуждений</li></ul><div class="chips"><span class="chip">Обсуждение</span><span class="chip">Проект</span><span class="chip">Демонстрация</span></div>`)} `,
    },
  ),
);
slides.push(
  slide(
    25,
    "03 / ИНТЕРЬЕР",
    "Коридоры и навигация",
    "Одинаковая логика указателей, номеров аудиторий и информационных стендов на двух языках.",
    {
      html: `<div class="visual"><div style="width:88%;height:78%;background:linear-gradient(90deg,#eff3f6,#d9e2e8);border-radius:8px;position:relative;box-shadow:0 15px 30px #14233822"><div style="position:absolute;left:8%;right:8%;top:18%;height:7px;background:#b0c2d1"></div><div class="sign" style="position:absolute;top:29%;left:10%">01 &nbsp; → &nbsp; IT лаборатория<br><small>IT лабораториясы</small></div><div class="sign" style="position:absolute;top:58%;right:10%;background:#102840;color:#fff">← &nbsp; Окуу залы<br><small>Учебный класс</small></div><div style="position:absolute;bottom:0;left:0;right:0;height:22%;background:#cdd9e1"></div></div></div>${panel("Навигационная система", `<table class="tablemock"><tr><td>01</td><td>Класс / Класс</td><td>Синий</td></tr><tr><td>→</td><td>Направление / Багыт</td><td>Зелёный акцент</td></tr><tr><td>i</td><td>Информация / Маалымат</td><td>Нейтральный</td></tr></table><p class="note">Названия, номера и язык приоритета сверить с планом помещений заказчика.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    26,
    "03 / ИНТЕРЬЕР",
    "Информационная бренд-зона",
    "Точка узнаваемости и фон для фотографий студентов. Логотип используется только в оригинальном виде.",
    {
      html: `${visual(`<div class="room"><div style="position:absolute;left:12%;right:12%;top:18%;height:48%;background:#102840;border-radius:4px;display:flex;align-items:center;justify-content:center"><div>${logo(true)}</div><div style="position:absolute;right:5%;bottom:10%;color:#70da96;font-size:10px;font-weight:800">УЧИСЬ • СОЗДАВАЙ • РАСТИ</div></div><div style="position:absolute;bottom:16%;left:35%;width:28%;height:30%;background:#48708a;border-radius:50% 50% 0 0"></div><div class="roomlabel">Фото-зона • сообщение уточнить с заказчиком</div></div>`)}${panel("Применение зоны", `<ul class="bullets"><li>Равномерное фронтальное освещение для фото и видео</li><li>Свободное пространство перед стеной</li><li>Матовая отделка помогает избежать бликов</li><li>Слоган и текст утверждаются заказчиком</li></ul><p class="note">Фраза в визуализации — пример композиции; финальную формулировку согласовать.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    27,
    "03 / ИНТЕРЬЕР",
    "Материалы и освещение",
    "Спокойная отделка и свет, удобные для занятий и работы за экраном.",
    {
      html: `${panel("Палитра материалов", `<div class="swatches"><div class="swatch" style="background:#edf1f4;color:#142338"><span>Стены</span>матовая светлая</div><div class="swatch" style="background:#c5b49e;color:#142338"><span>Акцент</span>тёплое дерево</div><div class="swatch" style="background:#cdd6dd;color:#142338"><span>Пол</span>нейтральный износостойкий</div><div class="swatch" style="background:#fff;color:#142338;border:1px solid #dce5ef"><span>Потолок</span>светлый акустический</div><div class="swatch" style="background:#1769d2"><span>Навигация</span>синий ориентир</div><div class="swatch" style="background:#43b86b"><span>Акцент</span>зелёный точечно</div></div>`)}${panel("Свет и комфорт", `<ul class="bullets"><li>Мягкое равномерное освещение без резких контрастов</li><li>Управление дневным светом и бликами на мониторах</li><li>Отдельный свет у доски и презентационной зоны</li><li>Акустика, износостойкость и уборка учитываются при выборе материалов</li></ul><p class="note">Подбор отделки требует обмера, оценки инженерных систем и проверки образцов.</p>`)} `,
    },
  ),
);
slides.push(
  slide(
    28,
    "04 / ИТОГ",
    "Единая система IT ADIS",
    "Бренд становится цельным опытом: от первого контакта и печатных материалов до навигации и учебного пространства.",
    {
      html: `<div class="visual"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:86%;position:relative;z-index:1"><div class="panel" style="text-align:center">${logo(false, true)}<p>Логотип</p></div><div class="panel"><div class="swatches" style="grid-template-columns:1fr 1fr"><div class="swatch" style="background:#1769d2;min-height:42px">Синий</div><div class="swatch" style="background:#43b86b;min-height:42px">Зелёный</div></div><p>Цвета</p></div><div class="panel"><b style="font-size:18px">Aa</b><p>Типографика</p></div><div class="panel"><div class="brand"><em>IT</em> ADIS</div><p>Материалы</p></div><div class="panel"><span style="color:#1769d2;font-size:24px">→ 01</span><p>Навигация</p></div><div class="panel"><div style="height:42px;background:#e2eaf1;border-radius:8px;display:grid;place-items:center;color:#1769d2;font-weight:800">IT CLASS</div><p>Интерьер</p></div></div></div>${panel("Следующий шаг", `<p class="tagline">Уточнить исходные данные → адаптировать макеты → подготовить к производству.</p><p>Концепция показывает направление и набор носителей. Финальная спецификация зависит от утверждённых исходников, контента и замеров.</p>`)} `,
    },
  ),
);
slides.push(
  `<section class="slide dark" data-slide="29">${slideTop(29, "04 / ИТОГ")}<div class="content" style="grid-template-columns:1fr;place-items:center;text-align:center"><div><div style="display:grid;place-items:center;margin-bottom:25px">${logo(true)}</div><span class="eyebrow">IT ADIS • ОКУУ БОРБОРУ</span><h2 class="title" style="margin:18px auto">Билимден<br><span style="color:#70da96">тажрыйбага.</span></h2><p class="subtitle" style="margin-inline:auto">Спасибо за внимание · Рахмат</p></div></div><div class="coverfoot"><span>Брендбук и дизайн интерьера</span><span>Концепция для согласования</span></div></section>`,
);
document.querySelector("#deck").innerHTML = slides.join("");
let current = 0;
const all = [...document.querySelectorAll(".slide")];
const notice = document.querySelector("#notice");
function show(i) {
  current = (i + all.length) % all.length;
  all.forEach((s, n) => {
    s.classList.toggle("active", n === current);
    s.setAttribute("aria-hidden", n === current ? "false" : "true");
  });
  document.querySelector("#counter").textContent =
    `${String(current + 1).padStart(2, "0")} / ${String(all.length).padStart(2, "0")}`;
  document.querySelector("#progress").style.width =
    `${((current + 1) / all.length) * 100}%`;
  history.replaceState(null, "", `#${current + 1}`);
}
document.querySelector("#prev").onclick = () => show(current - 1);
document.querySelector("#next").onclick = () => show(current + 1);
document.querySelector("#full").onclick = async () => {
  try {
    if (!document.fullscreenElement)
      await document.querySelector(".deck").requestFullscreen();
    else await document.exitFullscreen();
  } catch {
    toast("Полноэкранный режим недоступен в этом браузере.");
  }
};
document.querySelector("#print").onclick = () => window.print();
document.addEventListener("keydown", (e) => {
  if (["ArrowRight", "PageDown", " "].includes(e.key)) {
    e.preventDefault();
    show(current + 1);
  }
  if (["ArrowLeft", "PageUp"].includes(e.key)) {
    e.preventDefault();
    show(current - 1);
  }
  if (e.key === "Home") show(0);
  if (e.key === "End") show(all.length - 1);
  if (e.key === "Escape" && document.fullscreenElement)
    document.exitFullscreen();
});
let touchX = 0;
document
  .querySelector(".deck")
  .addEventListener(
    "touchstart",
    (e) => (touchX = e.changedTouches[0].screenX),
    { passive: true },
  );
document.querySelector(".deck").addEventListener(
  "touchend",
  (e) => {
    let dx = e.changedTouches[0].screenX - touchX;
    if (Math.abs(dx) > 55) show(current + (dx < 0 ? 1 : -1));
  },
  { passive: true },
);
function toast(t) {
  notice.textContent = t;
  notice.classList.add("show");
  setTimeout(() => notice.classList.remove("show"), 3800);
}
function loadLogo() {
  const imgs = [...document.querySelectorAll(".logo-slot img")];
  let missing = 0;
  imgs.forEach((img) => {
    img.onload = () => img.closest(".logo-slot").classList.remove("missing");
    img.onerror = () => {
      missing++;
      img.closest(".logo-slot").classList.add("missing");
      if (missing === 1)
        toast(
          "Не найден public/logo.png. Добавьте оригинальный логотип заказчика: placeholder заменится автоматически.",
        );
    };
    img.src = logoPath;
  });
}
show(
  Math.max(
    0,
    Math.min(all.length - 1, (parseInt(location.hash.slice(1), 10) || 1) - 1),
  ),
);
loadLogo();

