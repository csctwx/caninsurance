'use strict';

/**
 * @ngdoc service
 * @name canadaInsuranceApp.appUtil
 * @description
 * # resource
 * Service in the canadaInsuranceApp.
 */
angular.module('canadaInsuranceApp')
    .service('appUtil', function() {               

        var calculateAge = function calculateAge(birthday) { // birthday is a date
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        var calculateEffectAge = function calculateAge(birthday,startdate) { // birthday is a date
            var ageDifMs = startdate.getTime() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        var calculateDays = function calculateAge(startdate, enddate) { // birthday is a date
            var timeDiff = Math.abs(enddate.getTime() - startdate.getTime());   
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            var days = diffDays + 1;
            return days;            
        }

        var getPrice = function(priceList, amount, age){
            var price = '';
            if(priceList){
                for (var i = 0; i < priceList.length; i++) {
                    var ages = priceList[i].age.split('-');
                    if(age >= ages[0] && age <= ages[1]){
                        if(priceList[i]['v'+amount]){
                            price = priceList[i]['v'+amount];
                        }                        
                        break;
                    }                
                }
            }
            return price;            
        }

        var getPrices = function(travelInsurance, amount, effectiveAge, totalDays, deductible){
            var prices = '';
            var priceWith = getPrice(travelInsurance.with, amount, effectiveAge); 
            if(priceWith){
                priceWith = priceWith*(100-deductible.discount_percent)/100;
                var priceWithout = getPrice(travelInsurance.without, amount, effectiveAge);               
                priceWithout = priceWithout*(100-deductible.discount_percent)/100;
                var priceTotalWith = '';
                if(angular.isNumber(priceWith)){
                    priceTotalWith = priceWith * totalDays;
                }
                var priceTotalWithout = '';
                if(angular.isNumber(priceWithout)){
                    priceTotalWithout = priceWithout * totalDays;
                }                
                var prices = {'name':travelInsurance.name,
                    'title':travelInsurance.title,
                    'detail': [{
                        'deductible': deductible.amount,
                        'pricePerdayWith': priceWith, 
                        'pricePerdayWithout': priceWithout, 
                        'priceTotalWith': priceTotalWith, 
                        'priceTotalWithout': priceTotalWithout
                    }]
                };
            }            
            return prices;
        }

        var getDetailPrices = function(travelInsurance, amount, effectiveAge, totalDays, deductible){
            var prices = '';
            var priceWith = getPrice(travelInsurance.with, amount, effectiveAge); 
            if(priceWith){
                priceWith = priceWith*(100-deductible.discount_percent)/100;
                var priceWithout = getPrice(travelInsurance.without, amount, effectiveAge);               
                priceWithout = priceWithout*(100-deductible.discount_percent)/100;
                var priceTotalWith = '';
                if(angular.isNumber(priceWith)){
                    priceTotalWith = priceWith * totalDays;
                }
                var priceTotalWithout = '';
                if(angular.isNumber(priceWithout)){
                    priceTotalWithout = priceWithout * totalDays;
                }                
                var prices = {
                        'deductible': deductible.amount,
                        'pricePerdayWith': priceWith, 
                        'pricePerdayWithout': priceWithout, 
                        'priceTotalWith': priceTotalWith, 
                        'priceTotalWithout': priceTotalWithout                    
                };
            }            
            return prices;
        }

        var createSearchResult = function(searchModel, travelInsurances, searchResult){
            var currentAge = calculateAge(searchModel.birthday);
            var effectiveAge = calculateEffectAge(searchModel.birthday, searchModel.startDate);
            var amount = searchModel.coverage;
            var totalDays = calculateDays(searchModel.startDate, searchModel.endDate)
            searchResult.currentAge = currentAge;
            searchResult.effectiveAge = effectiveAge;
            searchResult.amount = amount;
            searchResult.totalDays = totalDays;
            searchResult.allPrices = [];
            for (var i = 0; i < travelInsurances.length; i++) { 
                var priceWith = getPrice(travelInsurances[i].with, amount, effectiveAge); 
                if(!priceWith){
                    continue;
                }
                var priceWithout = getPrice(travelInsurances[i].without, amount, effectiveAge);               
                var priceTotalWith = '';
                if(angular.isNumber(priceWith)){
                    priceTotalWith = priceWith * totalDays;
                }
                var priceTotalWithout = '';
                if(angular.isNumber(priceWithout)){
                    priceTotalWithout = priceWithout * totalDays;
                } 
                var deductible = {'amount':0, 'discount_percent':0};               
                var prices = getPrices(travelInsurances[i], amount, effectiveAge, totalDays, deductible);
                if(!prices){
                    continue;
                }
                if(travelInsurances[i].deductible){
                   for (var j = 0; j < travelInsurances[i].deductible.length; j++) {
                        deductible = travelInsurances[i].deductible[j];
                        var detailPrices = getDetailPrices(travelInsurances[i], amount, effectiveAge, totalDays, deductible);
                        if(!detailPrices){
                            continue;
                        }
                        prices.detail.push(detailPrices);                    
                    } 
                }
                searchResult.allPrices.push(prices);
            }
        };

        var getArrayValue = function(myarr){
            var myvalue = '';
            if(myarr.length > 0){
                myvalue = myarr[0].value;
            }

            return myvalue;
        }

        var fromViews = function(response) {
            var items = [];
            if (response instanceof Array) {
                var items = [];
                for (var i = 0; i < response.length; i++) {
                        var item = {};
                        for (var prop in response[i]) {
                            if (prop.indexOf('field_') > -1) {
                                if (response[i][prop].length > 0) {
                                    var myprop = prop.replace('field_', '');
                                    if (response[i][prop].length > 1) {
                                        item[myprop] = [];                                        
                                        for (var j = 0; j < response[i][prop].length; j++) {
                                            var subitem = {};
                                            for (var subprop in response[i][prop][j]) {
                                                if (subprop.indexOf('field_') > -1 && subprop != 'field_name') {
                                                    var mysubprop = subprop.replace('field_', '');
                                                    subitem[mysubprop] = getArrayValue(response[i][prop][j][subprop]);
                                                }
                                            }
                                            item[myprop].push(subitem);
                                        }
                                        
                                    } else {
                                        if (response[i][prop][0].url) {
                                            item[myprop] = response[i][prop][0].url;
                                        } else {
                                            item[myprop] = response[i][prop][0].value;
                                        }
                                    }
                                    // if ('packaging_type' == myprop) {
                                    //     item[myprop] = resources.getPakageTypes(item[myprop]);
                                    // }
                                }
                            }
                            else if('title' == prop){
                                item['title'] = response[i].title[0].value;
                            }
                        }
                        items.push(item);
                }
            }
            return items;
        };

        return {            
            createSearchResult: createSearchResult,
            fromViews: fromViews
        };
    });
