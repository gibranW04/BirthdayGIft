export const recipientName = "Octaviya Irma Afriyani";
export const senderName = "Gibran Wicaksono";

export const birthdayData = {
    recipientName,
    senderName,
    game: {
        title: "A Little Game",
        subtitle: "Collect 5 flowers for a special letter ♡",
        almostThere: "Almost there... ♡",
        targetCount: 5,
    },
    envelope: {
        title: "A Letter For You",
        subtitle: "Something special is waiting inside.",
        buttonLabel: "Click to open",
    },
    hero: {
        title: "Happy Birthday",
        subtitle: "To Someone Special",
        scrollLabel: "Scroll to explore ↓",
    },
    personalMessage: {
        title: "Today is about you.",
        lines: [
            "Happy Birthday, Octaviya Irma Afriyani! 🎉🎂🎁",
            "it's a first time for me to make a birthday surprise for you, I hope you like it.",
        ],
    },
    letter: {
        title: "A Letter For You",
        paragraphs: [
            "Ini loh kado yang gw maksud itu, ga begitu berarti banget si menurut gw, sekedar surat random aja kaya orang jadul, at least sedikit berbeda lah ya😝",
            "Makasih ya ta atas segala hal yang udah lu lakuin buat gw, makasih juga udah memaafkan seetiap kesalahan gw dan sabar ngadepin gw yang suka kesel ngambek gajelas, maaf ya", 
            "Gw harap lu bisa merasakan kebahagiaan yang setiap hari datang, dan semoga semua impian lu bisa terwujud.",
            "Itu aja kali ya, paling juga ga dibaca semua sama lu",
            "Last but not least, Wish you all the best.",
        ],
        signature: `${senderName}`,
    },
    music: {
        title: "Your Favorite Song",
        subtitle: "galau semua buset, satu lagu NDX gw masukin biar ada romantisnya dikit😒",
        tracks: [
            {
                id: "tresno-tekan-mati",
                trackName: "Tresno Tekan Mati",
                artist: "NDX AKA",
                track: "/assets/music/tresno tekan mati ndx.mp3",
                cover: "/assets/images/centil1.jpeg",
            },
            {
                id: "aku-ikhlas",
                trackName: "Aku Ikhlas",
                artist: "Aftershine",
                track: "/assets/music/Aftershine - Aku Ikhlas.mp3",
                cover: "/assets/images/centilbgt.jpeg",
            },
            {
                id: "kalah",
                trackName: "Kalah",
                artist: "Aftershine ft. Restianade",
                track: "/assets/music/Aftershine ft. Restianade - Kalah.mp3",
                cover: "/assets/images/us.jpeg",
            },
        ],
    },
    memories: {
        title: "Your Memories",
        subtitle: "Little Moments",
        photos: [
            {
                src: "/assets/images/centil1.jpeg",
                caption: "Aesthetic Girl",
                tag: "That one day",
                rotation: -3,
            },
            {
                src: "/assets/images/centilbgt.jpeg",
                caption: "Buddhiee Girl",
                tag: "Still one of my favorites",
                rotation: 2,
            },
            {
                src: "/assets/images/unyu.jpeg",
                caption: "Centil Girl",
                tag: "Another beautiful moment",
                rotation: 1,
            },
            {
                src: "/assets/images/Ustazah.jpeg",
                caption: "MashaAllah",
                tag: "Inspirational moment",
                rotation: 0,
            },
            {
                src: "/assets/images/wlee.jpeg",
                caption: "Beauty Girl",
                tag: "Another centil moment",
                rotation: 2,
            },
            {
                src: "/assets/images/wleelagi.jpeg",
                caption: "Strong Girl",
                tag: "Kiw Kiw",
                rotation: 2,
            },
            {
                src: "/assets/images/wow.jpeg",
                caption: "Aesthetic Girl",
                tag: "That one",
                rotation: -3,
            },
            {
                src: "/assets/images/yey.jpeg",
                caption: "Omaga Girl",
                tag: "OMG",
                rotation: -3,
            },
            {
                src: "/assets/images/sumpahcakep.jpeg",
                caption: "😯😍",
                tag: "Walaweh",
                rotation: -3,
            }
        ],
    },
    surprise: {
        title: "One More Thing...",
        subtitle: "Click the gift box to reveal a little message",
        revealText: "Happy Birthday ... 🎉🎂🎁",
    },
    final: {
        title: "Happy Birthday",
        message: "May this year bring you more reasons to smile. Keep being you.",
        closing: `With love,\n${senderName}`,
        replayLabel: "Replay Experience",
        qr: {
            heading: "Scan to Open This Gift",
            caption: "Point your phone camera to open this experience on your own screen",
            image: "/assets/decorations/qr-code.png",
            link: "https://hbd-octaviya.vercel.app/",
            alt: "QR code heart-shaped link to birthday gift",
        },
    },
};
