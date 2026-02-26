let solution = (arr_val, arr_unit) => {
    const G = 6.67e-11;

    let [m1, m2, r] = arr_val;
    let [u1, u2, u3] = arr_unit;


    const massConvert = {
        kg: 1,
        g: 1 / 1000,
        mg: 1 / 1e6,
        μg: 1 / 1e9,
        lb: 0.453592
    };

    m1 *= massConvert[u1];
    m2 *= massConvert[u2];


    const distanceConvert = {
        m: 1,
        cm: 1 / 100,
        mm: 1 / 1000,
        μm: 1 / 1e6,
        ft: 0.3048
    };

    r *= distanceConvert[u3];

    return G * m1 * m2 / (r * r);
};