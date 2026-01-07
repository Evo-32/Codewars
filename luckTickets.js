
function luckCheck(ticket) {
    if (ticket === '') return 0;

    if (!/^\d+$/.test(ticket)) { // can't use isNan because it is only for checking if the chr can  be changed tovowle a number
        throw new Error('Invalid ticket');
    }

    let half = Math.floor(ticket.length / 2);

    let firstHalf = ticket.slice(0, half);
    let lastHalf = ticket.slice(ticket.length - half);

    let sumLeft = [...firstHalf].reduce((tot, curr) => tot + Number(curr), 0);
    let sumRight = [...lastHalf].reduce((tot, curr) => tot + Number(curr), 0);

    return sumLeft === sumRight;
}