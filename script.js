// Riley Oliver Poetry Collection - Enhanced Interactive Application
class PoetryApp {
    constructor() {
        this.poems = this.getPoemsData();
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.particles = [];
        this.init();
    }

    // Poems data embedded in the application
    getPoemsData() {
        return {
            "darkness": {
                title: "Darkness",
                author: "Riley Oliver",
                genre: ["sad", "angry", "nostalgic", "personalFavourites"],
                readTime: "6 min read",
                excerpt: "as darkness consumes us each and every one\nwe feel distant and empty, nothing seems fun\nthink back to childhood, playing in the sun...",
                content: `as darkness consumes us each and every one  
we feel distant and empty, nothing seems fun  
think back to childhood, playing in the sun  
with no worries or cares about this or that  
no feeling compares to the feeling of that  

the day, the moment, the second you feel down  
and the next thing you know, your mind shuts down  
feel drained and tired all the time  
looking everywhere for a better high  

those highs turn to lows and those lows subside  
but they always come running back into your life  
you don't see it yet, you won't, you can't  
but you know it's there, growing like a plant  

a plant that's dying slowly, no water or sun  
no joy  
no fun  
a weight on your shoulders feels like a ton  
can't face the problems, so you just run  

run faster and further just to escape  
doing anything at all to relive those days  
feel like you fall, you have nothing to say  
speechless mouth, mind racing fast  
hoping this feeling won't last  

hoping it will go — fuck the past  
fuck the past  
fuck the past  

think of future, brighter days  
'think of good stuff' is what they say  
so in my bed, on my phone I lay  
writing this with nothing but pain  

a void of darkness never to end  
an enemy — pure evil, but your best friend  
drugs and drinks soothe the pain  
till you sober up and feel it again  

you feel nothing but hurt, pain so great  
so great it ends you, puts you in this place  
this place with no hope, no light  
not a helping hand or mate in sight  

just you and your demons — you know you can't fight  
the walls in your mind start to close in tight  
and the demons and worries, they start to bite  
you can see the pain in my eyes  
or is it just 'cause I'm high?  

feed off your ego and pain that you keep  
you've tried and tried, but you can't release  
the pain, the hurt, the locked up peace  
you see a door and it looks like a way out  
then you realise it's not, so you scream and shout  

resort to anger and pain on others  
because you couldn't feel that love from your mother  
it's bad you couldn't see her making you dinner  
I'm glad she couldn't see me turn to a sinner  

am I mad at her? I'm not sure  
the times she left me crying on the floor  
the times she made me feel like shit  
the times she made me throw a fit  

the times I was young and couldn't understand  
that she was drunk and drugged, yet she still held my hand  
she promised me she loved me, but was she even sober  
she promised she'd change, but was never closer  

so I learnt to survive with a heart growing colder  
now I look in the mirror and see her over my shoulder  
a pain in my heart, heavy like a boulder  
and I still stand here like a fallen soldier  

heart broke and woeful, like the pain she once felt  
then I realise what I'm saying and my heart begins to melt  
I see why now she did all of this shit  
she was just like me — and that was it  

my brain, it clicked, I thought all wrong  
my mum is me and I'm her all along  
a shit childhood turns to drinks and drugs  
turns to hanging around with dickheads and thugs  

my life isn't bad and could be worse  
but it's still a pain that greatly hurts  
cuts deep at the core like a blade so sharp  
just open the door, let me out of this dark  

my mind now empty and free again  
but give it an hour — fuck that, give it ten`
            },
            "alone": {
                title: "Alone",
                author: "Riley Oliver",
                genre: ["sad", "angry", "motivational"],
                readTime: "8 min read",
                excerpt: "This is nothing but real\nnothing but hurt\nunderstand how i feel\njust to kick me in the dirt...",
                content: `this is nothing but real  
nothing but hurt  
understand how I feel  
just to kick me in the dirt  
nothing but facts that I spit on this page  
nothing but anger filled with rage  
embarrassment, but I turned it to greatness  
hoping one day I'll be famous  
hoping one day I can help my dad  
'cause he always there, the only real person I had  
my dad, my dad, I love him so much  
would lend me money even when times were tough  
he's proper funny, I don't see him enough  
such a great guy, and I see that now  
I'll love him till I die and that's facts from my mouth  

my mum though, she wasn't really there  
a mum but not a mother, she'd zone out and stare  
she loved drugs and clubs and roadmen and thugs  
all this shit, but not her son
and I know it hurt her, but it hurt me more  
she'd make me sleep on the kitchen floor  
I mean I knew she loved me, but why'd she love drugs more  
and that's a hole in my heart that will never fill  
a hole so empty it doesn't feel real  
but it scarred over time, now my heart's made of steel  

don't give a fuck about no one and that shit's too real  
I'll show you respect and I'll be polite  
I'll give you myself, but when you bark I bite  
that's when it stops in the middle of the night  
eyes are dry and feelings are too  
you're sat by yourself, which is nothing new  
but this time you realise it is just you  

just you and yourself  
your shitty mental health  
your life and past  
that changed so fast  
your heart in parts  
'cause you wanted it to last  
but nothing's forever  
not you, not me  
as light as a feather  
till you realise you're weak  

then you think nah, fuck it all
start acting out, prepare to fall
throwing punches but you know the truth
you're not that tough, just lost your youth

so you slow down, try a new way
being kind, polite each day
for a while it seems to pay
but good vibes never seem to stay

then the ones you trusted most
turn their backs, become your ghost
whisper lies behind your name
look you dead in eyes, pretend no shame

they say they care, but it's a lie
you trusted them, now wonder why
you feel small, like you've been played
hurt by love that never stayed  

but it's calm, you know everything's alright  
and here you are again in the middle of the night  
where's the light, let me switch it back  
look in the mirror and your face starts to crack  
your eyes grow fluid  
and your smile begins to fade  
and you sit opposite this mirror feeling brave  

say fuck everyone, they don't matter no more  
it's me, myself, and all of my thoughts  
'cause that can take me places that those pricks can't  
and that's why I sit here with no one in my arms  
but fuck being a bitch  
gotta harden up a bit  
'cause your life is shit  
but it's not worth a fit  
it's not worth death or any more than a sigh  
feel alone in the darkness of the night  

by yourself from the start to the end  
got people to help and make you feel alright again 
but your gonna have shit come your way
the shit that turned you to what you are today  
and what you are today  
is something great`
            },
            "after-the-storm": {
                title: "After the Storm",
                author: "Riley Oliver",
                genre: ["peaceful"],
                readTime: "3 min read",
                excerpt: "i've shouted at skies and cursed the rain\nwalked through lightning just to feel the pain...",
                content: `i've shouted at skies and cursed the rain  
walked through lightning just to feel the pain  
but when the storm passed, and the air got clean  
i saw what the chaos really means

it means you're alive, and you made it through  
all that wreckage couldn't shatter you  
the clouds rolled back, and i saw the blue  
not in the sky — it was inside too  

now i walk slow, breathe with care  
listen to silence and just be there  
not running, not hiding, not chasing highs  
just watching calm in the open skies 
i still feel storms, they come and go
but now i know they won't steal my glow
i can stand tall, even when it's rough
i can face the thunder, i can face the tough
i can sit with the rain, let it wash away
i can feel the pain, but i'll be okay
i can find peace in the darkest night
i can hold on tight, and i'll be alright
i can see the beauty in the mess i made 

life ain't perfect but it's soft today  
and that's enough — i'll be okay`
            },
            "smoking-kills": {
                title: "Smoking Kills",
                author: "Riley Oliver",
                genre: ["sad", "angry", "motivational"],
                readTime: "5 min read",
                excerpt: "Inhale the smoke, just to cope\n climbing the rope, til i loose all hope...",
                content: `Inhale the smoke,
just to cope
climbing the rope,
til I lose all hope
higher and higher
no end in sight
no ones beside me
through the coldest night

A lover not a fighter
but how else can one bear
in a world so vicious
so hollow so unfair
not even my fault
yet still I bleed
screaming in silence
but no one sees the need

So I grab the papers
and a bit of green
roll up a dream
just to feel serene
flick the lighter
close the door
inhale peace
then crave some more

Smoke curls upward
my thoughts sink down
in this cloudy room
I wear my crown
eyes go red
mind turns still
float from pain
against my will

I lay in bed
numb but free
finally rest
finds its way to me
tight lungs tight chest
but this is peace
in this poisoned breath
I find release

They see a mess
but I see a break
a moment of silence
no pill could fake
not chasing a high
just running from low
where shadows are thick
and no light will go

I dont want to be this
but what choice did I get
they handed me pain
and called it a debt
I pay it in smoke
in minutes and hours
I drown out the shame
in this faded power

The world kept spinning
I stood still
trying to feel something
but nothing will
so I fill my lungs
with something warm
in a cold cold world
that breaks my form

I tried to cry
but the tears dried up
I poured my soul
into this bitter cup
sip by sip
I lose my fight
but gain some calm
in the dead of night

Used to dream of better days
now I just dream of haze
the light I chased
was just a flame
burned me up
and left me lame

No therapy
no guiding hand
just shaky feet
and broken plans
so I talk to the ceiling
the walls the smoke
tell em all the things
I never spoke

This isnt living
but its not quite death
its pausing life
with every breath
they say its wrong
that I should quit
but they dont feel
this bottomless pit

So I write in ash
on my windowpane
my hopes my fears
my silent pain
the world outside
dont know my fight
they see me high
not the sleepless nights

But here in the clouds
I find my grace
no judgment no noise
just empty space
where my thoughts dont scream
and my chest dont burn
where peace comes fast
but never returns

So pass me the grinder
the paper the flame
lets spark the silence
forget my name
inhale the truth
exhale the lie
pretend Im fine
and wonder why

Im not trying to glorify pain
Im just trying to explain
why I run to the smoke
when it starts to rain
when the thunder of life
wont let me be
I build my shelter
and float out to sea

The rooms still quiet
my eyes half closed
in this fleeting stillness
Ive finally dozed
dont wake me up
unless you care
Im tired of trying
in a world unfair

Just let me drift
let me float awhile
let me forget
this cruel exile
maybe someday
Ill rise and fight
but not tonight
just pass the light`
            },
            "this-aint-just-a-school": {
                title: "This Ain't Just a School",
                author: "Riley Oliver",
                genre: ["hopeful", "motivational"],
                readTime: "5 min read",
                excerpt: "this ain't just a school — it's something more\na place you land when you're kicked out the door...",
                content: `this ain't just a school — it's something more  
a place you land when you're kicked out the door  
not for grades or gold stars or praise  
but 'cause your life took a darker phase  

people say it's full of bad kids and thugs  
kids that sell bits or live off drugs  
but walk through the gates and look again  
you'll see broken hearts trying to mend

see lads with anger, girls who fight  
kids that can't sleep through the night  
not bad people — just misunderstood  
trying to do better, if only they could  

teachers that listen, not just shout  
they ask how you feel — not what you're about  
they've seen the worst, they've seen the tears  
they still show up, year after year  

you walk in with rage built deep in your chest  
but you walk out thinking maybe I can rest  
a smile from staff, just one small chat  
can change how you feel — and that's a fact  

you learn more here than English or math  
you learn who you are, and how not to crash  
you learn how to talk, how to breathe, how to cope  
you learn there's still something called hope  

'cause they don't see you as a problem to solve  
they see a life that's trying to evolve  
a kid with pain, but still with light  
a kid who's learning how to fight right  

I used to hate school, I really did  
I felt like a failure, a dumb little kid  
but here I feel like someone sees me  
not what I've done — but what I can be  

it's still tough, don't get me wrong  
some days feel heavy, some nights too long  
but I've got a chance now, a place to belong  
and for once in my life — I don't feel wrong`
            },
            "shitty-system": {
                title: "Shitty System",
                author: "Riley Oliver",
                genre: ["angry"],
                readTime: "6 min read",
                excerpt: "been through the system seen it all\nfrom broken homes to empty halls\nwhere kids are lost and dreams are sold\nin a world thats cold where hope feels old",
                content: `been through the system seen it all
from broken homes to empty halls
where kids are lost and dreams are sold
in a world thats cold where hope feels old

they sit you down and say whats right
but they dont see the pain the fight
they talk about change about being fair
but they dont feel the weight we bear
the thoughts we drown in bottles and smoke
anything at all just to cope

they say get help but where do we go
when the systems a joke and the trust is low
they move you around like a pawn in a game
and after all that youre never the same
shuffle you here shuffle you there
never ask how you are cos they dont care

theyll call you troubled say you wont cope
but all i needed was a way to hold hope
a way to block out the pain and the lies
a way to stop all the long goodbyes

so i turned to the streets to the drugs and the drink
thought it was freedom but its just a sink
i grew addicted to the highs and lows
lost in a cycle that nobody knows
but deep down i knew it wasnt the way
life meant more than surviving the day

still got spat on still got pushed around
still got told id never be found
i tried everything to clear my head
but the system just laughed said youre misled

they dont see the fights we face each day
they dont see the tears we hide away
they dont see the kids just trying to be free
they dont see the pain buried deep in me

the nights id cry the days id scream
the times i felt worthless unseen
the system is broken a joke so mean
it chews us up and spits us clean

social workers who dont give a damn
therapists stuck to the same old plan
they nod and smile like they understand
but they cant feel the weight in our hands

they say to breathe to count to ten
but when youre drowning its hard to pretend
that everything is fine that youll be okay
when the system fails you every day

as your eyes close and your thoughts fade
you see the truth its all just a charade
nobody cares no one but you
and the system just laughs says what can you do

so you fight through the dark the pain and the lies
just to find one reason to stay alive
to find a way to live a way to be
in a broken world where hope feels like a dream`
            },
            "what-happened": {
                title: "What Happened?",
                author: "Riley Oliver",
                genre: ["nostalgic", "hopeful", "sad"],
                readTime: "5 min read",
                excerpt: "what happened to the days that would last a life\nwhat happened to when everyone was so nice\nwhat happened to the times where guilt was not there...",
                content: `what happened to the days that would last a life  
what happened to when everyone was so nice  
what happened to the times where guilt was not there  
what happened to the times when we swore we wouldn't swear  
what happened to the times where we promised never to smoke  
what happened to the times where we were full of hope  
what happened to the times where we had the sun in our face  
what happened to the times where everything wasn't a race  

took our time nice and slow  
wished every winter we would see snow  
now we wish that our sadness would go  
now we wish for one more line of coke  
now we wish we weren't all evil inside  
now we wish for a better life  

a past that struck like thunder, no light  
a past that cut deeper like a knife  
a past that we wish we could escape and heal  
a past where nothing seemed real  
a past, a past, but what about future  
our hearts in casts 'cause we never had a tutor  
no one to teach us right from wrong  
independent and lonely all in one song  

but now we escape, just light up a bong  
then you feel alright and nothing's wrong  
a good high where your mind seems found  
but really it's lost, and then you've hit the ground  

you realise it's not all about you  
you realise you're not big or bad or rude  
you're just a little boy who's so confused  
a little boy who couldn't handle the truth  

the thing most fucked in this world today  
is how many people that choose to escape  
it's how many people that feel the same way  
they can't live sober, so they throw that life away  

the thing we don't have enough of is altered perspective  
'cause think if you weren't respected  
think if seeing a mother wasn't expected  
abandoned, then found — found but still neglected  

a difference in these words that I lay upon you now  
the fact that people just can't see or understand how  
others may feel when you run your mouth  
others feel like shit 24/7  
they don't need your shit 'cause then they're one step closer to heaven  

suicide is a permanent fixture  
but can people really see what's in that mixture  
there's family, friends, loved ones too  
all of this, yet nothing's new  

you feel down, empty, nothing to give  
you take and take, but it's not your gift  
then you break and you're broke, don't see why you should live  
broken inside is a pain  
so deep it's hard to explain  
so real it hurts, nothing to gain  

you feel entrapped in your own game  
then you realise we're all the same  
all been through stuff we can't regain  
all been through shit again and again  
all been hurt deep and saddened  

so let me ask you again — what really happened?`
            },
            "damage-grown": {
                title: "Damage Grown",
                author: "Riley Oliver",
                genre: ["sad"],
                readTime: "5 min read",
                excerpt: "life hit hard before i knew my name\nno guide no hand just fire and pain\nmatured in wounds not in years\ncarried scars deeper than fears",
                content: `life hit hard before i knew my name  
no guide no hand just fire and pain  
matured in wounds not in years  
carried scars deeper than fears  

days were battles nights were war  
had no choice but to endure more  
childhood lost in broken fights  
shadows swallowed all my nights  

they say time heals but time just flies  
leaving behind what never dies  
damage taught me how to stand  
stronger now by my own hand  

didnt grow up in a perfect place  
learned to hide pain behind my face  
life was rough no easy stage  
maturity earned not from age  

every cut every bruise i show  
is a story only few will know  
not a weakness but my proof  
forged like steel beneath the roof  

friends were few but lessons loud  
rose from ashes far from proud  
wisdom born from hurt and loss  
every scar a heavy cost  

some grow slow some grow fast  
mine was shaped by storms that last  
damage deep but growth sincere  
maturity earned through every tear  

now i walk with steady pace  
marked by life but full of grace  
learned to bend but never break  
a soul rebuilt from every ache  

life is rough its never kind  
but strength is what damage designed  
maturity a path untold  
written in scars not in gold`
            },
            "open-window": {
                title: "Open Window",
                author: "Riley Oliver",
                genre: ["hopeful"],
                readTime: "4 min read",
                excerpt: "i opened the window just to feel the breeze\nand it hit me — healing starts with these...",
                content: `i opened the window just to feel the breeze  
and it hit me — healing starts with these  
not big changes or massive leaps  
but small soft moments your spirit keeps  

a quiet morning, a deeper breath  
a laugh that cuts through fear of death  
a call from a mate who just checks in  
a day you don't need a drink to win  

i used to think i'd never feel whole  
but now i see cracks let light in the soul  
and yeah, i still fall, still feel the weight  
but now i stand up — and that's feeling great  

every dark night ends in day  
and even pain has things to say  
so now when i feel lost or slow  
i open a window — and let it go`
            },
            "ashes-and-light": {
                title: "Ashes and Light",
                author: "Riley Oliver",
                genre: ["hopeful"],
                readTime: "7 min read",
                excerpt: "they told me i'd break, they said i was done\nbut i'm still here — still facing the sun...",
                content: `they told me i'd break, they said i was done  
but i'm still here — still facing the sun  
not every day shines, not every night ends  
but i kept walking, no need to pretend  

there were days i cried till my chest caved in  
called out for help but no one chimed in  
thought about endings, real dark roads  
carried my pain like it was code  

some days i laid there, didn't rise  
stared at ceilings with bloodshot eyes  
shook in my skin, doubted my worth  
asked god why he put me on earth  

but time... it teaches, it doesn't shout  
and pain don't leave, it just rounds out  
now i wear it like armour, soft but tight  
a history written in scars and fight  

i've lost people, some still alive  
seen love turn cold, watched it die  
held hands that swore they'd stay  
only to vanish by the next day  

but i forgave them, had to for me  
you can't heal when your soul ain't free  
anger is poison, revenge a chain  
and i got tired of carrying pain  

i started walking slower, looked around  
saw flowers still grow from broken ground  
heard laughter in places pain once lived  
saw my own heart start to forgive  

it's not perfect — healing's slow  
some days hurt, but i let them go  
some nights feel like the old ones back  
but i breathe and wait for the light to crack  

i'm not fixed, and i'm not whole  
but i'm stitched together, soul by soul  
and i'll keep walking, even if it's slight  
from the ashes i rise — into the light`
            },
            "why": {
                title: "Why",
                author: "Riley Oliver",
                genre: ["sad", "nostalgic"],
                readTime: "6 min read",
                excerpt: "why do i feel like i'm always alone\nlike no one can see the pain that i own...",
                content: `why do i feel like i'm always alone
like no one can see the pain that i own
why do i wake up with tears in my eyes
shouting into a void that never replies

why do i feel like i'm stuck in a cage
like every day's a battle, just a different stage
fake smile fake laugh, just a mask that i wear
pretending i'm fine when i'm really not there
zoning out losing touch with reality
drowning in thoughts that no one can see

why do i feel like i'm stuck in a loop
like every day's the same, just a different group
why do i feel like i'm screaming inside
but no one can hear me, no one can guide
why do i feel like i'm lost in the dark
looking for myself but can't find my old spark

look at my reflection, it's a stranger i see
WHO is this person staring back at me?
he looks so broken, so lost and so sad
no light in his eyes, just a shadow of what he had
feels like i'm drowning in a sea of despair
like no one can see me, or no one cares

so loud but so silent, my mind's a mess
thoughts racing fast, can't get any rest
and even when i try my best
it still turns out an utter mess.`
            },
            "light-leaks-in": {
                title: "Light Leaks In",
                author: "Riley Oliver",
                genre: ["uplifting"],
                readTime: "4 min read",
                excerpt: "i used to think pain was all i'd know\na life of shadows, nowhere to go...",
                content: `i used to think pain was all i'd know  
a life of shadows, nowhere to go  
but one day light cracked through the blind  
and something small sparked in my mind  

i sat with tears, let them fall free  
no longer scared of feeling me  
felt each weight i used to ignore  
till it didn't feel heavy no more  

broke down bad, yeah that's a fact  
but breaking down's how i found my track  
found my breath in the middle of screams  
found a heartbeat underneath dreams  

it's not perfect, it's not clean  
but this is the best i've ever been  
no high, no smoke, no lies to spin  
just raw truth and light leaking in`
            },
            "relapsed": {
                title: "Relapsed",
                author: "Riley Oliver",
                genre: ["sad", "nostalgic", "personalFavourites"],
                readTime: "5 min read",
                excerpt: "I thought I was done, thought I was free\nbut the shadows came creeping back for me...",
                content: `I thought I was done, thought I was free
but the shadows came creeping back for me
my mind was racing, my heart felt tight
I tried to fight it, but I lost that night
I picked up the paper, rolled it up tight
the smoke filled my lungs, it felt so right
but deep down I lost the fight
I thought I was strong, thought I could cope
but the darkness came back, and I lost all hope
I thought I was healed, thought I was whole
but the demons came back, and they took control
I tried to run, tried to escape
but the pain was too much, I couldn't take
I fell back into the same old trap
the drugs, the drink, the endless gap
I thought I was done, thought I was through
but the shadows came back, and they pulled me too
I tried I tried I promise i did
but just one more time i wanted to feel like a kid
I wanted to laugh, wanted to smile
wanted to forget all the pain for a while
but the high was short, and the crash was hard
I felt so lost, felt so scarred
I thought I was strong, thought I could fight
but the darkness came back, and it took my light.`
            },
            "mirrors": {
                title: "Mirrors",
                author: "Riley Oliver",
                genre: ["sad", "nostalgic", "angry"],
                readTime: "6 min read",
                excerpt: "i look in the mirror and don't see me\njust a hollow shell where i used to be...",
                content: `i look in the mirror and don't see me  
just a hollow shell where i used to be  
eyes glazed over like a frozen sea  
memories buried where no one can see  

they told me i'd grow, told me i'd heal  
but never explained how numb would feel  
how pain can hide behind every meal  
how silence cuts sharper than steel  

i laugh but it don't reach my soul  
like filling a cup with a bottomless hole  
chasing love just to feel whole  
but every kiss just takes its toll  

they say "be yourself" — but who is that?  
the kid they hurt or the one who fights back?  
the quiet one curled up in his flat  
or the loud one faking like he's all that  

every version of me screams out loud  
but gets drowned in the noise of the crowd  
a smile so big but i'm not proud  
'cause no one sees the storm in the cloud  

too scared to sleep, too dead to wake  
every breath feels like a mistake  
all these truths i fake and fake  
waiting for something real to break  

i try to be kind, to show some grace  
but i'm always at war with my own face  
never learned how to feel safe  
just learned to run, learned to erase  

erase the boy who used to dream  
replace him with a haunted scream  
erase the light, embrace the night  
'cause the dark don't ask if you're alright`
            },
            "numb": {
                title: "Numb",
                author: "Riley Oliver",
                genre: ["sad", "angry"],
                readTime: "5 min read",
                excerpt: "they ask if i'm okay, i nod and lie\nsmile wide while i'm dead inside...",
                content: `they ask if i'm okay, i nod and lie  
smile wide while i'm dead inside  
can't cry no more, the tears ran dry  
now i just sit and wonder why  

why this weight stays on my chest  
why my heart won't let me rest  
why even when i try my best  
i still feel like such a mess  

wake up, light a smoke, and scroll  
mind on mute, no self-control  
all these thoughts take their toll  
eating away what once was whole  

i drink, i sink, i think too much  
hands shake from things i never touch  
memories hit like a violent punch  
some days i can't even eat lunch  

i fake joy, fake peace, fake strength  
wear masks that stretch at every length  
but deep inside i feel so tense  
like life's just pain behind a fence  

people say "you'll heal, it'll pass"  
but time moves slow, and pain moves fast  
every minute feels like the last  
stuck in a loop that's tied to my past  

i miss the days of being free  
before i lost the younger me  
before this pain became my plea  
before this world stopped hearing me`
            },
            "cycle": {
                title: "Cycle",
                author: "Riley Oliver",
                genre: ["sad", "angry", "motivational", "personalFavourites"],
                readTime: "6 min read",
                excerpt: "it starts with a breath, then turns to a sigh\nthen turns to a thought like \"what if i die?\"...",
                content: `it starts with a breath, then turns to a sigh  
then turns to a thought like "what if i die?"  
not in a note or a tragic goodbye  
just vanish quietly, no need to cry  

one drink becomes five, and now im gone  
drifting in places i dont belong  
around fake love and plastic songs  
in a world that feels so wrong  

numb is normal, peace feels fake  
every smile is a risk i take  
every hug just makes me ache  
like giving and getting for no ones sake  

they told me "be strong," so i play the part  
while silence keeps tearing my world apart  
no outlet for this aching heart  
so i drown in pain like its modern art  

i see my dad when i punch the wall  
see my mum in the way i fall  
see my youth in a bottle small  
and i hate that i still feel it all  

cycle repeats, i try to change  
but pain just shifts and re-arranges  
same me, just different stages  
locked in this fight for ages and ages  

but still i rise, still i stand  
still wipe the blood off of my hands  
still scream into the empty land  
hoping one day theyll understand`
            },
            "stillness": {
                title: "Stillness",
                author: "Riley Oliver",
                genre: ["peaceful"],
                readTime: "3 min read",
                excerpt: "some days i just sit and breathe real slow\nno music no voices just let it go...",
                content: `some days i just sit and breathe real slow  
no music no voices just let it go  
let thoughts run wild till they burn out  
no screaming inside, no need to shout  

it's quiet and real, not numb or fake  
like a gentle pause that the soul can take  
no past creeping in, no future in mind  
just me in the now with nothing to find  

i used to chase peace like it was lost  
but it ain't a prize, it don't got a cost  
it's right here now when i stop the noise  
let go the pain, the shame, the choice  

i don't need a pill or a hit or a thrill  
just stillness and time and space to heal  
cos peace ain't loud and it don't scream  
it's the softest part of a broken dream`
            },
            "when-you-look-at-me": {
                title: "When You Look at Me",
                author: "Riley Oliver",
                genre: ["romantic"],
                readTime: "3 min read",
                excerpt: "when you look at me i feel seen\nnot like a glance but something between...",
                content: `when you look at me i feel seen  
not like a glance but something between  
the kind of look that sees the scars  
and still stays close, not from afar  

i've been loved with lies and empty words  
been fed fake care that always hurts  
but your love's quiet, deep, and true  
like morning light breaking through  

you don't save me — you just stay  
and that's more than words could ever say  
in your arms, the world turns slow  
and for once i don't need to go  

just sit here close, your hand in mine  
a moment still, a sacred sign  
and i'll be yours if you'll be mine`
            },
            "what-love-feels-like": {
                title: "What Love Feels Like",
                author: "Riley Oliver",
                genre: ["romantic"],
                readTime: "3 min read",
                excerpt: "it ain't roses or stars or big displays\nit's little things that brighten my days...",
                content: `it ain't roses or stars or big displays  
it's little things that brighten my days  
a call when i'm low, a hug at night  
the silence that still feels right  

i thought love was wild and loud and loud  
but it's soft and steady, not always proud  
it's late night chats and shared regrets  
it's knowing they never forget  

it's messy and flawed and sometimes hard  
but it don't leave when life gets scarred  
and that kind of love? that's what i need  
not perfect — just real, that's love to me`
            },
            "survivor": {
                title: "Survivor",
                author: "Riley Oliver",
                genre: ["uplifting"],
                readTime: "4 min read",
                excerpt: "i walked through hell with holes in my feet\nno shoes, no guide, just burning streets...",
                content: `i walked through hell with holes in my feet  
no shoes, no guide, just burning streets  
every turn i thought was the end  
but i found new ways to bend  

people said i'd break, i nearly did  
held all my pain like a wounded kid  
but wounds they heal if you let them air  
and scars just prove that you were there  

i've seen nights where death felt near  
but i'm still standing, now it's clear  
that pain made power, scars made skin  
and that's how you know a soul within  

call me broken? nah, i call me bold  
a story written, scarred and told  
a voice that rises when silence wins  
i'm not a victim — i'm a survivor who begins`
            },
            "the-climb": {
                title: "The Climb",
                author: "Riley Oliver",
                genre: ["uplifting"],
                readTime: "2 min read",
                excerpt: "used to sit on rooftops just to breathe\nwatching stars and wondering when i'd leave...",
                content: `used to sit on rooftops just to breathe  
watching stars and wondering when i'd leave  
thought life was something i had to flee  
but turns out, life was waiting on me  

waiting for me to fight back strong  
waiting for me to see i belong  
every time i thought it was done  
i got up and kept holding on  

it's slow sometimes, a brutal game  
but every climb is worth the pain  
no one tells you: growth feels rough  
you gotta break to build enough  

now i smile without pretending  
'cause healing ain't about an ending  
it's every step, the sweat, the tears  
still choosing life after all these years`
            }
        };
    }

