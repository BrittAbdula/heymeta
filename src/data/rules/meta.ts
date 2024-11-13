import { title } from "process";

export const metaRules = [
  {
    title: "ask meta news",
    tags: ["News"],
    slug: "ask-meta-news",
    libs: ["AI", "Mic", "Speaker"],
    content: `Hey Meta,What's the latest news in Washingdon DC?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta smithsonian",
    tags: ["Local", "Tourism"],
    slug: "ask-meta-smithsonian",
    libs: ["AI", "Mic", "Speaker"],
    content: `Hey Meta,what time does the Smithsonian open today?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta birthday poem",
    tags: ["Creative", "Social"],
    slug: "ask-meta-birthday-poem",
    libs: ["AI", "Mic", "Speaker"],
    content: `Hey Meta,write a poem for my friend's 30th birthday.`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta remember book",
    tags: ["Memory"],
    slug: "ask-meta-remember-book",
    libs: ["AI", "Camera"],
    content: "Hey Meta, remember this book",
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta remember hotel",
    tags: ["Memory", "Travel"],
    slug: "ask-meta-remember-hotel",
    libs: ["AI", "Camera"],
    content: "Hey Meta, remember the hotel's activities",
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta set timer",
    tags: ["Utility", "Time"],
    slug: "ask-meta-set-timer",
    libs: ["AI", "Speaker"],
    content: "Hey Meta, Set a timer for 5 minutes",
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta take photo",
    tags: ["Media", "Camera"],
    slug: "ask-meta-take-photo",
    libs: ["Camera"],
    content: "Hey Meta, take a photo",
    imageUrls: ['/photo_videos.jpg','/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta share photo",
    tags: ["Social", "Media"],
    slug: "ask-meta-share-photo",
    libs: ["Camera", "Social"],
    content: "Hey Meta, share that photo with Anna",
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta battery",
    tags: ["Utility", "System"],
    slug: "ask-meta-battery",
    libs: ["AI", "Speaker"],
    content: "Hey Meta, how much battery is left?",
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta summarize",
    tags: ["General"],
    slug: "ask-meta-summarize",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `Hey Meta, summarize this`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta word meaning",
    tags: ["Education"],
    slug: "ask-meta-word-meaning",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `What does this word mean?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta building info",
    tags: ["Architecture", "Tourism"],
    slug: "ask-meta-building-info",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `Tell me about this building`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta fruit history",
    tags: ["Food", "History"],
    slug: "ask-meta-fruit-history",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `What's the history of this fruit?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta food info",
    tags: ["Food"],
    slug: "ask-meta-food-info",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `Tell me about this food`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta plant size",
    tags: ["Plants", "Home"],
    slug: "ask-meta-plant-size",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `How big will this plant grow?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta plant light",
    tags: ["Plants", "Home"],
    slug: "ask-meta-plant-light",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `How much light does this plant need?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta painting poem",
    tags: ["Art", "Creative"],
    slug: "ask-meta-painting-poem",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `Write a poem about this painting`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta view birthday",
    tags: ["Creative", "Social"],
    slug: "ask-meta-view-birthday",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: `What's a birthday message to go with this view?`,
    imageUrls: ['/metaai.png'],
    author: {
      name: "meta",
      url: "https://www.meta.com/smart-glasses/",
      avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
    },
  },
  {
    title: "ask meta remember parking",
    tags: ["Memory", "Parking"],
    slug: "ask-meta-remember-parking",
    libs: ["AI", "Camera"],
    content: "Hey Meta, remember this parking sign",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta remember tracking",
    tags: ["Memory", "Shopping"],
    slug: "ask-meta-remember-tracking",
    libs: ["AI", "Camera"],
    content: "Hey Meta, remember this tracking number",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta remind stylist",
    tags: ["Reminder", "Time"],
    slug: "ask-meta-remind-stylist",
    libs: ["AI", "Speaker"],
    content: "Hey Meta, remind me to call my stylist at 4 PM",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta timer ten",
    tags: ["Utility", "Time"],
    slug: "ask-meta-timer-ten",
    libs: ["AI", "Speaker"],
    content: "Hey Meta, Timer for 10 minutes",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta take video",
    tags: ["Media", "Camera"],
    slug: "ask-meta-take-video",
    libs: ["Camera"],
    content: "Hey Meta, take a video",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta share instagram",
    tags: ["Social", "Media"],
    slug: "ask-meta-share-instagram",
    libs: ["Camera", "Social"],
    content: "Share my last photo to Instagram",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta translate",
    tags: ["Utility", "Language"],
    slug: "ask-meta-translate",
    libs: ["AI", "Camera", "Mic", "Speaker"],
    content: "Hey Meta, translate this",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
  {
    title: "ask meta time",
    tags: ["Utility", "Time"],
    slug: "ask-meta-time",
    libs: ["AI", "Speaker"],
    content: "Hey Meta, what time is it?",
    imageUrls: ['/metaai.png'],
    author: { name: "meta", url: "https://www.meta.com/smart-glasses/", avatar: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" },
  },
]
