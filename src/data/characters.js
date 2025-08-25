const characters = [
  {
    name: "Eric",
    profile: "/Eric/ericprofile.jpg",
    base: "/Eric/base.png",
    bg: "#EAC6F0",
    description: "The muscle, the powerhouse and strongest of them all.", // 👈 added bio
    rows: [
      { shirt: "/Eric/Shirts/1.png", cap: "/Eric/Caps/1.png", compositeShirt: "/Eric/outfits/1.png", compositeBoth: "/Eric/outfits/14.png" },
      { shirt: "/Eric/Shirts/2.png", cap: "/Eric/Caps/2.png", compositeShirt: "/Eric/outfits/2.png", compositeBoth: "/Eric/outfits/13.png" },
      { shirt: "/Eric/Shirts/3.png", cap: "/Eric/Caps/3.png", compositeShirt: "/Eric/outfits/3.png", compositeBoth: "/Eric/outfits/12.png" },
      { shirt: "/Eric/Shirts/4.png", cap: "/Eric/Caps/4.png", compositeShirt: "/Eric/outfits/4.png", compositeBoth: "/Eric/outfits/11.png" },
      { shirt: "/Eric/Shirts/5.png", cap: "/Eric/Caps/5.png", compositeShirt: "/Eric/outfits/5.png", compositeBoth: "/Eric/outfits/10.png" },
      { shirt: "/Eric/Shirts/6.png", cap: "/Eric/Caps/6.png", compositeShirt: "/Eric/outfits/6.png", compositeBoth: "/Eric/outfits/9.png" },
      { shirt: "/Eric/Shirts/7.png", cap: "/Eric/Caps/7.png", compositeShirt: "/Eric/outfits/7.png", compositeBoth: "/Eric/outfits/8.png" }
    ]
  },
  {
    name: "Lurk",
    profile: "/Lurk/profile.jpg",
    base: "/Lurk/base.png",
    bg: "#DBDAEA",
     description: "The quiet, weird shadow in the crew and always hiding in the background. until it’s too late.",   // ✅
    rows: [
      { shirt: "/Lurk/Shirts/1.png", cap: "/Lurk/Caps/1.png", compositeShirt: "/Lurk/outfits/1.png", compositeBoth: "/Lurk/outfits/14.png" },
      { shirt: "/Lurk/Shirts/2.png", cap: "/Lurk/Caps/2.png", compositeShirt: "/Lurk/outfits/2.png", compositeBoth: "/Lurk/outfits/13.png" },
      { shirt: "/Lurk/Shirts/3.png", cap: "/Lurk/Caps/3.png", compositeShirt: "/Lurk/outfits/3.png", compositeBoth: "/Lurk/outfits/12.png" },
      { shirt: "/Lurk/Shirts/4.png", cap: "/Lurk/Caps/4.png", compositeShirt: "/Lurk/outfits/4.png", compositeBoth: "/Lurk/outfits/11.png" },
      { shirt: "/Lurk/Shirts/5.png", cap: "/Lurk/Caps/5.png", compositeShirt: "/Lurk/outfits/5.png", compositeBoth: "/Lurk/outfits/10.png" },
      { shirt: "/Lurk/Shirts/6.png", cap: "/Lurk/Caps/6.png", compositeShirt: "/Lurk/outfits/6.png", compositeBoth: "/Lurk/outfits/9.png" },
      { shirt: "/Lurk/Shirts/7.png", cap: "/Lurk/Caps/7.png", compositeShirt: "/Lurk/outfits/7.png", compositeBoth: "/Lurk/outfits/8.png" }
    ]
  },
  {
    name: "Ben",
    profile: "/Ben/profile.jpg",
    base: "/Ben/base.png",
    bg: "#DCC3B3",
     description:"The brains, the mastermind, always ten steps ahead solving puzzles no one else sees.",   // ✅
    rows: [
      { shirt: "/Ben/Shirts/1.png", cap: "/Ben/Caps/1.png", compositeShirt: "/Ben/outfits/1.png", compositeBoth: "/Ben/outfits/14.png" },
      { shirt: "/Ben/Shirts/2.png", cap: "/Ben/Caps/2.png", compositeShirt: "/Ben/outfits/2.png", compositeBoth: "/Ben/outfits/13.png" },
      { shirt: "/Ben/Shirts/3.png", cap: "/Ben/Caps/3.png", compositeShirt: "/Ben/outfits/3.png", compositeBoth: "/Ben/outfits/12.png" },
      { shirt: "/Ben/Shirts/4.png", cap: "/Ben/Caps/4.png", compositeShirt: "/Ben/outfits/4.png", compositeBoth: "/Ben/outfits/11.png" },
      { shirt: "/Ben/Shirts/5.png", cap: "/Ben/Caps/5.png", compositeShirt: "/Ben/outfits/5.png", compositeBoth: "/Ben/outfits/10.png" },
      { shirt: "/Ben/Shirts/6.png", cap: "/Ben/Caps/6.png", compositeShirt: "/Ben/outfits/6.png", compositeBoth: "/Ben/outfits/9.png" },
      { shirt: "/Ben/Shirts/7.png", cap: "/Ben/Caps/7.png", compositeShirt: "/Ben/outfits/7.png", compositeBoth: "/Ben/outfits/8.png" }
    ]
  },
  {
    name: "Blub",
    profile: "/Blub/profile.jpg",
    base: "/Blub/base.png",
    bg: "#E9DEDA",
     description: "The chatterbox, talks way too much. Can’t stop talking, won’t stop talking.. even when nobody’s listening.",   // ✅
    rows: [
      { shirt: "/Blub/Shirts/1.png", cap: "/Blub/Caps/1.png", compositeShirt: "/Blub/outfits/1.png", compositeBoth: "/Blub/outfits/14.png" },
      { shirt: "/Blub/Shirts/2.png", cap: "/Blub/Caps/2.png", compositeShirt: "/Blub/outfits/2.png", compositeBoth: "/Blub/outfits/13.png" },
      { shirt: "/Blub/Shirts/3.png", cap: "/Blub/Caps/3.png", compositeShirt: "/Blub/outfits/3.png", compositeBoth: "/Blub/outfits/12.png" },
      { shirt: "/Blub/Shirts/4.png", cap: "/Blub/Caps/4.png", compositeShirt: "/Blub/outfits/4.png", compositeBoth: "/Blub/outfits/11.png" },
      { shirt: "/Blub/Shirts/5.png", cap: "/Blub/Caps/5.png", compositeShirt: "/Blub/outfits/5.png", compositeBoth: "/Blub/outfits/10.png" },
      { shirt: "/Blub/Shirts/6.png", cap: "/Blub/Caps/6.png", compositeShirt: "/Blub/outfits/6.png", compositeBoth: "/Blub/outfits/9.png" },
      { shirt: "/Blub/Shirts/7.png", cap: "/Blub/Caps/7.png", compositeShirt: "/Blub/outfits/7.png", compositeBoth: "/Blub/outfits/8.png" }
    ]
  },
  {
    name: "Jasper",
    profile: "/Jasper/profile.jpg",
    base: "/Jasper/base.png",
    bg: "#DAD2BB",
     description:"The dumb one, the lovable fool, always messing things up but somehow surviving.",   // ✅
    rows: [
      { shirt: "/Jasper/Shirts/1.png", cap: "/Jasper/Caps/1.png", compositeShirt: "/Jasper/outfits/1.png", compositeBoth: "/Jasper/outfits/14.png" },
      { shirt: "/Jasper/Shirts/2.png", cap: "/Jasper/Caps/2.png", compositeShirt: "/Jasper/outfits/2.png", compositeBoth: "/Jasper/outfits/13.png" },
      { shirt: "/Jasper/Shirts/3.png", cap: "/Jasper/Caps/3.png", compositeShirt: "/Jasper/outfits/3.png", compositeBoth: "/Jasper/outfits/12.png" },
      { shirt: "/Jasper/Shirts/4.png", cap: "/Jasper/Caps/4.png", compositeShirt: "/Jasper/outfits/4.png", compositeBoth: "/Jasper/outfits/11.png" },
      { shirt: "/Jasper/Shirts/5.png", cap: "/Jasper/Caps/5.png", compositeShirt: "/Jasper/outfits/5.png", compositeBoth: "/Jasper/outfits/10.png" },
      { shirt: "/Jasper/Shirts/6.png", cap: "/Jasper/Caps/6.png", compositeShirt: "/Jasper/outfits/6.png", compositeBoth: "/Jasper/outfits/9.png" },
      { shirt: "/Jasper/Shirts/7.png", cap: "/Jasper/Caps/7.png", compositeShirt: "/Jasper/outfits/7.png", compositeBoth: "/Jasper/outfits/8.png" }
    ]
  },
  {
    name: "Max",
    profile: "/Max/profile.jpg",
    base: "/Max/base.png",
    bg: "#E1989F",
     description: "The corny one with lame jokes. always dropping the worst jokes at the worst times.",   // ✅
    rows: [
      { shirt: "/Max/Shirts/1.png", cap: "/Max/Caps/1.png", compositeShirt: "/Max/outfits/1.png", compositeBoth: "/Max/outfits/14.png" },
      { shirt: "/Max/Shirts/2.png", cap: "/Max/Caps/2.png", compositeShirt: "/Max/outfits/2.png", compositeBoth: "/Max/outfits/13.png" },
      { shirt: "/Max/Shirts/3.png", cap: "/Max/Caps/3.png", compositeShirt: "/Max/outfits/3.png", compositeBoth: "/Max/outfits/12.png" },
      { shirt: "/Max/Shirts/4.png", cap: "/Max/Caps/4.png", compositeShirt: "/Max/outfits/4.png", compositeBoth: "/Max/outfits/11.png" },
      { shirt: "/Max/Shirts/5.png", cap: "/Max/Caps/5.png", compositeShirt: "/Max/outfits/5.png", compositeBoth: "/Max/outfits/10.png" },
      { shirt: "/Max/Shirts/6.png", cap: "/Max/Caps/6.png", compositeShirt: "/Max/outfits/6.png", compositeBoth: "/Max/outfits/9.png" },
      { shirt: "/Max/Shirts/7.png", cap: "/Max/Caps/7.png", compositeShirt: "/Max/outfits/7.png", compositeBoth: "/Max/outfits/8.png" }
    ]
  },
  {
    name: "Mush",
    profile: "/Mush/profile.jpg",
    base: "/Mush/base.png",
    bg: "#E7D0B1",
     description: "The crazy wild card nobody can predict. His pure chaos in motion, erratic and a little unhinged.",   // ✅
    rows: [
      { shirt: "/Mush/Shirts/1.png", cap: "/Mush/Caps/1.png", compositeShirt: "/Mush/outfits/1.png", compositeBoth: "/Mush/outfits/14.png" },
      { shirt: "/Mush/Shirts/2.png", cap: "/Mush/Caps/2.png", compositeShirt: "/Mush/outfits/2.png", compositeBoth: "/Mush/outfits/13.png" },
      { shirt: "/Mush/Shirts/3.png", cap: "/Mush/Caps/3.png", compositeShirt: "/Mush/outfits/3.png", compositeBoth: "/Mush/outfits/12.png" },
      { shirt: "/Mush/Shirts/4.png", cap: "/Mush/Caps/4.png", compositeShirt: "/Mush/outfits/4.png", compositeBoth: "/Mush/outfits/11.png" },
      { shirt: "/Mush/Shirts/5.png", cap: "/Mush/Caps/5.png", compositeShirt: "/Mush/outfits/5.png", compositeBoth: "/Mush/outfits/10.png" },
      { shirt: "/Mush/Shirts/6.png", cap: "/Mush/Caps/6.png", compositeShirt: "/Mush/outfits/6.png", compositeBoth: "/Mush/outfits/9.png" },
      { shirt: "/Mush/Shirts/7.png", cap: "/Mush/Caps/7.png", compositeShirt: "/Mush/outfits/7.png", compositeBoth: "/Mush/outfits/8.png" }
    ]
  }
];

export default characters;
