// Calculate partners per county
const partnerData = [
    { town: "Westport", county: "Fairfield", state: "CT", partners: 65, lat: 41.1415, lng: -73.3579 },
    { town: "Stamford", county: "Fairfield", state: "CT", partners: 16, lat: 41.0534, lng: -73.5387 },
    { town: "New Haven", county: "New Haven", state: "CT", partners: 13, lat: 41.3083, lng: -72.9279 },
    { town: "Norwalk", county: "Fairfield", state: "CT", partners: 12, lat: 41.1176, lng: -73.4079 },
    { town: "Darien", county: "Fairfield", state: "CT", partners: 11, lat: 41.0787, lng: -73.4687 },
    { town: "Fairfield", county: "Fairfield", state: "CT", partners: 11, lat: 41.1408, lng: -73.2613 },
    { town: "Greenwich", county: "Fairfield", state: "CT", partners: 11, lat: 41.0262, lng: -73.6282 },
    { town: "New Canaan", county: "Fairfield", state: "CT", partners: 11, lat: 41.1468, lng: -73.4948 },
    { town: "Wilton", county: "Fairfield", state: "CT", partners: 8, lat: 41.1954, lng: -73.4379 },
    { town: "Ridgefield", county: "Fairfield", state: "CT", partners: 7, lat: 41.2815, lng: -73.4979 },
    { town: "Monroe", county: "Fairfield", state: "CT", partners: 5, lat: 41.3325, lng: -73.2073 },
    { town: "Redding", county: "Fairfield", state: "CT", partners: 5, lat: 41.3023, lng: -73.3873 },
    { town: "Middlebury", county: "Middlesex", state: "CT", partners: 4, lat: 41.5285, lng: -73.1285 },
    { town: "Newtown", county: "Fairfield", state: "CT", partners: 4, lat: 41.4142, lng: -73.3037 },
    { town: "North Haven", county: "New Haven", state: "CT", partners: 4, lat: 41.3909, lng: -72.8595 },
    { town: "Simsbury", county: "Hartford", state: "CT", partners: 4, lat: 41.8762, lng: -72.8065 },
    { town: "Waterbury", county: "New Haven", state: "CT", partners: 4, lat: 41.5581, lng: -73.0515 },
    { town: "Bridgeport", county: "Fairfield", state: "CT", partners: 3, lat: 41.1792, lng: -73.1894 },
    { town: "Orange", county: "New Haven", state: "CT", partners: 3, lat: 41.2784, lng: -73.0262 },
    { town: "Trumbull", county: "Fairfield", state: "CT", partners: 3, lat: 41.2326, lng: -73.2001 },
    { town: "Branford", county: "New Haven", state: "CT", partners: 2, lat: 41.2798, lng: -72.8151 },
    { town: "Danbury", county: "Fairfield", state: "CT", partners: 2, lat: 41.3948, lng: -73.4540 },
    { town: "Hamden", county: "New Haven", state: "CT", partners: 2, lat: 41.3960, lng: -72.8971 },
    { town: "Old Greenwich", county: "Fairfield", state: "CT", partners: 2, lat: 41.0337, lng: -73.5668 },
    { town: "West Hartford", county: "Hartford", state: "CT", partners: 2, lat: 41.7621, lng: -72.7420 },
    { town: "Woodbridge", county: "New Haven", state: "CT", partners: 2, lat: 41.3526, lng: -73.0079 },
    { town: "Cheshire", county: "New Haven", state: "CT", partners: 1, lat: 41.4987, lng: -72.9015 },
    { town: "Cos Cob", county: "Fairfield", state: "CT", partners: 1, lat: 41.0332, lng: -73.5996 },
    { town: "Guilford", county: "New Haven", state: "CT", partners: 1, lat: 41.2876, lng: -72.6815 },
    { town: "Haddam Neck", county: "Middlesex", state: "CT", partners: 1, lat: 41.4834, lng: -72.4995 },
    { town: "Hartford", county: "Hartford", state: "CT", partners: 1, lat: 41.7658, lng: -72.6734 },
    { town: "Milford", county: "New Haven", state: "CT", partners: 1, lat: 41.2306, lng: -73.0645 },
    { town: "New Milford", county: "Litchfield", state: "CT", partners: 1, lat: 41.5776, lng: -73.4079 },
    { town: "Southington", county: "Hartford", state: "CT", partners: 1, lat: 41.5964, lng: -72.8776 },
    { town: "Stratford", county: "Fairfield", state: "CT", partners: 1, lat: 41.1845, lng: -73.1332 },
    { town: "Wallingford", county: "New Haven", state: "CT", partners: 1, lat: 41.4573, lng: -72.8234 },
    { town: "Waterford", county: "New London", state: "CT", partners: 1, lat: 41.3556, lng: -72.1637 }
];

