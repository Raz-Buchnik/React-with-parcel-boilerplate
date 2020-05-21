export default language => {
  return {
    name: "Taxi4you",
    id: "taxi4you.co.il",
    statusbar: {
      // overlay: self.$device.cordova && self.$device.ios || 'auto',
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
      androidTextColor: "white",
      iosTextColor: "white",
      iosBackgroundColor: "black"
    },
    fastClicks: true,
    dialog: {
      buttonOk: language.t['Continue'],
      buttonCancel: language.t['Cancel']
    }
  }
}