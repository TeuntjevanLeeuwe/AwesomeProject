// import { LogLevel } from "@azure/msal-browser";

// export const msalConfig = {
//     auth: {
//         clientId: "824a478f-e4c3-4098-a6f2-62be1dc51f68",
//         authority: "https://login.microsoftonline.com/bd82c850-31e3-468e-a170-886174a9e22d",
//         redirectUri: '/',
//         postLogoutUri: '/',
//     },
//     cache: {
//         cacheLocation: "sessionStorage",
//         storeAuthStateInCookie: false,
//     },
//     system: {
//         loggerOptions: {
//             loggerCallback: (level, message, containsPii) => {
//                 if(containsPii){
//                     return;
//                 }
//                 switch(level) {
//                     case LogLevel.Error:
//                         console.error(message);
//                         return;
//                     case LogLevel.Info:
//                         console.info(message);
//                         return;
//                     case LogLevel.Verbose:
//                         console.debug(message);
//                         return;
//                     case LogLevel.Warning:
//                         console.warn(message);
//                         return;
//                     default:
//                         return;
//                 }
//             }
//         }
//     }
// }

// export const loginRequest = {
//     scopes: ["User.Read"]
// }

// export const graphConfig = {
//     graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
// }