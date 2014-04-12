---
title: Projects
template: page.html
---

I've had the privilege of being involved with many different open-source projects over the years.

##Geofield

Geofield is a simple geospatial data storage field for Drupal 7. Unlike many of the other Drupal geo solutions, Geofield makes it possible to store a variety of geographical information by having a storage model based on WKT instead of storing just latitude/longitude coordinates.

##GeoPHP

GeoPHP is a utility library for working with geospatial data. It's very useful for cases when you have to convert from one form of geospatial data to another (i.e, GeoJSON to KML).

##GeocoderJS

GeocoderJS is a javascript geocoding library. It was born from a need for the Geocoder Drupal module to handle client-side geocoding from multiple providers. This is important because many geocoding web services limit the amount of info you can process through their services based on IP address, and if you do all of your geocoding from a central location, you will typically run into those limits pretty quickly. Much of the API and code organization is based on Geocoder-PHP.