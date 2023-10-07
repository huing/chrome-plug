chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
      lastFocusedWindow: true,
      url: "http://*.leoao.com/*",
    },
    async (tabs) => {
      if (!tabs[0] || !tabs[0].url) {
        return;
      }
      const cookies = await chrome.cookies.get({
        url: tabs[0].url,
        name: "token",
      });
      const mtoken = await chrome.cookies.get({
        url: tabs[0].url,
        name: "m_token",
      });
      if (!cookies || !mtoken) {
        return;
      }
      chrome.cookies.remove({ name: "t_lefit_p_sso_token", url: tabs[0].url });
      chrome.cookies.remove({ name: "lefit_p_sso_token", url: tabs[0].url });
      chrome.cookies.set({
        domain: cookies.domain,
        expirationDate: cookies.expirationDate,
        path: cookies.path,
        url: tabs[0].url,
        name: "t_lefit_p_sso_token",
        value: cookies.value,
      });
      chrome.cookies.set({
        domain: cookies.domain,
        expirationDate: cookies.expirationDate,
        path: cookies.path,
        url: tabs[0].url,
        name: "lefit_p_sso_token",
        value: cookies.value,
      });
    }
  );
});
