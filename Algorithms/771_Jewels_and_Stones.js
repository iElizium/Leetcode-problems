/**
 * https://leetcode.com/problems/jewels-and-stones/description/
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    for (var i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) != -1) {
            count++;
        }
    }
    return count;
};
