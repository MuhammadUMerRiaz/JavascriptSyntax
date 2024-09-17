function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

const sign = ['star', 'moon', 'sun', 'comet'];
const fortune = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
const advice = ['go out and eat', 'not read this', 'play more', 'trust no one'];

const collectiveWisdom = {sign ,fortune ,advice };
let horoscopeGenertor = '';


for(let wisdom in collectiveWisdom) {
    const randomLuck = getRandom(Object.entries(wisdom).length);
    
    switch(wisdom){
        case 'sign':
            horoscopeGenertor = horoscopeGenertor +`Your sign is ${collectiveWisdom[wisdom][randomLuck]}\n`;
            break;
        case 'fortune':
            horoscopeGenertor = horoscopeGenertor +`You are having ${collectiveWisdom[wisdom][randomLuck]}\n`;
            break;
        case 'advice':
            horoscopeGenertor = horoscopeGenertor +`You should: "${collectiveWisdom[wisdom][randomLuck]}"\n`;
            break;
    }

}
console.log(horoscopeGenertor);