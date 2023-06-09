class Card {
    constructor (suit, number) {
        this.suit = suit
        this.number = number
    }
}

class Player {
    constructor (name, hand) {
        this.name = name
        this.hand = hand
    }
    dealCard(card) {
    this.hand.push(card)
    }
}

// help function 0, do not delete
function hasCard(cards, card){
    for(let i = 0; i < cards.length; i++){
        if (cards[i].suit === card.suit && cards[i].number === card.number) return true
    }
    return false
}


function isStraightFlush(player, cc){
    const possibleStraightFlush = []
    const allCards = [...player.hand, ...cc]
    for (let i = 0; i < allCards.length; i++){
        
        const straightFlush = [allCards[i]]
        let j = 1
        while (j < 5){
            if (hasCard(allCards, next = new Card(allCards[i].suit, allCards[i].number - j))){
                straightFlush.push(next)
                j++
            }
            else break
        }
        if (straightFlush.length === 5){
            possibleStraightFlush.push(straightFlush)
        }
    }
    // console.log(possibleStraightFlush.length)
    if (possibleStraightFlush.length){
        const max = possibleStraightFlush[0]
        for (let i = 1; i < possibleStraightFlush.length; i++){
            if (possibleStraightFlush[i][0].number > max) max = possibleStraightFlush[i]
        }
        // console.log(max[0].number)
        return [true, max]
    }
    return false
}

function isFourOfaKind(player, cc){
    const allCards = [...player.hand, ...cc]
    for (let i = 0; i < allCards.length; i++){
        if(allCards.filter(el => el.number === allCards[i].number).length === 4){
            const fourOfaKind = allCards.filter(el => el.number === allCards[i].number)
            fourOfaKind.push(allCards.filter(el => el.number !== allCards[i].number).sort((a, b) => b.number - a.number)[0])
            console.log(fourOfaKind[4].number)
            return [true, fourOfaKind]
        }
    }
    return false
}


const hand = [new Card('spade', 12), new Card('diamond', 12)]
const pl = new Player('wenzhen', hand)

// community card
const c = [new Card('heart', 12), new Card('club', 12), new Card('spade', 9), new Card('spade', 8), new Card('spade', 7)]

console.log(isFourOfaKind(pl, c))