    init() {
        this.setupEventListeners();
        this.setupMobileNavigation();
        this.setupModal();
        this.setupSearch();
        this.setupFilters();
        this.loadPoems();
        this.setupIntersectionObserver();
        this.updateGenreCounts();
        this.initParticles();
        this.setupScrollEffects();
        this.setupTypewriterEffect();
    }

    // Initialize particle system
    initParticles() {
        const container = document.getElementById('particles-container');
        if (!container) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 25000);
        };

        // Create initial particles
        for (let i = 0; i < 20; i++) {
            setTimeout(createParticle, i * 500);
        }

        // Continue creating particles
        setInterval(createParticle, 2000);
    }

    // Setup scroll effects
    setupScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrollTop = window.pageYOffset;
            const header = document.querySelector('.header');
            
            // Header background effect
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Parallax effect for hero background
            const heroBackground = document.querySelector('.hero-bg-animation');
            if (heroBackground) {
                const speed = scrollTop * 0.5;
                heroBackground.style.transform = `translateY(${speed}px)`;
            }

            // Update active navigation
            this.updateActiveNavigation();
            
            ticking = false;
        };

        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestScrollUpdate);
    }

    // Setup typewriter effect for hero title
    setupTypewriterEffect() {
        const titleLines = document.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
            
            setTimeout(() => {
                this.typeWriter(line, text, 0, 100);
            }, index * 1000 + 500);
        });
    }

    typeWriter(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => this.typeWriter(element, text, i + 1, speed), speed);
        }
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));

        // Mouse movement effects
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }

    handleMouseMove(e) {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }

        // Parallax effect for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const xOffset = (x - 0.5) * speed * 20;
            const yOffset = (y - 0.5) * speed * 20;
            element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    }

    setupMobileNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.classList.remove('nav-open');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.classList.remove('nav-open');
                }
            });
        }
    }

    setupModal() {
        const modal = document.getElementById('poemModal');
        const modalClose = document.getElementById('modalClose');
        const modalBackdrop = document.querySelector('.modal-backdrop');

        // Close modal events
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeModal();
            });
        }

        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', () => {
                this.closeModal();
            });
        }
    }

    openModal(poemId) {
        const modal = document.getElementById('poemModal');
        const poem = this.poems[poemId];
        
        if (modal && poem) {
            // Update modal content
            const modalTitle = modal.querySelector('.modal-title');
            const modalAuthor = modal.querySelector('.modal-author');
            const modalContent = modal.querySelector('.modal-poem-content');
            const modalGenre = modal.querySelector('.modal-genre');
            const modalReadTime = modal.querySelector('.modal-read-time');

            if (modalTitle) modalTitle.textContent = poem.title;
            if (modalAuthor) modalAuthor.textContent = `By ${poem.author}`;
            if (modalContent) modalContent.textContent = poem.content;
            if (modalGenre) {
                const primaryGenre = poem.genre[0];
                modalGenre.textContent = this.getGenreDisplayName(primaryGenre);
            }
            if (modalReadTime) modalReadTime.textContent = poem.readTime;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Add fade-in animation
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);

            // Add reading progress indicator
            this.setupReadingProgress();
        }
    }

    setupReadingProgress() {
        const modalContent = document.querySelector('.modal-poem-content');
        if (!modalContent) return;

        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
        
        const modal = document.querySelector('.modal-content');
        modal.insertBefore(progressBar, modal.firstChild);

        const updateProgress = () => {
            const scrollTop = modal.scrollTop;
            const scrollHeight = modal.scrollHeight - modal.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            
            const progressBarFill = progressBar.querySelector('.reading-progress-bar');
            progressBarFill.style.width = Math.min(progress, 100) + '%';
        };

        modal.addEventListener('scroll', updateProgress);
    }

    closeModal() {
        const modal = document.getElementById('poemModal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Remove reading progress
                const progressBar = modal.querySelector('.reading-progress');
                if (progressBar) {
                    progressBar.remove();
                }
            }, 400);
        }
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        if (searchInput && searchBtn) {
            // Enhanced search with debouncing
            let searchTimeout;
            
            const performSearch = (query) => {
                this.resetFilterSelection();
                this.performSearch(query);
                if (query.trim()) {
                    document.getElementById('featured').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            };

            searchBtn.addEventListener('click', () => {
                performSearch(searchInput.value);
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch(searchInput.value);
                }
            });

            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    if (e.target.value.length > 2 || e.target.value.length === 0) {
                        this.resetFilterSelection();
                        this.performSearch(e.target.value);
                    }
                }, 300);
            });

            // Search suggestions
            this.setupSearchSuggestions(searchInput);
        }
    }

    setupSearchSuggestions(searchInput) {
        const suggestions = document.createElement('div');
        suggestions.className = 'search-suggestions';
        searchInput.parentNode.appendChild(suggestions);

        const showSuggestions = (query) => {
            if (query.length < 2) {
                suggestions.style.display = 'none';
                return;
            }

            const matches = this.getSearchSuggestions(query);
            if (matches.length === 0) {
                suggestions.style.display = 'none';
                return;
            }

            suggestions.innerHTML = matches.map(match => 
                `<div class="suggestion-item" data-query="${match}">${match}</div>`
            ).join('');
            
            suggestions.style.display = 'block';

            // Add click handlers
            suggestions.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    searchInput.value = item.dataset.query;
                    this.performSearch(item.dataset.query);
                    suggestions.style.display = 'none';
                });
            });
        };

        searchInput.addEventListener('input', (e) => {
            showSuggestions(e.target.value);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.style.display = 'none';
            }
        });
    }

    getSearchSuggestions(query) {
        const suggestions = new Set();
        const lowerQuery = query.toLowerCase();

        Object.values(this.poems).forEach(poem => {
            // Add poem titles
            if (poem.title.toLowerCase().includes(lowerQuery)) {
                suggestions.add(poem.title);
            }

            // Add genres
            poem.genre.forEach(genre => {
                const displayName = this.getGenreDisplayName(genre);
                if (displayName.toLowerCase().includes(lowerQuery)) {
                    suggestions.add(displayName);
                }
            });

            // Add content keywords
            const words = poem.content.toLowerCase().split(/\s+/);
            words.forEach(word => {
                if (word.length > 4 && word.includes(lowerQuery)) {
                    suggestions.add(word);
                }
            });
        });

        return Array.from(suggestions).slice(0, 5);
    }

    resetFilterSelection() {
        this.currentFilter = 'all';
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
    }

    performSearch(query) {
        this.searchQuery = query.toLowerCase().trim();
        this.filterAndDisplayPoems();
    }

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const genre = btn.dataset.filter;
                this.currentFilter = genre;
                this.filterAndDisplayPoems();
                
                // Add ripple effect
                this.createRippleEffect(btn, event);
            });
        });

        const genreCards = document.querySelectorAll('.genre-card');
        genreCards.forEach(card => {
            card.addEventListener('click', () => {
                const genre = card.dataset.genre;
                this.scrollToSection('featured');
                setTimeout(() => {
                    this.resetFilterSelection();
                    this.currentFilter = genre;
                    this.filterAndDisplayPoems();
                    this.updateActiveFilter(genre);
                }, 500);
                
                // Add click animation
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
    }

    createRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    filterAndDisplayPoems() {
        const poemsGrid = document.getElementById('featuredPoems');
        const noResults = document.getElementById('noResults');

        if (!poemsGrid) return;

        // Show loading animation
        this.showLoading();

        // Clear existing poems with fade out
        const existingCards = poemsGrid.querySelectorAll('.poem-card');
        existingCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }, index * 50);
        });

        setTimeout(() => {
            poemsGrid.innerHTML = '';
            const filteredPoems = this.getFilteredPoems();

            if (filteredPoems.length === 0) {
                noResults.style.display = 'block';
                this.hideLoading();
                return;
            }

            noResults.style.display = 'none';

            filteredPoems.forEach((poem, index) => {
                const poemCard = this.createPoemCard(poem);
                poemsGrid.appendChild(poemCard);
                
                // Staggered animation
                setTimeout(() => {
                    poemCard.classList.add('animate-in');
                }, index * 150);
            });

            this.hideLoading();
        }, existingCards.length * 50 + 200);
    }

    getFilteredPoems() {
        const poemEntries = Object.entries(this.poems);

        return poemEntries.filter(([id, poem]) => {
            const genreMatch = this.currentFilter === 'all' || poem.genre.includes(this.currentFilter);
            const searchMatch = !this.searchQuery || 
                poem.title.toLowerCase().includes(this.searchQuery) ||
                poem.author.toLowerCase().includes(this.searchQuery) ||
                poem.content.toLowerCase().includes(this.searchQuery) ||
                poem.genre.some(g => this.getGenreDisplayName(g).toLowerCase().includes(this.searchQuery));

            return genreMatch && searchMatch;
        }).map(([id, poem]) => ({ id, ...poem }));
    }

    createPoemCard(poem) {
        const card = document.createElement('div');
        card.className = `poem-card ${poem.genre.join(' ')}`;
        card.dataset.poem = poem.id;
        
        const primaryGenre = poem.genre[0];
        const genreDisplayName = this.getGenreDisplayName(primaryGenre);
        
        card.innerHTML = `
            <div class="poem-header">
                <h3 class="poem-title">${poem.title}</h3>
                <span class="poem-genre">${genreDisplayName}</span>
            </div>
            <p class="poem-author">By ${poem.author}</p>
            <div class="poem-excerpt">
                <p>${poem.excerpt}</p>
            </div>
            <div class="poem-meta">
                <span class="read-time">${poem.readTime}</span>
                <button class="read-more-btn">Read Full Poem</button>
            </div>
        `;
        
        // Add click event for read more button
        const readMoreBtn = card.querySelector('.read-more-btn');
        readMoreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openModal(poem.id);
        });

        // Add hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
        
        return card;
    }

    getGenreDisplayName(genre) {
        const genreMap = {
            'sad': 'Raw & Real',
            'angry': 'Intense',
            'nostalgic': 'Nostalgic',
            'hopeful': 'Hopeful',
            'motivational': 'Motivational',
            'uplifting': 'Uplifting',
            'peaceful': 'Peaceful',
            'romantic': 'Romantic',
            'personalFavourites': 'Personal Favourites'
        };
        return genreMap[genre] || genre.charAt(0).toUpperCase() + genre.slice(1);
    }

    updateActiveFilter(genre) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === genre) {
                btn.classList.add('active');
            }
        });
    }

    updateGenreCounts() {
        const genreCounts = {};
        
        // Initialize counts
        ['uplifting', 'sad', 'nostalgic', 'motivational', 'peaceful', 'romantic', 'angry', 'hopeful', 'personalFavourites'].forEach(genre => {
            genreCounts[genre] = 0;
        });
        
        // Count poems by genre
        Object.values(this.poems).forEach(poem => {
            poem.genre.forEach(genre => {
                if (genreCounts.hasOwnProperty(genre)) {
                    genreCounts[genre]++;
                }
            });
        });
        
        // Update genre cards with animation
        document.querySelectorAll('.genre-card').forEach(card => {
            const genre = card.dataset.genre;
            const countElement = card.querySelector('.poem-count');
            if (countElement && genreCounts.hasOwnProperty(genre)) {
                const count = genreCounts[genre];
                const newText = `${count} poem${count !== 1 ? 's' : ''}`;
                
                // Animate count change
                countElement.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    countElement.textContent = newText;
                    countElement.style.transform = 'scale(1)';
                }, 150);
            }
        });
    }

    loadPoems() {
        this.filterAndDisplayPoems();
    }

    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            this.scrollToSection(targetId.substring(1));
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            // Smooth scroll with easing
            this.smoothScrollTo(targetPosition, 1000);
        }
    }

    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    handleKeyboardNavigation(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            this.closeModal();
        }
        
        // Quick search with Ctrl/Cmd + K
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }

        // Navigation with arrow keys
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('suggestion-item')) {
                e.preventDefault();
                const suggestions = document.querySelectorAll('.suggestion-item');
                const currentIndex = Array.from(suggestions).indexOf(focusedElement);
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = (currentIndex + 1) % suggestions.length;
                } else {
                    nextIndex = (currentIndex - 1 + suggestions.length) % suggestions.length;
                }
                
                suggestions[nextIndex].focus();
            }
        }
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add staggered animation for grid items
                    if (entry.target.parentElement.classList.contains('genres-grid')) {
                        const siblings = Array.from(entry.target.parentElement.children);
                        const index = siblings.indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, observerOptions);

        // Observe all cards that need animation
        const observeElements = () => {
            document.querySelectorAll('.genre-card:not(.animate-in), .poem-card:not(.animate-in)').forEach(card => {
                observer.observe(card);
            });
        };

        // Initial observation
        setTimeout(observeElements, 100);
        
        // Re-observe when new content is added
        const mutationObserver = new MutationObserver(observeElements);
        const featuredPoems = document.getElementById('featuredPoems');
        if (featuredPoems) {
            mutationObserver.observe(featuredPoems, { childList: true });
        }
    }

    // Utility methods
    showLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = 'flex';
        }
    }

    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 300);
        }
    }

    // Performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new PoetryApp();
    
    // Add entrance animations for page load
    setTimeout(() => {
        const genreCards = document.querySelectorAll('.genre-card');
        genreCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 150);
        });
    }, 800);

    // Add loading screen fade out
    const loadingScreen = document.querySelector('.loading-spinner');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PoetryApp;
}
