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
function Content(cName, cURL) {
    var contentName = cName;
    var contentURL = cURL;

    this.setContentName = function (cName) {
        contentName = cName;
    }
    this.getContentName = function () {
        return contentName;
    }

    this.setContentURL = function (cURL) {
        contentURL = cURL;
    }
    this.getContentURL = function () {
        return contentURL;
    }
}
