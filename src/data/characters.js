const characters = [
  {
    name: "Eric",
    profile: "/chuffverse/Eric/ericprofile.jpg",
    base: "/chuffverse/Eric/base.png",
    bg: "#EAC6F0",
    description: "The muscle, the powerhouse and strongest of them all.", // 👈 added bio
    rows: [
      { shirt: "/chuffverse/Eric/Shirts/1.png", cap: "/chuffverse/Eric/Caps/1.png", compositeShirt: "/chuffverse/Eric/outfits/1.png", compositeBoth: "/chuffverse/Eric/outfits/14.png" },
      { shirt: "/chuffverse/Eric/Shirts/2.png", cap: "/chuffverse/Eric/Caps/2.png", compositeShirt: "/chuffverse/Eric/outfits/2.png", compositeBoth: "/chuffverse/Eric/outfits/13.png" },
      { shirt: "/chuffverse/Eric/Shirts/3.png", cap: "/chuffverse/Eric/Caps/3.png", compositeShirt: "/chuffverse/Eric/outfits/3.png", compositeBoth: "/chuffverse/Eric/outfits/12.png" },
      { shirt: "/chuffverse/Eric/Shirts/4.png", cap: "/chuffverse/Eric/Caps/4.png", compositeShirt: "/chuffverse/Eric/outfits/4.png", compositeBoth: "/chuffverse/Eric/outfits/11.png" },
      { shirt: "/chuffverse/Eric/Shirts/5.png", cap: "/chuffverse/Eric/Caps/5.png", compositeShirt: "/chuffverse/Eric/outfits/5.png", compositeBoth: "/chuffverse/Eric/outfits/10.png" },
      { shirt: "/chuffverse/Eric/Shirts/6.png", cap: "/chuffverse/Eric/Caps/6.png", compositeShirt: "/chuffverse/Eric/outfits/6.png", compositeBoth: "/chuffverse/Eric/outfits/9.png" },
      { shirt: "/chuffverse/Eric/Shirts/7.png", cap: "/chuffverse/Eric/Caps/7.png", compositeShirt: "/chuffverse/Eric/outfits/7.png", compositeBoth: "/chuffverse/Eric/outfits/8.png" }
    ]
  },
  {
    name: "Lurk",
    profile: "/chuffverse/Lurk/profile.jpg",
    base: "/chuffverse/Lurk/base.png",
    bg: "#DBDAEA",
     description: "The quiet, weird shadow in the crew and always hiding in the background. until it’s too late.",   // ✅
    rows: [
      { shirt: "/chuffverse/Lurk/Shirts/1.png", cap: "/chuffverse/Lurk/Caps/1.png", compositeShirt: "/chuffverse/Lurk/outfits/1.png", compositeBoth: "/chuffverse/Lurk/outfits/14.png" },
      { shirt: "/chuffverse/Lurk/Shirts/2.png", cap: "/chuffverse/Lurk/Caps/2.png", compositeShirt: "/chuffverse/Lurk/outfits/2.png", compositeBoth: "/chuffverse/Lurk/outfits/13.png" },
      { shirt: "/chuffverse/Lurk/Shirts/3.png", cap: "/chuffverse/Lurk/Caps/3.png", compositeShirt: "/chuffverse/Lurk/outfits/3.png", compositeBoth: "/chuffverse/Lurk/outfits/12.png" },
      { shirt: "/chuffverse/Lurk/Shirts/4.png", cap: "/chuffverse/Lurk/Caps/4.png", compositeShirt: "/chuffverse/Lurk/outfits/4.png", compositeBoth: "/chuffverse/Lurk/outfits/11.png" },
      { shirt: "/chuffverse/Lurk/Shirts/5.png", cap: "/chuffverse/Lurk/Caps/5.png", compositeShirt: "/chuffverse/Lurk/outfits/5.png", compositeBoth: "/chuffverse/Lurk/outfits/10.png" },
      { shirt: "/chuffverse/Lurk/Shirts/6.png", cap: "/chuffverse/Lurk/Caps/6.png", compositeShirt: "/chuffverse/Lurk/outfits/6.png", compositeBoth: "/chuffverse/Lurk/outfits/9.png" },
      { shirt: "/chuffverse/Lurk/Shirts/7.png", cap: "/chuffverse/Lurk/Caps/7.png", compositeShirt: "/chuffverse/Lurk/outfits/7.png", compositeBoth: "/chuffverse/Lurk/outfits/8.png" }
    ]
  },
  {
    name: "Ben",
    profile: "/chuffverse/Ben/profile.jpg",
    base: "/chuffverse/Ben/base.png",
    bg: "#DCC3B3",
     description:"The brains, the mastermind, always ten steps ahead solving puzzles no one else sees.",   // ✅
    rows: [
      { shirt: "/chuffverse/Ben/Shirts/1.png", cap: "/chuffverse/Ben/Caps/1.png", compositeShirt: "/chuffverse/Ben/outfits/1.png", compositeBoth: "/chuffverse/Ben/outfits/14.png" },
      { shirt: "/chuffverse/Ben/Shirts/2.png", cap: "/chuffverse/Ben/Caps/2.png", compositeShirt: "/chuffverse/Ben/outfits/2.png", compositeBoth: "/chuffverse/Ben/outfits/13.png" },
      { shirt: "/chuffverse/Ben/Shirts/3.png", cap: "/chuffverse/Ben/Caps/3.png", compositeShirt: "/chuffverse/Ben/outfits/3.png", compositeBoth: "/chuffverse/Ben/outfits/12.png" },
      { shirt: "/chuffverse/Ben/Shirts/4.png", cap: "/chuffverse/Ben/Caps/4.png", compositeShirt: "/chuffverse/Ben/outfits/4.png", compositeBoth: "/chuffverse/Ben/outfits/11.png" },
      { shirt: "/chuffverse/Ben/Shirts/5.png", cap: "/chuffverse/Ben/Caps/5.png", compositeShirt: "/chuffverse/Ben/outfits/5.png", compositeBoth: "/chuffverse/Ben/outfits/10.png" },
      { shirt: "/chuffverse/Ben/Shirts/6.png", cap: "/chuffverse/Ben/Caps/6.png", compositeShirt: "/chuffverse/Ben/outfits/6.png", compositeBoth: "/chuffverse/Ben/outfits/9.png" },
      { shirt: "/chuffverse/Ben/Shirts/7.png", cap: "/chuffverse/Ben/Caps/7.png", compositeShirt: "/chuffverse/Ben/outfits/7.png", compositeBoth: "/chuffverse/Ben/outfits/8.png" }
    ]
  },
  {
    name: "Blub",
    profile: "/chuffverse/Blub/profile.jpg",
    base: "/chuffverse/Blub/base.png",
    bg: "#E9DEDA",
     description: "The chatterbox, talks way too much. Can’t stop talking, won’t stop talking.. even when nobody’s listening.",   // ✅
    rows: [
      { shirt: "/chuffverse/Blub/Shirts/1.png", cap: "/chuffverse/Blub/Caps/1.png", compositeShirt: "/chuffverse/Blub/outfits/1.png", compositeBoth: "/chuffverse/Blub/outfits/14.png" },
      { shirt: "/chuffverse/Blub/Shirts/2.png", cap: "/chuffverse/Blub/Caps/2.png", compositeShirt: "/chuffverse/Blub/outfits/2.png", compositeBoth: "/chuffverse/Blub/outfits/13.png" },
      { shirt: "/chuffverse/Blub/Shirts/3.png", cap: "/chuffverse/Blub/Caps/3.png", compositeShirt: "/chuffverse/Blub/outfits/3.png", compositeBoth: "/chuffverse/Blub/outfits/12.png" },
      { shirt: "/chuffverse/Blub/Shirts/4.png", cap: "/chuffverse/Blub/Caps/4.png", compositeShirt: "/chuffverse/Blub/outfits/4.png", compositeBoth: "/chuffverse/Blub/outfits/11.png" },
      { shirt: "/chuffverse/Blub/Shirts/5.png", cap: "/chuffverse/Blub/Caps/5.png", compositeShirt: "/chuffverse/Blub/outfits/5.png", compositeBoth: "/chuffverse/Blub/outfits/10.png" },
      { shirt: "/chuffverse/Blub/Shirts/6.png", cap: "/chuffverse/Blub/Caps/6.png", compositeShirt: "/chuffverse/Blub/outfits/6.png", compositeBoth: "/chuffverse/Blub/outfits/9.png" },
      { shirt: "/chuffverse/Blub/Shirts/7.png", cap: "/chuffverse/Blub/Caps/7.png", compositeShirt: "/chuffverse/Blub/outfits/7.png", compositeBoth: "/chuffverse/Blub/outfits/8.png" }
    ]
  },
  {
    name: "Jasper",
    profile: "/chuffverse/Jasper/profile.jpg",
    base: "/chuffverse/Jasper/base.png",
    bg: "#DAD2BB",
     description:"The dumb one, the lovable fool, always messing things up but somehow surviving.",   // ✅
    rows: [
      { shirt: "/chuffverse/Jasper/Shirts/1.png", cap: "/chuffverse/Jasper/Caps/1.png", compositeShirt: "/chuffverse/Jasper/outfits/1.png", compositeBoth: "/chuffverse/Jasper/outfits/14.png" },
      { shirt: "/chuffverse/Jasper/Shirts/2.png", cap: "/chuffverse/Jasper/Caps/2.png", compositeShirt: "/chuffverse/Jasper/outfits/2.png", compositeBoth: "/chuffverse/Jasper/outfits/13.png" },
      { shirt: "/chuffverse/Jasper/Shirts/3.png", cap: "/chuffverse/Jasper/Caps/3.png", compositeShirt: "/chuffverse/Jasper/outfits/3.png", compositeBoth: "/chuffverse/Jasper/outfits/12.png" },
      { shirt: "/chuffverse/Jasper/Shirts/4.png", cap: "/chuffverse/Jasper/Caps/4.png", compositeShirt: "/chuffverse/Jasper/outfits/4.png", compositeBoth: "/chuffverse/Jasper/outfits/11.png" },
      { shirt: "/chuffverse/Jasper/Shirts/5.png", cap: "/chuffverse/Jasper/Caps/5.png", compositeShirt: "/chuffverse/Jasper/outfits/5.png", compositeBoth: "/chuffverse/Jasper/outfits/10.png" },
      { shirt: "/chuffverse/Jasper/Shirts/6.png", cap: "/chuffverse/Jasper/Caps/6.png", compositeShirt: "/chuffverse/Jasper/outfits/6.png", compositeBoth: "/chuffverse/Jasper/outfits/9.png" },
      { shirt: "/chuffverse/Jasper/Shirts/7.png", cap: "/chuffverse/Jasper/Caps/7.png", compositeShirt: "/chuffverse/Jasper/outfits/7.png", compositeBoth: "/chuffverse/Jasper/outfits/8.png" }
    ]
  },
  {
    name: "Max",
    profile: "/chuffverse/Max/profile.jpg",
    base: "/chuffverse/Max/base.png",
    bg: "#E1989F",
     description: "The corny one with lame jokes. always dropping the worst jokes at the worst times.",   // ✅
    rows: [
      { shirt: "/chuffverse/Max/Shirts/1.png", cap: "/chuffverse/Max/Caps/1.png", compositeShirt: "/chuffverse/Max/outfits/1.png", compositeBoth: "/chuffverse/Max/outfits/14.png" },
      { shirt: "/chuffverse/Max/Shirts/2.png", cap: "/chuffverse/Max/Caps/2.png", compositeShirt: "/chuffverse/Max/outfits/2.png", compositeBoth: "/chuffverse/Max/outfits/13.png" },
      { shirt: "/chuffverse/Max/Shirts/3.png", cap: "/chuffverse/Max/Caps/3.png", compositeShirt: "/chuffverse/Max/outfits/3.png", compositeBoth: "/chuffverse/Max/outfits/12.png" },
      { shirt: "/chuffverse/Max/Shirts/4.png", cap: "/chuffverse/Max/Caps/4.png", compositeShirt: "/chuffverse/Max/outfits/4.png", compositeBoth: "/chuffverse/Max/outfits/11.png" },
      { shirt: "/chuffverse/Max/Shirts/5.png", cap: "/chuffverse/Max/Caps/5.png", compositeShirt: "/chuffverse/Max/outfits/5.png", compositeBoth: "/chuffverse/Max/outfits/10.png" },
      { shirt: "/chuffverse/Max/Shirts/6.png", cap: "/chuffverse/Max/Caps/6.png", compositeShirt: "/chuffverse/Max/outfits/6.png", compositeBoth: "/chuffverse/Max/outfits/9.png" },
      { shirt: "/chuffverse/Max/Shirts/7.png", cap: "/chuffverse/Max/Caps/7.png", compositeShirt: "/chuffverse/Max/outfits/7.png", compositeBoth: "/chuffverse/Max/outfits/8.png" }
    ]
  },
  {
    name: "Mush",
    profile: "/chuffverse/Mush/profile.jpg",
    base: "/chuffverse/Mush/base.png",
    bg: "#E7D0B1",
     description: "The crazy wild card nobody can predict. His pure chaos in motion, erratic and a little unhinged.",   // ✅
    rows: [
      { shirt: "/chuffverse/Mush/Shirts/1.png", cap: "/chuffverse/Mush/Caps/1.png", compositeShirt: "/chuffverse/Mush/outfits/1.png", compositeBoth: "/chuffverse/Mush/outfits/14.png" },
      { shirt: "/chuffverse/Mush/Shirts/2.png", cap: "/chuffverse/Mush/Caps/2.png", compositeShirt: "/chuffverse/Mush/outfits/2.png", compositeBoth: "/chuffverse/Mush/outfits/13.png" },
      { shirt: "/chuffverse/Mush/Shirts/3.png", cap: "/chuffverse/Mush/Caps/3.png", compositeShirt: "/chuffverse/Mush/outfits/3.png", compositeBoth: "/chuffverse/Mush/outfits/12.png" },
      { shirt: "/chuffverse/Mush/Shirts/4.png", cap: "/chuffverse/Mush/Caps/4.png", compositeShirt: "/chuffverse/Mush/outfits/4.png", compositeBoth: "/chuffverse/Mush/outfits/11.png" },
      { shirt: "/chuffverse/Mush/Shirts/5.png", cap: "/chuffverse/Mush/Caps/5.png", compositeShirt: "/chuffverse/Mush/outfits/5.png", compositeBoth: "/chuffverse/Mush/outfits/10.png" },
      { shirt: "/chuffverse/Mush/Shirts/6.png", cap: "/chuffverse/Mush/Caps/6.png", compositeShirt: "/chuffverse/Mush/outfits/6.png", compositeBoth: "/chuffverse/Mush/outfits/9.png" },
      { shirt: "/chuffverse/Mush/Shirts/7.png", cap: "/chuffverse/Mush/Caps/7.png", compositeShirt: "/chuffverse/Mush/outfits/7.png", compositeBoth: "/chuffverse/Mush/outfits/8.png" }
    ]
  }
];

export default characters;
