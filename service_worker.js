console.log(chrome);
console.log(chrome.webRequest);

// chrome.webRequest.onAuthRequired.addListener(
//   (details, callback) => {
//     console.log(1, details);
//     console.log("An authorization request has been detected");
//     if (details.url == "*://*.leoao.com/*") {
//       chrome.cookies.getAll({ url: details.url }, function (cookies) {
//         const cookieList = document.getElementById("cookieList");
//         cookies.forEach(function (cookie) {
//           if (cookie.name === "token" || cookie.name === "m_token") {
//             const cookieItem = document.createElement("div");
//             cookieItem.textContent = `${cookie.name}: ${cookie.value}`;
//             cookieList.appendChild(cookieItem);
//             chrome.tabs.sendMessage(
//               tab.id,
//               { action: "addTokenToRequest", token: cookie.value },
//               function (response) {
//                 // document.getElementById("other").textContent =
//                 //   JSON.stringify(response);
//                 // 处理响应，如果需要的话
//               }
//             );
//           }
//         });
//       });
//       callback();
//     }
//   },
//   { urls: ["*://*.leoao.com/*"] },
//   ["asyncBlocking"]
// );

// chrome.tabs.query(
//   { active: true, currentWindow: true, url: "*://*.leoao.com/*" },
//   function (tabs) {
//     const tab = tabs[0];
//     chrome.cookies.getAll({ url: tab.url }, function (cookies) {
//       const cookieList = document.getElementById("cookieList");
//       cookies.forEach(function (cookie) {
//         if (cookie.name === "token" || cookie.name === "m_token") {
//           const cookieItem = document.createElement("div");
//           cookieItem.textContent = `${cookie.name}: ${cookie.value}`;
//           cookieList.appendChild(cookieItem);
//           chrome.tabs.sendMessage(
//             tab.id,
//             { action: "addTokenToRequest", token: cookie.value },
//             function (response) {
//               // document.getElementById("other").textContent =
//               //   JSON.stringify(response);
//               // 处理响应，如果需要的话
//             }
//           );
//         }
//       });
//     });
//   }
// );

// chrome.extension.onRequest.addListener(function (
//   request,
//   sender,
//   sendResponse
// ) {
//   document.getElementById("tab").textContent = "ccc";
// });
//  添加Token到请求头
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    console.log(2, details);
    document.getElementById("tab").textContent = "aaaa";
    // for (let i = 0; i < details.requestHeaders.length; ++i) {
    //   if (details.requestHeaders[i].name === "lk-ssotoken") {
    //     details.requestHeaders[i].value = token
    //     break;
    //   }
    // }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["*://*.leoao.com/*"] },
  ["blocking", "requestHeaders"]
);

// update when the tab is updated
// chrome.tabs.onUpdated.addListener(cookieUpdate);
// chrome when the tab is activated
// chrome.tabs.onActivated.addListener(cookieUpdate);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request);
//   document.getElementById("other").textContent = "hhhh";
//   if (request.action === "addTokenToRequest") {
//     const token = request.token;
//     document.getElementById("tab").textContent = token;
//     // 添加Token到请求头
//     // chrome.webRequest.onBeforeSendHeaders.addListener(
//     //   function (details) {
//     //     document.getElementById("other").textContent = JSON.stringify(details);
//     //     // for (let i = 0; i < details.requestHeaders.length; ++i) {
//     //     //   if (details.requestHeaders[i].name === "Authorization") {
//     //     //     details.requestHeaders[i].value = `Bearer ${token}`;
//     //     //     break;
//     //     //   }
//     //     // }
//     //     return { requestHeaders: details.requestHeaders };
//     //   },
//     //   { urls: ["https://*.leoao.com/*"] },
//     //   ["blocking", "requestHeaders"]
//     // );

//     // sendResponse({ message: "Token added to request headers." });
//   }
// });

// chrome.cookies.onChanged.addListener((changeInfo) => {
//   if (changeInfo.cookie.domain === ".mlocal.leoao.com") {
//     console.log("changeInfo", changeInfo);
//     chrome.cookies.getAll({ domain: ".leoao.com" }, (cookies) => {
//       console.log("cookies---", cookies);
//     });
//   }
// });

// chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
//   console.log(e.request);
// });
// chrome.runtime.onInstalled.addListener((info) => {
//   console.log(("install info", info));
//   chrome.declarativeNetRequest.updateDynamicRules({
//     removeRuleIds: [1, 2, 3, 4],
//     addRules: getNewRules(),
//   });
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
//   console.log("onUpdated------", tabId, changeInfo);
// });
