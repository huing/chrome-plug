const getNewRules = (ssotoken, mtoken) => [
  {
    id: 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "lk-ssotoken",
          operation: "set",
          value: ssotoken,
        },
      ],
    },
    condition: {
      urlFilter: "||leoao.com",
      resourceTypes: ["xmlhttprequest"],
    },
  },
  // {
  //   id: 2,
  //   priority: 2,
  //   action: {
  //     type: "modifyHeaders",
  //     requestHeaders: [
  //       {
  //         header: "lk-mtoken",
  //         operation: "set",
  //         value: mtoken,
  //       },
  //     ],
  //   },
  //   condition: {
  //     urlFilter: "||leoao.com",
  //     resourceTypes: ["xmlhttprequest"],
  //   },
  // },
  // {
  //   id: 3,
  //   priority: 3,
  //   action: {
  //     type: "modifyHeaders",
  //     requestHeaders: [
  //       {
  //         header: "lk-sign",
  //         operation: "remove",
  //       },
  //     ],
  //   },
  //   condition: {
  //     urlFilter: "||leoao.com",
  //     resourceTypes: ["xmlhttprequest"],
  //   },
  // },
];

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
      lastFocusedWindow: true,
      url: "*://mlocal.leoao.com/*",
    },
    async (tabs) => {
      if (!tabs[0]) {
        return;
      }
      const ssotoken = await chrome.cookies.get({
        url: tabs[0].url,
        name: "token",
      });
      const mtoken = await chrome.cookies.get({
        url: tabs[0].url,
        name: "m_token",
      });
      console.log(ssotoken, mtoken);
      if (!ssotoken || !mtoken) {
        return;
      }
      const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [...oldRules.map((item) => item.id)],
        addRules: getNewRules(ssotoken.value, mtoken.value),
      });
    }
  );
});
