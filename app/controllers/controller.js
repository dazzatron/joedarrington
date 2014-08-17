angular.module('jmdApp.controllers', [])

.controller('jmdSites', ['$scope', 'jmdSharedResource', function ($scope, jmdSharedResource) {

    //jmdSharedResource.month = 'test';

    $scope.sites =
    [{
        value: "2014", site: [
        { id: 1, url: "http://adrn.ac.uk", title: 'ADRN', subtitle: 'The Administrative Data Research Network is a UK-wide partnership...', text: "between universities, government departments and agencies, national statistics authorities, funders and the wider research community.", img: "adrn.jpg", month: "jun", bgcolour: "#ff0198", fgcolour: "#fff", techs: ["HTML5", "CSS3", "Sass", "jquery", "JavaScript"] },
        { id: 2, url: "http://icem.data-archive.ac.uk/", title: 'Integrated Census microdata', subtitle: 'Census microdata for 1851 to 1911, developed by the I-CeM project.', text: "Browse and download enhanced historical census microdata for 1851 to 1911.", img: "icem.jpg", month: "feb", bgcolour: "#8f0c34", fgcolour: "#fff", techs: ["HTML5", "CSS3", "Sass", "AngularJS", "JavaScript"] },
        { id: 3, url: "http://s17668332.onlinehome-server.info", title: 'Hot Tub Assist', subtitle: 'UK\'s largest hot tub service co.', text: "", img: "hot-tub-assist.jpg", month: "jan", bgcolour: "#1abc9c", fgcolour: "#fff", techs: ["HTML5", "CSS3", "Grunt", "Sass", "Umbraco 6"] }
        ]
    },
        {
            value: "2013", site: [
            { id: 4, url: "/booking-engine/index.html", urlText: "View AngularJS version", title: 'Abercrombie & Kent', subtitle: 'Luxury holiday co.', text: "IBE (Internet booking engine) created in knockoutJS.", img: "ibe.jpg", month: "dec", bgcolour: "#fc0", fgcolour: "#ddd", techs: ["HTML5", "CSS3", "Knockout JS", "JavaScript"] },
            { id: 5, url: "http://www.sanctuaryretreats.com", title: 'Sanctuary Retreats', subtitle: 'Luxury holidays website', text: "Award winning Sanctuary Retreats is a collection of 13 luxury safari camps and lodges in Africa and 7 stunning expedition ships in China, Egypt & Galapagos.", img: "sanctuary-retreats.jpg", month: "jun", bgcolour: "#a24b30", fgcolour: "#ddd", techs: ["HTML5", "CSS3", "Social Media APIs", "Umbraco 4"] },
            { id: 6, url: "http://fbsm.thesocialstockmarket.com", title: 'Social Stock Market', subtitle: 'A site that uses various factors to rank celebs.', img: "social-stock-market.jpg", month: "jan", bgcolour: "#ffb732", fgcolour: "#fff", techs: ["HTML5", "CSS3", "Google Charts API"]}
]
        },
        {
            value: "2012", site: [
            { id: 7, url: "http://www.ukdataservice.ac.uk", title: 'UK Data Service', subtitle: 'The UK Data Archive', text: "A unified point of access to data from ESDS, Census Programme, Secure Data Service and others.", img: "ukds.jpg", month: "dec", bgcolour: "#039760", fgcolour: "#ddd" },
            { id: 8, url: "http://discover.ukdataservice.ac.uk", title: 'UKDS Discovery', subtitle: 'Discovery search engine', text: "Search and browse for data collections, support guides, case studies, and related publications.", img: "discover-ukds.jpg", month: "sep", bgcolour: "#0c2b81", fgcolour: "#ddd" },
            { id: 9, url: "http://www.hotspringworldservice.co.uk", title: 'Hotspring World Service', subtitle: 'Hot Tub Servicing company', text: "", img: "hsw-service.jpg", month: "aug", bgcolour: "#0067f9", fgcolour: "#fff", techs: ["html", "css", "google maps API"] },
            { id: 10, url: "http://www.systembridge.co.uk", title: 'Systembridge', subtitle: 'systembridge', text: "AV provider for the education and corporate sectors", img: "systembridge-1.jpg", month: "jun", bgcolour: "#0035ff", fgcolour: "#ccc" },
            ]
        }];

    $scope.months = [
        "dec",
        "nov",
        "oct",
        "sep",
        "aug",
        "jul",
        "jun",
        "may",
        "apr",
        "mar",
        "feb",
        "jan"
    ];

}]);