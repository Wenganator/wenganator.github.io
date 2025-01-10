// Update bibleData with new verses/passages to be included in the Verse Vault
// Use verse_vault_convert_csv_to_json.py to convert CSV file to JSON format that can be copy-pasted into bibleData below
const bibleData = {
    "Old": {
        "Genesis": [
            {
                "reference": "Genesis 1:1-2",
                "ESV": "In the beginning, God created the heavens and the earth. The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.",
                "KJV": "In the beginning God created the heaven and the earth. <br><br>And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
                "NASB": "In the beginning God created the heavens and the earth. And the earth was a formless and desolate emptiness, and darkness was over the surface of the deep, and the Spirit of God was hovering over the surface of the waters.",
                "NIV": "In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
                "NKJV": "In the beginning God created the heavens and the earth. The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters."
            },
            {
                "reference": "Genesis 1:27",
                "ESV": "So God created man in his own image, in the image of God he created him; male and female he created them.",
                "KJV": "So God created man in his own image, in the image of God created he him; male and female created he them.",
                "NASB": "So God created man in His own image, in the image of God He created him; male and female He created them.",
                "NIV": "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
                "NKJV": "So God created man in His own image; in the image of God He created him; male and female He created them."
            },
            {
                "reference": "Genesis 2:24",
                "ESV": "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.",
                "KJV": "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
                "NASB": "For this reason a man shall leave his father and his mother, and be joined to his wife; and they shall become one flesh.",
                "NIV": "That is why a man leaves his father and mother and is united to his wife, and they become one flesh.",
                "NKJV": "Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh."
            },
            {
                "reference": "Genesis 15:6",
                "ESV": "And he believed the Lord, and he counted it to him as righteousness.",
                "KJV": "And he believed in the Lord; and he counted it to him for righteousness.",
                "NASB": "Then he believed in the Lord; and He credited it to him as righteousness.",
                "NIV": "Abram believed the Lord, and he credited it to him as righteousness.",
                "NKJV": "And he believed in the Lord, and He accounted it to him for righteousness."
            },
            {
                "reference": "Genesis 50:20",
                "ESV": "As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today.",
                "KJV": "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.",
                "NASB": "As for you, you meant evil against me, but God meant it for good in order to bring about this present result, to keep many people alive.",
                "NIV": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
                "NKJV": "But as for you, you meant evil against me; but God meant it for good, in order to bring it about as it is this day, to save many people alive."
            }
        ],
        "Exodus": [
            {
                "reference": "Exodus 3:14",
                "ESV": "God said to Moses, “I am who I am.” And he said, “Say this to the people of Israel: ‘I am has sent me to you.’”",
                "KJV": "And God said unto Moses, I Am That I Am: and he said, Thus shalt thou say unto the children of Israel, I Am hath sent me unto you.",
                "NASB": "And God said to Moses, “I AM WHO I AM”; and He said, “This is what you shall say to the sons of Israel: ‘I AM has sent me to you.’”",
                "NIV": "God said to Moses, “I am who I am. This is what you are to say to the Israelites: ‘I am has sent me to you.’”",
                "NKJV": "And God said to Moses, “I AM WHO I AM.” And He said, “Thus you shall say to the children of Israel, ‘I AM has sent me to you.’ ”"
            }
        ],
        "Leviticus": [
            {
                "reference": "Leviticus 19:18",
                "ESV": "You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the Lord.",
                "KJV": "Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the Lord.",
                "NASB": "You shall not take vengeance, nor hold any grudge against the sons of your people, but you shall love your neighbor as yourself; I am the Lord.",
                "NIV": "“‘Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the Lord.",
                "NKJV": "You shall not take vengeance, nor bear any grudge against the children of your people, but you shall love your neighbor as yourself: I am the Lord."
            }
        ],
        "Numbers": [
            {
                "reference": "Numbers 6:24-26",
                "ESV": "The Lord bless you and keep you; <br>the Lord make his face to shine upon you and be gracious to you; <br>the Lord lift up his countenance upon you and give you peace.",
                "KJV": "The Lord bless thee, and keep thee: <br><br>The Lord make his face shine upon thee, and be gracious unto thee: <br><br>The Lord lift up his countenance upon thee, and give thee peace.",
                "NASB": "The Lord bless you, and keep you; <br><br>The Lord cause His face to shine on you, <br>And be gracious to you; <br><br>The Lord lift up His face to you, <br>And give you peace.’",
                "NIV": "“‘“The Lord bless you <br>and keep you; <br>the Lord make his face shine on you <br>and be gracious to you; <br>the Lord turn his face toward you <br>and give you peace.”’",
                "NKJV": "“The Lord bless you and keep you; <br>The Lord make His face shine upon you, <br>And be gracious to you; <br>The Lord lift up His countenance upon you, <br>And give you peace.” ’"
            }
        ],
        "Deuteronomy": [
            {
                "reference": "Deuteronomy 6:4-5",
                "ESV": "“Hear, O Israel: The Lord our God, the Lord is one. You shall love the Lord your God with all your heart and with all your soul and with all your might.",
                "KJV": "Hear, O Israel: The Lord our God is one Lord: <br><br>And thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might.",
                "NASB": "“Hear, Israel! The Lord is our God, the Lord is one! And you shall love the Lord your God with all your heart and with all your soul and with all your strength.",
                "NIV": "Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your strength.",
                "NKJV": "“Hear, O Israel: The Lord our God, the Lord is one! You shall love the Lord your God with all your heart, with all your soul, and with all your strength."
            },
            {
                "reference": "Deuteronomy 10:12-13",
                "ESV": "“And now, Israel, what does the Lord your God require of you, but to fear the Lord your God, to walk in all his ways, to love him, to serve the Lord your God with all your heart and with all your soul, and to keep the commandments and statutes of the Lord, which I am commanding you today for your good?",
                "KJV": "And now, Israel, what doth the Lord thy God require of thee, but to fear the Lord thy God, to walk in all his ways, and to love him, and to serve the Lord thy God with all thy heart and with all thy soul, <br><br>To keep the commandments of the Lord, and his statutes, which I command thee this day for thy good?",
                "NASB": "“And now, Israel, what does the Lord your God require of you, but to fear the Lord your God, to walk in all His ways and love Him, and to serve the Lord your God with all your heart and with all your soul, and to keep the Lord’s commandments and His statutes which I am commanding you today for your good?",
                "NIV": "And now, Israel, what does the Lord your God ask of you but to fear the Lord your God, to walk in obedience to him, to love him, to serve the Lord your God with all your heart and with all your soul, and to observe the Lord’s commands and decrees that I am giving you today for your own good?",
                "NKJV": "“And now, Israel, what does the Lord your God require of you, but to fear the Lord your God, to walk in all His ways and to love Him, to serve the Lord your God with all your heart and with all your soul, and to keep the commandments of the Lord and His statutes which I command you today for your good?"
            }
        ],
        "Joshua": [
            {
                "reference": "Joshua 1:8-9",
                "ESV": "This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success. Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.”",
                "KJV": "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success. <br><br>Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.",
                "NASB": "This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it; for then you will make your way prosperous, and then you will achieve success. Have I not commanded you? Be strong and courageous! Do not be terrified nor dismayed, for the Lord your God is with you wherever you go.”",
                "NIV": "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful. Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”",
                "NKJV": "This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night, that you may observe to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success. Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.”"
            }
        ],
        "1 Samuel": [
            {
                "reference": "1 Samuel 16:7",
                "ESV": "But the Lord said to Samuel, “Do not look on his appearance or on the height of his stature, because I have rejected him. For the Lord sees not as man sees: man looks on the outward appearance, but the Lord looks on the heart.”",
                "KJV": "But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.",
                "NASB": "But the Lord said to Samuel, “Do not look at his appearance or at the height of his stature, because I have rejected him; for God does not see as man sees, since man looks at the outward appearance, but the Lord looks at the heart.”",
                "NIV": "But the Lord said to Samuel, “Do not consider his appearance or his height, for I have rejected him. The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.”",
                "NKJV": "But the Lord said to Samuel, “Do not look at his appearance or at his physical stature, because I have refused him. For the Lord does not see as man sees; for man looks at the outward appearance, but the Lord looks at the heart.”"
            }
        ],
        "1 Chronicles": [
            {
                "reference": "1 Chronicles 29:10-13",
                "ESV": "Therefore David blessed the Lord in the presence of all the assembly. And David said: “Blessed are you, O Lord, the God of Israel our father, forever and ever. Yours, O Lord, is the greatness and the power and the glory and the victory and the majesty, for all that is in the heavens and in the earth is yours. Yours is the kingdom, O Lord, and you are exalted as head above all. Both riches and honor come from you, and you rule over all. In your hand are power and might, and in your hand it is to make great and to give strength to all. And now we thank you, our God, and praise your glorious name.",
                "KJV": "Wherefore David blessed the Lord before all the congregation: and David said, Blessed be thou, Lord God of Israel our father, for ever and ever. <br><br>Thine, O Lord is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom, O Lord, and thou art exalted as head above all. <br><br>Both riches and honour come of thee, and thou reignest over all; and in thine hand is power and might; and in thine hand it is to make great, and to give strength unto all. <br><br>Now therefore, our God, we thank thee, and praise thy glorious name.",
                "NASB": "So David blessed the Lord in the sight of all the assembly; and David said, “Blessed are You, Lord God of Israel our father, forever and ever. Yours, Lord, is the greatness, the power, the glory, the victory, and the majesty, indeed everything that is in the heavens and on the earth; Yours is the dominion, Lord, and You exalt Yourself as head over all. Both riches and honor come from You, and You rule over all, and in Your hand is power and might; and it lies in Your hand to make great and to strengthen everyone. Now therefore, our God, we thank You, and praise Your glorious name.",
                "NIV": "David praised the Lord in the presence of the whole assembly, saying, <br><br>“Praise be to you, Lord, <br>the God of our father Israel, <br>from everlasting to everlasting. <br>Yours, Lord, is the greatness and the power <br>and the glory and the majesty and the splendor, <br>for everything in heaven and earth is yours. <br>Yours, Lord, is the kingdom; <br>you are exalted as head over all. <br>Wealth and honor come from you; <br>you are the ruler of all things. <br>In your hands are strength and power <br>to exalt and give strength to all. <br>Now, our God, we give you thanks, <br>and praise your glorious name.",
                "NKJV": "Therefore David blessed the Lord before all the assembly; and David said: <br><br>“Blessed are You, Lord God of Israel, our Father, forever and ever. <br>Yours, O Lord, is the greatness, <br>The power and the glory, <br>The victory and the majesty; <br>For all that is in heaven and in earth is Yours; <br>Yours is the kingdom, O Lord, <br>And You are exalted as head over all. <br>Both riches and honor come from You, <br>And You reign over all. <br>In Your hand is power and might; <br>In Your hand it is to make great <br>And to give strength to all. <br><br>“Now therefore, our God, <br>We thank You <br>And praise Your glorious name."
            }
        ],
        "Ezra": [
            {
                "reference": "Ezra 7:10",
                "ESV": "For Ezra had set his heart to study the Law of the Lord, and to do it and to teach his statutes and rules in Israel.",
                "KJV": "For Ezra had prepared his heart to seek the law of the Lord, and to do it, and to teach in Israel statutes and judgments.",
                "NASB": "For Ezra had firmly resolved to study the Law of the Lord and to practice it, and to teach His statutes and ordinances in Israel.",
                "NIV": "For Ezra had devoted himself to the study and observance of the Law of the Lord, and to teaching its decrees and laws in Israel.",
                "NKJV": "For Ezra had prepared his heart to seek the Law of the Lord, and to do it, and to teach statutes and ordinances in Israel."
            }
        ],
        "Job": [
            {
                "reference": "Job 1:21",
                "ESV": "And he said, “Naked I came from my mother's womb, and naked shall I return. The Lord gave, and the Lord has taken away; blessed be the name of the Lord.”",
                "KJV": "And said, Naked came I out of my mother's womb, and naked shall I return thither: the Lord gave, and the Lord hath taken away; blessed be the name of the Lord.",
                "NASB": "He said, <br><br>“Naked I came from my mother’s womb, <br>And naked I shall return there. <br>The Lord gave and the Lord has taken away. <br>Blessed be the name of the Lord.”",
                "NIV": "and said: <br><br>“Naked I came from my mother’s womb, <br>and naked I will depart. <br>The Lord gave and the Lord has taken away; <br>may the name of the Lord be praised.”",
                "NKJV": "And he said: <br><br>“Naked I came from my mother’s womb, <br>And naked shall I return there. <br>The Lord gave, and the Lord has taken away; <br>Blessed be the name of the Lord.”"
            }
        ],
        "Psalms": [
            {
                "reference": "Psalm 1",
                "ESV": "Blessed is the man<br>    who walks not in the counsel of the wicked,<br>nor stands in the way of sinners,<br>    nor sits in the seat of scoffers;<br>but his delight is in the law of the Lord,<br>    and on his law he meditates day and night.<br><br>He is like a tree<br>    planted by streams of water<br>that yields its fruit in its season,<br>    and its leaf does not wither.<br>In all that he does, he prospers.<br>The wicked are not so,<br>    but are like chaff that the wind drives away.<br><br>Therefore the wicked will not stand in the judgment,<br>    nor sinners in the congregation of the righteous;<br>for the Lord knows the way of the righteous,<br>    but the way of the wicked will perish.",
                "KJV": "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.<br><br>But his delight is in the law of the Lord; and in his law doth he meditate day and night.<br><br>And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.<br><br>The ungodly are not so: but are like the chaff which the wind driveth away.<br><br>Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.<br><br>For the Lord knoweth the way of the righteous: but the way of the ungodly shall perish.",
                "NASB": "Blessed is the person who does not walk in the counsel of the wicked,<br>Nor stand in the path of sinners,<br>Nor sit in the seat of scoffers!<br>But his delight is in the Law of the Lord,<br>And on His Law he meditates day and night.<br>He will be like a tree planted by streams of water,<br>Which yields its fruit in its season,<br>And its leaf does not wither;<br>And in whatever he does, he prospers.<br><br>The wicked are not so,<br>But they are like chaff which the wind blows away.<br>Therefore the wicked will not stand in the judgment,<br>Nor sinners in the assembly of the righteous.<br>For the Lord knows the way of the righteous,<br>But the way of the wicked will perish.",
                "NIV": "Blessed is the one<br>    who does not walk in step with the wicked<br>or stand in the way that sinners take<br>    or sit in the company of mockers,<br>but whose delight is in the law of the Lord,<br>    and who meditates on his law day and night.<br>That person is like a tree planted by streams of water,<br>    which yields its fruit in season<br>and whose leaf does not wither—<br>    whatever they do prospers.<br><br>Not so the wicked!<br>    They are like chaff<br>    that the wind blows away.<br>Therefore the wicked will not stand in the judgment,<br>    nor sinners in the assembly of the righteous.<br><br>For the Lord watches over the way of the righteous,<br>    but the way of the wicked leads to destruction.",
                "NKJV": "Blessed is the man<br>Who walks not in the counsel of the ungodly,<br>Nor stands in the path of sinners,<br>Nor sits in the seat of the scornful;<br>But his delight is in the law of the Lord,<br>And in His law he meditates day and night.<br>He shall be like a tree<br>Planted by the rivers of water,<br>That brings forth its fruit in its season,<br>Whose leaf also shall not wither;<br>And whatever he does shall prosper.<br><br>The ungodly are not so,<br>But are like the chaff which the wind drives away.<br>Therefore the ungodly shall not stand in the judgment,<br>Nor sinners in the congregation of the righteous.<br><br>For the Lord knows the way of the righteous,<br>But the way of the ungodly shall perish."
            },
            {
                "reference": "Psalm 8",
                "ESV": "O Lord, our Lord,<br>    how majestic is your name in all the earth!<br>You have set your glory above the heavens.<br>    Out of the mouth of babies and infants,<br>you have established strength because of your foes,<br>    to still the enemy and the avenger.<br><br>When I look at your heavens, the work of your fingers,<br>    the moon and the stars, which you have set in place,<br>what is man that you are mindful of him,<br>    and the son of man that you care for him?<br><br>Yet you have made him a little lower than the heavenly beings<br>    and crowned him with glory and honor.<br>You have given him dominion over the works of your hands;<br>    you have put all things under his feet,<br>all sheep and oxen,<br>    and also the beasts of the field,<br>the birds of the heavens, and the fish of the sea,<br>    whatever passes along the paths of the seas.<br><br>O Lord, our Lord,<br>    how majestic is your name in all the earth!",
                "KJV": "O Lord, our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.<br><br>Out of the mouth of babes and sucklings hast thou ordained strength because of thine enemies, that thou mightest still the enemy and the avenger.<br><br>When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained;<br><br>What is man, that thou art mindful of him? and the son of man, that thou visitest him?<br><br>For thou hast made him a little lower than the angels, and hast crowned him with glory and honour.<br><br>Thou madest him to have dominion over the works of thy hands; thou hast put all things under his feet:<br><br>All sheep and oxen, yea, and the beasts of the field;<br><br>The fowl of the air, and the fish of the sea, and whatsoever passeth through the paths of the seas.<br><br>O Lord our Lord, how excellent is thy name in all the earth!",
                "NASB": "Lord, our Lord,<br>How majestic is Your name in all the earth,<br>You who have displayed Your splendor above the heavens!<br>From the mouths of infants and nursing babies You have established strength<br>Because of Your enemies,<br>To do away with the enemy and the revengeful.<br><br>When I consider Your heavens, the work of Your fingers,<br>The moon and the stars, which You have set in place;<br>What is man that You think of him,<br>And a son of man that You are concerned about him?<br>Yet You have made him a little lower than God,<br>And You crown him with glory and majesty!<br>You have him rule over the works of Your hands;<br>You have put everything under his feet,<br>All sheep and oxen,<br>And also the animals of the field,<br>The birds of the sky, and the fish of the sea,<br>Whatever passes through the paths of the seas.<br><br>Lord, our Lord,<br>How majestic is Your name in all the earth!",
                "NIV": "Lord, our Lord,<br>    how majestic is your name in all the earth!<br><br>You have set your glory<br>    in the heavens.<br>Through the praise of children and infants<br>    you have established a stronghold against your enemies,<br>    to silence the foe and the avenger.<br>When I consider your heavens,<br>    the work of your fingers,<br>the moon and the stars,<br>    which you have set in place,<br>what is mankind that you are mindful of them,<br>    human beings that you care for them?<br><br>You have made them a little lower than the angels<br>    and crowned them with glory and honor.<br>You made them rulers over the works of your hands;<br>    you put everything under their feet:<br>all flocks and herds,<br>    and the animals of the wild,<br>the birds in the sky,<br>    and the fish in the sea,<br>    all that swim the paths of the seas.<br><br>Lord, our Lord,<br>    how majestic is your name in all the earth!",
                "NKJV": "O Lord, our Lord,<br>How excellent is Your name in all the earth,<br>Who have set Your glory above the heavens!<br><br>Out of the mouth of babes and nursing infants<br>You have ordained strength,<br>Because of Your enemies,<br>That You may silence the enemy and the avenger.<br><br>When I consider Your heavens, the work of Your fingers,<br>The moon and the stars, which You have ordained,<br>What is man that You are mindful of him,<br>And the son of man that You visit him?<br>For You have made him a little lower than the angels,<br>And You have crowned him with glory and honor.<br><br>You have made him to have dominion over the works of Your hands;<br>You have put all things under his feet,<br>All sheep and oxen—<br>Even the beasts of the field,<br>The birds of the air,<br>And the fish of the sea<br>That pass through the paths of the seas.<br><br>O Lord, our Lord,<br>How excellent is Your name in all the earth!"
            },
            {
                "reference": "Psalm 16:11",
                "ESV": "You make known to me the path of life;<br>    in your presence there is fullness of joy;<br>    at your right hand are pleasures forevermore.",
                "KJV": "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.",
                "NASB": "You will make known to me the way of life;<br>In Your presence is fullness of joy;<br>In Your right hand there are pleasures forever.",
                "NIV": "You make known to me the path of life;<br>    you will fill me with joy in your presence,<br>    with eternal pleasures at your right hand.",
                "NKJV": "You will show me the path of life;<br>In Your presence is fullness of joy;<br>At Your right hand are pleasures forevermore."
            },
            {
                "reference": "Psalm 19:1-2",
                "ESV": "The heavens declare the glory of God,<br>    and the sky above proclaims his handiwork.<br>Day to day pours out speech,<br>    and night to night reveals knowledge.",
                "KJV": "The heavens declare the glory of God; and the firmament sheweth his handywork.<br><br>Day unto day uttereth speech, and night unto night sheweth knowledge.",
                "NASB": "The heavens tell of the glory of God;<br>And their expanse declares the work of His hands.<br>Day to day pours forth speech,<br>And night to night reveals knowledge.",
                "NIV": "The heavens declare the glory of God;<br>    the skies proclaim the work of his hands.<br>Day after day they pour forth speech;<br>    night after night they reveal knowledge.",
                "NKJV": "The heavens declare the glory of God;<br>And the firmament shows His handiwork.<br>Day unto day utters speech,<br>And night unto night reveals knowledge."
            },
            {
                "reference": "Psalm 19:7",
                "ESV": "The law of the Lord is perfect,<br>    reviving the soul;<br>the testimony of the Lord is sure,<br>    making wise the simple;",
                "KJV": "The law of the Lord is perfect, converting the soul: the testimony of the Lord is sure, making wise the simple.",
                "NASB": "The Law of the Lord is perfect, restoring the soul;<br>The testimony of the Lord is sure, making wise the simple.",
                "NIV": "The law of the Lord is perfect,<br>    refreshing the soul.<br>The statutes of the Lord are trustworthy,<br>    making wise the simple.",
                "NKJV": "The law of the Lord is perfect, converting the soul;<br>The testimony of the Lord is sure, making wise the simple;"
            },
            {
                "reference": "Psalm 20:7",
                "ESV": "Some trust in chariots and some in horses,<br>    but we trust in the name of the Lord our God.",
                "KJV": "Some trust in chariots, and some in horses: but we will remember the name of the Lord our God.",
                "NASB": "Some praise their chariots and some their horses,<br>But we will praise the name of the Lord, our God.",
                "NIV": "Some trust in chariots and some in horses,<br>    but we trust in the name of the Lord our God.",
                "NKJV": "Some trust in chariots, and some in horses;<br>But we will remember the name of the Lord our God."
            },
            {
                "reference": "Psalm 22:1",
                "ESV": "My God, my God, why have you forsaken me?<br>    Why are you so far from saving me, from the words of my groaning?",
                "KJV": "My God, my God, why hast thou forsaken me? why art thou so far from helping me, and from the words of my roaring?",
                "NASB": "My God, my God, why have You forsaken me?<br>Far from my help are the words of my groaning.",
                "NIV": "My God, my God, why have you forsaken me?<br>    Why are you so far from saving me,<br>    so far from my cries of anguish?",
                "NKJV": "My God, My God, why have You forsaken Me?<br>Why are You so far from helping Me,<br>And from the words of My groaning?"
            },
            {
                "reference": "Psalm 23",
                "ESV": "The Lord is my shepherd; I shall not want.<br>    He makes me lie down in green pastures.<br>He leads me beside still waters.<br>    He restores my soul.<br>He leads me in paths of righteousness<br>    for his name's sake.<br><br>Even though I walk through the valley of the shadow of death,<br>    I will fear no evil,<br>for you are with me;<br>    your rod and your staff,<br>    they comfort me.<br><br>You prepare a table before me<br>    in the presence of my enemies;<br>you anoint my head with oil;<br>    my cup overflows.<br>Surely goodness and mercy shall follow me<br>    all the days of my life,<br>and I shall dwell in the house of the Lord<br>    forever.",
                "KJV": "The Lord is my shepherd; I shall not want.<br><br>He maketh me to lie down in green pastures: he leadeth me beside the still waters.<br><br>He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.<br><br>Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.<br><br>Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.<br><br>Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.",
                "NASB": "The Lord is my shepherd,<br>I will not be in need.<br>He lets me lie down in green pastures;<br>He leads me beside quiet waters.<br>He restores my soul;<br>He guides me in the paths of righteousness<br>For the sake of His name.<br><br>Even though I walk through the valley of the shadow of death,<br>I fear no evil, for You are with me;<br>Your rod and Your staff, they comfort me.<br>You prepare a table before me in the presence of my enemies;<br>You have anointed my head with oil;<br>My cup overflows.<br>Certainly goodness and faithfulness will follow me all the days of my life,<br>And my dwelling will be in the house of the Lord forever.",
                "NIV": "The Lord is my shepherd, I lack nothing.<br>    He makes me lie down in green pastures,<br>he leads me beside quiet waters,<br>    he refreshes my soul.<br>He guides me along the right paths<br>    for his name’s sake.<br>Even though I walk<br>    through the darkest valley,<br>I will fear no evil,<br>    for you are with me;<br>your rod and your staff,<br>    they comfort me.<br><br>You prepare a table before me<br>    in the presence of my enemies.<br>You anoint my head with oil;<br>    my cup overflows.<br>Surely your goodness and love will follow me<br>    all the days of my life,<br>and I will dwell in the house of the Lord<br>    forever.",
                "NKJV": "The Lord is my shepherd;<br>I shall not want.<br>He makes me to lie down in green pastures;<br>He leads me beside the still waters.<br>He restores my soul;<br>He leads me in the paths of righteousness<br>For His name’s sake.<br><br>Yea, though I walk through the valley of the shadow of death,<br>I will fear no evil;<br>For You are with me;<br>Your rod and Your staff, they comfort me.<br><br>You prepare a table before me in the presence of my enemies;<br>You anoint my head with oil;<br>My cup runs over.<br>Surely goodness and mercy shall follow me<br>All the days of my life;<br>And I will dwell in the house of the Lord<br>Forever."
            },
            {
                "reference": "Psalm 24:7-10",
                "ESV": "Lift up your heads, O gates!<br>    And be lifted up, O ancient doors,<br>    that the King of glory may come in.<br>Who is this King of glory?<br>    The Lord, strong and mighty,<br>    the Lord, mighty in battle!<br>Lift up your heads, O gates!<br>    And lift them up, O ancient doors,<br>    that the King of glory may come in.<br>Who is this King of glory?<br>    The Lord of hosts,<br>    he is the King of glory! Selah",
                "KJV": "Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in.<br><br>Who is this King of glory? The Lord strong and mighty, the Lord mighty in battle.<br><br>Lift up your heads, O ye gates; even lift them up, ye everlasting doors; and the King of glory shall come in.<br><br>Who is this King of glory? The Lord of hosts, he is the King of glory. Selah.",
                "NASB": "Lift up your heads, you gates,<br>And be lifted up, you ancient doors,<br>That the King of glory may come in!<br>Who is the King of glory?<br>The Lord strong and mighty,<br>The Lord mighty in battle.<br>Lift up your heads, you gates,<br>And lift them up, you ancient doors,<br>That the King of glory may come in!<br>Who is this King of glory?<br>The Lord of armies,<br>He is the King of glory. Selah",
                "NIV": "Lift up your heads, you gates;<br>    be lifted up, you ancient doors,<br>    that the King of glory may come in.<br>Who is this King of glory?<br>    The Lord strong and mighty,<br>    the Lord mighty in battle.<br>Lift up your heads, you gates;<br>    lift them up, you ancient doors,<br>    that the King of glory may come in.<br>Who is he, this King of glory?<br>    The Lord Almighty—<br>    he is the King of glory.",
                "NKJV": "Lift up your heads, O you gates!<br>And be lifted up, you everlasting doors!<br>And the King of glory shall come in.<br>Who is this King of glory?<br>The Lord strong and mighty,<br>The Lord mighty in battle.<br>Lift up your heads, O you gates!<br>Lift up, you everlasting doors!<br>And the King of glory shall come in.<br>Who is this King of glory?<br>The Lord of hosts,<br>He is the King of glory. Selah"
            }
        ]
    },
    "New": {}
};

