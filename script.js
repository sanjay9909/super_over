let toss = Math.ceil(Math.random() * 2);
console.log(toss);
if (toss === 1) {
    document.querySelector('.csk-btn').innerHTML = 'CSK Batting';
} else if (toss === 2) {
    document.querySelector('.csk-btn').innerHTML = 'RCB Batting';
}

let index = 1;
let indx = 7;
let csk_total = 0;
let rcb_total = 0;
const array1 = [];
const array2 = [];
document.querySelector('.csk-btn').addEventListener('click', () => {
    let score = Math.floor(Math.random() * 7);
    if (document.querySelector('.csk-btn').innerHTML == 'CSK Batting' && index <= 6) {
        if (array1.length != 2) {
            if (score === 0) {
                document.querySelector(`#sul-${index}`).innerHTML = 'W';
                array1.push('W');
            } else if (score > 0 && score < 7) {
                document.querySelector(`#sul-${index}`).innerHTML = score;
                csk_total += score;
                document.querySelector('.r-1').innerHTML = csk_total;
            }
        }
        index++;
    } else if (document.querySelector('.csk-btn').innerHTML == 'RCB Batting') {
        if (array2.length != 2) {
            if (score === 0) {
                document.querySelector(`#sul-${indx}`).innerHTML = 'W';
                array2.push('W');
            } else if (score > 0 && score < 7) {
                document.querySelector(`#sul-${indx}`).innerHTML = score;
                    rcb_total += score;
                document.querySelector('.r-2').innerHTML = rcb_total;
            }
        }
        indx++;
    }

    let csk_number = document.querySelector('#sul-6').innerHTML;
    if (csk_number !== '_' || array1.length == 2) {
        document.querySelector('.csk-btn').innerHTML = 'RCB Batting';
    }

    let rcb_number = document.querySelector('#sul-12').innerHTML;
    if (rcb_number !== '_' || array2.length == 2) {
        document.querySelector('.csk-btn').innerHTML = 'CSK Batting';
    }

    if ((array1.length == 2 && array2.length == 2) || (array1.length == 2 && rcb_number !== '_') || (array2.length == 2 && csk_number !== '_')) {
        if (csk_total > rcb_total) {
            document.querySelector('.csk-wins').innerHTML = 'CSK Wins';
        } else if (rcb_total > csk_total) {
            document.querySelector('.rcb-wins').innerHTML = 'RCB Wins';
        } else {
            document.querySelector('.draw').innerHTML = 'Draw Match';
        }
    }
    else if(csk_number!='_' && rcb_number !="_")
    {
        if (csk_total > rcb_total) {
            document.querySelector('.csk-wins').innerHTML = 'CSK Wins';
        } else if (rcb_total > csk_total) {
            document.querySelector('.rcb-wins').innerHTML = 'RCB Wins';
        } else {
            document.querySelector('.draw').innerHTML = 'Draw Match';
        }
    }
    if (index >= 6 && array1.length == 2 && array2.length == 2) {
        document.querySelector('.draw').innerHTML = 'Draw Match';
    }
});

document.querySelector('.rcb-btn').addEventListener('click', () => {
    window.location.reload();
});