// Wrap all your code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    let map;
    const partnerData = [
        { town: "Westport", county: "Fairfield", state: "CT", partners: 65, lat: 41.1415, lng: -73.3579 },
        { town: "Stamford", county: "Fairfield", state: "CT", partners: 16, lat: 41.0534, lng: -73.5387 },
        { town: "Weston", county: "Fairfield", state: "CT", partners: 15, lat: 41.2001, lng: -73.3812 },
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

    function initMap() {
        console.log("initMap function called");
        map = L.map('map').setView([41.5, -73.5], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        updateMapMarkers(partnerData);
        console.log("Map drawn successfully");

        setTimeout(zoomToConnecticut, 2000);
    }

    function zoomToConnecticut() {
        const hartfordLat = 41.7658;
        const hartfordLng = -72.6734;

        const startZoom = 7;
        const endZoom = 8.5;

        const duration = 15000;
        const fps = 30;
        const frames = duration / 1000 * fps;

        let frame = 0;

        function animate() {
            if (frame <= frames) {
                const progress = frame / frames;
                const easedProgress = easeInOutCubic(progress);

                const currentZoom = startZoom + (endZoom - startZoom) * easedProgress;

                map.setView([hartfordLat, hartfordLng], currentZoom, { animate: false });

                frame++;
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function updateMapMarkers(data) {
        map.eachLayer(layer => {
            if (layer instanceof L.CircleMarker) {
                map.removeLayer(layer);
            }
        });
        data.forEach(partner => {
            const radius = calculateMarkerSize(partner.partners);
            L.circleMarker([partner.lat, partner.lng], {
                radius: radius,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            })
            .addTo(map)
            .bindPopup(`<b>${partner.town}</b><br>Partners: ${partner.partners}`);
        });
    }

    function calculateMarkerSize(partners) {
        const minSize = 5;
        const maxSize = 20;
        const minPartners = 1;
        const maxPartners = Math.max(...partnerData.map(town => town.partners));

        return minSize + (partners - minPartners) * (maxSize - minSize) / (maxPartners - minPartners);
    }

    function updateTable(data) {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = '';

        data.forEach(town => {
            const row = `
                <tr>
                    <td>${town.town}</td>
                    <td>${town.county}</td>
                    <td>${town.partners}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        startTableScroll();
    }

    function startTableScroll() {
        const tableBody = document.querySelector('#data-table tbody');
        const rowHeight = tableBody.querySelector('tr').offsetHeight;
        let scrollPosition = 0;

        function scroll() {
            scrollPosition += 0.5;
            if (scrollPosition >= rowHeight) {
                const firstRow = tableBody.querySelector('tr');
                tableBody.appendChild(firstRow);
                scrollPosition = 0;
                tableBody.scrollTop = 0;
            } else {
                tableBody.scrollTop = scrollPosition;
            }
            requestAnimationFrame(scroll);
        }

        scroll();
    }

    function rotateContent() {
        const elements = ['map', 'video', 'anniversary-video', 'state-map'];
        let currentIndex = 0;

        function showContent(index) {
            console.log(`Showing content: ${elements[index]}`);
            elements.forEach((id, i) => {
                const element = document.getElementById(id);
                if (!element) {
                    console.error(`Element not found: ${id}`);
                    return;
                }
                if (i === index) {
                    element.style.display = 'block';
                    setTimeout(() => {
                        element.classList.add('active');
                    }, 50);
                    if (element.tagName === 'VIDEO') {
                        element.currentTime = 0;
                        element.play().catch(e => console.error("Error playing video:", e));
                    } else if (id === 'state-map') {
                        simplemaps_statemap.load();
                    } else if (id === 'map') {
                        map.invalidateSize();
                    }
                } else {
                    element.classList.remove('active');
                    setTimeout(() => {
                        element.style.display = 'none';
                    }, 500); // Match this to the transition duration in CSS
                    if (element.tagName === 'VIDEO') {
                        element.pause();
                    }
                }
            });
        }

        showContent(currentIndex);
        setInterval(() => {
            currentIndex = (currentIndex + 1) % elements.length;
            showContent(currentIndex);
        }, 30000);
    }

    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    initMap();
    updateTable(partnerData);
    rotateContent();

    // Initialize the state map
    simplemaps_statemap.load();

    // Adjust label positions after map has loaded
    setTimeout(function() {
        const labels = document.querySelectorAll('#state-map .sm_label_custom');
        labels.forEach(label => {
            const rect = label.getBoundingClientRect();
            label.style.marginLeft = `-${rect.width / 2}px`;
            label.style.marginTop = `-${rect.height / 2}px`;
            label.style.whiteSpace = 'nowrap';
            label.style.textAlign = 'center';
            label.style.fontSize = '10px';
            label.style.fontWeight = 'bold';
            label.style.textShadow = '1px 1px 1px #FFFFFF, -1px -1px 1px #FFFFFF, 1px -1px 1px #FFFFFF, -1px 1px 1px #FFFFFF';
        });
    }, 1000);
     // Load the map
     simplemaps_statemap.load();

     // Function to create and position labels
     function createLabels() {
         const mapContainer = document.getElementById('state-map');
         const counties = simplemaps_statemap_mapdata.state_specific;
 
         for (let id in counties) {
             const county = counties[id];
             const label = document.createElement('div');
             label.className = 'county-label';
             label.innerHTML = `<strong>${county.name}</strong><br>Partners: ${partnersPerCounty[county.name] || 0}`;
             label.style.position = 'absolute';
             label.style.textAlign = 'center';
             label.style.fontSize = '12px';
             label.style.fontFamily = 'Arial, sans-serif';
             label.style.color = '#000000';
             label.style.textShadow = '1px 1px 1px #FFFFFF';
             label.style.pointerEvents = 'none';
 
             mapContainer.appendChild(label);
 
             // Position the label
             const point = simplemaps_statemap.mapdata.hooks.xy_hook(county.lat, county.lng);
             label.style.left = `${point.x}px`;
             label.style.top = `${point.y}px`;
             label.style.transform = 'translate(-50%, -50%)';
         }
     }
 
     // Call createLabels after a short delay to ensure the map has loaded
     setTimeout(createLabels, 1000);
 });