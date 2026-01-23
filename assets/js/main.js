const translations = {
    pl: {
        nav_try_free: "Wypróbuj za darmo",
        hero_title: "Automatyczna kilometrówka dla Twojej firmy",
        hero_subtitle: "Kilometrik automatycznie zapisuje Twoje trasy w tle. Bez klikania, bez zapominania. Gotowe zestawienie dla księgowości w zasięgu ręki.",
        hero_cta_primary: "Wypróbuj za darmo",
        how_it_works_title: "Jak to działa?",
        how_step1_title: "Wykrywanie tras",
        how_step1_desc: "Aplikacja działa cicho w tle i automatycznie wykrywa trasy, ale masz pełną kontrolę – w dowolnym momencie możesz ręcznie rozpocząć, zakończyć lub edytować każdy przejazd.",
        how_step2_title: "Twoja Flota",
        how_step2_desc: "W dedykowanej zakładce możesz w każdej chwili dodać nowy samochód lub edytować już istniejące pojazdy, przypisując im odpowiednie stawki za kilometr.",
        how_step3_title: "Gotowe raporty",
        how_step3_desc: "Kilometrik generuje kompletny dokument kilometrówki zgodny z polskimi przepisami podatkowymi.",
        benefits_title: "Dlaczego Kilometrik?",
        benefit1_title: "Pełna automatyzacja",
        benefit1_desc: "Zapomnij o ręcznym wpisywaniu stanów licznika i adresów. Aplikacja robi to za Ciebie.",
        benefit2_title: "Zgodność z przepisami",
        benefit2_desc: "Dokumenty są generowane w formacie akceptowanym przez polskie urzędy skarbowe i biura rachunkowe.",
        benefit3_title: "Wiele pojazdów",
        benefit3_desc: "Zarządzaj jedną floty lub wieloma samochodami w ramach jednego konta.",
        benefit4_title: "Działa w tle",
        benefit4_desc: "Aplikacja nie wymaga Twojej uwagi podczas jazdy. Oszczędza czas i baterię.",
        pricing_title: "Proste zasady",
        pricing_free_title: "Darmowy",
        pricing_free_price: "0 zł",
        pricing_free_features: ["Do 10 tras miesięcznie", "1 pojazd", "Wszystkie funkcje raportowania"],
        pricing_pro_title: "PRO",
        pricing_pro_price: "25 zł",
        pricing_pro_period: "/ mies.",
        pricing_pro_features: ["Nielimitowane trasy", "Nielimitowane pojazdy", "Priorytetowe wsparcie", "Eksport zbiorczy"],
        pricing_trial: "30 dni okresu próbnego PRO za darmo. Bez podpinania karty.",
        trust_title: "Spokój i kontrola",
        trust_desc: "Kilometrik został zaprojektowany z myślą o polskich realiach podatkowych. Twoje dane są bezpieczne, a dokumenty zawsze poprawne i zgodne z aktualnymi przepisami.",
        trust_feat1: "Format akceptowany przez US",
        trust_feat2: "Automatyczne wyliczanie stawek",
        trust_feat3: "Ewidencja przebiegu pojazdu w zasięgu ręki",
        footer_cta: "Zacznij oszczędzać czas już dziś",
        footer_copy: "© 2026 Kilometrik. Wszelkie prawa zastrzeżone.",
        footer_terms: "Regulamin",
        footer_privacy: "Polityka prywatności",
        footer_powered: "Strona stworzona przez",
        terms_html: `
            <h1>Regulamin świadczenia usług</h1>
            <div class="space-y-6 text-slate-300">
                <section>
                    <h2>1. Postanowienia ogólne</h2>
                    <p>Niniejszy regulamin określa zasady korzystania z aplikacji Kilometrik, której właścicielem jest GreatSkill Arkadiusz Kuczewski, NIP: 7182147987.</p>
                </section>
                <section>
                    <h2>2. Rodzaj usług</h2>
                    <p>Kilometrik świadczy usługi drogą elektroniczną polegające na automatycznym i ręcznym ewidencjonowaniu przebiegu pojazdów na potrzeby rozliczeń podatkowych.</p>
                </section>
                <section>
                    <h2>3. Subskrypcja i Płatności</h2>
                    <ul>
                        <li>Wersja Darmowa: Pozwala na ewidencję do 10 tras miesięcznie dla jednego pojazdu.</li>
                        <li>Wersja PRO: Nielimitowana liczba tras i pojazdów, dostępna w modelu subskrypcyjnym (25 zł/mies.).</li>
                        <li>Okres próbny: Użytkownik ma prawo do 30-dniowego bezpłatnego testu wersji PRO.</li>
                    </ul>
                </section>
                <section>
                    <h2>4. Odpowiedzialność</h2>
                    <p>Usługodawca dokłada wszelkich starań, aby generowane raporty były zgodne z aktualnymi przepisami, jednak ostateczna weryfikacja poprawności danych przedłożonych organom podatkowym spoczywa na Użytkowniku.</p>
                </section>
                <section>
                    <h2>5. Dane Kontaktowe</h2>
                    <p>Wszelkie pytania i reklamacje należy kierować pod adres e-mail: kontakt@greatskill.pl</p>
                </section>
            </div>
        `,
        privacy_html: `
            <h1>Polityka Prywatności</h1>
            <div class="space-y-6 text-slate-300">
                <section>
                    <h2>1. Administrator Danych</h2>
                    <p>Administratorem Twoich danych osobowych jest GreatSkill Arkadiusz Kuczewski, NIP: 7182147987. Kontakt: kontakt@greatskill.pl</p>
                </section>
                <section>
                    <h2>2. Zakres zbieranych danych</h2>
                    <p>W celu świadczenia usług ewidencji tras, aplikacja Kilometrik zbiera dane o lokalizacji GPS (również w tle), dane o czasie trwania podróży oraz parametry pojazdu podane przez Użytkownika.</p>
                </section>
                <section>
                    <h2>3. Cel przetwarzania</h2>
                    <p>Dane są przetwarzane wyłącznie w celu automatycznego wykrywania tras, generowania raportów oraz obsługi subskrypcji.</p>
                </section>
                <section>
                    <h2>4. Bezpieczeństwo</h2>
                    <p>Stosujemy nowoczesne standardy szyfrowania danych i nie udostępniamy Twoich danych lokalizacyjnych osobom trzecim bez Twojej wyraźnej zgody.</p>
                </section>
                <section>
                    <h2>5. Twoje prawa</h2>
                    <p>Zgodnie z RODO, masz prawo do wglądu w swoje dane, ich poprawiania, usunięcia oraz przeniesienia.</p>
                </section>
            </div>
        `
    },
    en: {
        nav_try_free: "Try for free",
        hero_title: "Automatic Mileage Tracking for Your Business",
        hero_subtitle: "Kilometrik automatically logs your trips in the background. No clicking, no forgetting. Ready-to-use reports for accounting at your fingertips.",
        hero_cta_primary: "Try for free",
        how_it_works_title: "How it works?",
        how_step1_title: "Trip detection",
        how_step1_desc: "The app runs quietly in the background and automatically detects trips, but you have full control – manually start, stop, or edit any journey at any time.",
        how_step2_title: "Your Fleet",
        how_step2_desc: "In the dedicated tab, you can add new cars or edit existing vehicles at any time, assigning them appropriate mileage rates.",
        how_step3_title: "Ready reports",
        how_step3_desc: "Kilometrik generates complete mileage logs compliant with European law and tax regulations. One click and it's ready for your accounting.",
        benefits_title: "Why Kilometrik?",
        benefit1_title: "Full automation",
        benefit1_desc: "Forget manual odometer readings and addresses. The app does it all for you.",
        benefit2_title: "Tax compliance",
        benefit2_desc: "Documents are generated in a format compliant with European law, accepted by tax authorities and accounting offices.",
        benefit3_title: "Multiple vehicles",
        benefit3_desc: "Manage one car or a whole fleet within a single account.",
        benefit4_title: "Background operation",
        benefit4_desc: "The app doesn't require your attention while driving. Saves time and battery.",
        pricing_title: "Simple Pricing",
        pricing_free_title: "Free",
        pricing_free_price: "$0",
        pricing_free_features: ["Up to 10 trips/month", "1 vehicle", "Full reporting features"],
        pricing_pro_title: "PRO",
        pricing_pro_price: "25 PLN",
        pricing_pro_period: "/ mo.",
        pricing_pro_features: ["Unlimited trips", "Unlimited vehicles", "Priority support", "Bulk export"],
        pricing_trial: "30-day PRO trial for free. No credit card required.",
        trust_title: "Trust & Control",
        trust_desc: "Kilometrik is designed for European law and tax compliance. Your data is secure, and your documents are always correct and compliant with current regulations.",
        trust_feat1: "Format accepted by tax authorities",
        trust_feat2: "Automatic rate calculation",
        trust_feat3: "Vehicle mileage logs at your fingertips",
        footer_cta: "Start saving time today",
        footer_copy: "© 2026 Kilometrik. All rights reserved.",
        footer_terms: "Terms of Service",
        footer_privacy: "Privacy Policy",
        footer_powered: "Powered by",
        terms_html: `
            <h1>Terms of Service</h1>
            <div class="space-y-6 text-slate-300">
                <section>
                    <h2>1. General Provisions</h2>
                    <p>These terms define the rules for using the Kilometrik application, owned by GreatSkill Arkadiusz Kuczewski, NIP: 7182147987.</p>
                </section>
                <section>
                    <h2>2. Type of Services</h2>
                    <p>Kilometrik provides electronic services consisting of automatic and manual recording of vehicle mileage for tax settlement purposes.</p>
                </section>
                <section>
                    <h2>3. Subscription and Payments</h2>
                    <ul>
                        <li>Free Version: Allows recording up to 10 trips per month for one vehicle.</li>
                        <li>PRO Version: Unlimited trips and vehicles, available in a subscription model (25 PLN/month).</li>
                        <li>Trial Period: The user has the right to a 30-day free trial of the PRO version.</li>
                    </ul>
                </section>
                <section>
                    <h2>4. Liability</h2>
                    <p>The Service Provider makes every effort to ensure that generated reports comply with current regulations, but ultimate verification of data submitted to tax authorities rests with the User.</p>
                </section>
                <section>
                    <h2>5. Contact Data</h2>
                    <p>Any questions or complaints should be directed to the e-mail address: kontakt@greatskill.pl</p>
                </section>
            </div>
        `,
        privacy_html: `
            <h1>Privacy Policy</h1>
            <div class="space-y-6 text-slate-300">
                <section>
                    <h2>1. Data Administrator</h2>
                    <p>The administrator of your personal data is GreatSkill Arkadiusz Kuczewski, NIP: 7182147987. Contact: kontakt@greatskill.pl</p>
                </section>
                <section>
                    <h2>2. Scope of Collected Data</h2>
                    <p>To provide mileage tracking services, Kilometrik collects GPS location data (also in the background), trip duration data, and vehicle parameters provided by the User.</p>
                </section>
                <section>
                    <h2>3. Purpose of Processing</h2>
                    <p>Data is processed solely for automatic trip detection, generating reports, and handling subscriptions.</p>
                </section>
                <section>
                    <h2>4. Security</h2>
                    <p>We use modern data encryption standards and do not share your location data with third parties without your express consent.</p>
                </section>
                <section>
                    <h2>5. Your Rights</h2>
                    <p>According to GDPR, you have the right to access, correct, delete, and transfer your data.</p>
                </section>
            </div>
        `
    }
};

const langToggle = document.getElementById('langToggle');
const langOptions = document.querySelectorAll('.lang-option');
const mainNav = document.getElementById('mainNav');

// Sticky Nav Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
}, { passive: true });

// Intersection Observer for Reveal
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function updateContent(lang) {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        const t = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });

        updateList('free-features', t.pricing_free_features);
        updateList('pro-features', t.pricing_pro_features);

        langToggle.className = `lang-toggle ${lang}`;
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        document.documentElement.lang = lang;
        document.body.classList.remove('fade-out');
    }, 200);
}

function updateList(id, items) {
    const list = document.getElementById(id);
    if (!list) return;
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = "flex items-center gap-3";
        li.innerHTML = `<span class="text-green-400">✓</span> ${item}`;
        list.appendChild(li);
    });
}

langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const nextLang = currentLang === 'pl' ? 'en' : 'pl';
    updateContent(nextLang);
});

// Modal Logic
window.openModal = function (type) {
    const modal = document.getElementById('legalModal');
    const body = document.getElementById('modalBody');
    const lang = document.documentElement.lang || 'pl';

    body.innerHTML = translations[lang][type + '_html'];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.closeModal = function () {
    const modal = document.getElementById('legalModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateContent('pl');
});

window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});
