/**
 * GuIMI: Guía Interactiva del Museo de Informática (UNPA-UARG)
 * Copyright (C) 2018 Franco Alejandro Trinidad
 *                    María Luz Almada
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 **/
function OptionsManager(mID) {
    var markerID = mID;
    var options = [];

    this.setOptions = function() {
        var oList = requestOptions();
        options = [oList.images, oList.texts, oList.videos, oList.audios]
    }

    var requestOptions = function() {
        // Request options for element with ID = elementID
        // Process JSON file
        if (markerID == 'A0001') {
            var oList = {
                        "images": 1,
                        "texts": 2,
                        "videos": 0,
                        "audios": 0
                    };
        }
        if (markerID == 'A0002') {
            var oList = {
                        "images": 2,
                        "texts": 0,
                        "videos": 0,
                        "audios": 0
                    };
        }
        if (markerID == 'A0003') {
            var oList = {
                        "images": 3,
                        "texts": 0,
                        "videos": 0,
                        "audios": 0
                    };
        }

        return oList;
    }

    this.getMarkerID = function() {
        return markerID;
    }
    this.setMarkerID = function(mID) {
        markerID = mID;
    }
    this.getOptions = function() {
        return options;
    }
}