const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
const testamentSelect = document.getElementById('testamentSelect');
const bookSelect = document.getElementById('bookSelect');
const chapterVerseSelect = document.getElementById('chapterVerseSelect');
const verseContainer = document.getElementById('verseContainer');
const verseTitle = document.getElementById('verseTitle');
const verseText = document.getElementById('verseText');
const translationSelect = document.getElementById('translationSelect');
const bookmarkButton = document.getElementById('bookmarkButton');
const bookmarkedList = document.getElementById('bookmarkedList');
const clearBookmarks = document.getElementById('clearBookmarks');
const randomButton = document.getElementById('randomButton');

function populateBooks(testament) {
    bookSelect.innerHTML = '<option value="">Select Book</option>';
    chapterVerseSelect.innerHTML = '<option value="">Select Chapter/Verse</option>';
    chapterVerseSelect.disabled = true;
    if (bibleData[testament]) {
        Object.keys(bibleData[testament]).forEach(book => {
            const option = document.createElement('option');
            option.value = book;
            option.textContent = book;
            bookSelect.appendChild(option);
        });
        bookSelect.disabled = false;
    } else {
        bookSelect.disabled = true;
    }
}

function populateChapterVerses(testament, book) {
    chapterVerseSelect.innerHTML = '<option value="">Select Chapter/Verse</option>';
    if (bibleData[testament] && bibleData[testament][book]) {
        bibleData[testament][book].forEach((verse, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = verse.reference;
            chapterVerseSelect.appendChild(option);
        });
        chapterVerseSelect.disabled = false;
    } else {
        chapterVerseSelect.disabled = true;
    }
}

