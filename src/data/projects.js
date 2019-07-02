const projects = [
  {
    moongerms: {
      name: "Moon Germs",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/moon_germs/thumbnail.gif",
      video: "https://youtu.be/npFgwcqw3Ks"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    glophones: {
      name: "GloPhones",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/glophones/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    bredboard: {
      name: "Bredboard",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/bredboard/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    lajava: {
      name: "La Java",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/la_java/thumbnail.png",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": true
    }
  },
  {
    djangocaster: {
      name: "Djangocaster",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/djangocaster/thumbnail.jpg",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": true
    }
  },
  {
    furniture: {
      name: "Furniture",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/furniture/thumbnail.jpg",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": true
    }
  },
  {
    wordclock: {
      name: "Word Clock",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/word_clock/thumbnail.jpg",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    proximidi: {
      name: "Proximidi",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/proximidi/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": true
    }
  },
  {
    astronomicalclock: {
      name: "Astronomical Clock",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/astronomical_clock/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    rivalroad: {
      name: "Rival Road",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/rival_road/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    podium: {
      name: "Podium",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/podium/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    marsbur: {
      name: "Fieldtrip to Mars",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/fieldtrip_to_mars/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": false
    }
  },
  {
    selfie: {
      name: "SELFIE Mirror",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/selfie_mirror/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    dorothy: {
      name: "Dorothy",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/dorothy/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    facebookmentions: {
      name: "Facebook Mentions",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/facebook_mentions/thumbnail.jpg",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": false
    }
  },
  {
    socialcooler: {
      name: "Social Cooler",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/social_cooler/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    socialdash: {
      name: "Social Dash",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/social_dash/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    triggerpad: {
      name: "Trigger Pad",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/trigger_pad/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    babybug: {
      name: "Baby Bug",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/baby_bug/thumbnail.jpg",
      gallery: [],
      video: "null"
    },
    filters: {
      software: false,
      electrical: false,
      mechanical: true,
      "side projects": false
    }
  },
  {
    cyro: {
      name: "Cyro",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/cyro/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    cyro2: {
      name: "Cyro V2",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/cyro_v2/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    jetpro: {
      name: "JetPRo",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/jetpro/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  },
  {
    siphonobot: {
      name: "Siphonobot",
      thumbnail:
        "https://kjmporfolio.nyc3.digitaloceanspaces.com/projects/siphonobot/thumbnail.gif",
      gallery: [],
      video: "null"
    },
    filters: {
      software: true,
      electrical: true,
      mechanical: true,
      "side projects": false
    }
  }
];

export default projects;
