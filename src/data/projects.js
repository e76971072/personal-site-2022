// Projects shown on the home page (featured) and the Projects page.
// `image` paths are relative to /public. `links` render as buttons on the card.
const projects = [
  {
    title: 'DeltaDesk',
    featured: true,
    year: '2026',
    status: 'Live',
    tagline: 'Market analytics and quantitative deep research, built for every investor.',
    desc:
      'A research platform that brings institutional-grade analytics to everyone, from first-time investors '
      + 'to quants: test ideas on historical data, analyze options and volatility, dig into companies with '
      + 'AI-assisted research, and learn the markets with free courses.',
    highlights: [
      'Quantitative backtesting on historical minute data. Describe an idea in plain English and AI turns it into a test',
      'Options and volatility analytics: live chains, Greeks, gamma exposure and a 3D implied-volatility surface',
      'AI deep research: fundamentals, SEC filings, DCF and comps valuation, written up as an analyst-style report',
      'Portfolio analytics across Schwab, tastytrade and IBKR, with risk dashboards and stress tests',
    ],
    tags: ['React', 'Vite', 'D3', 'FastAPI', 'Python', 'PostgreSQL', 'AWS', 'Databricks', 'LLMs'],
    image: '/images/projects/deltadesk-portfolio.png',
    links: [
      { label: 'Visit deltadesks.com', href: 'https://deltadesks.com' },
      { label: 'Free courses', href: 'https://deltadesks.com/blog/course/stock-market-fundamentals' },
    ],
    // Product tour under the featured card. Screenshots from the tradelog repo (demo data only).
    screens: [
      { tab: 'Backtesting', src: '/images/projects/deltadesk/backtest-chart.png', title: 'Backtest any idea on historical data',
        caption: 'Add indicators as entry and exit rules and see every simulated trade on the chart, colored by P&L.' },
      { tab: 'Equity curve', src: '/images/projects/deltadesk/backtest-equity.png', title: 'See how a strategy really performed',
        caption: 'Day-by-day running P&L, drawdowns and winning versus losing days for every backtest.' },
      { tab: 'Trade journal', src: '/images/projects/deltadesk/journal-overview.png', title: 'Track every trade across accounts',
        caption: 'Win rate, profit factor, fees and drawdown per account, with open trades priced live.' },
      { tab: 'Portfolio risk', src: '/images/projects/deltadesk/portfolio-risk.png', title: 'Understand the risk in your portfolio',
        caption: 'Beta-weighted exposure, Greeks, sector mix, stress tests and alerts in one view.' },
      { tab: 'NewsDesk', src: '/images/projects/deltadesk/newsdesk.png', title: 'Market news, tagged for what matters',
        caption: 'A live news wire with AI sentiment and impact scores on every story, and the Daily Delta briefing on what moved markets.' },
      { tab: 'AI assistant', src: '/images/projects/deltadesk/backtest-assistant.png', title: 'Describe a strategy in plain English',
        caption: 'The AI assistant turns your idea into a backtest plan, asks about anything missing and runs it for you.' },
      { tab: 'Free courses', src: '/images/projects/deltadesk/course.png', title: 'Learn the markets for free',
        caption: 'Self-paced courses with worked examples and a short quiz in every lesson. No sign-up needed.' },
    ],
    // DeltaDesk's free learning hub. Each links to https://deltadesks.com/blog/course/<slug>.
    learning: {
      intro:
        'Free, self-paced guides to the markets you research on DeltaDesk: stocks, indexes, options, futures, '
        + 'bonds, commodities, currencies and crypto. Worked examples and a short quiz in every lesson, no sign-up needed.',
      courses: [
        { slug: 'stock-market-fundamentals', name: 'Stock Market Fundamentals', level: 'Beginner', blurb: 'Orders, charts, earnings reports and position sizing.' },
        { slug: 'index-fundamentals', name: 'Index Fundamentals', level: 'Beginner', blurb: 'S&P 500, Nasdaq-100, Russell 2000 and the products that track them.' },
        { slug: 'futures-fundamentals', name: 'Futures Fundamentals', level: 'Intermediate', blurb: 'Contract specs, margin, rolling and fair value for /ES and /NQ.' },
        { slug: 'options-fundamentals', name: 'Options Fundamentals', level: 'Beginner', blurb: 'Pricing, the Greeks, volatility and the risk of selling premium.' },
        { slug: 'bonds-and-interest-rates', name: 'Bonds and Interest Rates', level: 'Beginner', blurb: 'Price and yield, duration, the yield curve and the Fed.' },
        { slug: 'commodity-fundamentals', name: 'Commodity Fundamentals', level: 'Beginner', blurb: 'Energy, metals and agriculture, and how storage shapes the curve.' },
        { slug: 'currency-fx-fundamentals', name: 'Currency (FX) Fundamentals', level: 'Beginner', blurb: 'Pairs, pips, sessions, leverage and what moves exchange rates.' },
        { slug: 'crypto-fundamentals', name: 'Crypto Fundamentals', level: 'Beginner', blurb: 'Blockchains, bitcoin, stablecoins, custody and sizing for volatility.' },
      ],
      libraries: [
        { slug: 'options-strategies', name: 'Options Strategies' },
        { slug: 'stock-strategies', name: 'Stock Strategies' },
        { slug: 'index-strategies', name: 'Index Strategies' },
        { slug: 'futures-strategies', name: 'Futures Strategies' },
      ],
    },
  },
  {
    title: 'Trade Smarter',
    year: '2020',
    tagline: 'Strategy testing for retail traders.',
    desc:
      'A platform that helps retail traders test their strategies and weigh risk against reward '
      + 'before entering a trade.',
    tags: ['React', 'Python', 'Docker'],
    image: '/images/PL.png',
    links: [{ label: 'Code', href: 'https://github.com/e76971072/Trade-Smarter-Platform' }],
  },
  {
    title: 'COVID-19 Tracker',
    year: '2020',
    tagline: 'Live map of the pandemic.',
    desc: 'Tracks the spread of COVID-19 across the world and the United States.',
    tags: ['JavaScript', 'React'],
    image: '/images/project-covid.png',
    links: [{ label: 'Code', href: 'https://github.com/e76971072/COVID-19-SPREAD' }],
  },
  {
    title: 'RowdyMart',
    year: '2020',
    tagline: 'Online grocery store for college students.',
    desc:
      'A one-stop grocery shop with a catalog for everyday needs, built to help UTSA students eat healthier.',
    tags: ['PHP', 'JavaScript', 'SCSS'],
    image: 'https://github.com/e76971072/RowdyCart-User-Interface/blob/master/img/Cart-checkout-view.png?raw=true',
    links: [{ label: 'Code', href: 'https://github.com/e76971072/RowdyCart-User-Interface' }],
  },
  {
    title: 'PotTYpicker',
    year: '2019',
    tagline: 'User-rated bathroom reviews.',
    desc: 'Your go-to app for user-rated reviews of the best and worst bathrooms. UTSA team project.',
    tags: ['Java'],
    image: '/images/Potty.png',
    links: [{ label: 'Code', href: 'https://github.com/UTSA-CS-3443/PotTYpicker' }],
  },
  {
    title: 'Wardrobe',
    year: '2018',
    tagline: 'Austin Hackathon 2018.',
    desc:
      'Suggests outfits by finding the dominant color of each clothing item and picking its complementary color.',
    tags: ['JavaScript', 'HTML'],
    image: '/images/projects/complementary_app.jpeg',
    links: [{ label: 'Code', href: 'https://github.com/e76971072/AustinHackathon2018' }],
  },
];

export default projects;
