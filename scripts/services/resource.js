'use strict';

/**
 * @ngdoc service
 * @name canadaInsuranceApp.resource
 * @description
 * # resource
 * Service in the canadaInsuranceApp.
 */
angular.module('canadaInsuranceApp')
    .service('resource', function() {
        var pathmap = ['/home', '/travel-insurance'];
        var travelInsurance = ['/visitor', 
                               '/berkley-jf-royal',
                               '/tic-jf-optimum',
                               '/21st-century',
                               '/gms',
                               '/rsa',
                               '/tugo',
                               '/allianz',
                               '/manulife',
                               '/emergency',
                               '/tugo-emergency',
                               '/allianz-emergency',
                               '/student',
                               '/jf-elite-student',
                               '/rsa-student',
                               '/tugo-student'
        ];

        var visitorInsurance = ['/berkley-jf-royal',
                               '/tic-jf-optimum',
                               '/21st-century',
                               '/gms',
                               '/rsa',
                               '/tugo',
                               '/allianz',
                               '/manulife'
        ];

        var emergencyInsurance = ['/tugo-emergency',
                               '/allianz-emergency'
        ];

         var studentInsurance = ['/jf-elite-student',
                               '/rsa-student',
                               '/tugo-student'
        ];

        var coverages = [
          { value: "0", name: "-Select-" },
          { value: "10000", name: "$10000 CAD" },
          { value: "15000", name: "$15000 CAD" },
          { value: "20000", name: "$20000 CAD" },
          { value: "25000", name: "$25000 CAD" },
          { value: "30000", name: "$30000 CAD" },
          { value: "40000", name: "$40000 CAD" },
          { value: "50000", name: "$50000 CAD" },
          { value: "60000", name: "$60000 CAD" },
          { value: "80000", name: "$80000 CAD" },
          { value: "100000", name: "$100000 CAD" },
          { value: "150000", name: "$150000 CAD" },
          { value: "200000", name: "$200000 CAD" },
          { value: "250000", name: "$250000 CAD" },
          { value: "300000", name: "$300000 CAD" }
        ];
       
       
        var isCurrentPath = function(currentPath, path){
            var isCur = false;
            if(currentPath ==  path){
                isCur = true;
            }
            else if('/travel-insurance' == path){
                if(travelInsurance.indexOf(currentPath) !== -1){
                    isCur =  true;
                }
                else{
                    isCur = false;
                }
            }
            else if('/visitor' == path){
                if(visitorInsurance.indexOf(currentPath) !== -1){
                    isCur =  true;
                }
                else{
                    isCur = false;
                }
            }
            else if('/emergency' == path){
                if(emergencyInsurance.indexOf(currentPath) !== -1){
                    isCur =  true;
                }
                else{
                    isCur = false;
                }
            }
            else if('/student' == path){
                if(studentInsurance.indexOf(currentPath) !== -1){
                    isCur =  true;
                }
                else{
                    isCur = false;
                }
            }
            return isCur;
        };

        return {            
            isCurrentPath: isCurrentPath,
            coverages: coverages
        };
    });