function updateBookmarks() {
    bookmarkedList.innerHTML = '';
    bookmarks.forEach(verse => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = verse.split('|')[2]; //Extracts and displays only the Reference part
        li.onclick = () => {
            const [testament, book, reference] = verse.split('|');
            const selectedVerse = bibleData[testament][book].find(v => v.reference === reference);
            verseTitle.textContent = selectedVerse.reference;
            verseText.innerHTML = selectedVerse[translationSelect.value]; // Use innerHTML for formatting instead of textContent
            verseContainer.classList.remove('d-none');
        };
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-sm btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            bookmarks.splice(bookmarks.indexOf(verse), 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            updateBookmarks();
        };
        li.appendChild(removeBtn);
        bookmarkedList.appendChild(li);
    });
}

testamentSelect.addEventListener('change', () => {
    populateBooks(testamentSelect.value);
});

bookSelect.addEventListener('change', () => {
    const testament = testamentSelect.value;
    const book = bookSelect.value;
    populateChapterVerses(testament, book);
});

chapterVerseSelect.addEventListener('change', () => {
    const testament = testamentSelect.value;
    const book = bookSelect.value;
    const verseIndex = chapterVerseSelect.value;
    if (testament && book && verseIndex !== "") {
        const verse = bibleData[testament][book][verseIndex];
        verseTitle.textContent = verse.reference;
        verseText.innerHTML = verse[translationSelect.value]; // Use innerHTML for formatting instead of textContent
        verseContainer.classList.remove('d-none');
    }
});

