var config = module.exports;

const userRoles = config.userRoles = {
    guest: 1,       
    user: 2,        
    admin: 4,      
    vendor: 8   
}

config.accessLevels = {
    guest: userRoles.guest | userRoles.user | userRoles.admin | userRoles.vendor, 
    user: userRoles.user | userRoles.admin | userRoles.vendor,                    
    admin: userRoles.admin | userRoles.vendor,                                    
    vendor: userRoles.vendor,                                                 
}