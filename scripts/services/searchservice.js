'use strict';

/**
 * @ngdoc service
 * @name canadaInsuranceApp.search
 * @description
 * # resource
 * Service in the canadaInsuranceApp.
 */
angular.module('canadaInsuranceApp')
    .service('searchService', function(resource) {
        var model = {
            birthday: new Date(),
            coverage: '0',
            startDate: new Date(),
            endDate: new Date()
        };

        var fields = [{
            type: "input",
            key: "birthday",
            templateOptions: {
                label: "Birthday:",
                type: 'date'
            }
        },{
            type: "select",
            key: "coverage",
            templateOptions: {
                label: "Coverage:",
                options: resource.coverages
            }
        },{
            type: "input",
            key: "startDate",
            templateOptions: {
                label: "Start Date:",
                type: 'date'
            }
        },{
            type: "input",
            key: "endDate",
            templateOptions: {
                label: "End Date:",
                type: 'date'
            }
        }];

        return {
            model: model,
            fields: fields
        };
    });
