const projects = [
  {
    name: "Moon Germs",
    url: "moongerms",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/moon_germs/thumbnail.gif",
    video: "https://youtu.be/npFgwcqw3Ks",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "GloPhones",
    url: "glophones",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/glophones/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "Bredboard",
    url: "bredboard",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/bredboard/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "La Java",
    url: "lavjava",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/la_java/thumbnail.png",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "Djangocaster",
    url: "djangocaster",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/djangocaster/thumbnail.jpg",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "Furniture",
    url: "furniture",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/furniture/thumbnail.jpg",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "Word Clock",
    url: "wordclock",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/word_clock/thumbnail.jpg",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "Proximidi",
    url: "proximidi",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/proximidi/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    name: "Astronomical Clock",
    url: "astronomicalclock",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/astronomical_clock/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Rival Road",
    url: "rivalroad",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/rival_road/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Podium",
    url: "podium",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/podium/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Fieldtrip to Mars",
    url: "marsbus",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/fieldtrip_to_mars/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "SELFIE Mirror",
    url: "selfie",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/selfie_mirror/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Dorothy",
    url: "dorothy",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/dorothy/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Facebook Mentions",
    url: "facebookmentions",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/facebook_mentions/thumbnail.jpg",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Social Cooler",
    url: "socialcooler",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/social_cooler/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Social Dash",
    url: "socialdash",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/social_dash/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Trigger Pad",
    url: "triggerpad",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/trigger_pad/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Baby Bug",
    url: "babybug",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/baby_bug/thumbnail.jpg",
    gallery: [],
    video: "null",
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Cyro",
    url: "cyro",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/cyro/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Cyro V2",
    url: "cyro2",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/cyro_v2/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "JetPRo",
    url: "jetpro",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/jetpro/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    name: "Siphonobot",
    url: "siphonobot",
    thumbnail:
      "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/siphonobot/thumbnail.gif",
    gallery: [],
    video: "null",
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  }
];

export default projects;
