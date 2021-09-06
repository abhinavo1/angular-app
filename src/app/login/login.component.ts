import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirmWare } from '../FirmWare';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = undefined
  password = undefined 
  firmware!: FirmWare;

  constructor(private router: Router,private formBuilder: FormBuilder) { }
  "dummy.ishfis":string
  ngOnInit(): void {
  this.firmware = {
    'VNF:GENERIC:VNF-0':{
       'OPERATOR_DATA.CNF_QUERY_WF_NAME':"yash",
       "OPERATOR_DATA.VNF_OPERATOR_METADATA":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Additional_Params":{
          
       },
       "CONFIG.Files":"176.9876.09876.98765",
       "GENERAL.ACTUAL_LEVEL":"",
       "GENERAL.Vendor":"Ericsson",
       "GENERAL.Type":"VNF type",
       "GENERAL.TOPOLOGY_NAME":"",
       "GENERAL.AllocationBehavior":"",
       "GENERAL.TOPOLOGY_LEVELS":{
          "user-input":null
       },
       "GENERAL.Description":"",
       "GENERAL.Name":"",
       "VNF_MANAGER.gracefulTerminationTmo":"",
       "VNF_MANAGER.TerminationType":"",
       "ETSI.product_info_name":"",
       "ETSI.Deployment_Flavour_Id":"default",
       "ETSI.software_version":"3.15",
       "ETSI.provider":"Ericsson",
       "ETSI.Deployment_Flavour_Description":"vEPG - SRIOV-FLAT with HOT ResourceGroups",
       "ETSI.product_info_description":"",
       "ETSI.product_name":"EPG",
       "ETSI.Instantiation_level_selected":"instantiation_level_1",
       "STATUS.previous_template_id":"",
       "STATUS.desired_template_id":""
    },
    "POLICY:ANTI_AFFINITY:VNF-0 - P-ANTI-AFFINITY-0":{
       "GENERAL.Name":"anti-affinity_group",
       "ANTI_AFFINITY.AFFINITY_TARGET":"SERVER:GENERIC"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-0":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:RP01_MGMT_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-1":{
       "GENERAL.Name":"endpoint:RP02_MGMT_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-10":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP01_UP01_WSN02_FP-5_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-100":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP13_FAB01_VFAB-1_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-101":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP13_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-102":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP13_UP13_RAN01_FP-1_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-103":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP13_UP13_RAN02_FP-2_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-104":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP13_UP13_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-105":{
       "GENERAL.Name":"endpoint:UP13_UP13_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-106":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP13_UP13_WSN01_FP-3_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-107":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP13_UP13_WSN02_FP-4_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-108":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP14_FAB01_VFAB-1_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-109":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP14_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-11":{
       "GENERAL.Name":"endpoint:UP02_EDN02_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-110":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP14_UP14_RAN01_FP-1_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-111":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP14_UP14_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-112":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP14_UP14_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-113":{
       "GENERAL.Name":"endpoint:UP14_UP14_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-114":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP14_UP14_WSN01_FP-3_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-115":{
       "GENERAL.Name":"endpoint:UP14_UP14_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-116":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP15_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-117":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP15_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-118":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP15_UP15_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-119":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP15_UP15_RAN02_FP-2_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-12":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP02_FAB01_VFAB-1_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-120":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP15_UP15_WSN-mobile01_FP-5_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-121":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP15_UP15_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-122":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP15_UP15_WSN01_FP-3_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-123":{
       "GENERAL.Name":"endpoint:UP15_UP15_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-124":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP16_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-125":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP16_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-126":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP16_UP16_RAN01_FP-1_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-127":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP16_UP16_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-128":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP16_UP16_WSN-mobile01_FP-5_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-129":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP16_UP16_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-13":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP02_FAB02_VFAB-2_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-130":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP16_UP16_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-131":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP16_UP16_WSN02_FP-4_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-14":{
       "GENERAL.Name":"endpoint:UP02_UP02_RAN01_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-15":{
       "GENERAL.Name":"endpoint:UP02_UP02_RAN02_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-16":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP02_UP02_WSN-mobile01_FP-6_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-17":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP02_UP02_WSN-mobile02_FP-7_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-18":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP02_UP02_WSN01_FP-4_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-19":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP02_UP02_WSN02_FP-5_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-2":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP01_EDN01_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-20":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP03_FAB01_VFAB-1_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-21":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP03_FAB02_VFAB-2_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-22":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP03_UP03_RAN01_FP-1_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-23":{
       "GENERAL.Name":"endpoint:UP03_UP03_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-24":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP03_UP03_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-25":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP03_UP03_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-26":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP03_UP03_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-27":{
       "GENERAL.Name":"endpoint:UP03_UP03_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-28":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP04_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-29":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP04_FAB02_VFAB-2_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-3":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP01_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-30":{
       "GENERAL.Name":"endpoint:UP04_UP04_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-31":{
       "GENERAL.Name":"endpoint:UP04_UP04_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-32":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP04_UP04_WSN-mobile01_FP-5_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-33":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP04_UP04_WSN-mobile02_FP-6_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-34":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP04_UP04_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-35":{
       "GENERAL.Name":"endpoint:UP04_UP04_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-36":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP05_FAB01_VFAB-1_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-37":{
       "GENERAL.Name":"endpoint:UP05_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-38":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP05_UP05_RAN01_FP-1_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-39":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP05_UP05_RAN02_FP-2_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-4":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP01_FAB02_VFAB-2_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-40":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP05_UP05_WSN-mobile01_FP-5_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-41":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP05_UP05_WSN-mobile02_FP-6_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-42":{
       "GENERAL.Name":"endpoint:UP05_UP05_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-43":{
       "GENERAL.Name":"endpoint:UP05_UP05_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-44":{
       "GENERAL.Name":"endpoint:UP06_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-45":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP06_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-46":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP06_UP06_RAN01_FP-1_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-47":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP06_UP06_RAN02_FP-2_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-48":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP06_UP06_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-49":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP06_UP06_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-5":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP01_UP01_RAN01_FP-2_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-50":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP06_UP06_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-51":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP06_UP06_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-52":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP07_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-53":{
       "GENERAL.Name":"endpoint:UP07_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-54":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP07_UP07_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-55":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP07_UP07_RAN02_FP-2_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-56":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP07_UP07_WSN-mobile01_FP-5_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-57":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP07_UP07_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-58":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP07_UP07_WSN01_FP-3_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-59":{
       "GENERAL.Name":"endpoint:UP07_UP07_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-6":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP01_UP01_RAN02_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-60":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP08_FAB01_VFAB-1_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-61":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP08_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-62":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP08_UP08_RAN01_FP-1_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-63":{
       "GENERAL.Name":"endpoint:UP08_UP08_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-64":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP08_UP08_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-65":{
       "GENERAL.Name":"endpoint:UP08_UP08_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-66":{
       "GENERAL.Name":"endpoint:UP08_UP08_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-67":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP08_UP08_WSN02_FP-4_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-68":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP09_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-69":{
       "GENERAL.Name":"endpoint:UP09_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-7":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP01_UP01_WSN-mobile01_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-70":{
       "GENERAL.Name":"endpoint:UP09_UP09_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-71":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP09_UP09_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-72":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP09_UP09_WSN-mobile01_FP-5_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-73":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP09_UP09_WSN-mobile02_FP-6_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-74":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP09_UP09_WSN01_FP-3_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-75":{
       "GENERAL.Name":"endpoint:UP09_UP09_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-76":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP10_FAB01_VFAB-1_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-77":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP10_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-78":{
       "GENERAL.Name":"endpoint:UP10_UP10_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-79":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP10_UP10_RAN02_FP-2_ipv6_0",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-8":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP01_UP01_WSN-mobile02_FP-7_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-80":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP10_UP10_WSN-mobile01_FP-5_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-81":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP10_UP10_WSN-mobile02_FP-6_ipv6_0",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-82":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP10_UP10_WSN01_FP-3_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-83":{
       "GENERAL.Name":"endpoint:UP10_UP10_WSN02_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-84":{
       "GENERAL.Name":"endpoint:UP11_FAB01_VFAB-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-85":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "GENERAL.Name":"endpoint:UP11_FAB02_VFAB-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-86":{
       "GENERAL.Name":"endpoint:UP11_UP11_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-87":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Name":"endpoint:UP11_UP11_RAN02_FP-2_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-88":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP11_UP11_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-89":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP11_UP11_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-9":{
       "GENERAL.Name":"endpoint:UP01_UP01_WSN01_FP-4_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-90":{
       "GENERAL.Name":"endpoint:UP11_UP11_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-91":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP11_UP11_WSN02_FP-4_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-92":{
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP12_FAB01_VFAB-1_ipv6_0",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-93":{
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP12_FAB02_VFAB-2_ipv6_0",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-94":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP12_UP12_RAN01_FP-1_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-95":{
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP12_UP12_RAN02_FP-2_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-96":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "GENERAL.Name":"endpoint:UP12_UP12_WSN-mobile01_FP-5_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       },
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true"
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-97":{
       "GENERAL.Name":"endpoint:UP12_UP12_WSN-mobile02_FP-6_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-98":{
       "GENERAL.Name":"endpoint:UP12_UP12_WSN01_FP-3_ipv6_0",
       "GENERAL.Which_IP":"IPADDRESS",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_ENDPOINT:IP:VNF-0 - VNF-ENDPOINT-99":{
       "CONNECTION.Preferred_Network_Name":"",
       "CONNECTION.Preferred_Subnetwork_Range":"",
       "CONNECTION.Connect_To_All_Subnets":"",
       "CONNECTION.Connect_To_Selected_Subnet":"",
       "GENERAL.Which_IP":"IPADDRESS",
       "GENERAL.Name":"endpoint:UP12_UP12_WSN02_FP-4_ipv6_0",
       "DYNAMIC_NETWORKING.Connect_to_selected_subnets":"true",
       "DYNAMIC_NETWORKING.Create_additional_subnets":{
          
       }
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-0":{
       "GENERAL.Name":"VNFC:RP01",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-0 - P-RANGE-0":{
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.MAX":"1",
       "RANGE.MIN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "GENERAL.Order":"",
       "GENERAL.Name":"RP01_policy",
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-0 - VM-0":{
       "GENERAL.Index":"0",
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "GENERAL.Image":"",
       "GENERAL.Name":"RP01",
       "CONFIG.personality_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.config_drive":"false",
       "CONFIG.user_data_path":"",
       "CONFIG.Files":"",
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-0 - VM-0 - VCORE-0":{
       "INFO.Name":"RP01:cpu",
       "INFO.Reservation":"",
       "INFO.Amount":"4",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-0 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"RP01:cpu:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-0 - VM-0 - VDISK-0":{
       "INFO.DiskFile":"",
       "INFO.Name":"RP01:disk0",
       "INFO.Amount":"40"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-0 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"RP01:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-0 - VM-0 - VMEM-0":{
       "INFO.Shares":"",
       "INFO.Reservation":"",
       "INFO.Amount":"8192",
       "INFO.Limit":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Name":"RP01:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-0 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"RP01:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-0 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Name":"RP01_BP",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-0 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"RP01_MATE",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-0 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Name":"RP01_MGMT",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-1":{
       "GENERAL.Name":"VNFC:RP02",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-1 - P-RANGE-0":{
       "RANGE.MAX":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.MIN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_"
       },
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "GENERAL.Order":"",
       "GENERAL.Name":"RP02_policy",
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-1 - VM-0":{
       "GENERAL.Name":"RP02",
       "GENERAL.Order":"0",
       "GENERAL.Image":"",
       "GENERAL.Index":"1",
       "GENERAL.Type":"KVM",
       "CONFIG.Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.personality_path":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.user_data_path":"",
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-1 - VM-0 - VCORE-0":{
       "INFO.Amount":"4",
       "INFO.Limit":"",
       "INFO.Name":"RP02:cpu",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-1 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"RP02:cpu:scale",
       "SCALE.MAX":"",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-1 - VM-0 - VDISK-0":{
       "INFO.Name":"RP02:disk0",
       "INFO.Amount":"40",
       "INFO.DiskFile":""
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-1 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"RP02:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-1 - VM-0 - VMEM-0":{
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Reservation":"",
       "INFO.Limit":"",
       "INFO.Amount":"8192",
       "INFO.Name":"RP02:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-1 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"RP02:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-1 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"RP02_BP",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-1 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Name":"RP02_MATE",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-1 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.Name":"RP02_MGMT",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-10":{
       "GENERAL.Name":"VNFC:UP09",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-10 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP09_policy",
       "RANGE.MIN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.MAX":"1",
       "RANGE.Replacements":{
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_"
       },
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-10 - VM-0":{
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "GENERAL.Name":"UP09",
       "GENERAL.Index":"10",
       "GENERAL.Image":"",
       "CONFIG.user_data_path":"",
       "CONFIG.personality_path":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Files":"",
       "CONFIG.Metadata":{
          
       },
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-10 - VM-0 - VCORE-0":{
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Name":"UP09:cpu",
       "INFO.Amount":"36"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-10 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP09:cpu:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-10 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.DiskFile":"",
       "INFO.Name":"UP09:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-10 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP09:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-10 - VM-0 - VMEM-0":{
       "INFO.Shares":"",
       "INFO.Amount":"65536",
       "INFO.Reservation":"",
       "INFO.Limit":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Name":"UP09:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-10 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP09:ram:scale",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP09_BP",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP09_FAB01_VFAB-1",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP09_FAB02_VFAB-2",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP09_UP09_RAN01_FP-1",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP09_UP09_RAN02_FP-2",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP09_UP09_WSN-mobile01_FP-5"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP09_UP09_WSN-mobile02_FP-6",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP09_UP09_WSN01_FP-3",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-10 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Name":"UP09_UP09_WSN02_FP-4"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-11":{
       "GENERAL.Name":"VNFC:UP10",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-11 - P-RANGE-0":{
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.MIN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MAX":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "GENERAL.Order":"",
       "GENERAL.Name":"UP10_policy",
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-11 - VM-0":{
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Files":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.user_data_path":"",
       "CONFIG.personality_path":"",
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "GENERAL.Index":"11",
       "GENERAL.Image":"",
       "GENERAL.Name":"UP10",
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-11 - VM-0 - VCORE-0":{
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Name":"UP10:cpu",
       "INFO.Amount":"36"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-11 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP10:cpu:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-11 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.Name":"UP10:disk0",
       "INFO.DiskFile":""
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-11 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP10:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-11 - VM-0 - VMEM-0":{
       "INFO.Name":"UP10:ram",
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Amount":"65536",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Shares":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-11 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP10:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP10_BP",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP10_FAB01_VFAB-1",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP10_FAB02_VFAB-2",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP10_UP10_RAN01_FP-1",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP10_UP10_RAN02_FP-2",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP10_UP10_WSN-mobile01_FP-5",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.Name":"UP10_UP10_WSN-mobile02_FP-6",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP10_UP10_WSN01_FP-3",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-11 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP10_UP10_WSN02_FP-4",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-12":{
       "GENERAL.Name":"VNFC:UP11",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-12 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP11_policy",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.MIN":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.MAX":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_"
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-12 - VM-0":{
       "GENERAL.Type":"KVM",
       "GENERAL.Order":"0",
       "GENERAL.Name":"UP11",
       "GENERAL.Index":"12",
       "GENERAL.Image":"",
       "CONFIG.Files":"",
       "CONFIG.personality_path":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.Encrypted_Files":"",
       "CONFIG.config_drive":"false",
       "CONFIG.user_data_path":"",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-12 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Name":"UP11:cpu"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-12 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP11:cpu:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-12 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.DiskFile":"",
       "INFO.Name":"UP11:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-12 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP11:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-12 - VM-0 - VMEM-0":{
       "INFO.PAGE_SIZE":"2048",
       "INFO.Shares":"",
       "INFO.Name":"UP11:ram",
       "INFO.Reservation":"",
       "INFO.Amount":"65536",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-12 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP11:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP11_BP",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP11_FAB01_VFAB-1",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP11_FAB02_VFAB-2",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP11_UP11_RAN01_FP-1",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP11_UP11_RAN02_FP-2",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP11_UP11_WSN-mobile01_FP-5",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP11_UP11_WSN-mobile02_FP-6",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP11_UP11_WSN01_FP-3",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-12 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP11_UP11_WSN02_FP-4",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-13":{
       "GENERAL.Name":"VNFC:UP12",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-13 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP12_policy",
       "RANGE.DEFAULT":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.MIN":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MAX":"1",
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-13 - VM-0":{
       "GENERAL.Image":"",
       "GENERAL.Index":"13",
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "GENERAL.Name":"UP12",
       "CONFIG.personality_path":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.user_data_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Files":"",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-13 - VM-0 - VCORE-0":{
       "INFO.Limit":"",
       "INFO.Name":"UP12:cpu",
       "INFO.Reservation":"",
       "INFO.Amount":"36"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-13 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP12:cpu:scale",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":""
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-13 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.DiskFile":"",
       "INFO.Name":"UP12:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-13 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP12:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-13 - VM-0 - VMEM-0":{
       "INFO.Amount":"65536",
       "INFO.Shares":"",
       "INFO.Limit":"",
       "INFO.Name":"UP12:ram",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-13 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP12:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP12_BP",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP12_FAB01_VFAB-1",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.Name":"UP12_FAB02_VFAB-2",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP12_UP12_RAN01_FP-1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP12_UP12_RAN02_FP-2",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP12_UP12_WSN-mobile01_FP-5",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP12_UP12_WSN-mobile02_FP-6",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP12_UP12_WSN01_FP-3"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-13 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP12_UP12_WSN02_FP-4",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-14":{
       "GENERAL.Name":"VNFC:UP13",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-14 - P-RANGE-0":{
       "GENERAL.Name":"UP13_policy",
       "GENERAL.Order":"",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MIN":"1",
       "RANGE.Replacements":{
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_"
       },
       "RANGE.DEFAULT":"1",
       "RANGE.MAX":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-14 - VM-0":{
       "GENERAL.Name":"UP13",
       "GENERAL.Image":"",
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "GENERAL.Index":"14",
       "CONFIG.config_drive":"false",
       "CONFIG.user_data_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.personality_path":"",
       "CONFIG.Files":"",
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-14 - VM-0 - VCORE-0":{
       "INFO.Limit":"",
       "INFO.Name":"UP13:cpu",
       "INFO.Amount":"36",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-14 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP13:cpu:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-14 - VM-0 - VDISK-0":{
       "INFO.Name":"UP13:disk0",
       "INFO.DiskFile":"",
       "INFO.Amount":"40"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-14 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP13:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-14 - VM-0 - VMEM-0":{
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Amount":"65536",
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Name":"UP13:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-14 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP13:ram:scale",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP13_BP"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP13_FAB01_VFAB-1",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP13_FAB02_VFAB-2",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Name":"UP13_UP13_RAN01_FP-1",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP13_UP13_RAN02_FP-2",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP13_UP13_WSN-mobile01_FP-5"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Name":"UP13_UP13_WSN-mobile02_FP-6",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP13_UP13_WSN01_FP-3"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-14 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP13_UP13_WSN02_FP-4",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-15":{
       "GENERAL.Name":"VNFC:UP14",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-15 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP14_policy",
       "RANGE.MAX":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.MIN":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.DEFAULT_SCALE_IN":"1",
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-15 - VM-0":{
       "GENERAL.Name":"UP14",
       "GENERAL.Order":"0",
       "GENERAL.Index":"15",
       "GENERAL.Image":"",
       "GENERAL.Type":"KVM",
       "CONFIG.personality_path":"",
       "CONFIG.Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.config_drive":"false",
       "CONFIG.user_data_path":"",
       "CONFIG.Encrypted_Files":"",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-15 - VM-0 - VCORE-0":{
       "INFO.Reservation":"",
       "INFO.Amount":"36",
       "INFO.Name":"UP14:cpu",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-15 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP14:cpu:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.MAX":""
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-15 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.DiskFile":"",
       "INFO.Name":"UP14:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-15 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP14:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-15 - VM-0 - VMEM-0":{
       "INFO.Limit":"",
       "INFO.Name":"UP14:ram",
       "INFO.Amount":"65536",
       "INFO.Reservation":"",
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-15 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP14:ram:scale",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP14_BP",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP14_FAB01_VFAB-1",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP14_FAB02_VFAB-2",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP14_UP14_RAN01_FP-1",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP14_UP14_RAN02_FP-2",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP14_UP14_WSN-mobile01_FP-5",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP14_UP14_WSN-mobile02_FP-6",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP14_UP14_WSN01_FP-3"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-15 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP14_UP14_WSN02_FP-4",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-16":{
       "GENERAL.Name":"VNFC:UP15",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-16 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP15_policy",
       "RANGE.SUFFIX":"none",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.MIN":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MAX":"1",
       "RANGE.VM_SEQUENCE":"1",
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-16 - VM-0":{
       "GENERAL.Image":"",
       "GENERAL.Type":"KVM",
       "GENERAL.Name":"UP15",
       "GENERAL.Index":"16",
       "GENERAL.Order":"0",
       "CONFIG.user_data_path":"",
       "CONFIG.Files":"",
       "CONFIG.config_drive":"false",
       "CONFIG.personality_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Metadata":{
          
       },
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-16 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Name":"UP15:cpu"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-16 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP15:cpu:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-16 - VM-0 - VDISK-0":{
       "INFO.Name":"UP15:disk0",
       "INFO.DiskFile":"",
       "INFO.Amount":"40"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-16 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP15:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-16 - VM-0 - VMEM-0":{
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Limit":"",
       "INFO.Amount":"65536",
       "INFO.Reservation":"",
       "INFO.Name":"UP15:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-16 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP15:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.MAX":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP15_BP",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP15_FAB01_VFAB-1",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP15_FAB02_VFAB-2",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP15_UP15_RAN01_FP-1",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP15_UP15_RAN02_FP-2",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP15_UP15_WSN-mobile01_FP-5"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP15_UP15_WSN-mobile02_FP-6",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP15_UP15_WSN01_FP-3",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-16 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP15_UP15_WSN02_FP-4",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-17":{
       "GENERAL.Name":"VNFC:UP16",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-17 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP16_policy",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.MAX":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.MIN":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.Replacements":{
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_"
       },
       "RANGE.VNFC_SEQUENCE":"1",
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-17 - VM-0":{
       "CONFIG.config_drive":"false",
       "CONFIG.user_data_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Files":"",
       "CONFIG.personality_path":"",
       "CONFIG.Metadata":{
          
       },
       "GENERAL.Name":"UP16",
       "GENERAL.Image":"",
       "GENERAL.Index":"17",
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-17 - VM-0 - VCORE-0":{
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Name":"UP16:cpu",
       "INFO.Amount":"36"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-17 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP16:cpu:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-17 - VM-0 - VDISK-0":{
       "INFO.DiskFile":"",
       "INFO.Name":"UP16:disk0",
       "INFO.Amount":"40"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-17 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP16:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-17 - VM-0 - VMEM-0":{
       "INFO.Amount":"65536",
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Limit":"",
       "INFO.Name":"UP16:ram",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-17 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP16:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP16_BP",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP16_FAB01_VFAB-1",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP16_FAB02_VFAB-2",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP16_UP16_RAN01_FP-1",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP16_UP16_RAN02_FP-2"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP16_UP16_WSN-mobile01_FP-5",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.Name":"UP16_UP16_WSN-mobile02_FP-6",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP16_UP16_WSN01_FP-3",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-17 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP16_UP16_WSN02_FP-4",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-2":{
       "GENERAL.Name":"VNFC:UP01",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-2 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP01_policy",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_"
       },
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.MIN":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.MAX":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.VNFC_SEQUENCE":"1",
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-2 - VM-0":{
       "CONFIG.Encrypted_Files":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.Files":"",
       "CONFIG.user_data_path":"",
       "CONFIG.personality_path":"",
       "GENERAL.Image":"",
       "GENERAL.Name":"UP01",
       "GENERAL.Type":"KVM",
       "GENERAL.Index":"2",
       "GENERAL.Order":"0",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-2 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Name":"UP01:cpu",
       "INFO.Reservation":"",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-2 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP01:cpu:scale",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":""
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-2 - VM-0 - VDISK-0":{
       "INFO.Name":"UP01:disk0",
       "INFO.Amount":"40",
       "INFO.DiskFile":""
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-2 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP01:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-2 - VM-0 - VMEM-0":{
       "INFO.Reservation":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Name":"UP01:ram",
       "INFO.Amount":"65536",
       "INFO.Shares":"",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-2 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP01:ram:scale",
       "SCALE.MIN":"0",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP01_BP",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP01_EDN01"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP01_FAB01_VFAB-1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP01_FAB02_VFAB-2"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP01_UP01_RAN01_FP-2",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.Name":"UP01_UP01_RAN02_FP-3",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP01_UP01_WSN-mobile01_FP-6",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP01_UP01_WSN-mobile02_FP-7",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP01_UP01_WSN01_FP-4",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-2 - VM-0 - VPORT-9":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP01_UP01_WSN02_FP-5"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-3":{
       "GENERAL.Name":"VNFC:UP02",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-3 - P-RANGE-0":{
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.MIN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MAX":"1",
       "GENERAL.Name":"UP02_policy",
       "GENERAL.Order":"",
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-3 - VM-0":{
       "CONFIG.Metadata":{
          
       },
       "CONFIG.Encrypted_Files":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Files":"",
       "CONFIG.personality_path":"",
       "CONFIG.user_data_path":"",
       "GENERAL.Index":"3",
       "GENERAL.Order":"0",
       "GENERAL.Name":"UP02",
       "GENERAL.Image":"",
       "GENERAL.Type":"KVM",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-3 - VM-0 - VCORE-0":{
       "INFO.Reservation":"",
       "INFO.Amount":"36",
       "INFO.Limit":"",
       "INFO.Name":"UP02:cpu"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-3 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP02:cpu:scale",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":""
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-3 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.Name":"UP02:disk0",
       "INFO.DiskFile":""
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-3 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP02:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-3 - VM-0 - VMEM-0":{
       "INFO.Limit":"",
       "INFO.Reservation":"",
       "INFO.Amount":"65536",
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Name":"UP02:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-3 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP02:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.MAX":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP02_BP",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP02_EDN02",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP02_FAB01_VFAB-1",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP02_FAB02_VFAB-2",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP02_UP02_RAN01_FP-2",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.Name":"UP02_UP02_RAN02_FP-3",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP02_UP02_WSN-mobile01_FP-6",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP02_UP02_WSN-mobile02_FP-7",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP02_UP02_WSN01_FP-4"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-3 - VM-0 - VPORT-9":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP02_UP02_WSN02_FP-5",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-4":{
       "GENERAL.Name":"VNFC:UP03",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-4 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP03_policy",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MIN":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.MAX":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-4 - VM-0":{
       "GENERAL.Image":"",
       "GENERAL.Name":"UP03",
       "GENERAL.Type":"KVM",
       "GENERAL.Index":"4",
       "GENERAL.Order":"0",
       "CONFIG.config_drive":"false",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.personality_path":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.user_data_path":"",
       "CONFIG.Files":"",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-4 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Name":"UP03:cpu",
       "INFO.Limit":"",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-4 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP03:cpu:scale",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-4 - VM-0 - VDISK-0":{
       "INFO.Name":"UP03:disk0",
       "INFO.DiskFile":"",
       "INFO.Amount":"40"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-4 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP03:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-4 - VM-0 - VMEM-0":{
       "INFO.Limit":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Reservation":"",
       "INFO.Amount":"65536",
       "INFO.Name":"UP03:ram",
       "INFO.Shares":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-4 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP03:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.Name":"UP03_BP",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP03_FAB01_VFAB-1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP03_FAB02_VFAB-2",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP03_UP03_RAN01_FP-1",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP03_UP03_RAN02_FP-2",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP03_UP03_WSN-mobile01_FP-5",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP03_UP03_WSN-mobile02_FP-6",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP03_UP03_WSN01_FP-3"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-4 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP03_UP03_WSN02_FP-4",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-5":{
       "GENERAL.Name":"VNFC:UP04",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-5 - P-RANGE-0":{
       "GENERAL.Order":"",
       "GENERAL.Name":"UP04_policy",
       "RANGE.DEFAULT":"1",
       "RANGE.MIN":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.MAX":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_"
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-5 - VM-0":{
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":"",
       "GENERAL.Image":"",
       "GENERAL.Index":"5",
       "GENERAL.Order":"0",
       "GENERAL.Type":"KVM",
       "GENERAL.Name":"UP04",
       "CONFIG.personality_path":"",
       "CONFIG.Files":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.user_data_path":"",
       "CONFIG.config_drive":"false",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-5 - VM-0 - VCORE-0":{
       "INFO.Limit":"",
       "INFO.Amount":"36",
       "INFO.Reservation":"",
       "INFO.Name":"UP04:cpu"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-5 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP04:cpu:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-5 - VM-0 - VDISK-0":{
       "INFO.Name":"UP04:disk0",
       "INFO.Amount":"40",
       "INFO.DiskFile":""
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-5 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP04:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-5 - VM-0 - VMEM-0":{
       "INFO.Amount":"65536",
       "INFO.Reservation":"",
       "INFO.Shares":"",
       "INFO.Name":"UP04:ram",
       "INFO.Limit":"",
       "INFO.PAGE_SIZE":"2048"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-5 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP04:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP04_BP",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP04_FAB01_VFAB-1",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP04_FAB02_VFAB-2",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP04_UP04_RAN01_FP-1",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP04_UP04_RAN02_FP-2",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP04_UP04_WSN-mobile01_FP-5",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP04_UP04_WSN-mobile02_FP-6",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP04_UP04_WSN01_FP-3",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-5 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP04_UP04_WSN02_FP-4",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-6":{
       "GENERAL.Name":"VNFC:UP05",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-6 - P-RANGE-0":{
       "RANGE.Replacements":{
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.DEFAULT":"1",
       "RANGE.MAX":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MIN":"1",
       "GENERAL.Name":"UP05_policy",
       "GENERAL.Order":"",
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-6 - VM-0":{
       "GENERAL.Name":"UP05",
       "GENERAL.Image":"",
       "GENERAL.Order":"0",
       "GENERAL.Index":"6",
       "GENERAL.Type":"KVM",
       "CONFIG.config_drive":"false",
       "CONFIG.user_data_path":"",
       "CONFIG.personality_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Files":"",
       "CONFIG.Metadata":{
          
       },
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-6 - VM-0 - VCORE-0":{
       "INFO.Reservation":"",
       "INFO.Name":"UP05:cpu",
       "INFO.Amount":"36",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-6 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP05:cpu:scale",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-6 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.DiskFile":"",
       "INFO.Name":"UP05:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-6 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP05:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-6 - VM-0 - VMEM-0":{
       "INFO.PAGE_SIZE":"2048",
       "INFO.Reservation":"",
       "INFO.Name":"UP05:ram",
       "INFO.Limit":"",
       "INFO.Shares":"",
       "INFO.Amount":"65536"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-6 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP05:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.MAX":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP05_BP",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP05_FAB01_VFAB-1",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP05_FAB02_VFAB-2",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP05_UP05_RAN01_FP-1",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP05_UP05_RAN02_FP-2",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP05_UP05_WSN-mobile01_FP-5",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP05_UP05_WSN-mobile02_FP-6",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.Name":"UP05_UP05_WSN01_FP-3",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-6 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP05_UP05_WSN02_FP-4",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":""
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-7":{
       "GENERAL.Name":"VNFC:UP06",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-7 - P-RANGE-0":{
       "RANGE.MAX":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.MIN":"1",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.Replacements":{
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_PORT:GENERIC":"_"
       },
       "GENERAL.Order":"",
       "GENERAL.Name":"UP06_policy",
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-7 - VM-0":{
       "CREDENTIALS.AdminPassword":"",
       "CREDENTIALS.AdminUser":"",
       "CONFIG.config_drive":"false",
       "CONFIG.Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.personality_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.user_data_path":"",
       "GENERAL.Name":"UP06",
       "GENERAL.Index":"7",
       "GENERAL.Type":"KVM",
       "GENERAL.Image":"",
       "GENERAL.Order":"0",
       "KEYPAIR.Name":"",
       "KEYPAIR.Pubkey_Data":"",
       "VIM.FlavorName":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-7 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Name":"UP06:cpu",
       "INFO.Limit":"",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-7 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP06:cpu:scale",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-7 - VM-0 - VDISK-0":{
       "INFO.Amount":"40",
       "INFO.DiskFile":"",
       "INFO.Name":"UP06:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-7 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Name":"UP06:ephem0",
       "INFO.Amount":"0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-7 - VM-0 - VMEM-0":{
       "INFO.PAGE_SIZE":"2048",
       "INFO.Name":"UP06:ram",
       "INFO.Amount":"65536",
       "INFO.Shares":"",
       "INFO.Reservation":"",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-7 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP06:ram:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.MAX":"",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.Name":"UP06_BP",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.Name":"UP06_FAB01_VFAB-1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP06_FAB02_VFAB-2"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP06_UP06_RAN01_FP-1",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP06_UP06_RAN02_FP-2",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP06_UP06_WSN-mobile01_FP-5",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP06_UP06_WSN-mobile02_FP-6",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP06_UP06_WSN01_FP-3",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-7 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP06_UP06_WSN02_FP-4"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-8":{
       "GENERAL.Name":"VNFC:UP07",
       "VIM.InstanceId":"",
       "VIM.TemplateId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-8 - P-RANGE-0":{
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.MAX":"1",
       "RANGE.MIN":"1",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_"
       },
       "RANGE.DEFAULT_SCALE_IN":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.VNFC_SEQUENCE":"1",
       "GENERAL.Name":"UP07_policy",
       "GENERAL.Order":"",
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-8 - VM-0":{
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":"",
       "GENERAL.Name":"UP07",
       "GENERAL.Type":"KVM",
       "GENERAL.Index":"8",
       "GENERAL.Image":"",
       "GENERAL.Order":"0",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Files":"",
       "CONFIG.personality_path":"",
       "CONFIG.user_data_path":"",
       "CONFIG.config_drive":"false",
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-8 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Name":"UP07:cpu",
       "INFO.Reservation":"",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-8 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP07:cpu:scale",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-8 - VM-0 - VDISK-0":{
       "INFO.DiskFile":"",
       "INFO.Amount":"40",
       "INFO.Name":"UP07:disk0"
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-8 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP07:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-8 - VM-0 - VMEM-0":{
       "INFO.Name":"UP07:ram",
       "INFO.Shares":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Amount":"65536",
       "INFO.Limit":"",
       "INFO.Reservation":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-8 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP07:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MIN":"0",
       "SCALE.MAX":"",
       "SCALE.INCREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP07_BP",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP07_FAB01_VFAB-1",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP07_FAB02_VFAB-2",
       "INFO.NetworkType":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP07_UP07_RAN01_FP-1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP07_UP07_RAN02_FP-2"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Name":"UP07_UP07_WSN-mobile01_FP-5",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.IPADDRESS":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Name":"UP07_UP07_WSN-mobile02_FP-6"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP07_UP07_WSN01_FP-3",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-8 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP07_UP07_WSN02_FP-4"
    },
    "VNF_COMPONENT:GENERIC:VNF-0 - VNFC-9":{
       "GENERAL.Name":"VNFC:UP08",
       "VIM.TemplateId":"",
       "VIM.InstanceId":""
    },
    "POLICY:ENTITY_RANGE:VNF-0 - VNFC-9 - P-RANGE-0":{
       "RANGE.MIN":"1",
       "RANGE.SCALE_MANDATORY_TYPE":"MUST",
       "RANGE.VM_SEQUENCE":"1",
       "RANGE.SUFFIX":"none",
       "RANGE.DEFAULT_SCALE_OUT":"1",
       "RANGE.MAX":"1",
       "RANGE.Replacements":{
          "VIRTUAL_PORT:GENERIC":"_",
          "VIRTUAL_MACHINE:GENERIC":"_",
          "VIRTUAL_LUN:GENERIC":"_"
       },
       "RANGE.VNFC_SEQUENCE":"1",
       "RANGE.DEFAULT":"1",
       "RANGE.DEFAULT_SCALE_IN":"1",
       "GENERAL.Name":"UP08_policy",
       "GENERAL.Order":"",
       "ETSI_SCALE_PARAMETERS.Max_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Execution_order_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Decrement_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Min_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Increment_value_per_Level":{
          
       },
       "ETSI_SCALE_PARAMETERS.Initial_value_per_Level":{
          
       },
       "VNF_MANAGER.AspectId":""
    },
    "VIRTUAL_MACHINE:GENERIC:VNF-0 - VNFC-9 - VM-0":{
       "GENERAL.Order":"0",
       "GENERAL.Index":"9",
       "GENERAL.Name":"UP08",
       "GENERAL.Image":"",
       "GENERAL.Type":"KVM",
       "CONFIG.user_data_path":"",
       "CONFIG.Encrypted_Files":"",
       "CONFIG.Metadata":{
          
       },
       "CONFIG.Files":"",
       "CONFIG.config_drive":"false",
       "CONFIG.personality_path":"",
       "KEYPAIR.Pubkey_Data":"",
       "KEYPAIR.Name":"",
       "VIM.FlavorName":"",
       "CREDENTIALS.AdminUser":"",
       "CREDENTIALS.AdminPassword":""
    },
    "VIRTUAL_CORE:GENERIC:VNF-0 - VNFC-9 - VM-0 - VCORE-0":{
       "INFO.Amount":"36",
       "INFO.Name":"UP08:cpu",
       "INFO.Reservation":"",
       "INFO.Limit":""
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-9 - VM-0 - VCORE-0 - P-SCALE-0":{
       "GENERAL.Name":"UP08:cpu:scale",
       "SCALE.INCREASEAMOUNT":"1",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0"
    },
    "VIRTUAL_DISK:GENERIC:VNF-0 - VNFC-9 - VM-0 - VDISK-0":{
       "INFO.Name":"UP08:disk0",
       "INFO.Amount":"40",
       "INFO.DiskFile":""
    },
    "VIRTUAL_DISK:EPHEMERAL:VNF-0 - VNFC-9 - VM-0 - VDISK-EPHEMERAL-0":{
       "INFO.Amount":"0",
       "INFO.Name":"UP08:ephem0"
    },
    "VIRTUAL_MEMORY:GENERIC:VNF-0 - VNFC-9 - VM-0 - VMEM-0":{
       "INFO.Limit":"",
       "INFO.Shares":"",
       "INFO.Amount":"65536",
       "INFO.Reservation":"",
       "INFO.PAGE_SIZE":"2048",
       "INFO.Name":"UP08:ram"
    },
    "POLICY:ENTITY_SCALE:VNF-0 - VNFC-9 - VM-0 - VMEM-0 - P-SCALE-0":{
       "GENERAL.Name":"UP08:ram:scale",
       "SCALE.DECREASEAMOUNT":"1",
       "SCALE.MAX":"",
       "SCALE.MIN":"0",
       "SCALE.INCREASEAMOUNT":"1"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-0":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Name":"UP08_BP",
       "INFO.Type":"virtio",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-1":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP08_FAB01_VFAB-1",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-2":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP08_FAB02_VFAB-2",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-3":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Name":"UP08_UP08_RAN01_FP-1",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-4":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP08_UP08_RAN02_FP-2",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-5":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.Name":"UP08_UP08_WSN-mobile01_FP-5",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS":"",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.Type":"virtio"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-6":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.Name":"UP08_UP08_WSN-mobile02_FP-6",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.NetworkType":"",
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.IPADDRESS_SECONDARY":""
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-7":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.IP_ADDRESS_MAP":{
          
       },
       "INFO.Type":"virtio",
       "INFO.IPADDRESS":"",
       "INFO.Name":"UP08_UP08_WSN01_FP-3",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.NetworkType":"",
       "INFO.apply_allowed_address_pair":"true"
    },
    "VIRTUAL_PORT:GENERIC:VNF-0 - VNFC-9 - VM-0 - VPORT-8":{
       "SECURITY.Port_Security_Enabled":"",
       "INFO.NetworkType":"",
       "INFO.IPADDRESS_SECONDARY":"",
       "INFO.Type":"virtio",
       "INFO.Name":"UP08_UP08_WSN02_FP-4",
       "INFO.apply_allowed_address_pair":"true",
       "INFO.IPADDRESS":"",
       "INFO.IP_ADDRESS_MAP":{
          
       }
    }
 }
 console.log(this.firmware['VNF:GENERIC:VNF-0']['CONFIG.Files'])
}
callMe(){
   console.log(this.firmware['VNF:GENERIC:VNF-0']['CONFIG.Files'])
}
callfirst(){
  
}
}
