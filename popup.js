console.log(chrome.webRequest);
chrome.webRequest.onAuthRequired.addListener(
  (details, callback) => {
    console.log("An authorization request has been detected");
    if (details.url == "*://*.leoao.com/*") {
      // Creating some credentials
      // const username = 'guest';
      // const password = 'guest';
      // // Creating an auth handler to use the credentials
      // const authCredentials = {
      //   authCredentials: {
      //     username: username,
      //     password: password
      //   }
      // };
      callback();
    }
  },
  { urls: ["*://*.leoao.com/*"] },
  ["asyncBlocking"]
);

// chrome.webRequest.onAuthRequired.addListener(
//   callback: function,
//   filter: RequestFilter,
//   extraInfoSpec?: OnAuthRequiredOptions[],
// )

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
// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function (details) {
//     document.getElementById("tab").textContent = "aaaa";
//     // for (let i = 0; i < details.requestHeaders.length; ++i) {
//     //   if (details.requestHeaders[i].name === "lk-ssotoken") {
//     //     details.requestHeaders[i].value = token
//     //     break;
//     //   }
//     // }
//     return { requestHeaders: details.requestHeaders };
//   },
//   { urls: ["*://*.leoao.com/*"] },
//   ["blocking", "requestHeaders"]
// );

// update when the tab is updated
// chrome.tabs.onUpdated.addListener(cookieUpdate);
// chrome when the tab is activated
// chrome.tabs.onActivated.addListener(cookieUpdate);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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
// })
