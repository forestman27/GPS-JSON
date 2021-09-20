'use strict'

/**
 * Geographic tools for application
 * for some reason mapboxgljs uses lng,lat
 * everything else uses lat, lng including polyline lib in js
 * !||! Only convert to lng,lat when using mapbox visual tool
 */
class Geo {

    /**
     * @param {[lat, lng]} first 
     * @param {[lat, lng]} second 
     * 
     * should be lat, lng
     * @returns distance in meters the two points are apart
     */
    static distance (point1, point2) {
        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }
        
        let lat1 = point1[0]
        let lon1 = point1[1]
        let lat2 = point2[0]
        let lon2 = point2[1]

        var R = 6371000; // Radius of the earth in meters
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2) 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        var d = R * c // Distance in meters
        return d;
    }
}

module.exports = Geo