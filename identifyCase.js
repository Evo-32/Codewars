function id(s) {
    let hasHyphen = false;
    let hasUnderscore = false;
    let hasUpper = false;

    for (let i = 0; i < s.length; i++) {
        let chr = s[i];

        if (chr === '-') {
            hasHyphen = true;
            if (i === 0 || i === s.length - 1 || s[i + 1] === '-') {
                return "none"; 
            }
        }

        else if (chr === '_') {
            hasUnderscore = true;
            if (i === 0 || i === s.length - 1 || s[i + 1] === '_') {
                return "none"; 
            }
        }

        else if (chr >= 'A' && chr <= 'Z') {
            hasUpper = true;
        }

        else if (!(chr >= 'a' && chr <= 'z')) {
            return "none";
        }
    }


    if (hasUnderscore && !hasHyphen && !hasUpper) {
        return "snake";
    }


    if (hasHyphen && !hasUnderscore && !hasUpper) {
        return "kebab";
    }


    if (!hasUnderscore && !hasHyphen && hasUpper && s[0] >= 'a' && s[0] <= 'z') {
        return "camel";
    }

    return "none";
}