const partnersPerCounty = partnerData.reduce((acc, partner) => {
    acc[partner.county] = (acc[partner.county] || 0) + partner.partners;
    return acc;
}, {});

// Updated color palette for counties
const countyColors = {
    "Fairfield": "#9EA791",  // Sage Green
    "Hartford": "#708238",   // Olive Green
    "Litchfield": "#E2725B", // Terracotta
    "Middlesex": "#D7837F",  // Dusty Rose
    "New Haven": "#954535",  // Chestnut
    "New London": "#635147", // Umber
    "Tolland": "#8A9A5B",    // Moss Green
    "Windham": "#A0522D"     // Burnt Sienna
};

var simplemaps_statemap_mapdata = {
  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    state_description: "County description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    label_color: "#000000",
    label_hover_color: "#000000",
    label_size: "14",
    label_font: "Arial",
    hide_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    div: "state-map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "no",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    "09001": {
      name: "Fairfield",
      description: `Fairfield County<br>Partners: ${partnersPerCounty['Fairfield'] || 0}`,
      color: countyColors["Fairfield"],
      hover_color: "#3B729F",
      lat: 41.2565,
      lng: -73.3709
    },
    "09003": {
      name: "Hartford",
      description: `Hartford County<br>Partners: ${partnersPerCounty['Hartford'] || 0}`,
      color: countyColors["Hartford"],
      hover_color: "#3B729F",
      lat: 41.7636,
      lng: -72.6855
    },
    "09005": {
      name: "Litchfield",
      description: `Litchfield County<br>Partners: ${partnersPerCounty['Litchfield'] || 0}`,
      color: countyColors["Litchfield"],
      hover_color: "#3B729F",
      lat: 41.7926,
      lng: -73.2290
    },
    "09007": {
      name: "Middlesex",
      description: `Middlesex County<br>Partners: ${partnersPerCounty['Middlesex'] || 0}`,
      color: countyColors["Middlesex"],
      hover_color: "#3B729F",
      lat: 41.4569,
      lng: -72.5323
    },
    "09009": {
      name: "New Haven",
      description: `New Haven County<br>Partners: ${partnersPerCounty['New Haven'] || 0}`,
      color: countyColors["New Haven"],
      hover_color: "#3B729F",
      lat: 41.4080,
      lng: -72.9320
    },
    "09011": {
      name: "New London",
      description: `New London County<br>Partners: ${partnersPerCounty['New London'] || 0}`,
      color: countyColors["New London"],
      hover_color: "#3B729F",
      lat: 41.3556,
      lng: -72.1000
    },
    "09013": {
      name: "Tolland",
      description: `Tolland County<br>Partners: ${partnersPerCounty['Tolland'] || 0}`,
      color: countyColors["Tolland"],
      hover_color: "#3B729F",
      lat: 41.8511,
      lng: -72.3317
    },
    "09015": {
      name: "Windham",
      description: `Windham County<br>Partners: ${partnersPerCounty['Windham'] || 0}`,
      color: countyColors["Windham"],
      hover_color: "#3B729F",
      lat: 41.8227,
      lng: -71.9978
    }
  },
  labels: {
    "09001": {
      parent_id: "09001",
      x: "200",
      y: "660",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09003": {
      parent_id: "09003",
      x: "530",
      y: "250",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09005": {
      parent_id: "09005",
      x: "280",
      y: "180",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09007": {
      parent_id: "09007",
      x: "620",
      y: "480",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09009": {
      parent_id: "09009",
      x: "400",
      y: "560",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09011": {
      parent_id: "09011",
      x: "780",
      y: "460",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09013": {
      parent_id: "09013",
      x: "680",
      y: "260",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    },
    "09015": {
      parent_id: "09015",
      x: "820",
      y: "160",  // Shifted up by 20
      pill: "yes",
      width: 100,
      display: "all"
    }
  }
};

// Update labels to include partner count
Object.keys(simplemaps_statemap_mapdata.labels).forEach(key => {
  const county = simplemaps_statemap_mapdata.state_specific[key];
  simplemaps_statemap_mapdata.labels[key].name = `${county.name}\nPartners: ${partnersPerCounty[county.name] || 0}`;
});