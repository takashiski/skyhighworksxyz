module.exports={
  title:"天高工房",
  description:"キーボードとかキーキャップ作ってます",
  locale:{
    "/":{
      lang:"ja"
    }
  },
  themeConfig:{
    nav:[
      {text:"Home",link:"/"},
      {text:"Blog",link:"https://skyhigh-works.hatenablog.com/"},
      {text:"JP60SS",link:"/jp60ss/"},
      //{text:"Guide",link:"/guide/"},
      {text:"JP60Split",link:"/jp60split/"}
      //{text:"hecomi",link:"/hecomi/"}
    ],
    sidebar:{
      //"guide":"auto"
      "/jp60ss/":[
        "",
        "000",
        "001",
        "002",
        "003",
        "004",
        "005"
        // "build",
        // "how_to_use",
        // "bootmagic"
      ],
      "/":"auto"
    },
    displayAllHeaders:true,
    lastUpdated:"Last Updated",
    // configureWebpack:{
    //   resolve:{
    //     alias:{
    //       "@jp60ss":"/jp60ss/"
    //     }
    //   }
    // }
  }
}