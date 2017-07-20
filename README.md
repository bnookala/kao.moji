# Kao.moji

Kao.moji is a node module that helps you pick `kaomoji` from 73 [moods](#available-moods). You can [read up on what kaomoji are here!](http://japaneseemoticons.me/the-different-kinds-of-japanese-emoticons/). Throughout this README, you may read mentions of `donger`. A `donger` is a synonym for `kaomoji` and is used to refer to the generated `kaomoji` from this module.

# License
MIT

## Installation

In your shell (ie. bash):

```$ npm install --save kao.moji```

## Usage

In your JavaScript:

```const kao = require('kao.moji');```


## Quick Example

In `yourscript.js`:
```
const kao = require('kao.moji');
const donger = kao.moji.tableflip();

console.log(donger);
```

```$ node yourscript.js```:

```
>>> (ノಠ益ಠ)ノ彡┻━┻
```

## How to call a `kao.moji` mood

Every `mood` ([see below!](#available-moods)) has an associated function that can be called on the exported `moji` object.

#### Picking a random `donger` from a `mood`:

If you wanted a random `donger` from the `flower` mood, you would use the `moji` object in your script like so:

```
const kao = require('kao.moji');

// your other code…
// la la la
// ok let's generate a flower!!

const donger = kao.moji.flower();
console.log(donger);
```

Output:
```
>>> (◕◞౪◟◕✿)
```

#### Getting *every* `donger` from a `mood`:

So maybe you don't want a random `donger` from a particular `mood`, but you'd like to see all your options. Ok! Can do! Simply call your `mood` function with an object, with a single key `all`, setting it to the boolean, `true`:

`kao.moji.hide({all:true});`

This will return an array of every `donger` associated with the `mood` ie:
`['|д･)', '|ω・）', '｜。・）'…]`

Here's a more comprehensive example using the "cat" `mood`:

```
const kao = require('kao.moji`);

// your other code…
// la la la
// ok let's generate some cats!!

const dongers = kao.moji.cat({all:true});
console.log(dongers);
```

Output:
```
[ 'ὃ⍜ὅ',
  'ㅇㅅㅇ',
  'චᆽච',
  'ऴिाी',
  '(ꀄꀾꀄ)',
  'ฅ•ω•ฅ',
  '(ꅈꇅꅈ)',
  '(ꀂǒꀂ)',
  '(ꃪꄳꃪ)',
  '=ටᆼට=',
  'ʘ̥ꀾʘ̥',
  '=ộ⍛ộ=',
  '^ↀᴥↀ^',
  'โ๏∀๏ใ',
  '(ΦωΦ)',
  'ミ๏ｖ๏彡',
  'ि०॰०ॢी',
  '(ฅ\'ω\'ฅ)',
  '(=ↀωↀ=)',
  '=^∇^*=',
  '(⁎˃ᆺ˂)',
  '(ㅇㅅㅇ❀)',
  'ฅ(≚ᄌ≚)',
  '(^･ｪ･^)',
  '§ꊘ⃑٥ꊘ⃐§',
  '(=‘ｘ‘=)',
  '(^-人-^)',
  '(=①ω①=)',
  '(=ＴェＴ=)',
  '(=ｘェｘ=)' ]
```

## Available `moods`:

You can also generate this list by calling `kao.moji.available()`

* `angry`
* `mad` - Same as `angry`
* `bear`
* `beg`
* `blush`
* `bow`
* `bunny`
* `rabbit` - Same as `rabbit`
* `bye`
* `hi` - Same as `bye`
* `hello` - Same as `hi`
* `cat`
* `confused`
* `crying`
* `cute`
* `kawaii` - Same as `cute`
* `dancing`
* `depressed`
* `determined`
* `devil`
* `disappointed`
* `eating`
* `drinking` - Same as `eating`
* `evil`
* `excited`
* `fall`
* `feminine`
* `flower`
* `funny`
* `glasses`
* `sunglasses` - Same as `glasses`
* `grin`
* `gross`
* `happy`
* `heart`
* `helpless`
* `hide`
* `hit`
* `hug`
* `hurry`
* `kiss`
* `laughing`
* `lennyface`
* `love`
* `magic`
* `middlefinger`
* `monkey`
* `music`
* `nervous`
* `peacesign`
* `poop`
* `roger`
* `roll`
* `running`
* `sad`
* `saliva`
* `salute`
* `scared`
* `shake`
* `sheep`
* `shocked`
* `shrug`
* `shy`
* `embarrassed` - Same as `shy`
* `sleep`
* `smiling`
* `smug`
* `sparkles`
* `stars`
* `spin`
* `sulk`
* `surprised`
* `sweat`
* `tableflip`
* `thatsit`
* `thumbsup`
* `tired`
* `trymybest`
* `unicode`
* `vomit`
* `weird`
* `wink`

### Using a `mood`

See [how to call a `kao.moji` mood](#how-to-call-a-kaomoji-mood)!

## Miscellania

Every `mood` name is also a property on the `kao` module. ie `kao.sweat` or `kao.wink`.
This may or not be useful to you. I'm still deciding on if it's needed!

## Thanks

Many thanks to Tsutomu Narushima and their website, [jemoticons.com](http://www.jemoticons.com/), for a comprehensive list of kaomoji. You can follow him on twitter [here](https://twitter.com/JapanEmoticons).