translationSelect.addEventListener('change', () => {
    const testament = testamentSelect.value;
    const book = bookSelect.value;
    const verseIndex = chapterVerseSelect.value;
    if (testament && book && verseIndex !== "") {
        const verse = bibleData[testament][book][verseIndex];
        verseText.innerHTML = verse[translationSelect.value]; // Use innerHTML for formatting instead of textContent
    }
});

randomButton.addEventListener('click', () => {
    const testaments = Object.keys(bibleData);
    const randomTestament = testaments[Math.floor(Math.random() * testaments.length)];
    const books = Object.keys(bibleData[randomTestament]);
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const verses = bibleData[randomTestament][randomBook];
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    // Update the verse display
    verseTitle.textContent = randomVerse.reference;
    verseText.innerHTML = randomVerse[translationSelect.value]; // Use innerHTML for formatting instead of textContent
    verseContainer.classList.remove('d-none');

    // Update the dropdown states to reflect the random selection
    testamentSelect.value = randomTestament;
    populateBooks(randomTestament);
    bookSelect.value = randomBook;
    populateChapterVerses(randomTestament, randomBook);

    // Find and set the random verse index in the dropdown
    const randomVerseIndex = verses.findIndex(v => v.reference === randomVerse.reference);
    chapterVerseSelect.value = randomVerseIndex;
});

bookmarkButton.addEventListener('click', () => {
    const testament = testamentSelect.value;
    const book = bookSelect.value;
    const verseIndex = chapterVerseSelect.value;
    if (testament && book && verseIndex !== "") {
        const verse = bibleData[testament][book][verseIndex];
        const bookmarkIdentifier = `${testament}|${book}|${verse.reference}`;
        if (!bookmarks.includes(bookmarkIdentifier)) {
            bookmarks.push(bookmarkIdentifier);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            updateBookmarks();
        }
    }
});

clearBookmarks.addEventListener('click', () => {
    bookmarks.length = 0;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarks();
});

updateBookmarks();